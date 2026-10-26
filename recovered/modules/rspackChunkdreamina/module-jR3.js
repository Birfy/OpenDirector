import n from "./module-sMI.js";
export default n;
n.build = "full";
n.tokenize = require("./module-EXH.js");
n.parse = require("./module-PmK.js");
n.common = require("./module-JtO.js");
n.Root._configure(n.Type, n.parse, n.common);
