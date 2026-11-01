import n from "Ut";
export function v(e) {
  let t;
  const i = e.findMainComponent();
  if (i instanceof n.DAAudioBaseComponent) {
    if ((t = i.abilities) == null) {
      return undefined;
    }
    return t.textToSpeech;
  }
}
