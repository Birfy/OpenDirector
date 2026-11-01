import s from "bT";
export function rM(e) {
  const { allowScale = false, allowMove = false } = e != null ? e : {};
  let s = null;
  return (e) => {
    if (s) {
      s();
      s = null;
    }
    if (e) {
      var i = (e) => {
        if (e.ctrlKey || e.metaKey) {
          if (!allowScale) {
            e.preventDefault();
            e.stopPropagation();
          }
          return;
        }
        if (!allowMove) {
          e.stopPropagation();
        }
      };
      e.addEventListener("wheel", i);
      s = () => {
        e.removeEventListener("wheel", i);
      };
    }
  };
}
function useR(e) {
  const t = s.useMemo(
    () => rM(e),
    [e == null ? undefined : e.allowScale, e == null ? undefined : e.allowMove],
  );
  const a = s.useCallback(
    (e) => {
      t(e);
    },
    [t],
  );
  s.useEffect(
    () => () => {
      t(null);
    },
    [t],
  );
  return a;
}
export var PM = (e) => useR(e);
export var gH = (e) => {
  var t = useR(e);
  var aRef = s.useRef(null);
  return s.useMemo(
    () => ({
      get current() {
        return aRef.current;
      },
      set current(e) {
        if (aRef.current !== e) {
          aRef.current = e;
          t(e);
        }
      },
    }),
    [t],
  );
};
