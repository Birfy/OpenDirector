import $ from "./module-O9_12.js";
export default {
  Map,
  set: $(Map.prototype.set),
  get: $(Map.prototype.get),
  has: $(Map.prototype.has),
  remove: $(Map.prototype.delete),
  proto: Map.prototype,
};
