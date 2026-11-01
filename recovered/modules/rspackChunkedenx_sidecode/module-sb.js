const n = require("./module-Pv.js").match(/AppleWebKit\/(\d+)\./);
export default !!n && +n[1];
