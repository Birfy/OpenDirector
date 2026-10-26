import $ from "./module-F4_13.js";
export default function (J, Z) {
  for (var Q = $(J), tt = new Z(Q), te = 0; te < Q; te++) {
    tt[te] = J[Q - te - 1];
  }
  return tt;
}
