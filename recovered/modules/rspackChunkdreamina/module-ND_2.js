const SYMBOL_REACT_ELEMENT = Symbol.for("react.element");
const SYMBOL_REACT_PORTAL = Symbol.for("react.portal");
export var Fragment = Symbol.for("react.fragment");
export var StrictMode = Symbol.for("react.strict_mode");
export var Profiler = Symbol.for("react.profiler");
const SYMBOL_REACT_PROVIDER = Symbol.for("react.provider");
const SYMBOL_REACT_CONTEXT = Symbol.for("react.context");
const SYMBOL_REACT_FORWARD_REF = Symbol.for("react.forward_ref");
export var Suspense = Symbol.for("react.suspense");
const SYMBOL_REACT_MEMO = Symbol.for("react.memo");
const SYMBOL_REACT_LAZY = Symbol.for("react.lazy");
const p = {
  isMounted: function () {
    return false;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {},
};
const m = {};
export class Component {
  constructor(e, t, r) {
    this.props = e;
    this.context = t;
    this.refs = m;
    this.updater = r || p;
  }
  setState(e, t) {
    if (typeof e !== "object" && typeof e !== "function" && e != null) {
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
      );
    }
    this.updater.enqueueSetState(this, e, t, "setState");
  }
  forceUpdate(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  }
}
function g() {}
export function PureComponent(e, t, r) {
  this.props = e;
  this.context = t;
  this.refs = m;
  this.updater = r || p;
}
Component.prototype.isReactComponent = {};
g.prototype = Component.prototype;
const E = (PureComponent.prototype = new g());
E.constructor = PureComponent;
Object.assign(E, Component.prototype);
E.isPureReactComponent = true;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const ReactCurrentOwner = {
  current: null,
};
const S = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};
export function createElement(e, t, n) {
  let a;
  const o = {};
  let i = null;
  let ref = null;
  if (t != null) {
    if (t.ref !== undefined) {
      ref = t.ref;
    }
    if (t.key !== undefined) {
      i = "" + t.key;
    }
    for (a in t) {
      if (hasOwnProperty.call(t, a) && !S.hasOwnProperty(a)) {
        o[a] = t[a];
      }
    }
  }
  let s = arguments.length - 2;
  if (s === 1) {
    o.children = n;
  } else if (s > 1) {
    const u = Array(s);
    for (let c = 0; c < s; c++) {
      u[c] = arguments[c + 2];
    }
    o.children = u;
  }
  if (e && e.defaultProps) {
    for (a in (s = e.defaultProps)) {
      if (o[a] === undefined) {
        o[a] = s[a];
      }
    }
  }
  return {
    $$typeof: SYMBOL_REACT_ELEMENT,
    type: e,
    key: i,
    ref,
    props: o,
    _owner: ReactCurrentOwner.current,
  };
}
export function isValidElement(e) {
  return (
    typeof e === "object" && e !== null && e.$$typeof === SYMBOL_REACT_ELEMENT
  );
}
const k = /\/+/g;
function P(e, t) {
  let r;
  let n;
  if (typeof e === "object" && e !== null && e.key != null) {
    r = "" + e.key;
    n = {
      "=": "=0",
      ":": "=2",
    };
    return "$" + r.replace(/[=:]/g, (e) => n[e]);
  }
  return t.toString(36);
}
function map(e, t, a) {
  if (e == null) {
    return e;
  }
  const o = [];
  let i = 0;
  (function e(t, a, o, i, l) {
    let s;
    let u;
    let c;
    let d = typeof t;
    if (d === "undefined" || d === "boolean") {
      t = null;
    }
    let h = false;
    if (t === null) {
      h = true;
    } else {
      switch (d) {
        case "string":
        case "number":
          h = true;
          break;
        case "object":
          switch (t.$$typeof) {
            case SYMBOL_REACT_ELEMENT:
            case SYMBOL_REACT_PORTAL:
              h = true;
          }
      }
    }
    if (h) {
      l = l((h = t));
      t = i === "" ? "." + P(h, 0) : i;
      if (Array.isArray(l)) {
        o = "";
        if (t != null) {
          o = t.replace(k, "$&/") + "/";
        }
        e(l, a, o, "", function (e) {
          return e;
        });
      } else if (l != null) {
        if (isValidElement(l)) {
          s = l;
          u =
            o +
            (!l.key || (h && h.key === l.key)
              ? ""
              : ("" + l.key).replace(k, "$&/") + "/") +
            t;
          l = {
            $$typeof: SYMBOL_REACT_ELEMENT,
            type: s.type,
            key: u,
            ref: s.ref,
            props: s.props,
            _owner: s._owner,
          };
        }
        a.push(l);
      }
      return 1;
    }
    h = 0;
    i = i === "" ? "." : i + ":";
    if (Array.isArray(t)) {
      for (var p = 0; p < t.length; p++) {
        var v = i + P((d = t[p]), p);
        h += e(d, a, o, v, l);
      }
    } else if (
      typeof (v =
        (c = t) === null || typeof c !== "object"
          ? null
          : typeof (c =
                (Symbol.iterator && c[Symbol.iterator]) || c["@@iterator"]) ===
              "function"
            ? c
            : null) === "function"
    ) {
      t = v.call(t);
      for (p = 0; !(d = t.next()).done;) {
        v = i + P((d = d.value), p++);
        h += e(d, a, o, v, l);
      }
    } else if (d === "object") {
      throw Error(
        "Objects are not valid as a React child (found: " +
          ((a = String(t)) === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : a) +
          "). If you meant to render a collection of children, use an array instead.",
      );
    }
    return h;
  })(e, o, "", "", function (e) {
    return t.call(a, e, i++);
  });
  return o;
}
function _init(e) {
  if (e._status === -1) {
    let t = e._result;
    (t = t()).then(
      (t) => {
        if (e._status === 0 || e._status === -1) {
          e._status = 1;
          e._result = t;
        }
      },
      (t) => {
        if (e._status === 0 || e._status === -1) {
          e._status = 2;
          e._result = t;
        }
      },
    );
    if (e._status === -1) {
      e._status = 0;
      e._result = t;
    }
  }
  if (e._status === 1) {
    return e._result.default;
  }
  throw e._result;
}
const ReactCurrentDispatcher = {
  current: null,
};
const ReactCurrentBatchConfig = {
  transition: null,
};
export const Children = {
  map,
  forEach: function (e, t, r) {
    map(
      e,
      function () {
        t.apply(this, arguments);
      },
      r,
    );
  },
  count: function (e) {
    let t = 0;
    map(e, () => {
      t++;
    });
    return t;
  },
  toArray: function (e) {
    return map(e, (e) => e) || [];
  },
  only: function (e) {
    if (!isValidElement(e)) {
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    }
    return e;
  },
};
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
  ReactCurrentDispatcher,
  ReactCurrentBatchConfig,
  ReactCurrentOwner,
};
export const cloneElement = function (e, t, n) {
  if (e == null) {
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  }
  const a = {
    ...e.props,
  };
  let e_key = e.key;
  let e_ref = e.ref;
  let e__owner = e._owner;
  if (t != null) {
    if (t.ref !== undefined) {
      e_ref = t.ref;
      e__owner = ReactCurrentOwner.current;
    }
    if (t.key !== undefined) {
      e_key = "" + t.key;
    }
    if (e.type && e.type.defaultProps) var s = e.type.defaultProps;
    for (u in t) {
      if (hasOwnProperty.call(t, u) && !S.hasOwnProperty(u)) {
        a[u] = t[u] === undefined && s !== undefined ? s[u] : t[u];
      }
    }
  }
  var u = arguments.length - 2;
  if (u === 1) {
    a.children = n;
  } else if (u > 1) {
    s = Array(u);
    for (let c = 0; c < u; c++) {
      s[c] = arguments[c + 2];
    }
    a.children = s;
  }
  return {
    $$typeof: SYMBOL_REACT_ELEMENT,
    type: e.type,
    key: e_key,
    ref: e_ref,
    props: a,
    _owner: e__owner,
  };
};
export const createContext = function (e) {
  e = {
    $$typeof: SYMBOL_REACT_CONTEXT,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null,
  };
  e.Provider = {
    $$typeof: SYMBOL_REACT_PROVIDER,
    _context: e,
  };
  return (e.Consumer = e);
};
export const createFactory = function (e) {
  const t = createElement.bind(null, e);
  t.type = e;
  return t;
};
export const createRef = function () {
  return {
    current: null,
  };
};
export const forwardRef = function (render) {
  return {
    $$typeof: SYMBOL_REACT_FORWARD_REF,
    render,
  };
};
export const lazy = function (_result) {
  return {
    $$typeof: SYMBOL_REACT_LAZY,
    _payload: {
      _status: -1,
      _result,
    },
    _init,
  };
};
export const memo = function (type, t) {
  return {
    $$typeof: SYMBOL_REACT_MEMO,
    type,
    compare: t === undefined ? null : t,
  };
};
export const startTransition = function (e) {
  const T_transition = ReactCurrentBatchConfig.transition;
  ReactCurrentBatchConfig.transition = {};
  try {
    e();
  } finally {
    ReactCurrentBatchConfig.transition = T_transition;
  }
};
export const unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
export const useCallback = function (e, t) {
  return ReactCurrentDispatcher.current.useCallback(e, t);
};
export const useContext = function (e) {
  return ReactCurrentDispatcher.current.useContext(e);
};
export const useDebugValue = function () {};
export const useDeferredValue = function (e) {
  return ReactCurrentDispatcher.current.useDeferredValue(e);
};
export const useEffect = function (e, t) {
  return ReactCurrentDispatcher.current.useEffect(e, t);
};
export const useId = function () {
  return ReactCurrentDispatcher.current.useId();
};
export const useImperativeHandle = function (e, t, r) {
  return ReactCurrentDispatcher.current.useImperativeHandle(e, t, r);
};
export const useInsertionEffect = function (e, t) {
  return ReactCurrentDispatcher.current.useInsertionEffect(e, t);
};
export const useLayoutEffect = function (e, t) {
  return ReactCurrentDispatcher.current.useLayoutEffect(e, t);
};
export const useMemo = function (e, t) {
  return ReactCurrentDispatcher.current.useMemo(e, t);
};
export const useReducer = function (e, t, r) {
  return ReactCurrentDispatcher.current.useReducer(e, t, r);
};
export const useRef = function (e) {
  return ReactCurrentDispatcher.current.useRef(e);
};
export const useState = function (e) {
  return ReactCurrentDispatcher.current.useState(e);
};
export const useSyncExternalStore = function (e, t, r) {
  return ReactCurrentDispatcher.current.useSyncExternalStore(e, t, r);
};
export const useTransition = function () {
  return ReactCurrentDispatcher.current.useTransition();
};
export const version = "18.2.0";
