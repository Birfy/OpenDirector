import n from "./module-M_2_5.js";
import i from "./module-vo_5.js";
import o from "./module-d_6.js";
import s from "./module-NK_5.js";
import a from "./module-vbL_5.js";
import u from "./module-Gz_5.js";
const c = a(function () {
  const iterator = this.iterator;
  const r = o(n(this.next, iterator));
  if (!(this.done = !!r.done)) {
    return u(iterator, this.mapper, [r.value, this.counter++], true);
  }
});
export default function (mapper) {
  o(this);
  i(mapper);
  return new c(s(this), {
    mapper,
  });
}
