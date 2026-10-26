import i from "SR";
import a from "A8W";
import n from "xNV";
import o from "HL";
export function K(e) {
  const t = [];
  for (const r of e) {
    let s = [];
    if (r instanceof i.NuroToolCallMessage) {
      s = ((e) => {
        if (!e.toolResult || (!n.E(e) && !a.x(e))) {
          return [];
        }
        const t = o.e(e.toolResult);
        return (t == null ? undefined : t.itemIdList) || [];
      })(r);
    }
    t.push(...s);
  }
  return t;
}
