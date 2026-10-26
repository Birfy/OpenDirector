function Z(J, Z) {
  if (!J) {
    throw Error(Z || "Assertion failed");
  }
}
export default Z;
Z.equal = function (J, Z, Q) {
  if (J != Z) {
    throw Error(Q || "Assertion failed: " + J + " != " + Z);
  }
};
