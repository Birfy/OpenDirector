const e = typeof Element !== "undefined";
const r = typeof Map === "function";
const n = typeof Set === "function";
const i = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
export default function (t, a) {
  try {
    return (function t(a, o) {
      if (a === o) {
        return true;
      }
      if (a && o && typeof a === "object" && typeof o === "object") {
        let s;
        let A;
        let c;
        let u;
        if (a.constructor !== o.constructor) {
          return false;
        }
        if (Array.isArray(a)) {
          if ((s = a.length) != o.length) {
            return false;
          }
          for (A = s; A-- != 0;) {
            if (!t(a[A], o[A])) {
              return false;
            }
          }
          return true;
        }
        if (r && a instanceof Map && o instanceof Map) {
          if (a.size !== o.size) {
            return false;
          }
          for (u = a.entries(); !(A = u.next()).done;) {
            if (!o.has(A.value[0])) {
              return false;
            }
          }
          for (u = a.entries(); !(A = u.next()).done;) {
            if (!t(A.value[1], o.get(A.value[0]))) {
              return false;
            }
          }
          return true;
        }
        if (n && a instanceof Set && o instanceof Set) {
          if (a.size !== o.size) {
            return false;
          }
          for (u = a.entries(); !(A = u.next()).done;) {
            if (!o.has(A.value[0])) {
              return false;
            }
          }
          return true;
        }
        if (i && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
          if ((s = a.length) != o.length) {
            return false;
          }
          for (A = s; A-- != 0;) {
            if (a[A] !== o[A]) {
              return false;
            }
          }
          return true;
        }
        if (a.constructor === RegExp) {
          return a.source === o.source && a.flags === o.flags;
        }
        if (
          a.valueOf !== Object.prototype.valueOf &&
          typeof a.valueOf === "function" &&
          typeof o.valueOf === "function"
        ) {
          return a.valueOf() === o.valueOf();
        }
        if (
          a.toString !== Object.prototype.toString &&
          typeof a.toString === "function" &&
          typeof o.toString === "function"
        ) {
          return a.toString() === o.toString();
        }
        if ((s = (c = Object.keys(a)).length) !== Object.keys(o).length) {
          return false;
        }
        for (A = s; A-- != 0;) {
          if (!Object.prototype.hasOwnProperty.call(o, c[A])) {
            return false;
          }
        }
        if (e && a instanceof Element) {
          return false;
        }
        for (A = s; A-- != 0;) {
          if (
            ((c[A] !== "_owner" && c[A] !== "__v" && c[A] !== "__o") ||
              !a.$$typeof) &&
            !t(a[c[A]], o[c[A]])
          ) {
            return false;
          }
        }
        return true;
      }
      return a != a && o != o;
    })(t, a);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
}
