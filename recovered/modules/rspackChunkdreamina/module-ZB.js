import n from "oa";
import r from "bk";
import o from "qa";
import i from "z8";
import a from "bT";
import u from "PC";
import s from "Ia";
import m from "QZ";
import g from "V9";
import x from "Ccf";
import _ from "P2";
import A from "HQZ";
import b from "cl";
import C from "zrd";
import k from "ZF";
function c(e, t) {
  let l = Math.floor(e * t);
  let n = (e - l / t) / (1 / t);
  return {
    index: l,
    offsetPtg: Number.isNaN(n) ? 0 : n,
  };
}
function d(e) {
  let t = u.findDOMNode(e);
  if (t) {
    return t.offsetHeight;
  }
  return 0;
}
function p(scrollTop, t) {
  if (scrollTop < 0) {
    return 0;
  }
  if (scrollTop > t) {
    return t;
  }
  return scrollTop;
}
function f({ scrollTop, scrollHeight, clientHeight }) {
  let n = scrollHeight - clientHeight;
  if (n <= 0) {
    return 0;
  }
  return p(scrollTop, n) / n;
}
function h(e, data_length, l) {
  let { index, offsetPtg } = c(e, data_length);
  return {
    itemIndex: index,
    itemOffsetPtg: offsetPtg,
    startIndex: Math.max(0, index - Math.ceil(e * l)),
    endIndex: Math.min(data_length - 1, index + Math.ceil((1 - e) * l)),
  };
}
function v({ itemHeight, itemOffsetPtg, scrollPtg, clientHeight }) {
  return Math.floor(clientHeight * scrollPtg - itemHeight * itemOffsetPtg);
}
const y = ({ height, offset, children, outerStyle }) => {
  let a = {};
  let u = {
    display: "flex",
    flexDirection: "column",
  };
  if (offset !== undefined) {
    a = n._(
      {
        height,
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
      },
      outerStyle,
    );
    u = r._(n._({}, u), {
      transform: `translateY(${offset}px)`,
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
    });
  }
  return i.jsx("div", {
    style: a,
    children: i.jsx("div", {
      style: u,
      children,
    }),
  });
};
let j = `__virtual_item_height_${Math.random().toFixed(5).slice(2)}`;
let $ = a.forwardRef((e, t) => {
  let l;
  let u;
  let {
    style,
    className,
    children,
    data = [],
    itemKey,
    threshold = 100,
    wrapper = "div",
    height = "100%",
    isStaticItemHeight = true,
    itemHeight,
    measureLongestItem,
    scrollOptions,
    onScroll,
    needFiller = true,
    outerStyle,
  } = e;
  let H = o._(e, [
    "style",
    "className",
    "children",
    "data",
    "itemKey",
    "threshold",
    "wrapper",
    "height",
    "isStaticItemHeight",
    "itemHeight",
    "measureLongestItem",
    "scrollOptions",
    "onScroll",
    "needFiller",
    "outerStyle",
  ]);
  let maxHeight = (style && style.maxHeight) || height;
  let FRef = a.useRef({});
  let [K, setK] = a.useState(200);
  l = a.useRef({});
  u = a.useRef(children);
  a.useEffect(() => {
    u.current = children;
  }, [children]);
  if (children !== u.current) {
    l.current = {};
  }
  let B = (e, t, n) => {
    if (!l.current.hasOwnProperty(t)) {
      l.current[t] = children(e, t, n);
    }
    return l.current[t];
  };
  ((e) => {
    let t = b.A();
    let { current } = e;
    a.useEffect(() => {
      if (Object.keys(current).length && !current[j]) {
        current[j] = Object.entries(current).reduce((acc, [, t], index, n) => {
          let r = acc + t;
          if (index === n.length - 1) {
            return Math.round(r / n.length);
          }
          return r;
        }, 0);
        t();
      }
    }, [Object.keys(current).length]);
  })(FRef);
  let data_length = data.length;
  let itemHeight_1 = itemHeight || FRef.current[j] || 32;
  let height_1 = g.Et(maxHeight) ? maxHeight : K;
  let Z = Math.ceil(height_1 / itemHeight_1);
  let q = itemHeight_1 * data_length;
  let X = threshold !== null && data_length >= threshold && q > height_1;
  let JRef = a.useRef(null);
  let eeRef = a.useRef(null);
  let etRef = a.useRef(false);
  let elRef = a.useRef(X);
  let en = a.useMemo(() => {
    if (JRef.current) {
      let e = (e) =>
        Number(window.getComputedStyle(JRef.current)[e].replace(/\D/g, ""));
      return {
        top: e("paddingTop"),
        bottom: e("paddingBottom"),
      };
    }
    return {
      top: 0,
      bottom: 0,
    };
  }, [JRef.current]);
  let [er, eo] = _.A({
    status: "NONE",
    startIndex: 0,
    endIndex: 0,
    itemIndex: 0,
    itemOffsetPtg: 0,
    startItemTop: 0,
    scrollTop: 0,
  });
  let ei = x.A(data) || [];
  let ea = A.A();
  let eu = (e, t) => {
    if (typeof itemKey === "function") {
      return itemKey(e, t);
    }
    if (typeof itemKey === "string") {
      return e[itemKey];
    }
    return e.key || t;
  };
  let getItemKey = (e, t = data) => {
    if (e === t.length) {
      return "__rc_ghost_item__";
    }
    let l = t[e];
    if (l !== undefined) {
      return eu(l, e);
    }
    return null;
  };
  let ec = (e) => FRef.current[e] || itemHeight_1;
  let ed = (e) => {
    let { itemIndex, relativeTop } = e;
    let { scrollHeight, clientHeight } = JRef.current;
    let er_scrollTop = er.scrollTop;
    let u = scrollHeight - clientHeight;
    let Number_MAX_VALUE = Number.MAX_VALUE;
    let c = null;
    let d = null;
    let itemOffsetPtg_1 = null;
    let startIndex_1 = null;
    let endIndex_1 = null;
    let y = 0;
    for (let e = 0; e < u; e++) {
      let n = ((e, t, l) => {
        let n = t - 0;
        let r = e - t;
        if (l <= 2 * Math.min(n, r)) {
          let e = Math.floor(l / 2);
          if (l % 2) {
            return t + e + 1;
          }
          return t - e;
        }
        if (n > r) {
          return t - (l - r);
        }
        return t + (l - n);
      })(u, er_scrollTop, e);
      let r = f({
        scrollTop: n,
        scrollHeight,
        clientHeight,
      });
      let {
        itemIndex: itemIndex_1,
        itemOffsetPtg,
        startIndex,
        endIndex,
      } = h(r, data_length, Z);
      if (startIndex <= itemIndex && itemIndex <= endIndex) {
        let e = Math.abs(
          (({
            locatedItemRelativeTop,
            locatedItemIndex,
            compareItemIndex,
            startIndex,
            endIndex,
            getItemKey,
            itemElementHeights,
            itemHeight,
          }) => {
            let u = locatedItemRelativeTop;
            let s = getItemKey(compareItemIndex);
            if (compareItemIndex <= locatedItemIndex) {
              for (
                let e = locatedItemIndex;
                e >= startIndex && getItemKey(e) !== s;
                e -= 1
              ) {
                u -= itemElementHeights[getItemKey(e - 1)] || itemHeight;
              }
            } else {
              for (let e = locatedItemIndex; e <= endIndex; e += 1) {
                let t = getItemKey(e);
                if (t === s) {
                  break;
                }
                u += itemElementHeights[t] || itemHeight;
              }
            }
            return u;
          })({
            locatedItemRelativeTop: v({
              itemHeight: ec(getItemKey(itemIndex_1)),
              itemOffsetPtg,
              clientHeight,
              scrollPtg: r,
            }),
            locatedItemIndex: itemIndex_1,
            compareItemIndex: itemIndex,
            startIndex,
            endIndex,
            itemHeight: itemHeight_1,
            getItemKey,
            itemElementHeights: FRef.current,
          }) - relativeTop,
        );
        if (e < Number_MAX_VALUE) {
          Number_MAX_VALUE = e;
          c = n;
          d = itemIndex_1;
          itemOffsetPtg_1 = itemOffsetPtg;
          startIndex_1 = startIndex;
          endIndex_1 = endIndex;
          y = 0;
        } else {
          y += 1;
        }
      }
      if (y > 10) {
        break;
      }
    }
    if (c !== null) {
      etRef.current = true;
      JRef.current.scrollTop = c;
      eo(
        r._(n._({}, er), {
          status: "MEASURE_START",
          scrollTop: c,
          itemIndex: d,
          itemOffsetPtg: itemOffsetPtg_1,
          startIndex: startIndex_1,
          endIndex: endIndex_1,
        }),
      );
    }
    eeRef.current = m.e(() => {
      etRef.current = false;
    });
  };
  let ep = (e, t = false) => {
    let { scrollTop, clientHeight } = JRef.current;
    let i = p(scrollTop, q - clientHeight);
    if (!t && (i === er.scrollTop || etRef.current)) {
      return;
    }
    let { itemIndex, itemOffsetPtg, startIndex, endIndex } = h(
      f({
        scrollTop: i,
        clientHeight,
        scrollHeight: q,
      }),
      data_length,
      Z,
    );
    eo(
      r._(n._({}, er), {
        scrollTop: i,
        itemIndex,
        itemOffsetPtg,
        startIndex,
        endIndex,
        status: "MEASURE_START",
      }),
    );
    if (e && onScroll) {
      onScroll(e);
    }
  };
  a.useEffect(
    () => () => {
      if (eeRef.current) {
        m.N(eeRef.current);
      }
    },
    [],
  );
  a.useEffect(() => {
    if (JRef.current) {
      if (ea) {
        JRef.current.scrollTop = 0;
      }
      ep(null, true);
    }
  }, [Z]);
  a.useEffect(() => {
    let e = null;
    let t = elRef.current !== X ? (X ? "virtual" : "raw") : "";
    elRef.current = X;
    if (height_1 && ei.length !== data.length) {
      let t = ((e, t, l) => {
        let n;
        let r;
        let e_length = e.length;
        let t_length = t.length;
        if (e_length === 0 && t_length === 0) {
          return null;
        }
        if (e_length < t_length) {
          n = e;
          r = t;
        } else {
          n = t;
          r = e;
        }
        let a = {
          __EMPTY_ITEM__: true,
        };
        function u(e, t) {
          if (e !== undefined) {
            return l(e, t);
          }
          return a;
        }
        let s = null;
        let multiple = Math.abs(e_length - t_length) !== 1;
        for (let e = 0; e < r.length; e += 1) {
          let t = u(n[e], e);
          if (t !== u(r[e], e)) {
            s = e;
            multiple = multiple || t !== u(r[e + 1], e + 1);
            break;
          }
        }
        if (s === null) {
          return null;
        }
        return {
          index: s,
          multiple,
        };
      })(ei, data, eu);
      e = t ? t.index : null;
    }
    if (t || (X && e)) {
      let { clientHeight } = JRef.current;
      let relativeTop = v({
        itemHeight: ec(getItemKey(er.itemIndex, ei)),
        itemOffsetPtg: er.itemOffsetPtg,
        scrollPtg: f({
          scrollTop: er.scrollTop,
          scrollHeight: ei.length * itemHeight_1,
          clientHeight,
        }),
        clientHeight,
      });
      if (t === "raw") {
        let e = relativeTop;
        for (let t = 0; t < er.itemIndex; t++) {
          e -= ec(getItemKey(t));
        }
        JRef.current.scrollTop = -e;
        etRef.current = true;
        eeRef.current = m.e(() => {
          etRef.current = false;
        });
      } else {
        ed({
          itemIndex: er.itemIndex,
          relativeTop,
        });
      }
    }
  }, [data, X]);
  k.A(() => {
    if (er.status === "MEASURE_START") {
      let { scrollTop, scrollHeight, clientHeight } = JRef.current;
      let i = f({
        scrollTop,
        scrollHeight,
        clientHeight,
      });
      let startItemTop = ((e) => {
        const { scrollTop } = e;
        return scrollTop + v(o._(e, ["scrollTop"]));
      })({
        scrollPtg: i,
        clientHeight,
        scrollTop: scrollTop - (en.top + en.bottom) * i,
        itemHeight: ec(getItemKey(er.itemIndex)),
        itemOffsetPtg: er.itemOffsetPtg,
      });
      for (let e = er.itemIndex - 1; e >= er.startIndex; e--) {
        startItemTop -= ec(getItemKey(e));
      }
      eo(
        r._(n._({}, er), {
          startItemTop,
          status: "MEASURE_DONE",
        }),
      );
    }
  }, [er]);
  a.useImperativeHandle(
    t,
    () => ({
      dom: JRef.current,
      scrollTo: (e) => {
        if (eeRef.current) {
          m.N(eeRef.current);
        }
        eeRef.current = m.e(() => {
          var t;
          var l;
          if (typeof e === "number") {
            JRef.current.scrollTop = e;
            return;
          }
          let o =
            (l = e == null ? undefined : e.index) != null
              ? l
              : "key" in e
                ? data.findIndex((t, l) => eu(t, l) === e.key)
                : 0;
          let i = data[o];
          if (!i) {
            return;
          }
          let a =
            typeof e === "object" &&
            ((t = e.options) == null ? undefined : t.block)
              ? e.options.block
              : (scrollOptions == null ? undefined : scrollOptions.block) ||
                "nearest";
          let { clientHeight, scrollTop } = JRef.current;
          if (X && !isStaticItemHeight) {
            if (a === "nearest") {
              let { itemIndex, itemOffsetPtg } = er;
              if (Math.abs(itemIndex - o) < Z) {
                let l = v({
                  itemHeight: ec(getItemKey(itemIndex)),
                  itemOffsetPtg,
                  clientHeight,
                  scrollPtg: f(JRef.current),
                });
                if (o < itemIndex) {
                  for (let t = o; t < itemIndex; t++) {
                    l -= ec(getItemKey(t));
                  }
                } else {
                  for (let t = itemIndex; t < o; t++) {
                    l += ec(getItemKey(t));
                  }
                }
                if (!(l < 0) && !(l > clientHeight)) {
                  return;
                }
                a = l < 0 ? "start" : "end";
              } else {
                a = o < itemIndex ? "start" : "end";
              }
            }
            eo(
              r._(n._({}, er), {
                startIndex: Math.max(0, o - Z),
                endIndex: Math.min(data_length - 1, o + Z),
              }),
            ).then(() => {
              let e = ec(eu(i, o));
              ed({
                itemIndex: o,
                relativeTop:
                  a === "start"
                    ? 0
                    : (clientHeight - e) / (a === "center" ? 2 : 1),
              });
            });
          } else {
            let e = ec(getItemKey(o));
            let t = 0;
            for (let e = 0; e < o; e++) {
              t += ec(getItemKey(e));
            }
            let l = t + e;
            let n = t + e / 2;
            if (n > scrollTop && n < clientHeight + scrollTop) {
              return;
            }
            if (a === "nearest") {
              if (t < scrollTop) {
                a = "start";
              } else if (l > scrollTop + clientHeight) {
                a = "end";
              }
            }
            let r = clientHeight - e;
            JRef.current.scrollTop =
              t - (a === "start" ? 0 : r / (a === "center" ? 2 : 1));
          }
        });
      },
    }),
    [data, itemHeight_1, er],
  );
  let ef = (e, t) =>
    e.map((e, l) => {
      let n = t + l;
      let r = B(e, n, {
        style: {},
      });
      let o = eu(e, n);
      return a.cloneElement(r, {
        key: o,
        ref: (e) => {
          let { current } = FRef;
          if (
            e &&
            er.status === "MEASURE_START" &&
            (!isStaticItemHeight || current[o] === undefined)
          ) {
            if (isStaticItemHeight) {
              if (!current[j]) {
                current[j] = d(e);
              }
              current[o] = current[j];
            } else {
              current[o] = d(e);
            }
          }
        },
      });
    });
  let ehRef = a.useRef(null);
  a.useEffect(() => {
    ehRef.current = null;
  }, [data]);
  return i.jsx(C.A, {
    onResize: () => {
      if (JRef.current && !g.Et(maxHeight)) {
        let { clientHeight } = JRef.current;
        setK(clientHeight);
      }
    },
    children: i.jsx(
      wrapper,
      r._(
        n._(
          {
            ref: JRef,
            style: r._(
              n._(
                {
                  overflowY: "auto",
                  overflowAnchor: "none",
                },
                style,
              ),
              {
                maxHeight,
              },
            ),
            className,
            onScroll: X
              ? ep
              : (e) => {
                  let { scrollTop, clientHeight, scrollHeight } = JRef.current;
                  let scrollTop_1 = p(scrollTop, scrollHeight - clientHeight);
                  let { index, offsetPtg } = c(
                    f({
                      scrollTop: scrollTop_1,
                      clientHeight,
                      scrollHeight,
                    }),
                    data_length,
                  );
                  eo(
                    r._(n._({}, er), {
                      scrollTop: scrollTop_1,
                      itemIndex: index,
                      itemOffsetPtg: offsetPtg,
                    }),
                  );
                  if (e && onScroll) {
                    onScroll(e);
                  }
                },
          },
          H,
        ),
        {
          children: X
            ? i.jsxs(i.Fragment, {
                children: [
                  i.jsx(y, {
                    height: q,
                    offset: er.status === "MEASURE_DONE" ? er.startItemTop : 0,
                    outerStyle,
                    children: ef(
                      data.slice(er.startIndex, er.endIndex + 1),
                      er.startIndex,
                    ),
                  }),
                  (() => {
                    if (measureLongestItem) {
                      let e;
                      let t;
                      let l =
                        ehRef.current === null
                          ? ((e = -1),
                            (t = 0),
                            data.forEach((l, n) => {
                              var r;
                              if (
                                typeof (l =
                                  typeof l === "string"
                                    ? l
                                    : (r = l.props) == null
                                      ? undefined
                                      : r.children) === "string"
                              ) {
                                let r = s.A(l);
                                if (r > t) {
                                  t = r;
                                  e = n;
                                }
                              }
                            }),
                            e)
                          : ehRef.current;
                      let n = data[l];
                      ehRef.current = l;
                      if (n) {
                        return i.jsx("div", {
                          style: {
                            height: 1,
                            overflow: "hidden",
                            opacity: 0,
                          },
                          children: B(n, l, {
                            style: {},
                          }),
                        });
                      }
                      return null;
                    }
                    return null;
                  })(),
                ],
              })
            : needFiller
              ? i.jsx(y, {
                  height: height_1,
                  children: ef(data, 0),
                })
              : ef(data, 0),
        },
      ),
    ),
  });
});
$.displayName = "VirtualList";
var E = $;
export { E as A };
