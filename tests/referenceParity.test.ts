import { generationEditIdentity } from "../src/canvas/generationReferenceContent.ts";
import { referenceContentCommand } from "../src/canvas/generationReferenceEdit.ts";
import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import {
  readEditorResource,
  classifyImportFile,
} from "../src/canvas/editorMedia.ts";
import { uploadIssue } from "../src/canvas/uploadPolicy.ts";
import {
  referenceBudgetIssue,
  type ModelConfig,
} from "../src/backend/rules.ts";
import { refreshReferenceSources } from "../src/backend/referenceSources.ts";
import {
  prepareReferences,
  serviceNodeId,
  submissionContent,
  fingerprint,
} from "../src/backend/generation.ts";
import {
  currentReferences,
  referencePart,
} from "../src/canvas/chatReferenceContent.ts";
import {
  assetOptionId,
  referenceCandidates,
} from "../src/canvas/referenceCandidates.ts";
import { uploadReferenceFile } from "../src/backend/referenceUploads.ts";
import { serializeDocument, parseDocument } from "../src/canvas/storage.ts";

test("direct replacement preserves type; global, subject and timeline uploads use their own rules", () => {
  for (const target of ["image", "video", "audio", "text"] as const)
    for (const uploaded of ["image", "video", "audio", "text"] as const)
      assert.equal(
        uploadIssue(uploaded, "replace", target) === null,
        target === uploaded,
      );
  assert.equal(uploadIssue("video", "create"), null);
  assert.equal(uploadIssue("video", "subject-main"), null);
  assert.ok(uploadIssue("video", "subject-auxiliary"));
  assert.ok(uploadIssue("text", "timeline"));
});

test("text imports decode UTF-8, retain real bytes, reject binary and survive storage", async () => {
  const file = new File(["\uFEFF中文参考"], "notes.md", {
    type: "application/octet-stream",
  });
  assert.equal(classifyImportFile(file).kind, "text");
  const resource = await readEditorResource(file);
  assert.equal(resource.text, "中文参考");
  assert.equal(resource.byteSize, file.size);
  await assert.rejects(
    readEditorResource(new File([new Uint8Array([255, 254])], "invalid.txt")),
  );
  await assert.rejects(readEditorResource(new File(["a\0b"], "binary.md")));
  const node = createNode("text", undefined, {
    text: resource.text,
    byteSize: resource.byteSize,
  });
  const serialized = serializeDocument({ ...createDocument(), nodes: [node] });
  assert.ok(serialized.ok);
  const parsed = parseDocument(serialized.value);
  assert.ok(parsed.ok);
  assert.equal(parsed.value.nodes[0]!.data.byteSize, file.size);
});

test("canonical metadata distinguishes two owners and subject roles when following versions", () => {
  const base = {
    id: "same",
    name: "name",
    kind: "image",
    type: "image/png",
    size: 20,
    fingerprint: "v1",
    available: true,
  };
  const main = { ...base, nodeId: "subject", sourceRole: "main" };
  const voice = {
    ...base,
    nodeId: "subject",
    sourceRole: "voice",
    id: "voice",
    fingerprint: "voice-v1",
  };
  const body = currentReferences(
    [referencePart(main), referencePart(voice)],
    [voice, { ...main, id: "new", fingerprint: "v2" }],
  );
  assert.equal(body[0]!.type === "reference" && body[0]!.assetId, "new");
  assert.equal(body[1]!.type === "reference" && body[1]!.assetId, "voice");
  const other = { ...base, nodeId: "other" };
  const choices = referenceCandidates([], [main, other]);
  assert.equal(new Set(choices.map((option) => option.id)).size, 2);
  assert.notEqual(assetOptionId(main), assetOptionId(other));
});

test("one budget validates bytes and expanded subjects, including pinned virtual nodes", () => {
  const config = {
    kind: "image",
    inputRules: {
      allowedKinds: ["image"],
      maxImages: 1,
      maxVideos: 0,
      maxAudios: 0,
      imageBytes: 10,
      requestBytes: 15,
    },
  } as ModelConfig;
  const image = createNode("image", undefined, { src: "image", byteSize: 11 });
  assert.match(referenceBudgetIssue([image], config)!, /大小限制/);
  image.data.byteSize = 8;
  const pin = { ...image, id: "pinned:asset" };
  assert.match(referenceBudgetIssue([image, pin], config)!, /预算/);
  const subject = createNode("subject", undefined, {
    subject: {
      category: "character",
      description: "",
      main: {
        id: "main",
        kind: "image",
        title: "main",
        src: "image",
        byteSize: 11,
      },
      auxiliaries: [],
    },
  });
  assert.match(referenceBudgetIssue([subject], config)!, /大小限制/);
});

test("default preparation keeps independent equal-byte sources stable across retries and versions", async () => {
  const oldFetch = globalThis.fetch;
  const nodes: any[] = [],
    assets: any[] = [];
  let writes = 0;
  globalThis.fetch = async (url, init) => {
    const path = String(url);
    if (path.endsWith("/canvas"))
      return Response.json({
        canvas: { nodes },
        assets,
        referenceSources: nodes.filter((node) => node.assetId),
        availableAssetIds: nodes.flatMap((node) =>
          node.assetId ? [node.assetId] : [],
        ),
      });
    if (path.endsWith("/assets")) return Response.json(assets);
    if (path.endsWith("/canvas/nodes")) {
      const value = JSON.parse(String(init!.body));
      const node = { ...value, role: "empty", revision: 1, assetId: null };
      nodes.push(node);
      return Response.json(node);
    }
    if (path.endsWith("/source")) {
      const value = JSON.parse(String(init!.body));
      const node = nodes.find((node) => path.includes(node.id));
      node.revision++;
      node.role = "material";
      node.assetId = value.assetId;
      return Response.json({
        node,
        asset: assets.find((asset) => asset.id === value.assetId),
      });
    }
    if (path.endsWith("/text")) {
      writes++;
      const value = JSON.parse(String(init!.body));
      const node = nodes.find((node) => path.includes(node.id));
      assert.equal(value.expectedRevision, node.revision);
      node.revision++;
      node.role = "material";
      node.assetId = value.id;
      const asset = {
        id: value.id,
        kind: "text",
        name: value.name,
        fingerprint: await fingerprint(new Blob([value.text])),
        type: "text/markdown",
        size: new Blob([value.text]).size,
      };
      assets.push(asset);
      return Response.json(asset);
    }
    throw new Error(path);
  };
  try {
    const inputs = [
      {
        kind: "text" as const,
        nodeId: "a",
        title: "same name",
        text: "same bytes",
      },
      {
        kind: "text" as const,
        nodeId: "b",
        title: "same name",
        text: "same bytes",
      },
    ];
    const first = await prepareReferences(
      "project",
      inputs,
      new AbortController().signal,
    );
    assert.equal(nodes.length, 2);
    assert.equal(writes, 2);
    assert.notEqual(first[0]!.asset.nodeId, first[1]!.asset.nodeId);
    const again = await prepareReferences(
      "project",
      inputs,
      new AbortController().signal,
    );
    assert.equal(writes, 2);
    assert.deepEqual(
      again.map((value) => value.asset.id),
      first.map((value) => value.asset.id),
    );
    const newer = await prepareReferences(
      "project",
      [{ ...inputs[0]!, text: "v2" }],
      new AbortController().signal,
    );
    assert.equal(newer[0]!.asset.nodeId, first[0]!.asset.nodeId);
    assert.notEqual(newer[0]!.asset.id, first[0]!.asset.id);
    assert.equal(nodes.length, 2);
    assert.equal(
      await serviceNodeId("a", "source:body"),
      first[0]!.asset.nodeId,
    );
    const part = {
      type: "reference" as const,
      assetId: "node:a",
      nodeId: "a",
      name: "same name",
    };
    const content = submissionContent(
      [
        { type: "text", text: "before " },
        part,
        { type: "text", text: " after " },
        part,
      ],
      newer,
    )!;
    assert.equal(content.length, 4);
    assert.equal(
      content[1]!.type === "reference" && content[1]!.assetId,
      newer[0]!.asset.id,
    );
    assert.deepEqual(content[1], content[3]);
    const source = createNode("text", undefined, {
      title: "same name",
      text: "v3 from workspace",
    });
    source.id = "a";
    await refreshReferenceSources(
      "project",
      [source],
      content,
      new AbortController().signal,
    );
    assert.equal(nodes.length, 2);
    const live = nodes.find((node) => node.logicalNodeId === "a");
    assert.notEqual(live.assetId, newer[0]!.asset.id);
    const count = assets.length;
    const reused = await prepareReferences(
      "project",
      [
        {
          kind: "text",
          nodeId: "copy",
          title: "same name",
          text: "v3 from workspace",
          assetId: live.assetId,
        },
      ],
      new AbortController().signal,
    );
    assert.equal(assets.length, count);
    assert.equal(reused[0]!.asset.id, live.assetId);
    assert.notEqual(reused[0]!.asset.nodeId, live.id);
  } finally {
    globalThis.fetch = oldFetch;
  }
});

test("upload source reuse requires an explicit choice for equal content and cancels without writes", async () => {
  const oldFetch = globalThis.fetch;
  const file = new File(["source"], "source.md", { type: "text/markdown" });
  const digest = await fingerprint(file);
  let writes = 0,
    choices = 0;
  const asset = {
    id: "asset",
    name: "source.md",
    kind: "text",
    type: "text/markdown",
    size: file.size,
    fingerprint: digest,
  };
  globalThis.fetch = async (url, init) => {
    if (init?.method === "PUT") {
      writes++;
      throw new Error("must not upload again");
    }
    const path = String(url);
    if (path.endsWith("/assets")) return Response.json([asset]);
    if (path.endsWith("/canvas"))
      return Response.json({
        availableAssetIds: [asset.id],
        referenceSources: [
          { id: "a", title: "A", assetId: asset.id },
          { id: "b", title: "B", assetId: asset.id },
        ],
      });
    if (path.endsWith("/assets/asset")) return new Response(file);
    throw new Error(path);
  };
  try {
    const chosen = await uploadReferenceFile(
      "project",
      file,
      new AbortController().signal,
      async (matches) => {
        choices++;
        assert.equal(matches.length, 2);
        return matches[1]!;
      },
    );
    assert.equal(chosen.nodeId, "b");
    assert.equal(choices, 1);
    assert.equal(writes, 0);
    await assert.rejects(
      uploadReferenceFile(
        "project",
        file,
        new AbortController().signal,
        async () => {
          throw new DOMException("cancel", "AbortError");
        },
      ),
      { name: "AbortError" },
    );
    assert.equal(writes, 0);
  } finally {
    globalThis.fetch = oldFetch;
  }
});

test("pinned tokens never inherit an owner's following edge", () => {
  const source = createNode("image", undefined, {
    src: "image",
    mediaRole: "asset",
  });
  const target = createNode("image");
  const part = referencePart({
    id: "canonical",
    nodeId: source.id,
    name: "Pinned",
    kind: "image",
    type: "image/png",
    size: 1,
    fingerprint: "v1",
    binding: "asset",
  });
  assert.equal(part.type === "reference" && part.nodeId, undefined);
  const document = { ...createDocument(), nodes: [source, target] };
  const change = referenceContentCommand(document, target.id, [part]);
  assert.equal(
    change.type === "batch" &&
      change.commands.some((command) => command.type === "add-edge"),
    false,
  );
});

test("source canonicalization acknowledgements do not cancel uploads, actual intent edits do", () => {
  const node = createNode("image");
  const part = {
    type: "reference" as const,
    nodeId: "source",
    referenceId: "relation",
    assetId: "node:source",
    name: "Display name",
    fingerprint: "source:synthetic",
  };
  const before = generationEditIdentity(node, [
    part,
    { type: "text", text: "prompt" },
  ]);
  const canonical = {
    ...part,
    assetId: "canonical",
    name: "Canonical name",
    fingerprint: "sha256:canonical",
  };
  assert.equal(
    generationEditIdentity(node, [canonical, { type: "text", text: "prompt" }]),
    before,
  );
  assert.notEqual(
    generationEditIdentity(node, [
      canonical,
      { type: "text", text: "changed" },
    ]),
    before,
  );
  assert.notEqual(
    generationEditIdentity(
      { ...node, data: { ...node.data, title: "Changed target" } },
      [canonical],
    ),
    before,
  );
});
