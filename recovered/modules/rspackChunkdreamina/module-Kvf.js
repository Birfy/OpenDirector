import a from "bT";
import r from "n5f";
const o = (e) => e.width;
export function C() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : o;
  const [t, setT] = a.useState(null);
  const i = a.useMemo(
    () => ({
      current: t,
    }),
    [t],
  );
  const setReferencesElement = a.useCallback((e) => {
    var t;
    var a = e ? ((t = e.parentElement) != null ? t : e) : null;
    setT((e) => {
      if (e === a) {
        return e;
      }
      return a;
    });
  }, []);
  return {
    referenceGroupWidth: r.w(i, e, undefined),
    setReferencesElement,
  };
}
