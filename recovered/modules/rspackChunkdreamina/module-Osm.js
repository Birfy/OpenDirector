import r from "bT";
import i from "wnX";
import { FI } from "./module-rJ.js";
export function VP(e, t = [], n = true) {
  r.useEffect(
    function () {
      if (n) {
        window.addEventListener("resize", e);
        window.addEventListener("orientationchange", e);
      }
      return function () {
        if (n) {
          window.removeEventListener("resize", e);
          window.removeEventListener("orientationchange", e);
        }
      };
    },
    [].concat(t, [n]),
  );
}
export function pK(e) {
  const t = r.useState(e);
  const n = t[0];
  const i = t[1];
  const aRef = r.useRef(false);
  const o = r.useCallback(function (e) {
    if (!aRef.current) {
      i(e);
    }
  }, []);
  r.useEffect(function () {
    return function () {
      aRef.current = true;
    };
  }, []);
  return [n, o];
}
export function YJ(e) {
  const t = r.useState(e);
  const n = t[0];
  const i = t[1];
  const aRef = r.useRef(n);
  return [
    n,
    aRef,
    function (e) {
      aRef.current = e;
      i(e);
    },
  ];
}
export function oq(e) {
  const t = r.useState(e);
  const n = t[0];
  const i = t[1];
  const aRef = r.useRef(n);
  r.useEffect(
    function () {
      aRef.current = n;
    },
    [n],
  );
  return [n, aRef, i];
}
export function w5(e, t = []) {
  const nRef = r.useRef(true);
  r.useEffect(function () {
    if (!nRef.current) {
      return e();
    }
    nRef.current = false;
  }, t);
}
export function SE(e) {
  const tRef = r.useRef(e);
  r.useEffect(
    function () {
      tRef.current = e;
    },
    [e],
  );
  return tRef;
}
export function Jg() {
  const system = r.useContext(FI).system;
  const t = r.useState(function () {
    return system || i.S5();
  });
  const n = t[0];
  const o = t[1];
  r.useEffect(
    function () {
      o(system || i.S5());
    },
    [system],
  );
  return n;
}
export function lW(e) {
  const t = r.useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const windowWidth = t[0];
  const i = t[1];
  const a = r.useState(typeof window !== "undefined" ? window.innerHeight : 0);
  const windowHeight = a[0];
  const u = a[1];
  function c() {
    i(window.innerWidth);
    u(window.innerHeight);
  }
  VP(c, [], e);
  r.useEffect(function () {
    c();
  }, []);
  return {
    windowWidth,
    windowHeight,
  };
}
export function Lu(e, t, n, a = "top", o, l, u) {
  const cRef = r.useRef([]);
  const sRef = r.useRef({
    dom: null,
    inScrollIndexes: [],
  });
  const fRef = r.useRef(0);
  const vRef = r.useRef(0);
  const m = SE(o);
  const h = SE(l);
  const p = r.useCallback(
    function (e) {
      if (!u) {
        vRef.current = e.touches && e.touches[0] ? e.touches[0].clientX : 0;
        fRef.current = e.touches && e.touches[0] ? e.touches[0].clientY : 0;
        const t = n ? n() : null;
        if (t) {
          cRef.current = (Array.isArray(t) ? t : [t]).reduce(
            (acc, ele) =>
              [].concat(
                acc,
                ele && i.mm(ele).overflow !== "hidden"
                  ? [
                      {
                        ele,
                        maxScrollX:
                          a === "left" || a === "right"
                            ? ele.scrollHeight - ele.clientHeight
                            : ele.scrollWidth - ele.clientWidth,
                        maxScrollY:
                          a === "left" || a === "right"
                            ? ele.scrollWidth - ele.clientWidth
                            : ele.scrollHeight - ele.clientHeight,
                      },
                    ]
                  : [],
              ),
            [],
          );
        } else {
          cRef.current = [];
        }
        sRef.current = {
          dom: null,
          inScrollIndexes: [],
        };
      }
    },
    [n, u, a],
  );
  const g = r.useCallback(
    function (e) {
      const t =
        e.changedTouches && e.changedTouches[0]
          ? e.changedTouches[0].clientX
          : 0;
      const n =
        e.changedTouches && e.changedTouches[0]
          ? e.changedTouches[0].clientY
          : 0;
      const cRef_current = cRef.current;
      const e_target = e.target;
      const sRef_current = sRef.current;
      const o_dom = sRef_current.dom;
      const o_inScrollIndexes = sRef_current.inScrollIndexes;
      const p =
        o_dom === e_target
          ? o_inScrollIndexes
          : ((dom, t) => {
              const inScrollIndexes = [];
              for (let r = 0; r < t.length; r += 1) {
                for (let i = dom; i && t[r];) {
                  if (i === t[r].ele) {
                    inScrollIndexes.push(r);
                    break;
                  } else {
                    i = i.parentElement;
                  }
                }
              }
              sRef.current = {
                dom,
                inScrollIndexes,
              };
              return inScrollIndexes;
            })(e_target, cRef_current);
      const g = t - vRef.current;
      const E = n - fRef.current;
      const b = Math.abs(g);
      const y = Math.abs(E);
      const x = y > b ? "y" : "x";
      let C = false;
      if (u) {
        if (h.current != null) {
          h.current(e, C, x);
        }
        return;
      }
      if (cRef_current.length && p.length) {
        const k = [];
        for (let w = 0; w < p.length; w += 1) {
          const F = cRef_current[p[w]];
          const T = ((e) => {
            const e_ele = e.ele;
            const e_maxScrollX = e.maxScrollX;
            const e_maxScrollY = e.maxScrollY;
            switch (a) {
              case "left":
                return e_maxScrollY - e_ele.scrollLeft;
              case "right":
                return e_ele.scrollLeft;
              case "bottom":
                return e_maxScrollX - e_ele.scrollTop;
              default:
                return e_ele.scrollTop;
            }
          })(F);
          const N = ((e) => {
            const e_ele = e.ele;
            const e_maxScrollX = e.maxScrollX;
            const e_maxScrollY = e.maxScrollY;
            switch (a) {
              case "left":
                return e_ele.scrollTop;
              case "right":
                return e_maxScrollX - e_ele.scrollTop;
              case "bottom":
                return e_maxScrollY - e_ele.scrollLeft;
              default:
                return e_ele.scrollLeft;
            }
          })(F);
          if (
            (E > 0 && y > b && T === 0) ||
            (g > 0 && b > y && N === 0) ||
            (E < 0 && y > b && T + 1 >= F.maxScrollY) ||
            (g < 0 && b > y && N + 1 >= F.maxScrollX)
          ) {
            k.push(true);
            continue;
          }
          k.push(false);
        }
        if (k.indexOf(false) < 0) {
          if (m.current != null) {
            m.current(e, x);
          }
          if (e.cancelable) {
            e.preventDefault();
          }
          C = true;
        }
      } else {
        if (m.current != null) {
          m.current(e, x);
        }
        if (e.cancelable) {
          e.preventDefault();
        }
        C = true;
      }
      if (h.current != null) {
        h.current(e, C, x);
      }
    },
    [a, u],
  );
  r.useEffect(
    function () {
      if (e && t) {
        t.addEventListener("touchstart", p);
        t.addEventListener("touchmove", g, {
          passive: false,
        });
        return function () {
          t.removeEventListener("touchstart", p);
          t.removeEventListener("touchmove", g);
        };
      }
      return function () {};
    },
    [e, t, p, g],
  );
}
export function xC(e) {
  const t = r.useCallback(function (e) {
    return e.stopPropagation();
  }, []);
  r.useEffect(
    function () {
      if (e) {
        const n = e();
        const r = Array.isArray(n) ? n : [n];
        r.forEach((e) => {
          if (e) {
            e.addEventListener("touchstart", t);
            e.addEventListener("touchmove", t);
          }
        });
        return function () {
          r.forEach((e) => {
            if (e) {
              e.removeEventListener("touchstart", t);
              e.removeEventListener("touchmove", t);
            }
          });
        };
      }
    },
    [e],
  );
}
let p = 0;
let g = "";
export function db(e, t = true, n) {
  const i = r.useCallback(function () {
    if (!p) {
      g = n !== undefined ? n : document.body.style.overflow;
    }
    p += 1;
    document.body.style.overflow = "hidden";
  }, []);
  const a = r.useCallback(function () {
    const e = p - 1;
    p = e;
    if (!e) {
      document.body.style.overflow = g;
    }
  }, []);
  r.useEffect(
    function () {
      if (t) {
        if (e) {
          i();
        }
        return function () {
          if (e) {
            a();
          }
        };
      }
      return function () {};
    },
    [e],
  );
}
export function MD(e, t, n = 200) {
  const i = r.useState(0);
  const a = i[0];
  const o = i[1];
  const lRef = r.useRef();
  r.useEffect(
    function () {
      const r = setTimeout(() => {
        if (a === 1) {
          e(lRef.current);
        }
        o(0);
      }, n);
      if (a === 2) {
        t(lRef.current);
      }
      return function () {
        return clearTimeout(r);
      };
    },
    [a],
  );
  return function (e) {
    lRef.current = e;
    o(function (e) {
      return e + 1;
    });
  };
}
let y = 0;
export function xV(e) {
  const t = r.useState("");
  const n = t[0];
  const i = t[1];
  r.useEffect(function () {
    i("inner-" + y);
    y += 1;
  }, []);
  return {
    svgKey: e || n,
  };
}
