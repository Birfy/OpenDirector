import a from "oa";
import n from "bk";
import o from "Qey";
let i;
export var Ay = {
  t: o.F2.t.bind(o.F2),
  get language() {
    if (i != null) {
      return i;
    }
    return o.F2.language;
  },
};
export var WM = (e) => {
  i = e.language;
  Ay.t = function () {
    for (var t = arguments.length, r = Array(t), i = 0; i < t; i++) {
      r[i] = arguments[i];
    }
    const [o, s, c] = r;
    return e.t(
      o,
      n._(a._({}, s), {
        ns: "MWeb_New",
      }),
      c,
    );
  };
};
