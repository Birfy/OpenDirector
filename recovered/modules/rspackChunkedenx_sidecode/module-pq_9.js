import n from "./module-M_2_9.js";
import o from "./module-vo_9.js";
import i from "./module-d_10.js";
import a from "./module-NK_9.js";
import s from "./module-vbL_9.js";
import u from "./module-Gz_9.js";
const c = s(function () {
  const iterator = this.iterator;
  const e = i(n(this.next, iterator));
  if (!(this.done = !!e.done)) {
    return u(iterator, this.mapper, [e.value, this.counter++], true);
  }
});
export default function (mapper) {
  i(this);
  o(mapper);
  return new c(a(this), {
    mapper,
  });
}
