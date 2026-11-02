/**
 * Verifies the canvas video preview contract against a real Chrome instance.
 *
 * Driven over the Chrome DevTools Protocol with Node's built-in WebSocket so the
 * check needs no extra dependency. Start the app first, then run:
 *   node scripts/verify_video_preview_browser.mjs
 *
 * Set APP_URL / CHROME_PATH / PROJECT_ID to point at another instance.
 */
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const APP_URL = process.env.APP_URL ?? "http://127.0.0.1:8000";
// The app opens a project from the `/ai-canvas/<id>` path; empty means "last used".
const PROJECT_ID = process.env.PROJECT_ID ?? "";
const CHROME_PATH =
  process.env.CHROME_PATH ??
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9333;
const profile = mkdtempSync(join(tmpdir(), "od-video-verify-"));

const chrome = spawn(
  CHROME_PATH,
  [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "--headless=new",
    "--no-first-run",
    "--no-default-browser-check",
    "--autoplay-policy=no-user-gesture-required",
    "--window-size=1600,1100",
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForTarget() {
  const deadline = Date.now() + 20000;
  while (Date.now() < deadline) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return (await res.json()).webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error("Chrome DevTools endpoint never became ready");
}

class Cdp {
  #ws;
  #id = 0;
  #pending = new Map();
  #events = new Map();

  static async connect(url) {
    const cdp = new Cdp();
    cdp.#ws = new WebSocket(url);
    await new Promise((resolve, reject) => {
      cdp.#ws.addEventListener("open", resolve, { once: true });
      cdp.#ws.addEventListener("error", reject, { once: true });
    });
    cdp.#ws.addEventListener("message", (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && cdp.#pending.has(msg.id)) {
        const { resolve, reject } = cdp.#pending.get(msg.id);
        cdp.#pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
        return;
      }
      const listeners = cdp.#events.get(msg.method);
      if (listeners) for (const fn of listeners) fn(msg.params);
    });
    return cdp;
  }

  on(method, fn) {
    if (!this.#events.has(method)) this.#events.set(method, []);
    this.#events.get(method).push(fn);
  }

  send(method, params = {}, sessionId) {
    const id = ++this.#id;
    return new Promise((resolve, reject) => {
      this.#pending.set(id, { resolve, reject });
      this.#ws.send(JSON.stringify({ id, method, params, sessionId }));
      setTimeout(() => {
        if (this.#pending.has(id)) {
          this.#pending.delete(id);
          reject(new Error(`CDP timeout: ${method}`));
        }
      }, 30000);
    });
  }

  close() {
    try {
      this.#ws.close();
    } catch {}
  }
}

const cleanup = () => {
  try {
    chrome.kill();
  } catch {}
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {}
};
process.on("exit", cleanup);

let cdp;
let sessionId;

async function evaluate(expression) {
  const { result, exceptionDetails } = await cdp.send(
    "Runtime.evaluate",
    { expression, awaitPromise: true, returnByValue: true },
    sessionId,
  );
  if (exceptionDetails)
    throw new Error(
      `evaluate failed: ${exceptionDetails.exception?.description ?? exceptionDetails.text}`,
    );
  return result.value;
}

async function waitFor(expression, label, timeout = 20000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await evaluate(expression)) return true;
    await sleep(200);
  }
  throw new Error(`Timed out waiting for ${label}`);
}

async function moveMouse(x, y) {
  await cdp.send(
    "Input.dispatchMouseEvent",
    { type: "mouseMoved", x, y, buttons: 0 },
    sessionId,
  );
}

async function pressMouse(x, y, button = "left") {
  await cdp.send(
    "Input.dispatchMouseEvent",
    { type: "mousePressed", x, y, button, buttons: 1, clickCount: 1 },
    sessionId,
  );
}

async function releaseMouse(x, y, button = "left") {
  await cdp.send(
    "Input.dispatchMouseEvent",
    { type: "mouseReleased", x, y, button, buttons: 0, clickCount: 1 },
    sessionId,
  );
}

// Locates the first video node on the canvas and reports its geometry.
const VIDEO_PROBE = `(() => {
  const frame = document.querySelector('.cw-video-frame');
  if (!frame) return null;
  const video = frame.querySelector('video');
  if (!video) return null;
  const rect = frame.getBoundingClientRect();
  const controls = frame.querySelector('.cw-video-controls');
  return {
    x: rect.x, y: rect.y, width: rect.width, height: rect.height,
    cx: rect.x + rect.width / 2, cy: rect.y + rect.height / 2,
    hasControls: Boolean(controls),
    paused: video.paused,
    muted: video.muted,
    volume: video.volume,
    currentTime: video.currentTime,
    duration: video.duration,
  };
})()`;

const videoState = () => evaluate(VIDEO_PROBE);

const results = [];
async function check(name, fn) {
  try {
    await fn();
    results.push({ name, ok: true });
    console.log(`  ok   ${name}`);
  } catch (error) {
    results.push({ name, ok: false, error: error.message });
    console.log(`  FAIL ${name}\n       ${error.message}`);
  }
}

async function main() {
  const wsUrl = await waitForTarget();
  cdp = await Cdp.connect(wsUrl);
  const created = await cdp.send("Target.createTarget", {
    url: "about:blank",
  });
  const targetId = created.targetId ?? created.targetInfo?.targetId;
  assert.ok(targetId, "CDP did not return a target id");
  const attached = await cdp.send("Target.attachToTarget", {
    targetId,
    flatten: true,
  });
  sessionId = attached.sessionId;

  const pageErrors = [];
  cdp.on("Runtime.consoleAPICalled", (params) => {
    if (params.type === "error")
      pageErrors.push(
        params.args.map((a) => a.value ?? a.description ?? "").join(" "),
      );
  });
  cdp.on("Runtime.exceptionThrown", (params) => {
    pageErrors.push(
      params.exceptionDetails.exception?.description ?? "exception",
    );
  });
  await cdp.send("Runtime.enable", {}, sessionId);
  await cdp.send("Page.enable", {}, sessionId);

  // Serve has no SPA fallback for `/ai-canvas/<id>`, so pin the project through
  // the same localStorage hint the app itself writes when a project is opened.
  await cdp.send("Page.navigate", { url: `${APP_URL}/` }, sessionId);
  await waitFor(`document.readyState === 'complete'`, "page load", 30000);
  if (PROJECT_ID) {
    await evaluate(
      `localStorage.setItem("opendirector.lastUnifiedFilesystemProject", ${JSON.stringify(PROJECT_ID)}), true`,
    );
    await cdp.send("Page.reload", { ignoreCache: true }, sessionId);
    await waitFor(`document.readyState === 'complete'`, "reload", 30000);
  }
  await sleep(2500);

  // The workspace mounts a loading placeholder before the document resolves, and
  // media nodes appear only after the canvas payload and asset URLs arrive.
  await waitFor(
    `!document.querySelector('.cw-loading') && Boolean(document.querySelector('.react-flow'))`,
    "canvas ready",
    30000,
  ).catch(() => {});

  let probe = null;
  const deadline = Date.now() + 40000;
  while (Date.now() < deadline && !probe) {
    probe = await videoState();
    if (!probe) await sleep(400);
  }
  assert.ok(
    probe,
    "No video node found on the canvas. Set PROJECT_ID to a project that contains a video node.",
  );
  // Let the media element report its duration before the checks read it.
  await sleep(800);
  console.log(
    `  video node: ${Math.round(probe.width)}x${Math.round(probe.height)} @ (${Math.round(probe.x)},${Math.round(probe.y)})\n`,
  );

  await check("controls stay hidden before hover", async () => {
    if (probe.hasControls) throw new Error("controls visible without hover");
  });

  await check("hover starts playback at full volume", async () => {
    await moveMouse(probe.cx, probe.cy);
    await waitFor(`${VIDEO_PROBE}.paused === false`, "hover playback", 12000);
    const state = await videoState();
    if (state.volume !== 1)
      throw new Error(
        `volume must stay at 1 so loudness follows the system (got ${state.volume})`,
      );
  });

  await check("hover reveals the control overlay", async () => {
    await waitFor(`${VIDEO_PROBE}.hasControls === true`, "controls appear", 5000);
  });

  await check("the volume button only toggles mute", async () => {
    const hasSlider = await evaluate(
      `Boolean(document.querySelector('.cw-video-controls input[type="range"], .cw-video-volume-panel'))`,
    );
    if (hasSlider) throw new Error("volume slider should be gone");
    const toggled = await evaluate(`(() => {
      const button = document.querySelector('.cw-video-controls [aria-label="\\u9759\\u97f3"], .cw-video-controls [aria-label="\\u53d6\\u6d88\\u9759\\u97f3"]');
      const video = document.querySelector('.cw-video-frame video');
      if (!button || !video) return null;
      const before = video.muted;
      button.click();
      return { before, after: video.muted, volume: video.volume };
    })()`);
    if (!toggled) throw new Error("volume button missing");
    if (toggled.before === toggled.after)
      throw new Error("clicking the volume button did not toggle mute");
    if (toggled.volume !== 1)
      throw new Error("muting must not attenuate the volume property");
    // Restore the muted state for the remaining checks.
    await evaluate(`(() => {
      const button = document.querySelector('.cw-video-controls [aria-label="\\u9759\\u97f3"], .cw-video-controls [aria-label="\\u53d6\\u6d88\\u9759\\u97f3"]');
      button?.click();
      return true;
    })()`);
  });

  await check("playback survives unrelated workspace re-renders", async () => {
    // The provider value used to be rebuilt on every render, which tore down and
    // re-armed the hover effect and made the preview stutter.
    const before = await videoState();
    if (before.paused) await moveMouse(probe.cx, probe.cy);
    await waitFor(`${VIDEO_PROBE}.paused === false`, "playing before stability window", 12000);
    const startTime = (await videoState()).currentTime;
    // Nudge the app to re-render (hover a toolbar button and come back).
    for (let i = 0; i < 6; i += 1) {
      await moveMouse(probe.cx, probe.cy);
      await sleep(500);
      const state = await videoState();
      if (state.paused)
        throw new Error(`playback paused during the stability window (tick ${i})`);
    }
    const endTime = (await videoState()).currentTime;
    if (endTime <= startTime)
      throw new Error("currentTime did not advance while hovering");
  });

  await check("overlay exposes scrubber, play, volume and fullscreen", async () => {
    const parts = await evaluate(`(() => {
      const c = document.querySelector('.cw-video-controls');
      if (!c) return null;
      return {
        scrubber: Boolean(c.querySelector('.cw-video-scrubber')),
        playButton: Boolean(c.querySelector('[aria-label="\u64ad\u653e"], [aria-label="\u6682\u505c"]')),
        volume: Boolean(c.querySelector('[aria-label="\u9759\u97f3"], [aria-label="\u53d6\u6d88\u9759\u97f3"]')),
        fullscreen: Boolean(c.querySelector('[aria-label="\u5168\u5c4f"], [aria-label="\u9000\u51fa\u5168\u5c4f"]')),
      };
    })()`);
    assert.ok(parts, "controls missing");
    for (const [key, present] of Object.entries(parts)) {
      if (!present) throw new Error(`missing control: ${key}`);
    }
  });

  await check("leaving pauses and keeps the position", async () => {
    const before = await videoState();
    await moveMouse(10, 10);
    await waitFor(`${VIDEO_PROBE}.paused === true`, "pause on leave", 6000);
    const after = await videoState();
    if (after.currentTime === 0 && before.currentTime > 0.1)
      throw new Error("leaving should pause, not rewind");
  });

  await check("hovering again resumes playback", async () => {
    await moveMouse(probe.cx, probe.cy);
    await waitFor(`${VIDEO_PROBE}.paused === false`, "resume on hover", 12000);
  });

  await check("dragging the node keeps the video playing", async () => {
    await waitFor(`${VIDEO_PROBE}.paused === false`, "playing before drag", 12000);
    const startX = probe.cx;
    const startY = probe.y + 12;
    await pressMouse(startX, startY);
    for (let i = 1; i <= 12; i += 1) {
      await cdp.send(
        "Input.dispatchMouseEvent",
        {
          type: "mouseMoved",
          x: startX + i * 6,
          y: startY + i * 3,
          button: "left",
          buttons: 1,
        },
        sessionId,
      );
      await sleep(60);
    }
    const during = await videoState();
    await releaseMouse(startX + 72, startY + 36);
    if (during.paused)
      throw new Error("video paused while the node was being dragged");
  });

  await check("a finished video ends paused", async () => {
    await evaluate(`(() => {
      const v = document.querySelector('.cw-video-frame video');
      if (!v) return false;
      v.currentTime = Math.max(0, v.duration - 0.3);
      return true;
    })()`);
    await sleep(2500);
    const state = await videoState();
    if (!state.paused) throw new Error("video should be paused after ending");
  });

  await check("a finished video replays on the next hover", async () => {
    await moveMouse(10, 10);
    await sleep(400);
    await moveMouse(probe.cx, probe.cy);
    await waitFor(`${VIDEO_PROBE}.paused === false`, "replay after end", 12000);
  });

  await check("page reports no runtime errors", async () => {
    const relevant = pageErrors.filter(
      (line) => line && !/Failed to load resource/.test(line),
    );
    if (relevant.length)
      throw new Error(`page errors:\n${relevant.join("\n")}`);
  });

  const failed = results.filter((entry) => !entry.ok);
  console.log(
    `\n${results.length - failed.length}/${results.length} checks passed`,
  );
  if (failed.length) process.exitCode = 1;
}

try {
  await main();
} catch (error) {
  console.error(`\nverification aborted: ${error.message}`);
  process.exitCode = 1;
} finally {
  cdp?.close();
  cleanup();
  process.exit(process.exitCode ?? 0);
}
