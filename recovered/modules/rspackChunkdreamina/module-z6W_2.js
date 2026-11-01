import r from "bT";
import n from "Z4";
import a from "wF";
function useO(e) {
  const { featureKey } = e;
  const i = a.h(n.o);
  const [o, setO] = r.useState(i.getValue(featureKey));
  const [c, setC] = r.useState(!!o);
  r.useEffect(() => {
    var e = () => {
      var { values } = i;
      var r = values[featureKey];
      setO(r);
      setC(!!r);
    };
    var r = i.onValuesChange(() => {
      e();
    });
    e();
    return () => {
      r.dispose();
    };
  }, [i, featureKey]);
  return [c, o];
}
export { useO as o };
