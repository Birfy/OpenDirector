import n from "./module-M_2_13.js";
export default function (r, t, e) {
  let o;
  let i;
  for (const a = e ? r : r.iterator, s = r.next; !(o = n(s, a)).done;) {
    if ((i = t(o.value)) !== undefined) {
      return i;
    }
  }
}
