import n from "./module-M_2_23.js";
import o from "./module-vo_23.js";
import i from "./module-d_24.js";
import a from "./module-NK_23.js";
import s from "./module-vbL_23.js";
import c from "./module-Gz_23.js";
const u = s(function () {
  const iterator = this.iterator;
  const r = i(n(this.next, iterator));
  if (!(this.done = !!r.done)) {
    return c(iterator, this.mapper, [r.value, this.counter++], true);
  }
});
export default function (mapper) {
  i(this);
  o(mapper);
  return new u(a(this), {
    mapper,
  });
}
