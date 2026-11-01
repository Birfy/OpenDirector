import n from "./module-O9_9.js";
import o from "./module-D_2_9.js";
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
  let r = true;
  let n = "";
  while (end < t.length) {
    const d = u(t, end);
    if (d === "\\") {
      const p = c(t, end, end + 2);
      if (o(l, p)) {
        n += l[p];
        end += 2;
      } else if (p === "\\u") {
        const g = c(t, (end += 2), end + 4);
        if (!f(h, g)) {
          throw SyntaxError("Bad Unicode escape at: " + end);
        }
        n += String.fromCharCode(a(g, 16));
        end += 4;
      } else {
        throw SyntaxError('Unknown escape sequence: "' + p + '"');
      }
    } else if (d === '"') {
      r = false;
      end++;
      break;
    } else {
      if (f(v, d)) {
        throw SyntaxError("Bad control character in string literal at: " + end);
      }
      n += d;
      end++;
    }
  }
  if (r) {
    throw SyntaxError("Unterminated string at: " + end);
  }
  return {
    value: n,
    end,
  };
}
