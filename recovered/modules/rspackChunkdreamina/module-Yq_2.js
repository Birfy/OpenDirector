if (require.j == "wl4") {
  var a;
  var o;
  var i = require("./module-ERi.js");
}
export function O(e, t = "submit") {
  let r = e.filter((e) => e.payChannel === "corporate_payment");
  if (r.length > 0 && r.length !== e.length) {
    return {
      code: "mixed_payment_channels",
    };
  }
  if (t === "selection" || r.length === 0) {
    return;
  }
  let a = r.find((e) => e.blockReasonCode === i.U.MULTIPLE_PAYER_BANK_ACCOUNTS);
  if (a) {
    return {
      code: "multiple_payer_bank_accounts",
      orderId: a.orderId,
    };
  }
  let o = r.find((e) => {
    var t;
    return (
      e.canApplyInvoice === false ||
      ((t = e.blockReasonCode) != null ? t : i.U.UNSPECIFIED) !==
        i.U.UNSPECIFIED
    );
  });
  if (o) {
    return {
      code: "order_blocked",
      orderId: o.orderId,
      blockReasonCode: o.blockReasonCode,
      blockReason: o.blockReason,
    };
  }
  if (r.length > 1) {
    let e = r.find((e) => {
      var t;
      var r;
      var a;
      var o;
      return (
        !((r = e.corporatePayerInfo) == null || (t = r.payerName) == null
          ? undefined
          : t.trim()) ||
        !((o = e.corporatePayerInfo) == null || (a = o.payerBankName) == null
          ? undefined
          : a.trim())
      );
    });
    if (e) {
      return {
        code: "missing_payer_info",
        orderId: e.orderId,
      };
    }
    let t = r[0].corporatePayerInfo;
    if (
      r.some(
        (e) =>
          e.corporatePayerInfo.payerName.trim() !== t.payerName.trim() ||
          e.corporatePayerInfo.payerBankName.trim() !== t.payerBankName.trim(),
      )
    ) {
      return {
        code: "different_payer_accounts",
      };
    }
  }
}
a = o || (o = {});
a.MIXED_PAYMENT_CHANNELS = "mixed_payment_channels";
a.MULTIPLE_PAYER_BANK_ACCOUNTS = "multiple_payer_bank_accounts";
a.ORDER_BLOCKED = "order_blocked";
a.MISSING_PAYER_INFO = "missing_payer_info";
a.DIFFERENT_PAYER_ACCOUNTS = "different_payer_accounts";
export { o as $ };
