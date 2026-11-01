import a from "z8";
import r from "zS";
import i from "bT";
import o from "wF";
import l from "Kt";
import s from "Dla";
const CContext = i.createContext(undefined);
export function x() {
  return i.useContext(CContext);
}
export var n = i.memo(function (e) {
  const { resources, children } = e;
  const u = o.h(l._);
  const dRef = i.useRef();
  i.useEffect(() => {
    var e = new AbortController();
    dRef.current = e;
    return () => e.abort();
  }, []);
  const openPreview = r.A((e) => {
    var n;
    var initialIndex = resources.findIndex((t) => {
      var { id } = t;
      return id === e;
    });
    if (!(initialIndex < 0)) {
      return s.H(u, {
        items: resources,
        initialIndex,
        signal: (n = dRef.current) == null ? undefined : n.signal,
      });
    }
  });
  const value = i.useMemo(
    () => ({
      openPreview,
    }),
    [openPreview],
  );
  return a.jsx(CContext.Provider, {
    value,
    children,
  });
});
