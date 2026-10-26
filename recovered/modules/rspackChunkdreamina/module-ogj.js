import "XlT";
import { A } from "Gr";
import { A as A_1 } from "tlb";
export { U as U8 } from "./module-VvT.js";
export { A as yJ };
export { A_1 as Ad };
const n =
  "https://sf16-web-login-neutral.capcutstatic.com/obj/capcut-web-login-static/bric-captcha-capcut/core-captcha/capcut-row/2.35.11/1.0.0.27/captcha.js";
const i =
  "https://sf16-web-tos-buz.capcutcdn-us.com/obj/capcut-web-buz-tx/bric-captcha-capcut/core-captcha/capcut-ttp/2.35.11/2.0.0.37/captcha.js";
const s =
  "https://sf16-web-login-neutral.capcutstatic.com/obj/capcut-web-login-static/webmssdk_cctbc/1.0.0.71/webmssdk.js";
const o = {
  sg: n,
  mya: n,
  in: n,
  ie: n,
  no1a: n,
  ttp: i,
  va: n,
  ttp2: i,
};
export var N9 = {
  region: "sg",
  host: "https://www.capcut.com",
  commonOptions: {
    aid: 348188,
    iid: "0",
    did: "0",
  },
  captchaHost: {
    sg: "//vcs-sg.capcutapi.com",
    ttp: "//vcs.capcutapi.us",
  },
  captchaOptions: {
    host: "//vcs-sg.capcutapi.com",
    channelDomain: "//mcs-normal-sg.capcutapi.com",
    slardarDomain: A.domain,
    slardarPluginPrefix: A.pluginPathPrefix,
    webmssdkPath: s,
    starlingZoneHost: "//starling-normal-sg.capcutapi.com",
  },
  configOptions: {
    executor: "script",
    settingHost: "//vcs-sg.capcutapi.com",
    fallback_static_domain: o,
    static_domain: o,
  },
  webmssdk: {
    aid: 348188,
    region: "sg-capcut",
    url: s,
    apiHost: "https://mssdk-sg.capcutapi.com",
    slardarConfig: {
      enableSlardar: true,
      enableLazyload: false,
      settingLocation: 4,
      initConfigOverrides: {
        slardarDomain: A.domain,
        slardarPluginPrefixPath: A.pluginPathPrefix,
      },
    },
  },
};
export var tP = {
  host: "starling-normal-sg.capcutapi.com",
  clientOptions: {
    apiKey: "38d171503ca311ee866b4ff6c924e0e2",
    namespace: ["WebClient"],
    zoneHost: "https://starling-normal-sg.capcutapi.com",
  },
  nodeOptions: {
    projectName: "CapCut_Web",
  },
  intlOptions: {
    ns: ["WebClient"],
    defaultNS: "WebClient",
  },
  links: {
    ccCookiesLink:
      "https://capcut.com/clause/cookies-policy?lang=en&store_region=gb",
    ccLegalLink: "https://www.capcut.com/legal/webform/privacy-request/en",
    jyBizEmail: "jianying.business@bytedance.com",
    ccUserAgreementLink:
      "https://www.capcut.com/clause/terms-of-service?lang=en",
    ccWebLink: "capcut.com",
    ccWebShortLink: "capcut.com",
    commerceProEmail: "commercepro.support@capcut.com",
    commerceProSite: "commercepro.capcut.com",
    dreaminaEmail: "dreamina@bytedance.com",
    dreaminaCookiesPolicyLink:
      "https://www.capcut.com/clause/dreamina-cookies-policy?store_region=&lang=en",
    dreaminaGoogleEmail: "dreamina@google.com",
    ccSupportEmail: "capcut.support@bytedance.com",
    ccIpEmail: "capcut_ip_reports@bytedance.com",
    ccCreatorEmail: "cc.creator-operation@bytedance.com",
    payEmail: "jy_pay@bytedance.com",
    ccActivityEmail: "CapCut.Activity@bytedance.com",
    ccConventionLink:
      "https://www.capcut.com/clause/community-guideline?lang=en",
    vipEmail: "vipsupport@wps.com",
    jyServiceEmail: "jianying.service@bytedance.com",
    ccComplianceLink: "https://www.capcut.com/clause/capcut-us-compliance-page",
    ccPpLink: "https://www.capcut.com/clause/privacy-policy?lang=en",
  },
};
export var N3 = {
  TCC_URL_COMMON:
    "https://sf16-tcc-tos-sg.byteoversea.com/obj/tcc-config-web-alisg",
  TCC_URL_PLATFORM_DEFAULT:
    "https://sf16-tcc-tos-sg.byteoversea.com/obj/tcc-config-web-alisg/tcc-v2-data-ies.lvweb_os.platform_index-default",
  TCC_URL_TT_WEB_BUSINESS:
    "https://sf16-tcc-tos-sg.byteoversea.com/obj/tcc-config-web-alisg/tcc-v2-data-ies.capcut.web-business",
  TCC_URL_IMC_DEFAULT:
    "https://sf16-tcc-tos-sg.byteoversea.com/obj/tcc-config-web-alisg/tcc-v2-data-capcut.web.imc-default",
};
export var zG = {
  feedApiHost: "feed-api-sg.capcut.com",
  frontierApiHost: "frontier-sg.capcut.com",
  imagexApiHost: "imagex-normal-sg.capcutapi.com",
  ttwidApiHost: "ttwid-normal-sg.capcutapi.com",
  vmwebApiHost: "vmweb-normal-sg.capcutapi.com",
  mcsHost: "mcs-normal-sg.capcutapi.com",
  epidemicsoundDomain: "epidemicsound.capcut-app.com",
};
