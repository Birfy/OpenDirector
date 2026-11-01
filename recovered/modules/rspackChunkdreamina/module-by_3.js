import f from "./module-hH_3.js";
const i = {
  ECB: require("./module-tSS.js"),
  CBC: require("./module-Gk.js"),
  CFB: require("./module-l4a.js"),
  CFB8: require("./module-VU_3.js"),
  CFB1: require("./module-F6r.js"),
  OFB: require("./module-y2.js"),
  CTR: require("./module-Gs_2.js"),
  GCM: require("./module-Gs_2.js"),
};
for (const n in f) {
  f[n].module = i[f[n].mode];
}
export default f;
