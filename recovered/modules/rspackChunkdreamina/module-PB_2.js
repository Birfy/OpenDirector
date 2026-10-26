export var f = (e) => {
  var t = Math.ceil(100 * e) / 10;
  if (Number.isInteger(t)) {
    return "".concat(t.toFixed(0));
  }
  return "".concat(t.toFixed(1));
};
