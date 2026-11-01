export const toByteArray = function (e) {
  let t;
  let r;
  const i = u(e);
  const a = i[0];
  const s = i[1];
  const c = new o(((a + s) * 3) / 4 - s);
  let f = 0;
  const l = s > 0 ? a - 4 : a;
  for (r = 0; r < l; r += 4) {
    t =
      (n[e.charCodeAt(r)] << 18) |
      (n[e.charCodeAt(r + 1)] << 12) |
      (n[e.charCodeAt(r + 2)] << 6) |
      n[e.charCodeAt(r + 3)];
    c[f++] = (t >> 16) & 255;
    c[f++] = (t >> 8) & 255;
    c[f++] = 255 & t;
  }
  if (s === 2) {
    t = (n[e.charCodeAt(r)] << 2) | (n[e.charCodeAt(r + 1)] >> 4);
    c[f++] = 255 & t;
  }
  if (s === 1) {
    t =
      (n[e.charCodeAt(r)] << 10) |
      (n[e.charCodeAt(r + 1)] << 4) |
      (n[e.charCodeAt(r + 2)] >> 2);
    c[f++] = (t >> 8) & 255;
    c[f++] = 255 & t;
  }
  return c;
};
export const fromByteArray = function (e) {
  let t;
  const e_length = e.length;
  const o = e_length % 3;
  const i = [];
  for (let a = 0, s = e_length - o; a < s; a += 16383) {
    i.push(
      ((e, t, n) => {
        let o;
        const i = [];
        for (let a = t; a < n; a += 3) {
          o =
            ((e[a] << 16) & 16711680) +
            ((e[a + 1] << 8) & 65280) +
            (255 & e[a + 2]);
          i.push(
            r[(o >> 18) & 63] +
              r[(o >> 12) & 63] +
              r[(o >> 6) & 63] +
              r[63 & o],
          );
        }
        return i.join("");
      })(e, a, a + 16383 > s ? s : a + 16383),
    );
  }
  if (o === 1) {
    i.push(`${r[(t = e[e_length - 1]) >> 2] + r[(t << 4) & 63]}==`);
  } else if (o === 2) {
    i.push(
      `${r[(t = (e[e_length - 2] << 8) + e[e_length - 1]) >> 10] + r[(t >> 4) & 63] + r[(t << 2) & 63]}=`,
    );
  }
  return i.join("");
};
var r = [];
var n = [];
var o = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (let a = 0, s = i.length; a < s; ++a) {
  r[a] = i[a];
  n[i.charCodeAt(a)] = a;
}
function u(e) {
  const e_length = e.length;
  if (e_length % 4 > 0) {
    throw Error("Invalid string. Length must be a multiple of 4");
  }
  let r = e.indexOf("=");
  if (r === -1) {
    r = e_length;
  }
  const n = r === e_length ? 0 : 4 - (r % 4);
  return [r, n];
}
n[45] = 62;
n[95] = 63;
