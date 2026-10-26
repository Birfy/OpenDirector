export default (function e(t, r) {
  if (t === r) {
    return true;
  }
  if (t && r && typeof t === "object" && typeof r === "object") {
    if (t.constructor !== r.constructor) {
      return false;
    }
    if (Array.isArray(t)) {
      if ((a = t.length) != r.length) {
        return false;
      }
      for (s = a; s-- != 0;) {
        if (!e(t[s], r[s])) {
          return false;
        }
      }
      return true;
    }
    if (t.constructor === RegExp) {
      return t.source === r.source && t.flags === r.flags;
    }
    if (t.valueOf !== Object.prototype.valueOf) {
      return t.valueOf() === r.valueOf();
    }
    if (t.toString !== Object.prototype.toString) {
      return t.toString() === r.toString();
    }
    if ((a = (i = Object.keys(t)).length) !== Object.keys(r).length) {
      return false;
    }
    for (s = a; s-- != 0;) {
      if (!Object.prototype.hasOwnProperty.call(r, i[s])) {
        return false;
      }
    }
    for (s = a; s-- != 0;) {
      var a;
      var s;
      var i;
      const o = i[s];
      if (!e(t[o], r[o])) {
        return false;
      }
    }
    return true;
  }
  return t != t && r != r;
});
