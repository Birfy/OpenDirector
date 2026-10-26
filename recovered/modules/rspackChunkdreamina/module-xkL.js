export const length = function (e) {
  let t = 0;
  let r = 0;
  for (let n = 0; n < e.length; ++n) {
    if ((r = e.charCodeAt(n)) < 128) {
      t += 1;
    } else if (r < 2048) {
      t += 2;
    } else if ((64512 & r) == 55296 && (64512 & e.charCodeAt(n + 1)) == 56320) {
      ++n;
      t += 4;
    } else {
      t += 3;
    }
  }
  return t;
};
export const read = function (e, t, r) {
  if (r - t < 1) {
    return "";
  }
  let n;
  let i = null;
  const o = [];
  let s = 0;
  while (t < r) {
    if ((n = e[t++]) < 128) {
      o[s++] = n;
    } else if (n > 191 && n < 224) {
      o[s++] = ((31 & n) << 6) | (63 & e[t++]);
    } else if (n > 239 && n < 365) {
      n =
        (((7 & n) << 18) |
          ((63 & e[t++]) << 12) |
          ((63 & e[t++]) << 6) |
          (63 & e[t++])) -
        65536;
      o[s++] = 55296 + (n >> 10);
      o[s++] = 56320 + (1023 & n);
    } else {
      o[s++] = ((15 & n) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++]);
    }
    if (s > 8191) {
      (i || (i = [])).push(String.fromCharCode.apply(String, o));
      s = 0;
    }
  }
  if (i) {
    if (s) {
      i.push(String.fromCharCode.apply(String, o.slice(0, s)));
    }
    return i.join("");
  }
  return String.fromCharCode.apply(String, o.slice(0, s));
};
export const write = function (e, t, r) {
  let n;
  let i;
  const o = r;
  for (let s = 0; s < e.length; ++s) {
    if ((n = e.charCodeAt(s)) < 128) {
      t[r++] = n;
    } else {
      if (n < 2048) {
        t[r++] = (n >> 6) | 192;
      } else {
        if (
          (64512 & n) == 55296 &&
          (64512 & (i = e.charCodeAt(s + 1))) == 56320
        ) {
          n = 65536 + ((1023 & n) << 10) + (1023 & i);
          ++s;
          t[r++] = (n >> 18) | 240;
          t[r++] = ((n >> 12) & 63) | 128;
        } else {
          t[r++] = (n >> 12) | 224;
        }
        t[r++] = ((n >> 6) & 63) | 128;
      }
      t[r++] = (63 & n) | 128;
    }
  }
  return r - o;
};
