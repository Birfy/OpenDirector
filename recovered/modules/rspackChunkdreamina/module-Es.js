import r from "NY";
import a from "L8k";
import o from "krt";
import s from "oF8";
import { n } from "./module-Bf.js";
import { G } from "./module-AYb.js";
import { R } from "./module-Uu7.js";
import { K } from "./module-Vs3.js";
import l from "g98";
import h from "R4";
import _ from "ALM";
import { M } from "./module-xaV.js";
import { z } from "./module-s4D.js";
import { k } from "./module-xHU.js";
import { b } from "./module-ssf.js";
export class Z extends _.P {
  setOptions(e) {
    this._options = e;
    return this;
  }
  _registerDynamicSharedServices(e) {
    let t;
    let i;
    e.register(n, G);
    e.register(
      R,
      new a.d(K, [
        {
          requestAuditAcknowledgement:
            (i = this._options) == null || (t = i.interaction) == null
              ? undefined
              : t.requestAuditAcknowledgement,
        },
      ]),
    );
    e.register(l.H, h.U);
    e.register(o.H, s.y);
  }
  _registerChildLevelServices(e) {
    const { registry } = e;
    registry.register(z, M);
    registry.register(b, k);
    return Promise.resolve();
  }
  _execFlow() {
    return r._(function* () {
      return Promise.resolve();
    })();
  }
  constructor(...e) {
    super(...e);
    this._serviceId = b;
  }
}
