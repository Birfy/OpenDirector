import i from "NY";
import { y } from "./module-H1B.js";
class n {
  get element() {
    return this._el;
  }
  get ctx() {
    let e;
    let t;
    if ((e = (t = this._el) == null ? undefined : t.getContext("2d")) != null) {
      return e;
    }
    return null;
  }
  get height() {
    return this._height;
  }
  set height(e) {
    if (this._el) {
      this._el.height = e;
      this._height = e;
    }
  }
  get width() {
    return this._width;
  }
  set width(e) {
    if (this._el) {
      this._el.width = e;
      this._width = e;
    }
  }
  destroy() {
    this.clear();
    this.height = 0;
    this.width = 0;
    this._el = null;
  }
  clear() {
    let e;
    if ((e = this.ctx) != null) {
      e.clearRect(0, 0, this._width, this._height);
    }
  }
  getOriginalDataUrl() {
    let e;
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    if ((e = this.element) == null) {
      return undefined;
    }
    return e.toDataURL("image/png", t);
  }
  constructor(e, t) {
    var r = document.createElement("canvas");
    this._el = r;
    this._height = t;
    this._width = e;
  }
}
export function t(e) {
  return i._(function* () {
    const t = yield i._(function* () {
      let t;
      const r = yield y(e);
      const i = new n(r.width, r.height);
      i.width = r.width;
      i.height = r.height;
      if ((t = i.ctx) != null) {
        t.drawImage(r, 0, 0);
      }
      return i;
    })();
    const r = t.ctx.getImageData(0, 0, t.width, t.height);
    return [t, r];
  })();
}
