import r from "z8";
import n from "bT";
import i from "cHh";
import o from "wF";
import s from "do";
import { X } from "./module-Rl_2.js";
import l from "z7R";
export var _ = n.memo(function (e) {
  const { mode, tipPos, tipHorizontalOffset, className, presentation } = e;
  return r.jsx(X, {
    fallback: r.jsx("div", {}),
    serviceId: l.Ji,
    children: (e) =>
      r.jsx(o.Z, {
        instantiationService: e.containerService,
        children: r.jsx(i.S, {
          contextViewIds: Object.values(s.WU),
          mode,
          tipPos,
          tipHorizontalOffset,
          className,
          presentation,
        }),
      }),
  });
});
