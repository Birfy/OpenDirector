import r from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import { A as A_1 } from "./module-d1.js";
import { QO } from "./module-tMn.js";
import { A as A_2 } from "./module-ZC.js";
import { A as A_3 } from "./module-S0.js";
import { A as A_4 } from "./module-el_4.js";
import { A as A_5 } from "./module-zYa.js";
import { A as A_6 } from "./module-OBF.js";
import { A as A_7 } from "./module-LFK.js";
import { A as A_8 } from "./module-H2_2.js";
import { A as A_9 } from "./module-MA.js";
import { A as A_10 } from "./module-oO_3.js";
let u = s.forwardRef(function (e, t) {
  let { getPrefixCls } = s.useContext(QO);
  let {
    className,
    type = "line",
    count = 2,
    activeIndex = 0,
    position = "bottom",
    trigger = "click",
    onSelectIndex,
  } = e;
  let v = getPrefixCls("carousel-indicator");
  let g = [];
  if (type === "slider") {
    let e = 100 / count;
    g.push(
      l.jsx(
        "span",
        {
          style: {
            width: `${e}%`,
            left: `${activeIndex * e}%`,
          },
          className: A_1(`${v}-item`, `${v}-item-active`),
        },
        0,
      ),
    );
  } else {
    for (let e = 0; e < count; e++) {
      g.push(
        l.jsx(
          "span",
          {
            "data-index": e,
            className: A_1(`${v}-item`, {
              [`${v}-item-active`]: e === activeIndex,
            }),
          },
          e,
        ),
      );
    }
  }
  let y = {
    ref: t,
    className: A_1(v, `${v}-${type}`, `${v}-${position}`, className),
    [trigger === "click" ? "onClick" : "onMouseEnter"]: (e) => {
      e.preventDefault();
      if (type === "slider") {
        let t = e.nativeEvent.offsetX;
        let n = e.currentTarget.clientWidth;
        if (e.target === e.currentTarget) {
          let e = ~~((t / n) * count);
          if (e !== activeIndex) {
            onSelectIndex(e);
          }
        }
      } else {
        let t = e.target.getAttribute("data-index");
        if (t && Number(t) !== activeIndex) {
          onSelectIndex(Number(t));
        }
      }
    },
  };
  return l.jsx(
    "div",
    o._(r._({}, y), {
      children: g,
    }),
  );
});
let v = s.forwardRef(function (e, t) {
  let { className, direction, showArrow, prev, next, icons } = e;
  let b = A_6();
  let { getPrefixCls } = s.useContext(QO);
  let w = getPrefixCls("carousel");
  let j = A_1(
    `${w}-arrow`,
    {
      [`${w}-arrow-hover`]: showArrow === "hover",
    },
    className,
  );
  let O =
    icons && icons.hasOwnProperty("prev")
      ? icons.prev
      : direction === "horizontal"
        ? l.jsx(A_2, {})
        : l.jsx(A_4, {});
  let C =
    icons && icons.hasOwnProperty("next")
      ? icons.next
      : direction === "horizontal"
        ? l.jsx(A_3, {})
        : l.jsx(A_5, {});
  return l.jsxs("div", {
    ref: t,
    className: j,
    children: [
      l.jsx(
        "div",
        o._(
          r._(
            {
              className: `${w}-arrow-${direction === "vertical" ? "top" : "left"}`,
              onClick: prev,
              role: "button",
              tabIndex: 0,
            },
            b({
              onPressEnter: prev,
            }),
          ),
          {
            children: O,
          },
        ),
      ),
      l.jsx(
        "div",
        o._(
          r._(
            {
              className: `${w}-arrow-${direction === "vertical" ? "bottom" : "right"}`,
              onClick: next,
              role: "button",
              tabIndex: 0,
            },
            b({
              onPressEnter: next,
            }),
          ),
          {
            children: C,
          },
        ),
      ),
    ],
  });
});
v.defaultProps = {
  direction: "horizontal",
  showArrow: "always",
};
let w = {
  animation: "slide",
  indicatorType: "dot",
  indicatorPosition: "bottom",
  direction: "horizontal",
  showArrow: "always",
  trigger: "click",
  moveSpeed: 500,
  timingFunc: "cubic-bezier(0.34, 0.69, 0.1, 1)",
};
export let A = s.forwardRef(function (e, t) {
  let n;
  let d;
  let p;
  let f;
  let h;
  let m;
  let { getPrefixCls, componentConfig, rtl } = s.useContext(QO);
  let N = A_10(
    e,
    w,
    componentConfig == null ? undefined : componentConfig.Carousel,
  );
  let {
    style,
    className,
    children,
    currentIndex,
    animation,
    trigger,
    direction,
    moveSpeed,
    timingFunc,
    indicatorType,
    indicatorPosition,
    indicatorClassName,
    showArrow,
    miniRender,
    arrowClassName,
    carousel,
    icons,
    onChange,
  } = N;
  let F = i._(N, [
    "style",
    "className",
    "children",
    "currentIndex",
    "animation",
    "trigger",
    "direction",
    "moveSpeed",
    "timingFunc",
    "indicatorType",
    "indicatorPosition",
    "indicatorClassName",
    "showArrow",
    "miniRender",
    "arrowClassName",
    "carousel",
    "icons",
    "onChange",
  ]);
  let { autoPlay } = N;
  if (autoPlay && N.autoPlaySpeed) {
    autoPlay = {
      interval: N.autoPlaySpeed,
    };
    A_8(
      true,
      "[Arco Carousel] The 'autoPlaySpeed' property will be removed in the next major version, please use 'autoPlay.interval' instead.",
    );
  }
  let Y = s.Children.toArray(children).filter((e) => s.isValidElement(e));
  let Y_length = Y.length;
  let URef = s.useRef(null);
  let ZRef = s.useRef(null);
  let QRef = s.useRef(null);
  let [q, setQ] = s.useState(
    typeof currentIndex === "number" ? eh(currentIndex) : 0,
  );
  let [J, setJ] = s.useState(q);
  let [et, setEt] = s.useState(false);
  let [er, setEr] = s.useState(false);
  let [ei, setEi] = s.useState(null);
  let [es, setEs] = s.useState({
    sliderWrapper: null,
    indicatorWrapper: null,
  });
  let ec = typeof currentIndex === "number" ? eh(currentIndex) : q;
  let eu = eh(ec - 1);
  let ed = eh(ec + 1);
  let ep =
    typeof autoPlay === "object" && autoPlay.interval
      ? autoPlay.interval
      : 3000;
  s.useEffect(() => () => QRef.current && clearTimeout(QRef.current), []);
  s.useEffect(() => {
    em({
      targetIndex: ec,
    });
  }, [ec]);
  n = () => {
    em({
      targetIndex: ed,
    });
  };
  d = autoPlay && !et && Y_length > 1 ? ep : null;
  p = s.useRef(null);
  f = s.useRef();
  h = () => {
    if (d !== null) {
      p.current = setInterval(() => {
        f.current();
      }, d);
    }
  };
  m = () => {
    if (p.current) {
      clearInterval(p.current);
    }
  };
  s.useEffect(() => {
    f.current = n;
  }, [n]);
  s.useEffect(() => {
    h();
    return m;
  }, [d]);
  let ef = () => {
    m();
    h();
  };
  function eh(e) {
    let t = Number(e);
    if (typeof t !== "number" || isNaN(t)) {
      return e;
    }
    return (t + Y_length) % Y_length;
  }
  function em({
    targetIndex,
    isNegative = false,
    isManual = false,
    resetAutoPlayInterval = false,
  }) {
    if (!(er || targetIndex === ec)) {
      setEr(true);
      setQ(targetIndex);
      setJ(q);
      setEi(isNegative ? "negative" : "positive");
      if (onChange) {
        onChange(targetIndex, ec, isManual);
      }
      if (autoPlay && resetAutoPlayInterval) {
        ef();
      }
      QRef.current = setTimeout(() => {
        setEr(false);
        QRef.current = null;
      }, moveSpeed);
    }
  }
  s.useImperativeHandle(carousel, () => ({
    dom: URef.current,
    goto: ({ index, isNegative, isManual, resetAutoPlayInterval }) => {
      em({
        targetIndex: eh(index),
        isNegative,
        isManual,
        resetAutoPlayInterval,
      });
    },
  }));
  let ev = getPrefixCls("carousel");
  let eg = A_1(
    ev,
    `${ev}-indicator-position-${indicatorPosition}`,
    {
      [`${ev}-rtl`]: rtl,
    },
    className,
  );
  let ey = {
    ...(autoPlay &&
    (typeof autoPlay !== "object" || autoPlay.hoverToPause !== false)
      ? {
          onMouseEnter: () => setEt(true),
          onMouseLeave: () => setEt(false),
        }
      : null),
  };
  return l.jsx(A_7, {
    onResize: function () {
      if (animation === "card") {
        if (ZRef.current) {
          let e = ZRef.current.children[0];
          if (!e) {
            return;
          }
          let t = ZRef.current.clientWidth;
          let n = e.clientWidth;
          let r = (t - n) / 2;
          let o = t / 2;
          setEs({
            sliderWrapper: {
              perspective: o + 50 >= n ? 800 : (200 * o) / (n - o),
            },
            indicatorWrapper: {
              width: "auto",
              left: r,
              right: r,
            },
          });
        }
      } else {
        setEs({
          sliderWrapper: null,
          indicatorWrapper: null,
        });
      }
    },
    children: l.jsxs(
      "div",
      o._(
        r._(
          {
            ref: (e) => {
              URef.current = e;
            },
            className: eg,
            style,
          },
          A_9(F, ["autoplay", "autoPlaySpeed"]),
          ey,
        ),
        {
          children: [
            l.jsx("div", {
              ref: ZRef,
              style: es.sliderWrapper,
              className: A_1(`${ev}-${animation}`, `${ev}-${direction}`, {
                [`${ev}-negative`]: ei === "negative",
              }),
              children: Y.map((e, t) => {
                let n = t === ec;
                let r = t === eu;
                let o = t === ed;
                if (!(!miniRender || n || r || o)) {
                  return null;
                }
                let { style, className, onClick } = e.props;
                return s.cloneElement(e, {
                  "aria-hidden": !n,
                  style: {
                    transitionTimingFunction: timingFunc,
                    transitionDuration: `${moveSpeed}ms`,
                    animationTimingFunction: timingFunc,
                    animationDuration: `${moveSpeed}ms`,
                    ...style,
                  },
                  className: A_1(className, {
                    [`${ev}-item-prev`]: r,
                    [`${ev}-item-next`]: o,
                    [`${ev}-item-current`]: n,
                    [`${ev}-item-slide-in`]:
                      animation === "slide" && ei && er && n,
                    [`${ev}-item-slide-out`]:
                      animation === "slide" && ei && er && t === J,
                  }),
                  onClick: (e) => {
                    if (onClick) {
                      onClick(e);
                    }
                    em({
                      targetIndex: t,
                      isNegative: t === eu,
                      isManual: true,
                    });
                  },
                });
              }),
            }),
            indicatorType !== "never" &&
              Y_length > 1 &&
              l.jsx("div", {
                style: es.indicatorWrapper,
                className: A_1(
                  `${ev}-indicator-wrapper`,
                  `${ev}-indicator-wrapper-${indicatorPosition}`,
                ),
                children: l.jsx(u, {
                  className: indicatorClassName,
                  type: indicatorType,
                  count: Y_length,
                  activeIndex: ec,
                  position: indicatorPosition,
                  trigger,
                  onSelectIndex: (e) =>
                    em({
                      targetIndex: e,
                      isNegative: e < ec,
                      isManual: true,
                    }),
                }),
              }),
            showArrow !== "never" &&
              Y_length > 1 &&
              l.jsx(v, {
                className: arrowClassName,
                direction,
                showArrow,
                icons,
                prev: () =>
                  em({
                    targetIndex: eu,
                    isNegative: true,
                    isManual: true,
                  }),
                next: () =>
                  em({
                    targetIndex: ed,
                    isManual: true,
                  }),
              }),
          ],
        },
      ),
    ),
  });
});
A.displayName = "Carousel";
