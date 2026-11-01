import a from "bT";
import t from "TK";
import i from "VA";
import o from "wF";
export function E() {
  const e = o.h(t.a);
  const SkillDisplayUsageV2 = i.ob.SkillDisplayUsageV2;
  const [n, setN] = a.useState(() =>
    e.abTestManager.getBooleanAbTestValue(SkillDisplayUsageV2, false),
  );
  a.useEffect(() => {
    var n = false;
    var a = () =>
      setN(e.abTestManager.getBooleanAbTestValue(SkillDisplayUsageV2, false));
    a();
    var t = e.onDidChangeConfiguration((e) => {
      if (e.affectedSections.has(SkillDisplayUsageV2)) {
        a();
      }
    });
    e.abTestManager
      .getAbTestValue(SkillDisplayUsageV2, false)
      .then(() => {
        if (!n) {
          a();
        }
      })
      .catch(() => {
        if (!n) {
          setN(false);
        }
      });
    return () => {
      n = true;
      t.dispose();
    };
  }, [e, SkillDisplayUsageV2]);
  return n;
}
