import r from "q2";
import a from "uR";
import n from "Ut";
import { DAAudioTag } from "./module-cvi.js";
import { DAVideoGenV2VAVMix } from "./module-Gp.js";
import l from "./module-Rd.js";
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
export class DAVideoBGMAbility extends a.DANode {
  constructor() {
    super(...arguments);
    this.originHistoryId = undefined;
    this.originAgenticHistoryId = undefined;
    this.originItemId = undefined;
    this.duration = undefined;
    this.tags = undefined;
    this.firstFrameImage = undefined;
    this.avMix = undefined;
    this.videoRefParams = undefined;
  }
  childNodes() {
    let e;
    let t = [];
    if ((e = this.tags) != null) {
      e.forEach((e) => {
        t.push(e);
      });
    }
    let avMix = this.avMix;
    if (avMix != undefined) {
      t.push(avMix);
    }
    let videoRefParams = this.videoRefParams;
    if (videoRefParams != undefined) {
      t.push(videoRefParams);
    }
    let firstFrameImage = this.firstFrameImage;
    if (firstFrameImage != undefined) {
      t.push(firstFrameImage);
    }
    return t;
  }
}
o(
  [l.serializable("origin_history_id")],
  DAVideoBGMAbility.prototype,
  "originHistoryId",
  undefined,
);
o(
  [l.serializable("origin_agentic_history_id", undefined, "string")],
  DAVideoBGMAbility.prototype,
  "originAgenticHistoryId",
  undefined,
);
o(
  [l.serializable("origin_item_id")],
  DAVideoBGMAbility.prototype,
  "originItemId",
  undefined,
);
o(
  [l.serializable("duration")],
  DAVideoBGMAbility.prototype,
  "duration",
  undefined,
);
o(
  [l.serializable("tags", () => DAAudioTag)],
  DAVideoBGMAbility.prototype,
  "tags",
  undefined,
);
o(
  [l.serializable("first_frame_image", () => n.DAImageResource)],
  DAVideoBGMAbility.prototype,
  "firstFrameImage",
  undefined,
);
o(
  [l.serializable("av_mix", () => DAVideoGenV2VAVMix)],
  DAVideoBGMAbility.prototype,
  "avMix",
  undefined,
);
o(
  [l.serializable("video_ref_params", () => r.DAVideoRefParam)],
  DAVideoBGMAbility.prototype,
  "videoRefParams",
  undefined,
);
