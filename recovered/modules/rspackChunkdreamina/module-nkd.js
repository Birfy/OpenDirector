import n from "./module-sJv.js";
export default i;
function i(e) {
  if (e) {
    for (let t = Object.keys(e), r = 0; r < t.length; ++r) {
      this[t[r]] = e[t[r]];
    }
  }
}
i.create = function (e) {
  return this.$type.create(e);
};
i.encode = function (e, t) {
  return this.$type.encode(e, t);
};
i.encodeDelimited = function (e, t) {
  return this.$type.encodeDelimited(e, t);
};
i.decode = function (e) {
  return this.$type.decode(e);
};
i.decodeDelimited = function (e) {
  return this.$type.decodeDelimited(e);
};
i.verify = function (e) {
  return this.$type.verify(e);
};
i.fromObject = function (e) {
  return this.$type.fromObject(e);
};
i.toObject = function (e, t) {
  return this.$type.toObject(e, t);
};
i.prototype.toJSON = function () {
  return this.$type.toObject(this, n.toJSONOptions);
};
