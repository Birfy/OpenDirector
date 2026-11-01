import { createLayerDocument } from "../src/canvas/layerDocument.ts";
import assert from "node:assert/strict";
import test from "node:test";
import {
  applyCommand,
  createDocument,
  createNode,
} from "../src/canvas/model.ts";
import type { CanvasResource } from "../src/canvas/model.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";
import {
  copySelection,
  pasteFragment,
  resourceFromNode,
  stackSelection,
} from "../src/canvas/operations.ts";
import {
  createHistory,
  recordChange,
  undo,
  redo,
} from "../src/canvas/history.ts";
import { createLocalStage } from "../src/canvas/stageDocument.ts";
import { addTimelineClip } from "../src/canvas/timeline.ts";
import {
  subjectError,
  timelineError,
  toolError,
} from "../src/canvas/dataBoundary.ts";

const image: CanvasResource = {
  id: "retained",
  kind: "image",
  title: "照片",
  src: "data:image/png;base64,aGVsbG8=",
  width: 100,
  height: 200,
};
function domainDocument() {
  const doc = createDocument(),
    picture = createNode(
      "image",
      { x: 0, y: 0 },
      { src: image.src, media: { width: 100, height: 200 } },
    ),
    timeline = createNode("timeline"),
    subject = createNode("subject"),
    tool = createNode("tool"),
    external = createNode("external");
  timeline.data.timeline = addTimelineClip(timeline.data.timeline!, {
    ...image,
    nodeId: picture.id,
  });
  subject.data.subject = {
    description: "参考外观",
    category: "character",
    main: image,
    auxiliaries: [],
  };
  tool.data.tool = {
    kind: "palette",
    fields: [{ name: "colors", values: ["#ffffff", "#000000"] }],
    palette: { name: "黑白" },
    provenance: { paletteId: "p", version: 2 },
  };
  external.data.external = {
    externalType: "director-stage",
    current: { versionId: "18446744073709551615" },
  };
  external.data.localStage = createLocalStage();
  picture.data.layers = createLayerDocument(image.src!, 100, 200);
  picture.data.taskDraft = {
    version: 1,
    tool: "crop",
    sourceNodeIds: [picture.id],
    parameters: { aspect: "1:1" },
  };
  return { ...doc, nodes: [picture, timeline, subject, tool, external] };
}

test("production persistence retains every authored node domain and clones nested settings/assets", () => {
  const doc = domainDocument(),
    result = serializeDocument(doc);
  assert.equal(result.ok, true);
  if (!result.ok) return;
  const parsed = parseDocument(result.value);
  assert.equal(parsed.ok, true);
  if (!parsed.ok) return;
  assert.deepEqual(parsed.value, doc);
  parsed.value.nodes[1]!.data.timeline!.tracks[0]!.clips[0]!.resource.title =
    "changed";
  assert.equal(
    doc.nodes[1]!.data.timeline!.tracks[0]!.clips[0]!.resource.title,
    "照片",
  );
  assert.deepEqual(resourceFromNode(doc.nodes[0]!), {
    id: `node:${doc.nodes[0]!.id}`,
    nodeId: doc.nodes[0]!.id,
    kind: "image",
    title: "图片",
    src: image.src,
    width: 100,
    height: 200,
  });
});

test("subject and timeline boundaries reject wrong roles, duplicates, overlapping audio and fake enum objects", () => {
  assert.match(
    subjectError({ description: "", category: "", auxiliaries: [image] })!,
    /先添加/,
  );
  assert.match(
    subjectError({
      description: "",
      category: "",
      main: image,
      auxiliaries: [image],
    })!,
    /重复/,
  );
  assert.match(
    subjectError({
      description: "",
      category: "",
      main: image,
      auxiliaries: [],
      voice: { id: "v", kind: "audio", title: "voice", durationSeconds: 16 },
    })!,
    /15/,
  );
  const timeline = createNode("timeline").data.timeline!;
  const clip = {
    id: "a",
    resource: {
      id: "sound",
      kind: "audio",
      title: "audio",
      durationSeconds: 5,
    },
    start: 0,
    inPoint: 0,
    outPoint: 5,
    speed: 1,
    volume: 1,
    muted: false,
  };
  assert.match(
    timelineError({
      ...timeline,
      tracks: [
        ...timeline.tracks,
        {
          id: "audio",
          kind: "audio",
          title: "a",
          muted: false,
          clips: [clip, { ...clip, id: "b", start: 4 }],
        },
      ],
    })!,
    /重叠/,
  );
  assert.ok(
    timelineError({
      ...timeline,
      tracks: [{ ...timeline.tracks[0], kind: { toString: () => "visual" } }],
    }),
  );
  assert.ok(toolError({ kind: { toString: () => "camera" }, fields: [] }));
});

test("stack copy includes root members and rewrites identities; removal repairs stack but retains timeline snapshots", () => {
  const original = domainDocument(),
    stacked = stackSelection(
      original,
      original.nodes.slice(0, 2).map((node) => node.id),
    ),
    stack = stacked.nodes.at(-1)!;
  const pasted = pasteFragment(stacked, copySelection(stacked, [stack.id]));
  const copied = pasted.document.nodes.filter((node) =>
      pasted.ids.includes(node.id),
    ),
    newStack = copied.find((node) => node.type === "stack")!;
  assert.equal(newStack.data.stack!.nodeIds.length, 2);
  assert.ok(
    newStack.data.stack!.nodeIds.every((id) => pasted.ids.includes(id)),
  );
  const copiedTimeline = copied.find((node) => node.type === "timeline")!,
    copiedImage = copied.find((node) => node.type === "image")!;
  assert.equal(
    copiedTimeline.data.timeline!.tracks[0]!.clips[0]!.resource.nodeId,
    copiedImage.id,
  );
  const removed = applyCommand(stacked, {
    type: "remove-nodes",
    ids: [original.nodes[0]!.id],
  });
  assert.equal(removed.nodes.at(-1)!.data.stack!.nodeIds.length, 1);
  assert.equal(
    removed.nodes.find((node) => node.type === "timeline")!.data.timeline!
      .tracks[0]!.clips[0]!.resource.src,
    image.src,
  );
  const locked = {
    ...stacked,
    nodes: stacked.nodes.map((node) =>
      node.id === stack.id ? { ...node, locked: true } : node,
    ),
  };
  assert.equal(
    applyCommand(locked, {
      type: "remove-nodes",
      ids: [original.nodes[0]!.id],
    }),
    locked,
  );
});

test("generation frame and tool references remap only copied nodes and clear when disconnected/deleted", () => {
  const image = createNode("image"),
    video = createNode("video");
  video.data.settings = {
    ...createDocument().settings,
    videoMode: "first-last",
    firstFrameNodeId: image.id,
    audioCreationType: "music",
    audioMode: "tts",
    voiceName: "voice",
    imagePreset: "none",
  };
  video.data.taskDraft = {
    version: 1,
    tool: "video-edit",
    sourceNodeIds: [image.id, video.id],
    parameters: { prompt: "edit" },
    selection: { sourceNodeId: image.id, width: 100, height: 100 },
  };
  const document = {
    ...createDocument(),
    nodes: [image, video],
    edges: [{ id: "edge", source: image.id, target: video.id }],
  };
  const roundtrip = parseDocument(document);
  assert.equal(roundtrip.ok, true);
  const pasted = pasteFragment(
    document,
    copySelection(document, [image.id, video.id]),
  );
  const copies = pasted.document.nodes.slice(2);
  assert.equal(copies[1]!.data.settings!.firstFrameNodeId, copies[0]!.id);
  assert.deepEqual(
    copies[1]!.data.taskDraft!.sourceNodeIds,
    copies.map((node) => node.id),
  );
  const isolated = pasteFragment(document, copySelection(document, [video.id]));
  assert.equal(
    isolated.document.nodes.at(-1)!.data.settings!.firstFrameNodeId,
    undefined,
  );
  const disconnected = applyCommand(document, {
    type: "remove-edges",
    ids: ["edge"],
  });
  assert.equal(
    disconnected.nodes[1]!.data.settings!.firstFrameNodeId,
    undefined,
  );
  const removed = applyCommand(document, {
    type: "remove-nodes",
    ids: [image.id],
  });
  assert.equal(removed.nodes[0]!.data.settings!.firstFrameNodeId, undefined);
  assert.deepEqual(removed.nodes[0]!.data.taskDraft!.sourceNodeIds, [video.id]);
  assert.equal(removed.nodes[0]!.data.taskDraft!.selection, undefined);
});

test("new domains participate in no-op detection and one-step undo/redo without serializing assets", () => {
  const document = domainDocument();
  let history = createHistory(document);
  history = recordChange(history, structuredClone(document));
  assert.equal(history.past.length, 0);
  const next = structuredClone(document);
  next.nodes[1]!.data.timeline!.tracks[0]!.clips[0]!.outPoint = 3;
  next.nodes[4]!.data.localStage!.objects[0]!.position.x = 5;
  next.nodes[0]!.data.taskDraft!.parameters.aspect = "16:9";
  next.nodes[0]!.data.layers!.layers[0]!.opacity = 0.4;
  history = recordChange(history, next);
  assert.equal(history.past.length, 1);
  assert.deepEqual(undo(history).present, document);
  assert.deepEqual(redo(undo(history)).present, next);
});

test("temporary URLs nested in retained domains fail persistence explicitly", () => {
  const document = domainDocument();
  document.nodes[1]!.data.timeline!.tracks[0]!.clips[0]!.resource.src =
    "blob:temporary";
  const result = serializeDocument(document);
  assert.equal(result.ok, false);
  if (!result.ok) assert.equal(result.error.code, "transient-media");
});

test("locked live references protect their source and ancestors against deletion or disconnection", () => {
  const group = createNode("group"),
    image = { ...createNode("image"), parentId: group.id },
    video = { ...createNode("video"), locked: true };
  video.data.settings = {
    ...createDocument().settings,
    firstFrameNodeId: image.id,
  };
  const document = {
    ...createDocument(),
    nodes: [group, image, video],
    edges: [{ id: "e", source: image.id, target: video.id }],
  };
  assert.equal(
    applyCommand(document, { type: "remove-nodes", ids: [group.id, image.id] }),
    document,
  );
  assert.equal(
    applyCommand(document, { type: "remove-edges", ids: ["e"] }),
    document,
  );
  const task = {
    ...video,
    data: {
      ...video.data,
      settings: undefined,
      taskDraft: {
        version: 1 as const,
        tool: "crop" as const,
        sourceNodeIds: [image.id],
        parameters: {},
      },
    },
  };
  const taskDoc = { ...document, nodes: [group, image, task] };
  assert.equal(
    applyCommand(taskDoc, { type: "remove-nodes", ids: [image.id] }),
    taskDoc,
  );
});
