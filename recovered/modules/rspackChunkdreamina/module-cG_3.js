import n from "./module-fd_4.js";
export default function (e) {
  try {
    if (n) {
      return Function('return require("' + e + '")')();
    }
  } catch (e) {}
}
