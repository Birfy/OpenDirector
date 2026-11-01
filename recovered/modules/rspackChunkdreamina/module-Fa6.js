if (require.j == "wl4") var a = require("./module-ld_3.js");
export const J = (e) => a._(e.shouldHidden, false);
export const z = (e) => {
  if (typeof e.className === "function") {
    return e.className() || "";
  }
  return e.className || "";
};
