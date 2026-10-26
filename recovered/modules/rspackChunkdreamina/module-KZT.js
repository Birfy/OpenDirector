import { t as t_1 } from "./module-htj.js";
export function _(e) {
  let t;
  let n;
  const { editor, selection, range, allowInsert, transformInsertContent } = e;
  if (
    (t = allowInsert == null ? undefined : allowInsert(...selection)) == null ||
    t
  ) {
    const s = (function () {
      let e;
      for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) {
        n[r] = arguments[r];
      }
      const [id, o, l] = n;
      if ((l == null ? undefined : l.key) === "resource") {
        return {
          type: t_1.ReferenceMentionTag,
          attrs: {
            id,
          },
        };
      }
      if (
        (l == null ? undefined : l.key) === "subject" &&
        ((e = o.extra) == null ? undefined : e.subject)
      ) {
        return {
          type: t_1.SubjectMentionTag,
          attrs: {
            id,
            subject: o.extra.subject,
          },
        };
      }
    })(...selection);
    n = transformInsertContent ? transformInsertContent(s, ...selection) : s;
  }
  const d = editor.chain();
  if (range) {
    d.deleteRange(range);
  }
  if (n) {
    d.focus().insertContent(n);
  }
  d.run();
  return n !== undefined;
}
