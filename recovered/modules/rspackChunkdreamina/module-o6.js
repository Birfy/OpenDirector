import n from "oa";
import s from "bk";
import a from "A7";
import { U } from "./module-A82.js";
import { x } from "./module-rV9.js";
export class lJ extends U {
  get scale() {
    return this._scale;
  }
  set scale(e) {
    if (e !== this._scale) {
      this._scale = e;
      this._changeElementStyle();
      this._scaleChangeEvent.fire(undefined);
    }
  }
  resetOffset() {
    let e;
    let t;
    let i;
    const a =
      (e = (t = this.getElementStyle) == null ? undefined : t.call(this)) !=
      null
        ? e
        : {};
    if ((i = this.setElementStyle) != null) {
      i.call(
        this,
        s._(n._({}, x, a), {
          transform: "scale(".concat(Math.abs(this._scale), ")"),
        }),
      );
    }
  }
  stop() {
    this._unbindEvents();
    this.element = undefined;
    this.getElementStyle = undefined;
    this.setElementStyle = undefined;
  }
  getSnapshot() {
    return this._scale;
  }
  on(e) {
    const t = this._scaleChangeEvent.event(e);
    this._register(t);
    return t;
  }
  reset() {
    let e;
    this._scale = -1;
    if ((e = this.setElementStyle) != null) {
      e.call(this, n._({}, x));
    }
    this.dispose();
  }
  activate() {
    this._bindEvents();
  }
  deactivated() {
    this._unbindEvents();
  }
  _bindEvents() {
    let e;
    if ((e = this.element) != null) {
      e.addEventListener("wheel", this._handleWheel);
    }
  }
  _unbindEvents() {
    let e;
    if ((e = this.element) != null) {
      e.removeEventListener("wheel", this._handleWheel);
    }
  }
  _changeElementStyle() {
    let e;
    let t;
    let i;
    const a =
      (e = (t = this.getElementStyle) == null ? undefined : t.call(this)) !=
      null
        ? e
        : {};
    const a_transform = a.transform;
    const transform = a_transform
      ? a_transform.replace(
          /scale\(([^)]+)\)/,
          "scale(".concat(Math.abs(this._scale), ")"),
        )
      : "scale(".concat(Math.abs(this._scale), ")");
    const h = s._(n._({}, x, a), {
      transform,
    });
    if ((i = this.setElementStyle) != null) {
      i.call(this, h);
    }
  }
  _handlePinch(e, t) {
    let i = 1;
    i = t ? (e ? 1.03 : 0.97) : e ? 1.06 : 0.94;
    const n = Math.max(0.33, Math.min(3, Math.abs(this.scale * i)));
    this.scale = n;
  }
  _onWheel(e) {
    e.preventDefault();
    e.stopPropagation();
    if ((t = this.element) != null) {
      t.click();
    }
    var t;
    const { action } = ((e) => {
      if (e.ctrlKey) {
        return {
          action: e.deltaY > 0 ? "TouchPadPinchDown" : "TouchPadPinchUp",
        };
      }
      var t = e == null ? undefined : e.wheelDeltaY;
      if (t ? Math.abs(t) < 120 : e.deltaMode === 0) {
        return {
          action: e.deltaY > 0 ? "TouchPadMoveUp" : "TouchPadMoveDown",
        };
      }
      return {
        action: e.deltaY > 0 ? "MouseUp" : "MouseDown",
      };
    })(e);
    if (
      ["MouseUp", "TouchPadPinchUp", "MouseDown", "TouchPadPinchDown"].includes(
        action,
      )
    ) {
      this._handlePinch(
        action === "MouseUp" || action === "TouchPadPinchUp",
        action === "TouchPadPinchDown" || action === "TouchPadPinchUp",
      );
    }
  }
  constructor() {
    super();
    this._scaleChangeEvent = new a.v();
    this.onScaleChange = this._scaleChangeEvent.event;
    this._scale = -1;
    this._handleWheel = this._onWheel.bind(this);
  }
}
