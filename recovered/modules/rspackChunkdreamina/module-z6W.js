import a from "bT";
import r from "Z4";
import o from "wF";
function useL(e) {
  const { featureKey } = e;
  const n = o.h(r.o);
  const [l, setL] = a.useState(n.getValue(featureKey));
  const [c, setC] = a.useState(!!l);
  a.useEffect(() => {
    var e = () => {
      var { values } = n;
      var a = values[featureKey];
      setL(a);
      setC(!!a);
    };
    var a = n.onValuesChange(() => {
      e();
    });
    e();
    return () => {
      a.dispose();
    };
  }, [n, featureKey]);
  return [c, l];
}
export { useL as o };
