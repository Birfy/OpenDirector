import assert from "node:assert/strict";
import test from "node:test";
import {conversationIsEmpty, type Conversation} from "../src/backend/chat.ts";

function empty(): Conversation {
  return {conversationId: "one", messages: [], draft: "", assets: [], thinking: "auto",
    modelSelections: {agent: null, image: null, video: null, audio: null}};
}

test("empty conversations ignore runtime and thinking settings", () => {
  assert.equal(conversationIsEmpty({...empty(), thinking: "high", runtime: "codex",
    runtimeModel: "gpt-model"}), true);
  assert.equal(conversationIsEmpty({...empty(), draft: "  \n\t"}), true);
});

test("messages, drafts, assets, skills, or draft content make a session reusable-ineligible", () => {
  assert.equal(conversationIsEmpty({...empty(), messages: [{id: "m", role: "user", text: "hi",
    status: "complete"}]}), false);
  assert.equal(conversationIsEmpty({...empty(), draft: "还没发送"}), false);
  assert.equal(conversationIsEmpty({...empty(), assets: [{id: "a", name: "clip", type: "video/mp4",
    size: 1, fingerprint: "f"}]}), false);
  assert.equal(conversationIsEmpty({...empty(), skills: ["lookup"]}), false);
  assert.equal(conversationIsEmpty({...empty(), draftContent: [{type: "text", text: "引用"}]}),
    false);
});
