import { ForwardRef, Memo, isMemo } from "./module-oF2_2.js";
const i = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true,
};
const a = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true,
};
const o = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true,
};
const s = {};
function A(t) {
  if (isMemo(t)) {
    return o;
  }
  return s[t.$$typeof] || i;
}
s[ForwardRef] = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
};
s[Memo] = o;
export default (function t(e, r, n) {
  if (typeof r !== "string") {
    if (Object.prototype) {
      const i = Object.getPrototypeOf(r);
      if (i && i !== Object.prototype) {
        t(e, i, n);
      }
    }
    let o = Object.getOwnPropertyNames(r);
    if (Object.getOwnPropertySymbols) {
      o = o.concat(Object.getOwnPropertySymbols(r));
    }
    const s = A(e);
    const d = A(r);
    for (let p = 0; p < o.length; ++p) {
      const m = o[p];
      if (!a[m] && !(n && n[m]) && !(d && d[m]) && !(s && s[m])) {
        const y = Object.getOwnPropertyDescriptor(r, m);
        try {
          Object.defineProperty(e, m, y);
        } catch (t) {}
      }
    }
  }
  return e;
});
