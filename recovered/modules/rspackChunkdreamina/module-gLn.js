const $ = function (Z) {
  const Q = $[(Z = Z.toLowerCase())];
  if (!Q) {
    throw Error(Z + " is not supported (we accept pull requests)");
  }
  return new Q();
};
export default $;
$.sha = require("./module-jN.js");
$.sha1 = require("./module-he.js");
$.sha224 = require("./module-ig.js");
$.sha256 = require("./module-ai.js");
$.sha384 = require("./module-Te4.js");
$.sha512 = require("./module-P4.js");
