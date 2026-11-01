export function U(e, t) {
  try {
    if (t.parentNode === e) {
      e.removeChild(t);
      return true;
    }
    if (t.parentNode) {
      t.parentNode.removeChild(t);
      return true;
    }
    return false;
  } catch (e) {
    if ("remove" in t && typeof t.remove === "function") {
      t.remove();
      return true;
    }
    return false;
  }
}
export function W(e) {
  return U(document.body, e);
}
