import r from "Zr";
import i from "zxf";
export function A(e = {}) {
  return new r.k_({
    view: (t) => new s(t, e),
  });
}
class s {
  constructor(e, t) {
    var n;
    this.editorView = e;
    this.cursorPos = null;
    this.element = null;
    this.timeout = -1;
    this.width = (n = t.width) != null ? n : 1;
    this.color = t.color === false ? undefined : t.color || "black";
    this.class = t.class;
    this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((t) => {
      let handler = (e) => {
        this[t](e);
      };
      e.dom.addEventListener(t, handler);
      return {
        name: t,
        handler,
      };
    });
  }
  destroy() {
    this.handlers.forEach(({ name, handler }) =>
      this.editorView.dom.removeEventListener(name, handler),
    );
  }
  update(e, t) {
    if (this.cursorPos != null && t.doc != e.state.doc) {
      if (this.cursorPos > e.state.doc.content.size) {
        this.setCursor(null);
      } else {
        this.updateOverlay();
      }
    }
  }
  setCursor(e) {
    if (e != this.cursorPos) {
      this.cursorPos = e;
      if (e == null) {
        this.element.parentNode.removeChild(this.element);
        this.element = null;
      } else {
        this.updateOverlay();
      }
    }
  }
  updateOverlay() {
    let e;
    let t;
    let n = this.editorView.state.doc.resolve(this.cursorPos);
    let r = !n.parent.inlineContent;
    let i;
    if (r) {
      let e = n.nodeBefore;
      let t = n.nodeAfter;
      if (e || t) {
        let n = this.editorView.nodeDOM(this.cursorPos - (e ? e.nodeSize : 0));
        if (n) {
          let r = n.getBoundingClientRect();
          let o = e ? r.bottom : r.top;
          if (e && t) {
            o =
              (o +
                this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect()
                  .top) /
              2;
          }
          i = {
            left: r.left,
            right: r.right,
            top: o - this.width / 2,
            bottom: o + this.width / 2,
          };
        }
      }
    }
    if (!i) {
      let e = this.editorView.coordsAtPos(this.cursorPos);
      i = {
        left: e.left - this.width / 2,
        right: e.left + this.width / 2,
        top: e.top,
        bottom: e.bottom,
      };
    }
    let offsetParent = this.editorView.dom.offsetParent;
    if (!this.element) {
      this.element = offsetParent.appendChild(document.createElement("div"));
      if (this.class) {
        this.element.className = this.class;
      }
      this.element.style.cssText =
        "position: absolute; z-index: 50; pointer-events: none;";
      if (this.color) {
        this.element.style.backgroundColor = this.color;
      }
    }
    this.element.classList.toggle("prosemirror-dropcursor-block", r);
    this.element.classList.toggle("prosemirror-dropcursor-inline", !r);
    if (
      offsetParent &&
      (offsetParent != document.body ||
        getComputedStyle(offsetParent).position != "static")
    ) {
      let n = offsetParent.getBoundingClientRect();
      e = n.left - offsetParent.scrollLeft;
      t = n.top - offsetParent.scrollTop;
    } else {
      e = -pageXOffset;
      t = -pageYOffset;
    }
    this.element.style.left = `${i.left - e}px`;
    this.element.style.top = `${i.top - t}px`;
    this.element.style.width = `${i.right - i.left}px`;
    this.element.style.height = `${i.bottom - i.top}px`;
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable) {
      return;
    }
    let t = this.editorView.posAtCoords({
      left: e.clientX,
      top: e.clientY,
    });
    let n = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside);
    let r = n && n.type.spec.disableDropCursor;
    let o = typeof r === "function" ? r(this.editorView, t, e) : r;
    if (t && !o) {
      let e = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let t = i.Um(
          this.editorView.state.doc,
          e,
          this.editorView.dragging.slice,
        );
        if (t != null) {
          e = t;
        }
      }
      this.setCursor(e);
      this.scheduleRemoval(5000);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    if (
      !(
        e.target != this.editorView.dom &&
        this.editorView.dom.contains(e.relatedTarget)
      )
    ) {
      this.setCursor(null);
    }
  }
}
