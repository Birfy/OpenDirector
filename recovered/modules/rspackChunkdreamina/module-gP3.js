import r from "NY";
import o from "K8";
import n from "YI";
export function B(e, t) {
  return r._(function* () {
    let i;
    i = {
      mine: new Set(),
      official: new Set(),
    };
    t.forEach((e) => {
      if (e.subjectId) {
        i[n.w(e)].add(e.subjectId);
      }
    });
    const { mineSubjectIdList, officialSubjectIdList } = {
      mineSubjectIdList: Array.from(i.mine),
      officialSubjectIdList: Array.from(i.official),
    };
    if (!mineSubjectIdList.length && !officialSubjectIdList.length) {
      return o.TZ([]);
    }
    const s = [];
    if (mineSubjectIdList.length) {
      s.push(
        e.subjectOperationManager.getSubjectList({
          subjectIdList: mineSubjectIdList,
          subjectSource: "mine",
        }),
      );
    }
    if (officialSubjectIdList.length) {
      s.push(
        e.subjectOperationManager.getSubjectList({
          subjectIdList: officialSubjectIdList,
          subjectSource: "official",
        }),
      );
    }
    const c = yield Promise.all(s);
    const l = [];
    for (const u of c) {
      if (!u.ok) {
        return o.xz(u.code, u.msg);
      }
      l.push(...u.value);
    }
    return o.TZ(l);
  })();
}
