import a from "z8";
import r from "bT";
import i from "ED";
import o from "Avb";
import { q as q_1 } from "./module-h4L.js";
import c from "oa";
import u from "KkU";
import d from "wF";
import m from "yw";
import p from "Gn4";
import g from "bk";
import _f from "xb";
import _ from "Qey";
import y from "Gvb";
import k from "qbo";
import C from "wsY";
import j from "fHC";
import w from "SNb";
import M from "qa";
import T from "oq";
import N from "dw4";
import R from "O6V";
import S from "pr";
import "Vx";
import W from "Ix";
import E from "CkM";
import { i as i_1 } from "./module-Qrs.js";
import O from "Y4p";
import z from "Pp";
import Q from "n3Q";
import B from "iPS";
import X from "mZ";
import G from "jgv";
import et from "Qxy";
import en from "wFV";
import el from "fSn";
import eu from "E67";
import ed from "LRw";
import "p1N";
import eh from "Idi";
const s = i.PA(function () {
  const { voiceManager } = r.useContext(q_1);
  const {
    metadata: { voiceCategoryOptions },
    data: { voiceCategoryKey },
    selectVoiceCategory,
  } = voiceManager;
  return a.jsx(o.g, {
    className: "voice-category-tabs-cG1uVo",
    options: voiceCategoryOptions,
    value: voiceCategoryKey,
    onChange: selectVoiceCategory,
  });
});
const v = i.PA(function (e) {
  const { type, label, options } = e;
  const { voiceManager } = r.useContext(q_1);
  const {
    data: { voiceFilterValues },
    selectVoiceFilterValue,
  } = voiceManager;
  const arrowIcon = r.useMemo(
    () =>
      a.jsx(m.YxV, {
        size: 16,
      }),
    [],
  );
  const clearIcon = r.useMemo(
    () =>
      a.jsx(m.cOJ, {
        size: 16,
      }),
    [],
  );
  const v = r.useMemo(
    () => ({
      className: "voice-filter-select-dropdown-eMN9qH",
    }),
    [],
  );
  const h = r.useCallback(
    (e) => {
      selectVoiceFilterValue(type, e);
    },
    [type, selectVoiceFilterValue],
  );
  const onClear = r.useCallback(() => {
    selectVoiceFilterValue(type, undefined);
  }, [type, selectVoiceFilterValue]);
  return a.jsx(p.V, {
    allowClear: true,
    arrowIcon,
    clearIcon,
    className: "voice-filter-select-larOvl",
    triggerProps: v,
    placeholder: label,
    options,
    value: voiceFilterValues[type],
    onChange: h,
    onClear,
  });
});
const h = i.PA(function () {
  let e;
  const {
    metadata: { voiceFilters },
  } = d.h(u.h);
  const { voiceManager } = r.useContext(q_1);
  const {
    metadata: { categoryVoicesLoading, eligibleVoices },
  } = voiceManager;
  if (categoryVoicesLoading || eligibleVoices.length) {
    return a.jsx("div", {
      className: "voice-filters-yaugf2",
      children:
        (e = voiceFilters.data) == null
          ? undefined
          : e.map((e) => a.jsx(v, c._({}, e), e.type)),
    });
  }
  return null;
});
const x = r.memo(function (e) {
  const { children } = e;
  const { voiceCloningManager } = d.h(u.h);
  const {
    metadata: { acceptedAudioFileTypes },
  } = voiceCloningManager;
  const { voiceManager, reportParams: { importMaterialParams } = {} } =
    r.useContext(q_1);
  const {
    metadata: { isVoiceCloningSupported },
    importVoicesFromLocal,
  } = voiceManager;
  const h = r.useCallback(
    (e) => {
      importVoicesFromLocal(e, {
        reportParams: {
          importMaterialParams: g._(c._({}, importMaterialParams), {
            actionType: "drag",
          }),
        },
      });
    },
    [importVoicesFromLocal, importMaterialParams],
  );
  const {
    setNodeRef,
    isDragAccepted,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = y.t({
    droppableId: "content-generator-voice-grid-drag-upload",
    accept: acceptedAudioFileTypes,
    multiple: true,
    onChange: h,
  });
  if (isVoiceCloningSupported) {
    return a.jsxs("div", {
      ref: setNodeRef,
      className: "container-j7gNFU",
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop,
      children: [
        children,
        a.jsxs("div", {
          className: _f("upload-area-MLcJv6", {
            "active-LO7QsS": isDragAccepted,
          }),
          children: [
            a.jsx(m.nre, {
              className: "upload-icon-dKHupj",
            }),
            a.jsx("span", {
              className: "upload-tip-OtAJIc",
              children: _.Ay.t(
                "web_generator_audio_drag_to_upload_hint",
                {},
                "松手可上传音色",
              ),
            }),
          ],
        }),
      ],
    });
  }
  return a.jsx(a.Fragment, {
    children,
  });
});
const A = i.PA(function () {
  const { voiceManager } = r.useContext(q_1);
  const {
    data: { renamedVoiceName },
    updateRenamedVoiceName,
  } = voiceManager;
  return a.jsx(R.X, {
    className: "input-rPa5uZ",
    maxLength: 50,
    value: renamedVoiceName,
    onChange: updateRenamedVoiceName,
  });
});
const F = r.memo(
  r.forwardRef(function (e, ref) {
    const {
      className,
      primaryButton,
      label,
      controls,
      active = false,
      disabled = false,
      onClick,
    } = e;
    const m = M._(e, [
      "className",
      "primaryButton",
      "label",
      "controls",
      "active",
      "disabled",
      "onClick",
    ]);
    const p = r.useCallback(
      (e) => {
        if (!(disabled || onClick == null)) {
          onClick(e);
        }
      },
      [disabled, onClick],
    );
    return a.jsxs(
      "div",
      g._(
        c._(
          {
            ref,
          },
          m,
        ),
        {
          className: _f("voice-grid-cell-content-Pnx2tF", className, {
            "active-BFDrbn": active,
            "disabled-gZTnWZ": disabled,
          }),
          onClick: p,
          children: [
            primaryButton,
            a.jsx("div", {
              className: "voice-grid-cell-label-RnMfVo",
              role: onClick ? "button" : undefined,
              tabIndex: onClick && !disabled ? 0 : undefined,
              onKeyDown: S.q,
              "aria-disabled": disabled,
              "aria-pressed": onClick ? active : undefined,
              children: label,
            }),
            controls,
          ],
        },
      ),
    );
  }),
);
const I = r.memo(function (e) {
  const { voice } = e;
  const { isFavorite } = voice;
  const i = d.h(u.h);
  const { voiceManager } = r.useContext(q_1);
  const { favoriteVoice } = voiceManager;
  const {
    metadata: { isVoiceFavoriteSupported },
  } = i;
  const p = r.useMemo(() => a.jsx(m.M1e, {}), []);
  const v = r.useMemo(() => a.jsx(m.Bfx, {}), []);
  const h = r.useMemo(() => {
    if (isFavorite) {
      return v;
    }
    return p;
  }, [isFavorite, p, v]);
  const g = r.useMemo(() => {
    if (isFavorite) {
      return _.Ay.t(
        "web_generator_audio_window_unfavorite_tooltip",
        {},
        "取消收藏",
      );
    }
    return _.Ay.t("web_generator_audio_window_favorite_tooltip", {}, "收藏");
  }, [isFavorite]);
  const f = r.useCallback(
    (e) => {
      e.stopPropagation();
      favoriteVoice(voice, !isFavorite);
    },
    [voice, isFavorite, favoriteVoice],
  );
  if (
    !isVoiceFavoriteSupported ||
    (C.Ci(voice) && voice.voiceCloning.status !== j.$Q.Success) ||
    C.aY(voice) ||
    C.tx(voice)
  ) {
    return null;
  }
  return a.jsx(W.A, {
    content: g,
    children: a.jsx(E.M, {
      className: _f("favorite-button-rTa6o2", {
        "favorite-EwMwno": isFavorite,
      }),
      icon: h,
      onClick: f,
    }),
  });
});
const L = r.memo(function (e) {
  const { voice } = e;
  const n = r.useMemo(() => {
    if (C.C7(voice) && voice.emotions.length) {
      return _.Ay.t("web_audio_voice_tag_specs_multi_emo", {}, "多情感");
    }
  }, [voice]);
  if (n) {
    return a.jsx("div", {
      className: "tag-TsJlt9",
      children: n,
    });
  }
  return null;
});
const D = "button-nk7SFz";
const P = r.memo(function (e) {
  const { voice, controlButton, active = false, className } = e;
  const l = M._(e, ["voice", "controlButton", "active", "className"]);
  const { isFavorite } = voice;
  const u = r.useMemo(() => {
    if (isFavorite || active) {
      return null;
    }
    return a.jsx(L, {
      voice,
    });
  }, [voice, isFavorite, active]);
  const d = r.useMemo(
    () =>
      a.jsx(I, {
        voice,
      }),
    [voice],
  );
  const p = r.useMemo(
    () => ({
      "--voice-grid-cell-favorite-button-visible": isFavorite ? "1" : undefined,
    }),
    [isFavorite],
  );
  return a.jsxs(
    "div",
    g._(c._({}, l), {
      className: _f("controls-_kN9vm", className),
      children: [
        a.jsxs("div", {
          className: "content-Nxqfdq",
          children: [
            u,
            active
              ? a.jsx(m.iWP, {
                  className: "check-Sxtrwd",
                  size: 16,
                })
              : null,
          ],
        }),
        a.jsxs("div", {
          className: "active-content-K8OgzM",
          children: [
            a.jsx("div", {
              className: _f(D, "favorite-button-ni4FkD"),
              style: p,
              children: d,
            }),
            a.jsx("div", {
              className: _f(D, "control-button-n9Cbtz"),
              children: controlButton,
            }),
          ],
        }),
      ],
    }),
  );
});
const V = r.memo(function (e) {
  const { className } = e;
  const n = M._(e, ["className"]);
  return a.jsx(
    z.b,
    g._(
      c._(
        {
          size: "mini",
          shape: "circle",
        },
        n,
      ),
      {
        className: _f("primary-button-WEIgTl", className),
      },
    ),
  );
});
const H = i.PA(function (e) {
  const { voice, onClick } = e;
  const i = M._(e, ["voice", "onClick"]);
  const { voiceManager } = r.useContext(q_1);
  const {
    audio,
    metadata: { userTriggeredSpeechAudioDataLoading, isMultipleSelection },
    data: { focusedVoiceId, selectedVoiceIds },
    playSpeechAudio,
    pauseSpeechAudio,
    focusVoice,
  } = voiceManager;
  const b = r.useMemo(
    () => C.Ci(voice) && voice.voiceCloning.status === j.$Q.Generating,
    [voice],
  );
  const loading = r.useMemo(
    () =>
      (voice.id === focusedVoiceId && userTriggeredSpeechAudioDataLoading) || b,
    [voice.id, focusedVoiceId, userTriggeredSpeechAudioDataLoading, b],
  );
  const playing = i_1(voice.id === focusedVoiceId ? audio : null);
  const x = r.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      if (voice.id !== focusedVoiceId) {
        if (!isMultipleSelection && !selectedVoiceIds.has(voice.id)) {
          return;
        }
        e.stopPropagation();
        focusVoice(voice.id);
        return;
      }
      e.stopPropagation();
      if (playing) {
        pauseSpeechAudio();
      } else {
        playSpeechAudio();
      }
    },
    [
      playing,
      voice.id,
      focusedVoiceId,
      isMultipleSelection,
      selectedVoiceIds,
      onClick,
      playSpeechAudio,
      pauseSpeechAudio,
      focusVoice,
    ],
  );
  const k = r.useMemo(
    () =>
      a.jsx(O.q, {
        loading,
        playing,
      }),
    [loading, playing],
  );
  return a.jsx(
    V,
    g._(c._({}, i), {
      icon: k,
      onClick: x,
    }),
  );
});
const $ = {};
const J = r.memo(function (e) {
  const { className, onClick, onKeyDown } = e;
  const o = M._(e, ["className", "onClick", "onKeyDown"]);
  const l = r.useCallback(
    (e) => {
      e.stopPropagation();
      if (onClick != null) {
        onClick(e);
      }
    },
    [onClick],
  );
  const onKeyDown_1 = r.useCallback(
    (e) => {
      if (onKeyDown != null) {
        onKeyDown(e);
      }
      if (e.key === "Escape") {
        return void e.stopPropagation();
      }
    },
    [onKeyDown],
  );
  return a.jsx(
    E.M,
    g._(c._({}, o), {
      className: _f(className, $.controlButton),
      onClick: l,
      onKeyDown: onKeyDown_1,
    }),
  );
});
const U = r.memo(function (e) {
  const { voice } = e;
  const n = M._(e, ["voice"]);
  const {
    voiceCloning: { status },
  } = voice;
  const o = r.useMemo(() => a.jsx(m.GI1, {}), []);
  if (C.aY(voice) || C.tx(voice) || status === j.$Q.Generating) {
    return null;
  }
  return a.jsx(
    J,
    c._(
      {
        icon: o,
      },
      n,
    ),
  );
});
const K = i.PA(function (e) {
  const { voice } = e;
  const {
    id,
    name,
    voiceCloning: { status },
  } = voice;
  const { voiceManager } = r.useContext(q_1);
  const {
    data: { selectedVoiceIds },
    toggleVoice,
    renameClonedVoice,
    deleteClonedVoice,
  } = voiceManager;
  const y = selectedVoiceIds.has(id);
  const xRef = r.useRef(null);
  const k = r.useMemo(
    () =>
      a.jsx(H, {
        voice,
      }),
    [voice],
  );
  const [C, setC] = r.useState(false);
  const S = r.useCallback(() => {
    setC((e) => !e);
  }, []);
  const W = r.useCallback((e) => {
    if (e.key === "Escape") {
      return void setC(false);
    }
  }, []);
  const disabled = r.useMemo(() => status === j.$Q.Generating, [status]);
  const I = r.useMemo(() => {
    if (disabled) {
      return _.Ay.t(
        "web_new_character_loading_create_sound",
        {},
        "音色生成中···",
      );
    }
    return name;
  }, [name, disabled]);
  const L = r.useMemo(
    () =>
      a.jsx(U, {
        voice,
        active: C,
        onClick: S,
        onKeyDown: W,
      }),
    [voice, C, S, W],
  );
  const D = r.useMemo(
    () =>
      a.jsx(P, {
        voice,
        controlButton: L,
        active: y,
      }),
    [voice, L, y],
  );
  const Z = r.useCallback(() => {
    toggleVoice(id);
  }, [toggleVoice, id]);
  const O = r.useMemo(() => [], []);
  const triggerElement = r.useMemo(
    () =>
      a.jsx(F, {
        ref: xRef,
        primaryButton: k,
        label: I,
        controls: D,
        active: y,
        disabled,
        onClick: Z,
      }),
    [k, I, D, y, disabled, Z],
  );
  const V = r.useMemo(
    () => ({
      className: "trigger-sZLa4S",
      position: "bl",
      popupAlign: {
        top: w.vw,
        bottom: w.vw,
      },
    }),
    [],
  );
  const options = r.useMemo(
    () => [
      {
        value: "rename",
        icon: a.jsx(m.GI1, {}),
        label: _.Ay.t("web_new_character_title_rename_sound", {}, "重命名"),
      },
      {
        value: "delete",
        icon: a.jsx(m.xV8, {}),
        label: _.Ay.t("web_delete_popup_btn_delete", {}, "删除"),
      },
    ],
    [],
  );
  var J = r.useCallback((e) => {
    if (e && e !== document.body) {
      if (e.classList.contains("lv-popover")) {
        return e;
      }
      return J(e.parentElement);
    }
    return document.body;
  }, []);
  const K = r.useMemo(
    () => ({
      modalProps: {
        getPopupContainer: () => J(xRef.current),
      },
    }),
    [J],
  );
  const Q = r.useCallback(
    (e) => {
      if (e === "rename") {
        return renameClonedVoice(voice, (e) =>
          ((e, t) => {
            var { containerService, voiceManager, voice } = e;
            var { modalProps } = t != null ? t : {};
            var s = modalProps != null ? modalProps : {};
            var { className, onOk, onCancel, afterClose } = s;
            var h = M._(s, ["className", "onOk", "onCancel", "afterClose"]);
            var { updateRenamedVoiceName, voiceReportManager } = voiceManager;
            var { reportRenameVoiceClone } = voiceReportManager;
            updateRenamedVoiceName(voice.name);
            var { promise, resolve } = Promise.withResolvers();
            var j = T.a.confirm(
              g._(
                c._(
                  {
                    title: _.Ay.t(
                      "web_new_character_title_rename_sound",
                      {},
                      "重命名",
                    ),
                    content: a.jsx(d.Z, {
                      instantiationService: containerService,
                      children: a.jsx(q_1.Provider, {
                        value: {
                          voiceManager,
                        },
                        children: a.jsx(A, {}),
                      }),
                    }),
                  },
                  h,
                ),
                {
                  className: _f("voice-rename-modal-RfcS6M", className),
                  onOk: () => {
                    var {
                      data: { renamedVoiceName },
                    } = voiceManager;
                    reportRenameVoiceClone();
                    resolve(renamedVoiceName);
                    if (onOk != null) {
                      onOk();
                    }
                  },
                  onCancel: () => {
                    resolve(undefined);
                    if (onCancel != null) {
                      onCancel();
                    }
                  },
                  afterClose: () => {
                    updateRenamedVoiceName(undefined);
                    if (afterClose != null) {
                      afterClose();
                    }
                  },
                },
              ),
            );
            promise.finally(
              N.mJ(
                () => {
                  var e;
                  if ((e = voiceManager.data.renamedVoiceName) == null) {
                    return undefined;
                  }
                  return e.trim();
                },
                (e) => {
                  j.update({
                    okButtonProps: g._(c._({}, h.okButtonProps), {
                      disabled: !e,
                    }),
                  });
                },
                {
                  fireImmediately: true,
                },
              ),
            );
            return promise;
          })(e, K),
        );
      }
      return deleteClonedVoice(voice, (e) =>
        ((e, t) => {
          var { voice } = e;
          var { name } = voice;
          var { modalProps } = t != null ? t : {};
          var i = modalProps != null ? modalProps : {};
          var { className, onOk, onCancel } = i;
          var u = M._(i, ["className", "onOk", "onCancel"]);
          var { promise, resolve } = Promise.withResolvers();
          T.a.confirm(
            g._(
              c._(
                {
                  title: _.Ay.t(
                    "web_popup_title_delete_confirm",
                    {
                      name,
                    },
                    "确认删除“{name}”",
                  ),
                  content: _.Ay.t(
                    "web_new_deleted_voice_cannot_find_back",
                    {},
                    "删除的音色将无法找回",
                  ),
                },
                u,
              ),
              {
                className: _f("voice-delete-modal-bKjjhJ", className),
                onOk: () => {
                  resolve(true);
                  if (onOk != null) {
                    onOk();
                  }
                },
                onCancel: () => {
                  resolve(false);
                  if (onCancel != null) {
                    onCancel();
                  }
                },
              },
            ),
          );
          return promise;
        })(e, K),
      );
    },
    [renameClonedVoice, deleteClonedVoice, voice, K],
  );
  return a.jsx(p.V, {
    trigger: O,
    triggerElement,
    triggerProps: V,
    options,
    popupVisible: C,
    onChange: Q,
    onVisibleChange: setC,
  });
});
const q = i.PA(function (e) {
  const { voice } = e;
  const n = M._(e, ["voice"]);
  const { isSpeedAdjustmentEnabled, emotions } = voice;
  const l = r.useMemo(() => {
    if (isSpeedAdjustmentEnabled || emotions.length) {
      return a.jsx(m.Da7, {});
    }
    return null;
  }, [isSpeedAdjustmentEnabled, emotions.length]);
  if (l) {
    return a.jsx(
      J,
      c._(
        {
          icon: l,
        },
        n,
      ),
    );
  }
  return null;
});
const Y = i.PA(function (e) {
  let t;
  let n;
  const { voice, emotion, onClick } = e;
  const { type } = emotion;
  const { voiceManager } = r.useContext(q_1);
  const {
    data: { voiceIdToEmotion },
  } = voiceManager;
  const m =
    (t = (n = voiceIdToEmotion[voice.id]) == null ? undefined : n.type) != null
      ? t
      : "";
  const p = r.useCallback(() => {
    if (onClick != null) {
      onClick(emotion);
    }
  }, [emotion, onClick]);
  return a.jsx(G.s, {
    label: _.Ay.t("character_sound_emotion_".concat(type || "default")),
    value: type,
    active: m === type,
    onClick: p,
  });
});
const ee = i.PA(function (e) {
  const { voice } = e;
  const { emotions } = voice;
  const { voiceManager } = r.useContext(q_1);
  const { selectVoiceEmotion } = voiceManager;
  const s = r.useCallback(
    (e) => {
      selectVoiceEmotion(voice.id, e);
    },
    [selectVoiceEmotion, voice.id],
  );
  if (emotions.length) {
    return a.jsx(X.R, {
      title: _.Ay.t("web_new_character_title_sound_emotion", {}, "情绪"),
      children: a.jsx("div", {
        className: "emotions-D_vwlV",
        children: emotions.map((emotion) =>
          a.jsx(
            Y,
            {
              voice,
              emotion,
              onClick: s,
            },
            emotion.type,
          ),
        ),
      }),
    });
  }
  return null;
});
const ea = {
  "speed-wrapper": "speed-wrapper-vJLXoH",
  speedWrapper: "speed-wrapper-vJLXoH",
  "speed-text": "speed-text-HhCTHp",
  speedText: "speed-text-HhCTHp",
};
const er = i.PA(function (e) {
  let t;
  const { voice } = e;
  const { voiceManager } = r.useContext(q_1);
  const {
    data: { voiceIdToSpeed },
    updateSpeedByVoiceId,
    confirmVoiceSpeed,
  } = voiceManager;
  const u = (t = voiceIdToSpeed[voice.id]) != null ? t : et.$w;
  const d = r.useCallback(
    (e) => {
      updateSpeedByVoiceId(voice.id, e);
    },
    [updateSpeedByVoiceId, voice.id],
  );
  if (voice.isSpeedAdjustmentEnabled) {
    return a.jsx(X.R, {
      title: _.Ay.t("web_character_title_speech_speed", {}, "说话速度"),
      children: a.jsxs("div", {
        className: ea.speedWrapper,
        children: [
          a.jsx(en.M, {
            "aria-label": _.Ay.t(
              "web_character_title_speech_speed",
              {},
              "说话速度",
            ),
            min: 0.8,
            max: 2,
            step: 0.1,
            value: u,
            onChange: d,
            onAfterChange: confirmVoiceSpeed,
            className: ea.contentGeneratorSlider,
          }),
          a.jsxs("div", {
            className: ea.speedText,
            children: [u, "x"],
          }),
        ],
      }),
    });
  }
  return null;
});
const ei = r.memo(function (e) {
  return a.jsxs(B.Y, {
    children: [a.jsx(er, c._({}, e)), a.jsx(ee, c._({}, e))],
  });
});
const eo = i.PA(function (e) {
  const { voice } = e;
  const { id, name } = voice;
  const { voiceManager } = r.useContext(q_1);
  const {
    data: { selectedVoiceIds },
    toggleVoice,
    voiceReportManager,
  } = voiceManager;
  const { reportClickSettings } = voiceReportManager;
  const m = selectedVoiceIds.has(id);
  const p = r.useMemo(
    () =>
      a.jsx(H, {
        voice,
      }),
    [voice],
  );
  const [v, setV] = r.useState(false);
  const g = r.useCallback(() => {
    setV((e) => !e);
    reportClickSettings();
  }, [reportClickSettings]);
  const f = r.useCallback((e) => {
    if (e.key === "Escape") {
      return void setV(false);
    }
  }, []);
  const b = r.useMemo(
    () =>
      a.jsx(q, {
        voice,
        active: v,
        onClick: g,
        onKeyDown: f,
      }),
    [voice, v, g, f],
  );
  const _ = r.useMemo(
    () =>
      a.jsx(P, {
        voice,
        controlButton: b,
        active: m,
      }),
    [voice, b, m],
  );
  const y = r.useMemo(
    () =>
      a.jsx(ei, {
        voice,
      }),
    [voice],
  );
  const x = r.useMemo(() => [], []);
  const k = r.useMemo(
    () => ({
      position: "bl",
      popupAlign: {
        top: w.vw,
        bottom: w.vw,
      },
    }),
    [],
  );
  const C = r.useCallback(() => {
    toggleVoice(id);
  }, [toggleVoice, id]);
  const j = r.useMemo(
    () =>
      a.jsx(F, {
        primaryButton: p,
        label: name,
        controls: _,
        active: m,
        onClick: C,
      }),
    [p, name, _, m, C],
  );
  return a.jsx(Q.I, {
    className: "popover-ktWGvm",
    trigger: x,
    triggerProps: k,
    content: y,
    popupVisible: v,
    onVisibleChange: setV,
    children: j,
  });
});
const es = i.PA(function () {
  const { voiceCloningManager } = d.h(u.h);
  const {
    metadata: {
      acceptedAudioFileTypes,
      isVoiceCloningDisabled,
      voiceCloningTooltipProps,
    },
  } = voiceCloningManager;
  const { voiceManager, reportParams } = r.useContext(q_1);
  const { importVoicesFromLocal, voiceReportManager } = voiceManager;
  const { reportClickVoiceClone } = voiceReportManager;
  const f = r.useMemo(() => a.jsx(m.xZp, {}), []);
  const b = r.useMemo(
    () =>
      a.jsx(V, {
        icon: f,
      }),
    [f],
  );
  const y = r.useCallback(() => {
    reportClickVoiceClone();
    el.y({
      accept: acceptedAudioFileTypes,
      multiple: true,
      onFilesSelected: (e) =>
        importVoicesFromLocal(e, {
          reportParams,
        }),
    });
  }, [
    acceptedAudioFileTypes,
    importVoicesFromLocal,
    reportClickVoiceClone,
    reportParams,
  ]);
  return a.jsx(
    W.A,
    g._(c._({}, voiceCloningTooltipProps), {
      children: a.jsx(F, {
        primaryButton: b,
        label: _.Ay.t("character_button_create_sound", {}, "创建音色"),
        disabled: isVoiceCloningDisabled,
        onClick: y,
      }),
    }),
  );
});
const ec = r.memo(function (e) {
  const { style, children } = e;
  return a.jsx("div", {
    style,
    children,
  });
});
const em = i.PA(function (e) {
  const { className } = e;
  const { voiceCloningManager } = d.h(u.h);
  const {
    metadata: { acceptedAudioFileTypes, isVoiceCloningDisabled },
  } = voiceCloningManager;
  const { voiceManager, reportParams } = r.useContext(q_1);
  const { importVoicesFromLocal, voiceReportManager } = voiceManager;
  const { reportClickVoiceClone } = voiceReportManager;
  const h = r.useCallback(() => {
    reportClickVoiceClone();
    el.y({
      accept: acceptedAudioFileTypes,
      multiple: true,
      onFilesSelected: (e) =>
        importVoicesFromLocal(e, {
          reportParams,
        }),
    });
  }, [
    acceptedAudioFileTypes,
    importVoicesFromLocal,
    reportClickVoiceClone,
    reportParams,
  ]);
  return a.jsx(eu.d, {
    className,
    image: null,
    description: _.Ay.t(
      "character_hint_no_custom_sound",
      {},
      "你还没有创建过音色",
    ),
    children: a.jsx(ed.V, {
      disabled: isVoiceCloningDisabled,
      onClick: h,
      children: _.Ay.t("character_button_create_sound", {}, "创建音色"),
    }),
  });
});
const ep = i.PA(function (e) {
  const { className } = e;
  const { voiceManager } = r.useContext(q_1);
  const { selectVoiceCategory } = voiceManager;
  const o = r.useCallback(() => {
    selectVoiceCategory(et.MG);
  }, [selectVoiceCategory]);
  return a.jsx(eu.d, {
    className,
    image: null,
    description: _.Ay.t(
      "web_generator_audio_window_no_collection_hint",
      {},
      "你还没有收藏过音色",
    ),
    children: a.jsx(ed.V, {
      onClick: o,
      children: _.Ay.t(
        "web_generator_audio_window_no_collection_button",
        {},
        "去收藏",
      ),
    }),
  });
});
const ev = i.PA(function () {
  const { voiceManager } = r.useContext(q_1);
  const {
    metadata: { eligibleVoices },
    data: { voiceCategoryKey },
  } = voiceManager;
  if (eligibleVoices.length || voiceCategoryKey !== et.yW) {
    if (eligibleVoices.length || voiceCategoryKey !== et.Jq) {
      return a.jsx(eu.d, {
        className: "empty-JR0kD_",
      });
    }
    return a.jsx(ep, {
      className: "favorite-voice-empty-csxGJH",
    });
  }
  return a.jsx(em, {
    className: "cloned-voice-empty-IM3TU1",
  });
});
const eg = r.memo(function () {
  const e = r.useMemo(
    () =>
      a.jsx(eh.A, {
        className: "left-ROHXUD",
        image: {
          shape: "circle",
        },
      }),
    [],
  );
  const label = r.useMemo(
    () =>
      a.jsx(eh.A, {
        className: "right-m4tUqW",
        text: {
          rows: 1,
          width: "94px",
        },
      }),
    [],
  );
  return a.jsx(F, {
    disabled: true,
    primaryButton: e,
    label,
  });
});
const ef = i.PA(function () {
  const { voiceManager } = r.useContext(q_1);
  const {
    metadata: { categoryVoicesLoading, voices, isVoiceCloningSupported },
  } = voiceManager;
  const o = +!!isVoiceCloningSupported;
  const s = categoryVoicesLoading ? 20 : voices.length + o;
  const columnCount = r.useMemo(() => 4, []);
  const rowCount = r.useMemo(
    () => Math.ceil(s / columnCount),
    [s, columnCount],
  );
  const columnWidth = r.useCallback(
    (e) => {
      var { index } = e;
      if (index < columnCount - 1) {
        return 168;
      }
      return 164;
    },
    [columnCount],
  );
  const rowHeight = r.useCallback(
    (e) => {
      var { index } = e;
      if (index < rowCount - 1) {
        return 44;
      }
      return 40;
    },
    [rowCount],
  );
  const v = r.useMemo(
    () => ({
      "--content-generator-voice-grid-padding-top": `${4}px`,
      "--content-generator-voice-grid-cell-content-width": `${164}px`,
    }),
    [],
  );
  const h = r.useCallback((voice) => {
    if (C.C7(voice)) {
      return a.jsx(eo, {
        voice,
      });
    }
    return a.jsx(K, {
      voice,
    });
  }, []);
  const f = r.useCallback(
    (e) =>
      a.jsx(
        ec,
        g._(c._({}, e), {
          children: a.jsx(eg, {}),
        }),
      ),
    [],
  );
  const cellRenderer = r.useCallback(
    (e) => {
      if (categoryVoicesLoading) {
        return f(e);
      }
      var { columnIndex, rowIndex } = e;
      var l = rowIndex * columnCount + columnIndex;
      if (l >= s) {
        return null;
      }
      var d = l - o;
      var m = d >= 0 ? voices[d] : undefined;
      return a.jsx(
        ec,
        g._(c._({}, e), {
          children: m ? h(m) : a.jsx(es, {}),
        }),
      );
    },
    [s, columnCount, o, voices, categoryVoicesLoading, h, f],
  );
  if (categoryVoicesLoading || voices.length) {
    return a.jsx(k.xA, {
      cellRenderer,
      columnCount,
      columnWidth,
      rowCount,
      rowHeight,
      width: 676,
      height: 220,
      className: "voice-grid-Z8nKI9",
      style: v,
    });
  }
  return a.jsx(ev, {});
});
var eb = r.memo(function () {
  return a.jsxs("div", {
    className: "voices-DkBWDw",
    children: [
      a.jsxs("header", {
        className: "header-qfhM0L",
        children: [a.jsx(s, {}), a.jsx(h, {})],
      }),
      a.jsx(x, {
        children: a.jsx(ef, {}),
      }),
    ],
  });
});
export { eb as u };
