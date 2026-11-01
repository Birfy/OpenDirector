import a from "oa";
import r from "bk";
import i from "z8";
import o from "bT";
import l from "UOA";
import { R } from "./module-SX.js";
import c from "ED";
import u from "xm3";
import d from "wF";
import m from "XC";
import p from "Dh";
const v = c.PA(function () {
  const { actionCopyGeneratorManager } = d.h(u.V);
  const {
    metadata: { modelOptions, isModelListVisible },
    data: { modelKey },
    switchModel,
  } = actionCopyGeneratorManager;
  const onChange = m.P({
    currentValue: modelKey,
    options: modelOptions,
    onAllowedChange: switchModel,
  });
  if (isModelListVisible) {
    return i.jsx(p.W, {
      options: modelOptions,
      value: modelKey,
      onChange,
    });
  }
  return null;
});
export var I = o.memo(function (e) {
  return i.jsxs(
    l.U,
    r._(a._({}, e), {
      children: [i.jsx(R, {}), i.jsx(v, {})],
    }),
  );
});
