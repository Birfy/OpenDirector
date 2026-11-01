export default function (t, e) {
  let r =
    t == null
      ? null
      : (typeof Symbol !== "undefined" && t[Symbol.iterator]) ||
        t["@@iterator"];
  if (r != null) {
    let o;
    let n;
    let i;
    let u;
    const s = [];
    let a = true;
    let c = false;
    try {
      i = (r = r.call(t)).next;
      if (e === 0) {
        if (Object(r) !== r) {
          return;
        }
        a = false;
      } else {
        for (
          ;
          !(a = (o = i.call(r)).done) && (s.push(o.value), s.length !== e);
          a = true
        );
      }
    } catch (error) {
      c = true;
      n = error;
    } finally {
      try {
        if (!a && r.return != null && ((u = r.return()), Object(u) !== u)) {
          return;
        }
      } finally {
        if (c) {
          throw n;
        }
      }
    }
    return s;
  }
}
