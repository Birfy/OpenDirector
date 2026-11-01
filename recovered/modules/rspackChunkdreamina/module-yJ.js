const n = function (e) {
  const detail =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (e) {
    if (!performance.getEntriesByName(e).length) {
      performance.mark(e, {
        detail,
      });
    }
  }
};
export var jo = function (e) {
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (e) {
    n("".concat(e, "_START"), r);
  }
};
export var qD = function (e) {
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (e) {
    n("".concat(e, "_END"), r);
  }
};
export var HQ = function (e) {
  const r =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : "".concat(e, "_START");
  const t =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : "".concat(e, "_END");
  try {
    return performance.measure(e, r, t);
  } catch (e) {}
};
