import r from "q2";
import a from "Wq";
import n from "uR";
import { MinFeatures } from "./module-xh.js";
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
export class DASubtitleEraseRegion extends d.Serializable {
  constructor() {
    super(...arguments);
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
}
o([d.serializable("x")], DASubtitleEraseRegion.prototype, "x", undefined);
o([d.serializable("y")], DASubtitleEraseRegion.prototype, "y", undefined);
o(
  [d.serializable("width")],
  DASubtitleEraseRegion.prototype,
  "width",
  undefined,
);
o(
  [d.serializable("height")],
  DASubtitleEraseRegion.prototype,
  "height",
  undefined,
);
export class DASubtitleEraseSegment extends d.Serializable {
  constructor() {
    super(...arguments);
    this.startTimestampMs = "0";
    this.endTimestampMs = "0";
    this.regions = undefined;
  }
}
o(
  [d.serializable("start_timestamp_ms")],
  DASubtitleEraseSegment.prototype,
  "startTimestampMs",
  undefined,
);
o(
  [d.serializable("end_timestamp_ms")],
  DASubtitleEraseSegment.prototype,
  "endTimestampMs",
  undefined,
);
o(
  [d.serializable("regions", () => DASubtitleEraseRegion)],
  DASubtitleEraseSegment.prototype,
  "regions",
  undefined,
);
export class DASubtitleEraseTimeSegmentFilter extends d.Serializable {
  constructor() {
    super(...arguments);
    this.mode = "";
    this.segments = [];
  }
}
o(
  [d.serializable("mode")],
  DASubtitleEraseTimeSegmentFilter.prototype,
  "mode",
  undefined,
);
o(
  [d.serializable("segments", () => DASubtitleEraseSegment)],
  DASubtitleEraseTimeSegmentFilter.prototype,
  "segments",
  undefined,
);
export class DASubtitleEraseParam extends d.Serializable {
  constructor() {
    super(...arguments);
    this.mode = undefined;
    this.regions = undefined;
    this.timeSegmentFilter = undefined;
  }
}
o([d.serializable("mode")], DASubtitleEraseParam.prototype, "mode", undefined);
o(
  [d.serializable("regions", () => DASubtitleEraseRegion)],
  DASubtitleEraseParam.prototype,
  "regions",
  undefined,
);
o(
  [
    d.serializable(
      "time_segment_filter",
      () => DASubtitleEraseTimeSegmentFilter,
    ),
  ],
  DASubtitleEraseParam.prototype,
  "timeSegmentFilter",
  undefined,
);
export class DASubtitleEraseInput extends n.DANode {
  constructor() {
    super(...arguments);
    this.sourceVideo = undefined;
    this.param = undefined;
  }
  childNodes() {
    let sourceVideo = this.sourceVideo;
    if (sourceVideo === undefined) {
      return [];
    }
    return [sourceVideo];
  }
}
o(
  [d.serializable("source_video", () => a.DAVideoResource)],
  DASubtitleEraseInput.prototype,
  "sourceVideo",
  undefined,
);
o(
  [d.serializable("param", () => DASubtitleEraseParam)],
  DASubtitleEraseInput.prototype,
  "param",
  undefined,
);
export class DASubtitleEraseAbility extends n.DANode {
  constructor() {
    super(...arguments);
    this.subtitleEraseInput = undefined;
    this.videoRefParams = undefined;
    this.videoTaskExtra = undefined;
  }
  afterInit() {
    super.afterInit();
    this.minVersion = "3.3.29";
    this.minFeatures = [MinFeatures.AIGC_Video_SubtitleErase];
  }
  childNodes() {
    let subtitleEraseInput = this.subtitleEraseInput;
    let t = [];
    if (subtitleEraseInput != undefined) {
      t.push(subtitleEraseInput);
    }
    let videoRefParams = this.videoRefParams;
    if (videoRefParams != undefined) {
      t.push(videoRefParams);
    }
    return t;
  }
}
o(
  [d.serializable("subtitle_erase_input", () => DASubtitleEraseInput)],
  DASubtitleEraseAbility.prototype,
  "subtitleEraseInput",
  undefined,
);
o(
  [d.serializable("video_ref_params", () => r.DAVideoRefParam)],
  DASubtitleEraseAbility.prototype,
  "videoRefParams",
  undefined,
);
o(
  [d.serializable("video_task_extra")],
  DASubtitleEraseAbility.prototype,
  "videoTaskExtra",
  undefined,
);
