import a from "oa";
import r from "bk";
import o from "z8";
import i from "bT";
import s from "UOA";
import l from "SX";
import c from "ED";
import d from "Qey";
import u from "xm3";
import p from "vIx";
import m from "wF";
import v from "lBB";
import h from "BTP";
import { P } from "./module-XC_2.js";
import _ from "Dh";
const f = c.PA(function () {
  const { musicGeneratorManager } = m.h(u.V);
  const {
    metadata: { durationRange, durationStep },
    data: { duration, smartDurationEnabled },
    commitManualDurationChange,
    previewManualDurationChange,
    switchSmartDuration,
  } = musicGeneratorManager;
  const icon = i.useMemo(() => p._(duration), [duration]);
  const label = d.Ay.t("ai_music_generate_duration_default");
  const title = d.Ay.t(
    "ai_music_generator_select_duration_label",
    {},
    "选择音乐生成时长",
  );
  const disabledRangeTooltipContent = d.Ay.t(
    "ai_music_generator_select_duration_label_subtitle",
    {
      num1: durationRange.min,
      num2: durationRange.max,
    },
    "时长需在 "
      .concat(durationRange.min, " - ")
      .concat(durationRange.max, " 秒内"),
  );
  const triggerProps = i.useMemo(
    () => ({
      className: "duration-trigger-daHweS",
    }),
    [],
  );
  const j = i.useCallback(
    (e) => {
      switchSmartDuration(e);
    },
    [switchSmartDuration],
  );
  return o.jsx(h.P, {
    value: duration,
    min: durationRange.min,
    max: durationRange.max,
    step: durationStep,
    title,
    scaleMin: 0,
    tickInterval: 30,
    tickSnapThreshold: 10,
    disabledRangeTooltipContent,
    triggerProps,
    smartDuration: {
      label,
      checked: smartDurationEnabled,
      onChange: j,
    },
    onChange: commitManualDurationChange,
    onPreviewChange: previewManualDurationChange,
    children: o.jsx(v.E, {
      icon,
      children: smartDurationEnabled ? label : "".concat(duration, "s"),
    }),
  });
});
const g = c.PA(function () {
  const { musicGeneratorManager } = m.h(u.V);
  const {
    metadata: { modelOptions },
    data: { modelKey },
    switchModel,
  } = musicGeneratorManager;
  const r = P({
    currentValue: modelKey,
    options: modelOptions,
    onAllowedChange: switchModel,
  });
  return o.jsx(_.W, {
    options: modelOptions,
    value: modelKey,
    onChange: r,
  });
});
var b = i.memo(function (e) {
  return o.jsxs(
    s.U,
    r._(a._({}, e), {
      children: [o.jsx(l.R, {}), o.jsx(g, {}), o.jsx(f, {})],
    }),
  );
});
export { b as c };
