import n from "./module-yH_4.js";
function resetWarningCache() {}
function checkPropTypes() {}
checkPropTypes.resetWarningCache = resetWarningCache;
export default function () {
  function t(t, e, r, i, a, o) {
    if (o !== n) {
      const s = Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
      );
      s.name = "Invariant Violation";
      throw s;
    }
  }
  function e() {
    return t;
  }
  t.isRequired = t;
  const r = {
    array: t,
    bigint: t,
    bool: t,
    func: t,
    number: t,
    object: t,
    string: t,
    symbol: t,
    any: t,
    arrayOf: e,
    element: t,
    elementType: t,
    instanceOf: e,
    node: t,
    objectOf: e,
    oneOf: e,
    oneOfType: e,
    shape: e,
    exact: e,
    checkPropTypes,
    resetWarningCache,
  };
  r.PropTypes = r;
  return r;
}
