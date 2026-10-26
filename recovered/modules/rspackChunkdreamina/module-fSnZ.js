import r from "NY";
import n from "QWK";
import a from "dw4";
import o from "Qey";
import s from "o7";
import l from "Kt";
import d from "Hr";
import c from "cY";
import u from "xi";
import { _ as __1 } from "./module-YT.js";
import * as p from "./module-m9m.js";
import m from "lj";
import g from "M8X";
import _ from "JSz";
import { O } from "./module-wLW.js";
import y from "HX";
import * as b from "./module-oXy.js";
import { j } from "./module-EHr.js";
import I from "Z7I";
import T from "oa";
import C from "bk";
import { N } from "./module-Ek3.js";
import { Mi } from "./module-xH6.js";
import { Gp, Z$ } from "./module-bc3.js";
import { i as i_1 } from "./module-y0.js";
import { Vl } from "./module-at_2.js";
import { p as p_1 } from "./module-K4.js";
import * as M from "./module-wv.js";
import { Q as Q_1 } from "./module-cp.js";
import { Kh } from "./module-tME.js";
import { Jz } from "./module-le3.js";
import * as D from "./module-Wzf_2.js";
import H from "z7R";
import z from "TK";
import L from "T7";
import { _ as __2 } from "./module-A8t_2.js";
import B from "JEZ";
import { O as O_1 } from "./module-jpM.js";
import { c as c_1 } from "./module-Vs_2.js";
import J from "oe";
import X from "A7";
import { j as j_1 } from "./module-FwO.js";
import Y from "n3";
import { h as h_1 } from "./module-Z59.js";
function h(enterFrom) {
  switch (enterFrom) {
    case "ai_function":
    case "hover_function_click":
    case "all_tools_click":
      return enterFrom;
    default:
      return;
  }
}
function w(allowedMediaTypes) {
  return {
    allowedMediaTypes: allowedMediaTypes.filter((e) => e === "image"),
    acceptedFormats: {
      image: Object.entries(j)
        .flatMap((e) => {
          var [t, i] = e;
          return [t, ...i];
        })
        .join(","),
    },
    validateFile(e) {
      if (e.size > 20 * I.o) {
        throw new b.S(
          "validation-failed",
          o.Ay.t(
            "web_canva_image_upload_fail_size_exceed",
            {
              num: 1,
            },
            "{num} 个文件上传失败，单文件大小需限制在20MB以内",
          ),
        );
      }
    },
  };
}
function F(e, mediaType, i) {
  const { workspaceId, submitId } = e.idModel;
  if (workspaceId === undefined) {
    u.V.error("[SmartEditAdapter] Created task has no workspace", {
      submitId,
      mediaType,
    });
  } else {
    i.onTaskCreated({
      workspaceId,
      submitId,
      mediaType,
    });
  }
}
function P(code) {
  return N[code in N ? code : Mi.Unknown];
}
function U(e, t, i) {
  return r._(function* () {
    let r = false;
    const dispose = () => {
      if (!r) {
        r = true;
        e.dispose();
      }
    };
    try {
      const a = yield i(() => {
        dispose();
        t.onAfterClose();
      });
      if (a.status !== "opened") {
        dispose();
        return a;
      }
      return {
        status: "opened",
        session: {
          close: () => a.session.close(),
          dispose,
        },
      };
    } catch (error) {
      dispose();
      throw error;
    }
  })();
}
const $ = {
  "image-smart-edit": "image",
  "video-edit": "video",
  "image-pro-hd": "image",
  "video-super-resolution": "video",
  "image-reverse": "image",
  "video-reverse": "video",
  "video-extend": "video",
  "image-to-video": "image",
  "image-outpaint": "image",
  "image-inpaint": "image",
  "image-inpaint-remove": "image",
};
class V {
  hasRegisteredCapability(e) {
    return e.some((e) => this._registrations.has(e));
  }
  getAvailableMediaTypes(e, t) {
    return r
      ._(function* () {
        const i = new Set();
        for (const r of new Set(e)) {
          if (t.signal.aborted) {
            break;
          }
          const n = this._registrations.get(r);
          if (n && (yield n.isAvailable(t)) && !t.signal.aborted) {
            i.add($[r]);
          }
        }
        return [...i];
      })
      .call(this);
  }
  resolve(e, t, i) {
    return r
      ._(function* () {
        for (const r of new Set(e)) {
          if (i.signal.aborted) {
            break;
          }
          const n = this._registrations.get(r);
          if (
            n &&
            $[r] === t &&
            (yield n.isAvailable(i)) &&
            !i.signal.aborted
          ) {
            const a = yield n.loadAdapter();
            if (i.signal.aborted) {
              return undefined;
            }
            return a;
          }
        }
      })
      .call(this);
  }
  constructor(e) {
    this._registrations = new Map();
    for (var t of e) {
      if (this._registrations.has(t.capabilityId)) {
        throw Error("Duplicate tool capability: ".concat(t.capabilityId));
      }
      this._registrations.set(t.capabilityId, t);
    }
  }
}
class Q {
  get registrations() {
    return ["image-reverse", "video-reverse"].map((capabilityId) => ({
      capabilityId,
      isAvailable: (e) => this._isAvailable(e),
      loadAdapter: () => Promise.resolve(this),
    }));
  }
  startSelection(context, title) {
    this.cancel();
    if (!this._isAvailable(context)) {
      return false;
    }
    var i = {
      context,
      title,
      accountId: this._options.getAccountId(),
      onAbort: () => {
        if (this._session === i) {
          this.cancel();
        }
      },
    };
    this._session = i;
    context.signal.addEventListener("abort", i.onAbort, {
      once: true,
    });
    return true;
  }
  reserveTarget(selectionId) {
    const _session = this._session;
    if (
      _session &&
      _session.context.launchId === selectionId &&
      this._canContinue(_session)
    ) {
      this.releaseTarget(_session.reservation);
      const i = {
        selectionId,
        target: B.y_(),
      };
      _session.reservation = i;
      return i;
    }
  }
  releaseTarget(e) {
    let t;
    if (!(e == null || (t = e.target) == null)) {
      t.release();
    }
    if (this._session && this._session.reservation === e) {
      this._session.reservation = undefined;
    }
  }
  open(e, t) {
    let i;
    let r;
    const _session = this._session;
    if (!_session || _session.context !== t || t.signal.aborted) {
      return Promise.resolve({
        status: "cancelled",
      });
    }
    if (!this._canContinue(_session)) {
      this.cancel();
      return Promise.resolve({
        status: "unavailable",
      });
    }
    const a = O_1({
      sources: [e],
      intent: {
        capability: "ask-ai",
        capsuleId: e.type === "image" ? "image_reverse" : "video_reverse",
      },
      accountId: _session.accountId,
      title: _session.title,
      toolItemId: t.entryId,
      signal: t.signal,
      targetReservation:
        (r = _session.reservation) == null ? undefined : r.target,
      fallbackToCurrentTab: true,
      attribution: T._(
        {
          enterFrom:
            (i = this._options.canvasEnterFrom) != null
              ? i
              : this._options.reportPage === "all_tools"
                ? "all_tools_click"
                : "ai_function",
        },
        this._options.reportPage === "all_tools"
          ? {
              fromPage: "all_tools",
            }
          : {},
      ),
    });
    this.cancel();
    if (a.status === "opened") {
      this._options.onNavigated();
      return Promise.resolve({
        status: "navigated",
      });
    }
    return Promise.resolve(
      a.status === "cancelled"
        ? {
            status: "cancelled",
          }
        : {
            status: "failed",
            error: Error(o.Ay.t("fail_retry", {}, "操作失败，请重试")),
          },
    );
  }
  cancel() {
    let e;
    let t;
    const _session = this._session;
    this._session = undefined;
    if (_session) {
      _session.context.signal.removeEventListener("abort", _session.onAbort);
      if (!((t = _session.reservation) == null || (e = t.target) == null)) {
        e.release();
      }
    }
  }
  dispose() {
    this.cancel();
  }
  _isAvailable(e) {
    return (
      e.toolId === "media_reverse" &&
      !e.signal.aborted &&
      this._options.isCanvasEnabled() &&
      !!this._options.getAccountId()
    );
  }
  _canContinue(e) {
    return (
      this._isAvailable(e.context) &&
      e.accountId === this._options.getAccountId()
    );
  }
  constructor(e) {
    this._options = e;
  }
}
let ee = 0;
class et {
  get state() {
    return this._state;
  }
  launch(e) {
    return r
      ._(function* () {
        if (this._disposed) {
          return {
            status: "cancelled",
          };
        }
        if (this._active) {
          return {
            status: "busy",
          };
        }
        if (!this._registry.hasRegisteredCapability(e.capabilityIds)) {
          return {
            status: "unavailable",
          };
        }
        const controller = new AbortController();
        const i = [...e.capabilityIds];
        const r = {
          context: Object.freeze({
            launchId: `tool-${++ee}`,
            entryId: e.entryId,
            toolId: e.toolId,
            enterFrom: e.enterFrom,
            signal: controller.signal,
          }),
          controller,
          opening: false,
          closed: false,
          taskCreated: false,
        };
        this._active = r;
        try {
          this._setState("waiting-login");
          if (!this._isCurrent(r)) {
            return {
              status: "cancelled",
            };
          }
          if (
            !(yield e.ensureAuthenticated(r.context)) ||
            !this._isCurrent(r)
          ) {
            this._finish(r);
            return {
              status: "cancelled",
            };
          }
          const n = yield this._registry.getAvailableMediaTypes(i, r.context);
          if (!this._isCurrent(r)) {
            this._finish(r);
            return {
              status: "cancelled",
            };
          }
          if (n.length === 0) {
            this._finish(r);
            return {
              status: "unavailable",
            };
          }
          this._setState("preparing");
          if (!this._isCurrent(r)) {
            return {
              status: "cancelled",
            };
          }
          const a = yield e.prepareSource(r.context, n);
          if (!a || !this._isCurrent(r)) {
            this._finish(r);
            return {
              status: "cancelled",
            };
          }
          r.source = a;
          const o = yield this._registry.resolve(i, a.type, r.context);
          if (!this._isCurrent(r)) {
            this._finish(r);
            return {
              status: "cancelled",
            };
          }
          if (!o) {
            this._finish(r);
            return {
              status: "unavailable",
            };
          }
          this._setState("opening");
          if (!this._isCurrent(r)) {
            return {
              status: "cancelled",
            };
          }
          r.opening = true;
          const s = yield o.open(a, r.context, {
            onOpened: () => {
              if (this._isCurrent(r) && this._state === "opening") {
                this._setState("editing");
              }
            },
            onTaskCreated: (e) => this._onTaskCreated(r, e),
            onSubmittingChange: (e) => {
              if (this._isCurrent(r) && !r.taskCreated) {
                this._setState(e ? "submitting" : "editing");
              }
            },
            onAfterClose: () => this._finish(r),
          });
          r.opening = false;
          if (s.status === "navigated") {
            this._finish(r);
            return s;
          }
          if (s.status !== "opened") {
            const l = !this._isCurrent(r);
            this._finish(r);
            if (l) {
              return {
                status: "cancelled",
              };
            }
            if (s.status === "failed") {
              this._callbacks.onError(s.error);
            }
            return s;
          }
          const d = s.session;
          if (r.closed) {
            d.dispose();
            return {
              status: "cancelled",
            };
          }
          r.editor = d;
          if (!this._isCurrent(r)) {
            this._closeEditor(r);
            return {
              status: "cancelled",
            };
          }
          if (this._state === "opening") {
            this._setState("editing");
          }
          return {
            status: "opened",
          };
        } catch (error) {
          const c = !this._isCurrent(r);
          this._finish(r);
          if (c) {
            return {
              status: "cancelled",
            };
          }
          this._callbacks.onError(error);
          return {
            status: "failed",
            error,
          };
        }
      })
      .call(this);
  }
  cancel() {
    const _active = this._active;
    if (!(!_active || _active.context.signal.aborted)) {
      _active.controller.abort();
      if (!(_active.closed || this._active !== _active)) {
        if (_active.editor) {
          this._closeEditor(_active);
        } else if (_active.opening) {
          this._setState("closing");
        } else {
          this._finish(_active);
        }
      }
    }
  }
  dispose() {
    this._disposed = true;
    this.cancel();
  }
  _isCurrent(e) {
    return this._active === e && !e.closed && !e.context.signal.aborted;
  }
  _closeEditor(e) {
    if (
      !e.closed &&
      this._active === e &&
      (this._setState("closing"), !e.closed && this._active === e)
    ) {
      try {
        let t;
        if ((t = e.editor) != null) {
          t.close();
        }
      } catch (error) {
        this._finish(e);
        this._callbacks.onError(error);
      }
    }
  }
  _finish(e) {
    if (!e.closed) {
      e.closed = true;
      e.controller.abort();
      try {
        let t;
        if ((t = e.editor) != null) {
          t.dispose();
        }
      } finally {
        if (this._active === e) {
          this._active = undefined;
          this._setState("idle");
        }
      }
    }
  }
  _onTaskCreated(e, t) {
    if (this._isCurrent(e) && !e.taskCreated) {
      try {
        let i;
        if (
          !Number.isSafeInteger(t.workspaceId) ||
          t.workspaceId <= 0 ||
          t.mediaType !== ((i = e.source) == null ? undefined : i.type)
        ) {
          throw Error("Invalid tool task result");
        }
        e.taskCreated = true;
        this._callbacks.onTaskCreated(Object.freeze(T._({}, t)), e.context);
      } catch (error) {
        this._callbacks.onError(error);
      }
    }
  }
  _setState(e) {
    let t;
    let i;
    this._state = e;
    if ((t = (i = this._callbacks).onStateChange) != null) {
      t.call(i, e);
    }
  }
  constructor(e, t) {
    this._registry = e;
    this._callbacks = t;
    this._state = "idle";
    this._disposed = false;
  }
}
class ei extends s.jG {
  setHostRoute(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "create";
    this._hostRoute = e;
    this._reportPage = t;
  }
  launch(e, prepareSource, onResult) {
    if (!this._canUseHome()) {
      return Promise.resolve({
        status: "cancelled",
      });
    }
    if (this._session || this.state !== "idle") {
      return Promise.resolve({
        status: "busy",
      });
    }
    this.clearCreatedTask();
    const n = C._(T._({}, e), {
      capabilityIds: [...e.capabilityIds],
    });
    a.h5(() => {
      this.activeEntry = n;
    });
    const o = {
      onResult,
      request: C._(T._({}, n), {
        ensureAuthenticated: (e) => {
          var { signal } = e;
          return r
            ._(function* () {
              const e = yield j_1(this._accountService, {
                source: Y.HH.AiFeature,
                signal,
              });
              if (e.status === "failed") {
                throw e.error;
              }
              return (
                e.status === "authenticated" &&
                this._canUseHome() &&
                this._accountService.hasLogin
              );
            })
            .call(this);
        },
        prepareSource,
      }),
    };
    this._session = o;
    return this._launchSession(o);
  }
  _launchSession(e) {
    return r
      ._(function* () {
        let t;
        const i = yield this._launcher.launch(e.request);
        if (this._session === e) {
          if (this.state === "idle") {
            this._session = undefined;
            a.h5(() => {
              this.activeEntry = undefined;
            });
          }
          if ((t = e.onResult) != null) {
            t.call(e, i);
          }
        }
        return i;
      })
      .call(this);
  }
  _setLaunchState(e) {
    const _session = this._session;
    const i =
      e === "idle" &&
      _session &&
      (this.state === "opening" ||
        this.state === "editing" ||
        this.state === "submitting");
    a.h5(() => {
      this.state = i ? "preparing" : e;
      if (!(e !== "idle" || i)) {
        this.activeEntry = undefined;
      }
    });
    if (i) {
      queueMicrotask(() => {
        if (this._session === _session) {
          if (!this._canUseHome() || !this._accountService.hasLogin) {
            return void this.cancel();
          }
          this._launchSession(_session);
        }
      });
    }
  }
  openCreatedTask() {
    const createdTask = this.createdTask;
    const _createdTaskContext = this._createdTaskContext;
    if (
      !createdTask ||
      !_createdTaskContext ||
      !this._canUseHome() ||
      !this._accountService.hasLogin
    ) {
      return false;
    }
    try {
      this._uiConfigurationService.navigate(y.Du.AIGeneratedRecord, {
        state: {
          from: "content-generator",
          targetWorkspaceId: createdTask.workspaceId,
        },
        query: {
          enter_from: _createdTaskContext.enterFrom,
          from_page: this._reportPage,
          ai_feature_name: _createdTaskContext.toolId,
        },
      });
      this._recordError(undefined);
      return true;
    } catch (error) {
      this._recordError(error);
      return false;
    }
  }
  cancel() {
    this._session = undefined;
    a.h5(() => {
      this.activeEntry = undefined;
    });
    this._launcher.cancel();
    if (this._launcher.state === "idle") {
      a.h5(() => {
        this.state = "idle";
      });
    }
  }
  _currentAccountId() {
    if (this._accountService.hasLogin) {
      return this._accountService.userProfile.uid.trim();
    }
    return "";
  }
  _canUseHome() {
    let e;
    let t;
    return (
      !this._disposed &&
      this._pageActive &&
      ((t = this._uiConfigurationService.getRouteConfigByPath(
        (e = this._uiConfigurationService.currentRoutePath) != null ? e : "",
      )) == null
        ? undefined
        : t.id) === this._hostRoute
    );
  }
  _recordError(e) {
    a.h5(() => {
      this.lastError = e;
    });
  }
  clearCreatedTask() {
    this._createdTaskContext = undefined;
    a.h5(() => {
      this.createdTask = undefined;
      this.lastError = undefined;
    });
  }
  dispose() {
    this._disposed = true;
    this.cancel();
    this._launcher.dispose();
    this.clearCreatedTask();
    super.dispose();
  }
  constructor(e, t, i) {
    super();
    this._accountService = t;
    this._uiConfigurationService = i;
    this.state = "idle";
    this.activeEntry = undefined;
    this.createdTask = undefined;
    this.lastError = undefined;
    this._onDidCreateTask = this._register(new X.v());
    this.onDidCreateTask = this._onDidCreateTask.event;
    this._pageActive = true;
    this._hostRoute = y.Du.Home;
    this._reportPage = "create";
    this._disposed = false;
    a.Gn(this, {
      state: a.sH,
      activeEntry: a.sH.ref,
      createdTask: a.sH.ref,
      lastError: a.sH.ref,
    });
    this._launcher = new et(e, {
      onStateChange: (e) => this._setLaunchState(e),
      onError: (e) => this._recordError(e),
      onTaskCreated: (e, t) => {
        if (
          this._canUseHome() &&
          this._accountService.hasLogin &&
          !t.signal.aborted
        ) {
          a.h5(() => {
            this.createdTask = e;
          });
          this._createdTaskContext = {
            toolId: t.toolId,
            enterFrom: t.enterFrom,
          };
          this._onDidCreateTask.fire();
          this.cancel();
          this.openCreatedTask();
        }
      },
    });
    this._register(
      this._uiConfigurationService.onWouldRouteChange(() => this.cancel()),
    );
    this._register(
      this._uiConfigurationService.onKeepAliveChange((e) => {
        var { routeId, status } = e;
        if (routeId === this._hostRoute) {
          this._pageActive = status === J.V.Activated;
          if (!this._pageActive) {
            this.cancel();
          }
        }
      }),
    );
    var r = this._currentAccountId();
    this._register(
      this._accountService.onDidLogout(() => {
        r = "";
        this.cancel();
        this.clearCreatedTask();
      }),
    );
    this._register(
      this._accountService.onDidLogin(() => {
        var e = this._currentAccountId();
        if (r && r !== e) {
          this.cancel();
          this.clearCreatedTask();
        }
        r = e;
      }),
    );
  }
}
ei = n.Cg(
  [
    n.Qj(1, c.i),
    n.Qj(2, m.K),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof ToolRegistry === "undefined" ? Object : ToolRegistry,
      c.i === undefined ? Object : c.i,
      m.K === undefined ? Object : m.K,
    ]),
  ],
  ei,
);
class en extends s.jG {
  get busy() {
    return !!(
      this.canvas.selectedTool ||
      this.canvas.isCopyingTemplate ||
      this.tool.state !== "idle"
    );
  }
  cancel() {
    this._mediaReverse.cancel();
    this.canvas.cancel();
    this.tool.cancel();
  }
  reserveCanvasTarget(e) {
    if (this.canvas.selectedTool) {
      return this.canvas.reserveTarget(e);
    }
    return this._mediaReverse.reserveTarget(e);
  }
  releaseCanvasTarget(e) {
    this.canvas.releaseTarget(e);
    this._mediaReverse.releaseTarget(e);
  }
  close() {
    this.cancel();
    this.tool.clearCreatedTask();
  }
  dismissAfterNavigation(e) {
    if (!this._disposed) {
      const t = this.tool.createdTask;
      if (!t) {
        this.close();
        e();
        return;
      }
      queueMicrotask(() => {
        if (
          !(
            this._disposed ||
            this.tool.createdTask !== t ||
            this.tool.lastError
          )
        ) {
          e();
        }
      });
    }
  }
  dispose() {
    this._disposed = true;
    super.dispose();
  }
  open(e) {
    return r
      ._(function* () {
        if (this._accountService.hasLogin) {
          yield this._openEntry(e);
        } else {
          this.close();
        }
      })
      .call(this);
  }
  prepareSelection(e) {
    return r
      ._(function* () {
        if (this._accountService.hasLogin && this.source.selection) {
          return this.source.selection.selectionId;
        }
        let t = () => undefined;
        const i = new Promise((resolve) => {
          t = a.mJ(
            () => {
              var e;
              if ((e = this.source.selection) == null) {
                return undefined;
              }
              return e.selectionId;
            },
            (t) => {
              if (t && this._accountService.hasLogin) {
                resolve(t);
              }
            },
          );
        });
        try {
          return yield Promise.race([
            i,
            this._openEntry(e).then(() => undefined),
          ]);
        } finally {
          t();
        }
      })
      .call(this);
  }
  _openEntry(e) {
    return r
      ._(function* () {
        this.close();
        if (e.action.type === "tool") {
          let t;
          yield this.launchTool(
            {
              entryId: e.id,
              toolKey: e.action.toolKey,
              enterFrom: (t = this._enterFrom) != null ? t : "ai_feature",
            },
            e.title,
          );
          return;
        }
        const i = h_1(e);
        if (i && this.canvas.enabled) {
          yield this.canvas.open(i);
        } else {
          d.l.warning("此画布入口暂不可用");
        }
      })
      .call(this);
  }
  launchTool(e, t) {
    if (this.canvas.selectedTool || this.canvas.isCopyingTemplate) {
      return Promise.resolve({
        status: "busy",
      });
    }
    const n = __2(e);
    if (n) {
      return this.tool.launch(
        n,
        (e, allowedMediaTypes) =>
          r
            ._(function* () {
              let s;
              let l;
              let policy;
              const { launchId, signal } = e;
              if (n.toolId === "media_reverse") {
                if (!this._mediaReverse.startSelection(e, t)) {
                  return;
                }
                policy = {
                  allowedMediaTypes,
                };
              } else {
                if (n.toolId === "video_extend") {
                  policy = yield (
                    ((s = this._container),
                    r._(function* () {
                      const {
                        loadVideoExtendConfig,
                        getVideoExtendSourcePolicy,
                        getVideoExtendUnavailableMessage,
                      } = yield require
                        .e("syh")
                        .then(require.bind(require, "VS3"));
                      const n = yield loadVideoExtendConfig(s);
                      if (!n) {
                        throw Error(getVideoExtendUnavailableMessage());
                      }
                      return getVideoExtendSourcePolicy(n);
                    })())
                  );
                } else if (n.toolId === "image_to_video") {
                  policy = {
                    allowedMediaTypes: ["image"],
                    validateFile(file) {
                      const t = __1(
                        {
                          type: "image",
                          file,
                        },
                        p.O,
                      );
                      if (!t.ok) {
                        throw new b.S("validation-failed", t.msg);
                      }
                    },
                    validateMetadata(e) {
                      if (e.type !== "image") {
                        throw new b.S("unsupported-media");
                      }
                      const t = __1(e, p.O);
                      if (!t.ok) {
                        throw new b.S("validation-failed", t.msg);
                      }
                    },
                  };
                } else if (n.toolId === "image_outpaint") {
                  policy = {
                    allowedMediaTypes: allowedMediaTypes.filter(
                      (e) => e === "image",
                    ),
                  };
                } else if (n.toolId === "super_resolution") {
                  l = w(allowedMediaTypes);
                  policy = {
                    allowedMediaTypes,
                    acceptedFormats: l.acceptedFormats,
                    validateFile(e) {
                      if (e.type.startsWith("image/")) {
                        let t;
                        if ((t = l.validateFile) == null) {
                          return undefined;
                        }
                        return t.call(l, e);
                      }
                      const i = i_1(
                        {
                          type: "video",
                          file: e,
                        },
                        p.Q,
                      );
                      if (!i.ok) {
                        throw new b.S("validation-failed", i.msg);
                      }
                    },
                    validateMetadata(e) {
                      if (e.type === "video") {
                        const t = Jz({
                          width: e.width,
                          height: e.height,
                          duration: e.durationSeconds,
                        });
                        if (!t.eligible) {
                          throw new b.S(
                            "validation-failed",
                            t.reason === "duration_too_long"
                              ? Kh(D.TH)
                              : o.Ay.t(
                                  "web_aigc_video_btn_high_definition_unable_tips",
                                  {},
                                  "视频已达到最高分辨率，无法再提升",
                                ),
                          );
                        }
                      }
                    },
                  };
                } else {
                  policy =
                    n.toolId === "image_inpaint" ||
                    n.toolId === "image_inpaint_remove"
                      ? w(allowedMediaTypes)
                      : {
                          allowedMediaTypes,
                          validateFile: (e) =>
                            r._(function* () {
                              if (e.type.startsWith("image/")) {
                                const t = yield Z$(e);
                                if (!t.ok) {
                                  throw new b.S("validation-failed", P(t.code));
                                }
                              } else {
                                const i = i_1(
                                  {
                                    type: "video",
                                    file: e,
                                  },
                                  p.Q,
                                );
                                if (!i.ok) {
                                  throw new b.S("validation-failed", i.msg);
                                }
                              }
                            })(),
                          validateMetadata(e) {
                            if (e.type === "image") {
                              const t = Gp(e);
                              if (!t.ok) {
                                throw new b.S("validation-failed", P(t.code));
                              }
                            } else {
                              const i = i_1(
                                C._(T._({}, e), {
                                  duration: e.durationSeconds,
                                }),
                                C._(T._({}, p.Q), {
                                  maxDuration: M.pp,
                                }),
                              );
                              if (!i.ok) {
                                throw new b.S("validation-failed", i.msg);
                              }
                            }
                          },
                        };
                }
              }
              if (!signal.aborted) {
                return this.source.startSelection({
                  selectionId: launchId,
                  signal,
                  policy,
                });
              }
            })
            .call(this),
        this._handleToolLaunchResult,
      );
    }
    this._handleToolLaunchResult({
      status: "unavailable",
    });
    return Promise.resolve({
      status: "unavailable",
    });
  }
  constructor(e, canvasEnabled_1, n, a) {
    super();
    this.hostRoute = e;
    this._container = n;
    this._accountService = a;
    this._disposed = false;
    this._handleToolLaunchResult = (e) => {
      if (e.status === "unavailable") {
        d.l.warning("当前账号或环境暂不支持此工具");
      } else if (e.status === "failed" && !e.notificationHandled) {
        var t = e.error instanceof Error ? e.error.message.trim() : "";
        d.l.warning(t || o.Ay.t("fail_retry", {}, "操作失败，请重试"));
      }
    };
    var { canvasEnabled, reportPage, enterFrom } =
      typeof canvasEnabled_1 === "object"
        ? canvasEnabled_1
        : {
            canvasEnabled: canvasEnabled_1,
            reportPage: undefined,
          };
    this.reportPage = reportPage != null ? reportPage : "create";
    this._enterFrom = enterFrom;
    this.source = this._register(
      n.createInstance(Q_1, n.createInstance(b.D), {
        page: reportPage != null ? reportPage : "create",
        enterFrom: enterFrom != null ? enterFrom : "ai_function",
        position: "ai_feature_banner",
      }),
    );
    this.canvas = this._register(
      n.createInstance(
        c_1,
        this.source,
        typeof canvasEnabled === "function"
          ? canvasEnabled
          : () => canvasEnabled,
      ),
    );
    this._mediaReverse = this._register(
      new Q({
        isCanvasEnabled: () => this.canvas.enabled,
        getAccountId: () => {
          if (this._accountService.hasLogin) {
            return this._accountService.userProfile.uid.trim();
          }
          return "";
        },
        onNavigated: () => this.tool.cancel(),
        reportPage: this.reportPage,
        canvasEnterFrom:
          enterFrom != null
            ? enterFrom
            : reportPage === "all_tools"
              ? "all_tools_click"
              : "ai_function",
      }),
    );
    this.tool = this._register(
      n.createInstance(
        ei,
        new V([
          ...(function (e) {
            const t =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {
                    page: "create",
                  };
            return [
              {
                capabilityId: "image-smart-edit",
                isAvailable: (e) => {
                  var { toolId, signal } = e;
                  return toolId === "smart_edit" && !signal.aborted;
                },
                loadAdapter: () =>
                  r._(function* () {
                    const { openUploadedImageEditor } = yield require
                      .e("uxb")
                      .then(require.bind(require, "UWv"));
                    return {
                      open: (i, n, a) => {
                        if (i.type !== "image") {
                          return Promise.reject(
                            Error("Image smart edit requires an image"),
                          );
                        }
                        var o = e.createInstance(Vl, {
                          uri: i.uri,
                          url: i.url,
                          width: i.width,
                          height: i.height,
                        });
                        return U(o, a, (i) => {
                          var s;
                          return openUploadedImageEditor(e, {
                            toolItemId: n.entryId,
                            resource: o,
                            waitUntilOpen: true,
                            signal: n.signal,
                            reportEnterFrom: h(n.enterFrom),
                            postEditReportContext: {
                              page: t.page,
                              position: "ai_feature_banner",
                              enterFrom:
                                (s = h(n.enterFrom)) != null
                                  ? s
                                  : "ai_function",
                            },
                            onSubmittingChange: a.onSubmittingChange,
                            onTaskCreated: (e) => F(e, "image", a),
                            onAfterClose: i,
                          });
                        });
                      },
                    };
                  })(),
              },
              {
                capabilityId: "video-edit",
                isAvailable: (e) => {
                  var { toolId, signal } = e;
                  return (
                    (toolId === "smart_edit" ||
                      toolId === "video_partial_reshoot") &&
                    !signal.aborted
                  );
                },
                loadAdapter: () =>
                  r._(function* () {
                    const { openUploadedVideoEditor } = yield Promise.all([
                      require.e("z9t"),
                      require.e("dmi"),
                      require.e("tj5a"),
                      require.e("lsa"),
                      require.e("uoi"),
                      require.e("e7a"),
                      require.e("72p"),
                      require.e("jru"),
                    ]).then(require.bind(require, "tIM"));
                    return {
                      open: (i, r, n) => {
                        if (i.type !== "video") {
                          return Promise.reject(
                            Error("Video edit requires a video"),
                          );
                        }
                        var a = e.createInstance(p_1, {
                          uri: i.vid,
                          url: i.url,
                          width: i.width,
                          height: i.height,
                          duration: i.durationSeconds,
                          coverUrl: i.coverUrl,
                        });
                        return U(a, n, (i) => {
                          var o;
                          return openUploadedVideoEditor(e, {
                            toolItemId: r.entryId,
                            resource: a,
                            waitUntilOpen: true,
                            operation:
                              r.toolId === "video_partial_reshoot"
                                ? "partialReshoot"
                                : "videoEdit",
                            onOpened: n.onOpened,
                            signal: r.signal,
                            reportEnterFrom: h(r.enterFrom),
                            postEditReportEnterFrom:
                              (o = h(r.enterFrom)) != null ? o : "ai_function",
                            onSubmittingChange: n.onSubmittingChange,
                            onTaskCreated: (e) => F(e, "video", n),
                            onAfterClose: i,
                          });
                        });
                      },
                    };
                  })(),
              },
            ];
          })(n, {
            page: reportPage != null ? reportPage : "create",
          }),
          {
            capabilityId: "image-outpaint",
            isAvailable: (e) => {
              var { toolId, signal } = e;
              return toolId === "image_outpaint" && !signal.aborted;
            },
            loadAdapter: () =>
              r._(function* () {
                const { openUploadedImageOutpaint } = yield Promise.all([
                  require.e("9ed"),
                  require.e("8o4"),
                  require.e("mo4"),
                  require.e("46qd"),
                  require.e("1sx"),
                  require.e("lb8"),
                  require.e("rle"),
                  require.e("b7h"),
                  require.e("5ws"),
                  require.e("84i"),
                  require.e("x4o"),
                  require.e("pvu"),
                  require.e("h0h"),
                  require.e(894),
                  require.e("z9t"),
                  require.e("dmi"),
                  require.e("tj5a"),
                  require.e("lsa"),
                  require.e("uoi"),
                  require.e("e7a"),
                  require.e("72p"),
                  require.e("zf5"),
                  require.e("1gm"),
                  require.e("dks"),
                  require.e("59ls"),
                  require.e("z4v"),
                  require.e("2ej"),
                  require.e("a8k"),
                  require.e("eqf"),
                  require.e("s1o"),
                  require.e("as"),
                  require.e("1w"),
                  require.e("tnw"),
                ]).then(require.bind(require, "Tf1"));
                return {
                  open: (t, i, a) =>
                    r._(function* () {
                      if (t.type !== "image") {
                        throw Error("Image outpainting requires an image");
                      }
                      const r = yield openUploadedImageOutpaint(n, {
                        toolItemId: i.entryId,
                        source: t,
                        signal: i.signal,
                        enterFrom: h(i.enterFrom),
                        onSubmittingChange: a.onSubmittingChange,
                        onAfterClose: a.onAfterClose,
                        onTaskCreated: (e) => {
                          var { workspaceId, submitId } = e.idModel;
                          if (workspaceId === undefined) {
                            u.V.error(
                              "[OutpaintAdapter] Created task has no workspace",
                              {
                                submitId,
                              },
                            );
                          } else {
                            a.onTaskCreated({
                              workspaceId,
                              submitId,
                              mediaType: "image",
                            });
                          }
                        },
                      });
                      if (r.status !== "opened") {
                        return r;
                      }
                      return {
                        status: "opened",
                        session: {
                          close: () => r.session.close(),
                          dispose: () => r.session.close(),
                        },
                      };
                    })(),
                };
              })(),
          },
          {
            capabilityId: "image-pro-hd",
            isAvailable(e) {
              return r
                ._(function* (e) {
                  let t;
                  const { toolId, signal } = e;
                  if (toolId !== "super_resolution" || signal.aborted) {
                    return false;
                  }
                  const commercialStrategyService = (yield g
                    .cQ(n, H.jV)
                    .getInstance()).commercialStrategyService;
                  return (
                    !signal.aborted &&
                    !!commercialStrategyService.isReady &&
                    !commercialStrategyService.isInFreemiumStage &&
                    !!((t = g
                      .cQ(n, z.a)
                      .serverAbTestManager.getAbTestValueSync(
                        L.s.DreaminaProHDEntry,
                      )) == null
                      ? undefined
                      : t.enable)
                  );
                })
                .apply(this, arguments);
            },
            loadAdapter: () =>
              r._(function* () {
                const { openUploadedImageProHD } = yield Promise.all([
                  require.e("9ed"),
                  require.e("8o4"),
                  require.e("mo4"),
                  require.e("46qd"),
                  require.e("1sx"),
                  require.e("lb8"),
                  require.e("rle"),
                  require.e("b7h"),
                  require.e("5ws"),
                  require.e("84i"),
                  require.e("x4o"),
                  require.e("pvu"),
                  require.e("h0h"),
                  require.e(894),
                  require.e("z9t"),
                  require.e("dmi"),
                  require.e("tj5a"),
                  require.e("lsa"),
                  require.e("uoi"),
                  require.e("e7a"),
                  require.e("72p"),
                  require.e("zf5"),
                  require.e("1gm"),
                  require.e("dks"),
                  require.e("59ls"),
                  require.e("z4v"),
                  require.e("2ej"),
                  require.e("a8k"),
                  require.e("eqf"),
                  require.e("s1o"),
                  require.e("as"),
                  require.e("1w"),
                  require.e("9y6"),
                ]).then(require.bind(require, "Zm3"));
                return {
                  open: (t, i, a) =>
                    r._(function* () {
                      if (t.type !== "image") {
                        throw Error("Image ProHD requires an image");
                      }
                      const r = yield openUploadedImageProHD(n, {
                        toolItemId: i.entryId,
                        source: t,
                        signal: i.signal,
                        enterFrom: h(i.enterFrom),
                        onSubmittingChange: a.onSubmittingChange,
                        onAfterClose: a.onAfterClose,
                        onTaskCreated: (e) => {
                          var { workspaceId, submitId } = e.idModel;
                          if (workspaceId === undefined) {
                            u.V.error(
                              "[ImageProHDAdapter] Created task has no workspace",
                              {
                                submitId,
                              },
                            );
                          } else {
                            a.onTaskCreated({
                              workspaceId,
                              submitId,
                              mediaType: "image",
                            });
                          }
                        },
                      });
                      if (r.status !== "opened") {
                        return r;
                      }
                      return {
                        status: "opened",
                        session: {
                          close: () => r.session.close(),
                          dispose: () => r.session.close(),
                        },
                      };
                    })(),
                };
              })(),
          },
          {
            capabilityId: "video-super-resolution",
            isAvailable: (e) => {
              var { toolId, signal } = e;
              return toolId === "super_resolution" && !signal.aborted;
            },
            loadAdapter: () =>
              r._(function* () {
                const { openUploadedVideoSuperResolution } = yield Promise.all([
                  require.e("9ed"),
                  require.e("8o4"),
                  require.e("mo4"),
                  require.e("46qd"),
                  require.e("1sx"),
                  require.e("lb8"),
                  require.e("rle"),
                  require.e("b7h"),
                  require.e("5ws"),
                  require.e("84i"),
                  require.e("x4o"),
                  require.e("pvu"),
                  require.e("h0h"),
                  require.e(894),
                  require.e("z9t"),
                  require.e("dmi"),
                  require.e("tj5a"),
                  require.e("lsa"),
                  require.e("uoi"),
                  require.e("e7a"),
                  require.e("72p"),
                  require.e("zf5"),
                  require.e("1gm"),
                  require.e("dks"),
                  require.e("59ls"),
                  require.e("z4v"),
                  require.e("2ej"),
                  require.e("a8k"),
                  require.e("eqf"),
                  require.e("s1o"),
                  require.e("as"),
                  require.e("1w"),
                  require.e("sim"),
                ]).then(require.bind(require, "mvC"));
                return {
                  open: (t, i, a) =>
                    r._(function* () {
                      if (t.type !== "video") {
                        throw Error("Video super resolution requires a video");
                      }
                      const r = yield openUploadedVideoSuperResolution(n, {
                        toolItemId: i.entryId,
                        source: t,
                        signal: i.signal,
                        enterFrom: h(i.enterFrom),
                        onSubmittingChange: a.onSubmittingChange,
                        onAfterClose: a.onAfterClose,
                        onTaskCreated: (e) => {
                          var { workspaceId, submitId } = e.idModel;
                          if (workspaceId === undefined) {
                            u.V.error(
                              "[VideoSuperResolutionAdapter] Created task has no workspace",
                              {
                                submitId,
                              },
                            );
                          } else {
                            a.onTaskCreated({
                              workspaceId,
                              submitId,
                              mediaType: "video",
                            });
                          }
                        },
                      });
                      if (r.status !== "opened") {
                        return r;
                      }
                      return {
                        status: "opened",
                        session: {
                          close: () => r.session.close(),
                          dispose: () => r.session.close(),
                        },
                      };
                    })(),
                };
              })(),
          },
          ...this._mediaReverse.registrations,
          ...["repaint", "erase"].map((kind) => ({
            capabilityId:
              kind === "repaint" ? "image-inpaint" : "image-inpaint-remove",
            isAvailable: (t) => {
              var { toolId, signal } = t;
              return (
                !signal.aborted &&
                toolId ===
                  (kind === "repaint"
                    ? "image_inpaint"
                    : "image_inpaint_remove")
              );
            },
            loadAdapter: () =>
              r._(function* () {
                const { openUploadedImageInpaint } = yield Promise.all([
                  require.e("9ed"),
                  require.e("8o4"),
                  require.e("mo4"),
                  require.e("46qd"),
                  require.e("1sx"),
                  require.e("lb8"),
                  require.e("rle"),
                  require.e("b7h"),
                  require.e("5ws"),
                  require.e("84i"),
                  require.e("x4o"),
                  require.e("pvu"),
                  require.e("h0h"),
                  require.e(894),
                  require.e("z9t"),
                  require.e("dmi"),
                  require.e("tj5a"),
                  require.e("lsa"),
                  require.e("uoi"),
                  require.e("e7a"),
                  require.e("72p"),
                  require.e("zf5"),
                  require.e("1gm"),
                  require.e("dks"),
                  require.e("59ls"),
                  require.e("z4v"),
                  require.e("2ej"),
                  require.e("a8k"),
                  require.e("eqf"),
                  require.e("s1o"),
                  require.e("as"),
                  require.e("1w"),
                  require.e("be7"),
                ]).then(require.bind(require, "Lzr"));
                return {
                  open: (i, a, o) =>
                    r._(function* () {
                      if (i.type !== "image") {
                        throw Error("Image inpaint requires an image");
                      }
                      const r = yield openUploadedImageInpaint(n, {
                        kind,
                        toolItemId: a.entryId,
                        source: i,
                        signal: a.signal,
                        enterFrom: h(a.enterFrom),
                        onSubmittingChange: o.onSubmittingChange,
                        onAfterClose: o.onAfterClose,
                        onTaskCreated: (e) => {
                          var { workspaceId, submitId } = e.idModel;
                          if (workspaceId === undefined) {
                            u.V.error(
                              "[ImageInpaintAdapter] Created task has no workspace",
                              {
                                submitId,
                              },
                            );
                          } else {
                            o.onTaskCreated({
                              workspaceId,
                              submitId,
                              mediaType: "image",
                            });
                          }
                        },
                      });
                      if (r.status !== "opened") {
                        return r;
                      }
                      return {
                        status: "opened",
                        session: {
                          close: () => r.session.close(),
                          dispose: () => r.session.close(),
                        },
                      };
                    })(),
                };
              })(),
          })),
          {
            capabilityId: "video-extend",
            isAvailable(e) {
              return r
                ._(function* (e) {
                  const { toolId, signal } = e;
                  if (toolId !== "video_extend" || signal.aborted) {
                    return false;
                  }
                  const { loadVideoExtendConfig } = yield require
                    .e("syh")
                    .then(require.bind(require, "VS3"));
                  return (
                    !signal.aborted &&
                    !!(yield loadVideoExtendConfig(n)) &&
                    !signal.aborted
                  );
                })
                .apply(this, arguments);
            },
            loadAdapter: () =>
              r._(function* () {
                const { prepareVideoExtend } = yield require
                  .e("089")
                  .then(require.bind(require, "JN1"));
                return {
                  open: (i, a) =>
                    r._(function* () {
                      if (a.signal.aborted) {
                        return {
                          status: "cancelled",
                        };
                      }
                      if (i.type !== "video") {
                        throw Error("Video extension requires a video");
                      }
                      const r = yield prepareVideoExtend(n, i, a.signal);
                      if (a.signal.aborted) {
                        return {
                          status: "cancelled",
                        };
                      }
                      if (r.status !== "ready") {
                        return r;
                      }
                      const o = {
                        id: _.bz(),
                        reportParams: {
                          toolItemId: a.entryId,
                        },
                        type: "videoContinuation",
                        params: {
                          uri: i.vid,
                          url: i.url,
                          width: i.width,
                          height: i.height,
                          duration: i.durationSeconds,
                          coverUrl: i.coverUrl,
                        },
                      };
                      g.cQ(n, m.K).navigate(y.Du.AIGeneratedRecord, {
                        query: {
                          enter_from: a.enterFrom,
                          from_page:
                            reportPage != null
                              ? reportPage
                              : e === y.Du.Home
                                ? "create"
                                : "tools",
                          ai_feature_name: a.toolId,
                        },
                        state: {
                          from: O.HomeCreationPreset,
                          generationPreset: o,
                        },
                      });
                      return {
                        status: "navigated",
                      };
                    })(),
                };
              })(),
          },
          {
            capabilityId: "image-to-video",
            isAvailable(e) {
              return r
                ._(function* (e) {
                  const { toolId, signal } = e;
                  return toolId === "image_to_video" && !signal.aborted;
                })
                .apply(this, arguments);
            },
            loadAdapter: () =>
              Promise.resolve({
                open(t, i) {
                  if (i.signal.aborted) {
                    return Promise.resolve({
                      status: "cancelled",
                    });
                  }
                  if (t.type !== "image") {
                    return Promise.reject(
                      Error("Image to video requires an image"),
                    );
                  }
                  const r = {
                    id: _.bz(),
                    reportParams: {
                      toolItemId: i.entryId,
                    },
                    type: "video",
                    params: {
                      schemaVersion: 1,
                      referenceImages: [
                        {
                          imageUri: t.uri,
                          imageUrl: t.url,
                        },
                      ],
                    },
                  };
                  g.cQ(n, m.K).navigate(y.Du.AIGeneratedRecord, {
                    query: {
                      enter_from: i.enterFrom,
                      from_page:
                        reportPage != null
                          ? reportPage
                          : e === y.Du.Home
                            ? "create"
                            : "tools",
                      ai_feature_name: i.toolId,
                    },
                    state: {
                      from: O.HomeCreationPreset,
                      generationPreset: r,
                    },
                  });
                  return Promise.resolve({
                    status: "navigated",
                  });
                },
              }),
          },
        ]),
      ),
    );
    this.canvas.setHostRoute(e, reportPage, enterFrom);
    this.tool.setHostRoute(e, reportPage);
  }
}
export { en as b };
en = n.Cg(
  [
    n.Qj(2, l._),
    n.Qj(3, c.i),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof PageRouteSymbol === "undefined" ? Object : PageRouteSymbol,
      Object,
      l._ === undefined ? Object : l._,
      c.i === undefined ? Object : c.i,
    ]),
  ],
  en,
);
