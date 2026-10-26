import n from "EHN";
import r from "d4";
import l from "VJf";
import o from "mcj";
import i from "oa";
import s from "bk";
import c from "z8";
import d from "bT";
import _u from "xb";
import p from "k7";
import v from "NY";
import h from "ED";
import g from "Lt";
import x from "qO";
import b from "Du8";
import _ from "xm3";
import f from "gKw";
import j from "wF";
import k from "JB";
import y from "Lx";
import C from "N8t";
import N from "FSQ";
import M from "RUQ";
import S from "lSl";
import A from "OXC";
import R from "Ft";
import P from "bqf";
import w from "QS6";
import T from "Qey";
import V from "yw";
import F from "lBB";
import I from "SNb";
import E from "qa";
import "Vx";
import W from "Ix";
import D from "ET";
import $ from "ByT";
import z from "IfdP";
import U from "SUV";
import O from "Yjo";
import L from "UiM";
import Z from "JONF";
import B from "LVe";
import G from "N0n";
import X from "lj";
import J from "AS4";
import q from "akE";
import Q from "oq";
import Y from "aoz";
import ee from "eVT";
import ea from "n3";
import et from "Io";
import en from "cxP";
import er from "ELg";
import es from "f3";
import ec from "Kt";
import ed from "k2";
import eu from "MEtu";
import em from "ap";
import ep from "rLe";
import ev from "WdE";
import { h as h_1 } from "./module-hiS.js";
import ef from "ESU";
import ek from "NTt";
import ey from "QBg";
import eC from "NXx";
import eM from "lgn";
import eS from "Zr";
import eA from "QmW";
import eR from "htj";
import eP from "ll";
import ew from "FFd";
import e$ from "Btc";
import ez from "IN";
import eU from "MnU";
import eB from "oxFp";
import eH from "Jv";
import eJ from "G2q";
import e0 from "IC";
import e1 from "U8M";
import e7 from "tOk";
import e9 from "pr";
import ar from "PSJ";
import al from "v5";
import ao from "HK";
import ai from "V99";
import as from "Kvf";
import ac from "bR6";
import ad from "eVu";
import au from "Hvt";
import am from "let";
import ap from "OdF";
import av from "vaY";
import ah from "HWv";
import ag from "yeG";
import ax from "O7U";
import ab from "ErZ";
import af from "MAP";
import ak from "G6S";
import aC from "ux";
import aM from "KbL";
import aA from "gwU";
import aT from "fSn";
import aV from "gC";
import aF from "UW";
import aW from "dq";
import a$ from "UOA";
import az from "SX";
import aU from "rk";
import aO from "axz";
import aL from "pzT";
import aH from "np";
import aK from "mtM";
import aG from "yh";
import a6 from "kI4";
import a3 from "vO";
import a7 from "TK";
import a4 from "T7";
import a5 from "n3Q";
import tn from "hUS";
import tr from "iPS";
import tl from "mZ";
import to from "BXZ";
import ts from "Dh";
import tc from "Pp";
import tp from "BV";
import tv from "Gn4";
import th from "hA6";
import tg from "oJV";
import tN from "oZZ";
import tM from "qp9";
import "uw5";
import tP from "VAR";
import tw from "fX";
import tT from "M9I";
import tV from "xi";
import tF from "PR1";
import tI from "ks";
import tE from "GI";
import "wy";
import t9 from "h7y";
import nv from "atd";
import nh from "Zyl";
import ng from "LWM";
import nx from "XcB";
import nf from "vU6";
import nj from "FM";
import nC from "ejz";
import nV from "yfx";
import nK from "KkU";
import nG from "h4L";
import nX from "tcu";
import n0 from "Akd";
import n7 from "zHt";
import n4 from "pB";
import n5 from "TPX";
import n8 from "wGq";
import ra from "YU";
import rt from "Ldn";
import rr from "XC";
import rs from "vHZ";
import rc from "MqP";
import rd from "kCc";
import ru from "Q8D";
import rm from "t2";
import rp from "pDS";
import rv from "yg";
import rh from "Xh";
import rg from "nlT";
import rx from "EiD";
import rb from "IBq";
import r_ from "UYZ";
import rf from "Zrk";
import rj from "yCM";
import rk from "pcO";
import ry from "umK";
const H = d.memo(function (e) {
  const { appearance } = d.useContext(b.R);
  const t = d.useMemo(
    () => T.Ay.t("video_omni_reference_image_ref", {}, "引用参考"),
    [],
  );
  const n = d.useMemo(
    () =>
      T.Ay.t("image_prompt_atbutton_hover_tip", {}, "@参考内容，素材精准引用"),
    [],
  );
  return c.jsx(
    B.K,
    i._(
      {
        imageUrl: Z,
        animationUrl: L,
        title: t,
        description: n,
        variant: g.f(appearance) ? "mainFrame2026" : "default",
      },
      e,
    ),
  );
});
const K = h.PA(function (e) {
  const { entry = "toolbar", size, onVisibleChange, tooltipGap = I.WK } = e;
  const l = E._(e, ["entry", "size", "onVisibleChange", "tooltipGap"]);
  const { appearance } = d.useContext(b.R);
  const u = z.n();
  const { agenticGeneratorManager, contentGeneratorManager } = j.h(_.V);
  const {
    metadata: { voiceInputActive },
    referenceMentionManager,
  } = agenticGeneratorManager;
  const {
    data: { isMentionButtonBadgeDismissed },
    dismissMentionButtonBadge,
  } = contentGeneratorManager;
  const k = $.a(referenceMentionManager);
  const [y, setY] = d.useState(false);
  const N = d.useCallback(
    (e) => {
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
      setY(e);
      if (e) {
        dismissMentionButtonBadge();
        referenceMentionManager.openPanel({
          entry,
        });
      }
    },
    [
      dismissMentionButtonBadge,
      onVisibleChange,
      referenceMentionManager,
      entry,
    ],
  );
  const M = d.useCallback(
    (e) => {
      referenceMentionManager.insertOption(e, {
        entry,
      });
    },
    [referenceMentionManager, entry],
  );
  const S = d.useMemo(
    () => T.Ay.t("video_omni_reference_image_ref", {}, "引用参考"),
    [],
  );
  const A = d.useMemo(
    () => ({
      popupAlign: {
        top: tooltipGap,
        bottom: tooltipGap,
      },
    }),
    [tooltipGap],
  );
  const R = d.useMemo(() => {
    if (g.f(appearance) && !isMentionButtonBadgeDismissed) {
      return c.jsx(V.X7o, {
        className: O.A.firstUseIcon,
        size: 16,
      });
    }
    return c.jsx(V.jHH, {
      size: 16,
    });
  }, [appearance, isMentionButtonBadgeDismissed]);
  const P = d.useMemo(
    () =>
      c.jsx(U.y, {
        dot: true,
        count: g.f(appearance) || isMentionButtonBadgeDismissed ? 0 : 1,
        children: c.jsx(F.E, {
          disabled: voiceInputActive,
          icon: R,
          size,
        }),
      }),
    [appearance, R, size, isMentionButtonBadgeDismissed, voiceInputActive],
  );
  if (u) {
    return c.jsx(
      H,
      s._(
        i._(
          {
            disabled: isMentionButtonBadgeDismissed,
          },
          y
            ? {
                popupVisible: false,
              }
            : null,
        ),
        {
          children: c.jsx(
            W.A,
            s._(
              i._(
                {
                  content: S,
                  disabled: !isMentionButtonBadgeDismissed,
                  triggerProps: A,
                },
                y
                  ? {
                      popupVisible: false,
                    }
                  : null,
              ),
              {
                children: c.jsx(
                  D.o,
                  s._(
                    i._(
                      {
                        disabled: voiceInputActive,
                        triggerElement: P,
                      },
                      l,
                    ),
                    {
                      options: k,
                      onInsertOption: M,
                      onVisibleChange: N,
                    },
                  ),
                ),
              },
            ),
          ),
        },
      ),
    );
  }
  return null;
});
const el = h.PA(function (e) {
  const { manageSkillLabel, source, onRequestDropdownClose } = e;
  const r = j.h(_.V);
  const l = j.h(Y.j);
  const { skillManager, skillEditorManager, reportManager } =
    r.agenticGeneratorManager;
  const u = ee.L({
    source: ea.HH.Others,
  });
  const m = d.useCallback(() => {
    onRequestDropdownClose();
    skillManager.clearSearchKeyword();
    skillEditorManager.openSkillEditor({
      preferredViewMode: "detail",
      enterFrom: "prompt_skill_list_click",
    });
  }, [onRequestDropdownClose, skillManager, skillEditorManager]);
  const onCreateWithAgent = d.useCallback(() => {
    if (!u()) {
      reportManager.reportSkillsAction({
        action: "agent_create_skill",
        actionMethod: "click",
      });
      reportManager.reportSkillManageCreateNew(
        "agent_create_new",
        "prompt_skill_list_click",
      );
      onRequestDropdownClose();
      skillManager.applyCreateSkillTemplateFromSelect();
    }
  }, [u, reportManager, onRequestDropdownClose, skillManager]);
  const onCreateManually = d.useCallback(() => {
    if (!u()) {
      m();
      skillEditorManager.leaveFormView({
        kind: "create",
      });
    }
  }, [u, m, skillEditorManager]);
  const onUploadClick = d.useCallback(
    () =>
      !u() &&
      skillManager.handleUploadClick(undefined, "prompt_skill_list_click"),
    [u, skillManager],
  );
  const onUpload = d.useCallback(
    (e) => {
      l.uploadSkill(e);
      m();
    },
    [l, m],
  );
  const x = d.useCallback(
    (e) => {
      e.stopPropagation();
      reportManager.reportSkillsAction({
        action: "manage",
        actionMethod: "click",
      });
      if (!u()) {
        m();
      }
    },
    [reportManager, u, m],
  );
  const actions = d.useMemo(
    () => [
      {
        key: "manage-skill",
        icon: c.jsx(V.Da7, {
          size: 16,
        }),
        label: manageSkillLabel,
        onClick: x,
      },
    ],
    [manageSkillLabel, x],
  );
  if (source !== "toolbar") {
    return null;
  }
  return c.jsx(en.y, {
    actions,
    leadingAction: c.jsx(et.x, {
      label: T.Ay.t("skill_dialog_manage_list_new"),
      className: er.A.dropdownAction,
      onCreateWithAgent,
      onCreateManually,
      onUpload,
      onUploadClick,
    }),
  });
});
const EoContext = d.createContext(undefined);
const ei = h.PA(function (e) {
  const { menu, source, onRequestDropdownClose } = e;
  const r = j.h(_.V);
  const l = j.h(X.K);
  const { agenticGeneratorManager } = r;
  const { skillManager, reportManager } = agenticGeneratorManager;
  const { activeSkillOptions, isSkillsLoading, searchKeyword } =
    skillManager.metadata;
  const [v, h] = Q.a.useModal();
  const manageSkillLabel = T.Ay.t("skill_menu_manage", {}, "Manage skills");
  const searchPlaceholder = T.Ay.t(
    "skill_menu_search_placeholder",
    {},
    "Search skills",
  );
  const b = T.Ay.t("skill_menu_button_more", {}, "More skills");
  const loadingLabel = T.Ay.t("skill_menu_search_loading", {}, "Loading...");
  const emptyLabel = T.Ay.t(
    "skill_search_empty_noresult",
    {},
    "No skills matching your search. ",
  );
  const y = d.useCallback(() => {
    J.O(l);
  }, [l]);
  const C = d.useCallback(() => {
    reportManager.reportSkillsAction({
      action: "more_skills_entrance_click",
      actionMethod: "click",
    });
    onRequestDropdownClose();
    y();
  }, [y, onRequestDropdownClose, reportManager]);
  const emptyAction = d.useMemo(
    () => ({
      label: T.Ay.t("skill_search_empty_viewmore", {}, "Explore skills."),
      onClick: C,
    }),
    [C],
  );
  const moreAction = d.useMemo(
    () => ({
      label: b,
      onClick: C,
    }),
    [C, b],
  );
  return c.jsxs(EoContext.Provider, {
    value: v.confirm,
    children: [
      c.jsx(q.V, {
        menu,
        source,
        searchValue: searchKeyword,
        searchPlaceholder,
        onSearchChange: skillManager.setSearchKeyword,
        loading: isSkillsLoading,
        hasOptions: activeSkillOptions.length > 0,
        loadingLabel,
        emptyLabel,
        emptyAction,
        moreAction,
        footer: c.jsx(el, {
          manageSkillLabel,
          source,
          onRequestDropdownClose,
        }),
      }),
      h,
    ],
  });
});
const eg = h.PA(function (e) {
  let a;
  const {
    option,
    previewEnabled = false,
    skillIcon,
    actionMethod = "click",
    preparePreviewSkillUse,
    onRequestDropdownClose,
  } = e;
  const { label, extra } = option;
  const { description, source } = extra;
  const bRef = d.useRef(false);
  const confirm = d.useContext(EoContext);
  const { promptEditorRef } = d.useContext(x.b);
  const y = j.h(ec._);
  const C = j.h(_.V);
  const N = j.h(Y.j);
  const disabled = N.data.reuploadingSkillIds.includes(option.value);
  const { agenticGeneratorManager } = C;
  const { skillManager, skillEditorManager } = agenticGeneratorManager;
  const {
    data: { currentSkillId },
  } = agenticGeneratorManager;
  const w = previewEnabled
    ? skillManager.metadata.librarySkills.find((e) => e.id === option.value)
    : undefined;
  const selected = option.value === currentSkillId;
  const isPlatformSkill = source === es.fc.Platform;
  const isUserSkill = source === es.fc.User;
  const W =
    ((a = skillManager.metadata.librarySkills.find(
      (e) => e.id === option.value,
    )) == null
      ? undefined
      : a.isSkillPackage) === true;
  const platformLabel = T.Ay.t("skill_menu_tag_official", {}, "Dreamina");
  const $ = T.Ay.t("skill_menu_more_edit", {}, "Edit");
  const z = T.Ay.t("skill_menu_more_delete", {}, "Delete");
  const U = d.useCallback(
    (e) => {
      e.stopPropagation();
      if (!N.data.reuploadingSkillIds.includes(option.value)) {
        onRequestDropdownClose();
        skillEditorManager.openSkillEditor({
          initialSkillId: option.value,
          preferredViewMode: "edit",
          enterFrom: "prompt_skill_list_click",
        });
      }
    },
    [onRequestDropdownClose, option.value, skillEditorManager, N],
  );
  const O = d.useCallback(
    (e) =>
      v._(function* () {
        e.stopPropagation();
        if (
          !(bRef.current || N.data.reuploadingSkillIds.includes(option.value))
        ) {
          bRef.current = true;
          try {
            if (
              !(yield h_1({
                confirm,
              })) ||
              N.data.reuploadingSkillIds.includes(option.value)
            ) {
              return;
            }
            const a = skillManager.metadata.librarySkills.find(
              (e) => e.id === option.value,
            );
            if ((yield skillManager.deleteSkill(option.value)).ok) {
              ed.q(
                option.value,
                (a == null ? undefined : a.source) !== es.fc.User ||
                  a.originalSkillId
                  ? undefined
                  : a.name,
              );
            }
          } finally {
            bRef.current = false;
          }
        }
      })(),
    [confirm, option.value, skillManager, N],
  );
  const L = d.useMemo(
    () => [
      ...(W
        ? []
        : [
            {
              key: "edit",
              icon: c.jsx(V.GI1, {
                size: 16,
              }),
              label: $,
              disabled,
              onClick: U,
            },
          ]),
      {
        key: "delete",
        icon: c.jsx(V.xV8, {
          size: 16,
        }),
        label: z,
        disabled,
        onClick: O,
      },
    ],
    [z, $, U, O, W, disabled],
  );
  return c.jsx(eu.K, {
    preview: w ? ep.w(w) : undefined,
    moreAction:
      w && em.l(w)
        ? {
            label: T.Ay.t("web_skill_popover_btn_overview"),
            onClick: () => {
              var e;
              var skillManager_selectionGeneration =
                skillManager.selectionGeneration;
              var useSkill =
                (e =
                  preparePreviewSkillUse == null
                    ? undefined
                    : preparePreviewSkillUse(option.value)) != null
                  ? e
                  : (e, r) => {
                      var o = skillManager.metadata.activeSkills.find(
                        (e) => e.id === option.value,
                      );
                      return (
                        skillManager_selectionGeneration ===
                          skillManager.selectionGeneration &&
                        !!o &&
                        o.source !== es.fc.Market &&
                        !!em.l(o) &&
                        (agenticGeneratorManager.selectSkill(option.value, {
                          manualSelection: previewEnabled,
                          reportParams: s._(i._({}, r), {
                            actionMethod,
                          }),
                        }),
                        true)
                      );
                    };
              onRequestDropdownClose();
              ev.X(y, w, {
                scene: "chat",
                source: "menu",
                useSkill,
                focusFallback: () => {
                  var e;
                  if (
                    promptEditorRef == null ||
                    (e = promptEditorRef.current) == null
                  ) {
                    return undefined;
                  }
                  return e.commands.focus();
                },
              });
            },
          }
        : undefined,
    label,
    description,
    selected,
    isPlatformSkill,
    isUserSkill,
    platformLabel,
    skillIcon,
    actions: isUserSkill ? L : undefined,
  });
});
const ex = h.PA(function (e) {
  const a = C.E();
  const {
    source = "toolbar",
    iconOnly = false,
    selectAfterPopupClose = false,
    tooltipContent,
    withToolbarBadge = true,
    tooltipGap = I.WK,
    actionMethod = "click",
    preparePreviewSkillUse,
    onChange,
    onVisibleChange,
    popupVisible,
    triggerProps,
    className,
  } = e;
  const N = E._(e, [
    "source",
    "iconOnly",
    "selectAfterPopupClose",
    "tooltipContent",
    "withToolbarBadge",
    "tooltipGap",
    "actionMethod",
    "preparePreviewSkillUse",
    "onChange",
    "onVisibleChange",
    "popupVisible",
    "triggerProps",
    "className",
  ]);
  const { appearance, compact, variant } = d.useContext(b.R);
  const R = source === "toolbar";
  const P = source === "suggestion";
  const w = !P;
  const [F, setF] = d.useState(false);
  const $Ref = d.useRef(null);
  const { agenticGeneratorManager } = j.h(_.V);
  const { skillManager } = agenticGeneratorManager;
  const {
    data: { currentSkillId },
    selectSkill,
  } = agenticGeneratorManager;
  const { activeSkillOptions, isSkillButtonBadgeDismissed } =
    skillManager.metadata;
  d.useEffect(() => {
    if (w && f.F && variant !== "canvas") {
      skillManager.initializeSkills();
    }
  }, [w, skillManager, variant]);
  const K = R
    ? T.Ay.t("web_agent_skill_btn_short", {}, "Skill")
    : T.Ay.t("web_agent_skill_btn", {}, "Skills");
  const notFoundContent = T.Ay.t(
    "web_agent_skill_empty_hint",
    {},
    "No skills yet",
  );
  const J = d.useMemo(() => {
    if (g.f(appearance)) {
      return c.jsx(V.VKR, {
        size: 16,
      });
    }
  }, [appearance]);
  const skillIcon = d.useMemo(() => {
    if (g.f(appearance)) {
      if (isSkillButtonBadgeDismissed) {
        return c.jsx(V.VKR, {
          size: 16,
        });
      }
      return c.jsx(V.jtC, {
        className: "new-skill-icon-bvMIeZ",
        size: 16,
      });
    }
  }, [appearance, isSkillButtonBadgeDismissed]);
  const Q = d.useCallback(
    (e) => {
      if (w) {
        setF(e);
        if (e) {
          skillManager.dismissSkillButtonBadge();
          agenticGeneratorManager.reportManager.reportSkillsAction({
            action: "show",
            actionMethod,
          });
        } else {
          skillManager.clearSearchKeyword();
        }
      }
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
    },
    [
      actionMethod,
      agenticGeneratorManager.reportManager,
      w,
      onVisibleChange,
      skillManager,
    ],
  );
  const Y = d.useCallback(
    (id, t, n) => {
      if (onChange != null) {
        onChange(id, t, n);
      }
      if (w) {
        if (selectAfterPopupClose) {
          $Ref.current = {
            id,
            generation: skillManager.selectionGeneration,
          };
          Q(false);
          return;
        }
        selectSkill(id, {
          manualSelection: a,
          reportParams: {
            actionMethod,
          },
        });
      }
    },
    [
      actionMethod,
      Q,
      w,
      onChange,
      selectAfterPopupClose,
      selectSkill,
      a,
      skillManager,
    ],
  );
  d.useEffect(() => {
    if (!F && $Ref.current) {
      var { id, generation } = $Ref.current;
      $Ref.current = null;
      if (generation === skillManager.selectionGeneration) {
        selectSkill(id, {
          manualSelection: a,
          reportParams: {
            actionMethod,
          },
        });
      }
    }
  }, [actionMethod, F, selectSkill, a, skillManager]);
  const onRequestDropdownClose = d.useCallback(() => {
    Q(false);
  }, [Q]);
  const ea = d.useMemo(
    () =>
      activeSkillOptions.map((e) =>
        s._(i._({}, e), {
          label: c.jsx(eg, {
            option: e,
            previewEnabled: a,
            skillIcon: J,
            actionMethod,
            preparePreviewSkillUse,
            onRequestDropdownClose,
          }),
        }),
      ),
    [
      activeSkillOptions,
      actionMethod,
      preparePreviewSkillUse,
      a,
      onRequestDropdownClose,
      J,
    ],
  );
  const et = d.useMemo(
    () => ({
      popupAlign: {
        top: tooltipGap,
        bottom: tooltipGap,
      },
    }),
    [tooltipGap],
  );
  const dropdownRender = d.useCallback(
    (menu) =>
      c.jsx(ei, {
        menu,
        source,
        onRequestDropdownClose,
      }),
    [onRequestDropdownClose, source],
  );
  if (!f.F || variant === "canvas") {
    return null;
  }
  const er = c.jsx(
    G.A,
    s._(
      i._(
        {
          source,
          compact,
          iconOnly,
          skillIcon,
          label: K,
          className,
          dropdownRender,
          defaultActiveFirstOption: false,
          filterOption: false,
        },
        N,
      ),
      {
        triggerProps,
        value: currentSkillId,
        popupVisible: w ? F : popupVisible,
        options: ea,
        notFoundContent,
        onChange: Y,
        onVisibleChange: Q,
      },
    ),
  );
  const el = T.Ay.t(
    "web_agent_skill_btn_tooltip_updated",
    {},
    'Type "/" to choose a skill, or the agent will apply the right skill when needed',
  );
  if (P) {
    return er;
  }
  const eo = withToolbarBadge
    ? c.jsx(U.y, {
        dot: true,
        count: g.f(appearance) || isSkillButtonBadgeDismissed ? 0 : 1,
        position: "left",
        children: er,
      })
    : er;
  return c.jsx(
    W.A,
    s._(
      i._(
        {
          content: tooltipContent != null ? tooltipContent : el,
          triggerProps: et,
        },
        F
          ? {
              popupVisible: false,
            }
          : null,
      ),
      {
        children: eo,
      },
    ),
  );
});
const eb = {
  mainFrame2026: {
    web_agent_hint_with_skill: {
      key: "web_mainframe_agent_hint_with_skill",
      fallback:
        "输入想法、剧本或上传参考，支持 <skill>/</skill>使用技能，<strong>@</strong>添加主体，和Agent一起创作",
    },
    web_agent_hint_with_skill_ref: {
      key: "web_mainframe_agent_hint_with_skill_ref",
      fallback:
        "输入想法、剧本，<skill>/</skill>使用技能，<strong>@</strong>添加主体，和Agent一起创作",
    },
  },
};
const e_ = h.PA(function () {
  let e;
  let a;
  const { appearance } = d.useContext(b.R);
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { placeholderKey },
  } = agenticGeneratorManager;
  const l =
    (e =
      (a = eb[g.f(appearance) ? "mainFrame2026" : appearance]) == null
        ? undefined
        : a[placeholderKey]) != null
      ? e
      : {
          key: placeholderKey,
        };
  const tooltipContent = T.Ay.t(
    "web_mainframe_skill_tooltip_invoke_skill",
    {},
    "调用技能",
  );
  const i = d.useMemo(() => c.jsx(V.jHH, {}), []);
  const s = d.useMemo(
    () =>
      c.jsx("span", {
        "aria-hidden": "true",
        className: "skill-icon-p4Qmtt",
        children: "/",
      }),
    [],
  );
  const u = d.useMemo(
    () =>
      c.jsx(F.E, {
        icon: i,
        size: "mini",
      }),
    [i],
  );
  const m = d.useMemo(
    () =>
      c.jsx(F.E, {
        icon: s,
        size: "mini",
      }),
    [s],
  );
  return c.jsx(c.Fragment, {
    children: T.Ay.t(
      l.key,
      {
        skill: () =>
          c.jsx(
            ex,
            {
              actionMethod: "click_slash",
              source: g.f(appearance) ? "placeholder" : "toolbar",
              selectAfterPopupClose: true,
              tooltipContent,
              tooltipGap: I.vw,
              triggerElement: m,
              withToolbarBadge: false,
            },
            "agentic-skill-select",
          ),
        strong: () =>
          c.jsx(
            K,
            {
              tooltipGap: I.vw,
              triggerElement: u,
              entry: "placeholder",
            },
            "agentic-reference-mention-select",
          ),
      },
      l.fallback,
    ),
  });
});
const ej = h.PA(
  d.forwardRef(function (e, a) {
    const { referenceMentionManager } = j.h(_.V).agenticGeneratorManager;
    d.useEffect(() => {
      referenceMentionManager.openPanel({
        entry: "editor",
      });
    }, [referenceMentionManager]);
    const n = $.a(referenceMentionManager);
    const r = d.useCallback(
      (e) => {
        referenceMentionManager.insertOption(e, {
          entry: "editor",
        });
      },
      [referenceMentionManager],
    );
    return c.jsx(
      ef.a,
      s._(
        i._(
          {
            ref: a,
            options: n,
          },
          e,
        ),
        {
          onInsertOption: r,
        },
      ),
    );
  }),
);
const eN = h.PA(
  d.forwardRef(function (e, a) {
    const manualSelection = C.E();
    const { pluginKey, suggestionProps, onChange } = e;
    const o = E._(e, ["pluginKey", "suggestionProps", "onChange"]);
    const { range, editor, query } = suggestionProps;
    const { agenticGeneratorManager } = j.h(_.V);
    const {
      metadata: { activeSkillOptions },
      data: { hasSkill },
      selectSkill,
      reportManager,
      skillManager,
    } = agenticGeneratorManager;
    const N = eC.m(query);
    const keepVisibleWhenOptionsEmpty = N && !!query.trim();
    const { promptEditorRef } = d.useContext(x.b);
    const A = ey.I(
      s._(i._({}, e), {
        options: N ? activeSkillOptions : [],
        keepVisibleWhenOptionsEmpty,
      }),
      a,
    );
    const RRef = d.useRef(null);
    d.useEffect(() => {
      skillManager.dismissSkillButtonBadge();
      reportManager.reportSkillsAction({
        action: "show",
        actionMethod: "prompt_enter",
      });
    }, [reportManager, skillManager]);
    const P = d.useCallback(
      (e, a, n) =>
        v._(function* () {
          let r;
          const skillManager_selectionGeneration =
            skillManager.selectionGeneration;
          const i =
            promptEditorRef == null ? undefined : promptEditorRef.current;
          const s = i == null ? undefined : i.state.doc;
          if (onChange != null) {
            onChange(e, a, n);
          }
          yield (r = RRef.current) == null ? undefined : r.promise;
          if (
            i &&
            !i.isDestroyed &&
            i ===
              (promptEditorRef == null ? undefined : promptEditorRef.current) &&
            i.state.doc === s &&
            skillManager.selectionGeneration ===
              skillManager_selectionGeneration
          ) {
            i.commands.deleteRange(range);
            selectSkill(e, {
              manualSelection,
              reportParams: {
                actionMethod: "prompt_enter",
              },
            });
          }
        })(),
      [
        promptEditorRef,
        range,
        selectSkill,
        onChange,
        manualSelection,
        skillManager,
      ],
    );
    const preparePreviewSkillUse = d.useCallback(
      (e) => {
        var a = promptEditorRef == null ? undefined : promptEditorRef.current;
        var n = a == null ? undefined : a.state.doc;
        var { selectionGeneration } = skillManager;
        var l = i._({}, range);
        return (o, c) => {
          var d = skillManager.metadata.activeSkills.find((a) => a.id === e);
          return (
            !!a &&
            !a.isDestroyed &&
            a === promptEditorRef.current &&
            a.state.doc === n &&
            skillManager.selectionGeneration === selectionGeneration &&
            !!d &&
            !!em.l(d) &&
            (a.commands.deleteRange(l),
            selectSkill(e, {
              manualSelection,
              reportParams: s._(i._({}, c), {
                actionMethod: "prompt_enter",
              }),
            }),
            true)
          );
        };
      },
      [promptEditorRef, range, selectSkill, skillManager, manualSelection],
    );
    const T = d.useCallback(
      (e) => {
        var a;
        var t;
        if ((a = A.onVisibleChange) != null) {
          a.call(A, e);
        }
        if (e) {
          RRef.current = Promise.withResolvers();
          return;
        }
        if ((t = RRef.current) != null) {
          t.resolve();
        }
        RRef.current = null;
      },
      [A],
    );
    d.useEffect(() => {
      if (hasSkill) {
        ek.Pn(editor.view, pluginKey);
      }
    }, [hasSkill, editor.view, pluginKey]);
    if (hasSkill) {
      return null;
    }
    return c.jsx(
      ex,
      s._(
        i._(
          {
            source: "suggestion",
          },
          o,
          A,
        ),
        {
          onChange: P,
          preparePreviewSkillUse,
          onVisibleChange: T,
        },
      ),
    );
  }),
);
const eT = d.memo(function (e) {
  const { label, active } = e;
  const [n, r] = ew.G();
  return c.jsx("span", {
    ref: n,
    "data-drag-handle": true,
    className: _u("create-skill-template-slot-tag-vjKiGh", {
      "active-Ivyn5G": active,
      "dragging-JoH2jP": r,
    }),
    children: c.jsx("span", {
      className: "create-skill-template-slot-tag-label-HZq6Xq",
      children: label,
    }),
  });
});
const eV = d.memo(function (e) {
  const { node, editor, getPos, selected } = e;
  const { slotType } = node.attrs;
  const onMouseDown = d.useCallback(
    (e) => {
      e.preventDefault();
      var a = getPos();
      if (typeof a === "number") {
        editor.chain().focus().setNodeSelection(a).run();
      }
    },
    [editor, getPos],
  );
  if (!eP._F(slotType)) {
    return null;
  }
  const i = eP.gF(slotType);
  return c.jsx(eA.VR, {
    as: "span",
    contentEditable: false,
    "data-agentic-generator-create-skill-template-slot": "true",
    onMouseDown,
    children: c.jsx(eT, {
      label: i,
      active: selected,
    }),
  });
});
const key = new eS.hs("create-skill-template-slot-input-replace");
function eI(e) {
  return (
    (e == null ? undefined : e.type.name) ===
    eR.t.AgenticGeneratorCreateSkillTemplateSlot
  );
}
function eE(e) {
  const a = e instanceof Element ? e : e == null ? undefined : e.parentNode;
  const t =
    a instanceof Element
      ? a.closest('[data-agentic-generator-create-skill-template-slot="true"]')
      : null;
  if (t instanceof HTMLElement) {
    return t;
  }
  return null;
}
function eW(e, a) {
  const { selection, doc } = e.state;
  const r = selection instanceof eS.nh ? selection.node : undefined;
  if (eI(r)) {
    return {
      node: r,
      from: selection.from,
      to: selection.to,
    };
  }
  const l = ((e) => {
    let a;
    let t;
    let n;
    const r = e.dom.ownerDocument.getSelection();
    const l =
      (a = eE((t = r == null ? undefined : r.anchorNode) != null ? t : null)) !=
      null
        ? a
        : eE((n = r == null ? undefined : r.focusNode) != null ? n : null);
    if (l) {
      try {
        return ((e, a) => {
          const { doc } = e.state;
          for (const n of [a, a - 1, a + 1]) {
            if (!(n < 0) && !(n > doc.content.size)) {
              const r = doc.nodeAt(n);
              if (eI(r)) {
                return {
                  node: r,
                  from: n,
                  to: n + r.nodeSize,
                };
              }
            }
          }
        })(e, e.posAtDOM(l, 0));
      } catch (e) {
        return;
      }
    }
  })(e);
  if (l) {
    return l;
  }
  if (a !== undefined) {
    const o = doc.resolve(a.from).nodeAfter;
    if (eI(o)) {
      return {
        node: o,
        from: a.from,
        to: a.to,
      };
    }
  }
}
const eD = eM.bP.create({
  name: eR.t.AgenticGeneratorCreateSkillTemplateSlot,
  group: "inline",
  inline: true,
  atom: true,
  draggable: false,
  selectable: true,
  addAttributes: () => ({
    slotType: {
      default: undefined,
    },
  }),
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
      eM.KV(HTMLAttributes, {
        "data-type": this.name,
      }),
    ];
  },
  addNodeView: () => eA.gu(eV),
  addProseMirrorPlugins: () => [
    new eS.k_({
      key,
      props: {
        handleKeyDown(e, a) {
          if (
            !(
              !a.ctrlKey &&
              !a.metaKey &&
              !a.altKey &&
              (a.key.length === 1 || a.key === "Process" || a.isComposing)
            )
          ) {
            return false;
          }
          const t = eW(e);
          return (
            !!t &&
            (!((e, a) => {
              const { from, to } = a;
              const r = e.state.tr.delete(from, to);
              r.setSelection(eS.U3.create(r.doc, from));
              e.dispatch(r);
            })(e, t),
            false)
          );
        },
        handleTextInput(e, from_1, to_1, n) {
          const { state } = e;
          const l = eW(e, {
            from: from_1,
            to: to_1,
          });
          if (!l) {
            return false;
          }
          const { node, from, to } = l;
          const { slotType } = node.attrs;
          if (!eP._F(slotType)) {
            return false;
          }
          const d = state.tr.insertText(n, from, to);
          if (from === to) {
            const u = from + n.length;
            d.delete(u, u + node.nodeSize);
          }
          const m = from + n.length;
          d.setSelection(eS.U3.create(d.doc, m));
          e.dispatch(d);
          requestAnimationFrame(() => {
            var { state } = e;
            var { doc, selection } = state;
            var { empty, from } = selection;
            if (!(empty && from === m)) {
              var o = Math.min(m, doc.content.size);
              e.dispatch(state.tr.setSelection(eS.U3.create(doc, o)));
            }
          });
          return true;
        },
      },
    }),
  ],
});
const eO = d.memo(function (e) {
  const { layerId, title } = e;
  const { agenticGeneratorManager } = j.h(_.V);
  const { canvasEditor } = agenticGeneratorManager;
  return c.jsx(eU.I, {
    children: c.jsx(ez.Z, {
      label: title,
      layerId,
      canvasEditor,
    }),
  });
});
const eL = d.memo(function (e) {
  const { node } = e;
  const { layerId, title } = node.attrs;
  return c.jsx(eA.VR, {
    as: "span",
    children:
      typeof layerId === "string" && typeof title === "string"
        ? c.jsx(eO, {
            layerId,
            title,
          })
        : null,
  });
});
const eZ = e$.S.extend({
  name: eR.t.AgenticGeneratorReferenceFrameTag,
  addAttributes: () => ({
    layerId: {
      default: undefined,
    },
    title: {
      default: undefined,
    },
  }),
  addNodeView: () => eA.gu(eL),
});
const eK = h.PA(function (e) {
  const { id } = e;
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { referenceResources },
    metadata: { referenceIdToLabel },
  } = agenticGeneratorManager;
  const l = referenceResources.find((e) => e.id === id);
  if (l) {
    return c.jsx(eH.W, {
      resource: l,
      label: referenceIdToLabel[id],
    });
  }
  return null;
});
const eG = d.memo(function (e) {
  const { node } = e;
  const { id } = node.attrs;
  return c.jsx(eA.VR, {
    as: "span",
    children:
      typeof id === "string"
        ? c.jsx(eK, {
            id,
          })
        : null,
  });
});
const eX = eB.Q.extend({
  addNodeView: () => eA.gu(eG),
});
const eq = d.memo(function (e) {
  const { layerId, text } = e;
  const { canvasEditor } = j.h(_.V).agenticGeneratorManager;
  return c.jsx(eU.I, {
    children: c.jsx(eJ.V, {
      label: text,
      layerId,
      canvasEditor,
    }),
  });
});
const eQ = d.memo(function (e) {
  const { node } = e;
  const { layerId, text } = node.attrs;
  return c.jsx(eA.VR, {
    as: "span",
    children:
      typeof layerId === "string" && typeof text === "string"
        ? c.jsx(eq, {
            layerId,
            text,
          })
        : null,
  });
});
const eY = e$.S.extend({
  name: eR.t.AgenticGeneratorReferenceTextTag,
  addAttributes: () => ({
    layerId: {
      default: undefined,
    },
    text: {
      default: undefined,
    },
  }),
  addNodeView: () => eA.gu(eQ),
});
const e6 = d.memo(function (e) {
  const { displayName } = e;
  const { appearance } = d.useContext(b.R);
  return c.jsx(eU.I, {
    children: c.jsx(
      e1.p,
      i._(
        {
          label: displayName,
        },
        g.f(appearance)
          ? {
              icon: c.jsx(V.VKR, {}),
            }
          : {},
      ),
    ),
  });
});
const e2 = d.memo(function (e) {
  const { node } = e;
  const { id, displayName } = node.attrs;
  return c.jsx(eA.VR, {
    as: "span",
    children:
      typeof id === "string" && typeof displayName === "string"
        ? c.jsx(e6, {
            id,
            displayName,
          })
        : null,
  });
});
const e3 = e0.P.extend({
  name: eR.t.AgenticGeneratorSkillTag,
  draggable: true,
  addAttributes: () => ({
    id: {
      default: undefined,
    },
    displayName: {
      default: undefined,
    },
    source: {
      default: undefined,
    },
  }),
  addNodeView: () => eA.gu(e2),
});
const e4 = eM.YY.create({
  name: "agentic-generator-skill-tag-placeholder",
  addOptions: () => ({
    getPlaceholder: () => undefined,
    isUsageGuideEnabled: () => false,
    isSkillAvailable: () => true,
  }),
  addProseMirrorPlugins() {
    return [
      e7.w({
        tagName: eR.t.AgenticGeneratorSkillTag,
        isEnabled: this.options.isUsageGuideEnabled,
        isSkillAvailable: this.options.isSkillAvailable,
        getPlaceholder: this.options.getPlaceholder,
        onUsagePromptInserted: this.options.onUsagePromptInserted,
      }),
    ];
  },
});
const allowedPrefixes = [" "];
const e8 = h.PA(function () {
  const e = C.E();
  const aRef = d.useRef(e);
  aRef.current = e;
  const { promptEditorRef } = d.useContext(x.b);
  const { appearance, variant } = d.useContext(b.R);
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { editorDocument, referenceRecordText },
    changeEditorDocument,
    dropAsReferences,
    pasteAsReferences,
    skillManager,
    taskSubmissionManager,
    reportManager: {
      reportActivatePrompt,
      reportEnterPrompt,
      reportSkillUsagePromptInserted,
    },
  } = agenticGeneratorManager;
  const { activeSkills } = skillManager.metadata;
  d.useEffect(() => {
    var e = promptEditorRef == null ? undefined : promptEditorRef.current;
    if (e && !e.isDestroyed) {
      e.view.dispatch(e.state.tr.setMeta("addToHistory", false));
    }
  }, [e, activeSkills, promptEditorRef]);
  const { submit } = taskSubmissionManager;
  const W = j.h(y.C);
  const D = g.f(appearance) ? k.TU : k.aD;
  const $ = g.f(appearance) ? k.TJ : k.Yv;
  const autoSize = d.useMemo(() => {
    if (typeof referenceRecordText === "string") {
      return {
        minHeight: $ - 38,
        maxHeight: D - 38,
      };
    }
  }, [$, D, referenceRecordText]);
  const U = d.useCallback(
    (e) =>
      v._(function* () {
        (yield W.getInstance()).subjectSearchManager.searchByKeyword(e);
      })(),
    [W],
  );
  const O = N.$({
    component: ej,
    onQueryChange: U,
  });
  const L = d.useCallback(
    (e) => {
      skillManager.setSearchKeyword(e);
    },
    [skillManager],
  );
  const Z = d.useMemo(
    () =>
      w.y({
        char: "/",
        component: eN,
        allowedPrefixes,
        allowCompositionWhitespace: true,
        onQueryChange: L,
      }),
    [L],
  );
  const getPlaceholder = d.useCallback(
    (e) => {
      var a;
      if (
        (a = agenticGeneratorManager.metadata.activeSkillOptions.find(
          (a) => a.value === e,
        )) == null
      ) {
        return undefined;
      }
      return a.extra.guidingPrompt;
    },
    [agenticGeneratorManager],
  );
  const H = d.useMemo(() => c.jsx(e_, {}), []);
  const K = d.useMemo(
    () => [
      R._.configure({
        placeholder: H,
      }),
      eD,
      eZ,
      eX.configure({
        suggestion: O,
      }),
      P.p.configure(),
      eY,
      ...(variant !== "canvas" && f.F
        ? [
            e3.configure({
              suggestion: Z,
            }),
            e4.configure({
              getPlaceholder,
              isUsageGuideEnabled: () => aRef.current,
              onUsagePromptInserted: reportSkillUsagePromptInserted,
            }),
          ]
        : []),
    ],
    [H, O, Z, variant, getPlaceholder, reportSkillUsagePromptInserted],
  );
  const G = M.D(submit);
  const { onDrop, onPaste } = S.b({
    onDrop: dropAsReferences,
    onPaste: pasteAsReferences,
  });
  return c.jsx(A.k, {
    className: "agentic-generator-prompt-editor-PNhql8",
    autoSize,
    extensions: K,
    value: editorDocument,
    onChange: changeEditorDocument,
    onSubmit: G,
    onFocus: reportActivatePrompt,
    onBlur: reportEnterPrompt,
    onDrop,
    onPaste,
  });
});
const ae = "divider-WRt46E";
const aa = "icon-PPLKkU";
const at = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { referenceRecordText },
    resetReferenceRecord,
  } = agenticGeneratorManager;
  const { collapsed } = d.useContext(b.R);
  const rRef = d.useRef(referenceRecordText);
  d.useEffect(() => {
    rRef.current = referenceRecordText;
  }, [referenceRecordText]);
  return c.jsx("div", {
    className: _u("reference-record-text-container-N7zGAE", {
      "collapsed-hVkah4": collapsed,
      "hidden-a1hIxE": !referenceRecordText,
    }),
    children: c.jsxs("div", {
      className: "reference-record-text-zGA4Ju",
      children: [
        c.jsx("div", {
          className: aa,
          children: c.jsx(V.CGh, {}),
        }),
        c.jsx("span", {
          className: ae,
        }),
        c.jsx("span", {
          className: "content-bO74_v",
          children:
            referenceRecordText != null ? referenceRecordText : rRef.current,
        }),
        c.jsx("span", {
          className: ae,
        }),
        c.jsx("div", {
          className: _u(aa, "icon-close-HOvT7Y"),
          role: "button",
          tabIndex: 0,
          onKeyDown: e9.q,
          "aria-label": [
            T.Ay.t("octo_project_members_btn_remove", {}, "移除"),
            T.Ay.t("video_unified_edit", {}, "参考内容"),
          ].join(" · "),
          onClick: resetReferenceRecord,
          children: c.jsx(V.gzW, {}),
        }),
      ],
    }),
  });
});
const an = d.memo(function (e) {
  const { className } = e;
  return c.jsxs(
    p.d,
    s._(i._({}, e), {
      className: _u(className, "main-content-trGGqM"),
      children: [c.jsx(at, {}), c.jsx(e8, {})],
    }),
  );
});
const a_ = h.PA(function (e) {
  const { audioResource, acceptedFileTypes, sortable = true } = e;
  const r = E._(e, ["audioResource", "acceptedFileTypes", "sortable"]);
  const { referenceRenderProps = {} } = r;
  const { visualIndex = 0 } = referenceRenderProps;
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    referenceAuditManager,
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = agenticGeneratorManager;
  const { isAuditing, auditTooltipContent, auditIcon, auditLabel } = ah.y({
    referenceAuditManager,
    resource: audioResource,
  });
  const k = d.useCallback(
    (e) => {
      replaceReferenceResourceFromLocal(e, visualIndex);
    },
    [replaceReferenceResourceFromLocal, visualIndex],
  );
  const y = d.useMemo(
    () =>
      c.jsx(
        ag.q,
        s._(
          i._(
            {
              audioResource,
              accept:
                acceptedFileTypes != null
                  ? acceptedFileTypes
                  : acceptedFileTypes_1,
              loading: isAuditing,
              icon: auditIcon,
              label: auditLabel,
            },
            r,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: k,
          },
        ),
      ),
    [
      audioResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      removeReferenceResource,
      k,
      isAuditing,
      auditIcon,
      auditLabel,
      r,
    ],
  );
  const C = d.useCallback(
    () =>
      d.cloneElement(y, {
        onRemove: undefined,
      }),
    [y],
  );
  const N = c.jsx(ax.t, {
    resource: audioResource,
    content: auditTooltipContent,
    referenceRenderProps,
    children: y,
  });
  if (sortable) {
    return c.jsx(ab.g, {
      item: audioResource,
      renderDragOverlay: C,
      children: N,
    });
  }
  return N;
});
const aj = h.PA(function (e) {
  const { docxResource, acceptedFileTypes } = e;
  const n = E._(e, ["docxResource", "acceptedFileTypes"]);
  const { referenceRenderProps = {} } = n;
  const { visualIndex = 0 } = referenceRenderProps;
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = agenticGeneratorManager;
  const p = d.useCallback(
    (e) => {
      replaceReferenceResourceFromLocal(e, visualIndex);
    },
    [replaceReferenceResourceFromLocal, visualIndex],
  );
  const v = d.useMemo(
    () =>
      c.jsx(
        af.E,
        i._(
          {
            docxResource,
            accept:
              acceptedFileTypes != null
                ? acceptedFileTypes
                : acceptedFileTypes_1,
            onRemove: removeReferenceResource,
            onDropFromLocal: p,
          },
          n,
        ),
      ),
    [
      docxResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      removeReferenceResource,
      p,
      n,
    ],
  );
  const h = d.useCallback(
    () =>
      d.cloneElement(v, {
        onRemove: undefined,
      }),
    [v],
  );
  return c.jsx(ab.g, {
    item: docxResource,
    renderDragOverlay: h,
    children: c.jsx(ax.t, {
      resource: docxResource,
      referenceRenderProps,
      children: v,
    }),
  });
});
const ay = h.PA(function (e) {
  const { imageResource, acceptedFileTypes, sortable = true } = e;
  const r = E._(e, ["imageResource", "acceptedFileTypes", "sortable"]);
  const { referenceRenderProps = {} } = r;
  const { visualIndex = 0 } = referenceRenderProps;
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    referenceAuditManager,
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = agenticGeneratorManager;
  const { isPreviewLoading, auditTooltipContent, auditIcon, auditLabel } = ah.y(
    {
      referenceAuditManager,
      resource: imageResource,
    },
  );
  const k = d.useCallback(
    (e) => {
      replaceReferenceResourceFromLocal(e, visualIndex);
    },
    [replaceReferenceResourceFromLocal, visualIndex],
  );
  const y = d.useMemo(
    () =>
      c.jsx(
        ak.d,
        s._(
          i._(
            {
              imageResource,
              accept:
                acceptedFileTypes != null
                  ? acceptedFileTypes
                  : acceptedFileTypes_1,
              loading: isPreviewLoading,
              icon: auditIcon,
              label: auditLabel,
            },
            r,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: k,
          },
        ),
      ),
    [
      imageResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      isPreviewLoading,
      auditIcon,
      auditLabel,
      removeReferenceResource,
      k,
      r,
    ],
  );
  const C = d.useCallback(
    () =>
      d.cloneElement(y, {
        onRemove: undefined,
      }),
    [y],
  );
  const N = c.jsx(ax.t, {
    resource: imageResource,
    content: auditTooltipContent,
    referenceRenderProps,
    children: y,
  });
  if (sortable) {
    return c.jsx(ab.g, {
      item: imageResource,
      renderDragOverlay: C,
      children: N,
    });
  }
  return N;
});
const aN = h.PA(function (e) {
  const { markdownResource, acceptedFileTypes } = e;
  const n = E._(e, ["markdownResource", "acceptedFileTypes"]);
  const { referenceRenderProps = {} } = n;
  const { visualIndex = 0 } = referenceRenderProps;
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = agenticGeneratorManager;
  const p = d.useCallback(
    (e) => {
      replaceReferenceResourceFromLocal(e, visualIndex);
    },
    [replaceReferenceResourceFromLocal, visualIndex],
  );
  const v = d.useMemo(
    () =>
      c.jsx(
        aC.v,
        i._(
          {
            markdownResource,
            accept:
              acceptedFileTypes != null
                ? acceptedFileTypes
                : acceptedFileTypes_1,
            onRemove: removeReferenceResource,
            onDropFromLocal: p,
          },
          n,
        ),
      ),
    [
      markdownResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      removeReferenceResource,
      p,
      n,
    ],
  );
  const h = d.useCallback(
    () =>
      d.cloneElement(v, {
        onRemove: undefined,
      }),
    [v],
  );
  return c.jsx(ab.g, {
    item: markdownResource,
    renderDragOverlay: h,
    children: c.jsx(ax.t, {
      resource: markdownResource,
      referenceRenderProps,
      children: v,
    }),
  });
});
const aS = h.PA(function (e) {
  const { pdfResource, acceptedFileTypes } = e;
  const n = E._(e, ["pdfResource", "acceptedFileTypes"]);
  const { referenceRenderProps = {} } = n;
  const { visualIndex = 0 } = referenceRenderProps;
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = agenticGeneratorManager;
  const { uri } = pdfResource;
  const v = d.useCallback(
    (e) => {
      replaceReferenceResourceFromLocal(e, visualIndex);
    },
    [replaceReferenceResourceFromLocal, visualIndex],
  );
  const h = d.useMemo(
    () =>
      c.jsx(
        aM.W,
        i._(
          {
            loading: false,
            pdfResource,
            accept:
              acceptedFileTypes != null
                ? acceptedFileTypes
                : acceptedFileTypes_1,
            onRemove: removeReferenceResource,
            onDropFromLocal: v,
          },
          n,
        ),
      ),
    [
      false,
      pdfResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      removeReferenceResource,
      v,
      n,
    ],
  );
  const g = d.useCallback(
    () =>
      d.cloneElement(h, {
        onRemove: undefined,
      }),
    [h],
  );
  return c.jsx(ab.g, {
    item: pdfResource,
    renderDragOverlay: g,
    children: c.jsx(ax.t, {
      resource: pdfResource,
      referenceRenderProps,
      children: h,
    }),
  });
});
const aR = h.PA(function (e) {
  const { videoResource, acceptedFileTypes, sortable = true } = e;
  const r = E._(e, ["videoResource", "acceptedFileTypes", "sortable"]);
  const { referenceRenderProps = {} } = r;
  const { visualIndex = 0 } = referenceRenderProps;
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { acceptedFileTypes: acceptedFileTypes_1 },
    referenceAuditManager,
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = agenticGeneratorManager;
  const { isAuditing, auditTooltipContent, auditIcon, auditLabel } = ah.y({
    referenceAuditManager,
    resource: videoResource,
  });
  const k = d.useCallback(
    (e) => {
      replaceReferenceResourceFromLocal(e, visualIndex);
    },
    [replaceReferenceResourceFromLocal, visualIndex],
  );
  const y = d.useMemo(
    () =>
      c.jsx(
        aA.L,
        s._(
          i._(
            {
              videoResource,
              accept:
                acceptedFileTypes != null
                  ? acceptedFileTypes
                  : acceptedFileTypes_1,
              loading: isAuditing,
              icon: auditIcon,
              label: auditLabel,
            },
            r,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: k,
          },
        ),
      ),
    [
      videoResource,
      acceptedFileTypes,
      acceptedFileTypes_1,
      removeReferenceResource,
      k,
      isAuditing,
      auditIcon,
      auditLabel,
      r,
    ],
  );
  const C = d.useCallback(
    () =>
      d.cloneElement(y, {
        onRemove: undefined,
      }),
    [y],
  );
  const N = c.jsx(ax.t, {
    resource: videoResource,
    content: auditTooltipContent,
    referenceRenderProps,
    children: y,
  });
  if (sortable) {
    return c.jsx(ab.g, {
      item: videoResource,
      renderDragOverlay: C,
      children: N,
    });
  }
  return N;
});
function aP(reference, a, t, n) {
  if (n) {
    return c.jsx(
      av.G,
      s._(
        i._(
          {
            reference,
          },
          t
            ? {
                referenceRenderProps: t,
              }
            : {},
        ),
        {
          insertIntoPromptLabelKey: n.insertIntoPromptLabelKey,
          insertIntoPromptDefaultText: n.insertIntoPromptDefaultText,
          onInsertReferenceIntoPrompt: (e) => {
            var { id } = e;
            return n.onInsertReferenceIntoPrompt(id);
          },
          children: a,
        },
      ),
      reference.id,
    );
  }
  return a;
}
function aw(e, a, t, n) {
  switch (e.type) {
    case "image":
      return aP(
        e,
        c.jsx(
          ay,
          {
            imageResource: e,
            acceptedFileTypes: n == null ? undefined : n.acceptedFileTypes,
            sortable: n == null ? undefined : n.sortable,
            referenceRenderProps: a,
          },
          e.id,
        ),
        a,
        t,
      );
    case "video":
      return aP(
        e,
        c.jsx(
          aR,
          {
            videoResource: e,
            acceptedFileTypes: n == null ? undefined : n.acceptedFileTypes,
            sortable: n == null ? undefined : n.sortable,
            referenceRenderProps: a,
          },
          e.id,
        ),
        a,
        t,
      );
    case "audio":
      return aP(
        e,
        c.jsx(
          a_,
          {
            audioResource: e,
            acceptedFileTypes: n == null ? undefined : n.acceptedFileTypes,
            sortable: n == null ? undefined : n.sortable,
            referenceRenderProps: a,
          },
          e.id,
        ),
        a,
        t,
      );
    case "markdown":
      return c.jsx(
        aN,
        {
          markdownResource: e,
          acceptedFileTypes: n == null ? undefined : n.acceptedFileTypes,
          referenceRenderProps: a,
        },
        e.id,
      );
    case "pdf":
      return c.jsx(
        aS,
        {
          pdfResource: e,
          acceptedFileTypes: n == null ? undefined : n.acceptedFileTypes,
          referenceRenderProps: a,
        },
        e.id,
      );
    case "docx":
      return c.jsx(
        aj,
        {
          docxResource: e,
          acceptedFileTypes: n == null ? undefined : n.acceptedFileTypes,
          referenceRenderProps: a,
        },
        e.id,
      );
    default:
      return null;
  }
}
const aI = h.PA(function (e) {
  var {
    acceptedFileTypes,
    dropAcceptedFileTypes = acceptedFileTypes,
    referenceRenderProps = {},
  } = e;
  const r = E._(e, [
    "acceptedFileTypes",
    "dropAcceptedFileTypes",
    "referenceRenderProps",
  ]);
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    importReferenceResourcesFromLocal,
    metadata: { referenceAdditionValidationResult },
    reportManager: { reportClickUpload, reportUploadFromLocal },
  } = agenticGeneratorManager;
  const p = ee.L({
    source: ea.HH.Upload,
  });
  const v = d.useCallback(
    (e) => {
      if (!p()) {
        importReferenceResourcesFromLocal(e);
      }
    },
    [importReferenceResourcesFromLocal, p],
  );
  const h = d.useCallback(
    (e) => {
      reportClickUpload("prompt");
      reportUploadFromLocal();
      if (acceptedFileTypes) {
        e.preventDefault();
        aT.y({
          accept: acceptedFileTypes,
          multiple: true,
          onFilesSelected: v,
        });
      }
    },
    [acceptedFileTypes, v, reportClickUpload, reportUploadFromLocal],
  );
  return c.jsx(ax.t, {
    content: referenceAdditionValidationResult.msg,
    referenceRenderProps,
    children: c.jsx(aV.I, {
      component: null,
      guardFileDrop: true,
      source: ea.HH.Upload,
      children: c.jsx(
        aF.L,
        i._(
          {
            accept: dropAcceptedFileTypes,
            disabled: !referenceAdditionValidationResult.ok,
            multiple: true,
            referenceRenderProps,
            onChange: v,
            onClick: h,
          },
          r,
        ),
      ),
    }),
  });
});
const aE = h.PA(function (e) {
  const { className } = e;
  const t = E._(e, ["className"]);
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: {
      acceptedFileTypes,
      acceptedFileTypesByGroup,
      canAddReferenceByTab,
      referencePanelTabs,
      referenceUploadVisible,
    },
    data: {
      referencePanelActiveTab,
      referencePanelVisible,
      referenceResources,
    },
    insertReferenceResourceIntoPrompt,
    removeReferenceResource,
    removeReferenceResources,
    moveReferenceResources,
    setReferencePanelActiveTab,
    setReferencePanelVisible,
  } = agenticGeneratorManager;
  const { referenceGroupWidth, setReferencesElement } = as.C(ac.zh);
  const {
    visibleReferences,
    sortableReferences,
    moreEntryReference,
    panelVisible,
    contentLayoutStacked,
    referenceGroupVisible,
    moreEntryVisible,
  } = d.useMemo(
    () =>
      ac.W8(referenceResources, {
        morePanelVisible: referencePanelVisible,
        referenceGroupWidthBreakpoint: referenceGroupWidth,
      }),
    [referenceGroupWidth, referencePanelVisible, referenceResources],
  );
  const F = d.useMemo(
    () => ({
      insertIntoPromptLabelKey: "web_add_to_chat",
      insertIntoPromptDefaultText: "添加到输入框",
      onInsertReferenceIntoPrompt: insertReferenceResourceIntoPrompt,
    }),
    [insertReferenceResourceIntoPrompt],
  );
  const I = d.useMemo(
    () => visibleReferences.map((e) => aw(e, undefined, F)),
    [F, visibleReferences],
  );
  const W = d.useCallback(() => {
    setReferencePanelVisible(!referencePanelVisible);
  }, [referencePanelVisible, setReferencePanelVisible]);
  const D = d.useMemo(() => {
    if (moreEntryVisible && moreEntryReference) {
      return [
        c.jsx(
          ad.u,
          {
            resource: moreEntryReference,
            onClick: W,
            renderResource: (e, a) => {
              var t;
              if (
                (t = a.referenceRenderProps) == null
                  ? undefined
                  : t.groupCollapsed
              ) {
                return c.jsx("div", {
                  className: "collapsed-more-entry-rztXMz",
                  onClick: W,
                  children: aw(e, a.referenceRenderProps, undefined, {
                    acceptedFileTypes,
                    sortable: false,
                  }),
                });
              }
              return null;
            },
          },
          "more",
        ),
      ];
    }
    return [];
  }, [acceptedFileTypes, W, moreEntryReference, moreEntryVisible]);
  const $ = d.useMemo(() => {
    if (referenceUploadVisible) {
      return [
        c.jsx(
          aI,
          {
            acceptedFileTypes,
          },
          "upload",
        ),
      ];
    }
    return [];
  }, [acceptedFileTypes, referenceUploadVisible]);
  const z = d.useMemo(() => [...I, ...D, ...$], [I, D, $]);
  const onClearReferences = d.useCallback(
    (e) => {
      removeReferenceResources(e);
    },
    [removeReferenceResources],
  );
  const renderReference = d.useCallback(
    (e, a, t) => {
      var { acceptedFileTypes } = t;
      return aw(
        e,
        {
          axisAligned: true,
          groupCollapsed: false,
          indexInGroup: a,
          visualIndex: a,
        },
        F,
        {
          acceptedFileTypes,
        },
      );
    },
    [F],
  );
  const renderUpload = d.useCallback(
    (e) => {
      var { acceptedFileTypes, dropAcceptedFileTypes, referenceRenderProps } =
        e;
      if (referenceUploadVisible) {
        return c.jsx(aI, {
          acceptedFileTypes,
          dropAcceptedFileTypes,
          referenceRenderProps,
        });
      }
      return null;
    },
    [referenceUploadVisible],
  );
  const onCollapse = d.useCallback(() => {
    setReferencePanelVisible(false);
  }, [setReferencePanelVisible]);
  return c.jsx(ai.n, {
    resources: referenceResources,
    children: c.jsx(au.Q, {
      items: referenceGroupVisible ? sortableReferences : [],
      onMove: moveReferenceResources,
      onRemove: removeReferenceResource,
      children: c.jsxs(
        ar.B,
        s._(
          i._(
            {
              ref: setReferencesElement,
            },
            t,
          ),
          {
            className: _u(className, "references-dOJtjC", {
              "panel-visible-SLjeY6": panelVisible,
              "content-generator-references-stacked-layout":
                contentLayoutStacked,
            }),
            children: [
              referenceGroupVisible
                ? c.jsx(al.V, {
                    children: z,
                  })
                : null,
              panelVisible
                ? c.jsx(am.M, {
                    className: "panel-slot-RfSjdS",
                    children: c.jsx(ao.y, {
                      references: referenceResources,
                      activeTab: referencePanelActiveTab,
                      panelTabs: referencePanelTabs,
                      children: c.jsx(ap.c, {
                        references: referenceResources,
                        activeTab: referencePanelActiveTab,
                        panelTabs: referencePanelTabs,
                        acceptedFileTypes,
                        acceptedFileTypesByTab: acceptedFileTypesByGroup,
                        canAddByTab: canAddReferenceByTab,
                        onActiveTabChange: setReferencePanelActiveTab,
                        onClearReferences,
                        onCollapse,
                        onMove: moveReferenceResources,
                        renderReference,
                        renderUpload,
                      }),
                    }),
                  })
                : null,
            ],
          },
        ),
      ),
    }),
  });
});
const aD = h.PA(function (e) {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: {
      abortable,
      submitButtonDisabled,
      submitButtonLoading,
      submitButtonTooltipProps,
    },
    taskSubmissionManager: { submit, abortByUser },
  } = agenticGeneratorManager;
  const m = M.D(submit);
  const p = d.useCallback(
    () =>
      v._(function* () {
        if (abortable) {
          abortByUser();
        } else {
          yield m();
        }
      })(),
    [abortable, abortByUser, m],
  );
  return c.jsx(aV.I, {
    component: null,
    source: ea.HH.ClickGenerate,
    children: c.jsx(
      aW.F,
      s._(i._({}, e), {
        abortable,
        disabled: submitButtonDisabled,
        loading: submitButtonLoading,
        tooltipProps: submitButtonTooltipProps,
        onClick: p,
      }),
    ),
  });
});
const aZ = d.memo(function (e) {
  const a = d.useMemo(
    () =>
      T.Ay.t("creative_model_guide", {}, "创意设计 · 一键产出高质量方案灵感"),
    [],
  );
  const t = d.useMemo(
    () =>
      T.Ay.t(
        "creative_model_guide_desc",
        {},
        "描述你的设计需求，Agent即可生成多组创意方案，在海报与各类设计中表现更出色。",
      ),
    [],
  );
  const n = d.useMemo(
    () => ({
      clickToClose: false,
    }),
    [],
  );
  return c.jsx(
    B.K,
    i._(
      {
        imageUrl: aO,
        animationUrl: aL,
        title: a,
        description: t,
        triggerProps: n,
      },
      e,
    ),
  );
});
const aB = h.PA(function () {
  const { compact, variant } = d.useContext(b.R);
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { creativeModelEnabled },
    toggleCreativeModelEnabled,
  } = agenticGeneratorManager;
  const l = d.useMemo(() => {
    if (creativeModelEnabled) {
      return c.jsx(V.fcI, {});
    }
    return c.jsx(V.Vvj, {});
  }, [creativeModelEnabled]);
  const o = d.useMemo(
    () => T.Ay.t("web_canva_agent_creative_model", {}, "创意设计"),
    [],
  );
  if (variant !== "canvas" && f.F) {
    return null;
  }
  return c.jsx(aZ, {
    children: c.jsx(W.A, {
      content: o,
      disabled: !compact,
      children: c.jsx(aU.I, {
        icon: l,
        onClick: toggleCreativeModelEnabled,
        checked: creativeModelEnabled,
        children: o,
      }),
    }),
  });
});
function aX(e) {
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
}
function aJ(e) {
  if (typeof e === "string" && e.trim()) {
    return e.trim();
  }
}
function aq(e) {
  return e === aG._3.LIMIT_BY_COUNT || e === aG._3.LIMIT_BY_TIME;
}
function aQ(role, a) {
  return String(role) === String(a);
}
function aY(e) {
  return aJ(e.benefitType);
}
function a0(item, a) {
  let t;
  let n;
  let r;
  const e_benefitsPayStrategy = item.benefitsPayStrategy;
  const o = (r = item.benefitsDisplayResource) != null ? r : [];
  const i = a
    .map((e) => e_benefitsPayStrategy.find((a) => aY(a) === e))
    .find(Boolean);
  const s = a.map((e) => o.find((a) => aY(a) === e)).find(Boolean);
  const c = i != null ? i : s;
  const benefitType = c ? aY(c) : undefined;
  if (benefitType) {
    return {
      item,
      benefitType,
      limits:
        i &&
        (t =
          (n = i.limitfreeStrategy) == null ? undefined : n.limitfreeLimits) !=
          null
          ? t
          : [],
    };
  }
}
const a1 = h.PA(function () {
  let e;
  let a;
  let t;
  const { agenticGeneratorManager } = j.h(_.V);
  const r = j.h(aH.M);
  const { metadata, data, changeInferenceModel, changeCreationMode } =
    agenticGeneratorManager;
  const u = (t = metadata.inferenceData) == null ? undefined : t.modelList;
  const [, mDispatch] = d.useReducer((e) => e + 1, 0);
  d.useEffect(() => {
    var e = r.onBenefitStrategyChange(() => mDispatch());
    return () => e.dispose();
  }, [r]);
  e = u != null ? u : [];
  a = r.getMetaData();
  const promotions = Object.fromEntries(
    e.flatMap((e) => {
      var t = ((e, a) => {
        let t;
        const n = (t = a == null ? undefined : a.metadataList) != null ? t : [];
        const { commerceBenefit } = e;
        if (commerceBenefit) {
          const l = n.find(
            (e) =>
              e.resourceType === commerceBenefit.resourceType &&
              e.resourceId === commerceBenefit.resourceId,
          );
          if (l) {
            return a0(l, [commerceBenefit.benefitType]);
          }
          return undefined;
        }
        const o = [aJ(e.benefitType), aJ(e.benefitKey)].filter((e) => !!e);
        return n.map((e) => a0(e, o)).find((e) => e !== undefined);
      })(e, a);
      var n = t
        ? ((e, a) => {
            const { item, benefitType, limits } = e;
            const l = {
              resourceType: item.resourceType,
              resourceId: item.resourceId,
              benefitType,
            };
            const o = a.getBenefitStrategy(l);
            const i =
              o == null
                ? undefined
                : o.strategies
                    .filter((e) => {
                      var a;
                      return (
                        e.payMode === aG.Ln.LimitFree &&
                        aq(
                          (a = e.limitStrategy) == null
                            ? undefined
                            : a.limitFreeType,
                        )
                      );
                    })
                    .flatMap((e) => {
                      if (e.limitStrategy) {
                        return [e.limitStrategy];
                      }
                      return [];
                    });
            const s =
              (p =
                i == null
                  ? undefined
                  : i
                      .map((e) =>
                        limits.find(
                          (a) =>
                            a.limitFreeType === e.limitFreeType &&
                            aQ(a.role, e.role),
                        ),
                      )
                      .find(Boolean)) != null
                ? p
                : limits.find((e) => aq(e.limitFreeType));
            const c = s == null ? undefined : s.limitFreeType;
            if (s && aq(c)) {
              let d;
              let u;
              const m =
                i == null
                  ? undefined
                  : i.find((e) => e.limitFreeType === c && aQ(e.role, s.role));
              if (c !== aG._3.LIMIT_BY_COUNT) {
                return {
                  type: "limited-time",
                  startTime: aX((d = s.limitStartTime) != null ? d : s.st),
                  endTime: aX((u = s.limitEndTime) != null ? u : s.et),
                };
              }
              var p;
              let v;
              let h;
              const remainingCount =
                (v =
                  (h = aX(m == null ? undefined : m.quotaLeft)) != null
                    ? h
                    : aX(s.limitCount)) != null
                  ? v
                  : 0;
              if (remainingCount > 0) {
                return {
                  type: "limited-count",
                  remainingCount,
                };
              }
            }
            const x = o == null ? undefined : o.benefitsDisplayResource;
            const b = x == null ? undefined : x.textLinkConfig;
            const text = aJ(b == null ? undefined : b.text);
            if (text) {
              return {
                type: "display-resource",
                text,
                info: aJ(b == null ? undefined : b.info),
              };
            }
          })(t, r)
        : undefined;
      if (n) {
        return [[e.modelId, n]];
      }
      return [];
    }),
  );
  return c.jsx(aK.K, {
    models: u != null ? u : [],
    promotions,
    value: data.inferenceModelId,
    onChange: changeInferenceModel,
    showCreationModeSwitch: metadata.creationModeSelectorEnabled,
    creationMode: data.creationMode,
    onCreationModeChange: changeCreationMode,
  });
});
const a2 = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { searchEnabled },
  } = agenticGeneratorManager;
  const { compact, variant } = d.useContext(b.R);
  const r = d.useMemo(() => {
    if (searchEnabled) {
      return c.jsx(V.g7x, {});
    }
    return c.jsx(V.wOm, {});
  }, [searchEnabled]);
  const l = T.F2.t("web_canva_agent_search_inspiration", {}, "Web search");
  if (variant !== "canvas" && a6.C) {
    return null;
  }
  return c.jsx(W.A, {
    content: l,
    disabled: !compact,
    children: c.jsx(aU.I, {
      icon: r,
      onClick: agenticGeneratorManager.toggleSearchEnabled,
      checked: searchEnabled,
      children: compact ? null : l,
    }),
  });
});
function a8(e, a) {
  const t = T.Ay.t(e, {}, a);
  if (t && t !== e) {
    return t;
  }
  return a;
}
function a9() {
  let e;
  let a;
  let t;
  let n;
  let r;
  let l;
  const { agenticGeneratorManager } = j.h(_.V);
  const { imageSettingsManager, videoSettingsManager } =
    agenticGeneratorManager;
  const { imageSettings, videoSettings } =
    agenticGeneratorManager.data.generatorSettings;
  const modelList = imageSettingsManager.metadata.modelList;
  const models = videoSettingsManager.metadata.models;
  const p = a8("web_agent_preference_setting_auto_model", "Auto model");
  const v = a8("web_agent_preference_setting_auto_ratio", "Auto aspect ratio");
  const h = a8(
    "web_agent_preference_setting_auto_resolution",
    "Auto resolution",
  );
  const g = agenticGeneratorManager.isCreationSelectionManual("image", "model");
  const x = agenticGeneratorManager.isCreationSelectionManual("video", "model");
  const b = agenticGeneratorManager.isCreationSelectionManual(
    "image",
    "aspectRatio",
  );
  const f = agenticGeneratorManager.isCreationSelectionManual(
    "video",
    "aspectRatio",
  );
  const k = agenticGeneratorManager.isCreationSelectionManual(
    "image",
    "resolution",
  );
  const y = agenticGeneratorManager.isCreationSelectionManual(
    "video",
    "resolution",
  );
  const C = b ? imageSettings.aspectRatio : undefined;
  const N = f ? videoSettings.aspectRatio : undefined;
  const imageSettingsDisplay = {
    isAutomatic: !(g || b || k),
    name:
      g &&
      (e =
        (t = modelList.find((e) => e.key === imageSettings.modelKey)) == null
          ? undefined
          : t.name) != null
        ? e
        : p,
    aspectRatio: C != null ? C : v,
    resolution:
      (k &&
        ((n = imageSettings.resolution) == null
          ? undefined
          : n.toUpperCase())) ||
      h,
  };
  const videoSettingsDisplay = {
    isAutomatic: !(x || f || y),
    name:
      x &&
      (a =
        (r = models.find((e) => e.key === videoSettings.modelKey)) == null
          ? undefined
          : r.name) != null
        ? a
        : p,
    aspectRatio: N != null ? N : v,
    resolution:
      (y &&
        ((l = videoSettings.resolution) == null
          ? undefined
          : l.toUpperCase())) ||
      h,
  };
  return {
    allSettingsAutomatic:
      imageSettingsDisplay.isAutomatic && videoSettingsDisplay.isAutomatic,
    imageSettingsDisplay,
    videoSettingsDisplay,
  };
}
const te = "value-Truh4N";
const ta = "divider-Sm7Zdw";
const tt = h.PA(function () {
  const { imageSettingsDisplay, videoSettingsDisplay } = a9();
  const t = [
    {
      key: "video",
      label: T.Ay.t("web_agent_reference_resource_type_video", {}, "Video"),
      settings: videoSettingsDisplay,
    },
    {
      key: "image",
      label: T.Ay.t("web_agent_reference_resource_type_image", {}, "Image"),
      settings: imageSettingsDisplay,
    },
  ];
  return c.jsx("div", {
    className: "panel-container-YX01Vr",
    children: t.map((e) => {
      var { key, label, settings } = e;
      return c.jsxs(
        "div",
        {
          className: "row-jJrAwN",
          children: [
            c.jsxs("span", {
              className: "label-UAAjTv",
              children: [label, "："],
            }),
            c.jsx("span", {
              className: te,
              children: settings.name,
            }),
            c.jsx("span", {
              className: ta,
              "aria-hidden": true,
            }),
            c.jsx("span", {
              className: te,
              children: settings.aspectRatio,
            }),
            c.jsx("span", {
              className: ta,
              "aria-hidden": true,
            }),
            c.jsx("span", {
              className: te,
              children: settings.resolution,
            }),
          ],
        },
        key,
      );
    }),
  });
});
const ti = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { imageSettingsManager } = agenticGeneratorManager;
  const {
    data: { aspectRatio },
    metadata: { aspectRatioOptions },
    selectAspectRatio,
  } = imageSettingsManager;
  const { manualSettingsEnabled } = agenticGeneratorManager.data;
  return c.jsx(tl.R, {
    title: T.Ay.t("web_generator_box_select_ratio", {}, "选择比例"),
    children: c.jsx(to._, {
      responsive: true,
      className: _u({
        "aspect-ratio-radio-group-disabled-JZfxiF": !manualSettingsEnabled,
      }),
      options: aspectRatioOptions,
      value: aspectRatio,
      onChange: selectAspectRatio,
    }),
  });
});
const td = d.memo(
  d.forwardRef(function (e, a) {
    const { className, children } = e;
    const r = E._(e, ["className", "children"]);
    const { active } = r;
    const o = d.useMemo(
      () =>
        c.jsx(V.rIS, {
          size: 12,
          className: _u("arrow-icon-EnSEQw", {
            "arrow-icon-rotated-tJPoLs": active,
          }),
        }),
      [active],
    );
    return c.jsxs(
      tc.b,
      s._(
        i._(
          {
            ref: a,
          },
          r,
        ),
        {
          className: _u("trigger-button-lUybV6", className, {
            "active-BctY7v": active,
          }),
          children: [children, o],
        },
      ),
    );
  }),
);
const tu = h.PA(function (e) {
  const { options } = e;
  const t = E._(e, ["options"]);
  const { className, triggerProps, onClick, onVisibleChange, value } = t;
  const { agenticGeneratorManager } = j.h(_.V);
  const { manualSettingsEnabled } = agenticGeneratorManager.data;
  const [h, setH] = d.useState(false);
  const x = d.useMemo(() => {
    var e;
    if ((e = options.find((e) => e.value === value)) == null) {
      return undefined;
    }
    return e.label;
  }, [options, value]);
  const b = d.useCallback(
    (e) => {
      if (!agenticGeneratorManager.data.manualSettingsEnabled) {
        agenticGeneratorManager.changeManualSettingsEnabled(true);
      }
      if (onClick != null) {
        onClick(e);
      }
    },
    [agenticGeneratorManager, onClick],
  );
  const f = d.useCallback(
    (e) => {
      setH(e);
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
    },
    [onVisibleChange],
  );
  const k = d.useMemo(
    () =>
      _u(className, {
        "trigger-button-disabled-bAFITJ": !manualSettingsEnabled,
      }),
    [className, manualSettingsEnabled],
  );
  const y = d.useMemo(
    () =>
      c.jsx(td, {
        active: h,
        className: k,
        onClick: b,
        children: x,
      }),
    [k, b, x, h],
  );
  return c.jsx(
    ts.W,
    s._(i._({}, t), {
      triggerProps,
      triggerElement: y,
      onClick: b,
      className: k,
      options,
      onVisibleChange: f,
    }),
  );
});
const tm = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { imageSettingsManager } = agenticGeneratorManager;
  const {
    metadata: { modelOptions },
    data: { modelKey },
    switchModel,
  } = imageSettingsManager;
  return c.jsx(tu, {
    options: modelOptions,
    value: modelKey,
    onChange: switchModel,
    className: "model-select-sFUyvJ",
  });
});
const tx = d.memo(function (e) {
  const a = th.n();
  return c.jsxs("div", {
    className: _u("commercial-content-UMVApo", e.className),
    children: [
      e.text,
      c.jsx(tg.X, {
        limitations: a,
        showUnitCreditFreeTrialForVip: true,
      }),
    ],
  });
});
const tb = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { imageSettingsManager } = agenticGeneratorManager;
  const {
    metadata: { resolutionOptions },
    data: { resolution },
    selectResolution,
  } = imageSettingsManager;
  const { manualSettingsEnabled } = agenticGeneratorManager.data;
  const o = d.useCallback(() => {
    if (!agenticGeneratorManager.data.manualSettingsEnabled) {
      agenticGeneratorManager.changeManualSettingsEnabled(true);
    }
  }, [agenticGeneratorManager]);
  const u = d.useMemo(() => c.jsx(V.rIS, {}), []);
  const p = d.useMemo(
    () =>
      resolutionOptions.map((e) => {
        var a;
        return s._(i._({}, e), {
          label: c.jsx(tp.n, {
            ignoreClickIntercept: true,
            component: null,
            sceneOptions:
              (a = e.extra) == null ? undefined : a.commercialSceneOptions,
            children: c.jsx(tx, {
              className: "dropdown-option-content-CbceQ4",
              text: e.label,
            }),
          }),
        });
      }),
    [resolutionOptions],
  );
  const v = d.useMemo(
    () => ({
      position: "top",
      popupAlign: {
        top: I.vw,
        bottom: I.vw,
      },
    }),
    [],
  );
  return c.jsx(tv.V, {
    arrowIcon: u,
    className: _u("resolution-select-LdQl7K", {
      "resolution-select-disabled-lnz_QN": !manualSettingsEnabled,
    }),
    options: p,
    onClick: o,
    onChange: (e) => selectResolution(e),
    triggerProps: v,
    dropdownMenuClassName: "resolution-select-dropdown-menu-nr6toz",
    dropdownTitle: T.Ay.t("web_canva_agent_param_resolution", {}, "Resolution"),
    value: resolution,
  });
});
const t_ = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { imageSettingsManager } = agenticGeneratorManager;
  const { resolutionOptions } = imageSettingsManager.metadata;
  return c.jsx(tl.R, {
    title: T.Ay.t("web_canva_agent_param_other_setting", {}, "Models"),
    children: c.jsxs("div", {
      className: "other-settings-Hf9r9h",
      children: [c.jsx(tm, {}), resolutionOptions.length > 0 && c.jsx(tb, {})],
    }),
  });
});
const tf = d.memo(function () {
  return c.jsxs(c.Fragment, {
    children: [c.jsx(ti, {}), c.jsx(t_, {})],
  });
});
const tj = {
  "aspect-ratio-radio-group-disabled":
    "aspect-ratio-radio-group-disabled-YcqaFX",
  aspectRatioRadioGroupDisabled: "aspect-ratio-radio-group-disabled-YcqaFX",
};
const tk = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { videoSettingsManager } = agenticGeneratorManager;
  const {
    metadata: { aspectRatioOptions },
    data: { aspectRatio },
    selectAspectRatio,
  } = videoSettingsManager;
  const {
    data: { manualSettingsEnabled },
  } = agenticGeneratorManager;
  return c.jsx(to._, {
    responsive: true,
    className: _u(tj.aspectRatioRadioGroup, {
      [tj.aspectRatioRadioGroupDisabled]: !manualSettingsEnabled,
    }),
    options: aspectRatioOptions,
    value: aspectRatio,
    onChange: selectAspectRatio,
  });
});
const ty = h.PA(function () {
  return c.jsx(tl.R, {
    title: T.Ay.t("web_generator_box_select_ratio", {}, "选择比例"),
    children: c.jsx(tk, {}),
  });
});
const tC = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { videoSettingsManager } = agenticGeneratorManager;
  const {
    metadata: { modelOptions },
    data: { modelKey },
    switchModel,
  } = videoSettingsManager;
  return c.jsx(tu, {
    options: modelOptions,
    value: modelKey,
    onChange: switchModel,
    className: "model-select-h_IGO7",
  });
});
const tS = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { videoSettingsManager } = agenticGeneratorManager;
  const {
    metadata: { resolutionOptions },
    data: { resolution },
    setResolutionManual,
  } = videoSettingsManager;
  const {
    data: { manualSettingsEnabled },
  } = agenticGeneratorManager;
  const o = d.useCallback(() => {
    if (!agenticGeneratorManager.data.manualSettingsEnabled) {
      agenticGeneratorManager.changeManualSettingsEnabled(true);
    }
  }, [agenticGeneratorManager]);
  const u = d.useMemo(
    () =>
      resolutionOptions.map((e) => {
        var a;
        return s._(i._({}, e), {
          label: c.jsx(aV.I, {
            className: "option-container-HLD6C9",
            source: ea.HH.ClickSide,
            children: c.jsx(tN.v, {
              ignoreClickIntercept: true,
              component: null,
              sceneOptions:
                (a = e.extra) == null ? undefined : a.commercialSceneOptions,
              children: c.jsx(tM.I, {
                className: "dropdown-option-content-c5lYpa",
                option: e,
              }),
            }),
          }),
        });
      }),
    [resolutionOptions],
  );
  const p = d.useMemo(() => c.jsx(V.rIS, {}), []);
  const v = d.useMemo(
    () => ({
      position: "top",
      popupAlign: {
        top: I.vw,
        bottom: I.vw,
      },
    }),
    [],
  );
  return c.jsx(tv.V, {
    arrowIcon: p,
    className: _u("resolution-select-ujLb1m", {
      "resolution-select-disabled-AmH9xn": !manualSettingsEnabled,
    }),
    options: u,
    onClick: o,
    triggerProps: v,
    dropdownTitle: T.Ay.t("web_canva_agent_param_resolution", {}, "Resolution"),
    dropdownMenuClassName: "resolution-select-dropdown-menu-yBeuyz",
    value: resolution,
    onChange: (e) => setResolutionManual(e),
  });
});
const tA = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { videoSettingsManager } = agenticGeneratorManager;
  const { resolutionOptions } = videoSettingsManager.metadata;
  return c.jsx(tl.R, {
    title: T.Ay.t("web_canva_agent_param_other_setting", {}, "Models"),
    children: c.jsxs("div", {
      className: "other-settings-VBjPB1",
      children: [c.jsx(tC, {}), resolutionOptions.length > 0 && c.jsx(tS, {})],
    }),
  });
});
const tR = h.PA(function () {
  return c.jsxs(c.Fragment, {
    children: [c.jsx(ty, {}), c.jsx(tA, {})],
  });
});
const tW = "active-QWCa8F";
const tD = "model-row-rzBgYN";
const t$ = "disabled-QR3FPG";
const tz = "model-main-Wfbrub";
const tU = "model-content-bzWR27";
const tO = "model-fallback-icon-tuYkwj";
const tL = "model-check-Zwq06d";
const tZ = "model-label-yl7jZQ";
const tB = "section-UF2awq";
const tH = "section-title-HzK_rW";
const tK = "resolution-option-bRF_To";
const tG = "__agentic_resolution_auto__";
const tX = () => T.Ay.t("dreamina_image4_ratio_auto", {});
const tJ = () => T.Ay.t("web_agent_preference_setting_model", {}, "Model");
function tq(aspectRatioOptions) {
  return aspectRatioOptions.map((e) => {
    if (typeof e !== "object") {
      return {
        value: e,
        label: e != null ? e : tX(),
      };
    }
    if (e.value === undefined) {
      return s._(i._({}, e), {
        label: tX(),
      });
    }
    return e;
  });
}
function tQ(e) {
  let a;
  const { option, vipIconClassName } = e;
  const r = th.n();
  const { statusProps } = (a = option.extra.commercial) != null ? a : {};
  return c.jsx(
    tg.X,
    s._(i._({}, statusProps), {
      limitations: r,
      vipIconClassName: _u(
        statusProps == null ? undefined : statusProps.vipIconClassName,
        vipIconClassName,
      ),
    }),
  );
}
function tY(e) {
  let a;
  const { option } = e;
  const n =
    (a = option.extra.hoverDescription) != null ? a : option.extra.description;
  return c.jsxs("div", {
    className: "model-details-iknaSz",
    children: [
      c.jsxs("div", {
        className: "model-details-title-IuELiY",
        children: [
          c.jsx("span", {
            children: option.label,
          }),
          c.jsx(tQ, {
            option,
            vipIconClassName: "hidden-vip-icon-eJe4Np",
          }),
        ],
      }),
      c.jsx("div", {
        className: "model-description-edl3QB",
        children: typeof n === "function" ? n(option) : n,
      }),
    ],
  });
}
const t0 = new Map();
const t1 = new Map();
function t6(e) {
  const a = t1.get(e);
  if (a) {
    return a;
  }
  const t = tI.y(e).then(
    (a) => {
      var { width, height } = a;
      t0.set(
        e,
        width && height
          ? {
              width,
              height,
            }
          : null,
      );
      if (!(width && height)) {
        t1.delete(e);
      }
    },
    (a) => {
      tV.V.error("[ModelIcon] Failed to load image:", a);
      t0.set(e, null);
      t1.delete(e);
    },
  );
  t1.set(e, t);
  return t;
}
function useT2(e) {
  const { url } = e;
  const [t, setT] = d.useState(() => {
    if (url) {
      return t0.get(url);
    }
    return null;
  });
  d.useEffect(() => {
    if (url) {
      var e = true;
      t6(url).then(() => {
        if (e) {
          setT(t0.get(url));
        }
      });
      return () => {
        e = false;
      };
    }
  }, [url]);
  if (t) {
    return c.jsx("span", {
      className: _u("model-icon-v2iSsC", {
        "model-icon-with-padding-emP9Te": t.width === 40 && t.height === 40,
      }),
      style: {
        "--model-icon-url": "url(".concat(JSON.stringify(url), ")"),
      },
      "aria-hidden": true,
    });
  }
  if (t === null) {
    return c.jsx(V.xqN, {
      className: tO,
      size: 16,
      "aria-hidden": true,
    });
  }
  return c.jsx("span", {
    className: tO,
    "aria-hidden": true,
  });
}
function useT3(e) {
  const { options, value, onChange } = e;
  const rRef = d.useRef(null);
  const [l, setL] = d.useState({
    left: false,
    right: false,
  });
  const onContentScroll = d.useCallback(() => {
    var rRef_current = rRef.current;
    if (rRef_current) {
      setL({
        left: rRef_current.scrollLeft > 1,
        right:
          rRef_current.scrollLeft + rRef_current.clientWidth <
          rRef_current.scrollWidth - 1,
      });
    }
  }, []);
  d.useEffect(() => {
    var e;
    var rRef_current = rRef.current;
    if (rRef_current) {
      var t =
        (e = rRef_current.querySelector("input:checked")) == null
          ? undefined
          : e.closest("label");
      if (t) {
        var n = t.offsetLeft - rRef_current.offsetLeft;
        rRef_current.scrollLeft = Math.max(
          n + t.offsetWidth - rRef_current.clientWidth,
          Math.min(rRef_current.scrollLeft, n),
        );
      }
      onContentScroll();
      var l = new ResizeObserver(onContentScroll);
      l.observe(rRef_current);
      return () => l.disconnect();
    }
  }, [options, value, onContentScroll]);
  return c.jsx(tF.J, {
    className: "clarity-scroll-hkTHjG",
    contentClassName: "clarity-viewport-Qi4vha",
    contentRef: rRef,
    onContentScroll,
    scrollControls: ["left", "right"].map((e) =>
      c.jsx(
        "div",
        {
          className: _u("clarity-scroll-control-_faGi1", {
            "clarity-scroll-left-f04fYa": e === "left",
            "clarity-scroll-right-djZ5_s": e === "right",
            "unavailable-LMVqkL": !l[e],
          }),
          children: c.jsx("button", {
            type: "button",
            className: "clarity-scroll-button-cKnv9v",
            "aria-label": T.Ay.t(
              e === "left"
                ? "web_agent_subject_material_scroll_versions_left"
                : "web_agent_subject_material_scroll_versions_right",
              {},
            ),
            "aria-disabled": !l[e],
            tabIndex: l[e] ? 0 : -1,
            onClick: () =>
              ((e) => {
                if (l[e]) {
                  var a = rRef.current;
                  if (a != null) {
                    a.scrollBy({
                      left: (e === "left" ? -1 : 1) * a.clientWidth,
                      behavior: "smooth",
                    });
                  }
                }
              })(e),
            children:
              e === "left"
                ? c.jsx(V.gu7, {
                    size: 12,
                  })
                : c.jsx(V.Vjx, {
                    size: 12,
                  }),
          }),
        },
        e,
      ),
    ),
    children: c.jsx(tE.h, {
      className: _u("clarity-group-tx3Jlb", {
        "clarity-overflow-ICFkUZ": options.length > 4,
      }),
      options,
      value,
      onChange,
    }),
  });
}
function useT7(e) {
  const {
    modelOptions,
    modelValue,
    autoModelSelected,
    onAutoModel,
    onModel,
    aspectRatioOptions,
    aspectRatioValue,
    onAspectRatio,
    resolutionOptions,
    resolutionValue,
    onResolution,
  } = e;
  const h = d.useMemo(
    () => [
      {
        label: tX(),
        value: tG,
      },
      ...resolutionOptions,
    ],
    [resolutionOptions],
  );
  const g = resolutionValue != null ? resolutionValue : tG;
  const x = d.useCallback(
    (e) => {
      onResolution(e === tG ? undefined : e);
    },
    [onResolution],
  );
  return c.jsxs(c.Fragment, {
    children: [
      c.jsxs("div", {
        className: "model-list-_e3foC",
        role: "listbox",
        "aria-label": tJ(),
        children: [
          c.jsxs("button", {
            type: "button",
            className: _u(tD, {
              [tW]: autoModelSelected,
            }),
            onClick: onAutoModel,
            role: "option",
            "aria-selected": autoModelSelected,
            children: [
              c.jsxs("span", {
                className: tz,
                children: [
                  c.jsx(V.xqN, {
                    className: tO,
                    size: 16,
                  }),
                  c.jsx("span", {
                    className: tU,
                    children: c.jsx("span", {
                      className: tZ,
                      children: "".concat(tJ(), " · ").concat(tX()),
                    }),
                  }),
                ],
              }),
              autoModelSelected
                ? c.jsx(V.iWP, {
                    className: tL,
                    size: 16,
                  })
                : null,
            ],
          }),
          modelOptions.map((e) => {
            var a;
            var r;
            var o = !autoModelSelected && e.value === modelValue;
            var url = (a = e.extra) == null ? undefined : a.iconUrl;
            return c.jsx(
              tw.h,
              {
                component: null,
                ignoreClickIntercept: true,
                isCreditsTooltipDisabled: true,
                tooltipTriggerProps: {
                  trigger: ["hover", "focus"],
                },
                sceneOptions:
                  (r = e.extra.commercial) == null ? undefined : r.sceneOptions,
                disabled: e.disabled,
                children: c.jsx(tP.A, {
                  className: "model-details-popover-BFCPaQ",
                  content: c.jsx(tY, {
                    option: e,
                  }),
                  trigger: ["hover", "focus"],
                  position: "lt",
                  showArrow: false,
                  triggerProps: {
                    mouseEnterDelay: 300,
                    mouseLeaveDelay: 100,
                    popupAlign: {
                      left: 12,
                      right: 12,
                    },
                    style: {
                      width: 240,
                      maxWidth: 240,
                    },
                    containerScrollToClose: true,
                  },
                  children: c.jsxs("button", {
                    type: "button",
                    disabled: e.disabled,
                    className: _u(tD, {
                      [tW]: o,
                      [t$]: e.disabled,
                    }),
                    onClick: () => onModel(e.value),
                    role: "option",
                    "aria-selected": o,
                    children: [
                      c.jsxs("span", {
                        className: tz,
                        children: [
                          c.jsx(
                            useT2,
                            {
                              url,
                            },
                            url,
                          ),
                          c.jsxs("span", {
                            className: tU,
                            children: [
                              c.jsx("span", {
                                className: tZ,
                                children: e.label,
                              }),
                              c.jsx(tQ, {
                                option: e,
                              }),
                            ],
                          }),
                        ],
                      }),
                      o
                        ? c.jsx(V.iWP, {
                            className: tL,
                            size: 16,
                          })
                        : null,
                    ],
                  }),
                }),
              },
              e.value,
            );
          }),
        ],
      }),
      c.jsx("div", {
        className: "divider-u9Pk0N",
      }),
      c.jsxs("div", {
        className: "settings-column-DfoaIz",
        children: [
          c.jsxs("section", {
            className: _u(tB, "scale-section-zAu04m"),
            children: [
              c.jsx("div", {
                className: tH,
                children: T.Ay.t(
                  "web_agent_preference_setting_ratio",
                  {},
                  "Aspect ratio",
                ),
              }),
              c.jsx("div", {
                className: "ratio-grid-bd8wVU",
                children: aspectRatioOptions.map((e) => {
                  var a;
                  var t;
                  var n = e.value === aspectRatioValue;
                  return c.jsxs(
                    "button",
                    {
                      type: "button",
                      disabled: e.disabled,
                      className: _u("ratio-option-afQNVC", {
                        [tW]: n,
                        [t$]: e.disabled,
                      }),
                      onClick: () => onAspectRatio(e.value),
                      "aria-pressed": n,
                      children: [
                        c.jsx(tT.z, {
                          aspectRatio: e.value,
                          size: 16,
                        }),
                        c.jsx("span", {
                          className: "ratio-label-BWfTtw",
                          children: (a = e.label) != null ? a : tX(),
                        }),
                      ],
                    },
                    String((t = e.value) != null ? t : "auto"),
                  );
                }),
              }),
            ],
          }),
          c.jsxs("section", {
            className: _u(tB, "clarity-section-GjGr2V"),
            children: [
              c.jsx("div", {
                className: tH,
                children: T.Ay.t(
                  "web_agent_preference_setting_resolution",
                  {},
                  "Resolution",
                ),
              }),
              c.jsx(useT3, {
                options: h,
                value: g,
                onChange: x,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const t4 = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { imageSettingsManager } = agenticGeneratorManager;
  const {
    data: { modelKey, aspectRatio, resolution },
    metadata: { modelOptions, aspectRatioOptions, resolutionOptions },
    switchModel,
    selectAspectRatio,
    selectResolution,
  } = imageSettingsManager;
  const h = d.useMemo(() => tq(aspectRatioOptions), [aspectRatioOptions]);
  const g = d.useMemo(
    () =>
      resolutionOptions.map((e) => {
        var a;
        return s._(i._({}, e), {
          label: c.jsx(tp.n, {
            ignoreClickIntercept: true,
            component: null,
            sceneOptions:
              (a = e.extra) == null ? undefined : a.commercialSceneOptions,
            children: c.jsx(tM.I, {
              className: tK,
              option: s._(i._({}, e), {
                label: e.value.toUpperCase(),
              }),
            }),
          }),
        });
      }),
    [resolutionOptions],
  );
  return c.jsx(useT7, {
    modelOptions,
    modelValue: modelKey,
    autoModelSelected: !agenticGeneratorManager.isCreationSelectionManual(
      "image",
      "model",
    ),
    onAutoModel: () => switchModel(""),
    onModel: switchModel,
    aspectRatioOptions: h,
    aspectRatioValue: aspectRatio,
    onAspectRatio: selectAspectRatio,
    resolutionOptions: g,
    resolutionValue: resolution,
    onResolution: selectResolution,
  });
});
const t5 = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const { videoSettingsManager } = agenticGeneratorManager;
  const {
    data: { modelKey, aspectRatio, resolution },
    metadata: { modelOptions, aspectRatioOptions, resolutionOptions },
    switchModel,
    selectAspectRatio,
    setResolutionManual,
  } = videoSettingsManager;
  const h = d.useMemo(() => tq(aspectRatioOptions), [aspectRatioOptions]);
  const g = d.useMemo(
    () =>
      resolutionOptions.map((e) => {
        var a;
        return s._(i._({}, e), {
          label: c.jsx(aV.I, {
            source: ea.HH.ClickSide,
            children: c.jsx(tN.v, {
              ignoreClickIntercept: true,
              component: null,
              sceneOptions:
                (a = e.extra) == null ? undefined : a.commercialSceneOptions,
              children: c.jsx(tM.I, {
                className: tK,
                option: e,
              }),
            }),
          }),
        });
      }),
    [resolutionOptions],
  );
  return c.jsx(useT7, {
    modelOptions,
    modelValue: modelKey,
    autoModelSelected: !agenticGeneratorManager.isCreationSelectionManual(
      "video",
      "model",
    ),
    onAutoModel: () => switchModel(""),
    onModel: switchModel,
    aspectRatioOptions: h,
    aspectRatioValue: aspectRatio,
    onAspectRatio: selectAspectRatio,
    resolutionOptions: g,
    resolutionValue: resolution,
    onResolution: setResolutionManual,
  });
});
const t8 = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { settingsType },
    switchSettingsType,
  } = agenticGeneratorManager;
  const modelOptions =
    agenticGeneratorManager.imageSettingsManager.metadata.modelOptions;
  const modelOptions_1 =
    agenticGeneratorManager.videoSettingsManager.metadata.modelOptions;
  d.useEffect(() => {
    for (var e of [...modelOptions, ...modelOptions_1]) {
      var a;
      if ((a = e.extra) == null ? undefined : a.iconUrl) {
        t6(e.extra.iconUrl);
      }
    }
  }, [modelOptions, modelOptions_1]);
  const l = d.useMemo(
    () => [
      {
        value: "video",
        label: T.Ay.t("web_canva_agent_param_video", {}, "Video"),
      },
      {
        value: "image",
        label: T.Ay.t("web_canva_agent_param_image", {}, "Image"),
      },
    ],
    [],
  );
  return c.jsxs("div", {
    className: "panel-g8XRy1",
    children: [
      c.jsx("div", {
        className: "header-Z6I36b",
        children: c.jsx("div", {
          className: "tabs-cLImKd",
          children: l.map((e) =>
            c.jsx(
              "button",
              {
                type: "button",
                className: _u("tab-sLDMcm", {
                  [tW]: settingsType === e.value,
                }),
                onClick: () => switchSettingsType(e.value),
                children: e.label,
              },
              e.value,
            ),
          ),
        }),
      }),
      c.jsx("div", {
        className: "body-Ysgc84",
        children: settingsType === "image" ? c.jsx(t4, {}) : c.jsx(t5, {}),
      }),
    ],
  });
});
const ne = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { manualSettingsEnabled },
    changeManualSettingsEnabled,
  } = agenticGeneratorManager;
  const n = d.useCallback(
    (e) => {
      changeManualSettingsEnabled(!e);
    },
    [changeManualSettingsEnabled],
  );
  return c.jsxs("div", {
    className: "container-R6RG8K",
    children: [
      T.Ay.t("web_canva_agent_param_setting_auto", {}, "Auto"),
      c.jsx(t9.A, {
        className: "switch-LRCcYz",
        size: "small",
        checked: !manualSettingsEnabled,
        onChange: n,
      }),
    ],
  });
});
const na = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    metadata: { settingsTypeOptions },
    data: { settingsType, manualSettingsEnabled },
    switchSettingsType,
  } = agenticGeneratorManager;
  const l = d.useCallback(
    (e) => {
      switchSettingsType(e);
    },
    [switchSettingsType],
  );
  return c.jsx(tE.h, {
    className: _u("radio-group-ssY_8x", {
      "radio-group-disabled-Zy5NYX": !manualSettingsEnabled,
    }),
    options: settingsTypeOptions,
    value: settingsType,
    onChange: l,
  });
});
const nt = d.memo(function () {
  return c.jsx(tl.R, {
    type: "primary",
    title: c.jsxs(c.Fragment, {
      children: [
        T.Ay.t("web_canva_agent_param_setting", {}, "Preferences"),
        c.jsx("div", {
          className: "extra-MHCYKq",
          children: c.jsx(ne, {}),
        }),
      ],
    }),
    children: c.jsx(na, {}),
  });
});
const nn = h.PA(function () {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    data: { settingsType },
    metadata: { isSettingsRestoring, creationPreferenceEnabled },
  } = agenticGeneratorManager;
  const r = _u("agentic-settings-panel-SouKT_", {
    "creation-preference-panel-EqlsCk": creationPreferenceEnabled,
  });
  if (isSettingsRestoring) {
    return c.jsx(tr.Y, {
      className: r,
      "aria-busy": true,
      children: c.jsx("div", {
        className: "loading-OYLbmb",
        children: c.jsx(tn.w, {
          size: 24,
        }),
      }),
    });
  }
  if (creationPreferenceEnabled) {
    return c.jsx(tr.Y, {
      className: r,
      children: c.jsx(t8, {}),
    });
  }
  return c.jsxs(tr.Y, {
    className: r,
    children: [
      c.jsx(nt, {}),
      settingsType === "image" ? c.jsx(tf, {}) : c.jsx(tR, {}),
    ],
  });
});
const nr = (e) =>
  c.jsxs(
    "svg",
    s._(
      i._(
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 16,
          height: 16,
          fill: "none",
          overflow: "visible",
          preserveAspectRatio: "none",
          style: {
            display: "block",
          },
          viewBox: "0 0 16 16",
        },
        e,
      ),
      {
        children: [
          c.jsx("g", {
            fill: "currentColor",
            fillRule: "evenodd",
            clipRule: "evenodd",
            children: c.jsx("path", {
              d: "M6.667 9.333c.613 0 1.162.277 1.528.713a4.64 4.64 0 0 0-.784 3.809 2 2 0 0 1-.744.145H6a2 2 0 0 1-1.982-1.735h-2.15a.667.667 0 0 1 0-1.333H4.04A2 2 0 0 1 6 9.333zM6 10.667a.667.667 0 0 0-.667.666V12c0 .368.299.667.667.667h.667A.667.667 0 0 0 7.333 12v-.667a.667.667 0 0 0-.666-.666zM10 2a2 2 0 0 1 1.99 1.804h2.078a.667.667 0 0 1 0 1.333h-2.126A2 2 0 0 1 10 6.667h-.667c-.942 0-1.73-.652-1.942-1.53H1.868a.667.667 0 0 1 0-1.333h5.475A2 2 0 0 1 9.333 2zm-.667 1.333A.667.667 0 0 0 8.667 4v.667c0 .368.298.666.666.666H10a.667.667 0 0 0 .667-.666V4A.667.667 0 0 0 10 3.333z",
            }),
          }),
          c.jsx("path", {
            fill: "#009EFA",
            d: "M13.65 10.825a.63.63 0 0 1 .898 0c.249.251.25.66.002.912l-2.666 2.71a.63.63 0 0 1-.9 0l-1.53-1.56a.65.65 0 0 1 .001-.912.63.63 0 0 1 .899.002l1.08 1.1z",
          }),
        ],
      },
    ),
  );
const nl = h.PA(function () {
  const { appearance } = d.useContext(b.R);
  const [a, setA] = d.useState(false);
  const { agenticGeneratorManager } = j.h(_.V);
  const { reportManager, setSettingsType } = agenticGeneratorManager;
  const o = d.useMemo(() => c.jsx(nn, {}), []);
  const i = d.useMemo(() => c.jsx(tt, {}), []);
  const { allSettingsAutomatic } = a9();
  const { serverAbTestManager } = j.h(a7.a);
  const p = d.useCallback(
    (e) => {
      var a = serverAbTestManager.onDidChangeConfiguration(e);
      return () => a.dispose();
    },
    [serverAbTestManager],
  );
  const v = d.useCallback(() => {
    var e = serverAbTestManager.getAbTestValueSync(
      a4.s.AgentCreationPreferenceV1,
    );
    return (
      (e == null ? undefined : e.enabled) === true &&
      e.entry_label === "settings"
    );
  }, [serverAbTestManager]);
  const h = d.useSyncExternalStore(p, v, () => false);
  const x = d.useMemo(() => {
    if (a) {
      return null;
    }
    if (!allSettingsAutomatic) {
      return i;
    }
    var e = "web_agent_preference_setting_auto_tooltip";
    var t = "Agent automatically selects the best models and settings";
    var n = T.Ay.t(e, {}, t);
    if (n && n !== e) {
      return n;
    }
    return t;
  }, [a, allSettingsAutomatic, i]);
  const f = h
    ? "web_agent_preference_setting_creation_settings"
    : allSettingsAutomatic
      ? "dreamina_image4_ratio_auto"
      : "web_canva_agent_param_setting_manual";
  const k = h ? "Creation settings" : allSettingsAutomatic ? "Auto" : "Custom";
  const y = T.Ay.t(f, {}, k);
  const C = y && y !== f ? y : k;
  const N = allSettingsAutomatic
    ? g.f(appearance)
      ? c.jsx(V.Tyt, {})
      : c.jsx(V.Da7, {})
    : c.jsx(nr, {
        width: 16,
        height: 16,
        "aria-hidden": true,
      });
  const M = d.useCallback(
    (e) => {
      setA(e);
      if (e) {
        setSettingsType("video");
        reportManager.reportAgentClickSettings();
      }
    },
    [reportManager, setA, setSettingsType],
  );
  const S = d.useMemo(
    () => ({
      mouseEnterDelay: 500,
      popupAlign: {
        top: I.WK,
        bottom: I.WK,
      },
    }),
    [],
  );
  return c.jsx(a5.I, {
    className: "popover-YV4gBx",
    content: o,
    popupVisible: a,
    onVisibleChange: M,
    children: c.jsx(W.A, {
      className: _u("tooltip-mwCrmV", {
        "auto-tooltip-VDXxQq": allSettingsAutomatic,
      }),
      content: x,
      showArrow: false,
      triggerProps: S,
      children: c.jsx(F.E, {
        className: _u({
          "main-frame-button-ZZp0Bu": g.f(appearance),
        }),
        active: a,
        "aria-expanded": a,
        icon: N,
        children: C,
      }),
    }),
  });
});
function no(e) {
  if (e) {
    return e.toUpperCase();
  }
  return "";
}
function ni(resolutionOptions, resolution) {
  let t;
  const n =
    (t = resolutionOptions.find((e) => e.value === resolution)) != null
      ? t
      : resolutionOptions.length === 1
        ? resolutionOptions[0]
        : undefined;
  if (!n) {
    return no(resolution);
  }
  const { label, value } = n;
  if (typeof label === "string" || typeof label === "number") {
    return String(label);
  }
  return no(value);
}
function useNs() {
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    imageSettingsManager,
    videoSettingsManager,
    data: { settingsType },
  } = agenticGeneratorManager;
  const { imageSettings, videoSettings } =
    agenticGeneratorManager.data.generatorSettings;
  const modelList = imageSettingsManager.metadata.modelList;
  const models = videoSettingsManager.metadata.models;
  const resolutionOptions = imageSettingsManager.metadata.resolutionOptions;
  const resolutionOptions_1 = videoSettingsManager.metadata.resolutionOptions;
  const u = d.useMemo(() => {
    var e;
    var a = modelList.find((e) => e.key === imageSettings.modelKey);
    var t = a == null ? undefined : a.name;
    if (t) {
      return {
        name: t,
        aspectRatio:
          (e = imageSettings.aspectRatio) != null
            ? e
            : T.Ay.t("dreamina_image4_ratio_auto", {}),
        resolution: ni(resolutionOptions, imageSettings.resolution),
      };
    }
  }, [imageSettings, modelList, resolutionOptions]);
  const m = d.useMemo(() => {
    var e;
    var a = models.find((e) => e.key === videoSettings.modelKey);
    var t = a == null ? undefined : a.name;
    if (t) {
      var resolution = ni(resolutionOptions_1, videoSettings.resolution);
      return {
        name: t,
        aspectRatio:
          (e = videoSettings.aspectRatio) != null
            ? e
            : T.Ay.t("dreamina_image4_ratio_auto", {}),
        resolution,
      };
    }
  }, [videoSettings, models, resolutionOptions_1]);
  return {
    settingsType,
    manualSettingsEnabled: agenticGeneratorManager.data.manualSettingsEnabled,
    imageSettingsDisplay: u != null ? u : null,
    videoSettingsDisplay: m != null ? m : null,
  };
}
const nc = "divider-csI3OC";
const nd = "value-gyAyBe";
const nu = h.PA(function (e) {
  const { hideModelName = false } = e;
  const { imageSettingsDisplay, videoSettingsDisplay, settingsType } = useNs();
  if (imageSettingsDisplay && videoSettingsDisplay) {
    return c.jsx("div", {
      className: "panel-container-o70NxI",
      children:
        settingsType === "image"
          ? c.jsxs("div", {
              className: "top-section-DbhL_E",
              children: [
                hideModelName
                  ? null
                  : c.jsxs(c.Fragment, {
                      children: [
                        c.jsx("div", {
                          className: nd,
                          children: imageSettingsDisplay.name,
                        }),
                        c.jsx("div", {
                          className: nc,
                          children: "·",
                        }),
                      ],
                    }),
                c.jsx("div", {
                  className: nd,
                  children: imageSettingsDisplay.aspectRatio,
                }),
                c.jsx("div", {
                  className: nc,
                  children: "·",
                }),
                c.jsx("div", {
                  className: nd,
                  children: imageSettingsDisplay.resolution,
                }),
              ],
            })
          : c.jsxs("div", {
              className: "bottom-section-AFseQ5",
              children: [
                hideModelName
                  ? null
                  : c.jsxs(c.Fragment, {
                      children: [
                        c.jsx("div", {
                          className: nd,
                          children: videoSettingsDisplay.name,
                        }),
                        c.jsx("div", {
                          className: nc,
                          children: "·",
                        }),
                      ],
                    }),
                c.jsx("div", {
                  className: nd,
                  children: videoSettingsDisplay.aspectRatio,
                }),
                c.jsx("div", {
                  className: nc,
                  children: "·",
                }),
                c.jsx("div", {
                  className: nd,
                  children: videoSettingsDisplay.resolution,
                }),
              ],
            }),
    });
  }
  return null;
});
const nm = h.PA(function () {
  const { appearance } = d.useContext(b.R);
  const [a, setA] = d.useState(false);
  const { agenticGeneratorManager } = j.h(_.V);
  const { imageSettingsManager, reportManager } = agenticGeneratorManager;
  const length = imageSettingsManager.metadata.aspectRatioOptions.length;
  const i = d.useMemo(() => c.jsx(nn, {}), []);
  const s = d.useMemo(() => c.jsx(nu, {}), []);
  const { manualSettingsEnabled } = useNs();
  const style = d.useMemo(
    () => ({
      "--aspect-ratio-options-count": "".concat(length),
    }),
    [length],
  );
  const p = d.useMemo(() => {
    if (a) {
      return null;
    }
    if (manualSettingsEnabled) {
      return s;
    }
    return T.Ay.t("web_canva_agent_param_setting", {}, "Preferences");
  }, [a, manualSettingsEnabled, s]);
  const v = manualSettingsEnabled
    ? T.Ay.t("web_canva_agent_param_setting_manual", {}, "Custom")
    : T.Ay.t("web_canva_agent_param_setting_auto", {}, "Auto");
  const h = d.useMemo(() => {
    if (g.f(appearance)) {
      return c.jsx(V.Tyt, {});
    }
    return c.jsx(V.Da7, {});
  }, [appearance]);
  const x = d.useCallback(
    (e) => {
      setA(e);
      if (e) {
        reportManager.reportAgentClickSettings();
      }
    },
    [reportManager, setA],
  );
  const f = d.useMemo(
    () => ({
      mouseEnterDelay: 500,
      popupAlign: {
        top: I.WK,
        bottom: I.WK,
      },
    }),
    [],
  );
  return c.jsx(a5.I, {
    className: "popover-RVxS4T",
    style,
    content: i,
    popupVisible: a,
    onVisibleChange: x,
    children: c.jsx(W.A, {
      content: p,
      triggerProps: f,
      children: c.jsx(F.E, {
        active: a,
        icon: h,
        children: v,
      }),
    }),
  });
});
const np = h.PA(function () {
  const { appearance } = d.useContext(b.R);
  const { agenticGeneratorManager } = j.h(_.V);
  const {
    creationPreferenceEnabled,
    isSettingsInitializing,
    isSettingsRestoring,
    submitButtonLoading,
  } = agenticGeneratorManager.metadata;
  if (isSettingsInitializing || (isSettingsRestoring && !submitButtonLoading)) {
    return c.jsx(a3.j, {
      icon: g.f(appearance) ? c.jsx(V.Tyt, {}) : c.jsx(V.Da7, {}),
      label: T.Ay.t("web_canva_agent_param_setting", {}, "Preferences"),
    });
  }
  if (creationPreferenceEnabled) {
    return c.jsx(nl, {});
  }
  return c.jsx(nm, {});
});
const nb = h.PA(function () {
  const {
    agenticVoiceInputManager,
    metadata: { voiceInputButtonDisabled, voiceInputButtonTooltipProps },
  } = j.h(_.V).agenticGeneratorManager;
  const n = nx.a({
    disabled: voiceInputButtonDisabled,
    voiceInputManager: agenticVoiceInputManager,
  });
  const r = d.useMemo(
    () => ({
      guideLinkHref: nv.j,
      voiceInputManager: agenticVoiceInputManager,
    }),
    [agenticVoiceInputManager],
  );
  return c.jsx(nh.s.Provider, {
    value: r,
    children: c.jsx(ng.n, {
      disabled: voiceInputButtonDisabled,
      tooltipProps: voiceInputButtonTooltipProps,
      onClick: n,
    }),
  });
});
const n_ = h.PA(function (e) {
  const { variant } = d.useContext(b.R);
  const { agenticGeneratorManager } = j.h(_.V);
  const n =
    variant !== undefined &&
    variant !== "canvas" &&
    agenticGeneratorManager.metadata.inferenceModelSelectionEnabled;
  const extraActions = n
    ? c.jsxs(c.Fragment, {
        children: [c.jsx(a1, {}), c.jsx(nb, {}), e.extraActions],
      })
    : e.extraActions;
  return c.jsxs(
    a$.U,
    s._(i._({}, e), {
      extraActions,
      children: [
        c.jsx(az.R, {}),
        c.jsx(np, {}),
        c.jsx(ex, {}),
        c.jsx(a2, {}),
        c.jsx(aB, {}),
        c.jsx(K, {}),
        n ? null : c.jsx(nb, {}),
      ],
    }),
  );
});
const nk = h.PA(function (e) {
  const { editor } = e;
  const { audioGeneratorManager } = j.h(_.V);
  const { audioSeparationManager } = audioGeneratorManager;
  const {
    metadata: { placeholders },
  } = audioSeparationManager;
  if (placeholders.length > 1) {
    return c.jsx(nj.p, {
      editor,
      candidates: placeholders,
    });
  }
  return c.jsx(c.Fragment, {
    children: placeholders.at(0),
  });
});
const ny = h.PA(function (e) {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    audioSeparationManager: {
      data: { editorDocument },
      changeEditorDocument,
    },
    taskSubmissionManager: { submit },
    reportManager: { reportActivatePrompt, reportEnterPrompt },
  } = audioGeneratorManager;
  const u = d.useMemo(
    () => [
      nf.r,
      R._.configure({
        placeholder: (e) => {
          var { editor } = e;
          return c.jsx(nk, {
            editor,
          });
        },
      }),
    ],
    [],
  );
  const m = M.D(submit);
  return c.jsx(
    A.k,
    s._(i._({}, e), {
      value: editorDocument,
      extensions: u,
      onChange: changeEditorDocument,
      onSubmit: m,
      onFocus: reportActivatePrompt,
      onBlur: reportEnterPrompt,
    }),
  );
});
const nN = h.PA(function (e) {
  const { feature, onClick } = e;
  const n = E._(e, ["feature", "onClick"]);
  const { audioGeneratorManager } = j.h(_.V);
  const { switchFeature } = audioGeneratorManager;
  const o = d.useCallback(
    (e) => {
      if (onClick != null) {
        onClick(e);
      }
      switchFeature(feature, {
        entry: "placeholder",
      });
    },
    [feature, onClick, switchFeature],
  );
  return c.jsx(
    F.E,
    s._(i._({}, n), {
      onClick: o,
    }),
  );
});
const nM = h.PA(function (e) {
  const { entry = "toolbar", size, onVisibleChange } = e;
  const r = E._(e, ["entry", "size", "onVisibleChange"]);
  const l = z.n();
  const { audioGeneratorManager } = j.h(_.V);
  const {
    data: { feature },
    referenceMentionManager,
  } = audioGeneratorManager;
  const p = $.a(referenceMentionManager);
  const [v, setV] = d.useState(false);
  const g = d.useCallback(
    (e) => {
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
      setV(e);
      if (e) {
        referenceMentionManager.openPanel({
          entry,
        });
      }
    },
    [onVisibleChange, referenceMentionManager, entry],
  );
  const x = d.useCallback(
    (e) => {
      referenceMentionManager.insertOption(e, {
        entry,
      });
    },
    [referenceMentionManager, entry],
  );
  const b = d.useMemo(
    () => T.Ay.t("video_omni_reference_image_ref", {}, "引用参考"),
    [],
  );
  const f = d.useMemo(() => c.jsx(V.jHH, {}), []);
  const k = d.useMemo(
    () =>
      c.jsx(F.E, {
        icon: f,
        size,
      }),
    [f, size],
  );
  if (l && feature === "omniDubbing") {
    return c.jsx(
      W.A,
      s._(
        i._(
          {
            content: b,
          },
          v
            ? {
                popupVisible: false,
              }
            : null,
        ),
        {
          children: c.jsx(
            D.o,
            s._(
              i._(
                {
                  triggerElement: k,
                },
                r,
              ),
              {
                options: p,
                onInsertOption: x,
                onVisibleChange: g,
              },
            ),
          ),
        },
      ),
    );
  }
  return null;
});
const nS = h.PA(function () {
  const { audioGeneratorManager } = j.h(_.V);
  const { omniDubbingManager } = audioGeneratorManager;
  const {
    metadata: { placeholderKey },
  } = omniDubbingManager;
  const n = d.useMemo(() => c.jsx(V.jHH, {}), []);
  const r = d.useMemo(
    () =>
      c.jsx(F.E, {
        icon: n,
        size: "mini",
      }),
    [n],
  );
  const l = d.useMemo(
    () =>
      c.jsx(
        nM,
        {
          triggerElement: r,
          entry: "placeholder",
        },
        "reference-mention-select",
      ),
    [r],
  );
  const mention = d.useCallback(() => l, [l]);
  const i = d.useCallback(
    (e) =>
      c.jsx(
        nN,
        {
          feature: "audioSeparation",
          size: "mini",
          children: e,
        },
        "audio-separation",
      ),
    [],
  );
  const videoTranslation = d.useCallback(
    (e) =>
      c.jsx(
        nN,
        {
          feature: "videoTranslation",
          size: "mini",
          children: e,
        },
        "video-translation",
      ),
    [],
  );
  return c.jsx(c.Fragment, {
    children: T.Ay.t(placeholderKey, {
      mention,
      audioSeparation: i,
      videoTranslation,
    }),
  });
});
const nA = h.PA(
  d.forwardRef(function (e, a) {
    const { referenceMentionManager } = j.h(_.V).audioGeneratorManager;
    d.useEffect(() => {
      referenceMentionManager.openPanel({
        entry: "editor",
      });
    }, [referenceMentionManager]);
    const n = $.a(referenceMentionManager);
    const r = d.useCallback(
      (e) => {
        referenceMentionManager.insertOption(e, {
          entry: "editor",
        });
      },
      [referenceMentionManager],
    );
    return c.jsx(
      ef.a,
      s._(
        i._(
          {
            ref: a,
            options: n,
          },
          e,
        ),
        {
          onInsertOption: r,
        },
      ),
    );
  }),
);
const nR = h.PA(function (e) {
  const { id } = e;
  const t = E._(e, ["id"]);
  const { audioGeneratorManager } = j.h(_.V);
  const { omniDubbingManager } = audioGeneratorManager;
  const {
    data: { references },
    metadata: { referenceIdToLabel },
  } = omniDubbingManager;
  const s = references.find((e) => e.id === id);
  if (s) {
    return c.jsx(
      eH.W,
      i._(
        {
          resource: s,
          label: referenceIdToLabel[id],
        },
        t,
      ),
    );
  }
  return null;
});
const nP = d.memo(function (e) {
  const { node } = e;
  const { id } = node.attrs;
  return c.jsx(eA.VR, {
    as: "span",
    children:
      typeof id === "string"
        ? c.jsx(nR, {
            id,
          })
        : null,
  });
});
const nw = eB.Q.extend({
  addNodeView: () => eA.gu(nP),
});
const omniDubbing = h.PA(function (e) {
  const { className } = e;
  const { audioGeneratorManager } = j.h(_.V);
  const {
    data: { feature },
    omniDubbingManager,
    taskSubmissionManager: { submit },
    reportManager: { reportActivatePrompt, reportEnterPrompt },
  } = audioGeneratorManager;
  const {
    data: { editorDocument },
    metadata: { acceptedSubjectContentTypes },
    changeEditorDocument,
    dropAsReferences,
    pasteAsReferences,
  } = omniDubbingManager;
  const g = j.h(y.C);
  const x = d.useCallback(
    (e) =>
      v._(function* () {
        (yield g.getInstance()).subjectSearchManager.searchByKeyword(e);
      })(),
    [g],
  );
  const b = N.$({
    component: nA,
    enabled: feature === "omniDubbing",
    onQueryChange: x,
  });
  const f = d.useMemo(() => c.jsx(nS, {}), []);
  const k = d.useMemo(
    () => [
      R._.configure({
        placeholder: f,
      }),
      nw.configure({
        suggestion: b,
      }),
      P.p.configure({
        subjectMaterialPicker: (e) => nC.h(e, acceptedSubjectContentTypes),
      }),
    ],
    [f, b, acceptedSubjectContentTypes],
  );
  const C = M.D(submit);
  return c.jsx(A.k, {
    className,
    extensions: k,
    value: editorDocument,
    onChange: changeEditorDocument,
    onSubmit: C,
    onFocus: reportActivatePrompt,
    onBlur: reportEnterPrompt,
    onDrop: dropAsReferences,
    onPaste: pasteAsReferences,
  });
});
const textReading = h.PA(function (e) {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    textReadingManager,
    taskSubmissionManager: { submit },
    reportManager: { reportActivatePrompt, reportEnterPrompt },
  } = audioGeneratorManager;
  const {
    metadata: { placeholder },
    data: { text },
    updateText,
  } = textReadingManager;
  const m = M.D(submit);
  return c.jsx(
    nV.f,
    s._(i._({}, e), {
      value: text,
      placeholder,
      onChange: updateText,
      onSubmit: m,
      onFocus: reportActivatePrompt,
      onBlur: reportEnterPrompt,
    }),
  );
});
const nI = h.PA(function (e) {
  const { children } = e;
  const { audioGeneratorManager } = j.h(_.V);
  const { videoTranslationManager } = audioGeneratorManager;
  const {
    metadata: { targetLanguageOptions },
    data: { targetLanguages },
    selectTargetLanguages,
  } = videoTranslationManager;
  const [i, setI] = d.useState(false);
  const u = d.useMemo(
    () =>
      c.jsxs(F.E, {
        active: i,
        size: "mini",
        children: [
          children,
          c.jsx(V.YxV, {
            size: 16,
            className: _u("arrow-icon-FLX251", {
              "arrow-icon-rotated-c2rYSG": i,
            }),
          }),
        ],
      }),
    [children, i],
  );
  const p = d.useMemo(
    () => ({
      className: "dropdown-w2VFij",
    }),
    [],
  );
  return c.jsx(tv.V, {
    mode: "multiple",
    triggerElement: u,
    triggerProps: p,
    options: targetLanguageOptions,
    value: targetLanguages,
    onChange: selectTargetLanguages,
    onVisibleChange: setI,
  });
});
const nE = h.PA(function (e) {
  const { value, label } = e;
  const { audioGeneratorManager } = j.h(_.V);
  const { videoTranslationManager } = audioGeneratorManager;
  const { removeTargetLanguage } = videoTranslationManager;
  const o = d.useCallback(
    (e) => {
      e.stopPropagation();
      removeTargetLanguage(value);
    },
    [removeTargetLanguage, value],
  );
  return c.jsxs(F.E, {
    size: "mini",
    children: [
      label,
      c.jsx(V.gzW, {
        size: 12,
        onClick: o,
      }),
    ],
  });
});
const nW = h.PA(function () {
  const { audioGeneratorManager } = j.h(_.V);
  const { videoTranslationManager } = audioGeneratorManager;
  const {
    metadata: { placeholderKey, selectedTargetLanguageOptions },
  } = videoTranslationManager;
  const prompt = d.useCallback(
    (e) =>
      c.jsx(
        "span",
        {
          className: "prompt-fcR465",
          children: e,
        },
        "prompt",
      ),
    [],
  );
  const targetLanguage = d.useCallback(
    (e) =>
      c.jsxs(
        d.Fragment,
        {
          children: [
            c.jsx(nI, {
              children: e,
            }),
            selectedTargetLanguageOptions.map((e) => {
              var { value, label } = e;
              return c.jsx(
                nE,
                {
                  value,
                  label,
                },
                value,
              );
            }),
          ],
        },
        "target-language",
      ),
    [selectedTargetLanguageOptions],
  );
  return c.jsx(c.Fragment, {
    children: T.Ay.t(placeholderKey, {
      prompt,
      targetLanguage,
    }),
  });
});
const nD = {
  textReading,
  omniDubbing,
  audioSeparation: ny,
  videoTranslation: h.PA(function (e) {
    const a = d.useMemo(() => c.jsx(nW, {}), []);
    const t = d.useMemo(
      () => [
        R._.configure({
          placeholder: a,
        }),
      ],
      [a],
    );
    return c.jsx(
      A.k,
      s._(i._({}, e), {
        readOnly: true,
        extensions: t,
      }),
    );
  }),
};
const n$ = h.PA(function (e) {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    data: { feature },
  } = audioGeneratorManager;
  const n = nD[feature];
  return c.jsx(
    p.d,
    s._(i._({}, e), {
      children: c.jsx(n, {}),
    }),
  );
});
const nz = h.PA(function (e) {
  const { audioResource } = e;
  const t = E._(e, ["audioResource"]);
  const { referenceRenderProps } = t;
  const { audioGeneratorManager } = j.h(_.V);
  const { audioSeparationManager } = audioGeneratorManager;
  const {
    metadata: { acceptedFileTypes },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = audioSeparationManager;
  return c.jsx(ax.t, {
    resource: audioResource,
    referenceRenderProps,
    children: c.jsx(
      ag.q,
      s._(
        i._(
          {
            audioResource,
            accept: acceptedFileTypes,
          },
          t,
        ),
        {
          onRemove: removeReferenceResource,
          onDropFromLocal: replaceReferenceResourceFromLocal,
        },
      ),
    ),
  });
});
const nU = h.PA(function (e) {
  const { videoResource } = e;
  const t = E._(e, ["videoResource"]);
  const { referenceRenderProps } = t;
  const { audioGeneratorManager } = j.h(_.V);
  const { audioSeparationManager } = audioGeneratorManager;
  const {
    metadata: { acceptedFileTypes },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = audioSeparationManager;
  return c.jsx(ax.t, {
    resource: videoResource,
    referenceRenderProps,
    children: c.jsx(
      aA.L,
      s._(
        i._(
          {
            videoResource,
            accept: acceptedFileTypes,
          },
          t,
        ),
        {
          onRemove: removeReferenceResource,
          onDropFromLocal: replaceReferenceResourceFromLocal,
        },
      ),
    ),
  });
});
const nO = h.PA(function (e) {
  const { audioResource, sortable = true } = e;
  const n = E._(e, ["audioResource", "sortable"]);
  const { referenceRenderProps } = n;
  const { audioGeneratorManager } = j.h(_.V);
  const { omniDubbingManager, voiceManager } = audioGeneratorManager;
  const {
    data: { voiceReferenceIdToVoiceId },
    metadata: { acceptedFileTypes, overlongAudioReferenceIds },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
    trimReferenceAudioResource,
  } = omniDubbingManager;
  const { deselectVoice } = voiceManager;
  const f = overlongAudioReferenceIds.has(audioResource.id);
  const k = d.useMemo(() => {
    if (f) {
      return c.jsx(V.woK, {});
    }
  }, [f]);
  const onRemove = d.useCallback(
    (e) => {
      var a = voiceReferenceIdToVoiceId[e];
      if (a) {
        deselectVoice(a);
      } else {
        removeReferenceResource(e);
      }
    },
    [voiceReferenceIdToVoiceId, deselectVoice, removeReferenceResource],
  );
  const C = d.useCallback(
    (e) => {
      e.preventDefault();
      trimReferenceAudioResource(audioResource.id);
    },
    [trimReferenceAudioResource, audioResource.id],
  );
  const N = d.useMemo(
    () =>
      c.jsx(
        ag.q,
        s._(
          i._(
            {
              audioResource,
              accept: acceptedFileTypes,
              icon: k,
              label: f
                ? T.Ay.t("reference_audio_duration_too_long", {}, "时长过长")
                : undefined,
            },
            n,
          ),
          {
            onClick: f ? C : undefined,
            onRemove,
            onDropFromLocal: replaceReferenceResourceFromLocal,
          },
        ),
      ),
    [
      audioResource,
      acceptedFileTypes,
      k,
      f,
      C,
      onRemove,
      replaceReferenceResourceFromLocal,
      n,
    ],
  );
  const M = d.useCallback(
    () =>
      d.cloneElement(N, {
        onRemove: undefined,
      }),
    [N],
  );
  const S = c.jsx(ax.t, {
    resource: audioResource,
    referenceRenderProps,
    children: N,
  });
  if (sortable) {
    return c.jsx(ab.g, {
      item: audioResource,
      renderDragOverlay: M,
      children: S,
    });
  }
  return S;
});
const nL = h.PA(function (e) {
  const { imageResource, sortable = true } = e;
  const n = E._(e, ["imageResource", "sortable"]);
  const { referenceRenderProps } = n;
  const { audioGeneratorManager } = j.h(_.V);
  const { omniDubbingManager } = audioGeneratorManager;
  const {
    metadata: { acceptedFileTypes },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = omniDubbingManager;
  const v = d.useMemo(
    () =>
      c.jsx(
        ak.d,
        s._(
          i._(
            {
              imageResource,
              accept: acceptedFileTypes,
            },
            n,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: replaceReferenceResourceFromLocal,
          },
        ),
      ),
    [
      imageResource,
      acceptedFileTypes,
      removeReferenceResource,
      replaceReferenceResourceFromLocal,
      n,
    ],
  );
  const h = d.useCallback(
    () =>
      d.cloneElement(v, {
        onRemove: undefined,
      }),
    [v],
  );
  const g = c.jsx(ax.t, {
    resource: imageResource,
    referenceRenderProps,
    children: v,
  });
  if (sortable) {
    return c.jsx(ab.g, {
      item: imageResource,
      renderDragOverlay: h,
      children: g,
    });
  }
  return g;
});
const nZ = h.PA(function (e) {
  const { videoResource, sortable = true } = e;
  const n = E._(e, ["videoResource", "sortable"]);
  const { referenceRenderProps } = n;
  const { audioGeneratorManager } = j.h(_.V);
  const { omniDubbingManager } = audioGeneratorManager;
  const {
    metadata: { acceptedFileTypes },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = omniDubbingManager;
  const v = d.useMemo(
    () =>
      c.jsx(
        aA.L,
        s._(
          i._(
            {
              videoResource,
              accept: acceptedFileTypes,
            },
            n,
          ),
          {
            onRemove: removeReferenceResource,
            onDropFromLocal: replaceReferenceResourceFromLocal,
          },
        ),
      ),
    [
      videoResource,
      acceptedFileTypes,
      removeReferenceResource,
      replaceReferenceResourceFromLocal,
      n,
    ],
  );
  const h = d.useCallback(
    () =>
      d.cloneElement(v, {
        onRemove: undefined,
      }),
    [v],
  );
  const g = c.jsx(ax.t, {
    resource: videoResource,
    referenceRenderProps,
    children: v,
  });
  if (sortable) {
    return c.jsx(ab.g, {
      item: videoResource,
      renderDragOverlay: h,
      children: g,
    });
  }
  return g;
});
const nB = h.PA(function (e) {
  const { referenceRenderProps = {} } = e;
  const t = E._(e, ["referenceRenderProps"]);
  const { audioGeneratorManager } = j.h(_.V);
  const { audioSeparationManager } = audioGeneratorManager;
  const {
    importReferenceResourcesFromLocal,
    metadata: {
      acceptedFileTypes,
      referenceUploadTooltipProps,
      referenceAdditionValidationResult,
    },
  } = audioSeparationManager;
  const pRef = d.useRef("drag");
  const v = d.useCallback(() => {
    pRef.current = "click";
  }, []);
  const h = d.useCallback(() => {
    pRef.current = "drag";
  }, []);
  const g = d.useCallback(
    (e) => {
      var pRef_current = pRef.current;
      pRef.current = "drag";
      importReferenceResourcesFromLocal([e], {
        reportParams: {
          importMaterialParams: {
            actionType: pRef_current,
          },
        },
      });
      audioGeneratorManager.reportManager.reportClickUpload({
        uploadMethod: pRef_current,
      });
    },
    [audioGeneratorManager, importReferenceResourcesFromLocal],
  );
  return c.jsx(
    ax.t,
    s._(
      i._(
        {
          referenceRenderProps,
        },
        referenceUploadTooltipProps,
      ),
      {
        children: c.jsx(aV.I, {
          component: null,
          guardFileDrop: true,
          source: ea.HH.Upload,
          children: c.jsx(
            aF.L,
            i._(
              {
                accept: acceptedFileTypes,
                disabled: !referenceAdditionValidationResult.ok,
                referenceRenderProps,
                onChange: g,
                onCancel: h,
                onClick: v,
              },
              t,
            ),
          ),
        }),
      },
    ),
  );
});
const nH = h.PA(function (e) {
  const { referenceRenderProps = {} } = e;
  const t = E._(e, ["referenceRenderProps"]);
  const { audioGeneratorManager } = j.h(_.V);
  const { omniDubbingManager } = audioGeneratorManager;
  const {
    importReferenceResourcesFromLocal,
    metadata: {
      acceptedFileTypes,
      referenceUploadTooltipProps,
      referenceAdditionValidationResult,
    },
  } = omniDubbingManager;
  const pRef = d.useRef("drag");
  const v = d.useCallback(() => {
    pRef.current = "click";
  }, []);
  const h = d.useCallback(() => {
    pRef.current = "drag";
  }, []);
  const g = d.useCallback(
    (e) => {
      var pRef_current = pRef.current;
      pRef.current = "drag";
      importReferenceResourcesFromLocal(e, {
        reportParams: {
          importMaterialParams: {
            actionType: pRef_current,
          },
        },
      });
      audioGeneratorManager.reportManager.reportClickUpload({
        uploadMethod: pRef_current,
      });
    },
    [audioGeneratorManager, importReferenceResourcesFromLocal],
  );
  return c.jsx(
    ax.t,
    s._(
      i._(
        {
          referenceRenderProps,
        },
        referenceUploadTooltipProps,
      ),
      {
        children: c.jsx(aV.I, {
          component: null,
          guardFileDrop: true,
          source: ea.HH.Upload,
          children: c.jsx(
            aF.L,
            i._(
              {
                multiple: true,
                accept: acceptedFileTypes,
                disabled: !referenceAdditionValidationResult.ok,
                referenceRenderProps,
                onChange: g,
                onCancel: h,
                onClick: v,
              },
              t,
            ),
          ),
        }),
      },
    ),
  );
});
const nJ = h.PA(function () {
  const { audioGeneratorManager } = j.h(_.V);
  const { voiceManager } = audioGeneratorManager;
  const t = d.useMemo(
    () => ({
      voiceManager,
      reportParams: {
        importMaterialParams: {
          modal: "aigc_audio",
          position: "voice_select_panel",
        },
      },
    }),
    [voiceManager],
  );
  return c.jsx(nG.q.Provider, {
    value: t,
    children: c.jsx(nX.u, {}),
  });
});
const nq = h.PA(function (e) {
  const { referenceRenderProps = {} } = e;
  const t = E._(e, ["referenceRenderProps"]);
  const { audioGeneratorManager } = j.h(_.V);
  const { voiceManager, reportManager } = audioGeneratorManager;
  const {
    metadata: {
      incomingVoicesLoading,
      incomingVoicesLoadingTooltipProps,
      voiceSelectionDisabled,
      isVoiceCloningSupported,
    },
    importVoicesFromLocal,
    prepareVoicePanelOpen,
  } = voiceManager;
  const { voiceCloningManager } = j.h(nK.h);
  const {
    metadata: { acceptedAudioFileTypes },
  } = voiceCloningManager;
  const bRef = d.useRef("drag");
  const [f, setF] = d.useState(false);
  const y = d.useMemo(() => c.jsx(nJ, {}), []);
  const C = d.useMemo(
    () => ({
      popupAlign: {
        bottom: [I.ED, I.vw - -5.5],
      },
    }),
    [-5.5],
  );
  const N = d.useCallback(() => {
    bRef.current = "click";
  }, []);
  const M = d.useCallback(() => {
    bRef.current = "drag";
  }, []);
  const S = d.useCallback((e) => {
    e.preventDefault();
  }, []);
  const A = d.useCallback(
    (e) => {
      if (e) {
        prepareVoicePanelOpen();
      }
      setF(e);
    },
    [prepareVoicePanelOpen],
  );
  const R = d.useCallback(
    (e) => {
      var bRef_current = bRef.current;
      bRef.current = "drag";
      importVoicesFromLocal([e], {
        reportParams: {
          importMaterialParams: {
            modal: "aigc_audio",
            position: "generation",
            actionType: bRef_current,
          },
        },
      });
      reportManager.reportClickUpload({
        uploadMethod: bRef_current,
      });
    },
    [importVoicesFromLocal, reportManager],
  );
  if (isVoiceCloningSupported) {
    return c.jsx(
      ax.t,
      s._(
        i._(
          {
            referenceRenderProps,
          },
          incomingVoicesLoadingTooltipProps,
        ),
        {
          children: c.jsx(aV.I, {
            component: null,
            guardFileDrop: true,
            source: ea.HH.Upload,
            children: c.jsx(
              aF.L,
              i._(
                {
                  loading: incomingVoicesLoading,
                  accept: acceptedAudioFileTypes,
                  referenceRenderProps,
                  onCancel: M,
                  onChange: R,
                  onClick: N,
                },
                t,
              ),
            ),
          }),
        },
      ),
    );
  }
  return c.jsx(a5.I, {
    content: y,
    disabled: voiceSelectionDisabled,
    triggerProps: C,
    popupVisible: f,
    onVisibleChange: A,
    children: c.jsx(
      ax.t,
      s._(
        i._(
          {
            referenceRenderProps,
          },
          f
            ? {
                popupVisible: false,
              }
            : null,
          incomingVoicesLoadingTooltipProps,
        ),
        {
          children: c.jsx(aV.I, {
            component: null,
            guardFileDrop: true,
            source: ea.HH.Upload,
            children: c.jsx(
              aF.L,
              i._(
                {
                  loading: incomingVoicesLoading,
                  readOnly: true,
                  active: f,
                  referenceRenderProps,
                  onClick: S,
                },
                t,
              ),
            ),
          }),
        },
      ),
    ),
  });
});
const nQ = h.PA(function (e) {
  const { referenceRenderProps = {} } = e;
  const t = E._(e, ["referenceRenderProps"]);
  const { audioGeneratorManager } = j.h(_.V);
  const { videoTranslationManager } = audioGeneratorManager;
  const {
    importReferenceResourcesFromLocal,
    metadata: {
      acceptedFileTypes,
      referenceUploadTooltipProps,
      referenceAdditionValidationResult,
    },
  } = videoTranslationManager;
  const pRef = d.useRef("drag");
  const v = d.useCallback(() => {
    pRef.current = "click";
  }, []);
  const h = d.useCallback(() => {
    pRef.current = "drag";
  }, []);
  const g = d.useCallback(
    (e) => {
      var pRef_current = pRef.current;
      pRef.current = "drag";
      importReferenceResourcesFromLocal([e], {
        reportParams: {
          importMaterialParams: {
            actionType: pRef_current,
          },
        },
      });
      audioGeneratorManager.reportManager.reportClickUpload({
        uploadMethod: pRef_current,
      });
    },
    [audioGeneratorManager, importReferenceResourcesFromLocal],
  );
  return c.jsx(
    ax.t,
    s._(
      i._(
        {
          referenceRenderProps,
        },
        referenceUploadTooltipProps,
      ),
      {
        children: c.jsx(aV.I, {
          component: null,
          guardFileDrop: true,
          source: ea.HH.Upload,
          children: c.jsx(
            aF.L,
            i._(
              {
                accept: acceptedFileTypes,
                disabled: !referenceAdditionValidationResult.ok,
                referenceRenderProps,
                onChange: g,
                onCancel: h,
                onClick: v,
              },
              t,
            ),
          ),
        }),
      },
    ),
  );
});
const nY = h.PA(function (e) {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    data: { feature },
  } = audioGeneratorManager;
  switch (feature) {
    case "omniDubbing":
      return c.jsx(nH, i._({}, e));
    case "videoTranslation":
      return c.jsx(nQ, i._({}, e));
    case "audioSeparation":
      return c.jsx(nB, i._({}, e));
    default:
      return c.jsx(nq, i._({}, e));
  }
});
const n1 = h.PA(function (e) {
  const { referenceRenderProps } = e;
  const { audioGeneratorManager } = j.h(_.V);
  const { voiceManager } = audioGeneratorManager;
  const {
    metadata: { incomingVoicesLoading, speechSourceType },
    data: { selectedVoice, speechAudio, speechAudioLoading },
    resetVoice,
    pauseSpeechAudio,
  } = voiceManager;
  const v = speechSourceType === "text-to-speech";
  const loading = incomingVoicesLoading || (v && speechAudioLoading);
  const g = d.useMemo(() => c.jsx(V.csv, {}), []);
  if (v && speechAudio) {
    return c.jsx(ax.t, {
      resource: speechAudio,
      referenceRenderProps,
      children: c.jsx(
        ag.q,
        i._(
          {
            audioResource: speechAudio,
            icon: g,
            loading,
            onClick: pauseSpeechAudio,
            onRemove: resetVoice,
          },
          e,
        ),
      ),
    });
  }
  return c.jsx(
    n0.T,
    i._(
      {
        referenceId: "voice",
        icon: g,
        label: selectedVoice == null ? undefined : selectedVoice.name,
        loading,
        onRemove: resetVoice,
      },
      e,
    ),
  );
});
const n6 = h.PA(function (e) {
  const { videoResource } = e;
  const t = E._(e, ["videoResource"]);
  const { referenceRenderProps } = t;
  const { audioGeneratorManager } = j.h(_.V);
  const { videoTranslationManager } = audioGeneratorManager;
  const {
    metadata: { acceptedFileTypes },
    removeReferenceResource,
    replaceReferenceResourceFromLocal,
  } = videoTranslationManager;
  return c.jsx(ax.t, {
    resource: videoResource,
    referenceRenderProps,
    children: c.jsx(
      aA.L,
      s._(
        i._(
          {
            videoResource,
            accept: acceptedFileTypes,
          },
          t,
        ),
        {
          onRemove: removeReferenceResource,
          onDropFromLocal: replaceReferenceResourceFromLocal,
        },
      ),
    ),
  });
});
const n2 = h.PA(function (e) {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    data: { feature },
    metadata: { referenceUploadVisible },
    omniDubbingManager,
    videoTranslationManager,
    audioSeparationManager,
  } = audioGeneratorManager;
  const {
    data: { references },
    moveReferenceResource,
    removeReferenceResource,
  } = omniDubbingManager;
  const {
    data: { references: references_1 },
  } = videoTranslationManager;
  const {
    data: { references: references_2 },
  } = audioSeparationManager;
  const g = d.useMemo(() => c.jsx(nY, {}, "reference-upload"), []);
  const x = d.useMemo(() => {
    switch (feature) {
      case "omniDubbing":
        return [
          ...references.map((e) => {
            if (e.type === "image") {
              return c.jsx(
                nL,
                {
                  imageResource: e,
                },
                e.id,
              );
            }
            if (e.type === "video") {
              return c.jsx(
                nZ,
                {
                  videoResource: e,
                },
                e.id,
              );
            }
            return c.jsx(
              nO,
              {
                audioResource: e,
              },
              e.id,
            );
          }),
          ...(referenceUploadVisible ? [g] : []),
        ];
      case "videoTranslation":
        return [
          ...references_1.map((videoResource) =>
            c.jsx(
              n6,
              {
                videoResource,
              },
              videoResource.id,
            ),
          ),
          ...(referenceUploadVisible ? [g] : []),
        ];
      case "audioSeparation":
        return [
          ...references_2.map((e) => {
            if (e.type === "video") {
              return c.jsx(
                nU,
                {
                  videoResource: e,
                },
                e.id,
              );
            }
            return c.jsx(
              nz,
              {
                audioResource: e,
              },
              e.id,
            );
          }),
          ...(referenceUploadVisible ? [g] : []),
        ];
      case "textReading":
        return [referenceUploadVisible ? g : c.jsx(n1, {}, "voice")];
      default:
        return [];
    }
  }, [
    feature,
    g,
    referenceUploadVisible,
    references,
    references_1,
    references_2,
  ]);
  const b = d.useMemo(
    () =>
      c.jsx(
        al.V,
        s._(i._({}, e), {
          children: x,
        }),
      ),
    [e, x],
  );
  if (feature !== "omniDubbing") {
    return b;
  }
  return c.jsx(au.Q, {
    items: references,
    onMove: moveReferenceResource,
    onRemove: removeReferenceResource,
    children: b,
  });
});
const n3 = h.PA(function (e) {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    data: { references },
  } = audioGeneratorManager;
  return c.jsx(
    ar.B,
    s._(i._({}, e), {
      children: c.jsx(ai.n, {
        resources: references,
        children: c.jsx(n2, {}),
      }),
    }),
  );
});
const n9 = d.memo(function (e) {
  const {
    tooltipProps,
    children,
    renderCredits,
    discountItemName = T.Ay.t("web_audio_gen_feature_name", {}, "音频生成"),
  } = e;
  const l = E._(e, [
    "tooltipProps",
    "children",
    "renderCredits",
    "discountItemName",
  ]);
  const { disabled } = l;
  const u = th.n();
  const m = n4.v(u);
  const p = d.useMemo(() => {
    if (u == null ? undefined : u.trialInfo.isStrategyFreeTrial) {
      return {
        content: "".concat(
          T.Ay.t(
            "web_m10n_lip_sync_freetrial_button",
            {
              num: u.trialInfo.strategyFreeTrialTimes,
              number0: u.trialInfo.strategyFreeTrialTimes,
            },
            "{number0} free trials",
          ),
        ),
      };
    }
    if (m.enableSubmitTooltips) {
      return {
        onVisibleChange: m.onTooltipVisibleChange,
        content: c.jsx(n5.S, {
          priceText: m.lowPriceTrialText,
        }),
      };
    }
    if ((u == null ? undefined : u.needVip) && !u.isVip) {
      return {
        content: T.Ay.t("dre_m10n_pro_feature", {}, "此功能为VIP专属"),
      };
    }
  }, [u, m]);
  const tooltipProps_1 = d.useMemo(() => {
    if (disabled) {
      return tooltipProps;
    }
    if (p != null) {
      return p;
    }
    return tooltipProps;
  }, [disabled, tooltipProps, p]);
  const h = d.useMemo(() => {
    if (u) {
      return c.jsx(n8.G, {
        renderCredits,
        discountItemName,
      });
    }
    return children;
  }, [children, u, renderCredits, discountItemName]);
  return c.jsx(
    aW.F,
    s._(
      i._(
        {
          tooltipProps: tooltipProps_1,
        },
        l,
      ),
      {
        children: h,
      },
    ),
  );
});
const re = h.PA(function (e) {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    metadata: { submitButtonDisabled, submitButtonTooltipProps },
    data: { commercialSceneOptions },
    taskSubmissionManager: { submit },
  } = audioGeneratorManager;
  const o = M.D(submit);
  return c.jsx(aV.I, {
    component: null,
    source: ea.HH.ClickGenerate,
    children: c.jsx(n7.K, {
      component: null,
      sceneOptions: commercialSceneOptions,
      isVipTooltipDisabled: true,
      children: c.jsx(
        n9,
        s._(i._({}, e), {
          disabled: submitButtonDisabled,
          tooltipProps: submitButtonTooltipProps,
          onClick: o,
        }),
      ),
    }),
  });
});
const rn = h.PA(function () {
  const {
    data: { feature },
    metadata: { featureOptions },
    switchFeature,
  } = j.h(_.V).audioGeneratorManager;
  const n = d.useMemo(() => {
    var t;
    if ((t = featureOptions.find((a) => a.value === feature)) == null) {
      return undefined;
    }
    return t.label;
  }, [feature, featureOptions]);
  if (featureOptions.length <= 1) {
    return null;
  }
  return c.jsx(ra.F, {
    content: n,
    children: c.jsx(rt.T, {
      options: featureOptions,
      value: feature,
      onChange: (e) => switchFeature(e),
    }),
  });
});
const rl = h.PA(function () {
  const {
    data: { modelKey },
    metadata: { modelOptions },
    switchModel,
  } = j.h(_.V).audioGeneratorManager;
  const n = rr.P({
    currentValue: modelKey,
    options: modelOptions,
    onAllowedChange: switchModel,
  });
  if (modelOptions.length === 0) {
    return null;
  }
  return c.jsx(ts.W, {
    options: modelOptions,
    value: modelKey,
    onChange: n,
  });
});
const ro = h.PA(function () {
  const { audioGeneratorManager } = j.h(_.V);
  const {
    data: { feature },
    voiceManager,
  } = audioGeneratorManager;
  const {
    metadata: { voiceSelectionDisabled },
    prepareVoicePanelOpen,
  } = voiceManager;
  const l = d.useMemo(() => c.jsx(nJ, {}), []);
  const o = d.useMemo(() => c.jsx(V.csv, {}), []);
  const [i, setI] = d.useState(false);
  const u = d.useCallback(
    (e) => {
      if (e) {
        prepareVoicePanelOpen();
      }
      setI(e);
    },
    [prepareVoicePanelOpen],
  );
  if (feature !== "omniDubbing" && feature !== "textReading") {
    return null;
  }
  return c.jsx(a5.I, {
    content: l,
    disabled: voiceSelectionDisabled,
    popupVisible: i,
    onVisibleChange: u,
    children: c.jsx(aV.I, {
      component: null,
      source: ea.HH.Others,
      children: c.jsx(F.E, {
        active: i,
        icon: o,
        children: T.Ay.t("web_audio_gen_voice_library_title", {}, "音色库"),
      }),
    }),
  });
});
const ri = h.PA(function (e) {
  return c.jsxs(
    a$.U,
    s._(i._({}, e), {
      children: [
        c.jsx(az.R, {}),
        c.jsx(rl, {}),
        c.jsx(rn, {}),
        c.jsx(ro, {}),
        c.jsx(nM, {}),
      ],
    }),
  );
});
var rC = {
  actionCopy: {
    mainContent: n.b,
    references: r.T,
    submitButton: l.t,
    toolbar: o.I,
  },
  agentic: {
    mainContent: an,
    references: aE,
    submitButton: aD,
    toolbar: n_,
  },
  digitalHuman: {
    mainContent: rs.J,
    references: rc.$,
    submitButton: rd.j,
    toolbar: ru.I,
  },
  image: {
    mainContent: rm.H,
    references: rp.P,
    submitButton: rv.L,
    toolbar: rh.Y,
  },
  video: {
    mainContent: rf.h,
    references: rj.p,
    submitButton: rk.Z,
    toolbar: ry.s,
  },
  music: {
    mainContent: rg.V,
    references: rx.l,
    submitButton: rb.T,
    toolbar: r_.c,
  },
  audio: {
    mainContent: n$,
    references: n3,
    submitButton: re,
    toolbar: ri,
  },
};
export { rC as T };
