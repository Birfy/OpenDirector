/** Run against the isolated tests/browser/creation_server.py fixture. */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE ?? "playwright-core"
);
const base = process.env.CREATION_WEB_URL ?? "http://127.0.0.1:5187";
const video =
  "data:video/mp4;base64," +
  execFileSync("ffmpeg", [
    "-v",
    "error",
    "-f",
    "lavfi",
    "-i",
    "color=c=blue:s=96x64:r=10",
    "-t",
    "1",
    "-c:v",
    "libx264",
    "-threads",
    "1",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "frag_keyframe+empty_moov",
    "-f",
    "mp4",
    "pipe:1",
  ]).toString("base64");
const audio =
  "data:audio/wav;base64," +
  execFileSync("ffmpeg", [
    "-v",
    "error",
    "-f",
    "lavfi",
    "-i",
    "sine=frequency=440:sample_rate=8000",
    "-t",
    "1",
    "-c:a",
    "pcm_s16le",
    "-threads",
    "1",
    "-f",
    "wav",
    "pipe:1",
  ]).toString("base64");
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : {}),
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
page.setDefaultTimeout(12000);
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const cases = [
  ["image", "subject"],
  ["video", "subject"],
  ["image", "timeline"],
  ["video", "timeline"],
  ["audio", "timeline"],
  ["audio", "subject", false],
  ["subject-video", "image", false],
  ["subject-video", "video"],
  ["subject-image", "audio"],
];
const names = {
  text: "文本",
  image: "图片",
  video: "视频",
  audio: "音频",
  timeline: "时间线",
  subject: "主体",
};
const expected = {
  image: ["text", "image", "video", "audio", "timeline", "subject"],
  video: ["text", "video", "timeline", "subject"],
  audio: ["text", "video", "audio", "timeline"],
  "subject-video": ["video"],
  "subject-image": ["image", "video", "audio"],
};
const rows = [];
try {
  assert.equal(
    (
      await (
        await page.request.get(base + "/api/creation-test-health", {
          headers: { "X-OpenDirector-Request": "1" },
        })
      ).json()
    ).isolated,
    true,
  );
  for (const unified of [false, true])
    for (const [kind, targetKind, accepted = true] of cases) {
      const mode = unified ? "?creation=unified" : "";
      const bootstrap = (url) =>
        url.origin === new URL(base).origin && url.pathname === "/";
      await page.route(bootstrap, (r) =>
        r.fulfill({
          contentType: "text/html",
          body: "<html><body></body></html>",
        }),
      );
      await page.goto(base + "/" + mode);
      const f = await page.evaluate(
        async ({ kind, targetKind, video, audio }) => {
          const { createDocument, createNode } =
            await import("/src/canvas/model.ts");
          const { importWorkspaceDocument } =
            await import("/src/backend/workspace.ts");
          const canvas = document.createElement("canvas");
          canvas.width = 96;
          canvas.height = 64;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "blue";
          ctx.fillRect(0, 0, 96, 64);
          const png = canvas.toDataURL();
          const subject = kind.startsWith("subject-");
          const mainKind = subject ? kind.slice(8) : kind;
          const src =
            mainKind === "video" ? video : mainKind === "audio" ? audio : png;
          const main = {
            id: "fixture-main",
            kind: mainKind,
            title: "Main",
            src,
            durationSeconds: mainKind === "video" ? 1 : undefined,
          };
          const source = createNode(
            subject ? "subject" : kind,
            { x: 180, y: 240 },
            {
              title: "Source",
              mediaRole: "asset",
              assetState: "ready",
              ...(subject
                ? {
                    subject: {
                      description: "",
                      category: "character",
                      main,
                      auxiliaries: [],
                    },
                  }
                : {
                    src,
                    mimeType:
                      mainKind === "video"
                        ? "video/mp4"
                        : mainKind === "audio"
                          ? "audio/wav"
                          : "image/png",
                    media: { width: 96, height: 64, durationSeconds: 1 },
                  }),
            },
          );
          const target = createNode(
            targetKind,
            { x: 850, y: 240 },
            { title: "Target" },
          );
          if (targetKind === "timeline") target.width = 520;
          const saved = await importWorkspaceDocument({
            ...createDocument("Node rules " + crypto.randomUUID().slice(0, 8)),
            nodes: [source, target],
            edges: [],
            viewport: { x: 0, y: 0, zoom: 0.8 },
          });
          if (location.search.includes("unified"))
            (await import("/src/backend/creationClient.ts"))
              .creationClient(saved.id)
              .close();
          await (
            await import("/src/backend/projects.ts")
          ).releaseBackendProject();
          return { id: saved.id, source: source.id, target: target.id };
        },
        { kind, targetKind, video, audio },
      );
      await page.unroute(bootstrap);
      await page.goto(base + "/ai-tool/ai-canvas/" + f.id + mode);
      await page.getByText("已保存到本机", { exact: true }).waitFor();
      await page.waitForTimeout(150);
      const source = page.locator(`.react-flow__node[data-id="${f.source}"]`),
        target = page.locator(`.react-flow__node[data-id="${f.target}"]`);
      const showPort = async () => {
        const r = await source.boundingBox();
        await page.mouse.move(r.x + r.width + 7, r.y + r.height / 2);
        const port = page.getByRole("button", {
          name: "添加下游参考节点",
          exact: true,
        });
        await port.waitFor();
        return port;
      };
      if (kind === "image" && targetKind === "subject") {
        for (const theme of ["light", "dark"]) {
          await page.evaluate((theme) => {
            document.documentElement.dataset.theme = theme;
          }, theme);
          const port = await showPort();
          const palette = await port.evaluate((element) => {
            const style = getComputedStyle(element);
            return {
              color: style.color,
              border: style.borderTopColor,
              background: style.backgroundColor,
            };
          });
          assert.equal(
            palette.color,
            theme === "light" ? "rgb(61, 107, 214)" : "rgb(255, 255, 255)",
          );
          assert.equal(palette.border, palette.color);
          assert.equal(palette.background, "rgba(0, 0, 0, 0)");
          const bounds = await port.boundingBox();
          await page.mouse.move(
            bounds.x + bounds.width / 2,
            bounds.y + bounds.height / 2,
          );
          await page.mouse.down();
          await page.mouse.move(bounds.x + 160, bounds.y + 100, { steps: 8 });
          const motion = page.locator(
            ".cw-interaction-overlay .cw-edge-comet-1",
          );
          await motion.waitFor();
          const offset = await motion.evaluate(
            (element) => getComputedStyle(element).strokeDashoffset,
          );
          await page.waitForTimeout(200);
          assert.notEqual(
            await motion.evaluate(
              (element) => getComputedStyle(element).strokeDashoffset,
            ),
            offset,
          );
          await page.emulateMedia({ reducedMotion: "reduce" });
          assert.equal(
            await motion
              .locator("..")
              .evaluate((element) => getComputedStyle(element).display),
            "none",
          );
          await page.emulateMedia({ reducedMotion: "no-preference" });
          await page.keyboard.press("Escape");
          await page.mouse.up();
          assert.equal(await motion.count(), 0);
        }
      }
      await (await showPort()).click();
      await page
        .locator('[data-testid="pending-connection"] .cw-edge-comet-1')
        .waitFor({ state: "attached" });
      for (const [type, name] of Object.entries(names))
        assert.equal(
          await page.getByRole("menuitem", { name, exact: true }).isEnabled(),
          expected[kind].includes(type),
          kind + " menu " + type,
        );
      await page.keyboard.press("Escape");
      const port = await showPort(),
        pr = await port.boundingBox(),
        tr = await target.boundingBox();
      await page.mouse.move(pr.x + pr.width / 2, pr.y + pr.height / 2);
      await page.mouse.down();
      await page.mouse.move(tr.x + tr.width / 2, tr.y + tr.height / 2, {
        steps: 15,
      });
      assert.equal(
        await page.locator(".cw-interaction-overlay .cw-edge-motion").count(),
        accepted ? 1 : 0,
      );
      await page.mouse.up();
      const count = accepted ? 1 : 0;
      await page.waitForFunction(
        (count) =>
          document.querySelectorAll(".react-flow__edge").length === count,
        count,
      );
      if (!accepted) await page.locator(".cw-toast").waitFor();
      await page.waitForTimeout(900);
      const response = await page.request.get(
        base +
          "/api/" +
          (unified
            ? "creation/projects/" + f.id
            : "projects/" + f.id + "/workspace"),
        { headers: { "X-OpenDirector-Request": "1" } },
      );
      assert.equal(response.status(), 200);
      const saved = await response.json();
      if (unified) {
        const doc = saved.editorDocuments.find(
          (d) =>
            d.id ===
            saved.canvasItems.find((i) => i.id === f.target).binding.objectRef
              ?.id,
        );
        if (["subject", "timeline"].includes(targetKind) && accepted) {
          assert.equal(doc.inputConnections.length, 1);
          assert.equal(saved.references.length, 0);
          assert.equal(saved.jobs.length, 0);
        } else assert.equal(saved.references.length, count);
      } else assert.equal(saved.document.edges.length, count);
      if (accepted && ["subject", "timeline"].includes(targetKind)) {
        await page.getByRole("button", { name: "撤销", exact: true }).click();
        await page.waitForFunction(
          () => document.querySelectorAll(".react-flow__edge").length === 0,
        );
        await page.getByRole("button", { name: "重做", exact: true }).click();
        await page.waitForFunction(
          () => document.querySelectorAll(".react-flow__edge").length === 1,
        );
        await page.waitForTimeout(900);
      }
      await page.reload();
      await page.getByText("已保存到本机", { exact: true }).waitFor();
      assert.equal(await page.locator(".react-flow__edge").count(), count);
      rows.push({
        mode: unified ? "unified" : "workspace",
        kind,
        targetKind,
        accepted,
      });
      console.log(JSON.stringify(rows.at(-1)));
    }
  assert.deepEqual(errors, []);
  console.log(
    JSON.stringify({ passed: true, cases: rows.length, pageErrors: errors }),
  );
} catch (e) {
  await page.screenshot({
    path: "/tmp/opendirector-node-connections-failure.png",
  });
  throw e;
} finally {
  await browser.close();
}
