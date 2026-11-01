import $ from "./module-Z_2_12.js";
export default function (J, Z) {
  if (!delete J[Z]) {
    throw TypeError("Cannot delete property " + $(Z) + " of " + $(J));
  }
}
