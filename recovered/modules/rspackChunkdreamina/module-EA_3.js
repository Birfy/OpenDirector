if (require.j == "wl4") var a = require("./module-wzO.js");
if (require.j == "wl4") var o = require("./module-jVM.js");
function i(e) {
  switch (e) {
    case a.C.STANDARD:
      return o._.Standard;
    case a.C.ARTISAN:
      return o._.Artisan;
    case a.C.MAESTRO:
      return o._.Maestro;
    default:
      return o._.Free;
  }
}
export { i };
