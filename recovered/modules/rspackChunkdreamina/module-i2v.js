import n from "QWK";
import o from "Kt";
import a from "fYz";
import { o as o_1 } from "./module-hv_3.js";
export class j {
  fetchAgentConfig() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : {
            needCache: true,
          };
    return this._repository.fetchAgentConfig(e);
  }
  constructor(e, i) {
    this._containerService = e;
    this._preloadAGWInjectDataService = i;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(o_1);
  }
}
j = n.Cg(
  [
    n.Qj(0, o._),
    n.Qj(1, a.G),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      o._ === undefined ? Object : o._,
      a.G === undefined ? Object : a.G,
    ]),
  ],
  j,
);
