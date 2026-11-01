import o from "qD0";
let a;
if (require.j == "wl4") var i = require("Lr");
const n = require("bT");
const l = (e, t, r) => {
  let a;
  if ((a = typeof t !== "symbol" ? t + "" : t) in e) {
    Object.defineProperty(e, a, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r,
    });
  } else {
    e[a] = r;
  }
  return r;
};
let m =
  require.j == "wl4"
    ? {
        firstPartyAnalytics: "firstparty_analytics",
        GoogleAnalytics: "ga",
        bingAnalytics: "bing",
        facebookPixel: "fbp",
        tiktokAds: "ttads",
        twitterPixel: "twitter",
        pinterestTag: "pinterest",
        pwn: "pwn",
        macanPixel: "macan",
      }
    : null;
function s(e) {
  return {
    firstPartyAnalytics: !!e[m.firstPartyAnalytics],
    GoogleAnalytics: !!e[m.GoogleAnalytics],
    bingAnalytics: !!e[m.bingAnalytics],
    facebookPixel: !!e[m.facebookPixel],
    tiktokAds: !!e[m.tiktokAds],
    twitterPixel: !!e[m.twitterPixel],
    pinterestTag: !!e[m.pinterestTag],
    pwn: !!e[m.pwn],
    macanPixel: !!e[m.macanPixel],
  };
}
let d =
  require.j == "wl4"
    ? {
        google: "ga",
        bing: "bing",
        meta: "fbp",
        tiktok: "ttads",
        pinterest: "pinterest",
        pwn: "pwn",
        macan: "macan",
      }
    : null;
let u = "cookie-settings";
let p = require.j == "wl4" ? new Set([u, "legal-bypass"]) : null;
let C = "lv-cookie-consent-style-overrides";
class v {
  constructor() {
    l(this, "_settings", s({}));
    l(this, "_pixelManager", null);
    l(this, "_ready", false);
    l(this, "_onChangeSet", new Set());
    l(this, "_onReadyOnceSet", new Set());
  }
  onChange(e) {
    this._onChangeSet.add(e);
    try {
      e(this._settings, this._pixelManager, this._ready);
    } catch (error) {
      console.warn(error);
    }
    return () => {
      this.offChange(e);
    };
  }
  offChange(e) {
    this._onChangeSet.delete(e);
  }
  getPixelManager() {
    return this._pixelManager;
  }
  get ready() {
    return this._ready;
  }
  onReadyOnce(e) {
    if (this._ready) {
      try {
        e(this._settings, this._pixelManager);
      } catch (error) {
        console.warn(error);
      }
      return () => {};
    }
    this._onReadyOnceSet.add(e);
    return () => {
      this._onReadyOnceSet.delete(e);
    };
  }
  async loadCookieBanner(e) {
    if (typeof window === "undefined") {
      return;
    }
    (() => {
      if (typeof document === "undefined" || document.getElementById(C)) {
        return;
      }
      let e = document.createElement("style");
      e.id = C;
      e.textContent = `
    .tiktok-cookie-banner.paas_capcut button {
      border-radius: 8px;
    }
  `;
      document.head.appendChild(e);
    })();
    let {
      appId,
      gtmContainerId,
      locale,
      theme,
      enableTea = false,
      disableBannerConfig,
      pixelManagerOptions,
    } = e;
    let m = {
      gtmId: gtmContainerId,
      ...pixelManagerOptions,
    };
    let hideBannerAccessKey = this._getHideBannerAccessKey(disableBannerConfig);
    let isCookieSettingsPage = location.pathname === "/cookie-settings";
    let onRenderCompleted = this._createOnRenderCompleted({
      hideBannerAccessKey,
      isCookieSettingsPage,
    });
    try {
      await o.default.loadCookieBanner({
        appId,
        apiDomain: location.origin,
        customTheme: theme,
        locale,
        enableTea,
        onConsentGet: async (e) => {
          let r = s(e);
          try {
            await this._initPixelManager(appId, e, m);
          } catch (error) {
            console.warn(error);
          }
          this._notifyConsentReady(r);
        },
        onRenderCompleted,
      });
    } catch (error) {
      console.warn(error);
    }
  }
  updateBannerLocale(e) {
    o.default.updateBannerLocale(e);
  }
  _getHideBannerAccessKey(e) {
    let { hideUI = false, disabledAccessKey } = e ?? {};
    let a = typeof disabledAccessKey === "string" && p.has(disabledAccessKey);
    if (hideUI) {
      if (a) {
        return disabledAccessKey;
      }
      console.warn(
        `[lv-cookie-consent] hideUI is ignored because disabledAccessKey "${String(disabledAccessKey)}" is missing or not in whitelist`,
      );
    }
  }
  _createOnRenderCompleted({ hideBannerAccessKey, isCookieSettingsPage }) {
    let r = [];
    if (isCookieSettingsPage) {
      r.push(() => {
        o.default.setDisabled(true, u);
        o.default.openSettingModal(true);
      });
    } else if (hideBannerAccessKey) {
      r.push(() => {
        o.default.setDisabled(true, hideBannerAccessKey);
      });
    }
    return () => r.forEach((e) => e());
  }
  async _initPixelManager(e, t, r) {
    let a;
    if (this._pixelManager) {
      i.m.reset();
      this._pixelManager = null;
    }
    let o = Object.entries(d)
      .filter(([, e]) => e && t[e])
      .map(([e]) => e);
    if (o.length !== 0) {
      this._pixelManager = i.m.createByConsent(String(e), o, r);
      await ((a = this._pixelManager) == null ? undefined : a.enable());
    }
  }
  _notifyConsentReady(e) {
    for (let t of ((this._settings = e),
    (this._ready = true),
    Array.from(this._onChangeSet))) {
      try {
        t(e, this._pixelManager, this._ready);
      } catch (error) {
        console.warn(error);
      }
    }
    let t = Array.from(this._onReadyOnceSet);
    for (let r of (this._onReadyOnceSet.clear(), t)) {
      try {
        r(e, this._pixelManager);
      } catch (error) {
        console.warn(error);
      }
    }
  }
}
export let Ce =
  require.j == "wl4"
    ? () => {
        var e;
        if (!a && ((a = new v()), typeof window !== "undefined")) {
          if (window.ccWebCookieConsentSingleton) {
            let t = Error("ccWebCookieConsentSingleton already exists");
            console.error(t);
            if (
              (e = window == null ? undefined : window.ccWebSlardar) != null
            ) {
              e.call(window, "captureException", t, {
                script: "ccWebCookieConsentSingleton",
              });
            }
          } else {
            window.ccWebCookieConsentSingleton = a;
          }
        }
        return a;
      }
    : null;
export const Tl = "GTM-NP6V2MGS";
export const gd = ({
  locale,
  appId,
  theme,
  gtmContainerId,
  enableTea = false,
  pixelManagerOptions,
  disableBannerConfig,
}) => {
  n.useEffect(() => {
    Ce().loadCookieBanner({
      locale,
      appId,
      theme,
      gtmContainerId,
      enableTea,
      pixelManagerOptions,
      disableBannerConfig,
    });
  }, [
    appId,
    theme,
    gtmContainerId,
    enableTea,
    pixelManagerOptions,
    disableBannerConfig,
  ]);
  n.useEffect(() => {
    Ce().updateBannerLocale(locale);
  }, [locale]);
};
