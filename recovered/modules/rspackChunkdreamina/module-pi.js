import r from "q2";
import a from "uR";
import { DAText2VideoParams } from "./module-PH_2.js";
import { DAVideoTaskExtra } from "./module-gS.js";
import d from "./module-Rd.js";
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
export class DAGenVideoAbility extends a.DANode {
  constructor() {
    super(...arguments);
    this.text2VideoParams = undefined;
    this.scene = undefined;
    this.videoTaskExtra = undefined;
    this.videoRefParams = undefined;
  }
  childNodes() {
    let e = [];
    let text2VideoParams = this.text2VideoParams;
    if (text2VideoParams != undefined) {
      e.push(text2VideoParams);
    }
    let videoRefParams = this.videoRefParams;
    if (videoRefParams != undefined) {
      e.push(videoRefParams);
    }
    return e;
  }
  get videoTaskExtraObject() {
    let e;
    let t;
    let i;
    if (
      ((t = (e = this.videoTaskExtra) == null ? undefined : e.length) != null
        ? t
        : 0) !== 0
    ) {
      return new DAVideoTaskExtra(
        (i = this.videoTaskExtra) != null ? i : "{}",
        undefined,
      );
    }
  }
  setVideoTaskExtraObject(e) {
    this.videoTaskExtra = e == null ? undefined : e.toJSONString();
  }
}
o(
  [d.serializable("text_to_video_params", () => DAText2VideoParams)],
  DAGenVideoAbility.prototype,
  "text2VideoParams",
  undefined,
);
o([d.serializable("scene")], DAGenVideoAbility.prototype, "scene", undefined);
o(
  [d.serializable("video_task_extra")],
  DAGenVideoAbility.prototype,
  "videoTaskExtra",
  undefined,
);
o(
  [d.serializable("video_ref_params", () => r.DAVideoRefParam)],
  DAGenVideoAbility.prototype,
  "videoRefParams",
  undefined,
);
