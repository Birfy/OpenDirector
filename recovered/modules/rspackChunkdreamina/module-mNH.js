import i from "NY";
import a from "m0R";
import { I as I_1 } from "./module-dGh.js";
import { x as x_1 } from "./module-NdQ_3.js";
import s from "lBw";
import l from "Mo";
import { I as I_2 } from "./module-Jf5.js";
import d from "QWK";
import u from "Kt";
import v from "KC";
import h from "dR";
import p from "qN";
import m from "fg";
import g from "fm";
import _ from "b5";
import y from "cBI";
import f from "yF";
import S from "iN";
import { N as N_1 } from "./module-oN4.js";
import { g as g_1 } from "./module-wbq.js";
import w from "kF";
import I from "Dm";
import C from "xL";
import N from "s6";
import P from "g2I";
import W from "v1F";
import j from "nNe";
import M from "BXA";
import { D } from "./module-mJ_3.js";
import { E } from "./module-eU3.js";
import * as x from "./module-Jw_2.js";
import { $ as $_1, Q } from "./module-Ri3.js";
import { r as r_1 } from "./module-K9.js";
import { z } from "./module-jI.js";
class F extends w.v {
  constructor(...e) {
    super(...e);
    this.eventName = "perf_capability_capsule_status";
  }
}
class R extends C.N {
  _getCollectorClass() {
    return F;
  }
  _validateParams(e) {
    ["scene", "status", "code", "message", "log_id"].forEach((t) => {
      I.F4(
        e[t],
        "[PerfCapabilityCapsuleStatusReporter] ".concat(t, " is required"),
      );
    });
  }
  constructor(e, t) {
    super(e, t);
    this._containerService = t;
    this._reportDev = true;
  }
}
R = d.Cg(
  [
    d.Qj(1, u._),
    d.Sn("design:type", Function),
    d.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      u._ === undefined ? Object : u._,
    ]),
  ],
  R,
);
class $ {
  get _networkClient() {
    let e;
    let t;
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        ((e = this._containerService),
        (t = new v.LL().build({
          withCredentials: true,
        })),
        y.U(e, t),
        h.vo(t),
        p.Wh(t),
        f.P(t),
        t);
    }
    return this._networkClientInstance;
  }
  getCapsules(e) {
    return i
      ._(function* () {
        try {
          const t = m.w(
            {
              scene: e.scene,
            },
            true,
          );
          const r = yield this._networkClient.post(
            this._getApi("/mweb/v1/capability/capsules"),
            t,
          );
          const i = g_1(m.o(r.data, g.Cb), e.scene);
          this._reportStatus({
            scene: e.scene,
            status: i.ok ? "success" : "fail",
            code: i.ok ? r.ret : "".concat(i.code),
            message: i.ok ? r.errmsg : i.msg,
            logId: r.logid,
          });
          return i;
        } catch (error) {
          let a;
          const o = _.r(error);
          this._reportStatus({
            scene: e.scene,
            status: "fail",
            code: "".concat(o.code),
            message: o.msg,
            logId: (a = N_1(o)) != null ? a : "",
          });
          return o;
        }
      })
      .call(this);
  }
  _reportStatus(e) {
    try {
      this._containerService.createInstance(R, e).report("slardar");
    } catch (e) {}
  }
  _getApi(path) {
    return this._httpApiSettingService.getRequestURL({
      domainType: S.X.DEFAULT,
      path,
    });
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._containerService = t;
  }
}
$ = d.Cg(
  [
    d.Qj(0, S.r),
    d.Qj(1, u._),
    d.Sn("design:type", Function),
    d.Sn("design:paramtypes", [
      S.r === undefined ? Object : S.r,
      u._ === undefined ? Object : u._,
    ]),
  ],
  $,
);
class T {
  getCapsules(e) {
    return this._repository.getCapsules(e);
  }
  constructor(e) {
    this._serviceBrand = undefined;
    this._repository = e.createInstance($);
  }
}
T = d.Cg(
  [
    d.Qj(0, u._),
    d.Sn("design:type", Function),
    d.Sn("design:paramtypes", [u._ === undefined ? Object : u._]),
  ],
  T,
);
class O {
  get model() {
    if (!this._model) {
      throw Error("Create page runtime must be bound before rendering Content");
    }
    return this._model;
  }
  bind(e) {
    if (this._model) {
      throw Error("Create page runtime already has an active Controller");
    }
    this._model = e;
    return {
      dispose: () => {
        if (this._model === e) {
          this._model = undefined;
        }
      },
    };
  }
}
class Z extends M.v {
  _registerChildLevelServices(e) {
    const t = this;
    const r = () => super._registerChildLevelServices;
    return i._(function* () {
      e.registry.register(s.C, l.l);
      e.registry.register(I_2, T);
      e.registry.register(x.c, x.n);
      e.registry.register(N.a, P.p);
      e.registry.register(W.v, j.k);
      e.registry.register(Q, $_1);
      e.registry.register(D, E);
      e.registry.register(I_1, x_1);
      yield r().call(t, e);
    })();
  }
}
export { Z as v };
export class o extends Z {
  _registerChildLevelServices(e) {
    const t = this;
    const r = () => super._registerChildLevelServices;
    return i._(function* () {
      e.registry.register(z, O);
      const variant = a.w();
      yield r_1.register(e.registry, {
        isOversea: false,
        variant,
      });
      yield r().call(t, e);
    })();
  }
}
