import r from "PC";
import n from "dw4";
import a from "FF3";
import o from "yl";
import s from "KnD";
function c(e) {
  let t;
  let i;
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const n = {
    toolId: e.id,
    panelKey: (t = r.panelKey) != null ? t : e.panelKey,
    type: (i = r.type) != null ? i : "default",
  };
  if (!r.type && o.s(n)) {
    n.type = "custom";
  }
  return n;
}
export { c as s };
export class e {
  get current() {
    return this._state.get();
  }
  open(item, t) {
    if (this.current) {
      return false;
    }
    const location = c(item, t);
    const href = window.location.href;
    window.history.replaceState(
      window.history.state,
      document.title,
      s.c(location),
    );
    this._originalUrl = href;
    this._toolUrl = window.location.href;
    r.flushSync(() =>
      n.h5(() =>
        this._state.set({
          item,
          location,
        }),
      ),
    );
    a.M(window.location.pathname);
    return true;
  }
  close() {
    const _originalUrl = this._originalUrl;
    const t = window.location.href === this._toolUrl;
    this.discard();
    if (_originalUrl && t) {
      window.history.replaceState(
        window.history.state,
        document.title,
        _originalUrl,
      );
      a.M(window.location.pathname);
    }
  }
  discard() {
    this._originalUrl = undefined;
    this._toolUrl = undefined;
    r.flushSync(() => n.h5(() => this._state.set(undefined)));
  }
  constructor() {
    this._state = n.sH.box(undefined, {
      deep: false,
    });
  }
}
