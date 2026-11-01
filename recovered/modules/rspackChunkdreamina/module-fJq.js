import n from "SR";
import r from "Rb";
import a from "Dm";
import { I } from "./module-fb.js";
function s(e) {
  const t = Number(e.createTime);
  if (Number.isFinite(t) && !(t <= 0)) {
    return t;
  }
}
export function V(e, t) {
  const userMessage = e.promptMessages.find(
    (e) => e instanceof n.NuroUserMessage,
  );
  a.X3(userMessage, "userMessage is required");
  return {
    taskId: e.taskId,
    taskStatus: e.taskStatus,
    userMessage,
    replyMessages: F(e, t),
  };
}
export function F(e, t) {
  const i = (e) => {
    if (e instanceof n.NuroToolCallMessage && e.toolResult && I(e.toolName)) {
      const t = r.getAgenticToolCallList(e.toolResult);
      a.push(
        ...r.getActualToolCallMessage(t).map((t) => {
          var i;
          var n;
          t.id = t.toolCallId;
          t.createTime = e.createTime;
          if (
            !((i = t.metadata) == null ? undefined : i.conversation_id) &&
            ((n = e.metadata) == null ? undefined : n.conversation_id)
          ) {
            var r;
            var a;
            var o = Object.assign(
              Object.create(
                Object.getPrototypeOf(
                  (r = t.metadata) != null ? r : e.metadata,
                ),
              ),
              e.metadata,
              t.metadata,
            );
            o.conversation_id = e.metadata.conversation_id;
            o.parent_message_id =
              ((a = t.metadata) == null ? undefined : a.parent_message_id) ||
              e.metadata.parent_message_id;
            t.metadata = o;
          }
          return t;
        }),
      );
    } else {
      a.push(e);
    }
  };
  var a = [];
  for (const l of e.artifactMessages.filter(
    (e) =>
      e instanceof n.NuroAssistantMessage ||
      e instanceof n.NuroReasoningMessage ||
      e instanceof n.NuroToolCallMessage ||
      e instanceof n.NuroCanvasMessage,
  )) {
    i(l);
  }
  if (t == null ? undefined : t.sortReplyMessagesByCreateTime) {
    if (a.some((e) => s(e) === undefined)) {
      return a;
    }
    return a
      .map((message, index) => ({
        index,
        message,
      }))
      .sort((e, t) => s(e.message) - s(t.message) || e.index - t.index)
      .map((e) => {
        var { message } = e;
        return message;
      });
  }
  return a;
}
