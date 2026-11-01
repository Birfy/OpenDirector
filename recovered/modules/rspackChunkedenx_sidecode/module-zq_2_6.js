import n from "./module-O9_6.js";
import o from "./module-D_2_6.js";
const i = parseInt;
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
const p = /^[\u0000-\u001F]$/;
export default function (t, end) {
  let e = true;
  let n = "";
  while (end < t.length) {
    const v = c(t, end);
    if (v === "\\") {
      const d = u(t, end, end + 2);
      if (o(l, d)) {
        n += l[d];
        end += 2;
      } else if (d === "\\u") {
        const g = u(t, (end += 2), end + 4);
        if (!f(h, g)) {
          throw SyntaxError("Bad Unicode escape at: " + end);
        }
        n += String.fromCharCode(i(g, 16));
        end += 4;
      } else {
        throw SyntaxError('Unknown escape sequence: "' + d + '"');
      }
    } else if (v === '"') {
      e = false;
      end++;
      break;
    } else {
      if (f(p, v)) {
        throw SyntaxError("Bad control character in string literal at: " + end);
      }
      n += v;
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
