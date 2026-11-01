import n from "./module-O9_18.js";
export default {
  Set,
  add: n(Set.prototype.add),
  has: n(Set.prototype.has),
  remove: n(Set.prototype.delete),
  proto: Set.prototype,
};
