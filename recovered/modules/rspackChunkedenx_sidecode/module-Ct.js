const n = require("./module-Pv.js").match(/firefox\/(\d+)/i);
export default !!n && +n[1];
