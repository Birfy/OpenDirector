import r from "NY";
import n from "QWK";
import a from "Qey";
import o from "xU";
import s from "c6";
import c from "nss";
import l from "lj";
import d from "o7";
import u from "Kt";
import h from "Hr";
import p from "ru";
import v from "QA";
import { OM, tq } from "./module-xTI.js";
import g from "LB";
import f from "n3";
import y from "cY";
import _ from "tPs";
import b from "oa";
import w from "bk";
import S from "dw4";
import C from "K8";
import A from "sw";
import j from "fT";
const P = [];
class I extends d.jG {
  refreshIfStale() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : Date.now();
    if (this._disposed) {
      return Promise.resolve();
    }
    if (this._loadPromise) {
      return this._loadPromise;
    }
    if (
      this.status === "ready" &&
      this.lastLoadedAt !== undefined &&
      e - this.lastLoadedAt < 60000
    ) {
      return Promise.resolve();
    }
    return this._load();
  }
  reload() {
    let e;
    if (this._disposed) {
      return Promise.resolve();
    }
    if ((e = this._loadPromise) != null) {
      return e;
    }
    return this._load();
  }
  getProject(e) {
    return this.projects.find((t) => t.id === e);
  }
  isCopyingTemplate(e) {
    return this._copyPromises.has(e);
  }
  isCopyingProject(e) {
    return this._projectCopyPromises.has(e);
  }
  applyProjectSyncChange(e) {
    if (e.type === "reset") {
      return void this.reset();
    }
    if (e.type === "external-create-pending") {
      return void S.h5(() => {
        this.lastLoadedAt = undefined;
      });
    }
    const t = this.status !== "idle";
    this._requestVersion += 1;
    this._loadPromise = undefined;
    if (e.type === "project-renamed") {
      S.h5(() => {
        this.projects = this.projects.map((t) => {
          if (t.id === e.projectId) {
            return w._(b._({}, t), {
              name: e.name,
            });
          }
          return t;
        });
        this.lastLoadedAt = undefined;
      });
    } else if (e.type === "project-copied") {
      S.h5(() => {
        this.lastLoadedAt = undefined;
      });
    } else {
      const i = e.type === "template-copied" ? [e.templateId] : e.projectIds;
      S.h5(() => {
        var e = new Set(i);
        this.projects = this.projects.filter((t) => !e.has(t.id));
        this.lastLoadedAt = undefined;
      });
    }
    if (t) {
      this.reload();
    }
  }
  copyTemplate(e) {
    const t = this._copyPromises.get(e);
    if (t) {
      return t;
    }
    const i = this.getProject(e);
    if (
      this._disposed ||
      !(i == null ? undefined : i.isTemplate) ||
      this._isProjectSuppressed(e)
    ) {
      return Promise.resolve(C.xz(-1, "AI canvas template is not copyable"));
    }
    const _lifecycleVersion = this._lifecycleVersion;
    const n = this._copyTemplate(i, _lifecycleVersion);
    this._copyPromises.set(e, n);
    n.finally(() => {
      if (this._copyPromises.get(e) === n) {
        this._copyPromises.delete(e);
      }
    });
    return n;
  }
  renameProject(e, t) {
    return r
      ._(function* () {
        const i = this.getProject(e);
        const r = t.trim();
        if (
          this._disposed ||
          !i ||
          i.isTemplate ||
          !r ||
          Array.from(r).length > 50
        ) {
          return C.xz(-1, "AI canvas project is not renameable");
        }
        if (i.name === r) {
          return C.TZ(undefined);
        }
        try {
          return yield this._aiCanvasDataService.updateProject({
            projectId: e,
            name: r,
          });
        } catch (error) {
          return C.xz(
            -1,
            error instanceof Error
              ? error.message
              : "rename AI canvas project failed",
          );
        }
      })
      .call(this);
  }
  deleteProject(e) {
    return r
      ._(function* () {
        const t = this.getProject(e);
        if (this._disposed || !t || t.isTemplate) {
          return C.xz(-1, "AI canvas project is not deletable");
        }
        try {
          return yield this._aiCanvasDataService.batchDeleteProjects({
            projectIds: [e],
          });
        } catch (error) {
          return C.xz(
            -1,
            error instanceof Error
              ? error.message
              : "delete AI canvas project failed",
          );
        }
      })
      .call(this);
  }
  copyProject(e) {
    const t = this._projectCopyPromises.get(e);
    if (t) {
      return t;
    }
    const i = this.getProject(e);
    if (this._disposed || !i || i.isTemplate) {
      return Promise.resolve(C.xz(-1, "AI canvas project is not copyable"));
    }
    const _lifecycleVersion = this._lifecycleVersion;
    const n = this._copyProject(i, _lifecycleVersion);
    this._projectCopyPromises.set(e, n);
    n.finally(() => {
      if (this._projectCopyPromises.get(e) === n) {
        this._projectCopyPromises.delete(e);
      }
    });
    return n;
  }
  reset() {
    this._requestVersion += 1;
    this._lifecycleVersion += 1;
    this._loadPromise = undefined;
    this._copyPromises.clear();
    this._projectCopyPromises.clear();
    S.h5(() => {
      this.projects = P;
      this.hasMoreProjects = false;
      this.status = "idle";
      this.lastLoadedAt = undefined;
    });
  }
  dispose() {
    this._disposed = true;
    this._copyPromises.clear();
    this._projectCopyPromises.clear();
    super.dispose();
  }
  _copyProject(e, t) {
    return r
      ._(function* () {
        try {
          const i = yield this._aiCanvasDataService.copyProject({
            sourceProjectId: e.id,
            name: A.T(e.name),
          });
          if (this._disposed || t !== this._lifecycleVersion) {
            return C.xz(-1, "stale AI canvas project copy response");
          }
          return i;
        } catch (error) {
          return C.xz(
            -1,
            error instanceof Error
              ? error.message
              : "copy AI canvas project failed",
          );
        }
      })
      .call(this);
  }
  _copyTemplate(e, t) {
    return r
      ._(function* () {
        try {
          const i = yield this._aiCanvasDataService.copyTemplateProject({
            sourceProjectId: e.id,
            name: A.T(e.name),
          });
          if (this._disposed || t !== this._lifecycleVersion) {
            return C.xz(-1, "stale AI canvas template copy response");
          }
          if (!i.ok) {
            return i;
          }
          S.h5(() => {
            this.projects = this.projects.filter((t) => t.id !== e.id);
            this.lastLoadedAt = undefined;
          });
          return i;
        } catch (error) {
          return C.xz(
            -1,
            error instanceof Error
              ? error.message
              : "copy AI canvas template failed",
          );
        }
      })
      .call(this);
  }
  _load() {
    let e;
    let t;
    let i;
    const _requestVersion = this._requestVersion;
    const a = {
      limit: (e = this._options.limit) != null ? e : 3,
      scene: (t = this._options.scene) != null ? t : "sidebar",
      sortType:
        (i = this._options.sortType) != null
          ? i
          : "pinned_at_desc_updated_at_desc",
    };
    S.h5(() => {
      this.status = "loading";
    });
    var o = r
      ._(function* () {
        try {
          let e;
          let t;
          let i;
          let r;
          let o;
          let s;
          let c;
          const l = yield this._aiCanvasDataService.listProjects(a);
          if (!this._isRequestCurrent(_requestVersion)) {
            return;
          }
          if (!l.ok) {
            return void S.h5(() => {
              this.hasMoreProjects = false;
              this.status = "error";
            });
          }
          const d =
            l.value.hasMore ||
            l.value.projects.filter((e) => !!e.id && !e.isTemplate).length >
              a.limit;
          e = l.value.projects;
          t = l.value.templates;
          i = (e) => this._isProjectSuppressed(e);
          r = a.limit;
          o = [];
          s = new Set();
          (c = (e, t, r) => {
            for (var n of e) {
              if (o.length >= t) {
                return;
              }
              if (!(!n.id || s.has(n.id) || n.isTemplate !== r || i(n.id))) {
                s.add(n.id);
                o.push(n);
              }
            }
          })(e, r, false);
          c(t, Math.min(r, o.length + 2), true);
          const u = o;
          S.h5(() => {
            this.projects = u;
            this.hasMoreProjects = d;
            this.status = "ready";
            this.lastLoadedAt = Date.now();
          });
        } catch (e) {
          if (!this._isRequestCurrent(_requestVersion)) {
            return;
          }
          S.h5(() => {
            this.hasMoreProjects = false;
            this.status = "error";
          });
        }
      })
      .call(this)
      .finally(() => {
        if (this._loadPromise === o) {
          this._loadPromise = undefined;
        }
      });
    this._loadPromise = o;
    return o;
  }
  _isRequestCurrent(e) {
    return !this._disposed && e === this._requestVersion;
  }
  _isProjectSuppressed(e) {
    return this._aiCanvasProjectSyncService.isProjectSuppressed(e);
  }
  constructor(e, t, i) {
    super();
    this._options = e;
    this._aiCanvasDataService = t;
    this._aiCanvasProjectSyncService = i;
    this.projects = P;
    this.hasMoreProjects = false;
    this.status = "idle";
    this.lastLoadedAt = undefined;
    this._copyPromises = new Map();
    this._projectCopyPromises = new Map();
    this._requestVersion = 0;
    this._lifecycleVersion = 0;
    this._disposed = false;
    S.Gn(this, {
      projects: S.sH.ref,
      hasMoreProjects: S.sH,
      status: S.sH,
      lastLoadedAt: S.sH,
    });
    this._register(
      this._aiCanvasProjectSyncService.onDidChange((e) =>
        this.applyProjectSyncChange(e),
      ),
    );
  }
}
I = n.Cg(
  [
    n.Qj(1, j.d),
    n.Qj(2, _.v),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof RecentAICanvasProjectsOptions === "undefined"
        ? Object
        : RecentAICanvasProjectsOptions,
      j.d === undefined ? Object : j.d,
      _.v === undefined ? Object : _.v,
    ]),
  ],
  I,
);
class k extends d.jG {
  initialize() {
    if (!(this._initialized || this._disposed)) {
      this._initialized = true;
      this._register(
        this._accountService.onDidLogin(() => {
          var e =
            this._pendingViewAllAfterLogin !== undefined && this._canUse();
          this._resetAccountState();
          if (this._canUse()) {
            this.recentProjects.reload();
          }
          this._refreshLegacyAvailability(true);
          if (e && this._canUse()) {
            this._navigateToAllProjects();
          }
        }),
      );
      this._register(
        this._accountService.onDidLogout(() => this._resetAccountState()),
      );
      this._bindInputVisibility();
    }
  }
  activate() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    if (this._canUse()) {
      this.recentProjects.refreshIfStale();
      this._refreshLegacyAvailability(e);
    }
  }
  deactivate() {
    this._lifecycleVersion += 1;
    this._pendingViewAllAfterLogin = undefined;
  }
  dispose() {
    this._disposed = true;
    this.deactivate();
    super.dispose();
  }
  _copyAndOpen(e, t) {
    return r
      ._(function* () {
        const _lifecycleVersion = this._lifecycleVersion;
        const r = yield t
          ? this.recentProjects.copyTemplate(e)
          : this.recentProjects.copyProject(e);
        if (this._isOperationCurrent(_lifecycleVersion)) {
          if (!r.ok) {
            return void h.l.warning(v.a().networkError);
          }
          if (
            !g.H({
              projectId: r.value.projectId,
              attribution: {
                enterFrom: t ? "template" : "project_list",
                fromPage: "canvas_homepage",
              },
            })
          ) {
            h.l.warning(v.a().openProjectFailed);
          }
        }
      })
      .call(this);
  }
  _ensureInteractionLogin(e) {
    return (
      !!this._canUse() &&
      (!!this._accountService.hasLogin || (p.D(this._accountService, e), false))
    );
  }
  _navigateToAllProjects() {
    OM(this._uiConfigurationService, {
      enterFrom: "canvas_view_all",
      fromPage: "canvas_homepage",
    });
  }
  _resetAccountState() {
    this.deactivate();
    this.recentProjects.reset();
    this._options.legacyAvailability.reset();
  }
  _refreshLegacyAvailability(e) {
    if (this._canUse() && this._accountService.hasLogin) {
      if (e) {
        this._options.legacyAvailability.reload();
      } else {
        this._options.legacyAvailability.refreshIfStale();
      }
    }
  }
  _canUse() {
    return !this._disposed && this._enabled && this._options.isActive();
  }
  _isOperationCurrent(e) {
    return e === this._lifecycleVersion && this._canUse();
  }
  _syncCanvasEnabled() {
    if (!this._disposed) {
      this._enabled = this._options.isCanvasSupported();
      if (!this._enabled) {
        this.deactivate();
      }
      this._options.onEnabledChange(this._enabled);
    }
  }
  _registerWindowRefreshLifecycle() {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      this._register(o.k(window, "focus", () => this.activate(true)));
      this._register(
        o.k(document, "visibilitychange", () => {
          if (document.visibilityState === "visible") {
            this.activate(true);
          }
        }),
      );
    }
  }
  _bindInputVisibility() {
    return r
      ._(function* () {
        try {
          const e =
            yield this._modelConfigFeatureContainerService.getInstance();
          if (this._disposed) {
            return;
          }
          this._applyInputConfig(e.agenticModelConfigData);
          this._register(e.onAgenticConfigUpdated(this._applyInputConfig));
        } catch (e) {
          if (!this._disposed) {
            this._options.onInputVisibilityChange(false);
          }
        }
      })
      .call(this);
  }
  constructor(e, t, i, n, o, s, c) {
    var l;
    var d;
    super();
    l = this;
    this._options = e;
    this._containerService = t;
    this._accountService = i;
    this._aiCanvasProjectSyncService = n;
    this._commercialTeamContextService = o;
    this._uiConfigurationService = s;
    this._modelConfigFeatureContainerService = c;
    this._initialized = false;
    this._disposed = false;
    this._enabled = false;
    this._lifecycleVersion = 0;
    this.createProject = () => {
      if (
        this._ensureInteractionLogin(f.HH.CreateNew) &&
        g.H({
          attribution: {
            enterFrom: "create_new",
            fromPage: "canvas_homepage",
          },
        })
      ) {
        this._aiCanvasProjectSyncService.markExternalCreatePending();
      }
    };
    this.openProject = (e) => {
      var t = this.recentProjects.getProject(e);
      var i = (t == null ? undefined : t.isTemplate)
        ? f.HH.ClickCanvasTemplate
        : f.HH.Others;
      if (this._ensureInteractionLogin(i) && t) {
        if (!t.isTemplate) {
          return void g.H({
            projectId: e,
            attribution: {
              enterFrom: "project_list",
              fromPage: "canvas_homepage",
            },
          });
        }
        if (!this.recentProjects.isCopyingTemplate(e)) {
          this._copyAndOpen(e, true);
        }
      }
    };
    this.renameProject = (e, t) =>
      r._(function* () {
        if (!l._ensureInteractionLogin(f.HH.Others)) {
          return false;
        }
        const l__lifecycleVersion = l._lifecycleVersion;
        const r = yield l.recentProjects.renameProject(e, t);
        if (l._isOperationCurrent(l__lifecycleVersion)) {
          if (r.ok) {
            l._options.reportProjectAction("rename", e);
            return true;
          }
          h.l.warning(v.a().networkError);
          return false;
        }
        return r.ok;
      })();
    this.copyProject = (e) => {
      if (
        !(
          !this._ensureInteractionLogin(f.HH.Others) ||
          this.recentProjects.isCopyingProject(e)
        )
      ) {
        this._options.reportProjectAction("copy", e);
        this._copyAndOpen(e, false);
      }
    };
    this.deleteProject = (e) =>
      r._(function* () {
        if (!l._ensureInteractionLogin(f.HH.Others)) {
          return false;
        }
        l._options.reportProjectAction("delete", e);
        const l__lifecycleVersion = l._lifecycleVersion;
        const i = yield l.recentProjects.deleteProject(e);
        if (l._isOperationCurrent(l__lifecycleVersion)) {
          if (i.ok) {
            h.l.success(a.Ay.t("work_details_delete_success", {}, "删除成功"));
            return true;
          }
          h.l.warning(v.a().networkError);
          return false;
        }
        return i.ok;
      })();
    this.projectSettingsShow = (e) => {
      if (this._canUse()) {
        this._options.reportProjectAction("settings_show", e);
      }
    };
    this.viewAll = () => {
      if (this._canUse()) {
        if (this._accountService.hasLogin) {
          return void this._navigateToAllProjects();
        }
        this.initialize();
        var e;
        var t = {};
        this._pendingViewAllAfterLogin = t;
        if ((e = p.D(this._accountService, f.HH.Others)) != null) {
          e.then((e) => {
            if (!(e || this._pendingViewAllAfterLogin !== t)) {
              this._pendingViewAllAfterLogin = undefined;
            }
          }).catch(() => {
            if (this._pendingViewAllAfterLogin === t) {
              this._pendingViewAllAfterLogin = undefined;
            }
          });
        }
      }
    };
    this.openLegacyAssets = () => {
      if (
        this._canUse() &&
        this._accountService.hasLogin &&
        this._options.legacyAvailability.hasLegacyCanvasProjects
      ) {
        tq(this._uiConfigurationService, {
          enterFrom: "other",
          fromPage: "canvas_homepage",
        });
      }
    };
    this._applyInputConfig = (e) => {
      if (!this._disposed) {
        var t = e.data;
        this._options.onInputVisibilityChange(
          (t == null ? undefined : t.ok) === true &&
            t.value.showCanvasAgentInput === true,
        );
      }
    };
    this.recentProjects = this._register(
      this._containerService.createInstance(
        I,
        (d = e.recentProjects) != null ? d : {},
      ),
    );
    this._register(
      this._commercialTeamContextService.onDidChange((e) => {
        var { currentTeamId, previousTeamId } = e;
        if (currentTeamId !== previousTeamId) {
          this.deactivate();
        }
        this._syncCanvasEnabled();
      }),
    );
    this._registerWindowRefreshLifecycle();
    this._syncCanvasEnabled();
  }
}
export { k as u };
k = n.Cg(
  [
    n.Qj(1, u._),
    n.Qj(2, y.i),
    n.Qj(3, _.v),
    n.Qj(4, s.f),
    n.Qj(5, l.K),
    n.Qj(6, c.Y),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      typeof CanvasEntryOptions === "undefined" ? Object : CanvasEntryOptions,
      u._ === undefined ? Object : u._,
      y.i === undefined ? Object : y.i,
      _.v === undefined ? Object : _.v,
      s.f === undefined ? Object : s.f,
      l.K === undefined ? Object : l.K,
      typeof ModelConfigFeatureContainerService === "undefined"
        ? Object
        : ModelConfigFeatureContainerService,
    ]),
  ],
  k,
);
