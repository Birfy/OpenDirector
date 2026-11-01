const n = [];
let i = null;
export function _s(e) {
  if (i) {
    i(e);
  } else {
    n.push(e);
  }
}
export function he() {
  return n.splice(0, n.length);
}
export function PK(e) {
  i = e;
  return () => {
    if (i === e) {
      i = null;
    }
  };
}
