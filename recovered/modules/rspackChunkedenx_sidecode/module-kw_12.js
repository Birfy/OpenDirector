import $ from "./module-D_2_12.js";
export default function (J) {
  return J !== undefined && ($(J, "value") || $(J, "writable"));
}
