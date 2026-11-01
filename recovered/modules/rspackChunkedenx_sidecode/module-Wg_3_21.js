import n from "./module-M_2_21.js";
export default function (t, r, e) {
  let i;
  let o;
  for (const s = e ? t : t.iterator, a = t.next; !(i = n(a, s)).done;) {
    if ((o = r(i.value)) !== undefined) {
      return o;
    }
  }
}
