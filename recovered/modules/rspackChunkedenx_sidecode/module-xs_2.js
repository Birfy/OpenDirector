import n from "./module-A.js";
import _o from "./module-Sm.js";
const _o_entries = _o.entries;
n(
  {
    target: "Object",
    stat: true,
  },
  {
    entries: function (t) {
      return _o_entries(t);
    },
  },
);
