/** Isolated fixture only: real structured submission, source choices and upload rejection. */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE ?? "playwright-core"
);
const base = process.env.CREATION_WEB_URL ?? "http://127.0.0.1:5187";
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROMIUM_PATH,
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
page.setDefaultTimeout(15000);
const png =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGUlEQVR4nGNsYGhgIAUwkaR6VMOohiGlAQBCPQEgiSD+iQAAAABJRU5ErkJggg==";
const bootstrap = (url) =>
  url.origin === new URL(base).origin && url.pathname === "/";
try {
  const health = await (
    await page.request.get(base + "/api/creation-test-health", {
      headers: { "X-OpenDirector-Request": "1" },
    })
  ).json();
  assert.equal(health.isolated, true);
  await page.route(bootstrap, (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<html><body></body></html>",
    }),
  );
  await page.goto(base);
  const submission = await page.evaluate(async (png) => {
    const { request } = await import("/src/backend/api.ts");
    const { createDocument } = await import("/src/canvas/model.ts");
    const { importWorkspaceDocument } =
      await import("/src/backend/workspace.ts");
    const { releaseBackendProject } = await import("/src/backend/projects.ts");
    const {
      submitGeneration,
      projectSnapshot,
      serviceNodeId,
      prepareReferences,
    } = await import("/src/backend/generation.ts");
    const { uploadReferenceFile } =
      await import("/src/backend/referenceUploads.ts");
    const models = await request("/model-configs");
    const config = (models.models ?? models).find(
      (model) => model.kind === "image",
    );
    const saved = await importWorkspaceDocument({
      ...createDocument(),
      title: "Parity submission " + crypto.randomUUID().slice(0, 8),
      nodes: [],
      edges: [],
    });
    const target = crypto.randomUUID(),
      a = crypto.randomUUID(),
      b = crypto.randomUUID();
    const part = (id) => ({
      type: "reference",
      assetId: "node:" + id,
      nodeId: id,
      name: "same name",
    });
    const input = {
      documentId: saved.id,
      documentTitle: saved.title,
      nodeId: target,
      config,
      kind: "image",
      title: "Target",
      videoMode: "first_frame",
      prompt: "Draw",
      promptContent: [
        { type: "text", text: "Before " },
        part(b),
        { type: "text", text: " between " },
        part(a),
        { type: "text", text: " repeat " },
        part(b),
      ],
      references: [
        { kind: "image", title: "same name", nodeId: a, src: png },
        { kind: "image", title: "same name", nodeId: b, src: png },
      ],
    };
    const readTask = async (id) => {
      for (let index = 0; index < 100; index++) {
        const snapshot = await projectSnapshot(saved.id);
        const task = snapshot.tasks.find((task) => task.id === id);
        if (task && ["succeeded", "failed"].includes(task.status))
          return { snapshot, task };
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      throw new Error("Fixture task did not finish");
    };
    const first = await submitGeneration(input, new AbortController().signal);
    const completed = await readTask(first.taskId);
    const second = await submitGeneration(input, new AbortController().signal);
    const repeated = await readTask(second.taskId);
    const body = repeated.task.promptContent;
    const sources = repeated.snapshot.canvas.nodes.filter(
      (node) => node.role === "material",
    );
    const file = new File([await (await fetch(png)).blob()], "same.png", {
      type: "image/png",
    });
    let choiceCount = 0,
      cancelled = false;
    const chosen = await uploadReferenceFile(
      saved.id,
      file,
      new AbortController().signal,
      async (matches) => {
        choiceCount = matches.length;
        return matches.find((asset) => asset.nodeId === sources[1].id);
      },
    );
    try {
      await uploadReferenceFile(
        saved.id,
        file,
        new AbortController().signal,
        async () => {
          throw new DOMException("cancel", "AbortError");
        },
      );
    } catch (error) {
      cancelled = error.name === "AbortError";
    }
    const countBeforeReuse = repeated.snapshot.assets.length;
    const generatedAsset = repeated.snapshot.assets.find(
      (asset) => asset.id === repeated.task.assetId,
    );
    const reused = await prepareReferences(
      saved.id,
      [
        {
          kind: "image",
          nodeId: target,
          title: "Generated continuation",
          assetId: generatedAsset.id,
          src: `/api/data/${saved.id}/assets/${generatedAsset.id}`,
        },
      ],
      new AbortController().signal,
    );
    const afterReuse = await projectSnapshot(saved.id);
    const reusedCanonical =
      reused[0].asset.id === generatedAsset.id &&
      afterReuse.assets.length === countBeforeReuse;
    await releaseBackendProject();
    return {
      reusedCanonical,
      firstStatus: completed.task.status,
      secondStatus: repeated.task.status,
      target: repeated.task.logicalNodeId,
      expectedTarget: target,
      sameExecution: completed.task.nodeId === repeated.task.nodeId,
      ids: repeated.task.referenceIds,
      firstIds: completed.task.referenceIds,
      body,
      sourceCount: sources.length,
      choiceCount,
      chosen: chosen.nodeId,
      expectedChoice: sources[1].id,
      cancelled,
      expectedOrder: [
        await serviceNodeId(b, "source:body"),
        await serviceNodeId(a, "source:body"),
        await serviceNodeId(b, "source:body"),
      ],
    };
  }, png);
  assert.equal(submission.reusedCanonical, true);
  assert.equal(submission.firstStatus, "succeeded");
  assert.equal(submission.secondStatus, "succeeded");
  assert.equal(submission.target, submission.expectedTarget);
  assert.equal(submission.sameExecution, true);
  assert.equal(submission.sourceCount, 2);
  assert.deepEqual(submission.ids, submission.firstIds);
  assert.deepEqual(
    submission.body
      .filter((part) => part.type === "reference")
      .map((part) => part.nodeId),
    submission.expectedOrder,
  );
  assert.equal(submission.choiceCount, 2);
  assert.equal(submission.chosen, submission.expectedChoice);
  assert.equal(submission.cancelled, true);
  console.log(
    "PASS workspace: stable execution ownership, independent equal-byte sources, inline order/repeats, explicit upload source choice and cancellation.",
  );

  const mp4 = execFileSync("ffmpeg", [
    "-v",
    "error",
    "-f",
    "lavfi",
    "-i",
    "color=c=blue:s=32x32:r=5",
    "-t",
    "1",
    "-threads",
    "1",
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "frag_keyframe+empty_moov",
    "-f",
    "mp4",
    "pipe:1",
  ]);
  for (const unified of [false, true]) {
    await page.goto(base + (unified ? "/?creation=unified" : "/"));
    const fixture = await page.evaluate(async () => {
      const { createDocument, createNode } =
        await import("/src/canvas/model.ts");
      const { importWorkspaceDocument } =
        await import("/src/backend/workspace.ts");
      const { releaseBackendProject } =
        await import("/src/backend/projects.ts");
      const node = createNode(
        "image",
        { x: 100, y: 100 },
        { title: "Type protected" },
      );
      const saved = await importWorkspaceDocument({
        ...createDocument(),
        title: "Parity type " + crypto.randomUUID().slice(0, 8),
        nodes: [node],
        edges: [],
      });
      await releaseBackendProject();
      return { id: saved.id, node: node.id };
    });
    await page.unroute(bootstrap);
    await page.goto(
      `${base}/ai-tool/ai-canvas/${fixture.id}${unified ? "?creation=unified" : ""}`,
    );
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    const card = page.locator(`.react-flow__node[data-id="${fixture.node}"]`);
    await card.hover();
    const [chooser] = await Promise.all([
      page.waitForEvent("filechooser"),
      card.getByRole("button", { name: "上传图片", exact: true }).click(),
    ]);
    await chooser.setFiles({
      name: "wrong.mp4",
      mimeType: "video/mp4",
      buffer: mp4,
    });
    await page.getByText(/该节点仅支持图片素材/).waitFor();
    assert.equal(
      await page
        .locator(`.react-flow__node[data-id="${fixture.node}"] video`)
        .count(),
      0,
    );
    assert.equal(
      await card.getByRole("button", { name: "上传图片", exact: true }).count(),
      1,
    );
    await card.click();
    await page
      .getByRole("textbox", { name: "生成提示词", exact: true })
      .waitFor();
    await page.locator(".cw-composer input[type=file]").setInputFiles({
      name: "notes.md",
      mimeType: "text/markdown",
      buffer: Buffer.from("结构化文本参考", "utf8"),
    });
    await page.waitForFunction(
      () =>
        document.querySelectorAll(".cw-composer [data-reference]").length === 1,
    );
    const part = JSON.parse(
      await page
        .locator(".cw-composer [data-reference]")
        .getAttribute("data-reference"),
    );
    assert.ok(part.nodeId);
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    const fixed = await page.evaluate(
      async ({ projectId, nodeId }) => {
        const { loadReferenceCatalog } =
          await import("/src/backend/referenceCatalog.ts");
        const asset = (await loadReferenceCatalog(projectId)).find(
          (asset) => asset.nodeId === nodeId,
        );
        if (!asset)
          throw new Error("Uploaded source missing from canonical catalog");
        return {
          type: "reference",
          binding: "asset",
          assetId: asset.id,
          nodeId: asset.nodeId,
          name: asset.name,
          fingerprint: asset.fingerprint,
        };
      },
      { projectId: fixture.id, nodeId: part.nodeId },
    );
    await page
      .getByRole("textbox", { name: "生成提示词", exact: true })
      .fill("");
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    await page
      .getByRole("textbox", { name: "生成提示词", exact: true })
      .evaluate(
        (element, payload) => {
          const clipboard = new DataTransfer();
          clipboard.setData(
            "application/x-opendirector-references",
            JSON.stringify(payload),
          );
          clipboard.setData("text/plain", "@Pinned");
          element.focus();
          element.dispatchEvent(
            new ClipboardEvent("paste", {
              bubbles: true,
              cancelable: true,
              clipboardData: clipboard,
            }),
          );
        },
        { scope: fixture.id, content: [fixed] },
      );
    await page.waitForFunction(
      () =>
        document.querySelectorAll(".cw-composer [data-reference]").length === 1,
    );
    const pasted = JSON.parse(
      await page
        .locator(".cw-composer [data-reference]")
        .getAttribute("data-reference"),
    );
    assert.equal(pasted.binding, "asset");
    assert.equal(pasted.nodeId, undefined);
    assert.equal(await page.locator(".react-flow__edge").count(), 0);
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    console.log(
      `PASS ${unified ? "unified" : "workspace"}: actual MP4 rejected by empty image node; UTF-8 Markdown reference linked; pinned paste loads inventory without opening @ and creates no following edge.`,
    );
    await page.evaluate(async () => {
      await (await import("/src/backend/projects.ts")).releaseBackendProject();
    });
    await page.route(bootstrap, (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<html><body></body></html>",
      }),
    );
  }
  assert.deepEqual(errors, []);
} catch (error) {
  await page.screenshot({
    path: "/tmp/opendirector-reference-parity-failure.png",
  });
  console.error((await page.locator("body").innerText()).slice(-1600));
  throw error;
} finally {
  await browser.close();
}
