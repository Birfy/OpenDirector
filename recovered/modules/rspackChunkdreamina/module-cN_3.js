import n from "./module-p3.js";
export default function (e, t, r) {
  let o;
  let i;
  for (const a = r ? e : e.iterator, s = e.next; !(o = n(s, a)).done;) {
    if ((i = t(o.value)) !== undefined) {
      return i;
    }
  }
}
