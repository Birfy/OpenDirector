const r = (e) =>
  e.scrollHeight > e.offsetHeight || e.scrollWidth > e.offsetWidth;
export var t = function (e) {
  for (
    var t =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : document.documentElement,
      a = [],
      l = e;
    l && l !== t;
  ) {
    if (r(l)) {
      a.push(l);
    }
    l = l.parentElement;
  }
  return a;
};
