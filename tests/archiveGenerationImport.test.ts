import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CreationClient,
  type CreationOperation,
} from "../src/backend/creationClient.ts";
import { CreationProjection } from "../src/backend/creationProjection.ts";
import { createDocument, createNode } from "../src/canvas/model.ts";
import type {
  ObjectVersion,
  ProjectSnapshot,
} from "../src/contracts/generated.ts";
import type { CanvasDocument } from "../src/canvas/model.ts";

/** An empty project that an archive is about to be imported into. */
function emptyProject() {
  const source = JSON.parse(
    readFileSync(
      new URL("./fixtures/creation-project.json", import.meta.url),
      "utf8",
    ),
  ) as ProjectSnapshot;
  const snapshot: ProjectSnapshot = {
    ...source,
    canvasItems: [],
    generationSpecs: [],
    references: [],
    editorDocuments: [],
    jobs: [],
    results: [],
  };
  const client = new CreationClient(snapshot.project.id);
  client.install(snapshot);
  client.mediaUrl = async (id) => `blob:${id}`;
  client.assetForSource = () => undefined;
  client.view = async () => ({
    projectId: client.id,
    clientId: crypto.randomUUID(),
    viewport: { x: 0, y: 0, zoom: 1 },
    selectedItemIds: [],
    activeEditorId: null,
    playheads: [],
    generationCounts: {},
  });
  const batches: {
    operations: CreationOperation[];
    versions: readonly ObjectVersion[];
  }[] = [];
  client.batch = async (operations, versions) => {
    batches.push({ operations, versions });
    return undefined;
  };
  // Uploads are an HTTP round trip; the projection only needs a reference back.
  const uploaded: { name: string; importedFrom?: string }[] = [];
  client.importBlob = async (
    _blob,
    name,
    _kind,
    _handle,
    importedFrom?: "generated" | "edited",
  ) => {
    uploaded.push({ name, importedFrom });
    const asset = source.assets[0]!;
    return {
      assetId: asset.id,
      revision: asset.revision,
      fingerprint: asset.fingerprint,
      kind: asset.kind,
    };
  };
  return { client, batches, snapshot, uploaded };
}

function archiveDocument(
  mediaRole: "asset" | "generation",
  projectId: string,
) {
  const document: CanvasDocument = createDocument("导入");
  document.id = projectId;
  document.nodes = [
    createNode(
      "image",
      { x: 0, y: 0 },
      {
        src: "data:image/png;base64,aGVsbG8=",
        mimeType: "image/png",
        title: "图片生成.png",
        mediaRole,
        ...(mediaRole === "generation"
          ? {
              generationProvenance: {
                source: "generated" as const,
                jobId: "6f1d1f3e-0000-4000-8000-000000000000",
                inputFingerprint: "a".repeat(64),
              },
            }
          : {}),
      },
    ),
  ];
  return document;
}

for (const withProvenance of [true, false]) {
  test(`an imported generation node is shown as a generation item (provenance: ${withProvenance})`, async () => {
    const { client, batches, snapshot, uploaded } = emptyProject();
    const projection = new CreationProjection(client);
    const baseline = await projection.read();
    projection.baseline = baseline;
    projection.basis = snapshot;
    const document = archiveDocument("generation", client.id);
    if (!withProvenance) delete document.nodes[0]!.data.generationProvenance;
    await projection.save(document);

    const operations = batches[0]!.operations;
    const show = operations.find(
      (op) => op.type === "canvas.show",
    ) as Extract<CreationOperation, { type: "canvas.show" }>;
    assert.ok(show, "the node is shown");
    const binding = show.payload.item.binding;
    assert.ok(binding, "the item carries a binding");

    if (withProvenance) {
      // The show itself must carry the generation binding: converting a
      // material item afterwards is refused by the backend.
      assert.equal(binding.role, "generation");
      assert.ok("materialOverride" in binding);
      assert.ok(
        !operations.some((op) => op.type === "canvas.configure"),
        "no late upgrade attempt",
      );
      const spec = operations.findIndex(
        (op) => op.type === "generationSpec.create",
      );
      const shown = operations.indexOf(show);
      assert.ok(spec >= 0 && spec < shown, "the spec exists before the show");
      assert.equal(uploaded[0]?.importedFrom, "generated");
    } else {
      // A v1 archive has no evidence, so the node stays a plain material.
      assert.equal(binding.role, "material");
      assert.equal(uploaded[0]?.importedFrom, undefined);
    }
    assert.ok(
      !operations.some((op) => op.type === "canvas.materialize"),
      "a new node is never materialized",
    );
  });
}

test("an imported group is created before the members that name it", async () => {
  // Documents list nodes in visual order, so a group can come after its own
  // members. A batch applies in sequence: the member would then name a parent
  // that does not exist yet and the whole import would be refused.
  const { client, batches, snapshot } = emptyProject();
  const projection = new CreationProjection(client);
  projection.baseline = await projection.read();
  projection.basis = snapshot;
  const projectId = client.id;
  const document: CanvasDocument = createDocument("分组顺序");
  document.id = projectId;
  const group = createNode("group", { x: 0, y: 0 }, { title: "图片生成" });
  const child = createNode(
    "image",
    { x: 10, y: 10 },
    {
      src: "data:image/png;base64,aGVsbG8=",
      mimeType: "image/png",
      title: "图片生成预览",
      mediaRole: "asset",
    },
  );
  child.parentId = group.id;
  // Deliberately the wrong order: the member is listed first.
  document.nodes = [child, group];

  await projection.save(document);
  const operations = batches[0]!.operations;

  const shown = operations
    .map((op, index) => ({ op, index }))
    .filter(
      (entry) =>
        entry.op.type === "canvas.show" &&
        (entry.op.payload.item.id === child.id ||
          entry.op.payload.item.id === group.id),
    );
  const groupIndex = operations.findIndex(
    (op) => op.type === "canvas.show" && op.payload.item.id === group.id,
  );
  const childIndex = operations.findIndex(
    (op) => op.type === "canvas.show" && op.payload.item.id === child.id,
  );
  assert.equal(shown.length, 2, "both nodes are shown");
  assert.ok(groupIndex >= 0, "the group is created");
  assert.ok(childIndex >= 0, "the member is created");
  assert.ok(
    groupIndex < childIndex,
    "the group exists before the member that names it",
  );
});