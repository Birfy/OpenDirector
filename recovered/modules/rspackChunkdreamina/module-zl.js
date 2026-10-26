import r from "uR";
import a from "./module-Rd.js";
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
export class DAVideoGenI2V extends r.DANode {
  constructor() {
    super(...arguments);
    this.livePhoto = undefined;
  }
  childNodes() {
    let e = [];
    let livePhoto = this.livePhoto;
    if (livePhoto != undefined) {
      e.push(livePhoto);
    }
    return e;
  }
}
o(
  [a.serializable("live_photo", () => DAVideoGenLivephoto)],
  DAVideoGenI2V.prototype,
  "livePhoto",
  undefined,
);
export class DAVideoGenLivephoto extends r.DANode {
  constructor() {
    super(...arguments);
    this.faceChecked = undefined;
  }
}
o(
  [a.serializable("face_checked")],
  DAVideoGenLivephoto.prototype,
  "faceChecked",
  undefined,
);
