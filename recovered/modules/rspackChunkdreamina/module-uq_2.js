import a from "QWK";
import { _ } from "./module-Kt_2.js";
import { V } from "./module-kBz.js";
if (require.j == "wl4") var n = require("./module-L8k.js");
class c {
  get loaded() {
    return this._service.loaded;
  }
  getInstance() {
    return this._service.getInstance();
  }
  preload() {
    this._service.preload();
  }
  constructor(e, t, r) {
    this._instantiationService = r;
    this._service = this._instantiationService.createInstance(e, ...t);
    V(() => this._service.preload());
  }
}
export function Y(e, t = []) {
  return new n.d(c, [e, t]);
}
c = a.Cg(
  [
    a.Qj(2, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [Function, Array, _ === undefined ? Object : _]),
  ],
  c,
);
