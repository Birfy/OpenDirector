import i from "NY";
import n from "oa";
import a from "bk";
import o from "dm";
import s from "bo";
import c from "MgG";
import l from "M8X";
import d from "MWC";
import u from "VN";
import p from "MK";
import { x as x_1 } from "./module-R0.js";
import { U } from "./module-WXe.js";
import v from "xQ";
import _ from "Iv";
import y from "w3w";
import g from "Nbm";
import { M } from "./module-ez.js";
function f(e, t, r) {
  let n;
  return () => {
    var a;
    var o;
    var l = (o = e.orderInfo) == null ? undefined : o.orderId;
    if (!(l && n === l && e.personalPaymentSuccessContext)) {
      n = l;
      a = Promise.all([
        g.N8(s.p3(), t),
        i._(function* () {
          return !r.isRuntimeRefreshEnabled && (yield c.ev(t, true)).ok;
        })(),
      ])
        .then((e) => {
          var [t, r] = e;
          return t.ok && r;
        })
        .catch(() => false);
      e.personalPaymentSuccessContext = {
        recheck(e) {
          return i
            ._(function* (e) {
              const { isCurrent, check } = e;
              try {
                if (!isCurrent() || !(yield a) || !isCurrent()) {
                  return false;
                }
                const i = yield check();
                return i === true && isCurrent();
              } catch (e) {
                return false;
              }
            })
            .apply(this, arguments);
        },
      };
    }
  };
}
const x = (e, errorStage) => {
  var r;
  var i;
  var o;
  var s;
  var c;
  var l =
    (c = e.errorInfo) == null || (s = c.value) == null
      ? undefined
      : s.closeReason;
  var errorCode = (r = l == null ? undefined : l.code) != null ? r : e.code;
  var errorMessage =
    (i =
      (o = l == null ? undefined : l.originReason) != null
        ? o
        : l == null
          ? undefined
          : l.reason) != null
      ? i
      : e.msg;
  return a._(
    n._(
      {},
      errorCode !== undefined
        ? {
            errorCode,
          }
        : {},
      errorMessage
        ? {
            errorMessage,
          }
        : {},
    ),
    {
      errorStage,
    },
  );
};
const P = (e, t) =>
  i._(function* () {
    let r;
    let i;
    let s;
    let c;
    let d;
    let p;
    const m = {
      orderId: (s = t.orderInfo) == null ? undefined : s.orderId,
      productId: (c = t.currentProduct) == null ? undefined : c.productId,
    };
    const h = l.cQ(e, u._);
    const _ =
      (r = (d = h.vipInfo) == null ? undefined : d.endTime) != null ? r : 0;
    yield o.y(3000);
    const y =
      (i = (p = h.vipInfo) == null ? undefined : p.endTime) != null ? i : 0;
    v.n(
      e,
      a._(n._({}, m), {
        orderType: "vip",
        confirmStatus: y > _ ? "success" : "error",
      }),
    );
  })();
export function gP() {
  d.p.warning(
    p.Ay.t(
      "dre_m10n_subscribe_fail",
      {},
      "Couldn’t subscribe. Try again later.",
    ),
  );
}
export var Lm = function (e) {
  const t =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const r = t.refreshPersonalBenefits === false;
  const i = e.createInstance(x_1);
  if (r) {
    i.setRefreshCreditGoodsAfterPayment(false);
  }
  const n = l.cQ(e, _.sG);
  const a = f(i, e, n);
  i.onSuccess((o) => {
    var s;
    if (
      ((s = t.shouldShowSuccessMessage) == null ? undefined : s.call(t)) !==
        false &&
      M(o)
    ) {
      d.p.success(
        p.Ay.t("dre_m10n_payment_details_result_success", {}, "支付成功"),
      );
    }
    i.reportPopup({
      action: "vip_pay_success",
      payChannel: o.payChannel,
    });
    i.reportVipPaySuccess();
    if (!r) {
      n.syncRemoteCreditHistory();
      P(e, i);
      a();
    }
  });
  i.onError(() => {
    i.reportPopup({
      action: "vip_pay_fail",
    });
    gP();
    if (!r) {
      n.syncRemoteCreditHistory();
    }
  });
  i.onGenerateOrderError((e) => {
    if (String(e.code) === "34010421") {
      d.p.warning(e.msg);
    }
  });
  return i;
};
export var Q2 = (e) => {
  var t = e.createInstance(U);
  var r = l.cQ(e, _.sG);
  var i = f(t, e, r);
  t.onSuccess((n) => {
    var a;
    t.reportPopup({
      action: "vip_pay_success",
      payChannel: (a = n.paymentInfo) == null ? undefined : a.paymentMethod,
    });
    r.syncRemoteCreditHistory();
    P(e, t);
    i();
  });
  t.onError((e) => {
    t.reportPopup(
      n._(
        {
          action: "vip_pay_fail",
        },
        x(e, "query_order"),
      ),
    );
    r.syncRemoteCreditHistory();
  });
  t.onStop(() => {
    t.reportPopup({
      action: "vip_pay_cancel",
    });
  });
  t.onGenerateOrderError((e) => {
    t.reportPopup(
      n._(
        {
          action: "vip_pay_fail",
        },
        x(e, "make_order"),
      ),
    );
    if (String(e.code) === "36010113") {
      y.w.confirm({
        icon: null,
        title: "支付升级公告",
        content:
          "由于美国地区支付系统升级，当前付费业务暂时无法进行支付，我们预计在北京时间2025年3月31日完成系统升级，在此期间无法进行付费，不便之处敬请谅解",
        okText: "OK",
        footer: (e, t) => t,
      });
    } else if (String(e.code) === "-5") {
      d.p.warning(p.Ay.t(e.msg, {}, e.msg));
    } else if (String(e.code) === "1021") {
      d.p.warning(
        p.Ay.t(
          "dre_risk_notification_toast",
          {},
          "We’ve noticed some unusual activity in your account. To protect security, you can’t proceed for the moment.",
        ),
      );
    } else {
      d.p.error(
        p.Ay.t(
          "web_dre_m10n_management_page_auto_renew_cancel_fail_toast",
          {},
          "Something went wrong. Try again later.",
        ),
      );
    }
  });
  return t;
};
