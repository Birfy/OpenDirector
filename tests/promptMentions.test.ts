import assert from "node:assert/strict";
import test from "node:test";
import { editPromptMentions } from "../src/canvas/promptMentions.ts";
import { createDocument, createNode } from "../src/canvas/model.ts";
import { serializeDocument, parseDocument } from "../src/canvas/storage.ts";
import { copySelection, pasteFragment } from "../src/canvas/operations.ts";

test("chosen mentions retain source identity through edits before them and disappear when edited", () => {
  const first = editPromptMentions("Use @", "Use @Same name ", [], {
    id: "source-a",
    start: 4,
    end: 14,
  });
  assert.deepEqual(first, [{ sourceNodeId: "source-a", start: 4, end: 14 }]);
  const shifted = editPromptMentions(
    "Use @Same name ",
    "Please use @Same name ",
    first,
  );
  assert.deepEqual(shifted, [{ sourceNodeId: "source-a", start: 11, end: 21 }]);
  assert.deepEqual(
    editPromptMentions(
      "Please use @Same name ",
      "Please use @Other name ",
      shifted,
    ),
    [],
  );
  assert.deepEqual(editPromptMentions("", "@Same name", []), []); // Typed names never invent an identity.
});

test("text mentioning two equally named sources keeps distinct IDs through storage and duplication", () => {
  const doc = createDocument();
  const a = createNode(
    "text",
    { x: 0, y: 0 },
    { title: "Same name", text: "first" },
  );
  const b = createNode(
    "text",
    { x: 300, y: 0 },
    { title: "Same name", text: "second" },
  );
  const target = createNode(
    "text",
    { x: 600, y: 0 },
    {
      prompt: "@Same name @Same name",
      promptMentions: [
        {
          sourceNodeId: a.id,
          referenceId: crypto.randomUUID(),
          start: 0,
          end: 10,
        },
        { sourceNodeId: b.id, start: 11, end: 21 },
      ],
    },
  );
  doc.nodes = [a, b, target];
  const saved = serializeDocument(doc);
  assert.ok(saved.ok);
  if (!saved.ok) return;
  const parsed = parseDocument(saved.value);
  assert.ok(parsed.ok);
  if (!parsed.ok) return;
  assert.deepEqual(
    parsed.value.nodes[2]!.data.promptMentions,
    target.data.promptMentions,
  );
  const fragment = copySelection(doc, [a.id, b.id, target.id]);
  const pasted = pasteFragment(doc, fragment, { x: 50, y: 50 });
  const copies = pasted.document.nodes.slice(-3);
  assert.deepEqual(
    copies[2]!.data.promptMentions?.map((mention) => mention.sourceNodeId),
    [copies[0]!.id, copies[1]!.id],
  );
  assert.ok(
    copies[2]!.data.promptMentions?.every(
      (mention) => mention.referenceId === undefined,
    ),
  );
});
