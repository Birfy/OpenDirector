import a from "bT";
export var Q = (e) => {
  var t = a.useCallback(
    (t) => {
      if (e != null) {
        e.addEventListener("durationchange", t);
      }
      return () => {
        if (e != null) {
          e.removeEventListener("durationchange", t);
        }
      };
    },
    [e],
  );
  var n = a.useCallback(() => {
    if (e && !Number.isNaN(e.duration)) {
      return e.duration;
    }
    return 0;
  }, [e]);
  var r = a.useCallback(() => 0, []);
  return a.useSyncExternalStore(t, n, r);
};
