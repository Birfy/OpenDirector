import n from "./module-M_2_19.js";
import o from "./module-vo_19.js";
import i from "./module-d_20.js";
import a from "./module-NK_19.js";
import s from "./module-vbL_19.js";
import u from "./module-Gz_19.js";
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
