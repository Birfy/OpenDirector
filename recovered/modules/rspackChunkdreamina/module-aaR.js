import n from "F";
import i from "Yz";
import a from "O";
import o from "OG";
import s from "Tg";
if (n) {
  s(Array.prototype, "lastItem", {
    configurable: true,
    get: function () {
      const t = a(this);
      const e = o(t);
      if (e === 0) {
        return undefined;
      }
      return t[e - 1];
    },
    set: function (t) {
      const e = a(this);
      const r = o(e);
      return (e[r === 0 ? 0 : r - 1] = t);
    },
  });
  i("lastItem");
}
