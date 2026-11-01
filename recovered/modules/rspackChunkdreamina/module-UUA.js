import i from "SR";
function s(e) {
  const t = new Set();
  for (const r of e) {
    if (r instanceof i.NuroToolCallMessage) {
      const s = r.toolName || undefined;
      if (s) {
        t.add(s);
      }
    } else if (r instanceof i.NuroCanvasMessage) {
      for (const a of ((e) => {
        let t;
        const r = [];
        for (const i of (t = e.nodes) != null ? t : []) {
          if (i.toolName) {
            r.push(i.toolName);
          }
        }
        return r;
      })(r)) {
        t.add(a);
      }
    }
  }
  return [...t];
}
export { s as i };
