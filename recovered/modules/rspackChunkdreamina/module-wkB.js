export function A(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) {
    if (e.charCodeAt(n) > 127 || e.charCodeAt(n) === 94) {
      t += 2;
    } else {
      t++;
    }
  }
  return t;
}
