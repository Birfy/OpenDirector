export function J(e) {
  return (t, r = null) => {
    let a;
    let o = false;
    a = e((...e) => {
      if (o) {
        return undefined;
      }
      if (a) {
        a.dispose();
      } else {
        o = true;
      }
      return t.call(r, ...e);
    }, null);
    if (o) {
      a.dispose();
    }
    return a;
  };
}
