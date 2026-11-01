const hasOwnProperty = Object.prototype.hasOwnProperty;
function i(t, e, n) {
  for (n of t.keys()) {
    if (j(n, e)) {
      return n;
    }
  }
}
export function j(t, e) {
  let n;
  let o;
  let l;
  if (t === e) {
    return true;
  }
  if (t && e && (n = t.constructor) === e.constructor) {
    if (n === Date) {
      return t.getTime() === e.getTime();
    }
    if (n === RegExp) {
      return t.toString() === e.toString();
    }
    if (n === Array) {
      if ((o = t.length) === e.length) {
        while (o-- && j(t[o], e[o]));
      }
      return o === -1;
    }
    if (n === Set) {
      if (t.size !== e.size) {
        return false;
      }
      for (o of t) {
        if (((l = o) && typeof l === "object" && !(l = i(e, l))) || !e.has(l)) {
          return false;
        }
      }
      return true;
    }
    if (n === Map) {
      if (t.size !== e.size) {
        return false;
      }
      for (o of t) {
        if (
          ((l = o[0]) && typeof l === "object" && !(l = i(e, l))) ||
          !j(o[1], e.get(l))
        ) {
          return false;
        }
      }
      return true;
    }
    if (n === ArrayBuffer) {
      t = new Uint8Array(t);
      e = new Uint8Array(e);
    } else if (n === DataView) {
      if ((o = t.byteLength) === e.byteLength) {
        while (o-- && t.getInt8(o) === e.getInt8(o));
      }
      return o === -1;
    }
    if (ArrayBuffer.isView(t)) {
      if ((o = t.byteLength) === e.byteLength) {
        while (o-- && t[o] === e[o]);
      }
      return o === -1;
    }
    if (!n || typeof t === "object") {
      o = 0;
      for (n in t) {
        if (
          (hasOwnProperty.call(t, n) && ++o && !hasOwnProperty.call(e, n)) ||
          !(n in e) ||
          !j(t[n], e[n])
        ) {
          return false;
        }
      }
      return Object.keys(e).length === o;
    }
  }
  return t != t && e != e;
}
