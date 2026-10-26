import $ from "./module-p2_12.js";
export default function (J) {
  try {
    if ($) {
      return Function('return require("' + J + '")')();
    }
  } catch (J) {}
}
