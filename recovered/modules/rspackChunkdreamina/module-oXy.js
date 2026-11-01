import r from "NY";
import n from "oa";
import a from "bk";
import o from "QWK";
import s from "cO";
import { j as image } from "./module-EHr.js";
import d from "A0";
import { Vl } from "./module-at_2.js";
import { p as p_1 } from "./module-K4.js";
import { o as o_1 } from "./module-i7_2.js";
import { H } from "./module-HR_3.js";
import p from "Kt";
import m from "krt";
import { B } from "./module-Vck.js";
const _ = {
  image,
  video: d.P,
};
class f extends Error {
  constructor(e, t = e) {
    super(t);
    this.code = e;
    this.name = "MediaPreparationError";
  }
}
export { f as S };
function y(e) {
  if (e.aborted) {
    throw new DOMException("Media preparation was cancelled", "AbortError");
  }
}
function b(e) {
  return typeof e === "number" && Number.isFinite(e) && e > 0;
}
function S(e) {
  return !!(e && /^https?:\/\//i.test(e));
}
export class D {
  getFileAccept(e) {
    return e.allowedMediaTypes
      .map((t) => {
        var i;
        var r;
        if ((i = (r = e.acceptedFormats) == null ? undefined : r[t]) != null) {
          return i;
        }
        return Object.entries(_[t])
          .flatMap((e) => {
            var [t, i] = e;
            return [t, ...i];
          })
          .join(",");
      })
      .join(",");
  }
  prepareFile(e, t) {
    return r
      ._(function* () {
        const { signal, policy } = t;
        y(signal);
        const { type, file } = this._resolveLocalFile(e, policy);
        yield (v = policy.validateFile) == null
          ? undefined
          : v.call(policy, file);
        y(signal);
        const l =
          type === "image"
            ? this._containerService.createInstance(Vl, {
                file,
              })
            : this._containerService.createInstance(p_1, {
                file,
              });
        h = false;
        const d = () => {
          if (!h) {
            h = true;
            l.dispose();
            if (l.type === "video" && l.url.startsWith("blob:")) {
              URL.revokeObjectURL(l.url);
            }
          }
        };
        signal.addEventListener("abort", d, {
          once: true,
        });
        try {
          var h;
          var v;
          let p;
          const m = yield this._resolveLocalMetadata(l);
          y(signal);
          yield (p = policy.validateMetadata) == null
            ? undefined
            : p.call(policy, m);
          y(signal);
          const g = yield l
            .resolveUri({
              signal,
            })
            .catch(() => {
              throw new f("upload-failed");
            });
          y(signal);
          if (!(g == null ? undefined : g.trim())) {
            throw new f("upload-failed");
          }
          const _ = yield this._resolveRemoteMedia(
            l.type,
            g,
            "local",
            signal,
            m.type === "image" ? m : undefined,
          );
          return yield this._validatePreparedMedia(
            a._(n._({}, _), {
              title: e.name,
            }),
            t,
          );
        } catch (error) {
          y(signal);
          throw error;
        } finally {
          signal.removeEventListener("abort", d);
          d();
        }
      })
      .call(this);
  }
  prepareAsset(e, t) {
    return r
      ._(function* () {
        let i;
        const { signal, policy } = t;
        y(signal);
        if (!policy.allowedMediaTypes.includes(e.type)) {
          throw new f("unsupported-media");
        }
        const o =
          (i = e.type === "image" ? e.uri : e.vid) == null
            ? undefined
            : i.trim();
        if (!o) {
          throw new f("source-unavailable");
        }
        try {
          const s = yield this._resolveRemoteMedia(e.type, o, "asset", signal);
          return yield this._validatePreparedMedia(
            n._(
              {},
              s,
              e.title !== undefined
                ? {
                    title: e.title,
                  }
                : {},
              e.sourceItemId !== undefined
                ? {
                    sourceItemId: e.sourceItemId,
                  }
                : {},
              e.historyId !== undefined
                ? {
                    historyId: e.historyId,
                  }
                : {},
            ),
            t,
          );
        } catch (error) {
          y(signal);
          throw error;
        }
      })
      .call(this);
  }
  _resolveLocalFile(e, t) {
    const { file, type } = B(e);
    if (type && t.allowedMediaTypes.includes(type)) {
      let n;
      let a;
      const o = (n = t.acceptedFormats) == null ? undefined : n[type];
      const s = o === undefined ? _[type] : {};
      if (o !== undefined) {
        for (const l of o.split(",").filter(Boolean)) {
          if (l.startsWith(".")) {
            ((a = s[""]) != null ? a : (s[""] = [])).push(l);
          } else {
            s[l] = [];
          }
        }
      }
      if (o_1(file, s)) {
        return {
          type,
          file,
        };
      }
    }
    throw new f("unsupported-media");
  }
  _validatePreparedMedia(e, t) {
    return r._(function* () {
      let i;
      let r;
      const { signal, policy } = t;
      y(signal);
      const o =
        e.type === "image"
          ? {
              type: e.type,
              width: e.width,
              height: e.height,
            }
          : {
              type: e.type,
              width: e.width,
              height: e.height,
              durationSeconds: e.durationSeconds,
            };
      yield (i = policy.validateMetadata) == null
        ? undefined
        : i.call(policy, o);
      y(signal);
      yield (r = policy.validateMedia) == null ? undefined : r.call(policy, e);
      y(signal);
      return e;
    })();
  }
  _resolveLocalMetadata(e) {
    return r._(function* () {
      const t = yield e.resolveMetadata().catch(() => {
        throw new f("invalid-metadata");
      });
      if (!t || !b(t.width) || !b(t.height)) {
        throw new f("invalid-metadata");
      }
      if (e.type === "video") {
        if (!("duration" in t) || !b(t.duration)) {
          throw new f("invalid-metadata");
        }
        return {
          type: e.type,
          width: t.width,
          height: t.height,
          durationSeconds: t.duration,
        };
      }
      return {
        type: e.type,
        width: t.width,
        height: t.height,
      };
    })();
  }
  _resolveRemoteImageDimensions(e, t) {
    return r._(function* () {
      y(t);
      const i = new Image();
      const { promise, resolve, reject } = Promise.withResolvers();
      const o = () =>
        reject(
          new DOMException("Media preparation was cancelled", "AbortError"),
        );
      try {
        i.onload = () => {
          var { naturalWidth, naturalHeight } = i;
          if (b(naturalWidth) && b(naturalHeight)) {
            resolve({
              width: naturalWidth,
              height: naturalHeight,
            });
          } else {
            reject(new f("invalid-metadata"));
          }
        };
        i.onerror = () => reject(new f("invalid-metadata"));
        t.addEventListener("abort", o, {
          once: true,
        });
        i.crossOrigin = "anonymous";
        i.src = s.m(e, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMllsZFdhMkZ-%lhSak1qa3hZMjFP-k$3e%1Xe*FSMnhv$EZoT2Rt%llTbXBh$Xp*M1kyM$dkMWxZ%214amF%$XdZekpHZ$ZvelZubz0",
        });
        return yield promise;
      } finally {
        i.onload = null;
        i.onerror = null;
        t.removeEventListener("abort", o);
        i.removeAttribute("src");
      }
    })();
  }
  _resolveRemoteMedia(e, t, origin, a, o) {
    return r
      ._(function* () {
        if (e === "image") {
          var r;
          const s = yield this._materialDataService
            .getUrlByUris({
              uris: [t],
            })
            .catch(() => {
              throw new f("source-unavailable");
            });
          y(a);
          const l = s.ok ? s.value.uri2Image[t] : undefined;
          if (!l || !S(l.imageUrl)) {
            throw new f("source-unavailable");
          }
          let d = origin === "local" ? o : undefined;
          if (b(l.width) && b(l.height)) {
            d = l;
          }
          if (!d) {
            d = yield this._resolveRemoteImageDimensions(l.imageUrl, a);
          }
          return {
            type: e,
            origin,
            uri: t,
            url: l.imageUrl,
            width: d.width,
            height: d.height,
          };
        }
        const c = yield this._materialDataService
          .getVideoByVids({
            vids: [t],
          })
          .catch(() => {
            throw new f("source-unavailable");
          });
        y(a);
        const u = c.ok ? c.value.vid2Video[t] : undefined;
        const h = [
          u == null ? undefined : u.originVideo,
          ...Object.values(
            (r = u == null ? undefined : u.transcodedVideo) != null ? r : {},
          ),
        ];
        for (const p of h) {
          if (
            (p == null ? undefined : p.videoUrl) &&
            S(p.videoUrl) &&
            b(p.width) &&
            b(p.height) &&
            b(p.duration)
          ) {
            const m =
              origin === "local" ? yield H(p.videoUrl).catch(() => null) : p;
            y(a);
            if (!m || !b(m.width) || !b(m.height) || !b(m.duration)) {
              throw new f("invalid-metadata");
            }
            return n._(
              {
                type: e,
                origin,
                vid: t,
                url: p.videoUrl,
                width: m.width,
                height: m.height,
                durationSeconds: m.duration,
              },
              S(p.coverUrl)
                ? {
                    coverUrl: p.coverUrl,
                  }
                : {},
            );
          }
        }
        throw new f(
          h.some((e) => S(e == null ? undefined : e.videoUrl))
            ? "invalid-metadata"
            : "source-unavailable",
        );
      })
      .call(this);
  }
  constructor(e, t) {
    this._containerService = e;
    this._materialDataService = t;
  }
}
D = o.Cg(
  [
    o.Qj(0, p._),
    o.Qj(1, m.H),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      p._ === undefined ? Object : p._,
      m.H === undefined ? Object : m.H,
    ]),
  ],
  D,
);
