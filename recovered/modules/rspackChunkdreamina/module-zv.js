let r = [
  "transform",
  "WebkitTransform",
  "msTransform",
  "MozTransform",
  "OTransform",
];
export function sy(e) {
  let t = {};
  r.forEach((n) => {
    t[n] = e;
  });
  return t;
}
export function gd(e, t) {
  if (!e || !t) {
    return null;
  }
  let n = t;
  if (n === "float") {
    n = "cssFloat";
  }
  try {
    if (document.defaultView) {
      let t = document.defaultView.getComputedStyle(e, "");
      if (e.style[n] || t) {
        return t[n];
      }
      return "";
    }
  } catch (t) {
    return e.style[n];
  }
}
