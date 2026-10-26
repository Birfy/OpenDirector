import n from "oa";
import i from "bk";
import o from "z8";
import s from "lj";
import c from "wF";
import l from "E7";
import { _ as __1 } from "./module-a6i_2.js";
import { d } from "./module-fT_2.js";
import { L } from "./module-vd4_2.js";
import { G as G_1 } from "./module-cmX_2.js";
import h from "qa";
import { w as w_1 } from "./module-m0R_2.js";
import g from "bT";
import f from "ED";
import b from "Qey";
import j from "c6";
import y from "w3";
import w from "HX";
import { D as D_1 } from "./module-ru_3.js";
import _ from "eqj";
import C from "n3";
import x from "cY";
import S from "rr";
import R from "U7";
import { i as i_1 } from "./module-F5u.js";
import E from "NY";
import W from "cO";
import _F from "xb";
import z from "yw";
import V from "xi";
import { I as I_1 } from "./module-RMk.js";
import O from "Nr";
import B from "g9";
import { OM } from "./module-xTI_2.js";
import { H } from "./module-LB_2.js";
import J from "Ge";
import K from "M8X";
import q from "UN";
import X from "Kt";
import { B as B_1 } from "./module-HT_2.js";
import Q from "du";
import Y from "QWK";
import $ from "kF";
import G from "Dm";
import ee from "xL";
export { i as INewFrameTopActionsFeatureService } from "./module-F5u.js";
Object.defineProperty(
  exports,
  "MAIN_FRAME_2026_TOP_ACTIONS_RIGHT_INSET_PROPERTY",
  {
    enumerable: true,
    get: () => ti.CV,
  },
);
Object.defineProperty(
  exports,
  "MAIN_FRAME_2026_TOP_ACTIONS_SAFE_RIGHT_PROPERTY",
  {
    enumerable: true,
    get: () => ti.CL,
  },
);
Object.defineProperty(
  exports,
  "MAIN_FRAME_2026_TOP_ACTIONS_TOP_OFFSET_PROPERTY",
  {
    enumerable: true,
    get: () => ti.Hc,
  },
);
Object.defineProperty(exports, "MAIN_FRAME_2026_TOP_ACTIONS_TOP_OFFSET_PX", {
  enumerable: true,
  get: () => ti.KZ,
});
export { t as MainFrame2026DetailSurfaceBoundary } from "./module-o0.js";
Object.defineProperty(exports, "TopActionsAwareNavigationRow", {
  enumerable: true,
  get: () => tZ.z,
});
Object.defineProperty(exports, "TopActionsRoutePortal", {
  enumerable: true,
  get: () => tq.e,
});
const A = [
  {
    id: "create",
    labelKey: "web_mainframe_generate",
    fallback: "生成",
  },
  {
    id: "explore",
    labelKey: "web_mainframe_explore",
    fallback: "探索",
  },
  {
    id: "assets",
    labelKey: "web_mainframe_asset",
    fallback: "资产",
  },
  {
    id: "elements",
    labelKey: "web_mainframe_asset_tab_subject",
    fallback: "主体",
  },
  {
    id: "short-drama",
    labelKey: "web_mainframe_StoryStudio",
    fallback: "短剧工作室",
  },
  {
    id: "enterprise",
    labelKey: "web_enterprise_home_business_entry",
    fallback: "企业服务",
  },
];
const T = "web_mainframe_history_tab_chat";
const M = "对话";
const I = "web_mainframe_history_tab_canvas";
const P = "画布";
const et = new Set([
  "select",
  "pin",
  "unpin",
  "rename",
  "delete",
  "delete_confirm",
]);
class ea extends $.v {
  getEventParams() {
    const e = super.getEventParams();
    if (!et.has(e.action)) {
      delete e.workspace_id;
    }
    return e;
  }
  constructor(...e) {
    super(...e);
    this.eventName = "conversation_list_action";
  }
}
class er extends ee.N {
  _validateParams(e) {
    ["action", "action_method"].forEach((t) => {
      G.F4(e[t], "[ConversationListActionReporter] ".concat(t, " is required"));
    });
    if (et.has(e.action)) {
      G.F4(
        e.workspace_id,
        "[ConversationListActionReporter] workspace_id is required for ".concat(
          e.action,
        ),
      );
    }
  }
  _getCollectorClass() {
    return ea;
  }
  constructor(e, t) {
    super(
      n._(
        {
          actionMethod: "click",
        },
        e,
      ),
      t,
    );
    this._containerService = t;
  }
}
er = Y.Cg(
  [
    Y.Qj(1, X._),
    Y.Sn("design:type", Function),
    Y.Sn("design:paramtypes", [
      typeof Partial === "undefined" ? Object : Partial,
      X._ === undefined ? Object : X._,
    ]),
  ],
  er,
);
const en = new Set(Object.values(C.W));
function useEi(e) {
  const t = c.h(X._);
  return g.useCallback(
    (a, r) => {
      var { workspaceId = e, actionMethod = "click" } = r != null ? r : {};
      try {
        t.createInstance(er, {
          action: a,
          actionMethod,
          workspaceId,
        }).report();
      } catch (error) {
        V.V.error(
          "[MainFrame2026Sidebar] report conversation list action failed",
          error,
        );
      }
    },
    [t, e],
  );
}
function useEo(e) {
  const t = c.h(X._);
  return g.useCallback(
    (a, r) => {
      var { projectId = e, actionMethod = "click" } = r != null ? r : {};
      try {
        var o;
        var s = K.cQ(t, q.k).getCommonEventParams();
        var page = ((o = s.page), typeof o === "string" && en.has(o))
          ? s.page
          : undefined;
        t.createInstance(B_1, {
          action: a,
          actionMethod,
          projectId,
          page,
          tab: page === "create" ? Q.t2(t) : undefined,
          urlPath: window.location.pathname,
        }).report();
      } catch (error) {
        V.V.error(
          "[MainFrame2026Sidebar] report AI Canvas project action failed",
          error,
        );
      }
    },
    [t, e],
  );
}
function useEs(e, t, a) {
  const [menuOpen, setMenuOpen] = g.useState(false);
  const iRef = g.useRef(false);
  const oRef = g.useRef(a);
  const setMenuVisibility = g.useCallback(
    function (a) {
      const r =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : oRef.current;
      oRef.current = r;
      if (a && !iRef.current) {
        e(t, {
          actionMethod: r,
        });
      }
      iRef.current = a;
      setMenuOpen(a);
    },
    [e, t],
  );
  const resetMenu = g.useCallback(() => {
    iRef.current = false;
    setMenuOpen(false);
  }, []);
  const getActionMethod = g.useCallback(() => oRef.current, []);
  const reportMenuAction = g.useCallback(
    (t) =>
      e(t, {
        actionMethod: oRef.current,
      }),
    [e],
  );
  const toggleMenu = g.useCallback(
    (e) => setMenuVisibility(!iRef.current, e),
    [setMenuVisibility],
  );
  return {
    getActionMethod,
    menuOpen,
    reportMenuAction,
    resetMenu,
    setMenuVisibility,
    toggleMenu,
  };
}
const ec = require("tvS").u1("sidebar-canvas-project-list-service");
require("Vx");
require("yS");
const el = require("Ix");
const ed = require("gL");
function useEu(e) {
  const { disabled, compact, onSelect, onRename } = e;
  const iRef = g.useRef(undefined);
  var o = g.useCallback(() => {
    clearTimeout(iRef.current);
    iRef.current = undefined;
    document.removeEventListener("pointerdown", o, true);
    document.removeEventListener("click", o, true);
    document.removeEventListener("keydown", o, true);
    window.removeEventListener("blur", o);
    window.removeEventListener("popstate", o);
  }, []);
  g.useEffect(() => o, [disabled, compact, o]);
  const s = (e) =>
    e.target instanceof Element && !!e.target.closest("button, input, a");
  return {
    handleClick: (e) => {
      o();
      if (!(disabled || s(e))) {
        if (e.detail === 0) {
          onSelect();
        } else if (e.detail === 1) {
          document.addEventListener("pointerdown", o, true);
          document.addEventListener("click", o, true);
          document.addEventListener("keydown", o, true);
          window.addEventListener("blur", o);
          window.addEventListener("popstate", o);
          iRef.current = setTimeout(() => {
            o();
            onSelect();
          }, 300);
        }
      }
    },
    handleDoubleClick: (e) => {
      o();
      if (!(disabled || s(e))) {
        e.preventDefault();
        e.stopPropagation();
        onRename();
      }
    },
  };
}
const ep = require("Hr");
const em = {
  "navigation-width": "76px",
  navigationWidth: "76px",
  "navigation-padding-left": "0px",
  navigationPaddingLeft: "0px",
  "home-container-max-width": "2028px",
  homeContainerMaxWidth: "2028px",
  "home-container-scrollbar-width": "16px",
  homeContainerScrollbarWidth: "16px",
  "side-drawer-width": "440px",
  sideDrawerWidth: "440px",
  "side-drawer-float-limit-width": "1280px",
  sideDrawerFloatLimitWidth: "1280px",
  "home-breakpoint-xxl": "2199px",
  homeBreakpointXxl: "2199px",
  "home-breakpoint-xl": "1800px",
  homeBreakpointXl: "1800px",
  "home-breakpoint-lg": "1536px",
  homeBreakpointLg: "1536px",
  "home-breakpoint-md": "1279px",
  homeBreakpointMd: "1279px",
  "home-breakpoint-sm": "810px",
  homeBreakpointSm: "810px",
  "home-breakpoint-xs": "0px",
  homeBreakpointXs: "0px",
  "inspiration-gap": "2px",
  inspirationGap: "2px",
  "short-video-gap": "12px",
  shortVideoGap: "12px",
  "short-video-cols-xxl": "5",
  shortVideoColsXxl: "5",
  "short-video-cols-xl": "4",
  shortVideoColsXl: "4",
  "short-video-cols-lg": "4",
  shortVideoColsLg: "4",
  "short-video-cols-md": "3",
  shortVideoColsMd: "3",
  "short-video-cols-sm": "2",
  shortVideoColsSm: "2",
  "short-video-cols-xs": "1",
  shortVideoColsXs: "1",
  "activity-gap": "12px",
  activityGap: "12px",
  "activity-cols-xxl": "5",
  activityColsXxl: "5",
  "activity-cols-xl": "4",
  activityColsXl: "4",
  "activity-cols-lg": "4",
  activityColsLg: "4",
  "activity-cols-md": "3",
  activityColsMd: "3",
  "activity-cols-sm": "2",
  activityColsSm: "2",
  "activity-cols-xs": "1",
  activityColsXs: "1",
  "ai-generate-record-container-max-width": "1024px",
  aiGenerateRecordContainerMaxWidth: "1024px",
  "home-container-right-padding-width": "44px",
  homeContainerRightPaddingWidth: "44px",
  "home-container-left-padding-width": "40px",
  homeContainerLeftPaddingWidth: "40px",
  "main-frame-2026-sidebar-collapsed-width": "64px",
  mainFrame2026SidebarCollapsedWidth: "64px",
  "main-frame-2026-sidebar-expanded-width": "240px",
  mainFrame2026SidebarExpandedWidth: "240px",
  "main-frame-2026-sidebar-narrow-max-width": "986px",
  mainFrame2026SidebarNarrowMaxWidth: "986px",
  "main-frame-2026-inspiration-three-column-max-width": "965px",
  mainFrame2026InspirationThreeColumnMaxWidth: "965px",
  "main-frame-2026-inspiration-four-column-max-width": "1287px",
  mainFrame2026InspirationFourColumnMaxWidth: "1287px",
  "main-frame-2026-inspiration-five-column-max-width": "1529px",
  mainFrame2026InspirationFiveColumnMaxWidth: "1529px",
  "main-frame-2026-inspiration-three-column-count": "3",
  mainFrame2026InspirationThreeColumnCount: "3",
  "main-frame-2026-inspiration-four-column-count": "4",
  mainFrame2026InspirationFourColumnCount: "4",
  "main-frame-2026-inspiration-five-column-count": "5",
  mainFrame2026InspirationFiveColumnCount: "5",
  "main-frame-2026-inspiration-six-column-count": "6",
  mainFrame2026InspirationSixColumnCount: "6",
  "generator-carousel-width": "440px",
  generatorCarouselWidth: "440px",
  "generator-carousel-collapse-normal": "1279px",
  generatorCarouselCollapseNormal: "1279px",
  "generator-carousel-collapse-with-agent": "1716px",
  generatorCarouselCollapseWithAgent: "1716px",
  "inspiration-cols-xxl": "6",
  inspirationColsXxl: "6",
  "inspiration-cols-xl": "5",
  inspirationColsXl: "5",
  "inspiration-cols-lg": "5",
  inspirationColsLg: "5",
  "inspiration-cols-md": "5",
  inspirationColsMd: "5",
  "inspiration-cols-sm": "3",
  inspirationColsSm: "3",
  "inspiration-cols-xs": "2",
  inspirationColsXs: "2",
  "concealable-card-element": "concealable-card-element-jCcRvM",
  concealableCardElement: "concealable-card-element-jCcRvM",
  "sidebar-content": "sidebar-content-I6FzyO",
  sidebarContent: "sidebar-content-I6FzyO",
  "content-compact": "content-compact-VOlfoS",
  contentCompact: "content-compact-VOlfoS",
  navigation: "navigation-XXMlx7",
  "navigation-item": "navigation-item-iVBxD_",
  navigationItem: "navigation-item-iVBxD_",
  "navigation-item-badge-compact": "navigation-item-badge-compact-G3o8hW",
  navigationItemBadgeCompact: "navigation-item-badge-compact-G3o8hW",
  "navigation-item-open-action": "navigation-item-open-action-JnhTkX",
  navigationItemOpenAction: "navigation-item-open-action-JnhTkX",
  "project-area": "project-area-KieYw_",
  projectArea: "project-area-KieYw_",
  "project-section": "project-section-m4yCXf",
  projectSection: "project-section-m4yCXf",
  "project-section-header": "project-section-header-nwFwuO",
  projectSectionHeader: "project-section-header-nwFwuO",
  "project-section-divider": "project-section-divider-Q8qrIL",
  projectSectionDivider: "project-section-divider-Q8qrIL",
  "content-collapsed": "content-collapsed-zIlgVz",
  contentCollapsed: "content-collapsed-zIlgVz",
  "project-section-content-slot": "project-section-content-slot-_cT3UX",
  projectSectionContentSlot: "project-section-content-slot-_cT3UX",
  "project-section-create-compact": "project-section-create-compact-Ij1Qn9",
  projectSectionCreateCompact: "project-section-create-compact-Ij1Qn9",
  "workspace-thumbnail": "workspace-thumbnail-IJCdLi",
  workspaceThumbnail: "workspace-thumbnail-IJCdLi",
  "workspace-task-status-compact": "workspace-task-status-compact-CFpqx5",
  workspaceTaskStatusCompact: "workspace-task-status-compact-CFpqx5",
  "navigation-item-label": "navigation-item-label-zdATON",
  navigationItemLabel: "navigation-item-label-zdATON",
  "project-section-toggle": "project-section-toggle-PTwFVc",
  projectSectionToggle: "project-section-toggle-PTwFVc",
  "workspace-details": "workspace-details-hEQg7r",
  workspaceDetails: "workspace-details-hEQg7r",
  "show-more": "show-more-M2Lhx3",
  showMore: "show-more-M2Lhx3",
  "project-retry": "project-retry-IIyE8P",
  projectRetry: "project-retry-IIyE8P",
  "project-empty-state": "project-empty-state-ymA_OA",
  projectEmptyState: "project-empty-state-ymA_OA",
  "project-login-prompt": "project-login-prompt-S6VuM_",
  projectLoginPrompt: "project-login-prompt-S6VuM_",
  "project-loading-more": "project-loading-more-ZcEbK6",
  projectLoadingMore: "project-loading-more-ZcEbK6",
  "project-section-header-action": "project-section-header-action-xI6L6U",
  projectSectionHeaderAction: "project-section-header-action-xI6L6U",
  "navigation-divider": "navigation-divider-HSbwfD",
  navigationDivider: "navigation-divider-HSbwfD",
  "navigation-item-badge": "navigation-item-badge-3E_X9D",
  navigationItemBadge: "navigation-item-badge-3E_X9D",
  "navigation-item-compact": "navigation-item-compact-dF06_X",
  navigationItemCompact: "navigation-item-compact-dF06_X",
  "navigation-item-label-with-badge": "navigation-item-label-with-badge-hKkV7c",
  navigationItemLabelWithBadge: "navigation-item-label-with-badge-hKkV7c",
  "project-section-content-boundary": "project-section-content-boundary-CwyVhy",
  projectSectionContentBoundary: "project-section-content-boundary-CwyVhy",
  "project-scroll-body": "project-scroll-body-kUFJXA",
  projectScrollBody: "project-scroll-body-kUFJXA",
  "project-scroll-body-compact": "project-scroll-body-compact-EA1OHM",
  projectScrollBodyCompact: "project-scroll-body-compact-EA1OHM",
  "project-scroll-content": "project-scroll-content-qoU0IA",
  projectScrollContent: "project-scroll-content-qoU0IA",
  "project-scroll-content-guest": "project-scroll-content-guest-Ohulvt",
  projectScrollContentGuest: "project-scroll-content-guest-Ohulvt",
  "project-section-content-inner": "project-section-content-inner-_DDvkv",
  projectSectionContentInner: "project-section-content-inner-_DDvkv",
  "project-section-content-slot-collapsed":
    "project-section-content-slot-collapsed-Erte91",
  projectSectionContentSlotCollapsed:
    "project-section-content-slot-collapsed-Erte91",
  "project-section-header-compact": "project-section-header-compact-GMK9bP",
  projectSectionHeaderCompact: "project-section-header-compact-GMK9bP",
  "chat-project-section": "chat-project-section-VO4zk9",
  chatProjectSection: "chat-project-section-VO4zk9",
  "project-section-create": "project-section-create-T61cnm",
  projectSectionCreate: "project-section-create-T61cnm",
  "project-section-actions": "project-section-actions-ZNLZ0g",
  projectSectionActions: "project-section-actions-ZNLZ0g",
  "project-section-status": "project-section-status-htqc5S",
  projectSectionStatus: "project-section-status-htqc5S",
  "project-section-toggle-content": "project-section-toggle-content-fhSIKR",
  projectSectionToggleContent: "project-section-toggle-content-fhSIKR",
  "project-section-toggle-compact": "project-section-toggle-compact-RFxz4X",
  projectSectionToggleCompact: "project-section-toggle-compact-RFxz4X",
  "project-section-chevron": "project-section-chevron-VdFmXN",
  projectSectionChevron: "project-section-chevron-VdFmXN",
  "project-section-chevron-collapsed":
    "project-section-chevron-collapsed-xlCyUI",
  projectSectionChevronCollapsed: "project-section-chevron-collapsed-xlCyUI",
  "project-section-chevron-expanded": "project-section-chevron-expanded-xNGjBD",
  projectSectionChevronExpanded: "project-section-chevron-expanded-xNGjBD",
  "project-section-compact": "project-section-compact-CqhwFl",
  projectSectionCompact: "project-section-compact-CqhwFl",
  "project-section-create-expanded": "project-section-create-expanded-APk1rk",
  projectSectionCreateExpanded: "project-section-create-expanded-APk1rk",
  "workspace-list": "workspace-list-yvmOER",
  workspaceList: "workspace-list-yvmOER",
  "workspace-list-compact": "workspace-list-compact-Ph6ln_",
  workspaceListCompact: "workspace-list-compact-Ph6ln_",
  "project-loading-state": "project-loading-state-Ho73rD",
  projectLoadingState: "project-loading-state-Ho73rD",
  "workspace-row": "workspace-row-vIqaHM",
  workspaceRow: "workspace-row-vIqaHM",
  "project-loading-row": "project-loading-row-AMs4qk",
  projectLoadingRow: "project-loading-row-AMs4qk",
  "project-loading-line": "project-loading-line-NksYhh",
  projectLoadingLine: "project-loading-line-NksYhh",
  "workspace-row-active": "workspace-row-active-ZmO8Q4",
  workspaceRowActive: "workspace-row-active-ZmO8Q4",
  "workspace-row-editing": "workspace-row-editing-dxZdaf",
  workspaceRowEditing: "workspace-row-editing-dxZdaf",
  "workspace-row-menu-open": "workspace-row-menu-open-ORjsBq",
  workspaceRowMenuOpen: "workspace-row-menu-open-ORjsBq",
  "workspace-details-actionable": "workspace-details-actionable-EMeoLr",
  workspaceDetailsActionable: "workspace-details-actionable-EMeoLr",
  "workspace-pin": "workspace-pin-MHdQcv",
  workspacePin: "workspace-pin-MHdQcv",
  "workspace-task-status": "workspace-task-status-mWhVP8",
  workspaceTaskStatus: "workspace-task-status-mWhVP8",
  "workspace-more": "workspace-more-OG6tJ0",
  workspaceMore: "workspace-more-OG6tJ0",
  "canvas-project-details": "canvas-project-details-pRBE1E",
  canvasProjectDetails: "canvas-project-details-pRBE1E",
  "canvas-project-actions": "canvas-project-actions-N0XpP3",
  canvasProjectActions: "canvas-project-actions-N0XpP3",
  "workspace-row-compact": "workspace-row-compact-cY4Ejd",
  workspaceRowCompact: "workspace-row-compact-cY4Ejd",
  "workspace-thumbnail-compact": "workspace-thumbnail-compact-nazIJV",
  workspaceThumbnailCompact: "workspace-thumbnail-compact-nazIJV",
  "workspace-tooltip-content": "workspace-tooltip-content-wi4036",
  workspaceTooltipContent: "workspace-tooltip-content-wi4036",
  "workspace-details-compact": "workspace-details-compact-OB6oNc",
  workspaceDetailsCompact: "workspace-details-compact-OB6oNc",
  "workspace-details-task-status": "workspace-details-task-status-yy4i5v",
  workspaceDetailsTaskStatus: "workspace-details-task-status-yy4i5v",
  "workspace-name": "workspace-name-EgevhC",
  workspaceName: "workspace-name-EgevhC",
  "workspace-name-tooltip": "workspace-name-tooltip-MK27LY",
  workspaceNameTooltip: "workspace-name-tooltip-MK27LY",
  "workspace-task-status-processing": "workspace-task-status-processing-JX2tOv",
  workspaceTaskStatusProcessing: "workspace-task-status-processing-JX2tOv",
  "workspace-task-status-compact-layer":
    "workspace-task-status-compact-layer-UZpz0R",
  workspaceTaskStatusCompactLayer: "workspace-task-status-compact-layer-UZpz0R",
  "workspace-task-status-dot": "workspace-task-status-dot-IE0J5U",
  workspaceTaskStatusDot: "workspace-task-status-dot-IE0J5U",
  "workspace-task-status-dot-success":
    "workspace-task-status-dot-success-DWWpUV",
  workspaceTaskStatusDotSuccess: "workspace-task-status-dot-success-DWWpUV",
  "workspace-task-status-dot-waiting":
    "workspace-task-status-dot-waiting-YJQ6tu",
  workspaceTaskStatusDotWaiting: "workspace-task-status-dot-waiting-YJQ6tu",
  "workspace-task-status-dot-failed": "workspace-task-status-dot-failed-UeaV0D",
  workspaceTaskStatusDotFailed: "workspace-task-status-dot-failed-UeaV0D",
  "canvas-project-action": "canvas-project-action-maStTE",
  canvasProjectAction: "canvas-project-action-maStTE",
  "canvas-project-open-icon": "canvas-project-open-icon-G_iuCZ",
  canvasProjectOpenIcon: "canvas-project-open-icon-G_iuCZ",
  "canvas-project-tooltip-content": "canvas-project-tooltip-content-IS2N5i",
  canvasProjectTooltipContent: "canvas-project-tooltip-content-IS2N5i",
  "canvas-project-tooltip-action": "canvas-project-tooltip-action-scz7Yg",
  canvasProjectTooltipAction: "canvas-project-tooltip-action-scz7Yg",
  "canvas-project-tooltip-icon": "canvas-project-tooltip-icon-MXAnS9",
  canvasProjectTooltipIcon: "canvas-project-tooltip-icon-MXAnS9",
  "workspace-rename-input": "workspace-rename-input-HCA0Ui",
  workspaceRenameInput: "workspace-rename-input-HCA0Ui",
  "workspace-action-popover": "workspace-action-popover-WXkPmh",
  workspaceActionPopover: "workspace-action-popover-WXkPmh",
  "workspace-action-menu": "workspace-action-menu-rI8jYD",
  workspaceActionMenu: "workspace-action-menu-rI8jYD",
  "show-more-icon": "show-more-icon-os5oJN",
  showMoreIcon: "show-more-icon-os5oJN",
  "show-more-compact": "show-more-compact-_JS_wc",
  showMoreCompact: "show-more-compact-_JS_wc",
  "project-login-prompt-icon": "project-login-prompt-icon-A_2KtE",
  projectLoginPromptIcon: "project-login-prompt-icon-A_2KtE",
  "project-login-prompt-label": "project-login-prompt-label-Xyx8Lw",
  projectLoginPromptLabel: "project-login-prompt-label-Xyx8Lw",
  "project-loading-more-compact": "project-loading-more-compact-n3T14n",
  projectLoadingMoreCompact: "project-loading-more-compact-n3T14n",
  "content-responsive-collapse": "content-responsive-collapse-gJsDg6",
  contentResponsiveCollapse: "content-responsive-collapse-gJsDg6",
};
function eh(e) {
  const { name, onOpen } = e;
  return o.jsxs("span", {
    className: em.canvasProjectTooltipContent,
    children: [
      o.jsx("span", {
        children: name,
      }),
      o.jsx("button", {
        type: "button",
        "aria-label": b.Ay.t("octo_workspace_open_action", {}, "Open project"),
        className: ""
          .concat(em.canvasProjectAction, " ")
          .concat(em.canvasProjectTooltipAction),
        onClick: (e) => {
          e.stopPropagation();
          onOpen();
        },
        children: o.jsx(z.Pl9, {
          className: em.canvasProjectTooltipIcon,
          size: 12,
          "aria-hidden": "true",
        }),
      }),
    ],
  });
}
function ev(e) {
  const { compact, onOpen, onToggleMenu, showMore = true } = e;
  return o.jsxs("div", {
    className: em.canvasProjectActions,
    children: [
      o.jsx("button", {
        "aria-label": b.Ay.t("octo_workspace_open_action", {}, "Open project"),
        className: em.canvasProjectAction,
        tabIndex: compact ? -1 : 0,
        type: "button",
        onClick: (e) => {
          e.stopPropagation();
          onOpen();
        },
        children: o.jsx(z.Pl9, {
          className: em.canvasProjectOpenIcon,
          size: 16,
          "aria-hidden": "true",
        }),
      }),
      showMore
        ? o.jsx("button", {
            "aria-label": b.Ay.t(
              "web_my_feed_more_options",
              {},
              "More actions",
            ),
            className: em.canvasProjectAction,
            tabIndex: compact ? -1 : 0,
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onToggleMenu();
            },
            children: o.jsx(z.xcf, {
              size: 16,
            }),
          })
        : null,
    ],
  });
}
function useEg(e) {
  const {
    ariaLabel,
    maxLength,
    placeholder,
    value,
    onBlur,
    onCancel,
    onChange,
    onCommit,
  } = e;
  const dRef = g.useRef(null);
  g.useLayoutEffect(() => {
    var e;
    if ((e = dRef.current) != null) {
      e.select();
    }
  }, []);
  return o.jsx("input", {
    ref: dRef,
    className: em.workspaceRenameInput,
    value,
    autoFocus: true,
    "aria-label": ariaLabel,
    placeholder,
    onBlur,
    onChange: (e) => {
      var t = Array.from(e.target.value);
      if (t.length > maxLength) {
        ep.l.warning({
          id: "mainFrameProjectNameLengthLimit-".concat(maxLength),
          content: b.Ay.t(
            "web_mainframe_project_name_max_length",
            {
              num: maxLength,
            },
            "命名不可超过".concat(maxLength, "字符"),
          ),
        });
      }
      onChange(t.slice(0, maxLength).join(""));
    },
    onClick: (e) => e.stopPropagation(),
    onKeyDown: (e) => {
      if (!e.nativeEvent.isComposing) {
        if (e.key === "Enter") {
          e.preventDefault();
          onCommit();
        } else if (e.key === "Escape") {
          e.preventDefault();
          onCancel();
        }
      }
    },
  });
}
function ef(e) {
  const {
    isPinned,
    canPin = true,
    canRename = true,
    canDelete = true,
    onPin,
    onRename,
    onDelete,
  } = e;
  return o.jsxs("div", {
    className: em.workspaceActionMenu,
    "data-main-frame-sidebar-layer": true,
    role: "menu",
    onClick: (e) => e.stopPropagation(),
    children: [
      canPin
        ? o.jsxs("button", {
            type: "button",
            role: "menuitem",
            onClick: onPin,
            children: [
              isPinned
                ? o.jsx(z.zgT, {
                    size: 16,
                  })
                : o.jsx(z.jsI, {
                    size: 16,
                  }),
              o.jsx("span", {
                children: isPinned
                  ? b.Ay.t("web_chat_item_unpin", {}, "取消置顶")
                  : b.Ay.t("web_mainframe_pin", {}, "置顶"),
              }),
            ],
          })
        : null,
      canRename
        ? o.jsxs("button", {
            type: "button",
            role: "menuitem",
            onClick: onRename,
            children: [
              o.jsx(z.GI1, {
                size: 16,
              }),
              o.jsx("span", {
                children: b.Ay.t("web_mainframe_rename", {}, "重命名"),
              }),
            ],
          })
        : null,
      canDelete
        ? o.jsxs("button", {
            type: "button",
            role: "menuitem",
            onClick: onDelete,
            children: [
              o.jsx(z.xV8, {
                size: 16,
              }),
              o.jsx("span", {
                children: b.Ay.t("web_mainframe_delete", {}, "删除"),
              }),
            ],
          })
        : null,
    ],
  });
}
require("uw5");
const eb = require("VAR");
function ej(e) {
  const {
    children,
    content,
    open,
    position = "bl",
    onVisibleChange,
    className,
  } = e;
  const d = h._(e, [
    "children",
    "content",
    "open",
    "position",
    "onVisibleChange",
    "className",
  ]);
  const u = position === "rt";
  return o.jsx(
    eb.A,
    i._(n._({}, d), {
      className: _F(className, {
        [em.workspaceActionPopover]: u,
      }),
      content,
      popupVisible: open,
      position,
      trigger: "contextMenu",
      triggerProps: {
        showArrow: false,
        popupAlign: u
          ? {
              right: -32,
            }
          : {
              bottom: 8,
            },
        popupStyle: {
          width: "auto",
          padding: u ? `${34}px 0 ${24}px` : 0,
          background: "transparent",
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          filter: "none",
        },
      },
      onVisibleChange,
      children,
    }),
  );
}
function ey(e) {
  const { name } = e;
  return o.jsx("span", {
    className: em.workspaceName,
    children: name,
  });
}
const ew = {
  duration: {
    enter: 200,
    exit: 0,
  },
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
};
const ek = i._(n._({}, ew), {
  mouseLeaveDelay: 100,
});
const e_ = {
  popupAlign: {
    right: 8,
  },
};
function checkOverflow(e) {
  const t = e.querySelector(".".concat(em.workspaceName));
  return !!t && t.scrollWidth > t.clientWidth + 0.5;
}
function ex(e) {
  var { children, name, content = name, disabled } = e;
  return o.jsx(
    el.A,
    i._(
      n._(
        {
          content,
          className: em.workspaceNameTooltip,
          disabled,
        },
        disabled
          ? {
              popupVisible: false,
            }
          : null,
      ),
      {
        position: "right",
        popupHoverStay: true,
        showArrow: false,
        trigger: "hover",
        triggerProps: e_,
        checkOverflow,
        children,
      },
    ),
  );
}
function eS(e, t) {
  if (!t.teamId && (!e.teamId || e.teamId === "0")) {
    return {
      canRead: true,
      canPin: true,
      canRename: true,
      canDelete: true,
    };
  }
  const { permission } = e;
  const canRead =
    (permission == null ? undefined : permission.canRead) === true;
  return {
    canRead,
    canPin: false,
    canRename:
      canRead &&
      (permission == null ? undefined : permission.canWrite) === true,
    canDelete:
      canRead &&
      (permission == null ? undefined : permission.canManage) === true,
  };
}
function eR(e, t) {
  V.V.error(
    "[MainFrame2026Sidebar] ".concat(e, " AI Canvas project failed"),
    t,
  );
  ep.l.warning(b.Ay.t("web_new_fail_network_error", {}, "网络异常"));
}
function useEN(e) {
  let t;
  let a;
  let r;
  const {
    compact,
    project,
    teamId = null,
    onSelect,
    onPin,
    onRename,
    onDelete,
    onRequestExpand,
    startEditing = false,
  } = e;
  const {
    getActionMethod,
    menuOpen,
    resetMenu,
    setMenuVisibility,
    toggleMenu,
  } = useEs(useEo(project.id), "settings_show", "click");
  const w = ((t = project.name) == null ? undefined : t.trim())
    ? project.name
    : b.Ay.t("web_mainframe_canvas_untitled", {}, "未命名画布");
  const [k, setK] = g.useState(false);
  const [C, setC] = g.useState(false);
  const [S, setS] = g.useState(false);
  const [N, setN] = g.useState(w);
  const T = eS(project, {
    teamId,
  });
  const showMore = T.canPin || T.canRename || T.canDelete;
  const IRef = g.useRef(false);
  const PRef = g.useRef(compact);
  PRef.current = compact;
  const onOpen = g.useCallback(() => {
    if (T.canRead) {
      onSelect(project.id);
    }
  }, [onSelect, project.id, T.canRead]);
  g.useEffect(
    () => setC(false),
    [(a = project.cover) == null ? undefined : a.url],
  );
  g.useEffect(() => {
    if (!S) {
      setN(w);
    }
  }, [w, S]);
  g.useLayoutEffect(() => {
    resetMenu();
    setK(false);
    if (compact) {
      setS(false);
      setN(w);
    } else if (startEditing && T.canRename) {
      setN(w);
      setS(true);
    }
  }, [compact, w, showMore, resetMenu, T.canRename, startEditing]);
  const V = g.useCallback(() => {
    if (!T.canRename || PRef.current) {
      setS(false);
      setN(w);
      return;
    }
    if (!IRef.current) {
      var e = N.trim();
      if (!e || e === w) {
        setS(false);
        setN(w);
        return;
      }
      IRef.current = true;
      setS(false);
      onRename(project.id, e, getActionMethod())
        .catch((e) => {
          eR("rename", e);
        })
        .finally(() => {
          IRef.current = false;
        });
    }
  }, [w, N, getActionMethod, onRename, project.id, T.canRename]);
  const D = g.useCallback(() => {
    if (T.canPin) {
      var e = getActionMethod();
      setMenuVisibility(false);
      onPin(project.id, e).catch((e) => {
        eR("toggle pin", e);
      });
    }
  }, [getActionMethod, onPin, project.id, setMenuVisibility, T.canPin]);
  const O = g.useCallback(() => {
    if (T.canRename) {
      setMenuVisibility(false);
      setN(w);
      if (compact && onRequestExpand) {
        return void onRequestExpand();
      }
      setS(true);
    }
  }, [compact, w, onRequestExpand, setMenuVisibility, T.canRename]);
  const B = g.useCallback(() => {
    if (T.canDelete) {
      var e = getActionMethod();
      setMenuVisibility(false);
      ed.A.confirm({
        title: b.Ay.t("web_delete_popup_title", {}, "确认删除"),
        content: b.Ay.t(
          "web_new_canvas_manage_cannot_retrieved",
          {},
          "你的项目将被永久删除且无法找回，是否确认删除？",
        ),
        icon: null,
        okText: b.Ay.t("web_delete_popup_btn_delete", {}, "删除"),
        cancelText: b.Ay.t("web_delete_popup_btn_cancel", {}, "取消"),
        onOk: () =>
          E._(function* () {
            try {
              yield onDelete(project.id, e);
              ep.l.success(
                b.Ay.t("work_details_delete_success", {}, "删除成功"),
              );
              return true;
            } catch (error) {
              eR("delete", error);
              return false;
            }
          })(),
      });
    }
  }, [getActionMethod, onDelete, project.id, setMenuVisibility, T.canDelete]);
  const { handleClick, handleDoubleClick } = useEu({
    disabled: S || menuOpen,
    compact,
    onSelect: () => onOpen(),
    onRename: () => {
      if (T.canRename) {
        setK(false);
        setMenuVisibility(false, "click");
        O();
      }
    },
  });
  const J = o.jsx(ef, {
    isPinned: project.isPinned,
    canPin: T.canPin,
    canRename: T.canRename,
    canDelete: T.canDelete,
    onDelete: B,
    onPin: D,
    onRename: O,
  });
  const K = o.jsx("span", {
    className: _F(em.workspaceThumbnail, {
      [em.workspaceThumbnailCompact]: compact,
    }),
    "aria-hidden": "true",
    children:
      ((r = project.cover) == null ? undefined : r.url) && !C
        ? o.jsx("img", {
            src: W.m(project.cover.url, null, {
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
                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWR*bFhiSFZN$jFwN$dW-3hiRXh$%1hkTmFsbDJZ$mMxT%ZwW$Nu$lpWM2Qy$1RJNWRHTkhPWFZh$np$d1kzaz$hb*x-TlRKWldFMTBZM*hLZ*1*dFZtc*tRek-1WWpOamRX%kl%alJa$0$wd$p*aE5Q%T09",
            }),
            alt: "",
            crossOrigin: "anonymous",
            onError: () => setC(true),
          })
        : o.jsx(z.Ej4, {
            size: 14,
          }),
  });
  const q =
    !compact && S
      ? o.jsx(useEg, {
          ariaLabel: b.Ay.t("web_mainframe_rename", {}, "重命名画布"),
          maxLength: 60,
          placeholder: b.Ay.t(
            "web_new_canvas_manage_enter_project_name",
            {},
            "输入项目名称",
          ),
          value: N,
          onBlur: V,
          onChange: setN,
          onCommit: V,
          onCancel: () => {
            setS(false);
            setN(w);
          },
        })
      : o.jsx(ey, {
          name: w,
        });
  const X = o.jsxs("div", {
    "aria-label": compact ? w : undefined,
    className: _F(em.workspaceRow, {
      [em.workspaceRowCompact]: compact,
      [em.workspaceRowEditing]: S,
      [em.workspaceRowMenuOpen]: menuOpen,
    }),
    role: "button",
    tabIndex: S ? -1 : 0,
    onClick: handleClick,
    onDoubleClick: handleDoubleClick,
    onContextMenu: (e) => {
      e.preventDefault();
      e.stopPropagation();
      setK(false);
      if (!S && showMore) {
        setMenuVisibility(true, "right_click_menu");
      }
    },
    onKeyDown: (e) => {
      if (
        showMore &&
        !S &&
        (e.key === "ContextMenu" || (e.shiftKey && e.key === "F10"))
      ) {
        e.preventDefault();
        setK(false);
        setMenuVisibility(true, "right_click_menu");
        return;
      }
      if (
        !(
          e.target !== e.currentTarget ||
          S ||
          (e.key !== "Enter" && e.key !== " ")
        )
      ) {
        e.preventDefault();
        onOpen();
      }
    },
    children: [
      K,
      S ? q : null,
      S
        ? null
        : o.jsxs("div", {
            "aria-hidden": compact,
            className: _F(
              em.workspaceDetails,
              em.workspaceDetailsActionable,
              em.canvasProjectDetails,
              {
                [em.workspaceDetailsCompact]: compact,
              },
            ),
            children: [
              q,
              project.isPinned && T.canPin
                ? o.jsx("span", {
                    className: em.workspacePin,
                    "aria-hidden": "true",
                    children: o.jsx(z.jsI, {
                      size: 14,
                      color: "currentColor",
                    }),
                  })
                : null,
              o.jsx(ev, {
                compact,
                onOpen,
                onToggleMenu: () => toggleMenu("click"),
                showMore,
              }),
            ],
          }),
    ],
  });
  const U = showMore
    ? o.jsx(ej, {
        content: J,
        open: menuOpen,
        position: "rt",
        onVisibleChange: (e) => {
          setMenuVisibility(e);
          if (e) {
            setK(false);
          }
        },
        children: X,
      })
    : X;
  if (compact) {
    return o.jsx(el.A, {
      content: o.jsx(eh, {
        name: w,
        onOpen,
      }),
      className: em.workspaceNameTooltip,
      disabled: S || menuOpen,
      position: "right",
      popupVisible: k && !S && !menuOpen,
      popupHoverStay: true,
      showArrow: false,
      trigger: ["hover", "focus"],
      triggerProps: ek,
      onVisibleChange: (e) => setK(e && !S && !menuOpen),
      children: U,
    });
  }
  return o.jsx(ex, {
    name: w,
    disabled: S || menuOpen,
    children: U,
  });
}
function eA(e) {
  const { compact = false, onClick } = e;
  return o.jsxs("button", {
    type: "button",
    className: em.projectLoginPrompt,
    "data-compact": compact || undefined,
    "aria-hidden": compact,
    tabIndex: compact ? -1 : 0,
    onClick,
    children: [
      o.jsx("span", {
        className: em.projectLoginPromptLabel,
        children: b.Ay.t("web_mainframe_not_signin_tip", {}, "请先登录"),
      }),
      o.jsx(z.Pl9, {
        className: em.projectLoginPromptIcon,
        size: 14,
        "aria-hidden": "true",
      }),
    ],
  });
}
function eT(e) {
  const {
    title,
    collapsed,
    compact = false,
    collapsible = true,
    onToggle,
    onCreate,
    createLabel,
    createIcon,
    headerActionLabel,
    onHeaderAction,
    status,
    className,
    onboardingAnchor = false,
    keepContentMounted = false,
    collapsedContentManagedByChild = false,
    children,
  } = e;
  const y = createLabel || title;
  const w = collapsed && !collapsedContentManagedByChild;
  const k = (e) => {
    if (!onCreate) {
      return null;
    }
    var t = e === "compact";
    var disabled = t ? !compact : compact;
    return o.jsx(el.A, {
      content: y,
      position: "right",
      trigger: ["hover", "focus"],
      triggerProps: ew,
      disabled,
      children: o.jsx("button", {
        type: "button",
        className: _F(
          em.projectSectionCreate,
          t ? em.projectSectionCreateCompact : em.projectSectionCreateExpanded,
        ),
        "aria-label": y,
        "aria-hidden": disabled,
        tabIndex: disabled ? -1 : 0,
        "data-main-frame-2026-onboarding-chat-section":
          (!!onboardingAnchor && !!t) || undefined,
        onClick: onCreate,
        children:
          createIcon != null
            ? createIcon
            : o.jsx(z.cbs, {
                size: 16,
                "aria-hidden": "true",
              }),
      }),
    });
  };
  const _ = k("compact");
  const C = k("expanded");
  const x =
    !compact && headerActionLabel && onHeaderAction
      ? o.jsx("button", {
          type: "button",
          className: em.projectSectionHeaderAction,
          onClick: onHeaderAction,
          children: headerActionLabel,
        })
      : null;
  const S =
    x || C || status
      ? o.jsxs("div", {
          className: em.projectSectionActions,
          children: [
            x,
            C,
            status
              ? o.jsx("span", {
                  className: em.projectSectionStatus,
                  children: status,
                })
              : null,
          ],
        })
      : null;
  let R = null;
  if (collapsible) {
    R = o.jsx(z.ghC, {
      className: _F(em.projectSectionChevron, {
        [em.projectSectionChevronCollapsed]: collapsed,
        [em.projectSectionChevronExpanded]: !collapsed,
      }),
      size: 16,
      "aria-hidden": "true",
    });
  }
  const N = o.jsxs("span", {
    className: em.projectSectionToggleContent,
    children: [
      o.jsx("span", {
        children: title,
      }),
      R,
    ],
  });
  return o.jsxs("section", {
    className: _F(em.projectSection, className, {
      [em.projectSectionCompact]: compact,
    }),
    "aria-label": compact ? title : undefined,
    children: [
      o.jsxs("div", {
        className: _F(em.projectSectionHeader, {
          [em.projectSectionHeaderCompact]: compact,
        }),
        "data-main-frame-2026-onboarding-chat-section":
          (!!onboardingAnchor && !compact) || undefined,
        children: [
          o.jsx("div", {
            className: em.projectSectionDivider,
            "aria-hidden": "true",
          }),
          collapsible
            ? o.jsx("button", {
                type: "button",
                className: _F(em.projectSectionToggle, {
                  [em.projectSectionToggleCompact]: compact,
                }),
                "aria-expanded": !collapsed,
                "aria-hidden": compact,
                tabIndex: compact ? -1 : 0,
                onClick: onToggle,
                children: N,
              })
            : o.jsx("div", {
                className: _F(em.projectSectionToggle, {
                  [em.projectSectionToggleCompact]: compact,
                }),
                "aria-hidden": compact,
                children: N,
              }),
          S,
          _,
        ],
      }),
      !keepContentMounted && collapsed
        ? null
        : o.jsx(
            "div",
            i._(
              n._(
                {
                  className: em.projectSectionContentBoundary,
                  "aria-hidden": w || undefined,
                },
                w
                  ? {
                      inert: "",
                    }
                  : {},
              ),
              {
                children,
              },
            ),
          ),
    ],
  });
}
function eM(e) {
  const { children, collapsed = false } = e;
  return o.jsx("div", {
    className: _F(em.projectSectionContentSlot, {
      [em.projectSectionContentSlotCollapsed]: collapsed,
    }),
    children: o.jsx("div", {
      className: em.projectSectionContentInner,
      children,
    }),
  });
}
const eI = require("y3");
function eP(e) {
  const { compact = false } = e;
  return o.jsx("div", {
    className: _F(em.workspaceList, em.projectLoadingState),
    "data-compact": compact || undefined,
    role: "status",
    "aria-label": b.Ay.t("加载中", {}, "Loading"),
    "data-testid": "project-section-loading-state",
    children: Array.from(
      {
        length: 6,
      },
      (e, t) =>
        o.jsxs(
          "div",
          {
            className: _F(em.workspaceRow, em.projectLoadingRow),
            "aria-hidden": "true",
            children: [
              o.jsx(eI.Q, {
                className: em.workspaceThumbnail,
              }),
              o.jsx("div", {
                className: em.workspaceDetails,
                children: o.jsx(eI.Q, {
                  className: em.projectLoadingLine,
                  "data-testid": "project-section-loading-name",
                }),
              }),
            ],
          },
          t,
        ),
    ),
  });
}
function eE(e) {
  const { compact, onClick } = e;
  const r = b.Ay.t("web_mainframe_show_more", {}, "查看更多");
  const n = o.jsx("button", {
    type: "button",
    className: em.showMoreCompact,
    "aria-label": r,
    "aria-hidden": !compact,
    tabIndex: compact ? 0 : -1,
    onClick,
    children: o.jsx(z.rIS, {
      className: em.showMoreIcon,
      size: 14,
      "aria-hidden": "true",
    }),
  });
  return o.jsxs(o.Fragment, {
    children: [
      o.jsx("button", {
        type: "button",
        className: em.showMore,
        "aria-hidden": compact,
        tabIndex: compact ? -1 : 0,
        onClick,
        children: o.jsx("span", {
          children: r,
        }),
      }),
      o.jsx(el.A, {
        content: b.Ay.t("web_my_feed_more_options", {}, "更多"),
        position: "right",
        trigger: ["hover", "focus"],
        triggerProps: ew,
        disabled: !compact,
        children: n,
      }),
    ],
  });
}
function eW(e) {
  const { children, compact = false } = e;
  return o.jsx("div", {
    className: em.projectEmptyState,
    "data-compact": compact || undefined,
    "aria-hidden": compact,
    children,
  });
}
const eF = f.PA(function (e) {
  let t;
  const {
    accountKey,
    teamId = null,
    compact,
    collapsed,
    hasLogin,
    onToggle,
    onNavigate,
    pendingRenameProjectId,
    onRequestRename,
    requestLogin,
    uiConfigurationService,
  } = e;
  const v = c.h(ec);
  const f = g.useMemo(
    () => ({
      accountKey,
      teamId,
    }),
    [accountKey, teamId],
  );
  const j = useEo();
  const yRef = g.useRef(false);
  const wRef = g.useRef(null);
  const {
    projects,
    visibleProjects,
    visibleCount,
    hasExpandedFirstPage,
    hasMore,
    isLoading,
    isLoadingMore,
    error,
    paginationError,
  } = v.data;
  g.useEffect(() => {
    if (hasLogin) {
      v.initialize(f).catch((e) => {
        V.V.error(
          "[MainFrame2026Sidebar] initialize AI Canvas projects failed",
          e,
        );
      });
    } else {
      v.reset();
    }
  }, [hasLogin, v, f]);
  g.useEffect(() => {
    if (!(compact || pendingRenameProjectId === undefined)) {
      onRequestRename();
    }
  }, [compact, onRequestRename, pendingRenameProjectId]);
  g.useEffect(() => {
    var e = () => {
      if (hasLogin && yRef.current) {
        yRef.current = false;
        v.refresh(f).catch((e) => {
          V.V.error(
            "[MainFrame2026Sidebar] refresh AI Canvas projects failed",
            e,
          );
        });
      }
    };
    window.addEventListener("focus", e);
    return () => window.removeEventListener("focus", e);
  }, [hasLogin, v, f]);
  const F = g.useCallback(() => {
    j(collapsed ? "show" : "close");
    if (!collapsed) {
      v.resetVisibleProjects();
    }
    onToggle();
  }, [collapsed, onToggle, v, j]);
  const K = g.useCallback(() => {
    var e;
    var t;
    var a = uiConfigurationService.currentRoutePath || window.location.pathname;
    var r =
      (t = uiConfigurationService.getRouteConfigByPath(a)) == null
        ? undefined
        : t.id;
    if ((e = O.i(r, window.location.search)) != null) {
      return e;
    }
    return "other";
  }, [uiConfigurationService]);
  const onCreate = g.useCallback(() => {
    j("create");
    if (!hasLogin) {
      return void requestLogin(C.HH.ClickCanvasCreate);
    }
    yRef.current = true;
    onNavigate();
    var attribution = {
      enterFrom: "page_click",
      fromPage: K(),
    };
    if (
      !H({
        attribution,
      })
    ) {
      window.location.assign(
        W.m(
          J.N({
            attribution,
          }),
          null,
          {
            logType: "js.window.location",
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
              "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWR*bFhiSFZN$jFwN$dW-3hiRXh$%1hkTmFsbDJZ$mMxT%ZwW$Nu$lpWM2Qy$1RJNWRHTkhPWFZh$np$d1kzaz$hb*x-TlRKWldFMTBZM*hLZ*1*dFZtc*tRek-2$2xkT01HRlhPWFZN-mxKNlp$ZEdl$m96$m5vPQ",
          },
        ),
      );
    }
  }, [hasLogin, onNavigate, j, requestLogin, K]);
  const X = g.useCallback(
    (projectId) => {
      j("select", {
        projectId,
      });
      yRef.current = true;
      H({
        projectId,
        attribution: {
          enterFrom: "project_list",
          fromPage: K(),
        },
      });
      onNavigate();
    },
    [onNavigate, j, K],
  );
  const onHeaderAction = g.useCallback(() => {
    j("view_all");
    if (hasLogin) {
      OM(uiConfigurationService, {
        enterFrom: "canvas_view_all",
      });
      onNavigate();
    } else {
      requestLogin(C.HH.ClickCanvasLogin);
    }
  }, [hasLogin, onNavigate, j, requestLogin, uiConfigurationService]);
  const Q = g.useCallback(() => {
    v.refresh(f).catch((e) => {
      V.V.error("[MainFrame2026Sidebar] retry AI Canvas projects failed", e);
    });
  }, [v, f]);
  const Y = g.useCallback(() => {
    v.showMore(f).catch((e) => {
      V.V.error(
        "[MainFrame2026Sidebar] load more AI Canvas projects failed",
        e,
      );
    });
  }, [v, f]);
  const $ = g.useCallback(
    (e, t) =>
      E._(function* () {
        let a;
        let r;
        const n =
          (a =
            (r = v.data.projects.find((t) => t.id === e)) == null
              ? undefined
              : r.isPinned) != null && a;
        j(n ? "unpin" : "pin", {
          projectId: e,
          actionMethod: t,
        });
        const i = v.togglePin(e);
        if (!n) {
          window.requestAnimationFrame(() => {
            var e;
            if ((e = wRef.current) == null) {
              return undefined;
            }
            return e.scrollIntoView({
              block: "start",
            });
          });
        }
        yield i;
      })(),
    [v, j],
  );
  const onRename = g.useCallback(
    (e, t, a) =>
      E._(function* () {
        yield v.renameProject(e, t);
        j("rename", {
          projectId: e,
          actionMethod: a,
        });
      })(),
    [v, j],
  );
  const ee = g.useCallback(
    (e, t) =>
      E._(function* () {
        j("delete", {
          projectId: e,
          actionMethod: t,
        });
        yield v.deleteProject(e);
      })(),
    [v, j],
  );
  const et = hasExpandedFirstPage
    ? visibleCount < projects.length || hasMore
    : projects.length > 6 || hasMore;
  const ea =
    hasLogin && !isLoading && !error && projects.length === 0 && hasMore;
  if (hasLogin && (visibleProjects.length > 0 || ea)) {
    let er = null;
    if (isLoadingMore) {
      er = o.jsx("div", {
        className: _F(em.projectLoadingMore, {
          [em.projectLoadingMoreCompact]: compact,
        }),
        role: "status",
        "aria-hidden": compact,
        "aria-label": b.Ay.t("加载中", {}, "Loading"),
        children: o.jsx(I_1, {
          size: 14,
        }),
      });
    } else if (paginationError) {
      er = o.jsx("button", {
        type: "button",
        className: em.projectRetry,
        tabIndex: compact ? -1 : 0,
        "aria-hidden": compact,
        onClick: Y,
        children: B.f(
          "web_canva_loading_failed_please_try_again",
          "加载失败，请重试",
          "Failed to load. Try again",
        ),
      });
    } else if (et) {
      er = o.jsx(eE, {
        compact,
        onClick: Y,
      });
    }
    t = o.jsxs("div", {
      ref: wRef,
      className: _F(em.workspaceList, {
        [em.workspaceListCompact]: compact,
      }),
      children: [
        visibleProjects.map((project) =>
          o.jsx(
            useEN,
            {
              compact,
              project,
              teamId: f.teamId,
              onDelete: ee,
              onPin: $,
              onRename,
              onSelect: X,
              onRequestExpand: () => onRequestRename(project.id),
              startEditing: !compact && pendingRenameProjectId === project.id,
            },
            project.id,
          ),
        ),
        er,
      ],
    });
  } else {
    t =
      !hasLogin || isLoading || error || projects.length !== 0
        ? hasLogin
          ? isLoading && projects.length === 0
            ? o.jsx(eP, {
                compact,
              })
            : error && projects.length === 0
              ? o.jsx("button", {
                  type: "button",
                  className: em.projectRetry,
                  "data-compact": compact || undefined,
                  "aria-hidden": compact,
                  tabIndex: compact ? -1 : 0,
                  onClick: Q,
                  children: B.f(
                    "web_canva_loading_failed_please_try_again",
                    "加载失败，请重试",
                    "Failed to load. Try again",
                  ),
                })
              : null
          : o.jsx(eA, {
              compact,
              onClick: () => requestLogin(C.HH.ClickCanvasLogin),
            })
        : o.jsx(eW, {
            compact,
            children: b.Ay.t(
              "web_mainframe_canvas_empty_state",
              {},
              "暂无历史画布",
            ),
          });
  }
  return o.jsx(eT, {
    title: b.Ay.t(I, {}, P),
    collapsed,
    compact,
    onToggle: F,
    onCreate,
    createLabel: b.Ay.t("web_mainframe_canvas_new_project", {}, "新建项目"),
    createIcon: o.jsx(z.xZp, {
      size: 16,
      "aria-hidden": "true",
    }),
    headerActionLabel: b.Ay.t(
      "web_mainframe_canvas_projects_view_all",
      {},
      "查看全部",
    ),
    onHeaderAction,
    keepContentMounted: true,
    children: o.jsx(eM, {
      collapsed,
      children: t,
    }),
  });
});
const eL = require("O28");
const ez = require("./module-T90.js");
const eV = require("hUS");
function eD(e) {
  switch (e) {
    case "processing":
      return b.Ay.t("web_new_task_is_generating", {}, "生成中...");
    case "waiting":
      return b.Ay.t("web_agent_awaiting_confirm", {}, "待用户操作");
    case "success":
      return b.Ay.t("web_new_task_generate_finish", {}, "生成完成");
    case "failed":
      return b.Ay.t("web_canva_generation_failed", {}, "生成失败");
    default:
      return undefined;
  }
}
function eO(e) {
  const { status, compact = false } = e;
  const r = eD(status);
  if (status && r) {
    return o.jsx("div", {
      className: _F(em.workspaceTaskStatus, {
        [em.workspaceTaskStatusCompact]: compact,
        [em.workspaceTaskStatusProcessing]: status === "processing",
      }),
      role: "img",
      "aria-label": r,
      children:
        status === "processing"
          ? o.jsx(eV.w, {
              size: 16,
            })
          : o.jsx("span", {
              className: _F(em.workspaceTaskStatusDot, {
                [em.workspaceTaskStatusDotWaiting]: status === "waiting",
                [em.workspaceTaskStatusDotSuccess]: status === "success",
                [em.workspaceTaskStatusDotFailed]: status === "failed",
              }),
              "aria-hidden": "true",
            }),
    });
  }
  return null;
}
const eB = require("./module-uzd.js");
function eZ(e) {
  const { coverImage, imageAlt = "", fallback, onImageError } = e;
  if (coverImage) {
    if (
      !((e) => {
        try {
          return decodeURIComponent(e).includes("音频配色");
        } catch (e) {
          return false;
        }
      })(coverImage)
    ) {
      return o.jsx("img", {
        src: W.m(coverImage, null, {
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
            "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1ZW1*SFJub*FWM%-w$1c1$2$tRlhO$3hqTTAxMlpEST$l$0$6$*5kWl-wNXN%RmhT-jJSWE1Xb*li$$p3WWtNN%0ySXpTbkpqTTBKb1d%SlZkR1JI-%R*a$-wcDFX$mRz-zB4WFRuWmlibEpzWW01%mRX%kl%alJa$0$wd$p*aE5Q%T09",
        }),
        alt: imageAlt,
        crossOrigin: "anonymous",
        onError: onImageError,
      });
    }
    return o.jsx(eB.W, {
      coverUrl: coverImage,
      lazy: true,
    });
  }
  return fallback;
}
function eH(e) {
  const { compact, workspace, taskStatus, coverFailed, onCoverFailed } = e;
  const s = o.jsx("span", {
    className: _F(em.workspaceThumbnail, {
      [em.workspaceThumbnailCompact]: compact,
    }),
    "aria-hidden": "true",
    children: o.jsx(eZ, {
      coverImage: coverFailed ? undefined : workspace.coverImage,
      fallback: o.jsx(z.zsB, {
        size: 14,
      }),
      onImageError: onCoverFailed,
    }),
  });
  return o.jsxs(o.Fragment, {
    children: [
      s,
      o.jsx("span", {
        className: em.workspaceTaskStatusCompactLayer,
        "aria-hidden": "true",
        children: o.jsx(eO, {
          status: taskStatus,
          compact: true,
        }),
      }),
    ],
  });
}
function eJ(e) {
  const { compact, workspace, taskStatus, active } = e;
  const i = ((e) => {
    const {
      compact,
      workspace,
      taskStatus,
      conversationWorkspaceService,
      onSelect,
      onRequestExpand,
      startEditing = false,
    } = e;
    const {
      menuOpen,
      reportMenuAction,
      resetMenu,
      setMenuVisibility,
      toggleMenu,
    } = useEs(useEi(workspace.id), "settings_show", "click");
    const [tooltipVisible, setTooltipVisible] = g.useState(false);
    const [v, setV] = g.useState(false);
    const [j, setJ] = g.useState(workspace.name);
    const [coverFailed, setCoverFailed] = g.useState(false);
    const _Ref = g.useRef(false);
    const CRef = g.useRef(compact);
    CRef.current = compact;
    const isDefaultWorkspace = workspace.id === eL.A;
    const S = eD(taskStatus);
    const accessibleLabel = S
      ? "".concat(workspace.name, ", ").concat(S)
      : workspace.name;
    g.useEffect(() => {
      if (!v) {
        setJ(workspace.name);
      }
    }, [v, workspace.name]);
    g.useEffect(() => {
      setCoverFailed(false);
    }, [workspace.coverImage]);
    g.useLayoutEffect(() => {
      resetMenu();
      setTooltipVisible(false);
      if (compact) {
        setV(false);
        setJ(workspace.name);
      } else if (startEditing) {
        setV(true);
      }
    }, [compact, resetMenu, startEditing, workspace.name]);
    const cancelRename = () => {
      setV(false);
      setJ(workspace.name);
    };
    const finishRename = g.useCallback(() => {
      if (CRef.current) {
        setV(false);
        setJ(workspace.name);
        return;
      }
      if (!_Ref.current) {
        var e = j.trim();
        if (!e || e === workspace.name) {
          setV(false);
          setJ(workspace.name);
          return;
        }
        _Ref.current = true;
        setV(false);
        reportMenuAction("rename");
        conversationWorkspaceService
          .renameWorkspace(workspace.id, e)
          .catch((e) => {
            V.V.error("[MainFrame2026Sidebar] rename workspace failed", e);
          })
          .finally(() => {
            _Ref.current = false;
          });
      }
    }, [
      conversationWorkspaceService,
      j,
      reportMenuAction,
      workspace.id,
      workspace.name,
    ]);
    const handlePin = g.useCallback(() => {
      setMenuVisibility(false);
      reportMenuAction(workspace.isPinned ? "unpin" : "pin");
      conversationWorkspaceService.togglePin(workspace.id).catch((e) => {
        V.V.error("[MainFrame2026Sidebar] toggle workspace pin failed", e);
      });
    }, [
      conversationWorkspaceService,
      reportMenuAction,
      setMenuVisibility,
      workspace.id,
      workspace.isPinned,
    ]);
    const handleDelete = g.useCallback(() => {
      setMenuVisibility(false);
      reportMenuAction("delete");
      conversationWorkspaceService
        .deleteWorkspaceWithConfirmation(workspace.id, (e) => {
          var { name } = e;
          return ((e) => {
            const { workspaceName, onConfirm } = e;
            const { promise, resolve } = Promise.withResolvers();
            var i = ez.d({
              title: b.Ay.t(
                "web_agent_confirm_delete_chat",
                {
                  chat: workspaceName,
                },
                'Delete "'.concat(workspaceName, '"?'),
              ),
              content: b.Ay.t(
                "web_agent_chat_delete_toast",
                {},
                "此操作无法撤回，删除对话后，仍可在「资产」中找回已生成的内容，确认删除么？",
              ),
              confirmText: b.Ay.t("web_agent_delete_chat", {}, "Delete"),
              cancelText: b.Ay.t("web_agent_delete_chat_cancel", {}, "Cancel"),
              onClickConfirm: () => {
                if (onConfirm != null) {
                  onConfirm();
                }
                resolve(true);
                i.close();
              },
              onClickCancel: () => {
                resolve(false);
                i.close();
              },
            });
            return promise;
          })({
            workspaceName: name,
            onConfirm: () => {
              reportMenuAction("delete_confirm");
            },
          });
        })
        .catch((e) => {
          V.V.error("[MainFrame2026Sidebar] delete workspace failed", e);
        });
    }, [
      conversationWorkspaceService,
      reportMenuAction,
      setMenuVisibility,
      workspace.id,
    ]);
    const handleRename = () => {
      setMenuVisibility(false);
      setJ(workspace.name);
      if (compact && onRequestExpand) {
        onRequestExpand();
      } else {
        setV(true);
      }
    };
    const { handleClick, handleDoubleClick } = useEu({
      disabled: v || menuOpen,
      compact,
      onSelect: () => onSelect(workspace.id),
      onRename: () => {
        setTooltipVisible(false);
        setMenuVisibility(false, "click");
        handleRename();
      },
    });
    return {
      menuOpen,
      tooltipVisible,
      editing: v,
      editingValue: j,
      coverFailed,
      isDefaultWorkspace,
      accessibleLabel,
      setEditingValue: setJ,
      cancelRename,
      finishRename,
      handlePin,
      handleDelete,
      handleRename,
      handleClick,
      handleDoubleClick,
      handleContextMenu: (e) => {
        e.preventDefault();
        e.stopPropagation();
        setTooltipVisible(false);
        if (!v) {
          setMenuVisibility(true, "right_click_menu");
        }
      },
      handleKeyDown: (e) => {
        if (
          !v &&
          (e.key === "ContextMenu" || (e.shiftKey && e.key === "F10"))
        ) {
          e.preventDefault();
          setTooltipVisible(false);
          setMenuVisibility(true, "right_click_menu");
          return;
        }
        if (
          !(
            e.target !== e.currentTarget ||
            v ||
            (e.key !== "Enter" && e.key !== " ")
          )
        ) {
          e.preventDefault();
          onSelect(workspace.id);
        }
      },
      handleRenameBlur: (e) => {
        var e_relatedTarget = e.relatedTarget;
        if (
          e_relatedTarget == null
            ? undefined
            : e_relatedTarget.closest("[data-main-frame-sidebar-toggle]")
        ) {
          cancelRename();
        } else {
          finishRename();
        }
      },
      handleMenuVisibleChange: (e) => {
        setMenuVisibility(e);
        if (e) {
          setTooltipVisible(false);
        }
      },
      handleTooltipVisibleChange: (e) => setTooltipVisible(e && !menuOpen),
      handleMoreClick: (e) => {
        e.stopPropagation();
        toggleMenu("click");
      },
      handleCoverFailed: () => setCoverFailed(true),
    };
  })(e);
  const { editing, menuOpen } = i;
  const l = o.jsx(ef, {
    isPinned: workspace.isPinned,
    canDelete: !i.isDefaultWorkspace,
    onPin: i.handlePin,
    onRename: i.handleRename,
    onDelete: i.handleDelete,
  });
  const d =
    !compact && editing
      ? o.jsx(useEg, {
          value: i.editingValue,
          maxLength: 60,
          ariaLabel: b.Ay.t("web_agent_enter_the_chat_name", {}, "请输入名称"),
          placeholder: b.Ay.t(
            "web_agent_enter_the_chat_name",
            {},
            "Name your chat",
          ),
          onChange: i.setEditingValue,
          onBlur: i.handleRenameBlur,
          onCommit: i.finishRename,
          onCancel: i.cancelRename,
        })
      : o.jsx(ey, {
          name: workspace.name,
        });
  const u = o.jsxs("div", {
    className: _F(em.workspaceRow, {
      [em.workspaceRowActive]: active,
      [em.workspaceRowCompact]: compact,
      [em.workspaceRowEditing]: editing,
      [em.workspaceRowMenuOpen]: menuOpen,
    }),
    "data-main-frame-2026-onboarding-project-item": true,
    role: "button",
    tabIndex: editing ? -1 : 0,
    "aria-label": compact ? i.accessibleLabel : undefined,
    "aria-current": active ? "page" : undefined,
    onClick: i.handleClick,
    onDoubleClick: i.handleDoubleClick,
    onContextMenu: i.handleContextMenu,
    onKeyDown: i.handleKeyDown,
    children: [
      o.jsx(eH, {
        compact,
        workspace,
        taskStatus,
        coverFailed: i.coverFailed,
        onCoverFailed: i.handleCoverFailed,
      }),
      editing ? d : null,
      editing
        ? null
        : o.jsxs("div", {
            className: _F(em.workspaceDetails, em.workspaceDetailsActionable, {
              [em.workspaceDetailsTaskStatus]: !!taskStatus,
              [em.workspaceDetailsCompact]: compact,
            }),
            "aria-hidden": compact,
            children: [
              d,
              o.jsx(eO, {
                status: taskStatus,
              }),
              !taskStatus && workspace.isPinned
                ? o.jsx("span", {
                    className: em.workspacePin,
                    "aria-hidden": "true",
                    children: o.jsx(z.jsI, {
                      size: 14,
                      color: "currentColor",
                    }),
                  })
                : null,
              o.jsx("button", {
                type: "button",
                className: em.workspaceMore,
                tabIndex: compact ? -1 : 0,
                "aria-label": b.Ay.t(
                  "web_my_feed_more_options",
                  {},
                  "More actions",
                ),
                onClick: i.handleMoreClick,
                children: o.jsx(z.xcf, {
                  size: 16,
                }),
              }),
            ],
          }),
    ],
  });
  const p = o.jsx(ej, {
    content: l,
    open: menuOpen,
    position: "rt",
    onVisibleChange: i.handleMenuVisibleChange,
    children: u,
  });
  if (compact) {
    return o.jsx(el.A, {
      content: workspace.name,
      disabled: menuOpen,
      position: "right",
      popupVisible: i.tooltipVisible && !menuOpen,
      popupHoverStay: true,
      trigger: ["hover", "focus"],
      triggerProps: ek,
      onVisibleChange: i.handleTooltipVisibleChange,
      children: p,
    });
  }
  return o.jsx(ex, {
    name: workspace.name,
    disabled: editing || menuOpen,
    children: p,
  });
}
const eK = {
  pageSize: 20,
  preserveWorkspacesOnError: true,
};
const eq = f.PA(function (e) {
  let t;
  let a;
  const {
    RowComponent = eJ,
    accountKey,
    compact,
    collapsed,
    hasLogin,
    isGenerateRoute,
    onToggle,
    onNavigate,
    onRequestExpand,
    conversationWorkspaceService,
    generationTaskIndicatorService,
    requestLogin,
    uiConfigurationService,
  } = e;
  const j = useEi();
  const [y, setY] = g.useState(6);
  const [_, set_] = g.useState(false);
  const [S, setS] = g.useState();
  const {
    sortedWorkspaces,
    selectedWorkspaceId,
    isNewConversationMode,
    isLoading,
    isLoadingMore,
    hasMore,
    error,
    paginationError,
  } = conversationWorkspaceService.data;
  const { multiWorkspaceEnabled } = conversationWorkspaceService;
  g.useEffect(() => {
    setY(6);
    set_(false);
    conversationWorkspaceService.syncAccountSession(
      hasLogin ? accountKey : undefined,
    );
    if (hasLogin && multiWorkspaceEnabled) {
      conversationWorkspaceService.initWorkspaces(eK).catch((e) => {
        V.V.error("[MainFrame2026Sidebar] initialize workspaces failed", e);
      });
    }
  }, [
    accountKey,
    conversationWorkspaceService,
    hasLogin,
    multiWorkspaceEnabled,
  ]);
  g.useEffect(() => {
    if (!(compact || S === undefined)) {
      setS(undefined);
    }
  }, [compact, S]);
  const Z = g.useCallback(() => {
    j("create_new");
    uiConfigurationService.activateSideMenuItem(w.Du.AIGeneratedRecord);
    conversationWorkspaceService.enterNewConversation();
    onNavigate();
  }, [conversationWorkspaceService, onNavigate, j, uiConfigurationService]);
  const H = g.useCallback(
    (workspaceId) => {
      j("select", {
        workspaceId,
      });
      uiConfigurationService.activateSideMenuItem(w.Du.AIGeneratedRecord);
      conversationWorkspaceService.switchWorkspace(workspaceId);
      onNavigate();
    },
    [conversationWorkspaceService, onNavigate, j, uiConfigurationService],
  );
  const J = g.useCallback(() => {
    j(collapsed ? "show" : "close");
    if (!collapsed) {
      setY(6);
      set_(false);
    }
    onToggle();
  }, [collapsed, onToggle, j]);
  const K = g.useCallback(
    () =>
      E._(function* () {
        if (!isLoadingMore) {
          if (!_) {
            set_(true);
            setY(Math.min(20, sortedWorkspaces.length));
            return;
          }
          const e = y + 20;
          if (
            !(
              e > sortedWorkspaces.length &&
              hasMore &&
              (yield conversationWorkspaceService.loadMore(),
              conversationWorkspaceService.data.paginationError)
            )
          ) {
            setY(
              Math.min(
                e,
                conversationWorkspaceService.data.sortedWorkspaces.length,
              ),
            );
          }
        }
      })(),
    [
      conversationWorkspaceService,
      _,
      hasMore,
      isLoadingMore,
      sortedWorkspaces.length,
      y,
    ],
  );
  const q = g.useCallback(() => {
    j("show_more");
    K();
  }, [K, j]);
  const X = sortedWorkspaces.slice(0, y);
  const status = collapsed
    ? generationTaskIndicatorService.getTaskStatusByWorkspaces(
        sortedWorkspaces.map((e) => {
          var { id } = e;
          return id;
        }),
      )
    : undefined;
  const Q = _
    ? y < sortedWorkspaces.length || hasMore
    : sortedWorkspaces.length > 6 || hasMore;
  if (hasLogin && multiWorkspaceEnabled && X.length > 0) {
    let Y = null;
    if (isLoadingMore) {
      Y = o.jsx("div", {
        className: _F(em.projectLoadingMore, {
          [em.projectLoadingMoreCompact]: compact,
        }),
        role: "status",
        "aria-hidden": compact,
        "aria-label": b.Ay.t("加载中", {}, "Loading"),
        children: o.jsx(I_1, {
          size: 14,
        }),
      });
    } else if (paginationError) {
      Y = o.jsx("button", {
        type: "button",
        className: em.projectRetry,
        tabIndex: compact ? -1 : 0,
        "aria-hidden": compact,
        onClick: () => {
          K();
        },
        children: b.Ay.t(
          "web_canva_loading_failed_please_try_again",
          {},
          "加载失败，请重试",
        ),
      });
    } else if (Q) {
      Y = o.jsx(eE, {
        compact,
        onClick: q,
      });
    }
    t = o.jsxs("div", {
      className: _F(em.workspaceList, {
        [em.workspaceListCompact]: compact,
      }),
      children: [
        X.map((workspace) =>
          o.jsx(
            RowComponent,
            {
              compact,
              workspace,
              active:
                isGenerateRoute &&
                !isNewConversationMode &&
                workspace.id === selectedWorkspaceId,
              conversationWorkspaceService,
              taskStatus:
                generationTaskIndicatorService.getTaskStatusByWorkspace(
                  workspace.id,
                ),
              onSelect: H,
              onRequestExpand: () => {
                setS(workspace.id);
                onRequestExpand();
              },
              startEditing: !compact && S === workspace.id,
            },
            workspace.id,
          ),
        ),
        Y,
      ],
    });
  } else {
    t = hasLogin
      ? multiWorkspaceEnabled
        ? isLoading && sortedWorkspaces.length === 0
          ? o.jsx(eP, {
              compact,
            })
          : error && sortedWorkspaces.length === 0
            ? o.jsx("button", {
                type: "button",
                className: em.projectRetry,
                "data-compact": compact || undefined,
                "aria-hidden": compact,
                tabIndex: compact ? -1 : 0,
                onClick: () => {
                  conversationWorkspaceService.initWorkspaces(eK).catch((e) => {
                    V.V.error(
                      "[MainFrame2026Sidebar] retry workspaces failed",
                      e,
                    );
                  });
                },
                children: b.Ay.t(
                  "web_canva_loading_failed_please_try_again",
                  {},
                  "加载失败，请重试",
                ),
              })
            : sortedWorkspaces.length === 0
              ? o.jsx(eW, {
                  compact,
                  children: b.Ay.t(
                    "web_mainframe_chat_empty_state",
                    {},
                    "暂无历史对话",
                  ),
                })
              : null
        : o.jsx(eW, {
            compact,
            children: b.Ay.t(
              "web_mainframe_chat_empty_state",
              {},
              "暂无历史对话",
            ),
          })
      : o.jsx(eA, {
          compact,
          onClick: () => requestLogin(C.HH.ClickChatLogin),
        });
  }
  if (hasLogin) {
    if (multiWorkspaceEnabled) {
      a = Z;
    }
  } else {
    a = () => requestLogin(C.HH.ClickChatCreate);
  }
  return o.jsx(eT, {
    className: em.chatProjectSection,
    title: b.Ay.t(T, {}, M),
    collapsed,
    compact,
    onboardingAnchor: true,
    onToggle: J,
    onCreate: a,
    createLabel: b.Ay.t("web_mainframe_new_chat", {}, "新对话"),
    status:
      collapsed && status
        ? o.jsx(eO, {
            status,
          })
        : undefined,
    keepContentMounted: true,
    children: o.jsx(eM, {
      collapsed,
      children: t,
    }),
  });
});
const eX = {
  enterprise: {
    routeId: w.Du.EnterpriseLanding,
    activeRouteIds: [w.Du.EnterpriseLanding],
  },
  "short-drama": {
    routeId: w.Du.ShortDrama,
    activeRouteIds: [w.Du.ShortDrama],
  },
  aiImage: {
    routeId: w.Du.AIImage,
    activeRouteIds: [w.Du.AIImage],
  },
  aiVideo: {
    routeId: w.Du.AIVideo,
    activeRouteIds: [w.Du.AIVideo],
  },
  aiAgent: {
    routeId: w.Du.AIAgent,
    activeRouteIds: [w.Du.AIAgent],
  },
  canvas: {
    routeId: w.Du.CanvasHome,
    activeRouteIds: [w.Du.CanvasHome],
  },
  create: {
    routeId: w.Du.Home,
    activeRouteIds: [w.Du.Home],
  },
  explore: {
    routeId: w.Du.Explore,
    activeRouteIds: [w.Du.Explore],
  },
  allTools: {
    routeId: w.Du.Tools,
    activeRouteIds: [w.Du.Tools],
  },
  assets: {
    routeId: w.Du.Asset,
    requiresLogin: true,
    loginSource: C.HH.ClickAssets,
    activeRouteIds: [w.Du.Asset, w.Du.CanvasAssets],
  },
  elements: {
    routeId: w.Du.Elements,
    requiresLogin: true,
    loginSource: C.HH.ClickElements,
    activeRouteIds: [w.Du.Elements],
  },
};
const eU = require("./module-G4_2.js");
const eQ = require("./module-sd_2.js");
const eY = require("./module-w0_2.js");
const e$ = require("Mer");
function eG(e) {
  const { active = false, className, size = 20 } = e;
  return o.jsx("svg", {
    className,
    width: size,
    height: size,
    viewBox: "0 0 80 80",
    fill: "none",
    "aria-hidden": "true",
    children: active
      ? o.jsxs(o.Fragment, {
          children: [
            o.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10 56.666667 L10 33.349 L34.615333 33.349 L42.437667 33.333333 L66.668667 33.347 C68.508667 33.348 70 34.840333 70 36.680333 L70 56.666667 C70 64.030333 64.030333 70 56.666667 70 L23.333333 70 C15.969533 70 10 64.030333 10 56.666667 L10 56.666667 Z M37.336 42.669333 C35.971333 42.741 34.724333 43.463333 33.98 44.609333 C33.2916 45.669667 33.2898 47.446333 33.2898 50.999333 C33.2898 54.552333 33.291833 56.328667 33.98 57.389333 C34.724333 58.536 35.971 59.257667 37.336 59.329333 C38.598333 59.395333 40.138333 58.508 43.215 56.731667 C46.292333 54.955 47.832667 54.065667 48.407 52.939333 C49.027667 51.721667 49.027333 50.280333 48.407 49.062667 C47.832667 47.936 46.292333 47.047 43.215 45.270333 C40.137667 43.493667 38.598667 42.603333 37.336 42.669333 L37.336 42.669333 Z",
              fill: "currentColor",
            }),
            o.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M53.734 9.1506 C61.026333 8.125767 67.768333 13.2064 68.793333 20.498533 L69.257333 23.799433 C69.513333 25.622467 68.243333 27.308033 66.420333 27.564233 L10.305033 35.450667 L9.3772 28.848933 C8.352367 21.5568 13.433 14.814533 20.725133 13.7897 L53.734 9.1506 L53.734 9.1506 Z M21.652967 20.3915 C18.0069 20.9039 15.466567 24.275033 15.979 27.9211 L25.881667 26.529367 L28.254733 19.463667 L21.652967 20.3915 L21.652967 20.3915 Z M48.988 23.282 L62.191667 21.426367 C61.679 17.7803 58.308 15.239967 54.662 15.7524 L51.361 16.2163 L48.988 23.282 L48.988 23.282 Z M32.483467 25.601533 L42.386 24.2098 L44.759333 17.144133 L34.856667 18.535833 L32.483467 25.601533 L32.483467 25.601533 Z",
              transform: "translate(-0.305033 0)",
              fill: "currentColor",
            }),
          ],
        })
      : o.jsx("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M53.732667 9.1491 C61.024667 8.124267 67.769667 13.207867 68.794667 20.5 C68.794667 20.5 69.256667 23.8008 69.256667 23.8008 C69.512 25.622867 68.243333 27.307067 66.421333 27.5638 C66.421333 27.5638 25.2659 33.348333 25.2659 33.348333 C25.2659 33.348333 34.615 33.348333 34.615 33.348333 C34.615 33.348333 42.437 33.332033 42.437 33.332033 C42.437 33.332033 66.669 33.345 66.669 33.345 C68.507667 33.347 69.998 34.839667 69.999 36.678333 C69.999 36.678333 69.999 56.665333 69.999 56.665333 C69.999 64.029 64.029333 69.998667 56.665667 69.998667 C56.665667 69.998667 23.3323 69.998667 23.3323 69.998667 C16.199333 69.998 10.372667 64.396333 10.015233 57.352333 C10.015233 57.352333 9.998967 56.665333 9.998967 56.665333 C9.998967 56.665333 9.998967 33.348333 9.998967 33.348333 C9.998967 33.348333 10.008733 33.348333 10.008733 33.348333 C10.008733 33.348333 9.377233 28.849633 9.377233 28.849633 C8.3524 21.557633 13.433 14.8161 20.724867 13.791033 C20.724867 13.791033 53.732667 9.1491 53.732667 9.1491 C53.732667 9.1491 53.732667 9.1491 53.732667 9.1491 Z M34.628 40.015 C34.628 40.015 16.665633 40.015 16.665633 40.015 C16.665633 40.015 16.665633 56.665333 16.665633 56.665333 C16.665633 60.347 19.6509 63.331333 23.3323 63.332 C23.3323 63.332 56.665667 63.332 56.665667 63.332 C60.347667 63.332 63.332333 60.347333 63.332333 56.665333 C63.332333 56.665333 63.332333 40.008333 63.332333 40.008333 C63.332333 40.008333 42.443667 39.998667 42.443667 39.998667 C42.443667 39.998667 34.628 40.015 34.628 40.015 C34.628 40.015 34.628 40.015 34.628 40.015 Z M21.6526 20.3926 C18.006833 20.905267 15.4664 24.276 15.9788 27.921867 C15.9788 27.921867 25.881133 26.528667 25.881133 26.528667 C25.881133 26.528667 28.254167 19.464867 28.254167 19.464867 C28.254167 19.464867 21.6526 20.3926 21.6526 20.3926 C21.6526 20.3926 21.6526 20.3926 21.6526 20.3926 Z M34.855667 18.537133 C34.855667 18.537133 32.4827 25.600933 32.4827 25.600933 C32.4827 25.600933 42.385 24.210933 42.385 24.210933 C42.385 24.210933 44.758 17.1439 44.758 17.1439 C44.758 17.1439 34.855667 18.537133 34.855667 18.537133 C34.855667 18.537133 34.855667 18.537133 34.855667 18.537133 Z M54.660333 15.7539 C54.660333 15.7539 51.359667 16.216167 51.359667 16.216167 C51.359667 16.216167 48.986667 23.2832 48.986667 23.2832 C48.986667 23.2832 62.193 21.427733 62.193 21.427733 C61.680667 17.781667 58.306333 15.2415 54.660333 15.7539 C54.660333 15.7539 54.660333 15.7539 54.660333 15.7539 Z",
          fill: "currentColor",
        }),
  });
}
const e0 = {
  create: z.aIh,
  "short-drama": eG,
  enterprise: e$.p,
  explore: z.JNH,
  allTools: z.ThK,
  assets: z.g6N,
  elements: z.glr,
  aiImage: z.iHo,
  aiVideo: z._MP,
  aiAgent: z.j$8,
  canvas: z.Ej4,
};
const e1 = "root-JKp3nu";
const e3 = "static-icon-XCkwPN";
const e6 = {
  "short-drama": () =>
    require
      .e("5zw")
      .then(require.t.bind(require, "fnZ", 19))
      .then((e) => {
        var { default: _default } = e;
        return _default;
      }),
  create: () =>
    require
      .e("wb5")
      .then(require.t.bind(require, "OX4", 19))
      .then((e) => {
        var { default: _default } = e;
        return _default;
      }),
  explore: () =>
    require
      .e("pc")
      .then(require.t.bind(require, "DbNe", 19))
      .then((e) => {
        var { default: _default } = e;
        return _default;
      }),
  assets: () =>
    require
      .e("qpb")
      .then(require.t.bind(require, "UIf", 19))
      .then((e) => {
        var { default: _default } = e;
        return _default;
      }),
  elements: () =>
    require
      .e("r96")
      .then(require.t.bind(require, "x0R", 19))
      .then((e) => {
        var { default: _default } = e;
        return _default;
      }),
};
const e2 = {
  enterprise: {
    ActiveIcon: e0.enterprise,
  },
  create: {
    ActiveIcon: z.kmM,
  },
  explore: {
    ActiveIcon: z.ku5,
  },
  allTools: {
    ActiveIcon: e0.allTools,
  },
  assets: {
    ActiveIcon: z.Ulv,
  },
  elements: {
    ActiveIcon: z._Qc,
  },
  aiImage: {
    ActiveIcon: e0.aiImage,
  },
  aiVideo: {
    ActiveIcon: e0.aiVideo,
  },
  aiAgent: {
    ActiveIcon: e0.aiAgent,
  },
  canvas: {
    ActiveIcon: e0.canvas,
  },
};
function useE4(e) {
  let t;
  const { active = false, name } = e;
  const sRef = g.useRef(active);
  const [c, setC] = g.useState("terminal");
  const [d, setD] = g.useState();
  const p = name === "short-drama" ? undefined : e2[name].ActiveIcon;
  const m = e0[name];
  const h = (d == null ? undefined : d.name) === name ? d : undefined;
  const v = h == null ? undefined : h.Component;
  const f = g.useMemo(() => {
    if (h) {
      var e;
      var t;
      var initialSegment =
        name === "assets" ? [16, h.animationData.op] : undefined;
      e = h.animationData;
      t = {
        animationData: e,
        loop: false,
        renderer: "svg",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      };
      return {
        active: n._(
          i._(n._({}, t), {
            autoplay: true,
          }),
          initialSegment
            ? {
                initialSegment,
              }
            : {},
        ),
        terminal: i._(n._({}, t), {
          autoplay: false,
          initialSegment: [Math.max(e.ip, e.op - 1), e.op],
        }),
      };
    }
  }, [h, name]);
  eU.E(() => {
    var e = active && !sRef.current;
    sRef.current = active;
    if (active) {
      if (e) {
        setC(!e6[name] || eY.O() ? "terminal" : "animation");
      }
    } else {
      setC("terminal");
    }
  }, [active, name]);
  g.useEffect(() => {
    var e = e6[name];
    if (active && c === "animation" && !h && e) {
      var t = false;
      Promise.all([eQ.T(), e()])
        .then((e) => {
          var [a, animationData] = e;
          if (!t) {
            if (!a) {
              return void setC("fallback");
            }
            setD({
              Component: a,
              animationData,
              name,
            });
          }
        })
        .catch(() => {
          if (!t) {
            setC("fallback");
          }
        });
      return () => {
        t = true;
      };
    }
  }, [active, c, h, name]);
  const callback = g.useCallback(() => {
    setC("fallback");
  }, []);
  const lottieEventListeners = g.useMemo(
    () => [
      {
        name: "error",
        callback,
      },
      {
        name: "data_failed",
        callback,
      },
    ],
    [callback],
  );
  if (active) {
    if (c !== "fallback" && v && f) {
      const y = c === "animation";
      t = o.jsx(
        v,
        {
          className: "animation-C1RR7s",
          config: y ? f.active : f.terminal,
          lottieEventListeners,
          playingState: y ? "playing" : "paused",
        },
        "".concat(name, "-").concat(c),
      );
    } else {
      t = p
        ? o.jsx(p, {
            className: e3,
            size: 20,
          })
        : o.jsx(eG, {
            active: true,
            className: e3,
            size: 20,
          });
    }
  } else {
    t = o.jsx(m, {
      className: e3,
      size: 20,
    });
  }
  return o.jsx("span", {
    className: e1,
    "data-animating": (c === "animation" && !!e6[name]) || undefined,
    "data-icon-name": name,
    "aria-hidden": "true",
    children: t,
  });
}
function e5(e) {
  const { compact = false } = e;
  const a = h._(e, ["compact"]);
  const r = ((e) => {
    const {
      items = A,
      shortDramaEnabled = false,
      compact = false,
      currentRouteId,
      hasLogin = true,
      onNavigate,
      requestLogin,
      uiConfigurationService,
    } = e;
    const [l, setL] = g.useState();
    g.useEffect(() => {
      setL(undefined);
    }, [compact, currentRouteId]);
    g.useEffect(() => {
      if (l) {
        var e = () => setL(undefined);
        document.addEventListener("pointerdown", e, true);
        window.addEventListener("blur", e);
        return () => {
          document.removeEventListener("pointerdown", e, true);
          window.removeEventListener("blur", e);
        };
      }
    }, [l]);
    return items
      .filter((e) => e.id !== "short-drama" || shortDramaEnabled)
      .filter((e) => e.id !== "enterprise")
      .map((item) => {
        var t = eX[item.id];
        var label = item.labelKey
          ? b.Ay.t(
              item.labelKey,
              item.id === "short-drama" || item.id === "enterprise"
                ? {
                    thirdParamFallback: true,
                    fallbackText: item.fallback,
                  }
                : {},
              item.fallback,
            )
          : item.fallback;
        var active = t.activeRouteIds.includes(currentRouteId);
        return {
          item,
          label,
          active,
          buttonProps: {
            type: "button",
            "aria-current": active ? "page" : undefined,
            "aria-disabled": false,
            "aria-label": compact ? label : undefined,
            onMouseEnter: () => {
              if (!t.requiresLogin || hasLogin) {
                uiConfigurationService.hoverSideMenuItem(t.routeId);
              }
            },
            onClick: () => {
              setL(undefined);
              if (t.requiresLogin && !hasLogin) {
                var e;
                requestLogin(
                  (e = t.loginSource) != null ? e : C.HH.ClickSide,
                  () => {
                    uiConfigurationService.activateSideMenuItem(t.routeId);
                    if (onNavigate != null) {
                      onNavigate();
                    }
                  },
                );
                return;
              }
              uiConfigurationService.activateSideMenuItem(t.routeId);
              if (onNavigate != null) {
                onNavigate();
              }
            },
          },
          tooltipVisible: compact && l === item.id,
          onTooltipVisibleChange: (t) => setL(t ? item.id : undefined),
        };
      });
  })(
    i._(n._({}, a), {
      compact,
    }),
  );
  return o.jsx("nav", {
    className: _F(em.navigation, {
      [em.navigationCompact]: compact,
    }),
    children: r.map((e) => {
      var {
        item,
        label,
        active,
        buttonProps,
        tooltipVisible,
        onTooltipVisibleChange,
      } = e;
      return o.jsxs(
        g.Fragment,
        {
          children: [
            item.id === "short-drama" &&
              o.jsx("div", {
                className: em.navigationDivider,
                "aria-hidden": "true",
              }),
            o.jsx(el.A, {
              content: label,
              position: "right",
              trigger: ["hover", "focus"],
              triggerProps: ew,
              disabled: !compact,
              popupVisible: tooltipVisible,
              onVisibleChange: onTooltipVisibleChange,
              children: o.jsxs(
                "button",
                i._(n._({}, buttonProps), {
                  className: _F(em.navigationItem, {
                    [em.navigationItemCompact]: compact,
                  }),
                  "data-active": active || undefined,
                  "data-navigation-id": item.id,
                  "data-main-frame-2026-onboarding-short-drama":
                    item.id !== "short-drama" || compact ? undefined : "true",
                  children: [
                    o.jsx(useE4, {
                      active,
                      name: item.id,
                    }),
                    o.jsxs("span", {
                      className: _F(em.navigationItemLabel, {
                        [em.navigationItemLabelWithBadge]:
                          item.id === "short-drama",
                      }),
                      "aria-hidden": compact,
                      children: [
                        label,
                        item.id === "short-drama" &&
                          o.jsx("span", {
                            className: em.navigationItemBadge,
                            "aria-hidden": "true",
                            children: "New",
                          }),
                      ],
                    }),
                    item.id === "short-drama" &&
                      o.jsx("span", {
                        className: _F(
                          em.navigationItemBadge,
                          em.navigationItemBadgeCompact,
                        ),
                        "aria-hidden": "true",
                        children: "New",
                      }),
                    item.id === "enterprise" &&
                      !compact &&
                      o.jsx("span", {
                        className: _F(
                          em.canvasProjectAction,
                          em.navigationItemOpenAction,
                        ),
                        "aria-hidden": "true",
                        children: o.jsx(z.Pl9, {
                          className: em.canvasProjectOpenIcon,
                          size: 16,
                          "aria-hidden": "true",
                        }),
                      }),
                  ],
                }),
              ),
            }),
          ],
        },
        item.id,
      );
    }),
  });
}
const e7 = require("./module-T9J.js");
const e9 = require("./module-Oln.js");
const e8 = require("./module-of9.js");
function te(e) {
  let t;
  let a;
  const {
    className,
    config,
    fallbackIcon,
    label,
    menuWrapperPlacement,
    uiConfigurationService,
    onFallbackClick,
  } = e;
  if (!config) {
    if (fallbackIcon) {
      return o.jsx("button", {
        type: "button",
        className,
        "aria-label": label,
        onClick: onFallbackClick,
        children: fallbackIcon,
      });
    }
    return null;
  }
  if (config.type === "custom") {
    let u = fallbackIcon;
    if (typeof config.content === "function") {
      u = menuWrapperPlacement
        ? config.content({
            menuWrapperPlacement,
          })
        : config.content();
    }
    if (!u) {
      return null;
    }
    const p = o.jsx("div", {
      className,
      "data-side-menu-config-id": config.id,
      onMouseEnter: () => uiConfigurationService.hoverSideMenuItem(config.id),
      onClick: () => uiConfigurationService.activateSideMenuItem(config.id),
      children: u,
    });
    const { MenuWrapper: MenuWrapper_1 } = config;
    if (MenuWrapper_1) {
      return o.jsx(MenuWrapper_1, {
        menuWrapperPlacement,
        children: p,
      });
    }
    return p;
  }
  const h = o.jsx("button", {
    type: "button",
    className,
    "aria-label": label,
    onMouseEnter: () => uiConfigurationService.hoverSideMenuItem(config.id),
    onClick: () => uiConfigurationService.activateSideMenuItem(config.id),
    children:
      (t =
        (a = config.icon) == null
          ? undefined
          : a.call(config, {
              selected: false,
              isHover: false,
            })) != null
        ? t
        : fallbackIcon,
  });
  const { MenuWrapper } = config;
  if (MenuWrapper) {
    return o.jsx(MenuWrapper, {
      menuWrapperPlacement,
      children: h,
    });
  }
  return h;
}
const tt = "top-actions-ER9nTs";
const ta = "top-action-icon-0Dt374";
const tr = "top-actions-divider-bPowzn";
function tn(e) {
  const { configs, onRequestLogin, uiConfigurationService } = e;
  const s = (e) => configs.find((t) => t.id === e);
  const c = s("SiderMenuSetting");
  const config = c
    ? i._(n._({}, c), {
        icon: () =>
          o.jsx(z.k3W, {
            size: 16,
          }),
      })
    : undefined;
  return o.jsxs("div", {
    className: tt,
    "data-main-frame-2026-top-actions": true,
    children: [
      o.jsx(te, {
        className: ta,
        config,
        fallbackIcon: o.jsx(z.k3W, {
          size: 16,
        }),
        label: b.Ay.t("web_home_nav_bar_more_settings", {}, "Settings"),
        menuWrapperPlacement: "top-actions",
        uiConfigurationService,
      }),
      o.jsx("div", {
        className: tr,
        "aria-hidden": "true",
      }),
      o.jsx("div", {
        className: "login-action-shell-Om2FAO",
        "data-main-frame-2026-guest-top-actions-ready": true,
        children: o.jsx(te, {
          className: "login-action-ViPyZZ",
          config: s("SiderMenuLogin"),
          fallbackIcon: o.jsx("span", {
            children: b.Ay.t("web_new_log_web_in", {}, "Sign in"),
          }),
          label: b.Ay.t("web_new_log_web_in", {}, "Sign in"),
          menuWrapperPlacement: "top-actions",
          uiConfigurationService,
          onFallbackClick: onRequestLogin,
        }),
      }),
    ],
  });
}
var ti = require("./module-vy_2.js");
function to(e) {
  const {
    actions,
    extensionSlot,
    hostRef,
    hidden = false,
    replaceBase = false,
    rightInset = 0,
    positionInset,
  } = e;
  const style = n._(
    {
      [ti.CV]: "".concat(rightInset, "px"),
    },
    positionInset === undefined
      ? {}
      : {
          top: positionInset,
          right: positionInset,
        },
  );
  return o.jsxs("div", {
    ref: hostRef,
    hidden,
    className: _F("top-actions-host-czkLeE", {
      "top-actions-host-replace-base-I7jqjd": replaceBase,
    }),
    style,
    children: [extensionSlot, actions],
  });
}
function useTs(e) {
  const { active, routeId, topActionsFeatureService } = e;
  const nRef = g.useRef(null);
  g.useLayoutEffect(() => {
    var nRef_current = nRef.current;
    if (nRef_current) {
      var t = topActionsFeatureService.attachHost(routeId, nRef_current);
      return () => t.dispose();
    }
  }, [routeId, topActionsFeatureService]);
  return o.jsx("div", {
    ref: nRef,
    className: "top-actions-extension-route-host-z76IKv",
    "data-main-frame-2026-top-actions-route-host": routeId,
    hidden: !active,
  });
}
const tc = new WeakMap();
function tl(e, t) {
  return {
    priority: e.style.getPropertyPriority(t),
    value: e.style.getPropertyValue(t),
  };
}
function td(e, t, a) {
  if (a.value) {
    e.style.setProperty(t, a.value, a.priority);
  } else {
    e.style.removeProperty(t);
  }
}
function tu(e, t, a) {
  if (e.style.getPropertyValue(t) !== a) {
    e.style.setProperty(t, a);
  }
}
const tp = f.PA(function (e) {
  let t;
  let a;
  let r;
  const {
    configs,
    hasLogin,
    isTeamMode,
    onRequestLogin,
    topActionsFeatureService,
    uiConfigurationService,
    positionInset,
  } = e;
  const { currentRoutePath } = uiConfigurationService;
  const { search } = y.zy();
  const h =
    (a = uiConfigurationService.getRouteConfigByPath(
      currentRoutePath != null ? currentRoutePath : "",
    )) == null
      ? undefined
      : a.id;
  const activeRouteId =
    (t =
      (r = uiConfigurationService.currentKeepAliveData) == null
        ? undefined
        : r.routeId) != null
      ? t
      : h;
  const hidden = activeRouteId === w.Du.Tools;
  const [j, setJ] = g.useState(() => {
    if (activeRouteId) {
      return [activeRouteId];
    }
    return [];
  });
  const hostRef = g.useRef(null);
  const CRef = g.useRef(null);
  const [tipHorizontalOffset, S] = e8.BJ({
    anchorRef: CRef,
    enabled: hasLogin,
  });
  const R = topActionsFeatureService.hasActiveDetailSurface();
  const N = R ? undefined : positionInset;
  const rightInset =
    !R && activeRouteId
      ? topActionsFeatureService.getRightInset(activeRouteId)
      : 0;
  const T =
    hasLogin &&
    !R &&
    !!(
      activeRouteId &&
      topActionsFeatureService.hasRegisteredActions(activeRouteId)
    );
  const replaceBase =
    hasLogin &&
    !R &&
    !!(
      activeRouteId &&
      topActionsFeatureService.shouldReplaceBaseActions(activeRouteId)
    );
  const I = (e) => configs.find((t) => t.id === e);
  g.useLayoutEffect(() => {
    if (activeRouteId) {
      setJ((e) => {
        if (e.includes(activeRouteId)) {
          return e;
        }
        return [...e, activeRouteId];
      });
    }
  }, [activeRouteId]);
  ((e) => {
    const {
      activeRouteId,
      enabled = true,
      hostRef,
      rightInset,
      topOffset = ti.KZ,
      uiConfigurationService,
    } = e;
    const sRef = g.useRef(rightInset);
    g.useLayoutEffect(() => {
      var e;
      var t;
      var c = sRef.current !== rightInset;
      sRef.current = rightInset;
      if (enabled) {
        var l = hostRef.current;
        var d = ((e) => {
          let t;
          const root =
            (t = e.getRenderRootWrapper) == null ? undefined : t.call(e);
          if (
            !(typeof HTMLElement === "undefined") &&
            root instanceof HTMLElement
          ) {
            const { firstElementChild } = root;
            if (firstElementChild instanceof HTMLElement) {
              return {
                content: firstElementChild,
                root,
              };
            }
          }
        })(uiConfigurationService);
        if (l && d) {
          var u;
          var p;
          var m;
          var h;
          var v;
          var { content, root } = d;
          var b = root.ownerDocument.body;
          var j = root.parentElement;
          var y = tl(l, ti.QB);
          var w = tl(content, ti.Hc);
          var k = tl(content, ti.CL);
          u = ti.CV;
          p = "".concat(rightInset, "px");
          if (!(m = tc.get(b))) {
            m = new Map();
            tc.set(b, m);
          }
          if (!(h = m.get(u))) {
            h = {
              appliedValue: "",
              initialSnapshot: tl(b, u),
              values: new Map(),
            };
            m.set(u, h);
          }
          v = Symbol(u);
          h.values.set(v, p);
          h.appliedValue = p;
          tu(b, u, p);
          var _ = () => {
            h.values.delete(v);
            var e = b.style.getPropertyValue(u);
            if (h.values.size > 0) {
              var t = Array.from(h.values.values()).at(-1);
              if (t !== undefined && e === h.appliedValue) {
                h.appliedValue = t;
                tu(b, u, t);
              }
              return;
            }
            if (e === h.appliedValue) {
              td(b, u, h.initialSnapshot);
            }
            m.delete(u);
            if (m.size === 0) {
              tc.delete(b);
            }
          };
          var C = false;
          var x = () => {
            if (!C) {
              var e;
              var t;
              var a;
              var r = Math.max(
                0,
                ((e = j == null ? undefined : j.scrollWidth) != null ? e : 0) -
                  ((t = j == null ? undefined : j.clientWidth) != null ? t : 0),
              );
              var n = Math.min(
                r,
                Math.max(
                  0,
                  (a = j == null ? undefined : j.scrollLeft) != null ? a : 0,
                ),
              );
              tu(l, ti.QB, `${r - n}px`);
              var o = content.getBoundingClientRect();
              var s = l.getBoundingClientRect();
              var c = o.right - s.left + 8;
              var d = Number.isFinite(c) ? Math.max(0, c) : 0;
              tu(content, ti.Hc, "".concat(topOffset, "px"));
              tu(content, ti.CL, "".concat(d, "px"));
            }
          };
          var S = () => {
            t = undefined;
            if (
              e !== undefined &&
              typeof window.cancelAnimationFrame === "function"
            ) {
              window.cancelAnimationFrame(e);
            }
            e = undefined;
          };
          var R = (a) => {
            e = undefined;
            if (t == null) {
              t = a;
            }
            x();
            if (
              a - t < 1000 &&
              typeof window.requestAnimationFrame === "function"
            ) {
              e = window.requestAnimationFrame(R);
            }
          };
          var N = (e) => {
            if (e.target === l && e.propertyName === "margin-right") {
              S();
              x();
            }
          };
          var A =
            typeof ResizeObserver === "undefined"
              ? undefined
              : new ResizeObserver(() => x());
          if (A != null) {
            A.observe(l);
          }
          if (A != null) {
            A.observe(content);
          }
          if (root !== content) {
            if (A != null) {
              A.observe(root);
            }
          }
          if (j) {
            if (A != null) {
              A.observe(j);
            }
          }
          l.addEventListener("transitionend", N);
          l.addEventListener("transitioncancel", N);
          if (j != null) {
            j.addEventListener("scroll", x, {
              passive: true,
            });
          }
          x();
          if (c) {
            S();
            x();
            if (typeof window.requestAnimationFrame === "function") {
              e = window.requestAnimationFrame(R);
            }
          }
          return () => {
            C = true;
            S();
            if (A != null) {
              A.disconnect();
            }
            l.removeEventListener("transitionend", N);
            l.removeEventListener("transitioncancel", N);
            if (j != null) {
              j.removeEventListener("scroll", x);
            }
            td(l, ti.QB, y);
            td(content, ti.Hc, w);
            td(content, ti.CL, k);
            _();
          };
        }
      }
    }, [
      activeRouteId,
      enabled,
      hostRef,
      rightInset,
      topOffset,
      uiConfigurationService,
    ]);
  })({
    activeRouteId,
    enabled: !hidden,
    hostRef,
    rightInset,
    topOffset: N,
    uiConfigurationService,
  });
  const P = hasLogin ? I(w.Du.Personal) : undefined;
  const E = hasLogin ? I("SiderMenuTaskCenter") : undefined;
  const W = hasLogin ? I("SiderMenuNotification") : undefined;
  const F = !!(E || W);
  g.useLayoutEffect(() => {
    if (hasLogin) {
      S();
      window.addEventListener("resize", S);
      var e;
      var t =
        typeof ResizeObserver === "undefined"
          ? undefined
          : new ResizeObserver(S);
      if ((e = CRef.current) == null ? undefined : e.parentElement) {
        if (t != null) {
          t.observe(CRef.current.parentElement);
        }
      }
      return () => {
        window.removeEventListener("resize", S);
        if (t != null) {
          t.disconnect();
        }
      };
    }
  }, [hasLogin, S]);
  const actions = hasLogin
    ? o.jsxs("div", {
        className: _F(tt, "top-actions-logged-in-TNkAug"),
        "data-main-frame-2026-top-actions": true,
        children: [
          isTeamMode || activeRouteId !== w.Du.Home
            ? null
            : o.jsx(e7.Q, {
                className: "credit-mall-action-J2fKYk",
              }),
          o.jsxs("div", {
            className: "credit-action-aN2CnS",
            "data-main-frame-2026-credit-action": true,
            children: [
              F
                ? o.jsxs("div", {
                    className: "leading-icon-actions-_ysPvw",
                    "data-main-frame-2026-icon-actions": true,
                    children: [
                      E
                        ? o.jsx("div", {
                            className: "task-center-action-DfDUG5",
                            children: o.jsx(te, {
                              className: ta,
                              config: E,
                              label: B.f(
                                "onboarding_entry_tag",
                                "领积分",
                                "Task center",
                              ),
                              menuWrapperPlacement: "top-actions",
                              uiConfigurationService,
                            }),
                          })
                        : null,
                      W
                        ? o.jsx("div", {
                            className: "notification-action-tSiEps",
                            children: o.jsx(te, {
                              className: ta,
                              config: W,
                              label: b.Ay.t(
                                "web_revision_message_center",
                                {},
                                "Notifications",
                              ),
                              menuWrapperPlacement: "top-actions",
                              uiConfigurationService,
                            }),
                          })
                        : null,
                    ],
                  })
                : null,
              F
                ? o.jsx("div", {
                    className: tr,
                    "aria-hidden": "true",
                    "data-main-frame-2026-icon-divider": true,
                  })
                : null,
              o.jsx("div", {
                ref: CRef,
                className: "compact-credit-display-anchor-CkyfXV",
                children: o.jsx(e9._, {
                  mode: "row",
                  tipPos: "bottom",
                  tipHorizontalOffset,
                  className: "compact-credit-display-VeuG0F",
                  presentation: "membership-summary",
                }),
              }),
              P
                ? o.jsx("div", {
                    className: "avatar-action-shell-DCEHaz",
                    "data-main-frame-2026-avatar-action": true,
                    children: o.jsx(te, {
                      className: "avatar-action-TnCTcb",
                      config: P,
                      label: b.Ay.t("web_profile_page", {}, "Profile"),
                      menuWrapperPlacement: "top-actions",
                      uiConfigurationService,
                    }),
                  })
                : null,
            ],
          }),
        ],
      })
    : o.jsx(tn, {
        configs,
        onRequestLogin,
        uiConfigurationService,
      });
  return o.jsx(to, {
    hostRef,
    hidden,
    replaceBase,
    rightInset,
    positionInset: N,
    extensionSlot: hasLogin
      ? o.jsx("div", {
          className: _F("top-actions-extension-slot-a9WQbR", {
            "top-actions-extension-slot-hidden-Likizw": !T,
          }),
          children: j.map((routeId) =>
            o.jsx(
              useTs,
              {
                active: routeId === activeRouteId,
                routeId,
                topActionsFeatureService,
              },
              routeId,
            ),
          ),
        })
      : null,
    actions,
  });
});
function tm(e) {
  try {
    return window.localStorage.getItem(e) === "true";
  } catch (e) {
    return false;
  }
}
function useTh(e, t) {
  const a = g.useMemo(
    () =>
      `dreamina_main_frame_2026_section_collapsed:`.concat(t, ":").concat(e),
    [e, t],
  );
  const [r, setR] = g.useState(() => tm(a));
  g.useEffect(() => {
    setR(tm(a));
  }, [a]);
  return [
    r,
    g.useCallback(() => {
      setR((e) => {
        var t = !e;
        try {
          window.localStorage.setItem(a, String(t));
        } catch (e) {}
        return t;
      });
    }, [a]),
  ];
}
const tv = require("N2");
const tg = "dreamina_sidebar";
const tf = require("jRY");
export var MAIN_FRAME_2026_SIDEBAR_COLLAPSED_WIDTH = parseFloat(
  tf.A["main-frame-2026-sidebar-collapsed-width"],
);
export var MAIN_FRAME_2026_SIDEBAR_EXPANDED_WIDTH = parseFloat(
  tf.A["main-frame-2026-sidebar-expanded-width"],
);
const ty = parseFloat(tf.A["main-frame-2026-sidebar-narrow-max-width"]);
const tw = "(max-width: ".concat(ty, "px)");
function tk() {
  if (typeof document === "undefined") {
    return false;
  }
  try {
    let e;
    e = document.cookie;
    return tv.k(e, tg) === "1";
  } catch (e) {
    return false;
  }
}
function t_() {
  let e;
  let t;
  return (
    typeof window !== "undefined" &&
    ((e = (t = window).matchMedia) == null
      ? undefined
      : e.call(t, tw).matches) === true
  );
}
function tC(e) {
  if (typeof document !== "undefined") {
    try {
      document.cookie = (function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        return tv.U(tg, e ? "1" : "0", t);
      })(e, window.location.protocol === "https:");
    } catch (e) {}
  }
}
function tx(defaultCollapsed) {
  return {
    defaultCollapsed,
    preferredCollapsed: defaultCollapsed || tk(),
    isNarrow: t_(),
    floatingOpen: false,
  };
}
const tS = require("ERJ");
const tR = require("./module-yzC_2.js");
function tN(e) {
  const {
    collapsed,
    compact,
    responsiveCollapse,
    projectContentGuest,
    navigation,
    projectContent,
    projectScrollContainerRef,
    onProjectScroll,
  } = e;
  return o.jsxs("div", {
    className: _F(em.sidebarContent, {
      [em.contentCollapsed]: collapsed,
      [em.contentCompact]: compact,
      [em.contentResponsiveCollapse]: responsiveCollapse,
    }),
    children: [
      navigation,
      o.jsx("div", {
        className: em.projectArea,
        "data-main-frame-2026-onboarding-project-area": true,
        children: o.jsx(tR.P, {
          ref: projectScrollContainerRef,
          scrollbarMode: compact ? "hidden" : "scrolling",
          className: _F(em.projectScrollBody, {
            [em.projectScrollBodyCompact]: compact,
          }),
          threshold: 0,
          onScroll: onProjectScroll,
          children: o.jsx("div", {
            className: _F(em.projectScrollContent, {
              [em.projectScrollContentGuest]: projectContentGuest,
            }),
            children: projectContent,
          }),
        }),
      }),
    ],
  });
}
const tA = (e) =>
  o.jsx(
    "svg",
    i._(
      n._(
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: 61,
          height: 14,
          fill: "none",
          viewBox: "0 0 61 14",
        },
        e,
      ),
      {
        children: o.jsx("path", {
          fill: "currentColor",
          d: "m24.222 3.629-.36 2.534h1.463c.698 0 1.342-.562 1.44-1.253l.171-1.206a10.2 10.2 0 0 0 1.276 2.142c.95-.375 1.783-.659 1.783-.659-.63-.541-1.778-1.794-2.73-3.178h2.116a.48.48 0 0 0 .478-.408l.117-.825h-2.623l.108-.764h-2.308a.48.48 0 0 0-.478.408l-.053.356H22.22a.48.48 0 0 0-.478.408l-.116.825h2.017c-.462.817-1.734 2.817-2.542 3.945 0 0 1.811-.78 3.114-2.322zM36.78 2.01h2.086a.48.48 0 0 0 .478-.41l.116-.824h-2.589l.109-.764h-2.31a.48.48 0 0 0-.477.408l-.05.356H31.71a.48.48 0 0 0-.477.408l-.117.825h2.053c-.461.817-1.734 2.817-2.542 3.945 0 0 1.811-.78 3.114-2.322l-.36 2.533h1.463c.697 0 1.342-.56 1.44-1.253l.172-1.205c.522 1.214 1.275 2.142 1.275 2.142.95-.375 1.783-.659 1.783-.659-.63-.542-1.78-1.795-2.73-3.178zM28.487 7.163h-3.24l-3.08 3.328a7.1 7.1 0 0 0 5.003-2.025l.092-.092h7.179c-.378.75-1.462 1.764-3.09 2.7-2.22-1.797-4.264-1.144-4.264-1.144s.925.867 2.017 2.217c-2.114.839-4.745 1.447-7.72 1.447l-.081.242s13.115 1.642 16.249-5.468l.092-.655h-9.718l.564-.556zM10.137.22H2.342a.444.444 0 0 0-.43.375L.13 13.082 0 13.995l5.737-1.109-.114.803h2.834l.502-3.525H7.387c-.697 0-1.342.56-1.439 1.253l-.108.75-2.795.347.57-3.995h5.814L10.535.761l.01-.08V.659a.44.44 0 0 0-.41-.437zM6.69 7.862H3.709l.453-3.17h2.98zm.544-3.82h-2.98l.452-3.17h2.981zM19.185.222h-6.503a.444.444 0 0 0-.43.376L10.34 13.996h2.834l1.87-13.12h1.708l-1.586 11.126h1.572c.697 0 1.342-.561 1.439-1.253L19.605.75V.736a.4.4 0 0 0 .011-.077.44.44 0 0 0-.43-.44zM48.575.015h-.956a.44.44 0 0 0-.32.166l-.04.064-8.838 13.746h1.072l1.764-2.772h7.304v-.006l.908 2.778h3.695zm-6.904 10.551 4.448-6.968 2.214 6.968zM57.893 0h-.083a.44.44 0 0 0-.384.33l-.008.059-2.184 13.577h3.254L60.732 0z",
        }),
      },
    ),
  );
function tT(e) {
  return o.jsx(tA, n._({}, e));
}
function tM(e) {
  const {
    ariaHidden = false,
    className,
    visible,
    collapsed,
    floating,
    compact,
    floatingLayerActive,
    inert = false,
    projectContentGuest,
    responsiveCollapse = false,
    logoLabel,
    navigation,
    projectContent,
    topActions,
    sidebarPanelRef,
    logoRef,
    projectScrollContainerRef,
    onLogoClick,
    onToggle,
    onProjectScroll,
    onSidebarTransitionEnd,
  } = e;
  if (visible) {
    return o.jsxs(o.Fragment, {
      children: [
        o.jsx(
          "div",
          i._(
            n._(
              {
                className: _F("sidebar-slot-CQnKlJ", className, {
                  "sidebar-floating-layer-vCdAZE": floatingLayerActive,
                }),
                "data-floating-layer": floatingLayerActive || undefined,
                "aria-hidden": ariaHidden || undefined,
              },
              inert
                ? {
                    inert: "",
                  }
                : {},
            ),
            {
              children: o.jsxs("aside", {
                ref: sidebarPanelRef,
                className: _F("sidebar-AfFCdu", {
                  "sidebar-collapsed-IpD4DI": collapsed,
                  "sidebar-floating-bLZNqP": floating,
                  "sidebar-layout-compact-MB9ADE": compact,
                  "sidebar-responsive-collapse-zJPM9N": responsiveCollapse,
                }),
                "data-collapsed": collapsed || undefined,
                "data-floating": floating || undefined,
                "data-responsive-collapse": responsiveCollapse || undefined,
                "data-testid": "main-frame-2026-sidebar",
                onTransitionEnd: onSidebarTransitionEnd,
                children: [
                  o.jsxs("div", {
                    className: "sidebar-header-F4bsGn",
                    children: [
                      o.jsxs("button", {
                        ref: logoRef,
                        type: "button",
                        className: "logo-PpB8O7",
                        "aria-label": logoLabel,
                        onClick: onLogoClick,
                        children: [
                          o.jsx("img", {
                            src: W.m(tS, null, {
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
                                "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWR*bFhiSFZN$jFwN$dW-3hiRXh$%1hkTmFsbDJZ$mMxT%ZwW$Nu$lpWM2Qy$1RJNWRX%khSbkJp-lZaN$R*ZE9kb%pZ%W5aaWJWWjFaRWhOZ*1KWFJuQmlh$EZ0WTIxR2R*cFRNS*xO%k$re$R*aE9jRnBI$m1sWldFbDBZa2RHTldJelZqQk1ibEo2Wl$kR2$Wb3pWbm89",
                            }),
                            alt: "",
                          }),
                          o.jsx(tT, {
                            className: "logo-text-XipxXH",
                            "aria-hidden": "true",
                          }),
                          o.jsx(z.GSD, {
                            className: "logo-expand-icon-p_9g6q",
                            size: 16,
                            "aria-hidden": "true",
                          }),
                        ],
                      }),
                      o.jsx("button", {
                        type: "button",
                        className: "sidebar-toggle-vpplTT",
                        "aria-label": collapsed
                          ? b.Ay.t(
                              "web_main_frame_expand_sidebar",
                              {},
                              "展开侧边栏",
                            )
                          : b.Ay.t(
                              "web_main_frame_collapse_sidebar",
                              {},
                              "收起侧边栏",
                            ),
                        "data-main-frame-sidebar-toggle": true,
                        "aria-expanded": !collapsed,
                        onClick: onToggle,
                        children: o.jsx(z.P2i, {
                          size: 16,
                          color: "currentColor",
                          "aria-hidden": "true",
                        }),
                      }),
                    ],
                  }),
                  o.jsx(tN, {
                    collapsed,
                    compact,
                    responsiveCollapse,
                    projectContentGuest,
                    navigation,
                    projectContent,
                    projectScrollContainerRef,
                    onProjectScroll,
                  }),
                ],
              }),
            },
          ),
        ),
        topActions,
      ],
    });
  }
  return null;
}
const tI = f.PA(function (e) {
  let t;
  let a;
  let r;
  let l;
  const { className, visible, allToolsNavigationItem } = e;
  const m = c.h(x.i);
  const h = c.h(j.f);
  const topActionsFeatureService = c.h(i_1);
  const f = c.h(s.K);
  const conversationWorkspaceService = c.h(S.D);
  const generationTaskIndicatorService = c.h(R.P);
  const I = y.zy();
  const items = allToolsNavigationItem
    ? A.flatMap((e) => {
        if (e.id === "assets") {
          return [allToolsNavigationItem, e];
        }
        return [e];
      })
    : A;
  const E = topActionsFeatureService.shouldHideFrameChrome();
  t = g.useCallback(
    (e) => {
      var t = m.onDidLogin(e);
      var a = m.onDidLogout(e);
      return () => {
        t.dispose();
        a.dispose();
      };
    },
    [m],
  );
  a = g.useCallback(() => m.hasLogin, [m]);
  const hasLogin = g.useSyncExternalStore(t, a, a);
  const currentRouteId =
    (l = f.getRouteConfigByPath(I.pathname)) == null ? undefined : l.id;
  const accountKey = m.uniqueId || "guest";
  const teamId = h.isTeamMode && (r = h.currentTeamId) != null ? r : null;
  const V = ""
    .concat(accountKey, ":")
    .concat(teamId != null ? teamId : "personal");
  const {
    closeFloatingSidebar,
    floatingOpen,
    isNarrow,
    layoutCollapsed,
    openSidebar,
    toggleSidebar,
    visualCollapsed,
  } = (function () {
    const e =
      arguments.length > 0 && arguments[0] !== undefined && arguments[0];
    const [t, setT] = g.useState(() => tx(e));
    if (t.defaultCollapsed !== e) {
      setT(tx(e));
    }
    g.useLayoutEffect(() => {
      if (typeof window !== "undefined" && window.matchMedia) {
        var e = window.matchMedia(tw);
        var t = (e) => {
          setT((t) => {
            var preferredCollapsed =
              !(!e.matches && t.isNarrow && t.floatingOpen) &&
              t.preferredCollapsed;
            if (preferredCollapsed !== t.preferredCollapsed) {
              tC(preferredCollapsed);
            }
            return i._(n._({}, t), {
              preferredCollapsed,
              isNarrow: e.matches,
              floatingOpen: false,
            });
          });
        };
        e.addEventListener("change", t);
        return () => e.removeEventListener("change", t);
      }
    }, []);
    const toggleSidebar_1 = g.useCallback(() => {
      setT((e) => {
        if (e.isNarrow) {
          return i._(n._({}, e), {
            floatingOpen: !e.floatingOpen,
          });
        }
        var t = !e.preferredCollapsed;
        tC(t);
        return i._(n._({}, e), {
          preferredCollapsed: t,
          floatingOpen: false,
        });
      });
    }, []);
    const openSidebar_1 = g.useCallback(() => {
      setT((e) => {
        if (e.isNarrow) {
          if (e.floatingOpen) {
            return e;
          }
          return i._(n._({}, e), {
            floatingOpen: true,
          });
        }
        if (e.preferredCollapsed) {
          tC(false);
          return i._(n._({}, e), {
            preferredCollapsed: false,
          });
        }
        return e;
      });
    }, []);
    const closeFloatingSidebar_1 = g.useCallback(() => {
      setT((e) => {
        if (e.isNarrow && e.floatingOpen) {
          return i._(n._({}, e), {
            floatingOpen: false,
          });
        }
        return e;
      });
    }, []);
    return {
      preferredCollapsed: t.preferredCollapsed,
      isNarrow: t.isNarrow,
      floatingOpen: t.isNarrow && t.floatingOpen,
      visualCollapsed: t.isNarrow ? !t.floatingOpen : t.preferredCollapsed,
      layoutCollapsed: t.isNarrow || t.preferredCollapsed,
      toggleSidebar: toggleSidebar_1,
      openSidebar: openSidebar_1,
      closeFloatingSidebar: closeFloatingSidebar_1,
    };
  })(currentRouteId === w.Du.ShortDrama && _.Yu().collapseNovelSidebar);
  const [q, setQ] = g.useState(visualCollapsed);
  const [U, Q] = useTh("chat", accountKey);
  const [Y, $] = useTh("canvas", V);
  const [G, setG] = g.useState();
  const etRef = g.useRef(null);
  const eaRef = g.useRef(null);
  const erRef = g.useRef(null);
  const enRef = g.useRef(0);
  const configs = f.getSideMenuConfigs();
  const shortDramaEnabled = configs.some((e) => {
    var t;
    return (
      e.id === w.Du.ShortDrama &&
      ((t = e.shouldHidden) == null ? undefined : t.call(e)) === false
    );
  });
  const es = b.Ay.t("web_search_empty_return_to_homepage", {}, "Back to home");
  const floatingLayerActive = isNarrow && (floatingOpen || !q);
  const requestLogin = g.useCallback(
    (e, t) => {
      var a = D_1(m, e);
      if (a && t) {
        a.then((e) => {
          if (e) {
            t();
          }
        });
      }
    },
    [m],
  );
  g.useLayoutEffect(() => {
    var e;
    var t;
    if (!visible && visualCollapsed) {
      setQ(true);
    } else if (visualCollapsed) {
      if (
        (e = (t = window).matchMedia) == null
          ? undefined
          : e.call(t, "(prefers-reduced-motion: reduce)").matches
      ) {
        setQ(true);
      }
    } else {
      setQ(false);
    }
    f.changeSideMenuWidth(
      E
        ? 0
        : layoutCollapsed
          ? MAIN_FRAME_2026_SIDEBAR_COLLAPSED_WIDTH
          : MAIN_FRAME_2026_SIDEBAR_EXPANDED_WIDTH,
    );
  }, [E, layoutCollapsed, f, visible, visualCollapsed]);
  g.useEffect(() => {
    closeFloatingSidebar();
  }, [closeFloatingSidebar, I.pathname]);
  g.useEffect(() => {
    if (floatingOpen) {
      var e = (e) => {
        var etRef_current = etRef.current;
        var { target } = e;
        if (
          !(
            (etRef_current && e.composedPath().includes(etRef_current)) ||
            (target instanceof Element &&
              target.closest(
                '[data-main-frame-sidebar-layer], [role="dialog"]',
              ))
          )
        ) {
          closeFloatingSidebar();
        }
      };
      var t = (e) => {
        var { target } = e;
        if (
          !(
            e.key !== "Escape" ||
            e.defaultPrevented ||
            document.querySelector("[data-main-frame-sidebar-layer]") ||
            (target instanceof Element &&
              target.closest(
                '[role="dialog"], input, textarea, [contenteditable="true"]',
              ))
          )
        ) {
          e.preventDefault();
          closeFloatingSidebar();
          window.requestAnimationFrame(() => {
            var e;
            if ((e = eaRef.current) == null) {
              return undefined;
            }
            return e.focus();
          });
        }
      };
      document.addEventListener("pointerdown", e, true);
      document.addEventListener("keydown", t);
      return () => {
        document.removeEventListener("pointerdown", e, true);
        document.removeEventListener("keydown", t);
      };
    }
  }, [closeFloatingSidebar, floatingOpen]);
  g.useEffect(() => {
    if (!visible || E) {
      closeFloatingSidebar();
    }
  }, [closeFloatingSidebar, E, visible]);
  g.useLayoutEffect(() => {
    var e;
    if ((e = erRef.current) != null) {
      e.scrollTo({
        top: U ? 0 : enRef.current,
      });
    }
  }, [U, q]);
  const onNavigate = g.useCallback(() => {
    closeFloatingSidebar();
  }, [closeFloatingSidebar]);
  const onProjectScroll = g.useCallback(
    (e) => {
      if (!(q || U)) {
        enRef.current = e.currentTarget.scrollTop;
      }
    },
    [U, q],
  );
  const onSidebarTransitionEnd = g.useCallback(
    (e) => {
      if (
        e.target === e.currentTarget &&
        e.propertyName === "width" &&
        visualCollapsed
      ) {
        setQ(true);
      }
    },
    [visualCollapsed],
  );
  const onRequestRename = g.useCallback(
    (e) => {
      setG(e);
      if (e !== undefined && visualCollapsed) {
        openSidebar();
      }
    },
    [openSidebar, visualCollapsed],
  );
  const eh = g.useMemo(
    () =>
      o.jsx(eF, {
        accountKey,
        teamId,
        compact: q,
        collapsed: Y,
        hasLogin,
        onToggle: $,
        onNavigate,
        pendingRenameProjectId: G,
        onRequestRename,
        requestLogin,
        uiConfigurationService: f,
      }),
    [
      Y,
      teamId,
      onRequestRename,
      onNavigate,
      hasLogin,
      G,
      accountKey,
      requestLogin,
      q,
      $,
      f,
    ],
  );
  if (!visible || E) {
    return null;
  }
  return o.jsx(tM, {
    className,
    visible,
    collapsed: visualCollapsed,
    floating: floatingOpen,
    compact: q,
    floatingLayerActive,
    projectContentGuest: !hasLogin,
    logoLabel: visualCollapsed ? undefined : es,
    sidebarPanelRef: etRef,
    logoRef: eaRef,
    projectScrollContainerRef: erRef,
    onLogoClick: () => {
      if (visualCollapsed) {
        openSidebar();
      } else {
        f.activateSideMenuItem(w.Du.Home);
        onNavigate();
      }
    },
    onToggle: toggleSidebar,
    onProjectScroll,
    onSidebarTransitionEnd,
    navigation: o.jsx(e5, {
      items,
      shortDramaEnabled,
      compact: q,
      currentRouteId,
      hasLogin,
      onNavigate,
      requestLogin,
      uiConfigurationService: f,
    }),
    projectContent: o.jsxs(o.Fragment, {
      children: [
        o.jsx(eq, {
          accountKey,
          compact: q,
          collapsed: U,
          hasLogin,
          isGenerateRoute: currentRouteId === w.Du.AIGeneratedRecord,
          onToggle: Q,
          onNavigate,
          onRequestExpand: openSidebar,
          conversationWorkspaceService,
          generationTaskIndicatorService,
          requestLogin,
          uiConfigurationService: f,
        }),
        eh,
      ],
    }),
    topActions: o.jsx(tp, {
      configs,
      hasLogin,
      isTeamMode: h.isTeamMode,
      onRequestLogin: () => requestLogin(C.HH.Login),
      topActionsFeatureService,
      uiConfigurationService: f,
    }),
  });
});
function tP(e) {
  const { toolsConfig } = e;
  const a = h._(e, ["toolsConfig"]);
  w_1();
  return o.jsx(
    tI,
    i._(n._({}, a), {
      allToolsNavigationItem: undefined,
    }),
  );
}
function useTE(e) {
  const { className, visible } = e;
  const r = c.h(s.K);
  g.useLayoutEffect(() => {
    r.changeSideMenuWidth(MAIN_FRAME_2026_SIDEBAR_EXPANDED_WIDTH);
  }, [r]);
  if (visible) {
    return o.jsxs("aside", {
      className: _F("sidebar-a5rzPR", className),
      "data-testid": "main-frame-2026-sidebar-fallback",
      children: [
        o.jsxs("div", {
          className: "logo-qGFELe",
          "aria-hidden": "true",
          children: [
            o.jsx("img", {
              src: W.m(tS, null, {
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
                  "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWFHTklRbnBNTWxKN$dsZEdkR0Z-TldoT%0wNT$XW*s1-lZwWFJqQmtXRXBzWTNrNWR*bFhiSFZN$jFwN$dW-3hiRXh$%1hkTmFsbDJZ$mMxT%ZwW$Nu$lpWM2Qy$1RJNWRX%khSbkJp-lZaN$R*ZE9kb%pZ%W5aaWJWWjFaRWhOZ*1KWFJuQmlh$EZ0WTIxR2R*cFRNS*xO%k$re$R*aE9jRnBI$m1sWldFbDBXbTFH-zJKSFNtaFpNbk4xWk$oT05*bFlTbT$r$0%wOQ",
              }),
              alt: "",
            }),
            o.jsx(tT, {}),
          ],
        }),
        o.jsx("div", {
          className: "content-TxASeE",
          children: o.jsx("button", {
            type: "button",
            className: "reload-l6XgOh",
            onClick: () => {
              window.location.reload();
            },
            children: b.Ay.t("web_common_btn_refresh", {}, "Refresh"),
          }),
        }),
      ],
    });
  }
  return null;
}
const tW = require("dw4");
function tF(routeId, t) {
  return JSON.stringify([routeId, t]);
}
class tL {
  getHost(e) {
    let t;
    let a;
    if (
      (t = (a = this._hostRegistrations.get(e)) == null ? undefined : a.host) !=
      null
    ) {
      return t;
    }
    return null;
  }
  getRightInset(e) {
    return Array.from(this._rightInsetRegistrations.values()).reduce(
      (acc, item) => {
        if (item.routeId === e) {
          return Math.max(acc, item.rightInset);
        }
        return acc;
      },
      0,
    );
  }
  hasRegisteredActions(e) {
    return Array.from(this._presentationRegistrations.values()).some(
      (t) => t.routeId === e,
    );
  }
  hasActiveDetailSurface() {
    return this._detailSurfaceRegistrations.size > 0;
  }
  shouldHideFrameChrome() {
    return Array.from(this._detailSurfaceRegistrations.values()).some(
      (e) => e.presentation === "immersive",
    );
  }
  shouldReplaceBaseActions(e) {
    return Array.from(this._presentationRegistrations.values()).some(
      (t) => t.routeId === e && t.presentation === "replace-base",
    );
  }
  activateExclusivePanel(e) {
    Array.from(this._exclusivePanelRegistrations.values()).forEach((t) => {
      if (t.id !== e) {
        t.dismiss();
      }
    });
  }
  attachHost(e, host) {
    const a = {
      host,
      token: Symbol("new-frame-top-actions-feature-host"),
    };
    tW.h5(() => {
      this._hostRegistrations.set(e, a);
    });
    return {
      dispose: () => {
        var t;
        if (
          ((t = this._hostRegistrations.get(e)) == null
            ? undefined
            : t.token) === a.token
        ) {
          tW.h5(() => {
            this._hostRegistrations.delete(e);
          });
        }
      },
    };
  }
  register(e) {
    const { id, routeId, presentation } = e;
    const n = tF(routeId, id);
    const i = {
      routeId,
      presentation,
      token: Symbol(id),
    };
    tW.h5(() => {
      this._presentationRegistrations.set(n, i);
    });
    return {
      dispose: () => {
        var e;
        if (
          ((e = this._presentationRegistrations.get(n)) == null
            ? undefined
            : e.token) === i.token
        ) {
          tW.h5(() => {
            this._presentationRegistrations.delete(n);
          });
        }
      },
    };
  }
  registerDetailSurface(e) {
    const { id, presentation = "standard" } = e;
    const r = {
      presentation,
      token: Symbol(id),
    };
    tW.h5(() => {
      this._detailSurfaceRegistrations.set(r.token, r);
    });
    return {
      dispose: () => {
        if (this._detailSurfaceRegistrations.get(r.token) === r) {
          tW.h5(() => {
            this._detailSurfaceRegistrations.delete(r.token);
          });
        }
      },
    };
  }
  registerExclusivePanel(e) {
    const { id, dismiss } = e;
    const r = {
      id,
      dismiss,
      token: Symbol(id),
    };
    this._exclusivePanelRegistrations.set(r.token, r);
    return {
      dispose: () => {
        if (this._exclusivePanelRegistrations.get(r.token) === r) {
          this._exclusivePanelRegistrations.delete(r.token);
        }
      },
    };
  }
  registerRightInset(e) {
    const { id, routeId, rightInset } = e;
    const n = tF(routeId, id);
    const i = {
      routeId,
      rightInset,
      token: Symbol(id),
    };
    tW.h5(() => {
      this._rightInsetRegistrations.set(n, i);
    });
    return {
      dispose: () => {
        var e;
        if (
          ((e = this._rightInsetRegistrations.get(n)) == null
            ? undefined
            : e.token) === i.token
        ) {
          tW.h5(() => {
            this._rightInsetRegistrations.delete(n);
          });
        }
      },
    };
  }
  constructor() {
    this._hostRegistrations = tW.sH.map([], {
      deep: false,
    });
    this._presentationRegistrations = tW.sH.map([], {
      deep: false,
    });
    this._detailSurfaceRegistrations = tW.sH.map([], {
      deep: false,
    });
    this._rightInsetRegistrations = tW.sH.map([], {
      deep: false,
    });
    this._exclusivePanelRegistrations = new Map();
  }
}
const tz = require("o7");
const tV = require("tPs");
class tD {
  get visibleProjects() {
    return this.projects.slice(0, this.visibleCount);
  }
  startFirstPageLoad() {
    this.isLoading = true;
    this.isLoadingMore = false;
    this.error = null;
    this.paginationError = null;
  }
  setFirstPageError(e) {
    this.error = e;
  }
  finishFirstPageLoad() {
    this.isLoading = false;
    this.initialized = true;
  }
  startLoadingMore() {
    this.isLoadingMore = true;
    this.paginationError = null;
  }
  setPaginationError(e) {
    this.paginationError = e;
  }
  finishLoadingMore() {
    this.isLoadingMore = false;
  }
  cancelLoading() {
    this.isLoading = false;
    this.isLoadingMore = false;
  }
  expandVisibleProjects(e) {
    this.hasExpandedFirstPage = true;
    this.visibleCount = Math.min(e, this.projects.length);
  }
  resetVisibleProjects() {
    this.visibleCount = 6;
    this.hasExpandedFirstPage = false;
  }
  replaceFirstPage(e, t, a) {
    this.projects = this._deduplicateProjects(e);
    this.cursor = t;
    this.hasMore = a;
  }
  appendPage(e, t, a) {
    this.projects = this._deduplicateProjects([...this.projects, ...e]);
    this.cursor = t;
    this.hasMore = a;
  }
  updateProjectName(e, name) {
    const a = this._getProjectSnapshot(e);
    if (a) {
      this.projects[a.index] = i._(n._({}, a.project), {
        name,
      });
      return a;
    }
  }
  updateProjectPinned(e, t) {
    const a = this._getProjectSnapshot(e);
    if (a) {
      const r = this.projects.filter((t) => t.id !== e);
      const o = i._(n._({}, a.project), {
        isPinned: t,
      });
      let s = 0;
      if (!t) {
        const c = r.findIndex((e) => !e.isPinned);
        s = c < 0 ? r.length : c;
      }
      r.splice(s, 0, o);
      this.projects = r;
      return a;
    }
  }
  removeProject(e) {
    this.projects = this.projects.filter((t) => t.id !== e);
  }
  restoreProject(e) {
    const t = this.projects.filter((t) => t.id !== e.project.id);
    t.splice(Math.min(e.index, t.length), 0, e.project);
    this.projects = t.sort((e, t) => Number(t.isPinned) - Number(e.isPinned));
  }
  reset() {
    this.projects = [];
    this.cursor = "";
    this.hasMore = false;
    this.isLoading = false;
    this.isLoadingMore = false;
    this.initialized = false;
    this.error = null;
    this.paginationError = null;
    this.resetVisibleProjects();
  }
  _deduplicateProjects(e) {
    const t = new Set();
    return e.filter((e) => !t.has(e.id) && (t.add(e.id), true));
  }
  _getProjectSnapshot(e) {
    const index = this.projects.findIndex((t) => t.id === e);
    if (!(index < 0)) {
      return {
        index,
        project: this.projects[index],
      };
    }
  }
  constructor() {
    this.projects = [];
    this.cursor = "";
    this.hasMore = false;
    this.isLoading = false;
    this.isLoadingMore = false;
    this.initialized = false;
    this.error = null;
    this.paginationError = null;
    this.visibleCount = 6;
    this.hasExpandedFirstPage = false;
    tW.l_(this);
  }
}
class tO extends tz.jG {
  initialize(e) {
    return E._(function* () {
      this._activateScope(e);
      if (!this._dataStore.initialized) {
        if (this._initializePromise) {
          return void (yield this._initializePromise);
        }
        const t = this._loadFirstPage(this._requestVersion);
        this._initializePromise = t;
        try {
          yield t;
        } finally {
          if (this._initializePromise === t) {
            this._initializePromise = undefined;
          }
        }
      }
    }).call(this);
  }
  refresh(e) {
    return E._(function* () {
      this._activateScope(e);
      this._requestVersion += 1;
      this._initializePromise = undefined;
      yield this._loadFirstPage(this._requestVersion);
    }).call(this);
  }
  showMore(e) {
    return E._(function* () {
      this._activateScope(e);
      if (!this._dataStore.isLoading && !this._dataStore.isLoadingMore) {
        const t = this._dataStore.hasExpandedFirstPage
          ? this._dataStore.visibleCount + 20
          : 20;
        if (t > this._dataStore.projects.length && this._dataStore.hasMore) {
          yield this._loadMore(this._requestVersion);
        }
        if (!this._dataStore.paginationError) {
          this._dataStore.expandVisibleProjects(t);
        }
      }
    }).call(this);
  }
  resetVisibleProjects() {
    this._dataStore.resetVisibleProjects();
  }
  togglePin(e) {
    let t;
    const a =
      ((t = this._dataStore.projects.find((t) => t.id === e)) == null
        ? undefined
        : t.isPinned) === false;
    return this._enqueueProjectMutation(e, () =>
      E._(function* () {
        const t = this._dataStore.projects.find((t) => t.id === e);
        if (!t) {
          throw Error("AI Canvas project not found");
        }
        if (!this._getProjectPermission(t).canPin) {
          throw Error("AI Canvas project pin is not allowed");
        }
        if (t.isPinned !== a) {
          const r = this._scopeVersion;
          this._invalidateListRequests();
          const n = this._dataStore.updateProjectPinned(e, a);
          try {
            const i = yield this._aiCanvasDataService.updateProject({
              projectId: e,
              isPinned: a,
            });
            if (!this._isCurrentScope(r)) {
              return;
            }
            if (!i.ok) {
              throw Error(i.msg || "toggle AI Canvas project pin failed");
            }
          } catch (error) {
            if (!this._isCurrentScope(r)) {
              return;
            }
            this._dataStore.restoreProject(n);
            throw error;
          }
        }
      }).call(this),
    );
  }
  renameProject(e, t) {
    return E._(function* () {
      const a = t.trim();
      if (!a) {
        throw Error("AI Canvas project name is required");
      }
      if (Array.from(a).length > 60) {
        throw Error(`AI Canvas project name must not exceed ${60} characters`);
      }
      yield this._enqueueProjectMutation(e, () =>
        E._(function* () {
          const t = this._dataStore.projects.find((t) => t.id === e);
          if (!t) {
            throw Error("AI Canvas project not found");
          }
          if (!this._getProjectPermission(t).canRename) {
            throw Error("AI Canvas project rename is not allowed");
          }
          if (t.name !== a) {
            const r = this._scopeVersion;
            this._invalidateListRequests();
            const n = this._dataStore.updateProjectName(e, a);
            try {
              const i = yield this._aiCanvasDataService.updateProject({
                projectId: e,
                name: a,
              });
              if (!this._isCurrentScope(r)) {
                return;
              }
              if (!i.ok) {
                throw Error(i.msg || "rename AI Canvas project failed");
              }
            } catch (error) {
              if (!this._isCurrentScope(r)) {
                return;
              }
              this._dataStore.updateProjectName(e, n.project.name);
              throw error;
            }
          }
        }).call(this),
      );
    }).call(this);
  }
  deleteProject(e) {
    return this._enqueueProjectMutation(e, () =>
      E._(function* () {
        const t = this._dataStore.projects.find((t) => t.id === e);
        if (!t) {
          throw Error("AI Canvas project not found");
        }
        if (!this._getProjectPermission(t).canDelete) {
          throw Error("AI Canvas project delete is not allowed");
        }
        const _scopeVersion = this._scopeVersion;
        this._invalidateListRequests();
        const r = yield this._aiCanvasDataService.batchDeleteProjects({
          projectIds: [e],
        });
        if (this._isCurrentScope(_scopeVersion)) {
          if (!r.ok) {
            throw Error(r.msg || "delete AI Canvas project failed");
          }
          this._dataStore.removeProject(e);
        }
      }).call(this),
    );
  }
  reset() {
    this._requestVersion += 1;
    this._scopeVersion += 1;
    this._scope = undefined;
    this._initializePromise = undefined;
    this._projectMutationTails.clear();
    this._dataStore.reset();
  }
  dispose() {
    this.reset();
    super.dispose();
  }
  _applyProjectSyncChange(e) {
    if (e.type === "reset") {
      return void this.reset();
    }
    if (e.type === "project-renamed") {
      return void this._dataStore.updateProjectName(e.projectId, e.name);
    }
    if (e.type === "projects-deleted") {
      return void e.projectIds.forEach((e) => this._dataStore.removeProject(e));
    }
    if (e.type === "project-copied" || e.type === "template-copied") {
      const t = this._scope;
      if (t) {
        this.refresh(t);
      }
    }
  }
  _activateScope(e) {
    let t;
    let a;
    if (
      ((t = this._scope) == null ? undefined : t.accountKey) !== e.accountKey ||
      ((a = this._scope) == null ? undefined : a.teamId) !== e.teamId
    ) {
      this._requestVersion += 1;
      this._scopeVersion += 1;
      this._scope = n._({}, e);
      this._initializePromise = undefined;
      this._projectMutationTails.clear();
      this._dataStore.reset();
    }
  }
  _invalidateListRequests() {
    this._requestVersion += 1;
    this._initializePromise = undefined;
    this._dataStore.cancelLoading();
  }
  _enqueueProjectMutation(e, t) {
    const a = this._projectMutationTails.get(e);
    const _scopeVersion = this._scopeVersion;
    const n = () =>
      E._(function* () {
        if (this._isCurrentScope(_scopeVersion)) {
          yield t();
        }
      }).call(this);
    const i = a ? a.then(n) : n();
    const o = i.catch(() => undefined);
    this._projectMutationTails.set(e, o);
    o.then(() => {
      if (this._projectMutationTails.get(e) === o) {
        this._projectMutationTails.delete(e);
        this._invalidateListRequests();
      }
    });
    return i;
  }
  _loadFirstPage(e) {
    return E._(function* () {
      this._dataStore.startFirstPageLoad();
      try {
        const t = yield this._aiCanvasDataService.listProjects({
          limit: 20,
          scene: "sidebar",
          sortType: "pinned_at_desc_updated_at_desc",
        });
        if (!this._isCurrentRequest(e)) {
          return;
        }
        if (!t.ok) {
          return void this._dataStore.setFirstPageError(
            t.msg || "load AI Canvas projects failed",
          );
        }
        const { projects, cursor, hasMore } = t.value;
        this._dataStore.replaceFirstPage(
          this._filterProjectsForCurrentScope(projects),
          cursor,
          hasMore && !!cursor,
        );
      } catch (error) {
        if (!this._isCurrentRequest(e)) {
          return;
        }
        V.V.error(
          "[MainFrame2026Sidebar] load AI Canvas projects failed",
          error,
        );
        this._dataStore.setFirstPageError(
          error instanceof Error ? error.message : String(error),
        );
      } finally {
        if (this._isCurrentRequest(e)) {
          this._dataStore.finishFirstPageLoad();
        }
      }
    }).call(this);
  }
  _loadMore(e) {
    return E._(function* () {
      if (this._dataStore.hasMore && !this._dataStore.isLoadingMore) {
        const cursor_1 = this._dataStore.cursor;
        this._dataStore.startLoadingMore();
        try {
          const a = yield this._aiCanvasDataService.listProjects({
            limit: 20,
            cursor: cursor_1,
            scene: "sidebar",
            sortType: "pinned_at_desc_updated_at_desc",
          });
          if (!this._isCurrentRequest(e)) {
            return;
          }
          if (!a.ok) {
            return void this._dataStore.setPaginationError(
              a.msg || "load more AI Canvas projects failed",
            );
          }
          const { projects, cursor, hasMore } = a.value;
          this._dataStore.appendPage(
            this._filterProjectsForCurrentScope(projects),
            cursor,
            hasMore && !!cursor && cursor !== cursor_1,
          );
        } catch (error) {
          if (!this._isCurrentRequest(e)) {
            return;
          }
          V.V.error(
            "[MainFrame2026Sidebar] load more AI Canvas projects failed",
            error,
          );
          this._dataStore.setPaginationError(
            error instanceof Error ? error.message : String(error),
          );
        } finally {
          if (this._isCurrentRequest(e)) {
            this._dataStore.finishLoadingMore();
          }
        }
      }
    }).call(this);
  }
  _isCurrentRequest(e) {
    return (
      this._projectMutationTails.size === 0 &&
      e === this._requestVersion &&
      this._scope !== undefined
    );
  }
  _isCurrentScope(e) {
    return e === this._scopeVersion && this._scope !== undefined;
  }
  _getProjectPermission(e) {
    let t;
    let a;
    return eS(e, {
      teamId:
        (t = (a = this._scope) == null ? undefined : a.teamId) != null
          ? t
          : null,
    });
  }
  _filterProjectsForCurrentScope(e) {
    const _scope = this._scope;
    if (_scope) {
      return e.filter((e) => {
        if (_scope.teamId) {
          return (
            e.teamId === _scope.teamId && this._getProjectPermission(e).canRead
          );
        }
        return (
          (!e.teamId || e.teamId === "0") &&
          this._getProjectPermission(e).canRead
        );
      });
    }
    return [];
  }
  constructor(e, t) {
    super();
    this._aiCanvasDataService = e;
    this._aiCanvasProjectSyncService = t;
    this._serviceBrand = undefined;
    this._dataStore = new tD();
    this.data = this._dataStore;
    this._requestVersion = 0;
    this._scopeVersion = 0;
    this._projectMutationTails = new Map();
    this._register(
      this._aiCanvasProjectSyncService.onDidChange((e) =>
        this._applyProjectSyncChange(e),
      ),
    );
  }
}
export function installMainFrame2026Sidebar(e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  e.invokeFunction((e) => {
    var a = e.get(s.K);
    var instantiationService = e.get(l.L);
    instantiationService.register(i_1, tL);
    instantiationService.register(d, __1);
    instantiationService.register(L, G_1);
    instantiationService.register(ec, tO);
    a.setSideMenuRenderer({
      renderer: (e) =>
        o.jsx(c.Z, {
          instantiationService,
          children: o.jsx(
            tP,
            i._(n._({}, e), {
              toolsConfig: t.tools,
            }),
          ),
        }),
      fallbackRenderer: (e) =>
        o.jsx(c.Z, {
          instantiationService,
          children: o.jsx(useTE, n._({}, e)),
        }),
    });
    a.changeSideMenuWidth(
      t_() || tk()
        ? MAIN_FRAME_2026_SIDEBAR_COLLAPSED_WIDTH
        : MAIN_FRAME_2026_SIDEBAR_EXPANDED_WIDTH,
    );
  });
}
tO = Y.Cg(
  [
    Y.Qj(0, d),
    Y.Qj(1, tV.v),
    Y.Sn("design:type", Function),
    Y.Sn("design:paramtypes", [
      d === undefined ? Object : d,
      tV.v === undefined ? Object : tV.v,
    ]),
  ],
  tO,
);
var tZ = require("./module-E01_2.js");
z.aIh;
z.kmM;
z.JNH;
z.ku5;
z.QOg;
z.umo;
z.mUl;
z.kiM;
z.ix_;
z.meS;
z.Ej4;
z.c0Z;
z.lii;
z.Rgk;
z.g6N;
z.Ulv;
z.glr;
z._Qc;
e$.p;
e$.p;
z.nYt;
const tH = () => undefined;
w.Du.ShortDrama;
w.Du.Home;
w.Du.Tools;
w.Du.AIImage;
w.Du.AIVideo;
w.Du.AIAgent;
w.Du.CanvasHome;
export var MAIN_FRAME_2026_SSR_RESPONSIVE_LAYOUT_CLASS_NAME =
  "ssr-responsive-layout-Wux9mC";
export function StaticMainFrame2026Sidebar(e) {
  let t;
  const {
    className,
    visible,
    collapsed = false,
    currentRouteId = w.Du.Home,
    responsiveCollapse = true,
    localizationVariant = "v0",
    shortDramaEnabled = false,
  } = e;
  const uiConfigurationService = c.h(s.K);
  return o.jsx(tM, {
    ariaHidden: true,
    inert: true,
    className: [className, "dreamina-main-frame-2026-side-menu-ssr", false]
      .filter(Boolean)
      .join(" "),
    visible,
    collapsed,
    floating: false,
    compact: collapsed,
    floatingLayerActive: false,
    projectContentGuest: false,
    responsiveCollapse,
    logoLabel: collapsed
      ? undefined
      : b.Ay.t("web_search_empty_return_to_homepage", {}, "Back to home"),
    onLogoClick: tH,
    onToggle: tH,
    navigation: o.jsx(e5, {
      shortDramaEnabled,
      compact: collapsed,
      currentRouteId,
      hasLogin: true,
      requestLogin: tH,
      uiConfigurationService,
    }),
    projectContent:
      ((t = () =>
        o.jsx(eM, {
          children: o.jsx(eP, {
            compact: collapsed,
          }),
        })),
      o.jsxs(o.Fragment, {
        children: [
          o.jsx(eT, {
            title: b.Ay.t("web_mainframe_history_tab_chat", {}, "对话"),
            collapsed: false,
            compact: collapsed,
            onToggle: tH,
            onCreate: tH,
            createLabel: b.Ay.t("web_mainframe_new_chat", {}, "新对话"),
            keepContentMounted: true,
            children: t(),
          }),
          o.jsx(eT, {
            title: b.Ay.t("web_mainframe_history_tab_canvas", {}, "画布"),
            collapsed: false,
            compact: collapsed,
            onToggle: tH,
            onCreate: tH,
            createLabel: b.Ay.t(
              "web_mainframe_canvas_new_project",
              {},
              "新建项目",
            ),
            createIcon: o.jsx(z.xZp, {
              size: 16,
              "aria-hidden": "true",
            }),
            headerActionLabel: b.Ay.t(
              "web_mainframe_canvas_projects_view_all",
              {},
              "查看全部",
            ),
            onHeaderAction: tH,
            keepContentMounted: true,
            children: t(),
          }),
        ],
      })),
    topActions: o.jsx(to, {
      actions: null,
    }),
  });
}
var tq = require("./module-dYY.js");
