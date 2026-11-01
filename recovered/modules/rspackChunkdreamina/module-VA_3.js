import r from "NY";
import o from "QWK";
import { c as c_1 } from "./module-bE_2.js";
import l from "S8";
import { Fr } from "./module-Ev_3.js";
export var Go = {
  TestName: "dreamina_recommend",
  TestValue: "all_tab_use_rec",
};
export var ob = {
  GeneratorCommitType: "generator_commit_type",
  PromptInputMiniHidden: "dreamina_prompt_input_mini_hidden",
  EnableByteEditCutout: "enable_byte_edit_cutout",
  DreaminaInfiniteCanvas: "dreamina_infinite_canvas",
  DreaminaDirectSubscription: "is_direct_subscription",
  DreaminaMobileDownload: "dreamina_mobile_download",
  CanvasEntryTextOptimization: "canvas_entry_text_optimization",
  IsQueueAccelerationEntranceEnhance: "is_queue_acceleration_entrance_enhance",
  DreaminaCreativeAgentParallelStream:
    "dreamina_creative_agent_parallel_stream",
  DreaminaTtpCanvasEntry: "ttp_canvas_entry",
  DreaminaCanvasBlend: "dreamina_canvas_blend",
  DreaminaFreeCanvasEntry: "dreamina_free_canvas_entry",
  DreaminaCanvasPostEditToolStyle: "dreamina_post_edit_tool_style",
  DreaminaInfiniteCanvasRotateClip: "dreamina_infinite_canvas_rotate_clip",
  EnableTempSubject: "enable_temp_subject",
  DreaminaAgenticSeedanceVideoCreation:
    "dreamina_agentic_seedance_video_creation",
  DreaminaOctoEntry: "dreamina_octo_entry",
  DreaminaHubBetaAccess: "dreamina_hub_beta_access",
  DreaminaMultiWorkspace: "dreamina_multi_workspace",
  DreaminaPhoneLogin: "dreamina-phone-login",
  EnableContentGeneratorVoiceInput: "enable_content_generator_voice_input",
  DreaminaGuiEditText: "dreamina_gui_edit_text",
  DreaminaGuiEditTextV2: "dreamina_gui_edit_text_v2",
  DreaminaVideoSmartSuperResolution: "dreamina_video_smart_super_resolution",
  EnableVideoPeAsyncConfirm: "enable_video_pe_async_confirm",
  DreaminaPreAuditMode: "dreamina_pre_audit_mode",
  DreaminaEnableOfficialSubject: "dreamina_enable_official_subject",
  DreaminaWorkbenchOneTap: "dreamina_workbench_one_tap",
  DreaminaOverseaDefaultGeneratorType:
    "dreamina_oversea_default_generator_type",
  SupportsBatchVideoGeneration: "supports_batch_video_generation",
  IsSmartEditEnabled: "is_smart_edit_enabled",
  IsSmartEditEnabledUs: "is_smart_edit_enabled_us",
  XLvwebEnv: "x_lvweb_env",
  DreaminaGeneratePageSsr: "dreamina_generate_page_ssr",
  DreaminaSubscriptionPhase2FullPage: "dreamina_subscription_phase2_full_page",
  DreaminaSubscriptionPhase2CreditMini:
    "dreamina_subscription_phase2_credit_mini",
  DreaminaSubscriptionPhase2MembershipMini:
    "dreamina_subscription_phase2_membership_mini",
  DreaminaSubscriptionPhase2ModelSelectionMini:
    "dreamina_subscription_phase2_model_selection_mini",
  DreaminaSubscriptionPageUpgrade: "dreamina_subscription_page_upgrade",
  SkillDisplayUsageV2: "skill_display_introduction",
  HideAgentThinkingComplete: "hide_agent_thinking_complete",
  DreaminaWebCommerceInterceptFlow: "dreamina_web_commerce_intercept_flow",
  DreaminaOverseaLoginPanel: "dreamina_oversea_login_panel",
  DreaminaLoginFreeCredits: "dreamina_login_free_credits",
  DreaminaIpExemption: "dreamina_ip_exemption",
  VideoDetailCanvasEdit: "video_detail_canvas_edit",
  EnableCreationPlaceholderV2: "enable_creation_placeholder_v2",
};
const c = {
  notifyInitial: true,
};
const m = [
  ["generator_commit_type", "0", c],
  [
    "dreamina_prompt_input_mini_hidden",
    false,
    {
      notifyInitial: true,
      settleOnError: true,
    },
  ],
  ["enable_byte_edit_cutout", false],
  ["dreamina_infinite_canvas", false],
  ["dreamina_mobile_download", false],
  ["canvas_entry_text_optimization", "v0"],
  ["is_queue_acceleration_entrance_enhance", false],
  ["dreamina_creative_agent_parallel_stream", false],
  ["ttp_canvas_entry", false, c],
  [
    "dreamina_canvas_blend",
    {
      enabled: false,
      generate_count: 2,
    },
  ],
  ["dreamina_free_canvas_entry", false],
  ["dreamina_post_edit_tool_style", "v0"],
  ["dreamina_web_commerce_intercept_flow", "v0"],
  ["dreamina_infinite_canvas_rotate_clip", false],
  ["dreamina_agentic_seedance_video_creation", false],
  ["dreamina_octo_entry", false],
  ["dreamina_hub_beta_access", false],
  ["dreamina_multi_workspace", false],
  ["dreamina-phone-login", false],
  ["enable_content_generator_voice_input", false],
  ["dreamina_video_smart_super_resolution", false],
  ["enable_video_pe_async_confirm", false],
  ["dreamina_pre_audit_mode", "v0"],
  ["dreamina_enable_official_subject", false],
  ["dreamina_workbench_one_tap", false],
  ["dreamina_oversea_default_generator_type", ""],
  ["is_smart_edit_enabled", false],
  ["is_smart_edit_enabled_us", false],
  ["x_lvweb_env", ""],
  ["dreamina_generate_page_ssr", false],
  ["hide_agent_thinking_complete", false, c],
  ["skill_display_introduction", false, c],
  ["dreamina_ip_exemption", false],
  ["video_detail_canvas_edit", false, c],
  ["enable_creation_placeholder_v2", false, c],
];
const g = new Map(
  m.map((e) => {
    var [t, defaultValue, options] = e;
    return [
      t,
      {
        defaultValue,
        options,
      },
    ];
  }),
);
g.set("dreamina_oversea_login_panel", {
  defaultValue: "v0",
  options: {
    notifyInitial: true,
    settleOnError: true,
  },
});
g.set("dreamina_login_free_credits", {
  defaultValue: false,
  options: {
    notifyInitial: true,
    settleOnError: true,
  },
});
export class XJ {
  initAndExposeAbTest() {
    m.forEach((e) => {
      var [t, a] = e;
      this.getAbTestValue(t, a).catch(() => undefined);
    });
    for (const e of [
      "dreamina_subscription_phase2_full_page",
      "dreamina_subscription_phase2_credit_mini",
      "dreamina_subscription_phase2_membership_mini",
      "dreamina_subscription_phase2_model_selection_mini",
    ]) {
      this.getAbTestValue(e, false).catch(() => undefined);
    }
    if (!Fr) {
      this.getAbTestValue("dreamina_login_free_credits", false).catch(
        () => undefined,
      );
    }
  }
  getBooleanRecommendTestValue() {
    if (this._getLocalDreaminaRecommend()) {
      return Promise.resolve(true);
    }
    let e;
    let t;
    const a = (e = window) == null ? undefined : e._libra_server_abtest;
    const i =
      a == null || (t = a.dreamina_recommend) == null
        ? undefined
        : t.all_tab_use_rec;
    if (i === undefined) {
      return Promise.resolve(false);
    }
    const n = !!i;
    this._setLocalDreaminaRecommend(n);
    return Promise.resolve(n);
  }
  _getLocalDreaminaRecommend() {
    try {
      let e;
      let t;
      const a =
        (e = (t = this._accountService) == null ? undefined : t.userProfile) !=
        null
          ? e
          : {};
      if (JSON.stringify(a) === "{}") {
        const i = window.localStorage.getItem(
          "dreamina_recommend_hit_not_login",
        );
        return i !== null && JSON.parse(i);
      }
      const { webId = "" } = a != null ? a : {};
      if (!webId) {
        return false;
      }
      const r = window.localStorage.getItem(
        "dreamina_recommend_hit_".concat(webId),
      );
      return r !== null && JSON.parse(r);
    } catch (e) {
      return false;
    }
  }
  _setLocalDreaminaRecommend(e) {
    try {
      let t;
      let a;
      const i =
        (t = (a = this._accountService) == null ? undefined : a.userProfile) !=
        null
          ? t
          : {};
      if (JSON.stringify(i) === "{}" && e) {
        return void window.localStorage.setItem(
          "dreamina_recommend_hit_not_login",
          JSON.stringify(e),
        );
      }
      const { webId = "" } = i != null ? i : {};
      if (webId && e) {
        window.localStorage.setItem(
          "dreamina_recommend_hit_".concat(webId),
          JSON.stringify(e),
        );
      }
    } catch (e) {
      return false;
    }
  }
  _registerExperiment(e, t) {
    const a = g.get(e);
    const i = a ? a.defaultValue : t;
    this._registeredExperiments.set(
      e,
      i != null ? i : this._registeredExperiments.get(e),
    );
    return this._registeredExperiments.get(e);
  }
  _getAbTestValueForCurrentIdentity(e, t) {
    const a = this._getCachedAssignment(e);
    if (a.ready) {
      return Promise.resolve(a.value);
    }
    const _assignmentGeneration = this._assignmentGeneration;
    const n = this._getBootstrapGatewayValue(e);
    if (n !== undefined) {
      const r = n != null ? n : t;
      const o = this._getGatewayAssignmentStatus(e, t);
      return Promise.resolve(
        this._commitAssignment(e, r, _assignmentGeneration, o),
      );
    }
    if (!this._teaAssignmentAccessEnabled) {
      const s = this._isPageStableExperiment(e)
        ? "pending-exposure"
        : "provisional";
      return Promise.resolve(
        this._commitAssignment(e, t, _assignmentGeneration, s),
      );
    }
    const l = this._inFlightRequests.get(e);
    if ((l == null ? undefined : l.generation) === _assignmentGeneration) {
      return l.promise;
    }
    const promise = this._teaAdapterService
      .getABTestVar(e, t)
      .then(
        (a) => {
          if (
            !this._isPageStableExperiment(e) &&
            _assignmentGeneration !== this._assignmentGeneration
          ) {
            return this._getAbTestValueForCurrentIdentity(e, t);
          }
          var n = a != null ? a : t;
          return this._commitAssignment(e, n, _assignmentGeneration, "settled");
        },
        (a) => {
          var n;
          var r;
          if (
            !this._isPageStableExperiment(e) &&
            _assignmentGeneration !== this._assignmentGeneration
          ) {
            return this._getAbTestValueForCurrentIdentity(e, t);
          }
          if (
            (r = g.get(e)) == null || (n = r.options) == null
              ? undefined
              : n.settleOnError
          ) {
            return this._commitAssignment(
              e,
              t,
              _assignmentGeneration,
              "settled",
            );
          }
          throw a;
        },
      )
      .finally(() => {
        var t;
        if (
          ((t = this._inFlightRequests.get(e)) == null
            ? undefined
            : t.generation) === _assignmentGeneration
        ) {
          this._inFlightRequests.delete(e);
        }
      });
    this._inFlightRequests.set(e, {
      generation: _assignmentGeneration,
      promise,
    });
    return promise;
  }
  _getCachedAssignment(e) {
    const t = this._assignments.get(e);
    if (
      t &&
      (this._isPageStableExperiment(e) ||
        (t.generation === this._assignmentGeneration &&
          (t.status !== "provisional" || !this._teaAssignmentAccessEnabled)))
    ) {
      return {
        ready: true,
        value: t.value,
      };
    }
    return {
      ready: false,
    };
  }
  _getBootstrapGatewayValue(e) {
    let t;
    if (
      typeof window !== "undefined" &&
      (this._isPageStableExperiment(e) || this._assignmentGeneration === 0)
    ) {
      if ((t = window._libra_abtest) == null) {
        return undefined;
      }
      return t[e];
    }
  }
  _commitAssignment(e, t, generation, status) {
    let n;
    const r = g.get(e);
    const o = this._assignments.get(e);
    if (this._isPageStableExperiment(e) && o) {
      return o.value;
    }
    if (
      !this._isPageStableExperiment(e) &&
      generation !== this._assignmentGeneration
    ) {
      const s = this._getCachedAssignment(e);
      if (s.ready) {
        return s.value;
      }
      return t;
    }
    const ready = this._getCachedAssignment(e).ready;
    const d = o == null ? undefined : o.value;
    this._assignments.set(e, {
      generation,
      status,
      value: t,
    });
    if (
      !(
        (ready && Object.is(d, t)) ||
        (generation === 0 &&
          !(r == null || (n = r.options) == null ? undefined : n.notifyInitial))
      )
    ) {
      this._onDidChangeConfiguration.fire({
        changedConfig: {
          1: {
            [e]: t,
          },
        },
        source: 1,
        previousConfig: {
          1: {
            [e]: d,
          },
        },
        affectedSections: new Set([e]),
      });
    }
    return t;
  }
  _getAccountIdentity() {
    return `${this._accountService.hasLogin ? "user" : "anonymous"}:`.concat(
      this._accountService.uniqueId,
    );
  }
  _canRequestTeaAssignments() {
    return (
      !this._cookieConsentService ||
      (this._cookieConsentService.ready && this._cookieConsentService.enable)
    );
  }
  _getGatewayAssignmentStatus(e, t) {
    if (this._teaAssignmentAccessEnabled) {
      this._teaAdapterService.getABTestVar(e, t).catch(() => undefined);
      return "settled";
    }
    return "pending-exposure";
  }
  _isPageStableExperiment(e) {
    let t;
    let a;
    return (
      ((a = g.get(e)) == null || (t = a.options) == null
        ? undefined
        : t.lifecycle) === "page"
    );
  }
  constructor(e, t, a, i) {
    var n;
    var o;
    var s = this;
    this._teaAdapterService = e;
    this._onDidChangeConfiguration = t;
    this._accountService = a;
    this._cookieConsentService = i;
    this._assignments = new Map();
    this._registeredExperiments = new Map();
    this._inFlightRequests = new Map();
    this._assignmentGeneration = 0;
    this.refreshAfterAccountIdentityChange = () => {
      this._assignmentGeneration += 1;
      for (var e of this._inFlightRequests.keys()) {
        if (!this._isPageStableExperiment(e)) {
          this._inFlightRequests.delete(e);
        }
      }
      for (var [t, a] of this._registeredExperiments) {
        if (!this._isPageStableExperiment(t)) {
          this._getAbTestValueForCurrentIdentity(t, a).catch(() => undefined);
        }
      }
    };
    this.getBooleanAbTestValue = (e, t) => !!this.getAbTestValueSync(e, t);
    this.getCachedBooleanAbTestValue = function (e) {
      let t;
      const a =
        arguments.length > 1 && arguments[1] !== undefined && arguments[1];
      const i = s._getCachedAssignment(e);
      if (i.ready) {
        return !!i.value;
      }
      return !!((t = s._getBootstrapGatewayValue(e)) != null ? t : a);
    };
    this.getAbTestValue = (e, t) => {
      var a = this._registerExperiment(e, t);
      return this._getAbTestValueForCurrentIdentity(e, a);
    };
    this.getAbTestValueSync = (e, t) => {
      var a = this._registerExperiment(e, t);
      var i = this._getCachedAssignment(e);
      if (i.ready) {
        return i.value;
      }
      var n = this._getBootstrapGatewayValue(e);
      if (n !== undefined) {
        var r = n != null ? n : a;
        var o = this._getGatewayAssignmentStatus(e, a);
        return this._commitAssignment(e, r, this._assignmentGeneration, o);
      }
      this._getAbTestValueForCurrentIdentity(e, a).catch(() => undefined);
      return a;
    };
    this.isAbTestValueReady = (e) =>
      this._getCachedAssignment(e).ready ||
      this._getBootstrapGatewayValue(e) !== undefined;
    this.getBooleanAbTestValueAsync = (e, t) =>
      r
        ._(function* () {
          return !!(yield this.getAbTestValue(e, !!t));
        })
        .call(this);
    this._handleCookieConsentStateChange = () => {
      var e = this._canRequestTeaAssignments();
      if (
        e !== this._teaAssignmentAccessEnabled &&
        ((this._teaAssignmentAccessEnabled = e), e)
      ) {
        for (var [t, a] of this._registeredExperiments) {
          var i = this._assignments.get(t);
          if (
            i &&
            (this._isPageStableExperiment(t) ||
              i.generation === this._assignmentGeneration)
          ) {
            if (i.status === "pending-exposure") {
              i.status = "settled";
              this._teaAdapterService.getABTestVar(t, a).catch(() => undefined);
            } else if (
              !(this._isPageStableExperiment(t) || i.status !== "provisional")
            ) {
              this._inFlightRequests.delete(t);
              this._getAbTestValueForCurrentIdentity(t, a).catch(
                () => undefined,
              );
            }
          }
        }
      }
    };
    this._teaAssignmentAccessEnabled = this._canRequestTeaAssignments();
    if ((n = this._cookieConsentService) != null) {
      n.onReady(this._handleCookieConsentStateChange);
    }
    if ((o = this._cookieConsentService) != null) {
      o.onEnableChange(this._handleCookieConsentStateChange);
    }
  }
}
XJ = o.Cg(
  [
    o.Qj(2, c_1),
    o.Qj(3, l.r),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      typeof ITeaAdapterService === "undefined" ? Object : ITeaAdapterService,
      typeof Emitter === "undefined" ? Object : Emitter,
      c_1 === undefined ? Object : c_1,
    ]),
  ],
  XJ,
);
