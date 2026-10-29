import assert from "node:assert/strict";
import test from "node:test";
import {
  backendBlocker,
  backendResolutions,
  type ModelConfig,
} from "../src/backend/rules.ts";
import {
  changeGenerationSettings,
  generationDefaults,
} from "../src/canvas/generationCatalog.ts";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";
import { submitGeneration } from "../src/backend/generation.ts";

const config: ModelConfig = {
  id: crypto.randomUUID(),
  kind: "video",
  modelId: "FastH3-Omni-3090",
  url: "http://model.test/v1",
  connectionType: "self_hosted",
  protocol: "vllm_omni",
  authMode: "bearer",
  inputRules: {
    profile: "fasth3-omni",
    allowedKinds: ["text", "image", "video", "audio"],
    maxImages: 9,
    maxVideos: 3,
    maxAudios: 3,
    videoModes: ["reference"],
    outputResolutions: ["480P", "768P"],
  },
};
const settings = {
  ...generationDefaults("video"),
  model: config.modelId,
  modelConfigId: config.id,
  resolution: "768P",
  prompt: "山间日出",
};

test("self-hosted resolution choices come from capabilities and block unsupported outputs", () => {
  assert.deepEqual(backendResolutions(settings, config), [
    "自动",
    "480P",
    "768P",
  ]);
  const photo = createNode(
    "image",
    { x: 0, y: 0 },
    { src: "data:image/png;base64,AA==", assetState: "ready" },
  );
  assert.equal(backendBlocker(settings, [photo], [config]), null);
  assert.match(
    backendBlocker({ ...settings, resolution: "4K" }, [], [config])!,
    /分辨率/,
  );
  assert.deepEqual(backendResolutions(settings, undefined), ["自动"]);
  assert.deepEqual(
    backendResolutions({ ...settings, videoMode: "continuation" }, config),
    ["自动"],
  );
});

test("model selection and persisted canvases retain an explicit service resolution", () => {
  const selected = changeGenerationSettings(generationDefaults("video"), {
    model: config.modelId,
    modelConfigId: config.id,
    resolution: "768P",
  });
  assert.equal(selected.resolution, "768P");
  const document = createDocument();
  const node = createNode("video", { x: 0, y: 0 }, { settings: selected });
  document.nodes.push(node);
  const saved = serializeDocument(document);
  if (!saved.ok) throw new Error(saved.error.message);
  const restored = parseDocument(saved.value);
  if (!restored.ok) throw new Error(restored.error.message);
  assert.equal(
    restored.value.nodes.find((item) => item.id === node.id)!.data.settings!
      .resolution,
    "768P",
  );
});

test("image reference restrictions narrow Seedance choices", () => {
  const seedance: ModelConfig = {
    ...config,
    protocol: "volcengine",
    inputRules: {
      ...config.inputRules,
      profile: "seedance-2.0",
      outputResolutions: ["480P", "720P", "1080P", "4K"],
      referenceImageResolutions: ["480P", "720P", "4K"],
    },
  };
  const photo = createNode(
    "image",
    { x: 0, y: 0 },
    { src: "data:image/png;base64,AA==", assetState: "ready" },
  );
  assert.deepEqual(backendResolutions(settings, seedance, [photo]), [
    "自动",
    "480P",
    "720P",
    "4K",
  ]);
  assert.deepEqual(backendResolutions(settings, seedance), [
    "自动",
    "480P",
    "720P",
    "1080P",
    "4K",
  ]);
});

test("submitting a video carries the selected resolution to the local API", async () => {
  const originalFetch = globalThis.fetch;
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: { setInterval: () => 1, addEventListener: () => {} },
  });
  const submissions: Record<string, any>[] = [];
  globalThis.fetch = async (url, options) => {
    if (String(url).endsWith("/generate")) {
      submissions.push(JSON.parse(options!.body as string));
      return Response.json({ id: "original-task" });
    }
    if (String(url).endsWith("/canvas/nodes"))
      return Response.json({ id: "node", revision: 1 });
    return Response.json({ ok: true });
  };
  try {
    await submitGeneration(
      {
        documentId: crypto.randomUUID(),
        documentTitle: "分辨率测试",
        config,
        kind: "video",
        prompt: "山间日出",
        title: "视频",
        videoMode: "reference",
        durationSeconds: 7,
        aspectRatio: "16:9",
        resolution: "768P",
        references: [],
      },
      new AbortController().signal,
    );
    assert.equal(submissions.length, 1);
    assert.equal(submissions[0]!.inputs.resolution, "768P");
    assert.equal(submissions[0]!.inputs.aspectRatio, "16:9");
    assert.equal(submissions[0]!.inputs.durationSeconds, 7);
    await submitGeneration(
      {
        documentId: crypto.randomUUID(),
        documentTitle: "自动分辨率",
        config,
        kind: "video",
        prompt: "山间日出",
        title: "视频",
        videoMode: "reference",
        resolution: "自动",
        references: [],
      },
      new AbortController().signal,
    );
    assert.equal(submissions.length, 2);
    assert.equal(submissions[1]!.inputs.resolution, undefined);
    await submitGeneration(
      {
        documentId: crypto.randomUUID(),
        documentTitle: "显式自动分辨率",
        config: {
          ...config,
          inputRules: { ...config.inputRules, videoCapabilities: null },
        },
        kind: "video",
        prompt: "山间日出",
        title: "视频",
        videoMode: "reference",
        resolution: "自动",
        references: [],
      },
      new AbortController().signal,
    );
    assert.equal(submissions.length, 3);
    assert.equal(submissions[2]!.inputs.resolution, "auto");
  } finally {
    globalThis.fetch = originalFetch;
    if (originalWindow)
      Object.defineProperty(globalThis, "window", originalWindow);
    else Reflect.deleteProperty(globalThis, "window");
  }
});
