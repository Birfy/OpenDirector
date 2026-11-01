import a from "oa";
import o from "bk";
import i from "z8";
import r from "bT";
import l from "k7";
import s from "ED";
import c from "E3";
import u from "edH";
import d from "iya";
import m from "Qey";
import p from "xm3";
import h from "wF";
import _ from "RUQ";
import g from "OXC";
import v from "eX0";
import x from "QmW";
import b from "eee";
import j from "cO";
import y from "r2";
import "Vx";
import M from "Ix";
import _k from "xb";
import A from "yw";
import T from "wd";
import w from "lgn";
import S from "Zr";
import V from "Qrs";
import F from "Rqk";
import I from "yKv";
import W from "SEl";
import $ from "CkM";
import O from "Y4p";
import E from "qa";
import D from "Pp";
const f = s.PA(function () {
  const { digitalHumanGeneratorManager } = h.h(p.V);
  const {
    metadata: { referenceCharacterLoading },
    data: { character },
  } = digitalHumanGeneratorManager;
  return i.jsx(y.X, {
    src: j.m(
      referenceCharacterLoading || character == null
        ? undefined
        : character.url,
      null,
      {
        logType: "js.href/src",
        reportOnly: "false",
        blackConfig: "{}",
        configMode: "merge",
        isCloseSSRReport: true,
        bid: "cc_dreamina",
        region: "cn",
        urlLimit: "-1",
        htmlLimit: "-1",
        isSaveValidUrl: false,
        isRuntimeLog: false,
        isDOMParser: false,
        escapeRule: "escape-report",
        reportUrl:
          "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
        htmlparserOptions: "{}",
        scmBranch: "-",
        scmName: "-",
        scmVersion: "-",
        webpackPluginVersion: "3.6.0",
        filename:
          "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hMkZ-WkhCa1IwWnp%RmRvT$dKWFJu$k1WMlJzWW0x$2$WbFl$blpq-$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpT-0ZveWJEQlpWM2QwW$$o$2R*bFhOSFJhTWxaM$dsaEthR1JIT1hsT$dFSj$Zakl4ZDJSRE1Xe*FSMnd3WWpOSmRscEhiRz$o$0ZKb1lrTXhiMlJ-T$doaWF%Rn$Xb*Mx-kdOdFJqQmlNM*wwWTBoS2RtSllRakJN$0ZKb1duazFNR016-%doamJX%XhZM2M5%FE9PQ",
      },
    ),
    contentType: character == null ? undefined : character.type,
    label: m.Ay.t("web_avatar_talking_prompt", {}, "动作描述"),
  });
});
const N = s.PA(function () {
  const { digitalHumanGeneratorManager } = h.h(p.V);
  const {
    metadata: { referenceCharacterLoading, speakingCharacterOptions },
    data: { character, speakingCharacterFaceImageUri },
    selectSpeakingCharacter,
    reportManager: { reportSwitchCharacter },
    isFirstTimeMultipleFacesDetected,
    recordIsFirstTimeMultipleFacesDetected,
  } = digitalHumanGeneratorManager;
  const d = r.useMemo(
    () =>
      speakingCharacterOptions.find(
        (e) => e.value === speakingCharacterFaceImageUri,
      ),
    [speakingCharacterOptions, speakingCharacterFaceImageUri],
  );
  const label = r.useMemo(() => {
    if (!character || referenceCharacterLoading) {
      return m.Ay.t("web_avatar_talking_content", {}, "说话内容");
    }
    if (character.type === "video" || !(d == null ? undefined : d.label)) {
      return m.Ay.t("web_avatar_character_says", {}, "角色说");
    }
    var e = d.value === character.uri;
    return m.Ay.t(
      e
        ? "web_avatar_talking_tag_all_characters"
        : "web_avatar_talking_tag_single_character",
      {
        string0: d.label,
      },
      "{string0} 说",
    );
  }, [character, d, referenceCharacterLoading]);
  const g = r.useMemo(() => {
    var e;
    var t;
    if (referenceCharacterLoading) {
      return undefined;
    }
    if (
      (e = d == null || (t = d.extra) == null ? undefined : t.imageUrl) != null
    ) {
      return e;
    }
    if (character == null) {
      return undefined;
    }
    return character.url;
  }, [character, d, referenceCharacterLoading]);
  const v = r.useCallback(
    (e) => {
      reportSwitchCharacter();
      selectSpeakingCharacter(e);
    },
    [selectSpeakingCharacter, reportSwitchCharacter],
  );
  const [x, setX] = r.useState(false);
  const [f, setF] = r.useState(false);
  const N = r.useMemo(() => {
    if (speakingCharacterOptions.length) {
      return i.jsx("span", {
        className: _k("arrow-icon-ah0Weg", {
          "rotated-_ATdpu": x,
        }),
        children: i.jsx(A.YxV, {}),
      });
    }
    return null;
  }, [speakingCharacterOptions.length, x]);
  const R = r.useMemo(() => {
    if (x) {
      return {
        popupVisible: false,
      };
    }
    return {};
  }, [x]);
  r.useEffect(() => {
    if (
      speakingCharacterOptions.length &&
      !isFirstTimeMultipleFacesDetected()
    ) {
      setF(true);
      recordIsFirstTimeMultipleFacesDetected();
      var e = setTimeout(() => {
        setF(false);
      }, 3000);
      return () => clearTimeout(e);
    }
  }, [
    isFirstTimeMultipleFacesDetected,
    recordIsFirstTimeMultipleFacesDetected,
    speakingCharacterOptions.length,
  ]);
  const P = r.useMemo(
    () => ({
      popupAlign: {
        bottom: 8,
      },
    }),
    [],
  );
  const w = r.useMemo(
    () =>
      i.jsx(y.X, {
        src: j.m(g, null, {
          logType: "js.href/src",
          reportOnly: "false",
          blackConfig: "{}",
          configMode: "merge",
          isCloseSSRReport: true,
          bid: "cc_dreamina",
          region: "cn",
          urlLimit: "-1",
          htmlLimit: "-1",
          isSaveValidUrl: false,
          isRuntimeLog: false,
          isDOMParser: false,
          escapeRule: "escape-report",
          reportUrl:
            "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
          htmlparserOptions: "{}",
          scmBranch: "-",
          scmName: "-",
          scmVersion: "-",
          webpackPluginVersion: "3.6.0",
          filename:
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWFtSXlO$EJh$np$d1R*Z*tiR0p0$m5sWld*SjJZMms1-0dKd$$te*pi$FZvWWtNNWJWcFhSakJr$0$wc1kzaz$hMkZ-WkhCa1IwWnp%RmRvT$dKWFJu$k1WMlJzWW0x$2$WbFl$blpq-$Rsc$lqSXhkMkl5Tld4aWJsSjZ%REpT-0ZveWJEQlpWM2QwW$$o$2R*bFhOSFJhTWxaM$dsaEthR1JIT1hsT$dFSj$Zakl4ZDJSRE1Xe*FSMnd3WWpOSmRscEhiRz$o$0ZKb1lrTXhiMlJ-T$doaWF%Rn$Xb*Mx-kdOdFJqQmlNM*wwWXpOQ2J*cFh%bTlN$0ZKb1duazFNR016-%doamJX%XhZM2M5%FE9PQ",
        }),
        contentType: character == null ? undefined : character.type,
        label,
        active: x,
        triggerProps: R,
        className: _k({
          "selected-media-tag-n5OVLj": speakingCharacterOptions.length,
        }),
      }),
    [
      g,
      character == null ? undefined : character.type,
      label,
      x,
      R,
      speakingCharacterOptions.length,
    ],
  );
  const triggerElement = r.useMemo(
    () =>
      i.jsx(M.A, {
        className: "tooltip-quW6m4",
        content: m.Ay.t("web_avatar_character_select_tip", {}, "选择角色说话"),
        position: "top",
        showArrow: true,
        popupVisible: f,
        triggerProps: P,
        children: i.jsxs("span", {
          className: _k("speech-tag-qPsF81", {
            "selected-background-jRLpp0": speakingCharacterOptions.length,
          }),
          children: [w, N],
        }),
      }),
    [N, w, P, speakingCharacterOptions.length, f],
  );
  if (speakingCharacterOptions.length) {
    return i.jsx(T.H, {
      triggerElement,
      options: speakingCharacterOptions,
      value: speakingCharacterFaceImageUri,
      onChange: v,
      onVisibleChange: setX,
    });
  }
  return triggerElement;
});
const R = r.memo(function (e) {
  const { node } = e;
  const { type } = node.attrs;
  const a = r.useMemo(
    () => ({
      prompt: () => i.jsx(f, {}),
      speech: () => i.jsx(N, {}),
    }),
    [],
  );
  const o = r.useMemo(() => {
    if (typeof type === "string" && type in a) {
      return a[type];
    }
    return null;
  }, [a, type]);
  return i.jsx(x.VR, {
    as: "span",
    className: "paragraph-tag-node-view-Uvke5_",
    children: o == null ? undefined : o(),
  });
});
const leadingNode = b.x.extend({
  name: "paragraph-tag",
  addAttributes: () => ({
    type: {
      default: "prompt",
    },
  }),
  addNodeView: () => x.gu(R),
});
const z = r.memo(function (e) {
  const { className } = e;
  const t = E._(e, ["className"]);
  return i.jsx(
    D.b,
    o._(
      a._(
        {
          size: "mini",
          shape: "circle",
        },
        t,
      ),
      {
        className: _k("audio-player-button-HIFnTA", className),
      },
    ),
  );
});
const L = s.PA(function () {
  const { digitalHumanGeneratorManager } = h.h(p.V);
  const {
    speechToSpeechManager,
    voiceManager,
    reportManager: { reportPlayUploadAudio },
  } = digitalHumanGeneratorManager;
  const { removeOriginalAudio } = speechToSpeechManager;
  const {
    audio,
    metadata: { userTriggeredSpeechAudioDataLoading },
    playSpeechAudio,
    pauseSpeechAudio,
  } = voiceManager;
  const playing = V.i(audio);
  const m = F.M(audio);
  const _ = I.Q(audio);
  const g = r.useMemo(
    () =>
      i.jsx(O.q, {
        loading: userTriggeredSpeechAudioDataLoading,
        playing,
      }),
    [userTriggeredSpeechAudioDataLoading, playing],
  );
  const v = r.useCallback(() => {
    playSpeechAudio();
    reportPlayUploadAudio();
  }, [playSpeechAudio, reportPlayUploadAudio]);
  const x = r.useMemo(() => i.jsx(A.gzW, {}), []);
  return i.jsxs("span", {
    className: "audio-player-gsRqM9",
    children: [
      i.jsx(z, {
        icon: g,
        onClick: playing ? pauseSpeechAudio : v,
      }),
      i.jsxs("span", {
        className: "audio-player-time-pmVghe",
        children: [
          i.jsx("span", {
            className: "audio-player-current-time-kgBrs2",
            children: W.X(m, "mm:ss"),
          }),
          i.jsx("span", {
            className: "audio-player-time-separator-Zz2Olu",
            children: "/",
          }),
          i.jsx("span", {
            className: "audio-player-duration-L15pfN",
            children: W.X(Math.round(_), "mm:ss"),
          }),
        ],
      }),
      i.jsx($.M, {
        size: "mini",
        icon: x,
        onClick: removeOriginalAudio,
      }),
    ],
  });
});
const B = r.memo(function () {
  return i.jsx(x.VR, {
    as: "span",
    children: i.jsx(L, {}),
  });
});
const U = "audio-player";
const q = w.bP.create({
  name: U,
  group: "inline",
  inline: true,
  atom: true,
  selectable: false,
  parseHTML: () => [
    {
      tag: "span[data-audio-player]",
    },
  ],
  renderHTML(e) {
    const { HTMLAttributes } = e;
    return [
      "span",
      w.KV(HTMLAttributes, {
        "data-audio-player": "",
      }),
    ];
  },
  addNodeView: () => x.gu(B),
  addStorage: () => ({
    previousValidSelection: null,
  }),
  addKeyboardShortcuts: () => ({
    Backspace: (e) => {
      var n;
      var { editor } = e;
      var { selection } = editor.state;
      var { $from } = selection;
      return (
        selection.empty &&
        ((n = $from.nodeBefore) == null ? undefined : n.type.name) === U
      );
    },
    Delete: (e) => {
      var n;
      var { editor } = e;
      var { selection } = editor.state;
      var { $to } = selection;
      return (
        selection.empty &&
        ((n = $to.nodeAfter) == null ? undefined : n.type.name) === U
      );
    },
  }),
  onSelectionUpdate() {
    let e;
    let n;
    let t;
    const { state, view, options } = this.editor;
    const { doc, selection, tr } = state;
    const { $from, $to } = selection;
    const { previousValidSelection } = this.storage;
    const { editable } = options;
    if (!editable) {
      this.storage.previousValidSelection = null;
      return;
    }
    if (
      ((e = $from.nodeAfter) == null ? undefined : e.type.name) === U ||
      ((n = $to.nodeBefore) == null ? undefined : n.type.name) === U
    ) {
      tr.setSelection(
        S.U3.create(
          doc,
          (t =
            previousValidSelection == null
              ? undefined
              : previousValidSelection.from) != null
            ? t
            : doc.content.size,
          previousValidSelection == null
            ? undefined
            : previousValidSelection.to,
        ),
      );
      view.dispatch(tr);
      return;
    }
    this.storage.previousValidSelection = selection;
  },
  onBlur() {
    this.storage.previousValidSelection = null;
  },
});
const J = s.PA(function () {
  const { digitalHumanGeneratorManager } = h.h(p.V);
  const {
    metadata: { isPromptEnabled, promptEditorReadOnly },
    data: { prompt },
    changePrompt,
    textToSpeechManager,
    voiceManager,
    taskSubmissionManager: { submit },
    reportManager: { reportActivate, reportEnterScript },
  } = digitalHumanGeneratorManager;
  const {
    data: { text },
    updateText,
  } = textToSpeechManager;
  const {
    metadata: { speechSourceType },
  } = voiceManager;
  const C = r.useMemo(() => text.split("\n"), [text]);
  const A = r.useMemo(() => prompt.split("\n"), [prompt]);
  const value = r.useMemo(
    () => ({
      type: c.y.name,
      content: [
        {
          type: u.f.name,
          content: [
            {
              type: leadingNode.name,
              attrs: {
                type: "speech",
              },
            },
            ...(speechSourceType === "text-to-speech" && C.length > 0 && C[0]
              ? [
                  {
                    type: d.A.name,
                    text: C[0],
                  },
                ]
              : []),
            ...(speechSourceType === "speech-to-speech"
              ? [
                  {
                    type: q.name,
                  },
                ]
              : []),
          ],
        },
        ...(speechSourceType === "text-to-speech"
          ? C.slice(1).map((e) =>
              a._(
                {
                  type: u.f.name,
                },
                e
                  ? {
                      content: [
                        {
                          type: d.A.name,
                          text: e,
                        },
                      ],
                    }
                  : {},
              ),
            )
          : []),
        ...(isPromptEnabled
          ? [
              {
                type: u.f.name,
                content: [
                  {
                    type: leadingNode.name,
                    attrs: {
                      type: "prompt",
                    },
                  },
                  ...(A.length > 0 && A[0]
                    ? [
                        {
                          type: d.A.name,
                          text: A[0],
                        },
                      ]
                    : []),
                ],
              },
              ...A.slice(1).map((e) =>
                a._(
                  {
                    type: u.f.name,
                  },
                  e
                    ? {
                        content: [
                          {
                            type: d.A.name,
                            text: e,
                          },
                        ],
                      }
                    : {},
                ),
              ),
            ]
          : []),
      ],
    }),
    [isPromptEnabled, speechSourceType, C, A],
  );
  const N = r.useCallback(
    (e) => {
      var t;
      var a;
      var o =
        (t =
          (a = e.content) == null
            ? undefined
            : a.filter((e) => e.type === u.f.name)) != null
          ? t
          : [];
      var i = o.map((e) => {
        var n;
        if ((n = e.content) == null) {
          return undefined;
        }
        return n
          .flatMap((e) => {
            if (e.type === d.A.name) {
              return [e.text];
            }
            return [];
          })
          .join("");
      });
      var [, r] = o.flatMap((e, n) => {
        var t;
        if (
          ((t = e.content) == null ? undefined : t[0].type) === leadingNode.name
        ) {
          return [n];
        }
        return [];
      });
      var s = i.slice(0, r).join("\n");
      var c = i.slice(r).join("\n");
      if (speechSourceType === "text-to-speech") {
        updateText(s);
      }
      if (isPromptEnabled) {
        changePrompt(c);
      }
    },
    [isPromptEnabled, speechSourceType, changePrompt, updateText],
  );
  const R = r.useMemo(
    () => ({
      speech: m.Ay.t(
        "web_avatar_talking_content_placeholder",
        {},
        "请输入你希望角色说出的内容",
      ),
      prompt: m.Ay.t(
        "web_avatar_talking_prompt_placeholder",
        {},
        "(可选) 添加动作描述和镜头语言，如：镜头推进，他摘下眼镜，对着镜头笑着说",
      ),
    }),
    [],
  );
  const extensions = r.useMemo(
    () => [
      q,
      v.A.configure({
        placeholder: (e) => {
          var { node } = e;
          var firstChild = node.content.firstChild;
          if (
            (firstChild == null ? undefined : firstChild.type.name) !==
            leadingNode.name
          ) {
            return "";
          }
          var { type } = firstChild.attrs;
          if (typeof type === "string" && type in R) {
            return R[type];
          }
          return "";
        },
        leadingNode,
      }),
      leadingNode,
    ],
    [R],
  );
  const onSubmit = _.D(submit);
  return i.jsx(g.k, {
    className: "prompt-editor-oVgx0I",
    extensions,
    readOnly: promptEditorReadOnly,
    value,
    onChange: N,
    onSubmit,
    onFocus: reportActivate,
    onBlur: reportEnterScript,
  });
});
var Z = r.memo(function (e) {
  return i.jsx(
    l.d,
    o._(a._({}, e), {
      children: i.jsx(J, {}),
    }),
  );
});
export { Z as J };
