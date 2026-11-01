import _r from "fyk";
import a from "bT";
import o from "wnX";
import { FI, Wb } from "./module-rJ.js";
import { Jg, SE, VP, oq, w5, xC, yx } from "./module-jW8.js";
export const A = a.forwardRef(function (e, t) {
  const e_className = e.className;
  const e_wrapStyle = e.wrapStyle;
  const e_style = e.style;
  const e_children = e.children;
  const e_list = e.list;
  const f = e_list === undefined ? [] : e_list;
  const e_animateDuration = e.animateDuration;
  const m = e_animateDuration === undefined ? 500 : e_animateDuration;
  const e_animateDurationSlide = e.animateDurationSlide;
  const p = e_animateDurationSlide === undefined ? 300 : e_animateDurationSlide;
  const e_loop = e.loop;
  const e_autoPlay = e.autoPlay;
  const b = e_autoPlay === undefined || e_autoPlay;
  const e_autoPlayDirection = e.autoPlayDirection;
  const x = e_autoPlayDirection === undefined ? "normal" : e_autoPlayDirection;
  const e_swipeable = e.swipeable;
  const e_stayDuration = e.stayDuration;
  const w = e_stayDuration === undefined ? 4000 : e_stayDuration;
  const e_boxWidth = e.boxWidth;
  const e_boxHeight = e.boxHeight;
  const e_baseBoxWidth = e.baseBoxWidth;
  const e_baseBoxHeight = e.baseBoxHeight;
  const e_width = e.width;
  const D = e_width === undefined ? 0 : e_width;
  const e_height = e.height;
  const e_initialIndex = e.initialIndex;
  const e_renderIndicator = e.renderIndicator;
  const e_indicatorPos = e.indicatorPos;
  const O = e_indicatorPos === undefined ? "center" : e_indicatorPos;
  const e_indicatorVerticalPos = e.indicatorVerticalPos;
  const M =
    e_indicatorVerticalPos === undefined ? "left" : e_indicatorVerticalPos;
  const e_indicatorOutside = e.indicatorOutside;
  const e_showIndicator = e.showIndicator;
  const H = e_showIndicator === undefined || e_showIndicator;
  const e_hideSingleIndicator = e.hideSingleIndicator;
  const X = e_hideSingleIndicator === undefined || e_hideSingleIndicator;
  const e_indicatorType = e.indicatorType;
  const q = e_indicatorType === undefined ? "square" : e_indicatorType;
  const e_indicatorClass = e.indicatorClass;
  const Y = e_indicatorClass === undefined ? "" : e_indicatorClass;
  const e_indicatorInverse = e.indicatorInverse;
  const e_spaceBetween = e.spaceBetween;
  const U = e_spaceBetween === undefined ? 0 : e_spaceBetween;
  const e_offsetBetween = e.offsetBetween;
  const Q = e_offsetBetween === undefined ? 0 : e_offsetBetween;
  const e_currentIndex = e.currentIndex;
  const e_autoHeight = e.autoHeight;
  const ee = e_autoHeight !== undefined && e_autoHeight;
  const e_percentToChange = e.percentToChange;
  const en = e_percentToChange === undefined ? 0.3 : e_percentToChange;
  const e_distanceToChange = e.distanceToChange;
  const ei = e_distanceToChange === undefined ? 10 : e_distanceToChange;
  const e_speedToChange = e.speedToChange;
  const eo = e_speedToChange === undefined ? 100 : e_speedToChange;
  const e_vertical = e.vertical;
  const e_lazyloadCount = e.lazyloadCount;
  const e_inactiveScale = e.inactiveScale;
  const es = e_inactiveScale === undefined ? 1 : e_inactiveScale;
  const e_stopPropagation = e.stopPropagation;
  const ef = e_stopPropagation === undefined || e_stopPropagation;
  const e_fakeItem = e.fakeItem;
  const em = e_fakeItem !== undefined && e_fakeItem;
  const e_allowEndBlank = e.allowEndBlank;
  const ep = e_allowEndBlank !== undefined && e_allowEndBlank;
  const e_bounceWhenNoLoop = e.bounceWhenNoLoop;
  const eE = e_bounceWhenNoLoop !== undefined && e_bounceWhenNoLoop;
  const e_bounceDampRate = e.bounceDampRate;
  const ey = e_bounceDampRate === undefined ? 3 : e_bounceDampRate;
  const e_iOSVisibleOptimize = e.iOSVisibleOptimize;
  const e_distanceProcessor = e.distanceProcessor;
  const e_getInnerScrollContainer = e.getInnerScrollContainer;
  const e_onChange = e.onChange;
  const e_onAfterChange = e.onAfterChange;
  const e_onTouchStart = e.onTouchStart;
  const e_onTouchMove = e.onTouchMove;
  const e_onTouchEnd = e.onTouchEnd;
  const e_onTransitionStart = e.onTransitionStart;
  const e_onTransitionEnd = e.onTransitionEnd;
  const e_onDistanceChange = e.onDistanceChange;
  const e_stopTouchThreshold = e.stopTouchThreshold;
  const eV = e_stopTouchThreshold === undefined ? 0 : e_stopTouchThreshold;
  const e_onTouchStopped = e.onTouchStopped;
  const e_onPageVisibleChange = e.onPageVisibleChange;
  const useRtl = a.useContext(FI).useRtl;
  const eM = !e_vertical && useRtl;
  const ePRef = a.useRef(null);
  const eWRef = a.useRef(null);
  const eHRef = a.useRef(null);
  const ezRef = a.useRef([]);
  const eXRef = a.useRef(null);
  const eJRef = a.useRef(null);
  const eqRef = a.useRef(-1);
  const ejRef = a.useRef(0);
  const eYRef = a.useRef(false);
  const eBRef = a.useRef(false);
  const eG = a.useState(e_baseBoxWidth || 0);
  const eU = eG[0];
  const eZ = eG[1];
  const eQ = a.useState(e_baseBoxHeight || 0);
  const eK = eQ[0];
  const e$ = eQ[1];
  const e0Ref = a.useRef(0);
  const e1Ref = a.useRef(0);
  const e2Ref = a.useRef(null);
  const e3Ref = a.useRef(false);
  const e5Ref = a.useRef(false);
  const e4 = a.useState("auto");
  const e9 = e4[0];
  const e7 = e4[1];
  const e6 = oq(false);
  const e8 = e6[0];
  const te = e6[1];
  const tt = e6[2];
  const tn = oq(0);
  const tr = tn[0];
  const ti = tn[1];
  const ta = tn[2];
  const to = a.useState(true);
  const tl = to[0];
  const tu = to[1];
  const tc = oq(
    e_currentIndex !== undefined
      ? e_currentIndex
      : e_initialIndex === undefined
        ? 0
        : e_initialIndex,
  );
  const ts = tc[0];
  const td = tc[1];
  const tf = tc[2];
  const tv = oq([]);
  const tm = tv[0];
  const th = tv[1];
  const tp = tv[2];
  const tg = oq((x === "reverse" || eM) && b ? "right" : "left");
  const tE = tg[0];
  const tb = tg[1];
  const ty = tg[2];
  const txRef = a.useRef("");
  const tCRef = a.useRef(-1);
  const tk = (() => {
    let allChildren = [];
    let fakeTwoChildren = false;
    if (f && f.length) {
      let n = f;
      if (f.length === 2 && em) {
        fakeTwoChildren = true;
        n = f.concat(f);
      }
      allChildren = n.map((e, key) =>
        a.createElement(
          a.Fragment,
          null,
          a.createElement("img", {
            key,
            className: "carousel-item-img needsclick",
            src: e.src,
            alt: "",
            onClick: e.onClick,
          }),
          e.text
            ? a.createElement(
                "div",
                {
                  className: "carousel-item-text",
                },
                e.text,
              )
            : null,
        ),
      );
    } else {
      if (
        e_children &&
        Object.prototype.toString.call(e_children) === "[object Array]"
      ) {
        if ((allChildren = e_children).length === 2 && em) {
          fakeTwoChildren = true;
          allChildren = [].concat(allChildren, allChildren);
        }
      } else {
        allChildren = e_children ? [e_children] : [];
      }
    }
    return {
      allChildren,
      fakeTwoChildren,
    };
  })();
  const tk_allChildren = tk.allChildren;
  const tk_fakeTwoChildren = tk.fakeTwoChildren;
  const tw_length = tk_allChildren.length;
  const tN = tk_fakeTwoChildren ? 2 : tw_length;
  const tS = a.useMemo(
    function () {
      const e = [];
      for (let t = 0; t < tN; t += 1) {
        e.push(t);
      }
      return e;
    },
    [tN],
  );
  const tR = eM ? -1 : 1;
  const left = eM ? "right" : "left";
  const right = eM ? "left" : "right";
  const tA = typeof Q === "number" ? Q : Q.left || 0;
  const tV = typeof Q === "number" ? Q : Q.right || 0;
  const tL = e_vertical ? eK : eU;
  const tO = (D || eU) - U - (tA + tV);
  const t_ = (e_height || eK) - U - (tA + tV);
  const tM = e_vertical ? t_ : tO;
  const noLoop =
    !(e_loop === undefined || e_loop) ||
    (!e_vertical && !!D) ||
    (e_vertical && !!e_height) ||
    tw_length < 2 ||
    ((tA > 0 || tV > 0) && !em);
  const tW = t6(ts);
  const tH = tl ? m : p;
  const tz = tl ? "auto" : "slide";
  const tX = e_currentIndex !== undefined;
  const tJ = (e_swipeable === undefined || e_swipeable) && !tX && tM > 0;
  const width = e_boxWidth || e_baseBoxWidth;
  const tj = e_boxHeight || e_baseBoxHeight;
  const tY = noLoop || !b || tX || tM <= 0;
  const tB = a.useMemo(
    function () {
      return Math.max(0, Math.min(es, 1));
    },
    [es],
  );
  const tG = a.useState([]);
  const tU = tG[0];
  const tZ = tG[1];
  const tQ = Jg();
  const tK =
    !tY &&
    tQ === "ios" &&
    (e_iOSVisibleOptimize === undefined || e_iOSVisibleOptimize);
  const t$ = a.useCallback(function (e) {
    ty(function (t) {
      txRef.current = t;
      return e;
    });
  }, []);
  const t0 = SE(tL);
  const t1 = SE(updateData);
  var t2 = SE(function () {
    nr();
    if (!tY) {
      eJRef.current = setTimeout(() => {
        ne(x === "reverse" ? td.current - 1 : td.current + 1);
      }, w);
    }
  });
  const t3 = a.useCallback(
    function (e) {
      if (
        !(e_onTouchStart && e_onTouchStart(e, tN, t6(td.current))) &&
        !te.current
      ) {
        eYRef.current = true;
        eBRef.current = false;
        nr();
        const t = e.touches[0];
        e0Ref.current = t.clientX || 0;
        e1Ref.current = t.clientY || 0;
        e2Ref.current = null;
        e3Ref.current = false;
        tt(false);
        ejRef.current = new Date().getTime();
      }
    },
    [tN, e_onTouchStart],
  );
  const t5 = a.useCallback(
    function (e) {
      const t = Math.abs(e) > eV;
      if (!e3Ref.current && t && e_onTouchStopped) {
        e_onTouchStopped(e >= 0 ? -1 : 1);
      }
      e3Ref.current = t;
    },
    [eV, e_onTouchStopped],
  );
  const t4 = a.useCallback(
    function (e) {
      if (!(e_onTouchMove && e_onTouchMove(e, tN, t6(td.current)))) {
        if (ef) {
          e.stopPropagation();
        }
        if (!eYRef.current || te.current) {
          if (e.cancelable) {
            e.preventDefault();
          }
          return;
        }
        eBRef.current = true;
        const t = e.changedTouches[0];
        const n = Math.max(0, t.clientX || 0);
        const r = t.clientY || 0;
        const i = n - e0Ref.current;
        const a = r - e1Ref.current;
        const o = Math.abs(i);
        const l = Math.abs(a);
        const u = (
          e_distanceProcessor ||
          function (e, t, n) {
            return (e / t) * n;
          }
        )(e_vertical ? a : i, t0.current, tM);
        if (tw_length < 2) {
          return void t5(u);
        }
        if (e2Ref.current === null) {
          e2Ref.current = e_vertical ? l < o : o < l;
        }
        if (e2Ref.current) {
          ta(0);
          e3Ref.current = true;
          t2.current();
          return;
        }
        t$(u >= 0 ? "right" : "left");
        const c = u * tR;
        if (
          noLoop &&
          ((td.current === 0 && c > 0) ||
            (td.current === tw_length - 1 && c < 0))
        ) {
          t5(u);
          if (eE && ey) {
            if (e.cancelable) {
              e.preventDefault();
            }
            e5Ref.current = true;
            ta(u / ey);
          } else {
            ta(0);
          }
          return;
        }
        if (e.cancelable) {
          e.preventDefault();
        }
        e3Ref.current = false;
        ta(u > 0 ? Math.min(tM, u) : Math.max(-1 * tM, u));
      }
    },
    [tN, noLoop, e_vertical, tM, ef, eE, ey, eM, e_onTouchMove, t5],
  );
  a.useImperativeHandle(
    t,
    function () {
      return {
        dom: ePRef.current,
        wrap: eWRef.current,
        items: ezRef.current,
        noLoop,
        updateData,
        changeIndex,
      };
    },
    [updateData, changeIndex],
  );
  VP(updateData, [updateData]);
  xC(e_getInnerScrollContainer);
  const t9 = a.useCallback(function () {
    if (eXRef.current) {
      eXRef.current.style.display = "none";
    }
    if (eWRef.current) {
      eWRef.current.style.display = "";
    }
    t1.current();
  }, []);
  const t7 = a.useCallback(function () {
    nr();
    if (eWRef.current && eXRef.current) {
      eXRef.current.style.height = (eWRef.current.offsetHeight || 0) + "px";
      eXRef.current.style.display = "block";
      eWRef.current.style.display = "none";
    }
  }, []);
  function t6(e) {
    const t = e === tw_length ? 0 : e;
    const n = e === -1 ? tw_length - 1 : t;
    if (tk_fakeTwoChildren) {
      return n % 2;
    }
    return n;
  }
  function changeIndex(e, t, n) {
    if (!te.current) {
      if (n) {
        const r = {
          left,
          right,
        }[n];
        t$(r);
        o.dY(function () {
          ne(e, true, t, r);
        });
      } else {
        ne(e, true, t);
      }
    }
  }
  function ne(e, t = true, n, r) {
    const i = t6(td.current);
    const a = e !== i ? t6(e) : -1;
    if (r) {
      t$(r);
    } else if (t) {
      t$(x === "reverse" || eM ? "right" : "left");
    } else if (e === td.current) {
      t$(ti.current > 0 ? "right" : "left");
    } else {
      t$("");
    }
    tt(true);
    tu(t);
    ta(0);
    tf(e);
    ejRef.current = 0;
    if (e_onTransitionStart) {
      e_onTransitionStart();
    }
    setTimeout(
      () => {
        tt(false);
        o.dY(function () {
          t$(
            (t = td.current) === tw_length - 1
              ? eM
                ? "right"
                : "left"
              : t === 0
                ? eM
                  ? "left"
                  : "right"
                : "",
          );
          var t;
          const n = th.current.slice();
          let r = false;
          if (e === -1 && eqRef.current >= 0) {
            n[eqRef.current] = 0;
            r = true;
            tf(tw_length - 1);
          } else if (e === tw_length && eqRef.current >= 0) {
            n[eqRef.current] = 0;
            r = true;
            tf(0);
          }
          if (r) {
            tp(n);
          }
          tu(true);
          if (e_onTransitionEnd) {
            e_onTransitionEnd();
          }
          if (a >= 0 && e_onAfterChange) {
            e_onAfterChange(a, i);
          }
          o.dY(function () {
            t2.current();
          });
        });
      },
      n ? 0 : t ? m : p,
    );
    if (t) {
      t$("");
    }
  }
  function nt() {
    if (eWRef.current) {
      eZ(eWRef.current.offsetWidth);
      e$(eWRef.current.offsetHeight);
    }
    if (eHRef.current && ee && !e_vertical) {
      e7((ezRef.current[t6(td.current)] || {}).offsetHeight || "auto");
    }
  }
  function updateData() {
    nt();
    t2.current();
  }
  function nr() {
    if (eJRef.current) {
      clearTimeout(eJRef.current);
      eJRef.current = null;
    }
  }
  function ni() {
    if (!noLoop) {
      const e = td.current;
      const t = th.current.slice();
      const n = Math.max(0, tM);
      tk_allChildren.forEach((r, i) => {
        if (e === 0 && tb.current === right && i === tw_length - 1) {
          eqRef.current = i;
          t[i] = -1 * tw_length * n * tR;
        } else if (e === tw_length - 1 && tb.current === left && i === 0) {
          eqRef.current = i;
          t[i] = tw_length * n * tR;
        } else if (e >= 0 && e < tw_length) {
          t[i] = 0;
        }
      });
      tp(t);
    }
  }
  function na(e) {
    if (
      !(
        !tJ ||
        (e_onTouchEnd && e_onTouchEnd(e.nativeEvent, tN, t6(td.current)))
      )
    ) {
      if (ef) {
        e.stopPropagation();
      }
      if (e5Ref.current) {
        e5Ref.current = false;
        ne(ts, false);
        return;
      }
      if (eYRef.current && eBRef.current && !te.current && !e3Ref.current) {
        eYRef.current = false;
        eBRef.current = false;
        const t = new Date().getTime();
        const n = Math.abs(tr);
        const r = (n / (t - ejRef.current)) * 1000;
        const i = (n > tM * en && n > ei) || r > eo;
        const a = tr * tR;
        if (a > 0 && i) {
          ne(ts - 1, false);
        } else if (a < 0 && i) {
          ne(ts + 1, false);
        } else {
          ne(ts, false);
        }
      }
    }
  }
  function no() {
    return {
      transitionProperty: e8 ? "transform" : "none",
      transitionDuration: e8 ? tH + "ms" : "0ms",
    };
  }
  function nl(e, t) {
    let c;
    const s = e_vertical ? tj : "100%";
    const d = eM ? "paddingRight" : "paddingLeft";
    const f = eM ? "paddingLeft" : "paddingRight";
    const v = {
      size: e_vertical ? "height" : "width",
      paddingStart: e_vertical ? "paddingTop" : d,
      paddingEnd: e_vertical ? "paddingBottom" : f,
      translate: e_vertical ? "translateY" : "translateX",
    };
    const m = t
      ? {
          visibility:
            (e === tw_length && tm[0] > 0) ||
            (e === -1 && tm[tw_length - 1] < 0)
              ? "hidden"
              : "initial",
        }
      : {
          transform: v.translate + "(" + (tm[e] || 0) + "px)",
        };
    const h =
      tM > 0
        ? {
            [v.size]: tM - U,
            [v.paddingStart]: U,
            boxSizing: "content-box",
          }
        : {
            [v.size]: s,
            [v.paddingStart]: U + tA,
            [v.paddingEnd]: U + tV,
            boxSizing: "border-box",
            transform:
              v.translate +
              "(" +
              (e === ts ? 0 : (ts - e) * (U + tA + tV)) +
              "px)",
          };
    const p = t
      ? ((c = {
          leftDirec: e_vertical ? "top" : left,
          rightDirec: e_vertical ? "bottom" : right,
          otherDirec: e_vertical ? "left" : "top",
          trans: e_vertical ? "Y" : "X",
        }),
        _r(
          {
            position: "absolute",
            [c.otherDirec]: 0,
          },
          e >= 0
            ? {
                [c.leftDirec]: tM > 0 ? "100%" : `${100 * tw_length}%`,
                transform:
                  "translate" +
                  c.trans +
                  "(" +
                  (e - tw_length) * tR * 100 +
                  "%)",
              }
            : {
                [c.rightDirec]: "100%",
                transform:
                  "translate" + c.trans + "(" + (e + 1) * tR * 100 + "%)",
              },
        ))
      : {};
    if (t && tM < 0) {
      delete p.transform;
    }
    return yx(_r({}, m, h, p));
  }
  function nu(e, t, n) {
    if (tB === 1) {
      return e;
    }
    return a.createElement(
      "div",
      {
        className: n + "-item-inner",
        style: ((e) => {
          let t;
          let n;
          let r;
          let a;
          let o;
          let l;
          let c;
          let s;
          const d = no();
          if (tm[(t = e)] * tR > 0) {
            t = tw_length;
          } else if (tm[t] * tR < 0) {
            t = -1;
          }
          const f = t;
          const v = tr / tM || 0;
          const m =
            (f === ts - 1 && tE === right) || (f === ts + 1 && tE === left)
              ? tB + (1 - tB) * Math.abs(v)
              : f === ts
                ? 1 - (1 - tB) * Math.abs(v)
                : tB;
          const h = {
            transform:
              ((n = ts - f),
              (r = 1 - tB),
              (a = v * tR),
              (o = 0),
              Math.abs(n) > 1
                ? (o = ((n > 0 ? 1 : -1) * (Math.abs(n) - 1) - a) * r * tR)
                : ((n === -1 && a > 0) || (n === 1 && a < 0)) &&
                  (o = -1 * v * r),
              `translate${e_vertical ? "Y" : "X"}(${100 * o}%) scale(` +
                m +
                ")"),
            transformOrigin:
              ((l = 0.5),
              (c = f - ts) == 0
                ? (l = +(
                    tE !== "right" &&
                    (tE !== "" || txRef.current !== "left")
                  ))
                : c <= -1
                  ? (l = +!eM)
                  : c >= 1 && (l = +!!eM),
              (s = `${100 * l}%`),
              e_vertical ? "center " + s : s + " center"),
          };
          return yx(_r({}, d, h));
        })(t),
      },
      e,
    );
  }
  a.useEffect(
    function () {
      if (e_onPageVisibleChange) {
        return e_onPageVisibleChange(t9, t7);
      }
      const e = function () {
        if (document.visibilityState === "visible") {
          t9();
        } else {
          t7();
        }
      };
      document.addEventListener("visibilitychange", e);
      return function () {
        document.removeEventListener("visibilitychange", e);
      };
    },
    [e_onPageVisibleChange],
  );
  a.useEffect(
    function () {
      if (ei > 0 && ei < 1) {
        console.warn(
          "[Carousel Props Warning] The value of the prop `distanceToChange` is too small(" +
            ei +
            "). Do you meant to use the prop `percentToChange`?",
        );
      }
    },
    [ei],
  );
  a.useEffect(
    function () {
      if (e_vertical && !e_boxHeight) {
        console.warn(
          "[Carousel Rendering Warning] When the prop `vertical` is specified and the prop `boxHeight` is not specified, you need to set a fixed `height` style for the outermost element.",
        );
      }
    },
    [e_vertical, e_boxHeight],
  );
  a.useEffect(
    function () {
      if (eWRef.current && tJ) {
        eWRef.current.addEventListener("touchstart", t3);
        eWRef.current.addEventListener("touchmove", t4);
      }
      return function () {
        if (eWRef.current && tJ) {
          eWRef.current.removeEventListener("touchstart", t3);
          eWRef.current.removeEventListener("touchmove", t4);
        }
      };
    },
    [t3, t4, tJ],
  );
  a.useEffect(
    function () {
      updateData();
      return function () {
        nr();
      };
    },
    [width, tj, tO, t_, w, tY, x],
  );
  w5(
    function () {
      if (e_currentIndex !== undefined) {
        ne(e_currentIndex);
      }
    },
    [e_currentIndex],
  );
  w5(
    function () {
      if (e_onDistanceChange) {
        e_onDistanceChange(tr, tL, ts);
      }
    },
    [tr, tL, ts],
  );
  a.useEffect(
    function () {
      if (tk_allChildren.length && td.current >= tk_allChildren.length) {
        ne(tk_allChildren.length - 1, true, true);
      } else if (td.current < 0) {
        ne(0, true, true);
      }
    },
    [tk_allChildren.length],
  );
  a.useEffect(
    function () {
      if (tl && e8) {
        setTimeout(() => {
          ni();
        }, 100);
      } else {
        ni();
      }
    },
    [ts, tE, tM, tw_length, eM],
  );
  a.useEffect(
    function () {
      o.dY(function () {
        nt();
      });
    },
    [tW, ee, tk_allChildren],
  );
  w5(
    function () {
      if (typeof e_onChange === "function") {
        e_onChange(tW);
      }
    },
    [tW],
  );
  a.useEffect(
    function () {
      return function () {
        tCRef.current = tW;
      };
    },
    [tW],
  );
  a.useEffect(
    function () {
      if (em && !e8) {
        (() => {
          const e = tU.slice();
          if (tM <= 0) {
            if (ts === 0) {
              e[0] = {
                index: tw_length - 1,
                side: "left",
              };
            }
            if (ts === tw_length - 1) {
              e[2] = {
                index: 0,
                side: "right",
              };
            }
            tZ(e);
            return;
          }
          if ((ts === 1 && tE === right) || (ts === 0 && tE !== right)) {
            e[0] = {
              index: tw_length - 1,
              side: "left",
            };
          }
          if ((ts === 0 && tE === right) || ts === -1) {
            e[1] = {
              index: tw_length - 2,
              side: "left",
            };
          }
          if (
            (ts === tw_length - 2 && tE === left) ||
            (ts === tw_length - 1 && tE !== left)
          ) {
            e[2] = {
              index: 0,
              side: "right",
            };
          }
          if ((ts === tw_length - 1 && tE === left) || ts === tw_length) {
            e[3] = {
              index: 1,
              side: "right",
            };
          }
          tZ(e);
        })();
      }
    },
    [e8, ts, tE, tw_length, tM, eM],
  );
  return a.createElement(Wb, null, function (e) {
    const className = e.prefixCls + "-carousel";
    return a.createElement(
      "div",
      {
        className: o.xF(className + "-wrap", e_className),
        style: e_wrapStyle,
        ref: ePRef,
      },
      tK
        ? a.createElement("div", {
            key: "fake-carousel",
            className: className + " wrap-placeholder",
            ref: eXRef,
          })
        : null,
      a.createElement(
        "div",
        {
          key: "carousel",
          className,
          onTouchEnd: na,
          onTouchCancel: na,
          ref: eWRef,
          style: e_vertical
            ? _r(
                {
                  height: tj,
                },
                e_style || {},
              )
            : _r(
                {
                  width,
                },
                e9 && e9 !== "auto"
                  ? {
                      height: e9,
                    }
                  : {},
                e_style || {},
              ),
        },
        a.createElement(
          "div",
          {
            className: o.xF(className + "-inner " + tz, {
              vertical: e_vertical,
            }),
            style: (() => {
              const e = yx(no());
              const t = tM * tw_length;
              const n = -(ts * tM * 1) * tR + tr + tR * tA;
              const r = tM > 0 ? tA : 0;
              const a = ep ? n * tR : -1 * t + tL - tV;
              const o = eM ? -1 * a : r;
              const l = eM ? -1 * r : a;
              const c = tR * tr;
              const s =
                eE && ((ts === 0 && c > 0) || (ts === tw_length - 1 && c < 0))
                  ? Math.min(o + tr, Math.max(l + tr, n))
                  : Math.min(o, Math.max(l, n));
              const d = noLoop
                ? s - (tw_length > 1 && ts === tw_length - 1 ? U : 0) * tR
                : n;
              const f = -1 * ts * 100;
              const v =
                tM > 0 ? "" + d + (d ? "px" : "") : "" + f + (f ? "%" : "");
              if (e_vertical) {
                const m = yx({
                  transform: "translateY(" + v + ") translateZ(0)",
                });
                return _r({}, e, m, {
                  width: "100%",
                });
              }
              const h = yx({
                transform: "translateX(" + v + ") translateZ(0)",
              });
              return _r(
                {
                  width: Math.max(0, t) || "auto",
                  height: e_height,
                },
                e,
                h,
              );
            })(),
            ref: eHRef,
          },
          tk_allChildren.map((e, t) => {
            const n =
              e_lazyloadCount === undefined ||
              (t >= ts - e_lazyloadCount && t <= ts + e_lazyloadCount);
            return a.createElement(
              "div",
              {
                key: t,
                className: o.xF(className + "-item carousel-item normal-item", {
                  active: t === ts,
                  vertical: e_vertical,
                  "ssr-float": tM <= 0 && t !== ts,
                }),
                style: nl(t),
                ref: function (e) {
                  ezRef.current[t] = e;
                },
              },
              n || tm[t] ? nu(e, t, className) : null,
            );
          }),
          tU.map((e) =>
            ((e, t, n) => {
              if (!em || t === undefined) {
                return null;
              }
              const r = n === "left" ? t - tw_length : t + tw_length;
              return a.createElement(
                "div",
                {
                  key: "" + t + r,
                  "data-fake-index": t,
                  "data-index": r,
                  className: o.xF(
                    e + "-item carousel-item fake-item fake-" + n,
                    {
                      vertical: e_vertical,
                    },
                  ),
                  style: nl(r, true),
                },
                nu(tk_allChildren[t], r, e),
              );
            })(className, e.index, e.side),
          ),
        ),
      ),
      H && (tw_length > 1 || !X)
        ? a.createElement(
            "div",
            {
              key: "carousel-indicator",
              className: o.xF(
                className +
                  "-indicator pos-" +
                  O +
                  " " +
                  className +
                  "-indicator-" +
                  (e_vertical ? "vertical" : "horizontal"),
                {
                  ["vertical ver-pos-" + M]: e_vertical,
                },
                {
                  inverse:
                    e_indicatorInverse === undefined
                      ? e_indicatorOutside
                      : e_indicatorInverse,
                },
                {
                  outside: e_indicatorOutside,
                },
              ),
            },
            e_renderIndicator
              ? e_renderIndicator(tW, tN, tCRef.current)
              : tS.map((e, t) =>
                  a.createElement("i", {
                    key: t,
                    className: o.xF("indicator", "type-" + q, Y, {
                      active: t === tW,
                    }),
                  }),
                ),
          )
        : null,
    );
  });
});
