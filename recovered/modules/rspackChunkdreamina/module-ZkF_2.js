import r from "oa";
import n from "bT";
import i from "Cc8";
const o = {};
const SContext = n.createContext({});
export var S = SContext.Provider;
export function a() {
  const e = arguments.length > 0 && arguments[0] !== undefined && arguments[0];
  const { marks, media } = n.useContext(SContext);
  return n.useMemo(() => {
    if (!marks || (e && media)) {
      return o;
    }
    return r._(
      {},
      i.pz,
      Object.fromEntries(
        Object.entries(marks).filter((e) => {
          var [t] = e;
          return t.startsWith("data-ccfmp-");
        }),
      ),
    );
  }, [marks, media, e]);
}
