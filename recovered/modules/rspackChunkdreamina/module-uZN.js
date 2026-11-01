import r from "NY";
export class T {
  refreshIfStale() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : Date.now();
    if (this._disposed) {
      return Promise.resolve();
    }
    if (this._loadPromise) {
      return this._loadPromise;
    }
    if (
      this._lastLoadedAt !== undefined &&
      e - this._lastLoadedAt < this._options.staleMs
    ) {
      return Promise.resolve();
    }
    return this._load();
  }
  reload() {
    let e;
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this._disposed) {
      return Promise.resolve();
    }
    if (t.invalidatePending) {
      this._invalidatePending();
    }
    if ((e = this._loadPromise) != null) {
      return e;
    }
    return this._load();
  }
  reset() {
    this._invalidatePending();
    this._lastLoadedAt = undefined;
  }
  dispose() {
    this._disposed = true;
    this._invalidatePending();
  }
  _invalidatePending() {
    this._requestVersion += 1;
    this._loadPromise = undefined;
  }
  _load() {
    let e;
    let t;
    const _requestVersion = this._requestVersion;
    if ((e = (t = this._options).onLoadingChange) != null) {
      e.call(t, true);
    }
    var n = r
      ._(function* () {
        try {
          const e = yield this._options.load();
          if (!this._isRequestCurrent(_requestVersion)) {
            return;
          }
          this._lastLoadedAt = Date.now();
          this._options.onSuccess(e);
        } catch (error) {
          if (this._isRequestCurrent(_requestVersion)) {
            this._lastLoadedAt = undefined;
            this._options.onError(error);
          }
        }
      })
      .call(this)
      .finally(() => {
        if (this._loadPromise === n) {
          this._loadPromise = undefined;
        }
        if (this._isRequestCurrent(_requestVersion)) {
          var e;
          var t;
          if ((e = (t = this._options).onLoadingChange) != null) {
            e.call(t, false);
          }
        }
      });
    this._loadPromise = n;
    return n;
  }
  _isRequestCurrent(e) {
    return !this._disposed && e === this._requestVersion;
  }
  constructor(e) {
    this._options = e;
    this._requestVersion = 0;
    this._disposed = false;
  }
}
