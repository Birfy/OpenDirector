import n from "./module-p2_9.js";
export default function (t) {
  try {
    if (n) {
      return Function('return require("' + t + '")')();
    }
  } catch (t) {}
}
