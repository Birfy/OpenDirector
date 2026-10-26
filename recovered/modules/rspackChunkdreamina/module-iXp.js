import r from "qa";
import a from "z8";
import o from "bT";
import i from "TK";
import l from "qO";
import s from "VA";
import c from "wF";
import u from "uz";
function d(e) {
  if (e === "0" || e === "1" || e === "2") {
    return e;
  }
}
const m = "dreamina_generator_commit_hint";
export function U(e) {
  const { isAgent = false, canSubmit } = e;
  const r = c.h(i.a);
  const { submitButtonRef } = o.useContext(l.b);
  const [u, setU] = o.useState("0");
  const [p, setP] = o.useState(false);
  const bRef = o.useRef();
  const submitOnModEnter = u === "1" || (u === "2" && !isAgent);
  o.useEffect(() => {
    var e = ((e, n) => {
      if (n) {
        return d(new URLSearchParams(e).get("debugCommitType"));
      }
    })(typeof window === "undefined" ? "" : window.location.search, false);
    var n = () => {
      var n;
      setU(
        (n =
          e != null
            ? e
            : d(
                r.abTestManager.getAbTestValueSync(
                  s.ob.GeneratorCommitType,
                  "0",
                ),
              )) != null
          ? n
          : "0",
      );
    };
    n();
    var t = r.onDidChangeConfiguration((e) => {
      if (
        Object.values(e.changedConfig).some((e) =>
          Object.prototype.hasOwnProperty.call(
            e != null ? e : {},
            s.ob.GeneratorCommitType,
          ),
        )
      ) {
        n();
      }
    });
    return () => t.dispose();
  }, [r]);
  const dismissHint = o.useCallback(() => {
    bRef.current = undefined;
    setP(false);
  }, []);
  o.useEffect(dismissHint, [dismissHint, submitOnModEnter, isAgent]);
  o.useEffect(() => {
    if (p) {
      var e = window.setTimeout(dismissHint, 5000);
      return () => window.clearTimeout(e);
    }
  }, [dismissHint, p]);
  const onPlainEnter = o.useCallback(
    (e) => {
      var n = submitButtonRef == null ? undefined : submitButtonRef.current;
      var r =
        canSubmit != null
          ? canSubmit
          : !!(
              n &&
              !n.disabled &&
              n.dataset.generatorSubmitAvailable !== "false"
            );
      if (!submitOnModEnter || !e || !r || p) {
        bRef.current = undefined;
        return;
      }
      var o = Date.now();
      var bRef_current = bRef.current;
      bRef.current = o;
      if (bRef_current !== undefined && o - bRef_current <= 3000) {
        bRef.current = undefined;
        try {
          if (
            ((e, n) => {
              try {
                const t = e.getItem(m);
                const r = t ? JSON.parse(t) : undefined;
                const a =
                  r &&
                  typeof r === "object" &&
                  "count" in r &&
                  typeof r.count === "number"
                    ? r.count
                    : 0;
                const o =
                  r && typeof r === "object" && "lastDay" in r
                    ? r.lastDay
                    : undefined;
                const lastDay = ""
                  .concat(n.getFullYear(), "-")
                  .concat(n.getMonth() + 1, "-")
                  .concat(n.getDate());
                if (!Number.isFinite(a) || a >= 3 || o === lastDay) {
                  return false;
                }
                e.setItem(
                  m,
                  JSON.stringify({
                    count: Math.max(0, a) + 1,
                    lastDay,
                  }),
                );
                return true;
              } catch (e) {
                return false;
              }
            })(window.localStorage, new Date(o))
          ) {
            setP(true);
          }
        } catch (e) {}
      }
    },
    [canSubmit, p, submitButtonRef, submitOnModEnter],
  );
  return o.useMemo(
    () => ({
      submitOnModEnter,
      hintVisible: p,
      onPlainEnter,
      dismissHint,
    }),
    [submitOnModEnter, p, onPlainEnter, dismissHint],
  );
}
export function S(e) {
  const { children } = e;
  const value = U(r._(e, ["children"]));
  return a.jsx(u.G.Provider, {
    value,
    children,
  });
}
