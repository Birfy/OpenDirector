import n from "./module-O9_16.js";
import o from "./module-D_2_16.js";
const a = parseInt;
const u = n("".charAt);
const c = n("".slice);
const f = n(/./.exec);
const l = {
  '\\"': '"',
  "\\\\": "\\",
  "\\/": "/",
  "\\b": "\b",
  "\\f": "\f",
  "\\n": "\n",
  "\\r": "\r",
  "\\t": "	",
};
const h = /^[\da-f]{4}$/i;
const v = /^[\u0000-\u001F]$/;
export default function (t, end) {
  let e = true;
  let n = "";
  while (end < t.length) {
    const p = u(t, end);
    if (p === "\\") {
      const d = c(t, end, end + 2);
      if (o(l, d)) {
        n += l[d];
        end += 2;
      } else if (d === "\\u") {
        const g = c(t, (end += 2), end + 4);
        if (!f(h, g)) {
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
