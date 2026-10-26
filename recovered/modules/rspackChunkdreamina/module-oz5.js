import r from "oa";
import o from "QWK";
import n from "o7";
import a from "Kt";
import { t as t_1 } from "./module-AxH.js";
import { a as a_1 } from "./module-U8C.js";
export class g extends n.jG {
  get commonParams() {
    return this._commonParams;
  }
  setCommonParams(e) {
    this._commonParams = r._({}, this._commonParams, e);
  }
  reportClickModalSwitch(e, position) {
    const { contentGeneratorType } =
      this._contentGeneratorService.contentGeneratorManager.data;
    const r = this._containerService.createInstance(t_1);
    const {
      data: { isPristine },
    } =
      this._contentGeneratorService.getSpecificGeneratorManager(
        contentGeneratorType,
      );
    r.setParams({
      before: a_1(contentGeneratorType),
      after: a_1(e),
      position,
      isFilled: +!isPristine,
    });
    r.report();
  }
  constructor(e, t) {
    super();
    this._contentGeneratorService = e;
    this._containerService = t;
    this._commonParams = {
      position: "page_bottom_box",
    };
  }
}
g = o.Cg(
  [
    o.Qj(1, a._),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof Omit === "undefined" ? Object : Omit,
      a._ === undefined ? Object : a._,
    ]),
  ],
  g,
);
