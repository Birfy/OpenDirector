import a from "dw4";
import r from "mL";
import { Y } from "./module-AAJ.js";
import { r as r_1 } from "./module-XR9.js";
export class v {
  get breakpoints() {
    return this.presets[this.currPreset].breakpoints;
  }
  get gap() {
    return this.presets[this.currPreset].gap;
  }
  get columnCount() {
    if (this.contentWidth) {
      return Y(this.breakpoints, this.contentWidth);
    }
    return 0;
  }
  get columnWidth() {
    const t = this.columnCount - 1;
    return Math.max(
      Math.ceil((this.contentWidth - t * this.gap) / this.columnCount),
      0,
    );
  }
  get contentHeight() {
    if (this.list.length === 0 || this.columnCount === 0) {
      return 0;
    }
    const t = Array(this.columnCount).fill(0);
    const e = Array(this.columnCount).fill(false);
    for (
      let i = 0, a = this.list.length - 1;
      a >= 0 && i !== this.columnCount;
      a--
    ) {
      const r = this.list[a];
      if (r.layout) {
        const { col } = r.layout;
        if (!e[col]) {
          const o = r.layout.y + r.layout.h + (r.layout.s || 0);
          if (o > t[col]) {
            t[col] = o;
          } else {
            e[col] = true;
            i++;
          }
        }
      }
    }
    return Math.max(...t);
  }
  resize(t) {
    if (this.contentWidth !== t) {
      this.contentWidth = t;
      if (t > 0) {
        this.recalculateLayout();
      }
    }
  }
  setCurrPreset(t) {
    this.currPreset = t;
  }
  setListStatus(t) {
    this.listStatus = t;
  }
  setHasMore(t) {
    this.hasMore = t;
  }
  setFloatShape(t) {
    let e;
    let i;
    let a;
    let r;
    let n = false;
    if (t) {
      this.floatShape = t;
      if (
        (i = this.list[0]) == null || (e = i.shape) == null
          ? undefined
          : e.float
      ) {
        this.list[0].shape = this.floatShape;
        delete this.list[0].layout;
      } else {
        this.list.unshift({
          key: "float",
          shape: this.floatShape,
          layout: undefined,
          data: {},
        });
      }
      n = true;
    } else {
      this.floatShape = undefined;
      if (
        (r = this.list[0]) == null || (a = r.shape) == null
          ? undefined
          : a.float
      ) {
        this.list.shift();
        n = true;
      }
    }
    if (n) {
      this._markListChanged();
      this.recalculateLayout();
    }
  }
  setList(t) {
    this.list.splice(0, this.list.length, ...t);
    this._markListChanged();
    if (this.contentWidth && this.columnCount) {
      r_1(
        this.list,
        {
          columnCount: this.columnCount,
          columnWidth: this.columnWidth,
          gapWidth: this.gap,
        },
        0,
      );
    }
  }
  push() {
    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) {
      e[i] = arguments[i];
    }
    this.list.push(...e);
    if (e.length > 0) {
      this._markListChanged();
    }
    if (this.contentWidth && this.columnCount !== 0) {
      r_1(
        this.list,
        {
          columnCount: this.columnCount,
          columnWidth: this.columnWidth,
          gapWidth: this.gap,
        },
        this.list.length - e.length,
      );
    }
  }
  splice(t, e) {
    for (
      var i = arguments.length, a = Array(i > 2 ? i - 2 : 0), r = 2;
      r < i;
      r++
    ) {
      a[r - 2] = arguments[r];
    }
    this.list.splice(t, e, ...a);
    if (e > 0 || a.length > 0) {
      this._markListChanged();
    }
    if (this.contentWidth && this.columnCount) {
      r_1(
        this.list,
        {
          columnCount: this.columnCount,
          columnWidth: this.columnWidth,
          gapWidth: this.gap,
        },
        t,
      );
    }
  }
  clear() {
    if (this.list.length !== 0) {
      this.list.splice(0, this.list.length);
      this._markListChanged();
    }
  }
  updateItem(t, e) {
    const i = this.list.findIndex((e) => e.key === t);
    if (i !== -1) {
      Object.assign(this.list[i].data, e.data);
      this._markListChanged();
    }
  }
  _markListChanged() {
    this.listRevision += 1;
  }
  recalculateLayout() {
    if (this.contentWidth && this.columnCount !== 0) {
      r_1(this.list, {
        columnCount: this.columnCount,
        columnWidth: this.columnWidth,
        gapWidth: this.gap,
      });
    }
  }
  constructor(t) {
    this.presets = {
      default: {
        gap: 0,
        breakpoints: {},
      },
    };
    this.currPreset = "default";
    this.contentWidth = 0;
    this.list = [];
    this.listRevision = 0;
    this.listStatus = "idle";
    this.hasMore = true;
    this.floatShape = undefined;
    this.presets = r.A(t.presets);
    this.contentWidth = r.A(t.contentWidth);
    if (t.floatShape) {
      this.floatShape = r.A(t.floatShape);
      this.list.push({
        key: "float",
        shape: this.floatShape,
        layout: undefined,
        data: {},
      });
    }
    a.l_(this);
  }
}
