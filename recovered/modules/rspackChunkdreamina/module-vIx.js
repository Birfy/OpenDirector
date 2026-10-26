import r from "z8";
import o from "yw";
export var _ = (e) => {
  var t = Number.isFinite(e) ? e : 0;
  return r.jsx(o.uqE, {
    style: {
      transform: `rotate(${((t % 60) / 60) * 360}deg)`,
    },
  });
};
