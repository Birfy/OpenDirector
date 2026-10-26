import n from "QWK";
import r from "Kt";
import a from "NY";
import o from "cBI";
import s from "yF";
import c from "KC";
import l from "dR";
import d from "qN";
import u from "fg";
import v from "b5";
import m from "iN";
import p from "oa";
import _ from "bk";
import y from "qa";
import h from "K8";
import g from "fm";
import { wh } from "./module-QI_2.js";
function I(e) {
  return e !== null && typeof e === "object" && !Array.isArray(e);
}
function S(e) {
  if (!I(e)) {
    return e;
  }
  const { image_url_map, video_url_map } = e;
  const n = y._(e, ["image_url_map", "video_url_map"]);
  return _._(p._({}, u.o(n, g.Cb)), {
    imageUrlMap: image_url_map,
    videoUrlMap: video_url_map,
  });
}
class b {
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
    return a
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
              const i = new Set(t.panelKeys);
              if (
                !I(e) ||
                e.scene !== "web_home_creation_banner" ||
                !Array.isArray(e.panels) ||
                e.panels.some(
                  (e) =>
                    !I(e) ||
                    typeof e.panel_key !== "string" ||
                    !i.has(e.panel_key),
                )
              ) {
                return h.xz(-1, "home creation banner panel query mismatch");
              }
              return wh({
                scene: e.scene,
                source: e.source,
                panels: e.panels.map((e) => ({
                  panelKey: e.panel_key,
                  panelName: e.panel_name,
                  items: Array.isArray(e.items) ? e.items.map(S) : e.items,
                })),
              });
            }
            if (!e || typeof e !== "object" || Array.isArray(e)) {
              return wh(e);
            }
            const { items } = e;
            const r = y._(e, ["items"]);
            return wh(
              _._(p._({}, u.o(r, g.Cb)), {
                items: Array.isArray(items) ? items.map(S) : items,
              }),
            );
          })(t.data, e);
        } catch (error) {
          return v.r(error);
        }
      })
      .call(this);
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
b = n.Cg(
  [
    n.Qj(0, m.r),
    n.Qj(1, r._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      m.r === undefined ? Object : m.r,
      r._ === undefined ? Object : r._,
    ]),
  ],
  b,
);
export class G {
  getConfig(e) {
    return this._repository.getConfig(e);
  }
  constructor(e) {
    this._serviceBrand = undefined;
    this._repository = e.createInstance(b);
  }
}
G = n.Cg(
  [
    n.Qj(0, r._),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [r._ === undefined ? Object : r._]),
  ],
  G,
);
