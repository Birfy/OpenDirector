import r from "NY";
import a from "QWK";
import n from "c8J";
import o from "SR";
import s from "Rb";
import d from "K8";
import l from "A7";
import u from "xi";
import c from "Kt";
import m from "uiO";
import g from "CR";
import h from "L4";
import p from "xiM";
import v from "Hlu";
import I from "ha";
import _ from "zQ";
import f from "Y6";
import b from "KV";
import y from "x5f";
import k from "wSn";
import S from "OVn";
import { U as U_1 } from "./module-XgG.js";
import M from "oa";
import A from "yI";
import R from "o7";
import P from "Hi";
import D from "ONA";
import E from "H5";
import G from "qG";
import { R as R_1 } from "./module-CRx_2.js";
import w from "J3";
import j from "s68";
import H from "e3";
import Q from "aS";
import U from "sV8";
import { E as E_1 } from "./module-FI.js";
import L from "yB";
import K from "fHC";
import { w as w_1 } from "./module-e2O.js";
import { X as X_1 } from "./module-MGT.js";
import { T as T_1 } from "./module-PXv.js";
import X from "DA";
import Z from "bk";
import "Vgx";
import J from "WyQ";
import Y from "Qey";
import $ from "jH";
import ee from "ol0";
import et from "wA";
import ei from "eyO";
import er from "G7p";
import ea from "AI";
import en from "fJq";
import eo from "G3";
import es from "il";
import ed from "doc";
import el from "rr";
import eu from "yZN";
import ec from "qoz";
class T {
  begin(e, targetConversationId) {
    const isSubAgent = targetConversationId !== e.conversationId;
    const r = {
      targetConversationId,
      isSubAgent,
      previousRecordStatus: e.statusModel.recordStatus,
      previousSubAgentResumePhase: isSubAgent
        ? this._subAgentResumePhases.get(targetConversationId)
        : undefined,
    };
    if (isSubAgent) {
      this._subAgentResumePhases.set(targetConversationId, "resuming");
    }
    e.statusModel.recordStatus = s.DMLGenRecordStatus.Loading;
    return r;
  }
  complete(e, t) {
    if (t.isSubAgent) {
      this._subAgentResumePhases.set(t.targetConversationId, "monitoring");
      this.reconcile(e);
    }
  }
  rollback(e, t) {
    if (!t.isSubAgent) {
      e.statusModel.recordStatus = t.previousRecordStatus;
      return;
    }
    if (t.previousSubAgentResumePhase) {
      this._subAgentResumePhases.set(
        t.targetConversationId,
        t.previousSubAgentResumePhase,
      );
    } else {
      this._subAgentResumePhases.delete(t.targetConversationId);
    }
    e.statusModel.recordStatus =
      this._subAgentResumePhases.size > 0
        ? s.DMLGenRecordStatus.Loading
        : t.previousRecordStatus;
  }
  reconcile(e) {
    if (this._subAgentResumePhases.size !== 0) {
      for (const [t, i] of this._subAgentResumePhases) {
        if (i === "monitoring") {
          let r;
          let a;
          let n;
          if (
            (n =
              (a = e.agentConversationSubAgentTaskStates) == null ||
              (r = a[t]) == null
                ? undefined
                : r.taskStatus) === o.NuroTaskStatus.finished ||
            n === o.NuroTaskStatus.failed ||
            n === o.NuroTaskStatus.cancelled
          ) {
            this._subAgentResumePhases.delete(t);
          }
        }
      }
      this._updateRecordStatus(e);
    }
  }
  _updateRecordStatus(e) {
    let t;
    e.statusModel.recordStatus =
      this._subAgentResumePhases.size > 0
        ? s.DMLGenRecordStatus.Loading
        : (t = e.taskData.taskStatus) === o.NuroTaskStatus.finished
          ? s.DMLGenRecordStatus.Succeed
          : t === o.NuroTaskStatus.failed || t === o.NuroTaskStatus.cancelled
            ? s.DMLGenRecordStatus.Failed
            : s.DMLGenRecordStatus.Loading;
  }
  constructor() {
    this._subAgentResumePhases = new Map();
  }
}
function O(e) {
  if (P.c(e) || D.l(e)) {
    return e;
  }
}
class F extends R.jG {
  refreshMonitoring(e) {
    this._debouncedRefreshMonitoring(e);
  }
  dispose() {
    this._debouncedRefreshMonitoring.cancel();
    this._processedSubmitIds.clear();
    this._loadingSubmitIds.clear();
    this._retryCountMap.clear();
    super.dispose();
  }
  _tryApplyExistingPresentFiles(e, t) {
    return r
      ._(function* () {
        const i = [];
        for (const r of t) {
          const a = e.submitIdDataMap[r.submitId];
          const n = a ? O(a) : undefined;
          if (!n) {
            i.push(r);
            continue;
          }
          if (!(yield this._applyFetchedPresentFileData(r.submitId, n))) {
            i.push(r);
          }
        }
        return i;
      })
      .call(this);
  }
  _performRefreshMonitoring(e) {
    return r
      ._(function* () {
        if (e) {
          const t = E.j(v.N(e)).filter(
            (e) =>
              !this._processedSubmitIds.has(e.submitId) &&
              !this._loadingSubmitIds.has(e.submitId),
          );
          if (t.length !== 0) {
            for (const i of t) {
              this._loadingSubmitIds.add(i.submitId);
            }
            const r = yield this._tryApplyExistingPresentFiles(e, t);
            for (const a of t
              .map((e) => e.submitId)
              .filter((e) => !r.some((t) => t.submitId === e))) {
              this._loadingSubmitIds.delete(a);
            }
            if (r.length !== 0) {
              const n = r.map((e) => e.submitId);
              try {
                const o = yield this._getAIGCDataBySubmitIds(n);
                for (const s of r) {
                  if (
                    !(yield this._applyFetchedPresentFileData(
                      s.submitId,
                      o[s.submitId],
                    ))
                  ) {
                    this._handleRetry(s.submitId);
                  }
                }
              } catch (e) {
                for (const d of r) {
                  this._handleRetry(d.submitId);
                }
                u.V.error("[DocumentTaskMonitor] Failed to fetch AIGC data");
              } finally {
                for (const l of n) {
                  this._loadingSubmitIds.delete(l);
                }
              }
            }
          }
        }
      })
      .call(this);
  }
  _writeSubmitIdData(e, t) {
    this._options.onModelChange((i) => {
      var r;
      t.agenticMetricsExtra = G.y(i.taskData);
      t.agenticUniqueKey = i.uniqueKey;
      t.idModel.agentHistoryId =
        (r = t.idModel.agentHistoryId) != null ? r : i.idModel.agentHistoryId;
      i.submitIdDataMap[e] = t;
    });
  }
  _hydrateEmptyItemList(e) {
    return r
      ._(function* () {
        const t = ((i = e.preGenItemIds) != null ? i : [])
          .map((e) => String(e).trim())
          .filter((e) => e.length > 0);
        if (e.itemList.length > 0) {
          return true;
        }
        if (t.length === 0) {
          return false;
        }
        try {
          var i;
          let r;
          let a;
          const n = yield this._getWorkDetailService.getUnPublishedWorkDetail({
            itemIdList: t,
          });
          if (!n.ok || n.value.workDetails.length === 0) {
            return false;
          }
          r = n.value.workDetails;
          a = e.itemList;
          r.forEach((e) => {
            a.push(e);
          });
          return e.itemList.length > 0;
        } catch (e) {
          return false;
        }
      })
      .call(this);
  }
  _applyFetchedPresentFileData(e, t) {
    return r
      ._(function* () {
        if (!t) {
          return false;
        }
        const i = O(t);
        if (i) {
          return (
            !!(yield this._hydrateEmptyItemList(i)) &&
            (this._writeSubmitIdData(e, i),
            P.c(i) &&
              this._contentGeneratorTaskReportService.reportMarkdownGenerateStatus(
                i,
              ),
            this._processedSubmitIds.add(e),
            u.V.info(
              "[DocumentTaskMonitor] Present file data loaded for submitId: ".concat(
                e,
              ),
            ),
            true)
          );
        }
        this._processedSubmitIds.add(e);
        return true;
      })
      .call(this);
  }
  _handleRetry(e) {
    let t;
    const i = ((t = this._retryCountMap.get(e)) != null ? t : 0) + 1;
    this._retryCountMap.set(e, i);
    if (i >= 3) {
      this._processedSubmitIds.add(e);
      u.V.warn(
        "[DocumentTaskMonitor] submitId "
          .concat(e, " failed after ")
          .concat(3, " retries, marking as processed"),
      );
    }
  }
  _getAIGCDataBySubmitIds(submitIds) {
    return r
      ._(function* () {
        try {
          const t = yield this._getContentGenerationItemService.getItemByIds({
            submitIds,
            needBatch: true,
          });
          if (t.ok && t.value.data) {
            return t.value.data;
          }
        } catch (e) {}
        return {};
      })
      .call(this);
  }
  constructor(e, t, i, r) {
    super();
    this._options = e;
    this._getContentGenerationItemService = t;
    this._getWorkDetailService = i;
    this._contentGeneratorTaskReportService = r;
    this._processedSubmitIds = new Set();
    this._loadingSubmitIds = new Set();
    this._retryCountMap = new Map();
    this._debouncedRefreshMonitoring = A.A(
      (e) => this._performRefreshMonitoring(e),
      100,
    );
  }
}
F = a.Cg(
  [
    a.Qj(1, R_1),
    a.Qj(2, w.B),
    a.Qj(3, k.M),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof DocumentTaskMonitorOptions === "undefined"
        ? Object
        : DocumentTaskMonitorOptions,
      R_1 === undefined ? Object : R_1,
      w.B === undefined ? Object : w.B,
      k.M === undefined ? Object : k.M,
    ]),
  ],
  F,
);
class B extends R.jG {
  get runningMediaTasks() {
    return Array.from(this._mediaTasks.values()).filter((e) => !e.disposed);
  }
  refreshMonitoring(e) {
    this._debouncedRefreshMonitoring(e);
    this._updatePreFetchedSubmitIds(e);
    this._disposeWebsocketHandlerIfTaskFinished(e);
  }
  dispose() {
    let e;
    this._debouncedRefreshMonitoring.cancel();
    this._mediaTasks.forEach((e, t) => {
      this._disposeAssetTask(t);
    });
    this._mediaTasks.clear();
    this._pendingWebsocketHistoryInfos.clear();
    this._submitIdToolNameMap.clear();
    if ((e = this._websocketMessageHandlerDisposable) != null) {
      e.dispose();
    }
    super.dispose();
  }
  _initWebsocketHandlers() {
    this._websocketMessageHandlerDisposable =
      this._websocketService.registerEventHandler(
        K.NY.QueueTaskProgress,
        this._handleWebsocketMessage.bind(this),
      );
  }
  _handleWebsocketMessage(e) {
    if ([j.Y.Queueing, j.Y.Generating].includes(e.queueInfo.queueStatus)) {
      const t = this._preFetchedSubmitIds.indexOf(e.submitId);
      if (t !== -1) {
        const i = {
          submitId: e.submitId,
        };
        this._pendingWebsocketHistoryInfos.set(e.submitId, i);
        this._preFetchedSubmitIds.splice(t, 1);
        this._debouncedRefreshMonitoring();
      }
    }
  }
  _performRefreshMonitoring(e) {
    return r
      ._(function* () {
        const t = this._extractHistoryInfos(e);
        const i = [];
        for (const r of t) {
          const a = this._getOrCreateMediaTask(r);
          if (!(a.task || a.isLoading || a.disposed)) {
            i.push(a);
          }
        }
        if (i.length !== 0) {
          const n = i.map((e) => e.historyInfo.submitId);
          for (const o of i) {
            o.isLoading = true;
          }
          const s = yield this._getAIGCDataBySubmitIds(n);
          for (const d of i) {
            d.isLoading = false;
          }
          for (const l of i) {
            const { historyInfo } = l;
            const model = s[historyInfo.submitId];
            if (
              !(
                !model ||
                l.disposed ||
                this._failedSubmitIds.has(historyInfo.submitId)
              )
            ) {
              try {
                const submitIdToolNameMap = this._buildSubmitIdToolNameMap([
                  historyInfo.submitId,
                ]);
                if (H.A(model)) {
                  const h = this._createGeneratorCommerceManager(model);
                  const p = this._containerService.createInstance(X_1, {
                    model,
                    generatorCommerceManager: h,
                    needBatchPolling: true,
                    submitIdToolNameMap,
                  });
                  h.syncCommercialStatus();
                  l.task = p;
                  this._setupImageTaskListeners(historyInfo, p);
                } else if (Q.g(model)) {
                  const v = this._createGeneratorCommerceManager(model);
                  const I = this._containerService.createInstance(T_1, {
                    model,
                    generatorCommerceManager: v,
                    needBatchPolling: true,
                    submitIdToolNameMap,
                  });
                  v.syncCommercialStatus();
                  l.task = I;
                  this._setupVideoTaskListeners(historyInfo, I);
                } else if (U.n(model)) {
                  const _ = this._createGeneratorCommerceManager(model);
                  const f = this._containerService.createInstance(w_1, {
                    model,
                    generatorCommerceManager: _,
                  });
                  _.syncCommercialStatus();
                  l.task = f;
                  this._setupAudioTaskListeners(historyInfo, f);
                }
              } catch (error) {
                u.V.warn("[MediaTaskMonitor] create media task failed", {
                  submitId: historyInfo.submitId,
                  error,
                });
                l.disposed = true;
              }
            }
          }
        }
      })
      .call(this);
  }
  _createGeneratorCommerceManager(e) {
    let t;
    const i = this._dreaminaCommercialFeatureContainerService.getInstanceSync();
    return this._containerService.createInstance(E_1, {
      sceneOptions:
        i == null ? undefined : i.getCommercialSceneOptionsFromAIGCData(e),
      submitId: (t = e.idModel.submitId) != null ? t : "",
    });
  }
  _getOrCreateMediaTask(historyInfo) {
    const t = this._mediaTasks.get(historyInfo.submitId);
    if (t) {
      return t;
    }
    const i = {
      historyInfo,
      disposed: false,
      isLoading: false,
    };
    this._mediaTasks.set(historyInfo.submitId, i);
    return i;
  }
  _extractHistoryInfos(e) {
    const t = (e) => {
      if (!a.some((t) => t.submitId === e.submitId)) {
        a.push(e);
      }
    };
    const i = e ? I.K(v.N(e)) : [];
    u.V.info("[MediaTaskMonitor] extractedHistoryInfos", i);
    const r = Array.from(this._pendingWebsocketHistoryInfos.values());
    u.V.info("[MediaTaskMonitor] pendingWebsocketHistoryInfos", r);
    var a = [...i];
    for (const n of r) {
      t(n);
    }
    return a.filter((e) => !this._failedSubmitIds.has(e.submitId));
  }
  _updatePreFetchedSubmitIds(e) {
    this._preFetchedSubmitIds.length = 0;
    const t = v.N(e);
    const i = _.y4(t);
    for (const r of this._failedSubmitIds) {
      if (!i.has(r)) {
        this._mediaTasks.delete(r);
      }
    }
    this._failedSubmitIds = i;
    for (const a of i) {
      this._disposeAssetTask(a);
      this._pendingWebsocketHistoryInfos.delete(a);
      this._submitIdToolNameMap.delete(a);
      if (
        ((l = e.submitIdDataMap[a]) == null
          ? undefined
          : l.statusModel.recordStatus) === s.DMLGenRecordStatus.Loading
      ) {
        delete e.submitIdDataMap[a];
      }
    }
    const n = new Set(
      I.K(t).map((e) => {
        var { submitId } = e;
        return submitId;
      }),
    );
    for (const d of t) {
      if (d instanceof o.NuroToolCallMessage) {
        var l;
        let u;
        const c = (u = d.toolExtra) == null ? undefined : u.get("submit_id");
        if (!c || i.has(c)) {
          continue;
        }
        const m = !!d.toolResult && d.isFinalStatus();
        const g = this._isSubmitIdConfirmedByToolResult(d, c, n);
        if (m && !g) {
          this._disposeAssetTask(c);
          this._mediaTasks.delete(c);
          this._pendingWebsocketHistoryInfos.delete(c);
          this._submitIdToolNameMap.delete(c);
          delete e.submitIdDataMap[c];
          continue;
        }
        if (d.toolName) {
          this._submitIdToolNameMap.set(c, d.toolName);
        }
        if (!this._mediaTasks.has(c)) {
          this._preFetchedSubmitIds.push(c);
        }
      }
    }
  }
  _isSubmitIdConfirmedByToolResult(e, t, i) {
    const r = _.JL(e);
    if (r) {
      return r.submitId === t;
    }
    return i.has(t);
  }
  _getAIGCDataBySubmitIds(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._getContentGenerationItemService.getItemByIds({
            submitIds: e,
            needBatch: true,
            submitIdToolNameMap: this._buildSubmitIdToolNameMap(e),
          });
          if (t.ok && t.value.data) {
            return t.value.data;
          }
        } catch (e) {}
        return {};
      })
      .call(this);
  }
  _buildSubmitIdToolNameMap(e) {
    if (this._submitIdToolNameMap.size !== 0) {
      const t = {};
      for (const i of e) {
        const r = this._submitIdToolNameMap.get(i);
        if (r) {
          t[i] = r;
        }
      }
      if (Object.keys(t).length > 0) {
        return t;
      }
      return undefined;
    }
  }
  _updateModel(e, t, i) {
    e.agenticMetricsExtra = G.y(t.taskData);
    e.agenticUniqueKey = t.uniqueKey;
    t.submitIdDataMap[i] = e;
  }
  _setupImageTaskListeners(e, t) {
    let i;
    let r;
    let a;
    const { submitId } = e;
    const o = this._mediaTasks.get(submitId);
    if (o) {
      this._options.onModelChange((e) => {
        this._updateModel(t.model, e, submitId);
      });
      if ((i = (r = this._options).onTaskRestored) != null) {
        i.call(r, t);
      }
      o.disposes = [
        t.onGeneratedDone((e) => {
          var i;
          var r;
          this._options.onModelChange((t) => {
            this._updateModel(e, t, submitId);
          });
          this._disposeAssetTask(submitId);
          if ((i = (r = this._options).onTaskGeneratedDone) != null) {
            i.call(r, t);
          }
        }),
        t.onGeneratedFailed((e) => {
          var i;
          var r;
          this._options.onModelChange((t) => {
            this._updateModel(e, t, submitId);
          });
          this._disposeAssetTask(submitId);
          if ((i = (r = this._options).onTaskGeneratedFailed) != null) {
            i.call(r, t);
          }
        }),
        (a = t.onQueueDetailsChanged) == null
          ? undefined
          : a.call(t, (e) => {
              var i;
              var r;
              this._options.onModelChange((t) => {
                this._updateModel(e, t, submitId);
              });
              if ((i = (r = this._options).onTaskQueueDetailsChanged) != null) {
                i.call(r, t);
              }
            }),
      ].filter(Boolean);
      u.V.info(
        "[MediaTaskMonitor] Setup image task listeners for submitId: ".concat(
          submitId,
        ),
      );
    }
  }
  _setupVideoTaskListeners(e, t) {
    let i;
    let r;
    let a;
    const { submitId } = e;
    const o = this._mediaTasks.get(submitId);
    if (o) {
      this._options.onModelChange((e) => {
        this._updateModel(t.model, e, submitId);
      });
      if ((i = (r = this._options).onTaskRestored) != null) {
        i.call(r, t);
      }
      o.disposes = [
        t.onGeneratedDone((e) => {
          var i;
          var r;
          this._options.onModelChange((t) => {
            this._updateModel(e, t, submitId);
          });
          this._disposeAssetTask(submitId);
          if ((i = (r = this._options).onTaskGeneratedDone) != null) {
            i.call(r, t);
          }
        }),
        t.onGeneratedFailed((e) => {
          var i;
          var r;
          this._options.onModelChange((t) => {
            this._updateModel(e, t, submitId);
          });
          this._disposeAssetTask(submitId);
          if ((i = (r = this._options).onTaskGeneratedFailed) != null) {
            i.call(r, t);
          }
        }),
        (a = t.onQueueDetailsChanged) == null
          ? undefined
          : a.call(t, (e) => {
              var i;
              var r;
              this._options.onModelChange((t) => {
                this._updateModel(e, t, submitId);
              });
              if ((i = (r = this._options).onTaskQueueDetailsChanged) != null) {
                i.call(r, t);
              }
            }),
      ].filter(Boolean);
      u.V.info(
        "[MediaTaskMonitor] Setup video task listeners for submitId: ".concat(
          submitId,
        ),
      );
    }
  }
  _setupAudioTaskListeners(e, t) {
    let i;
    let r;
    let a;
    const { submitId } = e;
    const o = this._mediaTasks.get(submitId);
    if (o) {
      this._options.onModelChange((e) => {
        this._updateModel(t.model, e, submitId);
      });
      if ((i = (r = this._options).onTaskRestored) != null) {
        i.call(r, t);
      }
      o.disposes = [
        t.onGeneratedDone((e) => {
          var i;
          var r;
          this._options.onModelChange((t) => {
            this._updateModel(e, t, submitId);
          });
          this._disposeAssetTask(submitId);
          if ((i = (r = this._options).onTaskGeneratedDone) != null) {
            i.call(r, t);
          }
        }),
        t.onGeneratedFailed((e) => {
          var i;
          var r;
          this._options.onModelChange((t) => {
            this._updateModel(e, t, submitId);
          });
          this._disposeAssetTask(submitId);
          if ((i = (r = this._options).onTaskGeneratedFailed) != null) {
            i.call(r, t);
          }
        }),
        (a = t.onQueueDetailsChanged) == null
          ? undefined
          : a.call(t, (e) => {
              var i;
              var r;
              this._options.onModelChange((t) => {
                this._updateModel(e, t, submitId);
              });
              if ((i = (r = this._options).onTaskQueueDetailsChanged) != null) {
                i.call(r, t);
              }
            }),
      ].filter(Boolean);
      u.V.info(
        "[MediaTaskMonitor] Setup audio task listeners for submitId: ".concat(
          submitId,
        ),
      );
    }
  }
  _disposeWebsocketHandlerIfTaskFinished(e) {
    let t;
    let i;
    const r = [
      o.NuroTaskStatus.finished,
      o.NuroTaskStatus.failed,
      o.NuroTaskStatus.cancelled,
    ];
    const a = Object.values(
      (t = e.agentConversationSubAgentTaskStates) != null ? t : {},
    ).some((e) => !r.includes(e.taskStatus));
    if (r.includes(e.taskData.taskStatus) && !a) {
      if ((i = this._websocketMessageHandlerDisposable) != null) {
        i.dispose();
      }
      this._websocketMessageHandlerDisposable = undefined;
    }
  }
  _disposeAssetTask(e) {
    let t;
    let i;
    const r = this._mediaTasks.get(e);
    if (r && !r.disposed) {
      if ((t = r.disposes) != null) {
        t.forEach((e) => e.dispose());
      }
      if ((i = r.task) != null) {
        i.dispose();
      }
      r.disposed = true;
      this._pendingWebsocketHistoryInfos.delete(e);
      this._submitIdToolNameMap.delete(e);
      u.V.info(
        "[MediaTaskMonitor] Disposed media task for submitId: ".concat(e),
      );
    }
  }
  constructor(e, t, i, r, a, n) {
    super();
    this._options = e;
    this._containerService = t;
    this._getContentGenerationItemService = i;
    this._dreaminaCommercialFeatureContainerService = r;
    this._websocketService = a;
    this._contentGeneratorTaskReportService = n;
    this._mediaTasks = new Map();
    this._preFetchedSubmitIds = [];
    this._failedSubmitIds = new Set();
    this._pendingWebsocketHistoryInfos = new Map();
    this._submitIdToolNameMap = new Map();
    this._debouncedRefreshMonitoring = A.A(
      (e) => this._performRefreshMonitoring(e),
      100,
    );
    this._initWebsocketHandlers();
  }
}
B = a.Cg(
  [
    a.Qj(1, c._),
    a.Qj(2, R_1),
    a.Qj(3, L.X),
    a.Qj(4, K.dE),
    a.Qj(5, k.M),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof MediaTaskMonitorOptions === "undefined"
        ? Object
        : MediaTaskMonitorOptions,
      c._ === undefined ? Object : c._,
      R_1 === undefined ? Object : R_1,
      L.X === undefined ? Object : L.X,
      K.dE === undefined ? Object : K.dE,
      k.M === undefined ? Object : k.M,
    ]),
  ],
  B,
);
class z extends R.jG {
  refreshMonitoring(e) {
    this._performRefreshMonitoring(e);
  }
  _hasSearchItem(e) {
    return this._processingItemIds.has(e);
  }
  _performRefreshMonitoring(e) {
    return r
      ._(function* () {
        const t = X.K(v.N(e));
        if (t.length !== 0) {
          const i = t.filter(
            (t) => !e.itemInfoDataMap[t] && !this._hasSearchItem(t),
          );
          if (i.length !== 0) {
            u.V.info(
              "[SearchItemMonitor] Fetching work details for item IDs:",
              i,
            );
            i.forEach((e) => {
              this._processingItemIds.add(e);
            });
            try {
              yield this._fetchAndUpdateWorkDetails(i);
            } finally {
              i.forEach((e) => {
                this._processingItemIds.delete(e);
              });
            }
          }
        }
      })
      .call(this);
  }
  _fetchAndUpdateWorkDetails(itemIdList) {
    return r
      ._(function* () {
        try {
          const t = yield this._getWorkDetailService.getWorkDetails({
            itemIdList,
          });
          if (!t.ok || !t.value.workDetails) {
            return void u.V.error(
              "[SearchItemMonitor] Failed to fetch work details:",
              t.msg,
            );
          }
          this._options.onModelChange((e) => {
            for (var i of t.value.workDetails) {
              e.itemInfoDataMap[i.id] = i;
            }
          });
          u.V.info(
            "[SearchItemMonitor] Successfully fetched and updated work details:",
            t.value.workDetails.length,
          );
        } catch (error) {
          u.V.error("[SearchItemMonitor] Failed to fetch work details:", error);
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._options = e;
    this._getWorkDetailService = t;
    this._processingItemIds = new Set();
  }
}
z = a.Cg(
  [
    a.Qj(1, w.B),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof SearchItemMonitorOptions === "undefined"
        ? Object
        : SearchItemMonitorOptions,
      w.B === undefined ? Object : w.B,
    ]),
  ],
  z,
);
const em = (e) => e === "approved" || e === "rejected" || e === "cancelled";
function eg(e) {
  if (e) {
    try {
      const t = JSON.parse(e);
      if (!m.U(t) || Array.isArray(t)) {
        return;
      }
      const i = "batch_id" in t ? t.batch_id : undefined;
      if (typeof i === "string" && i.length > 0) {
        return "batch:".concat(i);
      }
      const r = "tool_call_id" in t ? t.tool_call_id : undefined;
      if (typeof r === "string" && r.length > 0) {
        return "tool:".concat(r);
      }
      return undefined;
    } catch (e) {
      return;
    }
  }
}
function eh(e) {
  if (e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return;
    }
  }
}
class ep extends R.jG {
  beginFormResume() {
    let e;
    let t;
    const _streamTerminalEventStartIndex = this._streamTerminalEventStartIndex;
    this._streamTerminalEventStartIndex =
      (e =
        (t = this._options.model.agentConversationSystemEvents) == null
          ? undefined
          : t.length) != null
        ? e
        : 0;
    return () => {
      this._streamTerminalEventStartIndex = _streamTerminalEventStartIndex;
    };
  }
  interrupt() {
    if (this._nuroConversation) {
      this._nuroConversation.interruptResponse();
    }
  }
  sendToolResultMessage(e, t) {
    return r
      ._(function* () {
        if (!this._nuroConversation) {
          return d.xz(
            g.Q.ErrClientCommon,
            "No active conversation to send tool result message",
          );
        }
        const i = yield this._ensureSubscribeReady();
        if (!i.ok) {
          u.V.error(
            "[TaskMonitor] subscribe stream not ready before sending tool result",
            i.msg,
          );
          return i;
        }
        const r = yield this._nuroConversation.sendToolResultMessage(e, t, {
          submitId: this._options.model.idModel.submitId,
        });
        if (this._options.isSubscribeStreamSessionCurrent()) {
          return r;
        }
        return d.xz(g.Q.ErrOffline, "Agent task session expired");
      })
      .call(this);
  }
  resumeInterrupt(e, t) {
    return r
      ._(function* () {
        let i;
        const r = this._getResumeTargetConversation(e);
        if (!r) {
          return d.xz(
            g.Q.ErrClientCommon,
            "No active conversation to resume interrupt",
          );
        }
        const a = yield this._ensureSubscribeReady();
        if (!a.ok) {
          return a;
        }
        const n = e !== this._options.model.conversationId;
        const o = n
          ? (i =
              this._options.model
                .agentConversationSubAgentInterruptApprovals) == null
            ? undefined
            : i[e]
          : undefined;
        if (n) {
          this._subscribeStreamService.bindConversation(e);
        }
        const s = yield r.resumeInterrupt(t);
        if (this._options.isSubscribeStreamSessionCurrent()) {
          if (s.ok && o) {
            this._locallyResumedSubAgentApprovals.set(e, o);
          }
          return s;
        }
        return d.xz(g.Q.ErrOffline, "Agent task session expired");
      })
      .call(this);
  }
  _registerTaskUpdateListener(e) {
    this._register(
      e.onNuroTaskUpdate((e) => {
        this._handleTaskUpdate(e);
      }),
    );
    this._register(
      e.onConversationStateUpdate((e) => {
        this._options.onModelChange((t) => {
          t.conversationState = e;
        });
        this._options.onConversationStateChange(e);
      }),
    );
    this._register(
      e.onConversationSummaryUpdate((e) => {
        this._options.onModelChange((t) => {
          t.conversationSummary = e;
        });
      }),
    );
    this._register(
      e.onTurnTitleUpdate((e, t) => {
        this._options.onModelChange((i) => {
          if (i.idModel.turnUuid === t) {
            i.conversationTurnTitle = e;
          }
        });
      }),
    );
    this._register(
      e.onTitleGeneration((e) => {
        this._options.onModelChange((t) => {
          if (!t.conversationTitle) {
            t.conversationTitle = e;
          }
        });
        var { workspaceId } = this._options.model.idModel;
        if (workspaceId && e) {
          this._conversationWorkspaceService.applyGeneratedWorkspaceName(
            workspaceId,
            e,
          );
        }
      }),
    );
    this._register(
      e.onInterruptApproval((t) => {
        if (e.lastNuroTaskId === this._options.model.taskData.taskId) {
          this._options.onModelChange((e) => {
            if (
              !((e, t) => {
                let i;
                let r;
                const a = ee.hl(e.taskData.replyMessages);
                const n = em(
                  (r = e.interruptApproval) == null ? undefined : r.status,
                )
                  ? e.interruptApproval
                  : a;
                if (!em(n == null ? undefined : n.status)) {
                  return false;
                }
                const o = (i = eg(n == null ? undefined : n.payload))
                  ? i
                  : (n == null ? undefined : n.toolCallId)
                    ? "tool:".concat(n.toolCallId)
                    : undefined;
                const s = eg(t);
                return o !== undefined && o === s;
              })(e, t.content)
            ) {
              e.interruptApproval = {
                status: "pending_approval",
                payload: t.content,
              };
              e.hasPendingInterruptApproval = true;
            }
          });
        }
      }),
    );
    this._register(
      e.onContinueAvailableChange((t) => {
        if (e.lastNuroTaskId === this._options.model.taskData.taskId) {
          this._options.onModelChange((e) => {
            e.continueAvailable = t.available;
          });
        }
      }),
    );
    this._register(
      this._subscribeStreamService.onAgentBillingUpdated((e) => {
        this._options.onModelChange((t) => {
          ((e, t) => {
            const i = ((e, t) => {
              if (t.conversationId === e.conversationId) {
                const { billingRoundId } = t.billingInfo;
                const { turnUuid } = e.idModel;
                if (!turnUuid || billingRoundId === turnUuid) {
                  const a = ec.u(t.billingInfo);
                  if (a.billingTotalCredits !== undefined) {
                    return a;
                  }
                }
              }
            })(e, t);
            if (i) {
              const r = e.billingQueriedAtMs;
              const a = i.billingQueriedAtMs;
              if (!(r !== undefined && (a === undefined || a < r))) {
                e.billingTotalCredits = i.billingTotalCredits;
                e.billingCreditDetails = i.billingCreditDetails;
                if (a !== undefined) {
                  e.billingQueriedAtMs = a;
                }
              }
            }
          })(t, e);
        });
      }),
    );
    this._register(
      this._subscribeStreamService.onAgentConversationSystemEvent((t) => {
        if (
          !(
            t.conversationId &&
            t.conversationId !== this._options.model.conversationId
          )
        ) {
          this._options.onModelChange((i) => {
            if (
              ((r = eh(t.data)) == null ? undefined : r.conversation_id) ===
              i.conversationId
            ) {
              var r;
              var a;
              var n = (a = i.agentConversationSystemEvents) != null ? a : [];
              if (
                !n.some(
                  (e) =>
                    e.id === t.id && e.event === t.event && e.data === t.data,
                )
              ) {
                i.agentConversationSystemEvents = [...n, t];
              }
              this._settleStreamTerminalState(e, i);
            }
          });
        }
      }),
    );
    this._register(
      this._subscribeStreamService.onSubAgentInterruptApproval((e) => {
        if (e.mainConversationId === this._options.model.conversationId) {
          this._options.onModelChange((t) => {
            var i;
            if (
              !(
                !$.sW({
                  mainConversationId: t.conversationId,
                  mainReplyMessages: t.taskData.replyMessages,
                  subAgentReplyMessages:
                    t.agentConversationSubAgentReplyMessages,
                  subAgentTaskStates: t.agentConversationSubAgentTaskStates,
                }).conversationIds.includes(e.subAgentConversationId) ||
                this._isLocallyResumedSubAgentApproval(
                  e.subAgentConversationId,
                  e.approval,
                )
              )
            ) {
              this._locallyResumedSubAgentApprovals.delete(
                e.subAgentConversationId,
              );
              t.agentConversationSubAgentInterruptApprovals = Z._(
                M._(
                  {},
                  (i = t.agentConversationSubAgentInterruptApprovals) != null
                    ? i
                    : {},
                ),
                {
                  [e.subAgentConversationId]: e.approval,
                },
              );
              t.hasPendingInterruptApproval = true;
            }
          });
        }
      }),
    );
    this._register(
      this._subscribeStreamService.onSubAgentConversationSnapshot((e) => {
        this._options.onModelChange((t) => {
          if (e.mainConversationId === t.conversationId) {
            var i;
            var r = v.N(t);
            t.agentConversationSubAgentReplyMessages = e.messages;
            t.agentConversationSubAgentSystemEvents = e.systemEvents;
            t.agentConversationSubAgentTaskStates = e.taskStates;
            var a = $.sW({
              mainConversationId: t.conversationId,
              mainReplyMessages: t.taskData.replyMessages,
              subAgentReplyMessages: e.messages,
              subAgentTaskStates: e.taskStates,
            });
            var n = a.replyMessages;
            var o = ee.lU(n, a.conversationIds);
            var s = M._(
              {},
              (i = t.agentConversationSubAgentInterruptApprovals) != null
                ? i
                : {},
            );
            for (var [d, l] of Object.entries(o)) {
              if (l.status === "pending_approval") {
                if (this._isLocallyResumedSubAgentApproval(d, l)) {
                  delete s[d];
                  continue;
                }
                this._locallyResumedSubAgentApprovals.delete(d);
                s[d] = l;
              } else {
                this._locallyResumedSubAgentApprovals.delete(d);
                delete s[d];
              }
            }
            t.agentConversationSubAgentInterruptApprovals =
              Object.keys(s).length > 0 ? s : undefined;
            t.hasPendingInterruptApproval = p.T(t) || undefined;
            t.submitIdsOrderedByMessageTime = et.I(t.taskData, n);
            t.hasMediaToolResult = t.submitIdsOrderedByMessageTime.length > 0;
            try {
              this._onAgenticConversationReplyMessagesChange(
                t.taskData.taskId,
                r,
                v.N(t),
              );
            } catch (error) {
              u.V.error(
                "[TaskMonitor] Failed to record sub agent conversation reply diff:",
                error,
              );
            }
          }
        });
      }),
    );
    this._register(
      e.onTurnUuidUpdate((e, t) => {
        this._options.onModelChange((i) => {
          if (i.uniqueKey === e) {
            i.idModel.turnUuid = t;
          }
        });
      }),
    );
    this._register(
      e.onSugResultUpdate((e) => {
        this._options.onModelChange((t) => {
          try {
            var i = JSON.parse(e || "[]");
            t.suggestions = ei.S(i);
          } catch (error) {
            u.V.error(
              "[TaskMonitor] parse aigc agentic suggestions failed, content: ".concat(
                e,
              ),
              error,
            );
          }
        });
      }),
    );
    this._register(
      e.onTodoPlanUpdate((t) => {
        if (e.lastNuroTaskId === this._options.model.taskData.taskId) {
          this._options.onModelChange((e) => {
            e.latestTodoPlanSnapshot = t;
          });
        }
      }),
    );
  }
  _settleStreamTerminalState(e, t) {
    let i;
    let r;
    const a = e == null ? undefined : e.lastNuroTaskId;
    if (
      a === undefined ||
      a === t.taskData.taskId ||
      t.statusModel.recordStatus === s.DMLGenRecordStatus.Loading
    ) {
      er.W(
        t,
        (i =
          (r = t.agentConversationSystemEvents) == null
            ? undefined
            : r.slice(this._streamTerminalEventStartIndex)) != null
          ? i
          : [],
      );
    }
  }
  _handleTaskUpdate(e) {
    try {
      if (!this._isCurrentTask(e.task)) {
        return;
      }
      this._updateModelFromTaskEvent(e);
    } catch (error) {
      u.V.error("[TaskMonitor] Handle task update failed:", error);
    }
  }
  _isCurrentTask(e) {
    const taskId = this._options.model.taskData.taskId;
    return !!(taskId && e.taskId === taskId);
  }
  _mergeReplyMessages(e, t) {
    if (t.length === 0) {
      if (e != null) {
        return e;
      }
      return [];
    }
    const i = [];
    const r = new Set();
    for (const a of [...(e != null ? e : []), ...t]) {
      if (!r.has(a.id)) {
        r.add(a.id);
        i.push(a);
      }
    }
    return i;
  }
  _preserveTerminalWaitMessages(e, t) {
    if (!(e == null ? undefined : e.length)) {
      return t;
    }
    const i = new Set(t.map((e) => e.id));
    const r = new Set(
      t
        .filter((e) => e instanceof o.NuroToolCallMessage)
        .map((e) => e.toolCallId)
        .filter(Boolean),
    );
    const a = e.filter(
      (e) =>
        !(
          !(e instanceof o.NuroToolCallMessage) ||
          e.toolName !== ea.i.WaitMessage ||
          e.messageStatus === o.NuroToolCallMessageStatus.streaming ||
          e.messageStatus === o.NuroToolCallMessageStatus.invoking ||
          i.has(e.id) ||
          (e.toolCallId && r.has(e.toolCallId))
        ),
    );
    if (a.length === 0) {
      return t;
    }
    return [...t, ...a].sort(
      (e, t) =>
        Number(e.createTime) - Number(t.createTime) || e.id.localeCompare(t.id),
    );
  }
  _getSubAgentConversationInfo(e) {
    if (e.toolName === ea.i.SpawnTask) {
      let t;
      let i;
      let r;
      const a = eh(e.toolResult);
      const n =
        a == null || (i = a.data) == null || (t = i.extra) == null
          ? undefined
          : t.sub_agent_conv_id;
      if (!n) {
        return;
      }
      return {
        initialMessageId:
          (r = a.data) == null ? undefined : r.initial_message_id,
        subAgentConversationId: n,
      };
    }
    if (e.toolName === ea.i.SendMessage) {
      let o;
      let s;
      let d;
      const l = eh(e.toolResult);
      const u =
        l == null || (s = l.data) == null || (o = s.extra) == null
          ? undefined
          : o.sub_agent_conv_id;
      if (!u) {
        return;
      }
      return {
        initialMessageId: (d = l.data) == null ? undefined : d.message_id,
        subAgentConversationId: u,
      };
    }
  }
  _collectSubAgentConversationData(e) {
    let t;
    const i = [];
    const taskStates = {};
    for (const a of e.replyMessages) {
      t = this;
      ((e) => {
        if (!(e instanceof o.NuroToolCallMessage)) {
          return;
        }
        let a;
        let n;
        const s = t._getSubAgentConversationInfo(e);
        if (!(s == null ? undefined : s.subAgentConversationId)) {
          return;
        }
        const d = t._nuroConversationService.getConversation(
          s.subAgentConversationId,
        );
        const l =
          (a =
            d == null ? undefined : d.conversationManager.conversation.tasks) !=
          null
            ? a
            : [];
        if (l.length !== 0) {
          for (const u of l) {
            const c = en.F(u);
            i.push(...c);
          }
          const m = s.initialMessageId
            ? l.find((e) => {
                var t;
                return (
                  ((t = e.promptMessages[0]) == null ? undefined : t.id) ===
                  s.initialMessageId
                );
              })
            : undefined;
          const g = m != null ? m : l.length === 1 ? l[0] : l[l.length - 1];
          if (g) {
            taskStates[s.subAgentConversationId] = {
              conversationId: s.subAgentConversationId,
              initialMessageId:
                (n = g.promptMessages[0]) == null ? undefined : n.id,
              summary:
                d == null
                  ? undefined
                  : d.conversationManager.conversation.summary,
              taskId: g.taskId,
              taskStatus: g.taskStatus,
            };
          }
        }
      })(a);
    }
    return {
      replyMessages: this._mergeReplyMessages(undefined, i),
      taskStates,
    };
  }
  _updateModelFromTaskEvent(e) {
    const { task } = e;
    this._options.onModelChange((e) => {
      var i = en.V(task, {
        sortReplyMessagesByCreateTime:
          this._getSubscribeWorkspaceId() !== undefined,
      });
      var r = eo.E(task);
      var a = es.j(
        task,
        (d = e.idModel.recordId) != null ? d : "",
        e.idModel.projectId,
        e.idModel.turnUuid,
        e.idModel.workspaceId,
      );
      var e_taskData = e.taskData;
      var o = v.N(e);
      if ((l = i.userMessage).generateArgs == null) {
        l.generateArgs = e_taskData.userMessage.generateArgs;
      }
      i.replyMessages = this._preserveTerminalWaitMessages(
        e_taskData.replyMessages,
        i.replyMessages,
      );
      e.taskData = i;
      e.statusModel = r;
      e.idModel = a;
      this._settleStreamTerminalState(this._nuroConversation, e);
      var s = ed.g(i.replyMessages);
      if (s !== undefined) {
        e.continueAvailable = s;
      }
      try {
        this._onNuroTaskDataChange(e_taskData, i);
      } catch (error) {
        u.V.error("[TaskMonitor] Failed to record task data diff:", error);
      }
      try {
        var d;
        var l;
        var c;
        var m = this._collectSubAgentConversationData(i);
        if (
          m.replyMessages.length > 0 ||
          Object.keys(m.taskStates).length > 0
        ) {
          e.agentConversationSubAgentReplyMessages = this._mergeReplyMessages(
            e.agentConversationSubAgentReplyMessages,
            m.replyMessages,
          );
          e.agentConversationSubAgentTaskStates = M._(
            {},
            (c = e.agentConversationSubAgentTaskStates) != null ? c : {},
            m.taskStates,
          );
        }
      } catch (error) {
        u.V.error(
          "[TaskMonitor] Failed to collect sub agent conversation data:",
          error,
        );
      }
      try {
        this._onAgenticConversationReplyMessagesChange(i.taskId, o, v.N(e));
      } catch (error) {
        u.V.error(
          "[TaskMonitor] Failed to record agentic conversation reply diff:",
          error,
        );
      }
      try {
        var g = $.UE({
          mainConversationId: e.conversationId,
          mainReplyMessages: i.replyMessages,
          subAgentReplyMessages: e.agentConversationSubAgentReplyMessages,
          subAgentTaskStates: e.agentConversationSubAgentTaskStates,
        });
        e.submitIdsOrderedByMessageTime = et.I(i, g);
        e.hasMediaToolResult =
          e.hasMediaToolResult || e.submitIdsOrderedByMessageTime.length > 0;
      } catch (error) {
        u.V.error(
          "[TaskMonitor] Failed to update submit ids ordered by message time:",
          error,
        );
      }
    });
  }
  _onNuroTaskDataChange(e, t) {
    const i =
      this._contentGeneratorTaskReportService.getPerfAgentConversationReporter(
        t.taskId,
      );
    if (i) {
      i.recordFromAgentTaskDataDiff(e, t);
    }
  }
  _onAgenticConversationReplyMessagesChange(e, t, i) {
    const r =
      this._contentGeneratorTaskReportService.getPerfAgentConversationReporter(
        e,
      );
    if (r != null) {
      r.recordFirstArtifactFromReplyMessagesDiff(t, i);
    }
  }
  _registerNetworkStatusListener() {
    const e = () =>
      r
        ._(function* () {
          if (
            this._isOffline &&
            this._nuroConversation &&
            this._shouldResumeOnNetworkRecover()
          ) {
            u.V.info("[TaskMonitor] Network is back online");
            const { taskData } = this._options.model;
            const t = [taskData.userMessage, ...taskData.replyMessages];
            const i = t[t.length - 1].getResumeMsgId();
            try {
              const r = yield this._ensureSubscribeReady();
              if (!r.ok) {
                return void u.V.error(
                  "[TaskMonitor] subscribe stream not ready before resume message",
                  r.msg,
                );
              }
              const a = yield this._nuroConversation.resumeMessageIfNeed(i);
              if (a.ok) {
                J.A.success(Y.F2.t("web_agent_reconnect", {}, "Reconnected"));
                u.V.info(
                  "[TaskMonitor] Attempted to resume messages after network recovery",
                );
              } else {
                u.V.error(
                  "[TaskMonitor] Failed to resume messages after network recovery",
                  a.msg,
                );
              }
            } catch (error) {
              u.V.error(
                "[TaskMonitor] Failed to resume messages after network recovery:",
                error,
              );
            }
          }
          this._isOffline = false;
        })
        .call(this);
    const t = () => {
      if (this._shouldResumeOnNetworkRecover()) {
        u.V.info("[TaskMonitor] Network is offline");
        J.A.error(Y.F2.t("web_agent_disconnect", {}, "Disconnected"));
        this._isOffline = true;
      }
    };
    window.addEventListener("online", e);
    window.addEventListener("offline", t);
    this._isOffline = !navigator.onLine;
    this._register({
      dispose: () => {
        window.removeEventListener("online", e);
        window.removeEventListener("offline", t);
      },
    });
  }
  _bindSubscribeConversation() {
    let e;
    const t =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if (this._nuroConversation) {
      const i = this._getSubscribeWorkspaceId();
      if (i !== undefined) {
        const r = t
          ? this._options.getSubscribeStreamLease()
          : this._options.acquireSubscribeStreamLease(
              i,
              this._options.model.idModel.projectId,
            );
        if ((r == null ? undefined : r.valid) && r.isCurrentWorkspace) {
          this._subscribeStreamService.setActiveConversationId(
            this._nuroConversation.conversationId,
          );
          for (const [a, n] of Object.entries(
            (e = this._options.model.agentConversationSubAgentTaskStates) !=
              null
              ? e
              : {},
          )) {
            this._subscribeStreamService.bindSubAgentConversation(
              this._nuroConversation.conversationId,
              a,
              n.initialMessageId,
            );
          }
        }
      }
    }
  }
  _restoreSubAgentConversations() {
    let e;
    for (const t of Object.keys(
      (e =
        this._options.model
          .agentConversationSubAgentResumeConversationStrMap) != null
        ? e
        : {},
    )) {
      this._getResumeTargetConversation(t);
    }
  }
  _isLocallyResumedSubAgentApproval(e, t) {
    const i = this._locallyResumedSubAgentApprovals.get(e);
    return (
      !!i &&
      (i.payload || t.payload
        ? i.payload === t.payload
        : !!(i.toolCallId && t.toolCallId && i.toolCallId === t.toolCallId))
    );
  }
  _getResumeTargetConversation(e) {
    if (this._options.isSubscribeStreamSessionCurrent()) {
      if (e === this._options.model.conversationId) {
        return this._nuroConversation;
      }
      if (
        (t = this._options.model.agentConversationSubAgentInterruptApprovals) ==
        null
          ? undefined
          : t[e]
      ) {
        var t;
        let i;
        let r;
        let a;
        const {
          idModel: { projectId, workspaceId },
        } = this._options.model;
        const s = this._nuroConversationService.getOrCreateConversation(
          e,
          undefined,
          projectId,
          workspaceId,
        );
        s.connect();
        const d =
          (i =
            this._options.model
              .agentConversationSubAgentResumeConversationStrMap) == null
            ? undefined
            : i[e];
        if (d && s.conversationManager.conversation.tasks.length === 0) {
          s.decodeConversationFromJSONString(d, true);
        }
        const l = this._options.getSubscribeStreamLease();
        if ((l == null ? undefined : l.valid) && l.isCurrentWorkspace) {
          this._subscribeStreamService.bindSubAgentConversation(
            this._options.model.conversationId,
            e,
            (a = this._options.model.agentConversationSubAgentTaskStates) ==
              null || (r = a[e]) == null
              ? undefined
              : r.initialMessageId,
          );
        }
        return s;
      }
    }
  }
  _getSubscribeWorkspaceId() {
    const {
      idModel: { projectId, workspaceId },
    } = this._options.model;
    if (
      this._subscribeStreamService.enabled &&
      workspaceId !== undefined &&
      !projectId
    ) {
      return workspaceId;
    }
  }
  _ensureSubscribeReady() {
    return r
      ._(function* () {
        if (!this._options.isSubscribeStreamSessionCurrent()) {
          return d.xz(g.Q.ErrOffline, "Agent task session expired");
        }
        if (!this._nuroConversation) {
          return d.xz(g.Q.ErrClientCommon, "No active conversation");
        }
        const e = this._getSubscribeWorkspaceId();
        if (e === undefined) {
          return d.nj();
        }
        const t = this._options.acquireSubscribeStreamLease(
          e,
          this._options.model.idModel.projectId,
        );
        if ((t == null ? undefined : t.valid) && t.isCurrentWorkspace) {
          this._subscribeStreamService.setActiveConversationId(
            this._nuroConversation.conversationId,
          );
          if (
            (yield this._subscribeStreamService.whenOpen(5000)) &&
            t.valid &&
            t.isCurrentWorkspace
          ) {
            return d.nj();
          }
          return d.xz(g.Q.ErrOffline, "subscribe_session handshake timeout");
        }
        return d.xz(g.Q.ErrOffline, "subscribe_session is no longer available");
      })
      .call(this);
  }
  _shouldResumeOnNetworkRecover() {
    let e;
    const { model } = this._options;
    return (
      ((e = this._nuroConversation) == null || !e.isDisconnected) &&
      model.taskData.taskStatus === o.NuroTaskStatus.running
    );
  }
  constructor(e, t, i, r, a) {
    super();
    this._options = e;
    this._nuroConversationService = t;
    this._contentGeneratorTaskReportService = i;
    this._conversationWorkspaceService = r;
    this._subscribeStreamService = a;
    this._locallyResumedSubAgentApprovals = new Map();
    this._isOffline = false;
    this._streamTerminalEventStartIndex = 0;
    var {
      conversationId,
      resumeConversationStr,
      idModel: { projectId, workspaceId },
    } = this._options.model;
    if (resumeConversationStr) {
      this._nuroConversation = this._nuroConversationService.createConversation(
        conversationId,
        undefined,
        projectId,
        workspaceId,
      );
      this._nuroConversation.connect();
      this._nuroConversation.decodeConversationFromJSONString(
        resumeConversationStr,
        true,
      );
      this._registerTaskUpdateListener(this._nuroConversation);
      this._bindSubscribeConversation();
    } else {
      this._nuroConversation =
        this._nuroConversationService.getConversation(conversationId);
      if (this._nuroConversation) {
        this._nuroConversation.connect();
        this._registerTaskUpdateListener(this._nuroConversation);
        this._bindSubscribeConversation();
      }
    }
    this._restoreSubAgentConversations();
    this._register(
      this._subscribeStreamService.onHandshake(() =>
        this._bindSubscribeConversation(true),
      ),
    );
    this._registerNetworkStatusListener();
  }
}
ep = a.Cg(
  [
    a.Qj(1, eu.M),
    a.Qj(2, k.M),
    a.Qj(3, el.D),
    a.Qj(4, S.l),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof TaskMonitorOptions === "undefined" ? Object : TaskMonitorOptions,
      eu.M === undefined ? Object : eu.M,
      k.M === undefined ? Object : k.M,
      el.D === undefined ? Object : el.D,
      S.l === undefined ? Object : S.l,
    ]),
  ],
  ep,
);
class ev extends R.jG {
  submitGenerateTask() {
    return r
      ._(function* () {
        try {
          let e;
          let t;
          let i;
          let r;
          let a;
          let n;
          let o;
          let s;
          let l;
          let c;
          let m;
          let h;
          let p;
          let v;
          let I;
          let _;
          let f;
          let b;
          let y;
          let k;
          let S;
          let C;
          let M;
          let T;
          const A = yield (e = (t = this._options)
            .processInputParamsConverter) == null
            ? undefined
            : e.call(t);
          if (!A) {
            if (
              (l = (c = this._options).terminateSubscribeStreamLease) != null
            ) {
              l.call(c);
            }
            return d.xz(
              g.Q.ErrClientCommon,
              "processInputParamsConverter is required",
            );
          }
          if (!A.ok) {
            if (
              (m = (h = this._options).terminateSubscribeStreamLease) != null
            ) {
              m.call(h);
            }
            return A;
          }
          if (
            ((i = (r = this._options).isSubscribeStreamSessionCurrent) == null
              ? undefined
              : i.call(r)) === false
          ) {
            return this._handleSessionExpired();
          }
          const {
            conversationId,
            userMessage,
            conversationConfig,
            projectId,
            workspaceId,
            inferenceModelId,
            creationMode,
          } = A.value;
          this._workspaceId = workspaceId;
          this._projectId = projectId;
          if (!this._currentConversation) {
            this._currentConversation =
              this._nuroConversationService.getOrCreateConversation(
                conversationId,
                conversationConfig,
                projectId,
                workspaceId,
              );
            this._currentConversation.connect();
            if ((p = (v = this._options).onSubmitConnect) != null) {
              p.call(v);
            }
          }
          const O = yield this._ensureSubscribeReady();
          if (!O.ok) {
            if (
              ((I = (_ = this._options).isSubscribeStreamSessionCurrent) == null
                ? undefined
                : I.call(_)) === false
            ) {
              return this._handleSessionExpired();
            }
            if (
              (f = (b = this._options).terminateSubscribeStreamLease) != null
            ) {
              f.call(b);
            }
            if ((y = (k = this._options).onSubmitFailed) != null) {
              y.call(k, O.code, O.msg);
            }
            return O;
          }
          const F = yield this._currentConversation.sendUserMessage(
            userMessage,
            {
              submitId: this._options.submitId,
              inferenceModelId,
              creationMode,
            },
          );
          if (
            ((a = (n = this._options).isSubscribeStreamSessionCurrent) == null
              ? undefined
              : a.call(n)) === false
          ) {
            return this._handleSessionExpired();
          }
          if (!F.ok) {
            if (
              (S = (C = this._options).terminateSubscribeStreamLease) != null
            ) {
              S.call(C);
            }
            u.V.error(
              "[TaskSubmission] Submit generate task failed: "
                .concat(F.code, ", ")
                .concat(F.msg),
            );
            if ((M = (T = this._options).onSubmitFailed) != null) {
              M.call(T, F.code, F.msg, F.errorInfo);
            }
            return F;
          }
          if ((o = (s = this._options).onSubmitSuccess) != null) {
            o.call(s);
          }
          u.V.info(
            "[TaskSubmission] Submitted agentic task for conversation: ".concat(
              conversationId,
            ),
          );
          return d.nj();
        } catch (error) {
          if (
            ((j = (H = this._options).isSubscribeStreamSessionCurrent) == null
              ? undefined
              : j.call(H)) === false
          ) {
            return this._handleSessionExpired();
          }
          if ((Q = (U = this._options).terminateSubscribeStreamLease) != null) {
            Q.call(U);
          }
          u.V.error("[TaskSubmission] Submit generate task failed:", error);
          var j;
          var H;
          var Q;
          var U;
          let V;
          let L;
          const K = d.xz(
            g.Q.ErrOffline,
            error.message || "Submit generate task failed: ".concat(error),
          );
          if ((V = (L = this._options).onSubmitFailed) != null) {
            V.call(L, K.code, K.msg, K.errorInfo);
          }
          return K;
        }
      })
      .call(this);
  }
  interrupt() {
    try {
      if (!this._currentConversation) {
        u.V.warn("[TaskSubmission] No active conversation to interrupt");
        return d.xz(g.Q.ErrClientCommon, "No active conversation to interrupt");
      }
      this._currentConversation.interruptResponse();
      u.V.info(
        "[TaskSubmission] Interrupted conversation: ".concat(
          this._currentConversation.conversationId,
        ),
      );
      return d.nj();
    } catch (error) {
      u.V.error("[TaskSubmission] Interrupt conversation failed:", error);
      return d.xz(
        g.Q.ErrClientCommon,
        "Interrupt conversation failed: ".concat(error),
      );
    }
  }
  resumeInterrupt(e) {
    return r
      ._(function* () {
        if (!this._currentConversation) {
          return d.xz(
            g.Q.ErrClientCommon,
            "No active conversation to resume interrupt",
          );
        }
        let t;
        let i;
        let r;
        let a;
        const n = yield this._ensureSubscribeReady();
        if (!n.ok) {
          if (
            ((r = (a = this._options).isSubscribeStreamSessionCurrent) == null
              ? undefined
              : r.call(a)) === false
          ) {
            return this._handleSessionExpired();
          }
          return n;
        }
        const o = yield this._currentConversation.resumeInterrupt(e);
        if (
          ((t = (i = this._options).isSubscribeStreamSessionCurrent) == null
            ? undefined
            : t.call(i)) === false
        ) {
          return this._handleSessionExpired();
        }
        return o;
      })
      .call(this);
  }
  sendToolResultMessage(e, t) {
    return r
      ._(function* (e, t) {
        let i;
        let r;
        let a;
        let n;
        let o;
        let s;
        let l;
        let u;
        let c;
        let m;
        const h =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        if (!this._currentConversation) {
          return d.xz(
            g.Q.ErrClientCommon,
            "No active conversation to send tool result message",
          );
        }
        const p = yield this._ensureSubscribeReady();
        if (!p.ok) {
          if (
            ((o = (s = this._options).isSubscribeStreamSessionCurrent) == null
              ? undefined
              : o.call(s)) === false
          ) {
            return this._handleSessionExpired();
          }
          if (h.shouldTriggerSubmitFailed !== false) {
            if ((l = (u = this._options).onSubmitFailed) != null) {
              l.call(u, p.code, p.msg);
            }
          }
          return p;
        }
        const v = yield this._currentConversation.sendToolResultMessage(e, t, {
          submitId: this._options.submitId,
        });
        if (
          ((i = (r = this._options).isSubscribeStreamSessionCurrent) == null
            ? undefined
            : i.call(r)) === false
        ) {
          return this._handleSessionExpired();
        }
        if (v.ok) {
          if ((a = (n = this._options).onSubmitSuccess) != null) {
            a.call(n);
          }
          return d.nj();
        }
        if (h.shouldTriggerSubmitFailed !== false) {
          if ((c = (m = this._options).onSubmitFailed) != null) {
            c.call(m, v.code, v.msg, v.errorInfo);
          }
        }
        return v;
      })
      .apply(this, arguments);
  }
  _handleSessionExpired() {
    let e;
    let t;
    let i;
    let r;
    if ((e = (t = this._options).terminateSubscribeStreamLease) != null) {
      e.call(t);
    }
    if ((i = (r = this._options).onSessionExpired) != null) {
      i.call(r);
    }
    return d.xz(g.Q.ErrOffline, "Agent task session expired");
  }
  _ensureSubscribeReady() {
    return r
      ._(function* () {
        if (
          ((e = (t = this._options).isSubscribeStreamSessionCurrent) == null
            ? undefined
            : e.call(t)) === false
        ) {
          return d.xz(g.Q.ErrOffline, "Agent task session expired");
        }
        if (
          !this._currentConversation ||
          !this._subscribeStreamService.enabled ||
          this._workspaceId === undefined ||
          this._projectId
        ) {
          return d.nj();
        }
        var e;
        var t;
        let i;
        let r;
        const a =
          (i = (r = this._options).acquireSubscribeStreamLease) == null
            ? undefined
            : i.call(r, this._workspaceId, this._projectId);
        if (!(a == null ? undefined : a.valid) || !a.isCurrentWorkspace) {
          return d.xz(
            g.Q.ErrOffline,
            "subscribe_session is no longer available",
          );
        }
        this._subscribeStreamService.setActiveConversationId(
          this._currentConversation.conversationId,
        );
        if (
          (yield this._subscribeStreamService.whenOpen(5000)) &&
          a.valid &&
          a.isCurrentWorkspace
        ) {
          return d.nj();
        }
        const n = d.xz(g.Q.ErrOffline, "subscribe_session handshake timeout");
        u.V.warn("[TaskSubmission] subscribe stream not ready before send", {
          status: this._subscribeStreamService.status,
        });
        return n;
      })
      .call(this);
  }
  constructor(e, t, i) {
    super();
    this._options = e;
    this._nuroConversationService = t;
    this._subscribeStreamService = i;
    this._currentConversation = null;
  }
}
ev = a.Cg(
  [
    a.Qj(1, eu.M),
    a.Qj(2, S.l),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof TaskSubmissionOptions === "undefined"
        ? Object
        : TaskSubmissionOptions,
      eu.M === undefined ? Object : eu.M,
      S.l === undefined ? Object : S.l,
    ]),
  ],
  ev,
);
class eI extends U_1 {
  get id() {
    return this.model.uniqueKey;
  }
  get conversationId() {
    return this.model.conversationId;
  }
  get onMediaRestored() {
    return this._onMediaRestored.event;
  }
  get onMediaGeneratedDone() {
    return this._onMediaGeneratedDone.event;
  }
  get onMediaQueueDetailsChanged() {
    return this._onMediaQueueDetailsChanged.event;
  }
  get onMediaGeneratedFailed() {
    return this._onMediaGeneratedFailed.event;
  }
  get onConversationStateChange() {
    return this._onConversationStateChange.event;
  }
  get onPendingInterruptApproval() {
    return this._onPendingInterruptApproval.event;
  }
  get onSessionExpired() {
    return this._onSessionExpired.event;
  }
  get onComplianceError() {
    return this._onComplianceError.event;
  }
  get hasRunningMediaTask() {
    let e;
    let t;
    return (
      ((e =
        (t = this._mediaTaskMonitor) == null
          ? undefined
          : t.runningMediaTasks.length) != null
        ? e
        : 0) > 0
    );
  }
  retryFailureTask() {}
  interrupt() {
    if (this._taskSubmission) {
      this._taskSubmission.interrupt();
    } else {
      let e;
      if ((e = this._taskMonitor) != null) {
        e.interrupt();
      }
    }
    this._hasInterrupted = true;
    this._markTaskAsCancelled();
  }
  resetCompletionFlags() {
    this._hasTriggeredDone = false;
    this._hasTriggeredFailed = false;
    this._hasTriggeredComplianceError = false;
  }
  sendFormCollectionToolResult(e, t) {
    return r
      ._(function* (e, t) {
        let i;
        const r =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        const a =
          (i = this._taskMonitor) == null ? undefined : i.beginFormResume();
        let n = false;
        try {
          const o = yield this.sendToolResultMessage(e, t, r);
          n = o.ok;
          return o;
        } finally {
          if (!(n || a == null)) {
            a();
          }
        }
      })
      .apply(this, arguments);
  }
  sendToolResultMessage(e, t) {
    return r
      ._(function* (e, t) {
        const i =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {};
        this._hasInterrupted = false;
        const shouldTriggerSubmitFailed = i.shouldFailCurrentTask !== false;
        let a = d.nj();
        if (this._taskSubmission) {
          a = yield this._taskSubmission.sendToolResultMessage(e, t, {
            shouldTriggerSubmitFailed,
          });
        } else {
          if (!this._taskMonitor) {
            return d.xz(
              g.Q.ErrClientCommon,
              "No active task to send tool result message",
            );
          }
          a = yield this._taskMonitor.sendToolResultMessage(e, t);
        }
        if (this.isSubscribeStreamSessionCurrent()) {
          if (a.ok) {
            this.model.taskData.taskStatus = o.NuroTaskStatus.running;
            this._syncModelUpdate(this.model, this.model.uniqueKey);
            return d.nj();
          }
          if (shouldTriggerSubmitFailed) {
            this._failCurrentTask(a.code, a.msg);
          }
          u.V.error(
            "ContentGeneratorAgenticTask.sendToolResultMessage failed",
            a.msg,
          );
          return a;
        }
        this._expireSubscribeStreamSession();
        return d.xz(g.Q.ErrOffline, "Agent task session expired");
      })
      .apply(this, arguments);
  }
  resumeInterrupt(e, t) {
    return r
      ._(function* () {
        this._hasInterrupted = false;
        if (this._taskMonitor) {
          var i;
          var r;
          var a;
          var n;
          const s = this._taskMonitor;
          r = () => s.resumeInterrupt(e, t);
        } else {
          if (!this._taskSubmission || e !== this.model.conversationId) {
            return d.xz(
              g.Q.ErrClientCommon,
              "No active task to resume interrupt",
            );
          }
          const l = this._taskSubmission;
          r = () => l.resumeInterrupt(t);
        }
        const c = this._interruptResumeLifecycle.begin(this.model, e);
        try {
          a = yield r();
        } catch (error) {
          if (this.isSubscribeStreamSessionCurrent()) {
            this._interruptResumeLifecycle.rollback(this.model, c);
          }
          throw error;
        }
        if (!this.isSubscribeStreamSessionCurrent()) {
          this._expireSubscribeStreamSession();
          return d.xz(g.Q.ErrOffline, "Agent task session expired");
        }
        if (!a.ok) {
          this._interruptResumeLifecycle.rollback(this.model, c);
          u.V.error(
            "ContentGeneratorAgenticTask.resumeInterrupt failed",
            a.msg,
          );
          return a;
        }
        const h =
          e === this.model.conversationId &&
          ((i = this.model.interruptApproval) == null
            ? undefined
            : i.status) === "pending_approval"
            ? this.model.interruptApproval
            : undefined;
        if (h) {
          try {
            const v = JSON.parse(t);
            if (
              m.U(v) &&
              !Array.isArray(v) &&
              "approved" in v &&
              typeof v.approved === "boolean"
            ) {
              const { approved } = v;
              n = {
                status: approved ? "approved" : "rejected",
                payload: h.payload,
                toolCallId: h.toolCallId,
              };
              this.model.interruptApproval = n;
            }
          } catch (e) {}
        }
        ((e, t) => {
          if (t === e.conversationId) {
            e.taskData.taskStatus = o.NuroTaskStatus.running;
            e.interruptApproval = undefined;
            return;
          }
          if (
            (i = e.agentConversationSubAgentInterruptApprovals) == null
              ? undefined
              : i[t]
          ) {
            var i;
            let r;
            const a = M._({}, e.agentConversationSubAgentInterruptApprovals);
            delete a[t];
            e.agentConversationSubAgentInterruptApprovals =
              Object.keys(a).length > 0 ? a : undefined;
            const n =
              (r = e.agentConversationSubAgentTaskStates) == null
                ? undefined
                : r[t];
            if (n) {
              n.taskStatus = o.NuroTaskStatus.running;
            }
          }
        })(this.model, e);
        if (n) {
          this.model.interruptApproval = n;
        }
        this._interruptResumeLifecycle.complete(this.model, c);
        this.model.hasPendingInterruptApproval = p.T(this.model) || undefined;
        this._syncModelUpdate(this.model, this.model.uniqueKey);
        return d.nj();
      })
      .call(this);
  }
  _getDomainModelType() {
    return f.$.AIGCData;
  }
  _disposeTaskResources() {
    let e;
    let t;
    let i;
    let r;
    let a;
    this.terminateSubscribeStreamLease();
    if ((e = this._mediaTaskMonitor) != null) {
      e.dispose();
    }
    if ((t = this._documentTaskMonitor) != null) {
      t.dispose();
    }
    if ((i = this._searchItemMonitor) != null) {
      i.dispose();
    }
    if ((r = this._taskMonitor) != null) {
      r.dispose();
    }
    if ((a = this._taskSubmission) != null) {
      a.dispose();
    }
    this._onMediaRestored.dispose();
    this._onMediaGeneratedDone.dispose();
    this._onMediaQueueDetailsChanged.dispose();
    this._onMediaGeneratedFailed.dispose();
    this._onPendingInterruptApproval.dispose();
    this._onComplianceError.dispose();
    this._onSessionExpired.dispose();
  }
  _submitGenerateTask() {
    const { workspaceId, projectId } = this.model.idModel;
    if (!(workspaceId === undefined || projectId)) {
      this._subscribeStreamSession =
        this._subscribeStreamService.getSession(workspaceId);
    }
    this._taskSubmission = this._containerService.createInstance(ev, {
      processInputParamsConverter: this._processInputParamsConverter
        ? () => this._processInputParamsConverter()
        : undefined,
      onSubmitConnect: () => {
        this._createAndExecuteStatusMonitor();
      },
      onSubmitSuccess: () => {
        this._onSubmitSuccess.fire(this.model);
      },
      onSubmitFailed: (e, t) => {
        u.V.info(
          "[ContentGeneratorAgenticTask] onSubmitFailed",
          JSON.stringify({
            submitId: this.model.idModel.submitId,
            conversationId: this.model.conversationId,
            code: e,
            msg: t,
            hasTriggeredFailed: this._hasTriggeredFailed,
          }),
        );
        this._failCurrentTask(e, t);
      },
      submitId: this.model.idModel.submitId,
      workspaceId: this.model.idModel.workspaceId,
      acquireSubscribeStreamLease: (e, t) =>
        this.acquireSubscribeStreamLease(e, t),
      onSessionExpired: () => this._expireSubscribeStreamSession(),
      terminateSubscribeStreamLease: () => this.terminateSubscribeStreamLease(),
      isSubscribeStreamSessionCurrent: () =>
        this.isSubscribeStreamSessionCurrent(),
    });
    this._contentGeneratorTaskReportService.reportContentGeneratorTaskSubmitStart(
      this,
    );
    const _taskSubmission = this._taskSubmission;
    if (_taskSubmission) {
      const r = _taskSubmission.submitGenerateTask();
      this._contentGeneratorTaskReportService.listenAndReportSubmitTaskStatusBySubmitPromise(
        r,
        this,
      );
    }
  }
  _createAndExecuteStatusMonitor() {
    if (!this._taskMonitor) {
      const { workspaceId, projectId } = this.model.idModel;
      if (
        !(
          workspaceId === undefined ||
          projectId ||
          this._subscribeStreamSession != null
        )
      ) {
        this._subscribeStreamSession =
          this._subscribeStreamService.getSession(workspaceId);
      }
      this._taskMonitor = this._containerService.createInstance(ep, {
        model: this.model,
        onModelChange: (e) => {
          if (!this._hasInterrupted && this.isSubscribeStreamSessionCurrent()) {
            var t = p.T(this.model);
            e(this.model);
            this._interruptResumeLifecycle.reconcile(this.model);
            if (!t && p.T(this.model)) {
              this._onPendingInterruptApproval.fire(this.model);
            }
            if (this.isSubscribeStreamSessionCurrent()) {
              this._throttledSyncModelUpdate(this.model, this.model.uniqueKey);
              this._mediaTaskMonitoring();
              this._documentTaskMonitoring();
              this._searchItemMonitoring();
              this._checkAndTriggerTaskEvents();
              this._detectComplianceError();
            }
          }
        },
        onConversationStateChange: () => {
          this._onConversationStateChange.fire(this.model);
        },
        acquireSubscribeStreamLease: (e, t) =>
          this.acquireSubscribeStreamLease(e, t),
        getSubscribeStreamLease: () => this._subscribeStreamLease,
        isSubscribeStreamSessionCurrent: () =>
          this.isSubscribeStreamSessionCurrent(),
      });
    }
  }
  acquireSubscribeStreamLease(e, t) {
    let i;
    if (
      this.isSubscribeStreamSessionCurrent() &&
      !t &&
      e === this.model.idModel.workspaceId
    ) {
      if (!((i = this._subscribeStreamLease) == null ? undefined : i.valid)) {
        const r = this._subscribeStreamService.acquire(
          e,
          this._subscribeStreamSession,
        );
        if (!r) {
          return;
        }
        this._subscribeStreamLease = r;
        if (this._subscribeStreamSession == null) {
          this._subscribeStreamSession = r.session;
        }
      }
      return this._subscribeStreamLease;
    }
  }
  isSubscribeStreamSessionCurrent() {
    if (this._subscribeStreamTerminated) {
      return false;
    }
    let e;
    const { workspaceId, projectId } = this.model.idModel;
    if (workspaceId === undefined || projectId) {
      return true;
    }
    const r = this._subscribeStreamService.getSession(workspaceId);
    return (
      ((e = this._subscribeStreamSession) == null
        ? undefined
        : e.generation) === r.generation &&
      this._subscribeStreamSession.workspaceGeneration === r.workspaceGeneration
    );
  }
  releaseSubscribeStreamLease() {
    let e;
    const closeCurrentStream =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if ((e = this._subscribeStreamLease) != null) {
      e.release({
        closeCurrentStream,
      });
    }
    this._subscribeStreamLease = undefined;
  }
  _expireSubscribeStreamSession() {
    if (!this._hasSessionExpired) {
      this._hasSessionExpired = true;
      this.terminateSubscribeStreamLease();
      this._onSessionExpired.fire();
      this.dispose();
    }
  }
  terminateSubscribeStreamLease() {
    this._subscribeStreamTerminated = true;
    this.releaseSubscribeStreamLease(true);
  }
  _mediaTaskMonitoring() {
    let e;
    if (!this._mediaTaskMonitor) {
      this._mediaTaskMonitor = this._containerService.createInstance(B, {
        onModelChange: (e) => {
          e(this.model);
          this._syncModelUpdate(this.model, this.model.uniqueKey);
        },
        onTaskRestored: (e) => {
          this._onMediaRestored.fire(e);
        },
        onTaskGeneratedDone: (e) => {
          this._onMediaGeneratedDone.fire(e);
        },
        onTaskQueueDetailsChanged: (e) => {
          this._onMediaQueueDetailsChanged.fire(e);
        },
        onTaskGeneratedFailed: (e) => {
          this._onMediaGeneratedFailed.fire(e);
        },
      });
    }
    if ((e = this._mediaTaskMonitor) != null) {
      e.refreshMonitoring(this.model);
    }
  }
  _documentTaskMonitoring() {
    let e;
    if (!this._documentTaskMonitor) {
      this._documentTaskMonitor = this._containerService.createInstance(F, {
        onModelChange: (e) => {
          e(this.model);
          this._throttledSyncModelUpdate(this.model, this.model.uniqueKey);
        },
      });
    }
    if ((e = this._documentTaskMonitor) != null) {
      e.refreshMonitoring(this.model);
    }
  }
  _searchItemMonitoring() {
    let e;
    if (!this._searchItemMonitor) {
      this._searchItemMonitor = this._containerService.createInstance(z, {
        onModelChange: (e) => {
          e(this.model);
          this._syncModelUpdate(this.model, this.model.uniqueKey);
        },
      });
    }
    if ((e = this._searchItemMonitor) != null) {
      e.refreshMonitoring(this.model);
    }
  }
  _checkAndTriggerTaskEvents() {
    const { recordStatus } = this.model.statusModel;
    if (
      recordStatus !== s.DMLGenRecordStatus.Succeed ||
      this._hasTriggeredDone
    ) {
      if (
        !(
          recordStatus !== s.DMLGenRecordStatus.Failed ||
          this._hasTriggeredFailed
        )
      ) {
        this._hasTriggeredFailed = true;
        this._onGeneratedFailed.fire(this.model);
      }
    } else {
      this._hasTriggeredDone = true;
      this._onGeneratedDone.fire(this.model);
    }
  }
  _markTaskAsCancelled() {
    this.model.taskData.taskStatus = o.NuroTaskStatus.cancelled;
    this.model.statusModel.recordStatus = s.DMLGenRecordStatus.Failed;
    this.model.statusModel.statusCode = h.A.FinalGenerateFail;
    this.model.statusModel.errorCode = g.Q.ErrTaskCancelled;
    this._syncModelUpdate(this.model, this.model.uniqueKey);
    this._checkAndTriggerTaskEvents();
  }
  _detectComplianceError() {
    if (!this._hasTriggeredComplianceError) {
      const e = v.N(this.model);
      if (
        I.K(e).some(
          (e) => e.submitCode === g.Q.AIGCComplianceConfirmationRequired,
        ) ||
        e.some((e) => {
          var t;
          return (
            ((t = _.JL(e)) == null ? undefined : t.submitCode) ===
            g.Q.AIGCComplianceConfirmationRequired
          );
        })
      ) {
        this._hasTriggeredComplianceError = true;
        this._onComplianceError.fire();
      }
    }
  }
  _failCurrentTask(code, msg) {
    const i = ((e) => {
      const {
        cleanupBeforeFail,
        disposeTaskMonitor,
        hasTriggeredFailed,
        code,
        msg,
        model,
        syncModelUpdate,
        fireGeneratedFailed,
      } = e;
      if (hasTriggeredFailed && model.statusModel.errorCode === code) {
        disposeTaskMonitor();
        return {
          hasTriggeredFailed,
        };
      }
      cleanupBeforeFail();
      disposeTaskMonitor();
      const c = code === g.Q.ErrOffline;
      model.taskData.taskStatus =
        code === g.Q.ErrAbortError
          ? o.NuroTaskStatus.cancelled
          : o.NuroTaskStatus.failed;
      model.statusModel.statusCode = h.A.Unknown;
      model.statusModel.recordStatus = s.DMLGenRecordStatus.Failed;
      model.statusModel.errorCode = code;
      model.statusModel.isAllowRetry = c;
      model.statusModel.errorMsg = msg;
      model.statusModel.failStarlingMessage = undefined;
      syncModelUpdate(model, model.uniqueKey);
      if (!hasTriggeredFailed) {
        fireGeneratedFailed(model);
      }
      return {
        hasTriggeredFailed: hasTriggeredFailed || true,
      };
    })({
      cleanupBeforeFail: () => undefined,
      disposeTaskMonitor: () => {
        var e;
        if ((e = this._taskMonitor) != null) {
          e.dispose();
        }
      },
      hasTriggeredFailed: this._hasTriggeredFailed,
      code,
      msg,
      model: this.model,
      syncModelUpdate: (e, t) => {
        this._syncModelUpdate(e, t);
      },
      fireGeneratedFailed: (e) => {
        this._onGeneratedFailed.fire(e);
      },
    });
    this._hasTriggeredFailed = i.hasTriggeredFailed;
    this._taskMonitor = undefined;
  }
  constructor(e, t, i, r, a, o) {
    super(e, t, i, r);
    this._contentGeneratorTaskReportService = a;
    this._subscribeStreamService = o;
    this._subscribeStreamTerminated = false;
    this._hasSessionExpired = false;
    this._hasTriggeredDone = false;
    this._hasTriggeredFailed = false;
    this._hasTriggeredComplianceError = false;
    this._hasInterrupted = false;
    this._interruptResumeLifecycle = new T();
    this._onMediaRestored = new l.v();
    this._onMediaGeneratedDone = new l.v();
    this._onMediaQueueDetailsChanged = new l.v();
    this._onMediaGeneratedFailed = new l.v();
    this._onConversationStateChange = new l.v();
    this._onPendingInterruptApproval = new l.v();
    this._onComplianceError = new l.v();
    this._onSessionExpired = new l.v();
    this._throttledSyncModelUpdate = n.A((e, t) => {
      this._syncModelUpdate(e, t);
    }, 100);
    this._bootstrap();
  }
}
export { eI as P };
eI = a.Cg(
  [
    a.Qj(1, c._),
    a.Qj(2, b.j),
    a.Qj(3, y.R),
    a.Qj(4, k.M),
    a.Qj(5, S.l),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof ContentGeneratorTaskParams === "undefined"
        ? Object
        : ContentGeneratorTaskParams,
      c._ === undefined ? Object : c._,
      b.j === undefined ? Object : b.j,
      y.R === undefined ? Object : y.R,
      k.M === undefined ? Object : k.M,
      S.l === undefined ? Object : S.l,
    ]),
  ],
  eI,
);
