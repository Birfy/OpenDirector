import i from "NY";
import n from "oa";
import a from "bk";
import o from "dm";
import s from "bo";
import c from "M8X";
import l from "Nbm";
import d from "w3w";
import u from "MWC";
import p from "MK";
import m from "xQ";
import h from "Iv";
import v from "gLs";
import _ from "IQ";
import { O } from "./module-bsE.js";
import { b } from "./module-TO7.js";
import { M } from "./module-ez.js";
const f = (containerService, t) =>
  i._(function* () {
    let r;
    let i;
    const s = {
      orderId: (r = t.orderInfo) == null ? undefined : r.orderId,
      productId: (i = t.currentProduct) == null ? undefined : i.productId,
    };
    const l = c.cQ(containerService, h.sG);
    const l_localCredit = l.localCredit;
    yield o.y(3000);
    const l_localCredit_1 = l.localCredit;
    m.n(
      containerService,
      a._(n._({}, s), {
        orderType: "credit",
        confirmStatus: l_localCredit_1 > l_localCredit ? "success" : "error",
      }),
    );
  })();
export var N = (e) => {
  if (c.cQ(e.containerService, v.o).isOversea) {
    return ((e) => {
      var { containerService, reportParams, creditRechargeContext } = e;
      var n = c.cQ(containerService, h.sG);
      var a = containerService.createInstance(
        b,
        reportParams,
        creditRechargeContext,
      );
      var o = s.p3();
      if (
        creditRechargeContext == null
          ? undefined
          : creditRechargeContext.creditPriceList
      ) {
        var l = creditRechargeContext.creditPriceList.find(
          (e) => !e.disablePurchase,
        );
        if (l) {
          a.setCurrentProduct(o, l.productId);
        }
      } else {
        a.setCurrentProductByIndex(o, 0);
      }
      if (a != null) {
        a.onSuccess((e) => {
          var r;
          a.reportPopup({
            action: "pay_success",
            payChannel: e.paymentMethod,
            orderId: (r = a.orderInfo) == null ? undefined : r.orderId,
          });
          try {
            Promise.resolve(n.syncRemoteCreditHistory()).catch(() => undefined);
          } catch (e) {}
          f(containerService, a).catch(() => undefined);
        });
      }
      if (a != null) {
        a.onError(() => {
          var e;
          n.syncRemoteCreditHistory();
          a.reportPopup({
            action: "pay_fail",
            orderId: (e = a.orderInfo) == null ? undefined : e.orderId,
          });
        });
      }
      if (a != null) {
        a.onGenerateOrderError((e) => {
          if (String(e.code) === "36010113") {
            d.w.confirm({
              icon: null,
              title: "支付升级公告",
              content:
                "由于美国地区支付系统升级，当前付费业务暂时无法进行支付，我们预计在北京时间2025年3月31日完成系统升级，在此期间无法进行付费，不便之处敬请谅解",
              okText: "OK",
              footer: (e, t) => t,
            });
          } else if (["34010421", "-5"].includes(String(e.code))) {
            u.p.warning(p.Ay.t(e.msg, {}, e.msg));
          } else {
            u.p.error(
              p.Ay.t(
                "web_dre_m10n_management_page_auto_renew_cancel_fail_toast",
                {},
                "Something went wrong. Try again later.",
              ),
            );
          }
        });
      }
      return a;
    })(e);
  }
  return ((e) => {
    var { containerService, reportParams, creditRechargeContext } = e;
    var n = c.cQ(containerService, h.sG);
    var a = containerService.createInstance(
      O,
      reportParams,
      creditRechargeContext,
    );
    var o = s.p3();
    if (
      (creditRechargeContext == null
        ? undefined
        : creditRechargeContext.creditScene) === "team"
    ) {
      var d;
      var { defaultProductId } = _.G7({
        creditPriceList:
          (d = creditRechargeContext.creditPriceList) != null ? d : [],
        isPersonalRecharge: false,
        isVip: false,
      });
      if (defaultProductId) {
        a.setCurrentProduct(o, defaultProductId);
      }
    } else {
      if (a != null) {
        a.setCurrentProductByIndex(o, 0);
      }
    }
    if (a != null) {
      a.onSuccess((e) => {
        var r;
        if (M(e)) {
          u.p.success(
            p.Ay.t("dre_m10n_payment_details_result_success", {}, "支付成功"),
          );
        }
        n.syncRemoteCreditHistory();
        l.N8(s.p3(), containerService).catch(() => undefined);
        f(containerService, a);
        a.reportPopup({
          action: "pay_success",
          payChannel: e.payChannel,
          orderId: (r = a.orderInfo) == null ? undefined : r.orderId,
        });
      });
    }
    if (a != null) {
      a.onError(() => {
        var e;
        u.p.warning(
          p.Ay.t(
            "dre_m10n_purchase_credits_fail_toast",
            {},
            "Couldn’t purchase credits. Try again later. ",
          ),
        );
        n.syncRemoteCreditHistory();
        a.reportPopup({
          action: "pay_fail",
          orderId: (e = a.orderInfo) == null ? undefined : e.orderId,
        });
      });
    }
    if (a != null) {
      a.onGenerateOrderError((e) => {
        if (["34010421", "-5"].includes(String(e.code))) {
          return void u.p.warning(p.Ay.t(e.msg, {}, e.msg));
        }
      });
    }
    return a;
  })(e);
};
