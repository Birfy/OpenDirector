import n from "./module-O9_14.js";
export default {
  Map,
  set: n(Map.prototype.set),
  get: n(Map.prototype.get),
  has: n(Map.prototype.has),
  remove: n(Map.prototype.delete),
  proto: Map.prototype,
};
