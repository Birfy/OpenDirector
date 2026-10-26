import { DASubtitleEraseRegion } from "./module-DO.js";
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
export class ServerSubtitleEraseSegment extends n.Serializable {
  constructor() {
    super(...arguments);
    this.startTimestampMs = undefined;
    this.endTimestampMs = undefined;
    this.regions = undefined;
  }
  static fromDraft(e) {
    let t = new ServerSubtitleEraseSegment();
    let i = n.Int64.parse(e.startTimestampMs);
    let o = n.Int64.parse(e.endTimestampMs);
    t.startTimestampMs = i;
    t.endTimestampMs = o;
    t.regions = e.regions;
    return t;
  }
}
o(
  [n.serializable("start_timestamp_ms", undefined, "int64")],
  ServerSubtitleEraseSegment.prototype,
  "startTimestampMs",
  undefined,
);
o(
  [n.serializable("end_timestamp_ms", undefined, "int64")],
  ServerSubtitleEraseSegment.prototype,
  "endTimestampMs",
  undefined,
);
o(
  [n.serializable("regions", () => DASubtitleEraseRegion)],
  ServerSubtitleEraseSegment.prototype,
  "regions",
  undefined,
);
export class ServerSubtitleEraseTimeSegmentFilter extends n.Serializable {
  constructor() {
    super(...arguments);
    this.mode = "";
    this.segments = [];
  }
}
o(
  [n.serializable("mode")],
  ServerSubtitleEraseTimeSegmentFilter.prototype,
  "mode",
  undefined,
);
o(
  [n.serializable("segments", () => ServerSubtitleEraseSegment)],
  ServerSubtitleEraseTimeSegmentFilter.prototype,
  "segments",
  undefined,
);
export class ServerSubtitleEraseParam extends n.Serializable {
  constructor() {
    super(...arguments);
    this.mode = undefined;
    this.regions = undefined;
    this.timeSegmentFilter = undefined;
  }
  static fromDraft(e) {
    if (e === undefined) {
      return;
    }
    let t = new ServerSubtitleEraseParam();
    t.mode = e.mode;
    t.regions = e.regions;
    let e_timeSegmentFilter = e.timeSegmentFilter;
    if (e_timeSegmentFilter != undefined) {
      let e = new ServerSubtitleEraseTimeSegmentFilter();
      e.mode = e_timeSegmentFilter.mode;
      e.segments = e_timeSegmentFilter.segments.map((e) =>
        ServerSubtitleEraseSegment.fromDraft(e),
      );
      t.timeSegmentFilter = e;
    }
    return t;
  }
}
o(
  [n.serializable("mode")],
  ServerSubtitleEraseParam.prototype,
  "mode",
  undefined,
);
o(
  [n.serializable("regions", () => DASubtitleEraseRegion)],
  ServerSubtitleEraseParam.prototype,
  "regions",
  undefined,
);
o(
  [
    n.serializable(
      "time_segment_filter",
      () => ServerSubtitleEraseTimeSegmentFilter,
    ),
  ],
  ServerSubtitleEraseParam.prototype,
  "timeSegmentFilter",
  undefined,
);
export class ServerSubtitleEraseInput extends n.Serializable {
  constructor() {
    super(...arguments);
    this.sourceVideo = undefined;
    this.param = undefined;
  }
}
o(
  [n.serializable("source_video", () => ServerVideoResource)],
  ServerSubtitleEraseInput.prototype,
  "sourceVideo",
  undefined,
);
o(
  [n.serializable("param", () => ServerSubtitleEraseParam)],
  ServerSubtitleEraseInput.prototype,
  "param",
  undefined,
);
