import assert from "node:assert/strict";
import test from "node:test";
import {
  backendBlocker,
  backendDurations,
  backendResolutions,
  serviceVideoSettings,
  type ModelConfig,
  type VideoCapabilities,
} from "../src/backend/rules.ts";
import {
  createVideoCapabilities,
  parseVideoSeconds,
  videoOutputDrafts,
} from "../src/backend/videoCapabilities.ts";
import { generationDefaults } from "../src/canvas/generationCatalog.ts";

const caps: VideoCapabilities = {
  outputs: [
    { resolution: "540P", durations: [3, 5], width: 960, height: 540 },
    { resolution: "720P", durations: [5, 7], width: 1280, height: 720 },
  ],
  defaultResolution: "720P",
  defaultDuration: 7,
  dimensionStep: 2,
};
const config: ModelConfig = {
  id: crypto.randomUUID(),
  kind: "video",
  url: "http://model.test/v1",
  modelId: "custom-video",
  connectionType: "self_hosted",
  protocol: "vllm_omni",
  authMode: "none",
  videoAdapter: "standard",
  videoCapabilities: caps,
  inputRules: {
    profile: "standard-video",
    allowedKinds: ["text", "image"],
    maxImages: 1,
    maxVideos: 0,
    maxAudios: 0,
    videoModes: ["first_frame"],
    outputResolutions: ["540P", "720P"],
    videoCapabilities: caps,
  },
};
const settings = {
  ...generationDefaults("video"),
  model: config.modelId,
  modelConfigId: config.id,
  prompt: "山间日出",
  resolution: "720P",
  durationSeconds: 7,
};

test("custom seconds parse bounded ranges and reject malformed or oversized values", () => {
  assert.deepEqual(parseVideoSeconds("3,5-7，7"), [3, 5, 6, 7]);
  for (const invalid of ["", "0", "61", "3-100000000", "7-4", "2.5", "1e2"])
    assert.throws(() => parseVideoSeconds(invalid));
  assert.deepEqual(
    createVideoCapabilities(videoOutputDrafts(caps), "720P", 7, 2),
    caps,
  );
  assert.throws(
    () => createVideoCapabilities(videoOutputDrafts(caps), "540P", 7, 2),
    /默认/,
  );
});

test("model and duration changes use capability data including non-contiguous seconds", () => {
  assert.deepEqual(backendDurations(config), [3, 5, 7]);
  assert.deepEqual(backendResolutions(settings, config), ["自动", "720P"]);
  assert.deepEqual(
    backendResolutions({ ...settings, durationSeconds: 5 }, config),
    ["自动", "540P", "720P"],
  );
  const selected = serviceVideoSettings(
    { ...settings, durationSeconds: 15 },
    config,
    [],
    true,
  );
  assert.equal(selected.durationSeconds, 7);
  assert.equal(selected.resolution, "720P");
  const shorter = serviceVideoSettings(
    { ...settings, durationSeconds: 3 },
    config,
  );
  assert.equal(shorter.resolution, "自动");
  assert.equal(backendBlocker(settings, [], [config]), null);
  assert.match(
    backendBlocker({ ...settings, resolution: "540P" }, [], [config])!,
    /分辨率/,
  );
  assert.match(
    backendBlocker({ ...settings, durationSeconds: 6 }, [], [config])!,
    /时长/,
  );
});

test("unknown models advertise no guessed resolution or duration and cannot inherit FastH3 parameters", () => {
  const unknown = {
    ...config,
    inputRules: {
      ...config.inputRules,
      videoCapabilities: null,
      outputResolutions: [],
    },
  };
  assert.deepEqual(backendResolutions(settings, unknown), ["自动"]);
  assert.deepEqual(backendDurations(unknown), []);
  assert.equal(serviceVideoSettings(settings, unknown).resolution, "自动");
});

test("declared durations outside H3 range are available for other adapters", () => {
  const extended = {
    ...config,
    inputRules: {
      ...config.inputRules,
      videoCapabilities: {
        ...caps,
        outputs: [{ resolution: "720P", durations: [20, 30] }],
        defaultDuration: 20,
      },
    },
  };
  assert.equal(
    backendBlocker({ ...settings, durationSeconds: 30 }, [], [extended]),
    null,
  );
});
