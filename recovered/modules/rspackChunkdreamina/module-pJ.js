export const q = function (e, t) {
  if (typeof e !== "string") {
    throw TypeError("argument str must be a string");
  }
  const r = {};
  const e_length = e.length;
  if (e_length < 2) {
    return r;
  }
  const u = (t && t.decode) || a;
  let c = 0;
  let f = 0;
  let l = 0;
  do {
    if ((f = e.indexOf("=", c)) === -1) {
      break;
    }
    if ((l = e.indexOf(";", c)) === -1) {
      l = e_length;
    } else if (f > l) {
      c = e.lastIndexOf(";", f - 1) + 1;
      continue;
    }
    const p = o(e, c, f);
    const h = i(e, f, p);
    const v = e.slice(p, h);
    if (!hasOwnProperty.call(r, v)) {
      let d = o(e, f + 1, l);
      let g = i(e, l, d);
      if (e.charCodeAt(d) === 34 && e.charCodeAt(g - 1) === 34) {
        d++;
        g--;
      }
      const y = e.slice(d, g);
      r[v] = ((e, t) => {
        try {
          return t(e);
        } catch (t) {
          return e;
        }
      })(y, u);
    }
    c = l + 1;
  } while (c < e_length);
  return r;
};
const toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function o(e, t, r) {
  do {
    const n = e.charCodeAt(t);
    if (n !== 32 && n !== 9) {
      return t;
    }
  } while (++t < r);
  return r;
}
function i(e, t, r) {
  while (t > r) {
    const n = e.charCodeAt(--t);
    if (n !== 32 && n !== 9) {
      return t + 1;
    }
  }
  return r;
}
function a(e) {
  if (e.indexOf("%") !== -1) {
    return decodeURIComponent(e);
  }
  return e;
}
