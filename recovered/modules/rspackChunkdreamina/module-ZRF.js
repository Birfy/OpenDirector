import { Buffer } from "wS";
export default function (t, e) {
  for (
    var r = Math.min(t.length, e.length), f = new Buffer(r), n = 0;
    n < r;
    ++n
  ) {
    f[n] = t[n] ^ e[n];
  }
  return f;
}
