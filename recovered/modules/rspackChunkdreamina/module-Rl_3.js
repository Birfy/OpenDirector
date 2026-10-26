import a from "oa";
import r from "bk";
import s from "z8";
import l from "bT";
import n from "vn";
import o from "wF";
import d from "RII";
import c from "NY";
export var X = l.memo(function (t) {
  const { serviceId, fallback, errorFallback, children } = t;
  const h = o.h(d.l);
  const p = l.useMemo(() => {
    var onError = (t, i) => {
      var a;
      var featureService = String(serviceId);
      h.reportDevError("feature_service_loader_error", t, {
        featureService,
        componentStack: (a = i.componentStack) != null ? a : "",
      });
      h.reportDevEvent("feature_service_fallback", {
        featureService,
      });
    };
    if (typeof errorFallback === "function") {
      return {
        fallbackRender: errorFallback,
        onError,
      };
    }
    return {
      fallback: s.jsx(s.Fragment, {
        children: errorFallback != null ? errorFallback : fallback,
      }),
      onError,
    };
  }, [errorFallback, fallback, h, serviceId]);
  const k = ((t) => {
    var { serviceId } = t;
    var i = o.h(serviceId);
    return l.useRef(
      l.lazy(() =>
        c._(function* () {
          const t = yield i.getInstance();
          return {
            default: l.memo((e) =>
              s.jsx(s.Fragment, {
                children: e.children(t),
              }),
            ),
          };
        })(),
      ),
    ).current;
  })(t);
  return s.jsx(
    n.tH,
    r._(a._({}, p), {
      children: s.jsx(l.Suspense, {
        fallback,
        children: s.jsx(k, {
          children,
        }),
      }),
    }),
  );
});
