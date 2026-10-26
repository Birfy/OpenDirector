import a from "zS";
import t from "wF";
import i from "ru";
import o from "cY";
export var L = (e) => {
  var l = t.h(o.i);
  return a.A(() => {
    var n;
    var { hasLogin } = l;
    return (
      !hasLogin &&
      ((n = e.onBeforeNavigate) == null || n.call(e), i.D(l, e.source), true)
    );
  });
};
