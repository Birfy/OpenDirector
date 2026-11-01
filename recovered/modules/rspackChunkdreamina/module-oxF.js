import s from "mN";
import c from "bT";
import l from "Qey";
import d from "Kpt";
import u from "asr";
import h from "hUS";
import p from "Egb";
import v from "HX";
import m from "y7X";
import g from "mNH";
import f from "NY";
import y from "oa";
import _ from "bk";
import b from "QWK";
import w from "z8";
import S from "cO";
import C from "f8T";
import A from "xU";
import j from "aYe";
import P from "oe";
import I from "lj";
import k from "wF";
import E from "M8X";
import R from "UN";
import T from "puv";
import x from "Kt";
import M from "YC";
import N from "Hr";
import L from "iv";
import F from "rL";
import { h as h_1 } from "./module-vUt.js";
import { m as m_1 } from "./module-Hny.js";
import U from "mo6";
import * as W from "./module-swX_2.js";
import H from "ru";
import B from "X8";
import { X as X_1 } from "./module-AS4.js";
import K from "HNM";
import { P as P_1 } from "./module-PwE.js";
import "yS";
import Q from "gL";
import J from "dw4";
import Z from "bE";
import G from "K8";
import X from "xi";
import * as Y from "./module-S7c.js";
import * as ee from "./module-sA_2.js";
import et from "c5";
import { $_ } from "./module-RCIu.js";
import er from "TL";
import en from "n3";
import ej from "Ke";
import { B as B_1 } from "./module-HT.js";
import eI from "du";
import ek from "tk";
import { $ } from "./module-iu.js";
import eR from "q5";
import eT from "cY";
import ex from "O8m";
import { u as u_1 } from "./module-AwQ.js";
import eN from "Jw";
import eL from "UUK";
import { W as W_1 } from "./module-b06.js";
import eO from "o7";
import e$ from "QA";
import { xb } from "./module-VM.js";
import { a as a_1 } from "./module-SfM.js";
import eV from "H9V";
import { s as s_1 } from "./module-lx_2.js";
import eB from "fSnZ";
import ez from "zS";
import eK from "ED";
import eq from "sl";
import eQ from "gu";
import { H as H_1 } from "./module-oAx.js";
import eZ from "IH";
import eG from "z7R";
import eX from "TK";
import eY from "T7";
import { HP, IU, Jt, hZ, y$, yH } from "./module-Se3.js";
import { Mr, RA, Xl } from "./module-K8b.js";
import "Vx";
import e6 from "Ix";
import e4 from "pr";
import e3 from "qa";
import e7 from "SU";
import te from "kF";
import tt from "Dm";
import ti from "xL";
import tu from "X5";
import th from "VPK";
import * as tp from "./module-J9o.js";
import { G as G_1 } from "./module-YG.js";
import tm from "Fd";
import tg from "ML3";
import tb from "tic";
import { O } from "./module-CS.js";
import tS from "PC";
import { w as w_1 } from "./module-I9_2.js";
import tO from "./module-kBm_2.js";
import t$ from "K9";
import tq from "zuE";
import tZ from "vd4";
import { BD } from "./module-TJ_2.js";
import tY from "Ri3";
import { d as d_1 } from "./module-YBu.js";
import t1 from "wLW";
import t2 from "rt";
import t5 from "jI";
import t6 from "sV";
export { t as RecommendationCapsule } from "E6";
let r;
let n;
let a;
let D = false;
function V() {
  if (!(typeof window === "undefined")) {
    if (D) {
      return r;
    }
    D = true;
    const e = new URLSearchParams(window.location.search).get("type");
    const t = window._libra_server_abtest;
    const i = t == null ? undefined : t[W.sc];
    const n =
      typeof i === "object" && i !== null && "variant" in i
        ? W.X8(i.variant)
        : undefined;
    if (n) {
      try {
        m_1();
      } catch (e) {}
      const a = U.hK({
        isAudioGeneratorDisabled: (F.bp.GENERATE_AUDIO, false),
        isDigitalHumanGeneratorDisabled: (F.bp.DREAMINA_LIP_SYNC, false),
        isVideoGeneratorDisabled: (F.bp.GENERATE_VIDEO, false),
      })
        .filter((e) => !e.disabled)
        .map((e) => e.value);
      return (r = W.rQ(n, a, e, h_1(a)));
    }
  }
}
const ea = new Set(["/ai-tool/home", "/ai-tool/generate"]);
function eo(hasLogin, pathname) {
  let i;
  return (
    hasLogin &&
    ((i =
      pathname.length > 1
        ? pathname.replace(RegExp("\\/+$", "u"), "")
        : pathname),
    ea.has(i))
  );
}
function es(e) {
  try {
    const t = new URL(e);
    const i = t.hostname.replace(/^\[|\]$/g, "");
    if (
      t.protocol !== "http:" ||
      (i !== "127.0.0.1" && i !== "localhost" && i !== "::1")
    ) {
      return;
    }
    return t;
  } catch (e) {
    return;
  }
}
const ec = new Set(["blender", "maya"]);
const el = "thirdparty_id";
const ed = "third_party_id";
const eu = ["loopback-network", "local-network-access"];
const eh = new Set();
const ep = new Map();
let ev = false;
class em extends Error {
  constructor(e, t, i) {
    super(e);
    this.url = t;
    this.requestError = i;
    this.name = "DccLocalBridgeRequestError";
  }
}
class eg extends Error {
  constructor(e) {
    super("DCC import timed out while waiting for ".concat(e));
    this.stage = e;
    this.name = "DccImportTimeoutError";
  }
}
function ef(e, t, i) {
  return f._(function* () {
    let r;
    const n = new Promise((resolve, reject) => {
      r = setTimeout(() => reject(new eg(t)), i);
    });
    try {
      return yield Promise.race([e, n]);
    } finally {
      if (r !== undefined) {
        clearTimeout(r);
      }
    }
  })();
}
function ey() {
  if (typeof window !== "undefined") {
    return new URLSearchParams(window.location.search);
  }
}
function e_() {
  let e;
  const t = ey();
  if (t) {
    const i = t.get("channel");
    if (typeof i === "string" && ec.has(i)) {
      const thirdPartyId = (e = t.get(el)) != null ? e : t.get(ed);
      if (thirdPartyId) {
        return {
          thirdPartyId,
          pluginSource: i,
        };
      }
    }
  }
}
let eb = e_();
function ew(e) {
  return f._(function* () {
    try {
      return yield fetch(e.toString(), {
        targetAddressSpace: "loopback",
      });
    } catch (error) {
      throw new em("local bridge request failed", e, error);
    }
  })();
}
function eS(e, t) {
  return f._(function* () {
    const i = E.cQ(e, et.O);
    yield ef(i.getInstance(), "generator", t);
  })();
}
function eC(e) {
  if (e instanceof eg) {
    if (e.stage === "reference") {
      return "视频处理超时，请重试";
    }
    return "生成页准备超时，请刷新页面后重试";
  }
  if (e instanceof em) {
    return "无法连接 Blender，请确认插件仍在运行后重试";
  }
  if (e instanceof Error && e.message) {
    if (
      e.message.includes("thirdparty_id") ||
      e.message.includes("resource_info") ||
      e.message.includes("local bridge URL")
    ) {
      return "上传任务无效，请回到 Blender 重试";
    }
    if (e.message.includes("video resource")) {
      return "插件返回的文件不是可用视频，请重新选择视频后重试";
    }
    if (RegExp("[\\u3400-\\u9fff]", "u").test(e.message)) {
      return e.message.slice(0, 2000);
    }
    return "上传失败，请重试";
  }
  return "上传失败，请重试";
}
function eA(e, t) {
  return f._(function* () {
    const i =
      (r = t.transportId) != null
        ? r
        : "".concat(t.pluginSource, ":").concat(t.thirdPartyId);
    if (!eh.has(i)) {
      var r;
      const n = ep.get(i);
      if (n) {
        return void (yield n);
      }
      const a = f
        ._(function* () {
          let i;
          let r;
          const n = ((e) => {
            const t = e
              .replace(/-/g, "+")
              .replace(/_/g, "/")
              .padEnd(4 * Math.ceil(e.length / 4), "=");
            try {
              const i = globalThis.atob(t);
              const r = Uint8Array.from(i, (e) => e.charCodeAt(0));
              return new TextDecoder().decode(r);
            } catch (e) {
              return;
            }
          })(t.thirdPartyId);
          if (!n) {
            throw Error("thirdparty_id is not valid base64");
          }
          const a = es(n);
          if (!a) {
            throw Error("thirdparty_id does not point to a local bridge URL");
          }
          yield f._(function* () {
            const t = E.cQ(e, er.S);
            const i = yield ef(t.getInstance(), "generator", 20000);
            yield ef(i.waitForLoggedConfigsReady(), "generator", 20000);
            if (
              !(yield ef(
                i.fetchVideoModelConfig({
                  needRefresh: true,
                }),
                "generator",
                20000,
              )).ok
            ) {
              throw Error("video model config refresh failed");
            }
            if (!ee.x(i)) {
              throw Error(
                l.Ay.t(
                  "web_clay_renderer_dcc_import_seedance_25_not_supported",
                  {},
                  "暂不支持 seedance 2.5 模型",
                ),
              );
            }
          })();
          const o = yield f._(function* () {
            let e;
            const t = yield ew(a);
            if (!t.ok) {
              throw new em(
                "resource_info request failed: ".concat(t.status),
                a,
              );
            }
            try {
              e = yield t.json();
            } catch (error) {
              throw new em(
                "resource_info response is not valid JSON",
                a,
                error,
              );
            }
            if (!e || typeof e !== "object") {
              throw Error("resource_info response is not an object");
            }
            const { file_url } = e;
            if (typeof file_url !== "string") {
              throw Error("resource_info.file_url is missing");
            }
            const fileUrl = es(file_url);
            if (!fileUrl) {
              throw Error("resource_info.file_url is not a local bridge URL");
            }
            return {
              fileUrl,
            };
          })();
          const s = yield (
            ((i = o.fileUrl),
            f._(function* () {
              let e;
              const t = yield ew(i);
              if (!t.ok) {
                throw new em("file request failed: ".concat(t.status), i);
              }
              const r = yield t.blob();
              const type =
                ((e = t.headers.get("content-type")) == null
                  ? undefined
                  : e.split(";")[0]) ||
                r.type ||
                "video/mp4";
              return new File(
                [r],
                ((e) => {
                  let t;
                  let i;
                  let r;
                  let n;
                  const a =
                    (t = e.headers.get("content-disposition")) != null ? t : "";
                  const o =
                    (r = a.match(/filename\*=UTF-8''([^;]+)/i)) == null
                      ? undefined
                      : r[1];
                  if (o) {
                    try {
                      return decodeURIComponent(o);
                    } catch (e) {
                      return o;
                    }
                  }
                  if (
                    (i =
                      (n = a.match(/filename="?([^";]+)"?/i)) == null
                        ? undefined
                        : n[1]) != null
                  ) {
                    return i;
                  }
                  return "dcc-render.mp4";
                })(t),
                {
                  type,
                },
              );
            })())
          );
          yield (
            ((r = t.pluginSource),
            f._(function* () {
              if (!s.type.startsWith("video/")) {
                throw Error("local bridge file is not a video resource");
              }
              let t;
              let i;
              const n = E.cQ(e, et.O);
              const a = yield ef(n.getInstance(), "generator", 20000);
              const { videoGeneratorManager } = a;
              a.contentGeneratorManager.setContentGeneratorType("video");
              yield videoGeneratorManager.featureManager.migrateToFeature(
                "omniReference",
              );
              yield f._(function* () {
                const { videoGeneratorManager } = a;
                yield J.z7(
                  () =>
                    !videoGeneratorManager.metadata.isModelListLoading &&
                    videoGeneratorManager.metadata.models.some(
                      (e) => e.key === ee.Q,
                    ),
                  {
                    timeout: 20000,
                  },
                );
                if (videoGeneratorManager.data.modelKey !== ee.Q) {
                  yield videoGeneratorManager.modelManager.setModel(ee.Q);
                }
              })();
              videoGeneratorManager.reportManager.setResourceReportParams({
                pluginSource: r,
              });
              yield ef(
                videoGeneratorManager.importResourcesFromLocal(
                  [s],
                  (e) => {
                    var [r] = e;
                    return f._(function* () {
                      if (!r || r.type !== "video") {
                        i = "local bridge file is not a video resource";
                        return G.xz(-1, i);
                      }
                      const e =
                        yield videoGeneratorManager.omniReferenceManager.addReferenceResources(
                          [r],
                        );
                      if (e.ok) {
                        yield J.z7(
                          () =>
                            videoGeneratorManager.data.references.some(
                              (e) => e.id === r.id,
                            ),
                          {
                            timeout: 20000,
                          },
                        );
                        if (yield r.resolveUri()) {
                          t = r.id;
                          return G.nj();
                        }
                        i = "local bridge file upload failed";
                        return G.xz(-1, i);
                      }
                      i = e.msg;
                      return e;
                    })();
                  },
                  {
                    acceptedFileTypes:
                      videoGeneratorManager.metadata.acceptedVideoFileTypes,
                    reportParams: {
                      importMaterialParams: {
                        pluginSource: r,
                        actionType: "click",
                      },
                    },
                  },
                ),
                "reference",
                1800000,
              );
              if (!t) {
                throw Error(i != null ? i : "local bridge file upload failed");
              }
              $_(t);
              a.contentGeneratorManager.activateContentGenerator();
            })())
          );
          return true;
        })()
        .then(() => {
          eh.add(i);
        });
      ep.set(i, a);
      try {
        yield a;
      } finally {
        ep.delete(i);
      }
    }
  })();
}
class eD extends eO.jG {
  open(e, t) {
    if (this._disposed) {
      return Promise.resolve();
    }
    if (e.action.type === "canvas_template" && this._templatePending) {
      return this._templatePending;
    }
    if (this._pending) {
      return this._pending;
    }
    let i;
    let r;
    const n =
      (r = this._ui.getRouteConfigByPath(
        (i = this._ui.currentRoutePath) != null ? i : "",
      )) == null
        ? undefined
        : r.id;
    this._hostRoute = Object.values(v.Du).find((e) => e === n);
    if (!this._hostRoute) {
      N.l.warning(l.Ay.t("fail_retry"));
      return Promise.resolve();
    }
    const a = this._open(e, this._hostRoute, this._controller.signal, t);
    this._pending = a;
    if (e.action.type === "canvas_template") {
      this._templatePending = a;
    }
    a.finally(() => {
      if (this._pending === a) {
        this._pending = undefined;
      }
      if (this._templatePending === a) {
        this._templatePending = undefined;
      }
    });
    return a;
  }
  _open(e, t, r, n) {
    return f
      ._(function* () {
        try {
          const { action } = e;
          if (
            e.titleKey &&
            (n == null ? undefined : n.reportEntryClick) !== false
          ) {
            this._container
              .createInstance(a_1, {
                functionName: e.titleKey,
                toolItemId: e.id,
              })
              .report();
          }
          if (
            action.type === "generation" ||
            action.type === "open_generator"
          ) {
            var o;
            const { GenerationEntryManager } = yield require
              .e("x0w")
              .then(require.bind(require, "ILG"));
            if (r.aborted) {
              return;
            }
            if (this._generation == null) {
              this._generation = this._container.createInstance(
                GenerationEntryManager,
              );
            }
            const c = yield this._generation.openPreset(action, e.id, n);
            if (c === "failed") {
              N.l.warning(l.Ay.t("fail_retry"));
            }
            return;
          }
          if (action.type !== "canvas_template") {
            return;
          }
          if (!L.Wz()) {
            return void N.l.warning(l.Ay.t("fail_retry"));
          }
          xb(this._container, {
            projectId: action.templateProjectId,
            name: e.title,
          });
          const { CanvasTemplateEntrySession } = yield require
            .e("kvj")
            .then(require.bind(require, "vu"));
          if (r.aborted) {
            return;
          }
          if (!this._template) {
            const u = yield CanvasTemplateEntrySession.create(
              this._container,
              t,
            );
            if (r.aborted) {
              return void u.dispose();
            }
            this._template = u;
          }
          const h = yield this._template.manager.copyAndOpenTemplate(
            action.templateProjectId,
            e.title,
            e.id,
            (o = n == null ? undefined : n.enterFrom) != null
              ? o
              : (n == null ? undefined : n.reportPage) === "all_tools"
                ? "all_tools_click"
                : "ai_function",
          );
          if (!(h !== "failed" || r.aborted)) {
            N.l.warning(e$.a().openProjectFailed);
          }
        } catch (e) {
          if (!r.aborted) {
            N.l.warning(l.Ay.t("fail_retry"));
          }
        }
      })
      .call(this);
  }
  cancel() {
    let e;
    let t;
    this._controller.abort();
    this._controller = new AbortController();
    if ((e = this._generation) != null) {
      e.dispose();
    }
    this._generation = undefined;
    if ((t = this._template) != null) {
      t.dispose();
    }
    this._template = undefined;
    this._pending = undefined;
  }
  dispose() {
    this._disposed = true;
    this.cancel();
    super.dispose();
  }
  constructor(e, t) {
    super();
    this._container = e;
    this._ui = t;
    this._controller = new AbortController();
    this._disposed = false;
    this._register(t.onWouldRouteChange(() => this.cancel()));
    this._register(
      t.onKeepAliveChange((e) => {
        var { routeId, status } = e;
        if (routeId === this._hostRoute && status === P.V.InActivated) {
          this.cancel();
        }
      }),
    );
  }
}
eD = b.Cg(
  [
    b.Qj(0, x._),
    b.Qj(1, I.K),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      x._ === undefined ? Object : x._,
      I.K === undefined ? Object : I.K,
    ]),
  ],
  eD,
);
const e1 = y$("video-cache", "videos");
class e2 {
  static getInstance() {
    if (!e2.instance) {
      e2.instance = new e2();
    }
    return e2.instance;
  }
  getVideo(e) {
    return f
      ._(function* () {
        const { cacheKey, url, retry = 3, report } = e;
        const a = this.blobUrlMap.get(cacheKey);
        if (a) {
          if (report != null) {
            report({
              action: "video_load",
              url,
              success: true,
              errorCode: 20001,
              error: "",
              cost: 0,
              retry: 0,
            });
          }
          return {
            success: true,
            blobUrl: a,
          };
        }
        try {
          c = yield Jt(cacheKey, e1);
        } catch (error) {
          console.warn("get video from idb error", error);
        }
        if (c && c instanceof Blob) {
          const o = URL.createObjectURL(c);
          this.blobUrlMap.set(cacheKey, o);
          if (report != null) {
            report({
              action: "video_load",
              url,
              success: true,
              errorCode: 20002,
              error: "",
              cost: 0,
              retry: 0,
            });
          }
          return {
            success: true,
            blobUrl: o,
          };
        }
        for (let retry_1 = 0; retry_1 <= retry;) {
          try {
            var c;
            let l;
            let d;
            const u = performance.now();
            const h = yield fetch(url);
            const cost = performance.now() - u;
            const traceId =
              (l = h.headers.get("x-tt-trace-id")) != null ? l : "";
            const logId = (d = h.headers.get("x-tt-logid")) != null ? d : "";
            if (!h.ok) {
              if (report != null) {
                report({
                  action: "video_load",
                  url,
                  success: false,
                  errorCode: 10002,
                  error: "Failed to fetch video: "
                    .concat(h.status, " ")
                    .concat(h.statusText),
                  logId,
                  traceId,
                  cost,
                  retry: retry_1,
                });
              }
              throw Error(
                "Failed to fetch video: "
                  .concat(h.status, " ")
                  .concat(h.statusText),
              );
            }
            if (h.status === 206) {
              if (report != null) {
                report({
                  action: "video_load",
                  url,
                  success: false,
                  errorCode: 10003,
                  error: "Partial content received",
                  logId,
                  traceId,
                  cost,
                  retry: retry_1,
                });
              }
              throw Error("Partial content received");
            }
            const g = yield h.blob();
            const f = h.headers.get("Content-Length");
            const y = h.headers.get("Content-Encoding");
            if (f && (!y || y === "identity")) {
              const _ = parseInt(f, 10);
              if (g.size !== _) {
                if (report != null) {
                  report({
                    action: "video_load",
                    url,
                    success: false,
                    errorCode: 10004,
                    error: "Incomplete video data: expected "
                      .concat(_, " bytes, got ")
                      .concat(g.size, " bytes"),
                    logId,
                    traceId,
                    cost,
                    retry: retry_1,
                  });
                }
                throw Error(
                  "Incomplete video data: expected "
                    .concat(_, " bytes, got ")
                    .concat(g.size, " bytes"),
                );
              }
            }
            yield hZ(cacheKey, g, e1);
            const b = URL.createObjectURL(g);
            this.blobUrlMap.set(cacheKey, b);
            if (report != null) {
              report({
                action: "video_load",
                success: true,
                url,
                errorCode: 0,
                error: "",
                cost,
                retry: retry_1,
                logId,
                traceId,
              });
            }
            return {
              success: true,
              blobUrl: b,
              retry: retry_1,
              cost,
              logId,
              traceId,
            };
          } catch (error) {
            if (retry_1 >= retry - 1) {
              return {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
              };
            }
            retry_1++;
          }
        }
        return {
          success: false,
          error: "Max retries exceeded",
        };
      })
      .call(this);
  }
  preloadVideo(e) {
    return f
      ._(function* () {
        return (yield this.getVideo(e)).success;
      })
      .call(this);
  }
  hasVideo(e) {
    return f._(function* () {
      try {
        return (yield Jt(e, e1)) instanceof Blob;
      } catch (e) {
        return false;
      }
    })();
  }
  removeVideo(e) {
    return f
      ._(function* () {
        try {
          yield yH(e, e1);
          const t = this.blobUrlMap.get(e);
          if (t) {
            URL.revokeObjectURL(t);
            this.blobUrlMap.delete(e);
          }
        } catch (error) {
          console.error("Failed to remove video cache:", error);
        }
      })
      .call(this);
  }
  clearAll() {
    return f
      ._(function* () {
        try {
          yield IU(e1);
          this.blobUrlMap.forEach((e) => {
            URL.revokeObjectURL(e);
          });
          this.blobUrlMap.clear();
        } catch (error) {
          console.error("Failed to clear video cache:", error);
        }
      })
      .call(this);
  }
  getCacheStats() {
    return f
      ._(function* () {
        try {
          return {
            totalCount: (yield HP(e1)).length,
            memoryCount: this.blobUrlMap.size,
          };
        } catch (e) {
          return {
            totalCount: 0,
            memoryCount: this.blobUrlMap.size,
          };
        }
      })
      .call(this);
  }
  clearMemoryCache() {
    this.blobUrlMap.forEach((e) => {
      URL.revokeObjectURL(e);
    });
    this.blobUrlMap.clear();
  }
  constructor() {
    this.blobUrlMap = new Map();
  }
}
const e9 = e2.getInstance();
const e8 = c.forwardRef((e, t) => {
  var [i, ...r] = [e, t];
  var { cachekey, src, report, onLoadedData, onError, onEnded } = i;
  var u = e3._(i, [
    "cachekey",
    "src",
    "report",
    "onLoadedData",
    "onError",
    "onEnded",
  ]);
  var [h] = r;
  var [p, setP] = c.useState();
  var mRef = c.useRef(null);
  c.useEffect(() => {
    if (cachekey) {
      f._(function* () {
        let e;
        if (report != null) {
          report({
            action: "video_start_load",
            url: src,
          });
        }
        const t = yield (
          ((e = {
            cacheKey: cachekey,
            url: src,
            retry: 3,
            report,
          }),
          e9.getVideo(e))
        );
        if (t == null ? undefined : t.blobUrl) {
          setP(t.blobUrl);
        } else {
          setP(src);
          if (report != null) {
            report({
              action: "video_load",
              success: false,
              url: src,
              errorCode: 10006,
              error: "retry failed",
              logId: "",
              traceId: "",
              cost: 0,
              retry: 0,
            });
          }
        }
      })();
    } else {
      setP(src);
    }
  }, [cachekey, src, report]);
  if (p) {
    return w.jsx(
      "video",
      _._(
        y._(
          {
            ref: h || mRef,
          },
          u,
        ),
        {
          src: S.m(p, null, {
            logType: "js.href/src",
            reportOnly: "false",
            blackConfig: "{}",
            configMode: "merge",
            isCloseSSRReport: true,
            bid: "cc_dreamina",
            region: "cn",
            urlLimit: "-1",
            htmlLimit: "-1",
            isSaveValidUrl: false,
            isRuntimeLog: false,
            isDOMParser: false,
            escapeRule: "escape-report",
            reportUrl:
              "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
            htmlparserOptions: "{}",
            scmBranch: "-",
            scmName: "-",
            scmVersion: "-",
            webpackPluginVersion: "3.6.0",
            filename:
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWMyRlhTbnBNTWs1MllsaENkb%p0$m5Wa1F6bDZZMjFOZ*xre%9-%mpSemwx$2xjM%1HTj$P$mRo$jFKc1lqRmtjR1JI-%$w-$IwbDJWbTFz-TFwWE9Wa*hXRkp2$TFk%2F$eH$$bnBs%jBaN$dqTldlZz09",
          }),
          onLoadedData: (e) => {
            if (onLoadedData != null) {
              onLoadedData(e);
            }
          },
          onError: (e) => {
            if ((p == null ? undefined : p.startsWith("blob:")) && src) {
              setP(src);
            } else {
              if (onError != null) {
                onError(e);
              }
              if (report != null) {
                report({
                  action: "video_load",
                  success: false,
                  url: src,
                  errorCode: 10005,
                  error: "video element onerror",
                  cost: 0,
                  retry: 0,
                });
              }
            }
          },
          onEnded: (e) => {
            if (onEnded != null) {
              onEnded(e);
            }
          },
        },
      ),
    );
  }
  return null;
});
e8.displayName = "VideoWithIdb";
class tr extends te.v {
  constructor(...e) {
    super(...e);
    this.eventName = "agent_getting_started_guide";
  }
}
class tn extends ti.N {
  _validateParams(e) {
    ["agent_name", "action_type"].forEach((t) => {
      tt.F4(
        e[t],
        "[AgentGettingStartedGuideReporter] ".concat(String(t), " is required"),
      );
    });
  }
  _getCollectorClass() {
    return tr;
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tn = b.Cg(
  [
    b.Qj(1, x._),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      x._ === undefined ? Object : x._,
    ]),
  ],
  tn,
);
const ta = (e) => {
  if (e) {
    return "marketing-buddy-guide:".concat(e);
  }
};
const to = eK.PA(function (e) {
  const {
    visible,
    onClose,
    onStartGenerate,
    videoUrl,
    posterUrl,
    creditPrice,
    enableVipGate = false,
    vipGateLoading = false,
    membershipGate,
    onSubscribe,
  } = e;
  const p = k.h(x._);
  const vRef = c.useRef(null);
  const [m, setM] = c.useState(true);
  const f =
    enableVipGate &&
    !(membershipGate == null ? undefined : membershipGate.hasActiveMembership);
  c.useEffect(() => {
    if (visible) {
      p.createInstance(tn, {
        agentName: "marketing",
        actionType: "show",
      }).report();
    }
  }, [visible, p]);
  const y = c.useCallback(() => {
    if (!vipGateLoading) {
      if (f) {
        if (onSubscribe != null) {
          onSubscribe();
        }
        return;
      }
      p.createInstance(tn, {
        agentName: "marketing",
        actionType: "generate_video",
      }).report();
      onStartGenerate();
    }
  }, [p, onStartGenerate, onSubscribe, f, vipGateLoading]);
  const children = w.jsx(e7.K, {
    type: "primary",
    onClick: y,
    className: "generate-button-eHw361",
    disabled: vipGateLoading,
    loading: vipGateLoading,
    children: l.Ay.t("dm_web_agent_floatinglayer_button", {}, "Create now"),
  });
  const onCancel = c.useCallback(() => {
    p.createInstance(tn, {
      agentName: "marketing",
      actionType: "close",
    }).report();
    onClose();
  }, [onClose, p]);
  const C = c.useCallback(() => {
    setM((e) => {
      var t = !e;
      p.createInstance(tn, {
        agentName: "marketing",
        actionType: t ? "mute" : "unmute",
      }).report();
      return t;
    });
  }, [p]);
  const A = c.useCallback(() => {
    var vRef_current = vRef.current;
    if (vRef_current) {
      if (vRef_current.paused) {
        vRef_current.play().catch(() => undefined);
        p.createInstance(tn, {
          agentName: "marketing",
          actionType: "play",
        }).report();
      } else {
        vRef_current.pause();
        p.createInstance(tn, {
          agentName: "marketing",
          actionType: "pause",
        }).report();
      }
    }
  }, [p]);
  const onLoadedData = c.useCallback(
    (e) => {
      if (visible) {
        var i = e.currentTarget;
        if (i.paused) {
          i.play().catch(() => undefined);
        }
      }
    },
    [visible],
  );
  return w.jsx(Q.A, {
    wrapClassName: "modal-ANzb6V",
    visible,
    onCancel,
    closable: false,
    maskClosable: true,
    simple: false,
    unmountOnExit: true,
    escToExit: true,
    footer: null,
    style: {
      width: "400px",
    },
    children: w.jsxs("div", {
      className: "container-VcA9pX",
      children: [
        w.jsxs("div", {
          className: "media-area-XRYzGr",
          onClick: A,
          children: [
            videoUrl
              ? w.jsx(e8, {
                  ref: vRef,
                  role: "button",
                  tabIndex: 0,
                  "aria-label": l.Ay.t(
                    "octo_director_stage_shortcut_timeline_playback",
                    {},
                    "播放 / 暂停",
                  ),
                  onKeyDown: e4.q,
                  src: S.m(videoUrl, null, {
                    logType: "js.href/src",
                    reportOnly: "false",
                    blackConfig: "{}",
                    configMode: "merge",
                    isCloseSSRReport: true,
                    bid: "cc_dreamina",
                    region: "cn",
                    urlLimit: "-1",
                    htmlLimit: "-1",
                    isSaveValidUrl: false,
                    isRuntimeLog: false,
                    isDOMParser: false,
                    escapeRule: "escape-report",
                    reportUrl:
                      "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                    htmlparserOptions: "{}",
                    scmBranch: "-",
                    scmName: "-",
                    scmVersion: "-",
                    webpackPluginVersion: "3.6.0",
                    filename:
                      "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMllsZEdl$0$5$mpCaFZ6$n$%RmRLT$ZwSF$q$k1WMlF4W$Zk%2JFd3lN$2hq-lhSc1pFZHNk$nA1T$dsa1-xSnJa$k14-m1SW*JHd*F$el$3WXpOb2FHTnRaREZqZHowOQ",
                  }),
                  cachekey: ta(videoUrl),
                  poster: posterUrl,
                  className: "video-X2_v3T",
                  loop: true,
                  muted: m,
                  autoPlay: true,
                  playsInline: true,
                  preload: "auto",
                  crossOrigin: "anonymous",
                  onLoadedData,
                })
              : null,
            w.jsx("button", {
              type: "button",
              className: "video-volume-button-hFcRlz",
              "aria-label": m
                ? l.Ay.t(
                    "octo_canvas_timeline_preview_mute_control_label",
                    {},
                    "开启原声",
                  )
                : l.Ay.t(
                    "octo_canvas_timeline_all_tracks_mute_control_label",
                    {},
                    "静音",
                  ),
              onClick: (e) => {
                e.stopPropagation();
                C();
              },
              children: m
                ? w.jsx("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: w.jsx("path", {
                      d: "M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.05 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.46 14 18.7V20.77C15.38 20.45 16.63 19.82 17.68 18.95L21.23 22.5L22.5 21.23L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z",
                      fill: "white",
                    }),
                  })
                : w.jsx("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: w.jsx("path", {
                      d: "M3 9V15H7L12 20V4L7 9H3ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.05 19.86 21 16.28 21 12C21 7.72 18.05 4.14 14 3.23Z",
                      fill: "white",
                    }),
                  }),
            }),
          ],
        }),
        w.jsxs("div", {
          className: "text-section-lNgyYD",
          children: [
            w.jsx("h2", {
              className: "title-D7spqB",
              children: l.Ay.t(
                "dm_web_agent_floatinglayer_title",
                {
                  number: creditPrice != null ? creditPrice : "",
                },
                "Turn your product image into a TikTok video 🎁 / Need {number} credits",
              ),
            }),
            w.jsx("p", {
              className: "subtitle-ZLlrbk",
              children: l.Ay.t(
                "dm_web_agent_floatinglayer_keycontent",
                {},
                "AI picks up what makes your product stand out and turns it into a polished TikTok video.",
              ),
            }),
          ],
        }),
        f
          ? w.jsx(e6.A, {
              content: l.Ay.t(
                "dm_web_agent_floatinglayer_subcribers",
                {},
                "Subscribe to unlock marketing video generation",
              ),
              position: "top",
              trigger: "hover",
              children,
            })
          : children,
      ],
    }),
  });
});
const AgentGenerate = eq.d.AgentGenerate;
const tc = {
  resourceType: eQ.rU.Aigc,
  resourceId: eQ.XG.Video,
  benefitType: eQ.ni.MarketingAgentGenerateVideo,
};
function tl() {}
const td = eK.PA(function (e) {
  const { onStartGenerate } = e;
  const i = k.h(x._);
  const r = k.h(eZ.h);
  const [creditPrice, setCreditPrice] = c.useState();
  const [o, setO] = c.useState(() => Mr());
  const l = RA(r.guideOverlayVisible, r.guideOverlaySchema);
  const d = Xl(r.guideOverlaySchema);
  c.useEffect(() => {
    if (!l) {
      return void setO(Mr());
    }
    var e = false;
    var t = [];
    setO(Mr());
    try {
      E.cQ(i, eG.jV)
        .getInstance()
        .then((i) => {
          if (!e) {
            var r = () => {
              if (!e) {
                setO(Mr(i));
                var t;
                var r;
                var n;
                var o;
                var c;
                var l =
                  (c = i.commercialStrategyService.getBenefitStrategy(tc)) ==
                    null ||
                  (o = c.strategies) == null ||
                  (n = o.find((e) => {
                    var t;
                    if ((t = e.creditStrategy) == null) {
                      return undefined;
                    }
                    return t.creditPricingInfo;
                  })) == null ||
                  (r = n.creditStrategy) == null ||
                  (t = r.creditPricingInfo) == null
                    ? undefined
                    : t.creditUnitPrice;
                if (l !== undefined) {
                  setCreditPrice(l);
                }
              }
            };
            r();
            t.push(
              i.onReadyChange(r),
              i.commercialStrategyService.onIsInFreemiumStageChange(r),
              i.membershipService.onMembershipChange(r),
            );
          }
        })
        .catch(() => {
          if (!e) {
            setO(Mr());
          }
        });
    } catch (e) {
      setO(Mr());
    }
    return () => {
      e = true;
      t.forEach((e) => e.dispose());
    };
  }, [i, l]);
  const onSubscribe = ez.A(() =>
    f._(function* () {
      try {
        let e;
        ((e = o.commercialFeature) != null
          ? e
          : yield E.cQ(i, eG.jV).getInstance()
        ).showVIPSubscribeModal({
          sceneOptions: H_1({
            scene: eQ.Sk.AgenticGetCredit,
            benefitTriplets: [tc],
            reportParams: {
              vipSource: AgentGenerate,
            },
          }),
          source: AgentGenerate,
        });
      } catch (e) {}
    })(),
  );
  const h = E.cQ(i, eX.a).serverAbTestManager.getAbTestValueSync(
    eY.s.DreaminaMarketingBuddyEntry,
  );
  const p = (h == null ? undefined : h.enable) === 1;
  const v =
    (typeof (h == null ? undefined : h.guide_video_url) === "string" &&
      h.guide_video_url.trim()) ||
    undefined;
  const posterUrl =
    (typeof (h == null ? undefined : h.guide_poster_url) === "string" &&
      h.guide_poster_url.trim()) ||
    undefined;
  const visible = l && p;
  c.useEffect(() => {
    if (p && v) {
      var cacheKey = ta(v);
      if (cacheKey) {
        var t = false;
        var i =
          typeof window !== "undefined" &&
          typeof window.requestIdleCallback === "function"
            ? (e) =>
                window.requestIdleCallback(e, {
                  timeout: 3000,
                })
            : (e) => window.setTimeout(e, 0);
        var r =
          typeof window !== "undefined" &&
          typeof window.cancelIdleCallback === "function"
            ? (e) => window.cancelIdleCallback(e)
            : (e) => window.clearTimeout(e);
        var n = i(() => {
          if (!t) {
            e9.getVideo({
              cacheKey,
              url: v,
              retry: 2,
            }).catch(tl);
          }
        });
        return () => {
          t = true;
          r(n);
        };
      }
    }
  }, [p, v]);
  return w.jsx(to, {
    visible,
    onClose: () => r.dismissGuideOverlay(),
    onStartGenerate: () => {
      r.dismissGuideOverlay();
      onStartGenerate();
    },
    creditPrice,
    enableVipGate: d && o.enableVipGate,
    vipGateLoading: d && visible && false,
    membershipGate: d ? o.membershipGate : undefined,
    onSubscribe,
    videoUrl: v,
    posterUrl,
  });
});
const tf = eK.PA(function () {
  const e = k.h(Z.c);
  const t = k.h(tu.ICommercialTeamWorkspaceService);
  const i = tp.E(t.state);
  const [r, setR] = c.useState();
  return w.jsx(
    th.wX,
    y._(
      {},
      tp.e({
        open: e.hasLogin && !!i && i !== r,
        onClose: () => setR(i),
        onRetry: () => {
          var e;
          if ((e = globalThis.location) == null) {
            return undefined;
          }
          return e.reload();
        },
      }),
    ),
  );
});
const ty = eK.PA(function () {
  const e = k.h(tg.k);
  return w.jsxs(w.Fragment, {
    children: [w.jsx(G_1, y._({}, e.dialogState)), w.jsx(tf, {})],
  });
});
const t_ = eK.PA(function () {
  const { containerService } = k.h(tm.e);
  if (containerService) {
    return w.jsx(k.Z, {
      instantiationService: containerService,
      children: w.jsx(ty, {}),
    });
  }
  return null;
});
const tC = "button.lv-btn-primary.lv-btn-shape-circle.lv-btn-icon-only";
function tA(e) {
  const t = e.cloneNode(true);
  t.setAttribute("aria-hidden", "true");
  t.setAttribute("inert", "");
  t.removeAttribute("data-create-mode-auxiliary");
  t.removeAttribute("id");
  t.querySelectorAll("[id]").forEach((e) => e.removeAttribute("id"));
  t.querySelectorAll("*").forEach((e) => {
    e.style.animation = "none";
    e.style.transition = "none";
  });
  Object.assign(t.style, {
    animation: "none",
    transition: "none",
    pointerEvents: "none",
    userSelect: "none",
    visibility: "visible",
  });
  return t;
}
function tj(e) {
  let t;
  const rect = e.getBoundingClientRect();
  const kind = (t = e.dataset.createModeAuxiliary) != null ? t : "";
  const n = tA(e);
  Object.assign(n.style, {
    position: "fixed",
    zIndex: "1",
    boxSizing: "border-box",
    top: "".concat(rect.top, "px"),
    left: "".concat(rect.left, "px"),
    width: "".concat(rect.width, "px"),
    height: "".concat(rect.height, "px"),
    minWidth: "0",
    minHeight: "0",
    maxWidth: "none",
    maxHeight: "none",
    margin: "0",
    opacity: "1",
    transform: "none",
  });
  return {
    kind,
    element: n,
    rect,
  };
}
function tP(e) {
  let t;
  return (
    !(t = e.querySelector("[data-create-mode-panel]:not([hidden])"))
      ? []
      : [...t.querySelectorAll("[data-create-mode-auxiliary]")].filter((e) => {
          var t = e.getBoundingClientRect();
          return (
            t.width > 0 &&
            t.height > 0 &&
            getComputedStyle(e).display !== "none"
          );
        })
  ).map(tj);
}
function tI(kind, t) {
  const i = kind === "canvas-projects";
  const r = y._(
    {
      opacity: 0,
      transform: `translateY(${48}px)`.concat(i ? ` scale(${0.8})` : ""),
    },
    i
      ? {
          transformOrigin: "center center",
        }
      : {},
  );
  const n = y._(
    {
      opacity: 1,
      transform: i ? "translateY(0) scale(1)" : "translateY(0)",
    },
    i
      ? {
          transformOrigin: "center center",
        }
      : {},
  );
  if (t === "enter") {
    return [r, n];
  }
  return [n, r];
}
function tk(e) {
  const t = [...e.querySelectorAll(tC)].find((e) => {
    var t = e.getBoundingClientRect();
    var i = getComputedStyle(e);
    return (
      t.width > 0 &&
      t.height > 0 &&
      i.display !== "none" &&
      i.visibility !== "hidden" &&
      Number(i.opacity) > 0
    );
  });
  if (t) {
    const i = getComputedStyle(t);
    const r = t.querySelector("svg");
    return {
      element: t,
      rect: t.getBoundingClientRect(),
      backgroundColor: i.backgroundColor,
      borderColor: i.borderColor,
      borderRadius: i.borderRadius,
      borderStyle: i.borderStyle,
      borderWidth: i.borderWidth,
      boxShadow: i.boxShadow,
      color: i.color,
      iconFontSize: r ? getComputedStyle(r).fontSize : undefined,
    };
  }
}
function tE(e) {
  e.querySelectorAll(tC).forEach((e) => {
    e.style.visibility = "hidden";
  });
}
function tR(e) {
  const { source, target } = e;
  const r = document.createElement("div");
  r.setAttribute("aria-hidden", "true");
  r.setAttribute("inert", "");
  Object.assign(r.style, {
    position: "fixed",
    zIndex: "1",
    top: "".concat(source.rect.top, "px"),
    left: "".concat(source.rect.left, "px"),
    width: "".concat(source.rect.width, "px"),
    height: "".concat(source.rect.height, "px"),
    overflow: "visible",
    pointerEvents: "none",
  });
  [source, target].forEach((e) => {
    var { element, rect } = e;
    Object.assign(element.style, {
      position: "absolute",
      zIndex: "0",
      top: "0",
      right: "auto",
      bottom: "auto",
      left: "50%",
      width: "".concat(rect.width, "px"),
      height: "".concat(rect.height, "px"),
      transform: "translateX(-50%)",
    });
  });
  target.element.style.opacity = "0";
  r.append(source.element, target.element);
  return r;
}
function tT(e) {
  const t = e.querySelector('[data-create-mode-generator="active"]');
  if (t) {
    return [t, ...t.querySelectorAll("*")].find(
      (e) =>
        e instanceof HTMLElement &&
        getComputedStyle(e)
          .getPropertyValue("--create-mode-generator-root")
          .trim() === "1",
    );
  }
}
function tx(e, borderRadius) {
  const i = tA(e);
  Object.assign(i.style, {
    position: "absolute",
    zIndex: "1",
    boxSizing: "border-box",
    top: "0",
    right: "auto",
    bottom: "auto",
    left: "0",
    width: "100%",
    height: "100%",
    minWidth: "0",
    minHeight: "0",
    maxWidth: "none",
    maxHeight: "none",
    margin: "0",
    overflow: "hidden",
    borderColor: "transparent",
    borderRadius,
    background: "transparent",
    backgroundImage: "none",
    boxShadow: "none",
    backdropFilter: "none",
  });
  return i;
}
function tM(e) {
  const t = document.createElement("div");
  Object.assign(t.style, {
    position: "absolute",
    zIndex: "0",
    inset: "0",
    border: e.border,
    borderRadius: "inherit",
    background: e.background,
    boxShadow: e.boxShadow,
    backdropFilter: e.backdropFilter,
  });
  return t;
}
function tN(e) {
  return f._(function* () {
    if (a != null) {
      a();
    }
    let t;
    let i;
    const r =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const n = document.querySelector("[data-create-mode-transition-host]");
    const o = n ? tT(n) : undefined;
    if (r || !n || !o || typeof o.animate !== "function") {
      return void e();
    }
    const s = o.getBoundingClientRect();
    const bottom = n.getBoundingClientRect().bottom;
    const height = n.style.height;
    const d = getComputedStyle(o);
    const d_borderRadius = d.borderRadius;
    const h = tx(o, d_borderRadius);
    const p = tk(o);
    const v = tM(d);
    const m = tP(n);
    (b = document.createElement("div")).setAttribute("aria-hidden", "true");
    b.setAttribute("inert", "");
    Object.assign(b.style, {
      position: "fixed",
      zIndex: "2",
      top: "".concat(s.top, "px"),
      left: "".concat(s.left, "px"),
      width: "".concat(s.width, "px"),
      height: "".concat(s.height, "px"),
      overflow: "hidden",
      borderRadius: d_borderRadius,
      pointerEvents: "none",
      contain: "layout paint",
    });
    b.append(v, h);
    const g = b;
    const f = [
      ...m.map((e) => {
        var { element } = e;
        return element;
      }),
      g,
    ];
    let y = false;
    const _ = () => {
      if (!y) {
        y = true;
        if (t != null) {
          t.cancel();
        }
        if (i != null) {
          i.cancel();
        }
        n.style.height = height;
        (function (e) {
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];
          delete e.dataset.createModeTransition;
          t.forEach((e) => e.remove());
        })(n, f);
        if (a === _) {
          a = undefined;
        }
      }
    };
    a = _;
    n.append(
      ...m.map((e) => {
        var { element } = e;
        return element;
      }),
      g,
    );
    n.dataset.createModeTransition = "true";
    try {
      tS.flushSync(e);
      var b;
      let w;
      let S;
      let C;
      let A;
      let j;
      let P;
      let I;
      let promise;
      let E;
      let R;
      let T;
      let matched_1;
      let unmatchedSources_1;
      let N;
      const L = Math.max(0, bottom - n.getBoundingClientRect().top);
      n.style.height = "".concat(L, "px");
      A = (e) => undefined;
      j = false;
      P = 0;
      I = 0;
      promise = new Promise((resolve) => {
        A = resolve;
      });
      E = (e) => {
        if (!j) {
          j = true;
          if (w !== undefined) {
            cancelAnimationFrame(w);
            w = undefined;
          }
          A(e);
        }
      };
      R = () => {
        w = undefined;
        if (!j) {
          P += 1;
          var e = tT(n);
          if (e && e !== o) {
            var t = e.getBoundingClientRect();
            var i =
              e === S &&
              C !== undefined &&
              Math.abs(t.top - C.top) < 0.5 &&
              Math.abs(t.left - C.left) < 0.5 &&
              Math.abs(t.width - C.width) < 0.5 &&
              Math.abs(t.height - C.height) < 0.5;
            S = e;
            C = t;
            I = i ? I + 1 : 0;
          } else {
            S = undefined;
            C = undefined;
            I = 0;
          }
          if (
            P >= 15 ||
            ((S == null ? undefined : S.isConnected) && P >= 5 && I >= 4)
          ) {
            return void E(
              (S == null ? undefined : S.isConnected) ? S : undefined,
            );
          }
          w = requestAnimationFrame(R);
        }
      };
      w = requestAnimationFrame(R);
      t = {
        promise,
        cancel: () => E(undefined),
      };
      const F = yield t.promise;
      if (y || !(F == null ? undefined : F.isConnected)) {
        return void _();
      }
      const O = F.getBoundingClientRect();
      const $ = n.querySelector("[data-create-mode-panel]:not([hidden])");
      if (!$) {
        return void _();
      }
      const U = $.getBoundingClientRect().height;
      const W = getComputedStyle(F);
      const D = W.borderRadius;
      const V = tx(F, D);
      const H = tk(F);
      const B = tM(W);
      const z = tP(n);
      f.push(
        ...z.map((e) => {
          var { element } = e;
          return element;
        }),
      );
      T = new Set();
      matched_1 = [];
      unmatchedSources_1 = [];
      m.forEach((source) => {
        var t = z.findIndex((t, i) => t.kind === source.kind && !T.has(i));
        if (t < 0) {
          unmatchedSources_1.push(source);
        } else {
          T.add(t);
          matched_1.push({
            source,
            target: z[t],
          });
        }
      });
      const { matched, unmatchedSources, unmatchedTargets } = {
        matched: matched_1,
        unmatchedSources: unmatchedSources_1,
        unmatchedTargets: z.filter((e, t) => !T.has(t)),
      };
      const J = matched.map(tR);
      const Z =
        p && H
          ? ((N = tA(p.element)),
            Object.assign(N.style, {
              position: "fixed",
              zIndex: "3",
              boxSizing: "border-box",
              top: "".concat(p.rect.top, "px"),
              left: "".concat(p.rect.left, "px"),
              width: "".concat(p.rect.width, "px"),
              height: "".concat(p.rect.height, "px"),
              minWidth: "0",
              minHeight: "0",
              maxWidth: "none",
              maxHeight: "none",
              margin: "0",
              opacity: "1",
              visibility: "visible",
              transform: "none",
              backgroundColor: p.backgroundColor,
              borderColor: p.borderColor,
              borderRadius: p.borderRadius,
              borderStyle: p.borderStyle,
              borderWidth: p.borderWidth,
              boxShadow: p.boxShadow,
              color: p.color,
            }),
            N)
          : undefined;
      if (Z) {
        tE(h);
        tE(V);
      }
      V.style.opacity = "0";
      B.style.opacity = "0";
      unmatchedTargets.forEach((e) => {
        var { element } = e;
        element.style.opacity = "0";
      });
      g.append(v, B, h, V);
      f.push(...J, ...(Z ? [Z] : []));
      n.append(
        ...unmatchedSources.map((e) => {
          var { element } = e;
          return element;
        }),
        ...unmatchedTargets.map((e) => {
          var { element } = e;
          return element;
        }),
        ...J,
        g,
        ...(Z ? [Z] : []),
      );
      const G = {
        duration: 300,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        fill: "both",
      };
      const X = g.animate(
        [
          {
            top: "".concat(s.top, "px"),
            left: "".concat(s.left, "px"),
            width: "".concat(s.width, "px"),
            height: "".concat(s.height, "px"),
            borderRadius: d_borderRadius,
          },
          {
            top: "".concat(O.top, "px"),
            left: "".concat(O.left, "px"),
            width: "".concat(O.width, "px"),
            height: "".concat(O.height, "px"),
            borderRadius: D,
          },
        ],
        G,
      );
      const Y = [
        {
          opacity: 1,
          offset: 0,
        },
        {
          opacity: 1,
          offset: 0.45,
        },
        {
          opacity: 0,
          offset: 1,
        },
      ];
      const ee = [
        {
          opacity: 0,
          offset: 0,
        },
        {
          opacity: 0,
          offset: 0.45,
        },
        {
          opacity: 1,
          offset: 1,
        },
      ];
      i = n.animate(
        [
          {
            height: "".concat(L, "px"),
          },
          {
            height: "".concat(U, "px"),
          },
        ],
        G,
      );
      v.animate(Y, G);
      h.animate(Y, G);
      B.animate(ee, G);
      V.animate(ee, G);
      if (Z && p && H) {
        Z.animate(
          [
            {
              top: "".concat(p.rect.top, "px"),
              left: "".concat(p.rect.left, "px"),
              width: "".concat(p.rect.width, "px"),
              height: "".concat(p.rect.height, "px"),
              backgroundColor: p.backgroundColor,
              borderColor: p.borderColor,
              borderRadius: p.borderRadius,
              boxShadow: p.boxShadow,
              color: p.color,
            },
            {
              top: "".concat(H.rect.top, "px"),
              left: "".concat(H.rect.left, "px"),
              width: "".concat(H.rect.width, "px"),
              height: "".concat(H.rect.height, "px"),
              backgroundColor: H.backgroundColor,
              borderColor: H.borderColor,
              borderRadius: H.borderRadius,
              boxShadow: H.boxShadow,
              color: H.color,
            },
          ],
          G,
        );
        const et = Z.querySelector("svg");
        if (et && p.iconFontSize && H.iconFontSize) {
          et.animate(
            [
              {
                fontSize: p.iconFontSize,
              },
              {
                fontSize: H.iconFontSize,
              },
            ],
            G,
          );
        }
      }
      unmatchedSources.forEach((e) => {
        var { element, kind } = e;
        element.animate(tI(kind, "exit"), G);
      });
      unmatchedTargets.forEach((e) => {
        var { element, kind } = e;
        element.animate(tI(kind, "enter"), G);
      });
      matched.forEach((e, t) => {
        var { source, target } = e;
        J[t].animate(
          [
            {
              top: "".concat(source.rect.top, "px"),
              left: "".concat(source.rect.left, "px"),
              width: "".concat(source.rect.width, "px"),
              height: "".concat(source.rect.height, "px"),
            },
            {
              top: "".concat(target.rect.top, "px"),
              left: "".concat(target.rect.left, "px"),
              width: "".concat(target.rect.width, "px"),
              height: "".concat(target.rect.height, "px"),
            },
          ],
          G,
        );
        source.element.animate(Y, G);
        target.element.animate(ee, G);
      });
      X.finished.then(
        () => requestAnimationFrame(() => requestAnimationFrame(_)),
        _,
      );
    } catch (error) {
      _();
      throw error;
    }
  })();
}
const tF = eK.PA(function (e) {
  const {
    Content,
    pageState,
    recentCanvasProjectsManager,
    getAssetBrowserService,
    onGeneratorSubmit,
    onModeChange,
    onCanvasActivate,
    onCanvasDeactivate,
    onCreateCanvasProject,
    onOpenCanvasProject,
    onRenameCanvasProject,
    onCopyCanvasProject,
    onDeleteCanvasProject,
    onCanvasProjectSettingsShow,
    onViewAllCanvasProjects,
    csrReady = false,
  } = e;
  const bRef = c.useRef(null);
  const S = ((e) => {
    const t = w_1(undefined, e ? "mainFrame2026Oversea" : undefined);
    const i = ((e, t) => {
      const i = c.useMemo(() => {
        var i;
        if (e) {
          i = e.types;
          return [...new Set(i)].flatMap((e) => {
            var i = t.find((t) => t.value === e && !t.disabled);
            if (i) {
              return [i];
            }
            return [];
          });
        }
      }, [e, t]);
      const [r] = c.useState(() => {
        var t;
        var r;
        var n;
        var a;
        var o;
        var s;
        var c;
        var l;
        var types;
        var activeType;
        if (e) {
          if (
            ((n =
              (t = i == null ? undefined : i.map((e) => e.value)) != null
                ? t
                : []),
            (a = new URLSearchParams(window.location.search).get("type")),
            (o = h_1(e.types)),
            (r = (activeType =
              (s =
                (c =
                  (l = (types = [...new Set(e.types)].filter((e) =>
                    n.includes(e),
                  )).find((e) => e === a)) != null
                    ? l
                    : types.find((e) => e === o)) != null
                  ? c
                  : types.find((t) => t === e.defaultType)) != null
                ? s
                : types[0])
              ? {
                  types,
                  activeType,
                }
              : undefined)) === null ||
            r === undefined
          ) {
            return undefined;
          }
          return r.activeType;
        }
      });
      if (e) {
        return {
          typeOptions: i,
          initialContentGeneratorType: r,
          contentGeneratorTypes: i == null ? undefined : i.map((e) => e.value),
        };
      }
      return {};
    })(e, t);
    const r = e ? undefined : V();
    const [n] = c.useState(() => {
      if (r == null) {
        return undefined;
      }
      return r.initialType;
    });
    const typeOptions = c.useMemo(() => {
      if (r == null ? undefined : r.modeTabs) {
        return W.TN(r.variant).flatMap((e) => {
          var i = t.find((t) => t.value === e && !t.disabled);
          if (i) {
            return [i];
          }
          return [];
        });
      }
    }, [r, t]);
    if (e) {
      return _._(y._({}, i), {
        modeTabs: true,
      });
    }
    return {
      modeTabs: r == null ? undefined : r.modeTabs,
      typeOptions,
      initialContentGeneratorType: n,
    };
  })(
    c.useMemo(() => {
      var e;
      if ((e = Content.getGeneratorOptions) == null) {
        return undefined;
      }
      return e.call(Content);
    }, [Content]),
  );
  const [C, setC] = c.useState(pageState.mode === "canvas");
  c.useEffect(() => {
    if (pageState.mode === "canvas") {
      setC(true);
    }
  }, [pageState.mode]);
  return w.jsx(Content, {
    mode: pageState.mode,
    canvasEnabled: pageState.canvasEnabled,
    canvasMounted: pageState.mode === "canvas" || C,
    onModeChange: (e) => {
      if (e !== pageState.mode) {
        if (e !== "canvas" || pageState.canvasEnabled) {
          tN(() => {
            if (pageState.trySetMode(e)) {
              if (onModeChange != null) {
                onModeChange(e);
              }
              if (e === "canvas" && pageState.canvasEnabled) {
                if (onCanvasActivate != null) {
                  onCanvasActivate();
                }
                return;
              }
              if (onCanvasDeactivate != null) {
                onCanvasDeactivate();
              }
            }
          });
        }
      }
    },
    csrReady,
    modeSwitchInteractionBoundaryRef: bRef,
    chatProps: _._(y._({}, S), {
      active: pageState.mode === "chat",
      onGeneratorSubmit,
    }),
    canvasProps: {
      active: pageState.mode === "canvas",
      canvasAgentInputVisibility: pageState.canvasAgentInputVisibility,
      modeSwitchInteractionBoundaryRef: bRef,
      getAssetBrowserService,
      projects:
        recentCanvasProjectsManager == null
          ? undefined
          : recentCanvasProjectsManager.projects,
      hasMoreProjects:
        recentCanvasProjectsManager == null
          ? undefined
          : recentCanvasProjectsManager.hasMoreProjects,
      loading:
        (recentCanvasProjectsManager == null
          ? undefined
          : recentCanvasProjectsManager.status) === "loading" &&
        recentCanvasProjectsManager.projects.length === 0,
      onCreateProject: onCreateCanvasProject,
      onOpenProject: onOpenCanvasProject,
      onRenameProject: onRenameCanvasProject,
      onCopyProject: onCopyCanvasProject,
      onDeleteProject: onDeleteCanvasProject,
      onProjectSettingsShow: onCanvasProjectSettingsShow,
      onViewAll: onViewAllCanvasProjects,
    },
  });
});
class tU extends te.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_ai_feature_banner";
  }
}
class tW extends ti.N {
  _validateParams(e) {
    ["ai_feature_name"].forEach((t) => {
      tt.F4(
        e[t],
        "[ClickAiFeatureBannerReporter] ".concat(String(t), " is required"),
      );
    });
  }
  _getCollectorClass() {
    return tU;
  }
  _reportBusinessEvent(e) {
    super._reportBusinessEvent(e, {
      immediately: true,
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tW = b.Cg(
  [
    b.Qj(1, x._),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      x._ === undefined ? Object : x._,
    ]),
  ],
  tW,
);
class tD extends te.v {
  constructor(...e) {
    super(...e);
    this.eventName = "click_banner";
  }
}
class tV extends ti.N {
  _getCollectorClass() {
    return tD;
  }
  _validateParams(e) {
    this._validateRequiredFields(e);
  }
  _validateRequiredFields(e) {
    ["banner_type"].forEach((t) => {
      tt.F4(e[t], "[ClickBannerReporter] ".concat(t, " is required"));
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tV = b.Cg(
  [
    b.Qj(1, x._),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      x._ === undefined ? Object : x._,
    ]),
  ],
  tV,
);
class tH extends te.v {
  constructor(...e) {
    super(...e);
    this.eventName = "hover_ai_function_banner";
  }
}
class tB extends ti.N {
  _validateParams(e) {
    tt.F4(
      e.function_name,
      "[HoverAiFunctionBannerReporter] function_name is required",
    );
    tt.F4(
      e.tool_item_id,
      "[HoverAiFunctionBannerReporter] tool_item_id is required",
    );
    tt.F4(e.page, "[HoverAiFunctionBannerReporter] page is required");
  }
  _getCollectorClass() {
    return tH;
  }
  _reportBusinessEvent(e) {
    super._reportBusinessEvent(e, {
      immediately: true,
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tB = b.Cg(
  [
    b.Qj(1, x._),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      typeof HoverAiFunctionBannerParams === "undefined"
        ? Object
        : HoverAiFunctionBannerParams,
      x._ === undefined ? Object : x._,
    ]),
  ],
  tB,
);
class tz extends te.v {
  constructor(...e) {
    super(...e);
    this.eventName = "show_banner";
  }
}
class tK extends ti.N {
  _getCollectorClass() {
    return tz;
  }
  _validateParams(e) {
    tt.F4(e.banner_type, "[ShowBannerReporter] banner_type is required");
  }
  _reportBusinessEvent(e) {
    super._reportBusinessEvent(e, {
      immediately: true,
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
  }
}
tK = b.Cg(
  [
    b.Qj(1, x._),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      x._ === undefined ? Object : x._,
    ]),
  ],
  tK,
);
class tQ {
  reportSkillCapsuleClick(e) {
    this._containerService
      .createInstance(tW, {
        aiFeatureName: e.skill.id,
      })
      .report();
  }
  reportMoreSkillsClick() {
    this._containerService
      .createInstance(tW, {
        aiFeatureName: "more",
      })
      .report();
  }
  reportWhatsNewClick(e) {
    this._containerService.createInstance(tV, y._({}, e.clickReport)).report();
  }
  resetWhatsNewShow() {
    this._reportedWhatsNewShowKeys.clear();
  }
  reportCreationEntryClick(e, t) {
    if (e.titleKey) {
      this._containerService
        .createInstance(
          a_1,
          y._(
            {
              functionName: e.titleKey,
              toolItemId: e.id,
            },
            {},
          ),
        )
        .report();
    }
  }
  constructor(e) {
    this._containerService = e;
    this._reportedWhatsNewShowKeys = new Set();
    this.reportWhatsNewShow = (e) => {
      if (!this._reportedWhatsNewShowKeys.has(e.key)) {
        this._reportedWhatsNewShowKeys.add(e.key);
        this._containerService
          .createInstance(tK, y._({}, e.clickReport))
          .report();
      }
    };
    this.reportCreationEntryPreviewShow = (e, t) => {
      if (e.titleKey) {
        this._containerService
          .createInstance(tB, {
            functionName: e.titleKey,
            toolItemId: e.id,
            page: "create",
            tab: ((e) => {
              switch (e) {
                case "image":
                  return "ai_image";
                case "video":
                  return "ai_video";
                case "audio":
                case "music":
                  return "ai_audio";
                case "agentic":
                  return "ai_agent";
                default:
                  return;
              }
            })(t),
          })
          .report();
      }
    };
    this.reportCreationEntryUploadAction = (e, t) => {
      tq.Q(this._containerService, e, t);
    };
  }
}
tQ = b.Cg(
  [
    b.Qj(0, x._),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [x._ === undefined ? Object : x._]),
  ],
  tQ,
);
class tJ {
  trySetMode(e) {
    return (e !== "canvas" || !!this.canvasEnabled) && ((this.mode = e), true);
  }
  setCanvasEnabled(e) {
    this.canvasEnabled = e;
    if (!(e || this.mode !== "canvas")) {
      this.mode = "chat";
    }
  }
  get showCanvasAgentInput() {
    return this.canvasAgentInputVisibility !== "hidden";
  }
  setShowCanvasAgentInput(e) {
    this.canvasAgentInputVisibility = e ? "visible" : "hidden";
  }
  setRecommendationFeedApproachingSticky(e) {
    this.isRecommendationFeedApproachingSticky = e;
  }
  constructor() {
    this.mode = "chat";
    this.canvasEnabled = true;
    this.canvasAgentInputVisibility = "pending";
    this.isRecommendationFeedApproachingSticky = false;
    J.l_(
      this,
      {},
      {
        autoBind: true,
      },
    );
  }
}
class tX extends eO.jG {
  _load(e, t) {
    return f
      ._(function* () {
        try {
          const i = yield this._dataService.getConfig(e);
          if (this._disposed) {
            return;
          }
          J.h5(() => {
            if (i.ok) {
              this._loadedPanelSignature = t;
              this.items = i.value.items;
              this.panelKey = i.value.panelKey;
              this.status = "ready";
            } else {
              this.status = "error";
            }
          });
        } catch (e) {
          if (!this._disposed) {
            J.h5(() => {
              this.status = "error";
            });
          }
        }
      })
      .call(this);
  }
  dispose() {
    this._disposed = true;
    super.dispose();
  }
  constructor(e) {
    super();
    this._dataService = e;
    this.status = "idle";
    this.items = [];
    this.panelKey = undefined;
    this._disposed = false;
    this._loadedPanelSignature = JSON.stringify(null);
    this.load = (e) => {
      var t;
      var i = JSON.stringify(
        (t = e == null ? undefined : e.panelKeys) != null ? t : null,
      );
      if (
        this._disposed ||
        (this.status === "ready" && this._loadedPanelSignature === i)
      ) {
        return Promise.resolve();
      }
      if (!this._pending) {
        J.h5(() => {
          this.status = "loading";
        });
        this._pending = this._load(e, i).finally(() => {
          this._pending = undefined;
        });
      }
      return this._pending;
    };
    var t;
    var i = BD();
    if (i) {
      this.items = i.items;
      this.panelKey = i.panelKey;
      this.status = "ready";
      this._loadedPanelSignature = JSON.stringify(
        (t = i.panelKeys) != null ? t : null,
      );
    }
    this.initialSnapshotRestored = true;
    J.Gn(this, {
      status: J.sH,
      items: J.sH.ref,
      panelKey: J.sH,
    });
  }
}
tX = b.Cg(
  [
    b.Qj(0, tZ.L),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [tZ.L === undefined ? Object : tZ.L]),
  ],
  tX,
);
class t9 {
  navigate(e) {
    return f
      ._(function* () {
        if (e.type === "guide-overlay") {
          return void (yield this._commerceTopBannerManager.handleBannerClick(
            eZ.$.GuideOverlay,
            e.schema,
          ));
        }
        const t =
          yield this._contentGeneratorFeatureLoaderService.getInstance();
        yield t2.W(t, e.target);
        if (
          this._accountService.hasLogin ||
          (yield H.D(this._accountService, en.HH.AiFeature))
        ) {
          this._uiConfigurationService.navigate(v.Du.AIGeneratedRecord, {
            query: {
              enter_from: "ai_feature",
              from_page: "create",
              ai_feature_name: e.target.contentGeneratorType,
            },
            state: {
              from: t1.O.HomeBanner,
            },
          });
          t.contentGeneratorReportManager.setCommonParams({
            aiFeatureName: e.target.contentGeneratorType,
          });
        }
      })
      .call(this);
  }
  constructor(e, t, i, r) {
    this._uiConfigurationService = e;
    this._contentGeneratorFeatureLoaderService = t;
    this._accountService = i;
    this._commerceTopBannerManager = r;
  }
}
t9 = b.Cg(
  [
    b.Qj(0, I.K),
    b.Qj(1, et.O),
    b.Qj(2, eT.i),
    b.Qj(3, eZ.h),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      I.K === undefined ? Object : I.K,
      et.O === undefined ? Object : et.O,
      eT.i === undefined ? Object : eT.i,
      eZ.h === undefined ? Object : eZ.h,
    ]),
  ],
  t9,
);
class t4 extends tb.z {
  get routeId() {
    return v.Du.Home;
  }
  get removeSSRTrigger() {
    return "csr_ready";
  }
  get csrReadySelector() {
    return "[".concat(tO.D, '="true"]');
  }
  get csrReadyAttribute() {
    return tO.D;
  }
  bootstrap() {
    this._syncInitialCreateMode();
    this._reportPageLoaded({
      type: "create",
      listenerName: "create_page_bootstrap",
      shouldWaitHeroElement: false,
    });
    this._bindAccountEvents();
    this._initGenerateInfoFromUrl();
    this._canvasEntry.initialize();
    this._recommendationCapsulesManager.initialize();
    this._recommendationFeedManager.load();
    this._whatsNewManager.load();
    this._homeCreationBannerManager.load(undefined);
    this._teamInviteJoinEntryService.restoreFromCurrentEntry();
    this._canvasEntry.activate();
  }
  content() {
    return w.jsxs(k.Z, {
      instantiationService: this._containerService,
      children: [
        w.jsx(M.t, {
          fallback: w.jsx("div", {}),
          children: w.jsx(C.nu, {
            children: () => {
              var csrReady =
                this._homeCreationBannerManager.initialSnapshotRestored &&
                this._whatsNewManager.initialSnapshotRestored &&
                this._recommendationFeedManager.initialSnapshotRestored;
              return w.jsx(tF, {
                Content: this._pageContent.Content,
                pageState: this._pageState,
                csrReady,
                recentCanvasProjectsManager: this._canvasEntry.recentProjects,
                getAssetBrowserService: this._getAssetBrowserService,
                onGeneratorSubmit: this._handleGeneratorSubmit,
                onModeChange: this._handleCreateModeChange,
                onCanvasActivate: this._handleCanvasActivate,
                onCanvasDeactivate: this._handleCanvasDeactivate,
                onCreateCanvasProject: this._canvasEntry.createProject,
                onOpenCanvasProject: this._canvasEntry.openProject,
                onRenameCanvasProject: this._canvasEntry.renameProject,
                onCopyCanvasProject: this._canvasEntry.copyProject,
                onDeleteCanvasProject: this._canvasEntry.deleteProject,
                onCanvasProjectSettingsShow:
                  this._canvasEntry.projectSettingsShow,
                onViewAllCanvasProjects: this._canvasEntry.viewAll,
              });
            },
          }),
        }),
        w.jsx(M.t, {
          fallback: null,
          children: w.jsx(td, {
            onStartGenerate: this._handleMarketingBuddyStartGenerate,
          }),
        }),
        w.jsx(t_, {}),
        w.jsx(M.t, {
          fallback: null,
          children: w.jsx(C.nu, {
            children: () => {
              var entry = this._homeCreationBannerManager.items.find((e) => {
                var t;
                return (
                  e.id ===
                  ((t = this._homeToolEntryManager.activeEntry) == null
                    ? undefined
                    : t.entryId)
                );
              });
              return w.jsx(eV.P, {
                entry,
                mode: "modal",
                session: this._homeToolEntrySession,
                getAssetBrowserService: this._getAssetBrowserService,
                onUploadAction:
                  this._clickReportManager.reportCreationEntryUploadAction,
              });
            },
          }),
        }),
      ],
    });
  }
  launchTool(e) {
    if (
      this._canvasToolEntryManager.selectedTool ||
      this._canvasToolEntryManager.isCopyingTemplate
    ) {
      return Promise.resolve({
        status: "busy",
      });
    }
    this._creationEntryActionManager.cancel();
    if (this._ensureInteractionLogin(en.HH.AiFeature)) {
      return this._homeToolEntrySession.launchTool(e);
    }
    return Promise.resolve({
      status: "cancelled",
    });
  }
  _openSameTabCreationLink(e) {
    const t = K.Zp(e);
    if (!t) {
      return void N.l.warning(l.Ay.t("fail_retry", {}, "操作失败，请重试"));
    }
    const i = K.Yl(e, window.location.href);
    const r = (
      i == null ? undefined : i.pathname.startsWith("".concat(p.Js, "/"))
    )
      ? i.pathname.slice(p.Js.length)
      : undefined;
    const n = r
      ? this._dreaminaUiConfigurationService.getRouteConfigByPath(r)
      : undefined;
    if (i && n && r) {
      let a;
      let o;
      const params = Object.fromEntries(
        Object.entries(
          (a = (o = j.B6(n.path, r)) == null ? undefined : o.params) != null
            ? a
            : {},
        ).filter((e) => e[1] !== undefined),
      );
      this._dreaminaUiConfigurationService.navigate(n.id, {
        params,
        query: "".concat(i.search).concat(i.hash),
      });
      return;
    }
    window.location.href = S.m(t, null, {
      logType: "js.href/src",
      reportOnly: "false",
      blackConfig: "{}",
      configMode: "merge",
      isCloseSSRReport: true,
      bid: "cc_dreamina",
      region: "cn",
      urlLimit: "-1",
      htmlLimit: "-1",
      isSaveValidUrl: false,
      isRuntimeLog: false,
      isDOMParser: false,
      escapeRule: "escape-report",
      reportUrl:
        "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
      htmlparserOptions: "{}",
      scmBranch: "-",
      scmName: "-",
      scmVersion: "-",
      webpackPluginVersion: "3.6.0",
      filename:
        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%5%Qmpi$*x6WWtk$2$$eH$$bnBs%jBaN$dqTldlZz09",
    });
  }
  _showChatInput() {
    if (this._pageState.mode !== "chat") {
      tN(() => {
        if (this._pageState.trySetMode("chat")) {
          this._handleCreateModeChange("chat");
          this._handleCanvasDeactivate();
        }
      });
    }
  }
  _reportCanvasProjectAction(action, projectId) {
    this._containerService
      .createInstance(B_1, {
        action,
        actionMethod: "click",
        projectId,
        page: "create",
        tab: "ai_canvas",
      })
      .report();
  }
  _openActivityDetail(actKey) {
    return f
      ._(function* () {
        (yield this._activityDetailFeatureLoaderService.getInstance()).openActivityDetail(
          {
            actKey,
            actFrom: "home-carousel",
          },
        );
      })
      .call(this);
  }
  _bindAccountEvents() {
    if (!this._hasBoundAccountEvents) {
      this._hasBoundAccountEvents = true;
      this._register(
        this._accountService.onDidLogin(() => {
          this._skillInteraction.invalidate();
          this._initGenerateInfoFromUrl();
        }),
      );
      this._register(
        this._accountService.onDidLogout(() => {
          this._skillInteraction.invalidate();
        }),
      );
    }
  }
  _registerPageActivationLifecycle() {
    this._register(
      this._dreaminaUiConfigurationService.onWouldRouteChange((e) => {
        this._skillInteraction.invalidate();
        this._canvasEntry.deactivate();
        if (typeof e === "string") {
          this._syncCreateModeFromRoutePath(e);
        }
        queueMicrotask(() => this._restoreTeamInviteJoinEntryOnHome());
      }),
    );
    if (typeof window !== "undefined") {
      this._register(
        A.k(window, "popstate", () => {
          this._skillInteraction.invalidate();
          this._canvasEntry.deactivate();
          this._syncCreateModeFromRoutePath(window.location.href);
        }),
      );
    }
    this._register(
      this._dreaminaUiConfigurationService.onKeepAliveChange((e) => {
        var { routeId, status } = e;
        if (routeId === this.routeId) {
          if (status === P.V.Activated) {
            this._syncCreateReportTab();
            this._canvasEntry.activate(true);
          } else if (status === P.V.InActivated) {
            this._homeToolEntrySession.close();
            this._skillInteraction.invalidate();
            this._canvasEntry.deactivate();
            this._clickReportManager.resetWhatsNewShow();
          }
        }
      }),
    );
  }
  _restoreTeamInviteJoinEntryOnHome() {
    let e;
    let t;
    if (
      ((t = this._dreaminaUiConfigurationService.getRouteConfigByPath(
        (e = this._dreaminaUiConfigurationService.currentRoutePath) != null
          ? e
          : "",
      )) == null
        ? undefined
        : t.id) === this.routeId
    ) {
      this._teamInviteJoinEntryService.restoreFromCurrentEntry();
    }
  }
  _syncCreateModeFromRoutePath(e) {
    if (!(typeof window === "undefined")) {
      let t;
      const i = new URL(e, window.location.origin);
      const r = i.pathname.startsWith(p.Js)
        ? i.pathname.slice(p.Js.length)
        : i.pathname;
      if (
        ((t = this._dreaminaUiConfigurationService.getRouteConfigByPath(r)) ==
        null
          ? undefined
          : t.id) === this.routeId
      ) {
        const n = this._syncCreateModeFromSearch(i.search);
        if (n) {
          if (n.mode === "canvas") {
            this._handleCanvasActivate();
          } else if (n.previousMode === "canvas") {
            this._handleCanvasDeactivate();
          }
        }
      }
    }
  }
  _ensureInteractionLogin(e) {
    return (
      !!this._accountService.hasLogin || (H.D(this._accountService, e), false)
    );
  }
  _syncCreateReportTab() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : this._pageState.mode;
    const tab = eI._S(e);
    eI.vL(this._containerService, tab);
    if (this._isCurrentRouteMatched()) {
      E.cQ(this._containerService, R.k).setCommonEventParams({
        page: en.W.Create,
        tab,
      });
    }
    return tab;
  }
  _syncInitialCreateMode() {
    if (typeof window !== "undefined") {
      this._syncCreateModeFromSearch(window.location.search);
    }
  }
  _syncCreateModeFromSearch(e) {
    let t;
    const mode = this._pageState.mode;
    const mode_1 =
      this._pageContent.Content.supportsCanvasMode === false
        ? "chat"
        : L.LN(
            (t =
              t6.VX(e) ??
              (() => {
                if (typeof document !== "undefined") {
                  try {
                    return t6.tv(document.cookie);
                  } catch (e) {
                    return;
                  }
                }
              })()) != null
              ? t
              : "chat",
          );
    if (this._pageState.trySetMode(mode_1)) {
      this._syncCreateReportTab(mode_1);
      if (mode === mode_1) {
        return undefined;
      }
      return {
        mode: mode_1,
        previousMode: mode,
      };
    }
  }
  _initGenerateInfoFromUrl() {
    return f
      ._(function* () {
        try {
          let e;
          let t;
          let i;
          let r;
          let n;
          const a =
            (r = (n = this._pageContent.Content).getGeneratorOptions) == null
              ? undefined
              : r.call(n);
          const o = a ? undefined : V();
          yield (
            ((e = this._containerService),
            (t =
              (i = a == null ? undefined : a.types) != null
                ? i
                : (o == null ? undefined : o.modeTabs)
                  ? o.types
                  : undefined),
            f._(function* () {
              const pathname = window.location.pathname;
              const search = window.location.search;
              const n = new AbortController();
              const a = E.cQ(e, I.K).onWouldRouteChange((e) => {
                if (
                  typeof e !== "string" ||
                  new URL(e, window.location.href).pathname !== pathname
                ) {
                  n.abort();
                }
              });
              const o = () => {
                if (window.location.pathname !== pathname) {
                  n.abort();
                }
              };
              window.addEventListener("popstate", o);
              try {
                yield f._(function* () {
                  let t;
                  let i;
                  const r = E.cQ(e, Z.c);
                  const n = (h = (u = ey()) == null ? undefined : u.get(Y.yR))
                    ? Y.t6(h)
                    : undefined;
                  if (n) {
                    yield (t = r.initializationBarrier) == null
                      ? undefined
                      : t.wait();
                    if (!r.hasLogin) {
                      return;
                    }
                    if (n.target === "canvas") {
                      return void window.location.replace(
                        S.m(Y.fS(n, new URL(window.location.href)), null, {
                          logType: "js.window.location",
                          reportOnly: "false",
                          blackConfig: "{}",
                          configMode: "merge",
                          isCloseSSRReport: true,
                          bid: "cc_dreamina",
                          region: "cn",
                          urlLimit: "-1",
                          htmlLimit: "-1",
                          isSaveValidUrl: false,
                          isRuntimeLog: false,
                          isDOMParser: false,
                          escapeRule: "escape-report",
                          reportUrl:
                            "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                          htmlparserOptions: "{}",
                          scmBranch: "-",
                          scmName: "-",
                          scmVersion: "-",
                          webpackPluginVersion: "3.6.0",
                          filename:
                            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emt3$1ZoT2Nrd3liSFZo$0Z*MFdrZE9ha3hZ$W05aFdFcHJ%RmhD-%dOd$$q$k1WMngwWTBjNW$X%kRO$EJqTWtaN$dqTldlZz09",
                        }),
                      );
                    }
                  }
                  if (!ev && typeof window !== "undefined") {
                    ev = true;
                    const a = Y.n6();
                    const o = Y.s1();
                    let focusTime = Y.xY();
                    const c = () => {
                      if (document.visibilityState === "visible") {
                        focusTime = Y.IJ();
                      }
                    };
                    window.addEventListener("focus", c);
                    document.addEventListener("visibilitychange", c);
                    a.subscribe((t) => {
                      if (t.type === "discover" && t.target === "generate") {
                        if (!eo(r.hasLogin, window.location.pathname)) {
                          return;
                        }
                        eS(e, 500)
                          .then(() => {
                            if (eo(r.hasLogin, window.location.pathname)) {
                              a.post({
                                type: "candidate",
                                version: Y.VJ,
                                transportId: t.transportId,
                                requesterTabId: t.requesterTabId,
                                target: "generate",
                                tabId: o,
                                focusTime,
                                focused: document.hasFocus(),
                              });
                            }
                          })
                          .catch(() => {});
                        return;
                      }
                      if (
                        t.type === "import" &&
                        t.targetTabId === o &&
                        t.task.target === "generate"
                      ) {
                        var { task } = t;
                        if (!eo(r.hasLogin, window.location.pathname)) {
                          return void a.post({
                            type: "declined",
                            version: Y.VJ,
                            transportId: task.transportId,
                            requesterTabId: t.requesterTabId,
                            targetTabId: o,
                            target: "generate",
                            reason: "session_inactive",
                          });
                        }
                        var n = Y.MM(task.transportId);
                        if (
                          (n == null ? undefined : n.status) === "completed"
                        ) {
                          a.post({
                            type: "claimed",
                            version: Y.VJ,
                            transportId: task.transportId,
                            requesterTabId: t.requesterTabId,
                            targetTabId: o,
                            target: "generate",
                          });
                          a.post({
                            type: "completed",
                            version: Y.VJ,
                            transportId: task.transportId,
                            requesterTabId: t.requesterTabId,
                            targetTabId: o,
                            target: "generate",
                          });
                          return;
                        }
                        eS(e, 1000)
                          .then(() =>
                            f._(function* () {
                              if (!eo(r.hasLogin, window.location.pathname)) {
                                return void a.post({
                                  type: "declined",
                                  version: Y.VJ,
                                  transportId: task.transportId,
                                  requesterTabId: t.requesterTabId,
                                  targetTabId: o,
                                  target: "generate",
                                  reason: "session_inactive",
                                });
                              }
                              const n = eA(e, {
                                thirdPartyId: task.thirdPartyId,
                                pluginSource: task.pluginSource,
                                transportId: task.transportId,
                              });
                              a.post({
                                type: "claimed",
                                version: Y.VJ,
                                transportId: task.transportId,
                                requesterTabId: t.requesterTabId,
                                targetTabId: o,
                                target: "generate",
                              });
                              yield n;
                              Y.z8({
                                version: Y.VJ,
                                transportId: task.transportId,
                                target: "generate",
                                status: "completed",
                                completedAt: Date.now(),
                              });
                              a.post({
                                type: "completed",
                                version: Y.VJ,
                                transportId: task.transportId,
                                requesterTabId: t.requesterTabId,
                                targetTabId: o,
                                target: "generate",
                              });
                            })(),
                          )
                          .catch((e) => {
                            if (e instanceof eg && e.stage === "generator") {
                              return void a.post({
                                type: "declined",
                                version: Y.VJ,
                                transportId: task.transportId,
                                requesterTabId: t.requesterTabId,
                                targetTabId: o,
                                target: "generate",
                                reason: "unavailable",
                              });
                            }
                            var r = eC(e);
                            Y.z8({
                              version: Y.VJ,
                              transportId: task.transportId,
                              target: "generate",
                              status: "failed",
                              completedAt: Date.now(),
                              reason: r,
                            });
                            a.post({
                              type: "failed",
                              version: Y.VJ,
                              transportId: task.transportId,
                              requesterTabId: t.requesterTabId,
                              targetTabId: o,
                              target: "generate",
                              reason: r,
                            });
                          });
                      }
                    });
                  }
                  const d =
                    ((g = (m = (v = ey()) == null ? undefined : v.get(Y.yR))
                      ? Y.t6(m)
                      : undefined) == null
                      ? undefined
                      : g.target) === "generate"
                      ? {
                          thirdPartyId: g.thirdPartyId,
                          pluginSource: g.pluginSource,
                          transportId: g.transportId,
                        }
                      : (p = e_()) != null
                        ? p
                        : eb;
                  if (d) {
                    if (
                      !d.transportId &&
                      (yield (i = r.initializationBarrier) == null
                        ? undefined
                        : i.wait(),
                      !r.hasLogin)
                    ) {
                      return void r.login({
                        platform: "douyin",
                        source: en.HH.Others,
                      });
                    }
                    try {
                      yield eA(e, d);
                    } catch (error) {
                      yield f._(function* () {
                        X.V.warn("[DccThirdPartyImport] import failed", error);
                        if (error instanceof em) {
                          if (
                            yield f._(function* () {
                              return (
                                !!(() => {
                                  let e;
                                  let t;
                                  let i;
                                  const r = (() => {
                                    if (typeof document !== "undefined") {
                                      let e;
                                      const t = document;
                                      if ((e = t.permissionsPolicy) != null) {
                                        return e;
                                      }
                                      return t.featurePolicy;
                                    }
                                  })();
                                  if (
                                    !(r == null ? undefined : r.allowsFeature)
                                  ) {
                                    return false;
                                  }
                                  const n =
                                    (e =
                                      (t = r.features) == null
                                        ? undefined
                                        : t.call(r)) != null
                                      ? e
                                      : (i = r.allowedFeatures) == null
                                        ? undefined
                                        : i.call(r);
                                  return (
                                    !!n &&
                                    eu.some((e) => {
                                      if (!n.includes(e)) {
                                        return false;
                                      }
                                      try {
                                        var t;
                                        return (
                                          ((t = r.allowsFeature) == null
                                            ? undefined
                                            : t.call(r, e)) === false
                                        );
                                      } catch (e) {
                                        return false;
                                      }
                                    })
                                  );
                                })() ||
                                (yield f._(function* () {
                                  let e;
                                  if (
                                    typeof navigator !== "undefined" &&
                                    ((e = navigator.permissions) == null
                                      ? undefined
                                      : e.query)
                                  ) {
                                    for (const name of eu) {
                                      try {
                                        return (yield navigator.permissions.query(
                                          {
                                            name,
                                          },
                                        )).state;
                                      } catch (e) {}
                                    }
                                  }
                                })()) === "denied"
                              );
                            })()
                          ) {
                            return void Q.A.info({
                              closable: true,
                              icon: null,
                              maskClosable: false,
                              title: l.Ay.t(
                                "web_clay_renderer_dcc_import_lna_block_title",
                                {},
                                "插件已拦截",
                              ),
                              content: l.Ay.t(
                                "web_clay_renderer_dcc_import_lna_block_desc",
                                {},
                                "请在浏览器中允许本地网络访问权限，然后重试",
                              ),
                              okText: l.Ay.t(
                                "web_clay_renderer_dcc_import_lna_block_cta",
                                {},
                                "查看指引",
                              ),
                              style: {
                                width: 716,
                              },
                              onOk: () => {
                                window.open(
                                  S.m(
                                    "https://bytedance.larkoffice.com/wiki/KlutwlyIZis8JbkLUQAc2BrJnzu",
                                    null,
                                    {
                                      logType: "js.window.location",
                                      reportOnly: "false",
                                      blackConfig: "{}",
                                      configMode: "merge",
                                      isCloseSSRReport: true,
                                      bid: "cc_dreamina",
                                      region: "cn",
                                      urlLimit: "-1",
                                      htmlLimit: "-1",
                                      isSaveValidUrl: false,
                                      isRuntimeLog: false,
                                      isDOMParser: false,
                                      escapeRule: "escape-report",
                                      reportUrl:
                                        "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                                      htmlparserOptions: "{}",
                                      scmBranch: "-",
                                      scmName: "-",
                                      scmVersion: "-",
                                      webpackPluginVersion: "3.6.0",
                                      filename:
                                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-kdKd$$ub*x$emt3$1ZoT2Nrd3liSFZo$0Z*MFdrZE9ha3hZ$W05aFdFcHJ%RmhD-%dOd$$q$k1WMngwWTBjNW$X%kRO$EJqTWtaN$dqTldlZz09",
                                    },
                                  ),
                                  "_blank",
                                  "noopener,noreferrer",
                                );
                              },
                            });
                          }
                          N.l.error(
                            l.Ay.t(
                              "web_clay_renderer_dcc_import_error_generic",
                              {},
                              "上传失败，请重试",
                            ),
                          );
                        }
                      })();
                      var u;
                      var h;
                      var p;
                      var v;
                      var m;
                      var g;
                      const y = eC(error);
                      if (d.transportId) {
                        Y.z8({
                          version: Y.VJ,
                          transportId: d.transportId,
                          target: "generate",
                          status: "failed",
                          completedAt: Date.now(),
                          reason: y,
                        });
                      }
                      return;
                    }
                    if (d.transportId) {
                      Y.z8({
                        version: Y.VJ,
                        transportId: d.transportId,
                        target: "generate",
                        status: "completed",
                        completedAt: Date.now(),
                      });
                      Y.n3(d.transportId);
                    }
                    eb = undefined;
                    if (typeof window !== "undefined") {
                      const _ = new URL(window.location.href);
                      _.searchParams.delete("channel");
                      _.searchParams.delete(el);
                      _.searchParams.delete(ed);
                      _.searchParams.delete("target");
                      _.searchParams.delete("need_login");
                      _.searchParams.delete(Y.yR);
                      window.history.replaceState(
                        window.history.state,
                        "",
                        "".concat(_.pathname).concat(_.search).concat(_.hash),
                      );
                    }
                  }
                })();
                o();
                if (n.signal.aborted) {
                  return;
                }
                yield P_1(e, search, t, n.signal);
              } finally {
                a.dispose();
                window.removeEventListener("popstate", o);
              }
            })())
          );
        } catch (e) {}
      })
      .call(this);
  }
  constructor(e, t, r, a, o, s, c, d, u, h, p) {
    var m;
    var g;
    var b;
    var w;
    super(t, r, a);
    m = this;
    this._pageContent = e;
    this._containerService = t;
    this._dreaminaUiConfigurationService = r;
    this._pageLoadEventService = a;
    this._accountService = o;
    this._activityDetailFeatureLoaderService = s;
    this._contentGeneratorFeatureLoaderService = c;
    this._recommendationCapsulesManager = d;
    this._recommendationFeedManager = u;
    this._teamInviteJoinEntryService = h;
    this._pageRuntime = p;
    this._hasBoundAccountEvents = false;
    this._pageState = new tJ();
    this._getAssetBrowserService = () => E.cQ(this._containerService, ex.h);
    this._handleCreationEntryActivate = function (e) {
      const t =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return f._(function* () {
        if (!m._homeToolEntrySession.busy) {
          let r;
          let a;
          const { action } = e;
          const s = s_1(
            e,
            _._(y._({}, t), {
              panelKey:
                (r = (a = t.panelKey) != null ? a : e.panelKey) != null
                  ? r
                  : m._homeCreationBannerManager.panelKey,
            }),
          );
          if (
            s.type === "custom" ||
            action.type === "tool" ||
            action.type === "canvas_tool"
          ) {
            m._creationEntryActionManager.cancel();
            const panelKey = s.panelKey;
            if (panelKey) {
              return void (yield ((e, t, r) => {
                let a;
                let o;
                let s = false;
                const onClose = (e) => {
                  if (!s) {
                    var t;
                    s = true;
                    if ((t = r.onClose) != null) {
                      t.call(r, e);
                    }
                  }
                };
                if ((a = r.signal) == null ? undefined : a.aborted) {
                  onClose(r.signal.reason !== "discard");
                  return Promise.resolve();
                }
                if (!r.panelKey.trim()) {
                  N.l.warning(l.Ay.t("fail_retry"));
                  onClose(false);
                  return Promise.resolve();
                }
                if (n) {
                  onClose(false);
                  return n;
                }
                const d = E.cQ(t, I.K);
                const u = new AbortController();
                const h = d.onWouldRouteChange(() => u.abort("discard"));
                const p = () => u.abort("discard");
                const v = () => {
                  var e;
                  return u.abort((e = r.signal) == null ? undefined : e.reason);
                };
                if ((o = r.signal) != null) {
                  o.addEventListener("abort", v);
                }
                window.addEventListener("popstate", p);
                return (n = require
                  .e("28k")
                  .then(require.bind(require, "H5u"))
                  .then((i) => {
                    var { openToolEntryModal } = i;
                    return openToolEntryModal(
                      e,
                      t,
                      _._(y._({}, r), {
                        onClose,
                      }),
                      u.signal,
                    );
                  })
                  .catch(() => {
                    onClose(u.signal.reason !== "discard");
                    if (!u.signal.aborted) {
                      N.l.warning(l.Ay.t("fail_retry"));
                    }
                  })
                  .finally(() => {
                    var e;
                    h.dispose();
                    if ((e = r.signal) != null) {
                      e.removeEventListener("abort", v);
                    }
                    window.removeEventListener("popstate", p);
                    n = undefined;
                  }));
              })(
                e,
                m._containerService,
                y._(
                  _._(y._({}, s), {
                    panelKey,
                  }),
                  {},
                ),
              ));
            }
            return void N.l.warning(l.Ay.t("fail_retry"));
          }
          if (
            action.type === "generation" ||
            action.type === "open_generator" ||
            action.type === "canvas_template"
          ) {
            return void (yield m._creationEntryActionManager.open(
              e,
              undefined,
            ));
          }
          m._clickReportManager.reportCreationEntryClick(e);
          m._creationEntryActionManager.cancel();
          if (action.type === "link") {
            return void (action.target === "same_tab"
              ? m._openSameTabCreationLink(action.url)
              : K.$i(action.url) ||
                N.l.warning(l.Ay.t("fail_retry", {}, "操作失败，请重试")));
          }
        }
      })();
    };
    this._handleGeneratorSubmit = (e) => {
      W_1(this._dreaminaUiConfigurationService, e);
    };
    this._handleWhatsNewActivate = (e) => {
      this._clickReportManager.reportWhatsNewClick(e);
      var { action } = e;
      if (action.type === "open-url") {
        if (B.e()) {
          var i = K.Zp(action.href);
          if (i) {
            window.location.href = S.m(i, null, {
              logType: "js.href/src",
              reportOnly: "false",
              blackConfig: "{}",
              configMode: "merge",
              isCloseSSRReport: true,
              bid: "cc_dreamina",
              region: "cn",
              urlLimit: "-1",
              htmlLimit: "-1",
              isSaveValidUrl: false,
              isRuntimeLog: false,
              isDOMParser: false,
              escapeRule: "escape-report",
              reportUrl:
                "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
              htmlparserOptions: "{}",
              scmBranch: "-",
              scmName: "-",
              scmVersion: "-",
              webpackPluginVersion: "3.6.0",
              filename:
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-W1Je%5%Qmpi$3hwWkZo%2NHSXlOWHBNTTBKb1dqSldla3d5$*5s-$-wWXdXbE01-W1Je%5%Qmpi$*x6WWtk$2$$eH$$bnBs%jBaN$dqTldlZz09",
            });
          }
          return;
        }
        K.$i(action.href);
        return;
      }
      if (action.type === "activity-detail") {
        this._openActivityDetail(action.actKey);
      } else {
        this._whatsNewNavigationManager.navigate(action);
      }
    };
    this._handleMarketingBuddyStartGenerate = () => {
      this._showChatInput();
      ((e) => {
        if (typeof document !== "undefined") {
          var t = document.createElement("input");
          t.type = "file";
          t.multiple = true;
          t.accept = "image/*";
          t.style.display = "none";
          var i = false;
          t.onchange = (t) =>
            f._(function* () {
              let i;
              const r = Array.from((i = t.target.files) != null ? i : []);
              a();
              if (r.length !== 0) {
                const n = yield e.getInstance();
                n.contentGeneratorManager.setContentGeneratorType("agentic");
                n.agenticGeneratorManager.dataAdapter.applyPrompt(
                  l.Ay.t(
                    "dm_web_type",
                    {},
                    "Turn your product into a 15-second TikTok video",
                  ),
                );
                n.contentGeneratorManager.activateContentGenerator();
                yield n.agenticGeneratorManager.importReferenceResourcesFromLocal(
                  r,
                );
              }
            })();
          t.addEventListener("cancel", a, {
            once: true,
          });
          window.addEventListener("focus", r, {
            once: true,
          });
          document.addEventListener("visibilitychange", n);
          document.body.appendChild(t);
          t.click();
        }
        function r() {
          window.setTimeout(() => {
            if (!(t.files && t.files.length !== 0)) {
              a();
            }
          }, 300);
        }
        function n() {
          if (!document.hidden) {
            r();
          }
        }
        function a() {
          if (!i) {
            i = true;
            window.removeEventListener("focus", r);
            document.removeEventListener("visibilitychange", n);
            t.remove();
          }
        }
      })(this._contentGeneratorFeatureLoaderService);
    };
    this._handleCanvasActivate = () => {
      this._canvasEntry.activate();
    };
    this._handleCreateModeChange = (e) => {
      if (e !== "chat") {
        this._creationEntryActionManager.cancel();
      }
      this._skillInteraction.invalidate();
      var t;
      var i;
      var before = eI.t2(this._containerService);
      if (typeof document !== "undefined") {
        try {
          document.cookie = t6.LO(e, window.location.protocol === "https:");
        } catch (e) {}
      }
      if (!(typeof window === "undefined")) {
        t = window.location.href;
        (i = new URL(t)).searchParams.set(t6.UV, e);
        var n = i.href;
        window.history.replaceState(window.history.state, "", n);
        var after = this._syncCreateReportTab(e);
        if (this._isCurrentRouteMatched()) {
          var teamId = T.y();
          var s = new ek.a(
            {},
            teamId
              ? {
                  teamId,
                }
              : {},
            this._containerService,
          );
          s.setCurrentPage(v.Du.Home, {
            routeId: v.Du.Home,
            urlPath: window.location.href,
          });
          s.setTab(after);
          s.setEnterFrom("tab_enter");
          s.report();
          this._containerService
            .createInstance($, {
              page: "create",
              before,
              after,
              urlPath: window.location.pathname,
            })
            .report();
        }
      }
    };
    this._handleCanvasDeactivate = () => {
      this._canvasEntry.deactivate();
    };
    this._handleCapsuleActivate = (e) => {
      if (e.type === "skill") {
        this._clickReportManager.reportSkillCapsuleClick(e);
        this._skillInteraction.applySkill(e.skill, "chat");
      }
    };
    this._handleCanvasCapsuleActivate = (e) => {
      if (e.type === "skill") {
        this._clickReportManager.reportSkillCapsuleClick(e);
        this._skillInteraction.applySkill(e.skill, "canvas");
      }
    };
    this._capsuleMoreAction = {
      label: l.Ay.t("web_mainframe_skill_capsule_more", {}, "More"),
      onActivate: () => {
        this._clickReportManager.reportMoreSkillsClick();
        X_1(this._dreaminaUiConfigurationService);
      },
    };
    this._clickReportManager = this._containerService.createInstance(tQ);
    this._legacyCanvasAvailabilityManager = this._register(
      this._containerService.createInstance(O),
    );
    this._skillInteraction = this._register(
      this._containerService.createInstance(eL.h, {
        isActive: (e) =>
          this._isCurrentRouteMatched() && this._pageState.mode === e,
      }),
    );
    this._whatsNewManager =
      (g =
        (b = (w = this._pageContent.Content).createWhatsNewManager) == null
          ? undefined
          : b.call(w, this._containerService)) != null
        ? g
        : this._containerService.createInstance(d_1);
    this._whatsNewNavigationManager = this._containerService.createInstance(t9);
    this._homeCreationBannerManager = this._register(
      this._containerService.createInstance(tX),
    );
    this._creationEntryActionManager = this._register(
      this._containerService.createInstance(eD),
    );
    this._homeToolEntrySession = this._register(
      this._containerService.createInstance(
        eB.b,
        v.Du.Home,
        () => this._pageState.canvasEnabled,
      ),
    );
    this._canvasToolEntryManager = this._homeToolEntrySession.canvas;
    this._homeToolEntryManager = this._homeToolEntrySession.tool;
    this._canvasEntry = this._register(
      this._containerService.createInstance(u_1, {
        isActive: () =>
          this._isCurrentRouteMatched() && this._pageState.mode === "canvas",
        isCanvasSupported: L.Wz,
        onEnabledChange: (e) => {
          this._pageState.setCanvasEnabled(e);
          if (!e) {
            this._skillInteraction.invalidate();
            this._canvasToolEntryManager.cancel();
          }
          this._syncCreateReportTab();
        },
        onInputVisibilityChange: (e) =>
          this._pageState.setShowCanvasAgentInput(e),
        reportProjectAction: (e, t) => this._reportCanvasProjectAction(e, t),
        legacyAvailability: this._legacyCanvasAvailabilityManager,
      }),
    );
    this._register(
      this._pageRuntime.bind({
        pageState: this._pageState,
        legacyCanvasAvailabilityManager: this._legacyCanvasAvailabilityManager,
        canvasEntry: this._canvasEntry,
        whatsNewManager: this._whatsNewManager,
        homeCreationBannerManager: this._homeCreationBannerManager,
        homeToolEntryManager: this._homeToolEntryManager,
        canvasToolEntryManager: this._canvasToolEntryManager,
        actions: {
          onWhatsNewActivate: this._handleWhatsNewActivate,
          onWhatsNewExpose: this._clickReportManager.reportWhatsNewShow,
          onCreationEntryActivate: this._handleCreationEntryActivate,
          onCreationEntryPreviewShow: (e) => {
            var t;
            return this._clickReportManager.reportCreationEntryPreviewShow(
              e,
              (t =
                this._contentGeneratorFeatureLoaderService.getInstanceSync()) ==
                null
                ? undefined
                : t.contentGeneratorManager.data.contentGeneratorType,
            );
          },
          onCapsuleActivate: this._handleCapsuleActivate,
          onCanvasCapsuleActivate: this._handleCanvasCapsuleActivate,
          moreSkills: this._capsuleMoreAction,
        },
      }),
    );
    this._registerPageActivationLifecycle();
  }
}
t4 = b.Cg(
  [
    b.Qj(0, t$.r.Service),
    b.Qj(1, x._),
    b.Qj(2, I.K),
    b.Qj(3, eR.s3),
    b.Qj(4, eT.i),
    b.Qj(5, ej.O),
    b.Qj(6, et.O),
    b.Qj(7, eN.c),
    b.Qj(8, tY.Q),
    b.Qj(9, tm.e),
    b.Qj(10, t5.z),
    b.Sn("design:type", Function),
    b.Sn("design:paramtypes", [
      typeof CreatePageContentProvider === "undefined"
        ? Object
        : CreatePageContentProvider,
      x._ === undefined ? Object : x._,
      I.K === undefined ? Object : I.K,
      eR.s3 === undefined ? Object : eR.s3,
      eT.i === undefined ? Object : eT.i,
      ej.O === undefined ? Object : ej.O,
      et.O === undefined ? Object : et.O,
      eN.c === undefined ? Object : eN.c,
      tY.Q === undefined ? Object : tY.Q,
      typeof ITeamManagementInviteJoinEntryServiceType === "undefined"
        ? Object
        : ITeamManagementInviteJoinEntryServiceType,
      t5.z === undefined ? Object : t5.z,
    ]),
  ],
  t4,
);
class ctor extends m.b {
  onContainerLoading() {
    this._registerLoadState(false);
  }
  onContainerLoadError() {
    this._registerLoadState(true);
    return true;
  }
  _registerLoadState(e) {
    this._dreaminaUiConfigurationService.registerConfig({
      [d.N.PageRoute]: [
        {
          id: this.routeId,
          path: p.ph[this.routeId],
          content: () =>
            c.createElement(
              "div",
              {
                role: e ? "alert" : "status",
                "aria-busy": !e,
                style: {
                  padding: 32,
                  textAlign: "center",
                },
              },
              e
                ? c.createElement(u.r, {
                    description: l.Ay.t("web_canva_loading_failed"),
                  })
                : c.createElement(
                    c.Fragment,
                    null,
                    c.createElement(h.w, {
                      size: 32,
                    }),
                    c.createElement(
                      "p",
                      null,
                      l.Ay.t("web_new_homepage_tab_project_loading"),
                    ),
                  ),
            ),
        },
      ],
    });
  }
  get routeId() {
    return v.Du.Home;
  }
  get ChildContainerFactory() {
    return g.o;
  }
  get ControllerConstructor() {
    return t4;
  }
  bootstrap(e) {
    e.bootstrap();
    return Promise.resolve();
  }
  constructor(...e) {
    super(...e);
    this.needBootstrapWhenContributionInit = false;
  }
}
export var contribution = {
  id: "CreatePage",
  ctor,
  instantiationPhase: s.J.Eager,
  registerWhenLogin: false,
};
