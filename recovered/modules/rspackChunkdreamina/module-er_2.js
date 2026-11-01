import n from "NY";
import i from "QWK";
import a from "IDO";
import s from "Kt";
import o from "g3t";
import c from "zbK";
import l from "Lww";
import d from "Ux";
import u from "f0";
import p from "YH";
import m from "TX";
import { q } from "./module-j2.js";
import { V } from "./module-IeJ.js";
import v from "oh";
import b from "jh7";
import _ from "Iv";
import y from "hag";
import f from "EYk";
const A = "dreamina_vip_entrance_modal";
const x = "dreamina_register_benefit_modal";
const w = "group_credit_package";
function R(e) {
  return (
    (e == null ? undefined : e.activityId) ||
    (e == null ? undefined : e.activity_id) ||
    ""
  );
}
class k {
  _getResourcePositionMessage() {
    return n
      ._(function* () {
        if (!this._commercialResourcePositionService) {
          this._resourceText = "";
          this._resourceJumpConfig = undefined;
          this._resourceReportParams = undefined;
          return;
        }
        let e;
        let r;
        let t;
        let n;
        const i =
          yield this._commercialResourcePositionService.queryResourcePosition({
            resourceKeys: [w],
          });
        if (!i.ok) {
          this._resourceText = "";
          this._resourceJumpConfig = undefined;
          this._resourceReportParams = undefined;
          return;
        }
        const a =
          (r = i.value) == null || (e = r.resourceInfo) == null
            ? undefined
            : e.groupCreditPackage;
        const s = a == null ? undefined : a.material;
        const o = (s == null ? undefined : s.content) || "";
        this._resourceText = o;
        this._resourceJumpConfig = {
          jumpType: m.MS(s == null ? undefined : s.jumpType),
          jumpSchema:
            s == null || (t = s.jumpSchema) == null ? undefined : t.trim(),
        };
        this._resourceReportParams = {
          resourceKey: w,
          activityId: R(a),
          deeplink:
            s == null || (n = s.jumpSchema) == null ? undefined : n.trim(),
        };
      })
      .call(this);
  }
  _getVipEntranceModalResourcePosition() {
    return n
      ._(function* () {
        if (!this._commercialResourcePositionService) {
          this._vipEntranceModalTextConfig = undefined;
          this._vipEntranceModalJumpConfig = undefined;
          this._vipEntranceModalReportParams = undefined;
          return;
        }
        let e;
        let r;
        let t;
        let n;
        let i;
        let a;
        let s;
        let o;
        let c;
        const l =
          yield this._commercialResourcePositionService.queryResourcePosition({
            resourceKeys: [A],
          });
        if (!l.ok) {
          this._vipEntranceModalTextConfig = undefined;
          this._vipEntranceModalJumpConfig = undefined;
          this._vipEntranceModalReportParams = undefined;
          return;
        }
        const d =
          (n = l.value) == null || (t = n.resourceInfo) == null
            ? undefined
            : t.dreaminaVipEntranceModal;
        const u = d == null ? undefined : d.material;
        const p =
          (e = u == null || (i = u.title) == null ? undefined : i.trim()) !=
          null
            ? e
            : "";
        const h =
          (r = u == null || (a = u.desc) == null ? undefined : a.trim()) != null
            ? r
            : "";
        const g = u == null || (s = u.btnText) == null ? undefined : s.trim();
        if (!p || !h) {
          this._vipEntranceModalTextConfig = undefined;
          this._vipEntranceModalJumpConfig = undefined;
          this._vipEntranceModalReportParams = undefined;
          return;
        }
        this._vipEntranceModalTextConfig = {
          title: p,
          desc: h,
          btnText: g,
        };
        this._vipEntranceModalJumpConfig = {
          jumpType: m.MS(u == null ? undefined : u.jumpType),
          jumpSchema:
            u == null || (o = u.jumpSchema) == null ? undefined : o.trim(),
        };
        this._vipEntranceModalReportParams = {
          resourceKey: A,
          activityId: R(d),
          deeplink:
            u == null || (c = u.jumpSchema) == null ? undefined : c.trim(),
        };
      })
      .call(this);
  }
  _getRegisterBenefitModalResourcePosition() {
    return n
      ._(function* () {
        if (!this._commercialResourcePositionService) {
          this._registerBenefitModalTextConfig = undefined;
          this._registerBenefitModalJumpConfig = undefined;
          this._registerBenefitModalReportParams = undefined;
          return;
        }
        let e;
        let r;
        let t;
        let n;
        let i;
        let a;
        let s;
        let o;
        let c;
        const l =
          yield this._commercialResourcePositionService.queryResourcePosition({
            resourceKeys: [x],
          });
        if (!l.ok) {
          this._registerBenefitModalTextConfig = undefined;
          this._registerBenefitModalJumpConfig = undefined;
          this._registerBenefitModalReportParams = undefined;
          return;
        }
        const d =
          (n = l.value) == null || (t = n.resourceInfo) == null
            ? undefined
            : t.dreaminaRegisterBenefitModal;
        const u = d == null ? undefined : d.material;
        const p =
          (e = u == null || (i = u.title) == null ? undefined : i.trim()) !=
          null
            ? e
            : "";
        const h =
          (r = u == null || (a = u.content) == null ? undefined : a.trim()) !=
          null
            ? r
            : "";
        const g = u == null || (s = u.button) == null ? undefined : s.trim();
        if (!p || !h) {
          this._registerBenefitModalTextConfig = undefined;
          this._registerBenefitModalJumpConfig = undefined;
          this._registerBenefitModalReportParams = undefined;
          return;
        }
        this._registerBenefitModalTextConfig = {
          title: p,
          desc: h,
          btnText: g,
        };
        this._registerBenefitModalJumpConfig = {
          jumpType: m.MS(u == null ? undefined : u.jumpType),
          jumpSchema:
            u == null || (o = u.jumpSchema) == null ? undefined : o.trim(),
        };
        this._registerBenefitModalReportParams = {
          resourceKey: x,
          activityId: R(d),
          deeplink:
            u == null || (c = u.jumpSchema) == null ? undefined : c.trim(),
        };
      })
      .call(this);
  }
  _getVipPriceList() {
    const vipPriceList = this._commercialGoodsService.vipPriceList;
    if (vipPriceList == null ? undefined : vipPriceList.length) {
      return Promise.resolve(vipPriceList);
    }
    return new Promise((resolve) => {
      this._commercialGoodsService.onVipPriceListChange((r) => {
        var { scene, list } = r;
        if (scene === c.fq.Personal) {
          resolve(list);
        }
      });
    });
  }
  constructor(e, r, t, i, a, s, o, c) {
    this._containerService = e;
    this._commercialGoodsService = r;
    this._membershipService = t;
    this._commercialCreditService = i;
    this._accountPort = a;
    this._commercialStrategyService = s;
    this._dreaminaFissionDataService = o;
    this._commercialResourcePositionService = c;
    this._isHitCreditPackageGroupExperiment = false;
    this._isDailyCreditReceiveEnabled = false;
    this._isFetchingCommonResource = false;
    this._resourceText = "";
    this._isCapCutPCEmbed = l.Z();
    this._DEVICE_ID_STORAGE_KEY = "dreamina_ccpc_device_id";
    this.getModal = (e) =>
      n
        ._(function* () {
          let r;
          let t;
          let n;
          let i;
          let a;
          let s;
          let o;
          let c;
          let l;
          let d;
          let u;
          let p;
          let g;
          let v;
          let b;
          let _;
          let y;
          let f;
          let A;
          let x;
          let w;
          if (yield this._getCanShowPromoteModal(e)) {
            return q({
              containerService: this._containerService,
              promotePrice: this._promotePrice,
              commerceCreditService: this._commercialCreditService,
              membershipService: this._membershipService,
              accountSnapshot: this._accountPort.getSnapshot(),
              commercialStrategyService: this._commercialStrategyService,
              isHitCreditPackageGroupExperiment:
                this._isHitCreditPackageGroupExperiment,
              isDailyCreditReceiveEnabled: this._isDailyCreditReceiveEnabled,
              resourceText: this._resourceText,
              textConfig:
                (r = this._registerBenefitModalTextConfig) != null
                  ? r
                  : this._vipEntranceModalTextConfig,
              jumpConfig:
                (t =
                  (n = this._registerBenefitModalJumpConfig) != null
                    ? n
                    : this._vipEntranceModalJumpConfig) != null
                  ? t
                  : this._resourceJumpConfig,
              reportResourceKey:
                (i =
                  (a =
                    (d = this._registerBenefitModalReportParams) == null
                      ? undefined
                      : d.resourceKey) != null
                    ? a
                    : (u = this._vipEntranceModalReportParams) == null
                      ? undefined
                      : u.resourceKey) != null
                  ? i
                  : (p = this._resourceReportParams) == null
                    ? undefined
                    : p.resourceKey,
              reportActivityId:
                (s =
                  (o =
                    (g = this._registerBenefitModalReportParams) == null
                      ? undefined
                      : g.activityId) != null
                    ? o
                    : (v = this._vipEntranceModalReportParams) == null
                      ? undefined
                      : v.activityId) != null
                  ? s
                  : (b = this._resourceReportParams) == null
                    ? undefined
                    : b.activityId,
              reportDeeplink:
                (c =
                  (l =
                    (_ = this._registerBenefitModalReportParams) == null
                      ? undefined
                      : _.deeplink) != null
                    ? l
                    : (y = this._vipEntranceModalReportParams) == null
                      ? undefined
                      : y.deeplink) != null
                  ? c
                  : (f = this._resourceReportParams) == null
                    ? undefined
                    : f.deeplink,
              defaultSubscriptionTab: m.Qt(
                ((A = this._registerBenefitModalJumpConfig) == null
                  ? undefined
                  : A.jumpSchema) ||
                  ((x = this._vipEntranceModalJumpConfig) == null
                    ? undefined
                    : x.jumpSchema) ||
                  ((w = this._resourceJumpConfig) == null
                    ? undefined
                    : w.jumpSchema),
              ),
            });
          }
        })
        .call(this);
    this.getCCPCModal = (e, onContentChange, onClose) =>
      n
        ._(function* () {
          if (yield this._getCanShowCCPCPromoteModal(e)) {
            return V({
              containerService: this._containerService,
              commerceCreditService: this._commercialCreditService,
              dreaminaFissionDataService: this._dreaminaFissionDataService,
              ccpcPromoteResource: this._ccpcPromoteResource,
              onContentChange,
              accountSnapshot: this._accountPort.getSnapshot(),
              onClose,
            });
          }
        })
        .call(this);
    this.getIsNewUser = () => !!this._promotePrice && d.L(this._promotePrice);
    this._getCanShowPromoteModal = (e) =>
      n
        ._(function* () {
          const r = yield this._getVipPriceList();
          yield p.i(this._containerService, e);
          const t =
            yield this._commercialCreditService.creditReceiveManager.canReceiveDailyCredit();
          this._isDailyCreditReceiveEnabled = t;
          this._isHitCreditPackageGroupExperiment =
            t &&
            this._commercialStrategyService.isHitCreditPackageGroupExperiment;
          this._promotePrice = u.w(r);
          this._registerBenefitModalTextConfig = undefined;
          this._registerBenefitModalJumpConfig = undefined;
          this._registerBenefitModalReportParams = undefined;
          if (this.getIsNewUser()) {
            if (t) {
              yield this._getResourcePositionMessage();
            }
            return true;
          }
          yield this._getRegisterBenefitModalResourcePosition();
          if (
            this._registerBenefitModalTextConfig ||
            (yield this._getVipEntranceModalResourcePosition(),
            this._vipEntranceModalTextConfig)
          ) {
            return true;
          }
          if (this._isHitCreditPackageGroupExperiment && !this._promotePrice) {
            const n =
              this._commercialCreditService.creditReceiveManager
                .receiveCreditResult;
            const i = (n == null ? undefined : n.ok) && n.value.hasPopup;
            const a = this._commercialCreditService.isFirstReceived;
            if (i && !a) {
              return false;
            }
          }
          return (
            (!!this._isHitCreditPackageGroupExperiment ||
              !!this._promotePrice) &&
            (t && (yield this._getResourcePositionMessage()), true)
          );
        })
        .call(this);
    this._getCanShowCCPCPromoteModal = (e) =>
      n
        ._(function* () {
          let r;
          yield p.i(this._containerService, e);
          yield this._getCommonResource();
          return (
            !!this._isCapCutPCEmbed &&
            (r = this._ccpcPromoteResource) != null &&
            !!r.canShow
          );
        })
        .call(this);
    this._getCommonResource = () =>
      n
        ._(function* () {
          if (!this._isFetchingCommonResource) {
            this._isFetchingCommonResource = true;
            try {
              let e;
              let r;
              let pc_did =
                new URLSearchParams(window.location.search).get("did") || "";
              if (pc_did) {
                localStorage.setItem(this._DEVICE_ID_STORAGE_KEY, pc_did);
              } else {
                pc_did =
                  localStorage.getItem(this._DEVICE_ID_STORAGE_KEY) || "";
              }
              const n =
                yield this._dreaminaFissionDataService.fetchCommonResource(
                  this._isCapCutPCEmbed
                    ? {
                        resourceScene: "pc_diversion_dreamina",
                        extra: JSON.stringify({
                          pc_did,
                        }),
                      }
                    : {},
                );
              if (n.ok) {
                this._ccpcPromoteResource =
                  (r = n.value) == null || (e = r.resourceList) == null
                    ? undefined
                    : e.find(
                        (e) => e.resourceScene === "pc_diversion_dreamina",
                      );
              }
            } finally {
              this._isFetchingCommonResource = false;
            }
          }
        })
        .call(this);
  }
}
export { k };
k = i.Cg(
  [
    i.Qj(0, s._),
    i.Qj(1, v.$),
    i.Qj(2, b.r3),
    i.Qj(3, _.sG),
    i.Qj(4, y.F),
    i.Qj(5, f.a),
    i.Qj(6, o.fz),
    i.Qj(7, a.e),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [
      s._ === undefined ? Object : s._,
      v.$ === undefined ? Object : v.$,
      typeof ICommercialMembershipServiceType === "undefined"
        ? Object
        : ICommercialMembershipServiceType,
      _.sG === undefined ? Object : _.sG,
      y.F === undefined ? Object : y.F,
      f.a === undefined ? Object : f.a,
      o.fz === undefined ? Object : o.fz,
      a.e === undefined ? Object : a.e,
    ]),
  ],
  k,
);
