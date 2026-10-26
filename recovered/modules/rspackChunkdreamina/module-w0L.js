import i from "xi";
import n from "lY8";
import o from "Ky";
let a;
class s {
  static set(e, t) {
    try {
      const r = JSON.stringify(t);
      this._localStorage.setItem(e, r);
    } catch (error) {
      i.V.log(
        "JSON.stringify failed",
        error == null ? undefined : error.message,
      );
    }
  }
  static get(e) {
    let t;
    const r = (t = this._localStorage.getItem(e)) != null ? t : "";
    if (r === null) {
      return null;
    }
    try {
      return JSON.parse(r);
    } catch (error) {
      i.V.log("JSON.parse failed", error == null ? undefined : error.message);
    }
    return null;
  }
  static keys() {
    if (this._localStorage === globalThis.localStorage) {
      let e = 0;
      return {
        next: () => {
          if (e < localStorage.length) {
            var t;
            var value = (t = localStorage.key(e)) != null ? t : "";
            e++;
            return {
              value,
              done: false,
            };
          }
          return {
            done: true,
          };
        },
      };
    }
    return this._localStorage.keys();
  }
}
s._localStorage =
  ((a = global.navigator) == null ? undefined : a.cookieEnabled) &&
  global.localStorage !== undefined
    ? global.localStorage
    : new (class e {
        setItem(e, t) {
          this._map.set(e, t);
        }
        getItem(e) {
          this._map.get(e);
        }
        keys() {
          return this._map.keys();
        }
        constructor() {
          this._map = new Map();
        }
      })();
export var Ay = new n.qK({
  _cacheKey: o.vR,
  db: s,
});
