import n from "SR";
import r from "Qey";
import { i as i_1 } from "./module-AI_2.js";
import { a as a_1 } from "./module-DoG.js";
import { Yg, lC } from "./module-WY_2.js";
const l = /```json\s*([\s\S]*?)```/i;
function d(e) {
  if (e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return;
    }
  }
}
function u(e) {
  return (e == null ? undefined : e.errmsg) || undefined;
}
function v(rawMessage) {
  let t;
  let i;
  let r;
  let a;
  return {
    id: rawMessage.id,
    conversationId:
      (t = rawMessage.metadata) == null ? undefined : t.conversation_id,
    parentMessageId:
      (i = rawMessage.metadata) == null ? undefined : i.parent_message_id,
    toolCallId:
      rawMessage instanceof n.NuroToolCallMessage
        ? rawMessage.toolCallId ||
          ((a = rawMessage.metadata) == null ? undefined : a.tool_call_id)
        : (r = rawMessage.metadata) == null
          ? undefined
          : r.tool_call_id,
    createTime: Number(rawMessage.createTime),
    rawMessage,
    agentScope: "main",
  };
}
function c(e, t) {
  return (
    e.rawMessage instanceof n.NuroToolCallMessage &&
    (t === undefined || e.rawMessage.toolName === t)
  );
}
function m(messageStatus) {
  return [
    n.NuroToolCallMessageStatus.streaming_failed,
    n.NuroToolCallMessageStatus.streaming_cancelled,
    n.NuroToolCallMessageStatus.skipped,
  ].includes(messageStatus);
}
function p(e, t) {
  if (e && t) {
    for (const [i, n] of Object.entries(t)) {
      if (n.initialMessageId === e) {
        return n.conversationId || i;
      }
    }
  }
}
export function j(e) {
  const t = e.messages.map(v);
  const i = new Map(t.map((e) => [e.id, e]));
  const subAgentTaskByTarget = new Map();
  const subAgentTaskByInitialMessageId = new Map();
  const subAgentTaskByConversationId = new Map();
  const _ = new Map();
  const y = new Map();
  for (const h of t) {
    if (
      (!(S = e.mainConversationId) ||
        !h.conversationId ||
        h.conversationId === S) &&
      c(h)
    ) {
      const T =
        h.rawMessage.toolName === i_1.SpawnTask
          ? ((e, t, i) => {
              let n;
              let r;
              let o;
              let s;
              let l;
              const v = d(e.rawMessage.toolArgs);
              const c = d(e.rawMessage.toolResult);
              const target =
                c == null || (r = c.data) == null ? undefined : r.target;
              const g =
                c == null || (o = c.data) == null
                  ? undefined
                  : o.initial_message_id;
              const I =
                (n =
                  c == null || (l = c.data) == null || (s = l.extra) == null
                    ? undefined
                    : s.sub_agent_conv_id) != null
                  ? n
                  : p(g, i);
              if (I) {
                return {
                  taskId: I,
                  toolName: i_1.SpawnTask,
                  target,
                  initialMessageId: g,
                  subAgentConversationId: I,
                  mainConversationId: t != null ? t : e.conversationId,
                  spawnMessage: e,
                  internalMessages: [],
                  systemEvents: [],
                  role: v == null ? undefined : v.role,
                  title: v == null ? undefined : v.title,
                  content: v == null ? undefined : v.content,
                  status:
                    m(e.rawMessage.messageStatus) || u(c)
                      ? "failed"
                      : "running",
                  errorMessage: u(c),
                  carrierMessageId: e.id,
                  carrierCreateTime: e.createTime,
                };
              }
            })(h, e.mainConversationId, e.subAgentTaskStates)
          : h.rawMessage.toolName === i_1.SendMessage
            ? ((e, t, i) => {
                let n;
                let r;
                let o;
                let s;
                const l = d(e.rawMessage.toolArgs);
                const u = d(e.rawMessage.toolResult);
                const v =
                  u == null || (r = u.data) == null ? undefined : r.message_id;
                const subAgentConversationId =
                  (n =
                    u == null || (s = u.data) == null || (o = s.extra) == null
                      ? undefined
                      : o.sub_agent_conv_id) != null
                    ? n
                    : p(v, i);
                const errorMessage =
                  (u == null ? undefined : u.errmsg) || undefined;
                return {
                  taskId:
                    subAgentConversationId != null
                      ? subAgentConversationId
                      : "".concat(i_1.SendMessage, ":").concat(e.id),
                  toolName: i_1.SendMessage,
                  target: l == null ? undefined : l.target,
                  initialMessageId: v,
                  subAgentConversationId,
                  mainConversationId: t != null ? t : e.conversationId,
                  spawnMessage: e,
                  internalMessages: [],
                  systemEvents: [],
                  content: l == null ? undefined : l.content,
                  status:
                    m(e.rawMessage.messageStatus) || errorMessage
                      ? "failed"
                      : "running",
                  errorMessage,
                  carrierMessageId: e.id,
                  carrierCreateTime: e.createTime,
                };
              })(h, e.mainConversationId, e.subAgentTaskStates)
            : undefined;
      if (
        T &&
        (!T.subAgentConversationId &&
          T.target &&
          (T.subAgentConversationId =
            (A = subAgentTaskByTarget.get(T.target)) == null
              ? undefined
              : A.subAgentConversationId),
        y.set(h.id, T),
        T.target && subAgentTaskByTarget.set(T.target, T),
        T.initialMessageId &&
          subAgentTaskByInitialMessageId.set(T.initialMessageId, T),
        T.subAgentConversationId)
      ) {
        subAgentTaskByConversationId.set(T.subAgentConversationId, T);
        var S;
        var A;
        let b;
        const M = (b = _.get(T.subAgentConversationId)) != null ? b : [];
        M.push(T);
        _.set(T.subAgentConversationId, M);
      }
    }
  }
  for (const C of t) {
    const k = C.conversationId ? _.get(C.conversationId) : undefined;
    if (k == null ? undefined : k.length) {
      C.agentScope = "subagent";
      let D;
      const x = ((e, t, i) => {
        for (
          var n = e.parentMessageId,
            stoppedAtUnknownParent = !!n,
            a = new Set();
          n && !a.has(n);
        ) {
          a.add(n);
          const task = t.find((e) => e.initialMessageId === n);
          if (task) {
            return {
              task,
              stoppedAtUnknownParent: false,
            };
          }
          const s = i.get(n);
          if (!s) {
            return {
              stoppedAtUnknownParent: true,
            };
          }
          n = s.parentMessageId;
        }
        return {
          stoppedAtUnknownParent,
        };
      })(C, k, i);
      const w = k.some((e) => !!e.initialMessageId);
      const V =
        (D = x.task) != null
          ? D
          : x.stoppedAtUnknownParent && w
            ? undefined
            : ((e, t) => {
                let i;
                const n = [...t].sort(
                  (e, t) =>
                    e.carrierCreateTime - t.carrierCreateTime ||
                    e.carrierMessageId.localeCompare(t.carrierMessageId),
                );
                const r = n.filter((t) => t.carrierCreateTime <= e.createTime);
                const o = r[r.length - 1];
                return (
                  o ||
                  (((i = n[0]) == null ? undefined : i.toolName) ===
                  i_1.SpawnTask
                    ? n[0]
                    : undefined)
                );
              })(C, k);
      if (V) {
        C.subAgentTaskId = V.taskId;
        V.internalMessages.push(C);
      }
    }
  }
  const e_subAgentTaskStates = e.subAgentTaskStates;
  if (e_subAgentTaskStates) {
    for (const [P, G] of Object.entries(e_subAgentTaskStates)) {
      const E = _.get(G.conversationId || P);
      if (
        E &&
        ((e, t) =>
          !!(!t.initialMessageId || e.every((e) => !e.initialMessageId)) ||
          e.some((e) => t.initialMessageId === e.initialMessageId))(E, G)
      ) {
        for (const F of E) {
          if (G.summary) {
            F.summary = G.summary;
          }
          if (
            G.taskStatus === n.NuroTaskStatus.failed ||
            G.taskStatus === n.NuroTaskStatus.cancelled
          ) {
            F.status = "failed";
            continue;
          }
          if (
            G.taskStatus === n.NuroTaskStatus.finished &&
            F.status !== "failed"
          ) {
            F.status = "success";
          }
        }
      }
    }
  }
  const e_systemEvents = e.systemEvents;
  if (e_systemEvents) {
    for (const N of e_systemEvents) {
      ((e) => {
        let t;
        let i;
        let n;
        const a = d(e.data);
        const u =
          (i = a == null ? undefined : a.conversation_id) != null
            ? i
            : e.conversationId;
        const v = u ? _.get(u) : undefined;
        if (v) {
          const c = (a == null ? undefined : a.trigger_message_id)
            ? a.trigger_message_id
            : (t = d(a == null ? undefined : a.content)) == null
              ? undefined
              : t.trigger_message_id;
          const m = c ? v.filter((e) => e.initialMessageId === c) : v;
          const p = Yg(e.data);
          for (const f of m) {
            f.systemEvents.push(e);
            if (p) {
              if (lC(p)) {
                f.status = "failed";
                f.errorMessage =
                  (n = f.errorMessage) != null
                    ? n
                    : ((e) => {
                        let t;
                        let i;
                        if (
                          (t =
                            (i = a_1(e.errorCode)) != null
                              ? i
                              : e.errorMessage) != null
                        ) {
                          return t;
                        }
                        return r.F2.t(
                          "web_sub_agent_task_failed_default",
                          {},
                          "Couldn't complete task",
                        );
                      })(p);
                continue;
              }
              if (!f.systemEvents.some((e) => lC(Yg(e.data))) && a) {
                ((e, t) => {
                  const i = ((e) => {
                    if (e) {
                      let t;
                      let i;
                      const n =
                        (i = e.match(l)) == null || (t = i[1]) == null
                          ? undefined
                          : t.trim();
                      return d(n != null ? n : e.trim());
                    }
                  })(t.last_assistant_text);
                  if ((i == null ? undefined : i.summary) && !e.summary) {
                    e.summary = i.summary;
                  }
                  e.status = "success";
                })(f, a);
              }
            }
          }
        }
      })(N);
    }
  }
  for (const L of t) {
    if (c(L, i_1.WaitMessage)) {
      let j;
      const U = L.rawMessage;
      if (
        U.messageStatus === n.NuroToolCallMessageStatus.finished_successfully &&
        ((e) => {
          let t;
          let i;
          const n = d(e);
          if (!n || n.errmsg) {
            return false;
          }
          const r = Object.values(
            (t = (i = n.data) == null ? undefined : i.res) != null ? t : {},
          );
          return (
            r.length !== 0 &&
            r.every((e) => {
              if (
                !(e == null ? undefined : e.done) ||
                e.timed_out ||
                e.state === "approval_required" ||
                e.state === "failed" ||
                e.state === "error"
              ) {
                return false;
              }
              var t = d(e.result);
              return (
                (t == null ? undefined : t.status) !== "failed" &&
                (t == null ? undefined : t.status) !== "error"
              );
            })
          );
        })(U.toolResult)
      ) {
        const H = (j = d(U.toolArgs)) == null ? undefined : j.target;
        if (H) {
          const B = subAgentTaskByTarget.get(H);
          if (B && B.status === "running") {
            B.status = "success";
          }
        }
      }
    }
  }
  for (const q of _.values()) {
    ((e) => {
      if (!(e.length <= 1)) {
        let t;
        let i;
        let n;
        let r;
        let o;
        let s;
        let l;
        const d =
          (t = e.find((e) => e.toolName === i_1.SpawnTask)) != null ? t : e[0];
        const u = e[e.length - 1];
        for (const v of e) {
          v.target =
            (i = (n = d.target) != null ? n : u.target) != null ? i : v.target;
          v.title =
            (r = (o = d.title) != null ? o : u.title) != null ? r : v.title;
          v.role = (s = (l = d.role) != null ? l : u.role) != null ? s : v.role;
          v.status = u.status;
          v.summary = u.summary;
          v.errorMessage = u.errorMessage;
        }
      }
    })(q);
  }
  const subAgentTasks = Array.from(y.values());
  const subAgentTaskByCarrierMessageId = new Map();
  for (const Q of subAgentTasks) {
    const z = Q.spawnMessage;
    Q.carrierMessageId = z.id;
    Q.carrierCreateTime = z.createTime;
    subAgentTaskByCarrierMessageId.set(Q.carrierMessageId, Q);
  }
  const mainMessages = [];
  const Y = new Set();
  const orphanSubAgentMessages = [];
  for (const Z of t) {
    if (Z.agentScope === "subagent") {
      if (!Z.subAgentTaskId) {
        orphanSubAgentMessages.push(Z);
      }
      continue;
    }
    const $ = y.get(Z.id);
    if ($) {
      if (!($.carrierMessageId !== Z.id || Y.has($.carrierMessageId))) {
        mainMessages.push(Z);
        Y.add($.carrierMessageId);
      }
      continue;
    }
    mainMessages.push(Z);
  }
  return {
    mainConversationId: e.mainConversationId,
    mainMessages,
    subAgentTasks,
    subAgentTaskByCarrierMessageId,
    subAgentTaskByTarget,
    subAgentTaskByInitialMessageId,
    subAgentTaskByConversationId,
    diagnostics: {
      orphanSubAgentMessages,
    },
  };
}
