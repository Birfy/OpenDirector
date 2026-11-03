/** Isolated API fixture; delayed list pages exercise progressive loading. */
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
});
let releasePage;
try {
  const page = await browser.newPage({
    viewport: { width: 1500, height: 1000 },
  });
  page.setDefaultTimeout(15000);
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
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
  await page.goto(base);
  const projectId = await page.evaluate(async () => {
    const { createDocument } = await import("/src/canvas/model.ts");
    const { importWorkspaceDocument } =
      await import("/src/backend/workspace.ts");
    const { releaseBackendProject } = await import("/src/backend/projects.ts");
    const saved = await importWorkspaceDocument(
      createDocument("Asset listing " + crypto.randomUUID().slice(0, 8)),
    );
    (await import("/src/backend/creationClient.ts"))
      .creationClient(saved.id)
      .close();
    await releaseBackendProject();
    return saved.id;
  });
  await page.unroute(bootstrap);
  await page.goto(`${base}/ai-tool/ai-canvas/${projectId}`);
  await page.getByText("已保存到本机", { exact: true }).waitFor();
  // Only listing responses are simulated; project save and open use the API.
  const rows = Array.from({ length: 201 }, (_, index) => ({
    asset: { id: crypto.randomUUID(), name: `Asset ${index}`, kind: "text" },
    usage: { used: false, reasons: [], hiddenItemIds: [] },
    owners: [],
    specId: null,
    createdOrder: index,
  }));
  let cursorMismatch = false;
  const queries = [];
  const secondPage = new Promise((resolve) => (releasePage = resolve));
  await page.route(
    `**/creation/projects/${projectId}/asset-list?*`,
    async (route) => {
      const params = new URL(route.request().url()).searchParams;
      const query = params.get("text");
      queries.push(query);
      const offset = Number(params.get("offset"));
      if (offset && !cursorMismatch) await secondPage;
      await route.fulfill({
        json: {
          items: query ? [rows[200]] : rows.slice(offset, offset + 200),
          total: query ? 1 : rows.length,
          eventCursor: cursorMismatch && offset ? 2 : 1,
        },
      });
    },
  );
  await page.getByRole("button", { name: "资产列表", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "资产列表", exact: true });
  await dialog.getByRole("checkbox").first().waitFor();
  assert.equal(await dialog.getByRole("checkbox").count(), 200);
  await dialog.getByRole("status").filter({ hasText: "200/201" }).waitFor();
  releasePage();
  await dialog
    .getByRole("checkbox", { name: "选择资产：Asset 200", exact: true })
    .waitFor();
  assert.equal(await dialog.getByRole("checkbox").count(), 201);
  const search = dialog.getByRole("textbox", { name: "查找资产" });
  const count = queries.length;
  await search.pressSequentially("Asset 200", { delay: 20 });
  await page.waitForFunction(
    () => document.querySelectorAll(".cw-creation-asset-row").length === 1,
  );
  assert.deepEqual(queries.slice(count), ["Asset 200"]);
  // Pages from different project revisions must never form a usable list.
  cursorMismatch = true;
  await search.fill("");
  await dialog
    .getByRole("alert")
    .filter({ hasText: "资产列表已变化" })
    .waitFor();
  assert.equal(await dialog.getByRole("checkbox").count(), 0);
  cursorMismatch = false;
  await dialog.getByRole("button", { name: "重新读取资产及使用状态" }).click();
  await dialog
    .getByRole("checkbox", { name: "选择资产：Asset 200", exact: true })
    .waitFor();
  assert.equal(await dialog.getByRole("checkbox").count(), 201);
  await dialog.getByRole("button", { name: "关闭资产列表" }).click();
  await page.unroute(`**/creation/projects/${projectId}/asset-list?*`);
  await page.evaluate(async (projectId) => {
    const { creationClient } = await import("/src/backend/creationClient.ts");
    await creationClient(projectId).command("asset.writeText", {
      name: "Actual asset.md",
      text: "Asset list integration check",
    });
  }, projectId);
  await page.getByRole("button", { name: "资产列表", exact: true }).click();
  await dialog
    .getByRole("checkbox", { name: "选择资产：Actual asset.md", exact: true })
    .waitFor();
  assert.equal(await dialog.getByRole("checkbox").count(), 1);
  assert.deepEqual(errors, []);
  console.log(
    JSON.stringify({
      firstPageBeforeCompletion: true,
      debouncedSearch: true,
      cursorConflictDiscarded: true,
      retry: true,
      realAssetQuery: true,
      errors,
    }),
  );
} finally {
  releasePage?.();
  await browser.close();
}
