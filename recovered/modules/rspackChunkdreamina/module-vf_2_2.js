export function r(e, t) {
  let r = e.split(",");
  let type = r[0].match(/(data:)?(.*?);/)[2];
  let o = atob(r[1]);
  let o_length = o.length;
  let n = new Uint8Array(o_length);
  while (o_length--) {
    n[o_length] = o.charCodeAt(o_length);
  }
  return new File([n], t, {
    type,
  });
}
