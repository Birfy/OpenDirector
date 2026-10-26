import a from "bT";
import r from "Ev";
export var M = (e) => {
  var tRef = a.useRef(0);
  var nRef = a.useRef(0);
  var i = a.useCallback(
    (t) => {
      if (e != null) {
        e.addEventListener("seeked", t);
      }
      if (e != null) {
        e.addEventListener("timeupdate", t);
      }
      return () => {
        if (e != null) {
          e.removeEventListener("seeked", t);
        }
        if (e != null) {
          e.removeEventListener("timeupdate", t);
        }
      };
    },
    [e],
  );
  var o = a.useCallback(() => {
    if (!e) {
      return 0;
    }
    if (r.nr) {
      var a = Date.now();
      if (
        a - nRef.current < 50 &&
        Math.abs(e.currentTime - tRef.current) < 0.05
      ) {
        return tRef.current;
      }
      tRef.current = e.currentTime;
      nRef.current = a;
    }
    return e.currentTime;
  }, [e]);
  var l = a.useCallback(() => 0, []);
  return a.useSyncExternalStore(i, o, l);
};
