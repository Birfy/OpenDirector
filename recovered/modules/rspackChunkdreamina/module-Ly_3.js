import i from "ck";
export var N = (e) => {
  if (!i.A(e) || e < 0) {
    return "00:00";
  }
  var t = Math.round(e);
  var r = Math.floor(t / 60);
  var n = (e) => {
    if (e.length) {
      if (e.length === 1) {
        return "0".concat(e);
      }
      return e;
    }
    return "00";
  };
  return "".concat(n("".concat(r)), ":").concat(n(`${t - 60 * r}`));
};
