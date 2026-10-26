const $ = function (J) {
  const Z = $[(J = J.toLowerCase())];
  if (!Z) {
    throw Error(J + " is not supported (we accept pull requests)");
  }
  return new Z();
};
export default $;
$.sha = require("./module-xgR.js");
$.sha1 = require("./module-v9.js");
$.sha224 = require("./module-cf_2_2.js");
$.sha256 = require("./module-mBh.js");
$.sha384 = require("./module-Y0.js");
$.sha512 = require("./module-Rz.js");
