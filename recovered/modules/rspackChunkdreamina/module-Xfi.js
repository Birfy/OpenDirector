import a from "oa";
import i from "bk";
import n from "dw4";
import o from "xi";
import s from "k4";
const l = new WeakMap();
const c = new WeakMap();
export function A(e) {
  return function (t, r) {
    if (typeof r !== "string") {
      throw Error("Persistent decorator only supports string property keys");
    }
    const n = l.get(t) || new Set();
    n.add(r);
    l.set(t, n);
    if (e !== undefined) {
      const o = Object.getOwnPropertyDescriptor(t, r) || {};
      Object.defineProperty(
        t,
        r,
        i._(a._({}, o), {
          value: e,
          writable: true,
          configurable: true,
          enumerable: true,
        }),
      );
    }
  };
}
export function L(e) {
  return function (t) {
    function r() {
      for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) {
        a[i] = arguments[i];
      }
      const n = Reflect.construct(t, a, r);
      n.__initializePersistent();
      return n;
    }
    c.set(t.prototype, e);
    t.prototype.__initializePersistent = function () {
      const e = l.get(Object.getPrototypeOf(this)) || new Set();
      for (const t of e) {
        this.__restoreField(t);
      }
      this.__setupAutoSave(e);
      this._persistentInitialized = true;
    };
    t.prototype.__restoreField = function (e) {
      try {
        const t = this.__getStorageKey(e);
        const r = s.b.getItem(t);
        if (r) {
          if (r === "undefined") {
            this[e] = undefined;
            return;
          }
          const a = JSON.parse(r);
          this[e] = a;
        }
      } catch (error) {
        o.V.warn("Failed to restore field ".concat(e, ":"), error);
      }
    };
    t.prototype.__setupAutoSave = function (e) {
      let t;
      const r = (e) => {
        n.mJ(
          () => t[e],
          () => {
            if (t._persistentInitialized) {
              t.__saveField(e);
            }
          },
          {
            delay: 300,
          },
        );
      };
      for (const a of e) {
        t = this;
        r(a);
      }
    };
    t.prototype.__saveField = function (e) {
      try {
        const t = this[e];
        const r = this.__getStorageKey(e);
        const a = JSON.stringify(t);
        s.b.setItem(r, a);
      } catch (error) {
        o.V.warn("Failed to save field ".concat(e, ":"), error);
      }
    };
    t.prototype.__getStorageKey = function (e) {
      const t = c.get(Object.getPrototypeOf(this));
      return "generator_".concat(t, "_").concat(e);
    };
    r.prototype = t.prototype;
    Object.setPrototypeOf(r, t);
    Object.defineProperty(r, "name", {
      value: t.name,
    });
    return r;
  };
}
