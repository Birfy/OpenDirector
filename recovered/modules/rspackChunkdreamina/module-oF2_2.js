const r = typeof Symbol === "function" && Symbol.for;
export var Element = r ? Symbol.for("react.element") : 60103;
export var Portal = r ? Symbol.for("react.portal") : 60106;
export var Fragment = r ? Symbol.for("react.fragment") : 60107;
export var StrictMode = r ? Symbol.for("react.strict_mode") : 60108;
export var Profiler = r ? Symbol.for("react.profiler") : 60114;
export var ContextProvider = r ? Symbol.for("react.provider") : 60109;
export var ContextConsumer = r ? Symbol.for("react.context") : 60110;
export var AsyncMode = r ? Symbol.for("react.async_mode") : 60111;
export var ConcurrentMode = r ? Symbol.for("react.concurrent_mode") : 60111;
export var ForwardRef = r ? Symbol.for("react.forward_ref") : 60112;
export var Suspense = r ? Symbol.for("react.suspense") : 60113;
const g = r ? Symbol.for("react.suspense_list") : 60120;
export var Memo = r ? Symbol.for("react.memo") : 60115;
export var Lazy = r ? Symbol.for("react.lazy") : 60116;
const m = r ? Symbol.for("react.block") : 60121;
const y = r ? Symbol.for("react.fundamental") : 60117;
const b = r ? Symbol.for("react.responder") : 60118;
const v = r ? Symbol.for("react.scope") : 60119;
export function typeOf(t) {
  if (typeof t === "object" && t !== null) {
    const e = t.$$typeof;
    switch (e) {
      case Element:
        switch ((t = t.type)) {
          case AsyncMode:
          case ConcurrentMode:
          case Fragment:
          case Profiler:
          case StrictMode:
          case Suspense:
            return t;
          default:
            switch ((t = t && t.$$typeof)) {
              case ContextConsumer:
              case ForwardRef:
              case Lazy:
              case Memo:
              case ContextProvider:
                return t;
              default:
                return e;
            }
        }
      case Portal:
        return e;
    }
  }
}
export function isConcurrentMode(t) {
  return typeOf(t) === ConcurrentMode;
}
export const isAsyncMode = function (t) {
  return isConcurrentMode(t) || typeOf(t) === AsyncMode;
};
export const isContextConsumer = function (t) {
  return typeOf(t) === ContextConsumer;
};
export const isContextProvider = function (t) {
  return typeOf(t) === ContextProvider;
};
export const isElement = function (t) {
  return typeof t === "object" && t !== null && t.$$typeof === Element;
};
export const isForwardRef = function (t) {
  return typeOf(t) === ForwardRef;
};
export const isFragment = function (t) {
  return typeOf(t) === Fragment;
};
export const isLazy = function (t) {
  return typeOf(t) === Lazy;
};
export const isMemo = function (t) {
  return typeOf(t) === Memo;
};
export const isPortal = function (t) {
  return typeOf(t) === Portal;
};
export const isProfiler = function (t) {
  return typeOf(t) === Profiler;
};
export const isStrictMode = function (t) {
  return typeOf(t) === StrictMode;
};
export const isSuspense = function (t) {
  return typeOf(t) === Suspense;
};
export const isValidElementType = function (t) {
  return (
    typeof t === "string" ||
    typeof t === "function" ||
    t === Fragment ||
    t === ConcurrentMode ||
    t === Profiler ||
    t === StrictMode ||
    t === Suspense ||
    t === g ||
    (typeof t === "object" &&
      t !== null &&
      (t.$$typeof === Lazy ||
        t.$$typeof === Memo ||
        t.$$typeof === ContextProvider ||
        t.$$typeof === ContextConsumer ||
        t.$$typeof === ForwardRef ||
        t.$$typeof === y ||
        t.$$typeof === b ||
        t.$$typeof === v ||
        t.$$typeof === m))
  );
};
