import { LN, U3, i5, nh } from "./module-Zr.js";
import { CU, FK, Ji, S4, ZF } from "./module-le8.js";
import { Um } from "./module-zxf.js";
let s = (e) => {
  for (let t = 0; ; t++) {
    if (!(e = e.previousSibling)) {
      return t;
    }
  }
};
let l = (e) => {
  let t = e.assignedSlot || e.parentNode;
  if (t && t.nodeType == 11) {
    return t.host;
  }
  return t;
};
let a = null;
let h = (e, t, n) => {
  let r = a || (a = document.createRange());
  r.setEnd(e, n == null ? e.nodeValue.length : n);
  r.setStart(e, t || 0);
  return r;
};
let c = () => {
  a = null;
};
let d = (e, t, n, r) => n && (f(e, t, n, r, -1) || f(e, t, n, r, 1));
let p = /^(img|br|input|textarea|hr)$/i;
function f(e, t, n, r, i) {
  let o;
  while (true) {
    if (e == n && t == r) {
      return true;
    }
    if (t == (i < 0 ? 0 : u(e))) {
      let n = e.parentNode;
      if (
        !n ||
        n.nodeType != 1 ||
        m(e) ||
        p.test(e.nodeName) ||
        e.contentEditable == "false"
      ) {
        return false;
      }
      t = s(e) + (i < 0 ? 0 : 1);
      e = n;
    } else {
      if (e.nodeType != 1) {
        return false;
      }
      let n = e.childNodes[t + (i < 0 ? -1 : 0)];
      if (n.nodeType == 1 && n.contentEditable == "false") {
        if ((o = n.pmViewDesc) == null || !o.ignoreForSelection) {
          return false;
        } else {
          t += i;
        }
      } else {
        e = n;
        t = i < 0 ? u(e) : 0;
      }
    }
  }
}
function u(e) {
  if (e.nodeType == 3) {
    return e.nodeValue.length;
  }
  return e.childNodes.length;
}
function m(e) {
  let t;
  for (let n = e; n && !(t = n.pmViewDesc); n = n.parentNode);
  return t && t.node && t.node.isBlock && (t.dom == e || t.contentDOM == e);
}
let g = (e) =>
  e.focusNode && d(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset);
function y(e, t) {
  let n = document.createEvent("Event");
  n.initEvent("keydown", true, true);
  n.keyCode = e;
  n.key = n.code = t;
  return n;
}
let w = typeof navigator !== "undefined" ? navigator : null;
let k = typeof document !== "undefined" ? document : null;
let b = (w && w.userAgent) || "";
let x = /Edge\/(\d+)/.exec(b);
let v = /MSIE \d/.exec(b);
let S = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(b);
let C = !!(v || S || x);
let N = v ? document.documentMode : S ? +S[1] : x ? +x[1] : 0;
let M = !C && /gecko\/(\d+)/i.test(b);
M && (/Firefox\/(\d+)/.exec(b) || [0, 0])[1];
let O = !C && /Chrome\/(\d+)/.exec(b);
let T = !!O;
let D = O ? +O[1] : 0;
let E = !C && !!w && /Apple Computer/.test(w.vendor);
let A = E && (/Mobile\/\w+/.test(b) || (!!w && w.maxTouchPoints > 2));
let R = A || (!!w && /Mac/.test(w.platform));
let I = !!w && /Win/.test(w.platform);
let z = /Android \d/.test(b);
let F = !!k && "webkitFontSmoothing" in k.documentElement.style;
let P = F
  ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
  : 0;
function B(e, t) {
  if (typeof e === "number") {
    return e;
  }
  return e[t];
}
function V(e, t, focusNode) {
  let r = e.someProp("scrollThreshold") || 0;
  let i = e.someProp("scrollMargin") || 5;
  let ownerDocument = e.dom.ownerDocument;
  for (let s = focusNode || e.dom; s;) {
    if (s.nodeType != 1) {
      s = l(s);
      continue;
    }
    let e = s;
    let n = e == ownerDocument.body;
    let a = n
      ? ((e) => {
          let t = e.defaultView && e.defaultView.visualViewport;
          if (t) {
            return {
              left: 0,
              right: t.width,
              top: 0,
              bottom: t.height,
            };
          }
          return {
            left: 0,
            right: e.documentElement.clientWidth,
            top: 0,
            bottom: e.documentElement.clientHeight,
          };
        })(ownerDocument)
      : ((e) => {
          let t = e.getBoundingClientRect();
          let n = t.width / e.offsetWidth || 1;
          let r = t.height / e.offsetHeight || 1;
          return {
            left: t.left,
            right: t.left + e.clientWidth * n,
            top: t.top,
            bottom: t.top + e.clientHeight * r,
          };
        })(e);
    let h = 0;
    let c = 0;
    if (t.top < a.top + B(r, "top")) {
      c = -(a.top - t.top + B(i, "top"));
    } else if (t.bottom > a.bottom - B(r, "bottom")) {
      c =
        t.bottom - t.top > a.bottom - a.top
          ? t.top + B(i, "top") - a.top
          : t.bottom - a.bottom + B(i, "bottom");
    }
    if (t.left < a.left + B(r, "left")) {
      h = -(a.left - t.left + B(i, "left"));
    } else if (t.right > a.right - B(r, "right")) {
      h = t.right - a.right + B(i, "right");
    }
    if (h || c) {
      if (n) {
        ownerDocument.defaultView.scrollBy(h, c);
      } else {
        let n = e.scrollLeft;
        let r = e.scrollTop;
        if (c) {
          e.scrollTop += c;
        }
        if (h) {
          e.scrollLeft += h;
        }
        let i = e.scrollLeft - n;
        let o = e.scrollTop - r;
        t = {
          left: t.left - i,
          top: t.top - o,
          right: t.right - i,
          bottom: t.bottom - o,
        };
      }
    }
    let d = n ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(d)) {
      break;
    }
    s = d == "absolute" ? s.offsetParent : l(s);
  }
}
function $(e) {
  let t = [];
  let e_ownerDocument = e.ownerDocument;
  for (
    let r = e;
    r &&
    (t.push({
      dom: r,
      top: r.scrollTop,
      left: r.scrollLeft,
    }),
    e != e_ownerDocument);
    r = l(r)
  );
  return t;
}
function J(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { dom, top, left } = e[n];
    if (dom.scrollTop != top + t) {
      dom.scrollTop = top + t;
    }
    if (dom.scrollLeft != left) {
      dom.scrollLeft = left;
    }
  }
}
let L = null;
function K(e, t) {
  return (
    e.left >= t.left - 1 &&
    e.left <= t.right + 1 &&
    e.top >= t.top - 1 &&
    e.top <= t.bottom + 1
  );
}
function W(e) {
  return e.top < e.bottom || e.left < e.right;
}
function q(e, t) {
  let n = e.getClientRects();
  if (n.length) {
    let e = n[t < 0 ? 0 : n.length - 1];
    if (W(e)) {
      return e;
    }
  }
  return Array.prototype.find.call(n, W) || e.getBoundingClientRect();
}
let j = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function _(e, t, n) {
  let { node, offset, atom } = e.docView.domFromPos(t, n < 0 ? -1 : 1);
  let s = F || M;
  if (node.nodeType == 3) {
    if (
      s &&
      (j.test(node.nodeValue) ||
        (n < 0 ? !offset : offset == node.nodeValue.length))
    ) {
      let e = q(h(node, offset, offset), n);
      if (
        M &&
        offset &&
        /\s/.test(node.nodeValue[offset - 1]) &&
        offset < node.nodeValue.length
      ) {
        let t = q(h(node, offset - 1, offset - 1), -1);
        if (t.top == e.top) {
          let n = q(h(node, offset, offset + 1), -1);
          if (n.top != e.top) {
            return U(n, n.left < t.left);
          }
        }
      }
      return e;
    } else {
      let e = offset;
      let t = offset;
      let o = n < 0 ? 1 : -1;
      if (n < 0 && !offset) {
        t++;
        o = -1;
      } else if (n >= 0 && offset == node.nodeValue.length) {
        e--;
        o = 1;
      } else if (n < 0) {
        e--;
      } else {
        t++;
      }
      return U(q(h(node, e, t), o), o < 0);
    }
  }
  if (!e.state.doc.resolve(t - (atom || 0)).parent.inlineContent) {
    if (atom == null && offset && (n < 0 || offset == u(node))) {
      let e = node.childNodes[offset - 1];
      if (e.nodeType == 1) {
        return H(e.getBoundingClientRect(), false);
      }
    }
    if (atom == null && offset < u(node)) {
      let e = node.childNodes[offset];
      if (e.nodeType == 1) {
        return H(e.getBoundingClientRect(), true);
      }
    }
    return H(node.getBoundingClientRect(), n >= 0);
  }
  if (atom == null && offset && (n < 0 || offset == u(node))) {
    let e = node.childNodes[offset - 1];
    let t =
      e.nodeType == 3
        ? h(e, u(e) - !s)
        : e.nodeType != 1 || (e.nodeName == "BR" && e.nextSibling)
          ? null
          : e;
    if (t) {
      return U(q(t, 1), false);
    }
  }
  if (atom == null && offset < u(node)) {
    let e = node.childNodes[offset];
    while (e.pmViewDesc && e.pmViewDesc.ignoreForCoords) {
      e = e.nextSibling;
    }
    let t = e
      ? e.nodeType == 3
        ? h(e, 0, +!s)
        : e.nodeType == 1
          ? e
          : null
      : null;
    if (t) {
      return U(q(t, -1), true);
    }
  }
  return U(q(node.nodeType == 3 ? h(node) : node, -n), n >= 0);
}
function U(e, t) {
  if (e.width == 0) {
    return e;
  }
  let n = t ? e.left : e.right;
  return {
    top: e.top,
    bottom: e.bottom,
    left: n,
    right: n,
  };
}
function H(e, t) {
  if (e.height == 0) {
    return e;
  }
  let n = t ? e.top : e.bottom;
  return {
    top: n,
    bottom: n,
    left: e.left,
    right: e.right,
  };
}
function G(e, t, n) {
  let e_state = e.state;
  let activeElement = e.root.activeElement;
  if (e_state != t) {
    e.updateState(t);
  }
  if (activeElement != e.dom) {
    e.focus();
  }
  try {
    return n();
  } finally {
    if (e_state != t) {
      e.updateState(e_state);
    }
    if (activeElement != e.dom && activeElement) {
      activeElement.focus();
    }
  }
}
let Z = /[\u0590-\u08ac]/;
let X = null;
let Y = null;
let Q = false;
class ee {
  constructor(e, t, n, r) {
    this.parent = e;
    this.children = t;
    this.dom = n;
    this.contentDOM = r;
    this.dirty = 0;
    n.pmViewDesc = this;
  }
  matchesWidget(e) {
    return false;
  }
  matchesMark(e) {
    return false;
  }
  matchesNode(e, t, n) {
    return false;
  }
  matchesHack(e) {
    return false;
  }
  parseRule() {
    return null;
  }
  stopEvent(e) {
    return false;
  }
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++) {
      e += this.children[t].size;
    }
    return e;
  }
  get border() {
    return 0;
  }
  destroy() {
    this.parent = undefined;
    if (this.dom.pmViewDesc == this) {
      this.dom.pmViewDesc = undefined;
    }
    for (let e = 0; e < this.children.length; e++) {
      this.children[e].destroy();
    }
  }
  posBeforeChild(e) {
    for (let t = 0, n = this.posAtStart; ; t++) {
      let r = this.children[t];
      if (r == e) {
        return n;
      }
      n += r.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    if (this.parent) {
      return this.parent.posBeforeChild(this) + this.border;
    }
    return 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, n) {
    let r;
    if (
      this.contentDOM &&
      this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode)
    ) {
      if (n < 0) {
        let n;
        let r;
        if (e == this.contentDOM) {
          n = e.childNodes[t - 1];
        } else {
          while (e.parentNode != this.contentDOM) {
            e = e.parentNode;
          }
          n = e.previousSibling;
        }
        while (n && !((r = n.pmViewDesc) && r.parent == this)) {
          n = n.previousSibling;
        }
        if (n) {
          return this.posBeforeChild(r) + r.size;
        }
        return this.posAtStart;
      } else {
        let n;
        let r;
        if (e == this.contentDOM) {
          n = e.childNodes[t];
        } else {
          while (e.parentNode != this.contentDOM) {
            e = e.parentNode;
          }
          n = e.nextSibling;
        }
        while (n && !((r = n.pmViewDesc) && r.parent == this)) {
          n = n.nextSibling;
        }
        if (n) {
          return this.posBeforeChild(r);
        }
        return this.posAtEnd;
      }
    }
    if (e == this.dom && this.contentDOM) {
      r = t > s(this.contentDOM);
    } else if (
      this.contentDOM &&
      this.contentDOM != this.dom &&
      this.dom.contains(this.contentDOM)
    ) {
      r = 2 & e.compareDocumentPosition(this.contentDOM);
    } else if (this.dom.firstChild) {
      if (t == 0) {
        for (let t = e; ; t = t.parentNode) {
          if (t == this.dom) {
            r = false;
            break;
          }
          if (t.previousSibling) {
            break;
          }
        }
      }
      if (r == null && t == e.childNodes.length) {
        for (let t = e; ; t = t.parentNode) {
          if (t == this.dom) {
            r = true;
            break;
          }
          if (t.nextSibling) {
            break;
          }
        }
      }
    }
    if (r == null ? n > 0 : r) {
      return this.posAtEnd;
    }
    return this.posAtStart;
  }
  nearestDesc(e, t = false) {
    for (let n = true, r = e; r; r = r.parentNode) {
      let i = this.getDesc(r);
      let o;
      if (i && (!t || i.node)) {
        if (
          !n ||
          !(o = i.nodeDOM) ||
          (o.nodeType == 1
            ? o.contains(e.nodeType == 1 ? e : e.parentNode)
            : o == e)
        ) {
          return i;
        } else {
          n = false;
        }
      }
    }
  }
  getDesc(e) {
    let e_pmViewDesc = e.pmViewDesc;
    for (let e = e_pmViewDesc; e; e = e.parent) {
      if (e == this) {
        return e_pmViewDesc;
      }
    }
  }
  posFromDOM(e, t, n) {
    for (let r = e; r; r = r.parentNode) {
      let i = this.getDesc(r);
      if (i) {
        return i.localPosFromDOM(e, t, n);
      }
    }
    return -1;
  }
  descAt(e) {
    for (let t = 0, n = 0; t < this.children.length; t++) {
      let r = this.children[t];
      let i = n + r.size;
      if (n == e && i != n) {
        while (!r.border && r.children.length) {
          for (let e = 0; e < r.children.length; e++) {
            let child = r.children[e];
            if (child.size) {
              r = child;
              break;
            }
          }
        }
        return r;
      }
      if (e < i) {
        return r.descAt(e - n - r.border);
      }
      n = i;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM) {
      return {
        node: this.dom,
        offset: 0,
        atom: e + 1,
      };
    }
    let n = 0;
    let r = 0;
    for (let t = 0; n < this.children.length; n++) {
      let i = this.children[n];
      let o = t + i.size;
      if (o > e || i instanceof el) {
        r = e - t;
        break;
      }
      t = o;
    }
    if (r) {
      return this.children[n].domFromPos(r - this.children[n].border, t);
    }
    for (
      let e;
      n && !(e = this.children[n - 1]).size && e instanceof et && e.side >= 0;
      n--
    );
    if (t <= 0) {
      let e;
      let r = true;
      for (
        ;
        (e = n ? this.children[n - 1] : null) &&
        e.dom.parentNode != this.contentDOM;
        n--, r = false
      );
      if (e && t && r && !e.border && !e.domAtom) {
        return e.domFromPos(e.size, t);
      }
      return {
        node: this.contentDOM,
        offset: e ? s(e.dom) + 1 : 0,
      };
    }
    {
      let e;
      let r = true;
      for (
        ;
        (e = n < this.children.length ? this.children[n] : null) &&
        e.dom.parentNode != this.contentDOM;
        n++, r = false
      );
      if (e && r && !e.border && !e.domAtom) {
        return e.domFromPos(0, t);
      }
      return {
        node: this.contentDOM,
        offset: e ? s(e.dom) : this.contentDOM.childNodes.length,
      };
    }
  }
  parseRange(e, to_1, n = 0) {
    if (this.children.length == 0) {
      return {
        node: this.contentDOM,
        from: e,
        to: to_1,
        fromOffset: 0,
        toOffset: this.contentDOM.childNodes.length,
      };
    }
    let fromOffset = -1;
    let toOffset = -1;
    for (let o = n, l = 0; ; l++) {
      let n = this.children[l];
      let a = o + n.size;
      if (fromOffset == -1 && e <= a) {
        let i = o + n.border;
        if (
          e >= i &&
          to_1 <= a - n.border &&
          n.node &&
          n.contentDOM &&
          this.contentDOM.contains(n.contentDOM)
        ) {
          return n.parseRange(e, to_1, i);
        }
        e = o;
        for (let t = l; t > 0; t--) {
          let n = this.children[t - 1];
          if (
            n.size &&
            n.dom.parentNode == this.contentDOM &&
            !n.emptyChildAt(1)
          ) {
            fromOffset = s(n.dom) + 1;
            break;
          }
          e -= n.size;
        }
        if (fromOffset == -1) {
          fromOffset = 0;
        }
      }
      if (fromOffset > -1 && (a > to_1 || l == this.children.length - 1)) {
        to_1 = a;
        for (let e = l + 1; e < this.children.length; e++) {
          let child = this.children[e];
          if (
            child.size &&
            child.dom.parentNode == this.contentDOM &&
            !child.emptyChildAt(-1)
          ) {
            toOffset = s(child.dom);
            break;
          }
          to_1 += child.size;
        }
        if (toOffset == -1) {
          toOffset = this.contentDOM.childNodes.length;
        }
        break;
      }
      o = a;
    }
    return {
      node: this.contentDOM,
      from: e,
      to: to_1,
      fromOffset,
      toOffset,
    };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length) {
      return false;
    }
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node, offset } = this.domFromPos(e, 0);
    if (node.nodeType != 1 || offset == node.childNodes.length) {
      throw RangeError("No node after pos " + e);
    }
    return node.childNodes[offset];
  }
  setSelection(e, t, n, r = false) {
    let i = Math.min(e, t);
    let o = Math.max(e, t);
    for (let s = 0, l = 0; s < this.children.length; s++) {
      let child = this.children[s];
      let h = l + child.size;
      if (i > l && o < h) {
        return child.setSelection(
          e - l - child.border,
          t - l - child.border,
          n,
          r,
        );
      }
      l = h;
    }
    let l = this.domFromPos(e, e ? -1 : 1);
    let a = t == e ? l : this.domFromPos(t, t ? -1 : 1);
    let h = n.root.getSelection();
    let c = n.domSelectionRange();
    let p = false;
    if ((M || E) && e == t) {
      let { node, offset } = l;
      if (node.nodeType == 3) {
        if (
          (p = !!(offset && node.nodeValue[offset - 1] == "\n")) &&
          offset == node.nodeValue.length
        ) {
          for (let t = node, n; t; t = t.parentNode) {
            if ((n = t.nextSibling)) {
              if (n.nodeName == "BR") {
                l = a = {
                  node: n.parentNode,
                  offset: s(n) + 1,
                };
              }
              break;
            }
            let e = t.pmViewDesc;
            if (e && e.node && e.node.isBlock) {
              break;
            }
          }
        }
      } else {
        let n = node.childNodes[offset - 1];
        p = n && (n.nodeName == "BR" || n.contentEditable == "false");
      }
    }
    if (
      M &&
      c.focusNode &&
      c.focusNode != a.node &&
      c.focusNode.nodeType == 1
    ) {
      let e = c.focusNode.childNodes[c.focusOffset];
      if (e && e.contentEditable == "false") {
        r = true;
      }
    }
    if (
      !(r || (p && E)) &&
      d(l.node, l.offset, c.anchorNode, c.anchorOffset) &&
      d(a.node, a.offset, c.focusNode, c.focusOffset)
    ) {
      return;
    }
    let f = false;
    if ((h.extend || e == t) && !(p && M)) {
      h.collapse(l.node, l.offset);
      try {
        if (e != t) {
          h.extend(a.node, a.offset);
        }
        f = true;
      } catch (e) {}
    }
    if (!f) {
      if (e > t) {
        let e = l;
        l = a;
        a = e;
      }
      let n = document.createRange();
      n.setEnd(a.node, a.offset);
      n.setStart(l.node, l.offset);
      h.removeAllRanges();
      h.addRange(n);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return (
      this.contentDOM &&
      this.contentDOM != this.dom &&
      !this.dom.contains(this.contentDOM)
    );
  }
  markDirty(e, t) {
    for (let n = 0, r = 0; r < this.children.length; r++) {
      let i = this.children[r];
      let o = n + i.size;
      if (n == o ? e <= o && t >= n : e < o && t > n) {
        let r = n + i.border;
        let s = o - i.border;
        if (e >= r && t <= s) {
          this.dirty = e == n || t == o ? 2 : 1;
          if (
            e == r &&
            t == s &&
            (i.contentLost || i.dom.parentNode != this.contentDOM)
          ) {
            i.dirty = 3;
          } else {
            i.markDirty(e - r, t - r);
          }
          return;
        }
        i.dirty =
          i.dom != i.contentDOM ||
          i.dom.parentNode != this.contentDOM ||
          i.children.length
            ? 3
            : 2;
      }
      n = o;
    }
    this.dirty = 2;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let n = e == 1 ? 2 : 1;
      if (t.dirty < n) {
        t.dirty = n;
      }
    }
  }
  get domAtom() {
    return false;
  }
  get ignoreForCoords() {
    return false;
  }
  get ignoreForSelection() {
    return false;
  }
  isText(e) {
    return false;
  }
}
class et extends ee {
  constructor(e, t, n, r) {
    let i;
    let o = t.type.toDOM;
    if (typeof o === "function") {
      o = o(n, () => {
        if (i) {
          if (i.parent) {
            return i.parent.posBeforeChild(i);
          }
          return undefined;
        }
        return r;
      });
    }
    if (!t.type.spec.raw) {
      if (o.nodeType != 1) {
        let e = document.createElement("span");
        e.appendChild(o);
        o = e;
      }
      o.contentEditable = "false";
      o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null);
    this.widget = t;
    this.widget = t;
    i = this;
  }
  matchesWidget(e) {
    return this.dirty == 0 && e.type.eq(this.widget.type);
  }
  parseRule() {
    return {
      ignore: true,
    };
  }
  stopEvent(e) {
    let stopEvent = this.widget.spec.stopEvent;
    return !!stopEvent && stopEvent(e);
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom);
    super.destroy();
  }
  get domAtom() {
    return true;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class en extends ee {
  constructor(e, t, n, r) {
    super(e, [], t, null);
    this.textDOM = n;
    this.text = r;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    if (e != this.textDOM) {
      return this.posAtStart + (t ? this.size : 0);
    }
    return this.posAtStart + t;
  }
  domFromPos(e) {
    return {
      node: this.textDOM,
      offset: e,
    };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class er extends ee {
  constructor(e, t, n, r, i) {
    super(e, [], n, r);
    this.mark = t;
    this.spec = i;
  }
  static create(e, t, n, r) {
    let o = r.nodeViews[t.type.name];
    let s = o && o(t, r, n);
    if (!(s && s.dom)) {
      s = ZF.renderSpec(document, t.type.spec.toDOM(t, n), null, t.attrs);
    }
    return new er(e, t, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    if (3 & this.dirty || this.mark.type.spec.reparseInView) {
      return null;
    }
    return {
      mark: this.mark.type.name,
      attrs: this.mark.attrs,
      contentElement: this.contentDOM,
    };
  }
  matchesMark(e) {
    return this.dirty != 3 && this.mark.eq(e);
  }
  markDirty(e, t) {
    super.markDirty(e, t);
    if (this.dirty != 0) {
      let e = this.parent;
      while (!e.node) {
        e = e.parent;
      }
      if (e.dirty < this.dirty) {
        e.dirty = this.dirty;
      }
      this.dirty = 0;
    }
  }
  slice(e, t, n) {
    let r = er.create(this.parent, this.mark, true, n);
    let children = this.children;
    let size = this.size;
    if (t < size) {
      children = ew(children, t, size, n);
    }
    if (e > 0) {
      children = ew(children, 0, e, n);
    }
    for (let e = 0; e < children.length; e++) {
      children[e].parent = r;
    }
    r.children = children;
    return r;
  }
  ignoreMutation(e) {
    if (this.spec.ignoreMutation) {
      return this.spec.ignoreMutation(e);
    }
    return super.ignoreMutation(e);
  }
  destroy() {
    if (this.spec.destroy) {
      this.spec.destroy();
    }
    super.destroy();
  }
}
class ei extends ee {
  constructor(e, t, n, r, i, o, s, l, a) {
    super(e, [], i, o);
    this.node = t;
    this.outerDeco = n;
    this.innerDeco = r;
    this.nodeDOM = s;
  }
  static create(e, t, n, r, o, s) {
    let l = o.nodeViews[t.type.name];
    let a;
    let h =
      l &&
      l(
        t,
        o,
        () => {
          if (a) {
            if (a.parent) {
              return a.parent.posBeforeChild(a);
            }
            return undefined;
          }
          return s;
        },
        n,
        r,
      );
    let c = h && h.dom;
    let d = h && h.contentDOM;
    if (t.isText) {
      if (c) {
        if (c.nodeType != 3) {
          throw RangeError("Text must be rendered as a DOM text node");
        }
      } else {
        c = document.createTextNode(t.text);
      }
    } else if (!c) {
      let e = ZF.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs);
      ({ dom: c, contentDOM: d } = e);
    }
    if (!(d || t.isText || c.nodeName == "BR")) {
      if (!c.hasAttribute("contenteditable")) {
        c.contentEditable = "false";
      }
      if (t.type.spec.draggable) {
        c.draggable = true;
      }
    }
    let p = c;
    c = ef(c, n, t);
    if (h) {
      return (a = new ea(e, t, n, r, c, d || null, p, h, o, s + 1));
    }
    if (t.isText) {
      return new es(e, t, n, r, c, p, o);
    }
    return new ei(e, t, n, r, c, d || null, p, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView) {
      return null;
    }
    let e = {
      node: this.node.type.name,
      attrs: this.node.attrs,
    };
    if (this.node.type.whitespace == "pre") {
      e.preserveWhitespace = "full";
    }
    if (this.contentDOM) {
      if (this.contentLost) {
        for (let t = this.children.length - 1; t >= 0; t--) {
          let n = this.children[t];
          if (this.dom.contains(n.dom.parentNode)) {
            e.contentElement = n.dom.parentNode;
            break;
          }
        }
        if (!e.contentElement) {
          e.getContent = () => FK.empty;
        }
      } else {
        e.contentElement = this.contentDOM;
      }
    } else {
      e.getContent = () => this.node.content;
    }
    return e;
  }
  matchesNode(e, t, n) {
    return (
      this.dirty == 0 &&
      e.eq(this.node) &&
      eu(t, this.outerDeco) &&
      n.eq(this.innerDeco)
    );
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return +!this.node.isLeaf;
  }
  updateChildren(e, t) {
    let inlineContent = this.node.inlineContent;
    let r = t;
    let o = e.composing ? this.localCompositionInfo(e, t) : null;
    let s = o && o.pos > -1 ? o : null;
    let l = o && o.pos < 0;
    let a = new eg(this, s && s.node, e);
    ((e, t, n, r) => {
      let i = t.locals(e);
      let o = 0;
      if (i.length == 0) {
        for (let n = 0; n < e.childCount; n++) {
          let s = e.child(n);
          r(s, i, t.forChild(o, s), n);
          o += s.nodeSize;
        }
        return;
      }
      let s = 0;
      let l = [];
      let a = null;
      for (let h = 0; ;) {
        let c;
        let d;
        let p;
        let f;
        while (s < i.length && i[s].to == o) {
          let e = i[s++];
          if (e.widget) {
            if (c) {
              (d || (d = [c])).push(e);
            } else {
              c = e;
            }
          }
        }
        if (c) {
          if (d) {
            d.sort(ey);
            for (let e = 0; e < d.length; e++) {
              n(d[e], h, !!a);
            }
          } else {
            n(c, h, !!a);
          }
        }
        if (a) {
          f = -1;
          p = a;
          a = null;
        } else if (h < e.childCount) {
          f = h;
          p = e.child(h++);
        } else {
          break;
        }
        for (let e = 0; e < l.length; e++) {
          if (l[e].to <= o) {
            l.splice(e--, 1);
          }
        }
        while (s < i.length && i[s].from <= o && i[s].to > o) {
          l.push(i[s++]);
        }
        let u = o + p.nodeSize;
        if (p.isText) {
          let e = u;
          if (s < i.length && i[s].from < e) {
            e = i[s].from;
          }
          for (let t = 0; t < l.length; t++) {
            if (l[t].to < e) {
              e = l[t].to;
            }
          }
          if (e < u) {
            a = p.cut(e - o);
            p = p.cut(0, e - o);
            u = e;
            f = -1;
          }
        } else {
          while (s < i.length && i[s].to < u) {
            s++;
          }
        }
        let m =
          p.isInline && !p.isLeaf ? l.filter((e) => !e.inline) : l.slice();
        r(p, m, t.forChild(o, p), f);
        o = u;
      }
    })(
      this.node,
      this.innerDeco,
      (t, o, s) => {
        if (t.spec.marks) {
          a.syncToMarks(t.spec.marks, inlineContent, e);
        } else if (t.type.side >= 0 && !s) {
          a.syncToMarks(
            o == this.node.childCount ? CU.none : this.node.child(o).marks,
            inlineContent,
            e,
          );
        }
        a.placeWidget(t, e, r);
      },
      (t, i, s, h) => {
        let c;
        a.syncToMarks(t.marks, inlineContent, e);
        if (
          !(
            a.findNodeMatch(t, i, s, h) ||
            (l &&
              e.state.selection.from > r &&
              e.state.selection.to < r + t.nodeSize &&
              (c = a.findIndexWithChild(o.node)) > -1 &&
              a.updateNodeAt(t, i, s, c, e)) ||
            a.updateNextNode(t, i, s, e, h, r)
          )
        ) {
          a.addNode(t, i, s, e, r);
        }
        r += t.nodeSize;
      },
    );
    a.syncToMarks([], inlineContent, e);
    if (this.node.isTextblock) {
      a.addTextblockHacks();
    }
    a.destroyRest();
    if (a.changed || this.dirty == 2) {
      if (s) {
        this.protectLocalComposition(e, s);
      }
      (function e(t, n, r) {
        let t_firstChild = t.firstChild;
        let o = false;
        for (let s = 0; s < n.length; s++) {
          let l = n[s];
          let a = l.dom;
          if (a.parentNode == t) {
            while (a != t_firstChild) {
              t_firstChild = em(t_firstChild);
              o = true;
            }
            t_firstChild = t_firstChild.nextSibling;
          } else {
            o = true;
            t.insertBefore(a, t_firstChild);
          }
          if (l instanceof er) {
            let n = t_firstChild ? t_firstChild.previousSibling : t.lastChild;
            e(l.contentDOM, l.children, r);
            t_firstChild = n ? n.nextSibling : t.firstChild;
          }
        }
        while (t_firstChild) {
          t_firstChild = em(t_firstChild);
          o = true;
        }
        if (o && r.trackWrites == t) {
          r.trackWrites = null;
        }
      })(this.contentDOM, this.children, e);
      if (A) {
        ((e) => {
          if (e.nodeName == "UL" || e.nodeName == "OL") {
            let t = e.style.cssText;
            e.style.cssText = t + "; list-style: square !important";
            window.getComputedStyle(e).listStyle;
            e.style.cssText = t;
          }
        })(this.dom);
      }
    }
  }
  localCompositionInfo(e, t) {
    let { from, to } = e.state.selection;
    if (
      !(e.state.selection instanceof U3) ||
      from < t ||
      to > t + this.node.content.size
    ) {
      return null;
    }
    let compositionNode = e.input.compositionNode;
    if (!compositionNode || !this.dom.contains(compositionNode.parentNode)) {
      return null;
    }
    if (!this.node.inlineContent) {
      return {
        node: compositionNode,
        pos: -1,
        text: "",
      };
    }
    {
      let text = compositionNode.nodeValue;
      let r = ((e, t, n, r) => {
        for (let i = 0, o = 0; i < e.childCount && o <= r;) {
          let s = e.child(i++);
          let l = o;
          o += s.nodeSize;
          if (!s.isText) {
            continue;
          }
          let a = s.text;
          while (i < e.childCount) {
            let t = e.child(i++);
            o += t.nodeSize;
            if (!t.isText) {
              break;
            }
            a += t.text;
          }
          if (o >= n) {
            if (o >= r && a.slice(r - t.length - l, r - l) == t) {
              return r - t.length;
            }
            let e = l < r ? a.lastIndexOf(t, r - l - 1) : -1;
            if (e >= 0 && e + t.length + l >= n) {
              return l + e;
            }
            if (
              n == r &&
              a.length >= r + t.length - l &&
              a.slice(r - l, r - l + t.length) == t
            ) {
              return r;
            }
          }
        }
        return -1;
      })(this.node.content, text, from - t, to - t);
      if (r < 0) {
        return null;
      }
      return {
        node: compositionNode,
        pos: r,
        text,
      };
    }
  }
  protectLocalComposition(e, { node, pos, text }) {
    if (this.getDesc(node)) {
      return;
    }
    let i = node;
    for (; i.parentNode != this.contentDOM; i = i.parentNode) {
      while (i.previousSibling) {
        i.parentNode.removeChild(i.previousSibling);
      }
      while (i.nextSibling) {
        i.parentNode.removeChild(i.nextSibling);
      }
      if (i.pmViewDesc) {
        i.pmViewDesc = undefined;
      }
    }
    let o = new en(this, i, node, text);
    e.input.compositionNodes.push(o);
    this.children = ew(this.children, pos, pos + text.length, e, o);
  }
  update(e, t, n, r) {
    return (
      this.dirty != 3 &&
      !!e.sameMarkup(this.node) &&
      (this.updateInner(e, t, n, r), true)
    );
  }
  updateInner(e, t, n, r) {
    this.updateOuterDeco(t);
    this.node = e;
    this.innerDeco = n;
    if (this.contentDOM) {
      this.updateChildren(r, this.posAtStart);
    }
    this.dirty = 0;
  }
  updateOuterDeco(e) {
    if (eu(e, this.outerDeco)) {
      return;
    }
    let t = this.nodeDOM.nodeType != 1;
    let dom = this.dom;
    this.dom = ep(
      this.dom,
      this.nodeDOM,
      ed(this.outerDeco, this.node, t),
      ed(e, this.node, t),
    );
    if (this.dom != dom) {
      dom.pmViewDesc = undefined;
      this.dom.pmViewDesc = this;
    }
    this.outerDeco = e;
  }
  selectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.add("ProseMirror-selectednode");
    }
    if (this.contentDOM || !this.node.type.spec.draggable) {
      this.dom.draggable = true;
    }
  }
  deselectNode() {
    if (this.nodeDOM.nodeType == 1) {
      this.nodeDOM.classList.remove("ProseMirror-selectednode");
      if (this.contentDOM || !this.node.type.spec.draggable) {
        this.dom.removeAttribute("draggable");
      }
    }
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function eo(doc, t, n, dom, i) {
  ef(dom, t, doc);
  let o = new ei(undefined, doc, t, n, dom, dom, dom, i, 0);
  if (o.contentDOM) {
    o.updateChildren(i, 0);
  }
  return o;
}
class es extends ei {
  constructor(e, t, n, r, i, o, s) {
    super(e, t, n, r, i, null, o, s, 0);
  }
  parseRule() {
    let parentNode = this.nodeDOM.parentNode;
    while (parentNode && parentNode != this.dom && !parentNode.pmIsDeco) {
      parentNode = parentNode.parentNode;
    }
    return {
      skip: parentNode || true,
    };
  }
  update(e, t, n, r) {
    return (
      this.dirty != 3 &&
      (this.dirty == 0 || !!this.inParent()) &&
      !!e.sameMarkup(this.node) &&
      (this.updateOuterDeco(t),
      (this.dirty != 0 || e.text != this.node.text) &&
        e.text != this.nodeDOM.nodeValue &&
        ((this.nodeDOM.nodeValue = e.text),
        r.trackWrites == this.nodeDOM && (r.trackWrites = null)),
      (this.node = e),
      (this.dirty = 0),
      true)
    );
  }
  inParent() {
    let contentDOM = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode) {
      if (t == contentDOM) {
        return true;
      }
    }
    return false;
  }
  domFromPos(e) {
    return {
      node: this.nodeDOM,
      offset: e,
    };
  }
  localPosFromDOM(e, t, n) {
    if (e == this.nodeDOM) {
      return this.posAtStart + Math.min(t, this.node.text.length);
    }
    return super.localPosFromDOM(e, t, n);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, n) {
    let r = this.node.cut(e, t);
    let i = document.createTextNode(r.text);
    return new es(this.parent, r, this.outerDeco, this.innerDeco, i, i, n);
  }
  markDirty(e, t) {
    super.markDirty(e, t);
    if (
      this.dom != this.nodeDOM &&
      (e == 0 || t == this.nodeDOM.nodeValue.length)
    ) {
      this.dirty = 3;
    }
  }
  get domAtom() {
    return false;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class el extends ee {
  parseRule() {
    return {
      ignore: true,
    };
  }
  matchesHack(e) {
    return this.dirty == 0 && this.dom.nodeName == e;
  }
  get domAtom() {
    return true;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class ea extends ei {
  constructor(e, t, n, r, i, o, s, l, a, h) {
    super(e, t, n, r, i, o, s, a, h);
    this.spec = l;
  }
  update(e, t, n, r) {
    if (this.dirty == 3) {
      return false;
    }
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let i = this.spec.update(e, t, n);
      if (i) {
        this.updateInner(e, t, n, r);
      }
      return i;
    }
    return (!!this.contentDOM || !!e.isLeaf) && super.update(e, t, n, r);
  }
  selectNode() {
    if (this.spec.selectNode) {
      this.spec.selectNode();
    } else {
      super.selectNode();
    }
  }
  deselectNode() {
    if (this.spec.deselectNode) {
      this.spec.deselectNode();
    } else {
      super.deselectNode();
    }
  }
  setSelection(e, t, n, r) {
    if (this.spec.setSelection) {
      this.spec.setSelection(e, t, n.root);
    } else {
      super.setSelection(e, t, n, r);
    }
  }
  destroy() {
    if (this.spec.destroy) {
      this.spec.destroy();
    }
    super.destroy();
  }
  stopEvent(e) {
    return !!this.spec.stopEvent && this.spec.stopEvent(e);
  }
  ignoreMutation(e) {
    if (this.spec.ignoreMutation) {
      return this.spec.ignoreMutation(e);
    }
    return super.ignoreMutation(e);
  }
}
let eh = function (e) {
  if (e) {
    this.nodeName = e;
  }
};
eh.prototype = Object.create(null);
let ec = [new eh()];
function ed(e, t, n) {
  if (e.length == 0) {
    return ec;
  }
  let r = n ? ec[0] : new eh();
  let i = [r];
  for (let o = 0; o < e.length; o++) {
    let s = e[o].type.attrs;
    if (s) {
      for (let e in (s.nodeName && i.push((r = new eh(s.nodeName))), s)) {
        let o = s[e];
        if (o != null) {
          if (n && i.length == 1) {
            i.push((r = new eh(t.isInline ? "span" : "div")));
          }
          if (e == "class") {
            r.class = (r.class ? r.class + " " : "") + o;
          } else if (e == "style") {
            r.style = (r.style ? r.style + ";" : "") + o;
          } else if (e != "nodeName") {
            r[e] = o;
          }
        }
      }
    }
  }
  return i;
}
function ep(e, t, n, r) {
  if (n == ec && r == ec) {
    return t;
  }
  let i = t;
  for (let t = 0; t < r.length; t++) {
    let o = r[t];
    let s = n[t];
    if (t) {
      let t;
      if (
        !(
          s &&
          s.nodeName == o.nodeName &&
          i != e &&
          (t = i.parentNode) &&
          t.nodeName.toLowerCase() == o.nodeName
        )
      ) {
        t = document.createElement(o.nodeName);
        t.pmIsDeco = true;
        t.appendChild(i);
        s = ec[0];
      }
      i = t;
    }
    ((e, t, n) => {
      for (let r in t) {
        if (!(r == "class" || r == "style" || r == "nodeName" || r in n)) {
          e.removeAttribute(r);
        }
      }
      for (let r in n) {
        if (r != "class" && r != "style" && r != "nodeName" && n[r] != t[r]) {
          e.setAttribute(r, n[r]);
        }
      }
      if (t.class != n.class) {
        let r = t.class ? t.class.split(" ").filter(Boolean) : [];
        let i = n.class ? n.class.split(" ").filter(Boolean) : [];
        for (let t = 0; t < r.length; t++) {
          if (i.indexOf(r[t]) == -1) {
            e.classList.remove(r[t]);
          }
        }
        for (let t = 0; t < i.length; t++) {
          if (r.indexOf(i[t]) == -1) {
            e.classList.add(i[t]);
          }
        }
        if (e.classList.length == 0) {
          e.removeAttribute("class");
        }
      }
      if (t.style != n.style) {
        if (t.style) {
          let n =
            /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g;
          let r;
          while ((r = n.exec(t.style))) {
            e.style.removeProperty(r[1]);
          }
        }
        if (n.style) {
          e.style.cssText += n.style;
        }
      }
    })(i, s || ec[0], o);
  }
  return i;
}
function ef(e, t, n) {
  return ep(e, e, ec, ed(t, n, e.nodeType != 1));
}
function eu(e, outerDeco) {
  if (e.length != outerDeco.length) {
    return false;
  }
  for (let n = 0; n < e.length; n++) {
    if (!e[n].type.eq(outerDeco[n].type)) {
      return false;
    }
  }
  return true;
}
function em(e) {
  let e_nextSibling = e.nextSibling;
  e.parentNode.removeChild(e);
  return e_nextSibling;
}
class eg {
  constructor(e, t, n) {
    this.lock = t;
    this.view = n;
    this.index = 0;
    this.stack = [];
    this.changed = false;
    this.top = e;
    this.preMatch = ((e, t) => {
      let n = t;
      let length = n.children.length;
      let e_childCount = e.childCount;
      let matched = new Map();
      let s = [];
      n: while (e_childCount > 0) {
        let l;
        while (true) {
          if (length) {
            let e = n.children[length - 1];
            if (e instanceof er) {
              n = e;
              length = e.children.length;
            } else {
              l = e;
              length--;
              break;
            }
          } else if (n == t) {
            break n;
          } else {
            length = n.parent.children.indexOf(n);
            n = n.parent;
          }
        }
        let a = l.node;
        if (a) {
          if (a != e.child(e_childCount - 1)) {
            break;
          }
          --e_childCount;
          matched.set(l, e_childCount);
          s.push(l);
        }
      }
      return {
        index: e_childCount,
        matched,
        matches: s.reverse(),
      };
    })(e.node.content, e);
  }
  destroyBetween(e, t) {
    if (e != t) {
      for (let n = e; n < t; n++) {
        this.top.children[n].destroy();
      }
      this.top.children.splice(e, t - e);
      this.changed = true;
    }
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(e, t, n) {
    let r = 0;
    let i = this.stack.length >> 1;
    let o = Math.min(i, e.length);
    while (
      r < o &&
      (r == i - 1 ? this.top : this.stack[(r + 1) << 1]).matchesMark(e[r]) &&
      e[r].type.spec.spanning !== false
    ) {
      r++;
    }
    while (r < i) {
      this.destroyRest();
      this.top.dirty = 0;
      this.index = this.stack.pop();
      this.top = this.stack.pop();
      i--;
    }
    while (i < e.length) {
      this.stack.push(this.top, this.index + 1);
      let r = -1;
      for (
        let t = this.index;
        t < Math.min(this.index + 3, this.top.children.length);
        t++
      ) {
        let n = this.top.children[t];
        if (n.matchesMark(e[i]) && !this.isLocked(n.dom)) {
          r = t;
          break;
        }
      }
      if (r > -1) {
        if (r > this.index) {
          this.changed = true;
          this.destroyBetween(this.index, r);
        }
        this.top = this.top.children[this.index];
      } else {
        let r = er.create(this.top, e[i], t, n);
        this.top.children.splice(this.index, 0, r);
        this.top = r;
        this.changed = true;
      }
      this.index = 0;
      i++;
    }
  }
  findNodeMatch(e, t, n, r) {
    let i = -1;
    let o;
    if (
      r >= this.preMatch.index &&
      (o = this.preMatch.matches[r - this.preMatch.index]).parent == this.top &&
      o.matchesNode(e, t, n)
    ) {
      i = this.top.children.indexOf(o, this.index);
    } else {
      for (
        let r = this.index, o = Math.min(this.top.children.length, r + 5);
        r < o;
        r++
      ) {
        let o = this.top.children[r];
        if (o.matchesNode(e, t, n) && !this.preMatch.matched.has(o)) {
          i = r;
          break;
        }
      }
    }
    return !(i < 0) && (this.destroyBetween(this.index, i), this.index++, true);
  }
  updateNodeAt(e, t, n, r, i) {
    let o = this.top.children[r];
    if (o.dirty == 3 && o.dom == o.contentDOM) {
      o.dirty = 2;
    }
    return (
      !!o.update(e, t, n, i) &&
      (this.destroyBetween(this.index, r), this.index++, true)
    );
  }
  findIndexWithChild(e) {
    while (true) {
      let t = e.parentNode;
      if (!t) {
        return -1;
      }
      if (t == this.top.contentDOM) {
        let t = e.pmViewDesc;
        if (t) {
          for (let e = this.index; e < this.top.children.length; e++) {
            if (this.top.children[e] == t) {
              return e;
            }
          }
        }
        return -1;
      }
      e = t;
    }
  }
  updateNextNode(e, t, n, r, i, o) {
    for (let s = this.index; s < this.top.children.length; s++) {
      let child = this.top.children[s];
      if (child instanceof ei) {
        let a = this.preMatch.matched.get(child);
        if (a != null && a != i) {
          return false;
        }
        let h = child.dom;
        let c;
        let d =
          this.isLocked(h) &&
          !(
            e.isText &&
            child.node &&
            child.node.isText &&
            child.nodeDOM.nodeValue == e.text &&
            child.dirty != 3 &&
            eu(t, child.outerDeco)
          );
        if (!d && child.update(e, t, n, r)) {
          this.destroyBetween(this.index, s);
          if (child.dom != h) {
            this.changed = true;
          }
          this.index++;
          return true;
        }
        if (!d && (c = this.recreateWrapper(child, e, t, n, r, o))) {
          this.destroyBetween(this.index, s);
          this.top.children[this.index] = c;
          if (c.contentDOM) {
            c.dirty = 2;
            c.updateChildren(r, o + 1);
            c.dirty = 0;
          }
          this.changed = true;
          this.index++;
          return true;
        }
        break;
      }
    }
    return false;
  }
  recreateWrapper(e, t, n, r, i, o) {
    if (
      e.dirty ||
      t.isAtom ||
      !e.children.length ||
      !e.node.content.eq(t.content) ||
      !eu(n, e.outerDeco) ||
      !r.eq(e.innerDeco)
    ) {
      return null;
    }
    let s = ei.create(this.top, t, n, r, i, o);
    if (s.contentDOM) {
      for (let t of ((s.children = e.children),
      (e.children = []),
      s.children)) {
        t.parent = s;
      }
    }
    e.destroy();
    return s;
  }
  addNode(e, t, n, r, i) {
    let o = ei.create(this.top, e, t, n, r, i);
    if (o.contentDOM) {
      o.updateChildren(r, i + 1);
    }
    this.top.children.splice(this.index++, 0, o);
    this.changed = true;
  }
  placeWidget(e, t, n) {
    let r =
      this.index < this.top.children.length
        ? this.top.children[this.index]
        : null;
    if (
      r &&
      r.matchesWidget(e) &&
      (e == r.widget || !r.widget.type.toDOM.parentNode)
    ) {
      this.index++;
    } else {
      let r = new et(this.top, e, t, n);
      this.top.children.splice(this.index++, 0, r);
      this.changed = true;
    }
  }
  addTextblockHacks() {
    let e = this.top.children[this.index - 1];
    let top = this.top;
    while (e instanceof er) {
      e = (top = e).children[top.children.length - 1];
    }
    if (
      !e ||
      !(e instanceof es) ||
      /\n$/.test(e.node.text) ||
      (this.view.requiresGeckoHackNode && /\s$/.test(e.node.text))
    ) {
      if ((E || T) && e && e.dom.contentEditable == "false") {
        this.addHackNode("IMG", top);
      }
      this.addHackNode("BR", this.top);
    }
  }
  addHackNode(e, t) {
    if (
      t == this.top &&
      this.index < t.children.length &&
      t.children[this.index].matchesHack(e)
    ) {
      this.index++;
    } else {
      let n = document.createElement(e);
      if (e == "IMG") {
        n.className = "ProseMirror-separator";
        n.alt = "";
      }
      if (e == "BR") {
        n.className = "ProseMirror-trailingBreak";
      }
      let r = new el(this.top, [], n, null);
      if (t != this.top) {
        t.children.push(r);
      } else {
        t.children.splice(this.index++, 0, r);
      }
      this.changed = true;
    }
  }
  isLocked(e) {
    return (
      this.lock &&
      (e == this.lock || (e.nodeType == 1 && e.contains(this.lock.parentNode)))
    );
  }
}
function ey(e, t) {
  return e.type.side - t.type.side;
}
function ew(children, t, n, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < children.length; s++) {
    let child = children[s];
    let h = l;
    let c = (l += child.size);
    if (h >= n || c <= t) {
      o.push(child);
    } else {
      if (h < t) {
        o.push(child.slice(0, t - h, r));
      }
      if (i) {
        o.push(i);
        i = undefined;
      }
      if (c > n) {
        o.push(child.slice(n - h, child.size, r));
      }
    }
  }
  return o;
}
function ek(e, t = null) {
  let n = e.domSelectionRange();
  let doc = e.state.doc;
  if (!n.focusNode) {
    return null;
  }
  let o = e.docView.nearestDesc(n.focusNode);
  let l = o && o.size == 0;
  let a = e.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (a < 0) {
    return null;
  }
  let h = doc.resolve(a);
  let c;
  let d;
  if (g(n)) {
    for (c = a; o && !o.node;) {
      o = o.parent;
    }
    let e = o.node;
    if (
      o &&
      e.isAtom &&
      nh.isSelectable(e) &&
      o.parent &&
      !(
        e.isInline &&
        ((e, t, n) => {
          for (let r = t == 0, i = t == u(e); r || i;) {
            if (e == n) {
              return true;
            }
            let t = s(e);
            if (!(e = e.parentNode)) {
              return false;
            }
            r = r && t == 0;
            i = i && t == u(e);
          }
        })(n.focusNode, n.focusOffset, o.dom)
      )
    ) {
      let e = o.posBefore;
      d = new nh(a == e ? h : doc.resolve(e));
    }
  } else {
    if (
      n instanceof e.dom.ownerDocument.defaultView.Selection &&
      n.rangeCount > 1
    ) {
      let t = a;
      let r = a;
      for (let i = 0; i < n.rangeCount; i++) {
        let o = n.getRangeAt(i);
        t = Math.min(
          t,
          e.docView.posFromDOM(o.startContainer, o.startOffset, 1),
        );
        r = Math.max(r, e.docView.posFromDOM(o.endContainer, o.endOffset, -1));
      }
      if (t < 0) {
        return null;
      }
      [c, a] = r == e.state.selection.anchor ? [r, t] : [t, r];
      h = doc.resolve(a);
    } else {
      c = e.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    }
    if (c < 0) {
      return null;
    }
  }
  let p = doc.resolve(c);
  if (!d) {
    let n = t == "pointer" || (e.state.selection.head < h.pos && !l) ? 1 : -1;
    d = eT(e, p, h, n);
  }
  return d;
}
function eb(e) {
  if (e.editable) {
    return e.hasFocus();
  }
  return (
    eE(e) && document.activeElement && document.activeElement.contains(e.dom)
  );
}
function ex(e, t = false) {
  let selection = e.state.selection;
  eM(e, selection);
  if (eb(e)) {
    if (!t && e.input.mouseDown && e.input.mouseDown.allowDefault && T) {
      let t = e.domSelectionRange();
      let n = e.domObserver.currentSelection;
      if (
        t.anchorNode &&
        n.anchorNode &&
        d(t.anchorNode, t.anchorOffset, n.anchorNode, n.anchorOffset)
      ) {
        e.input.mouseDown.delayedSelectionSync = true;
        e.domObserver.setCurSelection();
        return;
      }
    }
    e.domObserver.disconnectSelection();
    if (e.cursorWrapper) {
      ((e) => {
        let t = e.domSelection();
        if (!t) {
          return;
        }
        let dom = e.cursorWrapper.dom;
        let r = dom.nodeName == "IMG";
        if (r) {
          t.collapse(dom.parentNode, s(dom) + 1);
        } else {
          t.collapse(dom, 0);
        }
        if (!r && !e.state.selection.visible && C && N <= 11) {
          dom.disabled = true;
          dom.disabled = false;
        }
      })(e);
    } else {
      let i;
      let o;
      let s;
      let l;
      let a;
      let { anchor, head } = selection;
      let d;
      let p;
      if (ev && !(selection instanceof U3)) {
        if (!selection.$from.parent.inlineContent) {
          d = eS(e, selection.from);
        }
        if (!(selection.empty || selection.$from.parent.inlineContent)) {
          p = eS(e, selection.to);
        }
      }
      e.docView.setSelection(anchor, head, e, t);
      if (ev) {
        if (d) {
          eN(d);
        }
        if (p) {
          eN(p);
        }
      }
      if (selection.visible) {
        e.dom.classList.remove("ProseMirror-hideselection");
      } else {
        e.dom.classList.add("ProseMirror-hideselection");
        if ("onselectionchange" in document) {
          (o = (i = e).dom.ownerDocument).removeEventListener(
            "selectionchange",
            i.input.hideSelectionGuard,
          );
          l = (s = i.domSelectionRange()).anchorNode;
          a = s.anchorOffset;
          o.addEventListener(
            "selectionchange",
            (i.input.hideSelectionGuard = () => {
              if (s.anchorNode != l || s.anchorOffset != a) {
                o.removeEventListener(
                  "selectionchange",
                  i.input.hideSelectionGuard,
                );
                setTimeout(() => {
                  if (!eb(i) || i.state.selection.visible) {
                    i.dom.classList.remove("ProseMirror-hideselection");
                  }
                }, 20);
              }
            }),
          );
        }
      }
    }
    e.domObserver.setCurSelection();
    e.domObserver.connectSelection();
  }
}
let ev = E || (T && D < 63);
function eS(e, t) {
  let { node, offset } = e.docView.domFromPos(t, 0);
  let i = offset < node.childNodes.length ? node.childNodes[offset] : null;
  let o = offset ? node.childNodes[offset - 1] : null;
  if (E && i && i.contentEditable == "false") {
    return eC(i);
  }
  if (
    (!i || i.contentEditable == "false") &&
    (!o || o.contentEditable == "false")
  ) {
    if (i) {
      return eC(i);
    } else if (o) {
      return eC(o);
    }
  }
}
function eC(e) {
  e.contentEditable = "true";
  if (E && e.draggable) {
    e.draggable = false;
    e.wasDraggable = true;
  }
  return e;
}
function eN(e) {
  e.contentEditable = "false";
  if (e.wasDraggable) {
    e.draggable = true;
    e.wasDraggable = null;
  }
}
function eM(e, selection) {
  if (selection instanceof nh) {
    let n = e.docView.descAt(selection.from);
    if (n != e.lastSelectedViewDesc) {
      eO(e);
      if (n) {
        n.selectNode();
      }
      e.lastSelectedViewDesc = n;
    }
  } else {
    eO(e);
  }
}
function eO(e) {
  if (e.lastSelectedViewDesc) {
    if (e.lastSelectedViewDesc.parent) {
      e.lastSelectedViewDesc.deselectNode();
    }
    e.lastSelectedViewDesc = undefined;
  }
}
function eT(e, t, n, i) {
  return (
    e.someProp("createSelectionBetween", (r) => r(e, t, n)) ||
    U3.between(t, n, i)
  );
}
function eD(view) {
  return (!view.editable || !!view.hasFocus()) && eE(view);
}
function eE(e) {
  let t = e.domSelectionRange();
  if (!t.anchorNode) {
    return false;
  }
  try {
    return (
      e.dom.contains(
        t.anchorNode.nodeType == 3 ? t.anchorNode.parentNode : t.anchorNode,
      ) &&
      (e.editable ||
        e.dom.contains(
          t.focusNode.nodeType == 3 ? t.focusNode.parentNode : t.focusNode,
        ))
    );
  } catch (e) {
    return false;
  }
}
function eA(state, t) {
  let { $anchor, $head } = state.selection;
  let o = t > 0 ? $anchor.max($head) : $anchor.min($head);
  let s = o.parent.inlineContent
    ? o.depth
      ? state.doc.resolve(t > 0 ? o.after() : o.before())
      : null
    : o;
  return s && LN.findFrom(s, t);
}
function eR(e, t) {
  e.dispatch(e.state.tr.setSelection(t).scrollIntoView());
  return true;
}
function eI(e, t, n) {
  let selection = e.state.selection;
  if (selection instanceof U3) {
    if (n.indexOf("s") > -1) {
      let { $head } = selection;
      let o = $head.textOffset
        ? null
        : t < 0
          ? $head.nodeBefore
          : $head.nodeAfter;
      if (!o || o.isText || !o.isLeaf) {
        return false;
      }
      let s = e.state.doc.resolve($head.pos + o.nodeSize * (t < 0 ? -1 : 1));
      return eR(e, new U3(selection.$anchor, s));
    } else if (!selection.empty) {
      return false;
    } else if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
      let n = eA(e.state, t);
      return !!n && n instanceof nh && eR(e, n);
    } else if (!(R && n.indexOf("m") > -1)) {
      let n = selection.$head;
      let o = n.textOffset ? null : t < 0 ? n.nodeBefore : n.nodeAfter;
      let s;
      if (!o || o.isText) {
        return false;
      }
      let l = t < 0 ? n.pos - o.nodeSize : n.pos;
      return (
        !!(o.isAtom || ((s = e.docView.descAt(l)) && !s.contentDOM)) &&
        (nh.isSelectable(o)
          ? eR(e, new nh(t < 0 ? e.state.doc.resolve(n.pos - o.nodeSize) : n))
          : !!F &&
            eR(e, new U3(e.state.doc.resolve(t < 0 ? l : l + o.nodeSize))))
      );
    }
  } else {
    if (selection instanceof nh && selection.node.isInline) {
      return eR(e, new U3(t > 0 ? selection.$to : selection.$from));
    }
    let n = eA(e.state, t);
    return !!n && eR(e, n);
  }
}
function ez(e) {
  if (e.nodeType == 3) {
    return e.nodeValue.length;
  }
  return e.childNodes.length;
}
function eF(e, t) {
  let e_pmViewDesc = e.pmViewDesc;
  return (
    e_pmViewDesc &&
    e_pmViewDesc.size == 0 &&
    (t < 0 || e.nextSibling || e.nodeName != "BR")
  );
}
function eP(e, t) {
  if (t < 0) {
    return ((e) => {
      let t = e.domSelectionRange();
      let t_focusNode = t.focusNode;
      let t_focusOffset = t.focusOffset;
      if (!t_focusNode) {
        return;
      }
      let i;
      let o;
      let l = false;
      for (
        M &&
        t_focusNode.nodeType == 1 &&
        t_focusOffset < ez(t_focusNode) &&
        eF(t_focusNode.childNodes[t_focusOffset], -1) &&
        (l = true);
        ;
      ) {
        if (t_focusOffset > 0) {
          if (t_focusNode.nodeType != 1) {
            break;
          } else {
            let e = t_focusNode.childNodes[t_focusOffset - 1];
            if (eF(e, -1)) {
              i = t_focusNode;
              o = --t_focusOffset;
            } else if (e.nodeType == 3) {
              t_focusOffset = (t_focusNode = e).nodeValue.length;
            } else {
              break;
            }
          }
        } else if (eB(t_focusNode)) {
          break;
        } else {
          let t = t_focusNode.previousSibling;
          while (t && eF(t, -1)) {
            i = t_focusNode.parentNode;
            o = s(t);
            t = t.previousSibling;
          }
          if (t) {
            t_focusOffset = ez((t_focusNode = t));
          } else {
            if ((t_focusNode = t_focusNode.parentNode) == e.dom) {
              break;
            }
            t_focusOffset = 0;
          }
        }
      }
      if (l) {
        eV(e, t_focusNode, t_focusOffset);
      } else if (i) {
        eV(e, i, o);
      }
    })(e);
  }
  return ((e) => {
    let t;
    let n;
    let r = e.domSelectionRange();
    let r_focusNode = r.focusNode;
    let r_focusOffset = r.focusOffset;
    if (!r_focusNode) {
      return;
    }
    let l = ez(r_focusNode);
    while (true) {
      if (r_focusOffset < l) {
        if (r_focusNode.nodeType != 1) {
          break;
        }
        if (eF(r_focusNode.childNodes[r_focusOffset], 1)) {
          t = r_focusNode;
          n = ++r_focusOffset;
        } else {
          break;
        }
      } else if (eB(r_focusNode)) {
        break;
      } else {
        let r = r_focusNode.nextSibling;
        while (r && eF(r, 1)) {
          t = r.parentNode;
          n = s(r) + 1;
          r = r.nextSibling;
        }
        if (r) {
          r_focusOffset = 0;
          l = ez((r_focusNode = r));
        } else {
          if ((r_focusNode = r_focusNode.parentNode) == e.dom) {
            break;
          }
          l = 0;
          r_focusOffset = 0;
        }
      }
    }
    if (t) {
      eV(e, t, n);
    }
  })(e);
}
function eB(e) {
  let e_pmViewDesc = e.pmViewDesc;
  return e_pmViewDesc && e_pmViewDesc.node && e_pmViewDesc.node.isBlock;
}
function eV(e, t, n) {
  if (t.nodeType != 3) {
    let e;
    let r;
    if (
      (r = ((e, t) => {
        while (e && t == e.childNodes.length && !m(e)) {
          t = s(e) + 1;
          e = e.parentNode;
        }
        while (e && t < e.childNodes.length) {
          let n = e.childNodes[t];
          if (n.nodeType == 3) {
            return n;
          }
          if (n.nodeType == 1 && n.contentEditable == "false") {
            break;
          }
          e = n;
          t = 0;
        }
      })(t, n))
    ) {
      t = r;
      n = 0;
    } else if (
      (e = ((e, t) => {
        while (e && !t && !m(e)) {
          t = s(e);
          e = e.parentNode;
        }
        while (e && t) {
          let n = e.childNodes[t - 1];
          if (n.nodeType == 3) {
            return n;
          }
          if (n.nodeType == 1 && n.contentEditable == "false") {
            break;
          }
          t = (e = n).childNodes.length;
        }
      })(t, n))
    ) {
      t = e;
      n = e.nodeValue.length;
    }
  }
  let r = e.domSelection();
  if (!r) {
    return;
  }
  if (g(r)) {
    let e = document.createRange();
    e.setEnd(t, n);
    e.setStart(t, n);
    r.removeAllRanges();
    r.addRange(e);
  } else {
    if (r.extend) {
      r.extend(t, n);
    }
  }
  e.domObserver.setCurSelection();
  let { state } = e;
  setTimeout(() => {
    if (e.state == state) {
      ex(e);
    }
  }, 50);
}
function e$(e, from) {
  let n = e.state.doc.resolve(from);
  if (!(T || I) && n.parent.inlineContent) {
    let r = e.coordsAtPos(from);
    if (from > n.start()) {
      let n = e.coordsAtPos(from - 1);
      let i = (n.top + n.bottom) / 2;
      if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) {
        if (n.left < r.left) {
          return "ltr";
        }
        return "rtl";
      }
    }
    if (from < n.end()) {
      let n = e.coordsAtPos(from + 1);
      let i = (n.top + n.bottom) / 2;
      if (i > r.top && i < r.bottom && Math.abs(n.left - r.left) > 1) {
        if (n.left > r.left) {
          return "ltr";
        }
        return "rtl";
      }
    }
  }
  if (getComputedStyle(e.dom).direction == "rtl") {
    return "rtl";
  }
  return "ltr";
}
function eJ(e, t, n) {
  let selection = e.state.selection;
  if (
    (selection instanceof U3 && !selection.empty) ||
    n.indexOf("s") > -1 ||
    (R && n.indexOf("m") > -1)
  ) {
    return false;
  }
  let { $from, $to } = selection;
  if (!$from.parent.inlineContent || e.endOfTextblock(t < 0 ? "up" : "down")) {
    let n = eA(e.state, t);
    if (n && n instanceof nh) {
      return eR(e, n);
    }
  }
  if (!$from.parent.inlineContent) {
    let n = t < 0 ? $from : $to;
    let l = selection instanceof i5 ? LN.near(n, t) : LN.findFrom(n, t);
    return !!l && eR(e, l);
  }
  return false;
}
function eL(e, t) {
  if (!(e.state.selection instanceof U3)) {
    return true;
  }
  let { $head, $anchor, empty } = e.state.selection;
  if (!$head.sameParent($anchor)) {
    return true;
  }
  if (!empty) {
    return false;
  }
  if (e.endOfTextblock(t > 0 ? "forward" : "backward")) {
    return true;
  }
  let s = !$head.textOffset && (t < 0 ? $head.nodeBefore : $head.nodeAfter);
  if (s && !s.isText) {
    let r = e.state.tr;
    if (t < 0) {
      r.delete($head.pos - s.nodeSize, $head.pos);
    } else {
      r.delete($head.pos, $head.pos + s.nodeSize);
    }
    e.dispatch(r);
    return true;
  }
  return false;
}
function eK(e, t, n) {
  e.domObserver.stop();
  t.contentEditable = n;
  e.domObserver.start();
}
function eW(e, slice) {
  e.someProp("transformCopied", (n) => {
    slice = n(slice, e);
  });
  let n = [];
  let { content, openStart, openEnd } = slice;
  while (
    openStart > 1 &&
    openEnd > 1 &&
    content.childCount == 1 &&
    content.firstChild.childCount == 1
  ) {
    openStart--;
    openEnd--;
    let e = content.firstChild;
    n.push(e.type.name, e.attrs != e.type.defaultAttrs ? e.attrs : null);
    content = e.content;
  }
  let l = e.someProp("clipboardSerializer") || ZF.fromSchema(e.state.schema);
  let document = eX();
  let h = document.createElement("div");
  h.appendChild(
    l.serializeFragment(content, {
      document,
    }),
  );
  let h_firstChild = h.firstChild;
  let d;
  let p = 0;
  while (
    h_firstChild &&
    h_firstChild.nodeType == 1 &&
    (d = eG[h_firstChild.nodeName.toLowerCase()])
  ) {
    for (let e = d.length - 1; e >= 0; e--) {
      let t = document.createElement(d[e]);
      while (h.firstChild) {
        t.appendChild(h.firstChild);
      }
      h.appendChild(t);
      p++;
    }
    h_firstChild = h.firstChild;
  }
  if (h_firstChild && h_firstChild.nodeType == 1) {
    h_firstChild.setAttribute(
      "data-pm-slice",
      `${openStart} ${openEnd}${p ? ` -${p}` : ""} ${JSON.stringify(n)}`,
    );
  }
  return {
    dom: h,
    text:
      e.someProp("clipboardTextSerializer", (n) => n(slice, e)) ||
      slice.content.textBetween(0, slice.content.size, "\n\n"),
    slice,
  };
}
function eq(e, t, n, r, o) {
  let s;
  let l;
  let code = o.parent.type.spec.code;
  if (!n && !t) {
    return null;
  }
  let h = !!t && (r || code || !n);
  if (h) {
    e.someProp("transformPastedText", (n) => {
      t = n(t, code || r, e);
    });
    if (code) {
      l = new Ji(FK.from(e.state.schema.text(t.replace(/\r\n?/g, "\n"))), 0, 0);
      e.someProp("transformPasted", (t) => {
        l = t(l, e, true);
      });
      return l;
    }
    let n = e.someProp("clipboardTextParser", (n) => n(t, o, r, e));
    if (n) {
      l = n;
    } else {
      let n = o.marks();
      let { schema } = e.state;
      let l = ZF.fromSchema(schema);
      s = document.createElement("div");
      t.split(/(?:\r\n?|\n)+/).forEach((e) => {
        let t = s.appendChild(document.createElement("p"));
        if (e) {
          t.appendChild(l.serializeNode(schema.text(e, n)));
        }
      });
    }
  } else {
    e.someProp("transformPastedHTML", (t) => {
      n = t(n, e);
    });
    s = ((e) => {
      let t;
      let n;
      let r = /^(\s*<meta [^>]*>)*/.exec(e);
      if (r) {
        e = e.slice(r[0].length);
      }
      let i = eX().createElement("div");
      let o = /<([a-z][^>\s]+)/i.exec(e);
      let s;
      if ((s = o && eG[o[1].toLowerCase()])) {
        e =
          s.map((e) => "<" + e + ">").join("") +
          e +
          s
            .map((e) => "</" + e + ">")
            .reverse()
            .join("");
      }
      i.innerHTML =
        ((t = e),
        (n = window.trustedTypes)
          ? (eY ||
              (eY =
                n.defaultPolicy ||
                n.createPolicy("ProseMirrorClipboard", {
                  createHTML: (e) => e,
                })),
            eY.createHTML(t))
          : t);
      if (s) {
        for (let e = 0; e < s.length; e++) {
          i = i.querySelector(s[e]) || i;
        }
      }
      return i;
    })(n);
    if (F) {
      ((e) => {
        let t = e.querySelectorAll(
          T ? "span:not([class]):not([style])" : "span.Apple-converted-space",
        );
        for (let n = 0; n < t.length; n++) {
          let r = t[n];
          if (
            r.childNodes.length == 1 &&
            r.textContent == "\xa0" &&
            r.parentNode
          ) {
            r.parentNode.replaceChild(e.ownerDocument.createTextNode(" "), r);
          }
        }
      })(s);
    }
  }
  let c = s && s.querySelector("[data-pm-slice]");
  let d =
    c &&
    /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3]) {
    for (let e = +d[3]; e > 0; e--) {
      let e = s.firstChild;
      while (e && e.nodeType != 1) {
        e = e.nextSibling;
      }
      if (!e) {
        break;
      }
      s = e;
    }
  }
  if (!l) {
    l = (
      e.someProp("clipboardParser") ||
      e.someProp("domParser") ||
      S4.fromSchema(e.state.schema)
    ).parseSlice(s, {
      preserveWhitespace: !!(h || d),
      context: o,
      ruleFromNode: (e) => {
        if (
          e.nodeName != "BR" ||
          e.nextSibling ||
          !e.parentNode ||
          ej.test(e.parentNode.nodeName)
        ) {
          return null;
        }
        return {
          ignore: true,
        };
      },
    });
  }
  if (d) {
    l = ((e, t) => {
      if (!e.size) {
        return e;
      }
      let schema = e.content.firstChild.type.schema;
      let r;
      try {
        r = JSON.parse(t);
      } catch (t) {
        return e;
      }
      let { content, openStart, openEnd } = e;
      for (let e = r.length - 2; e >= 0; e -= 2) {
        let t = schema.nodes[r[e]];
        if (!t || t.hasRequiredAttrs()) {
          break;
        }
        content = FK.from(t.create(r[e + 1], content));
        openStart++;
        openEnd++;
      }
      return new Ji(content, openStart, openEnd);
    })(eH(l, +d[1], +d[2]), d[4]);
  } else if (
    (l = Ji.maxOpen(
      ((e, t) => {
        if (e.childCount < 2) {
          return e;
        }
        for (let n = t.depth; n >= 0; n--) {
          let r = t.node(n).contentMatchAt(t.index(n));
          let o;
          let s = [];
          e.forEach((e) => {
            if (!s) {
              return;
            }
            let t = r.findWrapping(e.type);
            let n;
            if (!t) {
              return (s = null);
            }
            if (
              (n =
                s.length &&
                o.length &&
                (function e(t, n, r, o, s) {
                  if (s < t.length && s < n.length && t[s] == n[s]) {
                    let l = e(t, n, r, o.lastChild, s + 1);
                    if (l) {
                      return o.copy(
                        o.content.replaceChild(o.childCount - 1, l),
                      );
                    }
                    if (
                      o
                        .contentMatchAt(o.childCount)
                        .matchType(s == t.length - 1 ? r.type : t[s + 1])
                    ) {
                      return o.copy(o.content.append(FK.from(e_(r, t, s + 1))));
                    }
                  }
                })(t, o, e, s[s.length - 1], 0))
            ) {
              s[s.length - 1] = n;
            } else {
              if (s.length) {
                s[s.length - 1] = (function e(t, n) {
                  if (n == 0) {
                    return t;
                  }
                  let r = t.content.replaceChild(
                    t.childCount - 1,
                    e(t.lastChild, n - 1),
                  );
                  let o = t
                    .contentMatchAt(t.childCount)
                    .fillBefore(FK.empty, true);
                  return t.copy(r.append(o));
                })(s[s.length - 1], o.length);
              }
              let n = e_(e, t);
              s.push(n);
              r = r.matchType(n.type);
              o = t;
            }
          });
          if (s) {
            return FK.from(s);
          }
        }
        return e;
      })(l.content, o),
      true,
    )).openStart ||
    l.openEnd
  ) {
    let e = 0;
    let t = 0;
    for (
      let t = l.content.firstChild;
      e < l.openStart && !t.type.spec.isolating;
      e++, t = t.firstChild
    );
    for (
      let e = l.content.lastChild;
      t < l.openEnd && !e.type.spec.isolating;
      t++, e = e.lastChild
    );
    l = eH(l, e, t);
  }
  e.someProp("transformPasted", (t) => {
    l = t(l, e, h);
  });
  return l;
}
let ej =
  /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function e_(e, t, n = 0) {
  for (let r = t.length - 1; r >= n; r--) {
    e = t[r].create(null, FK.from(e));
  }
  return e;
}
function eU(e, t, n, r, o, s) {
  let l = t < 0 ? e.firstChild : e.lastChild;
  let l_content = l.content;
  if (e.childCount > 1) {
    s = 0;
  }
  if (o < r - 1) {
    l_content = eU(l_content, t, n, r, o + 1, s);
  }
  if (o >= n) {
    l_content =
      t < 0
        ? l
            .contentMatchAt(0)
            .fillBefore(l_content, s <= o)
            .append(l_content)
        : l_content.append(
            l.contentMatchAt(l.childCount).fillBefore(FK.empty, true),
          );
  }
  return e.replaceChild(t < 0 ? 0 : e.childCount - 1, l.copy(l_content));
}
function eH(e, t, n) {
  if (t < e.openStart) {
    e = new Ji(eU(e.content, -1, t, e.openStart, 0, e.openEnd), t, e.openEnd);
  }
  if (n < e.openEnd) {
    e = new Ji(eU(e.content, 1, n, e.openEnd, 0, 0), e.openStart, n);
  }
  return e;
}
let eG = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"],
};
let eZ = null;
function eX() {
  return eZ || (eZ = document.implementation.createHTMLDocument("title"));
}
let eY = null;
let eQ = {};
let e0 = {};
let e1 = {
  touchstart: true,
  touchmove: true,
};
class e2 {
  constructor() {
    this.shiftKey = false;
    this.mouseDown = null;
    this.lastKeyCode = null;
    this.lastKeyCodeTime = 0;
    this.lastClick = {
      time: 0,
      x: 0,
      y: 0,
      type: "",
      button: 0,
    };
    this.lastSelectionOrigin = null;
    this.lastSelectionTime = 0;
    this.lastIOSEnter = 0;
    this.lastIOSEnterFallbackTimeout = -1;
    this.lastFocus = 0;
    this.lastTouch = 0;
    this.lastChromeDelete = 0;
    this.composing = false;
    this.compositionNode = null;
    this.composingTimeout = -1;
    this.compositionNodes = [];
    this.compositionEndedAt = -200000000;
    this.compositionID = 1;
    this.compositionPendingChanges = 0;
    this.domChangeCount = 0;
    this.eventHandlers = Object.create(null);
    this.hideSelectionGuard = null;
  }
}
function e3(e, t) {
  e.input.lastSelectionOrigin = t;
  e.input.lastSelectionTime = Date.now();
}
function e5(e) {
  e.someProp("handleDOMEvents", (t) => {
    for (let n in t) {
      if (!e.input.eventHandlers[n]) {
        e.dom.addEventListener(n, (e.input.eventHandlers[n] = (t) => e6(e, t)));
      }
    }
  });
}
function e6(e, t) {
  return e.someProp("handleDOMEvents", (n) => {
    let r = n[t.type];
    return !!r && (r(e, t) || t.defaultPrevented);
  });
}
function e9(e) {
  return {
    left: e.clientX,
    top: e.clientY,
  };
}
function e8(e, t, n, r, i) {
  if (r == -1) {
    return false;
  }
  let o = e.state.doc.resolve(r);
  for (let r = o.depth + 1; r > 0; r--) {
    if (
      e.someProp(t, (t) => {
        if (r > o.depth) {
          return t(e, n, o.nodeAfter, o.before(r), i, true);
        }
        return t(e, n, o.node(r), o.before(r), i, false);
      })
    ) {
      return true;
    }
  }
  return false;
}
function e4(e, t, n) {
  if (!e.focused) {
    e.focus();
  }
  if (e.state.selection.eq(t)) {
    return;
  }
  let r = e.state.tr.setSelection(t);
  if (n == "pointer") {
    r.setMeta("pointer", true);
  }
  e.dispatch(r);
}
e0.keydown = (e, t) => {
  if (
    ((e.input.shiftKey = t.keyCode == 16 || t.shiftKey), !tt(e, t)) &&
    ((e.input.lastKeyCode = t.keyCode),
    (e.input.lastKeyCodeTime = Date.now()),
    !z || !T || t.keyCode != 13)
  ) {
    if (t.keyCode != 229) {
      e.domObserver.forceFlush();
    }
    if (!A || t.keyCode != 13 || t.ctrlKey || t.altKey || t.metaKey) {
      if (
        e.someProp("handleKeyDown", (n) => n(e, t)) ||
        ((e, t) => {
          let n;
          let t_keyCode = t.keyCode;
          n = "";
          if (t.ctrlKey) {
            n += "c";
          }
          if (t.metaKey) {
            n += "m";
          }
          if (t.altKey) {
            n += "a";
          }
          if (t.shiftKey) {
            n += "s";
          }
          let i = n;
          if (t_keyCode == 8 || (R && t_keyCode == 72 && i == "c")) {
            return eL(e, -1) || eP(e, -1);
          }
          if (
            (t_keyCode == 46 && !t.shiftKey) ||
            (R && t_keyCode == 68 && i == "c")
          ) {
            return eL(e, 1) || eP(e, 1);
          }
          if (t_keyCode == 13 || t_keyCode == 27) {
            return true;
          }
          if (t_keyCode == 37 || (R && t_keyCode == 66 && i == "c")) {
            let t =
              t_keyCode == 37
                ? e$(e, e.state.selection.from) == "ltr"
                  ? -1
                  : 1
                : -1;
            return eI(e, t, i) || eP(e, t);
          }
          if (t_keyCode == 39 || (R && t_keyCode == 70 && i == "c")) {
            let t =
              t_keyCode == 39
                ? e$(e, e.state.selection.from) == "ltr"
                  ? 1
                  : -1
                : 1;
            return eI(e, t, i) || eP(e, t);
          } else if (t_keyCode == 38 || (R && t_keyCode == 80 && i == "c")) {
            return eJ(e, -1, i) || eP(e, -1);
          } else if (t_keyCode == 40 || (R && t_keyCode == 78 && i == "c")) {
            return (
              ((e) => {
                if (!E || e.state.selection.$head.parentOffset > 0) {
                  return false;
                }
                let { focusNode, focusOffset } = e.domSelectionRange();
                if (
                  focusNode &&
                  focusNode.nodeType == 1 &&
                  focusOffset == 0 &&
                  focusNode.firstChild &&
                  focusNode.firstChild.contentEditable == "false"
                ) {
                  let n = focusNode.firstChild;
                  eK(e, n, "true");
                  setTimeout(() => eK(e, n, "false"), 20);
                }
                return false;
              })(e) ||
              eJ(e, 1, i) ||
              eP(e, 1)
            );
          } else if (
            i == (R ? "m" : "c") &&
            (t_keyCode == 66 ||
              t_keyCode == 73 ||
              t_keyCode == 89 ||
              t_keyCode == 90)
          ) {
            return true;
          }
          return false;
        })(e, t)
      ) {
        t.preventDefault();
      } else {
        e3(e, "key");
      }
    } else {
      let t = Date.now();
      e.input.lastIOSEnter = t;
      e.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        if (e.input.lastIOSEnter == t) {
          e.someProp("handleKeyDown", (t) => t(e, y(13, "Enter")));
          e.input.lastIOSEnter = 0;
        }
      }, 200);
    }
  }
};
e0.keyup = (e, t) => {
  if (t.keyCode == 16) {
    e.input.shiftKey = false;
  }
};
e0.keypress = (e, t) => {
  if (tt(e, t) || !t.charCode || (t.ctrlKey && !t.altKey) || (R && t.metaKey)) {
    return;
  }
  if (e.someProp("handleKeyPress", (n) => n(e, t))) {
    return void t.preventDefault();
  }
  let selection = e.state.selection;
  if (
    !(selection instanceof U3) ||
    !selection.$from.sameParent(selection.$to)
  ) {
    let r = String.fromCharCode(t.charCode);
    let i = () => e.state.tr.insertText(r).scrollIntoView();
    if (
      !(
        /[\r\n]/.test(r) ||
        e.someProp("handleTextInput", (t) =>
          t(e, selection.$from.pos, selection.$to.pos, r, i),
        )
      )
    ) {
      e.dispatch(i());
    }
    t.preventDefault();
  }
};
let e7 = R ? "metaKey" : "ctrlKey";
eQ.mousedown = (e, t) => {
  var n;
  let i;
  let o;
  e.input.shiftKey = t.shiftKey;
  let s = to(e);
  let time = Date.now();
  let a = "singleClick";
  if (
    time - e.input.lastClick.time < 500 &&
    (i = (n = e.input.lastClick).x - t.clientX) * i +
      (o = n.y - t.clientY) * o <
      100 &&
    !t[e7] &&
    e.input.lastClick.button == t.button
  ) {
    if (e.input.lastClick.type == "singleClick") {
      a = "doubleClick";
    } else if (e.input.lastClick.type == "doubleClick") {
      a = "tripleClick";
    }
  }
  e.input.lastClick = {
    time,
    x: t.clientX,
    y: t.clientY,
    type: a,
    button: t.button,
  };
  let h = e.posAtCoords(e9(t));
  if (h) {
    if (a == "singleClick") {
      if (e.input.mouseDown) {
        e.input.mouseDown.done();
      }
      e.input.mouseDown = new te(e, h, t, !!s);
    } else if (
      (a == "doubleClick"
        ? function (e, t, n, r) {
            return (
              e8(e, "handleDoubleClickOn", t, n, r) ||
              e.someProp("handleDoubleClick", (n) => n(e, t, r))
            );
          }
        : function (e, t, n, i) {
            return (
              e8(e, "handleTripleClickOn", t, n, i) ||
              e.someProp("handleTripleClick", (n) => n(e, t, i)) ||
              ((e, t, n) => {
                if (n.button != 0) {
                  return false;
                }
                let doc = e.state.doc;
                if (t == -1) {
                  return (
                    !!doc.inlineContent &&
                    (e4(e, U3.create(doc, 0, doc.content.size), "pointer"),
                    true)
                  );
                }
                let o = doc.resolve(t);
                for (let t = o.depth + 1; t > 0; t--) {
                  let n = t > o.depth ? o.nodeAfter : o.node(t);
                  let s = o.before(t);
                  if (n.inlineContent) {
                    e4(
                      e,
                      U3.create(doc, s + 1, s + 1 + n.content.size),
                      "pointer",
                    );
                  } else {
                    if (!nh.isSelectable(n)) {
                      continue;
                    }
                    e4(e, nh.create(doc, s), "pointer");
                  }
                  return true;
                }
              })(e, n, i)
            );
          })(e, h.pos, h.inside, t)
    ) {
      t.preventDefault();
    } else {
      e3(e, "pointer");
    }
  }
};
class te {
  constructor(e, t, n, i) {
    let o;
    let s;
    this.view = e;
    this.pos = t;
    this.event = n;
    this.flushed = i;
    this.delayedSelectionSync = false;
    this.mightDrag = null;
    this.startDoc = e.state.doc;
    this.selectNode = !!n[e7];
    this.allowDefault = n.shiftKey;
    if (t.inside > -1) {
      o = e.state.doc.nodeAt(t.inside);
      s = t.inside;
    } else {
      let n = e.state.doc.resolve(t.pos);
      o = n.parent;
      s = n.depth ? n.before() : 0;
    }
    let l = i ? null : n.target;
    let a = l ? e.docView.nearestDesc(l, true) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection } = e.state;
    if (
      (n.button == 0 &&
        o.type.spec.draggable &&
        o.type.spec.selectable !== false) ||
      (selection instanceof nh && selection.from <= s && selection.to > s)
    ) {
      this.mightDrag = {
        node: o,
        pos: s,
        addAttr: !!(this.target && !this.target.draggable),
        setUneditable: !!(
          this.target &&
          M &&
          !this.target.hasAttribute("contentEditable")
        ),
      };
    }
    if (
      this.target &&
      this.mightDrag &&
      (this.mightDrag.addAttr || this.mightDrag.setUneditable)
    ) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) {
        this.target.draggable = true;
      }
      if (this.mightDrag.setUneditable) {
        setTimeout(() => {
          if (this.view.input.mouseDown == this) {
            this.target.setAttribute("contentEditable", "false");
          }
        }, 20);
      }
      this.view.domObserver.start();
    }
    e.root.addEventListener("mouseup", (this.up = this.up.bind(this)));
    e.root.addEventListener("mousemove", (this.move = this.move.bind(this)));
    e3(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up);
    this.view.root.removeEventListener("mousemove", this.move);
    if (this.mightDrag && this.target) {
      this.view.domObserver.stop();
      if (this.mightDrag.addAttr) {
        this.target.removeAttribute("draggable");
      }
      if (this.mightDrag.setUneditable) {
        this.target.removeAttribute("contentEditable");
      }
      this.view.domObserver.start();
    }
    if (this.delayedSelectionSync) {
      setTimeout(() => ex(this.view));
    }
    this.view.input.mouseDown = null;
  }
  up(e) {
    this.done();
    if (!this.view.dom.contains(e.target)) {
      return;
    }
    let pos = this.pos;
    if (this.view.state.doc != this.startDoc) {
      pos = this.view.posAtCoords(e9(e));
    }
    this.updateAllowDefault(e);
    if (this.allowDefault || !pos) {
      e3(this.view, "pointer");
    } else {
      let n;
      let i;
      let o;
      let s;
      n = this.view;
      i = pos.pos;
      o = pos.inside;
      s = this.selectNode;
      if (
        e8(n, "handleClickOn", i, o, e) ||
        n.someProp("handleClick", (t) => t(n, i, e)) ||
        (s
          ? ((e, t) => {
              if (t == -1) {
                return false;
              }
              let selection = e.state.selection;
              let i;
              let o;
              if (selection instanceof nh) {
                i = selection.node;
              }
              let s = e.state.doc.resolve(t);
              for (let e = s.depth + 1; e > 0; e--) {
                let t = e > s.depth ? s.nodeAfter : s.node(e);
                if (nh.isSelectable(t)) {
                  o =
                    i &&
                    selection.$from.depth > 0 &&
                    e >= selection.$from.depth &&
                    s.before(selection.$from.depth + 1) == selection.$from.pos
                      ? s.before(selection.$from.depth)
                      : s.before(e);
                  break;
                }
              }
              return (
                o != null && (e4(e, nh.create(e.state.doc, o), "pointer"), true)
              );
            })(n, o)
          : ((e, t) => {
              if (t == -1) {
                return false;
              }
              let n = e.state.doc.resolve(t);
              let n_nodeAfter = n.nodeAfter;
              return (
                !!(
                  n_nodeAfter &&
                  n_nodeAfter.isAtom &&
                  nh.isSelectable(n_nodeAfter)
                ) && (e4(e, new nh(n), "pointer"), true)
              );
            })(n, o))
      ) {
        e.preventDefault();
      } else if (
        e.button == 0 &&
        (this.flushed ||
          (E && this.mightDrag && !this.mightDrag.node.isAtom) ||
          (T &&
            !this.view.state.selection.visible &&
            Math.min(
              Math.abs(pos.pos - this.view.state.selection.from),
              Math.abs(pos.pos - this.view.state.selection.to),
            ) <= 2))
      ) {
        e4(this.view, LN.near(this.view.state.doc.resolve(pos.pos)), "pointer");
        e.preventDefault();
      } else {
        e3(this.view, "pointer");
      }
    }
  }
  move(e) {
    this.updateAllowDefault(e);
    e3(this.view, "pointer");
    if (e.buttons == 0) {
      this.done();
    }
  }
  updateAllowDefault(e) {
    if (
      !this.allowDefault &&
      (Math.abs(this.event.x - e.clientX) > 4 ||
        Math.abs(this.event.y - e.clientY) > 4)
    ) {
      this.allowDefault = true;
    }
  }
}
function tt(e, t) {
  return (
    !!e.composing ||
    (!!(E && Math.abs(t.timeStamp - e.input.compositionEndedAt) < 500) &&
      ((e.input.compositionEndedAt = -200000000), true))
  );
}
eQ.touchstart = (e) => {
  e.input.lastTouch = Date.now();
  to(e);
  e3(e, "pointer");
};
eQ.touchmove = (e) => {
  e.input.lastTouch = Date.now();
  e3(e, "pointer");
};
eQ.contextmenu = (e) => to(e);
let tn = z ? 5000 : -1;
function tr(e, t) {
  clearTimeout(e.input.composingTimeout);
  if (t > -1) {
    e.input.composingTimeout = setTimeout(() => to(e), t);
  }
}
function ti(e) {
  let t;
  for (
    e.composing &&
    ((e.input.composing = false),
    (e.input.compositionEndedAt =
      ((t = document.createEvent("Event")).initEvent("event", true, true),
      t.timeStamp)));
    e.input.compositionNodes.length > 0;
  ) {
    e.input.compositionNodes.pop().markParentsDirty();
  }
}
function to(e, t = false) {
  if (!z || !(e.domObserver.flushingSoon >= 0)) {
    e.domObserver.forceFlush();
    ti(e);
    if (t || (e.docView && e.docView.dirty)) {
      let n = ek(e);
      let r = e.state.selection;
      if (n && !n.eq(r)) {
        e.dispatch(e.state.tr.setSelection(n));
      } else if (
        (e.markCursor || t) &&
        !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent
      ) {
        e.dispatch(e.state.tr.deleteSelection());
      } else {
        e.updateState(e.state);
      }
      return true;
    }
    return false;
  }
}
e0.compositionstart = e0.compositionupdate = (e) => {
  if (!e.composing) {
    e.domObserver.flush();
    let { state } = e;
    let n = state.selection.$to;
    if (
      state.selection instanceof U3 &&
      (state.storedMarks ||
        (!n.textOffset &&
          n.parentOffset &&
          n.nodeBefore.marks.some((e) => e.type.spec.inclusive === false)))
    ) {
      e.markCursor = e.state.storedMarks || n.marks();
      to(e, true);
      e.markCursor = null;
    } else {
      to(e, !state.selection.empty);
      if (
        M &&
        state.selection.empty &&
        n.parentOffset &&
        !n.textOffset &&
        n.nodeBefore.marks.length
      ) {
        let t = e.domSelectionRange();
        for (
          let n = t.focusNode, r = t.focusOffset;
          n && n.nodeType == 1 && r != 0;
        ) {
          let t = r < 0 ? n.lastChild : n.childNodes[r - 1];
          if (!t) {
            break;
          }
          if (t.nodeType == 3) {
            let n = e.domSelection();
            if (n) {
              n.collapse(t, t.nodeValue.length);
            }
            break;
          }
          n = t;
          r = -1;
        }
      }
    }
    e.input.composing = true;
  }
  tr(e, tn);
};
e0.compositionend = (e, t) => {
  if (e.composing) {
    e.input.composing = false;
    e.input.compositionEndedAt = t.timeStamp;
    e.input.compositionPendingChanges = e.domObserver.pendingRecords().length
      ? e.input.compositionID
      : 0;
    e.input.compositionNode = null;
    if (e.input.compositionPendingChanges) {
      Promise.resolve().then(() => e.domObserver.flush());
    }
    e.input.compositionID++;
    tr(e, 20);
  }
};
let ts = (C && N < 15) || (A && P < 604);
function tl(e, t, n, r, o) {
  let s = eq(e, t, n, r, e.state.selection.$from);
  if (e.someProp("handlePaste", (t) => t(e, o, s || Ji.empty))) {
    return true;
  }
  if (!s) {
    return false;
  }
  let l =
    s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1
      ? s.content.firstChild
      : null;
  let a = l
    ? e.state.tr.replaceSelectionWith(l, r)
    : e.state.tr.replaceSelection(s);
  e.dispatch(
    a.scrollIntoView().setMeta("paste", true).setMeta("uiEvent", "paste"),
  );
  return true;
}
function ta(e) {
  let t = e.getData("text/plain") || e.getData("Text");
  if (t) {
    return t;
  }
  let n = e.getData("text/uri-list");
  if (n) {
    return n.replace(/\r?\n/g, " ");
  }
  return "";
}
eQ.copy = e0.cut = (e, t) => {
  let selection = e.state.selection;
  let r = t.type == "cut";
  if (selection.empty) {
    return;
  }
  let i = ts ? null : t.clipboardData;
  let { dom, text } = eW(e, selection.content());
  if (i) {
    t.preventDefault();
    i.clearData();
    i.setData("text/html", dom.innerHTML);
    i.setData("text/plain", text);
  } else {
    ((e, t) => {
      if (!e.dom.parentNode) {
        return;
      }
      let n = e.dom.parentNode.appendChild(document.createElement("div"));
      n.appendChild(t);
      n.style.cssText = "position: fixed; left: -10000px; top: 10px";
      let r = getSelection();
      let i = document.createRange();
      i.selectNodeContents(t);
      e.dom.blur();
      r.removeAllRanges();
      r.addRange(i);
      setTimeout(() => {
        if (n.parentNode) {
          n.parentNode.removeChild(n);
        }
        e.focus();
      }, 50);
    })(e, dom);
  }
  if (r) {
    e.dispatch(
      e.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"),
    );
  }
};
e0.paste = (e, t) => {
  if (e.composing && !z) {
    return;
  }
  let n = ts ? null : t.clipboardData;
  let r = e.input.shiftKey && e.input.lastKeyCode != 45;
  if (n && tl(e, ta(n), n.getData("text/html"), r, t)) {
    t.preventDefault();
  } else {
    ((e, t) => {
      if (!e.dom.parentNode) {
        return;
      }
      let n = e.input.shiftKey || e.state.selection.$from.parent.type.spec.code;
      let r = e.dom.parentNode.appendChild(
        document.createElement(n ? "textarea" : "div"),
      );
      if (!n) {
        r.contentEditable = "true";
      }
      r.style.cssText = "position: fixed; left: -10000px; top: 10px";
      r.focus();
      let i = e.input.shiftKey && e.input.lastKeyCode != 45;
      setTimeout(() => {
        e.focus();
        if (r.parentNode) {
          r.parentNode.removeChild(r);
        }
        if (n) {
          tl(e, r.value, null, i, t);
        } else {
          tl(e, r.textContent, r.innerHTML, i, t);
        }
      }, 50);
    })(e, t);
  }
};
class th {
  constructor(e, t, n) {
    this.slice = e;
    this.move = t;
    this.node = n;
  }
}
let tc = R ? "altKey" : "ctrlKey";
function td(e, t) {
  let n = e.someProp("dragCopies", (e) => !e(t));
  if (n != null) {
    return n;
  }
  return !t[tc];
}
for (let e in ((eQ.dragstart = (e, t) => {
  let n;
  let mouseDown = e.input.mouseDown;
  if (mouseDown) {
    mouseDown.done();
  }
  if (!t.dataTransfer) {
    return;
  }
  let selection = e.state.selection;
  let s = selection.empty ? null : e.posAtCoords(e9(t));
  if (
    s &&
    s.pos >= selection.from &&
    s.pos <= (selection instanceof nh ? selection.to - 1 : selection.to)
  );
  else if (mouseDown && mouseDown.mightDrag) {
    n = nh.create(e.state.doc, mouseDown.mightDrag.pos);
  } else if (t.target && t.target.nodeType == 1) {
    let i = e.docView.nearestDesc(t.target, true);
    if (i && i.node.type.spec.draggable && i != e.docView) {
      n = nh.create(e.state.doc, i.posBefore);
    }
  }
  let l = (n || e.state.selection).content();
  let { dom, text, slice } = eW(e, l);
  if (!(t.dataTransfer.files.length && T && !(D > 120))) {
    t.dataTransfer.clearData();
  }
  t.dataTransfer.setData(ts ? "Text" : "text/html", dom.innerHTML);
  t.dataTransfer.effectAllowed = "copyMove";
  if (!ts) {
    t.dataTransfer.setData("text/plain", text);
  }
  e.dragging = new th(slice, td(e, t), n);
}),
(eQ.dragend = (e) => {
  let e_dragging = e.dragging;
  window.setTimeout(() => {
    if (e.dragging == e_dragging) {
      e.dragging = null;
    }
  }, 50);
}),
(e0.dragover = e0.dragenter = (e, t) => t.preventDefault()),
(e0.drop = (e, t) => {
  let e_dragging = e.dragging;
  e.dragging = null;
  if (!t.dataTransfer) {
    return;
  }
  let s = e.posAtCoords(e9(t));
  if (!s) {
    return;
  }
  let l = e.state.doc.resolve(s.pos);
  let a = e_dragging && e_dragging.slice;
  if (a) {
    e.someProp("transformPasted", (t) => {
      a = t(a, e, false);
    });
  } else {
    a = eq(
      e,
      ta(t.dataTransfer),
      ts ? null : t.dataTransfer.getData("text/html"),
      false,
      l,
    );
  }
  let h = !!(e_dragging && td(e, t));
  if (e.someProp("handleDrop", (n) => n(e, t, a || Ji.empty, h))) {
    return void t.preventDefault();
  }
  if (!a) {
    return;
  }
  t.preventDefault();
  let c = a ? Um(e.state.doc, l.pos, a) : l.pos;
  if (c == null) {
    c = l.pos;
  }
  let d = e.state.tr;
  if (h) {
    let { node } = e_dragging;
    if (node) {
      node.replace(d);
    } else {
      d.deleteSelection();
    }
  }
  let p = d.mapping.map(c);
  let f = a.openStart == 0 && a.openEnd == 0 && a.content.childCount == 1;
  let d_doc = d.doc;
  if (f) {
    d.replaceRangeWith(p, p, a.content.firstChild);
  } else {
    d.replaceRange(p, p, a);
  }
  if (d.doc.eq(d_doc)) {
    return;
  }
  let m = d.doc.resolve(p);
  if (
    f &&
    nh.isSelectable(a.content.firstChild) &&
    m.nodeAfter &&
    m.nodeAfter.sameMarkup(a.content.firstChild)
  ) {
    d.setSelection(new nh(m));
  } else {
    let t = d.mapping.map(c);
    d.mapping.maps[d.mapping.maps.length - 1].forEach((e, n, r, i) => (t = i));
    d.setSelection(eT(e, m, d.doc.resolve(t)));
  }
  e.focus();
  e.dispatch(d.setMeta("uiEvent", "drop"));
}),
(eQ.focus = (e) => {
  e.input.lastFocus = Date.now();
  if (!e.focused) {
    e.domObserver.stop();
    e.dom.classList.add("ProseMirror-focused");
    e.domObserver.start();
    e.focused = true;
    setTimeout(() => {
      if (
        e.docView &&
        e.hasFocus() &&
        !e.domObserver.currentSelection.eq(e.domSelectionRange())
      ) {
        ex(e);
      }
    }, 20);
  }
}),
(eQ.blur = (e, t) => {
  if (e.focused) {
    e.domObserver.stop();
    e.dom.classList.remove("ProseMirror-focused");
    e.domObserver.start();
    if (t.relatedTarget && e.dom.contains(t.relatedTarget)) {
      e.domObserver.currentSelection.clear();
    }
    e.focused = false;
  }
}),
(eQ.beforeinput = (e, t) => {
  if (T && z && t.inputType == "deleteContentBackward") {
    e.domObserver.flushSoon();
    let { domChangeCount } = e.input;
    setTimeout(() => {
      if (
        e.input.domChangeCount != domChangeCount ||
        (e.dom.blur(),
        e.focus(),
        e.someProp("handleKeyDown", (t) => t(e, y(8, "Backspace"))))
      ) {
        return;
      }
      let { $cursor } = e.state.selection;
      if ($cursor && $cursor.pos > 0) {
        e.dispatch(
          e.state.tr.delete($cursor.pos - 1, $cursor.pos).scrollIntoView(),
        );
      }
    }, 50);
  }
}),
e0)) {
  eQ[e] = e0[e];
}
function tp(e, t) {
  if (e == t) {
    return true;
  }
  for (let n in e) {
    if (e[n] !== t[n]) {
      return false;
    }
  }
  for (let n in t) {
    if (!(n in e)) {
      return false;
    }
  }
  return true;
}
class tf {
  constructor(e, t) {
    this.toDOM = e;
    this.spec = t || tw;
    this.side = this.spec.side || 0;
  }
  map(e, t, n, r) {
    let { pos, deleted } = e.mapResult(t.from + r, this.side < 0 ? -1 : 1);
    if (deleted) {
      return null;
    }
    return new NZ(pos - n, pos - n, this);
  }
  valid() {
    return true;
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof tf &&
        ((this.spec.key && this.spec.key == e.spec.key) ||
          (this.toDOM == e.toDOM && tp(this.spec, e.spec))))
    );
  }
  destroy(e) {
    if (this.spec.destroy) {
      this.spec.destroy(e);
    }
  }
}
class tu {
  constructor(e, t) {
    this.attrs = e;
    this.spec = t || tw;
  }
  map(e, t, n, r) {
    let i = e.map(t.from + r, this.spec.inclusiveStart ? -1 : 1) - n;
    let o = e.map(t.to + r, this.spec.inclusiveEnd ? 1 : -1) - n;
    if (i >= o) {
      return null;
    }
    return new NZ(i, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof tu && tp(this.attrs, e.attrs) && tp(this.spec, e.spec))
    );
  }
  static is(e) {
    return e.type instanceof tu;
  }
  destroy() {}
}
class tm {
  constructor(e, t) {
    this.attrs = e;
    this.spec = t || tw;
  }
  map(e, t, n, r) {
    let i = e.mapResult(t.from + r, 1);
    if (i.deleted) {
      return null;
    }
    let o = e.mapResult(t.to + r, -1);
    if (o.deleted || o.pos <= i.pos) {
      return null;
    }
    return new NZ(i.pos - n, o.pos - n, this);
  }
  valid(e, t) {
    let { index, offset } = e.content.findIndex(t.from);
    let i;
    return (
      offset == t.from &&
      !(i = e.child(index)).isText &&
      offset + i.nodeSize == t.to
    );
  }
  eq(e) {
    return (
      this == e ||
      (e instanceof tm && tp(this.attrs, e.attrs) && tp(this.spec, e.spec))
    );
  }
  destroy() {}
}
export class NZ {
  constructor(e, t, n) {
    this.from = e;
    this.to = t;
    this.type = n;
  }
  copy(e, t) {
    return new NZ(e, t, this.type);
  }
  eq(e, t = 0) {
    return (
      this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to
    );
  }
  map(e, t, n) {
    return this.type.map(e, this, t, n);
  }
  static widget(e, t, n) {
    return new NZ(e, e, new tf(t, n));
  }
  static inline(e, t, n, r) {
    return new NZ(e, t, new tu(n, r));
  }
  static node(e, t, n, r) {
    return new NZ(e, t, new tm(n, r));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof tu;
  }
  get widget() {
    return this.type instanceof tf;
  }
}
let ty = [];
let tw = {};
export class zF {
  constructor(e, t) {
    this.local = e.length ? e : ty;
    this.children = t.length ? t : ty;
  }
  static create(e, t) {
    if (t.length) {
      return tN(t, e, 0, tw);
    }
    return zF_empty;
  }
  find(e, t, n) {
    let r = [];
    this.findInner(e == null ? 0 : e, t == null ? 1000000000 : t, r, 0, n);
    return r;
  }
  findInner(e, t, n, r, i) {
    for (let o = 0; o < this.local.length; o++) {
      let s = this.local[o];
      if (s.from <= t && s.to >= e && (!i || i(s.spec))) {
        n.push(s.copy(s.from + r, s.to + r));
      }
    }
    for (let o = 0; o < this.children.length; o += 3) {
      if (this.children[o] < t && this.children[o + 1] > e) {
        let s = this.children[o] + 1;
        this.children[o + 2].findInner(e - s, t - s, n, r + s, i);
      }
    }
  }
  map(e, t, n) {
    if (this == zF_empty || e.maps.length == 0) {
      return this;
    }
    return this.mapInner(e, t, 0, 0, n || tw);
  }
  mapInner(e, t, n, r, i) {
    let o;
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s].map(e, n, r);
      if (l && l.type.valid(t, l)) {
        (o || (o = [])).push(l);
      } else if (i.onRemove) {
        i.onRemove(this.local[s].spec);
      }
    }
    if (this.children.length) {
      return ((e, t, n, r, i, o, s) => {
        let l = e.slice();
        for (let e = 0, t = o; e < n.maps.length; e++) {
          let r = 0;
          n.maps[e].forEach((e, n, i, o) => {
            let s = o - i - (n - e);
            for (let i = 0; i < l.length; i += 3) {
              let o = l[i + 1];
              if (o < 0 || e > o + t - r) {
                continue;
              }
              let a = l[i] + t - r;
              if (n >= a) {
                l[i + 1] = e <= a ? -2 : -1;
              } else if (e >= t && s) {
                l[i] += s;
                l[i + 1] += s;
              }
            }
            r += s;
          });
          t = n.maps[e].map(t, -1);
        }
        let a = false;
        for (let t = 0; t < l.length; t += 3) {
          if (l[t + 1] < 0) {
            if (l[t + 1] == -2) {
              a = true;
              l[t + 1] = -1;
              continue;
            }
            let h = n.map(e[t] + o);
            let c = h - i;
            if (c < 0 || c >= r.content.size) {
              a = true;
              continue;
            }
            let d = n.map(e[t + 1] + o, -1) - i;
            let { index, offset } = r.content.findIndex(c);
            let u = r.maybeChild(index);
            if (u && offset == c && offset + u.nodeSize == d) {
              let r = l[t + 2].mapInner(n, u, h + 1, e[t] + o + 1, s);
              if (r != zF_empty) {
                l[t] = c;
                l[t + 1] = d;
                l[t + 2] = r;
              } else {
                l[t + 1] = -2;
                a = true;
              }
            } else {
              a = true;
            }
          }
        }
        if (a) {
          let a = tN(
            ((e, t, n, r, i, o, s) => {
              for (let l = 0; l < e.length; l += 3) {
                if (e[l + 1] == -1) {
                  (function e(t, o) {
                    for (let e = 0; e < t.local.length; e++) {
                      let l = t.local[e].map(r, i, o);
                      if (l) {
                        n.push(l);
                      } else if (s.onRemove) {
                        s.onRemove(t.local[e].spec);
                      }
                    }
                    for (let n = 0; n < t.children.length; n += 3) {
                      e(t.children[n + 2], t.children[n] + o + 1);
                    }
                  })(e[l + 2], t[l] + o + 1);
                }
              }
              return n;
            })(l, e, t, n, i, o, s),
            r,
            0,
            s,
          );
          t = a.local;
          for (let e = 0; e < l.length; e += 3) {
            if (l[e + 1] < 0) {
              l.splice(e, 3);
              e -= 3;
            }
          }
          for (let e = 0, t = 0; e < a.children.length; e += 3) {
            let child = a.children[e];
            while (t < l.length && l[t] < child) {
              t += 3;
            }
            l.splice(t, 0, a.children[e], a.children[e + 1], a.children[e + 2]);
          }
        }
        return new zF(t.sort(tM), l);
      })(this.children, o || [], e, t, n, r, i);
    }
    if (o) {
      return new zF(o.sort(tM), ty);
    }
    return zF_empty;
  }
  add(e, t) {
    if (t.length) {
      if (this == zF_empty) {
        return zF.create(e, t);
      }
      return this.addInner(e, t, 0);
    }
    return this;
  }
  addInner(e, t, n) {
    let r;
    let i = 0;
    e.forEach((e, o) => {
      let s = o + n;
      let l;
      if ((l = tS(t, e, s))) {
        for (r || (r = this.children.slice()); i < r.length && r[i] < o;) {
          i += 3;
        }
        if (r[i] == o) {
          r[i + 2] = r[i + 2].addInner(e, l, s + 1);
        } else {
          r.splice(i, 0, o, o + e.nodeSize, tN(l, e, s + 1, tw));
        }
        i += 3;
      }
    });
    let o = tv(i ? tC(t) : t, -n);
    for (let t = 0; t < o.length; t++) {
      if (!o[t].type.valid(e, o[t])) {
        o.splice(t--, 1);
      }
    }
    return new zF(
      o.length ? this.local.concat(o).sort(tM) : this.local,
      r || this.children,
    );
  }
  remove(e) {
    if (e.length == 0 || this == zF_empty) {
      return this;
    }
    return this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let children = this.children;
    let local = this.local;
    for (let r = 0; r < children.length; r += 3) {
      let i;
      let o = children[r] + t;
      let s = children[r + 1] + t;
      for (let t = 0, n; t < e.length; t++) {
        if ((n = e[t]) && n.from > o && n.to < s) {
          e[t] = null;
          (i || (i = [])).push(n);
        }
      }
      if (!i) {
        continue;
      }
      if (children == this.children) {
        children = this.children.slice();
      }
      let l = children[r + 2].removeInner(i, o + 1);
      if (l != zF_empty) {
        children[r + 2] = l;
      } else {
        children.splice(r, 3);
        r -= 3;
      }
    }
    if (local.length) {
      for (let n = 0, i; n < e.length; n++) {
        if ((i = e[n])) {
          for (let e = 0; e < local.length; e++) {
            if (local[e].eq(i, t)) {
              if (local == this.local) {
                local = this.local.slice();
              }
              local.splice(e--, 1);
            }
          }
        }
      }
    }
    if (children == this.children && local == this.local) {
      return this;
    }
    if (local.length || children.length) {
      return new zF(local, children);
    }
    return zF_empty;
  }
  forChild(e, t) {
    let n;
    let r;
    if (this == zF_empty) {
      return this;
    }
    if (t.isLeaf) {
      return zF.empty;
    }
    for (let t = 0; t < this.children.length; t += 3) {
      if (this.children[t] >= e) {
        if (this.children[t] == e) {
          n = this.children[t + 2];
        }
        break;
      }
    }
    let i = e + 1;
    let o = i + t.content.size;
    for (let e = 0; e < this.local.length; e++) {
      let t = this.local[e];
      if (t.from < o && t.to > i && t.type instanceof tu) {
        let e = Math.max(i, t.from) - i;
        let n = Math.min(o, t.to) - i;
        if (e < n) {
          (r || (r = [])).push(t.copy(e, n));
        }
      }
    }
    if (r) {
      let e = new zF(r.sort(tM), ty);
      if (n) {
        return new tx([e, n]);
      }
      return e;
    }
    return n || zF_empty;
  }
  eq(e) {
    if (this == e) {
      return true;
    }
    if (
      !(e instanceof zF) ||
      this.local.length != e.local.length ||
      this.children.length != e.children.length
    ) {
      return false;
    }
    for (let t = 0; t < this.local.length; t++) {
      if (!this.local[t].eq(e.local[t])) {
        return false;
      }
    }
    for (let t = 0; t < this.children.length; t += 3) {
      if (
        this.children[t] != e.children[t] ||
        this.children[t + 1] != e.children[t + 1] ||
        !this.children[t + 2].eq(e.children[t + 2])
      ) {
        return false;
      }
    }
    return true;
  }
  locals(e) {
    return tO(this.localsInner(e));
  }
  localsInner(e) {
    if (this == zF_empty) {
      return ty;
    }
    if (e.inlineContent || !this.local.some(tu.is)) {
      return this.local;
    }
    let t = [];
    for (let e = 0; e < this.local.length; e++) {
      if (!(this.local[e].type instanceof tu)) {
        t.push(this.local[e]);
      }
    }
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
zF.empty = new zF([], []);
zF.removeOverlap = tO;
let zF_empty = zF.empty;
class tx {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    let n = this.members.map((n) => n.map(e, t, tw));
    return tx.from(n);
  }
  forChild(e, t) {
    if (t.isLeaf) {
      return zF.empty;
    }
    let n = [];
    for (let r = 0; r < this.members.length; r++) {
      let i = this.members[r].forChild(e, t);
      if (i != zF_empty) {
        if (i instanceof tx) {
          n = n.concat(i.members);
        } else {
          n.push(i);
        }
      }
    }
    return tx.from(n);
  }
  eq(e) {
    if (!(e instanceof tx) || e.members.length != this.members.length) {
      return false;
    }
    for (let t = 0; t < this.members.length; t++) {
      if (!this.members[t].eq(e.members[t])) {
        return false;
      }
    }
    return true;
  }
  locals(e) {
    let t;
    let n = true;
    for (let r = 0; r < this.members.length; r++) {
      let i = this.members[r].localsInner(e);
      if (i.length) {
        if (t) {
          if (n) {
            t = t.slice();
            n = false;
          }
          for (let e = 0; e < i.length; e++) {
            t.push(i[e]);
          }
        } else {
          t = i;
        }
      }
    }
    if (t) {
      return tO(n ? t : t.sort(tM));
    }
    return ty;
  }
  static from(e) {
    switch (e.length) {
      case 0:
        return zF_empty;
      case 1:
        return e[0];
      default:
        return new tx(
          e.every((e) => e instanceof zF)
            ? e
            : e.reduce(
                (acc, item) =>
                  acc.concat(item instanceof zF ? item : item.members),
                [],
              ),
        );
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++) {
      this.members[t].forEachSet(e);
    }
  }
}
function tv(e, t) {
  if (!t || !e.length) {
    return e;
  }
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    n.push(new NZ(i.from + t, i.to + t, i.type));
  }
  return n;
}
function tS(e, t, n) {
  if (t.isLeaf) {
    return null;
  }
  let r = n + t.nodeSize;
  let i = null;
  for (let t = 0, o; t < e.length; t++) {
    if ((o = e[t]) && o.from > n && o.to < r) {
      (i || (i = [])).push(o);
      e[t] = null;
    }
  }
  return i;
}
function tC(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    if (e[n] != null) {
      t.push(e[n]);
    }
  }
  return t;
}
function tN(e, t, n, r) {
  let i = [];
  let o = false;
  t.forEach((t, s) => {
    let l = tS(e, t, s + n);
    if (l) {
      o = true;
      let e = tN(l, t, n + s + 1, r);
      if (e != zF_empty) {
        i.push(s, s + t.nodeSize, e);
      }
    }
  });
  let s = tv(o ? tC(e) : e, -n).sort(tM);
  for (let e = 0; e < s.length; e++) {
    if (!s[e].type.valid(t, s[e])) {
      if (r.onRemove) {
        r.onRemove(s[e].spec);
      }
      s.splice(e--, 1);
    }
  }
  if (s.length || i.length) {
    return new zF(s, i);
  }
  return zF_empty;
}
function tM(e, t) {
  return e.from - t.from || e.to - t.to;
}
function tO(e) {
  let t = e;
  for (let n = 0; n < t.length - 1; n++) {
    let r = t[n];
    if (r.from != r.to) {
      for (let i = n + 1; i < t.length; i++) {
        let o = t[i];
        if (o.from == r.from) {
          if (o.to != r.to) {
            if (t == e) {
              t = e.slice();
            }
            t[i] = o.copy(o.from, r.to);
            tT(t, i + 1, o.copy(r.to, o.to));
          }
          continue;
        }
        if (o.from < r.to) {
          if (t == e) {
            t = e.slice();
          }
          t[n] = r.copy(r.from, o.from);
          tT(t, i, r.copy(o.from, r.to));
        }
        break;
      }
    }
  }
  return t;
}
function tT(e, t, n) {
  while (t < e.length && tM(n, e[t]) > 0) {
    t++;
  }
  e.splice(t, 0, n);
}
function tD(e) {
  let t = [];
  e.someProp("decorations", (n) => {
    let r = n(e.state);
    if (r && r != zF_empty) {
      t.push(r);
    }
  });
  if (e.cursorWrapper) {
    t.push(zF.create(e.state.doc, [e.cursorWrapper.deco]));
  }
  return tx.from(t);
}
let tE = {
  childList: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  attributeOldValue: true,
  subtree: true,
};
let tA = C && N <= 11;
class tR {
  constructor() {
    this.anchorNode = null;
    this.anchorOffset = 0;
    this.focusNode = null;
    this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode;
    this.anchorOffset = e.anchorOffset;
    this.focusNode = e.focusNode;
    this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return (
      e.anchorNode == this.anchorNode &&
      e.anchorOffset == this.anchorOffset &&
      e.focusNode == this.focusNode &&
      e.focusOffset == this.focusOffset
    );
  }
}
class tI {
  constructor(e, t) {
    this.view = e;
    this.handleDOMChange = t;
    this.queue = [];
    this.flushingSoon = -1;
    this.observer = null;
    this.currentSelection = new tR();
    this.onCharData = null;
    this.suppressingSelectionUpdates = false;
    this.lastChangedTextNode = null;
    this.observer =
      window.MutationObserver &&
      new window.MutationObserver((e) => {
        for (let t = 0; t < e.length; t++) {
          this.queue.push(e[t]);
        }
        if (
          C &&
          N <= 11 &&
          e.some(
            (e) =>
              (e.type == "childList" && e.removedNodes.length) ||
              (e.type == "characterData" &&
                e.oldValue.length > e.target.nodeValue.length),
          )
        ) {
          this.flushSoon();
        } else {
          this.flush();
        }
      });
    if (tA) {
      this.onCharData = (e) => {
        this.queue.push({
          target: e.target,
          type: "characterData",
          oldValue: e.prevValue,
        });
        this.flushSoon();
      };
    }
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    if (this.flushingSoon < 0) {
      this.flushingSoon = window.setTimeout(() => {
        this.flushingSoon = -1;
        this.flush();
      }, 20);
    }
  }
  forceFlush() {
    if (this.flushingSoon > -1) {
      window.clearTimeout(this.flushingSoon);
      this.flushingSoon = -1;
      this.flush();
    }
  }
  start() {
    if (this.observer) {
      this.observer.takeRecords();
      this.observer.observe(this.view.dom, tE);
    }
    if (this.onCharData) {
      this.view.dom.addEventListener(
        "DOMCharacterDataModified",
        this.onCharData,
      );
    }
    this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++) {
          this.queue.push(e[t]);
        }
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    if (this.onCharData) {
      this.view.dom.removeEventListener(
        "DOMCharacterDataModified",
        this.onCharData,
      );
    }
    this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener(
      "selectionchange",
      this.onSelectionChange,
    );
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener(
      "selectionchange",
      this.onSelectionChange,
    );
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = true;
    setTimeout(() => (this.suppressingSelectionUpdates = false), 50);
  }
  onSelectionChange() {
    if (eD(this.view)) {
      if (this.suppressingSelectionUpdates) {
        return ex(this.view);
      }
      if (C && N <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (
          e.focusNode &&
          d(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset)
        ) {
          return this.flushSoon();
        }
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode) {
      return true;
    }
    let t = new Set();
    let n;
    for (let n = e.focusNode; n; n = l(n)) {
      t.add(n);
    }
    for (let r = e.anchorNode; r; r = l(r)) {
      if (t.has(r)) {
        n = r;
        break;
      }
    }
    let r = n && this.view.docView.nearestDesc(n);
    if (
      r &&
      r.ignoreMutation({
        type: "selection",
        target: n.nodeType == 3 ? n.parentNode : n,
      })
    ) {
      this.setCurSelection();
      return true;
    }
  }
  pendingRecords() {
    if (this.observer) {
      for (let e of this.observer.takeRecords()) {
        this.queue.push(e);
      }
    }
    return this.queue;
  }
  flush() {
    let e;
    let { view } = this;
    if (!view.docView || this.flushingSoon > -1) {
      return;
    }
    let n = this.pendingRecords();
    if (n.length) {
      this.queue = [];
    }
    let i = view.domSelectionRange();
    let o =
      !this.suppressingSelectionUpdates &&
      !this.currentSelection.eq(i) &&
      eD(view) &&
      !this.ignoreSelectionChange(i);
    let s = -1;
    let l = -1;
    let a = false;
    let h = [];
    if (view.editable) {
      for (let e = 0; e < n.length; e++) {
        let t = this.registerMutation(n[e], h);
        if (t) {
          s = s < 0 ? t.from : Math.min(t.from, s);
          l = l < 0 ? t.to : Math.max(t.to, l);
          if (t.typeOver) {
            a = true;
          }
        }
      }
    }
    if (M && h.length) {
      let e = h.filter((e) => e.nodeName == "BR");
      if (e.length == 2) {
        let [t, n] = e;
        if (t.parentNode && t.parentNode.parentNode == n.parentNode) {
          n.remove();
        } else {
          t.remove();
        }
      } else {
        let { focusNode } = this.currentSelection;
        for (let r of e) {
          let e = r.parentNode;
          if (
            e &&
            e.nodeName == "LI" &&
            (!focusNode ||
              ((e, t) => {
                for (let n = t.parentNode; n && n != e.dom; n = n.parentNode) {
                  let t = e.docView.nearestDesc(n, true);
                  if (t && t.node.isBlock) {
                    return n;
                  }
                }
                return null;
              })(view, focusNode) != e)
          ) {
            r.remove();
          }
        }
      }
    }
    let c = null;
    if (
      s < 0 &&
      o &&
      view.input.lastFocus > Date.now() - 200 &&
      Math.max(view.input.lastTouch, view.input.lastClick.time) <
        Date.now() - 300 &&
      g(i) &&
      (c = ek(view)) &&
      c.eq(LN.near(view.state.doc.resolve(0), 1))
    ) {
      view.input.lastFocus = 0;
      ex(view);
      this.currentSelection.set(i);
      view.scrollToSelection();
    } else if (s > -1 || o) {
      if (s > -1) {
        view.docView.markDirty(s, l);
        e = view;
        if (
          !tz.has(e) &&
          (tz.set(e, null),
          ["normal", "nowrap", "pre-line"].indexOf(
            getComputedStyle(e.dom).whiteSpace,
          ) !== -1)
        ) {
          e.requiresGeckoHackNode = M;
          if (!tF) {
            console.warn(
              "ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.",
            );
            tF = true;
          }
        }
      }
      this.handleDOMChange(s, l, a, h);
      if (view.docView && view.docView.dirty) {
        view.updateState(view.state);
      } else if (!this.currentSelection.eq(i)) {
        ex(view);
      }
      this.currentSelection.set(i);
    }
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1) {
      return null;
    }
    let n = this.view.docView.nearestDesc(e.target);
    if (
      (e.type == "attributes" &&
        (n == this.view.docView ||
          e.attributeName == "contenteditable" ||
          (e.attributeName == "style" &&
            !e.oldValue &&
            !e.target.getAttribute("style")))) ||
      !n ||
      n.ignoreMutation(e)
    ) {
      return null;
    }
    if (e.type == "childList") {
      for (let n = 0; n < e.addedNodes.length; n++) {
        let addedNode = e.addedNodes[n];
        t.push(addedNode);
        if (addedNode.nodeType == 3) {
          this.lastChangedTextNode = addedNode;
        }
      }
      if (
        n.contentDOM &&
        n.contentDOM != n.dom &&
        !n.contentDOM.contains(e.target)
      ) {
        return {
          from: n.posBefore,
          to: n.posAfter,
        };
      }
      let r = e.previousSibling;
      let i = e.nextSibling;
      if (C && N <= 11 && e.addedNodes.length) {
        for (let t = 0; t < e.addedNodes.length; t++) {
          let { previousSibling, nextSibling } = e.addedNodes[t];
          if (
            !previousSibling ||
            Array.prototype.indexOf.call(e.addedNodes, previousSibling) < 0
          ) {
            r = previousSibling;
          }
          if (
            !nextSibling ||
            Array.prototype.indexOf.call(e.addedNodes, nextSibling) < 0
          ) {
            i = nextSibling;
          }
        }
      }
      let o = r && r.parentNode == e.target ? s(r) + 1 : 0;
      let from = n.localPosFromDOM(e.target, o, -1);
      let a = i && i.parentNode == e.target ? s(i) : e.target.childNodes.length;
      return {
        from,
        to: n.localPosFromDOM(e.target, a, 1),
      };
    }
    if (e.type == "attributes") {
      return {
        from: n.posAtStart - n.border,
        to: n.posAtEnd + n.border,
      };
    }
    this.lastChangedTextNode = e.target;
    return {
      from: n.posAtStart,
      to: n.posAtEnd,
      typeOver: e.target.nodeValue == e.oldValue,
    };
  }
}
let tz = new WeakMap();
let tF = false;
function tP(e, t) {
  let t_startContainer = t.startContainer;
  let t_startOffset = t.startOffset;
  let t_endContainer = t.endContainer;
  let t_endOffset = t.endOffset;
  let s = e.domAtPos(e.state.selection.anchor);
  if (d(s.node, s.offset, t_endContainer, t_endOffset)) {
    [t_startContainer, t_startOffset, t_endContainer, t_endOffset] = [
      t_endContainer,
      t_endOffset,
      t_startContainer,
      t_startOffset,
    ];
  }
  return {
    anchorNode: t_startContainer,
    anchorOffset: t_startOffset,
    focusNode: t_endContainer,
    focusOffset: t_endOffset,
  };
}
function ruleFromNode(e) {
  let e_pmViewDesc = e.pmViewDesc;
  if (e_pmViewDesc) {
    return e_pmViewDesc.parseRule();
  }
  if (e.nodeName == "BR" && e.parentNode) {
    if (E && /^(ul|ol)$/i.test(e.parentNode.nodeName)) {
      let skip = document.createElement("div");
      skip.appendChild(document.createElement("li"));
      return {
        skip,
      };
    } else if (
      e.parentNode.lastChild == e ||
      (E && /^(tr|table)$/i.test(e.parentNode.nodeName))
    ) {
      return {
        ignore: true,
      };
    }
  } else if (e.nodeName == "IMG" && e.getAttribute("mark-placeholder")) {
    return {
      ignore: true,
    };
  }
  return null;
}
let tV =
  /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function t$(e, doc, sel) {
  if (Math.max(sel.anchor, sel.head) > doc.content.size) {
    return null;
  }
  return eT(e, doc.resolve(sel.anchor), doc.resolve(sel.head));
}
function tJ(e, t, n) {
  let e_depth = e.depth;
  let i = t ? e.end() : e.pos;
  while (
    e_depth > 0 &&
    (t || e.indexAfter(e_depth) == e.node(e_depth).childCount)
  ) {
    e_depth--;
    i++;
    t = false;
  }
  if (n) {
    let t = e.node(e_depth).maybeChild(e.indexAfter(e_depth));
    while (t && !t.isLeaf) {
      t = t.firstChild;
      i++;
    }
  }
  return i;
}
function tL(e) {
  if (e.length != 2) {
    return false;
  }
  let t = e.charCodeAt(0);
  let n = e.charCodeAt(1);
  return t >= 56320 && t <= 57343 && n >= 55296 && n <= 56319;
}
export class Lz {
  constructor(e, t) {
    this._root = null;
    this.focused = false;
    this.trackWrites = null;
    this.mounted = false;
    this.markCursor = null;
    this.cursorWrapper = null;
    this.lastSelectedViewDesc = undefined;
    this.input = new e2();
    this.prevDirectPlugins = [];
    this.pluginViews = [];
    this.requiresGeckoHackNode = false;
    this.dragging = null;
    this._props = t;
    this.state = t.state;
    this.directPlugins = t.plugins || [];
    this.directPlugins.forEach(tU);
    this.dispatch = this.dispatch.bind(this);
    this.dom = (e && e.mount) || document.createElement("div");
    if (e) {
      if (e.appendChild) {
        e.appendChild(this.dom);
      } else if (typeof e === "function") {
        e(this.dom);
      } else if (e.mount) {
        this.mounted = true;
      }
    }
    this.editable = tj(this);
    tq(this);
    this.nodeViews = t_(this);
    this.docView = eo(this.state.doc, tW(this), tD(this), this.dom, this);
    this.domObserver = new tI(this, (e, t, n, o) =>
      ((e, t, n, o, s) => {
        let l;
        let a;
        let h;
        let c;
        let d =
          e.input.compositionPendingChanges ||
          (e.composing ? e.input.compositionID : 0);
        e.input.compositionPendingChanges = 0;
        if (t < 0) {
          let t =
            e.input.lastSelectionTime > Date.now() - 50
              ? e.input.lastSelectionOrigin
              : null;
          let n = ek(e, t);
          if (n && !e.state.selection.eq(n)) {
            if (
              T &&
              z &&
              e.input.lastKeyCode === 13 &&
              Date.now() - 100 < e.input.lastKeyCodeTime &&
              e.someProp("handleKeyDown", (t) => t(e, y(13, "Enter")))
            ) {
              return;
            }
            let r = e.state.tr.setSelection(n);
            if (t == "pointer") {
              r.setMeta("pointer", true);
            } else if (t == "key") {
              r.scrollIntoView();
            }
            if (d) {
              r.setMeta("composition", d);
            }
            e.dispatch(r);
          }
          return;
        }
        let p = e.state.doc.resolve(t);
        let f = p.sharedDepth(n);
        t = p.before(f + 1);
        n = e.state.doc.resolve(n).after(f + 1);
        let selection = e.state.selection;
        let m = ((e, t, n) => {
          let findPositions;
          let { node, fromOffset, toOffset, from, to } = e.docView.parseRange(
            t,
            n,
          );
          let c = e.domSelectionRange();
          let c_anchorNode = c.anchorNode;
          if (
            c_anchorNode &&
            e.dom.contains(
              c_anchorNode.nodeType == 1
                ? c_anchorNode
                : c_anchorNode.parentNode,
            )
          ) {
            findPositions = [
              {
                node: c_anchorNode,
                offset: c.anchorOffset,
              },
            ];
            if (!g(c)) {
              findPositions.push({
                node: c.focusNode,
                offset: c.focusOffset,
              });
            }
          }
          if (T && e.input.lastKeyCode === 8) {
            for (let e = toOffset; e > fromOffset; e--) {
              let t = node.childNodes[e - 1];
              let n = t.pmViewDesc;
              if (t.nodeName == "BR" && !n) {
                toOffset = e;
                break;
              }
              if (!n || n.size) {
                break;
              }
            }
          }
          let doc = e.state.doc;
          let f = e.someProp("domParser") || S4.fromSchema(e.state.schema);
          let u = doc.resolve(from);
          let sel = null;
          let doc_1 = f.parse(node, {
            topNode: u.parent,
            topMatch: u.parent.contentMatchAt(u.index()),
            topOpen: true,
            from: fromOffset,
            to: toOffset,
            preserveWhitespace: u.parent.type.whitespace != "pre" || "full",
            findPositions,
            ruleFromNode,
            context: u,
          });
          if (findPositions && findPositions[0].pos != null) {
            let e = findPositions[0].pos;
            let t = findPositions[1] && findPositions[1].pos;
            if (t == null) {
              t = e;
            }
            sel = {
              anchor: e + from,
              head: t + from,
            };
          }
          return {
            doc: doc_1,
            sel,
            from,
            to,
          };
        })(e, t, n);
        let doc = e.state.doc;
        let k = doc.slice(m.from, m.to);
        if (
          e.input.lastKeyCode === 8 &&
          Date.now() - 100 < e.input.lastKeyCodeTime
        ) {
          l = e.state.selection.to;
          a = "end";
        } else {
          l = e.state.selection.from;
          a = "start";
        }
        e.input.lastKeyCode = null;
        let b = ((e, t, n, r, i) => {
          let start = e.findDiffStart(t, n);
          if (start == null) {
            return null;
          }
          let { a, b } = e.findDiffEnd(t, n + e.size, n + t.size);
          if (i == "end") {
            let e = Math.max(0, start - Math.min(a, b));
            r -= a + e - start;
          }
          if (a < start && e.size < t.size) {
            let e = r <= start && r >= a ? start - r : 0;
            if (
              (start -= e) &&
              start < t.size &&
              tL(t.textBetween(start - 1, start + 1))
            ) {
              start += e ? 1 : -1;
            }
            b = start + (b - a);
            a = start;
          } else if (b < start) {
            let t = r <= start && r >= b ? start - r : 0;
            if (
              (start -= t) &&
              start < e.size &&
              tL(e.textBetween(start - 1, start + 1))
            ) {
              start += t ? 1 : -1;
            }
            a = start + (a - b);
            b = start;
          }
          return {
            start,
            endA: a,
            endB: b,
          };
        })(k.content, m.doc.content, m.from, l, a);
        if (b) {
          e.input.domChangeCount++;
        }
        if (
          ((A && e.input.lastIOSEnter > Date.now() - 225) || z) &&
          s.some((e) => e.nodeType == 1 && !tV.test(e.nodeName)) &&
          (!b || b.endA >= b.endB) &&
          e.someProp("handleKeyDown", (t) => t(e, y(13, "Enter")))
        ) {
          e.input.lastIOSEnter = 0;
          return;
        }
        if (!b) {
          if (
            o &&
            selection instanceof U3 &&
            !selection.empty &&
            selection.$head.sameParent(selection.$anchor) &&
            !e.composing &&
            !(m.sel && m.sel.anchor != m.sel.head)
          ) {
            b = {
              start: selection.from,
              endA: selection.to,
              endB: selection.to,
            };
          } else {
            if (m.sel) {
              let t = t$(e, e.state.doc, m.sel);
              if (t && !t.eq(e.state.selection)) {
                let n = e.state.tr.setSelection(t);
                if (d) {
                  n.setMeta("composition", d);
                }
                e.dispatch(n);
              }
            }
            return;
          }
        }
        if (
          e.state.selection.from < e.state.selection.to &&
          b.start == b.endB &&
          e.state.selection instanceof U3
        ) {
          if (
            b.start > e.state.selection.from &&
            b.start <= e.state.selection.from + 2 &&
            e.state.selection.from >= m.from
          ) {
            b.start = e.state.selection.from;
          } else if (
            b.endA < e.state.selection.to &&
            b.endA >= e.state.selection.to - 2 &&
            e.state.selection.to <= m.to
          ) {
            b.endB += e.state.selection.to - b.endA;
            b.endA = e.state.selection.to;
          }
        }
        if (
          C &&
          N <= 11 &&
          b.endB == b.start + 1 &&
          b.endA == b.start &&
          b.start > m.from &&
          m.doc.textBetween(b.start - m.from - 1, b.start - m.from + 1) ==
            " \xa0"
        ) {
          b.start--;
          b.endA--;
          b.endB--;
        }
        let x = m.doc.resolveNoCache(b.start - m.from);
        let v = m.doc.resolveNoCache(b.endB - m.from);
        let S = doc.resolve(b.start);
        let M = x.sameParent(v) && x.parent.inlineContent && S.end() >= b.endA;
        if (
          ((A &&
            e.input.lastIOSEnter > Date.now() - 225 &&
            (!M || s.some((e) => e.nodeName == "DIV" || e.nodeName == "P"))) ||
            (!M &&
              x.pos < m.doc.content.size &&
              (!x.sameParent(v) || !x.parent.inlineContent) &&
              !/\S/.test(m.doc.textBetween(x.pos, v.pos, "", "")) &&
              (h = LN.findFrom(m.doc.resolve(x.pos + 1), 1, true)) &&
              h.head > x.pos)) &&
          e.someProp("handleKeyDown", (t) => t(e, y(13, "Enter")))
        ) {
          e.input.lastIOSEnter = 0;
          return;
        }
        if (
          e.state.selection.anchor > b.start &&
          ((e, t, n, r, i) => {
            if (n - t <= i.pos - r.pos || tJ(r, true, false) < i.pos) {
              return false;
            }
            let o = e.resolve(t);
            if (!r.parent.isTextblock) {
              let e = o.nodeAfter;
              return e != null && n == t + e.nodeSize;
            }
            if (
              o.parentOffset < o.parent.content.size ||
              !o.parent.isTextblock
            ) {
              return false;
            }
            let s = e.resolve(tJ(o, true, true));
            return (
              !(!s.parent.isTextblock || s.pos > n || tJ(s, true, false) < n) &&
              r.parent.content.cut(r.parentOffset).eq(s.parent.content)
            );
          })(doc, b.start, b.endA, x, v) &&
          e.someProp("handleKeyDown", (t) => t(e, y(8, "Backspace")))
        ) {
          if (z && T) {
            e.domObserver.suppressSelectionUpdates();
          }
          return;
        }
        if (T && b.endB == b.start) {
          e.input.lastChromeDelete = Date.now();
        }
        if (
          z &&
          !M &&
          x.start() != v.start() &&
          v.parentOffset == 0 &&
          x.depth == v.depth &&
          m.sel &&
          m.sel.anchor == m.sel.head &&
          m.sel.head == b.endA
        ) {
          b.endB -= 2;
          v = m.doc.resolveNoCache(b.endB - m.from);
          setTimeout(() => {
            e.someProp("handleKeyDown", function (t) {
              return t(e, y(13, "Enter"));
            });
          }, 20);
        }
        let b_start = b.start;
        let b_endA = b.endA;
        let E = (t) => {
          let n =
            t ||
            e.state.tr.replace(
              b_start,
              b_endA,
              m.doc.slice(b.start - m.from, b.endB - m.from),
            );
          if (m.sel) {
            let t = t$(e, n.doc, m.sel);
            if (
              t &&
              !(
                (T &&
                  e.composing &&
                  t.empty &&
                  (b.start != b.endB ||
                    e.input.lastChromeDelete < Date.now() - 100) &&
                  (t.head == b_start || t.head == n.mapping.map(b_endA) - 1)) ||
                (C && t.empty && t.head == b_start)
              )
            ) {
              n.setSelection(t);
            }
          }
          if (d) {
            n.setMeta("composition", d);
          }
          return n.scrollIntoView();
        };
        if (M) {
          if (x.pos == v.pos) {
            if (C && N <= 11 && x.parentOffset == 0) {
              e.domObserver.suppressSelectionUpdates();
              setTimeout(() => ex(e), 20);
            }
            let t = E(e.state.tr.delete(b_start, b_endA));
            let n = doc.resolve(b.start).marksAcross(doc.resolve(b.endA));
            if (n) {
              t.ensureMarks(n);
            }
            e.dispatch(t);
          } else if (
            b.endA == b.endB &&
            (c = ((e, t) => {
              let marks = e.firstChild.marks;
              let marks_1 = t.firstChild.marks;
              let o = marks;
              let s = marks_1;
              let l;
              let mark;
              let h;
              for (let e = 0; e < marks_1.length; e++) {
                o = marks_1[e].removeFromSet(o);
              }
              for (let e = 0; e < marks.length; e++) {
                s = marks[e].removeFromSet(s);
              }
              if (o.length == 1 && s.length == 0) {
                mark = o[0];
                l = "add";
                h = (e) => e.mark(mark.addToSet(e.marks));
              } else {
                if (o.length != 0 || s.length != 1) {
                  return null;
                }
                mark = s[0];
                l = "remove";
                h = (e) => e.mark(mark.removeFromSet(e.marks));
              }
              let c = [];
              for (let e = 0; e < t.childCount; e++) {
                c.push(h(t.child(e)));
              }
              if (FK.from(c).eq(e)) {
                return {
                  mark,
                  type: l,
                };
              }
            })(
              x.parent.content.cut(x.parentOffset, v.parentOffset),
              S.parent.content.cut(S.parentOffset, b.endA - S.start()),
            ))
          ) {
            let t = E(e.state.tr);
            if (c.type == "add") {
              t.addMark(b_start, b_endA, c.mark);
            } else {
              t.removeMark(b_start, b_endA, c.mark);
            }
            e.dispatch(t);
          } else if (
            x.parent.child(x.index()).isText &&
            x.index() == v.index() - !v.textOffset
          ) {
            let t = x.parent.textBetween(x.parentOffset, v.parentOffset);
            let n = () => E(e.state.tr.insertText(t, b_start, b_endA));
            if (
              !e.someProp("handleTextInput", (r) => r(e, b_start, b_endA, t, n))
            ) {
              e.dispatch(n());
            }
          }
        } else {
          e.dispatch(E());
        }
      })(this, e, t, n, o),
    );
    this.domObserver.start();
    var n = this;
    for (let e in eQ) {
      let t = eQ[e];
      n.dom.addEventListener(
        e,
        (n.input.eventHandlers[e] = (e) => {
          if (
            !(
              !((e, t) => {
                if (!t.bubbles) {
                  return true;
                }
                if (t.defaultPrevented) {
                  return false;
                }
                for (let n = t.target; n != e.dom; n = n.parentNode) {
                  if (
                    !n ||
                    n.nodeType == 11 ||
                    (n.pmViewDesc && n.pmViewDesc.stopEvent(t))
                  ) {
                    return false;
                  }
                }
                return true;
              })(n, e) ||
              e6(n, e) ||
              (!n.editable && e.type in e0)
            )
          ) {
            t(n, e);
          }
        }),
        e1[e]
          ? {
              passive: true,
            }
          : undefined,
      );
    }
    if (E) {
      n.dom.addEventListener("input", () => null);
    }
    e5(n);
    this.updatePluginViews();
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      for (let t in ((this._props = {}), e)) {
        this._props[t] = e[t];
      }
      this._props.state = this.state;
    }
    return this._props;
  }
  update(e) {
    if (e.handleDOMEvents != this._props.handleDOMEvents) {
      e5(this);
    }
    let _props = this._props;
    this._props = e;
    if (e.plugins) {
      e.plugins.forEach(tU);
      this.directPlugins = e.plugins;
    }
    this.updateStateInner(e.state, _props);
  }
  setProps(e) {
    let t = {};
    for (let e in this._props) {
      t[e] = this._props[e];
    }
    for (let n in ((t.state = this.state), e)) {
      t[n] = e[n];
    }
    this.update(t);
  }
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    let n;
    let r;
    let i;
    let state = this.state;
    let l = false;
    let a = false;
    if (e.storedMarks && this.composing) {
      ti(this);
      a = true;
    }
    this.state = e;
    let h = state.plugins != e.plugins || this._props.plugins != t.plugins;
    if (
      h ||
      this._props.plugins != t.plugins ||
      this._props.nodeViews != t.nodeViews
    ) {
      let e = t_(this);
      if (
        ((e, t) => {
          let n = 0;
          let r = 0;
          for (let r in e) {
            if (e[r] != t[r]) {
              return true;
            }
            n++;
          }
          for (let e in t) {
            r++;
          }
          return n != r;
        })(e, this.nodeViews)
      ) {
        this.nodeViews = e;
        l = true;
      }
    }
    if (h || t.handleDOMEvents != this._props.handleDOMEvents) {
      e5(this);
    }
    this.editable = tj(this);
    tq(this);
    let c = tD(this);
    let p = tW(this);
    let f =
      state.plugins == e.plugins || state.doc.eq(e.doc)
        ? e.scrollToSelection > state.scrollToSelection
          ? "to selection"
          : "preserve"
        : "reset";
    let g = l || !this.docView.matchesNode(e.doc, p, c);
    if (g || !e.selection.eq(state.selection)) {
      a = true;
    }
    let y =
      f == "preserve" &&
      a &&
      this.dom.style.overflowAnchor == null &&
      ((e) => {
        let refDOM;
        let refTop;
        let r = e.dom.getBoundingClientRect();
        let i = Math.max(0, r.top);
        for (
          let o = (r.left + r.right) / 2, s = i + 1;
          s < Math.min(innerHeight, r.bottom);
          s += 5
        ) {
          let r = e.root.elementFromPoint(o, s);
          if (!r || r == e.dom || !e.dom.contains(r)) {
            continue;
          }
          let l = r.getBoundingClientRect();
          if (l.top >= i - 20) {
            refDOM = r;
            refTop = l.top;
            break;
          }
        }
        return {
          refDOM,
          refTop,
          stack: $(e.dom),
        };
      })(this);
    if (a) {
      let t;
      let n;
      let a;
      this.domObserver.stop();
      let h =
        g &&
        (C || T) &&
        !this.composing &&
        !state.selection.empty &&
        !e.selection.empty &&
        ((r = state.selection),
        (i = e.selection),
        (a = Math.min(
          r.$anchor.sharedDepth(r.head),
          i.$anchor.sharedDepth(i.head),
        )),
        r.$anchor.start(a) != i.$anchor.start(a));
      if (g) {
        let t = T
          ? (this.trackWrites = this.domSelectionRange().focusNode)
          : null;
        if (this.composing) {
          this.input.compositionNode = ((e) => {
            let t = e.domSelectionRange();
            if (!t.focusNode) {
              return null;
            }
            let n = ((e, t) => {
              while (true) {
                if (e.nodeType == 3 && t) {
                  return e;
                }
                if (e.nodeType == 1 && t > 0) {
                  if (e.contentEditable == "false") {
                    return null;
                  }
                  t = u((e = e.childNodes[t - 1]));
                } else {
                  if (!e.parentNode || m(e)) {
                    return null;
                  }
                  t = s(e);
                  e = e.parentNode;
                }
              }
            })(t.focusNode, t.focusOffset);
            let r = ((e, t) => {
              while (true) {
                if (e.nodeType == 3 && t < e.nodeValue.length) {
                  return e;
                }
                if (e.nodeType == 1 && t < e.childNodes.length) {
                  if (e.contentEditable == "false") {
                    return null;
                  }
                  e = e.childNodes[t];
                  t = 0;
                } else {
                  if (!e.parentNode || m(e)) {
                    return null;
                  }
                  t = s(e) + 1;
                  e = e.parentNode;
                }
              }
            })(t.focusNode, t.focusOffset);
            if (n && r && n != r) {
              let t = r.pmViewDesc;
              let i = e.domObserver.lastChangedTextNode;
              if (n == i || r == i) {
                return i;
              }
              if (!t || !t.isText(r.nodeValue)) {
                return r;
              }
              if (e.input.compositionNode == r) {
                let e = n.pmViewDesc;
                if (!(!e || !e.isText(n.nodeValue))) {
                  return r;
                }
              }
            }
            return n || r;
          })(this);
        }
        if (l || !this.docView.update(e.doc, p, c, this)) {
          this.docView.updateOuterDeco(p);
          this.docView.destroy();
          this.docView = eo(e.doc, p, c, this.dom, this);
        }
        if (t && !this.trackWrites) {
          h = true;
        }
      }
      if (
        h ||
        !(
          this.input.mouseDown &&
          this.domObserver.currentSelection.eq(this.domSelectionRange()) &&
          ((t = this.docView.domFromPos(this.state.selection.anchor, 0)),
          (n = this.domSelectionRange()),
          d(t.node, t.offset, n.anchorNode, n.anchorOffset))
        )
      ) {
        ex(this, h);
      } else {
        eM(this, e.selection);
        this.domObserver.setCurSelection();
      }
      this.domObserver.start();
    }
    this.updatePluginViews(state);
    if (
      ((n = this.dragging) == null ? undefined : n.node) &&
      !state.doc.eq(e.doc)
    ) {
      this.updateDraggedNode(this.dragging, state);
    }
    if (f == "reset") {
      this.dom.scrollTop = 0;
    } else if (f == "to selection") {
      this.scrollToSelection();
    } else if (y) {
      (({ refDOM, refTop, stack }) => {
        let r = refDOM ? refDOM.getBoundingClientRect().top : 0;
        J(stack, r == 0 ? 0 : r - refTop);
      })(y);
    }
  }
  scrollToSelection() {
    let focusNode = this.domSelectionRange().focusNode;
    if (
      focusNode &&
      this.dom.contains(
        focusNode.nodeType == 1 ? focusNode : focusNode.parentNode,
      )
    ) {
      if (this.someProp("handleScrollToSelection", (e) => e(this)));
      else if (this.state.selection instanceof nh) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        if (t.nodeType == 1) {
          V(this, t.getBoundingClientRect(), focusNode);
        }
      } else {
        V(this, this.coordsAtPos(this.state.selection.head, 1), focusNode);
      }
    }
  }
  destroyPluginViews() {
    let e;
    while ((e = this.pluginViews.pop())) {
      if (e.destroy) {
        e.destroy();
      }
    }
  }
  updatePluginViews(e) {
    if (
      e &&
      e.plugins == this.state.plugins &&
      this.directPlugins == this.prevDirectPlugins
    ) {
      for (let t = 0; t < this.pluginViews.length; t++) {
        let pluginView = this.pluginViews[t];
        if (pluginView.update) {
          pluginView.update(this, e);
        }
      }
    } else {
      this.prevDirectPlugins = this.directPlugins;
      this.destroyPluginViews();
      for (let e = 0; e < this.directPlugins.length; e++) {
        let directPlugin = this.directPlugins[e];
        if (directPlugin.spec.view) {
          this.pluginViews.push(directPlugin.spec.view(this));
        }
      }
      for (let e = 0; e < this.state.plugins.length; e++) {
        let plugin = this.state.plugins[e];
        if (plugin.spec.view) {
          this.pluginViews.push(plugin.spec.view(this));
        }
      }
    }
  }
  updateDraggedNode(e, t) {
    let e_node = e.node;
    let i = -1;
    if (this.state.doc.nodeAt(e_node.from) == e_node.node) {
      i = e_node.from;
    } else {
      let e = e_node.from + (this.state.doc.content.size - t.doc.content.size);
      if ((e > 0 && this.state.doc.nodeAt(e)) == e_node.node) {
        i = e;
      }
    }
    this.dragging = new th(
      e.slice,
      e.move,
      i < 0 ? undefined : nh.create(this.state.doc, i),
    );
  }
  someProp(e, t) {
    let n = this._props && this._props[e];
    let r;
    if (n != null && (r = t ? t(n) : n)) {
      return r;
    }
    for (let n = 0; n < this.directPlugins.length; n++) {
      let i = this.directPlugins[n].props[e];
      if (i != null && (r = t ? t(i) : i)) {
        return r;
      }
    }
    let plugins = this.state.plugins;
    if (plugins) {
      for (let n = 0; n < plugins.length; n++) {
        let o = plugins[n].props[e];
        if (o != null && (r = t ? t(o) : o)) {
          return r;
        }
      }
    }
  }
  hasFocus() {
    if (C) {
      let e = this.root.activeElement;
      if (e == this.dom) {
        return true;
      }
      if (!e || !this.dom.contains(e)) {
        return false;
      }
      while (e && this.dom != e && this.dom.contains(e)) {
        if (e.contentEditable == "false") {
          return false;
        }
        e = e.parentElement;
      }
      return true;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    this.domObserver.stop();
    if (this.editable) {
      ((e) => {
        if (e.setActive) {
          return e.setActive();
        }
        if (L) {
          return e.focus(L);
        }
        let t = $(e);
        e.focus(
          L == null
            ? {
                get preventScroll() {
                  L = {
                    preventScroll: true,
                  };
                  return true;
                },
              }
            : undefined,
        );
        if (!L) {
          L = false;
          J(t, 0);
        }
      })(this.dom);
    }
    ex(this);
    this.domObserver.start();
  }
  get root() {
    let _root = this._root;
    if (_root == null) {
      for (let e = this.dom.parentNode; e; e = e.parentNode) {
        if (e.nodeType == 9 || (e.nodeType == 11 && e.host)) {
          if (!e.getSelection) {
            Object.getPrototypeOf(e).getSelection = () =>
              e.ownerDocument.getSelection();
          }
          return (this._root = e);
        }
      }
    }
    return _root || document;
  }
  updateRoot() {
    this._root = null;
  }
  posAtCoords(e) {
    return ((e, t) => {
      let n;
      let r;
      let i;
      let ownerDocument = e.dom.ownerDocument;
      let s;
      let a = 0;
      let c = ((e, t, n) => {
        if (e.caretPositionFromPoint) {
          try {
            let r = e.caretPositionFromPoint(t, n);
            if (r) {
              return {
                node: r.offsetNode,
                offset: Math.min(u(r.offsetNode), r.offset),
              };
            }
          } catch (e) {}
        }
        if (e.caretRangeFromPoint) {
          let r = e.caretRangeFromPoint(t, n);
          if (r) {
            return {
              node: r.startContainer,
              offset: Math.min(u(r.startContainer), r.startOffset),
            };
          }
        }
      })(ownerDocument, t.left, t.top);
      if (c) {
        ({ node: s, offset: a } = c);
      }
      let d = (
        e.root.elementFromPoint ? e.root : ownerDocument
      ).elementFromPoint(t.left, t.top);
      if (!d || !e.dom.contains(d.nodeType != 1 ? d.parentNode : d)) {
        let n = e.dom.getBoundingClientRect();
        if (
          !K(t, n) ||
          !(d = (function e(t, n, r) {
            let length = t.childNodes.length;
            if (length && r.top < r.bottom) {
              for (
                let o = Math.max(
                    0,
                    Math.min(
                      length - 1,
                      Math.floor(
                        (length * (n.top - r.top)) / (r.bottom - r.top),
                      ) - 2,
                    ),
                  ),
                  s = o;
                ;
              ) {
                let r = t.childNodes[s];
                if (r.nodeType == 1) {
                  let t = r.getClientRects();
                  for (let i = 0; i < t.length; i++) {
                    let o = t[i];
                    if (K(n, o)) {
                      return e(r, n, o);
                    }
                  }
                }
                if ((s = (s + 1) % length) == o) {
                  break;
                }
              }
            }
            return t;
          })(e.dom, t, n))
        ) {
          return null;
        }
      }
      if (E) {
        for (let e = d; s && e; e = l(e)) {
          if (e.draggable) {
            s = undefined;
          }
        }
      }
      d =
        (r = (n = d).parentNode) &&
        /^li$/i.test(r.nodeName) &&
        t.left < n.getBoundingClientRect().left
          ? r
          : n;
      if (s) {
        let n;
        if (
          M &&
          s.nodeType == 1 &&
          (a = Math.min(a, s.childNodes.length)) < s.childNodes.length
        ) {
          let e = s.childNodes[a];
          let n;
          if (
            e.nodeName == "IMG" &&
            (n = e.getBoundingClientRect()).right <= t.left &&
            n.bottom > t.top
          ) {
            a++;
          }
        }
        if (
          F &&
          a &&
          s.nodeType == 1 &&
          (n = s.childNodes[a - 1]).nodeType == 1 &&
          n.contentEditable == "false" &&
          n.getBoundingClientRect().top >= t.top
        ) {
          a--;
        }
        if (
          s == e.dom &&
          a == s.childNodes.length - 1 &&
          s.lastChild.nodeType == 1 &&
          t.top > s.lastChild.getBoundingClientRect().bottom
        ) {
          i = e.state.doc.content.size;
        } else if (
          a == 0 ||
          s.nodeType != 1 ||
          s.childNodes[a - 1].nodeName != "BR"
        ) {
          i = ((e, t, n, r) => {
            let i = -1;
            for (let n = t, o = false; n != e.dom;) {
              let t = e.docView.nearestDesc(n, true);
              let s;
              if (!t) {
                return null;
              }
              if (
                t.dom.nodeType == 1 &&
                ((t.node.isBlock && t.parent) || !t.contentDOM) &&
                ((s = t.dom.getBoundingClientRect()).width || s.height) &&
                (t.node.isBlock &&
                  t.parent &&
                  !/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName) &&
                  ((!o && s.left > r.left) || s.top > r.top
                    ? (i = t.posBefore)
                    : ((!o && s.right < r.left) || s.bottom < r.top) &&
                      (i = t.posAfter),
                  (o = true)),
                !t.contentDOM && i < 0 && !t.node.isText)
              ) {
                if (
                  t.node.isBlock
                    ? r.top < (s.top + s.bottom) / 2
                    : r.left < (s.left + s.right) / 2
                ) {
                  return t.posBefore;
                }
                return t.posAfter;
              }
              n = t.dom.parentNode;
            }
            if (i > -1) {
              return i;
            }
            return e.docView.posFromDOM(t, n, -1);
          })(e, s, a, t);
        }
      }
      if (i == null) {
        i = ((e, t, n) => {
          let { node, offset } = (function e(t, n) {
            let r;
            let i;
            let o;
            let s = 200000000;
            let l;
            let a = 0;
            let n_top = n.top;
            let n_top_1 = n.top;
            for (let e = t.firstChild, p = 0; e; e = e.nextSibling, p++) {
              let t;
              if (e.nodeType == 1) {
                t = e.getClientRects();
              } else {
                if (e.nodeType != 3) {
                  continue;
                }
                t = h(e).getClientRects();
              }
              for (let h = 0; h < t.length; h++) {
                let f = t[h];
                if (f.top <= n_top && f.bottom >= n_top_1) {
                  n_top = Math.max(f.bottom, n_top);
                  n_top_1 = Math.min(f.top, n_top_1);
                  let t =
                    f.left > n.left
                      ? f.left - n.left
                      : f.right < n.left
                        ? n.left - f.right
                        : 0;
                  if (t < s) {
                    o = e;
                    s = t;
                    l =
                      t && o.nodeType == 3
                        ? {
                            left: f.right < n.left ? f.right : f.left,
                            top: n.top,
                          }
                        : n;
                    if (e.nodeType == 1 && t) {
                      a = p + +(n.left >= (f.left + f.right) / 2);
                    }
                    continue;
                  }
                } else {
                  if (
                    f.top > n.top &&
                    !r &&
                    f.left <= n.left &&
                    f.right >= n.left
                  ) {
                    r = e;
                    i = {
                      left: Math.max(f.left, Math.min(f.right, n.left)),
                      top: f.top,
                    };
                  }
                }
                if (
                  !o &&
                  ((n.left >= f.right && n.top >= f.top) ||
                    (n.left >= f.left && n.top >= f.bottom))
                ) {
                  a = p + 1;
                }
              }
            }
            if (!o && r) {
              o = r;
              l = i;
              s = 0;
            }
            if (o && o.nodeType == 3) {
              return ((e, t) => {
                let length = e.nodeValue.length;
                let r = document.createRange();
                for (let i = 0; i < length; i++) {
                  r.setEnd(e, i + 1);
                  r.setStart(e, i);
                  let n = q(r, 1);
                  if (n.top != n.bottom && K(t, n)) {
                    return {
                      node: e,
                      offset: i + +(t.left >= (n.left + n.right) / 2),
                    };
                  }
                }
                return {
                  node: e,
                  offset: 0,
                };
              })(o, l);
            }
            if (!o || (s && o.nodeType == 1)) {
              return {
                node: t,
                offset: a,
              };
            }
            return e(o, l);
          })(t, n);
          let o = -1;
          if (node.nodeType == 1 && !node.firstChild) {
            let e = node.getBoundingClientRect();
            o = e.left != e.right && n.left > (e.left + e.right) / 2 ? 1 : -1;
          }
          return e.docView.posFromDOM(node, offset, o);
        })(e, d, t);
      }
      let p = e.docView.nearestDesc(d, true);
      return {
        pos: i,
        inside: p ? p.posAtStart - p.border : -1,
      };
    })(this, e);
  }
  coordsAtPos(e, t = 1) {
    return _(this, e, t);
  }
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    if (t) {
      return t.nodeDOM;
    }
    return null;
  }
  posAtDOM(e, t, n = -1) {
    let r = this.docView.posFromDOM(e, t, n);
    if (r == null) {
      throw RangeError("DOM position not inside the editor");
    }
    return r;
  }
  endOfTextblock(e, t) {
    return ((e, t, n) => {
      let r;
      let i;
      if (X == t && Y == n) {
        return Q;
      }
      X = t;
      Y = n;
      return (Q =
        n == "up" || n == "down"
          ? ((r = t.selection),
            (i = n == "up" ? r.$from : r.$to),
            G(e, t, () => {
              let { node } = e.docView.domFromPos(i.pos, n == "up" ? -1 : 1);
              while (true) {
                let n = e.docView.nearestDesc(node, true);
                if (!n) {
                  break;
                }
                if (n.node.isBlock) {
                  node = n.contentDOM || n.dom;
                  break;
                }
                node = n.dom.parentNode;
              }
              let r = _(e, i.pos, 1);
              for (let e = node.firstChild; e; e = e.nextSibling) {
                let t;
                if (e.nodeType == 1) {
                  t = e.getClientRects();
                } else {
                  if (e.nodeType != 3) {
                    continue;
                  }
                  t = h(e, 0, e.nodeValue.length).getClientRects();
                }
                for (let e = 0; e < t.length; e++) {
                  let i = t[e];
                  if (
                    i.bottom > i.top + 1 &&
                    (n == "up"
                      ? r.top - i.top > (i.bottom - r.top) * 2
                      : i.bottom - r.bottom > (r.bottom - i.top) * 2)
                  ) {
                    return false;
                  }
                }
              }
              return true;
            }))
          : ((e, t, n) => {
              let { $head } = t.selection;
              if (!$head.parent.isTextblock) {
                return false;
              }
              let $head_parentOffset = $head.parentOffset;
              let o = $head_parentOffset == $head.parent.content.size;
              let s = e.domSelection();
              if (s) {
                if (Z.test($head.parent.textContent) && s.modify) {
                  return G(e, t, () => {
                    let { focusNode, focusOffset, anchorNode, anchorOffset } =
                      e.domSelectionRange();
                    let s_caretBidiLevel = s.caretBidiLevel;
                    s.modify("move", n, "character");
                    let h = $head.depth
                      ? e.docView.domAfterPos($head.before())
                      : e.dom;
                    let { focusNode: focusNode_1, focusOffset: focusOffset_1 } =
                      e.domSelectionRange();
                    let p =
                      (focusNode_1 &&
                        !h.contains(
                          focusNode_1.nodeType == 1
                            ? focusNode_1
                            : focusNode_1.parentNode,
                        )) ||
                      (focusNode == focusNode_1 &&
                        focusOffset == focusOffset_1);
                    try {
                      s.collapse(anchorNode, anchorOffset);
                      if (
                        focusNode &&
                        (focusNode != anchorNode ||
                          focusOffset != anchorOffset) &&
                        s.extend
                      ) {
                        s.extend(focusNode, focusOffset);
                      }
                    } catch (e) {}
                    if (s_caretBidiLevel != null) {
                      s.caretBidiLevel = s_caretBidiLevel;
                    }
                    return p;
                  });
                }
                if (n == "left" || n == "backward") {
                  return !$head_parentOffset;
                }
                return o;
              }
              return $head.pos == $head.start() || $head.pos == $head.end();
            })(e, t, n));
    })(this, t || this.state, e);
  }
  pasteHTML(e, t) {
    return tl(this, "", e, false, t || new ClipboardEvent("paste"));
  }
  pasteText(e, t) {
    return tl(this, e, null, true, t || new ClipboardEvent("paste"));
  }
  serializeForClipboard(e) {
    return eW(this, e);
  }
  destroy() {
    if (this.docView) {
      for (let e in (this.domObserver.stop(), this.input.eventHandlers)) {
        this.dom.removeEventListener(e, this.input.eventHandlers[e]);
      }
      clearTimeout(this.input.composingTimeout);
      clearTimeout(this.input.lastIOSEnterFallbackTimeout);
      this.destroyPluginViews();
      if (this.mounted) {
        this.docView.update(this.state.doc, [], tD(this), this);
        this.dom.textContent = "";
      } else if (this.dom.parentNode) {
        this.dom.parentNode.removeChild(this.dom);
      }
      this.docView.destroy();
      this.docView = null;
      c();
    }
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    if (!e6(this, e) && eQ[e.type] && (this.editable || !(e.type in e0))) {
      eQ[e.type](this, e);
    }
  }
  domSelectionRange() {
    let e = this.domSelection();
    if (e) {
      return (
        (E &&
          this.root.nodeType === 11 &&
          ((e) => {
            let e_activeElement = e.activeElement;
            while (e_activeElement && e_activeElement.shadowRoot) {
              e_activeElement = e_activeElement.shadowRoot.activeElement;
            }
            return e_activeElement;
          })(this.dom.ownerDocument) == this.dom &&
          ((e, t) => {
            let n;
            if (t.getComposedRanges) {
              let n = t.getComposedRanges(e.root)[0];
              if (n) {
                return tP(e, n);
              }
            }
            function r(e) {
              e.preventDefault();
              e.stopImmediatePropagation();
              n = e.getTargetRanges()[0];
            }
            e.dom.addEventListener("beforeinput", r, true);
            document.execCommand("indent");
            e.dom.removeEventListener("beforeinput", r, true);
            if (n) {
              return tP(e, n);
            }
            return null;
          })(this, e)) ||
        e
      );
    }
    return {
      focusNode: null,
      focusOffset: 0,
      anchorNode: null,
      anchorOffset: 0,
    };
  }
  domSelection() {
    return this.root.getSelection();
  }
}
function tW(e) {
  let t = Object.create(null);
  t.class = "ProseMirror";
  t.contenteditable = String(e.editable);
  e.someProp("attributes", (n) => {
    if (typeof n === "function") {
      n = n(e.state);
    }
    if (n) {
      for (let e in n) {
        if (e == "class") {
          t.class += " " + n[e];
        } else if (e == "style") {
          t.style = (t.style ? t.style + ";" : "") + n[e];
        } else if (!(t[e] || e == "contenteditable" || e == "nodeName")) {
          t[e] = String(n[e]);
        }
      }
    }
  });
  if (!t.translate) {
    t.translate = "no";
  }
  return [NZ.node(0, e.state.doc.content.size, t)];
}
function tq(e) {
  if (e.markCursor) {
    let t = document.createElement("img");
    t.className = "ProseMirror-separator";
    t.setAttribute("mark-placeholder", "true");
    t.setAttribute("alt", "");
    e.cursorWrapper = {
      dom: t,
      deco: NZ.widget(e.state.selection.from, t, {
        raw: true,
        marks: e.markCursor,
      }),
    };
  } else {
    e.cursorWrapper = null;
  }
}
function tj(e) {
  return !e.someProp("editable", (t) => t(e.state) === false);
}
function t_(e) {
  let t = Object.create(null);
  function n(e) {
    for (let n in e) {
      if (!Object.prototype.hasOwnProperty.call(t, n)) {
        t[n] = e[n];
      }
    }
  }
  e.someProp("nodeViews", n);
  e.someProp("markViews", n);
  return t;
}
function tU(e) {
  if (e.spec.state || e.spec.filterTransaction || e.spec.appendTransaction) {
    throw RangeError(
      "Plugins passed directly to the view must not have a state component",
    );
  }
}
Lz.prototype.dispatch = function (e) {
  let dispatchTransaction = this._props.dispatchTransaction;
  if (dispatchTransaction) {
    dispatchTransaction.call(this, e);
  } else {
    this.updateState(this.state.apply(e));
  }
};
