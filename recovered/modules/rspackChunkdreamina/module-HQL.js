function r(t, e) {
  return t
    .replace(RegExp("(^|\\s)" + e + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
export function A(t, e) {
  if (t.classList) {
    t.classList.remove(e);
  } else if (typeof t.className === "string") {
    t.className = r(t.className, e);
  } else {
    t.setAttribute("class", r((t.className && t.className.baseVal) || "", e));
  }
}
