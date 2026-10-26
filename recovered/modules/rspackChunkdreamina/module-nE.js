import r from "bT";
export function jn() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) {
    t[n] = arguments[n];
  }
  return r.useMemo(
    () => (e) => {
      t.forEach((t) => t(e));
    },
    t,
  );
}
export let Sw =
  typeof window !== "undefined" &&
  window.document !== undefined &&
  window.document.createElement !== undefined;
export function l6(e) {
  let t = Object.prototype.toString.call(e);
  return t === "[object Window]" || t === "[object global]";
}
export function Ll(e) {
  return "nodeType" in e;
}
export function zk(e) {
  let t;
  let n;
  if (e) {
    if (l6(e)) {
      return e;
    }
    if (
      Ll(e) &&
      (t = (n = e.ownerDocument) == null ? undefined : n.defaultView) != null
    ) {
      return t;
    }
    return window;
  }
  return window;
}
export function wz(e) {
  let { Document } = zk(e);
  return e instanceof Document;
}
export function sb(e) {
  return !l6(e) && e instanceof zk(e).HTMLElement;
}
export function xZ(e) {
  return e instanceof zk(e).SVGElement;
}
export function TW(e) {
  if (e) {
    if (l6(e)) {
      return e.document;
    }
    if (Ll(e)) {
      if (wz(e)) {
        return e;
      }
      if (sb(e) || xZ(e)) {
        return e.ownerDocument;
      }
      return document;
    }
    return document;
  }
  return document;
}
export let Es = Sw ? r.useLayoutEffect : r.useEffect;
export function _q(e) {
  let tRef = r.useRef(e);
  Es(() => {
    tRef.current = e;
  });
  return r.useCallback(function () {
    for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) {
      n[r] = arguments[r];
    }
    if (tRef.current == null) {
      return undefined;
    }
    return tRef.current(...n);
  }, []);
}
export function $$() {
  let eRef = r.useRef(null);
  return [
    r.useCallback((t, n) => {
      eRef.current = setInterval(t, n);
    }, []),
    r.useCallback(() => {
      if (eRef.current !== null) {
        clearInterval(eRef.current);
        eRef.current = null;
      }
    }, []),
  ];
}
export function YN(e, t = [e]) {
  let nRef = r.useRef(e);
  Es(() => {
    if (nRef.current !== e) {
      nRef.current = e;
    }
  }, t);
  return nRef;
}
export function KG(e, t) {
  let nRef = r.useRef();
  return r.useMemo(() => {
    let t = e(nRef.current);
    nRef.current = t;
    return t;
  }, [...t]);
}
export function lk(e) {
  let t = _q(e);
  let nRef = r.useRef(null);
  let l = r.useCallback((e) => {
    if (e !== nRef.current) {
      if (t != null) {
        t(e, nRef.current);
      }
    }
    nRef.current = e;
  }, []);
  return [nRef, l];
}
export function ZC(e) {
  let tRef = r.useRef();
  r.useEffect(() => {
    tRef.current = e;
  }, [e]);
  return tRef.current;
}
let w = {};
export function YG(e, t) {
  return r.useMemo(() => {
    if (t) {
      return t;
    }
    let n = w[e] == null ? 0 : w[e] + 1;
    w[e] = n;
    return e + "-" + n;
  }, [e, t]);
}
function E(e) {
  return function (t) {
    for (
      var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), l = 1;
      l < n;
      l++
    ) {
      r[l - 1] = arguments[l];
    }
    return r.reduce(
      (acc, item) => {
        for (let [r, l] of Object.entries(item)) {
          let n = acc[r];
          if (n != null) {
            acc[r] = n + e * l;
          }
        }
        return acc;
      },
      {
        ...t,
      },
    );
  };
}
export let WQ = E(1);
export let Re = E(-1);
export function kx(e) {
  if (!e) {
    return false;
  }
  let { KeyboardEvent } = zk(e.target);
  return KeyboardEvent && e instanceof KeyboardEvent;
}
export function e_(e) {
  if (
    ((e) => {
      if (!e) {
        return false;
      }
      let { TouchEvent } = zk(e.target);
      return TouchEvent && e instanceof TouchEvent;
    })(e)
  ) {
    if (e.touches && e.touches.length) {
      let { clientX, clientY } = e.touches[0];
      return {
        x: clientX,
        y: clientY,
      };
    } else if (e.changedTouches && e.changedTouches.length) {
      let { clientX, clientY } = e.changedTouches[0];
      return {
        x: clientX,
        y: clientY,
      };
    }
  }
  if ("clientX" in e && "clientY" in e) {
    return {
      x: e.clientX,
      y: e.clientY,
    };
  }
  return null;
}
export let Ks = Object.freeze({
  Translate: {
    toString(e) {
      if (!e) {
        return;
      }
      let { x, y } = e;
      return (
        "translate3d(" +
        (x ? Math.round(x) : 0) +
        "px, " +
        (y ? Math.round(y) : 0) +
        "px, 0)"
      );
    },
  },
  Scale: {
    toString(e) {
      if (!e) {
        return;
      }
      let { scaleX, scaleY } = e;
      return "scaleX(" + scaleX + ") scaleY(" + scaleY + ")";
    },
  },
  Transform: {
    toString(e) {
      if (e) {
        return [Ks.Translate.toString(e), Ks.Scale.toString(e)].join(" ");
      }
    },
  },
  Transition: {
    toString(e) {
      let { property, duration, easing } = e;
      return property + " " + duration + "ms " + easing;
    },
  },
});
let R =
  "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
export function ag(e) {
  if (e.matches(R)) {
    return e;
  }
  return e.querySelector(R);
}
