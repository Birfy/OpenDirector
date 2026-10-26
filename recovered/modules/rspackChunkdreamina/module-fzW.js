export const length = function (e) {
  let e_length = e.length;
  if (!e_length) {
    return 0;
  }
  let r = 0;
  while (--e_length % 4 > 1 && e.charAt(e_length) === "=") {
    ++r;
  }
  return Math.ceil(3 * e.length) / 4 - r;
};
const r = Array(64);
const n = Array(123);
for (let i = 0; i < 64;) {
  n[
    (r[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : (i - 59) | 43)
  ] = i++;
}
export const encode = function (e, t, n) {
  let i;
  let o = null;
  const s = [];
  let a = 0;
  let l = 0;
  while (t < n) {
    const u = e[t++];
    switch (l) {
      case 0:
        s[a++] = r[u >> 2];
        i = (3 & u) << 4;
        l = 1;
        break;
      case 1:
        s[a++] = r[i | (u >> 4)];
        i = (15 & u) << 2;
        l = 2;
        break;
      case 2:
        s[a++] = r[i | (u >> 6)];
        s[a++] = r[63 & u];
        l = 0;
    }
    if (a > 8191) {
      (o || (o = [])).push(String.fromCharCode.apply(String, s));
      a = 0;
    }
  }
  if (l) {
    s[a++] = r[i];
    s[a++] = 61;
    if (l === 1) {
      s[a++] = 61;
    }
  }
  if (o) {
    if (a) {
      o.push(String.fromCharCode.apply(String, s.slice(0, a)));
    }
    return o.join("");
  }
  return String.fromCharCode.apply(String, s.slice(0, a));
};
const o = "invalid encoding";
export const decode = function (e, t, r) {
  let i;
  const s = r;
  let a = 0;
  for (let l = 0; l < e.length;) {
    let u = e.charCodeAt(l++);
    if (u === 61 && a > 1) {
      break;
    }
    if ((u = n[u]) === undefined) {
      throw Error(o);
    }
    switch (a) {
      case 0:
        i = u;
        a = 1;
        break;
      case 1:
        t[r++] = (i << 2) | ((48 & u) >> 4);
        i = u;
        a = 2;
        break;
      case 2:
        t[r++] = ((15 & i) << 4) | ((60 & u) >> 2);
        i = u;
        a = 3;
        break;
      case 3:
        t[r++] = ((3 & i) << 6) | u;
        a = 0;
    }
  }
  if (a === 1) {
    throw Error(o);
  }
  return r - s;
};
export const test = function (e) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
    e,
  );
};
