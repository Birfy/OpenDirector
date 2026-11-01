import { DALensRecipeInput } from "./module-CW_2.js";
import a from "Rd";
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
export class DATargetVideoInfo extends a.Serializable {
  constructor() {
    super(...arguments);
    this.ratioType = undefined;
    this.durationMs = undefined;
    this.videoMode = undefined;
    this.fps = undefined;
    this.resolution = undefined;
    this.lensMotionType = undefined;
    this.motionSpeed = undefined;
    this.endingControl = undefined;
    this.lensRecipeInput = undefined;
  }
}
o(
  [a.serializable("ratioType")],
  DATargetVideoInfo.prototype,
  "ratioType",
  undefined,
);
o(
  [a.serializable("durationMs")],
  DATargetVideoInfo.prototype,
  "durationMs",
  undefined,
);
o(
  [a.serializable("videoMode")],
  DATargetVideoInfo.prototype,
  "videoMode",
  undefined,
);
o([a.serializable("fps")], DATargetVideoInfo.prototype, "fps", undefined);
o(
  [a.serializable("resolution")],
  DATargetVideoInfo.prototype,
  "resolution",
  undefined,
);
o(
  [a.serializable("lensMotionType")],
  DATargetVideoInfo.prototype,
  "lensMotionType",
  undefined,
);
o(
  [a.serializable("motionSpeed")],
  DATargetVideoInfo.prototype,
  "motionSpeed",
  undefined,
);
o(
  [a.serializable("endingControl")],
  DATargetVideoInfo.prototype,
  "endingControl",
  undefined,
);
o(
  [a.serializable("lensRecipeInput", () => DALensRecipeInput)],
  DATargetVideoInfo.prototype,
  "lensRecipeInput",
  undefined,
);
