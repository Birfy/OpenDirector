export class F {
  get currentMode() {
    return this._currentMode;
  }
  get modeInstances() {
    return this._modeInstances;
  }
  registerMode(e, t) {
    this._modes.set(e, t);
  }
  changeMode(e) {
    const _container = this._container;
    if ((i = this._currentMode) != null) {
      i.hide();
    }
    if (!_container || this.isInvalidKey(e)) {
      return null;
    }
    try {
      var i;
      let n;
      const s = this._resolve(e);
      this._currentMode = s;
      if ((n = this._currentMode) != null) {
        n.show();
      }
      return s;
    } catch (e) {
      return null;
    }
  }
  isInvalidKey(e) {
    return e == null || e === "";
  }
  destroy() {
    this._modeInstances.forEach((e) => e.destroy());
    this._currentMode = undefined;
    this._modes.clear();
    this._modeInstances.clear();
    this._container = null;
  }
  _resolve(e) {
    const t = this._modes.get(e);
    if (t) {
      let i = this._modeInstances.get(e);
      return (
        i ||
        (this._container
          ? ((i = new t({
              container: this._container,
            })),
            this._modeInstances.set(e, i),
            i)
          : undefined)
      );
    }
  }
  constructor(e) {
    this._modes = new Map();
    this._modeInstances = new Map();
    var { container } = e;
    this._container = container;
  }
}
