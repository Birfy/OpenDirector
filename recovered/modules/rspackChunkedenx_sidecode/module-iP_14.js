export default Math.scale ||
  function (J, Z, Q, $, tt) {
    const te = +J;
    const tr = +Z;
    const tn = +Q;
    const ti = +$;
    const to = +tt;
    if (te != te || tr != tr || tn != tn || ti != ti || to != to) {
      return 0 / 0;
    }
    if (Infinity === te || -Infinity === te) {
      return te;
    }
    return ((te - tr) * (to - ti)) / (tn - tr) + ti;
  };
