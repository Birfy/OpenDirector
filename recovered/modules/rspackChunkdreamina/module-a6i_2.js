import r from "NY";
import n from "QWK";
import i from "Kt";
import o from "K8";
import s from "JSz";
import c from "xi";
import l from "tPs";
import d from "oa";
import u from "bk";
import p from "cBI";
import m from "yF";
import h from "KC";
import v from "qN";
import g from "dR";
import f from "K6J";
import b from "fg";
import j from "fm";
import y from "b5";
import w from "iN";
import k from "WzM";
function _(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function C(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
  return t;
}
function x(e) {
  if (Array.isArray(e)) {
    return e.flatMap((e) => {
      var t = ((e) => {
        if (
          _(e) &&
          typeof e.projectId === "string" &&
          e.projectId &&
          (e.canvasSourceType === undefined ||
            (typeof e.canvasSourceType === "number" &&
              Number.isInteger(e.canvasSourceType)))
        ) {
          const publish = ((e) => {
            if (_(e) && typeof e.projectId === "string") {
              const t = e.projectId.trim();
              if (t) {
                let a;
                const bindItemId =
                  typeof e.bindItemId === "string" ? e.bindItemId.trim() : "";
                const reviewStatus =
                  (a = e.reviewStatus) === 0 || a === 1 || a === 2
                    ? e.reviewStatus
                    : undefined;
                return d._(
                  {
                    projectId: t,
                  },
                  bindItemId
                    ? {
                        bindItemId,
                      }
                    : {},
                  reviewStatus === undefined
                    ? {}
                    : {
                        reviewStatus,
                      },
                );
              }
            }
          })(e.publish);
          const permission = ((e) => {
            if (
              !(
                !_(e) ||
                ["canRead", "canWrite", "canManage", "canCopy"].some(
                  (t) => typeof e[t] !== "boolean",
                )
              )
            ) {
              return {
                canRead: e.canRead === true,
                canWrite: e.canWrite === true,
                canManage: e.canManage === true,
                canCopy: e.canCopy === true,
              };
            }
          })(e.permission);
          return d._(
            u._(
              d._(
                {
                  id: e.projectId,
                },
                e.canvasSourceType === undefined
                  ? {}
                  : {
                      canvasSourceType: e.canvasSourceType,
                    },
                typeof e.creatorUid === "string"
                  ? {
                      creatorUid: e.creatorUid,
                    }
                  : {},
                typeof e.teamId === "string"
                  ? {
                      teamId: e.teamId,
                    }
                  : {},
                permission
                  ? {
                      permission,
                    }
                  : {},
              ),
              {
                name: typeof e.name === "string" ? e.name : "",
                createdAt: C(e.createdAt),
                updatedAt: C(e.updatedAt),
                isFavorite: e.isFavorite === true,
                isPinned: e.isPinned === true,
                isTemplate: e.isTemplate === true,
                cover: ((e) => {
                  if (_(e)) {
                    let t;
                    let a;
                    let r;
                    let n;
                    const i = Object.values(
                      _(e.resolutionSource) ? e.resolutionSource : {},
                    )
                      .flatMap((e) => {
                        if (!_(e) || typeof e.url !== "string" || !e.url) {
                          return [];
                        }
                        var width = C(e.width);
                        var height = C(e.height);
                        if (width > 0 && height > 0) {
                          return [
                            {
                              url: e.url,
                              width,
                              height,
                            },
                          ];
                        }
                        return [];
                      })
                      .sort(
                        (e, t) =>
                          Math.max(e.width, e.height) -
                          Math.max(t.width, t.height),
                      );
                    const o =
                      (t = i.find((e) => Math.max(e.width, e.height) >= 720)) !=
                      null
                        ? t
                        : i[i.length - 1];
                    const s =
                      typeof e.url === "string" && e.url ? e.url : undefined;
                    const url =
                      (a = o == null ? undefined : o.url) != null ? a : s;
                    if (url) {
                      return {
                        url,
                        width:
                          (r = o == null ? undefined : o.width) != null
                            ? r
                            : 1920,
                        height:
                          (n = o == null ? undefined : o.height) != null
                            ? n
                            : 1080,
                      };
                    }
                  }
                })(_(e.cover) ? e.cover.urlPack : undefined),
              },
            ),
            publish
              ? {
                  publish,
                }
              : {},
          );
        }
      })(e);
      if (t) {
        return [t];
      }
      return [];
    });
  }
  return [];
}
function S(projectIds) {
  return [...new Set(projectIds.filter(Boolean))];
}
function R(e) {
  return e.length > 0 && e.length <= 100;
}
function N(_containerService, t) {
  const a = new h.LL().build({
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  p.U(_containerService, a);
  k.GD(a);
  v.Wh(a);
  g.vo(a);
  m.P(a);
  if (t.responseCache) {
    f.U(a);
  }
  return a;
}
class A {
  get _listNetworkClient() {
    if (!this._listNetworkClientInstance) {
      this._listNetworkClientInstance = N(this._containerService, {
        responseCache: true,
      });
    }
    return this._listNetworkClientInstance;
  }
  get _mutationNetworkClient() {
    if (!this._mutationNetworkClientInstance) {
      this._mutationNetworkClientInstance = N(this._containerService, {
        responseCache: false,
      });
    }
    return this._mutationNetworkClientInstance;
  }
  listProjects(e) {
    return r
      ._(function* () {
        const t = ((e) => {
          if (
            e.creatorUid !== undefined &&
            (e.scene !== "asset_page" ||
              !/^(0|[1-9][0-9]{0,18})$/.test(e.creatorUid) ||
              BigInt(e.creatorUid) > 0x7fffffffffffffffn)
          ) {
            return "Invalid team creator filter";
          }
          if (
            e.limit !== undefined &&
            (!Number.isInteger(e.limit) || e.limit <= 0 || e.limit > 100)
          ) {
            return "AI canvas project list limit must be between 1 and 100";
          }
          if (e.keyword !== undefined) {
            if (!e.keyword.trim()) {
              return "AI canvas project search keyword is required";
            }
            if (e.scene !== "asset_page") {
              return "AI canvas project search only supports asset page scene";
            }
          }
          if (
            e.beginTimeMs !== undefined &&
            (!Number.isFinite(e.beginTimeMs) || e.beginTimeMs < 0)
          ) {
            return "AI canvas project begin time must be a non-negative timestamp";
          }
          if (
            e.endTimeMs !== undefined &&
            (!Number.isFinite(e.endTimeMs) || e.endTimeMs < 0)
          ) {
            return "AI canvas project end time must be a non-negative timestamp";
          }
          if (
            e.beginTimeMs !== undefined &&
            e.endTimeMs !== undefined &&
            e.beginTimeMs > e.endTimeMs
          ) {
            return "AI canvas project begin time must not exceed end time";
          }
          if (
            e.scene === undefined &&
            (e.onlyFavorite === true ||
              e.beginTimeMs !== undefined ||
              e.endTimeMs !== undefined ||
              e.sortType !== undefined)
          ) {
            return "AI canvas project filters and custom sort require an explicit scene";
          }
          if (
            e.scene === "sidebar" &&
            e.sortType !== undefined &&
            e.sortType !== "pinned_at_desc_updated_at_desc"
          ) {
            return "AI canvas sidebar only supports pinned project sort";
          }
          if (
            e.scene === "asset_page" &&
            e.sortType === "pinned_at_desc_updated_at_desc"
          ) {
            return "AI canvas asset page does not support pinned project sort";
          }
        })(e);
        if (t) {
          return o.xz(-1, t);
        }
        try {
          const a =
            e.keyword === undefined
              ? e
              : u._(d._({}, e), {
                  keyword: e.keyword.trim(),
                });
          const r = yield b.w(a);
          const n = yield this._listNetworkClient.post(
            this._getUrl("/octo_api/v1/project/list"),
            r,
          );
          const i = b.o(n, j.Cb);
          const s = ((e) => {
            if (!_(e)) {
              return {
                ok: false,
                code: -1,
                message: "invalid list AI canvas projects response",
              };
            }
            let t;
            const a =
              typeof e.ret === "string"
                ? e.ret
                : String((t = e.ret) != null ? t : "");
            if (a !== "0") {
              const r = typeof e.errmsg === "string" ? e.errmsg : "";
              return {
                ok: false,
                code: Number(a) || -1,
                message: r || "list AI canvas projects failed",
              };
            }
            if (
              _(e.data) &&
              Array.isArray(e.data.projects) &&
              typeof e.data.hasMore === "boolean"
            ) {
              return {
                ok: true,
                value: d._(
                  {
                    projects: x(e.data.projects),
                    templates: x(e.data.templates),
                    cursor:
                      typeof e.data.cursor === "string" ? e.data.cursor : "",
                    hasMore: e.data.hasMore === true,
                  },
                  typeof e.logId === "string" && e.logId
                    ? {
                        logId: e.logId,
                      }
                    : {},
                ),
              };
            }
            return {
              ok: false,
              code: -1,
              message: "invalid list AI canvas projects data",
            };
          })(i);
          if (!s.ok) {
            return o.xz(s.code, s.message);
          }
          return o.TZ(s.value);
        } catch (error) {
          return y.r(error);
        }
      })
      .call(this);
  }
  updateProject(e) {
    return r
      ._(function* () {
        if (
          !e.projectId ||
          (e.name === undefined && e.isPinned === undefined)
        ) {
          return o.xz(-1, "invalid update AI canvas project request");
        }
        try {
          const t = yield b.w(e);
          const a = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/update"),
            t,
          );
          return this._normalizeMutationResponse(
            a,
            "update AI canvas project failed",
          );
        } catch (error) {
          return y.r(error);
        }
      })
      .call(this);
  }
  batchDeleteProjects(e) {
    return r
      ._(function* () {
        const t = S(e.projectIds);
        if (!R(t)) {
          return o.xz(-1, "invalid batch delete AI canvas projects request");
        }
        try {
          const a = yield b.w({
            projectIds: t,
          });
          const r = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/batch_delete"),
            a,
          );
          return this._normalizeMutationResponse(
            r,
            "batch delete AI canvas projects failed",
          );
        } catch (error) {
          return y.r(error);
        }
      })
      .call(this);
  }
  batchFavoriteProjects(e) {
    return r
      ._(function* () {
        const t = S(e.projectIds);
        if (!R(t) || typeof e.isFavorite !== "boolean") {
          return o.xz(-1, "invalid batch favorite AI canvas projects request");
        }
        try {
          const a = yield b.w({
            projectIds: t,
            isFavorite: e.isFavorite,
          });
          const r = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/batch_favorite"),
            a,
          );
          return this._normalizeMutationResponse(
            r,
            "batch favorite AI canvas projects failed",
          );
        } catch (error) {
          return y.r(error);
        }
      })
      .call(this);
  }
  createProjectCopy(e) {
    return r
      ._(function* () {
        if (!e.sourceProjectId || !e.targetProjectId || !e.name) {
          return o.xz(-1, "invalid copy AI canvas project request");
        }
        try {
          const t = yield b.w(e);
          const a = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/copy/create"),
            t,
          );
          const r = b.o(a, j.Cb);
          const n = ((e) => {
            if (!_(e)) {
              return {
                ok: false,
                code: -1,
                message: "invalid copy AI canvas project response",
              };
            }
            let t;
            const a =
              typeof e.ret === "string"
                ? e.ret
                : String((t = e.ret) != null ? t : "");
            if (a !== "0") {
              const r = typeof e.errmsg === "string" ? e.errmsg : "";
              return {
                ok: false,
                code: Number(a) || -1,
                message: r || "copy AI canvas project failed",
              };
            }
            if (!_(e.data)) {
              return {
                ok: false,
                code: -1,
                message: "invalid copy AI canvas project data",
              };
            }
            const n =
              typeof e.data.projectId === "string"
                ? e.data.projectId.trim()
                : "";
            const { draftVersion } = e.data;
            if (
              n &&
              typeof draftVersion === "number" &&
              Number.isSafeInteger(draftVersion) &&
              !(draftVersion <= 0)
            ) {
              return {
                ok: true,
                value: {
                  projectId: n,
                  draftVersion,
                },
              };
            }
            return {
              ok: false,
              code: -1,
              message: "invalid copy AI canvas project data",
            };
          })(r);
          if (!n.ok) {
            return o.xz(n.code, n.message);
          }
          return o.TZ(n.value);
        } catch (error) {
          return y.r(error);
        }
      })
      .call(this);
  }
  _normalizeMutationResponse(e, t) {
    if (e.ret !== "0") {
      return o.xz(Number(e.ret) || -1, e.errmsg || t);
    }
    return o.TZ(undefined);
  }
  _getUrl(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: w.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
A = n.Cg(
  [
    n.Qj(0, i._),
    n.Qj(1, w.r),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      i._ === undefined ? Object : i._,
      w.r === undefined ? Object : w.r,
    ]),
  ],
  A,
);
class T {
  listProjects(e) {
    return this._repository.listProjects(e);
  }
  updateProject(e) {
    return r
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const { projectId, name } = e;
        const n = yield this._repository.updateProject(e);
        if (n.ok && name !== undefined) {
          try {
            this._aiCanvasProjectSyncService.notifyProjectRenamed(
              projectId,
              name,
              t,
            );
          } catch (error) {
            c.V.error("[AICanvasDataService] failed to notify project rename", {
              projectId,
              error,
            });
          }
        }
        return n;
      })
      .call(this);
  }
  batchDeleteProjects(e) {
    return r
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const a = yield this._repository.batchDeleteProjects(e);
        if (a.ok) {
          this._aiCanvasProjectSyncService.notifyProjectsDeleted(
            e.projectIds,
            t,
          );
        }
        return a;
      })
      .call(this);
  }
  batchFavoriteProjects(e) {
    return this._repository.batchFavoriteProjects(e);
  }
  copyTemplateProject(e) {
    return r
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const a = yield this._copyProject(e, true);
        if (a.ok) {
          this._aiCanvasProjectSyncService.notifyTemplateCopied(
            e.sourceProjectId.trim(),
            a.value.projectId,
            t,
          );
        }
        return a;
      })
      .call(this);
  }
  copyProject(e) {
    return r
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const a = yield this._copyProject(e, false);
        if (a.ok) {
          this._aiCanvasProjectSyncService.notifyProjectCopied(
            e.sourceProjectId.trim(),
            a.value.projectId,
            t,
          );
        }
        return a;
      })
      .call(this);
  }
  _copyProject(e, sourcePublic) {
    const sourceProjectId = e.sourceProjectId.trim();
    const r = e.name.trim();
    if (sourceProjectId && r) {
      return this._repository.createProjectCopy({
        sourceProjectId,
        targetProjectId: s.bz(),
        name: r,
        sourcePublic,
      });
    }
    return Promise.resolve(o.xz(-1, "invalid copy AI canvas project request"));
  }
  constructor(e, t) {
    this._aiCanvasProjectSyncService = t;
    this._serviceBrand = undefined;
    this._repository = e.createInstance(A);
  }
}
export { T as _ };
T = n.Cg(
  [
    n.Qj(0, i._),
    n.Qj(1, l.v),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      i._ === undefined ? Object : i._,
      l.v === undefined ? Object : l.v,
    ]),
  ],
  T,
);
