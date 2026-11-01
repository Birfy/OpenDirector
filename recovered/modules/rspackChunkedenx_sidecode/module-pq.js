import n from "./module-M_2.js";
import o from "./module-vo.js";
import i from "./module-d.js";
import a from "./module-NK.js";
import s from "./module-vbL.js";
import u from "./module-Gz.js";
const c = s(function () {
  const iterator = this.iterator;
  const r = i(n(this.next, iterator));
  if (!(this.done = !!r.done)) {
    return u(iterator, this.mapper, [r.value, this.counter++], true);
  }
});
export default function (mapper) {
  i(this);
  o(mapper);
  return new c(a(this), {
    mapper,
  });
}
