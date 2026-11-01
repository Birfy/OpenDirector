import r from "z8";
import n from "ED";
import i from "lj";
import o from "wF";
import s from "bT";
import c from "PC";
import l from "VB";
import { i as i_1 } from "./module-F5u.js";
const u = n.PA(function (e) {
  const {
    active,
    children,
    className,
    hostPendingFallback,
    presentation,
    routeId,
  } = e;
  const m = o.h(i_1);
  const id = s.useId();
  const [v, setV] = s.useState(false);
  const f = m.getHost(routeId);
  const b = v && active;
  l.f(() => {
    setV(true);
    return () => setV(false);
  });
  s.useLayoutEffect(() => {
    if (b && f) {
      var e = m.register({
        id,
        routeId,
        presentation,
      });
      return () => e.dispose();
    }
  }, [b, id, f, presentation, routeId, m]);
  if (f) {
    return c.createPortal(
      r.jsx("div", {
        className,
        "data-main-frame-2026-route-id": routeId,
        hidden: !b,
        children,
      }),
      f,
    );
  }
  return r.jsx(r.Fragment, {
    children: hostPendingFallback,
  });
});
export var e = n.PA(function (e) {
  const {
    active = true,
    children,
    className,
    enabled = true,
    fallback,
    hostPendingFallback = null,
    presentation,
    routeId,
  } = e;
  const m = o.h(i.K);
  const h = enabled && m.hasCustomSideMenuRenderer;
  const children_1 = fallback === undefined ? children : fallback;
  if (h) {
    return r.jsx(u, {
      active,
      className,
      hostPendingFallback,
      presentation,
      routeId,
      children,
    });
  }
  return r.jsx(r.Fragment, {
    children: children_1,
  });
});
