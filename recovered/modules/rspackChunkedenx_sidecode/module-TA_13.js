import n from "./module-p2_13.js";
export default function (r) {
  try {
    if (n) {
      return Function('return require("' + r + '")')();
    }
  } catch (r) {}
}
