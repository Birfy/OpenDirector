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
export class DAProHDInfo extends r.Serializable {
  constructor() {
    super(...arguments);
    this.resolutionType = undefined;
    this.originalImageStrength = undefined;
    this.detailStrength = undefined;
    this.hdSceneType = undefined;
  }
}
o(
  [r.serializable("resolutionType")],
  DAProHDInfo.prototype,
  "resolutionType",
  undefined,
);
o(
  [r.serializable("originalImageStrength")],
  DAProHDInfo.prototype,
  "originalImageStrength",
  undefined,
);
o(
  [r.serializable("detailStrength")],
  DAProHDInfo.prototype,
  "detailStrength",
  undefined,
);
o(
  [r.serializable("hdSceneType")],
  DAProHDInfo.prototype,
  "hdSceneType",
  undefined,
);
