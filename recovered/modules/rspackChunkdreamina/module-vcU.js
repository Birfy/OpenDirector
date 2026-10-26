import s from "A3X";
import n from "LLl";
import r from "PHr";
import o from "HSE";
import a from "gB6";
export function J(t) {
  if (s.s(t)) {
    templateDuration = t.video.durationMs;
    templatePrompt =
      (u = t.aigcImageParams) == null ||
      (d = u.text2videoParams) == null ||
      (c = d.videoGenInputs[0]) == null
        ? undefined
        : c.prompt;
  } else if (n.Y(t)) {
    templatePrompt = t.text2imageParams.prompt;
    templateStyleCode =
      (_ = t.blendImageInfo) == null || (h = _.find(r.I)) == null
        ? undefined
        : h.code;
  } else if (o.J(t)) {
    var templateDuration;
    var templatePrompt;
    var templateStyleCode;
    var c;
    var d;
    var u;
    var h;
    var _;
    let p;
    let v;
    const m = t.collection[0];
    templatePrompt = m.text2imageParams.prompt;
    templateStyleCode =
      (v = m.blendImageInfo) == null || (p = v.find(r.I)) == null
        ? undefined
        : p.code;
  }
  return {
    templateId: t.id,
    templateTypeId: a.s(t),
    templateDuration,
    templatePrompt,
    templateStyleCode,
  };
}
