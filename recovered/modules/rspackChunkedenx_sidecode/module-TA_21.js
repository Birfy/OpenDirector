import n from "./module-p2_21.js";
export default function (t) {
  try {
    if (n) {
      return Function('return require("' + t + '")')();
    }
  } catch (t) {}
}
