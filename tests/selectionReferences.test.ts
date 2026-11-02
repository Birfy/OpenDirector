import assert from "node:assert/strict";
import test from "node:test";
import { createDocument, createNode } from "../src/canvas/model.ts";
import {
  batchCreationKinds,
  magneticSelectionPort,
  multiSelectionGeometry,
  planReferenceBatch,
  sourceReferencePreviews,
} from "../src/canvas/selectionReferences.ts";

const image = () =>
  createNode("image", undefined, { src: "fixture", mediaRole: "asset" });

test("multi-selection includes headings and parent offsets at every zoom", () => {
  const group = createNode("group", { x: 100, y: 50 });
  const a = image(),
    b = image();
  a.parentId = group.id;
  a.position = { x: 20, y: 30 };
  b.position = { x: 600, y: 300 };
  for (const zoom of [0.08, 0.6, 1, 4]) {
    const layout = multiSelectionGeometry([a, b], [group, a, b], zoom)!;
    assert.ok(layout.frame.x < 120);
    assert.ok(layout.frame.y < 80 - 28);
    assert.ok(layout.frame.x + layout.frame.width > b.position.x + b.width);
    assert.equal(Math.round((120 - layout.frame.x) * zoom), 6);
    assert.ok(
      Math.abs(
        (layout.port.x - layout.frame.x - layout.frame.width) * zoom - 16,
      ) < 1e-8,
    );
  }
  assert.equal(multiSelectionGeometry([a], [a], 1), null);
});

test("selection magnet uses screen-space travel and releases outside the activation radius", () => {
  const anchor = { x: 100, y: 200 };
  for (const zoom of [0.08, 0.6, 1, 4]) {
    const near = { x: anchor.x + 5 / zoom, y: anchor.y };
    assert.deepEqual(magneticSelectionPort(anchor, near, zoom), near);
    const capped = magneticSelectionPort(
      anchor,
      { x: anchor.x + 24 / zoom, y: anchor.y },
      zoom,
    );
    assert.ok(Math.abs((capped.x - anchor.x) * zoom - 12) < 1e-8);
    assert.deepEqual(
      magneticSelectionPort(
        anchor,
        { x: anchor.x + 50 / zoom, y: anchor.y },
        zoom,
      ),
      anchor,
    );
  }
});

test("fan previews start at each material, including nested sources, and share the cursor endpoint", () => {
  const group = createNode("group", { x: 100, y: 50 });
  const a = image(),
    b = image();
  a.parentId = group.id;
  a.position = { x: 20, y: 30 };
  b.position = { x: 120, y: 500 };
  const end = { x: 900, y: 350 };
  const paths = sourceReferencePreviews([group, a, b], [a.id, b.id], end);
  assert.deepEqual(
    paths.map((item) => item.sourceId),
    [a.id, b.id],
  );
  for (const [index, item] of paths.entries()) {
    const numbers = item.path.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi)!.map(Number);
    const node = [a, b][index];
    assert.deepEqual(numbers.slice(0, 2), [
      120 + node.width,
      (index ? 500 : 80) + node.height / 2,
    ]);
    assert.deepEqual(numbers.slice(-2), [end.x, end.y]);
  }
});

test("batch references preserve source identity and skip existing relations", () => {
  const document = createDocument();
  const a = image(),
    b = image(),
    target = createNode("video");
  document.nodes = [a, b, target];
  const first = planReferenceBatch(document, [a.id, b.id, a.id], target.id);
  assert.equal(first.issue, null);
  assert.deepEqual(
    first.edges.map((edge) => edge.source),
    [a.id, b.id],
  );
  assert.equal(document.edges.length, 0);
  document.edges = [first.edges[0]];
  const repeated = planReferenceBatch(document, [a.id, b.id], target.id);
  assert.deepEqual(
    repeated.edges.map((edge) => edge.source),
    [b.id],
  );
});

test("cumulative capacity failures reject the entire batch", () => {
  const document = createDocument();
  const sources = [image(), image(), image()];
  const target = createNode("video", undefined, {
    settings: { videoMode: "first-last" },
  });
  document.nodes = [...sources, target];
  const plan = planReferenceBatch(
    document,
    sources.map((node) => node.id),
    target.id,
  );
  assert.equal(plan.issue?.code, "frame_capacity_exceeded");
  assert.deepEqual(plan.edges, []);
  assert.deepEqual(document.edges, []);
});

test("mixed kinds, missing sources and locked nodes cannot partially connect", () => {
  const document = createDocument();
  const a = image(),
    b = createNode("audio", undefined, { src: "fixture" });
  const target = createNode("image");
  document.nodes = [a, b, target];
  assert.equal(
    planReferenceBatch(document, [a.id, b.id], target.id).issue?.code,
    "source_type_unsupported",
  );
  assert.equal(
    planReferenceBatch(document, [a.id, "missing"], target.id).issue?.code,
    "endpoint_missing",
  );
  a.locked = true;
  assert.equal(
    planReferenceBatch(document, [a.id, b.id], target.id).issue?.code,
    "locked",
  );
  a.locked = false;
  assert.equal(
    planReferenceBatch(document, [a.id, target.id], target.id).issue?.code,
    "self_connection",
  );
  assert.deepEqual(
    batchCreationKinds(document, [a.id, b.id], ["text", "image", "video"]),
    ["text", "video"],
  );
});
