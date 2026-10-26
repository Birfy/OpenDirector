import n from "./module-M_2_20.js";
export default function (t, r, e) {
  let o;
  let i;
  for (const a = e ? t : t.iterator, s = t.next; !(o = n(s, a)).done;) {
    if ((i = r(o.value)) !== undefined) {
      return i;
    }
  }
}
