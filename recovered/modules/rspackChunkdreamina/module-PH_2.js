import r from "uR";
import { DAVideoGenInput } from "./module-gb.js";
import n from "./module-Rd.js";
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
export class DAText2VideoParams extends r.DANode {
  constructor() {
    super(...arguments);
    this.videoGenInputs = undefined;
    this.videoAspectRatio = undefined;
    this.seed = undefined;
    this.modelReqKey = undefined;
    this.priority = undefined;
  }
  childNodes() {
    let e = [];
    let videoGenInputs = this.videoGenInputs;
    if (videoGenInputs != undefined) {
      videoGenInputs.forEach((t) => {
        e.push(t);
      });
    }
    return e;
  }
}
o(
  [n.serializable("video_gen_inputs", () => DAVideoGenInput)],
  DAText2VideoParams.prototype,
  "videoGenInputs",
  undefined,
);
o(
  [n.serializable("video_aspect_ratio")],
  DAText2VideoParams.prototype,
  "videoAspectRatio",
  undefined,
);
o(
  [n.serializable("seed", undefined, "int64")],
  DAText2VideoParams.prototype,
  "seed",
  undefined,
);
o(
  [n.serializable("model_req_key")],
  DAText2VideoParams.prototype,
  "modelReqKey",
  undefined,
);
o(
  [n.serializable("priority")],
  DAText2VideoParams.prototype,
  "priority",
  undefined,
);
