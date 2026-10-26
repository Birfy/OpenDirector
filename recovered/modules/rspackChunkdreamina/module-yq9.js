import r from "NY";
import a from "oa";
import n from "bk";
import s from "QWK";
import o from "Qey";
import l from "b5";
import c from "o7";
import u from "K8";
import d from "JSz";
import h from "xi";
import p from "Kt";
import g from "H26";
import v from "pOd";
import m from "FY";
import { A as A_1 } from "./module-r3.js";
import _ from "UH9";
import k from "hP";
import y from "GS";
import I from "AAv";
import T from "kT";
import { $T, Du, ar, cr } from "./module-J1j.js";
import { a as a_1 } from "./module-lXG.js";
import M from "mL";
import D from "R3";
import R from "jnc";
import A from "dm";
import F from "fHC";
import j from "qa";
import { $ } from "./module-GRv_2.js";
function S() {
  return y.OC({
    scenario: "image_video_generation",
    featureKey: "to_video-lipsync",
    featureEntranceDetail: "".concat(_.F(), "-pre_process"),
    editType: "tool",
    toolId: k.M.Character,
  });
}
class b extends c.jG {
  get config() {
    return this._config;
  }
  _loadConfig() {
    return r
      ._(function* () {
        try {
          const e = yield this._imcService.getImcConfigByKey(
            I.r1.DigitalHumanDetectTimeout,
          );
          if (!e) {
            return;
          }
          this._config = n._(a._({}, this._config), {
            imageDetectTotalTimeout:
              e.imageDetectTimeout || this._config.imageDetectTotalTimeout,
            videoDetectTotalTimeout:
              e.videoDetectTimeout || this._config.videoDetectTotalTimeout,
            pollInterval:
              e.imageDetectPollDuration || this._config.pollInterval,
            wsTimeout: e.wsTimeout || this._config.wsTimeout,
          });
        } catch (error) {
          h.V.error("Failed to load lip sync detection config", error);
        }
      })
      .call(this);
  }
  constructor(e) {
    super();
    this._imcService = e;
    this._config = {
      wsTimeout: 20000,
      pollInterval: 3000,
      imageDetectTotalTimeout: 10000,
      videoDetectTotalTimeout: 60000,
      pollMaxRetries: 5,
    };
    this._loadConfig();
  }
}
b = s.Cg(
  [
    s.Qj(0, T.R),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [T.R === undefined ? Object : T.R]),
  ],
  b,
);
class x extends c.jG {
  register(e, t) {
    h.V.log("[".concat(this._tag, "]"), "Register polling handler for task", e);
    this._taskHandlers.set(e, t);
    this._startPollingIfNeeded();
  }
  unregister(e) {
    h.V.log(
      "[".concat(this._tag, "]"),
      "Unregister polling handler for task",
      e,
    );
    this._taskHandlers.delete(e);
  }
  unregisterAll() {
    h.V.log("[".concat(this._tag, "]"), "Unregister all polling handlers");
    this._taskHandlers.clear();
  }
  dispose() {
    h.V.log("[".concat(this._tag, "]"), "Dispose polling handler");
    this.unregisterAll();
    super.dispose();
  }
  _getTaskIds() {
    return [...this._taskHandlers.keys()];
  }
  _startPollingIfNeeded() {
    if (this._taskHandlers.size > 0 && !this._isPolling) {
      this._isPolling = true;
      this._pollTasks().finally(() => {
        this._isPolling = false;
        if (this._taskHandlers.size > 0) {
          this._startPollingIfNeeded();
        }
      });
    }
  }
  _pollTasks() {
    return r
      ._(function* () {
        const e = this._getTaskIds();
        if (e.length !== 0) {
          if (this._errorCount >= this._timeoutConfig.pollMaxRetries) {
            h.V.log(
              "[".concat(this._tag, "]"),
              "Max poll retries reached, marking tasks as failed",
              e,
            );
            this._handleMaxRetriesReached(e);
            this._taskHandlers.clear();
            return;
          }
          try {
            h.V.log("[".concat(this._tag, "]"), "Start polling for tasks", e);
            const t = yield this._fetchTaskResults(e);
            this._processTaskResults(t);
            if (this._taskHandlers.size > 0) {
              yield A.y(this._timeoutConfig.pollInterval);
              return yield this._pollTasks();
            }
          } catch (error) {
            h.V.log("[".concat(this._tag, "]"), "Polling error", error);
            this._errorCount++;
            yield A.y(this._timeoutConfig.pollInterval);
            return this._pollTasks();
          }
        }
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._timeoutConfig = e;
    this._tag = t;
    this._taskHandlers = new Map();
    this._isPolling = false;
    this._errorCount = 0;
  }
}
class L extends x {
  registerWithSubmitIds(e, submitIds, handler) {
    h.V.log(
      "[ImageLipSyncDetect]",
      "Register polling handler with submitIds",
      e,
      submitIds,
    );
    if (submitIds.length !== 0) {
      const r = {
        submitIds,
        completedSubmitIds: new Set(),
        handler,
        resultCache: {},
      };
      this._tasks.set(e, r);
      submitIds.forEach((t) => {
        this._submitIdToTaskId.set(t, e);
      });
      this.register(e, handler);
    }
  }
  unregister(e) {
    h.V.log("[ImageLipSyncDetect]", "Unregister polling handler", e);
    const t = this._tasks.get(e);
    if (t) {
      t.submitIds.forEach((e) => {
        this._submitIdToTaskId.delete(e);
      });
      this._tasks.delete(e);
    }
    super.unregister(e);
  }
  _handleMaxRetriesReached(e) {
    h.V.log("[ImageLipSyncDetect]", "Max poll retries reached", e);
    e.forEach((e) => {
      var t = this._tasks.get(e);
      if (t) {
        var i = {};
        t.submitIds.forEach((e) => {
          i[e] = {
            submitId: e,
            scene: m.P.ImageCreateAvatar,
            status: m.A.Fail,
            imageCreateAvatarInfo: {
              status: m.A.Fail,
              failCode: "POLL_MAX_RETRIES",
              resourceIdStd: "",
              resourceIdLoopy: "",
              refuseCode: [],
              message: "",
              faceBboxNorm: [],
              failStarlingKey: "",
              failStarlingMessage: "",
            },
          };
        });
        t.handler(i);
        this.unregister(e);
      }
    });
  }
  _fetchTaskResults(e) {
    return r
      ._(function* () {
        h.V.log("[ImageLipSyncDetect]", "Fetching task results", e);
        const t = [];
        e.forEach((e) => {
          var i = this._tasks.get(e);
          if (i) {
            var r = i.submitIds.filter((e) => !i.completedSubmitIds.has(e));
            t.push(...r);
          }
        });
        if (t.length === 0) {
          return [];
        }
        try {
          const i = yield this._videoPreprocessingDataService.getTasks(t);
          if (!i.ok) {
            throw Error("Failed to poll task status: ".concat(i.msg));
          }
          return i.value;
        } catch (error) {
          h.V.log("[ImageLipSyncDetect]", "Error fetching task results", error);
          throw error;
        }
      })
      .call(this);
  }
  _processTaskResults(e) {
    h.V.log("[ImageLipSyncDetect]", "Processing task results", Object.keys(e));
    if (e.length) {
      e.forEach((e) => {
        var { submitId } = e;
        if (submitId) {
          var i = this._submitIdToTaskId.get(submitId);
          if (i) {
            var r = this._tasks.get(i);
            if (r) {
              r.resultCache[submitId] = e;
              var a = e.imageCreateAvatarInfo;
              if ($T(e.status) && a && $T(a.status)) {
                r.completedSubmitIds.add(submitId);
              }
              if (r.completedSubmitIds.size === r.submitIds.length) {
                r.handler(r.resultCache);
                this.unregister(i);
              }
            }
          }
        }
      });
    }
  }
  constructor(e, t) {
    super(e, "ImageLipSyncDetect");
    this._videoPreprocessingDataService = t;
    this._tasks = new Map();
    this._submitIdToTaskId = new Map();
  }
}
L = s.Cg(
  [
    s.Qj(1, A_1),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof DynamicTimeoutConfig === "undefined"
        ? Object
        : DynamicTimeoutConfig,
      A_1 === undefined ? Object : A_1,
    ]),
  ],
  L,
);
class V extends c.jG {
  register(e, t) {
    h.V.log(
      "[".concat(this._tag, "]"),
      "Register WebSocket handler for task",
      e,
    );
    this._taskHandlers.set(e, t);
  }
  unregister(e) {
    h.V.log(
      "[".concat(this._tag, "]"),
      "Unregister WebSocket handler for task",
      e,
    );
    this._taskHandlers.delete(e);
  }
  unregisterAll() {
    h.V.log("[".concat(this._tag, "]"), "Unregister all WebSocket handlers");
    this._taskHandlers.clear();
  }
  dispose() {
    h.V.log("[".concat(this._tag, "]"), "Dispose WebSocket handler");
    this._websocketService.unregisterEventHandler(
      this._method,
      this._handleWebSocketMessage.bind(this),
    );
    this.unregisterAll();
    super.dispose();
  }
  _setupWebSocketListener() {
    h.V.log(
      "[".concat(this._tag, "]"),
      "Setup WebSocket listener",
      this._method,
    );
    this._websocketService.registerEventHandler(
      this._method,
      this._handleWebSocketMessage.bind(this),
    );
  }
  constructor(e, t, i) {
    super();
    this._websocketService = e;
    this._method = t;
    this._tag = i;
    this._taskHandlers = new Map();
    this._setupWebSocketListener();
  }
}
class P extends V {
  register(e, t) {
    const i = this._resultCache.get(e);
    if (i) {
      h.V.log(
        "[ImageLipSyncDetect]",
        "Register WebSocket handler for task and found cached result",
        e,
      );
      this._taskHandlers.set(e, t);
      setTimeout(() => {
        t(i);
        this._resultCache.delete(e);
      }, 0);
    } else {
      super.register(e, t);
    }
  }
  _handleWebSocketMessage(e) {
    const { submitId } = e;
    h.V.log(
      "[ImageLipSyncDetect]",
      "Received WebSocket message for task",
      submitId,
    );
    const i = {
      status: m.A.Success,
      data: submitId,
    };
    const r = this._taskHandlers.get(submitId);
    if (r) {
      r(i);
    } else {
      h.V.log(
        "[ImageLipSyncDetect]",
        "No handler found, caching result for task",
        submitId,
      );
      this._resultCache.set(submitId, i);
    }
  }
  constructor(e) {
    super(e, F.NY.DigitalHumanDetectTask, "ImageLipSyncDetect");
    this._websocketService = e;
    this._resultCache = new Map();
  }
}
P = s.Cg(
  [
    s.Qj(0, F.dE),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [F.dE === undefined ? Object : F.dE]),
  ],
  P,
);
class U extends c.jG {
  detect(e) {
    return r
      ._(function* () {
        h.V.log("[ImageLipSyncDetect]", "Detect image", e);
        const { imageUri, startTime, id, faceDetectionScenes } = e;
        const n = this._getCachedResult(imageUri, faceDetectionScenes);
        if (n) {
          h.V.log("[ImageLipSyncDetect]", "Return cached result", id);
          return u.TZ(n);
        }
        this.cancelAll();
        this._submitIdToDetectSceneMap.clear();
        const s = yield this._createRealmanAvatar(
          imageUri,
          id,
          faceDetectionScenes,
        );
        if (!s.ok) {
          h.V.log(
            "[ImageLipSyncDetect]",
            "Create realman avatar failed",
            id,
            s,
          );
          return s;
        }
        const s_value = s.value;
        if (this._isAllModesReady(s_value)) {
          this._updateCache(imageUri, s_value);
          h.V.log("[ImageLipSyncDetect]", "All modes ready when commit", id);
          return s;
        }
        return this._createAndStartDetectionTask(
          id,
          startTime,
          imageUri,
          s_value,
        );
      })
      .call(this);
  }
  cancel(e) {
    h.V.log("[ImageLipSyncDetect]", "Cancel detection task", e);
    const t = this._taskInfoMap.get(e);
    if (t) {
      if (t.resources.wsTimeoutId) {
        clearTimeout(t.resources.wsTimeoutId);
      }
      if (t.resources.totalTimeoutId) {
        clearTimeout(t.resources.totalTimeoutId);
      }
      [...t.taskMap.values()]
        .map((e) => e.submitId)
        .forEach((e) => {
          this._wsHandler.unregister(e);
        });
      this._pollingHandler.unregister(e);
      this._taskInfoMap.delete(e);
    }
  }
  cancelAll() {
    h.V.log("[ImageLipSyncDetect]", "Cancel all detection tasks");
    [...this._taskInfoMap.keys()].forEach((e) => {
      this.cancel(e);
    });
  }
  dispose() {
    this.cancelAll();
    this.clearCache();
    super.dispose();
  }
  clearCache() {
    h.V.log("[ImageLipSyncDetect]", "Clear all cache");
    this._resultCache.clear();
  }
  _createRealmanAvatar(e, t, i) {
    return r
      ._(function* () {
        const t = new Map();
        this._submitIdToDetectSceneMap.clear();
        const r = Array(i.length)
          .fill("")
          .map(() => String(d.bz()));
        r.forEach((e, t) => {
          if (t < i.length) {
            this._submitIdToDetectSceneMap.set(e, i[t]);
          }
        });
        const a = r.map((t) => ({
          scene: m.P.ImageCreateAvatar,
          submitId: t,
          imageCreateAvatar: {
            image: {
              imageUri: e,
            },
            detectionScene: this._submitIdToDetectSceneMap.get(t),
          },
        }));
        const n = yield this._videoPreprocessingService.process(a, {
          babiParam: S(),
        });
        if (!n.ok) {
          return n;
        }
        const n_value = n.value;
        if (this._isAllTasksFailed(n_value)) {
          return this._createErrorResponseFromTasks(n_value);
        }
        let o = 0;
        n_value.forEach((e) => {
          if (this._processTaskResult(e, t)) {
            o++;
          }
        });
        if (o === 0) {
          return u.xz(10004000, "create error.");
        }
        return u.TZ(t);
      })
      .call(this);
  }
  _createAndStartDetectionTask(id, t, i, taskMap) {
    this._taskInfoMap.set(id, {
      id,
      deferred: R.v6(),
      taskMap,
      imageUri: i,
      startTime: t,
      isResolved: false,
      resources: {},
    });
    const a = this._waitDetectTaskReady(id);
    a.then((t) => this._handleTaskComplete(id, t));
    this._setupTaskTimeout(id);
    return a;
  }
  _handleTaskComplete(e, t) {
    const i = this._taskInfoMap.get(e);
    if (i && !i.isResolved) {
      i.isResolved = true;
      h.V.log("[ImageLipSyncDetect]", "Handle task complete", e, t);
      if (t.ok && t.value.size > 0) {
        this._updateCache(i.imageUri, t.value);
      }
      if (i.resources.wsTimeoutId) {
        clearTimeout(i.resources.wsTimeoutId);
      }
      if (i.resources.totalTimeoutId) {
        clearTimeout(i.resources.totalTimeoutId);
      }
      this._taskInfoMap.delete(e);
    }
  }
  _setupTaskTimeout(e) {
    const t = this._taskInfoMap.get(e);
    if (t) {
      t.resources.totalTimeoutId = setTimeout(() => {
        if (this._taskInfoMap.has(e) && !t.isResolved) {
          h.V.log("[ImageLipSyncDetect]", "Hit total timeout", e);
          var i = t.taskMap;
          if (this._hasSuccessMode(i)) {
            this._handleTaskComplete(e, u.TZ(i));
          } else {
            this._handleTaskComplete(
              e,
              u.xz(
                10005000,
                o.Ay.t("web_new_check_exceed_time_limit", {}, "检测超时"),
              ),
            );
          }
        }
      }, this._configService.config.imageDetectTotalTimeout);
    }
  }
  _waitDetectTaskReady(e) {
    const t = this._taskInfoMap.get(e);
    if (!t) {
      return Promise.resolve(u.xz(10001000, "cancel."));
    }
    const i = [...t.taskMap.values()]
      .filter((e) => cr(e.status))
      .map((e) => e.submitId);
    if (i.length === 0) {
      return Promise.resolve(u.xz(10001000, "cancel."));
    }
    this._reportManager.addTask(e, Date.now());
    return new Promise((resolve) => {
      this._setupWebSocketTimeout(e, i, resolve);
      this._registerWebSocketHandlers(e, i, resolve);
    });
  }
  _setupWebSocketTimeout(e, t, i) {
    const r = this._taskInfoMap.get(e);
    if (r) {
      r.resources.wsTimeoutId = setTimeout(() => {
        h.V.log("[ImageLipSyncDetect]", "WebSocket timeout, start polling", e);
        this._pollingHandler.registerWithSubmitIds(e, t, (t) => {
          if (this._taskInfoMap.has(e) && !r.isResolved) {
            h.V.log("[ImageLipSyncDetect]", "Poll received result", e);
            for (var [, a] of Object.entries(t)) {
              this._processTaskResult(a, r.taskMap);
            }
            i(u.TZ(r.taskMap));
          }
        });
      }, this._configService.config.wsTimeout);
    }
  }
  _registerWebSocketHandlers(e, t, i) {
    let a = 0;
    const t_length = t.length;
    t.forEach((t) => {
      this._wsHandler.register(t, (t) =>
        r
          ._(function* () {
            const t = this._taskInfoMap.get(e);
            if (
              t &&
              !t.isResolved &&
              (a++,
              h.V.log(
                "[ImageLipSyncDetect]",
                "WebSocket received result ".concat(a, "/").concat(t_length),
                e,
              ),
              a >= t_length)
            ) {
              const r = yield this._queryRealmanAvatarTask(e);
              if (!this._taskInfoMap.has(e)) {
                return;
              }
              h.V.log(
                "[ImageLipSyncDetect]",
                "All tasks completed via WebSocket, query full result",
                e,
              );
              i(r);
            }
          })
          .call(this),
      );
    });
  }
  _queryRealmanAvatarTask(e) {
    return r
      ._(function* () {
        const t = this._taskInfoMap.get(e);
        if (!t) {
          return u.xz(10001000, "cancel.");
        }
        const i = [...t.taskMap.values()]
          .filter((e) => cr(e.status))
          .map((e) => e.submitId);
        if (i.length === 0) {
          return u.xz(10004000, "No submit ids.");
        }
        const r = yield this._videoPreprocessingService.getTasks(i);
        if (r.ok) {
          r.value.forEach((e) => {
            this._processTaskResult(e, t.taskMap);
          });
          return u.TZ(t.taskMap);
        }
        return r;
      })
      .call(this);
  }
  _processTaskResult(e, t) {
    const i = this._submitIdToDetectSceneMap.get(e.submitId);
    return i !== undefined && (t.set(i, e), true);
  }
  _createErrorResponseFromTasks(e) {
    let t;
    let i;
    const r = e.filter(
      (e) =>
        Du(e.status) ||
        (e.imageCreateAvatarInfo && Du(e.imageCreateAvatarInfo.status)),
    )[0];
    return u.xz(10004000, "create error.", {
      status: r.status,
      errorCode:
        (t = (i = r.imageCreateAvatarInfo) == null ? undefined : i.failCode) !=
        null
          ? t
          : "",
    });
  }
  _isAllModesReady(e) {
    return !Array.from(e.values()).some((e) => cr(e.status));
  }
  _hasSuccessMode(e) {
    return Array.from(e.values()).some((e) => ar(e.status));
  }
  _isAllTasksFailed(e) {
    return (
      e.filter(
        (e) =>
          Du(e.status) ||
          (e.imageCreateAvatarInfo && Du(e.imageCreateAvatarInfo.status)),
      ).length === e.length
    );
  }
  _getCachedResult(e, t) {
    const i = this._resultCache.get(e);
    if (i) {
      const { result, detectScenes } = i;
      if (
        detectScenes.length === t.length &&
        detectScenes.every((e) => t.includes(e))
      ) {
        return result;
      }
    }
  }
  _updateCache(e, t) {
    if (
      !Array.from(t.values()).every((e) => {
        var t;
        return !ar(
          ((t = e.imageCreateAvatarInfo) == null ? undefined : t.status) ||
            e.status,
        );
      })
    ) {
      this._resultCache.put(e, {
        result: M.A(t),
        detectScenes: Array.from(t.keys()),
      });
    }
  }
  constructor(e, t, i, r, a) {
    super();
    this._wsHandler = e;
    this._pollingHandler = t;
    this._configService = i;
    this._reportManager = r;
    this._videoPreprocessingService = a;
    this._taskInfoMap = new Map();
    this._submitIdToDetectSceneMap = new Map();
    this._resultCache = new D.q(50);
  }
}
U = s.Cg(
  [
    s.Qj(4, A_1),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      P === undefined ? Object : P,
      L === undefined ? Object : L,
      b === undefined ? Object : b,
      typeof DigitalHumanDetectReportManager === "undefined"
        ? Object
        : DigitalHumanDetectReportManager,
      A_1 === undefined ? Object : A_1,
    ]),
  ],
  U,
);
class N extends c.jG {
  _reportPerfDualChannelMetricsTracker(e) {
    const { taskId } = e;
    const i = j._(e, ["taskId"]);
    if (taskId in this._taskMap) {
      const { startTime, pollingCount, fallbackReason } = this._taskMap[taskId];
      this._containerService
        .createInstance(
          $,
          a._(
            {
              costTime: Date.now() - startTime,
              pollingCount,
              fallbackReason,
            },
            i,
          ),
        )
        .report("dev");
      this.removeTask(taskId);
    }
  }
  constructor(e) {
    super();
    this._containerService = e;
    this._taskMap = {};
    this.addTask = (e, t) => {
      this._taskMap[e] = {
        startTime: t,
        pollingCount: 0,
      };
    };
    this.updateFallbackReason = (e, t) => {
      if (e in this._taskMap) {
        this._taskMap[e].fallbackReason = t;
      }
    };
    this.addPollingCount = (e) => {
      if (e in this._taskMap) {
        this._taskMap[e].pollingCount++;
      }
    };
    this.removeTask = (e) => {
      delete this._taskMap[e];
    };
    this.reportImageDetectResultFromWebSocket = (e, t) => {
      if (!t.ok) {
        return void this._reportPerfDualChannelMetricsTracker({
          taskId: e,
          channel: "websocket",
          status: "fail",
          scene: "image_face_detect",
          failCode: t.code,
          failReason: t.msg,
        });
      }
      var i;
      var r;
      var { value } = t;
      var n = Array.from(value.values()).map((e) => e.imageCreateAvatarInfo);
      var s = n.some((e) => (e == null ? undefined : e.status) && ar(e.status))
        ? "success"
        : "fail";
      var o = (i = n[0]) == null ? undefined : i.failCode;
      var l = (r = n[0]) == null ? undefined : r.failStarlingMessage;
      this._reportPerfDualChannelMetricsTracker({
        taskId: e,
        channel: "websocket",
        status: s,
        scene: "image_face_detect",
        failCode: o,
        failReason: l,
      });
    };
    this.reportImageDetectResultFromPolling = (e, t) => {
      var i;
      var r;
      var a = Array.from(t.values()).map((e) => e.imageCreateAvatarInfo);
      var n = a.some((e) => (e == null ? undefined : e.status) && ar(e.status))
        ? "success"
        : "fail";
      var s = (i = a[0]) == null ? undefined : i.failCode;
      var o = (r = a[0]) == null ? undefined : r.failStarlingMessage;
      this._reportPerfDualChannelMetricsTracker({
        taskId: e,
        channel: "polling",
        status: n,
        scene: "image_face_detect",
        failCode: s,
        failReason: o,
      });
    };
    this.reportVideoDetectResultFromWebSocket = (e, t) => {
      var { detectStatus, failCode, failStarlingMessage } = t;
      this._reportPerfDualChannelMetricsTracker({
        taskId: e,
        channel: "websocket",
        status: detectStatus && ar(detectStatus) ? "success" : "fail",
        scene: "video_face_detect",
        failCode,
        failReason: failStarlingMessage,
      });
    };
    this.reportVideoDetectResultFromPolling = (e, t) => {
      var { detectStatus, failCode, failStarlingMessage } = t;
      this._reportPerfDualChannelMetricsTracker({
        taskId: e,
        channel: "polling",
        status: detectStatus && ar(detectStatus) ? "success" : "fail",
        scene: "video_face_detect",
        fallbackReason: "timeout",
        failCode,
        failReason: failStarlingMessage,
      });
    };
    this.reportVideoDetectResultFromTotalTimeout = (e) => {
      this._reportPerfDualChannelMetricsTracker({
        taskId: e,
        channel: "polling",
        status: "fail",
        scene: "video_face_detect",
        failCode: "-1",
        failReason: "total timeout",
      });
    };
  }
}
N = s.Cg(
  [
    s.Qj(0, p._),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [p._ === undefined ? Object : p._]),
  ],
  N,
);
class E extends V {
  _handleWebSocketMessage(e) {
    const { submitId, status } = e;
    if ($T(status)) {
      h.V.log(
        "[VideoLipSyncDetect]",
        "Received WebSocket message for task",
        submitId,
        status,
      );
      const r = this._taskHandlers.get(submitId);
      if (r) {
        r({
          status,
        });
      }
    }
  }
  constructor(e) {
    super(e, F.NY.DigitalHumanDetectTask, "VideoLipSyncDetect");
    this._websocketService = e;
  }
}
E = s.Cg(
  [
    s.Qj(0, F.dE),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [F.dE === undefined ? Object : F.dE]),
  ],
  E,
);
class W extends x {
  getTaskResult(e) {
    return r
      ._(function* () {
        if (this._taskResults.has(e)) {
          return this._taskResults.get(e);
        }
        return (yield this._fetchTaskResults([e]))[0];
      })
      .call(this);
  }
  _handleMaxRetriesReached(e) {
    h.V.log("[VideoLipSyncDetect]", "Max poll retries reached", e);
    e.forEach((e) => {
      var t = this._taskHandlers.get(e);
      if (t) {
        t({
          submitId: e,
          status: m.A.Fail,
        });
      }
    });
  }
  _fetchTaskResults(e) {
    return r
      ._(function* () {
        h.V.log("[VideoLipSyncDetect]", "Fetching task results", e);
        const t = yield this._videoPreprocessingDataService.getTasks(e);
        if (!t.ok) {
          throw Error("Failed to query task status: ".concat(t.msg));
        }
        return t.value;
      })
      .call(this);
  }
  _processTaskResults(e) {
    h.V.log("[VideoLipSyncDetect]", "Processing task results");
    for (const t of e) {
      const { submitId, videoLipSyncInfo } = t;
      if (!this._taskResults.has(submitId)) {
        if (videoLipSyncInfo && $T(videoLipSyncInfo.detectStatus)) {
          h.V.log(
            "[VideoLipSyncDetect]",
            "Task completed via polling",
            submitId,
            videoLipSyncInfo.detectStatus,
          );
          this._taskResults.set(submitId, t);
          const a = this._taskHandlers.get(submitId);
          if (a) {
            a(t);
            this.unregister(submitId);
          }
        } else {
          h.V.log(
            "[VideoLipSyncDetect]",
            "Task not completed via polling",
            submitId,
            videoLipSyncInfo == null
              ? undefined
              : videoLipSyncInfo.detectStatus,
          );
        }
      }
    }
  }
  constructor(e, t) {
    super(e, "VideoLipSyncDetect");
    this._videoPreprocessingDataService = t;
    this._taskResults = new Map();
  }
}
W = s.Cg(
  [
    s.Qj(1, A_1),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      typeof DynamicTimeoutConfig === "undefined"
        ? Object
        : DynamicTimeoutConfig,
      A_1 === undefined ? Object : A_1,
    ]),
  ],
  W,
);
class H extends c.jG {
  detectWithVideo(e) {
    return r
      ._(function* () {
        const { id, startTime, videoId, historyId } = e;
        h.V.log(
          "[VideoLipSyncDetect]",
          "Detect with local video, videoId: "
            .concat(videoId, ", id: ")
            .concat(id),
        );
        const n = this._detechResultCache.get(videoId);
        if (n !== undefined && $T(n.detectStatus)) {
          h.V.log("[VideoLipSyncDetect]", "Hit cached status", videoId, n);
          return n;
        }
        this._detechResultCache.set(videoId, {
          detectStatus: m.A.Processing,
        });
        const s = yield this._videoPreprocessingDataService.process(
          [
            {
              submitId: id,
              scene: m.P.VideoLipSyncProcess,
              videoLipSyncProcess: {
                video: {
                  vid: videoId,
                },
                historyId: historyId ? Number(historyId) : undefined,
              },
            },
          ],
          {
            babiParam: S(),
          },
        );
        if (!s.ok) {
          const o = {
            detectStatus: m.A.Fail,
            failCode: String(s.code),
            failStarlingMessage: s.msg,
          };
          this._detechResultCache.set(videoId, o);
          return o;
        }
        const l = s.value[0];
        if ($T(l.status)) {
          h.V.log(
            "[VideoLipSyncDetect]",
            "Task completed When Submit",
            id,
            l.status,
          );
          this._detechResultCache.set(videoId, this._formatVideoDetectInfo(l));
          return this._formatVideoDetectInfo(l);
        }
        const deferred = R.v6();
        const u = {
          id,
          deferred,
          startTime,
          isResolved: false,
          resources: {},
        };
        this._taskInfoMap.set(id, u);
        const d = this._createTaskCompleteHandler(id, u);
        this._startWebSocketListener(id, d);
        u.resources.totalTimeoutId = setTimeout(() => {
          if (this._taskInfoMap.has(id) && !u.isResolved) {
            h.V.log("[VideoLipSyncDetect]", "Hit total timeout", id);
            this._reportManager.reportVideoDetectResultFromTotalTimeout(id);
            d({
              detectStatus: m.A.Fail,
            });
          }
        }, this._timeoutConfigManager.config.videoDetectTotalTimeout);
        const p = yield deferred.promise;
        this._detechResultCache.set(videoId, p);
        this._taskInfoMap.delete(id);
        return p;
      })
      .call(this);
  }
  cancel(e) {
    h.V.log("[VideoLipSyncDetect]", "Cancel detection task", e);
    const t = this._taskInfoMap.get(e);
    if (t) {
      this._clearTaskResources(t);
      this._taskInfoMap.delete(e);
    }
  }
  cancelAll() {
    h.V.log("[VideoLipSyncDetect]", "Cancel all detection tasks");
    [...this._taskInfoMap.keys()].forEach((e) => {
      this.cancel(e);
    });
  }
  getVideoDetectResult(e) {
    return this._detechResultCache.get(e);
  }
  dispose() {
    this.cancelAll();
    super.dispose();
  }
  _createTaskCompleteHandler(e, t) {
    return (i) => {
      if (this._taskInfoMap.has(e) && !t.isResolved) {
        h.V.log("[VideoLipSyncDetect]", "Task completed", e, i.detectStatus);
        t.isResolved = true;
        this._clearTaskResources(t);
        t.deferred.resolve(i);
      }
    };
  }
  _clearTaskResources(e) {
    if (e.resources.wsTimeoutId) {
      clearTimeout(e.resources.wsTimeoutId);
      e.resources.wsTimeoutId = undefined;
    }
    if (e.resources.totalTimeoutId) {
      clearTimeout(e.resources.totalTimeoutId);
      e.resources.totalTimeoutId = undefined;
    }
    this._wsHandler.unregister(e.id);
    this._pollingHandler.unregister(e.id);
  }
  _startWebSocketListener(e, t) {
    const i = this._taskInfoMap.get(e);
    if (i) {
      this._reportManager.addTask(e, Date.now());
      this._wsHandler.register(e, (a) =>
        r
          ._(function* () {
            if (this._taskInfoMap.has(e) && !i.isResolved) {
              h.V.log(
                "[VideoLipSyncDetect]",
                "WebSocket result received",
                e,
                a.status,
              );
              const r = yield this._pollingHandler.getTaskResult(e);
              const n = this._formatVideoDetectInfo(r);
              this._reportManager.reportVideoDetectResultFromWebSocket(e, n);
              h.V.log(
                "[VideoLipSyncDetect]",
                "get detail result after webSocket",
                e,
                r,
              );
              t(n);
            }
          })
          .call(this),
      );
      i.resources.wsTimeoutId = setTimeout(() => {
        if (this._taskInfoMap.has(e) && !i.isResolved) {
          h.V.log(
            "[VideoLipSyncDetect]",
            "WebSocket timeout, start polling",
            e,
          );
          this._pollingHandler.register(e, (r) => {
            if (this._taskInfoMap.has(e) && !i.isResolved) {
              var a = this._formatVideoDetectInfo(r);
              this._reportManager.reportVideoDetectResultFromPolling(e, a);
              h.V.log("[VideoLipSyncDetect]", "Polling result received", e, r);
              t(a);
            }
          });
        }
      }, this._timeoutConfigManager.config.wsTimeout);
    }
  }
  _formatVideoDetectInfo(e) {
    let t;
    let i;
    let r;
    let a;
    return {
      detectStatus:
        ((t = e.videoLipSyncInfo) == null ? undefined : t.detectStatus) ||
        e.status,
      failCode: (i = e.videoLipSyncInfo) == null ? undefined : i.failCode,
      failStarlingKey:
        (r = e.videoLipSyncInfo) == null ? undefined : r.failStarlingKey,
      failStarlingMessage:
        (a = e.videoLipSyncInfo) == null ? undefined : a.failStarlingMessage,
    };
  }
  constructor(e, t, i, r, a) {
    super();
    this._wsHandler = e;
    this._pollingHandler = t;
    this._timeoutConfigManager = i;
    this._reportManager = r;
    this._videoPreprocessingDataService = a;
    this._taskInfoMap = new Map();
    this._detechResultCache = new Map();
  }
}
H = s.Cg(
  [
    s.Qj(4, A_1),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      E === undefined ? Object : E,
      W === undefined ? Object : W,
      b === undefined ? Object : b,
      typeof DigitalHumanDetectReportManager === "undefined"
        ? Object
        : DigitalHumanDetectReportManager,
      A_1 === undefined ? Object : A_1,
    ]),
  ],
  H,
);
export class q extends c.jG {
  detectWithImage(e) {
    return r
      ._(function* () {
        const t = yield this._imageDetector.detect({
          id: e.id,
          imageUri: e.imageUri,
          faceDetectionScenes: e.faceDetectionScenes,
          startTime: Date.now(),
        });
        if (t.ok) {
          return u.TZ(
            Object.fromEntries(
              [...t.value.entries()].map((e) => {
                var [t, i] = e;
                return [
                  t,
                  ((detectionScene, t) => {
                    const i = {
                      detectionScene,
                      status: t.status,
                      resourceId: "",
                    };
                    if (t.imageCreateAvatarInfo) {
                      const r = t.imageCreateAvatarInfo;
                      i.status = r.status;
                      i.resourceId =
                        (r && (r.resourceIdStd || r.resourceIdLoopy)) || "";
                      if (Du(r.status)) {
                        i.errorCode = r.failCode || a_1.Unknown;
                        i.errorMessage = r.message || r.failStarlingMessage;
                        i.refuseCode = r.refuseCode;
                      }
                      if (r.faceBboxNorm.length > 0) {
                        i.faceBboxNorm = r.faceBboxNorm;
                      }
                      if (
                        r.normalizedFaceBboxList &&
                        r.normalizedFaceBboxList.length > 0
                      ) {
                        i.faceDetails = r.normalizedFaceBboxList.filter(
                          (e) =>
                            typeof e.faceImage.imageUri === "string" &&
                            typeof e.faceImage.imageUrl === "string" &&
                            typeof e.maskImage.imageUri === "string",
                        );
                      }
                    }
                    return i;
                  })(t, i),
                ];
              }),
            ),
          );
        }
        return t;
      })
      .call(this);
  }
  detectWithLocalImage(e) {
    return r
      ._(function* () {
        try {
          const t = yield v.q(this._containerService, e.imageData);
          if (!t.ok) {
            return t;
          }
          const i = t.value.uri;
          return yield this.detectWithImage({
            id: e.id,
            imageUri: i,
            faceDetectionScenes: e.faceDetectionScenes,
            startTime: e.startTime,
          });
        } catch (error) {
          return u.iX(
            -1,
            o.Ay.t("web_new_local_image_check_fail", {}, "本地图片检测失败"),
            error,
          );
        }
      })
      .call(this);
  }
  cancelAllDetectLipSyncWithImage() {
    this._imageDetector.cancelAll();
  }
  cancelDetectLipSyncWithImage(e) {
    this._imageDetector.cancel(e);
  }
  detectWithVideo(e) {
    return r
      ._(function* () {
        try {
          const t = yield this._videoDetector.detectWithVideo(
            n._(a._({}, e), {
              id: d.bz(),
              startTime: Date.now(),
            }),
          );
          return u.TZ(t);
        } catch (error) {
          h.V.error("DigitalHumanDetectService", "detectWithVideo", error);
          return u.iX(
            -1,
            o.Ay.t("web_new_local_video_check_fail", {}, "视频检测失败"),
            error,
          );
        }
      })
      .call(this);
  }
  getVideoDetectResult(e) {
    return this._videoDetector.getVideoDetectResult(e);
  }
  fetchRecommendedVoices(e) {
    return r
      ._(function* () {
        const { imageUris } = e;
        const submitId = d.bz();
        const r = yield this._videoPreprocessingService.process(
          [
            {
              submitId,
              scene: m.P.LipSyncVoiceRecommendation,
              lipSyncVoiceMatch: {
                imageList: imageUris.map((e) => ({
                  imageUri: e,
                })),
              },
            },
          ],
          {
            babiParam: S(),
          },
        );
        if (!r.ok) {
          return r;
        }
        const [a] = r.value;
        if (a.status !== m.A.Success) {
          return l.r(a);
        }
        const { lipSyncVoiceMatchInfo } = a;
        if (
          !(lipSyncVoiceMatchInfo == null
            ? undefined
            : lipSyncVoiceMatchInfo.matchVoiceList)
        ) {
          return u.TZ({
            faceImageUriToRecommendedVoiceIds: {},
          });
        }
        const { matchVoiceList } = lipSyncVoiceMatchInfo;
        return u.TZ({
          faceImageUriToRecommendedVoiceIds: Object.fromEntries(
            matchVoiceList.flatMap((e) => {
              var { image, voiceIdList } = e;
              if (image.imageUri) {
                return [[image.imageUri, voiceIdList]];
              }
              return [];
            }),
          ),
        });
      })
      .call(this);
  }
  detectHumanVoice(e) {
    return r
      ._(function* () {
        const { audioUri } = e;
        const i = yield this._videoPreprocessingService.process(
          [
            {
              submitId: d.bz(),
              scene: m.P.LipSyncAudioDetect,
              lipSyncAudioDetect: {
                audio: {
                  vid: audioUri,
                },
              },
            },
          ],
          {
            babiParam: S(),
          },
        );
        if (!i.ok) {
          return i;
        }
        const [r] = i.value;
        if (r.status !== m.A.Success) {
          return l.r(r);
        }
        const { lipSyncAudioDetectInfo } = r;
        return u.TZ(lipSyncAudioDetectInfo);
      })
      .call(this);
  }
  fetchAudioSilenceInfo(e, t) {
    return r
      ._(function* () {
        const { prompt } = e;
        const r = yield this._videoPreprocessingService.process(
          [
            {
              submitId: d.bz(),
              scene: m.P.LipSyncAudioSilence,
              lipSyncAudioSilence: {
                prompt,
              },
            },
          ],
          a._(
            {
              babiParam: S(),
            },
            t,
          ),
        );
        if (!r.ok) {
          return r;
        }
        const [n] = r.value;
        if (n.status !== m.A.Success) {
          return l.r(n);
        }
        const {
          lipSyncAudioSilenceInfo: {
            beforeSilenceMillisecond,
            afterSilenceMillisecond,
          },
        } = n;
        return u.TZ({
          leadingSilenceDuration: beforeSilenceMillisecond / g.K,
          trailingSilenceDuration: afterSilenceMillisecond / g.K,
        });
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._containerService = e;
    this._videoPreprocessingService = t;
    this._timeoutConfig = this._containerService.createInstance(b);
    this._reportManager = this._containerService.createInstance(N);
    var i = this._containerService.createInstance(P);
    var r = this._containerService.createInstance(
      L,
      this._timeoutConfig.config,
    );
    this._imageDetector = this._containerService.createInstance(
      U,
      i,
      r,
      this._timeoutConfig,
      this._reportManager,
    );
    var a = this._containerService.createInstance(E);
    var n = this._containerService.createInstance(
      W,
      this._timeoutConfig.config,
    );
    this._videoDetector = this._containerService.createInstance(
      H,
      a,
      n,
      this._timeoutConfig,
      this._reportManager,
    );
  }
}
q = s.Cg(
  [
    s.Qj(0, p._),
    s.Qj(1, A_1),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      p._ === undefined ? Object : p._,
      A_1 === undefined ? Object : A_1,
    ]),
  ],
  q,
);
