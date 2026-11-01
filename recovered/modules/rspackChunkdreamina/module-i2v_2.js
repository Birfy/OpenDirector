import a from "QWK";
import r from "Kt";
import i from "fYz";
import { o } from "./module-hv_5.js";
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
  constructor(e, t) {
    this._containerService = e;
    this._preloadAGWInjectDataService = t;
    this._serviceBrand = undefined;
    this._repository = this._containerService.createInstance(o);
  }
}
j = a.Cg(
  [
    a.Qj(0, r._),
    a.Qj(1, i.G),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      r._ === undefined ? Object : r._,
      i.G === undefined ? Object : i.G,
    ]),
  ],
  j,
);
