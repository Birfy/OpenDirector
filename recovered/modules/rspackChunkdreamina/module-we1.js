function n(e) {
  return e != null && typeof e === "object" && e.nodeType === 1;
}
function o(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function i(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return o(r.overflowY, t) || o(r.overflowX, t);
  }
  return false;
}
function c(e, t, r, n, o, i, c, a) {
  if ((i < e && c > t) || (i > e && c < t)) {
    return 0;
  }
  if ((i <= e && a <= r) || (c >= t && a >= r)) {
    return i - e - n;
  }
  if ((c > t && a < r) || (i < e && a > r)) {
    return c - t + o;
  }
  return 0;
}
const a = (e, t) => {
  const t_scrollMode = t.scrollMode;
  const t_block = t.block;
  const t_inline = t.inline;
  const t_boundary = t.boundary;
  const t_skipOverflowHiddenElements = t.skipOverflowHiddenElements;
  const u =
    typeof t_boundary === "function" ? t_boundary : (e) => e !== t_boundary;
  if (!n(e)) {
    throw TypeError("Invalid target");
  }
  const f = document.scrollingElement || document.documentElement;
  const p = [];
  for (let h = e; n(h) && u(h);) {
    if ((h = h.parentNode) === f) {
      p.push(h);
      break;
    }
    if (
      (!(h === document.body && i(h)) || i(document.documentElement)) &&
      i(h, t_skipOverflowHiddenElements)
    ) {
      p.push(h);
    }
  }
  const d = window.visualViewport ? visualViewport.width : innerWidth;
  const b = window.visualViewport ? visualViewport.height : innerHeight;
  const y = window.scrollX || pageXOffset;
  const g = window.scrollY || pageYOffset;
  const O = e.getBoundingClientRect();
  const O_height = O.height;
  const O_width = O.width;
  const O_top = O.top;
  const O_right = O.right;
  const O_bottom = O.bottom;
  const O_left = O.left;
  let E =
    t_block === "start" || t_block === "nearest"
      ? O_top
      : t_block === "end"
        ? O_bottom
        : O_top + O_height / 2;
  let C =
    t_inline === "center"
      ? O_left + O_width / 2
      : t_inline === "end"
        ? O_right
        : O_left;
  const N = [];
  for (let x = 0; x < p.length; x++) {
    const el = p[x];
    const M = el.getBoundingClientRect();
    const I = M.height;
    const S = M.width;
    const V = M.top;
    const R = M.right;
    const A = M.bottom;
    const _ = M.left;
    if (
      t_scrollMode === "if-needed" &&
      O_top >= 0 &&
      O_left >= 0 &&
      O_bottom <= b &&
      O_right <= d &&
      O_top >= V &&
      O_bottom <= A &&
      O_left >= _ &&
      O_right <= R
    ) {
      break;
    }
    const q = getComputedStyle(el);
    const T = parseInt(q.borderLeftWidth, 10);
    const W = parseInt(q.borderTopWidth, 10);
    const L = parseInt(q.borderRightWidth, 10);
    const U = parseInt(q.borderBottomWidth, 10);
    let top = 0;
    let left = 0;
    const H = "offsetWidth" in el ? el.offsetWidth - el.clientWidth - T - L : 0;
    const F =
      "offsetHeight" in el ? el.offsetHeight - el.clientHeight - W - U : 0;
    if (f === el) {
      top =
        t_block === "start"
          ? E
          : t_block === "end"
            ? E - b
            : t_block === "nearest"
              ? c(g, g + b, b, W, U, g + E, g + E + O_height, O_height)
              : E - b / 2;
      left =
        t_inline === "start"
          ? C
          : t_inline === "center"
            ? C - d / 2
            : t_inline === "end"
              ? C - d
              : c(y, y + d, d, T, L, y + C, y + C + O_width, O_width);
      top = Math.max(0, top + g);
      left = Math.max(0, left + y);
    } else {
      top =
        t_block === "start"
          ? E - V - W
          : t_block === "end"
            ? E - A + U + F
            : t_block === "nearest"
              ? c(V, A, I, W, U + F, E, E + O_height, O_height)
              : E - (V + I / 2) + F / 2;
      left =
        t_inline === "start"
          ? C - _ - T
          : t_inline === "center"
            ? C - (_ + S / 2) + H / 2
            : t_inline === "end"
              ? C - R + L + H
              : c(_, R, S, T, L + H, C, C + O_width, O_width);
      const z = el.scrollLeft;
      const Y = el.scrollTop;
      top = Math.max(0, Math.min(Y + top, el.scrollHeight - I + F));
      left = Math.max(0, Math.min(z + left, el.scrollWidth - S + H));
      E += Y - top;
      C += z - left;
    }
    N.push({
      el,
      top,
      left,
    });
  }
  return N;
};
function s(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
export var A = function (e, t) {
  const r = !e.ownerDocument.documentElement.contains(e);
  if (s(t) && typeof t.behavior === "function") {
    return t.behavior(r ? [] : a(e, t));
  }
  if (!r) {
    let n;
    let behavior;
    let i;
    const c =
      t === false
        ? {
            block: "end",
            inline: "nearest",
          }
        : s(t)
          ? t
          : {
              block: "start",
              inline: "nearest",
            };
    n = a(e, c);
    if ((behavior = c.behavior) === undefined) {
      behavior = "auto";
    }
    i = "scrollBehavior" in document.body.style;
    return void n.forEach((e) => {
      const t = e.el;
      const e_top = e.top;
      const e_left = e.left;
      if (t.scroll && i) {
        t.scroll({
          top: e_top,
          left: e_left,
          behavior,
        });
      } else {
        t.scrollTop = e_top;
        t.scrollLeft = e_left;
      }
    });
  }
};
