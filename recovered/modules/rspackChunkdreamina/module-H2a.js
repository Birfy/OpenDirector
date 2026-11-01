export function U(e, t) {
  return (r, a = null) => {
    let o;
    let i = false;
    o = e((...e) => {
      if (i) {
        if (o != null) {
          o.dispose();
        }
        return;
      }
      if ((i = t(...e))) {
        r.call(a, ...e);
        if (o != null) {
          o.dispose();
        }
      }
    }, null);
    if (i) {
      o.dispose();
    }
    return o;
  };
}
