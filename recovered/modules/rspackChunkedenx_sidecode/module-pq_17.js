import n from "./module-M_2_17.js";
import o from "./module-vo_17.js";
import i from "./module-d_18.js";
import a from "./module-NK_17.js";
import s from "./module-vbL_17.js";
import u from "./module-Gz_17.js";
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
