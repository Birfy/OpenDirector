import $ from "./module-V6_13.js";
export default function (J) {
  const Z = $(J);
  if (Z < 0) {
    throw RangeError("The argument can't be less than 0");
  }
  return Z;
}
