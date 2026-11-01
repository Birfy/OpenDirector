import o from "kB";
import u from "M2";
import a from "bT";
import { S as S_1 } from "./module-sv.js";
import * as h from "./module-sy.js";
import g from "O6";
import w from "AC";
let r;
let i;
const s = "data-focus-lock";
const c = "data-focus-lock-disabled";
const style = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px",
};
const l = function (t) {
  const t_children = t.children;
  return a.createElement(
    a.Fragment,
    null,
    a.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      "data-focus-auto-guard": true,
      style,
    }),
    t_children,
    t_children &&
      a.createElement("div", {
        key: "guard-last",
        "data-focus-guard": true,
        "data-focus-auto-guard": true,
        style,
      }),
  );
};
l.propTypes = {};
l.defaultProps = {
  children: null,
};
const v = h.C({}, function (t) {
  return {
    target: t.target,
    currentTarget: t.currentTarget,
  };
});
const m = h.C();
const p = h.C();
const y = h.f({
  async: true,
});
const _ = [];
const b = a.forwardRef(function (t, e) {
  const r = a.useState();
  const observed = r[0];
  const o = r[1];
  const lRef = a.useRef();
  const hRef = a.useRef(false);
  const pRef = a.useRef(null);
  const t_children = t.children;
  const t_disabled = t.disabled;
  const t_noFocusGuards = t.noFocusGuards;
  const t_persistentFocus = t.persistentFocus;
  const t_crossFrame = t.crossFrame;
  const t_autoFocus = t.autoFocus;
  t.allowTextSelection;
  const t_group = t.group;
  const t_className = t.className;
  const t_whiteList = t.whiteList;
  const t_hasPositiveIndices = t.hasPositiveIndices;
  const t_shards = t.shards;
  const T = t.as;
  const t_lockProps = t.lockProps;
  const t_sideCar = t.sideCar;
  const t_returnFocus = t.returnFocus;
  const t_focusOptions = t.focusOptions;
  const t_onActivation = t.onActivation;
  const t_onDeactivation = t.onDeactivation;
  const id = a.useState({})[0];
  const onActivation = a.useCallback(
    function () {
      pRef.current = pRef.current || (document && document.activeElement);
      if (lRef.current && t_onActivation) {
        t_onActivation(lRef.current);
      }
      hRef.current = true;
    },
    [t_onActivation],
  );
  const onDeactivation = a.useCallback(
    function () {
      hRef.current = false;
      if (t_onDeactivation) {
        t_onDeactivation(lRef.current);
      }
    },
    [t_onDeactivation],
  );
  a.useEffect(function () {
    if (!t_disabled) {
      pRef.current = null;
    }
  }, []);
  const returnFocus = a.useCallback(
    function (t) {
      const pRef_current = pRef.current;
      if (pRef_current && pRef_current.focus) {
        const n =
          typeof t_returnFocus === "function"
            ? t_returnFocus(pRef_current)
            : t_returnFocus;
        if (n) {
          const r = typeof n === "object" ? n : undefined;
          pRef.current = null;
          if (t) {
            Promise.resolve().then(() => pRef_current.focus(r));
          } else {
            pRef_current.focus(r);
          }
        }
      }
    },
    [t_returnFocus],
  );
  const onFocus = a.useCallback(function (t) {
    if (hRef.current) {
      v.useMedium(t);
    }
  }, []);
  const m_useMedium = m.useMedium;
  const U = a.useCallback(function (t) {
    if (lRef.current !== t) {
      lRef.current = t;
      o(t);
    }
  }, []);
  const B = u.A(
    {
      [c]: t_disabled && "disabled",
      [s]: t_group,
    },
    t_lockProps === undefined ? {} : t_lockProps,
  );
  const G = t_noFocusGuards !== true;
  const V = G && t_noFocusGuards !== "tail";
  const z = S_1([e, U]);
  return a.createElement(
    a.Fragment,
    null,
    G && [
      a.createElement("div", {
        key: "guard-first",
        "data-focus-guard": true,
        tabIndex: t_disabled ? -1 : 0,
        style,
      }),
      t_hasPositiveIndices
        ? a.createElement("div", {
            key: "guard-nearest",
            "data-focus-guard": true,
            tabIndex: t_disabled ? -1 : 1,
            style,
          })
        : null,
    ],
    !t_disabled &&
      a.createElement(t_sideCar, {
        id,
        sideCar: y,
        observed,
        disabled: t_disabled,
        persistentFocus: t_persistentFocus,
        crossFrame: t_crossFrame,
        autoFocus: t_autoFocus,
        whiteList: t_whiteList,
        shards: t_shards === undefined ? _ : t_shards,
        onActivation,
        onDeactivation,
        returnFocus,
        focusOptions: t_focusOptions,
      }),
    a.createElement(
      T === undefined ? "div" : T,
      u.A(
        {
          ref: z,
        },
        B,
        {
          className: t_className,
          onBlur: m_useMedium,
          onFocus,
        },
      ),
      t_children,
    ),
    V &&
      a.createElement("div", {
        "data-focus-guard": true,
        tabIndex: t_disabled ? -1 : 0,
        style,
      }),
  );
});
b.propTypes = {};
b.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  focusOptions: undefined,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  hasPositiveIndices: undefined,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: "div",
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined,
};
const M = (t) => {
  const e = Array(t.length);
  for (let n = 0; n < t.length; ++n) {
    e[n] = t[n];
  }
  return e;
};
const O = (t) => {
  if (Array.isArray(t)) {
    return t;
  }
  return [t];
};
const E = (t) => {
  if (Array.isArray(t)) {
    return t[0];
  }
  return t;
};
const $ = (t) => {
  if (t.nodeType !== Node.ELEMENT_NODE) {
    return false;
  }
  const e = window.getComputedStyle(t, null);
  return (
    !!e &&
    !!e.getPropertyValue &&
    (e.getPropertyValue("display") === "none" ||
      e.getPropertyValue("visibility") === "hidden")
  );
};
const D = (t) => {
  if (t.parentNode && t.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    return t.parentNode.host;
  }
  return t.parentNode;
};
const S = (t) => t === document || (t && t.nodeType === Node.DOCUMENT_NODE);
const x = function (t, e) {
  let n;
  let r;
  const i = t.get(e);
  if (i !== undefined) {
    return i;
  }
  n = e;
  r = x.bind(undefined, t);
  const o = !n || S(n) || (!$(n) && !n.hasAttribute("inert") && r(D(n)));
  t.set(e, o);
  return o;
};
const A = function (t, e) {
  let n;
  const r = t.get(e);
  if (r !== undefined) {
    return r;
  }
  n = A.bind(undefined, t);
  const i = !e || !!S(e) || (!!k(e) && n(D(e)));
  t.set(e, i);
  return i;
};
const T = (t) => t.dataset;
const N = (t) => t.tagName === "INPUT";
const L = function (t) {
  return N(t) && t.type === "radio";
};
var k = (t) =>
  ![true, "true", ""].includes(t.getAttribute("data-no-autofocus"));
const Y = (t) => {
  let e;
  return !!(t && ((e = T(t)) == null ? undefined : e.focusGuard));
};
const C = function (t) {
  return !Y(t);
};
const F = function (t) {
  return !!t;
};
const I = function (t, e) {
  const n = Math.max(0, t.tabIndex);
  const r = Math.max(0, e.tabIndex);
  const i = n - r;
  const o = t.index - e.index;
  if (i) {
    if (!n) {
      return 1;
    }
    if (!r) {
      return -1;
    }
  }
  return i || o;
};
const H = (t, e, n) =>
  M(t)
    .map((t, index) => {
      const r = t.tabIndex < 0 && !t.hasAttribute("tabindex") ? 0 : t.tabIndex;
      return {
        node: t,
        index,
        tabIndex: n && r === -1 ? ((t.dataset || {}).focusGuard ? 0 : -1) : r,
      };
    })
    .filter((t) => !e || t.tabIndex >= 0)
    .sort(I);
const W =
  "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]";
const R = "".concat(W, ", [data-focus-guard]");
const P = (t, e) =>
  M((t.shadowRoot || t).children).reduce(
    (acc, item) => acc.concat(item.matches(e ? R : W) ? [item] : [], P(item)),
    [],
  );
const j = (t, e) => {
  let n;
  if (
    t instanceof HTMLIFrameElement &&
    ((n = t.contentDocument) == null ? undefined : n.body)
  ) {
    return U([t.contentDocument.body], e);
  }
  return [t];
};
var U = (t, e) =>
  t.reduce((acc, item) => {
    let r;
    const i = P(item, e);
    const o = (r = []).concat.apply(
      r,
      i.map((t) => j(t, e)),
    );
    return acc.concat(
      o,
      item.parentNode
        ? M(item.parentNode.querySelectorAll(W)).filter((t) => t === item)
        : [],
    );
  }, []);
const B = (t, e) =>
  M(t)
    .filter((t) => x(e, t))
    .filter((t) => {
      let e;
      return !(
        (N((e = t)) || e.tagName === "BUTTON") &&
        (e.type === "hidden" || e.disabled)
      );
    });
const G = (t, e = new Map()) => M(t).filter((t) => A(e, t));
const V = (t, e) => H(B(U(t), e), false);
const z = (t, e) => {
  if (t.shadowRoot) {
    return z(t.shadowRoot, e);
  }
  return (
    !!(
      Object.getPrototypeOf(t).contains !== undefined &&
      Object.getPrototypeOf(t).contains.call(t, e)
    ) ||
    M(t.children).some((t) => {
      let n;
      if (t instanceof HTMLIFrameElement) {
        const r = (n = t.contentDocument) == null ? undefined : n.body;
        return !!r && z(r, e);
      }
      return z(t, e);
    })
  );
};
const q = (t) => {
  try {
    return t();
  } catch (t) {
    return;
  }
};
const J = (t = document) => {
  if (t && t.activeElement) {
    const e = t.activeElement;
    if (e.shadowRoot) {
      return J(e.shadowRoot);
    }
    if (e instanceof HTMLIFrameElement && q(() => e.contentWindow.document)) {
      return J(e.contentWindow.document);
    }
    return e;
  }
};
const Z = (t = document) => {
  const e = J(t);
  return (
    !!e && M(t.querySelectorAll(`[data-no-focus-lock]`)).some((t) => z(t, e))
  );
};
const Q = (t) => {
  const e = new Set();
  for (let n = t.length, r = 0; r < n; r += 1) {
    for (let i = r + 1; i < n; i += 1) {
      const o = t[r].compareDocumentPosition(t[i]);
      if ((o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
        e.add(i);
      }
      if ((o & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
        e.add(r);
      }
    }
  }
  return t.filter((t, n) => !e.has(n));
};
const K = (t) => {
  if (t.parentNode) {
    return K(t.parentNode);
  }
  return t;
};
const X = (t) =>
  O(t)
    .filter(Boolean)
    .reduce((acc, item) => {
      const n = item.getAttribute(s);
      acc.push.apply(
        acc,
        n
          ? Q(
              M(
                K(item).querySelectorAll(
                  "["
                    .concat(s, '="')
                    .concat(n, '"]:not([')
                    .concat(c, '="disabled"])'),
                ),
              ),
            )
          : [item],
      );
      return acc;
    }, []);
const focusInside = function (t, e = J(E(t).ownerDocument)) {
  return (
    !!e &&
    (!e.dataset || !e.dataset.focusGuard) &&
    X(t).some((t) => {
      let n;
      return (
        z(t, e) ||
        ((n = e), !!M(t.querySelectorAll("iframe")).some((t) => t === n))
      );
    })
  );
};
const te = (node, focusOptions) => {
  if (node) {
    if ("focus" in node) {
      node.focus(focusOptions);
    }
    if ("contentWindow" in node && node.contentWindow) {
      node.contentWindow.focus();
    }
  }
};
const tn = (t, e) => {
  if (L(t) && t.name) {
    return (
      e
        .filter(L)
        .filter((e) => e.name === t.name)
        .filter((t) => t.checked)[0] || t
    );
  }
  return t;
};
const tr = (t) => {
  const e = new Set();
  t.forEach((n) => e.add(tn(n, t)));
  return t.filter((t) => e.has(t));
};
const ti = (t) => {
  if (t[0] && t.length > 1) {
    return tn(t[0], t);
  }
  return t[0];
};
const to = (t, e) => t.indexOf(tn(e, t));
const tu = "NEW_FOCUS";
const ta = (t, e, n, r, i) => {
  const t_length = t.length;
  const u = t[0];
  const a = t[t_length - 1];
  const s = Y(r);
  if (!(r && t.indexOf(r) >= 0)) {
    const c = r !== undefined ? n.indexOf(r) : -1;
    const f = i ? n.indexOf(i) : c;
    const d = i ? t.indexOf(i) : -1;
    if (c === -1) {
      if (d !== -1) {
        return d;
      }
      return tu;
    }
    if (d === -1) {
      return tu;
    }
    const l = c - f;
    const h = n.indexOf(u);
    const v = n.indexOf(a);
    const m = tr(n);
    const p = (r !== undefined ? m.indexOf(r) : -1) - (i ? m.indexOf(i) : c);
    if ((!l && d >= 0) || e.length === 0) {
      return d;
    }
    const y = to(t, e[0]);
    const _ = to(t, e[e.length - 1]);
    if (c <= h && s && Math.abs(l) > 1) {
      return _;
    }
    if (c >= v && s && Math.abs(l) > 1) {
      return y;
    }
    if (l && Math.abs(p) > 1) {
      return d;
    }
    if (c <= h) {
      return _;
    }
    if (c > v) {
      return y;
    }
    if (l) {
      if (Math.abs(l) > 1) {
        return d;
      }
      return (t_length + d + l) % t_length;
    }
  }
};
const ts = (t, e, n) => {
  const r = G(
    t
      .map((t) => t.node)
      .filter((t) => {
        let e;
        const r = (e = T(t)) == null ? undefined : e.autofocus;
        return (
          t.autofocus || (r !== undefined && r !== "false") || n.indexOf(t) >= 0
        );
      }),
  );
  if (r && r.length) {
    return ti(r);
  }
  return ti(G(e));
};
const tc = (t, e = []) => {
  e.push(t);
  if (t.parentNode) {
    tc(t.parentNode.host || t.parentNode, e);
  }
  return e;
};
const tf = (t, e) => {
  for (let n = tc(t), r = tc(e), i = 0; i < n.length; i += 1) {
    const o = n[i];
    if (r.indexOf(o) >= 0) {
      return o;
    }
  }
  return false;
};
const td = (t, e, n) => {
  const r = O(t);
  const i = O(e);
  const o = r[0];
  let u = false;
  i.filter(Boolean).forEach((t) => {
    u = tf(u || t, t) || u;
    n.filter(Boolean).forEach((t) => {
      const e = tf(o, t);
      if (e) {
        u = !u || z(e, u) ? e : tf(e, u);
      }
    });
  });
  return u;
};
const tl = (t, e) =>
  t.reduce((acc, item) => {
    let r;
    let i;
    return acc.concat(
      ((r = item),
      (i = e),
      B(
        M(r.querySelectorAll(`[data-autofocus-inside]`))
          .map((t) => U([t]))
          .reduce((acc_1, item_1) => acc_1.concat(item_1), []),
        i,
      )),
    );
  }, []);
const th = (t, e) => {
  const n = new Map();
  e.forEach((t) => n.set(t.node, t));
  return t.map((t) => n.get(t)).filter(F);
};
const tv = (t, e) => {
  const n = J(O(t).length > 0 ? document : E(t).ownerDocument);
  const r = X(t).filter(C);
  const i = td(n || t, t, r);
  const o = new Map();
  const u = V(r, o);
  const a = u.filter((t) => C(t.node));
  if (a[0]) {
    const s = V([i], o).map((t) => t.node);
    const c = th(s, a);
    const f = c.map((t) => t.node);
    const d = c.filter((t) => t.tabIndex >= 0).map((t) => t.node);
    const l = ta(f, d, s, n, e);
    if (l === tu) {
      const h = ts(u, d, tl(r, o)) || ts(u, f, tl(r, o));
      if (h) {
        return {
          node: h,
        };
      }
      return void console.warn(
        "focus-lock: cannot find any node to move focus into",
      );
    }
    if (l === undefined) {
      return l;
    }
    return c[l];
  }
};
let tm = 0;
let tp = false;
const moveFocusInside = function (t, e, n = {}) {
  const r = tv(t, e);
  if (!tp && r) {
    if (tm > 2) {
      console.error(
        "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting",
      );
      tp = true;
      setTimeout(() => {
        tp = false;
      }, 1);
      return;
    }
    tm++;
    te(r.node, n.focusOptions);
    tm--;
  }
};
const t_ = (t) => {
  const e = X(t).filter(C);
  const n = H(U([td(t, t, e)], true), true, true);
  const r = U(e, false);
  return n.map((t) => {
    const t_node = t.node;
    return {
      node: t_node,
      index: t.index,
      lockItem: r.indexOf(t_node) >= 0,
      guard: Y(t_node),
    };
  });
};
function tb(t) {
  setTimeout(t, 1);
}
let tg = null;
let tw = null;
let tM = null;
let tO = false;
const tE = (observerNode, portaledElement) => {
  tM = {
    observerNode,
    portaledElement,
  };
};
function t$(t, e, n, r) {
  let i = null;
  let o = t;
  do {
    const u = r[o];
    if (u.guard) {
      if (u.node.dataset.focusAutoGuard) {
        i = u;
      }
    } else if (u.lockItem) {
      if (o !== t) {
        return;
      }
      i = null;
    } else {
      break;
    }
  } while ((o += n) !== e);
  if (i) {
    i.node.tabIndex = 0;
  }
}
const tD = function (t) {
  if (t && "current" in t) {
    return t.current;
  }
  return t;
};
const tS = function () {
  let t = false;
  if (tg) {
    const e = tg;
    const n = e.observed;
    const r = e.persistentFocus;
    const i = e.autoFocus;
    const o = e.shards;
    const u = e.crossFrame;
    const focusOptions = e.focusOptions;
    const s = n || (tM && tM.portaledElement);
    const c = document && document.activeElement;
    if (s) {
      const f = [s].concat(o.map(tD).filter(Boolean));
      if (
        (!c ||
          (
            tg.whiteList ||
            function () {
              return true;
            }
          )(c)) &&
        (r ||
          (u ? !!tO : tO === "meanwhile") ||
          !((document && document.activeElement === document.body) || Z()) ||
          (!tw && i))
      ) {
        if (
          s &&
          !(
            focusInside(f) ||
            (c &&
              f.some((t) =>
                (function t(e, n, r) {
                  return (
                    n &&
                    ((n.host === e &&
                      (!n.activeElement || r.contains(n.activeElement))) ||
                      (n.parentNode && t(e, n.parentNode, r)))
                  );
                })(c, t, t),
              )) ||
            (tM && tM.portaledElement === c)
          )
        ) {
          if (document && !tw && c && !i) {
            if (c.blur) {
              c.blur();
            }
            document.body.focus();
          } else {
            t = moveFocusInside(f, tw, {
              focusOptions,
            });
            tM = {};
          }
        }
        tO = false;
        tw = document && document.activeElement;
      }
      if (document) {
        const d = document && document.activeElement;
        const l = t_(f);
        const h = l.map((t) => t.node).indexOf(d);
        if (h > -1) {
          l.filter((t) => {
            const t_guard = t.guard;
            const t_node = t.node;
            return t_guard && t_node.dataset.focusAutoGuard;
          }).forEach((t) => t.node.removeAttribute("tabIndex"));
          t$(h, l.length, 1, l);
          t$(h, -1, -1, l);
        }
      }
    }
  }
  return t;
};
const tx = function (t) {
  if (tS() && t) {
    t.stopPropagation();
    t.preventDefault();
  }
};
const tA = function () {
  return tb(tS);
};
const tT = function () {
  tO = "just";
  tb(function () {
    tO = "meanwhile";
  });
};
const tN = () => {
  document.addEventListener("focusin", tx);
  document.addEventListener("focusout", tA);
  window.addEventListener("blur", tT);
};
const tL = () => {
  document.removeEventListener("focusin", tx);
  document.removeEventListener("focusout", tA);
  window.removeEventListener("blur", tT);
};
v.assignSyncMedium(function (t) {
  const t_target = t.target;
  const t_currentTarget = t.currentTarget;
  if (!t_currentTarget.contains(t_target)) {
    tE(t_currentTarget, t_target);
  }
});
m.assignMedium(tA);
p.assignMedium(function (t) {
  return t({
    moveFocusInside,
    focusInside,
  });
});
const tk = ((r = function (t) {
  return t.filter((t) => !t.disabled);
}),
(i = function (t) {
  const e = t.slice(-1)[0];
  if (e && !tg) {
    tN();
  }
  const n = tg;
  const r = n && e && e.id === n.id;
  tg = e;
  if (n && !r) {
    n.onDeactivation();
    if (!t.filter((t) => t.id === n.id).length) {
      n.returnFocus(!e);
    }
  }
  if (e) {
    tw = null;
    if (!(r && n.observed === e.observed)) {
      e.onActivation();
    }
    tS();
    tb(tS);
  } else {
    tL();
    tw = null;
  }
}),
(t) => {
  let e;
  const n = [];
  function o() {
    i((e = r(n.map((t) => t.props))));
  }
  const u = ((r) => {
    function i() {
      return r.apply(this, arguments) || this;
    }
    g.A(i, r);
    i.peek = function () {
      return e;
    };
    const i_prototype = i.prototype;
    i_prototype.componentDidMount = function () {
      n.push(this);
      o();
    };
    i_prototype.componentDidUpdate = function () {
      o();
    };
    i_prototype.componentWillUnmount = function () {
      const t = n.indexOf(this);
      n.splice(t, 1);
      o();
    };
    i_prototype.render = function () {
      return a.createElement(t, this.props);
    };
    return i;
  })(a.PureComponent);
  w.A(
    u,
    "displayName",
    "SideEffect(" + (t.displayName || t.name || "Component") + ")",
  );
  return u;
})(function () {
  return null;
});
export const Ay = a.forwardRef(function (t, e) {
  return a.createElement(
    b,
    u.A(
      {
        sideCar: tk,
        ref: e,
      },
      t,
    ),
  );
});
const tC = b.propTypes || {};
tC.sideCar;
o.A(tC, ["sideCar"]);
Ay.propTypes = {};
