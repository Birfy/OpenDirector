const classList = require("./module-xv.js")("span").classList;
const o = classList && classList.constructor && classList.constructor.prototype;
export default o === Object.prototype ? undefined : o;
