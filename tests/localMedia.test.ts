import assert from "node:assert/strict";
import test from "node:test";
import { encodePcmWav } from "../src/canvas/localAudio.ts";
import {
  mediaBlobDataUrl,
  recordLocalVideoRange,
} from "../src/canvas/localMediaRuntime.ts";

test("WAV output has the selected interleaved PCM samples and matching RIFF metadata", () => {
  const encoded = encodePcmWav(
    [
      new Float32Array([-2, -0.5, 0, 0.5, 2]),
      new Float32Array([1, 0.25, 0, -0.25, -1]),
    ],
    10,
    0.1,
    0.4,
  );
  const view = new DataView(encoded),
    ascii = (at: number, length: number) =>
      new TextDecoder().decode(encoded.slice(at, at + length));
  assert.equal(ascii(0, 4), "RIFF");
  assert.equal(ascii(8, 4), "WAVE");
  assert.equal(ascii(36, 4), "data");
  assert.equal(view.getUint32(4, true), encoded.byteLength - 8);
  assert.equal(view.getUint16(22, true), 2);
  assert.equal(view.getUint32(24, true), 10);
  assert.equal(view.getUint32(28, true), 40);
  assert.equal(view.getUint16(32, true), 4);
  assert.equal(view.getUint32(40, true), 12);
  assert.deepEqual(
    Array.from({ length: 6 }, (_, i) => view.getInt16(44 + i * 2, true)),
    [-16384, 8192, 0, 0, 16384, -8192],
  );
});

test("WAV partial sample boundaries, source end clipping, and PCM saturation are explicit", () => {
  const channels = [new Float32Array([-2, -0.5, 0, 0.5, 2])];
  const fractional = new DataView(encodePcmWav(channels, 10, 0.15, 0.31));
  assert.equal(fractional.byteLength, 50);
  assert.deepEqual(
    [44, 46, 48].map((at) => fractional.getInt16(at, true)),
    [-16384, 0, 16384],
  );
  const clipped = new DataView(encodePcmWav(channels, 10, 0, 9));
  assert.equal(clipped.byteLength, 54);
  assert.equal(clipped.getInt16(44, true), -32768);
  assert.equal(clipped.getInt16(52, true), 32767);
});

test("WAV rejects mismatched channels, empty intervals, nonfinite input and overflowing header rates", () => {
  const channels = [new Float32Array(8)];
  for (const [start, end] of [
    [1, 1],
    [-1, 1],
    [0, Infinity],
    [NaN, 1],
    [8, 9],
  ])
    assert.throws(() => encodePcmWav(channels, 1, start!, end!));
  assert.throws(() => encodePcmWav([], 10, 0, 1));
  assert.throws(() =>
    encodePcmWav([new Float32Array(2), new Float32Array(3)], 10, 0, 1),
  );
  assert.throws(() => encodePcmWav(channels, 0xffffffff, 0, 1));
});

async function browserFixture(
  run: (fixture: ReturnType<typeof createFixture>) => Promise<void>,
  options: { constructorFails?: boolean; startFails?: boolean } = {},
) {
  const fixture = createFixture(options);
  const replacement: Record<string, unknown> = {
    FileReader: fixture.Reader,
    MediaRecorder: fixture.Recorder,
    requestAnimationFrame: fixture.raf,
    cancelAnimationFrame: fixture.cancelRaf,
  };
  const previous = new Map(
    Object.keys(replacement).map((key) => [
      key,
      Object.getOwnPropertyDescriptor(globalThis, key),
    ]),
  );
  for (const [key, value] of Object.entries(replacement))
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value,
    });
  try {
    await run(fixture);
  } finally {
    for (const [key, descriptor] of previous) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else Reflect.deleteProperty(globalThis, key);
    }
  }
}

function createFixture(options: {
  constructorFails?: boolean;
  startFails?: boolean;
}) {
  const readers: Reader[] = [],
    recorders: Recorder[] = [],
    frames = new Map<number, FrameRequestCallback>();
  let nextFrame = 0,
    trackStops = 0;
  class Reader {
    result: string | null = null;
    onload: (() => void) | null = null;
    onerror: (() => void) | null = null;
    onabort: (() => void) | null = null;
    aborts = 0;
    constructor() {
      readers.push(this);
    }
    readAsDataURL() {}
    abort() {
      this.aborts++;
      this.onabort?.();
    }
    finish() {
      this.result = "data:audio/wav;base64,result";
      this.onload?.();
    }
  }
  class Recorder {
    static isTypeSupported() {
      return true;
    }
    state = "inactive";
    ondataavailable: ((event: { data: Blob }) => void) | null = null;
    onerror: (() => void) | null = null;
    onstop: (() => void) | null = null;
    mimeType: string | undefined;
    constructor(_stream: MediaStream, recorderOptions: MediaRecorderOptions) {
      if (options.constructorFails) throw new Error("constructor failed");
      this.mimeType = recorderOptions.mimeType;
      recorders.push(this);
    }
    start() {
      if (options.startFails) throw new Error("start failed");
      this.state = "recording";
    }
    stop() {
      if (this.state === "inactive") throw new Error("double stop");
      this.state = "inactive";
      queueMicrotask(() => {
        this.ondataavailable?.({ data: new Blob(["real encoder bytes"]) });
        this.onstop?.();
      });
    }
  }
  class Video extends EventTarget {
    currentTime = 0;
    seeking = false;
    paused = true;
    ended = false;
    playbackRate = 2;
    listeners = new Set<string>();
    override addEventListener(
      type: string,
      callback: EventListenerOrEventListenerObject | null,
      options?: AddEventListenerOptions | boolean,
    ) {
      this.listeners.add(type);
      super.addEventListener(type, callback, options);
    }
    override removeEventListener(
      type: string,
      callback: EventListenerOrEventListenerObject | null,
      options?: EventListenerOptions | boolean,
    ) {
      this.listeners.delete(type);
      super.removeEventListener(type, callback, options);
    }
    pause() {
      const changed = !this.paused;
      this.paused = true;
      if (changed) queueMicrotask(() => this.dispatchEvent(new Event("pause")));
    }
    async play() {
      this.paused = false;
    }
    captureStream() {
      return {
        getTracks: () => [
          {
            stop: () => {
              trackStops++;
            },
          },
        ],
      } as unknown as MediaStream;
    }
  }
  return {
    Reader,
    Recorder,
    readers,
    recorders,
    frames,
    video: new Video(),
    get trackStops() {
      return trackStops;
    },
    raf: (callback: FrameRequestCallback) => {
      frames.set(++nextFrame, callback);
      return nextFrame;
    },
    cancelRaf: (id: number) => {
      frames.delete(id);
    },
  };
}
const settleStartup = async () => {
  for (let i = 0; i < 6; i++) await Promise.resolve();
};

test("cancelling Blob conversion aborts its reader and cannot deliver a late result", async () => {
  await browserFixture(async (fixture) => {
    const controller = new AbortController();
    const result = mediaBlobDataUrl(new Blob(["samples"]), controller.signal);
    controller.abort();
    await assert.rejects(result, { name: "AbortError" });
    assert.equal(fixture.readers[0]?.aborts, 1);
    fixture.readers[0]?.finish();
    assert.equal(fixture.readers[0]?.onload, null);
    await assert.rejects(mediaBlobDataUrl(new Blob(), controller.signal), {
      name: "AbortError",
    });
    assert.equal(fixture.readers.length, 1);
  });
});

test("recording releases captured tracks even if construction or start fails", async () => {
  for (const options of [{ constructorFails: true }, { startFails: true }])
    await browserFixture(async (fixture) => {
      await assert.rejects(
        recordLocalVideoRange(
          fixture.video as unknown as HTMLVideoElement,
          0,
          1,
          new AbortController().signal,
          () => {},
        ),
        /failed/,
      );
      assert.ok(fixture.trackStops > 0);
      assert.equal(fixture.frames.size, 0);
      assert.equal(fixture.video.listeners.size, 0);
      assert.equal(fixture.video.paused, true);
      assert.equal(fixture.video.playbackRate, 2);
    }, options);
});

test("recording stops and cleans up on cancellation or unexpected media pause", async () => {
  for (const reason of ["cancel", "pause"] as const)
    await browserFixture(async (fixture) => {
      const controller = new AbortController();
      const result = recordLocalVideoRange(
        fixture.video as unknown as HTMLVideoElement,
        0,
        1,
        controller.signal,
        () => {},
      );
      await settleStartup();
      assert.equal(fixture.recorders[0]?.state, "recording");
      if (reason === "cancel") controller.abort();
      else fixture.video.pause();
      await assert.rejects(
        result,
        reason === "cancel" ? { name: "AbortError" } : /暂停/,
      );
      assert.ok(fixture.trackStops > 0);
      assert.equal(fixture.frames.size, 0);
      assert.equal(fixture.video.listeners.size, 0);
      assert.equal(fixture.recorders[0]?.onstop, null);
    });
});

test("timeupdate finalizes a recording even when animation frames are suspended", async () => {
  await browserFixture(async (fixture) => {
    const positions: number[] = [];
    const result = recordLocalVideoRange(
      fixture.video as unknown as HTMLVideoElement,
      0,
      1,
      new AbortController().signal,
      (value) => positions.push(value),
    );
    await settleStartup();
    fixture.video.currentTime = 1;
    fixture.video.dispatchEvent(new Event("timeupdate"));
    const blob = await result;
    assert.ok(blob.size > 0);
    assert.equal(fixture.recorders[0]?.mimeType, "video/webm;codecs=vp9,opus");
    assert.equal(blob.type, "video/webm");
    // Exercise the data URL representation with the actual output bytes; this
    // checks the MIME contract, not a simulated browser's FileReader behavior.
    const bytes = Buffer.from(await blob.arrayBuffer());
    const dataUrl = `data:${blob.type};base64,${bytes.toString("base64")}`;
    assert.equal(dataUrl.slice(0, dataUrl.indexOf(",")), "data:video/webm;base64");
    const decoded = await fetch(dataUrl);
    assert.equal(decoded.headers.get("content-type"), "video/webm");
    assert.deepEqual(Buffer.from(await decoded.arrayBuffer()), bytes);
    assert.deepEqual(positions, [1]);
    assert.ok(fixture.trackStops > 0);
    assert.equal(fixture.frames.size, 0);
    assert.equal(fixture.video.listeners.size, 0);
    assert.equal(fixture.video.playbackRate, 2);
  });
});

test("cancelling while seeking prevents capture and removes seek listeners", async () => {
  await browserFixture(async (fixture) => {
    const controller = new AbortController();
    const result = recordLocalVideoRange(
      fixture.video as unknown as HTMLVideoElement,
      0.5,
      1,
      controller.signal,
      () => {},
    );
    controller.abort();
    await assert.rejects(result, { name: "AbortError" });
    assert.equal(fixture.recorders.length, 0);
    assert.equal(fixture.video.listeners.size, 0);
    assert.equal(fixture.video.paused, true);
  });
});
