import n from "oa";
import a from "bT";
import o from "Cc8";
const i = {};
const CContext = a.createContext({});
export var S = CContext.Provider;
function useL() {
  const e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  const { marks, media } = a.useContext(CContext);
  return a.useMemo(() => {
    if (!marks || (e && media)) {
      return i;
    }
    return n._(
      {},
      o.pz,
      Object.fromEntries(
        Object.entries(marks).filter((e) => {
          var [t] = e;
          return t.startsWith("data-ccfmp-");
        }),
      ),
    );
  }, [marks, media, e]);
}
export { useL as a };
