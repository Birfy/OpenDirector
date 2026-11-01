"use strict";
if (require.j == "wl4") var a = require("./module-bUV.js");
if (
  require.j == "wl4" &&
  Object.prototype.hasOwnProperty.call(a, "ResourceType")
) {
  require.d(exports, {
    ResourceType: function () {
      return a.ResourceType;
    },
  });
}
if (require.j == "wl4") var o = require("./module-Ei5.js");
require.d(exports, {
  ResourceType: () => o.ResourceType,
});
