import $ from "./module-M_2_12.js";
import tt from "./module-vo_12.js";
import te from "./module-d_13.js";
import tr from "./module-NK_2_2.js";
import tn from "./module-vbL_12.js";
import ti from "./module-Gz_12.js";
const to = tn(function () {
  const iterator = this.iterator;
  const Z = te($(this.next, iterator));
  if (!(this.done = !!Z.done)) {
    return ti(iterator, this.mapper, [Z.value, this.counter++], true);
  }
});
export default function (mapper) {
  te(this);
  tt(mapper);
  return new to(tr(this), {
    mapper,
  });
}
