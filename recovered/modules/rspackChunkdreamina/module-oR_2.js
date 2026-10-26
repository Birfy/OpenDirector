import s from "zxf";
import a from "Zr";
class r {
  append(e) {
    if (e.length) {
      e = r.from(e);
      return (
        (!this.length && e) ||
        (e.length < 200 && this.leafAppend(e)) ||
        (this.length < 200 && e.leafPrepend(this)) ||
        this.appendInner(e)
      );
    }
    return this;
  }
  prepend(e) {
    if (e.length) {
      return r.from(e).append(this);
    }
    return this;
  }
  appendInner(e) {
    return new o(this, e);
  }
  slice(e, t) {
    if (e === undefined) {
      e = 0;
    }
    if (t === undefined) {
      t = this.length;
    }
    if (e >= t) {
      return r.empty;
    }
    return this.sliceInner(Math.max(0, e), Math.min(this.length, t));
  }
  get(e) {
    if (!(e < 0) && !(e >= this.length)) {
      return this.getInner(e);
    }
  }
  forEach(e, t = 0, n = this.length) {
    if (t <= n) {
      this.forEachInner(e, t, n, 0);
    } else {
      this.forEachInvertedInner(e, t, n, 0);
    }
  }
  map(e, t = 0, n = this.length) {
    const r = [];
    this.forEach((t, n) => r.push(e(t, n)), t, n);
    return r;
  }
  static from(e) {
    if (e instanceof r) {
      return e;
    }
    if (e && e.length) {
      return new i(e);
    }
    return r.empty;
  }
}
var i = (function (e) {
  class t extends e {
    constructor(t) {
      super();
      this.values = t;
    }
    flatten() {
      return this.values;
    }
    sliceInner(e, n) {
      if (e == 0 && n == this.length) {
        return this;
      }
      return new t(this.values.slice(e, n));
    }
    getInner(e) {
      return this.values[e];
    }
    forEachInner(e, t, n, r) {
      for (let i = t; i < n; i++) {
        if (e(this.values[i], r + i) === false) {
          return false;
        }
      }
    }
    forEachInvertedInner(e, t, n, r) {
      for (let i = t - 1; i >= n; i--) {
        if (e(this.values[i], r + i) === false) {
          return false;
        }
      }
    }
    leafAppend(e) {
      if (this.length + e.length <= 200) {
        return new t(this.values.concat(e.flatten()));
      }
    }
    leafPrepend(e) {
      if (this.length + e.length <= 200) {
        return new t(e.flatten().concat(this.values));
      }
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  const n = {
    length: {
      configurable: true,
    },
    depth: {
      configurable: true,
    },
  };
  n.length.get = function () {
    return this.values.length;
  };
  n.depth.get = function () {
    return 0;
  };
  Object.defineProperties(t.prototype, n);
  return t;
})(r);
r.empty = new i([]);
var o = (function (e) {
  class t extends e {
    constructor(t, n) {
      super();
      this.left = t;
      this.right = n;
      this.length = t.length + n.length;
      this.depth = Math.max(t.depth, n.depth) + 1;
    }
    flatten() {
      return this.left.flatten().concat(this.right.flatten());
    }
    getInner(e) {
      if (e < this.left.length) {
        return this.left.get(e);
      }
      return this.right.get(e - this.left.length);
    }
    forEachInner(e, t, n, r) {
      const length = this.left.length;
      if (
        (t < length &&
          this.left.forEachInner(e, t, Math.min(n, length), r) === false) ||
        (n > length &&
          this.right.forEachInner(
            e,
            Math.max(t - length, 0),
            Math.min(this.length, n) - length,
            r + length,
          ) === false)
      ) {
        return false;
      }
    }
    forEachInvertedInner(e, t, n, r) {
      const length = this.left.length;
      if (
        (t > length &&
          this.right.forEachInvertedInner(
            e,
            t - length,
            Math.max(n, length) - length,
            r + length,
          ) === false) ||
        (n < length &&
          this.left.forEachInvertedInner(e, Math.min(t, length), n, r) ===
            false)
      ) {
        return false;
      }
    }
    sliceInner(e, t) {
      if (e == 0 && t == this.length) {
        return this;
      }
      const length = this.left.length;
      if (t <= length) {
        return this.left.slice(e, t);
      }
      if (e >= length) {
        return this.right.slice(e - length, t - length);
      }
      return this.left.slice(e, length).append(this.right.slice(0, t - length));
    }
    leafAppend(e) {
      const n = this.right.leafAppend(e);
      if (n) {
        return new t(this.left, n);
      }
    }
    leafPrepend(e) {
      const n = this.left.leafPrepend(e);
      if (n) {
        return new t(n, this.right);
      }
    }
    appendInner(e) {
      if (this.left.depth >= Math.max(this.right.depth, e.depth) + 1) {
        return new t(this.left, new t(this.right, e));
      }
      return new t(this, e);
    }
  }
  if (e) {
    t.__proto__ = e;
  }
  return t;
})(r);
class l {
  constructor(e, t) {
    this.items = e;
    this.eventCount = t;
  }
  popEvent(e, t) {
    let n;
    let r;
    let selection;
    let remaining;
    if (this.eventCount == 0) {
      return null;
    }
    let length = this.items.length;
    for (; ; length--) {
      if (this.items.get(length - 1).selection) {
        --length;
        break;
      }
    }
    if (t) {
      r = (n = this.remapping(length, this.items.length)).maps.length;
    }
    let transform = e.tr;
    let c = [];
    let u = [];
    this.items.forEach(
      (e, t) => {
        if (!e.step) {
          if (!n) {
            r = (n = this.remapping(length, t + 1)).maps.length;
          }
          r--;
          u.push(e);
          return;
        }
        if (n) {
          u.push(new d(e.map));
          let t = e.step.map(n.slice(r));
          let i;
          if (t && transform.maybeStep(t).doc) {
            i = transform.mapping.maps[transform.mapping.maps.length - 1];
            c.push(new d(i, undefined, undefined, c.length + u.length));
          }
          r--;
          if (i) {
            n.appendMap(i, r);
          }
        } else {
          transform.maybeStep(e.step);
        }
        if (e.selection) {
          selection = n ? e.selection.map(n.slice(r)) : e.selection;
          remaining = new l(
            this.items.slice(0, length).append(u.reverse().concat(c)),
            this.eventCount - 1,
          );
          return false;
        }
      },
      this.items.length,
      0,
    );
    return {
      remaining,
      transform,
      selection,
    };
  }
  addTransform(e, t, n, r) {
    let i;
    let o;
    let s;
    let a = [];
    let eventCount = this.eventCount;
    let items = this.items;
    let h = !r && items.length ? items.get(items.length - 1) : null;
    for (let n = 0; n < e.steps.length; n++) {
      let i = e.steps[n].invert(e.docs[n]);
      let o = new d(e.mapping.maps[n], i, t);
      let s;
      if ((s = h && h.merge(o))) {
        o = s;
        if (n) {
          a.pop();
        } else {
          items = items.slice(0, items.length - 1);
        }
      }
      a.push(o);
      if (t) {
        eventCount++;
        t = undefined;
      }
      if (!r) {
        h = o;
      }
    }
    let f = eventCount - n.depth;
    if (f > u) {
      i = items;
      o = f;
      i.forEach((e, t) => {
        if (e.selection && o-- == 0) {
          s = t;
          return false;
        }
      });
      items = i.slice(s);
      eventCount -= f;
    }
    return new l(items.append(a), eventCount);
  }
  remapping(e, t) {
    let n = new s.X9();
    this.items.forEach(
      (t, r) => {
        let i =
          t.mirrorOffset != null && r - t.mirrorOffset >= e
            ? n.maps.length - t.mirrorOffset
            : undefined;
        n.appendMap(t.map, i);
      },
      e,
      t,
    );
    return n;
  }
  addMaps(e) {
    if (this.eventCount == 0) {
      return this;
    }
    return new l(this.items.append(e.map((e) => new d(e))), this.eventCount);
  }
  rebased(e, t) {
    if (!this.eventCount) {
      return this;
    }
    let n = [];
    let r = Math.max(0, this.items.length - t);
    let e_mapping = e.mapping;
    let length = e.steps.length;
    let eventCount = this.eventCount;
    this.items.forEach((e) => {
      if (e.selection) {
        eventCount--;
      }
    }, r);
    let a = t;
    this.items.forEach((t) => {
      let r = e_mapping.getMirror(--a);
      if (r == null) {
        return;
      }
      length = Math.min(length, r);
      let l = e_mapping.maps[r];
      if (t.step) {
        let o = e.steps[r].invert(e.docs[r]);
        let c = t.selection && t.selection.map(e_mapping.slice(a + 1, r));
        if (c) {
          eventCount++;
        }
        n.push(new d(l, o, c));
      } else {
        n.push(new d(l));
      }
    }, r);
    let c = [];
    for (let e = t; e < length; e++) {
      c.push(new d(e_mapping.maps[e]));
    }
    let u = new l(this.items.slice(0, r).append(c).append(n), eventCount);
    if (u.emptyItemCount() > 500) {
      u = u.compress(this.items.length - n.length);
    }
    return u;
  }
  emptyItemCount() {
    let e = 0;
    this.items.forEach((t) => {
      if (!t.step) {
        e++;
      }
    });
    return e;
  }
  compress(e = this.items.length) {
    let t = this.remapping(0, e);
    let length = t.maps.length;
    let i = [];
    let o = 0;
    this.items.forEach(
      (r, s) => {
        if (s >= e) {
          i.push(r);
          if (r.selection) {
            o++;
          }
        } else if (r.step) {
          let e = r.step.map(t.slice(length));
          let s = e && e.getMap();
          length--;
          if (s) {
            t.appendMap(s, length);
          }
          if (e) {
            let a = r.selection && r.selection.map(t.slice(length));
            if (a) {
              o++;
            }
            let l = new d(s.invert(), e, a);
            let c;
            let u = i.length - 1;
            if ((c = i.length && i[u].merge(l))) {
              i[u] = c;
            } else {
              i.push(l);
            }
          }
        } else {
          if (r.map) {
            length--;
          }
        }
      },
      this.items.length,
      0,
    );
    return new l(r.from(i.reverse()), o);
  }
}
l.empty = new l(r.empty, 0);
class d {
  constructor(e, t, n, r) {
    this.map = e;
    this.step = t;
    this.selection = n;
    this.mirrorOffset = r;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t) {
        return new d(t.getMap().invert(), t, this.selection);
      }
    }
  }
}
class c {
  constructor(e, t, n, r, i) {
    this.done = e;
    this.undone = t;
    this.prevRanges = n;
    this.prevTime = r;
    this.prevComposition = i;
  }
}
let u = 20;
function p(maps) {
  let t = [];
  for (let n = maps.length - 1; n >= 0 && t.length == 0; n--) {
    maps[n].forEach((e, n, r, i) => t.push(r, i));
  }
  return t;
}
function h(prevRanges, mapping) {
  if (!prevRanges) {
    return null;
  }
  let n = [];
  for (let r = 0; r < prevRanges.length; r += 2) {
    let i = mapping.map(prevRanges[r], 1);
    let o = mapping.map(prevRanges[r + 1], -1);
    if (i <= o) {
      n.push(i, o);
    }
  }
  return n;
}
let f = false;
let m = null;
function g(e) {
  let e_plugins = e.plugins;
  if (m != e_plugins) {
    f = false;
    m = e_plugins;
    for (let e = 0; e < e_plugins.length; e++) {
      if (e_plugins[e].spec.historyPreserveItems) {
        f = true;
        break;
      }
    }
  }
  return f;
}
export function xq(e) {
  return e.setMeta(b, true);
}
let y = new a.hs("history");
let b = new a.hs("closeHistory");
export function b6(config = {}) {
  config = {
    depth: config.depth || 100,
    newGroupDelay: config.newGroupDelay || 500,
  };
  return new a.k_({
    key: y,
    state: {
      init: () => new c(l.empty, l.empty, null, 0, -1),
      apply: (t, n, r) =>
        ((e, t, n, r) => {
          let i = n.getMeta(y);
          let o;
          if (i) {
            return i.historyState;
          }
          if (n.getMeta(b)) {
            e = new c(e.done, e.undone, null, 0, -1);
          }
          let s = n.getMeta("appendedTransaction");
          if (n.steps.length == 0) {
            return e;
          }
          if (s && s.getMeta(y)) {
            if (s.getMeta(y).redo) {
              return new c(
                e.done.addTransform(n, undefined, r, g(t)),
                e.undone,
                p(n.mapping.maps),
                e.prevTime,
                e.prevComposition,
              );
            } else {
              return new c(
                e.done,
                e.undone.addTransform(n, undefined, r, g(t)),
                null,
                e.prevTime,
                e.prevComposition,
              );
            }
          }
          if (
            n.getMeta("addToHistory") === false ||
            (s && s.getMeta("addToHistory") === false)
          ) {
            if ((o = n.getMeta("rebased"))) {
              return new c(
                e.done.rebased(n, o),
                e.undone.rebased(n, o),
                h(e.prevRanges, n.mapping),
                e.prevTime,
                e.prevComposition,
              );
            } else {
              return new c(
                e.done.addMaps(n.mapping.maps),
                e.undone.addMaps(n.mapping.maps),
                h(e.prevRanges, n.mapping),
                e.prevTime,
                e.prevComposition,
              );
            }
          }
          {
            let i = n.getMeta("composition");
            let o =
              e.prevTime == 0 ||
              (!s &&
                e.prevComposition != i &&
                (e.prevTime < (n.time || 0) - r.newGroupDelay ||
                  !((e, t) => {
                    if (!t) {
                      return false;
                    }
                    if (!e.docChanged) {
                      return true;
                    }
                    let n = false;
                    e.mapping.maps[0].forEach((e, r) => {
                      for (let i = 0; i < t.length; i += 2) {
                        if (e <= t[i + 1] && r >= t[i]) {
                          n = true;
                        }
                      }
                    });
                    return n;
                  })(n, e.prevRanges)));
            let a = s ? h(e.prevRanges, n.mapping) : p(n.mapping.maps);
            return new c(
              e.done.addTransform(
                n,
                o ? t.selection.getBookmark() : undefined,
                r,
                g(t),
              ),
              l.empty,
              a,
              n.time,
              i == null ? e.prevComposition : i,
            );
          }
        })(n, r, t, config),
    },
    config,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let t_inputType = t.inputType;
          let r =
            t_inputType == "historyUndo"
              ? tN
              : t_inputType == "historyRedo"
                ? ZS
                : null;
          return !!r && (t.preventDefault(), r(e.state, e.dispatch));
        },
      },
    },
  });
}
function k(e, t) {
  return (n, r) => {
    let i = y.getState(n);
    if (!i || (e ? i.undone : i.done).eventCount == 0) {
      return false;
    }
    if (r) {
      let o = ((e, t, redo) => {
        let r = g(t);
        let config = y.get(t).spec.config;
        let o = (redo ? e.undone : e.done).popEvent(t, r);
        if (!o) {
          return null;
        }
        let s = o.selection.resolve(o.transform.doc);
        let a = (redo ? e.done : e.undone).addTransform(
          o.transform,
          t.selection.getBookmark(),
          config,
          r,
        );
        let historyState = new c(
          redo ? a : o.remaining,
          redo ? o.remaining : a,
          null,
          0,
          -1,
        );
        return o.transform.setSelection(s).setMeta(y, {
          redo,
          historyState,
        });
      })(i, n, e);
      if (o) {
        r(t ? o.scrollIntoView() : o);
      }
    }
    return true;
  };
}
export let tN = k(false, true);
export let ZS = k(true, true);
