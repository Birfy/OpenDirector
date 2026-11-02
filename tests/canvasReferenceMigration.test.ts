import test from "node:test";
import assert from "node:assert/strict";
import {
  createDocument,
  createNode,
  applyCommand,
  type CanvasNodeKind,
} from "../src/canvas/model.ts";
import {
  referenceIssue,
  connectedCreationKinds,
  canSourceReference,
  canStartReference,
  REFERENCE_ISSUE_TEXT,
} from "../src/canvas/connectionPolicy.ts";
import { applyGenerationResults } from "../src/canvas/linkedResults.ts";
import {
  referenceSnapshot,
  referencePresentation,
} from "../src/canvas/referenceEvidence.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";
import {
  createHistory,
  recordChange,
  undo,
  redo,
} from "../src/canvas/history.ts";
import { copySelection, pasteFragment } from "../src/canvas/operations.ts";
import { edgePath } from "../src/canvas/edgeGeometry.ts";

const kinds = [
  "text",
  "image",
  "video",
  "audio",
  "subject",
  "timeline",
] as const;
const allowed: Record<(typeof kinds)[number], readonly CanvasNodeKind[]> = {
  text: ["text", "image", "video"],
  image: ["text", "image", "video", "audio", "subject", "timeline"],
  video: ["text", "video", "subject", "timeline"],
  audio: ["text", "video", "audio", "timeline"],
  subject: ["image", "video", "audio"],
  timeline: [],
};
function ready(kind: (typeof kinds)[number]) {
  return createNode(kind, undefined, {
    src: `data:${kind}/v1`,
    text: kind === "text" ? "saved text" : undefined,
    media: ["video", "audio"].includes(kind)
      ? { durationSeconds: 5 }
      : undefined,
    ...(kind === "subject"
      ? {
          subject: {
            description: "",
            category: "character",
            auxiliaries: [],
            main: {
              id: "main",
              kind: "image",
              title: "main",
              src: "data:image/main",
            },
          },
        }
      : {}),
  });
}

test("all 36 core reference pairs follow the agreed source-to-target matrix", () => {
  for (const sourceKind of kinds)
    for (const targetKind of kinds) {
      const source = ready(sourceKind),
        target = createNode(targetKind);
      const doc = { ...createDocument(), nodes: [source, target] };
      assert.equal(
        referenceIssue(doc, source.id, target.id) === null,
        allowed[sourceKind].includes(targetKind),
        `${sourceKind} → ${targetKind}`,
      );
      assert.deepEqual(
        connectedCreationKinds(doc, source.id, "source", kinds),
        allowed[sourceKind],
      );
    }
});

test("blank, missing and prompt-only nodes cannot create downstream references through any command", () => {
  for (const kind of kinds) {
    const source = createNode(kind, undefined, { prompt: "a prompt" });
    const target = createNode("video");
    const doc = { ...createDocument(), nodes: [source, target] };
    assert.equal(canSourceReference(source), false);
    assert.deepEqual(
      connectedCreationKinds(doc, source.id, "source", kinds),
      [],
    );
    assert.equal(
      applyCommand(doc, {
        type: "add-edge",
        edge: { id: "edge", source: source.id, target: target.id },
      }),
      doc,
    );
  }
  const source = ready("image"),
    target = createNode("video");
  source.data.assetState = "missing";
  assert.equal(
    referenceIssue(
      { nodes: [source, target], edges: [] },
      source.id,
      target.id,
    ),
    "source_empty",
  );
  source.data.assetState = "ready";
  target.data.mediaRole = "asset";
  assert.equal(
    referenceIssue(
      { nodes: [source, target], edges: [] },
      source.id,
      target.id,
    ),
    "target_material",
  );
  target.data.mediaRole = "generation";
  assert.equal(
    referenceIssue(
      { nodes: [source, target], edges: [] },
      source.id,
      target.id,
    ),
    null,
  );
  source.locked = true;
  assert.equal(
    referenceIssue(
      { nodes: [source, target], edges: [] },
      source.id,
      target.id,
    ),
    "locked",
  );
});

test("empty nodes expose reference gestures and type menus while writes still require content", () => {
  for (const kind of kinds) {
    const source = createNode(kind, undefined, {
      prompt: "unsaved generation input",
    });
    const doc = { ...createDocument(), nodes: [source] };
    assert.equal(canStartReference(source), allowed[kind].length > 0);
    assert.equal(canSourceReference(source), false);
    assert.deepEqual(
      connectedCreationKinds(doc, source.id, "source", kinds, {
        allowEmptySource: true,
      }),
      allowed[kind],
    );
    assert.deepEqual(
      connectedCreationKinds(doc, source.id, "source", kinds),
      [],
    );
    for (const downstream of allowed[kind]) {
      const target = createNode(downstream);
      const present = { ...doc, nodes: [source, target] };
      assert.equal(
        referenceIssue(present, source.id, target.id),
        "source_empty",
      );
      assert.equal(
        applyCommand(present, {
          type: "add-edge",
          edge: { id: "empty", source: source.id, target: target.id },
        }),
        present,
      );
    }
    const group = createNode("group");
    group.locked = true;
    source.parentId = group.id;
    assert.deepEqual(
      connectedCreationKinds(
        { ...doc, nodes: [group, source] },
        source.id,
        "source",
        kinds,
        { allowEmptySource: true },
      ),
      [],
    );
  }
  assert.equal(
    REFERENCE_ISSUE_TEXT.source_empty,
    "当前节点内容为空，请先上传或生成节点内容",
  );
});

test("reference status follows adopted result evidence, upstream versions and undo rather than running jobs", () => {
  const source = ready("image"),
    target = createNode("video");
  const edge = { id: "edge", source: source.id, target: target.id };
  const initial = {
    ...createDocument(),
    nodes: [source, target],
    edges: [edge],
  };
  assert.equal(referencePresentation(initial, edge).state, "pending");
  assert.match(referencePresentation(initial, edge).description, /未记录/);
  const origin = {
    documentId: initial.id,
    nodeId: target.id,
    kind: target.type,
    referenceInputs: referenceSnapshot([source]),
  };
  const adopted = applyGenerationResults(initial, origin, [
    {
      kind: "video",
      title: "result",
      src: "data:video/result",
      mimeType: "video/mp4",
    },
  ]).document;
  assert.equal(referencePresentation(adopted, edge).state, "current");
  const changed = applyCommand(adopted, {
    type: "update-node",
    id: source.id,
    patch: { data: { src: "data:image/v2" } },
  });
  assert.equal(referencePresentation(changed, edge).state, "pending");
  assert.match(referencePresentation(changed, edge).description, /历史素材/);
  const history = recordChange(createHistory(adopted), changed);
  assert.equal(
    referencePresentation(undo(history).present, edge).state,
    "current",
  );
  assert.equal(
    referencePresentation(redo(undo(history)).present, edge).state,
    "pending",
  );
  const prompt = applyCommand(adopted, {
    type: "update-node",
    id: target.id,
    patch: { data: { prompt: "different prompt" } },
  });
  assert.equal(referencePresentation(prompt, edge).state, "current");
  const delayed = applyGenerationResults(
    {
      ...changed,
      nodes: changed.nodes.map((n) =>
        n.id === target.id ? { ...n, data: { ...n.data, src: undefined } } : n,
      ),
    },
    origin,
    [
      {
        kind: "video",
        title: "late",
        src: "data:video/late",
        mimeType: "video/mp4",
      },
    ],
  ).document;
  assert.equal(referencePresentation(delayed, edge).state, "pending");
  const serialized = serializeDocument(changed);
  assert.equal(serialized.ok, true);
  if (serialized.ok) {
    const restored = parseDocument(JSON.parse(serialized.value));
    assert.equal(restored.ok, true);
    if (restored.ok)
      assert.equal(
        referencePresentation(restored.value, edge).state,
        "pending",
      );
  }
  const copied = pasteFragment(
    adopted,
    copySelection(adopted, [source.id, target.id]),
  );
  assert.equal(
    referencePresentation(copied.document, copied.document.edges.at(-1)!).state,
    "pending",
  );
  // Copies create new logical sources; the original execution evidence keeps
  // its actual source identities instead of pretending the copies were used.
  assert.deepEqual(
    copied.document.nodes.at(-1)!.data.generationEvidence,
    adopted.nodes.find((node) => node.id === target.id)!.data
      .generationEvidence,
  );
});

test("missing or stale result evidence stays pending and provenance remains a separate relation", () => {
  const source = ready("image"),
    target = ready("video");
  const edge = { id: "edge", source: source.id, target: target.id };
  const doc = { nodes: [source, target] };
  assert.equal(referencePresentation(doc, edge).state, "pending");
  target.data.generationEvidence = {
    output: "other-result",
    references: referenceSnapshot([source]),
  };
  assert.equal(referencePresentation(doc, edge).state, "pending");
  target.data.generationEvidence.output = target.data.src!;
  source.data.assetState = "missing";
  assert.equal(referencePresentation(doc, edge).state, "pending");
  assert.match(referencePresentation(doc, edge).description, /参考缺失/);
  assert.equal(
    referencePresentation(doc, { ...edge, intent: "post_edit_result" }).state,
    "provenance",
  );
  const invalid = {
    ...createDocument(),
    nodes: [
      {
        ...target,
        data: {
          ...target.data,
          generationEvidence: { output: 3, references: {} },
        },
      },
    ],
  };
  assert.equal(parseDocument(invalid).ok, false);
});

test("edge paths choose vertical sides, offset reverse pairs and keep self references visible", () => {
  const source = { x: 0, y: 0, width: 300, height: 150 },
    below = { ...source, y: 400 };
  assert.match(edgePath(source, below), /^M150,150 /);
  assert.notEqual(edgePath(source, below, true), edgePath(source, below));
  assert.match(edgePath(source, source), /^M300,75 C430,75/);
});

test("floating ports activate near edge midpoints, follow locally and cap screen distance", async () => {
  const {
    floatingReferencePort,
    REFERENCE_PORT_MAX_DISTANCE,
    REFERENCE_PORT_MIDPOINT_RADIUS,
    portPoint,
  } = await import("../src/canvas/connectionPorts.ts");
  const bounds = { x: 100, y: 100, width: 300, height: 300 };
  for (const zoom of [0.5, 1, 2, 4]) {
    for (const offset of [2, 6, 12]) {
      const pointer = { x: 400 + offset / zoom, y: 250 };
      assert.deepEqual(
        floatingReferencePort(bounds, pointer, zoom)!.point,
        pointer,
      );
    }
    const capped = floatingReferencePort(
      bounds,
      { x: 400 + 32 / zoom, y: 250 },
      zoom,
    )!;
    assert.ok(
      Math.abs((capped.point.x - 400) * zoom - REFERENCE_PORT_MAX_DISTANCE) <
        1e-9,
    );
    const moved = floatingReferencePort(
      bounds,
      { x: 400 + 12 / zoom, y: 250 + 10 / zoom },
      zoom,
      "right",
    )!;
    assert.equal(moved.point.y, 250 + 10 / zoom);
    assert.equal(floatingReferencePort(bounds, { x: 399, y: 250 }, zoom), null);
    assert.equal(floatingReferencePort(bounds, { x: 250, y: 250 }, zoom), null);
    assert.equal(
      floatingReferencePort(
        bounds,
        { x: 400 + (REFERENCE_PORT_MIDPOINT_RADIUS + 1) / zoom, y: 250 },
        zoom,
        "right",
      ),
      null,
    );
    for (const side of ["top", "right", "bottom", "left"] as const) {
      const midpoint = portPoint(bounds, side);
      const point = {
        x:
          midpoint.x +
          (side === "right" ? 12 : side === "left" ? -12 : 0) / zoom,
        y:
          midpoint.y +
          (side === "bottom" ? 12 : side === "top" ? -12 : 0) / zoom,
      };
      assert.equal(floatingReferencePort(bounds, point, zoom)!.side, side);
    }
    assert.equal(
      floatingReferencePort(
        bounds,
        { x: 400 + 8 / zoom, y: 135 },
        zoom,
        "right",
      ),
      null,
    );
  }
});

test("ports hide near ordinary corners and preview retains the actual grab point", async () => {
  const { floatingReferencePort, referencePreviewPath } =
    await import("../src/canvas/connectionPorts.ts");
  const bounds = { x: 0, y: 0, width: 300, height: 300 };
  assert.equal(
    floatingReferencePort(bounds, { x: 300, y: 0 }, 1, "right"),
    null,
  );
  for (const zoom of [0.08, 0.25])
    assert.equal(
      floatingReferencePort(bounds, { x: 300, y: 0 }, zoom, "right"),
      null,
    );
  const port = floatingReferencePort(bounds, { x: 320, y: 142 }, 1, "right")!;
  assert.equal(port.anchor.y, 142);
  assert.match(
    referencePreviewPath(port.anchor, port.side, { x: 500, y: 80 }),
    /^M300,142 C/,
  );
  const small = floatingReferencePort(
    { x: 0, y: 0, width: 12, height: 12 },
    { x: 12, y: 5 },
    1,
    "right",
  )!;
  assert.equal(small.anchor.y, 6);
});

test("reference port circle, icon and border scale together and cap screen size without distortion", async () => {
  const {
    referencePortMetrics,
    REFERENCE_PORT_ICON_SIZE,
    REFERENCE_PORT_MAX_SIZE,
    REFERENCE_PORT_SIZE,
  } = await import("../src/canvas/connectionPorts.ts");
  for (const zoom of [0.08, 0.25, 0.5, 1, 2, 4, 8]) {
    const metrics = referencePortMetrics(zoom);
    assert.ok(
      Math.abs(
        metrics.diameter * zoom -
          Math.min(REFERENCE_PORT_SIZE * zoom, REFERENCE_PORT_MAX_SIZE),
      ) < 1e-9,
    );
    assert.ok(
      Math.abs(
        metrics.iconSize / metrics.diameter -
          REFERENCE_PORT_ICON_SIZE / REFERENCE_PORT_SIZE,
      ) < 1e-9,
    );
    assert.ok(
      Math.abs(
        metrics.borderWidth / metrics.diameter - 1 / REFERENCE_PORT_SIZE,
      ) < 1e-9,
    );
    assert.ok(metrics.diameter - metrics.borderWidth * 2 > metrics.iconSize);
  }
});
