import n from "./module-o.js";
import o from "./module-h.js";
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
const p = /^[\da-f]{4}$/i;
const h = /^[\u0000-\u001F]$/;
export default function (e, end) {
  let r = true;
  let n = "";
  while (end < e.length) {
    const v = u(e, end);
    if (v === "\\") {
      const d = c(e, end, end + 2);
      if (o(l, d)) {
        n += l[d];
        end += 2;
      } else if (d === "\\u") {
        const g = c(e, (end += 2), end + 4);
        if (!f(p, g)) {
          throw SyntaxError("Bad Unicode escape at: " + end);
        }
        n += String.fromCharCode(a(g, 16));
        end += 4;
      } else {
        throw SyntaxError('Unknown escape sequence: "' + d + '"');
      }
    } else if (v === '"') {
      r = false;
      end++;
      break;
    } else {
      if (f(h, v)) {
        throw SyntaxError("Bad control character in string literal at: " + end);
      }
      n += v;
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
