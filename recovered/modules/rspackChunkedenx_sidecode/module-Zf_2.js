const n = require("./module-lN_2.js")("toStringTag");
const i = {};
i[n] = "z";
export default String(i) === "[object z]";
