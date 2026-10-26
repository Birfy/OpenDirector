import i from "EYk";
import n from "wF";
import a from "bT";
export var b = () => {
  var e = n.h(i.a);
  var [t, setT] = a.useState(e.isInFreemiumStage);
  a.useEffect(() => {
    setT(e.isInFreemiumStage);
    var t = e.onIsInFreemiumStageChange((e) => {
      setT(e);
    });
    return () => {
      t.dispose();
    };
  }, []);
  return t;
};
