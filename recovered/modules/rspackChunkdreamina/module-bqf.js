import t from "oa";
import n from "bk";
import i from "IC";
import r from "QmW";
import o from "htj";
import l from "z8";
import s from "bT";
import d from "YTe";
const c = s.memo(function (e) {
  const { enableAudit = true, node, extension } = e;
  const { attrs = {} } = node;
  const { id = "", subject, displaySubject, loading = false } = attrs;
  const { subjectMaterialPicker } = extension.options;
  const v = {
    id,
    subject,
    displaySubject,
    loading,
    subjectMaterialPicker,
  };
  return l.jsx(r.VR, {
    as: "span",
    children: enableAudit ? l.jsx(d.v, t._({}, v)) : l.jsx(d.k, t._({}, v)),
  });
});
const m = s.memo(function (e) {
  return l.jsx(
    c,
    n._(t._({}, e), {
      enableAudit: false,
    }),
  );
});
export var p = i.P.extend({
  name: o.t.SubjectMentionTag,
  draggable: true,
  addOptions() {
    let e;
    return n._(t._({}, (e = this.parent) == null ? undefined : e.call(this)), {
      subjectMaterialPicker: undefined,
    });
  },
  addAttributes: () => ({
    id: {
      default: null,
    },
    subject: {
      default: null,
      parseHTML: (e) => {
        var u = e.getAttribute("data-subject");
        if (u) {
          try {
            return JSON.parse(u);
          } catch (e) {}
        }
        return null;
      },
      renderHTML: (e) => {
        if (e.subject) {
          return {
            "data-subject": JSON.stringify(e.subject),
          };
        }
        return {};
      },
    },
    displaySubject: {
      default: null,
      parseHTML: (e) => {
        var u = e.getAttribute("data-display-subject");
        if (u) {
          try {
            return JSON.parse(u);
          } catch (e) {}
        }
        return null;
      },
      renderHTML: (e) => {
        if (e.displaySubject) {
          return {
            "data-display-subject": JSON.stringify(e.displaySubject),
          };
        }
        return {};
      },
    },
    loading: {
      default: false,
      parseHTML: (e) => e.getAttribute("data-loading") === "true",
      renderHTML: (e) => {
        if (e.loading) {
          return {
            "data-loading": "true",
          };
        }
        return {};
      },
    },
  }),
  addNodeView: () => r.gu(c),
});
export var e = p.extend({
  addNodeView: () => r.gu(m),
});
