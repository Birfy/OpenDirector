import a from "oa";
import o from "bk";
import i from "z8";
import r from "ED";
import l from "xm3";
import s from "wF";
import c from "PSJ";
import u from "V99";
import d from "v5";
import m from "qa";
import p from "O7U";
import h from "G6S";
import _ from "gwU";
import v from "Qey";
import x from "gC";
import b from "UW";
import j from "n3";
import y from "bT";
import imageUrl from "cwe";
import M from "LVe";
import T from "KkU";
import N from "SNb";
import R from "n3Q";
import P from "h4L";
import w from "tcu";
import V from "Qrs";
import F from "Y4p";
import W from "yw";
import $ from "Akd";
const g = r.PA(function (e) {
  const { character } = e;
  const t = m._(e, ["character"]);
  const { referenceRenderProps } = t;
  const {
    metadata: {
      referenceCharacterLoading,
      referenceCharacterTooltipProps,
      acceptedCharacterFileTypes,
    },
    characterManager: {
      removeReferenceCharacter,
      importReferenceCharacterFromLocal,
    },
  } = s.h(l.V).digitalHumanGeneratorManager;
  const x = {
    loading: referenceCharacterLoading,
    onRemove: removeReferenceCharacter,
    onDropFromLocal: importReferenceCharacterFromLocal,
    accept: acceptedCharacterFileTypes,
  };
  return i.jsx(
    p.t,
    o._(
      a._(
        {
          resource: character,
          referenceRenderProps,
        },
        referenceCharacterTooltipProps,
      ),
      {
        children:
          character.type === "image"
            ? i.jsx(
                h.d,
                a._(
                  {
                    imageResource: character,
                  },
                  x,
                  t,
                ),
              )
            : i.jsx(
                _.L,
                a._(
                  {
                    videoResource: character,
                  },
                  x,
                  t,
                ),
              ),
      },
    ),
  );
});
const k = y.memo(function (e) {
  const title = v.Ay.t(
    "web_character_info_upload_title",
    {},
    "支持真人 & 动漫",
  );
  const description = v.Ay.t(
    "web_character_info_upload_desc",
    {},
    "清晰的正脸，生成效果更佳",
  );
  return i.jsx(
    M.K,
    a._(
      {
        imageUrl,
        title,
        description,
      },
      e,
    ),
  );
});
const C = r.PA(function (e) {
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const {
    metadata: { acceptedCharacterFileTypes },
    characterManager: { importReferenceCharacterFromLocal },
  } = digitalHumanGeneratorManager;
  return i.jsx(k, {
    children: i.jsx(x.I, {
      component: null,
      guardFileDrop: true,
      source: j.HH.Upload,
      children: i.jsx(
        b.L,
        a._(
          {
            accept: acceptedCharacterFileTypes,
            label: v.Ay.t("web_character_title_upload", {}, "角色"),
            onChange: importReferenceCharacterFromLocal,
          },
          e,
        ),
      ),
    }),
  });
});
const A = r.PA(function (e) {
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const { data } = digitalHumanGeneratorManager;
  const { character } = data;
  return i.jsx(
    d.V,
    o._(a._({}, e), {
      children: character
        ? i.jsx(
            g,
            {
              character,
            },
            "character",
          )
        : i.jsx(C, {}, "upload"),
    }),
  );
});
const S = r.PA(function () {
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const { voiceManager } = digitalHumanGeneratorManager;
  const value = y.useMemo(
    () => ({
      voiceManager,
      reportParams: {
        importMaterialParams: {
          modal: "lip_sync",
          position: "voice_select_panel",
        },
      },
    }),
    [voiceManager],
  );
  return i.jsx(P.q.Provider, {
    value,
    children: i.jsx(w.u, {}),
  });
});
const I = r.PA(function (e) {
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const {
    voiceManager,
    reportManager: { reportPlayTts },
  } = digitalHumanGeneratorManager;
  const {
    audio,
    metadata: { userTriggeredSpeechAudioDataLoading },
    playSpeechAudio,
    pauseSpeechAudio,
  } = voiceManager;
  const playing = V.i(audio);
  const p = y.useMemo(
    () =>
      i.jsx(F.q, {
        loading: userTriggeredSpeechAudioDataLoading,
        playing,
      }),
    [playing, userTriggeredSpeechAudioDataLoading],
  );
  const h = y.useCallback(
    (e) => {
      e.stopPropagation();
      if (playing) {
        pauseSpeechAudio();
      } else {
        playSpeechAudio();
        reportPlayTts();
      }
    },
    [playing, pauseSpeechAudio, playSpeechAudio, reportPlayTts],
  );
  return i.jsx(
    b.L,
    a._(
      {
        readOnly: true,
        icon: p,
        onClick: h,
      },
      e,
    ),
  );
});
const O = r.PA(function (e) {
  const { active, referenceRenderProps } = e;
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const { removeVoice, voiceManager } = digitalHumanGeneratorManager;
  const {
    metadata: { voiceSelectionDisabled, incomingVoicesLoading },
    data: { selectedVoice },
  } = voiceManager;
  const _ = y.useMemo(() => i.jsx(W.csv, {}), []);
  return i.jsx(
    p.t,
    o._(
      a._(
        {
          content: v.Ay.t(
            "web_avatar_talking_voice_hover_info",
            {},
            "点击调整音色",
          ),
          disabled: voiceSelectionDisabled,
          referenceRenderProps,
        },
        active
          ? {
              popupVisible: false,
            }
          : null,
      ),
      {
        children: i.jsx(
          $.T,
          a._(
            {
              referenceId: "voice",
              icon: _,
              label: selectedVoice == null ? undefined : selectedVoice.name,
              loading: incomingVoicesLoading,
              onRemove: removeVoice,
            },
            e,
          ),
        ),
      },
    ),
  );
});
const E = r.PA(function (e) {
  const { active, referenceRenderProps } = e;
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const { voiceManager, speechToSpeechManager } = digitalHumanGeneratorManager;
  const {
    metadata: { incomingVoicesLoading, incomingVoicesLoadingTooltipProps },
  } = voiceManager;
  const {
    metadata: { acceptedAudioFileTypes },
    importLocalAudio,
  } = speechToSpeechManager;
  const g = y.useMemo(() => i.jsx(W.csv, {}), []);
  const x = y.useCallback((e) => {
    e.preventDefault();
  }, []);
  return i.jsx(
    p.t,
    o._(
      a._(
        {
          referenceRenderProps,
        },
        active
          ? {
              popupVisible: false,
            }
          : null,
        incomingVoicesLoadingTooltipProps,
      ),
      {
        children: i.jsx(
          b.L,
          a._(
            {
              icon: g,
              label: v.Ay.t("web_avatar_talking_voice", {}, "音色"),
              loading: incomingVoicesLoading,
              accept: acceptedAudioFileTypes,
              onChange: importLocalAudio,
              onClick: x,
            },
            e,
          ),
        ),
      },
    ),
  );
});
const D = r.PA(function (e) {
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const { voiceManager, voiceRecommendationManager } =
    digitalHumanGeneratorManager;
  const {
    metadata: { speechSourceType, voiceSelectionDisabled },
    data: { selectedVoiceId, selectedVoice },
    setPinnedVoiceIds,
    voiceReportManager: { reportVoicePanelShow },
  } = voiceManager;
  const {
    metadata: { recommendedVoiceIds },
  } = voiceRecommendationManager;
  const { updateFavoriteVoices } = s.h(T.h);
  const content = y.useMemo(() => i.jsx(S, {}), []);
  const triggerProps = y.useMemo(
    () => ({
      popupAlign: {
        bottom: [N.ED, N.vw - -5.5],
      },
    }),
    [-5.5],
  );
  const [M, setM] = y.useState(false);
  const onVisibleChange = y.useCallback(
    (e) => {
      if (e) {
        setPinnedVoiceIds([
          ...(selectedVoiceId ? [selectedVoiceId] : []),
          ...recommendedVoiceIds,
        ]);
        updateFavoriteVoices();
        reportVoicePanelShow();
      }
      setM(e);
    },
    [
      selectedVoiceId,
      recommendedVoiceIds,
      setPinnedVoiceIds,
      updateFavoriteVoices,
      reportVoicePanelShow,
    ],
  );
  const A = y.useMemo(() => {
    if (typeof selectedVoiceId === "string" && selectedVoice) {
      return i.jsx(
        O,
        {
          active: M,
        },
        "voice",
      );
    }
    return i.jsx(
      E,
      {
        active: M,
      },
      "voice-empty",
    );
  }, [M, selectedVoice, selectedVoiceId]);
  return i.jsx(R.I, {
    content,
    disabled: voiceSelectionDisabled,
    triggerProps,
    popupVisible: M,
    onVisibleChange,
    children: i.jsx(x.I, {
      component: null,
      guardFileDrop: true,
      source: j.HH.Others,
      children: i.jsxs(
        d.V,
        o._(
          a._(
            {
              visualIndexOffset: 1,
              layout: "stacked",
            },
            e,
          ),
          {
            children: [
              A,
              speechSourceType === "text-to-speech" &&
              typeof selectedVoiceId === "string"
                ? i.jsx(I, {})
                : null,
            ],
          },
        ),
      ),
    }),
  });
});
var z = r.PA(function (e) {
  const { digitalHumanGeneratorManager } = s.h(l.V);
  const {
    data: { character },
    voiceManager: {
      data: { speechAudio },
    },
  } = digitalHumanGeneratorManager;
  const resources = [character, speechAudio].filter((e) => e !== undefined);
  return i.jsx(u.n, {
    resources,
    children: i.jsxs(
      c.B,
      o._(a._({}, e), {
        children: [i.jsx(A, {}), i.jsx(D, {})],
      }),
    ),
  });
});
export { z as $ };
