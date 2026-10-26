import n from "qa";
import r from "SR";
import a from "fg";
import o from "fm";
import s from "xi";
import { K as K_1 } from "./module-oi.js";
import { Az } from "./module-n1.js";
import * as u from "./module-BL.js";
import { CC, v8, zu } from "./module-Yh_2.js";
import { B as B_1 } from "./module-doc_2.js";
import { hl } from "./module-ol0.js";
import { sW } from "./module-jH_3.js";
import { U as U_1 } from "./module-z6_2.js";
import { Kp, Os, gt } from "./module-qrx.js";
import I from "oa";
import _ from "bk";
import { D } from "./module-Qb.js";
import { N as N_1 } from "./module-r5.js";
import { g as g_1 } from "./module-owa.js";
import { E as E_1 } from "./module-bN.js";
import { o as o_1 } from "./module-TE_3.js";
import { A } from "./module-YAt.js";
import { H as H_1 } from "./module-n5.js";
import { l as l_1 } from "./module-xJt.js";
import { l as l_2 } from "./module-g3_2.js";
import { y } from "./module-qG.js";
import { j as j_1 } from "./module-il.js";
import { E as E_2 } from "./module-G3.js";
import { u as u_1 } from "./module-qoz.js";
import { V } from "./module-fJq.js";
import { I as I_1 } from "./module-wA.js";
import G from "lq";
import E from "hA";
import F from "HSE";
import O from "LLl";
import N from "A3X";
function L(e) {
  const manager = new r.NuroConversationManager();
  manager.conversation.taskChecker = new r.NuroTaskChecker();
  const { turn_mapping } = e;
  const a = n._(e, ["turn_mapping"]);
  manager.decodeConversationFromJSONString(
    JSON.stringify({
      conversation: a,
    }),
  );
  return {
    manager,
    tasks: manager.conversation.tasks,
  };
}
export class w {
  constructor(e, record, i, j, U) {
    this.generateType = record.generate_type;
    this.uniqueKey = e.taskId;
    this.conversationId = record.conversation_session.conversation_id;
    if (e.needResume()) {
      this.resumeConversationStr = i;
    }
    var H;
    var B;
    var q;
    var { history_record_id, project_id } = record.conversation_session;
    this.idModel = j_1(
      e,
      history_record_id,
      project_id,
      U == null ? undefined : U.turnUuid,
      record.workspace_id,
    );
    this.statusModel = E_2(e);
    this.taskData = V(e);
    if (
      this.taskData.replyMessages.some(
        (e) => e instanceof r.NuroToolCallMessage && U_1(e) && !e.toolResult,
      )
    ) {
      this.hasPendingFormCollection = true;
      this.resumeConversationStr = i;
    }
    this.interruptApproval = hl(this.taskData.replyMessages);
    if (
      ((q = this.interruptApproval) == null ? undefined : q.status) ===
      "pending_approval"
    ) {
      this.hasPendingInterruptApproval = true;
      this.resumeConversationStr = i;
    }
    this.continueAvailable = B_1(this.taskData.replyMessages);
    this.agentConversationUserCancelMarkers = ((e) => {
      const t = e == null ? undefined : e.mapping;
      if (!t) {
        return [];
      }
      const i = v8(e, "conversationId", "conversation_id");
      return Object.entries(t).flatMap((e) => {
        var t;
        var n;
        var r;
        var [a, o] = e;
        if (!zu(o) || v8(o, "status") !== "interrupt_status") {
          return [];
        }
        var s = u.f(o.extra);
        if (!s) {
          return [];
        }
        var interruptReason = u.T(s, "interrupt_reason", "interruptReason");
        if (interruptReason !== "user_cancel") {
          return [];
        }
        var d = zu(o.metadata) ? o.metadata : undefined;
        return [
          {
            messageId: (t = v8(o, "id")) != null ? t : a,
            role: zu(o.author) ? v8(o.author, "role") : undefined,
            createTime: CC(o, "create_time", "createTime"),
            conversationId:
              (n =
                (r = v8(d, "conversation_id", "conversationId")) != null
                  ? r
                  : u.T(s, "conversation_id", "conversationId")) != null
                ? n
                : i,
            requestMessageId: u.T(s, "request_message_id", "requestMessageId"),
            interruptReason,
            interruptSource: u.T(s, "interrupt_source", "interruptSource"),
            stoppedAt: u.T(s, "stopped_at", "stoppedAt"),
            stoppedBy: u.T(s, "stopped_by", "stoppedBy"),
          },
        ];
      });
    })(record.conversation_session);
    var Q = ((e) => {
      const replyMessages = [];
      const taskStates = {};
      const resumeConversationStrMap = {};
      const multiTurnConversationIds = new Set();
      if (!e) {
        return {
          replyMessages,
          taskStates,
          resumeConversationStrMap,
          multiTurnConversationIds,
        };
      }
      for (const [o, l] of Object.entries(e)) {
        try {
          const { turn_mapping } = l;
          const u = n._(l, ["turn_mapping"]);
          resumeConversationStrMap[o] = JSON.stringify({
            conversation: u,
          });
          const { manager, tasks } = L(l);
          if (tasks.length > 1) {
            multiTurnConversationIds.add(o);
          }
          for (const m of tasks) {
            const p = V(m);
            for (const f of p.replyMessages) {
              ((e, conversation_id) => {
                const e_metadata = e.metadata;
                if (e_metadata) {
                  if (e_metadata.conversation_id !== conversation_id) {
                    e_metadata.conversation_id = conversation_id;
                  }
                  return;
                }
                e.metadata = {
                  conversation_id,
                };
              })(f, o);
            }
            replyMessages.push(...p.replyMessages);
          }
          const g = tasks.length <= 1 ? tasks[0] : tasks[tasks.length - 1];
          if (!g) {
            continue;
          }
          taskStates[o] = {
            conversationId: o,
            initialMessageId: ((e) => {
              let t;
              if ((t = e.promptMessages[0]) == null) {
                return undefined;
              }
              return t.id;
            })(g),
            summary: manager.conversation.summary || l.title,
            taskId: g.taskId,
            taskStatus: g.taskStatus,
          };
        } catch (error) {
          s.V.error(
            "[formatPlainAIGCAgenticFromServer]Failed to format sub agent conversation:",
            {
              conversationId: o,
              error,
            },
          );
        }
      }
      return {
        replyMessages,
        taskStates,
        resumeConversationStrMap,
        multiTurnConversationIds,
      };
    })(record.conversation_session_map);
    var z = sW({
      mainConversationId: this.conversationId,
      mainReplyMessages: this.taskData.replyMessages,
      subAgentReplyMessages: Q.replyMessages,
      subAgentTaskStates: Q.taskStates,
    });
    var associatedSubAgentConversationIds = new Set(z.conversationIds);
    var Y = K_1({
      conversationIds: z.conversationIds,
      replyMessages: z.replyMessages,
      resumeConversationStrMap: Q.resumeConversationStrMap,
    });
    if (Y.interruptApprovals) {
      this.agentConversationSubAgentInterruptApprovals = Y.interruptApprovals;
      this.agentConversationSubAgentResumeConversationStrMap =
        Y.resumeConversationStrMap;
      this.hasPendingInterruptApproval = true;
      this.resumeConversationStr = i;
    }
    this.agentConversationSystemEvents = Az(record.conversation_session);
    this.agentConversationSubAgentReplyMessages = Q.replyMessages;
    this.agentConversationSubAgentSystemEvents = [];
    this.agentConversationSubAgentTaskStates = Q.taskStates;
    this.submitIdsOrderedByMessageTime = I_1(this.taskData, z.replyMessages);
    this.hasMediaToolResult = this.submitIdsOrderedByMessageTime.length > 0;
    this.metricsExtra = y(this.taskData);
    this.creativeModelEnabled = Os(this.taskData);
    this.searchEnabled = gt(this.taskData);
    this.seedanceVideoCreationEnabled = Kp(this.taskData);
    this.submitIdDataMap = ((e) => {
      const {
        record,
        agenticUniqueKey,
        metricsExtra,
        submitIdsOrderedByMessageTime,
        associatedSubAgentConversationIds,
        multiTurnSubAgentConversationIds,
      } = e;
      const record_submit_id_data_map = record.submit_id_data_map;
      if (!record_submit_id_data_map) {
        return {};
      }
      const submitIdsFromMessages = new Set(submitIdsOrderedByMessageTime);
      return Object.entries(record_submit_id_data_map).reduce((acc, entry) => {
        var l;
        var [u, v] = entry;
        var mediaConversationId =
          (l = v.agent_opt_data) == null ? undefined : l.conversation_id;
        if (
          !D({
            submitId: u,
            mediaConversationId,
            submitIdsFromMessages,
            associatedSubAgentConversationIds,
            multiTurnSubAgentConversationIds,
          })
        ) {
          return acc;
        }
        try {
          if (l_1(v)) {
            var m = E_1(v);
            m.agenticUniqueKey = agenticUniqueKey;
            m.agenticMetricsExtra = metricsExtra;
            m.idModel.agentHistoryId =
              record.conversation_session.history_record_id;
            m.agentOptData = _._(I._({}, m.agentOptData), {
              agentScene: record.conversation_session.scene,
            });
            acc[u] = m;
          } else if (l_2(v)) {
            var p = o_1(v);
            p.agenticUniqueKey = agenticUniqueKey;
            p.agenticMetricsExtra = metricsExtra;
            p.idModel.agentHistoryId =
              record.conversation_session.history_record_id;
            p.agentOptData = _._(I._({}, p.agentOptData), {
              agentScene: record.conversation_session.scene,
            });
            acc[u] = p;
          } else if (A(v)) {
            var f = N_1(v);
            f.agenticUniqueKey = agenticUniqueKey;
            f.agenticMetricsExtra = metricsExtra;
            f.idModel.agentHistoryId =
              record.conversation_session.history_record_id;
            f.agentOptData = _._(I._({}, f.agentOptData), {
              agentScene: record.conversation_session.scene,
            });
            acc[u] = f;
          } else if (H_1(v)) {
            var g = g_1(v);
            g.agenticUniqueKey = agenticUniqueKey;
            g.agenticMetricsExtra = metricsExtra;
            g.idModel.agentHistoryId =
              record.conversation_session.history_record_id;
            g.agentOptData = _._(I._({}, g.agentOptData), {
              agentScene: record.conversation_session.scene,
            });
            acc[u] = g;
          }
        } catch (error) {
          s.V.error(
            "[formatPlainAIGCAgenticFromServer]Failed to format submit data, filtering out this submit:",
            {
              submitId: u,
              generateType: v.generate_type,
              status: v.status,
              error,
            },
          );
        }
        return acc;
      }, {});
    })({
      record,
      agenticUniqueKey: this.uniqueKey,
      metricsExtra: this.metricsExtra,
      submitIdsOrderedByMessageTime: this.submitIdsOrderedByMessageTime,
      associatedSubAgentConversationIds,
      multiTurnSubAgentConversationIds: Q.multiTurnConversationIds,
    });
    this.itemInfoDataMap = (H = record.item_info_data_map)
      ? Object.entries(H).reduce((acc, entry) => {
          var [i, n] = entry;
          var r = a.o(n, o.Cb);
          if (
            ((e) => {
              const { effectType } = e.commonAttr;
              if (O.r(effectType) || E.i(effectType)) {
                return !!e.image;
              }
              if (N.v(effectType)) {
                return !!e.video;
              }
              return !F.A(effectType) || !!e.collection;
            })(r)
          ) {
            acc[i] = G.v(r);
          }
          return acc;
        }, {})
      : {};
    this.conversationSummary =
      (B = U == null ? undefined : U.title) != null ? B : j;
    var X = u_1(U == null ? undefined : U.billingInfo);
    this.billingTotalCredits = X.billingTotalCredits;
    this.billingCreditDetails = X.billingCreditDetails;
    this.billingQueriedAtMs = X.billingQueriedAtMs;
    this.reactionType = U == null ? undefined : U.reactionType;
    this.feedback = ((e) => {
      if (e) {
        try {
          const t = JSON.parse(e);
          if (t && typeof t === "object" && "text" in t) {
            return t.text;
          }
          return;
        } catch (e) {
          return;
        }
      }
    })(U == null ? undefined : U.feedback);
  }
}
function U(e, t) {
  const e_conversation_session = e.conversation_session;
  const { turn_mapping } = e_conversation_session;
  const l = n._(e_conversation_session, ["turn_mapping"]);
  const d = t != null ? t : turn_mapping;
  const u = JSON.stringify({
    conversation: l,
  });
  const { manager, tasks } = L(e.conversation_session);
  return tasks
    .map((t) => {
      try {
        var i = manager.conversation.summary;
        var n = ((e) => {
          if (e) {
            let t;
            const i = Object.entries(e);
            if (i.length !== 0) {
              const [n, r] = i[0];
              return (
                ((t = r.metadata) == null ? undefined : t.turn_uuid) ||
                r.id ||
                n
              );
            }
          }
        })(l.mapping);
        var r = n ? a.o(d == null ? undefined : d[n], o.Cb) : undefined;
        return new w(t, e, u, i, r);
      } catch (error) {
        s.V.error(
          "[formatPlainAIGCAgenticFromServer]Failed to format AIGC agentic data, filtering out this task:",
          error,
        );
        return null;
      }
    })
    .filter((e) => e !== null);
}
export { U as _ };
