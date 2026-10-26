import n from "./module-M_2_6.js";
import o from "./module-vo_6.js";
import a from "./module-d_7.js";
import i from "./module-NK_6.js";
import s from "./module-vbL_6.js";
import c from "./module-Gz_6.js";
const u = s(function () {
  const iterator = this.iterator;
  const r = a(n(this.next, iterator));
  if (!(this.done = !!r.done)) {
    return c(iterator, this.mapper, [r.value, this.counter++], true);
  }
});
export default function (mapper) {
  a(this);
  o(mapper);
  return new u(i(this), {
    mapper,
  });
}
