import a from "NY";
import r from "wn";
import o from "Z4";
import l from "KBh";
import i from "cG8";
import c from "bo";
import d from "st";
import s from "L8k";
import u from "M8X";
import p from "KF";
import h from "EfR";
import w from "CtwG";
import _ from "UN";
import b from "yJ";
import f from "zP";
import y from "DE";
import m from "Egb";
import g from "QaK";
import { K as K_1 } from "./module-KG_2.js";
import { Z } from "./module-zb_4.js";
import { F as F_1 } from "./module-Fl2.js";
import I from "EBF";
import P from "ZhJ";
import C from "rg";
import D from "ej";
import k from "DF";
import T from "fG";
import E from "N5p";
import R from "h8";
import N from "Aas";
import J from "Txu";
import A from "c2b";
import F from "WX";
import U from "RVr";
import W from "WP";
import K from "J2u";
import G from "Ew";
import z from "OCl";
import L from "AS";
import X from "WG";
import H from "HX";
import q from "dx";
export class n {
  startLifeCycle() {
    return a
      ._(function* () {
        U.X.startFlow();
        let e;
        const { i18nService, reportI18nEvents } = K_1();
        const i18nPromise = i18nService.allowToRender();
        const i = new d.L({
          checkDuplicate: true,
        });
        const c = J.b();
        const I = Z();
        const currentRoute = ((e) => {
          const n = m.ph[H.Du.Home];
          if (e === n || !q.ni(location.href)) {
            return e;
          }
          const t = q.Ir(location.href);
          window.history.replaceState(
            null,
            "",
            ""
              .concat(m.Js)
              .concat(n)
              .concat(t ? "?".concat(t) : "")
              .concat(location.hash),
          );
          return n;
        })((e = location.pathname.split(m.Js)) == null ? undefined : e[1]);
        W.TB(currentRoute);
        R.C(i, I, {
          currentRoute,
        });
        i.register(
          y.pG,
          new s.d(r.P, [
            {
              useInCN: true,
            },
          ]),
        );
        i.registerInstance(X.D, c);
        i.registerInstance(f.n, i18nService);
        i.register(o.o, new s.d(l.C, [{}]));
        const C = new p.J();
        b.jo(g.yZ);
        const D = F_1(C, c);
        b.qD(g.yZ);
        i.registerInstance(h.r, C);
        i.registerInstance(_.k, D);
        i.registerInstance(w.F, I);
        A.u(i, D, I);
        const k = new u.nP(i.makeCollection());
        const T = new d.L();
        N.i(T, {
          currentRoute,
        });
        const containerService = new u.nP(T.makeCollection(), k);
        k.onError((e) => {
          if (e.errorType === u.m4.UnknownDependency) {
            K.p(containerService, {
              errorType: u.m4.UnknownDependency,
              dependencyId: e.dependencyId,
              issuer: e.issuer,
            });
          }
        });
        yield this._jobSchedulerExecute({
          containerService,
          currentRoute,
          i18nPromise,
          reportI18nEvents,
        });
        b.qD(g.cN);
        G.j(containerService);
        z.S(containerService);
        L.V(containerService);
      })
      .call(this);
  }
  _jobSchedulerExecute(e) {
    return a
      ._(function* (e) {
        const {
          containerService,
          currentRoute,
          i18nPromise,
          reportI18nEvents,
        } = e;
        const o = new c.ob();
        this._jobScheduler.addJob(new I.H(containerService));
        this._jobScheduler.addJob(new P.K());
        this._jobScheduler.addJob(
          new C.k(containerService, {
            currentRoute,
          }),
        );
        this._jobScheduler.addJob(new D.J(i18nPromise, containerService));
        F.a(containerService);
        this._jobScheduler.addJob(new k.c(containerService));
        this._jobScheduler.addJob(
          new T.M(
            {
              customReportEvents: [reportI18nEvents],
            },
            containerService,
          ),
        );
        this._jobScheduler.addJob(new E.c(containerService));
        this._jobScheduler.prepare(o, "Start");
        yield this._jobScheduler.wait(o, "Start");
        b.jo(g.Tr);
        this._jobScheduler.prepare(o, "UserInit");
        yield this._jobScheduler.wait(o, "UserInit");
        b.qD(g.Tr);
        U.X.reportFlowPhase("user_init_end");
        b.jo(g.Ce);
        this._jobScheduler.prepare(o, "Prepare");
        yield this._jobScheduler.wait(o, "Prepare");
        b.qD(g.Ce);
        U.X.reportFlowPhase("prepare_end");
        b.jo(g.zn);
        this._jobScheduler.prepare(o, "Render");
        yield this._jobScheduler.wait(o, "Render");
        b.qD(g.zn);
        U.X.reportFlowPhase("render_end");
        b.jo(g.IU);
        this._jobScheduler.prepare(o, "Completed");
        yield this._jobScheduler.wait(o, "Completed");
        b.qD(g.IU);
        U.X.reportFlowPhase("flow_complete");
      })
      .apply(this, arguments);
  }
  constructor() {
    this._jobScheduler = new i.l("Unkown");
  }
}
