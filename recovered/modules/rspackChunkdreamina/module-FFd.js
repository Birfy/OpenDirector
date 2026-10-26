import r from "bT";
export var G = () => {
  var eRef = r.useRef(null);
  var [t, setT] = r.useState(false);
  var n = r.useCallback(() => {
    setT(true);
  }, []);
  var i = r.useCallback(() => {
    setT(false);
  }, []);
  r.useEffect(() => {
    var t = ((e) => {
      var t;
      for (
        var a =
          (t = e == null ? undefined : e.parentElement) != null ? t : null;
        a;
      ) {
        if (a.classList.contains("react-renderer")) {
          return a;
        }
        a = a.parentElement;
      }
      return null;
    })(eRef.current);
    if (t != null) {
      t.addEventListener("dragstart", n);
    }
    if (t != null) {
      t.addEventListener("dragend", i);
    }
    return () => {
      if (t != null) {
        t.removeEventListener("dragstart", n);
      }
      if (t != null) {
        t.removeEventListener("dragend", i);
      }
    };
  }, [n, i]);
  return [eRef, t];
};
