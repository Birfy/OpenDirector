import i from "NY";
import a from "QWK";
import n from "dw4";
import o from "bfR";
import c from "ar";
import u from "Kt";
import _ from "NYi";
import d from "SI";
import l from "hr";
import { Ay } from "./module-MK.js";
import m from "gLs";
import v from "zbK";
function y(e) {
  return typeof e === "number" && Number.isSafeInteger(e) && e >= 0;
}
function g(e) {
  return "¥".concat(
    (e / 100).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  );
}
class h {
  get recordList() {
    return this._observableData.recordList || [];
  }
  get hasMore() {
    return this._observableData.hasMore;
  }
  get loading() {
    return this._observableData.loading;
  }
  loadOrderRecordList(teamContext) {
    return i
      ._(function* () {
        try {
          if (this._pending) {
            return;
          }
          this._pending = true;
          n.h5(() => {
            this._observableData.loading = true;
          });
          if (
            (t = this._commercialEnvironmentService.isOversea
              ? yield this._commerceDataService.fetchOverseaOrderRecords({
                  appId: this._environmentService.appId,
                  cursor: Number(this._nextCursor),
                  count: this._count,
                })
              : yield this._commerceDataService.fetchOrderRecords(
                  ((e) => {
                    const { cursor, count, teamContext } = e;
                    if (
                      (teamContext == null
                        ? undefined
                        : teamContext.currentSpaceType) === v.cU.Team
                    ) {
                      return {
                        cursor,
                        count,
                        scene: v.fq.Teams,
                        teamId: teamContext.currentTeamId,
                      };
                    }
                    return {
                      cursor,
                      count,
                    };
                  })({
                    cursor: this._nextCursor,
                    count: this._count,
                    teamContext,
                  }),
                )).ok
          ) {
            var t;
            const { hasMore, nextCursor, recordList } = t.value;
            this._nextCursor = "".concat(nextCursor);
            n.h5(() => {
              this._observableData.hasMore = hasMore;
              this._observableData.recordList = [
                ...this._observableData.recordList,
                ...(recordList.map((e) => this.formatData(e)) || []),
              ];
              this._observableData.loading = false;
            });
          } else {
            n.h5(() => {
              this._observableData.loading = false;
            });
          }
        } catch (e) {
          n.h5(() => {
            this._observableData.loading = false;
          });
        } finally {
          this._pending = false;
        }
      })
      .call(this);
  }
  formatData(e) {
    if ("paymentInfo" in e) {
      return this.formatOverseaServerData(e);
    }
    return this.formatDomesticServerData(e);
  }
  formatDomesticServerData(e) {
    let t;
    let subscriptionMethods;
    const i = [e.payTime, e.updateTime].find(
      (e) => typeof e === "number" && Number.isFinite(e) && e > 0,
    );
    const a = e.cycleUnit === "YEAR" ? 12 : e.cycle;
    if (e.subscribeType === "unauto_compensate") {
      subscriptionMethods = Ay.t(
        "web_team_upgrade_with_price_difference",
        {},
        "补差价升级",
      );
    } else if (a) {
      subscriptionMethods = d.xg(a, e.subscribeType === "unauto");
    }
    return {
      title:
        e.purchaseType === "credit"
          ? Ay.t(
              "dre_m10n_management_page_tab_order_history_credits",
              {
                number0: e.creditsNumber,
              },
              "{number0} credits recharge",
            )
          : e.title ||
            d.JI({
              level: e == null ? undefined : e.level,
            }),
      price:
        e.amount > 0
          ? o(e.amount / 100 || 0, {
              symbol: e.currencyCode === "CNY" ? "¥" : e.currencyCode,
              precision: 2,
              separator: ",",
            }).format()
          : undefined,
      orderId: e.orderId,
      purchaseDate: i === undefined ? "-" : l.i("yyyy-MM-dd hh:mm", 1000 * i),
      paymentMethod: e.payChannelText,
      payChannel: e.payChannel,
      orderStatus: e.orderStatus,
      statusTooltip: ((e) => {
        const { payChannel, orderStatus, amount, paidAmount } = e;
        if (payChannel === "corporate_payment" && y(paidAmount)) {
          if (orderStatus === "CLOSED" && paidAmount === 0) {
            return "订单有效期内未收到您的付款，订单已关闭。如需购买，请重新下单。";
          }
          if (y(amount)) {
            if (
              (orderStatus === "INIT" || orderStatus === "PROCESSING") &&
              paidAmount <= amount
            ) {
              return "应付 "
                .concat(g(amount), "，已到账 ")
                .concat(g(paidAmount), "，还需补款 ")
                .concat(g(amount - paidAmount));
            }
            if (
              orderStatus === "CLOSED" &&
              paidAmount > 0 &&
              paidAmount < amount
            ) {
              return "订单有效期内未收到尾款，订单已关闭。您已转账的金额将于5个工作日内退回至原付款银行账户。如仍需购买，请重新下单。";
            }
          }
        }
      })(e),
      subscriptionMethods,
      refundStatus: (t = e.refundStatus) != null ? t : null,
      orderAmount: e.amount,
      productLevel: e.level,
      purchaseType: e.purchaseType,
      subscribeType: e.subscribeType,
      cycleUnit: e.cycleUnit,
      subscribeCycle: e.cycle,
    };
  }
  formatOverseaServerData(e) {
    let t;
    let r;
    const { skuInfo } = e;
    const { skuBenefit, skuCycle, skuType } = skuInfo != null ? skuInfo : {};
    return {
      title:
        e.scene === "vip"
          ? (skuBenefit == null ? undefined : skuBenefit.levelTips)
            ? Ay.t(skuBenefit.levelTips, {}, skuBenefit.levelTips)
            : d.JI({
                level: skuBenefit == null ? undefined : skuBenefit.level,
              })
          : Ay.t(
              "web_dre_m10n_management_page_tab_order_history_credits",
              {
                number0:
                  skuBenefit == null || (r = skuBenefit.creditBenefit) == null
                    ? undefined
                    : r.amount,
              },
              "{number0} credits",
            ),
      price: e.paymentInfo.paymentAmount.amountTips,
      orderId: e.orderId,
      purchaseDate: l.i("yyyy-MM-dd hh:mm", 1000 * e.paymentInfo.purchaseDate),
      paymentMethod: e.paymentInfo.paymentMethod,
      subscriptionMethods: (skuCycle == null ? undefined : skuCycle.cycle)
        ? d.xg(skuCycle.cycle, skuType === "oneoff")
        : undefined,
      refundStatus: (t = e.refundStatus) != null ? t : null,
    };
  }
  constructor(e, t, r, i) {
    this._containerService = e;
    this._commerceDataService = t;
    this._commercialEnvironmentService = r;
    this._environmentService = i;
    this._nextCursor = "0";
    this._count = 10;
    this._pending = false;
    this._observableData = n.sH({
      recordList: [],
      hasMore: true,
      loading: true,
    });
  }
}
export { h as c };
h = a.Cg(
  [
    a.Qj(0, u._),
    a.Qj(1, _.h),
    a.Qj(2, m.o),
    a.Qj(3, c.k),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      u._ === undefined ? Object : u._,
      _.h === undefined ? Object : _.h,
      m.o === undefined ? Object : m.o,
      c.k === undefined ? Object : c.k,
    ]),
  ],
  h,
);
