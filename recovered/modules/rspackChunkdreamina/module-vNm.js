function r(e) {
  let t;
  let e_length = e.length;
  let a = 0;
  let s = 0;
  while (s < e_length) {
    a++;
    if (
      (t = e.charCodeAt(s++)) >= 55296 &&
      t <= 56319 &&
      s < e_length &&
      (64512 & (t = e.charCodeAt(s))) == 56320
    ) {
      s++;
    }
  }
  return a;
}
export default r;
r.code = 'require("ajv/dist/runtime/ucs2length").default';
