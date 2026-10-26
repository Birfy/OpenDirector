import a from "oa";
import o from "bk";
import i from "z8";
import r from "bT";
import l from "k7";
import s from "NY";
import c from "ED";
import u from "xm3";
import d from "wF";
import m from "Lx";
import p from "FSQ";
import h from "RUQ";
import _ from "lSl";
import g from "Ft";
import v from "bqf";
import x from "j2t";
import b from "QmW";
import j from "oxFp";
import y from "Jv";
import C from "Qey";
import A from "yw";
import T from "lBB";
import { U } from "./module-KuO.js";
import P from "ESU";
import w from "ByT";
const f = c.PA((e) => {
  var { id } = e;
  var { imageGeneratorManager } = d.h(u.V);
  var { unifiedEditManager } = imageGeneratorManager;
  var { referenceResources, referenceResourceOptions } = unifiedEditManager;
  var resource = referenceResources.find((e) => e.id === id);
  var s = referenceResourceOptions.find((e) => e.value === id);
  if (resource && s) {
    return i.jsx(y.W, {
      resource,
      label: s.label.replace(RegExp("^@+", "u"), ""),
    });
  }
  return null;
});
const M = r.memo(function (e) {
  const { node } = e;
  const { id } = node.attrs;
  return i.jsx(b.VR, {
    as: "span",
    children:
      typeof id === "string"
        ? i.jsx(f, {
            id,
          })
        : null,
  });
});
const k = j.Q.extend({
  addNodeView: () => b.gu(M),
});
const R = c.PA(function () {
  const { imageGeneratorManager } = d.h(u.V);
  const {
    metadata: { placeholderKey },
    unifiedEditManager: { isModelSupportSubject },
  } = imageGeneratorManager;
  const icon = r.useMemo(() => i.jsx(A.jHH, {}), []);
  const triggerElement = r.useMemo(
    () =>
      i.jsx(T.E, {
        icon,
        size: "mini",
      }),
    [icon],
  );
  return i.jsx(i.Fragment, {
    children: C.Ay.t(placeholderKey, {
      strong: (e) => {
        if (isModelSupportSubject) {
          return i.jsx(
            U,
            {
              triggerElement,
              entry: "placeholder",
            },
            "image-reference-mention-select",
          );
        }
        return e;
      },
    }),
  });
});
const component = c.PA(
  r.forwardRef(function (e, ref) {
    const { imageGeneratorManager } = d.h(u.V);
    const { unifiedEditManager, referenceMentionManager } =
      imageGeneratorManager;
    r.useEffect(() => {
      referenceMentionManager.openPanel({
        entry: "editor",
      });
    }, [referenceMentionManager]);
    const options = w.a(referenceMentionManager);
    const onInsertOption = r.useCallback(
      (e) => {
        referenceMentionManager.insertOption(e, {
          entry: "editor",
        });
      },
      [referenceMentionManager],
    );
    if (unifiedEditManager.isModelSupportSubject) {
      return i.jsx(
        P.a,
        o._(
          a._(
            {
              ref,
              options,
            },
            e,
          ),
          {
            onInsertOption,
          },
        ),
      );
    }
    return null;
  }),
);
const V = c.PA(function (e) {
  const { className } = e;
  const { imageGeneratorManager } = d.h(u.V);
  const {
    unifiedEditManager,
    taskSubmissionManager: { submit },
    reportManager: { reportActivatePrompt, reportEnterPrompt },
    dropAsReferences,
    pasteAsReferences,
  } = imageGeneratorManager;
  const { editorDocument, changeEditorDocument } = unifiedEditManager;
  const { promptCharacterCount, promptMaxLength } = imageGeneratorManager.data;
  const A = d.h(m.C);
  const onQueryChange = r.useCallback(
    (e) =>
      s._(function* () {
        (yield A.getInstance()).subjectSearchManager.searchByKeyword(e);
      })(),
    [A],
  );
  const suggestion = p.$({
    component,
    enabled: unifiedEditManager.isModelSupportSubject,
    onQueryChange,
  });
  const placeholder = r.useMemo(() => i.jsx(R, {}), []);
  const extensions = r.useMemo(
    () => [
      g._.configure({
        placeholder,
      }),
      k.configure({
        suggestion,
      }),
      v.p.configure(),
    ],
    [placeholder, suggestion],
  );
  const onSubmit = h.D(submit);
  const { onDrop, onPaste } = _.b({
    onDrop: dropAsReferences,
    onPaste: pasteAsReferences,
  });
  return i.jsx(x.$, {
    className,
    characterLimit: {
      count: promptCharacterCount,
      max: promptMaxLength,
    },
    extensions,
    value: editorDocument,
    onChange: changeEditorDocument,
    onSubmit,
    onFocus: reportActivatePrompt,
    onBlur: reportEnterPrompt,
    onDrop,
    onPaste,
  });
});
export var H = r.memo(function (e) {
  return i.jsx(
    l.d,
    o._(a._({}, e), {
      children: i.jsx(V, {}),
    }),
  );
});
