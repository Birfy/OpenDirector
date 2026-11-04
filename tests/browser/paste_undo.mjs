/** Run only against the isolated creation server. */
import assert from "node:assert/strict";
const { chromium } = await import(process.env.PLAYWRIGHT_MODULE ?? "playwright-core");
const base = process.env.CREATION_WEB_URL ?? "http://127.0.0.1:8019";
const headers = { "X-OpenDirector-Request": "1", "Content-Type": "application/json" };
const health = await fetch(base + "/api/creation-test-health", { headers });
assert.equal((await health.json()).isolated, true);
const id = crypto.randomUUID();
const path = `/api/creation/projects/${id}`;
const response = await fetch(base + path + "/commands", {
  method: "POST",
  headers,
  body: JSON.stringify({
    projectId: id, commandId: crypto.randomUUID(), type: "project.create",
    payload: { name: `Paste undo ${id}` },
  }),
});
assert.ok(response.ok);
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
try {
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  await page.goto(`${base}/ai-tool/ai-canvas/${id}`);
  await page.getByText("已保存到本机", { exact: true }).waitFor();
  const png = await page.evaluate(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    return canvas.toDataURL().split(",")[1];
  });
  await page.getByLabel("选择本地素材文件", { exact: true }).setInputFiles({
    name: "source.png", mimeType: "image/png", buffer: Buffer.from(png, "base64"),
  });
  const nodes = page.locator(".react-flow__node");
  await nodes.first().waitFor();
  const source = await nodes.first().getAttribute("data-id");
  await nodes.first().click();
  await page.keyboard.press("Control+c");
  await page.keyboard.press("Control+v");
  await page.keyboard.press("Control+v");
  await page.waitForFunction(() => document.querySelectorAll(".react-flow__node").length === 3);
  await page.keyboard.press("Control+z");
  await page.waitForFunction(() => document.querySelectorAll(".react-flow__node").length === 2);
  assert.equal(await nodes.first().getAttribute("data-id"), source);
  await page.keyboard.press("Control+z");
  await page.waitForFunction(() => document.querySelectorAll(".react-flow__node").length === 1);
  assert.equal(await nodes.first().getAttribute("data-id"), source);
  const snapshot = await (await fetch(base + path, { headers })).json();
  assert.deepEqual(snapshot.canvasItems.filter(item => item.visible).map(item => item.id), [source]);
  console.log("Two paste actions undo independently and preserve the source.");
} finally {
  await browser.close();
}
