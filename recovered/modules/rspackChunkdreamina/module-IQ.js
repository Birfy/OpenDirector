import n from "oa";
import i from "bk";
import a from "hr";
import { O, Q } from "./module-fL.js";
const o = new Set([
  "dreamina.credits.point.recharge.19",
  "dreamina.credits.point.recharge.20",
  "dreamina.credits.point.recharge.21",
]);
const c = new Set([
  "dreamina.team.credits.point.recharge.discount2.9000",
  "dreamina.team.credits.point.recharge.discount2.20000",
  "dreamina.team.credits.point.recharge.discount2.80000",
]);
const l = new Set([
  "dreamina.credits.point.recharge.13",
  "dreamina.credits.point.recharge.14",
  "dreamina.credits.point.recharge.15",
  "dreamina.credits.point.recharge.16",
  "dreamina.credits.point.recharge.17",
  "dreamina.credits.point.recharge.18",
  "dreamina.credits.point.recharge.22",
  "dreamina.credits.point.recharge.23",
  "dreamina.credits.point.recharge.24",
  "dreamina.credits.point.recharge.25",
]);
const d = new Set([
  "dreamina.team.credits.point.bigrecharge.discount.210000",
  "dreamina.team.credits.point.bigrecharge.discount.440000",
  "dreamina.team.credits.point.bigrecharge.discount.760000",
  "dreamina.team.credits.point.bigrecharge.discount.1530000",
]);
const u = new Set([
  "dreamina.credits.point.recharge.13",
  "dreamina.credits.point.recharge.16",
  "dreamina.credits.point.recharge.17",
  "dreamina.credits.point.recharge.18",
]);
const p = new Set([
  "dreamina.credits.point.recharge.18",
  "dreamina.credits.point.recharge.25",
]);
export var G7 = (e) => {
  var r;
  var { creditPriceList, initialProductId, isPersonalRecharge, isVip } = e;
  var activityProducts = [];
  var regularProducts = [];
  var fuelProducts = [];
  var m = isPersonalRecharge ? o : c;
  var h = isPersonalRecharge ? l : d;
  for (var g of creditPriceList) {
    if (m.has(g.productId)) {
      fuelProducts.push(g);
    } else if (h.has(g.productId)) {
      activityProducts.push(g);
    } else {
      regularProducts.push(g);
    }
  }
  var useActivityLayout =
    (!isPersonalRecharge || isVip) &&
    (activityProducts.length > 0 || fuelProducts.length > 0);
  var b = regularProducts;
  if (useActivityLayout) {
    b = isPersonalRecharge
      ? creditPriceList
      : [...activityProducts, ...fuelProducts, ...regularProducts];
  }
  var _ = b.find((e) => e.disablePurchase !== true);
  var y = b.find(
    (e) => e.productId === initialProductId && e.disablePurchase !== true,
  );
  return {
    fuelProducts,
    activityProducts,
    regularProducts,
    defaultProductId:
      useActivityLayout || !isPersonalRecharge
        ? _ == null
          ? undefined
          : _.productId
        : (r = y == null ? undefined : y.productId) != null
          ? r
          : _ == null
            ? undefined
            : _.productId,
    useActivityLayout,
  };
};
const h = (beginTime, endTime) => {
  if (
    beginTime === undefined ||
    endTime === undefined ||
    !Number.isFinite(beginTime) ||
    !Number.isFinite(endTime) ||
    beginTime <= 0 ||
    endTime <= 0 ||
    beginTime > endTime
  ) {
    return "限时特卖";
  }
  return ""
    .concat(a.i("M.d", 1000 * beginTime), "-")
    .concat(a.i("M.d", 1000 * endTime), " 限时特卖");
};
const g = (e) => {
  var r;
  var t;
  var n;
  var i = O(e);
  return {
    id: e.productId,
    creditsText:
      (t = (n = e.number) == null ? undefined : n.toLocaleString("en-US")) !=
      null
        ? t
        : "",
    pricePrefixText: e.currencyTips,
    priceText: ""
      .concat(e.currencyTips)
      .concat(
        ((r =
          !e.priceTips || e.priceTips.includes(e.currencyTips)
            ? (e.amount / 100).toFixed(2)
            : e.priceTips),
        Q(r)),
      ),
    originalPriceText:
      i === undefined ? undefined : "".concat(e.currencyTips).concat(Q(i)),
  };
};
const v = (e) => {
  var hintText;
  var t =
    Number.isFinite(e.amount) &&
    e.amount > 0 &&
    e.number !== undefined &&
    Number.isFinite(e.number) &&
    e.number > 0
      ? Math.floor((1000 * e.number - 100 * e.amount) / e.amount)
      : 0;
  if (e.disablePurchase === true) {
    hintText = "已达购买上限";
  } else if (p.has(e.productId)) {
    hintText = "请使用支付宝支付";
  }
  return i._(n._({}, g(e)), {
    disabled: e.disablePurchase === true,
    badgeText: t > 0 ? "加赠".concat(t, "%") : undefined,
    hintText,
  });
};
export var M1 = function (e) {
  const r = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  return {
    id: "regular",
    variant: "standard",
    columns: r ? 6 : 3,
    title: r ? "日常补给包 · 无购买次数上限" : undefined,
    description: r
      ? "积分充值后有效期为2年，不支持退款或反向兑换为人民币"
      : undefined,
    items: e.map(g),
  };
};
export var kX = (e) => {
  var { activityProducts, fuelProducts = [], regularProducts } = e;
  var i = activityProducts.at(0);
  var a = [
    {
      id: "sprint",
      products: activityProducts,
      name: "超值冲刺包",
      validity: i && u.has(i.productId) ? "1个月" : "3个月",
    },
    {
      id: "fuel",
      products: fuelProducts,
      name: "限量加油包",
      validity: "1个月",
    },
  ];
  var s = [];
  for (var { id, products, name, validity } of a) {
    var p = products.at(0);
    if (p) {
      s.push({
        id,
        variant: "promotion",
        columns: products.length === 4 ? 4 : 3,
        title: "".concat(name, " · ").concat(h(p.beginTime, p.endTime)),
        description: "积分充值后有效期为".concat(
          validity,
          "，不支持退款或反向兑换为人民币",
        ),
        items: products.map(v),
      });
    }
  }
  if (regularProducts.length > 0) {
    s.push(M1(regularProducts, true));
  }
  return s;
};
