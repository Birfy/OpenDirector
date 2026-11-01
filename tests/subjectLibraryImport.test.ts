import assert from "node:assert/strict";
import test from "node:test";
import {
  createDocument,
  createNode,
  applyCommand,
  type SubjectData,
} from "../src/canvas/model.ts";
import {
  librarySubjectCommand,
  subjectImportSelection,
  subjectTargetIdentity,
  mergeLibrarySubjectImport,
} from "../src/canvas/subjectLibraryImport.ts";
const media: SubjectData = {
  category: "character",
  description: "Library annotation",
  auxiliaries: [],
  main: {
    id: "new",
    kind: "image",
    title: "New",
    src: "https://example.test/new.png",
  },
};

test("replacement needs exactly one editable subject and preserves identity and annotations", () => {
  const target = createNode(
    "subject",
    { x: 53, y: 79 },
    {
      title: "User title",
      subject: { ...media, description: "User annotation" },
    },
  );
  const other = createNode("image");
  const document = { ...createDocument(), nodes: [target, other] };
  for (const selected of [[], [target.id, other.id], [other.id]])
    assert.ok(subjectImportSelection(document, selected).issue);
  assert.equal(subjectImportSelection(document, [target.id]).issue, null);
  assert.ok(
    subjectImportSelection(
      { ...document, nodes: [{ ...target, locked: true }] },
      [target.id],
    ).issue,
  );
  const next = applyCommand(
    document,
    librarySubjectCommand(
      document,
      [{ title: "Library title", subject: media }],
      { x: 0, y: 0 },
      target.id,
    ),
  );
  assert.equal(next.nodes.length, 2);
  assert.equal(next.nodes[0]!.id, target.id);
  assert.deepEqual(next.nodes[0]!.position, target.position);
  assert.equal(next.nodes[0]!.data.title, "User title");
  assert.equal(next.nodes[0]!.data.subject!.description, "User annotation");
  assert.equal(next.nodes[0]!.data.subject!.main!.id, "new");
});

test("new imports create independent nodes and replacements reject incompatible outgoing connections", () => {
  const source = createNode("subject", undefined, { subject: media });
  const target = createNode("audio");
  const document = {
    ...createDocument(),
    nodes: [source, target],
    edges: [
      {
        id: "out",
        source: source.id,
        target: target.id,
        intent: "generation_input" as const,
      },
    ],
  };
  const added = applyCommand(
    document,
    librarySubjectCommand(
      document,
      [
        { title: "One", subject: media },
        { title: "Two", subject: media },
      ],
      { x: 100, y: 100 },
    ),
  );
  assert.equal(added.nodes.length, 4);
  assert.equal(new Set(added.nodes.map((node) => node.id)).size, 4);
  assert.deepEqual(
    added.nodes.slice(2).map((node) => node.data.title),
    ["One", "Two"],
  );
  assert.throws(
    () =>
      librarySubjectCommand(
        document,
        [
          {
            title: "Video",
            subject: {
              ...media,
              main: {
                id: "video",
                kind: "video",
                title: "Video",
                src: "https://example.test/video.mp4",
                durationSeconds: 1,
              },
            },
          },
        ],
        { x: 0, y: 0 },
        source.id,
      ),
    /不兼容/,
  );
  assert.equal(document.nodes[0]!.data.subject!.main!.kind, "image");
});

test("replacement clears all old incoming assembly provenance in one command", () => {
  const upstream = createNode("image", undefined, {
    src: "https://example.test/old.png",
  });
  const target = createNode("subject", undefined, { subject: media });
  const document = {
    ...createDocument(),
    nodes: [upstream, target],
    edges: [
      {
        id: "old",
        source: upstream.id,
        target: target.id,
        intent: "assembly_input" as const,
        assemblySlotId: "main",
      },
    ],
  };
  const next = applyCommand(
    document,
    librarySubjectCommand(
      document,
      [{ title: "New", subject: media }],
      { x: 0, y: 0 },
      target.id,
    ),
  );
  assert.equal(next.edges.length, 0);
  assert.equal(document.edges.length, 1);
});

test("target comparison follows asset identity while still detecting user edits", () => {
  const node = createNode("subject", undefined, {
    subject: {
      ...media,
      main: { ...media.main!, assetId: "owned", src: "blob:first" },
    },
  });
  const canonical = {
    ...node,
    data: {
      ...node.data,
      subject: {
        ...node.data.subject!,
        main: {
          ...node.data.subject!.main!,
          id: "canonical",
          src: "blob:second",
        },
      },
    },
  };
  assert.equal(subjectTargetIdentity(node), subjectTargetIdentity(canonical));
  assert.notEqual(
    subjectTargetIdentity(node),
    subjectTargetIdentity({
      ...canonical,
      data: { ...canonical.data, title: "User changed title" },
    }),
  );
  assert.notEqual(
    subjectTargetIdentity(node),
    subjectTargetIdentity({
      ...canonical,
      data: {
        ...canonical.data,
        subject: {
          ...canonical.data.subject!,
          description: "User changed annotation",
        },
      },
    }),
  );
});

test("a completed import preserves unrelated results, viewport and newer target edits", () => {
  const target = createNode("subject", undefined, { subject: media });
  const background = createNode("text", undefined, { text: "Before" });
  const before = { ...createDocument(), nodes: [target, background] };
  const replacement = {
    ...media,
    main: {
      ...media.main!,
      id: "replacement",
      src: "https://example.test/changed.png",
    },
  };
  const committed = applyCommand(
    before,
    librarySubjectCommand(
      before,
      [{ title: "Replace", subject: replacement }],
      { x: 0, y: 0 },
      target.id,
    ),
  );
  const current = {
    ...before,
    viewport: { x: 10, y: 20, zoom: 0.5 },
    nodes: [
      target,
      {
        ...background,
        data: { ...background.data, text: "Background result arrived" },
      },
    ],
  };
  const merged = mergeLibrarySubjectImport(
    current,
    before,
    committed,
    target.id,
  );
  assert.equal(merged.nodes[0]!.data.subject!.main!.id, "replacement");
  assert.equal(merged.nodes[1]!.data.text, "Background result arrived");
  assert.deepEqual(merged.viewport, current.viewport);
  const edited = {
    ...current,
    nodes: [
      { ...target, data: { ...target.data, title: "Newer user title" } },
      current.nodes[1]!,
    ],
  };
  assert.equal(
    mergeLibrarySubjectImport(edited, before, committed, target.id),
    edited,
  );
  const created = applyCommand(
    before,
    librarySubjectCommand(before, [{ title: "New", subject: media }], {
      x: 0,
      y: 0,
    }),
  );
  assert.equal(
    mergeLibrarySubjectImport(created, before, created).nodes.length,
    3,
  );
});
