import { DANode } from "./module-uR.js";
import a from "ew";
import n from "xh";
import { DAAIGCGenerateType } from "./module-AB.js";
import { DAEverPhoto } from "./module-Gc.js";
import { DAHistoryOption } from "./module-vi.js";
import { DAImageResource } from "./module-HS.js";
import p from "Rd";
const o =
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
export class DAPostEditParam extends DANode {
  constructor() {
    super(...arguments);
    this.generateType = DAAIGCGenerateType.none;
    this.itemId = undefined;
    this.originHistoryId = undefined;
    this.originAgenticHistoryId = undefined;
    this.historyOption = undefined;
    this.canvasDraftImage = undefined;
    this.originImage = undefined;
  }
  afterInit() {
    super.afterInit();
  }
  childNodes() {
    let e = [];
    let historyOption = this.historyOption;
    if (historyOption != undefined) {
      e.push(historyOption);
    }
    let canvasDraftImage = this.canvasDraftImage;
    if (canvasDraftImage != undefined) {
      e.push(canvasDraftImage);
    }
    let originImage = this.originImage;
    if (originImage != undefined) {
      e.push(originImage);
    }
    return e;
  }
  calculateMinVersion() {
    if (
      this.generateType === DAAIGCGenerateType.inPaintingAndOutPainting ||
      this.generateType === DAAIGCGenerateType.byteEditPainting
    ) {
      this.minVersion = a.FeaturesMinVersion.ImagePostEdit;
    }
    return super.calculateMinVersion();
  }
  calculateMinFeatures() {
    if (this.generateType === DAAIGCGenerateType.inPaintingAndOutPainting) {
      this.minFeatures = [
        n.MinFeatures.AIGC_GenerateType_inPaintingAndOutPainting,
      ];
    }
    return super.calculateMinFeatures();
  }
}
o(
  [p.serializable("generate_type")],
  DAPostEditParam.prototype,
  "generateType",
  undefined,
);
o(
  [p.serializable("item_id", undefined, "int64")],
  DAPostEditParam.prototype,
  "itemId",
  undefined,
);
o(
  [p.serializable("origin_history_id", undefined, "int64")],
  DAPostEditParam.prototype,
  "originHistoryId",
  undefined,
);
o(
  [p.serializable("origin_agentic_history_id", undefined, "string")],
  DAPostEditParam.prototype,
  "originAgenticHistoryId",
  undefined,
);
o(
  [p.serializable("history_option", () => DAHistoryOption)],
  DAPostEditParam.prototype,
  "historyOption",
  undefined,
);
o(
  [p.serializable("canvas_draft_image", () => DAEverPhoto)],
  DAPostEditParam.prototype,
  "canvasDraftImage",
  undefined,
);
o(
  [p.serializable("origin_image", () => DAImageResource)],
  DAPostEditParam.prototype,
  "originImage",
  undefined,
);
