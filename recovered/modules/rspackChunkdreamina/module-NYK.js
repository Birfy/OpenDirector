import s from "yMd";
import n from "VhU";
const r = {
  "2400p": "4k",
};
export function DJ(t) {
  if (t == null) {
    return undefined;
  }
  return t.fields.find((t) => {
    var e;
    return (
      t.type === s.pH.ExtendConfig &&
      !t.disabled &&
      !!((e = t.defaultModelKey) == null ? undefined : e.trim())
    );
  });
}
export function R5(t) {
  return !!DJ(t);
}
export function Vb(t) {
  let e;
  const i = t == null ? undefined : t.trim().toLowerCase();
  if (i) {
    if ((e = r[i]) != null) {
      return e;
    }
    return i;
  }
}
export function uz(t) {
  let e;
  const { sourceResolution, targetModel } = t;
  const r = Vb(sourceResolution);
  if (r) {
    if (
      (e =
        targetModel == null
          ? undefined
          : targetModel.fields.find((t) => t.type === s.pH.Resolution)) == null
    ) {
      return undefined;
    }
    return e.values.find((t) => Vb(t) === r);
  }
}
export function Yq(t) {
  return !!uz(t);
}
function u(t) {
  let e;
  return [
    ...((e = t == null ? undefined : t.modelList) != null ? e : []),
    t == null ? undefined : t.defaultModel,
    t == null ? undefined : t.fallbackModel,
  ].filter((t) => !!t);
}
function h(t, e) {
  if (t) {
    return u(e).find((e) => e.key === t);
  }
}
export function Kc(t) {
  const e = t == null ? undefined : t.sourceModelKey;
  if (e) {
    const i = h(e, t);
    if (R5(i)) {
      return i;
    }
    return undefined;
  }
  return u(t).find(R5);
}
export function zg(t) {
  let e;
  const i = DJ(Kc(t));
  return h(
    i == null || (e = i.defaultModelKey) == null ? undefined : e.trim(),
    t,
  );
}
export function cw(t) {
  let e;
  let i;
  const { defaultModel, modelList } = t;
  if (
    (defaultModel == null ? undefined : defaultModel.status) === n.nM.Online
  ) {
    const l =
      (i = DJ(defaultModel)) == null || (e = i.defaultModelKey) == null
        ? undefined
        : e.trim();
    const c =
      modelList == null
        ? undefined
        : modelList.find((t) => t.key === l && t.status === n.nM.Online);
    const d =
      c == null
        ? undefined
        : c.fields.find((t) => t.type === s.pH.InputMediaType);
    const u =
      c == null ? undefined : c.fields.find((t) => t.type === s.pH.UnifiedEdit);
    if (
      (d == null ? undefined : d.values.includes("unified_edit")) &&
      u &&
      !u.disabled &&
      u.materialLimits.video
    ) {
      return c;
    }
    return undefined;
  }
}
