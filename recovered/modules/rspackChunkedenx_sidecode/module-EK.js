import tt from "./module-hH.js";
const $ = {
  ECB: require("./module-x3I.js"),
  CBC: require("./module-eIj.js"),
  CFB: require("./module-xy_13.js"),
  CFB8: require("./module-Nn.js"),
  CFB1: require("./module-Fn.js"),
  OFB: require("./module-zB.js"),
  CTR: require("./module-vv_12.js"),
  GCM: require("./module-vv_12.js"),
};
for (const te in tt) {
  tt[te].module = $[tt[te].mode];
}
export default tt;
