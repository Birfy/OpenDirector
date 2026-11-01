import $ from "./module-M_2_12.js";
export default function (J, Z, Q) {
  let tt;
  let te;
  for (const tr = Q ? J : J.iterator, tn = J.next; !(tt = $(tn, tr)).done;) {
    if ((te = Z(tt.value)) !== undefined) {
      return te;
    }
  }
}
