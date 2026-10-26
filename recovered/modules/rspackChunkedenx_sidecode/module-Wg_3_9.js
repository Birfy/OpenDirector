import n from "./module-M_2_9.js";
export default function (t, e, r) {
  let o;
  let i;
  for (const a = r ? t : t.iterator, s = t.next; !(o = n(s, a)).done;) {
    if ((i = e(o.value)) !== undefined) {
      return i;
    }
  }
}
