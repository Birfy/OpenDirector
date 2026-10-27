import assert from "node:assert/strict";
import test from "node:test";
import {
  createDocument,
  createNode,
  type CanvasNode,
} from "../src/canvas/model.ts";
import { generationDefaults } from "../src/canvas/generationCatalog.ts";
import { appendServiceResults } from "../src/canvas/linkedResults.ts";
import { isGenerationSettings } from "../src/canvas/dataBoundary.ts";
import {
  backendBlocker,
  backendReferenceIssue,
  backendReferences,
  backendVideoMode,
  type ModelConfig,
} from "../src/backend/rules.ts";

const config = (
  kind: ModelConfig["kind"],
  rules: Partial<ModelConfig["inputRules"]>,
): ModelConfig => ({
  id: crypto.randomUUID(),
  kind,
  url: "http://127.0.0.1:8010/v1",
  modelId: "MiniMaxAI/MiniMax-H3",
  connectionType: "self_hosted",
  protocol: "vllm_omni",
  authMode: "none",
  inputRules: {
    profile: "vllm-omni-h3",
    allowedKinds: ["text", "image", "video", "audio"],
    maxImages: 9,
    maxVideos: 0,
    maxAudios: 3,
    videoModes: ["first_frame", "reference", "continuation"],
    ...rules,
  },
});
const h3 = config("video", {});
const zimage = config("image", {
  profile: "vllm-omni-image",
  allowedKinds: ["text"],
  maxImages: 0,
  videoModes: [],
});
const media = (kind: "image" | "video" | "audio"): CanvasNode =>
  createNode(
    kind,
    { x: 0, y: 0 },
    { src: `data:${kind}/x;base64,AA==`, assetState: "ready" },
  );
const video = (patch: object) => ({
  ...generationDefaults("video"),
  modelConfigId: h3.id,
  prompt: "雨夜街头",
  durationSeconds: 5,
  ...patch,
});

test("text-only reference requests become text-to-video", () => {
  const settings = video({ videoMode: "reference" });
  assert.equal(backendVideoMode(settings, []), "first_frame");
  const image = media("image");
  const references = backendReferences(settings, [image], h3);
  assert.equal(backendVideoMode(settings, references), "reference");
  assert.equal(backendBlocker(settings, [image], [h3]), null);
});

test("continuation needs exactly one previous clip and keeps it out of video references", () => {
  const settings = video({ videoMode: "continuation" });
  assert.match(backendBlocker(settings, [], [h3])!, /接续需要/);
  const clip = media("video");
  assert.equal(backendBlocker(settings, [clip], [h3]), null);
  assert.deepEqual(
    backendReferences(settings, [clip], h3).map((item) => item.role),
    ["continuation"],
  );
  assert.match(
    backendBlocker(settings, [clip, media("video")], [h3])!,
    /接续需要/,
  );
  // Outside continuation H3 receives no video references.
  assert.match(
    backendReferenceIssue(clip, video({ videoMode: "reference" }), h3)!,
    /接续/,
  );
});

test("first-frame mode submits only the chosen frame and rejects a last frame", () => {
  const first = media("image");
  const other = media("image");
  const settings = video({
    videoMode: "first-last",
    firstFrameNodeId: first.id,
  });
  assert.deepEqual(
    backendReferences(settings, [first, other], h3).map((item) => item.node),
    [first],
  );
  assert.equal(backendVideoMode(settings, []), "first_frame");
  assert.match(
    backendBlocker(
      { ...settings, lastFrameNodeId: other.id },
      [first, other],
      [h3],
    )!,
    /尾帧/,
  );
});

test("input rules bound references, duration and model availability", () => {
  const image = {
    ...generationDefaults("image"),
    modelConfigId: zimage.id,
    prompt: "灯塔",
  };
  assert.match(
    backendReferenceIssue(media("image"), image, zimage)!,
    /不接收图片/,
  );
  assert.equal(backendBlocker(image, [media("image")], [zimage]), null);
  assert.match(backendBlocker(image, [], [])!, /配置已删除/);
  assert.match(
    backendBlocker({ ...image, prompt: " " }, [], [zimage])!,
    /生成要求/,
  );
  assert.match(
    backendBlocker(video({ durationSeconds: 20 }), [], [h3])!,
    /4–15/,
  );
  const images = Array.from({ length: 10 }, () => media("image"));
  assert.match(
    backendBlocker(video({ videoMode: "reference" }), images, [h3])!,
    /上限（9/,
  );
});

test("service settings survive the persistence boundary", () => {
  assert.equal(
    isGenerationSettings(video({ videoMode: "continuation" })),
    true,
  );
  assert.equal(isGenerationSettings(video({ modelConfigId: "" })), false);
});

test("service results without a canvas source are placed right of the content", () => {
  const document = createDocument();
  const existing = createNode("image", { x: 100, y: 50 });
  const result = appendServiceResults({ ...document, nodes: [existing] }, [
    { kind: "text", title: "剧本", text: "第一幕" },
    {
      kind: "image",
      title: "关键帧",
      src: "data:image/png;base64,AA==",
      mimeType: "image/png",
    },
  ]);
  const added = result.document.nodes.filter((node) =>
    result.ids.includes(node.id),
  );
  assert.equal(added.length, 2);
  assert.equal(added[0]!.data.text, "第一幕");
  assert.ok(added.every((node) => node.position.x >= 100 + existing.width));
  assert.equal(result.document.edges.length, 0);
});
