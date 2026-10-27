import assert from "node:assert/strict";
import test from "node:test";
import { generationDefaults } from "../src/canvas/generationCatalog.ts";
import { createHistory, recordChange, undo } from "../src/canvas/history.ts";
import {
  appendLinkedMediaResults,
  validateNodeActionSource,
  type ResultSource,
} from "../src/canvas/linkedResults.ts";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { createCanvasToolTask } from "../src/canvas/toolCatalog.ts";
import {
  createVideoExtensionDraft,
  gridSplitCells,
  gridSplitImage,
} from "../src/canvas/nodeActionWorkflow.ts";

function fixture() {
  const group = createNode("group", { x: 500, y: 200 });
  const video = {
    ...createNode(
      "video",
      { x: 20, y: 40 },
      {
        src: "data:video/mp4;base64,b3JpZ2luYWw=",
        title: "海边",
        prompt: "原来的首尾帧提示词",
        settings: {
          ...generationDefaults("video"),
          model: "用户的视频模型",
          modelConfigId: "video-config",
          aspectRatio: "9:16",
          resolution: "1080P",
          videoMode: "first-last",
          durationSeconds: 12,
          count: 3,
          firstFrameNodeId: "old-first-frame",
          lastFrameNodeId: "old-last-frame",
        },
      },
    ),
    parentId: group.id,
  };
  const document = { ...createDocument(), nodes: [group, video] };
  const frozen: Readonly<ResultSource> = Object.freeze({
    documentId: document.id,
    nodeId: video.id,
    kind: video.type,
    src: video.data.src,
  });
  return { group, video, document, frozen };
}

test("confirming a local image operation commits its latest source draft and pixels in one undo step", () => {
  const source = createNode(
    "image",
    { x: 0, y: 0 },
    { src: "data:image/png;base64,c291cmNl" },
  );
  const document = { ...createDocument(), nodes: [source] };
  const origin: ResultSource = {
    documentId: document.id,
    nodeId: source.id,
    kind: "image",
    src: source.data.src,
  };
  const draft = createCanvasToolTask("annotation", [source.id], {
    annotationDocument: "latest-completed-stroke",
  });
  const output = {
    kind: "image" as const,
    src: "data:image/png;base64,b3V0cHV0",
    mimeType: "image/png",
    title: "标注",
  };
  const result = appendLinkedMediaResults(document, origin, [output], draft);
  assert.equal(result.error, undefined);
  assert.equal(result.document.nodes.length, 2);
  assert.deepEqual(result.document.nodes[0]!.data.taskDraft, draft);
  assert.equal(result.document.nodes[0]!.data.src, source.data.src);
  assert.deepEqual(
    undo(recordChange(createHistory(document), result.document)).present,
    document,
  );
  assert.ok(
    appendLinkedMediaResults(document, origin, [output], {
      ...draft,
      sourceNodeIds: ["another-source"],
    }).error,
  );
  draft.parameters.annotationDocument = "changed-after-commit";
  assert.equal(
    result.document.nodes[0]!.data.taskDraft?.parameters.annotationDocument,
    "latest-completed-stroke",
  );
});

test("extension creates a separate empty draft with one source reference and can undo atomically", () => {
  const { document, video, frozen } = fixture();
  const result = createVideoExtensionDraft(document, frozen);
  assert.equal(result.error, undefined);
  assert.equal(result.ids.length, 1);
  assert.equal(result.document.nodes.length, document.nodes.length + 1);
  assert.equal(result.document.nodes[1], video);
  assert.equal(document.edges.length, 0);
  const draft = result.document.nodes.find(
    (node) => node.id === result.ids[0],
  )!;
  assert.equal(draft.type, "video");
  assert.equal(draft.data.src, undefined);
  assert.equal(draft.data.mediaRole, "generation");
  assert.equal(draft.parentId, undefined);
  assert.deepEqual(draft.position, { x: 520 + video.width + 80, y: 240 });
  assert.equal(draft.data.settings?.modelConfigId, "video-config");
  assert.equal(draft.data.settings?.resolution, "1080P");
  assert.equal(draft.data.settings?.aspectRatio, "9:16");
  assert.equal(draft.data.settings?.durationSeconds, 5);
  assert.equal(draft.data.settings?.count, 1);
  assert.equal(draft.data.settings?.videoMode, "reference");
  assert.equal(draft.data.settings?.firstFrameNodeId, undefined);
  assert.equal(draft.data.settings?.lastFrameNodeId, undefined);
  assert.match(draft.data.prompt, /延长 5 秒/);
  assert.equal(draft.data.settings?.prompt, draft.data.prompt);
  assert.deepEqual(
    result.document.edges.map(({ source, target, intent }) => ({
      source,
      target,
      intent,
    })),
    [{ source: video.id, target: draft.id, intent: "generation_input" }],
  );
  assert.deepEqual(
    undo(recordChange(createHistory(document), result.document)).present,
    document,
  );
});

test("extension avoids occupied grouped content by moving right and preserves the source", () => {
  const { group, video, document, frozen } = fixture();
  const obstacle = {
    ...createNode("image", {
      x: video.position.x + video.width + 80,
      y: video.position.y,
    }),
    parentId: group.id,
  };
  const withObstacle = { ...document, nodes: [...document.nodes, obstacle] };
  const first = createVideoExtensionDraft(withObstacle, frozen);
  const firstDraft = first.document.nodes.at(-1)!;
  assert.equal(
    firstDraft.position.x,
    group.position.x + obstacle.position.x + obstacle.width + 80,
  );
  assert.equal(firstDraft.position.y, 240);
  const second = createVideoExtensionDraft(first.document, frozen);
  const secondDraft = second.document.nodes.at(-1)!;
  assert.equal(
    secondDraft.position.x,
    firstDraft.position.x + firstDraft.width + 80,
  );
  assert.equal(secondDraft.position.y, firstDraft.position.y);
  assert.deepEqual(second.document.nodes.slice(0, 3), withObstacle.nodes);
});

test("frozen action sessions reject switched projects, changed media, missing nodes and inherited locks", () => {
  const { document, video, group, frozen } = fixture();
  assert.equal(validateNodeActionSource(document, frozen).node, video);
  for (const changed of [
    { ...document, id: "another-project" },
    { ...document, nodes: [group] },
    { ...document, nodes: [group, { ...video, type: "image" as const }] },
    {
      ...document,
      nodes: [group, { ...video, data: { ...video.data, src: "replacement" } }],
    },
    {
      ...document,
      nodes: [
        group,
        { ...video, data: { ...video.data, assetState: "missing" as const } },
      ],
    },
    { ...document, nodes: [group, { ...video, locked: true }] },
    { ...document, nodes: [{ ...group, locked: true }, video] },
  ]) {
    assert.ok(validateNodeActionSource(changed, frozen).error);
    const refused = createVideoExtensionDraft(changed, frozen);
    assert.equal(refused.document, changed);
    assert.deepEqual(refused.ids, []);
    assert.ok(refused.error);
    const lateResult = appendLinkedMediaResults(changed, frozen, [
      {
        kind: "image",
        src: "data:image/png;base64,YQ==",
        mimeType: "image/png",
        title: "晚到的截帧结果",
      },
    ]);
    assert.equal(lateResult.document, changed);
    assert.deepEqual(lateResult.ids, []);
    assert.ok(lateResult.error);
  }
  const image = createNode("image", undefined, {
    src: "data:image/png;base64,YQ==",
  });
  const imageDocument = { ...document, nodes: [image] };
  assert.ok(
    createVideoExtensionDraft(imageDocument, {
      documentId: imageDocument.id,
      nodeId: image.id,
      kind: image.type,
      src: image.data.src,
    }).error,
  );
});

test("odd image dimensions split row-major without losing, stretching or duplicating pixels", () => {
  for (const [width, height, rows, columns] of [
    [11, 7, 3, 4],
    [7, 7, 7, 7],
    [1, 7, 7, 1],
    [11, 1, 1, 7],
  ]) {
    const cells = gridSplitCells(width!, height!, rows!, columns!);
    const coverage = new Uint8Array(width! * height!);
    assert.equal(cells.length, rows! * columns!);
    for (let index = 0; index < cells.length; index++) {
      const cell = cells[index]!;
      assert.equal(cell.row, Math.floor(index / columns!) + 1);
      assert.equal(cell.column, (index % columns!) + 1);
      assert.ok(cell.width >= 1 && cell.height >= 1);
      for (let y = cell.y; y < cell.y + cell.height; y++) {
        for (let x = cell.x; x < cell.x + cell.width; x++)
          coverage[y * width! + x]!++;
      }
    }
    assert.ok(coverage.every((count) => count === 1));
  }
});

test("invalid grids and cancellation fail before loading browser media", async () => {
  const source: ResultSource = {
    documentId: "project",
    nodeId: "image",
    kind: "image",
    src: "data:image/png;base64,YQ==",
  };
  for (const [rows, columns] of [
    [1, 1],
    [0, 3],
    [2, -1],
    [2.5, 3],
    [8, 1],
    [1, 8],
    [NaN, 3],
  ]) {
    assert.throws(() => gridSplitCells(100, 100, rows!, columns!));
    await assert.rejects(
      gridSplitImage(source, rows!, columns!, new AbortController().signal),
    );
  }
  assert.throws(() => gridSplitCells(2, 3, 2, 3), /像素尺寸/);
  assert.throws(() => gridSplitCells(8192, 8192, 2, 2), /最多/);
  await assert.rejects(
    gridSplitImage(
      { ...source, kind: "video" },
      2,
      2,
      new AbortController().signal,
    ),
    /图片节点/,
  );
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(gridSplitImage(source, 2, 2, controller.signal), {
    name: "AbortError",
  });
});
