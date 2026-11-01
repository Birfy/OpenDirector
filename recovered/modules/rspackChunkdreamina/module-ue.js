let r = /^xn--/;
let n = /[^\0-\x7F]/;
let o = /[\x2E\u3002\uFF0E\uFF61]/g;
let i = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input",
};
let Math_floor = Math.floor;
let String_fromCharCode = String.fromCharCode;
function a(e) {
  throw RangeError(i[e]);
}
function u(e, t) {
  let r = e.split("@");
  let n = "";
  if (r.length > 1) {
    n = r[0] + "@";
    e = r[1];
  }
  return (
    n +
    ((e, t) => {
      let r = [];
      let e_length = e.length;
      while (e_length--) {
        r[e_length] = t(e[e_length]);
      }
      return r;
    })((e = e.replace(o, ".")).split("."), t).join(".")
  );
}
function d(e) {
  let t = [];
  let r = 0;
  let e_length = e.length;
  while (r < e_length) {
    let o = e.charCodeAt(r++);
    if (o >= 55296 && o <= 56319 && r < e_length) {
      let n = e.charCodeAt(r++);
      if ((64512 & n) == 56320) {
        t.push(((1023 & o) << 10) + (1023 & n) + 65536);
      } else {
        t.push(o);
        r--;
      }
    } else {
      t.push(o);
    }
  }
  return t;
}
let c = (e, t) => e + 22 + 75 * (e < 26) - ((t != 0) << 5);
let p = (e, t, r) => {
  let n = 0;
  e = r ? Math_floor(e / 700) : e >> 1;
  for (e += Math_floor(e / t); e > 455; n += 36) {
    e = Math_floor(e / 35);
  }
  return Math_floor(n + (36 * e) / (e + 38));
};
let h = function (e) {
  let t = [];
  let e_length = e.length;
  let n = 0;
  let o = 128;
  let i = 72;
  let s = e.lastIndexOf("-");
  if (s < 0) {
    s = 0;
  }
  for (let r = 0; r < s; ++r) {
    if (e.charCodeAt(r) >= 128) {
      a("not-basic");
    }
    t.push(e.charCodeAt(r));
  }
  for (let d = s > 0 ? s + 1 : 0; d < e_length;) {
    let s = n;
    for (let t = 1, o = 36; ; o += 36) {
      let u;
      if (d >= e_length) {
        a("invalid-input");
      }
      let s =
        (u = e.charCodeAt(d++)) >= 48 && u < 58
          ? 26 + (u - 48)
          : u >= 65 && u < 91
            ? u - 65
            : u >= 97 && u < 123
              ? u - 97
              : 36;
      if (s >= 36) {
        a("invalid-input");
      }
      if (s > Math_floor((2147483647 - n) / t)) {
        a("overflow");
      }
      n += s * t;
      let c = o <= i ? 1 : o >= i + 26 ? 26 : o - i;
      if (s < c) {
        break;
      }
      let p = 36 - c;
      if (t > Math_floor(2147483647 / p)) {
        a("overflow");
      }
      t *= p;
    }
    let c = t.length + 1;
    i = p(n - s, c, s == 0);
    if (Math_floor(n / c) > 2147483647 - o) {
      a("overflow");
    }
    o += Math_floor(n / c);
    n %= c;
    t.splice(n++, 0, o);
  }
  return String.fromCodePoint(...t);
};
let encode = function (e) {
  let t = [];
  let length = (e = d(e)).length;
  let n = 128;
  let o = 0;
  let i = 72;
  for (let r of e) {
    if (r < 128) {
      t.push(String_fromCharCode(r));
    }
  }
  let t_length = t.length;
  let h = t_length;
  for (t_length && t.push("-"); h < length;) {
    let r = 2147483647;
    for (let t of e) {
      if (t >= n && t < r) {
        r = t;
      }
    }
    let d = h + 1;
    for (let f of (r - n > Math_floor((2147483647 - o) / d) && a("overflow"),
    (o += (r - n) * d),
    (n = r),
    e)) {
      if (f < n && ++o > 2147483647) {
        a("overflow");
      }
      if (f === n) {
        let e = o;
        for (let r = 36; ; r += 36) {
          let n = r <= i ? 1 : r >= i + 26 ? 26 : r - i;
          if (e < n) {
            break;
          }
          let o = e - n;
          let a = 36 - n;
          t.push(String_fromCharCode(c(n + (o % a), 0)));
          e = Math_floor(o / a);
        }
        t.push(String_fromCharCode(c(e, 0)));
        i = p(o, d, h === t_length);
        o = 0;
        ++h;
      }
    }
    ++o;
    ++n;
  }
  return t.join("");
};
export const Ay = {
  version: "2.3.1",
  ucs2: {
    decode: d,
    encode: (e) => String.fromCodePoint(...e),
  },
  decode: h,
  encode,
  toASCII: function (e) {
    return u(e, function (e) {
      if (n.test(e)) {
        return "xn--" + encode(e);
      }
      return e;
    });
  },
  toUnicode: function (e) {
    return u(e, function (e) {
      if (r.test(e)) {
        return h(e.slice(4).toLowerCase());
      }
      return e;
    });
  },
};
