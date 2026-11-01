export default c;
const t = /[\s{}=;:[\],'"()<>]/g;
const r = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
const n = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
const i = /^ *[*/]+ */;
const o = /^\s*\*?\/*/;
const s = /\n/g;
const a = /\s/;
const l = /\\(.?)/g;
const u = {
  0: "\0",
  r: "\r",
  n: "\n",
  t: "	",
};
function f(e) {
  return e.replace(l, (e, t) => {
    switch (t) {
      case "\\":
      case "":
        return t;
      default:
        return u[t] || "";
    }
  });
}
function c(e, l) {
  e = e.toString();
  let u = 0;
  const e_length = e.length;
  let p = 1;
  let d = 0;
  const h = {};
  const m = [];
  let y = null;
  function v(e) {
    return Error("illegal " + e + " (line " + p + ")");
  }
  function g(t) {
    return e.charAt(t);
  }
  function b(t, r, leading) {
    let a;
    const u = {
      type: e.charAt(t++),
      lineEmpty: false,
      leading,
    };
    let f = t - (l ? 2 : 3);
    do {
      if (--f < 0 || (a = e.charAt(f)) === "\n") {
        u.lineEmpty = true;
        break;
      }
    } while (a === " " || a === "	");
    for (var c = e.substring(t, r).split(s), m = 0; m < c.length; ++m) {
      c[m] = c[m].replace(l ? o : i, "").trim();
    }
    u.text = c.join("\n").trim();
    h[p] = u;
    d = p;
  }
  function w(t) {
    const r = k(t);
    const n = e.substring(t, r);
    return /^\s*\/\//.test(n);
  }
  function k(e) {
    for (var t = e; t < e_length && g(t) !== "\n";) {
      t++;
    }
    return t;
  }
  function next() {
    if (m.length > 0) {
      return m.shift();
    }
    if (y) {
      const i = y === "'" ? n : r;
      i.lastIndex = u - 1;
      const o = i.exec(e);
      if (!o) {
        throw v("string");
      }
      u = i.lastIndex;
      push(y);
      y = null;
      return f(o[1]);
    }
    let s;
    let d;
    let h;
    let x;
    let _;
    let E = u === 0;
    do {
      if (u === e_length) {
        return null;
      }
      for (s = false; a.test((h = g(u)));) {
        if (h === "\n") {
          E = true;
          ++p;
        }
        if (++u === e_length) {
          return null;
        }
      }
      if (g(u) === "/") {
        if (++u === e_length) {
          throw v("comment");
        }
        if (g(u) === "/") {
          if (l) {
            x = u;
            _ = false;
            if (w(u - 1)) {
              _ = true;
              do {
                if ((u = k(u)) === e_length || (u++, !E)) {
                  break;
                }
              } while (w(u));
            } else {
              u = Math.min(e_length, k(u) + 1);
            }
            if (_) {
              b(x, u, E);
              E = true;
            }
            p++;
            s = true;
          } else {
            for (_ = g((x = u + 1)) === "/"; g(++u) !== "\n";) {
              if (u === e_length) {
                return null;
              }
            }
            ++u;
            if (_) {
              b(x, u - 1, E);
              E = true;
            }
            ++p;
            s = true;
          }
        } else {
          if ((h = g(u)) !== "*") {
            return "/";
          }
          x = u + 1;
          _ = l || g(x) === "*";
          do {
            if (h === "\n") {
              ++p;
            }
            if (++u === e_length) {
              throw v("comment");
            }
            d = h;
            h = g(u);
          } while (d !== "*" || h !== "/");
          ++u;
          if (_) {
            b(x, u - 2, E);
            E = true;
          }
          s = true;
        }
      }
    } while (s);
    let j = u;
    t.lastIndex = 0;
    if (!t.test(g(j++))) {
      while (j < e_length && !t.test(g(j))) {
        ++j;
      }
    }
    const A = e.substring(u, (u = j));
    if (A === '"' || A === "'") {
      y = A;
    }
    return A;
  }
  function push(e) {
    m.push(e);
  }
  function peek() {
    if (!m.length) {
      const e = next();
      if (e === null) {
        return null;
      }
      push(e);
    }
    return m[0];
  }
  return Object.defineProperty(
    {
      next,
      peek,
      push,
      skip: function (e, t) {
        const r = peek();
        if (r === e) {
          next();
          return true;
        }
        if (!t) {
          throw v("token '" + r + "', '" + e + "' expected");
        }
        return false;
      },
      cmnt: function (e) {
        let t;
        let r = null;
        if (e === undefined) {
          t = h[p - 1];
          delete h[p - 1];
          if (t && (l || t.type === "*" || t.lineEmpty)) {
            r = t.leading ? t.text : null;
          }
        } else {
          if (d < e) {
            peek();
          }
          t = h[e];
          delete h[e];
          if (t && !t.lineEmpty && (l || t.type === "/")) {
            r = t.leading ? null : t.text;
          }
        }
        return r;
      },
    },
    "line",
    {
      get: function () {
        return p;
      },
    },
  );
}
c.unescape = f;
