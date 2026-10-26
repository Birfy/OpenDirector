import n from "./module-O9_11.js";
import o from "./module-D_2_11.js";
const a = parseInt;
const u = n("".charAt);
const c = n("".slice);
const f = n(/./.exec);
const h = {
  '\\"': '"',
  "\\\\": "\\",
  "\\/": "/",
  "\\b": "\b",
  "\\f": "\f",
  "\\n": "\n",
  "\\r": "\r",
  "\\t": "	",
};
const l = /^[\da-f]{4}$/i;
const v = /^[\u0000-\u001F]$/;
export default function (r, end) {
  let e = true;
  let n = "";
  while (end < r.length) {
    const p = u(r, end);
    if (p === "\\") {
      const d = c(r, end, end + 2);
      if (o(h, d)) {
        n += h[d];
        end += 2;
      } else if (d === "\\u") {
        const g = c(r, (end += 2), end + 4);
        if (!f(l, g)) {
          throw SyntaxError("Bad Unicode escape at: " + end);
        }
        n += String.fromCharCode(a(g, 16));
        end += 4;
      } else {
        throw SyntaxError('Unknown escape sequence: "' + d + '"');
      }
    } else if (p === '"') {
      e = false;
      end++;
      break;
    } else {
      if (f(v, p)) {
        throw SyntaxError("Bad control character in string literal at: " + end);
      }
      n += p;
      end++;
    }
  }
  if (e) {
    throw SyntaxError("Unterminated string at: " + end);
  }
  return {
    value: n,
    end,
  };
}
