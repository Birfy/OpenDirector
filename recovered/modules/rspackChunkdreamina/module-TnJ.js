function Q(Z, Q) {
  if (!Z) {
    throw Error(Q || "Assertion failed");
  }
}
export default Q;
Q.equal = function (Z, Q, X) {
  if (Z != Q) {
    throw Error(X || "Assertion failed: " + Z + " != " + Q);
  }
};
