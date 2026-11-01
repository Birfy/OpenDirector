import r from "z8";
import a from "EC";
import n from "bT";
const SContext = n.createContext({
  enabled: true,
});
export function u(e) {
  const { children, enabled = true, report } = e;
  const o = n.useContext(SContext);
  const value = n.useMemo(
    () => ({
      enabled: o.enabled && enabled,
      report: report != null ? report : o.report,
    }),
    [o.enabled, o.report, enabled, report],
  );
  return r.jsx(SContext.Provider, {
    value,
    children,
  });
}
export function G(params) {
  let t;
  let i;
  const r =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const { enabled, report } = n.useContext(SContext);
  const report_1 = (t = r.report) != null ? t : report;
  const u = enabled && ((i = r.enabled) == null || i);
  const [entryRef, h] = a.A();
  const pRef = n.useRef({
    params,
    report: report_1,
  });
  n.useEffect(() => {
    pRef.current = {
      params,
      report: report_1,
    };
  }, [params, report_1]);
  const g = n.useCallback((e) => {
    try {
      var t;
      var i;
      if ((t = (i = pRef.current).report) != null) {
        t.call(i, e, pRef.current.params);
      }
    } catch (e) {}
  }, []);
  const v = report_1 !== undefined;
  const e_error_code = params.error_code;
  n.useEffect(() => {
    if (u && h && v) {
      g("show");
    }
  }, [h, u, v, params.source, e_error_code, g]);
  return {
    entryRef,
    onEntryClick: n.useCallback(() => {
      if (u) {
        g("click");
      }
    }, [u, g]),
  };
}
