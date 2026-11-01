import a from "bT";
import r from "w0L";
const i = new Set();
export function u(e) {
  const { storageKey } = e;
  const [n, setN] = a.useState();
  const visible = n === storageKey;
  const dismiss = a.useCallback(() => {
    setN(undefined);
  }, []);
  const show = a.useCallback(() => {
    if (typeof window === "undefined") {
      return false;
    }
    var e = false;
    try {
      e = !!r.Ay.get(storageKey);
    } catch (e) {}
    if (e || i.has(storageKey)) {
      return false;
    }
    i.add(storageKey);
    try {
      r.Ay.set(storageKey, true);
    } catch (e) {}
    setN(storageKey);
    return true;
  }, [storageKey]);
  a.useEffect(() => dismiss, [dismiss, storageKey]);
  return {
    visible,
    show,
    dismiss,
  };
}
