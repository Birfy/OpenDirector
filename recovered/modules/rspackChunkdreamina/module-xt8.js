import { ServerAudioResource } from "./module-as.js";
import { ServerVideoResource } from "./module-fH.js";
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
export class ServerMergeVideoInput extends n.Serializable {
  constructor() {
    super(...arguments);
    this.targetWidth = undefined;
    this.targetHeight = undefined;
    this.targetFormat = undefined;
    this.bgmList = undefined;
    this.videoList = undefined;
  }
  static fromDAMergeVideoInput(e, t) {
    let i;
    let o;
    let n;
    let d;
    let l;
    let p;
    if (e === undefined || t === undefined) {
      return;
    }
    let u = new ServerMergeVideoInput();
    u.targetWidth = e.targetWidth;
    u.targetHeight = e.targetHeight;
    u.targetFormat = e.targetFormat;
    u.bgmList =
      (n =
        (o =
          (i = e.bgmList) == null
            ? undefined
            : i.map((e) => ServerAudioResource.fromDAAudioResource(e, t))) ==
        null
          ? undefined
          : o.filter((e) => e != undefined)) == null
        ? undefined
        : n.map((e) => e);
    u.videoList =
      (p =
        (l =
          (d = e.videoList) == null
            ? undefined
            : d.map((e) => ServerVideoResource.fromDAVideoResource(e, t))) ==
        null
          ? undefined
          : l.filter((e) => e != undefined)) == null
        ? undefined
        : p.map((e) => e);
    return u;
  }
}
o(
  [n.serializable("target_width", undefined, "int")],
  ServerMergeVideoInput.prototype,
  "targetWidth",
  undefined,
);
o(
  [n.serializable("target_height", undefined, "int")],
  ServerMergeVideoInput.prototype,
  "targetHeight",
  undefined,
);
o(
  [n.serializable("target_format")],
  ServerMergeVideoInput.prototype,
  "targetFormat",
  undefined,
);
o(
  [n.serializable("bgm_list", () => ServerAudioResource)],
  ServerMergeVideoInput.prototype,
  "bgmList",
  undefined,
);
o(
  [n.serializable("video_list", () => ServerVideoResource)],
  ServerMergeVideoInput.prototype,
  "videoList",
  undefined,
);
