function $(J, Z, Q, $, tt, te, tr) {
  try {
    var tn = J[te](tr);
    var ti = tn.value;
  } catch (error) {
    Q(error);
    return;
  }
  if (tn.done) {
    Z(ti);
  } else {
    Promise.resolve(ti).then($, tt);
  }
}
function tt(J) {
  return function () {
    const Z = this;
    const Q = arguments;
    return new Promise((resolve, reject) => {
      const tr = J.apply(Z, Q);
      function tn(J) {
        $(tr, resolve, reject, tn, ti, "next", J);
      }
      function ti(J) {
        $(tr, resolve, reject, tn, ti, "throw", J);
      }
      tn(undefined);
    });
  };
}
export { tt as _ };
