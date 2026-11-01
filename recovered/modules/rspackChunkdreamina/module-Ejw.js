const o = require("./module-Oeh.js")();
export default o;
try {
  regeneratorRuntime = o;
} catch (t) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = o;
  } else {
    Function("r", "regeneratorRuntime = r")(o);
  }
}
