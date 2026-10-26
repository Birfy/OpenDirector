import i from "QWK";
import s from "Kt";
import a from "NY";
import n from "oa";
import o from "bk";
import l from "qa";
import d from "yI";
import c from "bE";
import u from "HJ";
import h from "b5";
import p from "fg";
import _ from "K8";
import v from "ar";
import g from "iN";
import m from "uiO";
import f from "vI";
import k from "IdB";
import y from "KC";
import I from "dR";
import S from "qN";
import T from "yF";
import C from "Ev";
import b from "cBI";
import E from "hI";
import x from "Rb";
import w from "xi";
import A from "Hco";
import R from "L4";
import F from "yMd";
import M from "ibi";
import { P as P_1 } from "./module-QdQ.js";
import { b as b_1 } from "./module-SgZ.js";
function P(e) {
  const {
    submitId,
    taskId,
    generateType,
    statusCode,
    recordStatus,
    createdTime,
    forecastGenerateCost,
    forecastQueueCost,
    progress,
    historyRecordId,
    queueInfo,
  } = e;
  return {
    uniqueKey: submitId,
    generateType,
    statusModel: {
      statusCode,
      recordStatus,
      timeModel: {
        createdTime,
        estimatedQueueCostTime:
          forecastQueueCost > 0 ? 1000 * forecastQueueCost : undefined,
        estimatedGenCostTime:
          forecastGenerateCost > 0 ? 1000 * forecastGenerateCost : undefined,
        progress: Math.max(progress, 0),
      },
      queueInfo,
    },
    idModel: {
      submitId,
      taskId,
      recordId: historyRecordId ? String(historyRecordId) : undefined,
    },
    prompt: "",
    video: {
      videoId: "",
    },
    audioData: undefined,
    videoBgmParams: undefined,
    lastProcessFlow: undefined,
    assetOption: {
      hasFavorited: false,
    },
    videoRatio: undefined,
    originalInput: undefined,
    videoModelConfig: undefined,
    aigcMode: undefined,
    agentOptData: undefined,
    itemList: [],
    processFlows: [],
    videoDuration: 0,
    draftContent: "",
    taskExtra: {
      enterFrom: "click",
    },
  };
}
function j(e, t, r) {
  let i;
  if (e) {
    if ((i = e[t]) != null) {
      return i;
    }
    return e[r];
  }
}
const D = {
  [M.r.Cancel]: "cancel",
  [M.r.Timeout]: "timeout",
  [M.r.Confirm]: "continue",
};
const N = {
  min: R.A.FinalGenerateFail,
  max: R.A.PostTnsCheckNotPass,
};
class q {
  query(e) {
    return a
      ._(function* () {
        try {
          let t;
          let r;
          const i = yield this._deps.networkClient.post(
            this._deps.getApi("/mweb/v1/query_agent_task"),
            p.w({
              submit_ids: e,
            }),
            {
              params: this._deps.getCommonRequestParams(),
            },
          );
          const s = i.logid;
          if (i.ret !== undefined && i.ret !== "0" && i.ret !== "") {
            w.V.warn("[Marketing] query_agent_task non-zero ret", {
              ret: i.ret,
              errmsg: i.errmsg,
              logId: s,
            });
            return this._buildAllFailedData(e, s);
          }
          const a =
            (t = (r = i.data) == null ? undefined : r.data) != null
              ? t
              : i.data;
          if (i.is_first_use === true) {
            yield this._reportCreditConfirmModal("show", e, s, i.is_first_use);
            const n = yield M.l.showCreditConfirmModal();
            yield this._reportCreditConfirmModal(
              D[n.result],
              e,
              s,
              i.is_first_use,
              n,
            );
            if (n.result === M.r.Cancel) {
              yield this._cancelAgentTask(e);
              return this._buildAllFailedData(e, s);
            }
          }
          if (!a) {
            return _.TZ({
              logId: s != null ? s : "",
              data: {},
            });
          }
          const o = this._buildTaskInfoMap(e, a);
          yield this._reportTaskProgress(o);
          const { resultData, fetchableHistoryIds } =
            this._buildTaskResultData(o);
          if (fetchableHistoryIds.size > 0) {
            yield this._fetchFullDataForResult(resultData, fetchableHistoryIds);
          }
          return _.TZ({
            logId: s != null ? s : "",
            data: resultData,
          });
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  _buildTaskInfoMap(e, t) {
    const r = {};
    for (const i of e) {
      const s = t[i];
      if (typeof s === "object" && s !== null) {
        r[i] = ((e) => {
          let t;
          let r;
          let i;
          let s;
          let a;
          let n;
          let o;
          const taskStatus =
            (t = j(e, "taskStatus", "task_status")) != null ? t : 1;
          const progress = Math.max(
            0,
            Number((r = j(e, "progress", "progress")) != null ? r : 0) || 0,
          );
          const taskId = String(
            (i = j(e, "taskId", "task_id")) != null ? i : "",
          );
          const u = j(e, "historyData", "history_data");
          const firstHistory = u == null ? undefined : u[0];
          const rawGenerateType =
            (firstHistory &&
              Number(
                (s = j(firstHistory, "generateType", "generate_type")) != null
                  ? s
                  : 0,
              )) ||
            0;
          const hasValidHistoryData = !!firstHistory && rawGenerateType !== 0;
          const v = j(e, "currentToolExecution", "current_tool_execution");
          const toolExecution = {
            toolName: String(
              (a = j(v, "toolName", "tool_name")) != null ? a : "",
            ),
            toolStatus: Number(
              (n = v == null ? undefined : v.status) != null ? n : 0,
            ),
          };
          const queueInfo = P_1(
            (o = j(firstHistory, "queueInfo", "queue_info")) != null
              ? o
              : j(e, "queueInfo", "queue_info"),
          );
          return {
            taskStatus,
            progress,
            taskId,
            firstHistory,
            rawGenerateType,
            hasValidHistoryData,
            toolExecution,
            queueInfo,
          };
        })(s);
      }
    }
    return r;
  }
  _reportCreditConfirmModal(action, t, i, s, n) {
    return a
      ._(function* () {
        let a;
        try {
          a = (yield require.e("cbu").then(require.bind(require, "OgN")))
            .CreditConfirmModalReporter;
        } catch (e) {
          w.V.warn("[Marketing] failed to load credit_confirm_modal reporter");
          return;
        }
        try {
          this._deps.containerService
            .createInstance(a, {
              action,
              submitIds: t.join(","),
              logId: i != null ? i : "",
              isFirstUse: +!!s,
              creditCost: n == null ? undefined : n.creditCost,
              remainingCredit: n == null ? undefined : n.remainingCredit,
              isVip: n == null ? undefined : n.isVip,
              userSubscribeType: n == null ? undefined : n.userSubscribeType,
            })
            .report();
        } catch (e) {
          w.V.warn("[Marketing] failed to report credit_confirm_modal");
        }
      })
      .call(this);
  }
  _reportTaskProgress(e) {
    return a
      ._(function* () {
        let t;
        try {
          t = (yield require.e("jz8s").then(require.bind(require, "tjd")))
            .AgentTaskToolProgressReporter;
        } catch (e) {
          w.V.warn(
            "[Marketing] failed to load agent_task_tool_progress reporter",
          );
          return;
        }
        for (const [submitId, s] of Object.entries(e)) {
          try {
            this._deps.containerService
              .createInstance(t, {
                taskId: s.taskId,
                submitId,
                taskStatus: s.taskStatus,
                progress: s.progress,
                toolName: s.toolExecution.toolName,
                toolStatus: s.toolExecution.toolStatus,
                generateType: s.rawGenerateType,
              })
              .report();
          } catch (e) {
            w.V.warn("[Marketing] failed to report agent_task_tool_progress");
          }
        }
      })
      .call(this);
  }
  _buildTaskResultData(e) {
    const resultData = {};
    const fetchableHistoryIds = new Map();
    for (const [i, s] of Object.entries(e)) {
      if (!s.hasValidHistoryData) {
        resultData[i] = this._buildPlaceholderData(i, s);
        continue;
      }
      const a = this._buildHistoryData(i, s);
      resultData[i] = a.data;
      if (a.canFetchFullData) {
        fetchableHistoryIds.set(String(a.historyRecordId), i);
      }
    }
    return {
      resultData,
      fetchableHistoryIds,
    };
  }
  _isReliableFailure(e) {
    return e.taskStatus === 5;
  }
  _buildPlaceholderData(e, t) {
    const r = t.progress >= 100 || t.taskStatus === 3;
    const i = this._isReliableFailure(t);
    return P({
      submitId: e,
      taskId: t.taskId,
      generateType: F.ce.CloudRenderVideo,
      statusCode: r
        ? R.A.FinalSuccess
        : i
          ? R.A.FinalGenerateFail
          : R.A.SubmitOk,
      recordStatus: i
        ? x.DMLGenRecordStatus.Failed
        : x.DMLGenRecordStatus.Loading,
      createdTime: this._getAgentCreatedTime(e),
      forecastGenerateCost: r || i ? 0 : 300,
      forecastQueueCost: r || i ? 0 : 60,
      progress: t.progress,
      historyRecordId: undefined,
      queueInfo: t.queueInfo,
    });
  }
  _buildHistoryData(e, t) {
    let r;
    let i;
    let s;
    let a;
    let n;
    let o;
    const t_firstHistory = t.firstHistory;
    const generateType =
      (r = j(t_firstHistory, "generateType", "generate_type")) != null
        ? r
        : F.ce.CloudRenderVideo;
    const statusCode =
      (i = j(t_firstHistory, "status", "statusCode")) != null
        ? i
        : R.A.SubmitOk;
    const l_task = t_firstHistory.task;
    const h =
      (s = j(t_firstHistory, "historyRecordId", "history_record_id")) != null
        ? s
        : j(l_task, "historyRecordId", "history_record_id");
    const createdTime =
      A.V(
        Number(
          (a = j(t_firstHistory, "createdTime", "created_time")) != null
            ? a
            : 0,
        ),
      ) || this._getAgentCreatedTime(e);
    const forecastGenerateCost = Number(
      (n = j(
        t_firstHistory,
        "forecastGenerateCost",
        "forecast_generate_cost",
      )) != null
        ? n
        : 0,
    );
    const forecastQueueCost = Number(
      (o = j(t_firstHistory, "forecastQueueCost", "forecast_queue_cost")) !=
        null
        ? o
        : 0,
    );
    const g =
      statusCode === R.A.FinalSuccess ||
      t.progress >= 100 ||
      t.taskStatus === 3;
    const m = this._isReliableFailure(t);
    const f = m ? t.taskStatus : 2;
    if (g || m) {
      this._agentCreatedTimeCache.delete(e);
    }
    const canFetchFullData = g && !!h;
    const recordStatus = g
      ? x.DMLGenRecordStatus.Succeed
      : f === 5 || (statusCode >= N.min && statusCode <= N.max)
        ? x.DMLGenRecordStatus.Failed
        : x.DMLGenRecordStatus.Loading;
    return {
      data: P({
        submitId: e,
        taskId: t.taskId,
        generateType,
        statusCode,
        recordStatus,
        createdTime,
        forecastGenerateCost,
        forecastQueueCost,
        progress: t.progress,
        historyRecordId: h,
        queueInfo: t.queueInfo,
      }),
      canFetchFullData,
      historyRecordId: h,
    };
  }
  _fetchFullDataForResult(e, t) {
    return a
      ._(function* () {
        const r = yield this._deps.fetchHistoryByIds(Array.from(t.keys()));
        const i = r.ok ? r.value.data : undefined;
        for (const [s, a] of t.entries()) {
          const n = i == null ? undefined : i[s];
          if (n) {
            e[a] = n;
          } else {
            let o;
            let l;
            let d;
            const c =
              (d = e[a]) == null ||
              (l = d.statusModel) == null ||
              (o = l.timeModel) == null
                ? undefined
                : o.createdTime;
            e[a] = this._buildFailedPlaceholder(a, s, c);
          }
        }
      })
      .call(this);
  }
  _buildFailedPlaceholder(e, historyRecordId, r) {
    return P({
      submitId: e,
      generateType: F.ce.CloudRenderVideo,
      statusCode: R.A.FinalGenerateFail,
      recordStatus: x.DMLGenRecordStatus.Failed,
      createdTime: r && r > 0 ? r : this._getAgentCreatedTime(e),
      forecastGenerateCost: 0,
      forecastQueueCost: 0,
      progress: 100,
      historyRecordId,
    });
  }
  _getAgentCreatedTime(e) {
    const t = this._agentCreatedTimeCache.get(e);
    if (t) {
      return t;
    }
    if (this._agentCreatedTimeCache.size >= 200) {
      const r = this._agentCreatedTimeCache.keys().next().value;
      if (r !== undefined) {
        this._agentCreatedTimeCache.delete(r);
      }
    }
    const i = Date.now();
    this._agentCreatedTimeCache.set(e, i);
    return i;
  }
  _cancelAgentTask(submit_ids) {
    return a
      ._(function* () {
        try {
          yield this._deps.networkClient.post(
            this._deps.getApi("/mweb/v1/cancel_agent_task"),
            p.w({
              submit_ids,
            }),
            {
              params: this._deps.getCommonRequestParams(),
            },
          );
        } catch (error) {
          w.V.warn("[Marketing] cancel_agent_task failed", {
            error,
          });
        }
      })
      .call(this);
  }
  _buildAllFailedData(e, t) {
    const r = {};
    for (const i of e) {
      r[i] = P({
        submitId: i,
        generateType: F.ce.CloudRenderVideo,
        statusCode: R.A.FinalGenerateFail,
        recordStatus: x.DMLGenRecordStatus.Failed,
        createdTime: this._getAgentCreatedTime(i),
        forecastGenerateCost: 0,
        forecastQueueCost: 0,
        progress: 0,
        historyRecordId: undefined,
      });
    }
    return _.TZ({
      logId: t != null ? t : "",
      data: r,
    });
  }
  constructor(e) {
    this._deps = e;
    this._agentCreatedTimeCache = new Map();
  }
}
class G {
  get _networkClient() {
    if (!this._networkClientInstance) {
      let e;
      let headers;
      let r;
      this._networkClientInstance =
        ((e = this._containerService),
        (headers = {
          "X-Platform": (C.Fr, "pc"),
          "Content-Type": "application/json",
        }),
        (r = new y.LL().build({
          headers,
          withCredentials: true,
        })),
        b.U(e, r),
        I.vo(r),
        S.Wh(r),
        T.P(r),
        E.m(r),
        r);
      u.W(this._networkClientInstance);
    }
    return this._networkClientInstance;
  }
  get _agentTaskApiClient() {
    if (!this._agentTaskApiClientInstance) {
      this._agentTaskApiClientInstance = new q({
        networkClient: this._networkClient,
        containerService: this._containerService,
        getCommonRequestParams: () => this._getCommonRequestParams(),
        getApi: (e) => this._getApi(e),
        fetchHistoryByIds: (historyIds) =>
          this._callGetHistoryByIds({
            historyIds,
          }),
      });
    }
    return this._agentTaskApiClientInstance;
  }
  getItemByIds(e) {
    const { imageResolutionStrategy } = e;
    const r = l._(e, ["imageResolutionStrategy"]);
    const { needBatch } = r;
    if (needBatch) {
      return new Promise((resolve, reject) => {
        var s = JSON.stringify(
          this._generateBatchKey({
            imageResolutionStrategy,
            historyOption: r.historyOption,
            isHistoryIds: !!r.historyIds && !r.submitIds,
          }),
        );
        var requestedIds = new Set();
        if (r.historyIds) {
          r.historyIds.forEach((e) => requestedIds.add(e));
        }
        if (r.submitIds) {
          r.submitIds.forEach((e) => requestedIds.add(e));
        }
        if (!this._pendingRequests.has(s)) {
          this._pendingRequests.set(s, []);
        }
        this._pendingRequests.get(s).push({
          params: n._(
            {
              imageResolutionStrategy,
            },
            r,
          ),
          resolve,
          reject,
          requestedIds,
        });
        this._getDebouncedExecutor(s)();
      });
    }
    return this._performActualRequest(r);
  }
  _getDebouncedExecutor(e) {
    if (!this._debouncedExecutors.has(e)) {
      const t = d.A(() => {
        this._executeBatchRequest(e);
      }, this._debounceTime);
      this._debouncedExecutors.set(e, t);
    }
    return this._debouncedExecutors.get(e);
  }
  _generateBatchKey(e) {
    return {
      imageResolutionStrategy: e.imageResolutionStrategy,
      historyOption: e.historyOption,
      isHistoryIds: e.isHistoryIds,
    };
  }
  _executeBatchRequest(e) {
    return a
      ._(function* () {
        const t = this._pendingRequests.get(e);
        if (t && t.length !== 0) {
          this._pendingRequests.delete(e);
          this._debouncedExecutors.delete(e);
          try {
            const r = new Set();
            const i = new Set();
            let s = null;
            for (const a of t) {
              if (!s) {
                s = n._({}, a.params);
                s.historyIds = [];
                s.submitIds = [];
              }
              if (a.params.historyIds) {
                a.params.historyIds.forEach((e) => r.add(e));
              }
              if (a.params.submitIds) {
                a.params.submitIds.forEach((e) => i.add(e));
              }
            }
            if (!s) {
              return;
            }
            if (r.size > 0) {
              s.historyIds = Array.from(r);
            }
            if (i.size > 0) {
              s.submitIds = Array.from(i);
            }
            const o = {};
            for (const l of t) {
              if (l.params.submitIdToolNameMap) {
                Object.entries(l.params.submitIdToolNameMap).forEach((e) => {
                  var [t, r] = e;
                  o[t] = r;
                });
              }
            }
            if (Object.keys(o).length > 0) {
              s.submitIdToolNameMap = o;
            }
            const d = yield this._performActualRequest(s);
            this._distributeResults(t, d);
          } catch (error) {
            t.forEach((t) => {
              t.reject(error);
            });
          }
        }
      })
      .call(this);
  }
  _performActualRequest(e) {
    return a
      ._(function* () {
        const { imageResolutionStrategy, submitIdToolNameMap } = e;
        const i = l._(e, ["imageResolutionStrategy", "submitIdToolNameMap"]);
        try {
          if (imageResolutionStrategy) {
            var s;
            var a;
            const d = yield k.l(imageResolutionStrategy);
            i.imageInfo = d;
            i.originImageInfo = d;
          }
          const c = [];
          const u = [];
          for (const p of (s = i.submitIds) != null ? s : []) {
            const v =
              submitIdToolNameMap == null ? undefined : submitIdToolNameMap[p];
            if (b_1(v)) {
              u.push(p);
            } else {
              c.push(p);
            }
          }
          const g = [];
          if (c.length > 0 || (i.historyIds && i.historyIds.length > 0)) {
            g.push(
              this._callGetHistoryByIds(
                o._(n._({}, i), {
                  submitIds: c.length > 0 ? c : undefined,
                }),
              ),
            );
          }
          if (u.length > 0) {
            g.push(this._agentTaskApiClient.query(u));
          }
          if (g.length === 0) {
            return _.TZ({
              logId: "",
              data: {},
            });
          }
          const m = yield Promise.all(g);
          const f = {};
          let y = "";
          for (const I of m) {
            if (I.ok && I.value.data) {
              Object.assign(f, I.value.data);
            } else if (!(I.ok || a)) {
              a = I;
            }
            if (I.ok && I.value.logId) {
              y = y || I.value.logId;
            }
          }
          if (Object.keys(f).length === 0 && a && !a.ok) {
            return a;
          }
          return _.TZ({
            logId: y,
            data: f,
          });
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  _callGetHistoryByIds(e) {
    return a
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._getApi("/mweb/v1/get_history_by_ids"),
            p.w(e),
            {
              params: this._getCommonRequestParams(),
            },
          );
          return _.TZ({
            logId: t.log_id,
            data: Object.fromEntries(
              Object.entries(t.data)
                .map((e) => {
                  var [t, r] = e;
                  return [t, r ? f.B(r) : null];
                })
                .filter((e) => {
                  var [t, r] = e;
                  return m.U(r);
                }),
            ),
          });
        } catch (error) {
          return h.r(error);
        }
      })
      .call(this);
  }
  _distributeResults(e, t) {
    if (!t.ok) {
      return void e.forEach((e) => {
        e.resolve(t);
      });
    }
    const data = t.value.data;
    e.forEach((e) => {
      var i = {};
      e.requestedIds.forEach((e) => {
        if (data[e]) {
          i[e] = data[e];
        }
      });
      e.resolve(
        _.TZ({
          logId: t.value.logId,
          data: i,
        }),
      );
    });
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: g.X.DEFAULT,
      path,
    });
  }
  _getCommonRequestParams() {
    return {
      aid: "".concat(this._environmentService.appId),
      device_platform: "web",
      region: this._httpApiSettingService.userLocationInfo.region,
      webId: this._accountService.userProfile.webId,
      da_version: "3.1.3",
    };
  }
  constructor(e, t, r, i) {
    this._httpApiSettingService = e;
    this._containerService = t;
    this._environmentService = r;
    this._accountService = i;
    this._debounceTime = 50;
    this._pendingRequests = new Map();
    this._debouncedExecutors = new Map();
  }
}
G = i.Cg(
  [
    i.Qj(0, g.r),
    i.Qj(1, s._),
    i.Qj(2, v.k),
    i.Qj(3, c.c),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      g.r === undefined ? Object : g.r,
      s._ === undefined ? Object : s._,
      v.k === undefined ? Object : v.k,
      c.c === undefined ? Object : c.c,
    ]),
  ],
  G,
);
class L {
  getItemByIds(e) {
    return this._getContentGenerationItemRepo.getItemByIds(e);
  }
  constructor(e) {
    this._containerService = e;
    this._getContentGenerationItemRepo =
      this._containerService.createInstance(G);
  }
}
export { L as c };
L = i.Cg(
  [
    i.Qj(0, s._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [s._ === undefined ? Object : s._]),
  ],
  L,
);
