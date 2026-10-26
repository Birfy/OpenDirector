import n from "oa";
import s from "Qey";
function a(e, t, i) {
  const n = s.Ay.t(e, t, i);
  if (n && n !== e && n !== "[none]") {
    return n;
  }
  return i;
}
export function B() {
  const e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return n._(
    {
      cliAndPluginSettings: a(
        "web_mainframe_cli_and_plugins",
        {},
        "即梦插件与CLI",
      ),
      systemSettings: a("web_mainframe_system_settings", {}, "系统设置"),
      productUpdatesAndTutorials: a(
        "web_mainframe_product_updates_and_tutorials",
        {},
        "产品更新及教程",
      ),
      teachingZone: a("web_tutorial_center", {}, "教程专区"),
      cliConfigTool: a("web_dreamina_cli", {}, "即梦CLI"),
      lightMode: a("web_home_nav_bar_theme", {}, "浅色模式"),
      darkMode: a("web_home_nav_bar_theme_dark_mode", {}, "深色模式"),
      followSystem: a("web_canva_switch_follow_system", {}, "跟随系统"),
      systemLight: a("web_canva_switch_follow_system_light", {}, "浅色"),
      systemDark: a("web_canva_switch_follow_system_dark", {}, "深色"),
      language: a("language_mweb_new", {}, "Language"),
      watermark: a("drm_web_ai_watermark_title", {}, "AI生成水印设置"),
      modelTraining: a(
        "dreamina_web_improvemodeloptout_button_improvemodelperformance",
        {},
        "帮助模型改进效果",
      ),
      cli: a("web_dreamina_cli", {}, "即梦CLI"),
      dreaminaLab: a("web_dreamina_lab_menu_entry", {}, "即梦实验室"),
      dreaminaLabBeta: a("web_octo_beta_tag_beta", {}, "Beta"),
      dreaminaClient: a(
        "web_dreamina_desktop_download_menu_entry",
        {},
        "客户端下载",
      ),
      bindCapcut: "",
      benefitRedemption: a(
        "course_redeem_list_benefit_redemption",
        {},
        "权益兑换",
      ),
      updateLog: a("web_update_doc", {}, "更新日志"),
      tutorialCenter: a("web_tutorial_center", {}, "教程专区"),
      downloadApp: a("web_download_app", {}, "下载 App"),
      downloadAppTitle: a("web_download_app_qr_title", {}, "扫码下载即梦App"),
      downloadAppDescription: a(
        "web_download_app_qr_description",
        {},
        "扫码或复制链接到手机端",
      ),
      copyLink: a("web_new_ccug_copy_link", {}, "复制链接"),
      other: a("web_revision_other", {}, "其他"),
      classroom: a("course_redeem_list_dreamina_academy", {}, "即梦课堂"),
      authReqPortal: a("auth_exemption_application", {}, "版权授权管理"),
      protocol: a("web_home_legal_entry", {}, "平台协议"),
      qualification: a("web_team_qualification_verify", {}, "资历认证"),
      logout: a("web_new_login_quit_button", {}, "退出"),
      userAgreement: a("dre_m10n_sub_legal_tos", {}, "用户服务协议"),
      privacyPolicy: a("web_new_my_privacy_policy_tab", {}, "隐私政策"),
      communityGuidelines: a(
        "web_home_legal_community_guidelines",
        {},
        "社区自律公约",
      ),
      userSafetyGuide: a(
        "web_home_legal_user_safety_guide",
        {},
        "用户安全指南",
      ),
      cookiesPolicy: a("web_home_legal_cookies_policy", {}, "Cookies Policy"),
      aiFunctionClaim: a(
        "web_home_legal_ai_feature_notice",
        {},
        "AI功能使用须知",
      ),
      dsaCompliance: a(
        "dsa_compliance",
        {},
        "符合《数字服务法案》 (DSA) 的要求",
      ),
    },
    e,
  );
}
