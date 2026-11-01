export var R = function () {
  for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) {
    e[i] = arguments[i];
  }
  return e
    .map((t) => {
      if (t == null) {
        return undefined;
      }
      return t.trim();
    })
    .filter((t) => !!t)
    .join(" ");
};
export var q = (t) =>
  R(...t.map((t) => t.final || t.interim).filter((t) => t.trim()));
