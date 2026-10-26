import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "./module-ND_2.js";
const SYMBOL_REACT_ELEMENT = Symbol.for("react.element");
export var Fragment = Symbol.for("react.fragment");
const hasOwnProperty = Object.prototype.hasOwnProperty;
const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner =
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
const s = {
  key: true,
  ref: true,
  __self: true,
  __source: true,
};
export function jsx(e, t, r) {
  let n;
  const props = {};
  let u = null;
  let ref = null;
  if (r !== undefined) {
    u = "" + r;
  }
  if (t.key !== undefined) {
    u = "" + t.key;
  }
  if (t.ref !== undefined) {
    ref = t.ref;
  }
  for (n in t) {
    if (hasOwnProperty.call(t, n) && !s.hasOwnProperty(n)) {
      props[n] = t[n];
    }
  }
  if (e && e.defaultProps) {
    for (n in (t = e.defaultProps)) {
      if (props[n] === undefined) {
        props[n] = t[n];
      }
    }
  }
  return {
    $$typeof: SYMBOL_REACT_ELEMENT,
    type: e,
    key: u,
    ref,
    props,
    _owner:
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current,
  };
}
export { jsx as jsxs };
