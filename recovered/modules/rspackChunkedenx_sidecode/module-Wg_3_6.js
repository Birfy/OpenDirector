import n from "./module-M_2_6.js";
export default function (t, r, e) {
  let o;
  let a;
  for (const i = e ? t : t.iterator, s = t.next; !(o = n(s, i)).done;) {
    if ((a = r(o.value)) !== undefined) {
      return a;
    }
  }
}
