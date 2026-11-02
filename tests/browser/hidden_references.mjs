/** Real project commands and files with an isolated, simulated image model. */
import assert from "node:assert/strict";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE ?? "playwright-core"
);
const base = process.env.CREATION_WEB_URL ?? "http://127.0.0.1:5179";
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : {}),
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1500, height: 1000 } });
page.setDefaultTimeout(20000);
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
try {
  const health = await (
    await page.request.get(base + "/api/creation-test-health", {
      headers: { "X-OpenDirector-Request": "1" },
    })
  ).json();
  assert.equal(health.isolated, true);
  const bootstrap = (url) =>
    url.origin === new URL(base).origin && url.pathname === "/";
  await page.route(bootstrap, (route) =>
    route.fulfill({ contentType: "text/html", body: "<html></html>" }),
  );
  await page.goto(base + "/");
  const fixture = await page.evaluate(async () => {
    const { request } = await import("/src/backend/api.ts");
    const { createDocument, createNode } = await import("/src/canvas/model.ts");
    const { importWorkspaceDocument } =
      await import("/src/backend/workspace.ts");
    const { creationClient, objectVersion, currentAsset, itemSpec } =
      await import("/src/backend/creationClient.ts");
    const model = (await request("/model-configs")).find(
      (model) => model.kind === "image",
    );
    const source = createNode(
      "text",
      { x: 100, y: 150 },
      { title: "隐藏参考", text: "Reference v1", mediaRole: "asset" },
    );
    const visible = createNode(
      "text",
      { x: 100, y: 500 },
      { title: "可见参考", text: "Unchanged reference", mediaRole: "asset" },
    );
    const target = createNode(
      "image",
      { x: 600, y: 180 },
      {
        title: "参考展开验收",
        prompt: "Draw a landscape",
        settings: {
          mode: "image",
          model: model.modelId,
          modelConfigId: model.id,
          aspectRatio: "1:1",
          resolution: "1024",
          count: 1,
          prompt: "Draw a landscape",
        },
      },
    );
    const saved = await importWorkspaceDocument({
      ...createDocument("Hidden references"),
      nodes: [source, visible, target],
      edges: [source, visible].map((node) => ({
        id: crypto.randomUUID(),
        source: node.id,
        target: target.id,
      })),
      viewport: { x: 0, y: 0, zoom: 0.85 },
    });
    const client = creationClient(saved.id);
    await client.submit(target.id);
    for (let n = 0; n < 100; n++) {
      await new Promise((resolve) => setTimeout(resolve, 100));
      await client.refresh();
      if (client.snapshot.jobs[0]?.status === "succeeded") break;
    }
    if (client.snapshot.jobs[0]?.status !== "succeeded")
      throw new Error("Fixture generation failed");
    let item = client.snapshot.canvasItems.find(
      (item) => item.id === source.id,
    );
    await client.command("canvas.hide", { itemId: item.id }, [
      objectVersion("canvas_item", item),
    ]);
    const latest = await client.writeText(
      "new.md",
      "Reference v2 changed while hidden",
    );
    item = client.snapshot.canvasItems.find((item) => item.id === source.id);
    await client.command(
      "canvas.materialize",
      { itemId: item.id, asset: latest },
      [objectVersion("canvas_item", item)],
    );
    item = client.snapshot.canvasItems.find((item) => item.id === source.id);
    await client.command("canvas.update", { itemId: item.id, locked: true }, [
      objectVersion("canvas_item", item),
    ]);
    const result = {
      id: saved.id,
      source: source.id,
      visible: visible.id,
      target: target.id,
      before: client.snapshot,
      states: [...client.referenceStates],
      latest: latest.assetId,
      specId: itemSpec(
        client.snapshot,
        client.snapshot.canvasItems.find((item) => item.id === target.id),
      ).id,
      targetAsset: currentAsset(
        client.snapshot,
        client.snapshot.canvasItems.find((item) => item.id === target.id),
      ).id,
    };
    client.close();
    await (await import("/src/backend/projects.ts")).releaseBackendProject();
    return result;
  });
  await page.unroute(bootstrap);
  await page.goto(`${base}/ai-tool/ai-canvas/${fixture.id}`);
  await page.getByText("已保存到本机", { exact: true }).waitFor();
  const target = page.locator(`.react-flow__node[data-id="${fixture.target}"]`);
  const source = page.locator(`.react-flow__node[data-id="${fixture.source}"]`);
  assert.equal(await page.locator(".cw-node-reference-button").count(), 0);
  await target.locator(".cw-node").click();
  const editor = page.locator('.cw-composer [contenteditable="true"]');
  await editor.waitFor();
  const hiddenChip = editor
    .locator("[data-reference]")
    .filter({ hasText: "隐藏参考" });
  const visibleChip = editor
    .locator("[data-reference]")
    .filter({ hasText: "可见参考" });
  await hiddenChip.waitFor();
  assert.equal(
    await hiddenChip.evaluate((el) => getComputedStyle(el).borderStyle),
    "solid",
  );
  assert.equal(
    await visibleChip.evaluate((el) => getComputedStyle(el).borderStyle),
    "solid",
  );
  assert.notEqual(
    await hiddenChip.evaluate((el) => getComputedStyle(el).backgroundColor),
    await visibleChip.evaluate((el) => getComputedStyle(el).backgroundColor),
  );
  assert.match(await hiddenChip.getAttribute("title"), /仍作为参考/);
  assert.equal(
    await hiddenChip.evaluate((el) => el.classList.contains("is-unavailable")),
    false,
  );
  // Restoring visibility through the shared command changes decoration only.
  await page.evaluate(async ({ id, source }) => {
    const { creationClient, objectVersion } =
      await import("/src/backend/creationClient.ts");
    const client = creationClient(id);
    const item = client.snapshot.canvasItems.find((item) => item.id === source);
    await client.command("canvas.show", { item }, [
      objectVersion("canvas_item", item),
    ]);
  }, fixture);
  await source.waitFor();
  await page.waitForFunction(() => {
    const chip = [
      ...document.querySelectorAll(".cw-composer [data-reference]"),
    ].find((el) => el.textContent.includes("隐藏参考"));
    return chip && !chip.classList.contains("is-off-canvas");
  });
  assert.equal(
    await hiddenChip.evaluate((el) => getComputedStyle(el).borderStyle),
    "solid",
  );
  const after = await page.evaluate(async (id) => {
    const client = (
      await import("/src/backend/creationClient.ts")
    ).creationClient(id);
    await client.refresh();
    return client.snapshot;
  }, fixture.id);
  for (const key of ["references", "generationSpecs", "jobs", "results"])
    assert.deepEqual(after[key], fixture.before[key], key);
  assert.equal(await page.locator(".cw-node-reference-button").count(), 0);
  assert.deepEqual(errors, []);
  console.log(
    "PASS no expand badge; hidden reference tinted, both references solid, retained inputs and results",
  );
} finally {
  await page
    .evaluate(async () =>
      (await import("/src/backend/projects.ts")).releaseBackendProject(),
    )
    .catch(() => {});
  await browser.close();
}
