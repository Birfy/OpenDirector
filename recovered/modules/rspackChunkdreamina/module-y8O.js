import n from "NY";
import o from "M8X";
import a from "RII";
import { Y } from "./module-EH_2.js";
import { j } from "./module-i2v.js";
import { J } from "./module-G9I.js";
import { Y as Y_1 } from "./module-b2l.js";
import { G } from "./module-HSi.js";
import { D } from "./module-vJE.js";
import { a as a_1 } from "./module-G12.js";
import { r } from "./module-rh7.js";
import { P } from "./module-ALM.js";
import { k } from "./module-HD4.js";
import { J as J_1 } from "./module-Pet.js";
export class z extends P {
  _registerDynamicSharedServices(e) {
    e.register(G, D);
    e.register(a_1, r);
    e.register(Y, j);
    e.register(J, Y_1);
  }
  _registerChildLevelServices(e) {
    e.registry.register(J_1, k);
    return Promise.resolve();
  }
  _execFlow(e) {
    return n._(function* () {
      const i = o.cQ(e, J_1);
      const t = yield i.bootstrap();
      if (!t.ok) {
        o.cQ(e, a.l).reportDevError(
          "dreamina_model_config_bootstrap_failed",
          t,
        );
      }
      return Promise.resolve();
    })();
  }
  constructor(...e) {
    super(...e);
    this._serviceId = J_1;
  }
}
