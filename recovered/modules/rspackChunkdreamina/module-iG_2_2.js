import n from "./module-p3.js";
import o from "./module-B.js";
import i from "./module-IF_2.js";
import a from "./module-ju_2.js";
import s from "./module-Yt_3.js";
import u from "./module-rIh.js";
const c = s(function () {
  const iterator = this.iterator;
  const t = i(n(this.next, iterator));
  if (!(this.done = !!t.done)) {
    return u(iterator, this.mapper, [t.value, this.counter++], true);
  }
});
export default function (mapper) {
  i(this);
  o(mapper);
  return new c(a(this), {
    mapper,
  });
}
