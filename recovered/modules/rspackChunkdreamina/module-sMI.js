import n from "./module-qUq.js";
export default n;
n.build = "light";
n.load = function (e, t, r) {
  if (typeof t === "function") {
    r = t;
    t = new n.Root();
  } else if (!t) {
    t = new n.Root();
  }
  return t.load(e, r);
};
n.loadSync = function (e, t) {
  if (!t) {
    t = new n.Root();
  }
  return t.loadSync(e);
};
n.encoder = require("./module-CpW.js");
n.decoder = require("./module-TBQ.js");
n.verifier = require("./module-DhY.js");
n.converter = require("./module-DTh.js");
n.ReflectionObject = require("./module-Bi.js");
n.Namespace = require("./module-Bwy.js");
n.Root = require("./module-B9J.js");
n.Enum = require("./module-Taa.js");
n.Type = require("./module-c0X.js");
n.Field = require("./module-osk.js");
n.OneOf = require("./module-P62.js");
n.MapField = require("./module-uCb.js");
n.Service = require("./module-Va0.js");
n.Method = require("./module-j3x.js");
n.Message = require("./module-nkd.js");
n.wrappers = require("./module-wEB.js");
n.types = require("./module-kxL.js");
n.util = require("./module-Vva.js");
n.ReflectionObject._configure(n.Root);
n.Namespace._configure(n.Type, n.Service, n.Enum);
n.Root._configure(n.Type);
n.Field._configure(n.Type);
