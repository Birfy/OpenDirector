import r from "oa";
import n from "bk";
import i from "z8";
import o from "bT";
import s from "vn";
import c from "wF";
import l from "RII";
import d from "NY";
export var X = o.memo(function (e) {
  const { serviceId, fallback, errorFallback, children } = e;
  const m = c.h(l.l);
  const h = o.useMemo(() => {
    var onError = (e, a) => {
      var r;
      var featureService = String(serviceId);
      m.reportDevError("feature_service_loader_error", e, {
        featureService,
        componentStack: (r = a.componentStack) != null ? r : "",
      });
      m.reportDevEvent("feature_service_fallback", {
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
      fallback: i.jsx(i.Fragment, {
        children: errorFallback != null ? errorFallback : fallback,
      }),
      onError,
    };
  }, [errorFallback, fallback, m, serviceId]);
  const v = ((e) => {
    var { serviceId } = e;
    var a = c.h(serviceId);
    return o.useRef(
      o.lazy(() =>
        d._(function* () {
          const e = yield a.getInstance();
          return {
            default: o.memo((t) =>
              i.jsx(i.Fragment, {
                children: t.children(e),
              }),
            ),
          };
        })(),
      ),
    ).current;
  })(e);
  return i.jsx(
    s.tH,
    n._(r._({}, h), {
      children: i.jsx(o.Suspense, {
        fallback,
        children: i.jsx(v, {
          children,
        }),
      }),
    }),
  );
});
