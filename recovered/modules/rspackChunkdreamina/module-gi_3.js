import n from "F";
import i from "Yz";
import a from "O";
import o from "OG";
import s from "Tg";
if (n) {
  s(Array.prototype, "lastIndex", {
    configurable: true,
    get: function () {
      const t = o(a(this));
      if (t === 0) {
        return 0;
      }
      return t - 1;
    },
  });
  i("lastIndex");
}
