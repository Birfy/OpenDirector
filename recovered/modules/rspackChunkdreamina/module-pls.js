import r from "J4";
import a from "oN";
import n from "wEw";
import s from "j8A";
import { DAImageBaseComponent } from "./module-Hka.js";
import { DAImageGenerateAbilities } from "./module-Ej.js";
import { DAImageGenerateAbility } from "./module-t5.js";
import { DAImageGenerateType } from "./module-M8t.js";
import c from "./module-Rd.js";
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
export const createTextToImageDraft = function (e) {
  let t;
  let i;
  let o = new CreateTextToImageDraftOption(e);
  let n = new s.DADraft();
  let v = new DAImageGenerateAbility();
  t = new a.DAGenCoreParam();
  t.prompt = o.prompt;
  t.seed = c.Float64.toInt(Math.floor(2100000000 * Math.random()));
  t.model = o.modelReqKey;
  t.sampleStrength = o.sampleStrength;
  t.imageRatio = o.imageRatio;
  v.coreParam = t;
  let g = new DAImageBaseComponent();
  g.generateType = DAImageGenerateType.generate;
  g.aigcMode = r.DAAIGCMode.workbench;
  i = new DAImageGenerateAbilities();
  i.generate = v;
  g.abilities = i;
  n.setMainComponent(g);
  return n.toJSONString();
};
export class CreateTextToImageDraftOption extends c.Serializable {
  constructor() {
    super(...arguments);
    this.prompt = undefined;
    this.modelReqKey = undefined;
    this.sampleStrength = 0.5;
    this.imageRatio = n.DAImageRatioType.ImageRatioType_11;
  }
}
o(
  [c.serializable("prompt")],
  CreateTextToImageDraftOption.prototype,
  "prompt",
  undefined,
);
o(
  [c.serializable("modelReqKey")],
  CreateTextToImageDraftOption.prototype,
  "modelReqKey",
  undefined,
);
o(
  [c.serializable("sampleStrength")],
  CreateTextToImageDraftOption.prototype,
  "sampleStrength",
  undefined,
);
o(
  [c.serializable("imageRatio")],
  CreateTextToImageDraftOption.prototype,
  "imageRatio",
  undefined,
);
