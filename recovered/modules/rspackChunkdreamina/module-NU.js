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
export class DAMultiFrameInfo extends r.Serializable {
  constructor() {
    super(...arguments);
    this.idx = undefined;
    this.mediaUri = undefined;
    this.mediaType = undefined;
    this.durationMs = undefined;
    this.prompt = undefined;
  }
}
o([r.serializable("idx")], DAMultiFrameInfo.prototype, "idx", undefined);
o(
  [r.serializable("mediaUri")],
  DAMultiFrameInfo.prototype,
  "mediaUri",
  undefined,
);
o(
  [r.serializable("mediaType")],
  DAMultiFrameInfo.prototype,
  "mediaType",
  undefined,
);
o(
  [r.serializable("durationMs")],
  DAMultiFrameInfo.prototype,
  "durationMs",
  undefined,
);
o([r.serializable("prompt")], DAMultiFrameInfo.prototype, "prompt", undefined);
