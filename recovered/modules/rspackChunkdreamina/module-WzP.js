import a from "QWK";
import { _ } from "./module-Kt_2.js";
export class R {
  createNetworkClient() {
    return this._createNetworkClient(this._containerService);
  }
  constructor(e, t) {
    this._createNetworkClient = e;
    this._containerService = t;
  }
}
R = a.Cg(
  [
    a.Qj(1, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [Function, _ === undefined ? Object : _]),
  ],
  R,
);
