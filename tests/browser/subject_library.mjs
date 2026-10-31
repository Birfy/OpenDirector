/** Isolated fixture only: subject slots, uploads, playback and persisted layout. */
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE ?? "playwright-core"
);
const base = process.env.CREATION_WEB_URL ?? "http://127.0.0.1:5179";
const video = execFileSync("ffmpeg", [
  "-v",
  "error",
  "-f",
  "lavfi",
  "-i",
  "color=c=blue:s=128x72:r=10",
  "-t",
  "6",
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
]);
const browser = await chromium.launch({
  headless: true,
  ...(process.env.CHROMIUM_PATH
    ? { executablePath: process.env.CHROMIUM_PATH }
    : {}),
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1500, height: 1050 } });
page.setDefaultTimeout(15000);
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
try {
  const health = await page.request.get(base + "/api/creation-test-health", {
    headers: { "X-OpenDirector-Request": "1" },
  });
  assert.equal((await health.json()).isolated, true);
  for (const unified of [false, true]) {
    const libraryHeaders = {
      "X-OpenDirector-Request": "1",
      "Content-Type": "application/json",
    };
    const previousSubjects = await (
      await page.request.get(base + "/api/library/subjects", {
        headers: libraryHeaders,
      })
    ).json();
    if (previousSubjects.length)
      await page.request.post(base + "/api/library/items/trash", {
        headers: libraryHeaders,
        data: { itemIds: previousSubjects.map((item) => item.id) },
      });
    await page.request.delete(base + "/api/library/trash", {
      headers: libraryHeaders,
    });

    const bootstrap = (url) =>
      url.origin === new URL(base).origin && url.pathname === "/";
    await page.route(bootstrap, (route) =>
      route.fulfill({
        contentType: "text/html",
        body: "<html><body></body></html>",
      }),
    );
    await page.goto(base + (unified ? "/?creation=unified" : "/"));
    const fixture = await page.evaluate(async (video) => {
      const { createDocument, createNode, applyCommand } =
        await import("/src/canvas/model.ts");
      const { importWorkspaceDocument } =
        await import("/src/backend/workspace.ts");
      const image = (id, hue) => {
        const canvas = document.createElement("canvas");
        canvas.width = 240;
        canvas.height = 320;
        const context = canvas.getContext("2d");
        // Reusing this real PNG must exercise shared-media wire format 2.
        if (id === "主图-2") {
          const pixels = context.createImageData(240, 320);
          let seed = 12345;
          for (let i = 0; i < pixels.data.length; i += 4) {
            seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
            pixels.data[i] = seed & 255;
            pixels.data[i + 1] = (seed >>> 8) & 255;
            pixels.data[i + 2] = (seed >>> 16) & 255;
            pixels.data[i + 3] = 255;
          }
          context.putImageData(pixels, 0, 0);
        } else {
          context.fillStyle = `hsl(${hue},35%,28%)`;
          context.fillRect(0, 0, 240, 320);
        }
        context.fillStyle = `hsl(${hue},35%,75%)`;
        context.fillRect(70, 50, 100, 220);
        context.fillStyle = "#fff";
        context.font = "20px sans-serif";
        context.fillText(id, 15, 305);
        return {
          id,
          kind: "image",
          title: id,
          src: canvas.toDataURL(),
          mimeType: "image/png",
          width: 240,
          height: 320,
        };
      };
      const nodes = [0, 1, 2, 3].map((count, i) =>
        createNode(
          "subject",
          { x: 90 + (i % 3) * 400, y: 120 + Math.floor(i / 3) * 420 },
          {
            title: `附加图片 ${count}/3`,
            subject: {
              description:
                "主体描述仅供用户查看。主图片与右侧附加图片共同保留在主体中。",
              category: "character",
              main: image(`主图-${count}`, 140 + i * 30),
              auxiliaries: Array.from({ length: count }, (_, j) =>
                image(`附加-${count}-${j}`, 10 + j * 90),
              ),
            },
          },
        ),
      );
      const film = createNode(
        "subject",
        { x: 490, y: 540 },
        {
          title: "视频主体",
          subject: {
            description: "一份视频作为主体主素材。",
            category: "character",
            auxiliaries: [],
            main: {
              id: "video",
              kind: "video",
              title: "主体视频.mp4",
              mimeType: "video/mp4",
              src: "data:video/mp4;base64," + video,
              durationSeconds: 6,
              width: 128,
              height: 72,
            },
          },
        },
      );
      const locked = {
        ...createNode(
          "subject",
          { x: 890, y: 540 },
          {
            title: "锁定主体",
            subject: {
              description: "已锁定",
              category: "character",
              main: image("锁定主图", 60),
              auxiliaries: [],
            },
          },
        ),
        locked: true,
      };
      const blank = createNode(
        "subject",
        { x: 1290, y: 120 },
        { title: "Blank destination" },
      );
      const ordinary = createNode(
        "image",
        { x: 1290, y: 540 },
        {
          title: "Ordinary image",
          src: image("ordinary", 315).src,
          mediaRole: "asset",
        },
      );
      const audio = createNode(
        "audio",
        { x: 1290, y: 940 },
        { title: "Audio downstream" },
      );
      let original = {
        ...createDocument(
          "Subject transfer " + crypto.randomUUID().slice(0, 8),
        ),
        nodes: [...nodes, film, locked, blank, ordinary, audio],
        viewport: { x: 10, y: 10, zoom: 0.8 },
      };
      original = applyCommand(original, {
        type: "add-edge",
        edge: {
          id: crypto.randomUUID(),
          source: ordinary.id,
          target: nodes[1].id,
          intent: "assembly_input",
        },
      });
      original = applyCommand(original, {
        type: "add-edge",
        edge: {
          id: crypto.randomUUID(),
          source: nodes[1].id,
          target: audio.id,
          intent: "generation_input",
        },
      });
      const savedDocument = await importWorkspaceDocument(original);
      if (location.search.includes("unified"))
        (await import("/src/backend/creationClient.ts"))
          .creationClient(savedDocument.id)
          .close();
      await (await import("/src/backend/projects.ts")).releaseBackendProject();
      return {
        id: savedDocument.id,
        images: nodes.map((n) => n.id),
        video: film.id,
        blank: blank.id,
        ordinary: ordinary.id,
        audio: audio.id,
        title: nodes[2].data.title,
        videoTitle: film.data.title,
        originalCount: original.nodes.length,
        locked: locked.id,
        uploads: [200, 230, 260].map(
          (hue, i) => image(`上传-${i}`, hue).src.split(",")[1],
        ),
      };
    }, video.toString("base64"));
    await page.unroute(bootstrap);
    await page.goto(
      `${base}/ai-tool/ai-canvas/${fixture.id}${unified ? "?creation=unified" : ""}`,
    );
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    const node = (id) => page.locator(`.react-flow__node[data-id="${id}"]`);
    const dialog = page.getByRole("dialog", { name: "资产库", exact: true });
    const add = () =>
      dialog.getByRole("button", { name: "导入画布", exact: true });
    const replace = () =>
      dialog.getByRole("button", { name: "导入选中主体", exact: true });
    const close = async () => {
      await dialog
        .getByRole("button", { name: "关闭资产库", exact: true })
        .click();
      await dialog.waitFor({ state: "hidden" });
    };
    const open = async () => {
      await page
        .getByRole("toolbar", { name: "画布创作工具", exact: true })
        .getByRole("button", { name: "资产库", exact: true })
        .click();
      await dialog.getByRole("tab", { name: "主体", exact: true }).click();
      await dialog.waitFor();
    };
    const choose = (title) =>
      dialog
        .getByRole("checkbox", { name: `选择：${title}`, exact: true })
        .click();
    const read = async () => {
      const response = await page.request.get(
        base +
          `/api/${unified ? "creation/projects/" + fixture.id : "projects/" + fixture.id + "/workspace"}`,
        { headers: { "X-OpenDirector-Request": "1" } },
      );
      assert.equal(response.status(), 200);
      const saved = await response.json();
      if (!unified)
        return { nodes: saved.document.nodes, edges: saved.document.edges };
      return {
        nodes: saved.canvasItems
          .filter((item) => item.visible)
          .map((item) => ({
            id: item.id,
            type: item.kind,
            data: {
              title: item.title,
              subject:
                item.binding.role === "editor"
                  ? saved.editorDocuments.find(
                      (doc) => doc.id === item.binding.objectRef.id,
                    )?.data
                  : undefined,
            },
          })),
        edges: saved.editorDocuments.flatMap(
          (doc) => doc.inputConnections ?? [],
        ),
      };
    };
    const waitCount = async (count) => {
      for (let i = 0; i < 100; i++) {
        const saved = await read();
        if (saved.nodes.length === count) return saved;
        await page.waitForTimeout(100);
      }
      throw new Error("Imported subject count did not persist");
    };
    const selected = async (ids) => {
      await page.waitForFunction((ids) => {
        const actual = [
          ...document.querySelectorAll(".react-flow__node.selected"),
        ].map((el) => el.getAttribute("data-id"));
        return (
          actual.length === ids.length && ids.every((id) => actual.includes(id))
        );
      }, ids);
    };
    // Empty-subject import selects its own destination and opens the subjects tab.
    await node(fixture.blank)
      .getByRole("button", { name: "导入主体", exact: true })
      .click();
    await dialog.waitFor();
    assert.equal(
      await dialog.getByRole("button", { name: "关闭", exact: true }).count(),
      0,
    );
    assert.equal(await add().isDisabled(), true);
    assert.equal(await replace().isDisabled(), true);
    await close();
    for (const [id, title] of [
      [fixture.images[2], fixture.title],
      [fixture.video, fixture.videoTitle],
    ]) {
      await node(id)
        .locator(
          id === fixture.video ? ".cw-subject-video" : ".cw-subject-main",
        )
        .click({ position: { x: 8, y: 8 } });
      await selected([id]);
      await open();
      await dialog
        .getByRole("button", { name: "加入选中主体", exact: true })
        .click();
      await dialog
        .getByRole("checkbox", { name: `选择：${title}`, exact: true })
        .waitFor();
      await close();
    }
    // Library selection alone controls creation; replacement also needs one canvas subject.
    await page.mouse.click(1430, 910);
    await selected([]);
    await open();
    await choose(fixture.title);
    assert.equal(await add().isEnabled(), true);
    assert.equal(await replace().isDisabled(), true);
    await choose(fixture.videoTitle);
    assert.equal(await replace().isDisabled(), true);
    await add().click();
    await dialog.waitFor({ state: "hidden" });
    let saved = await waitCount(fixture.originalCount + 2);
    const copies = saved.nodes.filter(
      (item) => item.data.subject?.librarySource,
    );
    assert.equal(copies.length, 2);
    assert.ok(
      copies.some((item) => item.data.subject.auxiliaries.length === 2),
    );
    if (!unified) {
      const response = await page.request.get(
        base + `/api/projects/${fixture.id}/workspace`,
        {
          headers: libraryHeaders,
        },
      );
      const wire = (await response.json()).document;
      assert.equal(wire.version, 2);
      assert.ok(wire.mediaSources.some((src) => src.length > 64 * 1024));
      assert.ok(
        wire.nodes.some((item) =>
          item.data.subject?.main?.src?.startsWith("opendirector-media:"),
        ),
      );
      // Backing up a copied subject must resolve its shared bytes as well.
      const copy = copies.find(
        (item) => item.data.subject.main.kind === "image",
      );
      const backup = await page.request.post(
        base + "/api/library/subjects/from-canvas",
        {
          headers: libraryHeaders,
          data: { projectId: fixture.id, nodeId: copy.id },
        },
      );
      assert.equal(backup.status(), 200, await backup.text());
      const backedUp = await backup.json();
      await page.request.post(base + "/api/library/items/trash", {
        headers: libraryHeaders,
        data: { itemIds: [backedUp.id] },
      });
    }
    await page.waitForTimeout(1100);
    await page.getByRole("button", { name: "撤销", exact: true }).click();
    await waitCount(fixture.originalCount);
    await page.getByRole("button", { name: "重做", exact: true }).click();
    await waitCount(fixture.originalCount + 2);
    // A blank destination is filled without renaming it or changing its annotation.
    await node(fixture.blank)
      .getByRole("button", { name: "导入主体", exact: true })
      .click();
    await choose(fixture.title);
    assert.equal(await replace().isEnabled(), true);
    await replace().click();
    await dialog.waitFor({ state: "hidden" });
    saved = await read();
    let target = saved.nodes.find((item) => item.id === fixture.blank);
    assert.equal(target.data.title, "Blank destination");
    assert.equal(target.data.subject.description, "");
    assert.equal(target.data.subject.auxiliaries.length, 2);
    // Replacing a populated subject clears retained assembly, keeps outgoing reference,
    // and preserves the target's presentation and user annotation.
    await node(fixture.images[1]).locator(".cw-subject-main").click();
    await selected([fixture.images[1]]);
    await open();
    await choose(fixture.title);
    assert.equal(await replace().isEnabled(), true);
    const old = await read(),
      before = old.nodes.find((item) => item.id === fixture.images[1]);
    await replace().click();
    await dialog.waitFor({ state: "hidden" });
    saved = await read();
    target = saved.nodes.find((item) => item.id === fixture.images[1]);
    assert.equal(target.data.title, before.data.title);
    assert.equal(
      target.data.subject.description,
      before.data.subject.description,
    );
    assert.ok(target.data.subject.librarySource);
    assert.equal(
      saved.edges.filter(
        (edge) =>
          edge.target === fixture.images[1] ||
          edge.sourceId === fixture.ordinary,
      ).length,
      0,
    );
    await page.waitForTimeout(1100);
    await page.getByRole("button", { name: "撤销", exact: true }).click();
    await page.waitForFunction(
      (id) =>
        document
          .querySelector(
            `.react-flow__node[data-id="${id}"] .cw-subject-main img`,
          )
          ?.getAttribute("alt")
          ?.includes("main") === false,
      fixture.images[1],
    );
    await page.getByRole("button", { name: "重做", exact: true }).click();
    await page.waitForFunction(
      (id) =>
        document
          .querySelector(
            `.react-flow__node[data-id="${id}"] .cw-subject-main img`,
          )
          ?.getAttribute("alt")
          ?.includes("main") === true,
      fixture.images[1],
    );
    // Image -> video would invalidate the existing audio downstream; reject it.
    await node(fixture.images[1]).locator(".cw-subject-main").click();
    await open();
    await choose(fixture.videoTitle);
    await replace().click();
    await dialog.getByRole("status").filter({ hasText: "不兼容" }).waitFor();
    assert.equal(
      (await read()).nodes.find((item) => item.id === fixture.images[1]).data
        .subject.main.kind,
      "image",
    );
    await close();
    for (const id of [fixture.locked, fixture.ordinary]) {
      await node(id)
        .locator(
          id === fixture.ordinary ? ".cw-image-preview" : ".cw-subject-main",
        )
        .click();
      await selected([id]);
      await open();
      await choose(fixture.title);
      assert.equal(await replace().isDisabled(), true);
      assert.equal(await add().isEnabled(), true);
      await close();
    }
    await page.getByRole("button", { name: "缩放选项", exact: true }).click();
    await page.getByRole("button", { name: /适应所有内容/ }).click();
    await page.waitForTimeout(350);
    await node(fixture.images[0]).locator(".cw-subject-main").click();
    await page.keyboard.down("Shift");
    await node(fixture.video)
      .locator(".cw-subject-video")
      .click({ position: { x: 8, y: 8 } });
    await page.keyboard.up("Shift");
    await selected([fixture.images[0], fixture.video]);
    await open();
    await choose(fixture.title);
    assert.equal(await replace().isDisabled(), true);
    // Searching clears old invisible choices; deleting library entries does not affect copies.
    await dialog
      .getByRole("searchbox", { name: "搜索资产库", exact: true })
      .fill("no matching subject");
    assert.equal(await add().isDisabled(), true);
    await dialog
      .getByRole("searchbox", { name: "搜索资产库", exact: true })
      .fill("");
    await choose(fixture.title);
    await choose(fixture.videoTitle);
    await dialog
      .getByRole("button", { name: "移入回收站", exact: true })
      .click();
    await page.waitForFunction(
      () =>
        document.querySelectorAll('.cw-lib-grid [role="checkbox"]').length ===
        0,
    );
    assert.equal(await add().isDisabled(), true);
    await close();
    const purge = await page.request.delete(base + "/api/library/trash", {
      headers: { "X-OpenDirector-Request": "1" },
    });
    assert.equal(purge.status(), 200);
    await page.reload();
    await page.getByText("已保存到本机", { exact: true }).waitFor();
    const after = await waitCount(fixture.originalCount + 2);
    assert.equal(
      after.nodes.filter((item) => item.data.subject?.librarySource).length,
      4,
    );
    for (const copy of copies) {
      const image = node(copy.id).locator("img").first(),
        video = node(copy.id).locator("video");
      if (await image.count())
        assert.equal(
          await image.evaluate((el) => el.complete && el.naturalWidth > 0),
          true,
        );
      else assert.ok(await video.evaluate((el) => el.readyState >= 1));
    }
    console.log(
      JSON.stringify({
        mode: unified ? "unified" : "workspace",
        emptyAndInvalidSelections: true,
        batchCreate: true,
        replaceBlankAndPopulated: true,
        oneStepUndoRedo: true,
        incompatibleDownstreamRejected: true,
        independentAfterLibraryPurge: true,
        sourceIdentityRetained: true,
      }),
    );
  }
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ passed: true, pageErrors: errors }));
} catch (error) {
  await page.screenshot({
    path: "/tmp/opendirector-subject-library-failure.png",
  });
  throw error;
} finally {
  await browser.close();
}
