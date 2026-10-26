import $ from "./module-yh_12.js";
import tt from "./module-vM_13.js";
const $_Set = $.Set;
const $_add = $.add;
export default function (J) {
  const Z = new $_Set();
  tt(J, function (J) {
    $_add(Z, J);
  });
  return Z;
}
