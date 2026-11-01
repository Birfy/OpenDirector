export default function (J) {
  let Z;
  for (let Q = J.length; Q--;) {
    if ((Z = J.readUInt8(Q)) === 255) {
      J.writeUInt8(0, Q);
    } else {
      Z++;
      J.writeUInt8(Z, Q);
      break;
    }
  }
}
