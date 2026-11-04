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
    "auto",
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
  assert.deepEqual(backendResolutions(settings, undefined), ["auto"]);
  assert.deepEqual(
    backendResolutions({ ...settings, videoMode: "continuation" }, config),
    ["auto"],
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
    "auto",
    "480P",
    "720P",
    "4K",
  ]);
  assert.deepEqual(backendResolutions(settings, seedance), [
    "auto",
    "480P",
    "720P",
    "1080P",
    "4K",
  ]);
});
