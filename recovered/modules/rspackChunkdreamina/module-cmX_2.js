import r from "QWK";
import n from "Kt";
import i from "NY";
import o from "cBI";
import s from "yF";
import c from "KC";
import l from "dR";
import d from "qN";
import u from "fg";
import p from "b5";
import m from "iN";
import h from "oa";
import v from "bk";
import g from "qa";
import f from "K8";
import b from "fm";
import { wh } from "./module-QI_4.js";
function y(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function w(e) {
  if (!y(e)) {
    return e;
  }
  const { image_url_map, video_url_map } = e;
  const r = g._(e, ["image_url_map", "video_url_map"]);
  return v._(h._({}, u.o(r, b.Cb)), {
    imageUrlMap: image_url_map,
    videoUrlMap: video_url_map,
  });
}
class k {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new c.LL().build({
          withCredentials: true,
        })),
        o.U(e, t),
        l.vo(t),
        d.Wh(t),
        s.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  getConfig(e) {
    return i
      ._(function* () {
        try {
          const t = yield this._networkClient.post(
            this._httpApiSettingService.getRequestURL({
              domainType: m.X.DEFAULT,
              path: "/mweb/v1/get_home_creation_banner_config",
            }),
            e
              ? u.w({
                  panelKeys: [...e.panelKeys],
                })
              : {},
          );
          return ((e, t) => {
            if (t) {
              const a = new Set(t.panelKeys);
              if (
                !y(e) ||
                e.scene !== "web_home_creation_banner" ||
                !Array.isArray(e.panels) ||
                e.panels.some(
                  (e) =>
                    !y(e) ||
                    typeof e.panel_key !== "string" ||
                    !a.has(e.panel_key),
                )
              ) {
                return f.xz(-1, "home creation banner panel query mismatch");
              }
              return wh({
                scene: e.scene,
                source: e.source,
                panels: e.panels.map((e) => ({
                  panelKey: e.panel_key,
                  panelName: e.panel_name,
                  items: Array.isArray(e.items) ? e.items.map(w) : e.items,
                })),
              });
            }
            if (!e || typeof e !== "object" || Array.isArray(e)) {
              return wh(e);
            }
            const { items } = e;
            const n = g._(e, ["items"]);
            return wh(
              v._(h._({}, u.o(n, b.Cb)), {
                items: Array.isArray(items) ? items.map(w) : items,
              }),
            );
          })(t.data, e);
        } catch (error) {
          return p.r(error);
        }
      })
      .call(this);
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
k = r.Cg(
  [
    r.Qj(0, m.r),
    r.Qj(1, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      m.r === undefined ? Object : m.r,
      n._ === undefined ? Object : n._,
    ]),
  ],
  k,
);
export class G {
  getConfig(e) {
    return this._repository.getConfig(e);
  }
  constructor(e) {
    this._serviceBrand = undefined;
    this._repository = e.createInstance(k);
  }
}
G = r.Cg(
  [
    r.Qj(0, n._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  G,
);
