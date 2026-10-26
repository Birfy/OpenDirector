if (require.j == "wl4") var a = require("./module-Dm.js");
export function j(e, t = {}) {
  if (!e) {
    return t;
  }
  try {
    a.X3(typeof e === "string");
    return JSON.parse(e);
  } catch (e) {
    return t;
  }
}
