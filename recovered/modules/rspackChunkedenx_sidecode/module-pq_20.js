import n from "./module-M_2_20.js";
import o from "./module-vo_20.js";
import i from "./module-d_21.js";
import a from "./module-NK_20.js";
import s from "./module-vbL_20.js";
import c from "./module-Gz_20.js";
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
