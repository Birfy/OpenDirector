export default function (Z, Q) {
  for (let X = Z.length, $ = -1; ++$ < X;) {
    Z[$] ^= Q[$];
  }
  return Z;
}
