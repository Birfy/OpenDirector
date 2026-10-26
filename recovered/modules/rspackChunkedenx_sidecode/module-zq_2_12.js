import $ from "./module-O9_12.js";
import tt from "./module-D_2_12.js";
const tr = parseInt;
const ti = $("".charAt);
const to = $("".slice);
const ta = $(/./.exec);
const ts = {
  '\\"': '"',
  "\\\\": "\\",
  "\\/": "/",
  "\\b": "\b",
  "\\f": "\f",
  "\\n": "\n",
  "\\r": "\r",
  "\\t": "	",
};
const tf = /^[\da-f]{4}$/i;
const tu = /^[\u0000-\u001F]$/;
export default function (J, end) {
  let Q = true;
  let $ = "";
  while (end < J.length) {
    const tc = ti(J, end);
    if (tc === "\\") {
      const th = to(J, end, end + 2);
      if (tt(ts, th)) {
        $ += ts[th];
        end += 2;
      } else if (th === "\\u") {
        const td = to(J, (end += 2), end + 4);
        if (!ta(tf, td)) {
          throw SyntaxError("Bad Unicode escape at: " + end);
        }
        $ += String.fromCharCode(tr(td, 16));
        end += 4;
      } else {
        throw SyntaxError('Unknown escape sequence: "' + th + '"');
      }
    } else if (tc === '"') {
      Q = false;
      end++;
      break;
    } else {
      if (ta(tu, tc)) {
        throw SyntaxError("Bad control character in string literal at: " + end);
      }
      $ += tc;
      end++;
    }
  }
  if (Q) {
    throw SyntaxError("Unterminated string at: " + end);
  }
  return {
    value: $,
    end,
  };
}
