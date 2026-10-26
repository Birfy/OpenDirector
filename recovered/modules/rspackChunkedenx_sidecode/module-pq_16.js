import n from "./module-M_2_16.js";
import o from "./module-vo_16.js";
import i from "./module-d_17.js";
import a from "./module-NK_16.js";
import s from "./module-vbL_16.js";
import u from "./module-Gz_16.js";
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
