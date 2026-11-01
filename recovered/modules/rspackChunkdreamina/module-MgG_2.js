import i from "NY";
import n from "M8X";
import a from "K8";
import o from "ar";
import c from "mgb";
import { D } from "./module-lH7.js";
import s from "VN";
function d(e) {
  return i._(function* () {
    try {
      return yield D(e);
    } catch (error) {
      return a.xz(-1, error instanceof Error ? error.message : String(error));
    }
  })();
}
export var ev = (e, t) =>
  i._(function* () {
    const r = n.cQ(e, c.P);
    const i = Number(n.cQ(e, o.k).appId);
    const a = r
      .fetchVIPInfo({
        aid: i,
        scene: "vip",
        useMaster: t,
        needSignInfo: true,
      })
      .then((t) => {
        if (t.ok) {
          var r = n.cQ(e, s._);
          var i = t.value;
          r.setVipInfo(i);
        }
        return t;
      });
    const [l, u] = yield Promise.allSettled([d(e), a]);
    if (l.status === "rejected") {
      throw l.reason;
    }
    if (l.value !== true && l.value !== false) {
      return l.value;
    }
    if (u.status === "rejected") {
      throw u.reason;
    }
    return u.value;
  })();
export var CA = (e, t) =>
  i._(function* () {
    const r = n.cQ(e, c.P);
    const i = Number(n.cQ(e, o.k).appId);
    const a = r
      .fetchVIPInfo({
        aid: i,
        scene: "vip",
        useMaster: t,
        needSignInfo: true,
      })
      .then((t) => {
        if (t.ok) {
          var r = n.cQ(e, s._);
          var i = t.value;
          r.setVipInfoSilently(i);
        }
        return t;
      });
    const [l, u] = yield Promise.allSettled([d(e), a]);
    if (l.status === "rejected") {
      throw l.reason;
    }
    if (l.value !== true && l.value !== false) {
      return l.value;
    }
    if (u.status === "rejected") {
      throw u.reason;
    }
    return u.value;
  })();
export var J_ = (e) => {
  var t;
  var r;
  var i = n.cQ(e, s._);
  var [a] =
    (t = (r = i.vipInfo) == null ? undefined : r.vipLevels) != null ? t : [];
  if (a && Date.now() > 1000 * a.endTime && i.isVip) {
    ev(e);
  }
};
