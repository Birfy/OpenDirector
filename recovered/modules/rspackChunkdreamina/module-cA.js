let r = (e) => typeof e === "object" && e != null && e.nodeType === 1;
let n = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip";
let a = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let i;
    let r = getComputedStyle(e, null);
    return (
      n(r.overflowY, t) ||
      n(r.overflowX, t) ||
      (!!(i = ((e) => {
        if (!e.ownerDocument || !e.ownerDocument.defaultView) {
          return null;
        }
        try {
          return e.ownerDocument.defaultView.frameElement;
        } catch (e) {
          return null;
        }
      })(e)) &&
        (i.clientHeight < e.scrollHeight || i.clientWidth < e.scrollWidth))
    );
  }
  return false;
};
let o = (e, t, i, r, n, a, o, s) => {
  if ((a < e && o > t) || (a > e && o < t)) {
    return 0;
  }
  if ((a <= e && s <= i) || (o >= t && s >= i)) {
    return a - e - r;
  }
  if ((o > t && s < i) || (a < e && s > i)) {
    return o - t + n;
  }
  return 0;
};
let s = (e) => {
  let e_parentElement = e.parentElement;
  if (e_parentElement == null) {
    return e.getRootNode().host || null;
  }
  return e_parentElement;
};
let l = (e, t) => {
  var i;
  var n;
  var l;
  var c;
  let d;
  if (typeof document === "undefined") {
    return [];
  }
  let { scrollMode, block, inline, boundary, skipOverflowHiddenElements } = t;
  let g = typeof boundary === "function" ? boundary : (e) => e !== boundary;
  if (!r(e)) {
    throw TypeError("Invalid target");
  }
  let f = document.scrollingElement || document.documentElement;
  let b = [];
  let y = e;
  while (r(y) && g(y)) {
    if ((y = s(y)) === f) {
      b.push(y);
      break;
    }
    if (
      !(
        y != null &&
        y === document.body &&
        a(y) &&
        !a(document.documentElement)
      )
    ) {
      if (y != null && a(y, skipOverflowHiddenElements)) {
        b.push(y);
      }
    }
  }
  let _ =
    (n = (i = window.visualViewport) == null ? undefined : i.width) != null
      ? n
      : innerWidth;
  let x =
    (c = (l = window.visualViewport) == null ? undefined : l.height) != null
      ? c
      : innerHeight;
  let { scrollX, scrollY } = window;
  let { height, width, top, right, bottom, left } = e.getBoundingClientRect();
  let {
    top: top_1,
    right: right_1,
    bottom: bottom_1,
    left: left_1,
  } = {
    top: parseFloat((d = window.getComputedStyle(e)).scrollMarginTop) || 0,
    right: parseFloat(d.scrollMarginRight) || 0,
    bottom: parseFloat(d.scrollMarginBottom) || 0,
    left: parseFloat(d.scrollMarginLeft) || 0,
  };
  let I =
    block === "start" || block === "nearest"
      ? top - top_1
      : block === "end"
        ? bottom + bottom_1
        : top + height / 2 - top_1 + bottom_1;
  let j =
    inline === "center"
      ? left + width / 2 - left_1 + right_1
      : inline === "end"
        ? right + right_1
        : left - left_1;
  let $ = [];
  for (let e = 0; e < b.length; e++) {
    let el = b[e];
    let {
      height: height_1,
      width: width_1,
      top: top_2,
      right: right_2,
      bottom: bottom_2,
      left: left_2,
    } = el.getBoundingClientRect();
    if (
      scrollMode === "if-needed" &&
      top >= 0 &&
      left >= 0 &&
      bottom <= x &&
      right <= _ &&
      top >= top_2 &&
      bottom <= bottom_2 &&
      left >= left_2 &&
      right <= right_2
    ) {
      break;
    }
    let c = getComputedStyle(el);
    let d = parseInt(c.borderLeftWidth, 10);
    let h = parseInt(c.borderTopWidth, 10);
    let v = parseInt(c.borderRightWidth, 10);
    let g = parseInt(c.borderBottomWidth, 10);
    let y = 0;
    let W = 0;
    let M = "offsetWidth" in el ? el.offsetWidth - el.clientWidth - d - v : 0;
    let C =
      "offsetHeight" in el ? el.offsetHeight - el.clientHeight - h - g : 0;
    let F =
      "offsetWidth" in el
        ? el.offsetWidth === 0
          ? 0
          : width_1 / el.offsetWidth
        : 0;
    let O =
      "offsetHeight" in el
        ? el.offsetHeight === 0
          ? 0
          : height_1 / el.offsetHeight
        : 0;
    if (f === el) {
      y =
        block === "start"
          ? I
          : block === "end"
            ? I - x
            : block === "nearest"
              ? o(
                  scrollY,
                  scrollY + x,
                  x,
                  h,
                  g,
                  scrollY + I,
                  scrollY + I + height,
                  height,
                )
              : I - x / 2;
      W =
        inline === "start"
          ? j
          : inline === "center"
            ? j - _ / 2
            : inline === "end"
              ? j - _
              : o(
                  scrollX,
                  scrollX + _,
                  _,
                  d,
                  v,
                  scrollX + j,
                  scrollX + j + width,
                  width,
                );
      y = Math.max(0, y + scrollY);
      W = Math.max(0, W + scrollX);
    } else {
      y =
        block === "start"
          ? I - top_2 - h
          : block === "end"
            ? I - bottom_2 + g + C
            : block === "nearest"
              ? o(top_2, bottom_2, height_1, h, g + C, I, I + height, height)
              : I - (top_2 + height_1 / 2) + C / 2;
      W =
        inline === "start"
          ? j - left_2 - d
          : inline === "center"
            ? j - (left_2 + width_1 / 2) + M / 2
            : inline === "end"
              ? j - right_2 + v + M
              : o(left_2, right_2, width_1, d, v + M, j, j + width, width);
      let { scrollLeft, scrollTop } = el;
      y =
        O === 0
          ? 0
          : Math.max(
              0,
              Math.min(scrollTop + y / O, el.scrollHeight - height_1 / O + C),
            );
      W =
        F === 0
          ? 0
          : Math.max(
              0,
              Math.min(scrollLeft + W / F, el.scrollWidth - width_1 / F + M),
            );
      I += scrollTop - y;
      j += scrollLeft - W;
    }
    $.push({
      el,
      top: y,
      left: W,
    });
  }
  return $;
};
export function A(e, t) {
  let i;
  if (
    !e.isConnected ||
    !((e) => {
      let t = e;
      while (t && t.parentNode) {
        if (t.parentNode === document) {
          return true;
        }
        t =
          t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
      }
      return false;
    })(e)
  ) {
    return;
  }
  let r = {
    top: parseFloat((i = window.getComputedStyle(e)).scrollMarginTop) || 0,
    right: parseFloat(i.scrollMarginRight) || 0,
    bottom: parseFloat(i.scrollMarginBottom) || 0,
    left: parseFloat(i.scrollMarginLeft) || 0,
  };
  if (typeof t === "object" && typeof t.behavior === "function") {
    return t.behavior(l(e, t));
  }
  let behavior = typeof t === "boolean" || t == null ? undefined : t.behavior;
  for (let { el, top, left } of l(
    e,
    t === false
      ? {
          block: "end",
          inline: "nearest",
        }
      : t === Object(t) && Object.keys(t).length !== 0
        ? t
        : {
            block: "start",
            inline: "nearest",
          },
  )) {
    let top_1 = top - r.top + r.bottom;
    let left_1 = left - r.left + r.right;
    el.scroll({
      top: top_1,
      left: left_1,
      behavior,
    });
  }
}
