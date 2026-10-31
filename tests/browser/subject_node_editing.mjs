/** Use tests/browser/creation_server.py: no user projects or paid model calls. */
import assert from "node:assert/strict";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE ?? "playwright-core"
);
const base = process.env.CREATION_WEB_URL ?? "http://127.0.0.1:5187";
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : {}),
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1700, height: 1000 } });
page.setDefaultTimeout(15000);
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const rows = [];
try {
  const health = await page.request.get(base + "/api/creation-test-health", {
    headers: { "X-MuseShow-Request": "1" },
  });
  assert.equal((await health.json()).isolated, true);
  for (const unified of [false, true]) {
    const mode = unified ? "?creation=unified" : "";
    const bootstrap = (url) =>
      url.origin === new URL(base).origin && url.pathname === "/";
    await page.route(bootstrap, (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<html><body></body></html>",
      }),
    );
    await page.goto(base + "/" + mode);
    const f = await page.evaluate(async () => {
      const { createDocument, createNode } =
        await import("/src/canvas/model.ts");
      const { importWorkspaceDocument } =
        await import("/src/backend/workspace.ts");
      const canvas = document.createElement("canvas");
      canvas.width = 96;
      canvas.height = 64;
      const context = canvas.getContext("2d");
      context.fillStyle = "teal";
      context.fillRect(0, 0, 96, 64);
      const blank = createNode(
        "subject",
        { x: 180, y: 200 },
        { title: "空白主体" },
      );
      const filled = createNode(
        "subject",
        { x: 680, y: 200 },
        {
          title: "已有素材",
          subject: {
            description: "原说明",
            category: "character",
            auxiliaries: [],
            main: {
              id: "main",
              kind: "image",
              title: "Portrait",
              src: canvas.toDataURL(),
              width: 96,
              height: 64,
            },
          },
        },
      );
      const locked = {
        ...createNode("subject", { x: 1180, y: 200 }, { title: "锁定主体" }),
        locked: true,
      };
      const saved = await importWorkspaceDocument({
        ...createDocument("Subject UI " + crypto.randomUUID().slice(0, 8)),
        nodes: [blank, filled, locked],
        viewport: { x: 0, y: 0, zoom: 0.8 },
      });
      if (location.search.includes("unified"))
        (await import("/src/backend/creationClient.ts"))
          .creationClient(saved.id)
          .close();
      await (await import("/src/backend/projects.ts")).releaseBackendProject();
      return {
        id: saved.id,
        blank: blank.id,
        filled: filled.id,
        locked: locked.id,
      };
    });
    await page.unroute(bootstrap);
    await page.goto(base + "/ai-tool/ai-canvas/" + f.id + mode);
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    const node = (id) => page.locator(`.react-flow__node[data-id="${id}"]`);
    await node(f.blank).locator(".cw-node-title").dblclick();
    const title = node(f.blank).getByRole("textbox", {
      name: "节点名称",
      exact: true,
    });
    await title.fill("新的主体名称");
    await title.press("Enter");
    assert.equal(
      await node(f.blank).locator(".cw-node-title").innerText(),
      "新的主体名称",
    );
    assert.equal(await page.getByRole("dialog").count(), 0);
    await node(f.blank).locator(".cw-node-title").dblclick();
    await title.fill("Cancelled rename");
    await title.press("Escape");
    assert.equal(
      await node(f.blank).locator(".cw-node-title").innerText(),
      "新的主体名称",
    );
    const description = node(f.blank).getByRole("textbox", {
      name: "主体描述",
      exact: true,
    });
    await description.fill("仅供用户查看的说明");
    await description.press("Enter");
    const otherDescription = node(f.filled).getByRole("textbox", {
      name: "主体描述",
      exact: true,
    });
    await otherDescription.fill("Cancelled annotation");
    await otherDescription.press("Escape");
    assert.equal(await otherDescription.inputValue(), "原说明");
    await otherDescription.fill("更新后的素材说明");
    await otherDescription.press("Enter");
    assert.equal(
      await page.getByRole("button", { name: "编辑主体", exact: true }).count(),
      0,
    );
    await node(f.filled).locator(".cw-domain-card-preview").click();
    const toolbar = page.getByRole("toolbar", {
      name: "节点操作",
      exact: true,
    });
    await toolbar.waitFor();
    assert.equal(
      await toolbar
        .getByRole("button", { name: "编辑主体", exact: true })
        .count(),
      0,
    );
    await node(f.filled)
      .locator(".cw-domain-card-preview")
      .click({ button: "right" });
    assert.equal(
      await page
        .getByRole("menuitem", { name: "打开编辑器", exact: true })
        .count(),
      0,
    );
    await page.keyboard.press("Escape");
    assert.equal(
      await page
        .getByRole("button", { name: "重命名主体", exact: true })
        .count(),
      0,
    );
    assert.equal(
      await node(f.blank).locator(".cw-subject-empty > header").count(),
      0,
    );
    await node(f.locked).locator(".cw-node-title").dblclick();
    assert.equal(
      await node(f.locked)
        .getByRole("textbox", { name: "节点名称", exact: true })
        .count(),
      0,
    );
    assert.equal(
      await node(f.locked)
        .getByRole("textbox", { name: "主体描述", exact: true })
        .isEditable(),
      false,
    );
    const choosing = page.waitForEvent("filechooser");
    await node(f.blank)
      .getByRole("button", { name: "导入主体", exact: true })
      .click();
    await (await choosing).setFiles([]);
    assert.equal(await page.getByRole("dialog").count(), 0);
    const read = async () => {
      const response = await page.request.get(
        base +
          "/api/" +
          (unified
            ? "creation/projects/" + f.id
            : "projects/" + f.id + "/workspace"),
        { headers: { "X-MuseShow-Request": "1" } },
      );
      assert.equal(response.status(), 200);
      return response.json();
    };
    let saved;
    for (let attempt = 0; attempt < 100; attempt++) {
      saved = await read();
      const current = unified
        ? saved.canvasItems.find((n) => n.id === f.blank)
        : saved.document.nodes.find((n) => n.id === f.blank);
      const data = unified
        ? saved.editorDocuments.find(
            (d) => d.id === current.binding.objectRef.id,
          ).data
        : current.data.subject;
      if (
        (unified ? current.title : current.data.title) === "新的主体名称" &&
        data.description === "仅供用户查看的说明"
      )
        break;
      await page.waitForTimeout(100);
      if (attempt === 99) throw new Error("Subject edits did not persist");
    }
    await page.reload();
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    assert.equal(
      await node(f.blank).locator(".cw-node-title").innerText(),
      "新的主体名称",
    );
    assert.equal(
      await node(f.blank)
        .getByRole("textbox", { name: "主体描述", exact: true })
        .inputValue(),
      "仅供用户查看的说明",
    );
    assert.equal(
      await node(f.filled)
        .getByRole("textbox", { name: "主体描述", exact: true })
        .inputValue(),
      "更新后的素材说明",
    );
    assert.equal(
      await page.getByRole("button", { name: "编辑主体", exact: true }).count(),
      0,
    );
    const limits = await page.evaluate(async () => {
      const layout = await import("/src/canvas/subjectLayout.ts");
      return {
        base: layout.SUBJECT_BASE_HEIGHT,
        max: layout.SUBJECT_MAX_HEIGHT,
        textMax: layout.SUBJECT_DESCRIPTION_MAX_HEIGHT,
      };
    });
    const dimensions = (id) =>
      node(id).evaluate((element) => {
        const text = element.querySelector(".cw-subject-description");
        return {
          width: element.offsetWidth,
          height: element.offsetHeight,
          textHeight: text.offsetHeight,
          scrollHeight: text.scrollHeight,
          overflow: getComputedStyle(text).overflowY,
        };
      });
    for (const [id, original] of [
      [f.blank, "仅供用户查看的说明"],
      [f.filled, "更新后的素材说明"],
    ]) {
      const input = node(id).getByRole("textbox", {
        name: "主体描述",
        exact: true,
      });
      const before = await dimensions(id);
      assert.equal(before.height, limits.base);
      await input.fill("说明一\n说明二\n说明三");
      await input.press("Enter");
      await page.waitForFunction(
        ({ id, base, max }) => {
          const height = document.querySelector(
            `.react-flow__node[data-id="${id}"]`,
          ).offsetHeight;
          return height > base && height < max;
        },
        { id, base: limits.base, max: limits.max },
      );
      const grown = await dimensions(id);
      assert.equal(grown.width, before.width);
      await input.fill(
        Array(60).fill("主体描述，达到上限后在内部滚动").join("\n"),
      );
      await input.press("Enter");
      await page.waitForFunction(
        ({ id, max }) =>
          document.querySelector(`.react-flow__node[data-id="${id}"]`)
            .offsetHeight === max,
        { id, max: limits.max },
      );
      const capped = await dimensions(id);
      assert.equal(capped.width, before.width);
      assert.equal(capped.textHeight, limits.textMax);
      assert.ok(capped.scrollHeight > capped.textHeight);
      assert.equal(capped.overflow, "auto");
      await page.getByRole("button", { name: "缩放选项", exact: true }).click();
      await page
        .getByRole("spinbutton", { name: "缩放百分比", exact: true })
        .fill("50");
      await page.keyboard.press("Escape");
      assert.deepEqual(await dimensions(id), capped);
      await input.fill(original);
      await input.press("Enter");
      await page.waitForFunction(
        ({ id, base }) =>
          document.querySelector(`.react-flow__node[data-id="${id}"]`)
            .offsetHeight === base,
        { id, base: limits.base },
      );
      assert.equal((await dimensions(id)).overflow, "hidden");
    }
    rows.push({
      mode: unified ? "unified" : "workspace",
      checks: [
        "heading rename",
        "description auto height and shrink",
        "description height cap and scroll",
        "fixed canvas width and zoom-independent size",
        "rename cancel",
        "inline annotation save/cancel",
        "no subject editor entry",
        "locked controls",
        "direct import",
        "reopen",
      ],
    });
    console.log(JSON.stringify(rows.at(-1)));
  }
  assert.deepEqual(errors, []);
  console.log(
    JSON.stringify({ passed: true, modes: rows.length, pageErrors: errors }),
  );
} catch (error) {
  await page.screenshot({ path: "/tmp/opendesign-subject-edit-failure.png" });
  throw error;
} finally {
  await browser.close();
}
