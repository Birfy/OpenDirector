import r from "NY";
import n from "oa";
import a from "bk";
import o from "QWK";
import s from "dw4";
import l from "oe";
import d from "lj";
import c from "o7";
import u from "JSz";
import { T } from "./module-sw_3.js";
import v from "JEZ";
import p from "HX";
import { j } from "./module-FwO.js";
import { H } from "./module-LB.js";
import _ from "n3";
import f from "cY";
import y from "fT";
import { O } from "./module-jpM.js";
import S from "Z7I";
function I(e, t, i, r) {
  if (t !== undefined && e < t) {
    throw Error("".concat(r, "不能小于 ").concat(t));
  }
  if (i !== undefined && e > i) {
    throw Error("".concat(r, "不能大于 ").concat(i));
  }
}
class w extends c.jG {
  setHostRoute(e) {
    const t =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : "create";
    const i = arguments.length > 2 ? arguments[2] : undefined;
    this._hostRoute = e;
    this._reportPage = t;
    this._canvasEnterFrom =
      i != null ? i : t === "all_tools" ? "all_tools_click" : "ai_function";
  }
  get enabled() {
    return this._isCanvasEnabled();
  }
  get isCopyingTemplate() {
    return this._templatePhase !== "idle";
  }
  get isCancellingTemplate() {
    return this._templatePhase === "cancelling";
  }
  get preparedMedia() {
    let e;
    const { selection } = this._sourceManager;
    if (
      selection &&
      selection.selectionId === ((e = this._session) == null ? undefined : e.id)
    ) {
      return selection.media;
    }
    return [];
  }
  get canConfirm() {
    const _session = this._session;
    const { selection } = this._sourceManager;
    const selectedTool = this.selectedTool;
    return (
      !!_session &&
      !!selectedTool &&
      (selection == null ? undefined : selection.selectionId) === _session.id &&
      !selection.preparing &&
      !!this._isCurrent(_session) &&
      !!this._accountService.hasLogin &&
      _session.accountId === this._currentAccountId() &&
      selection.media.length > 0 &&
      this._sourceManager.isSelectionCountValid
    );
  }
  reserveTarget(selectionId) {
    const _session = this._session;
    if (
      (_session == null ? undefined : _session.id) === selectionId &&
      this.selectedTool &&
      this._isCurrent(_session)
    ) {
      this.releaseTarget(this._targetReservation);
      const i = {
        selectionId,
        target: v.y_(),
      };
      this._targetReservation = i;
      return i;
    }
  }
  releaseTarget(e) {
    let t;
    if (e) {
      if ((t = e.target) != null) {
        t.release();
      }
      if (this._targetReservation === e) {
        this._targetReservation = undefined;
      }
    }
  }
  open(e) {
    return r
      ._(function* () {
        if (!this._session && !this.isCopyingTemplate && this._canUseHome()) {
          const t = {
            id: u.bz(),
            controller: new AbortController(),
          };
          this._session = t;
          const i = a._(n._({}, e), {
            intent: n._({}, e.intent),
            inputRules: n._({}, e.inputRules),
          });
          s.h5(() => {
            this.selectedTool = i;
            this.error = undefined;
          });
          try {
            const r = yield j(this._accountService, {
              source: _.HH.AiFeature,
              signal: t.controller.signal,
            });
            if (!this._isCurrent(t)) {
              return;
            }
            if (r.status === "cancelled") {
              return void this.cancel();
            }
            if (r.status !== "authenticated" || !this._currentAccountId()) {
              return void this._setError("登录失败，请关闭弹窗后重试");
            }
            t.accountId = this._currentAccountId();
            this._startSelection(t, i);
          } catch (e) {
            if (this._isCurrent(t)) {
              this._setError("暂时无法准备素材，请关闭弹窗后重试");
            }
          }
        }
      })
      .call(this);
  }
  copyAndOpenTemplate(e, t, i) {
    return r
      ._(function* (sourceProjectId, t, i) {
        const r =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : this._canvasEnterFrom;
        if (this._session || this.isCopyingTemplate) {
          return "busy";
        }
        if (!this._canUseHome()) {
          return "cancelled";
        }
        const n = {
          id: u.bz(),
          controller: new AbortController(),
        };
        this._session = n;
        s.h5(() => {
          this._templatePhase = "waiting-login";
          this.error = undefined;
        });
        try {
          let a;
          const o = yield j(this._accountService, {
            source: _.HH.ClickCanvasTemplate,
            signal: n.controller.signal,
          });
          if (!this._isCurrent(n) || o.status === "cancelled") {
            return "cancelled";
          }
          const accountId = this._currentAccountId();
          if (
            o.status !== "authenticated" ||
            !this._accountService.hasLogin ||
            !accountId
          ) {
            return "failed";
          }
          n.accountId = accountId;
          const d = this._pendingTemplateProject;
          if (
            (d == null ? undefined : d.sourceProjectId) === sourceProjectId &&
            d.accountId === accountId
          ) {
            if (this._openTemplateProject(d.projectId, i, r)) {
              this._pendingTemplateProject = undefined;
              return "opened";
            }
            return "failed";
          }
          s.h5(() => {
            this._templatePhase = "copying";
          });
          try {
            a = yield this._aiCanvasDataService.copyTemplateProject({
              sourceProjectId,
              name: T(t),
            });
          } finally {
            s.h5(() => {
              this._templatePhase = this._session === n ? "opening" : "idle";
            });
          }
          if (
            !this._isCurrent(n) ||
            !this._accountService.hasLogin ||
            n.accountId !== this._currentAccountId()
          ) {
            return "cancelled";
          }
          if (!a.ok) {
            return "failed";
          }
          if (this._openTemplateProject(a.value.projectId, i, r)) {
            return "opened";
          }
          this._pendingTemplateProject = {
            sourceProjectId,
            projectId: a.value.projectId,
            accountId,
          };
          return "failed";
        } catch (e) {
          if (this._isCurrent(n)) {
            return "failed";
          }
          return "cancelled";
        } finally {
          if (this._session === n) {
            this.cancel();
          }
        }
      })
      .apply(this, arguments);
  }
  confirm(e, t) {
    let i;
    let r;
    const _session = this._session;
    if (
      !_session ||
      !this.selectedTool ||
      (e !== undefined && e !== _session.id) ||
      (t !== undefined &&
        (t.selectionId !== _session.id || this._targetReservation !== t))
    ) {
      return void this.releaseTarget(t);
    }
    if (
      !this._isCurrent(_session) ||
      !this._accountService.hasLogin ||
      _session.accountId !== this._currentAccountId()
    ) {
      return void this.cancel();
    }
    if (!this.canConfirm) {
      return void this.releaseTarget(t);
    }
    const targetReservation = t == null ? undefined : t.target;
    const s = O({
      sources: [...this.preparedMedia],
      intent: this.selectedTool.intent,
      accountId: (i = _session.accountId) != null ? i : "",
      title: this.selectedTool.title,
      toolItemId: this.selectedTool.id,
      url: this.selectedTool.url,
      signal: _session.controller.signal,
      targetReservation,
      fallbackToCurrentTab: e !== undefined,
      attribution: n._(
        {
          enterFrom: this._canvasEnterFrom,
        },
        this._reportPage === "all_tools"
          ? {
              fromPage: this._reportPage,
            }
          : {},
      ),
    });
    if (this._targetReservation === t) {
      this._targetReservation = undefined;
    }
    if (s.status !== "opened") {
      if (!(t == null || (r = t.target) == null)) {
        r.release();
      }
    }
    if (s.status === "opened") {
      this._restartSelection(_session);
    } else if (s.status === "cancelled") {
      this.cancel();
    } else if (s.status === "invalid" && s.reason === "invalid-target") {
      this._setError("画布入口地址不可用，请关闭后重试");
    } else {
      this._setError(
        s.status === "invalid"
          ? "素材或工具配置不符合画布要求，请重新选择"
          : "未能打开画布，请允许浏览器弹出窗口后重试",
      );
    }
  }
  _startSelection(e, t) {
    let i;
    let r;
    let a;
    this._sourceManager.startBatchSelection({
      selectionId: e.id,
      signal: e.controller.signal,
      policy:
        ((a = n._({}, t.inputRules)),
        {
          allowedMediaTypes: [t.mediaType],
          validateFile(e) {
            I(e.size / S.o, a.minSizeMB, a.maxSizeMB, "文件大小（MB）");
          },
          validateMetadata(e) {
            I(e.width, a.minWidth, a.maxWidth, "素材宽度（像素）");
            I(e.height, a.minHeight, a.maxHeight, "素材高度（像素）");
            if (e.type === "video") {
              I(
                e.durationSeconds,
                a.minDurationSeconds,
                a.maxDurationSeconds,
                "视频时长（秒）",
              );
            }
          },
        }),
      minCount: (i = t.inputRules) == null ? undefined : i.minCount,
      maxCount: (r = t.inputRules) == null ? undefined : r.maxCount,
    });
  }
  _restartSelection(e) {
    const selectedTool = this.selectedTool;
    if (this._session === e && selectedTool) {
      if (
        !this._isCurrent(e) ||
        !this._accountService.hasLogin ||
        e.accountId !== this._currentAccountId()
      ) {
        return void this.cancel();
      }
      const i = {
        id: u.bz(),
        controller: new AbortController(),
        accountId: e.accountId,
      };
      this._session = i;
      this._sourceManager.cancel(e.id);
      e.controller.abort();
      if (this._isCurrent(i)) {
        s.h5(() => {
          this.error = undefined;
        });
        try {
          this._startSelection(i, selectedTool);
        } catch (e) {
          if (this._isCurrent(i)) {
            this._setError("暂时无法准备素材，请关闭弹窗后重试");
          }
        }
      }
    }
  }
  invalidateContext() {
    this._pendingTemplateProject = undefined;
    this.cancel();
  }
  cancel() {
    const _session = this._session;
    const t = this._templatePhase === "copying" || this.isCancellingTemplate;
    this.releaseTarget(this._targetReservation);
    this._session = undefined;
    if (_session != null) {
      _session.controller.abort();
    }
    if (_session) {
      this._sourceManager.cancel(_session.id);
    }
    s.h5(() => {
      this.selectedTool = undefined;
      this.error = undefined;
      this._templatePhase = t ? "cancelling" : "idle";
    });
  }
  dispose() {
    this._disposed = true;
    this._pendingTemplateProject = undefined;
    this.cancel();
    super.dispose();
  }
  _openTemplateProject(projectId, tool_item_id, enterFrom) {
    try {
      return H(
        a._(
          n._(
            {
              projectId,
            },
            (tool_item_id == null ? undefined : tool_item_id.trim())
              ? {
                  query: new URLSearchParams({
                    tool_item_id,
                  }),
                }
              : {},
          ),
          {
            attribution: n._(
              {
                enterFrom,
              },
              this._reportPage === "all_tools"
                ? {
                    fromPage: this._reportPage,
                  }
                : {},
            ),
          },
        ),
      );
    } catch (e) {
      return false;
    }
  }
  _isCurrent(e) {
    return (
      this._session === e && !e.controller.signal.aborted && this._canUseHome()
    );
  }
  _canUseHome() {
    let e;
    let t;
    return (
      !this._disposed &&
      this._pageActive &&
      this.enabled &&
      ((t = this._uiConfigurationService.getRouteConfigByPath(
        (e = this._uiConfigurationService.currentRoutePath) != null ? e : "",
      )) == null
        ? undefined
        : t.id) === this._hostRoute
    );
  }
  _currentAccountId() {
    let e;
    let t;
    let i;
    if (
      (e =
        (i = this._accountService.userProfile) == null || (t = i.uid) == null
          ? undefined
          : t.trim()) != null
    ) {
      return e;
    }
    return "";
  }
  _setError(e) {
    s.h5(() => {
      this.error = e;
    });
  }
  constructor(e, t, i, r, n) {
    super();
    this._sourceManager = e;
    this._isCanvasEnabled = t;
    this._aiCanvasDataService = i;
    this._accountService = r;
    this._uiConfigurationService = n;
    this.selectedTool = undefined;
    this.error = undefined;
    this._templatePhase = "idle";
    this._pageActive = true;
    this._hostRoute = p.Du.Home;
    this._reportPage = "create";
    this._canvasEnterFrom = "ai_function";
    this._disposed = false;
    s.Gn(this, {
      selectedTool: s.sH.ref,
      error: s.sH,
      _templatePhase: s.sH,
    });
    this._register(
      this._uiConfigurationService.onWouldRouteChange(() => this.cancel()),
    );
    this._register(
      this._uiConfigurationService.onKeepAliveChange((e) => {
        var { routeId, status } = e;
        if (routeId === this._hostRoute) {
          this._pageActive = status === l.V.Activated;
          if (!this._pageActive) {
            this.cancel();
          }
        }
      }),
    );
    this._register(
      this._accountService.onDidLogout(() => {
        this._pendingTemplateProject = undefined;
        this.cancel();
      }),
    );
    this._register(
      this._accountService.onDidLogin(() => {
        var e;
        if (
          this._pendingTemplateProject &&
          this._pendingTemplateProject.accountId !== this._currentAccountId()
        ) {
          this._pendingTemplateProject = undefined;
        }
        if (
          ((e = this._session) == null ? undefined : e.accountId) &&
          this._session.accountId !== this._currentAccountId()
        ) {
          this.cancel();
        }
      }),
    );
  }
}
export { w as c };
w = o.Cg(
  [
    o.Qj(2, y.d),
    o.Qj(3, f.i),
    o.Qj(4, d.K),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof HomeToolSourceManager === "undefined"
        ? Object
        : HomeToolSourceManager,
      Function,
      y.d === undefined ? Object : y.d,
      f.i === undefined ? Object : f.i,
      d.K === undefined ? Object : d.K,
    ]),
  ],
  w,
);
