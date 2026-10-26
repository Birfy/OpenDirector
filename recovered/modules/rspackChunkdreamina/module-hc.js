import r from "q2";
import a from "uR";
import { DAMergeVideoInput } from "./module-EN.js";
import s from "./module-Rd.js";
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
export class DAMergeVideoAbility extends a.DANode {
  constructor() {
    super(...arguments);
    this.mergeVideoInput = undefined;
    this.videoRefParams = undefined;
  }
  childNodes() {
    let e = [];
    let mergeVideoInput = this.mergeVideoInput;
    if (mergeVideoInput != undefined) {
      e.push(mergeVideoInput);
    }
    let videoRefParams = this.videoRefParams;
    if (videoRefParams != undefined) {
      e.push(videoRefParams);
    }
    return e;
  }
}
o(
  [s.serializable("merge_video_input", () => DAMergeVideoInput)],
  DAMergeVideoAbility.prototype,
  "mergeVideoInput",
  undefined,
);
o(
  [s.serializable("video_ref_params", () => r.DAVideoRefParam)],
  DAMergeVideoAbility.prototype,
  "videoRefParams",
  undefined,
);
