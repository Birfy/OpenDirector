export function A(t, e) {
  if (t.classList) {
    t.classList.add(e);
  } else {
    if (
      !(t.classList
        ? e && t.classList.contains(e)
        : (" " + (t.className.baseVal || t.className) + " ").indexOf(
            " " + e + " ",
          ) !== -1)
    ) {
      if (typeof t.className === "string") {
        t.className = t.className + " " + e;
      } else {
        t.setAttribute(
          "class",
          ((t.className && t.className.baseVal) || "") + " " + e,
        );
      }
    }
  }
}
