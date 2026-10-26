import r from "bT";
import i from "PC";
import { useSyncExternalStore } from "./module-EkC.js";
import s from "z8";
import { Db, KE, YT, Yv, fD, zU } from "./module-lgn.js";
import { useSyncExternalStoreWithSelector } from "./module-Qda.js";
let { getOwnPropertyNames, getOwnPropertySymbols } = Object;
let { hasOwnProperty } = Object.prototype;
function u(e, t) {
  return function (n, r, i) {
    return e(n, r, i) && t(n, r, i);
  };
}
function p(e) {
  return function (t, n, r) {
    if (!t || !n || typeof t !== "object" || typeof n !== "object") {
      return e(t, n, r);
    }
    let { cache } = r;
    let o = cache.get(t);
    let s = cache.get(n);
    if (o && s) {
      return o === n && s === t;
    }
    cache.set(t, n);
    cache.set(n, t);
    let a = e(t, n, r);
    cache.delete(t);
    cache.delete(n);
    return a;
  };
}
function h(e) {
  return getOwnPropertyNames(e).concat(getOwnPropertySymbols(e));
}
let f = Object.hasOwn || ((e, t) => hasOwnProperty.call(e, t));
function areNumbersEqual(e, t) {
  return e === t || (!e && !t && e != e && t != t);
}
let { getOwnPropertyDescriptor, keys } = Object;
let { propertyIsEnumerable } = Object.prototype;
let get = getOwnPropertyDescriptor(
  Object.getPrototypeOf(Int8Array.prototype),
  Symbol.toStringTag,
).get;
function areArrayBuffersEqual(e, t) {
  return (
    e.byteLength === t.byteLength && I(new Uint8Array(e), new Uint8Array(t))
  );
}
function k(e, t, n) {
  let e_length = e.length;
  if (t.length !== e_length) {
    return false;
  }
  while (e_length-- > 0) {
    if (!n.equals(e[e_length], t[e_length], e_length, e_length, e, t, n)) {
      return false;
    }
  }
  return true;
}
function areDataViewsEqual(e, t) {
  return (
    e.byteLength === t.byteLength &&
    I(
      new Uint8Array(e.buffer, e.byteOffset, e.byteLength),
      new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
    )
  );
}
function areDatesEqual(e, t) {
  return areNumbersEqual(e.getTime(), t.getTime());
}
function E(e, t, n) {
  let r;
  if (e.name !== t.name || e.message !== t.message || e.stack !== t.stack) {
    return false;
  }
  let e_cause = e.cause;
  let t_cause = t.cause;
  if (
    e_cause !== t_cause &&
    !n.equals(e_cause, t_cause, "cause", "cause", e, t, n)
  ) {
    return false;
  }
  let e_errors = e.errors;
  let t_errors = t.errors;
  if (
    e_errors !== t_errors &&
    !n.equals(e_errors, t_errors, "errors", "errors", e, t, n)
  ) {
    return false;
  }
  let l = keys(e);
  let d = keys(t);
  let l_length = l.length;
  if (!l_length && !d.length) {
    return true;
  }
  let u = 0;
  while (l_length-- > 0) {
    if ((r = l[l_length]) !== "cause" && r !== "errors") {
      if (
        (r !== d[l_length] && !propertyIsEnumerable.call(t, r)) ||
        !n.equals(e[r], t[r], r, r, e, t, n)
      ) {
        return false;
      }
      ++u;
    }
  }
  let p = d.length - u;
  return (
    !p ||
    p ===
      +!!propertyIsEnumerable.call(t, "cause") +
        +!!propertyIsEnumerable.call(t, "errors")
  );
}
function areFunctionsEqual(e, t) {
  return e === t;
}
function C(e, t, n) {
  return (
    e.name === t.name &&
    e.message === t.message &&
    e.stack === t.stack &&
    A(e, t, n)
  );
}
function T(e, t, n) {
  let r;
  let i;
  let e_size = e.size;
  if (e_size !== t.size) {
    return false;
  }
  if (!e_size) {
    return true;
  }
  let s = Array(e_size);
  let a = e.entries();
  let l = 0;
  while ((r = a.next()) && !r.done) {
    let o = t.entries();
    let a = false;
    let d = 0;
    while ((i = o.next()) && !i.done) {
      if (s[d]) {
        d++;
        continue;
      }
      let o = r.value;
      let c = i.value;
      if (
        n.equals(o[0], c[0], l, d, e, t, n) &&
        n.equals(o[1], c[1], o[0], c[0], e, t, n)
      ) {
        a = s[d] = true;
        break;
      }
      d++;
    }
    if (!a) {
      return false;
    }
    l++;
  }
  return true;
}
function O(e, t, n) {
  let r;
  let i = keys(e);
  let o = keys(t);
  let i_length = i.length;
  if (o.length !== i_length) {
    return false;
  }
  let a = i_length <= 64;
  while (i_length-- > 0) {
    if (
      !R(e, t, (r = i[i_length])) &&
      ((r !== o[i_length] &&
        !(a ? o.includes(r) : propertyIsEnumerable.call(t, r))) ||
        !n.equals(e[r], t[r], r, r, e, t, n))
    ) {
      return false;
    }
  }
  return true;
}
function A(e, t, n) {
  let r;
  let i;
  let o;
  let s = h(e);
  let s_length = s.length;
  if (h(t).length !== s_length) {
    return false;
  }
  while (s_length-- > 0) {
    if (
      (!R(e, t, (r = s[s_length])) &&
        (!f(t, r) || !n.equals(e[r], t[r], r, r, e, t, n))) ||
      ((i = getOwnPropertyDescriptor(e, r)),
      (o = getOwnPropertyDescriptor(t, r)),
      (i || o) &&
        (!i ||
          !o ||
          i.configurable !== o.configurable ||
          i.enumerable !== o.enumerable ||
          i.writable !== o.writable))
    ) {
      return false;
    }
  }
  return true;
}
function arePrimitiveWrappersEqual(e, t) {
  return areNumbersEqual(e.valueOf(), t.valueOf());
}
function areRegExpsEqual(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function N(e, t, n) {
  let r;
  let i;
  let e_size = e.size;
  if (e_size !== t.size) {
    return false;
  }
  if (!e_size) {
    return true;
  }
  let s = Array(e_size);
  let a = e.values();
  while ((r = a.next()) && !r.done) {
    let o = t.values();
    let a = false;
    let l = 0;
    while ((i = o.next()) && !i.done) {
      if (!s[l] && n.equals(r.value, i.value, r.value, i.value, e, t, n)) {
        a = s[l] = true;
        break;
      }
      l++;
    }
    if (!a) {
      return false;
    }
  }
  return true;
}
function I(e, t) {
  let e_length = e.length;
  if (t.length !== e_length || e.byteOffset !== t.byteOffset) {
    return false;
  }
  let r = get.call(e);
  if (r === "Float64Array" || r === "Float32Array" || r === "Float16Array") {
    while (e_length-- > 0) {
      if (
        e[e_length] !== t[e_length] &&
        (e[e_length] == e[e_length] || t[e_length] == t[e_length])
      ) {
        return false;
      }
    }
    return true;
  }
  while (e_length-- > 0) {
    if (e[e_length] !== t[e_length]) {
      return false;
    }
  }
  return true;
}
function areUrlsEqual(e, t) {
  let n;
  let r;
  let i;
  let o;
  return (
    e.href === t.href ||
    (e.protocol === t.protocol &&
      e.username === t.username &&
      e.password === t.password &&
      e.host === t.host &&
      e.pathname === t.pathname &&
      e.hash === t.hash &&
      ((n = e.searchParams),
      (r = t.searchParams),
      (i = n.toString()),
      i === (o = r.toString()) || $(i) === $(o)))
  );
}
function $(e) {
  return e.split("&").sort().join("&");
}
function R(e, t, n) {
  return (
    (n === "_owner" || n === "__o" || n === "__v") &&
    !!(e.$$typeof || t.$$typeof)
  );
}
let z = {
  "[object Int8Array]": true,
  "[object Uint8Array]": true,
  "[object Uint8ClampedArray]": true,
  "[object Int16Array]": true,
  "[object Uint16Array]": true,
  "[object Int32Array]": true,
  "[object Uint32Array]": true,
  "[object Float16Array]": true,
  "[object Float32Array]": true,
  "[object Float64Array]": true,
  "[object BigInt64Array]": true,
  "[object BigUint64Array]": true,
};
let toString = Object.prototype.toString;
let B = V();
function V(e = {}) {
  let {
    circular = false,
    createInternalComparator,
    createState,
    strict = false,
  } = e;
  let comparator = (({
    areArrayBuffersEqual,
    areArraysEqual,
    areDataViewsEqual,
    areDatesEqual,
    areErrorsEqual,
    areFunctionsEqual,
    areMapsEqual,
    areNumbersEqual,
    areObjectsEqual,
    arePrimitiveWrappersEqual,
    areRegExpsEqual,
    areSetsEqual,
    areTypedArraysEqual,
    areUrlsEqual,
    unknownTagComparators,
  }) =>
    function (m, g, v) {
      if (m === g) {
        return true;
      }
      if (m == null || g == null) {
        return false;
      }
      let y = typeof m;
      if (y !== typeof g) {
        return false;
      }
      if (y !== "object") {
        if (y === "number") {
          return areNumbersEqual(m, g, v);
        }
        return y === "function" && areFunctionsEqual(m, g, v);
      }
      let m_constructor = m.constructor;
      if (m_constructor !== g.constructor) {
        return false;
      }
      if (m_constructor === Object) {
        return areObjectsEqual(m, g, v);
      }
      if (Array.isArray(m)) {
        return areArraysEqual(m, g, v);
      }
      if (m_constructor === Date) {
        return areDatesEqual(m, g, v);
      }
      if (m_constructor === RegExp) {
        return areRegExpsEqual(m, g, v);
      }
      if (m_constructor === Map) {
        return areMapsEqual(m, g, v);
      }
      if (m_constructor === Set) {
        return areSetsEqual(m, g, v);
      }
      if (m_constructor == null) {
        return areObjectsEqual(m, g, v);
      }
      let w = toString.call(m);
      if (w === "[object Date]") {
        return areDatesEqual(m, g, v);
      }
      if (w === "[object RegExp]") {
        return areRegExpsEqual(m, g, v);
      }
      if (w === "[object Map]") {
        return areMapsEqual(m, g, v);
      }
      if (w === "[object Set]") {
        return areSetsEqual(m, g, v);
      }
      if (w === "[object Object]") {
        return (
          typeof m.then !== "function" &&
          typeof g.then !== "function" &&
          areObjectsEqual(m, g, v)
        );
      }
      if (w === "[object URL]") {
        return areUrlsEqual(m, g, v);
      }
      if (w === "[object Error]") {
        return areErrorsEqual(m, g, v);
      }
      if (w === "[object Arguments]") {
        return areObjectsEqual(m, g, v);
      }
      if (z[w]) {
        return areTypedArraysEqual(m, g, v);
      }
      if (w === "[object ArrayBuffer]") {
        return areArrayBuffersEqual(m, g, v);
      }
      if (w === "[object DataView]") {
        return areDataViewsEqual(m, g, v);
      }
      if (
        w === "[object Boolean]" ||
        w === "[object Number]" ||
        w === "[object String]"
      ) {
        return arePrimitiveWrappersEqual(m, g, v);
      }
      if (unknownTagComparators) {
        let e = unknownTagComparators[w];
        if (!e) {
          let t = m != null ? m[Symbol.toStringTag] : undefined;
          if (t) {
            e = unknownTagComparators[t];
          }
        }
        if (e) {
          return e(m, g, v);
        }
      }
      return false;
    })(
    (({ circular, createCustomConfig, strict }) => {
      let r = {
        areArrayBuffersEqual,
        areArraysEqual: strict ? A : k,
        areDataViewsEqual,
        areDatesEqual,
        areErrorsEqual: strict ? C : E,
        areFunctionsEqual,
        areMapsEqual: strict ? u(T, A) : T,
        areNumbersEqual,
        areObjectsEqual: strict ? A : O,
        arePrimitiveWrappersEqual,
        areRegExpsEqual,
        areSetsEqual: strict ? u(N, A) : N,
        areTypedArraysEqual: strict ? u(I, A) : I,
        areUrlsEqual,
        unknownTagComparators: undefined,
      };
      if (createCustomConfig) {
        r = {
          ...r,
          ...createCustomConfig(r),
        };
      }
      if (circular) {
        let areArraysEqual = p(r.areArraysEqual);
        let areErrorsEqual = p(r.areErrorsEqual);
        let areMapsEqual = p(r.areMapsEqual);
        let areObjectsEqual = p(r.areObjectsEqual);
        let areSetsEqual = p(r.areSetsEqual);
        r = {
          ...r,
          areArraysEqual,
          areErrorsEqual,
          areMapsEqual,
          areObjectsEqual,
          areSetsEqual,
        };
      }
      return r;
    })(e),
  );
  let equals = createInternalComparator
    ? createInternalComparator(comparator)
    : function (e, t, n, r, i, s, a) {
        return comparator(e, t, a);
      };
  return (({ circular, comparator, createState, equals, strict }) => {
    if (createState) {
      return function (o, s) {
        let { cache = circular ? new WeakMap() : undefined, meta } =
          createState();
        return comparator(o, s, {
          cache,
          equals,
          meta,
          strict,
        });
      };
    }
    if (circular) {
      return function (e, n) {
        return comparator(e, n, {
          cache: new WeakMap(),
          equals,
          meta: undefined,
          strict,
        });
      };
    }
    let o = {
      cache: undefined,
      equals,
      meta: undefined,
      strict,
    };
    return function (e, n) {
      return comparator(e, n, o);
    };
  })({
    circular,
    comparator,
    createState,
    equals,
    strict,
  });
}
V({
  strict: true,
});
V({
  circular: true,
});
V({
  circular: true,
  strict: true,
});
V({
  createInternalComparator: () => areNumbersEqual,
});
V({
  strict: true,
  createInternalComparator: () => areNumbersEqual,
});
V({
  circular: true,
  createInternalComparator: () => areNumbersEqual,
});
V({
  circular: true,
  createInternalComparator: () => areNumbersEqual,
  strict: true,
});
const useU = ({ contentComponent }) => {
  let t = useSyncExternalStore(
    contentComponent.subscribe,
    contentComponent.getSnapshot,
    contentComponent.getServerSnapshot,
  );
  return s.jsx(s.Fragment, {
    children: Object.values(t),
  });
};
class _ extends r.Component {
  constructor(e) {
    super(e);
    this.editorContentRef = r.createRef();
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    let e;
    let editor = this.props.editor;
    if (
      editor &&
      !editor.isDestroyed &&
      ((e = editor.view.dom) == null ? undefined : e.parentNode)
    ) {
      let e;
      let n;
      if (editor.contentComponent) {
        return;
      }
      let r = this.editorContentRef.current;
      r.append(...editor.view.dom.parentNode.childNodes);
      editor.setOptions({
        element: r,
      });
      e = new Set();
      n = {};
      editor.contentComponent = {
        subscribe: (t) => {
          e.add(t);
          return () => {
            e.delete(t);
          };
        },
        getSnapshot: () => n,
        getServerSnapshot: () => n,
        setRenderer(t, r) {
          n = {
            ...n,
            [t]: i.createPortal(r.reactElement, r.element, t),
          };
          e.forEach((e) => e());
        },
        removeRenderer(t) {
          let r = {
            ...n,
          };
          delete r[t];
          n = r;
          e.forEach((e) => e());
        },
      };
      editor.createNodeViews();
      editor.isEditorContentInitialized = true;
      this.forceUpdate();
    }
  }
  componentWillUnmount() {
    let e;
    let editor = this.props.editor;
    if (editor) {
      editor.isEditorContentInitialized = false;
      if (!editor.isDestroyed) {
        editor.view.setProps({
          nodeViews: {},
        });
      }
      editor.contentComponent = null;
      try {
        if (!((e = editor.view.dom) == null ? undefined : e.parentNode)) {
          return;
        }
        let n = document.createElement("div");
        n.append(...editor.view.dom.parentNode.childNodes);
        editor.setOptions({
          element: n,
        });
      } catch {}
    }
  }
  render() {
    let { editor, innerRef, ...rest } = this.props;
    return s.jsxs(s.Fragment, {
      children: [
        s.jsx("div", {
          ref: (
            (...e) =>
            (t) => {
              e.forEach((e) => {
                if (typeof e === "function") {
                  e(t);
                } else if (e) {
                  e.current = t;
                }
              });
            }
          )(innerRef, this.editorContentRef),
          ...rest,
        }),
        (editor == null ? undefined : editor.contentComponent) &&
          s.jsx(useU, {
            contentComponent: editor.contentComponent,
          }),
      ],
    });
  }
}
const q = r.forwardRef((e, innerRef) => {
  let key = r.useMemo(
    () => Math.floor(4294967295 * Math.random()).toString(),
    [e.editor],
  );
  return r.createElement(_, {
    key,
    innerRef,
    ...e,
  });
});
export var $Z = r.memo(q);
const H = typeof window !== "undefined" ? r.useLayoutEffect : r.useEffect;
class K {
  constructor(e) {
    this.transactionNumber = 0;
    this.lastTransactionNumber = 0;
    this.subscribers = new Set();
    this.editor = e;
    this.lastSnapshot = {
      editor: e,
      transactionNumber: 0,
    };
    this.getSnapshot = this.getSnapshot.bind(this);
    this.getServerSnapshot = this.getServerSnapshot.bind(this);
    this.watch = this.watch.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }
  getSnapshot() {
    if (this.transactionNumber !== this.lastTransactionNumber) {
      this.lastTransactionNumber = this.transactionNumber;
      this.lastSnapshot = {
        editor: this.editor,
        transactionNumber: this.transactionNumber,
      };
    }
    return this.lastSnapshot;
  }
  getServerSnapshot() {
    return {
      editor: null,
      transactionNumber: 0,
    };
  }
  subscribe(e) {
    this.subscribers.add(e);
    return () => {
      this.subscribers.delete(e);
    };
  }
  watch(e) {
    this.editor = e;
    if (this.editor) {
      let e = () => {
        this.transactionNumber += 1;
        this.subscribers.forEach((e) => e());
      };
      let t = this.editor;
      t.on("transaction", e);
      return () => {
        t.off("transaction", e);
      };
    }
  }
}
function useY(e) {
  let t;
  let [n] = r.useState(() => new K(e.editor));
  let i = useSyncExternalStoreWithSelector(
    n.subscribe,
    n.getSnapshot,
    n.getServerSnapshot,
    e.selector,
    (t = e.equalityFn) != null ? t : B,
  );
  H(() => n.watch(e.editor), [e.editor, n]);
  r.useDebugValue(i);
  return i;
}
export { useY as er };
const Z = typeof window === "undefined";
const J = Z || !!(typeof window !== "undefined" && window.next);
const G = class e {
  constructor(e) {
    this.editor = null;
    this.subscriptions = new Set();
    this.isComponentMounted = false;
    this.previousDeps = null;
    this.instanceId = "";
    this.options = e;
    this.subscriptions = new Set();
    this.setEditor(this.getInitialEditor());
    this.scheduleDestroy();
    this.getEditor = this.getEditor.bind(this);
    this.getServerSnapshot = this.getServerSnapshot.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.refreshEditorInstance = this.refreshEditorInstance.bind(this);
    this.scheduleDestroy = this.scheduleDestroy.bind(this);
    this.onRender = this.onRender.bind(this);
    this.createEditor = this.createEditor.bind(this);
  }
  setEditor(e) {
    this.editor = e;
    this.instanceId = Math.random().toString(36).slice(2, 9);
    this.subscriptions.forEach((e) => e());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === undefined) {
      if (Z || J) {
        return null;
      }
      return this.createEditor();
    }
    this.options.current.immediatelyRender;
    if (this.options.current.immediatelyRender) {
      return this.createEditor();
    }
    return null;
  }
  createEditor() {
    let e = {
      ...this.options.current,
      onBeforeCreate: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onBeforeCreate) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onBlur: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onBlur) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onCreate: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onCreate) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onDestroy: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onDestroy) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onFocus: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onFocus) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onSelectionUpdate: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onSelectionUpdate) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onTransaction: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onTransaction) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onUpdate: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onUpdate) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onContentError: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onContentError) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onDrop: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onDrop) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onPaste: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onPaste) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
      onDelete: (...e) => {
        var t;
        var n;
        if ((n = (t = this.options.current).onDelete) == null) {
          return undefined;
        }
        return n.call(t, ...e);
      },
    };
    return new KE(e);
  }
  getEditor() {
    return this.editor;
  }
  getServerSnapshot() {
    return null;
  }
  subscribe(e) {
    this.subscriptions.add(e);
    return () => {
      this.subscriptions.delete(e);
    };
  }
  static compareOptions(e, t) {
    return Object.keys(e).every(
      (n) =>
        !![
          "onCreate",
          "onBeforeCreate",
          "onDestroy",
          "onUpdate",
          "onTransaction",
          "onFocus",
          "onBlur",
          "onSelectionUpdate",
          "onContentError",
          "onDrop",
          "onPaste",
        ].includes(n) ||
        (n === "extensions" && e.extensions && t.extensions
          ? e.extensions.length === t.extensions.length &&
            e.extensions.every((e, n) => {
              var r;
              return e === ((r = t.extensions) == null ? undefined : r[n]);
            })
          : e[n] === t[n]),
    );
  }
  onRender(t) {
    return () => {
      this.isComponentMounted = true;
      clearTimeout(this.scheduledDestructionTimeout);
      if (this.editor && !this.editor.isDestroyed && t.length === 0) {
        if (!e.compareOptions(this.options.current, this.editor.options)) {
          this.editor.setOptions({
            ...this.options.current,
            editable: this.editor.isEditable,
          });
        }
      } else {
        this.refreshEditorInstance(t);
      }
      return () => {
        this.isComponentMounted = false;
        this.scheduleDestroy();
      };
    };
  }
  refreshEditorInstance(e) {
    if (this.editor && !this.editor.isDestroyed) {
      if (this.previousDeps === null) {
        this.previousDeps = e;
        return;
      }
      if (
        this.previousDeps.length === e.length &&
        this.previousDeps.every((t, n) => t === e[n])
      ) {
        return;
      }
    }
    if (this.editor && !this.editor.isDestroyed) {
      this.editor.destroy();
    }
    this.setEditor(this.createEditor());
    this.previousDeps = e;
  }
  scheduleDestroy() {
    let instanceId = this.instanceId;
    let editor = this.editor;
    this.scheduledDestructionTimeout = setTimeout(() => {
      if (this.isComponentMounted && this.instanceId === instanceId) {
        if (editor) {
          editor.setOptions(this.options.current);
        }
        return;
      }
      if (editor && !editor.isDestroyed) {
        editor.destroy();
        if (this.instanceId === instanceId) {
          this.setEditor(null);
        }
      }
    }, 1);
  }
};
export function hG(e = {}, t = []) {
  let nRef = r.useRef(e);
  nRef.current = e;
  let [i] = r.useState(() => new G(nRef));
  let s = useSyncExternalStore(i.subscribe, i.getEditor, i.getServerSnapshot);
  r.useDebugValue(s);
  r.useEffect(i.onRender(t));
  useY({
    editor: s,
    selector: ({ transactionNumber }) => {
      if (
        e.shouldRerenderOnTransaction === false ||
        e.shouldRerenderOnTransaction === undefined
      ) {
        return null;
      }
      if (e.immediatelyRender && transactionNumber === 0) {
        return 0;
      }
      return transactionNumber + 1;
    },
  });
  return s;
}
const XContext = r.createContext({
  editor: null,
});
XContext.Consumer;
const EeContext = r.createContext({
  onDragStart: () => {},
  nodeViewContentChildren: undefined,
  nodeViewContentRef: () => {},
});
export var VR = r.forwardRef((e, ref) => {
  let { onDragStart } = r.useContext(EeContext);
  let i = e.as || "div";
  return s.jsx(i, {
    ...e,
    ref,
    "data-node-view-wrapper": "",
    onDragStart,
    style: {
      whiteSpace: "normal",
      ...e.style,
    },
  });
});
function en(e) {
  return !!(
    typeof e === "function" &&
    e.prototype &&
    e.prototype.isReactComponent
  );
}
function er(e) {
  return !!(
    typeof e === "object" &&
    e.$$typeof &&
    (e.$$typeof.toString() === "Symbol(react.forward_ref)" ||
      e.$$typeof.description === "react.forward_ref")
  );
}
export var NV = class {
  constructor(e, { editor, props = {}, as = "div", className = "" }) {
    this.ref = null;
    this.destroyed = false;
    this.id = Math.floor(4294967295 * Math.random()).toString();
    this.component = e;
    this.editor = editor;
    this.props = props;
    this.element = document.createElement(as);
    this.element.classList.add("react-renderer");
    if (className) {
      this.element.classList.add(...className.split(" "));
    }
    if (this.editor.isEditorContentInitialized) {
      i.flushSync(() => {
        this.render();
      });
    } else {
      queueMicrotask(() => {
        if (!this.destroyed) {
          this.render();
        }
      });
    }
  }
  render() {
    let e;
    if (this.destroyed) {
      return;
    }
    let component = this.component;
    let props = this.props;
    let editor = this.editor;
    let o = (() => {
      try {
        if (r.version) {
          return parseInt(r.version.split(".")[0], 10) >= 19;
        }
      } catch {}
      return false;
    })();
    let a = ((e) => {
      if (en(e) || er(e)) {
        return true;
      }
      if (
        typeof e === "object" &&
        e.$$typeof &&
        (e.$$typeof.toString() === "Symbol(react.memo)" ||
          e.$$typeof.description === "react.memo")
      ) {
        let t = e.type;
        if (t) {
          return en(t) || er(t);
        }
      }
      return false;
    })(component);
    let l = {
      ...props,
    };
    if (l.ref && !(o || a)) {
      delete l.ref;
    }
    if (!l.ref && (o || a)) {
      l.ref = (e) => {
        this.ref = e;
      };
    }
    this.reactElement = s.jsx(component, {
      ...l,
    });
    if ((e = editor == null ? undefined : editor.contentComponent) != null) {
      e.setRenderer(this.id, this);
    }
  }
  updateProps(e = {}) {
    if (!this.destroyed) {
      this.props = {
        ...this.props,
        ...e,
      };
      this.render();
    }
  }
  destroy() {
    let e;
    this.destroyed = true;
    let editor = this.editor;
    if ((e = editor == null ? undefined : editor.contentComponent) != null) {
      e.removeRenderer(this.id);
    }
    try {
      if (this.element && this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }
    } catch {}
  }
  updateAttributes(e) {
    Object.keys(e).forEach((t) => {
      this.element.setAttribute(t, e[t]);
    });
  }
};
r.createContext({
  markViewContentRef: () => {},
});
Db;
class eo extends Yv {
  constructor(e, t, n) {
    super(e, t, n);
    this.selectionRafId = null;
    this.positionCheckCallback = null;
    this.cachedExtensionWithSyncedStorage = null;
    if (!this.node.isLeaf) {
      if (this.options.contentDOMElementTag) {
        this.contentDOMElement = document.createElement(
          this.options.contentDOMElementTag,
        );
      } else {
        this.contentDOMElement = document.createElement(
          this.node.isInline ? "span" : "div",
        );
      }
      this.contentDOMElement.dataset.nodeViewContentReact = "";
      this.contentDOMElement.dataset.nodeViewWrapper = "";
      this.contentDOMElement.style.whiteSpace = "inherit";
      let e = this.dom.querySelector("[data-node-view-content]");
      if (!e) {
        return;
      }
      e.appendChild(this.contentDOMElement);
    }
  }
  get extensionWithSyncedStorage() {
    if (!this.cachedExtensionWithSyncedStorage) {
      let e = this.editor;
      let t = this.extension;
      this.cachedExtensionWithSyncedStorage = new Proxy(t, {
        get(n, r, i) {
          let o;
          if (r === "storage") {
            if ((o = e.storage[t.name]) != null) {
              return o;
            }
            return {};
          }
          return Reflect.get(n, r, i);
        },
      });
    }
    return this.cachedExtensionWithSyncedStorage;
  }
  mount() {
    let props = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: false,
      extension: this.extensionWithSyncedStorage,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (e = {}) => this.updateAttributes(e),
      deleteNode: () => this.deleteNode(),
      ref: r.createRef(),
    };
    if (!this.component.displayName) {
      let e;
      this.component.displayName =
        (e = this.extension.name).charAt(0).toUpperCase() + e.substring(1);
    }
    let t = {
      onDragStart: this.onDragStart.bind(this),
      nodeViewContentRef: (e) => {
        if (
          e &&
          this.contentDOMElement &&
          e.firstChild !== this.contentDOMElement
        ) {
          if (e.hasAttribute("data-node-view-wrapper")) {
            e.removeAttribute("data-node-view-wrapper");
          }
          e.appendChild(this.contentDOMElement);
        }
      },
    };
    let component = this.component;
    let i = r.memo((e) =>
      s.jsx(EeContext.Provider, {
        value: t,
        children: r.createElement(component, e),
      }),
    );
    i.displayName = "ReactNodeView";
    let as = this.node.isInline ? "span" : "div";
    if (this.options.as) {
      as = this.options.as;
    }
    let { className = "" } = this.options;
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
    this.renderer = new NV(i, {
      editor: this.editor,
      props,
      as,
      className: `node-${this.node.type.name} ${className}`.trim(),
    });
    this.editor.on("selectionUpdate", this.handleSelectionUpdate);
    this.updateElementAttributes();
    this.currentPos = this.getPos();
    this.positionCheckCallback = () => {
      let e = this.getPos();
      if (typeof e === "number" && e !== this.currentPos) {
        this.currentPos = e;
        this.renderer.updateProps({
          getPos: () => this.getPos(),
        });
        if (typeof this.options.attrs === "function") {
          this.updateElementAttributes();
        }
      }
    };
    fD(this.editor, this.positionCheckCallback);
  }
  get dom() {
    let e;
    if (
      this.renderer.element.firstElementChild &&
      !((e = this.renderer.element.firstElementChild) == null
        ? undefined
        : e.hasAttribute("data-node-view-wrapper"))
    ) {
      throw Error(
        "Please use the NodeViewWrapper component for your node view.",
      );
    }
    return this.renderer.element;
  }
  get contentDOM() {
    if (this.node.isLeaf) {
      return null;
    }
    return this.contentDOMElement;
  }
  handleSelectionUpdate() {
    if (this.selectionRafId) {
      cancelAnimationFrame(this.selectionRafId);
      this.selectionRafId = null;
    }
    this.selectionRafId = requestAnimationFrame(() => {
      this.selectionRafId = null;
      let { from, to } = this.editor.state.selection;
      let currentPos = this.currentPos;
      if (typeof currentPos === "number") {
        if (from <= currentPos && to >= currentPos + this.node.nodeSize) {
          if (this.renderer.props.selected) {
            return;
          }
          this.selectNode();
        } else {
          if (!this.renderer.props.selected) {
            return;
          }
          this.deselectNode();
        }
      }
    });
  }
  update(e, t, innerDecorations) {
    let r = (e) => {
      this.renderer.updateProps(e);
      if (typeof this.options.attrs === "function") {
        this.updateElementAttributes();
      }
    };
    if (e.type !== this.node.type) {
      return false;
    }
    if (typeof this.options.update === "function") {
      let oldNode = this.node;
      let oldDecorations = this.decorations;
      let oldInnerDecorations = this.innerDecorations;
      this.node = e;
      this.decorations = t;
      this.innerDecorations = innerDecorations;
      this.currentPos = this.getPos();
      return this.options.update({
        oldNode,
        oldDecorations,
        newNode: e,
        newDecorations: t,
        oldInnerDecorations,
        innerDecorations,
        updateProps: () =>
          r({
            node: e,
            decorations: t,
            innerDecorations,
            extension: this.extensionWithSyncedStorage,
          }),
      });
    }
    let i = this.getPos();
    if (
      e === this.node &&
      this.decorations === t &&
      this.innerDecorations === innerDecorations
    ) {
      return (
        i === this.currentPos ||
        ((this.currentPos = i),
        r({
          node: e,
          decorations: t,
          innerDecorations,
          extension: this.extensionWithSyncedStorage,
          getPos: () => this.getPos(),
        }),
        true)
      );
    }
    this.node = e;
    this.decorations = t;
    this.innerDecorations = innerDecorations;
    this.currentPos = i;
    r({
      node: e,
      decorations: t,
      innerDecorations,
      extension: this.extensionWithSyncedStorage,
    });
    return true;
  }
  selectNode() {
    this.renderer.updateProps({
      selected: true,
    });
    this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  deselectNode() {
    this.renderer.updateProps({
      selected: false,
    });
    this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  destroy() {
    this.renderer.destroy();
    this.editor.off("selectionUpdate", this.handleSelectionUpdate);
    if (this.positionCheckCallback) {
      YT(this.editor, this.positionCheckCallback);
      this.positionCheckCallback = null;
    }
    this.contentDOMElement = null;
    if (this.selectionRafId) {
      cancelAnimationFrame(this.selectionRafId);
      this.selectionRafId = null;
    }
  }
  updateElementAttributes() {
    if (this.options.attrs) {
      let e = {};
      if (typeof this.options.attrs === "function") {
        let t = this.editor.extensionManager.attributes;
        let HTMLAttributes = zU(this.node, t);
        e = this.options.attrs({
          node: this.node,
          HTMLAttributes,
        });
      } else {
        e = this.options.attrs;
      }
      this.renderer.updateAttributes(e);
    }
  }
}
export function gu(e, t) {
  return (n) => {
    if (n.editor.contentComponent) {
      return new eo(e, n, t);
    }
    return {};
  };
}
const EaContext = r.createContext({
  get editor() {
    throw Error("useTiptap must be used within a <Tiptap> provider");
  },
});
function useEl({ editor, instance, children }) {
  let i = editor != null ? editor : instance;
  if (!i) {
    throw Error(
      "Tiptap: An editor instance is required. Pass a non-null `editor` prop.",
    );
  }
  let o = r.useMemo(
    () => ({
      editor: i,
    }),
    [i],
  );
  let a = r.useMemo(
    () => ({
      editor: i,
    }),
    [i],
  );
  return s.jsx(XContext.Provider, {
    value: a,
    children: s.jsx(EaContext.Provider, {
      value: o,
      children,
    }),
  });
}
function useEd({ ...rest }) {
  let { editor } = r.useContext(EaContext);
  return s.jsx($Z, {
    editor,
    ...rest,
  });
}
EaContext.displayName = "TiptapContext";
useEl.displayName = "Tiptap";
useEd.displayName = "Tiptap.Content";
Object.assign(useEl, {
  Content: useEd,
});
