const n = require("./module-lN.js")("toStringTag");
const o = {};
o[n] = "z";
export default String(o) === "[object z]";
