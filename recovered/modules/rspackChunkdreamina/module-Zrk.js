import a from "oa";
import r from "bk";
import o from "z8";
import i from "bT";
import s from "ED";
import l from "xm3";
import c from "wF";
import d from "k7";
import u from "NY";
import p from "Lx";
import m from "FSQ";
import { D as D_1 } from "./module-RUQ.js";
import { b as b_1 } from "./module-lSl.js";
import f from "OXC";
import x from "Ft";
import _ from "bqf";
import g from "lgn";
import b from "Zr";
import j from "mV";
import y from "htj";
import E from "QmW";
import D from "oxFp";
import W from "qa";
import $ from "Jv";
import Z from "Btc";
import K from "Qey";
import G from "vIx";
import U from "r6q";
import q from "BTP";
import { Q as Q_1 } from "./module-tHk.js";
import Y from "ESU";
import { a as a_1 } from "./module-ByT.js";
import en from "yw";
import ea from "lBB";
import * as er from "./module-Gn2.js";
import el from "yfx";
const k = "video-generator-continuation-prompt-block-selection";
const M = '[data-type="'.concat(
  y.t.VideoGeneratorContinuationPromptBlock,
  '"]',
);
const A = new b.hs(k);
function C(e) {
  const t = [];
  e.doc.descendants(
    (e, n) =>
      e.type.name !== y.t.VideoGeneratorContinuationPromptBlock ||
      (t.push({
        from: n,
        to: n + e.nodeSize,
      }),
      false),
  );
  return t;
}
function w(e, t) {
  return e >= t.from && e <= t.to;
}
function N(e, t) {
  return e > t.from && e < t.to;
}
function P(state, t) {
  return C(state).find((e) => w(t, e));
}
function T(e) {
  const t = e instanceof Element ? e : e == null ? undefined : e.parentElement;
  const n = t instanceof Element ? t.closest(M) : null;
  if (n instanceof HTMLElement) {
    return n;
  }
  return null;
}
function R(target) {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}
function S(e, t) {
  const n = ((e) => {
    let t;
    let n;
    let a;
    const r = e.dom.ownerDocument.getSelection();
    const o =
      (t = T((n = r == null ? undefined : r.anchorNode) != null ? n : null)) !=
      null
        ? t
        : T((a = r == null ? undefined : r.focusNode) != null ? a : null);
    if (o) {
      try {
        return P(e.state, e.posAtDOM(o, 0));
      } catch (e) {
        return;
      }
    }
  })(e);
  if (n) {
    return n;
  }
  const { state } = e;
  const { selection } = state;
  if (selection.empty) {
    const o = P(state, selection.from);
    if (o && N(selection.from, o)) {
      return o;
    }
  }
  if (t) {
    const i = P(state, t.from);
    if (i && N(t.from, i)) {
      return i;
    }
    const s = P(state, t.to);
    if (s && N(t.to, s)) {
      return s;
    }
  }
}
function V(e) {
  const t = S(e);
  if (t) {
    e.dispatch(
      e.state.tr.setSelection(b.U3.create(e.state.doc, t.to)).setMeta(A, null),
    );
    e.focus();
  }
}
const F = g.bP.create({
  name: y.t.VideoGeneratorContinuationPromptBlock,
  group: "inline",
  inline: true,
  atom: true,
  content: "inline*",
  selectable: false,
  isolating: true,
  parseHTML() {
    return [
      {
        tag: 'span[data-type="'.concat(this.name, '"]'),
      },
    ];
  },
  renderHTML(e) {
    const { HTMLAttributes } = e;
    return [
      "span",
      g.KV(HTMLAttributes, {
        "data-type": this.name,
        contenteditable: "false",
        class: "prompt-block-xjon86",
      }),
      [
        "span",
        {
          class: "prompt-block-content-rbdCjq",
        },
        0,
      ],
    ];
  },
});
const I = g.YY.create({
  name: k,
  priority: 1000,
  addProseMirrorPlugins: () => [
    new b.k_({
      key: A,
      state: {
        init: () => null,
        apply: (e, t) => {
          var n = e.getMeta(A);
          if (n !== undefined) {
            return n;
          }
          if (e.docChanged || e.selectionSet) {
            return null;
          }
          return t;
        },
      },
      props: {
        handleDOMEvents: {
          mouseup: (e, t) =>
            !R(t.target) &&
            (requestAnimationFrame(() => {
              V(e);
            }),
            false),
          beforeinput: (e, t) => !R(t.target) && (V(e), false),
          compositionstart: (e, t) => !R(t.target) && (V(e), false),
        },
        decorations: (e) => {
          var t = A.getState(e);
          if (t) {
            return j.zF.create(e.doc, [
              j.NZ.node(t.from, t.to, {
                class: "selected-block-DL5VRJ",
              }),
            ]);
          }
          return j.zF.empty;
        },
        handleKeyDown: (e, t) => {
          var n;
          var a;
          var r = A.getState(e.state);
          if (
            !R(t.target) &&
            !t.ctrlKey &&
            !t.metaKey &&
            !t.altKey &&
            (t.key.length === 1 || t.key === "Process" || t.isComposing)
          ) {
            V(e);
            return false;
          }
          if (t.key !== "Backspace" && t.key !== "Delete") {
            if (r) {
              e.dispatch(e.state.tr.setMeta(A, null));
            }
            return false;
          }
          var { selection } = e.state;
          if (!selection.empty) {
            if (r) {
              e.dispatch(e.state.tr.setMeta(A, null));
            }
            return false;
          }
          var selection_from = selection.from;
          if (r && w(selection_from, r)) {
            t.preventDefault();
            e.dispatch(e.state.tr.delete(r.from, r.to).setMeta(A, null));
            return true;
          }
          n = e.state;
          a = t.key;
          var s = C(n).find((e) => {
            if (a === "Backspace") {
              return (
                selection_from === e.to ||
                (selection_from > e.from && selection_from <= e.to)
              );
            }
            return (
              selection_from === e.from ||
              (selection_from >= e.from && selection_from < e.to)
            );
          });
          if (s) {
            if (r && r.from === s.from && r.to === s.to) {
              t.preventDefault();
              e.dispatch(e.state.tr.delete(r.from, r.to).setMeta(A, null));
            } else {
              t.preventDefault();
              e.dispatch(e.state.tr.setMeta(A, s));
            }
            return true;
          }
          if (r) {
            e.dispatch(e.state.tr.setMeta(A, null));
          }
          return false;
        },
        handleTextInput: (e, from, to, a) => {
          var r = S(e, {
            from,
            to,
          });
          if (!r) {
            return false;
          }
          var o = e.state.tr.insertText(a, r.to, r.to);
          o.setSelection(b.U3.create(o.doc, r.to + a.length));
          o.setMeta(A, null);
          e.dispatch(o);
          return true;
        },
      },
    }),
  ],
});
const O = s.PA((e) => {
  var { id } = e;
  var n = W._(e, ["id"]);
  var { videoGeneratorManager } = c.h(l.V);
  var { omniReferenceManager } = videoGeneratorManager;
  var {
    data: { references },
    metadata: { referenceIdToLabel },
  } = omniReferenceManager;
  var resource = references.find((e) => e.id === id);
  if (resource) {
    return o.jsx(
      $.W,
      a._(
        {
          resource,
          label: referenceIdToLabel[id],
        },
        n,
      ),
    );
  }
  return null;
});
const z = {
  color: "var(--text-secondary)",
  margin: 0,
};
const L = {
  margin: "0 4px",
};
const H = i.memo(function (e) {
  const { node } = e;
  const { id, isContinuationPromptBlockPart } = node.attrs;
  return o.jsx(E.VR, {
    as: "span",
    style: isContinuationPromptBlockPart === true ? L : undefined,
    children:
      typeof id === "string"
        ? o.jsx(O, {
            id,
            style: isContinuationPromptBlockPart === true ? z : undefined,
          })
        : null,
  });
});
const B = D.Q.extend({
  addAttributes: () => ({
    id: {
      default: null,
    },
    isContinuationPromptBlockPart: {
      default: false,
    },
  }),
  addNodeView: () => E.gu(H),
});
const J = s.PA(function () {
  const { videoGeneratorManager } = c.h(l.V);
  const {
    metadata: { durationOptions },
    data: { durationMs },
    changeDurationMs,
    setDurationMs,
  } = videoGeneratorManager;
  const {
    durationValues,
    selectedDurationSeconds,
    minDurationSeconds,
    maxDurationSeconds,
    durationStepSeconds,
  } = i.useMemo(
    () => Q_1(durationOptions, durationMs),
    [durationMs, durationOptions],
  );
  const v = i.useMemo(
    () => G._(selectedDurationSeconds),
    [selectedDurationSeconds],
  );
  const title = K.Ay.t("seedance_25_extend_time", {}, "选择视频延长时长");
  const disabledRangeTooltipContent = K.Ay.t(
    "web_sd25_duration_range_hover_tip",
    {
      num1: minDurationSeconds,
      num2: maxDurationSeconds,
    },
    "时长需在 "
      .concat(minDurationSeconds, " - ")
      .concat(maxDurationSeconds, " 秒内"),
  );
  const onChange = i.useCallback(
    (e) => {
      changeDurationMs(e * U.K);
    },
    [changeDurationMs],
  );
  const onPreviewChange = i.useCallback(
    (e) => {
      setDurationMs(e * U.K);
    },
    [setDurationMs],
  );
  return o.jsx(E.VR, {
    as: "span",
    className: "node-view-JWNCWn",
    children: o.jsx(q.P, {
      value: selectedDurationSeconds,
      min: minDurationSeconds,
      max: maxDurationSeconds,
      step: durationStepSeconds,
      values: durationValues,
      title,
      scaleMin: 0,
      tickInterval: 5,
      tickSnapThreshold: 0,
      position: "tl",
      disabledRangeTooltipContent,
      onChange,
      onPreviewChange,
      children: o.jsxs("button", {
        type: "button",
        className: "duration-tag-acIhEK",
        "data-continuation-duration-tag": "true",
        children: [
          o.jsx("span", {
            className: "icon-X5l_Y0",
            children: v,
          }),
          o.jsxs("span", {
            className: "label-LMV4s_",
            children: [selectedDurationSeconds, "s"],
          }),
        ],
      }),
    }),
  });
});
const Q = Z.S.extend({
  name: y.t.VideoGeneratorContinuationDurationTag,
  draggable: false,
  addAttributes: () => ({
    isContinuationPromptBlockPart: {
      default: false,
    },
  }),
  addNodeView: () => E.gu(J),
});
const component = s.PA(
  i.forwardRef(function (e, ref) {
    const { referenceMentionManager } = c.h(l.V).videoGeneratorManager;
    i.useEffect(() => {
      referenceMentionManager.openPanel({
        entry: "editor",
      });
    }, [referenceMentionManager]);
    const options = a_1(referenceMentionManager);
    const onInsertOption = i.useCallback(
      (e) => {
        referenceMentionManager.insertOption(e, {
          entry: "editor",
        });
      },
      [referenceMentionManager],
    );
    return o.jsx(
      Y.a,
      r._(
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
  }),
);
function eo(e) {
  const { children, draftModelHint } = e;
  return o.jsxs(o.Fragment, {
    children: [
      children,
      draftModelHint
        ? o.jsx("span", {
            style: {
              marginInlineStart: 4,
            },
            children: draftModelHint,
          })
        : null,
    ],
  });
}
const ei = s.PA(function () {
  const { videoGeneratorManager } = c.h(l.V);
  const { featureManager, omniReferenceManager, metadata } =
    videoGeneratorManager;
  const {
    metadata: { placeholderKey },
  } = omniReferenceManager;
  const {
    data: { isVideoEditEngaged },
  } = featureManager;
  const icon = i.useMemo(() => o.jsx(en.jHH, {}), []);
  const triggerElement = i.useMemo(
    () =>
      o.jsx(ea.E, {
        icon,
        size: "mini",
      }),
    [icon],
  );
  if (isVideoEditEngaged) {
    return o.jsx(o.Fragment, {
      children: K.Ay.t(
        "seedance_25_edit_prompt_default",
        {},
        "描述你想修改的内容，例如：把角色A替换成角色B，或使用高级编辑功能对视频画面进行标记、框选",
      ),
    });
  }
  return o.jsx(eo, {
    draftModelHint: metadata.draftModelHint,
    children: K.Ay.t(placeholderKey, {
      strong: () =>
        o.jsx(
          er.z,
          {
            triggerElement,
            entry: "placeholder",
          },
          "video-omni-reference-mention-select",
        ),
    }),
  });
});
const es = s.PA(function () {
  const { videoGeneratorManager } = c.h(l.V);
  const {
    featureManager,
    omniReferenceManager,
    promptEnhancementManager: {
      acceptedPromptPrefix,
      clearAcceptedPromptPlaceholder,
      hasAcceptedTask,
    },
    taskSubmissionManager: { submit },
  } = videoGeneratorManager;
  const {
    data: { editorDocument },
    changeEditorDocument,
    dropAsReferences,
    pasteAsReferences,
  } = omniReferenceManager;
  const {
    data: { isOmniReferenceLikeEngaged },
  } = featureManager;
  const M = c.h(p.C);
  const onQueryChange = i.useCallback(
    (e) =>
      u._(function* () {
        (yield M.getInstance()).subjectSearchManager.searchByKeyword(e);
      })(),
    [M],
  );
  const suggestion = m.$({
    component,
    enabled: isOmniReferenceLikeEngaged,
    onQueryChange,
  });
  const placeholder = i.useMemo(() => o.jsx(ei, {}), []);
  const extensions = i.useMemo(
    () => [
      x._.configure({
        placeholder,
      }),
      I.configure(),
      B.configure({
        suggestion,
      }),
      F.configure(),
      Q.configure(),
      _.p.configure(),
    ],
    [suggestion, placeholder],
  );
  const P = D_1(submit);
  const { onDrop, onPaste } = b_1({
    onDrop: dropAsReferences,
    onPaste: pasteAsReferences,
  });
  return o.jsx(f.k, {
    extensions,
    value: editorDocument,
    prefixPlaceholder: hasAcceptedTask ? acceptedPromptPrefix : undefined,
    onPrefixPlaceholderDelete: clearAcceptedPromptPlaceholder,
    onChange: changeEditorDocument,
    onSubmit: P,
    onDrop,
    onPaste,
  });
});
const ec = s.PA(function (e) {
  const { videoGeneratorManager } = c.h(l.V);
  const {
    metadata: { placeholder, draftModelHint },
    data: { prompt },
    changePrompt,
    pasteAsReferences,
    promptEnhancementManager: {
      acceptedPromptPrefix,
      beginPromptComposition,
      clearAcceptedPromptPlaceholder,
      endPromptComposition,
      hasAcceptedTask,
    },
    featureManager,
    multiFramesManager,
    taskSubmissionManager: { submit },
    reportManager: { reportActivatePrompt, reportEnterPrompt },
  } = videoGeneratorManager;
  const {
    data: { isMultiFramesEngaged },
  } = featureManager;
  const {
    data: { hasFrameResources },
  } = multiFramesManager;
  const A = D_1(submit);
  if (isMultiFramesEngaged && hasFrameResources) {
    return null;
  }
  return o.jsx(
    el.f,
    r._(a._({}, e), {
      disabled: isMultiFramesEngaged,
      value: prompt,
      placeholder:
        draftModelHint && !hasAcceptedTask
          ? "".concat(placeholder, " ").concat(draftModelHint)
          : placeholder,
      prefixPlaceholder: hasAcceptedTask ? acceptedPromptPrefix : undefined,
      onPrefixPlaceholderDelete: clearAcceptedPromptPlaceholder,
      onChange: changePrompt,
      onSubmit: A,
      onFocus: reportActivatePrompt,
      onBlur: reportEnterPrompt,
      onPaste: pasteAsReferences,
      onCompositionStart: beginPromptComposition,
      onCompositionEnd: endPromptComposition,
    }),
  );
});
var ed = s.PA(function (e) {
  const { videoGeneratorManager } = c.h(l.V);
  const { featureManager } = videoGeneratorManager;
  const {
    data: { isOmniReferenceEngaged, isVideoEditEngaged, isLongVideoEngaged },
  } = featureManager;
  const m = i.useMemo(() => {
    if (isOmniReferenceEngaged || isVideoEditEngaged || isLongVideoEngaged) {
      return o.jsx(es, {});
    }
    return o.jsx(ec, {});
  }, [isLongVideoEngaged, isOmniReferenceEngaged, isVideoEditEngaged]);
  return o.jsx(
    d.d,
    r._(a._({}, e), {
      children: m,
    }),
  );
});
export { ed as h };
