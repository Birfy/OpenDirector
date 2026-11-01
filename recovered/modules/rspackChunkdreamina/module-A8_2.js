import n from "./module-o.js";
export default {
  WeakMap,
  set: n(WeakMap.prototype.set),
  get: n(WeakMap.prototype.get),
  has: n(WeakMap.prototype.has),
  remove: n(WeakMap.prototype.delete),
};
