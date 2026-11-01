import n from "oa";
import s from "bk";
import a from "A7";
import { U } from "./module-A82.js";
import { x } from "./module-rV9.js";
export class J extends U {
  get containerWidth() {
    let e;
    let t;
    if ((e = (t = this.element) == null ? undefined : t.clientWidth) != null) {
      return e;
    }
    return 0;
  }
  get containerHeight() {
    let e;
    let t;
    if ((e = (t = this.element) == null ? undefined : t.clientHeight) != null) {
      return e;
    }
    return 0;
  }
  get status() {
    return this._status;
  }
  set status(e) {
    const _status = this._status;
    if (_status !== e && (_status !== "active" || e !== "advent")) {
      if (e === "disabled") {
        this._status = e;
        this._hideMask();
        this.changeCursor("default");
        this._unbindEvents();
        this._dragStatusChange.fire(e);
        return;
      }
      if (_status === "disabled") {
        this._bindEvents();
      }
      this.changeCursor("grab");
      this._showMask();
      this._status = e;
      this._dragStatusChange.fire(e);
    }
  }
  changeCursor(cursor) {
    let t;
    let i;
    const a = s._(
      n._({}, x, (t = this.getElementStyle) == null ? undefined : t.call(this)),
      {
        cursor,
      },
    );
    if ((i = this.setElementStyle) != null) {
      i.call(this, a);
    }
  }
  setRangeContainer(e, t) {
    this._rangeContainer = e;
    this._rangeContainerSize = t;
  }
  listen(e) {
    super.listen(e);
    this._initMask();
  }
  stop() {
    super.stop();
    this.deactivated();
    this._unbindEvents();
    this._unbindGlobalEvents();
  }
  changeStatus(e) {
    this.status = e;
  }
  activate() {
    this._bindGlobalEvents();
  }
  deactivated() {
    this.status = "disabled";
    this._unbindGlobalEvents();
  }
  getSnapshot() {
    return this.status;
  }
  on(e) {
    const t = this._dragStatusChange.event(e);
    this._register(t);
    return t;
  }
  getMoveDataSnapshot() {
    return JSON.stringify({
      x: this._x,
      y: this._y,
    });
  }
  reset() {
    let e;
    this._x = 0;
    this._y = 0;
    this._status = "disabled";
    this._startDrag = false;
    this._startDragPosition = {
      x: 0,
      y: 0,
    };
    this._isDragging = false;
    if ((e = this.setElementStyle) != null) {
      e.call(this, n._({}, x));
    }
    this.dispose();
  }
  resetMove() {
    this._x = 0;
    this._y = 0;
    this._onMoveEvent.fire("");
  }
  dispose() {
    this._unbindGlobalEvents();
    this._unbindEvents();
    super.dispose();
  }
  _initMask() {
    let e;
    let t;
    const i = "__mask__";
    if ((e = this.element) == null || !e.querySelector("#".concat(i))) {
      const n = document.createElement("div");
      n.setAttribute(
        "style",
        "position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 10; display: none;",
      );
      n.id = i;
      if ((t = this.element) != null) {
        t.appendChild(n);
      }
      this._mask = n;
    }
  }
  _showMask() {
    if (this._mask) {
      this._mask.style.display = "block";
    }
  }
  _hideMask() {
    if (this._mask) {
      this._mask.style.display = "none";
    }
  }
  _bindGlobalEvents() {
    document.addEventListener("keydown", this._handleKeydown);
    document.addEventListener("keyup", this._handleKeyup);
  }
  _unbindGlobalEvents() {
    document.removeEventListener("keydown", this._handleKeydown);
    document.removeEventListener("keyup", this._handleKeyup);
  }
  _onKeydown(e) {
    e.stopPropagation();
    if (e.key === " ") {
      this._beforeHotkeyDragStatus = this.status;
      this.status = "advent";
    }
  }
  _onKeyup(e) {
    e.stopPropagation();
    if (e.key === " ") {
      this.status =
        this._beforeHotkeyDragStatus === "active" ? "active" : "disabled";
    }
  }
  _bindEvents() {
    let e;
    if ((e = this.element) != null) {
      e.addEventListener("mousedown", this._handleMouseDown);
    }
    document.addEventListener("mousemove", this._handleMouseMove);
    document.addEventListener("mouseup", this._handleMouseUp);
    document.addEventListener("mouseleave", this._handleMouseLeave);
  }
  _unbindEvents() {
    let e;
    if ((e = this.element) != null) {
      e.removeEventListener("mousedown", this._handleMouseDown);
    }
    document.removeEventListener("mousemove", this._handleMouseMove);
    document.removeEventListener("mouseup", this._handleMouseUp);
    document.removeEventListener("mouseleave", this._handleMouseLeave);
  }
  _mouseDown(e) {
    if (this._status !== "disabled") {
      this._startDrag = true;
      this._startDragPosition = {
        x: e.clientX,
        y: e.clientY,
      };
      this._resetTransition();
    }
  }
  _mouseMove(e) {
    if (this._startDrag) {
      const { x, y } = this._startDragPosition;
      const n = e.clientX - x;
      const s = e.clientY - y;
      if (n !== 0 || s !== 0) {
        this._isDragging = true;
        this._handleMove(n, s);
        this._startDragPosition = {
          x: e.clientX,
          y: e.clientY,
        };
      }
    }
  }
  _getCurrentMove() {
    let e;
    let t;
    const i = (
      (e =
        (t = this.getElementStyle) == null
          ? undefined
          : t.call(this).transform) != null
        ? e
        : ""
    ).match(/translate\(([\-\d\.]+)px[^\d\.\-]+([\-\d\.]+)px\)/);
    if (i) {
      return {
        x: Number(i[1]),
        y: Number(i[2]),
      };
    }
    return {
      x: 0,
      y: 0,
    };
  }
  _handleMove(e, t) {
    const { x, y } = this._getCurrentMove();
    const s = this._getCurrentScale();
    const a = e / s;
    const r = t / s;
    const { x: x_1, y: y_1 } = this._getRange(s);
    this._x = this._getValueInRange(x + a, x_1);
    this._y = this._getValueInRange(y + r, y_1);
    this._onMoveEvent.fire("");
    this._changeMoveStyle(s);
  }
  _getRange(e) {
    if (e >= 1 || !this._rangeContainerSize) {
      const t = Math.abs(this.containerWidth / 2);
      const i = Math.abs(this.containerHeight / 2);
      return {
        x: {
          min: -t,
          max: t,
        },
        y: {
          min: -i,
          max: i,
        },
      };
    }
    const { width, height } = this._rangeContainerSize;
    const a = (width - this.containerWidth * e) / 2 / e;
    const r = (height - this.containerHeight * e) / 2 / e;
    return {
      x: {
        min: -a,
        max: a,
      },
      y: {
        min: -r,
        max: r,
      },
    };
  }
  _getValueInRange(e, t) {
    const { min, max } = t;
    return Math.min(max, Math.max(min, e));
  }
  _changeMoveStyle(e) {
    let t;
    let i;
    const a = s._(
      n._({}, (t = this.getElementStyle) == null ? undefined : t.call(this)),
      {
        transform: "scale("
          .concat(e, ") translate(")
          .concat(this._x, "px, ")
          .concat(this._y, "px)"),
      },
    );
    if ((i = this.setElementStyle) != null) {
      i.call(this, a);
    }
  }
  _resetTransition() {
    let e;
    let t;
    let i;
    let a;
    const r = (t = this.getElementStyle) == null ? undefined : t.call(this);
    this._elementTransitionValue =
      (e = r == null ? undefined : r.transition) != null ? e : "";
    const o = s._(
      n._({}, (i = this.getElementStyle) == null ? undefined : i.call(this)),
      {
        transition: "none",
      },
    );
    if ((a = this.setElementStyle) != null) {
      a.call(this, o);
    }
  }
  _resumeTransition() {
    let e;
    let t;
    const i = s._(
      n._({}, (e = this.getElementStyle) == null ? undefined : e.call(this)),
      {
        transition: this._elementTransitionValue,
      },
    );
    if ((t = this.setElementStyle) != null) {
      t.call(this, i);
    }
  }
  _getCurrentScale() {
    let e;
    const t = (e = this.getElementStyle) == null ? undefined : e.call(this);
    const i = t == null ? undefined : t.transform;
    if (!i) {
      return 1;
    }
    const n = i.match(/scale\(([^)]+)\)/);
    return (n && Number(n[1])) || 1;
  }
  _mouseUp() {
    this._isDragging = false;
    this._startDrag = false;
    this._onMouseUpEvent.fire(undefined);
    this._resumeTransition();
  }
  _mouseLeave() {
    if (this._isDragging && this._startDrag) {
      this._resumeTransition();
    }
    this._isDragging = false;
    this._startDrag = false;
  }
  constructor() {
    super();
    this._dragStatusChange = new a.v();
    this.onDragStatusChange = this._dragStatusChange.event;
    this._onMoveEvent = new a.v();
    this.onMove = this._onMoveEvent.event;
    this._onMouseUpEvent = new a.v();
    this.onMouseUp = this._onMouseUpEvent.event;
    this._x = 0;
    this._y = 0;
    this._status = "disabled";
    this._startDrag = false;
    this._startDragPosition = {
      x: 0,
      y: 0,
    };
    this._isDragging = false;
    this._handleMouseDown = this._mouseDown.bind(this);
    this._handleMouseMove = this._mouseMove.bind(this);
    this._handleMouseUp = this._mouseUp.bind(this);
    this._handleMouseLeave = this._mouseLeave.bind(this);
    this._handleKeydown = this._onKeydown.bind(this);
    this._handleKeyup = this._onKeyup.bind(this);
    this._mask = null;
    this._elementTransitionValue = "";
    this._beforeHotkeyDragStatus = "disabled";
    this._rangeContainer = null;
    this._rangeContainerSize = null;
  }
}
