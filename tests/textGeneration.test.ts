import test from "node:test";
import assert from "node:assert/strict";
import {
  createDocument,
  createNode,
  applyCommand,
} from "../src/canvas/model.ts";
import {
  agentNodeSettings,
  agentGenerationBlocker,
  applyTextGenerationResult,
} from "../src/canvas/textGeneration.ts";
import { parseDocument, serializeDocument } from "../src/canvas/storage.ts";
import {
  parseGenerationJob,
  applyRecoveredGenerationResults,
} from "../src/canvas/generationHistory.ts";
import {
  referencePresentation,
  referenceSnapshot,
} from "../src/canvas/referenceEvidence.ts";
import { createHistory, recordChange, undo } from "../src/canvas/history.ts";
import { generationDefaults } from "../src/canvas/generationCatalog.ts";
import type { ModelConfig } from "../src/backend/rules.ts";
const agent: ModelConfig = {
  id: "agent",
  kind: "agent",
  modelId: "test-agent",
  url: "http://test.invalid",
  connectionType: "api",
  protocol: "openai",
  authMode: "none",
  inputRules: {
    profile: "openai",
    allowedKinds: ["text", "image"],
    maxImages: 2,
    maxVideos: 0,
    maxAudios: 0,
    videoModes: [],
  },
};

test("Agent settings and references validate before submitting text generation", () => {
  const node = createNode("text", undefined, { prompt: "write a story" });
  assert.deepEqual(agentNodeSettings(node), {
    thinking: "auto",
    maxTokens: 8192,
  });
  assert.match(agentGenerationBlocker(node, [])!, /Agent/);
  assert.equal(agentGenerationBlocker(node, [], agent), null);
  const source = createNode("text", undefined, { text: "reference" });
  assert.equal(agentGenerationBlocker(node, [source], agent), null);
  source.data.text = "";
  assert.match(agentGenerationBlocker(node, [source], agent)!, /不可用/);
  node.data.agentSettings = {
    modelConfigId: "agent",
    thinking: "high",
    maxTokens: 0,
  };
  assert.match(agentGenerationBlocker(node, [], agent)!, /输出/);
});

test("text results replace the same node, preserve its prompt, save evidence and recover through history", () => {
  const source = createNode("text", undefined, { text: "reference" }),
    target = createNode("text", undefined, {
      text: "old body",
      prompt: "new instructions",
      agentSettings: {
        modelConfigId: "agent",
        thinking: "high",
        maxTokens: 1024,
      },
    });
  const edge = { id: "ref", source: source.id, target: target.id };
  const document = {
    ...createDocument(),
    nodes: [source, target],
    edges: [edge],
  };
  const origin = {
    documentId: document.id,
    nodeId: target.id,
    kind: "text" as const,
    text: target.data.text,
    referenceInputs: referenceSnapshot([source]),
  };
  const output = {
    kind: "text" as const,
    title: "result.md",
    text: "new body",
  };
  const result = applyTextGenerationResult(document, origin, output);
  assert.deepEqual(result.ids, [target.id]);
  assert.equal(result.document.nodes.length, 2);
  assert.equal(result.document.nodes[1]!.data.text, "new body");
  assert.equal(result.document.nodes[1]!.data.prompt, "new instructions");
  assert.equal(referencePresentation(result.document, edge).state, "current");
  assert.deepEqual(
    undo(recordChange(createHistory(document), result.document)).present,
    document,
  );
  const serialized = serializeDocument(result.document);
  assert.equal(serialized.ok, true);
  if (serialized.ok) {
    const read = parseDocument(JSON.parse(serialized.value));
    assert.equal(read.ok, true);
    if (read.ok)
      assert.deepEqual(
        read.value.nodes[1]!.data.agentSettings,
        target.data.agentSettings,
      );
  }
  const job = parseGenerationJob({
    id: "job",
    nodeId: target.id,
    title: "text",
    status: "succeeded",
    time: "now",
    taskId: "task",
    resultSource: origin,
    outputs: [output],
  });
  const recovered = applyRecoveredGenerationResults(
    document,
    [{ taskId: "task", output }],
    [job],
  );
  assert.equal(recovered.document.nodes[1]!.data.text, "new body");
  const edited = applyCommand(document, {
    type: "update-node",
    id: target.id,
    patch: { data: { text: "manual edit" } },
  });
  assert.equal(
    applyTextGenerationResult(edited, origin, output).document,
    edited,
  );
  assert.equal(
    applyTextGenerationResult({ ...document, id: "other" }, origin, output).ids
      .length,
    0,
  );
  assert.equal(
    applyTextGenerationResult(
      { ...document, nodes: [source, { ...target, locked: true }] },
      origin,
      output,
    ).ids.length,
    0,
  );
});

test("retired camera palette and style settings no longer enter saved creation settings", () => {
  const defaults = generationDefaults("image");
  assert.equal("camera" in defaults, false);
  assert.equal("palette" in defaults, false);
  assert.equal("style" in defaults, false);
  const document = createDocument();
  const parsed = parseDocument({
    ...document,
    settings: {
      ...document.settings,
      camera: "close-up",
      palette: "warm",
      style: "watercolor",
    },
  });
  assert.equal(parsed.ok, true);
  if (parsed.ok) {
    assert.equal("camera" in parsed.value.settings, false);
    assert.equal("palette" in parsed.value.settings, false);
    assert.equal("style" in parsed.value.settings, false);
  }
});
