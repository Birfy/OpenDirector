import n from "SR";
import { S } from "./module-hqG.js";
export function M2(e) {
  if (e) {
    const t = S(e, "resume_context");
    if (t) {
      return [t];
    }
    return undefined;
  }
}
export function DH(e) {
  const t = [];
  for (const i of e) {
    if (
      i instanceof n.NuroToolCallMessage &&
      S(i, "interrupt_status") === "pending_approval" &&
      !i.toolResult
    ) {
      const a = S(i, "resume_context");
      if (a) {
        t.push(a);
      }
    }
  }
  if (t.length > 0) {
    return t;
  }
}
export function DJ(e) {
  const {
    mainConversationId,
    targetConversationId,
    mainReplyMessages,
    subAgentReplyMessages = [],
  } = e;
  let a = mainReplyMessages;
  if (targetConversationId !== mainConversationId) {
    a = subAgentReplyMessages.filter((e) => {
      var t;
      return (
        ((t = e.metadata) == null ? undefined : t.conversation_id) ===
        targetConversationId
      );
    });
  }
  return DH(a);
}
export function hl(e) {
  let t;
  let i;
  for (let a = e.length - 1; a >= 0; a--) {
    const o = e[a];
    if (o instanceof n.NuroToolCallMessage) {
      const s = S(o, "interrupt_status");
      if (s) {
        switch (s) {
          case "approved":
            return {
              status: "approved",
              payload: S(o, "interrupt_payload"),
              toolCallId: o.toolCallId,
            };
          case "cancelled":
            return {
              status: "cancelled",
              payload: S(o, "interrupt_payload"),
              toolCallId: o.toolCallId,
            };
          case "rejected":
            return {
              status: "rejected",
              payload: S(o, "interrupt_payload"),
              toolCallId: o.toolCallId,
            };
          case "pending_approval":
            if (o.toolResult) {
              if (i == null) {
                i = {
                  status: "approved",
                  payload: S(o, "interrupt_payload"),
                  toolCallId: o.toolCallId,
                };
              }
              break;
            }
            if (t == null) {
              t = {
                status: "pending_approval",
                payload: S(o, "interrupt_payload"),
                toolCallId: o.toolCallId,
              };
            }
        }
      }
    }
  }
  if (t != null) {
    return t;
  }
  return i;
}
export function lU(e, t) {
  const i = new Map();
  for (const n of t) {
    i.set(n, []);
  }
  for (const r of e) {
    let a;
    let o;
    const s = (a = r.metadata) == null ? undefined : a.conversation_id;
    if (s && i.has(s)) {
      if ((o = i.get(s)) != null) {
        o.push(r);
      }
    }
  }
  const d = {};
  for (const u of t) {
    let v;
    const c = hl((v = i.get(u)) != null ? v : []);
    if (c) {
      d[u] = c;
    }
  }
  return d;
}
