import a from "NY";
import i from "L8k";
import n from "M8X";
import o from "TSSB";
import s from "Qrk";
import l from "krt";
import c from "oF8";
import d from "HSi";
import u from "vJE";
import h from "G12";
import g from "rh7";
import m from "EH";
import p from "i2v";
import _ from "G9I";
import v from "b2l";
import f from "zOR";
import S from "P8";
import y from "ur";
import M from "Rda";
import k from "aEg";
import R from "nvF";
import I from "TH";
import b from "BY";
import C from "g98";
import P from "R4";
import A from "Bf";
import T from "AYb";
import G from "Uu7";
import w from "Vs3";
import j from "kT";
import D from "St";
import F from "SoQ";
import L from "l0d";
import x from "r3";
import E from "r0b";
import O from "NXV";
import U from "yq9";
import V from "HJp";
import N from "NB";
import K from "rw7";
import z from "LnA";
import W from "xU5";
import B from "VD8";
import Q from "YE";
import q from "aoz";
import H from "ALM";
import J from "wZz";
import Z from "lDd";
import $ from "yB";
import Y from "nss";
import X from "Pet";
import ee from "Es";
import et from "iNQ";
import { C as C_1 } from "./module-hCx.js";
import ea from "EXw";
import { z as z_1 } from "./module-DZZ.js";
import { O as O_1 } from "./module-BKA.js";
import eo from "KkU";
import es from "gic";
import el from "yDb";
import ec from "vso";
import ed from "jLS";
import eu from "zNz";
class eh extends H.P {
  setOptions(e) {
    this._options = e;
    return this;
  }
  _registerDynamicSharedServices(e) {
    let t;
    let r;
    e.register(J.L, Z.O);
    e.register(et.I, ee.Z);
    e.register(d.G, u.D);
    e.register(h.a, g.r);
    e.register(m.Y, p.j);
    e.register(_.J, v.Y);
    e.register(f.M, S.r);
    e.register(q.j, Q._);
    e.register(y.o, M.Z);
    e.register(o.W, s.B);
    e.register(k.V, R.G);
    e.register(I.T, b.Y);
    e.register(C.H, P.U);
    e.register(l.H, c.y);
    e.register(A.n, T.G);
    e.register(
      G.R,
      new i.d(w.K, [
        {
          requestAuditAcknowledgement:
            (r = this._options) == null || (t = r.interaction) == null
              ? undefined
              : t.requestAuditAcknowledgement,
        },
      ]),
    );
    e.register(j.R, D.E);
    e.register(F.L, L.W);
    e.register(x.A, E.l);
    e.register(O.$, U.q);
  }
  _registerChildLevelServices(e) {
    return a._(function* () {
      const { registry, lazyServiceRegister } = e;
      registry.register(ea.b, C_1);
      yield lazyServiceRegister({
        lazy: Y.Y,
        real: X.J,
      });
      registry.register(V.Z, N.k);
      registry.register(z_1, O_1);
      registry.register(eo.h, es.E);
      registry.register(el.W, ec.x);
      registry.register(ed.s, eu.F);
      registry.register(K.V, new i.d(z.Y, [new W.Y(), new B.k()]));
      return Promise.resolve();
    })();
  }
  _execFlow(e) {
    return a
      ._(function* () {
        let t;
        const r = n.cQ(e, $.X);
        const a = n.cQ(e, Y.Y);
        if ((t = this._options) != null) {
          t.flow(e);
        }
        yield Promise.all([r.getInstance(), a.getInstance()]);
      })
      .call(this);
  }
  constructor(...e) {
    super(...e);
    this._serviceId = ea.b;
  }
}
export { eh as N };
