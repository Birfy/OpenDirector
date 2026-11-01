import n from "./module-O9.js";
export default {
  Map,
  set: n(Map.prototype.set),
  get: n(Map.prototype.get),
  has: n(Map.prototype.has),
  remove: n(Map.prototype.delete),
  proto: Map.prototype,
};
