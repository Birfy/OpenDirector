export default function (t) {
  let e;
  for (let r = t.length; r--;) {
    if ((e = t.readUInt8(r)) === 255) {
      t.writeUInt8(0, r);
    } else {
      e++;
      t.writeUInt8(e, r);
      break;
    }
  }
}
