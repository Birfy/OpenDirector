import n from "./module-o.js";
export default {
  WeakSet,
  add: n(WeakSet.prototype.add),
  has: n(WeakSet.prototype.has),
  remove: n(WeakSet.prototype.delete),
};
