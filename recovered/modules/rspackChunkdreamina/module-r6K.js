export function J(e, t) {
  let r;
  let i;
  let n;
  const a =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const o = e.cloneNode(true);
  const c = window.getComputedStyle(e);
  const l = Number.parseFloat((r = a.lineHeight) != null ? r : c.lineHeight);
  o.style.position = "absolute";
  o.style.top = "0";
  o.style.left = "-9999px";
  o.style.width = "".concat(e.clientWidth, "px");
  o.style.height = "auto";
  o.style.maxHeight = "none";
  o.style.overflow = "visible";
  o.style.visibility = "hidden";
  o.style.pointerEvents = "none";
  o.style.transform = "none";
  o.style.webkitLineClamp = (i = a.lineClamp) != null ? i : "unset";
  if (a.fontSize) {
    o.style.fontSize = a.fontSize;
  }
  if (a.lineHeight) {
    o.style.lineHeight = a.lineHeight;
  }
  document.body.appendChild(o);
  const o_scrollHeight = o.scrollHeight;
  document.body.removeChild(o);
  return o_scrollHeight > l * t + ((n = a.buffer) != null ? n : 1);
}
