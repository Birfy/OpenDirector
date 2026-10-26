import n from "./module-O9_23.js";
import o from "./module-D_2_23.js";
const a = parseInt;
const c = n("".charAt);
const u = n("".slice);
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
    const p = c(t, end);
    if (p === "\\") {
      const d = u(t, end, end + 2);
      if (o(l, d)) {
        n += l[d];
        end += 2;
      } else if (d === "\\u") {
        const g = u(t, (end += 2), end + 4);
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
