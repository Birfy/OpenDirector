import n from "NY";
import r from "QWK";
import a from "Kt";
import o from "K8";
import s from "JSz";
import c from "xi";
import l from "tPs";
import d from "oa";
import u from "bk";
import v from "cBI";
import m from "yF";
import p from "KC";
import _ from "qN";
import y from "dR";
import h from "K6J";
import g from "fg";
import f from "fm";
import I from "b5";
import S from "iN";
import b from "WzM";
function k(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function T(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
  return t;
}
function J(e) {
  if (Array.isArray(e)) {
    return e.flatMap((e) => {
      var t = ((e) => {
        if (
          k(e) &&
          typeof e.projectId === "string" &&
          e.projectId &&
          (e.canvasSourceType === undefined ||
            (typeof e.canvasSourceType === "number" &&
              Number.isInteger(e.canvasSourceType)))
        ) {
          const publish = ((e) => {
            if (k(e) && typeof e.projectId === "string") {
              const t = e.projectId.trim();
              if (t) {
                let i;
                const bindItemId =
                  typeof e.bindItemId === "string" ? e.bindItemId.trim() : "";
                const reviewStatus =
                  (i = e.reviewStatus) === 0 || i === 1 || i === 2
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
                !k(e) ||
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
                createdAt: T(e.createdAt),
                updatedAt: T(e.updatedAt),
                isFavorite: e.isFavorite === true,
                isPinned: e.isPinned === true,
                isTemplate: e.isTemplate === true,
                cover: ((e) => {
                  if (k(e)) {
                    let t;
                    let i;
                    let n;
                    let r;
                    const a = Object.values(
                      k(e.resolutionSource) ? e.resolutionSource : {},
                    )
                      .flatMap((e) => {
                        if (!k(e) || typeof e.url !== "string" || !e.url) {
                          return [];
                        }
                        var width = T(e.width);
                        var height = T(e.height);
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
                      (t = a.find((e) => Math.max(e.width, e.height) >= 720)) !=
                      null
                        ? t
                        : a[a.length - 1];
                    const s =
                      typeof e.url === "string" && e.url ? e.url : undefined;
                    const url =
                      (i = o == null ? undefined : o.url) != null ? i : s;
                    if (url) {
                      return {
                        url,
                        width:
                          (n = o == null ? undefined : o.width) != null
                            ? n
                            : 1920,
                        height:
                          (r = o == null ? undefined : o.height) != null
                            ? r
                            : 1080,
                      };
                    }
                  }
                })(k(e.cover) ? e.cover.urlPack : undefined),
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
function j(projectIds) {
  return [...new Set(projectIds.filter(Boolean))];
}
function C(e) {
  return e.length > 0 && e.length <= 100;
}
function w(_containerService, t) {
  const i = new p.LL().build({
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  v.U(_containerService, i);
  b.GD(i);
  _.Wh(i);
  y.vo(i);
  m.P(i);
  if (t.responseCache) {
    h.U(i);
  }
  return i;
}
class L {
  get _listNetworkClient() {
    if (!this._listNetworkClientInstance) {
      this._listNetworkClientInstance = w(this._containerService, {
        responseCache: true,
      });
    }
    return this._listNetworkClientInstance;
  }
  get _mutationNetworkClient() {
    if (!this._mutationNetworkClientInstance) {
      this._mutationNetworkClientInstance = w(this._containerService, {
        responseCache: false,
      });
    }
    return this._mutationNetworkClientInstance;
  }
  listProjects(e) {
    return n
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
          const i =
            e.keyword === undefined
              ? e
              : u._(d._({}, e), {
                  keyword: e.keyword.trim(),
                });
          const n = yield g.w(i);
          const r = yield this._listNetworkClient.post(
            this._getUrl("/octo_api/v1/project/list"),
            n,
          );
          const a = g.o(r, f.Cb);
          const s = ((e) => {
            if (!k(e)) {
              return {
                ok: false,
                code: -1,
                message: "invalid list AI canvas projects response",
              };
            }
            let t;
            const i =
              typeof e.ret === "string"
                ? e.ret
                : String((t = e.ret) != null ? t : "");
            if (i !== "0") {
              const n = typeof e.errmsg === "string" ? e.errmsg : "";
              return {
                ok: false,
                code: Number(i) || -1,
                message: n || "list AI canvas projects failed",
              };
            }
            if (
              k(e.data) &&
              Array.isArray(e.data.projects) &&
              typeof e.data.hasMore === "boolean"
            ) {
              return {
                ok: true,
                value: d._(
                  {
                    projects: J(e.data.projects),
                    templates: J(e.data.templates),
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
          })(a);
          if (!s.ok) {
            return o.xz(s.code, s.message);
          }
          return o.TZ(s.value);
        } catch (error) {
          return I.r(error);
        }
      })
      .call(this);
  }
  updateProject(e) {
    return n
      ._(function* () {
        if (
          !e.projectId ||
          (e.name === undefined && e.isPinned === undefined)
        ) {
          return o.xz(-1, "invalid update AI canvas project request");
        }
        try {
          const t = yield g.w(e);
          const i = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/update"),
            t,
          );
          return this._normalizeMutationResponse(
            i,
            "update AI canvas project failed",
          );
        } catch (error) {
          return I.r(error);
        }
      })
      .call(this);
  }
  batchDeleteProjects(e) {
    return n
      ._(function* () {
        const t = j(e.projectIds);
        if (!C(t)) {
          return o.xz(-1, "invalid batch delete AI canvas projects request");
        }
        try {
          const i = yield g.w({
            projectIds: t,
          });
          const n = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/batch_delete"),
            i,
          );
          return this._normalizeMutationResponse(
            n,
            "batch delete AI canvas projects failed",
          );
        } catch (error) {
          return I.r(error);
        }
      })
      .call(this);
  }
  batchFavoriteProjects(e) {
    return n
      ._(function* () {
        const t = j(e.projectIds);
        if (!C(t) || typeof e.isFavorite !== "boolean") {
          return o.xz(-1, "invalid batch favorite AI canvas projects request");
        }
        try {
          const i = yield g.w({
            projectIds: t,
            isFavorite: e.isFavorite,
          });
          const n = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/batch_favorite"),
            i,
          );
          return this._normalizeMutationResponse(
            n,
            "batch favorite AI canvas projects failed",
          );
        } catch (error) {
          return I.r(error);
        }
      })
      .call(this);
  }
  createProjectCopy(e) {
    return n
      ._(function* () {
        if (!e.sourceProjectId || !e.targetProjectId || !e.name) {
          return o.xz(-1, "invalid copy AI canvas project request");
        }
        try {
          const t = yield g.w(e);
          const i = yield this._mutationNetworkClient.post(
            this._getUrl("/octo_api/v1/project/copy/create"),
            t,
          );
          const n = g.o(i, f.Cb);
          const r = ((e) => {
            if (!k(e)) {
              return {
                ok: false,
                code: -1,
                message: "invalid copy AI canvas project response",
              };
            }
            let t;
            const i =
              typeof e.ret === "string"
                ? e.ret
                : String((t = e.ret) != null ? t : "");
            if (i !== "0") {
              const n = typeof e.errmsg === "string" ? e.errmsg : "";
              return {
                ok: false,
                code: Number(i) || -1,
                message: n || "copy AI canvas project failed",
              };
            }
            if (!k(e.data)) {
              return {
                ok: false,
                code: -1,
                message: "invalid copy AI canvas project data",
              };
            }
            const r =
              typeof e.data.projectId === "string"
                ? e.data.projectId.trim()
                : "";
            const { draftVersion } = e.data;
            if (
              r &&
              typeof draftVersion === "number" &&
              Number.isSafeInteger(draftVersion) &&
              !(draftVersion <= 0)
            ) {
              return {
                ok: true,
                value: {
                  projectId: r,
                  draftVersion,
                },
              };
            }
            return {
              ok: false,
              code: -1,
              message: "invalid copy AI canvas project data",
            };
          })(n);
          if (!r.ok) {
            return o.xz(r.code, r.message);
          }
          return o.TZ(r.value);
        } catch (error) {
          return I.r(error);
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
      domainType: S.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._containerService = e;
    this._httpApiSettingService = t;
  }
}
L = r.Cg(
  [
    r.Qj(0, a._),
    r.Qj(1, S.r),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      a._ === undefined ? Object : a._,
      S.r === undefined ? Object : S.r,
    ]),
  ],
  L,
);
class M {
  listProjects(e) {
    return this._repository.listProjects(e);
  }
  updateProject(e) {
    return n
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const { projectId, name } = e;
        const r = yield this._repository.updateProject(e);
        if (r.ok && name !== undefined) {
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
        return r;
      })
      .call(this);
  }
  batchDeleteProjects(e) {
    return n
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const i = yield this._repository.batchDeleteProjects(e);
        if (i.ok) {
          this._aiCanvasProjectSyncService.notifyProjectsDeleted(
            e.projectIds,
            t,
          );
        }
        return i;
      })
      .call(this);
  }
  batchFavoriteProjects(e) {
    return this._repository.batchFavoriteProjects(e);
  }
  copyTemplateProject(e) {
    return n
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const i = yield this._copyProject(e, true);
        if (i.ok) {
          this._aiCanvasProjectSyncService.notifyTemplateCopied(
            e.sourceProjectId.trim(),
            i.value.projectId,
            t,
          );
        }
        return i;
      })
      .call(this);
  }
  copyProject(e) {
    return n
      ._(function* () {
        const t = this._aiCanvasProjectSyncService.captureContext();
        const i = yield this._copyProject(e, false);
        if (i.ok) {
          this._aiCanvasProjectSyncService.notifyProjectCopied(
            e.sourceProjectId.trim(),
            i.value.projectId,
            t,
          );
        }
        return i;
      })
      .call(this);
  }
  _copyProject(e, sourcePublic) {
    const sourceProjectId = e.sourceProjectId.trim();
    const n = e.name.trim();
    if (sourceProjectId && n) {
      return this._repository.createProjectCopy({
        sourceProjectId,
        targetProjectId: s.bz(),
        name: n,
        sourcePublic,
      });
    }
    return Promise.resolve(o.xz(-1, "invalid copy AI canvas project request"));
  }
  constructor(e, t) {
    this._aiCanvasProjectSyncService = t;
    this._serviceBrand = undefined;
    this._repository = e.createInstance(L);
  }
}
export { M as _ };
M = r.Cg(
  [
    r.Qj(0, a._),
    r.Qj(1, l.v),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      a._ === undefined ? Object : a._,
      l.v === undefined ? Object : l.v,
    ]),
  ],
  M,
);
