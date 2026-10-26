export var isAbsolute = function (e) {
  return /^(?:\/|\w+:)/.test(e);
};
export var normalize = function (e) {
  const t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
  const n = isAbsolute(e);
  let i = "";
  if (n) {
    i = t.shift() + "/";
  }
  for (let o = 0; o < t.length;) {
    if (t[o] === "..") {
      if (o > 0 && t[o - 1] !== "..") {
        t.splice(--o, 2);
      } else if (n) {
        t.splice(o, 1);
      } else {
        ++o;
      }
    } else if (t[o] === ".") {
      t.splice(o, 1);
    } else {
      ++o;
    }
  }
  return i + t.join("/");
};
export const resolve = function (e, t, i) {
  if (!i) {
    t = normalize(t);
  }
  if (isAbsolute(t)) {
    return t;
  }
  if (!i) {
    e = normalize(e);
  }
  if ((e = e.replace(/(?:\/|^)[^/]+$/, "")).length) {
    return normalize(e + "/" + t);
  }
  return t;
};
