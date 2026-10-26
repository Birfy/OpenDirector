import n from "NY";
import s from "QWK";
import a from "Qey";
import r from "AAv";
import o from "kT";
import l from "o7";
import c from "xi";
import d from "Kt";
import u from "Hr";
import h from "eE";
import m from "aaw";
import p from "dw4";
class g {
  get appConfig() {
    return this._appConfig;
  }
  get isLoading() {
    return this._isConfigLoading;
  }
  setAppConfig(e) {
    this._appConfig = e;
  }
  setIsLoading(e) {
    this._isConfigLoading = e;
  }
  resetData() {
    this._appConfig = null;
    this._isConfigLoading = false;
  }
  constructor() {
    this._appConfig = null;
    this._isConfigLoading = false;
    p.l_(this);
  }
}
export class Z1 extends l.jG {
  get data() {
    return this._appDownloadDataStore;
  }
  get configKey() {
    return r.r1.MobileAppDownload;
  }
  get configIndex() {
    return 1;
  }
  resetData() {
    this._appDownloadDataStore.resetData();
  }
  fetchAppDownloadConfig() {
    return n
      ._(function* () {
        this._appDownloadDataStore.setIsLoading(true);
        try {
          const e = yield this._getAppDownloadConfig();
          this._appDownloadDataStore.setAppConfig(e);
        } catch (error) {
          c.V.error("获取应用下载配置失败:", error);
          this._appDownloadDataStore.setAppConfig(null);
        } finally {
          this._appDownloadDataStore.setIsLoading(false);
        }
      })
      .call(this);
  }
  copyDownLinkToClipboard() {
    return n
      ._(function* () {
        let e;
        this.reportAppDownloadCopyLink();
        if ((e = this.data.appConfig) == null ? undefined : e.downloadUrl) {
          yield h.$(this.data.appConfig.downloadUrl);
          u.l.success(
            a.Ay.t(
              "web_dre_m10n_management_page_tab_order_history_copy_toast",
              {},
              "复制成功",
            ),
          );
        } else {
          u.l.error(a.Ay.t("web_toast_copy_failed", {}, "复制失败"));
        }
      })
      .call(this);
  }
  reportAppDownloadShow() {
    m.U(this._containerService, {
      action: "show",
    });
  }
  reportAppDownloadClick() {
    m.U(this._containerService, {
      action: "click",
    });
  }
  reportAppDownloadCopyLink() {
    m.U(this._containerService, {
      action: "copylink",
    });
  }
  _getAppDownloadConfig() {
    return n
      ._(function* () {
        const e = yield this._dreaminaConfigService.getImcConfigByKey(
          this.configKey,
        );
        if (!e) {
          throw Error("获取应用下载配置失败");
        }
        const t = Array.isArray(e) ? e[this.configIndex] : e;
        if (!t) {
          throw Error("获取应用下载配置失败");
        }
        const { enableDownload, showBetaTag, modalImage, downloadUrl } = t;
        return {
          enableDownload,
          showBetaTag,
          imageUrl: modalImage,
          downloadUrl,
        };
      })
      .call(this);
  }
  constructor(e, t) {
    super();
    this._containerService = e;
    this._dreaminaConfigService = t;
    this._appDownloadDataStore = new g();
    this.fetchAppDownloadConfig();
  }
}
Z1 = s.Cg(
  [
    s.Qj(0, d._),
    s.Qj(1, o.R),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      d._ === undefined ? Object : d._,
      o.R === undefined ? Object : o.R,
    ]),
  ],
  Z1,
);
export class P7 extends Z1 {
  get configKey() {
    return r.r1.MobileAppDownloadNew;
  }
  get configIndex() {
    return 0;
  }
  constructor(e, t) {
    super(e, t);
  }
}
P7 = s.Cg(
  [
    s.Qj(0, d._),
    s.Qj(1, o.R),
    s.Sn("design:type", Function),
    s.Sn("design:paramtypes", [
      d._ === undefined ? Object : d._,
      o.R === undefined ? Object : o.R,
    ]),
  ],
  P7,
);
