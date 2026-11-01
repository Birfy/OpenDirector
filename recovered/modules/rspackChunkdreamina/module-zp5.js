import a from "Ut";
export function G(e) {
  const t = [];
  (function e(i) {
    if (i instanceof a.DAPromptTextNode) {
      t.push(i);
    }
    if (i instanceof a.DARichPrompt || i instanceof a.DAPromptParagraphNode) {
      const { children } = i;
      for (const r of children) {
        e(r);
      }
    }
  })(e);
  return t;
}
