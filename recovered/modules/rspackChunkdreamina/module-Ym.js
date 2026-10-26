import r from "Rd";
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
export class DAOriginalBgmInfoAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.bgmUrl = undefined;
    this.durationMs = undefined;
    this.vid = undefined;
    this.sourceStartMs = undefined;
    this.sourceDurationMs = undefined;
  }
}
o(
  [r.serializable("bgmUrl")],
  DAOriginalBgmInfoAgent.prototype,
  "bgmUrl",
  undefined,
);
o(
  [r.serializable("durationMs")],
  DAOriginalBgmInfoAgent.prototype,
  "durationMs",
  undefined,
);
o([r.serializable("vid")], DAOriginalBgmInfoAgent.prototype, "vid", undefined);
o(
  [r.serializable("sourceStartMs")],
  DAOriginalBgmInfoAgent.prototype,
  "sourceStartMs",
  undefined,
);
o(
  [r.serializable("sourceDurationMs")],
  DAOriginalBgmInfoAgent.prototype,
  "sourceDurationMs",
  undefined,
);
export class DAOriginalVideoInfoAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.vid = undefined;
    this.durationMs = undefined;
    this.sourceStartMs = undefined;
    this.sourceDurationMs = undefined;
  }
}
o(
  [r.serializable("vid")],
  DAOriginalVideoInfoAgent.prototype,
  "vid",
  undefined,
);
o(
  [r.serializable("durationMs")],
  DAOriginalVideoInfoAgent.prototype,
  "durationMs",
  undefined,
);
o(
  [r.serializable("sourceStartMs")],
  DAOriginalVideoInfoAgent.prototype,
  "sourceStartMs",
  undefined,
);
o(
  [r.serializable("sourceDurationMs")],
  DAOriginalVideoInfoAgent.prototype,
  "sourceDurationMs",
  undefined,
);
export class DAMergeVideoInputAgent extends r.Serializable {
  constructor() {
    super(...arguments);
    this.targetWidth = undefined;
    this.targetHeight = undefined;
    this.targetFormat = undefined;
    this.bgmList = undefined;
    this.videoList = undefined;
  }
}
o(
  [r.serializable("targetWidth")],
  DAMergeVideoInputAgent.prototype,
  "targetWidth",
  undefined,
);
o(
  [r.serializable("targetHeight")],
  DAMergeVideoInputAgent.prototype,
  "targetHeight",
  undefined,
);
o(
  [r.serializable("targetFormat")],
  DAMergeVideoInputAgent.prototype,
  "targetFormat",
  undefined,
);
o(
  [r.serializable("bgmList", () => DAOriginalBgmInfoAgent)],
  DAMergeVideoInputAgent.prototype,
  "bgmList",
  undefined,
);
o(
  [r.serializable("videoList", () => DAOriginalVideoInfoAgent)],
  DAMergeVideoInputAgent.prototype,
  "videoList",
  undefined,
);
