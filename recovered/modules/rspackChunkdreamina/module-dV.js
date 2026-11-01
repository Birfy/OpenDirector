import n from "g";
import i from "ib";
import a from "SM";
import o from "H";
import s from "BC";
import A from "G";
import c from "aE";
const c_codeAt = c.codeAt;
const c_charAt = c.charAt;
const h = "String Iterator";
const A_set = A.set;
const g = A.getterFor(h);
const d = i(
  function (string) {
    A_set(this, {
      type: h,
      string,
      index: 0,
    });
  },
  "String",
  function () {
    let t;
    const e = g(this);
    const e_string = e.string;
    const e_index = e.index;
    if (e_index >= e_string.length) {
      return a(undefined, true);
    }
    t = c_charAt(e_string, e_index);
    e.index += t.length;
    return a(
      {
        codePoint: c_codeAt(t, 0),
        position: e_index,
      },
      false,
    );
  },
);
n(
  {
    target: "String",
    proto: true,
    forced: true,
  },
  {
    codePoints: function () {
      return new d(s(o(this)));
    },
  },
);
