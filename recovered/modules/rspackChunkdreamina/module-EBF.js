import r from "bE";
import n from "TK";
import a from "CQ";
import o from "nO5";
import s from "UN";
import l from "yJ";
import c from "oF8";
import d from "cy";
import u from "FV";
import h from "QaK";
import m from "r9";
import g from "in";
import v from "CK";
import _ from "dL";
import p from "F9";
import f from "Iej";
import b from "qt";
import y from "lH";
import { v as v_1 } from "./module-lyK.js";
function w(e) {
  try {
    if (e) {
      localStorage.setItem(u.o.dreaminaHasLogin, "1");
      localStorage.setItem(u.o.dreaminaEverLoggedIn, "1");
      localStorage.removeItem(u.o.oneTapLoginPending);
    } else {
      localStorage.removeItem(u.o.dreaminaHasLogin);
    }
  } catch (e) {}
}
export class H extends a.G {
  _executePhase(e, t) {
    switch (t) {
      case "UserInit":
        f.Rh(this._containerService);
        this._waitUserInitialize();
        break;
      case "Prepare":
        this._prepareBindCapcutAccountToken();
        break;
      case "Completed":
        this._whenCompleted();
    }
  }
  _waitUserInitialize() {
    l.jo(h.rl);
    const e = this._containerService.invokeFunction((e) => e.get(r.c));
    y.QV(() => this._containerService.createInstance(c.y)).catch(
      () => undefined,
    );
    const t = this._containerService.invokeFunction((e) => e.get(s.k));
    const i = function () {
      const i =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : e.hasLogin;
      v_1(t, e, i);
    };
    const a = () => {
      this._containerService.invokeFunction((e) => {
        e.get(n.a).abTestManager.refreshAfterAccountIdentityChange();
      });
    };
    const m = e.initialize().then(() => {
      w(e.hasLogin);
      i();
    });
    e.onDidLogin(() => {
      try {
        localStorage.setItem(u.o.dreaminaEverLoggedIn, "1");
      } catch (e) {}
      i(true);
      a();
    });
    e.onDidLogout(() => {
      w(false);
      i(false);
      a();
    });
    this._containerService
      .invokeFunction((e) => e.get(d.L2))
      .aggregate.getHasPublishAuthority();
    const g = o.k(m);
    this._setBarrier("UserInit", g);
    l.qD(h.rl);
    return g.wait();
  }
  _prepareBindCapcutAccountToken() {
    _.P(this._containerService);
  }
  _whenCompleted() {
    b.T(this._containerService);
    f.Zt(this._containerService);
    p.A(this._containerService);
    v.Q(this._containerService);
    g.O(this._containerService);
    g.R(this._containerService);
    m.g(this._containerService);
  }
  constructor(e) {
    super();
    this._containerService = e;
    this._name = "account";
  }
}
