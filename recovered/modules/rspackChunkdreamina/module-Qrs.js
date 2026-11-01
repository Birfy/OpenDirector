import a from "bT";
export var i = (e) => {
  var t = a.useCallback(
    (t) => {
      if (e != null) {
        e.addEventListener("play", t);
      }
      if (e != null) {
        e.addEventListener("pause", t);
      }
      return () => {
        if (e != null) {
          e.removeEventListener("play", t);
        }
        if (e != null) {
          e.removeEventListener("pause", t);
        }
      };
    },
    [e],
  );
  var n = a.useCallback(() => !!e && !e.paused, [e]);
  var r = a.useCallback(() => false, []);
  return a.useSyncExternalStore(t, n, r);
};
