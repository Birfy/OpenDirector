import n from "./module-p2_22.js";
export default function (t) {
  try {
    if (n) {
      return Function('return require("' + t + '")')();
    }
  } catch (t) {}
}
