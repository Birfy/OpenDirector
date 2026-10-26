import a from "oa";
import r from "bk";
import o from "z8";
import i from "ED";
import s from "k7";
import l from "bT";
import c from "xm3";
import d from "wF";
import { D } from "./module-RUQ.js";
import p from "OXC";
import m from "vU6";
import v from "Ft";
import h from "FM";
const f = i.PA(function (e) {
  const { editor } = e;
  const { musicGeneratorManager } = d.h(c.V);
  const {
    metadata: { promptPlaceholders },
  } = musicGeneratorManager;
  return o.jsx(h.p, {
    editor,
    candidates: promptPlaceholders,
  });
});
const x = i.PA(function (e) {
  const { musicGeneratorManager } = d.h(c.V);
  const {
    data: { editorDocument },
    changeEditorDocument,
    taskSubmissionManager: { submit },
    reportManager: { reportActivatePrompt, reportEnterPrompt },
  } = musicGeneratorManager;
  const extensions = l.useMemo(
    () => [
      m.r,
      v._.configure({
        placeholder: (e) => {
          var { editor } = e;
          return o.jsx(f, {
            editor,
          });
        },
      }),
    ],
    [],
  );
  const onSubmit = D(submit);
  return o.jsx(
    p.k,
    r._(a._({}, e), {
      value: editorDocument,
      extensions,
      onChange: changeEditorDocument,
      onSubmit,
      onFocus: reportActivatePrompt,
      onBlur: reportEnterPrompt,
    }),
  );
});
export var V = i.PA(function (e) {
  return o.jsx(
    s.d,
    r._(a._({}, e), {
      children: o.jsx(x, {}),
    }),
  );
});
