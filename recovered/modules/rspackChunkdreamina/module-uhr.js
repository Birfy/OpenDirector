import r from "NY";
import o from "oa";
import n from "bk";
import a from "Qey";
import s from "M8X";
import c from "aEB";
import l from "gG";
import u from "iNQ";
import { B } from "./module-gP3.js";
function h(e) {
  return e.type === "subject" && "subject" in e;
}
function v(e) {
  let t;
  return (
    h(e) &&
    !!e.loading &&
    !((t = e.subject.subjectControl) == null ? undefined : t.isPublished)
  );
}
function _(e, t, i) {
  return r._(function* () {
    const { setPromptContents, getCurrentPromptContents } = i;
    const p = s.cQ(e, c.Ot);
    const m = s.cQ(e, u.I);
    const g = t.flatMap((e) => {
      if (h(e)) {
        return [e.subject];
      }
      return [];
    });
    if (g.length) {
      setPromptContents(
        t.map((e) => {
          if (h(e)) {
            return n._(o._({}, e), {
              loading: true,
            });
          }
          return e;
        }),
      );
      const f = (e, t) => {
        var i;
        var a;
        var notFoundSubjectCount_1;
        i = getCurrentPromptContents();
        a = new Map(e.map((e) => [e.subjectId, e]));
        notFoundSubjectCount_1 = i.filter(
          (e) => v(e) && !a.has(e.subject.subjectId),
        ).length;
        var { promptContents, notFoundSubjectCount } = {
          promptContents: i.map((e) => {
            if (!v(e)) {
              return n._(o._({}, e), {
                loading: false,
              });
            }
            var subject = a.get(e.subject.subjectId);
            if (subject) {
              return {
                type: "subject",
                id: l.K(subject),
                subject,
              };
            }
            return {
              type: "text",
              text: e.subject.content.name,
            };
          }),
          notFoundSubjectCount: notFoundSubjectCount_1,
        };
        setPromptContents(promptContents);
        if (notFoundSubjectCount > 0) {
          p.warning(t);
        }
      };
      const y = yield m.getInstance().catch(() => null);
      const S = y ? yield B(y, g) : null;
      if (!(S == null ? undefined : S.ok)) {
        return void f(
          [],
          a.Ay.t("web_network_error_try_again", {}, "网络异常，请稍后重试"),
        );
      }
      f(S.value, a.Ay.t("subject_delete_success_toast", {}, "主体已删除"));
    }
  })();
}
export { _ as r };
