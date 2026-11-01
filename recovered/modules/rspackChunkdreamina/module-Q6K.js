import n from "zS";
import s from "bT";
export var c = (e) => {
  var tRef = s.useRef(null);
  var [i, setI] = s.useState({});
  var getElementStyle = n.A(() => i);
  s.useEffect(() => {
    var tRef_current = tRef.current;
    if (tRef_current) {
      e.forEach((e) =>
        e.listen({
          el: tRef_current,
          getElementStyle,
          setElementStyle: setI,
        }),
      );
      return () => {
        e.forEach((e) => e.stop());
      };
    }
  }, [getElementStyle, e]);
  var resetTransformStyle = n.A(() => {
    e.forEach((e) => e.reset());
  });
  return {
    elementRef: tRef,
    elementStyle: i,
    resetTransformStyle,
    activateAllWatchers: n.A(() => {
      e.forEach((e) => e.activate());
    }),
    deactivatedAllWatchers: n.A(() => {
      e.forEach((e) => e.deactivated());
    }),
  };
};
