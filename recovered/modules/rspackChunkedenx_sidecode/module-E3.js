export default function (J, Z) {
  for (let Q = J.length, $ = -1; ++$ < Q;) {
    J[$] ^= Z[$];
  }
  return J;
}
