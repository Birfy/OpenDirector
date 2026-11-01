import n from "Ut";
export function FR(e) {
  return !!e && e instanceof n.DAVideoBaseComponent;
}
export function RL(e) {
  if (e) {
    const t = (
      e instanceof n.DADraft ? e : new n.DADraft(e)
    ).findMainComponent();
    if (FR(t)) {
      return t;
    }
  }
}
export function wD(e) {
  if (e) {
    const t = e instanceof n.DADraft ? e : new n.DADraft(e);
    const i = t.findMainComponent();
    if (i) {
      const o = (e) => {
        var i = t.findParentComponent(e);
        if (i && FR(i)) {
          return o(i);
        }
        return e;
      };
      const r = o(i);
      if (FR(r)) {
        return r;
      }
    }
  }
}
export function QB(e) {
  if (!e) {
    return false;
  }
  const t = wD(e);
  return (
    !!t &&
    [
      n.DAVideoGenerateType.videoTemplate,
      n.DAVideoGenerateType.genVideo,
      n.DAVideoGenerateType.lipSync,
    ].includes(t.generateType)
  );
}
