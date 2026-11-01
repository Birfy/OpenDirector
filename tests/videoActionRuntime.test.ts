import assert from "node:assert/strict";
import test from "node:test";
import {
  captureVideoEndpoint,
  captureVideoFrame,
  extractVideoAudio,
  fitVideoTimeRange,
  initialVideoActionParameters,
  videoActionInputError,
} from "../src/canvas/videoActionRuntime.ts";
import {
  createCanvasToolTask,
  parseCanvasToolTaskValue,
} from "../src/canvas/toolCatalog.ts";

test("range gestures clamp to the real duration and retain a positive selection", () => {
  assert.deepEqual(fitVideoTimeRange({ start: -4, end: 15 }, 10), {
    start: 0,
    end: 10,
  });
  assert.deepEqual(fitVideoTimeRange({ start: 2, end: 8 }, 10), {
    start: 2,
    end: 8,
  });
  assert.deepEqual(fitVideoTimeRange({ start: NaN, end: Infinity }, 10), {
    start: 0,
    end: 10,
  });
  assert.deepEqual(fitVideoTimeRange({ start: 2, end: 8 }, 0), {
    start: 0,
    end: 0,
  });
  const short = fitVideoTimeRange({ start: 2, end: 0 }, 0.005);
  assert.equal(short.start, 0);
  assert.equal(short.end, 0.005);
  const clipped = fitVideoTimeRange({ start: 12, end: 9 }, 10);
  assert.equal(clipped.start, 9.99);
  assert.equal(clipped.end, 10);
});

test("dedicated video settings survive the shared task persistence boundary", () => {
  for (const tool of [
    "video-upscale",
    "video-depth-capture",
    "video-frame-interpolation",
    "video-matting",
    "audio-separation",
  ] as const) {
    const task = createCanvasToolTask(
      tool,
      ["source-video"],
      initialVideoActionParameters(tool),
    );
    const restored = parseCanvasToolTaskValue(JSON.parse(JSON.stringify(task)));
    assert.deepEqual(restored, task);
    assert.equal(
      videoActionInputError(tool, restored.parameters, 6, { start: 0, end: 6 }),
      undefined,
    );
  }
  const reshoot = createCanvasToolTask(
    "video-partial-reshoot",
    ["source-video"],
    { prompt: "在所选片段中增加雨滴", startMs: 1250, endMs: 3500 },
  );
  assert.deepEqual(
    parseCanvasToolTaskValue(reshoot).parameters,
    reshoot.parameters,
  );
  const crop = createCanvasToolTask(
    "video-crop",
    ["source-video"],
    { aspectRatio: "16:9" },
    {
      sourceNodeId: "source-video",
      width: 1920,
      height: 1080,
      boxes: [{ x: 160, y: 90, width: 1600, height: 900 }],
    },
  );
  assert.deepEqual(parseCanvasToolTaskValue(crop), crop);
});

test("AI video controls reject incomplete descriptions, invalid restored choices and unsupported duration", () => {
  const range = { start: 1, end: 3 };
  assert.match(
    videoActionInputError("video-partial-reshoot", { prompt: "" }, 6, range)!,
    /填写/,
  );
  assert.match(
    videoActionInputError("video-partial-reshoot", { prompt: "change" }, 6, {
      start: 5,
      end: 8,
    })!,
    /范围/,
  );
  assert.equal(
    videoActionInputError(
      "video-partial-reshoot",
      { prompt: "change" },
      6,
      range,
    ),
    undefined,
  );
  assert.match(
    videoActionInputError("video-edit", { prompt: "change" }, 3.9, range)!,
    /4–30/,
  );
  assert.match(
    videoActionInputError("video-edit", { prompt: "change" }, 30.1, range)!,
    /4–30/,
  );
  assert.match(
    videoActionInputError(
      "video-depth-capture",
      { resolution: "720P" },
      31,
      range,
    )!,
    /30/,
  );
  assert.match(
    videoActionInputError("video-frame-interpolation", { fps: 48 }, 6, range)!,
    /选项/,
  );
  assert.match(
    videoActionInputError(
      "audio-separation",
      { mode: "description", description: "  " },
      6,
      range,
    )!,
    /描述/,
  );
  assert.equal(
    videoActionInputError(
      "audio-separation",
      { mode: "description", description: "脚步声" },
      6,
      range,
    ),
    undefined,
  );
  assert.match(
    videoActionInputError(
      "video-subtitle-erasure",
      { confirmed: false },
      6,
      range,
    )!,
    /确认/,
  );
});

test("frame capture rejects pending seeks and retains original pixels and position", () => {
  const video = {
    seeking: true,
    readyState: 2,
    videoWidth: 1920,
    videoHeight: 1080,
    currentTime: 1.25,
  } as HTMLVideoElement;
  assert.throws(() => captureVideoFrame(video, "source"), /解码/);
  const descriptor = Object.getOwnPropertyDescriptor(globalThis, "document");
  const draws: unknown[][] = [];
  const canvas = {
    width: 0,
    height: 0,
    getContext: () => ({ drawImage: (...args: unknown[]) => draws.push(args) }),
    toDataURL: (type: string) => `data:${type};base64,cGl4ZWxz`,
  };
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: { createElement: () => canvas },
  });
  try {
    Object.assign(video, { seeking: false });
    const output = captureVideoFrame(video, "source");
    assert.deepEqual(draws, [[video, 0, 0]]);
    assert.equal(canvas.width, 1920);
    assert.equal(canvas.height, 1080);
    assert.equal(output.title, "source · 1.25s");
    assert.equal(output.mimeType, "image/png");
    assert.deepEqual(output.media, { width: 1920, height: 1080 });
  } finally {
    if (descriptor) Object.defineProperty(globalThis, "document", descriptor);
    else Reflect.deleteProperty(globalThis, "document");
  }
});

test("cancelled endpoint extraction performs no decode or network access", async () => {
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    captureVideoEndpoint(
      "/never-read.mp4",
      "source",
      "last",
      controller.signal,
    ),
    { name: "AbortError" },
  );
});

test("audio extraction releases its decoder and returns no result after cancellation during decoding", async () => {
  const fetchBefore = globalThis.fetch;
  const audioBefore = Object.getOwnPropertyDescriptor(
    globalThis,
    "AudioContext",
  );
  const controller = new AbortController();
  let closed = 0;
  globalThis.fetch = async () => new Response(new Uint8Array([1, 2, 3]));
  class Context {
    async decodeAudioData() {
      controller.abort();
      return {
        numberOfChannels: 1,
        sampleRate: 8,
        getChannelData: () => new Float32Array(8),
      };
    }
    async close() {
      closed++;
    }
  }
  Object.defineProperty(globalThis, "AudioContext", {
    configurable: true,
    value: Context,
  });
  try {
    await assert.rejects(
      extractVideoAudio(
        "/source.mp4",
        "source",
        { start: 0, end: 1 },
        controller.signal,
      ),
      { name: "AbortError" },
    );
    assert.equal(closed, 1);
  } finally {
    globalThis.fetch = fetchBefore;
    if (audioBefore)
      Object.defineProperty(globalThis, "AudioContext", audioBefore);
    else Reflect.deleteProperty(globalThis, "AudioContext");
  }
});

test("quick audio extraction uses the decoded sample count when no range was supplied", async () => {
  const fetchBefore = globalThis.fetch;
  const audioBefore = Object.getOwnPropertyDescriptor(
    globalThis,
    "AudioContext",
  );
  const readerBefore = Object.getOwnPropertyDescriptor(
    globalThis,
    "FileReader",
  );
  let closed = 0;
  globalThis.fetch = async () => new Response(new Uint8Array([1, 2, 3]));
  class Context {
    async decodeAudioData() {
      return {
        numberOfChannels: 1,
        sampleRate: 8,
        length: 4,
        duration: Infinity,
        getChannelData: () => new Float32Array([0, 0.25, 0.5, 1]),
      };
    }
    async close() {
      closed++;
    }
  }
  class Reader {
    result: string | null = null;
    onload: (() => void) | null = null;
    onerror: (() => void) | null = null;
    onabort: (() => void) | null = null;
    readAsDataURL(blob: Blob) {
      void blob.arrayBuffer().then((bytes) => {
        this.result = `data:${blob.type};base64,${Buffer.from(bytes).toString("base64")}`;
        this.onload?.();
      });
    }
    abort() {
      this.onabort?.();
    }
  }
  Object.defineProperty(globalThis, "AudioContext", {
    configurable: true,
    value: Context,
  });
  Object.defineProperty(globalThis, "FileReader", {
    configurable: true,
    value: Reader,
  });
  try {
    const result = await extractVideoAudio(
      "/source.mp4",
      "source",
      undefined,
      new AbortController().signal,
    );
    assert.equal(result.media?.durationSeconds, 0.5);
    assert.equal(result.mimeType, "audio/wav");
    const wav = Buffer.from(result.src.split(",")[1]!, "base64");
    assert.equal(wav.toString("ascii", 0, 4), "RIFF");
    assert.equal(wav.readUInt32LE(40), 8);
    assert.equal(wav.readInt16LE(50), 32767);
    assert.equal(closed, 1);
  } finally {
    globalThis.fetch = fetchBefore;
    if (audioBefore)
      Object.defineProperty(globalThis, "AudioContext", audioBefore);
    else Reflect.deleteProperty(globalThis, "AudioContext");
    if (readerBefore)
      Object.defineProperty(globalThis, "FileReader", readerBefore);
    else Reflect.deleteProperty(globalThis, "FileReader");
  }
});
