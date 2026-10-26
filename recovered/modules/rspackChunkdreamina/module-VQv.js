import { DALinkableResource } from "./module-Pb.js";
import n from "Rd";
export var DACommonAssetType;
const r =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
(DACommonAssetType || (DACommonAssetType = {})).Style = "style";
export class DACommonAssetResource extends DALinkableResource {
  constructor() {
    super(...arguments);
    this.assetCode = "";
    this.assetType = DACommonAssetType.Style;
  }
  afterInit() {
    super.afterInit();
    this.type = "common_asset";
  }
}
r(
  [n.serializable("asset_code")],
  DACommonAssetResource.prototype,
  "assetCode",
  undefined,
);
r(
  [n.serializable("asset_type")],
  DACommonAssetResource.prototype,
  "assetType",
  undefined,
);
