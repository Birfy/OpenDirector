import assert from "node:assert/strict";
import test from "node:test";
import {
  CANVAS_TOOLS,
  createCanvasToolTask,
  initialToolParameters,
  validateToolTask,
  type ToolSource,
} from "../src/canvas/toolCatalog.ts";
const source: ToolSource = {
  nodeId: "image-1",
  kind: "image",
  title: "Scene",
  src: "data:image/png;base64,a",
  mimeType: "image/png",
  width: 1024,
  height: 1024,
};
test("outpaint derives fixed output count, resolution and maximum dimension, rejects empty expansion", () => {
  const params = initialToolParameters(
    CANVAS_TOOLS.find((tool) => tool.id === "outpaint")!,
  );
  const task = createCanvasToolTask("outpaint", [source.nodeId], {
    ...params,
    outputWidth: 2048,
    outputHeight: 1536,
  });
  assert.equal(task.parameters.maxSize, 2048);
  assert.equal(task.parameters.candidateCount, 1);
  assert.equal(task.parameters.resolution, "2K");
  assert.deepEqual(validateToolTask(task, [source]), []);
  assert.ok(
    validateToolTask(
      {
        ...task,
        parameters: {
          ...task.parameters,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
      [source],
    ).some((error) => error.includes("至少扩展")),
  );
  assert.ok(
    validateToolTask(
      { ...task, parameters: { ...task.parameters, maxSize: 1024 } },
      [source],
    ).some((error) => error.includes("长边")),
  );
});
test("normal upscaling excludes Pro fields and duplicate sources do not pass batch validation", () => {
  const task = createCanvasToolTask("image-hd", [source.nodeId], {
    kind: "normal",
    resolution: "4K",
    detailStrength: 0.5,
  });
  assert.deepEqual(task.parameters, { kind: "normal" });
  assert.deepEqual(validateToolTask(task, [source]), []);
  assert.ok(
    validateToolTask(
      { ...task, sourceNodeIds: [source.nodeId, source.nodeId] },
      [source],
    ).some((error) => error.includes("不能重复")),
  );
});
test("manual masks are bound to the exact source and original pixel dimensions", () => {
  const task = createCanvasToolTask(
    "cutout",
    [source.nodeId],
    { selectionMode: "manual" },
    {
      sourceNodeId: source.nodeId,
      width: 1024,
      height: 1024,
      maskDataUrl: "data:image/png;base64,mask",
    },
  );
  assert.deepEqual(validateToolTask(task, [source]), []);
  assert.ok(
    validateToolTask(
      { ...task, selection: { ...task.selection!, sourceNodeId: "another" } },
      [source],
    ).some((error) => error.includes("不属于")),
  );
  assert.ok(
    validateToolTask(
      { ...task, selection: { ...task.selection!, width: 320, height: 320 } },
      [source],
    ).some((error) => error.includes("原图尺寸")),
  );
});
test("layer decomposition distinguishes unknown format metadata from a known incompatible input", () => {
  const task = createCanvasToolTask("layer-decompose", [source.nodeId], {
    resolution: "auto",
    prompt: "",
  });
  assert.deepEqual(
    validateToolTask(task, [{ ...source, mimeType: undefined }]),
    [],
  );
  assert.ok(
    validateToolTask(task, [{ ...source, mimeType: "image/webp" }]).length,
  );
  assert.ok(
    validateToolTask(task, [{ ...source, width: 256, height: 256 }]).some(
      (error) => error.includes("262,144"),
    ),
  );
});
test("dynamic options and unknown task protocols cannot be guessed into a valid request", () => {
  const task = createCanvasToolTask("view-control", [source.nodeId], {
    yaw: -10.2,
    pitch: 11.6,
    distance: "close",
  });
  assert.equal(task.parameters.yaw, 350);
  assert.equal(task.parameters.pitch, 12);
  assert.ok(
    validateToolTask(task, [source]).some((error) =>
      error.includes("可用选项"),
    ),
  );
  assert.deepEqual(
    validateToolTask(task, [source], {
      available: true,
      fields: [
        {
          key: "distance",
          label: "距离",
          type: "select",
          required: true,
          options: [{ value: "close", label: "近景" }],
        },
      ],
    }),
    [],
  );
  assert.ok(
    validateToolTask(createCanvasToolTask("multi-size", [source.nodeId], {}), [
      source,
    ]).some((error) => error.includes("尚未接入")),
  );
});
