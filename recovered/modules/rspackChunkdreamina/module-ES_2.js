import a from "NY";
class o {
  next() {
    const e = this;
    return a._(function* () {
      e._continue();
      e._currentCursor = yield e._waiting;
      if (e._currentCursor) {
        return {
          value: e._currentCursor,
          done: false,
        };
      }
      return {
        value: e._currentCursor,
        done: true,
      };
    })();
  }
  [Symbol.asyncIterator]() {
    return this;
  }
  _updateWaiting() {
    this._waiting = new Promise((resolve) => {
      this._resolve = resolve;
    });
  }
  _continue() {
    let e;
    this._updateWaiting();
    if ((e = this._currentCursor) != null) {
      e.continue();
    }
  }
  constructor(e) {
    this._request = e;
    this._currentCursor = null;
    this._request.onsuccess = () => {
      this._resolve(this._request.result);
    };
    this._request.onerror = () => {
      this._resolve(null);
    };
  }
}
export function H(e, t, r) {
  return new o(e.openCursor(t, r));
}
