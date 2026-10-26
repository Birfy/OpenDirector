import i from "qa";
import a from "z8";
import _s from "xb";
import c from "SJ";
import l from "wF";
import d from "fGo";
import u from "NY";
import p from "oa";
import m from "bk";
import h from "bT";
import g from "bo";
import v from "M8X";
import b from "bI5";
import _ from "RJ";
import y from "xi";
import f from "ED";
import { p as p_1 } from "./module-MWC.js";
import x from "iAN";
import w from "db";
import R from "h4d";
import k from "MK";
import C from "bsE";
import { cp } from "./module-DVK.js";
import N from "hag";
import S from "Iv";
import P from "jh7";
import j from "VN";
import q from "gwv";
import "M2c";
import "siR";
import et from "k7J";
import en from "F6v";
import ei from "cO";
import ea from "yw";
import * as es from "./module-m3t.js";
import eo from "./module-Gx_2.js";
import ev from "CQu";
import ew from "GFp";
import eC from "xys";
let n;
const M = Object.freeze(["credit_recommend", "credit_general", "credit_boost"]);
const products = Object.freeze([]);
function F(e) {
  return Object.freeze(
    m._(p._({}, e), {
      tips: Object.freeze(p._({}, e.tips)),
      roles: e.roles ? Object.freeze([...e.roles]) : undefined,
      channels: e.channels ? Object.freeze([...e.channels]) : undefined,
    }),
  );
}
class I {
  activate() {
    this.disposed = false;
  }
  dispose() {
    this.disposed = true;
    M.forEach((e) => {
      this.generations[e]++;
    });
  }
  publish(e, r) {
    this.snapshot = Object.freeze(
      m._(p._({}, this.snapshot), {
        [e]: Object.freeze(r),
      }),
    );
    this.listeners.forEach((e) => e());
  }
  loadSection(e) {
    return u
      ._(function* () {
        const r = ++this.generations[e];
        this.publish(e, {
          status: "loading",
          products,
        });
        try {
          const t = yield this.port.load(e);
          if (this.disposed || r !== this.generations[e]) {
            return;
          }
          this.publish(e, {
            status: "ready",
            products: Object.freeze(t.map(F)),
          });
        } catch (t) {
          if (this.disposed || r !== this.generations[e]) {
            return;
          }
          this.publish(e, {
            status: "error",
            products,
            error: "catalog_load_failed",
          });
        }
      })
      .call(this);
  }
  constructor(e) {
    this.port = e;
    this.snapshot = Object.freeze({
      credit_recommend: Object.freeze({
        status: "idle",
        products,
      }),
      credit_general: Object.freeze({
        status: "idle",
        products,
      }),
      credit_boost: Object.freeze({
        status: "idle",
        products,
      }),
    });
    this.listeners = new Set();
    this.generations = {
      credit_recommend: 0,
      credit_general: 0,
      credit_boost: 0,
    };
    this.disposed = false;
    this.getSnapshot = () => this.snapshot;
    this.subscribe = (e) => {
      this.listeners.add(e);
      return () => this.listeners.delete(e);
    };
    this.load = (e) =>
      u
        ._(function* () {
          if (!this.disposed) {
            yield Promise.all((e ? [e] : M).map((e) => this.loadSection(e)));
          }
        })
        .call(this);
  }
}
function B(e, r, t) {
  let n;
  if (
    ((n = t.roles) == null ? undefined : n.length) &&
    (!e || !t.roles.includes(r))
  ) {
    return "membership";
  }
  if (t.source !== "product" || t.quote.trim()) {
    return "ready";
  }
  return "unavailable";
}
const W = (e) => {
  if (e !== null && typeof e === "object") {
    return e;
  }
  return {};
};
const $ = (e) => {
  if (typeof e === "string") {
    return e;
  }
};
const J = (e) => {
  if (typeof e === "number" && Number.isFinite(e)) {
    return e;
  }
  if (typeof e === "bigint") {
    return Number(e);
  }
  if (typeof e === "string" && e.trim() !== "") {
    var r = Number(e);
    if (Number.isFinite(r)) {
      return r;
    }
    return undefined;
  }
};
const Z = (e) => {
  if (Array.isArray(e) && e.every((e) => typeof e === "string")) {
    return e;
  }
};
const availableChannels = ["alipay", "wx", "bytepay"];
const D = {
  alipay: "alipay",
  wx: "wx",
  wechat: "wx",
  weixin: "wx",
  bytepay: "bytepay",
  douyin: "bytepay",
};
function L(e, r) {
  if (r !== undefined && Number.isFinite(e) && Number.isFinite(r)) {
    const sale = Math.round(100 * e);
    const original = Math.round(100 * r);
    if (
      Number.isSafeInteger(sale) &&
      Number.isSafeInteger(original) &&
      !(sale < 0) &&
      !(original <= sale)
    ) {
      return {
        sale,
        original,
      };
    }
  }
}
function z(amount, originalAmount) {
  const t = L(amount, originalAmount);
  if (t) {
    return Number((BigInt(t.original) - BigInt(t.sale)) / 100n);
  }
}
function V(e) {
  const r = new Date(e < 1000000000000 ? 1000 * e : e);
  if (e <= 0 || !Number.isFinite(r.getTime())) {
    return "";
  }
  const t = (e) => String(e).padStart(2, "0");
  return ""
    .concat(r.getFullYear(), ".")
    .concat(t(r.getMonth() + 1), ".")
    .concat(t(r.getDate()), " ")
    .concat(t(r.getHours()), ":")
    .concat(t(r.getMinutes()));
}
function H(isVipReady, status) {
  if (isVipReady && status !== "unknown") {
    if (status === "active") {
      return "member";
    }
    if (status === "none" || status === "expired") {
      return "free";
    }
    return "unknown";
  }
  return "unknown";
}
function Q(e) {
  if (typeof e === "number" && V(e)) {
    if (e < 1000000000000) {
      return 1000 * e;
    }
    return e;
  }
}
const K = ["standard", "artisan", "maestro", "ultra"];
function U(e) {
  const r = [];
  for (const t of e != null ? e : []) {
    const n = D[t];
    if (n && !r.includes(n)) {
      r.push(n);
    }
  }
  return r;
}
class X {
  activate() {
    this.disposed = false;
  }
  select(e) {
    if (!this.disposed && this.snapshot.status !== "paying") {
      this.abortSession();
      const r = this.prepare(e);
      if (r) {
        this.pending = r;
        this.publish({
          status: "awaiting_agreement",
        });
      }
    }
  }
  confirm() {
    return u
      ._(function* () {
        if (
          !(this.disposed || this.snapshot.status === "paying" || !this.pending)
        ) {
          if (
            this.snapshot.status === "awaiting_agreement" ||
            this.snapshot.reason === "payment_failed"
          ) {
            yield this.startPending();
          }
        }
      })
      .call(this);
  }
  refresh() {
    return u
      ._(function* () {
        if (!(this.disposed || !this.pending)) {
          if (
            this.snapshot.status === "paying" ||
            this.snapshot.reason === "payment_failed"
          ) {
            this.abortSession();
            yield this.startPending();
          }
        }
      })
      .call(this);
  }
  completeExternalPayment() {
    if (
      this.disposed ||
      !this.pending ||
      (this.snapshot.status !== "awaiting_agreement" &&
        this.snapshot.status !== "paying" &&
        this.snapshot.reason !== "payment_failed")
    ) {
      return false;
    }
    const e = ++this.attempt;
    this.abortSession();
    this.pending = undefined;
    this.publish({
      status: "success",
    });
    try {
      this.ports.refresh().catch(() => {
        if (this.isCurrent(e)) {
          this.publish({
            status: "success",
            reason: "refresh_failed",
          });
        }
      });
    } catch (r) {
      if (this.isCurrent(e)) {
        this.publish({
          status: "success",
          reason: "refresh_failed",
        });
      }
    }
    return true;
  }
  cancel() {
    if (
      this.snapshot.status === "paying" ||
      this.snapshot.status === "awaiting_agreement"
    ) {
      this.attempt++;
      this.abortSession();
      this.pending = undefined;
      this.publish({
        status: "cancelled",
      });
    }
  }
  dismiss() {
    this.attempt++;
    this.abortSession();
    this.pending = undefined;
    this.publish({
      status: "idle",
    });
  }
  dispose() {
    this.cancel();
    this.disposed = true;
    this.attempt++;
  }
  prepare(e) {
    let r;
    const t = this.ports.mode === "simulation";
    if (e.product.source === "mock" && !t) {
      return void this.fail("preview_only");
    }
    const n = t
      ? m._(p._({}, e.product), {
          source: "mock",
          quote: "",
        })
      : e.product;
    const i = B(e.member, e.role, n);
    if (i !== "ready") {
      this.fail(i);
      if (i === "membership") {
        this.ports.subscribeRequired();
      }
      return;
    }
    const a = U(e.availableChannels);
    const s = U(n.channels);
    if (((r = n.channels) == null ? undefined : r.length) && !s.length) {
      return void this.fail("payment_channel_unavailable");
    }
    const o = s.length ? a.filter((e) => s.includes(e)) : a;
    if (o.length) {
      return m._(p._({}, e), {
        product: n,
        availableChannels: o,
      });
    }
    this.fail("payment_channel_unavailable");
  }
  startPending() {
    return u
      ._(function* () {
        const pending = this.pending;
        if (pending) {
          const r = ++this.attempt;
          this.publish({
            status: "paying",
          });
          try {
            const t = yield this.ports.start({
              product: pending.product,
              section: pending.section,
              pmsExtra: pending.product.quote,
              channels: pending.availableChannels,
            });
            if (!this.isCurrent(r)) {
              return void t.cancel();
            }
            this.session = t;
            const n = yield t.completed;
            if (!this.isCurrent(r)) {
              return;
            }
            this.session = undefined;
            if (n === "cancelled") {
              this.pending = undefined;
              this.publish({
                status: "cancelled",
              });
              return;
            }
            if (n === "failed") {
              return this.fail("payment_failed");
            }
            this.publish({
              status: "success",
            });
            try {
              yield this.ports.refresh();
            } catch (e) {
              if (this.isCurrent(r)) {
                this.publish({
                  status: "success",
                  reason: "refresh_failed",
                });
              }
            }
          } catch (e) {
            if (this.isCurrent(r)) {
              this.session = undefined;
              this.fail("payment_failed");
            }
          }
        }
      })
      .call(this);
  }
  abortSession() {
    const { session } = this;
    this.session = undefined;
    if (session != null) {
      session.cancel();
    }
  }
  fail(reason) {
    this.publish({
      status: "error",
      reason,
    });
  }
  isCurrent(e) {
    return !this.disposed && e === this.attempt;
  }
  publish(e) {
    this.snapshot = Object.freeze(e);
    this.listeners.forEach((e) => e());
  }
  constructor(e) {
    this.ports = e;
    this.snapshot = Object.freeze({
      status: "idle",
    });
    this.listeners = new Set();
    this.attempt = 0;
    this.disposed = false;
    this.getSnapshot = () => this.snapshot;
    this.getPendingInput = () => this.pending;
    this.subscribe = (e) => {
      this.listeners.add(e);
      return () => this.listeners.delete(e);
    };
  }
}
const G = Object.freeze({
  WeeklyBestValue: "weekly_best_value",
  DailySupply: "daily_supply",
  LimitedSprint: "limited_sprint",
  ExclusiveModelPack: "exclusive_model_pack",
});
const Y = Object.freeze({
  credit_recommend: G.WeeklyBestValue,
  credit_general: G.DailySupply,
  credit_boost: G.LimitedSprint,
});
function ee(e) {
  if (e !== null && typeof e === "object") {
    return e;
  }
}
function er(e) {
  const r = ee(e);
  const t = ee(r == null ? undefined : r.cause);
  const n = [
    r == null ? undefined : r.msg,
    r == null ? undefined : r.message,
    r == null ? undefined : r.errmsg,
    t == null ? undefined : t.msg,
    t == null ? undefined : t.message,
    t == null ? undefined : t.errmsg,
  ].find((e) => typeof e === "string" && !!e.trim());
  const i = [
    r == null ? undefined : r.code,
    r == null ? undefined : r.ret,
    t == null ? undefined : t.code,
    t == null ? undefined : t.ret,
  ].find((e) => typeof e === "string" || typeof e === "number");
  return p._(
    {},
    n
      ? {
          message: n.trim().slice(0, 200),
        }
      : {},
    i === undefined
      ? {}
      : {
          code: String(i).slice(0, 64),
        },
  );
}
function ec(e) {
  const r = new Date(e + 28800000);
  const t = (8 - r.getUTCDay()) % 7 || 7;
  const n = Math.ceil(
    (Date.UTC(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate() + t) -
      28800000 -
      e) /
      1000,
  );
  return [
    Math.floor(n / 86400),
    Math.floor(n / 3600) % 24,
    Math.floor(n / 60) % 60,
    n % 60,
  ].map((e) => String(e).padStart(2, "0"));
}
const el = "hostOpen-CQMpq6";
const ed = "membershipValidityField-AHkKGw";
const eu = "membershipValidityLabel-PL2pXB";
const ep = "membershipValidityValue-yv1Id1";
const em = "separator-eT8Pzt";
const eh = "sectionStatus-Q_fRFQ";
function useEg() {
  const [e, setE] = h.useState(() => ec(Date.now()));
  h.useEffect(() => {
    var e = () => setE(ec(Date.now()));
    var t = window.setInterval(e, 1000);
    document.addEventListener("visibilitychange", e);
    return () => {
      window.clearInterval(t);
      document.removeEventListener("visibilitychange", e);
    };
  }, []);
  return a.jsx("div", {
    className: "countdown-j3sjfc",
    role: "timer",
    "aria-live": "off",
    "aria-label": k.Ay.t(
      "web_creditpacks_weekly_countdown",
      {
        days: e[0],
        hours: e[1],
        minutes: e[2],
        seconds: e[3],
      },
      "距北京时间周一零点还有 {days} 天 {hours} 小时 {minutes} 分 {seconds} 秒",
    ),
    children: e.map((e, r) =>
      a.jsxs(
        "span",
        {
          className: "timeGroup-dMmxUy",
          "aria-hidden": "true",
          children: [
            r > 0 &&
              a.jsx("span", {
                className: "colon-RArkfX",
                children: ":",
              }),
            a.jsx("span", {
              className: "timeDigit-RvxkCI",
              children: e,
            }),
          ],
        },
        r,
      ),
    ),
  });
}
const eb = (e) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  }).format(e);
function e_(e) {
  switch (e) {
    case "ultra":
      return k.Ay.t("dreamina_utra_subscribe", {}, "超级会员");
    case "maestro":
      return k.Ay.t("web_dre_m10n_subscription_plans_maestro", {}, "高级会员");
    case "artisan":
      return k.Ay.t("web_dre_m10n_subscription_plans_artisan", {}, "标准会员");
    case "standard":
      return k.Ay.t(
        "web_dre_m10n_management_page_auto_renew_standard",
        {},
        "基础会员",
      );
    default:
      return k.Ay.t("web_creditpacks_unknown_membership", {}, "会员");
  }
}
function ey(e) {
  switch (e) {
    case "credit_recommend":
      return {
        title: k.Ay.t("web_creditpacks_recommend_title", {}, "本周超值推荐"),
        subtitle: k.Ay.t(
          "web_creditpacks_recommend_desc",
          {},
          "精选热门补给组合，适合项目冲刺时快速补量",
        ),
      };
    case "credit_general":
      return {
        title: k.Ay.t("web_creditpacks_general_title", {}, "日常补给包"),
        subtitle: k.Ay.t(
          "web_creditpacks_general_desc",
          {},
          "全部模型可用，2年有效期",
        ),
      };
    default:
      return {
        title: k.Ay.t("web_creditpacks_boost_title", {}, "限时加量包"),
        subtitle: k.Ay.t(
          "web_creditpacks_boost_desc",
          {},
          "限时限量购买，充值后短期有效",
        ),
      };
  }
}
function ef(e) {
  const { text } = e;
  if (text) {
    return a.jsx(a.Fragment, {
      children: text.split(/([\d,.]+)/).map((e, r) =>
        a.jsx(
          "span",
          {
            className: r % 2 ? "offerNumber-t1eDb2" : undefined,
            children: e,
          },
          "".concat(r, "-").concat(e),
        ),
      ),
    });
  }
  return null;
}
function eA(e) {
  let r;
  let t;
  let n;
  const { product, section, showSavingsTag, onPurchase, purchaseDisabled } = e;
  const { tips } = product;
  const u = ((e, r) => {
    const t = L(e, r);
    if (t) {
      return Number(
        ((BigInt(t.original) - BigInt(t.sale)) * 100n) / BigInt(t.original),
      );
    }
  })(product.amount, product.originalAmount);
  const p = z(product.amount, product.originalAmount);
  const m =
    showSavingsTag && u !== undefined && u > 0 && p !== undefined && p > 0
      ? k.Ay.t(
          "web_creditpacks_savings",
          {
            price: eb(p),
          },
          "立省{price}元",
        )
      : undefined;
  const h = ((e) => {
    const r = ((e) => {
      if (e == null ? undefined : e.length) {
        if (e.some((e) => !K.some((r) => r === e))) {
          return {
            kind: "unknown",
            roles: [],
          };
        }
        const roles = K.filter((r) => e.includes(r));
        const t = K.indexOf(roles[0]);
        return {
          kind:
            roles.length > 1 && roles.length === K.length - t
              ? "above"
              : "list",
          roles,
        };
      }
    })(e);
    if (r) {
      if (r.kind === "unknown") {
        return k.Ay.t("web_creditpacks_member_specified", {}, "指定会员专享");
      }
      const name =
        r.kind === "above"
          ? e_(r.roles[0])
          : r.roles.map((e) => e_(e)).join("、");
      if (r.kind === "above") {
        return k.Ay.t(
          "web_creditpacks_member_above",
          {
            name,
          },
          "{name}及以上专享",
        );
      }
      return k.Ay.t(
        "web_creditpacks_member_exact",
        {
          name,
        },
        "{name}专享",
      );
    }
  })(product.roles);
  const g = section === "credit_recommend";
  r = tips.purchaseLimitTips;
  t = k.Ay.t("web_creditpacks_all_users_can_purchase", {}, "所有用户均可购买");
  if (h) {
    t = g ? undefined : h;
  }
  const v = [r, t && !(r == null ? undefined : r.includes(t)) ? t : undefined]
    .filter(Boolean)
    .join(" ");
  return a.jsxs("article", {
    className: "card-PUV9Hm",
    "data-section": section,
    "aria-label": product.name,
    children: [
      a.jsxs("div", {
        children: [
          a.jsxs("div", {
            className: "productHeadline-rBmjdN",
            children: [
              a.jsx("span", {
                className: "productName-EjOQYy",
                children: product.name,
              }),
              a.jsxs("div", {
                className: "tags-iVPVEU",
                children: [
                  tips.blueTag &&
                    a.jsx("span", {
                      className: "blueTag-duy6mb",
                      children: tips.blueTag,
                    }),
                  m &&
                    a.jsx("span", {
                      className: "yellowTag-SMH1se",
                      children: m,
                    }),
                ],
              }),
            ],
          }),
          a.jsxs("div", {
            className: "quantityRow-nWpP0j",
            children: [
              a.jsxs("span", {
                className: "quantity-gN92AM",
                children: [
                  a.jsx(ea.mC1, {
                    className: "creditIcon-GDVNW7",
                    "aria-hidden": true,
                  }),
                  eb(product.credits),
                ],
              }),
              ((n = tips.creditsRightTips) == null ? undefined : n.trim()) &&
                a.jsx("span", {
                  className: "offer-WqQI7F",
                  children: a.jsx(ef, {
                    text: tips.creditsRightTips,
                  }),
                }),
            ],
          }),
          g && h
            ? a.jsx("p", {
                className: "memberTip-cgC04v",
                children: h,
              })
            : null,
          (tips.firstLine || tips.secondLine) &&
            a.jsxs("p", {
              className: "capacity-N7AFk8",
              children: [
                tips.firstLine &&
                  a.jsx("span", {
                    children: tips.firstLine,
                  }),
                tips.secondLine &&
                  a.jsx("span", {
                    children: tips.secondLine,
                  }),
              ],
            }),
        ],
      }),
      a.jsxs("div", {
        className: "cardPurchase-G4UgmE",
        children: [
          a.jsxs("div", {
            className: "priceRow-T6VIzC",
            children: [
              a.jsxs("span", {
                children: ["¥", eb(product.amount)],
              }),
              u !== undefined &&
                product.originalAmount !== undefined &&
                a.jsxs("del", {
                  className: "savingPrice-pt2Pc3",
                  children: ["¥", eb(product.originalAmount)],
                }),
            ],
          }),
          a.jsx("button", {
            type: "button",
            className: "buyButton-BfQYCA",
            "aria-disabled": purchaseDisabled || undefined,
            onClick: (e) => onPurchase(product, section, e.currentTarget),
            children: k.Ay.t("web_creditpacks_card_buy", {}, "购买"),
          }),
          a.jsx("p", {
            className: "purchaseTip-MCjhXJ",
            children: v,
          }),
        ],
      }),
    ],
  });
}
function useEx(e) {
  let r;
  const {
    port,
    account,
    onClose,
    onValidityPopoverVisibilityChange,
    onHistory,
    onTabClick,
    creditRulesUrl,
    onPurchase,
    purchaseDisabled,
    refreshKey,
    defaultProductId,
    onDefaultProductMissing,
  } = e;
  const v = ev.v();
  const b = h.useMemo(() => new I(port), [port]);
  const _ = h.useSyncExternalStore(b.subscribe, b.getSnapshot, b.getSnapshot);
  const y = h.useMemo(
    () =>
      M.filter((e) => {
        var r = _[e];
        return (
          r.status === "idle" ||
          r.status === "loading" ||
          r.status === "error" ||
          (r.status === "ready" && r.products.length > 0)
        );
      }),
    [_],
  );
  const fRef = h.useRef(false);
  const [popupVisible, setPopupVisible] = h.useState(false);
  const w = M.every((e) => _[e].status === "ready" || _[e].status === "error");
  const { scrollRef, activeSection, navigate } = ((e) => {
    const rRef = h.useRef(null);
    const tRef = h.useRef();
    const [n, setN] = h.useState(e[0]);
    const activeSection_1 = n && e.includes(n) ? n : e[0];
    h.useEffect(() => {
      var rRef_current = rRef.current;
      if (rRef_current) {
        if (tRef.current && !e.includes(tRef.current)) {
          tRef.current = undefined;
        }
        var a = () => {
          if (tRef.current) {
            var r = rRef_current.querySelector(
              "#".concat(tRef.current, "-title"),
            );
            var a = r
              ? Math.max(
                  0,
                  Math.min(
                    rRef_current.scrollHeight - rRef_current.clientHeight,
                    rRef_current.scrollTop +
                      r.getBoundingClientRect().top -
                      rRef_current.getBoundingClientRect().top -
                      24,
                  ),
                )
              : rRef_current.scrollTop;
            if (Math.abs(rRef_current.scrollTop - a) <= 2) {
              tRef.current = undefined;
            }
            return;
          }
          var top = rRef_current.getBoundingClientRect().top;
          var o = Array.from(
            rRef_current.querySelectorAll("section[data-section]"),
          );
          var c = e[0];
          for (var l of o) {
            var d = l.querySelector("h2");
            if (d && d.getBoundingClientRect().top <= top + 24 + 1) {
              c = l.dataset.section;
            }
          }
          if (
            rRef_current.scrollTop > 0 &&
            rRef_current.scrollTop + rRef_current.clientHeight >=
              rRef_current.scrollHeight - 2
          ) {
            c = e[e.length - 1];
          }
          setN(c);
        };
        var s = () => {
          if (tRef.current) {
            tRef.current = undefined;
            rRef_current.scrollTo({
              top: rRef_current.scrollTop,
              behavior: "instant",
            });
            a();
          }
        };
        var o = (e) => {
          if (
            [
              "ArrowDown",
              "ArrowUp",
              "PageDown",
              "PageUp",
              "Home",
              "End",
              " ",
            ].includes(e.key)
          ) {
            s();
          }
        };
        rRef_current.addEventListener("scroll", a, {
          passive: true,
        });
        rRef_current.addEventListener("scrollend", a);
        rRef_current.addEventListener("wheel", s, {
          passive: true,
        });
        rRef_current.addEventListener("touchstart", s, {
          passive: true,
        });
        rRef_current.addEventListener("pointerdown", s);
        rRef_current.addEventListener("keydown", o);
        var c = new ResizeObserver(a);
        c.observe(rRef_current);
        for (var l of rRef_current.children) {
          c.observe(l);
        }
        a();
        return () => {
          rRef_current.removeEventListener("scroll", a);
          rRef_current.removeEventListener("scrollend", a);
          rRef_current.removeEventListener("wheel", s);
          rRef_current.removeEventListener("touchstart", s);
          rRef_current.removeEventListener("pointerdown", s);
          rRef_current.removeEventListener("keydown", o);
          c.disconnect();
        };
      }
    }, [e]);
    return {
      scrollRef: rRef,
      activeSection: activeSection_1,
      navigate: (e) => {
        var rRef_current = rRef.current;
        var a =
          rRef_current == null
            ? undefined
            : rRef_current.querySelector("#".concat(e, "-title"));
        if (rRef_current && a) {
          tRef.current = e;
          setN(e);
          var top = Math.max(
            0,
            Math.min(
              rRef_current.scrollHeight - rRef_current.clientHeight,
              rRef_current.scrollTop +
                a.getBoundingClientRect().top -
                rRef_current.getBoundingClientRect().top -
                24,
            ),
          );
          if (Math.abs(rRef_current.scrollTop - top) <= 2) {
            tRef.current = undefined;
          }
          rRef_current.scrollTo({
            top,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
          if (Math.abs(rRef_current.scrollTop - top) <= 2) {
            tRef.current = undefined;
          }
        }
      },
    };
  })(y);
  const N =
    account.member &&
    account.membershipEndTime &&
    Number.isFinite(account.membershipEndTime)
      ? V(account.membershipEndTime)
      : "";
  const S = (
    (r = account.member ? account.vipLevels : undefined) != null ? r : []
  ).flatMap((e) => {
    var level = (typeof e.level === "string" && e.level.trim()) || undefined;
    var t = Q(e.beginTime);
    var n = Q(e.endTime);
    var i = t !== undefined && n !== undefined && t > n;
    var beginTime = i || t === undefined ? undefined : e.beginTime;
    var endTime = i || n === undefined ? undefined : e.endTime;
    if (level || beginTime !== undefined || endTime !== undefined) {
      return [
        {
          level,
          beginTime,
          endTime,
        },
      ];
    }
    return [];
  });
  h.useEffect(
    () => () => {
      if (onValidityPopoverVisibilityChange == null) {
        return undefined;
      }
      return onValidityPopoverVisibilityChange();
    },
    [onValidityPopoverVisibilityChange],
  );
  h.useEffect(() => {
    if (!(S.length > 1)) {
      setPopupVisible(false);
      if (onValidityPopoverVisibilityChange != null) {
        onValidityPopoverVisibilityChange();
      }
    }
  }, [S.length, onValidityPopoverVisibilityChange]);
  h.useEffect(() => {
    b.activate();
    b.load();
    return () => b.dispose();
  }, [b]);
  h.useEffect(() => {
    if (refreshKey) {
      b.load();
    }
  }, [b, refreshKey]);
  h.useEffect(() => {
    if (defaultProductId && w && account.membership && !fRef.current) {
      fRef.current = true;
      for (var e of M) {
        var r = _[e].products.find((e) => e.id === defaultProductId);
        if (r) {
          return void onPurchase(r, e);
        }
      }
      if (onDefaultProductMissing != null) {
        onDefaultProductMissing();
      }
    }
  }, [
    account.membership,
    w,
    defaultProductId,
    onDefaultProductMissing,
    onPurchase,
    _,
  ]);
  return a.jsxs("div", {
    className: "page-OiyM1m",
    "data-theme": v,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": k.Ay.t("web_creditpacks_title", {}, "购买积分"),
    children: [
      a.jsxs("div", {
        className: "stickyHeader-FvhORl",
        children: [
          a.jsxs("header", {
            className: "accountHeader-mUzflj",
            children: [
              a.jsxs("div", {
                className: "accountIdentity-sU9tcH",
                children: [
                  a.jsx(es.e, {
                    className: "avatar-GNefpy",
                    src: ei.m(account.avatar || eo, null, {
                      logType: "js.href/src",
                      reportOnly: "false",
                      blackConfig: "{}",
                      configMode: "merge",
                      isCloseSSRReport: true,
                      bid: "cc_dreamina",
                      region: "cn",
                      urlLimit: "-1",
                      htmlLimit: "-1",
                      isSaveValidUrl: false,
                      isRuntimeLog: false,
                      isDOMParser: false,
                      escapeRule: "escape-report",
                      reportUrl:
                        "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                      htmlparserOptions: "{}",
                      scmBranch: "-",
                      scmName: "-",
                      scmVersion: "-",
                      webpackPluginVersion: "3.6.0",
                      filename:
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kl%WFJq%jBac$l-a3hkMlJZ%21waFIwWjZXbE14ZEdJe$$ta*lRemt5W$Zk$00weH$$bnBs%jBaN$dqTldlZz09",
                    }),
                    alt: "",
                    enableClick: false,
                  }),
                  account.name &&
                    a.jsxs(a.Fragment, {
                      children: [
                        a.jsx("span", {
                          className: "accountName-kXlb_s",
                          title: account.name,
                          children: account.name,
                        }),
                        a.jsx("span", {
                          className: em,
                          "aria-hidden": true,
                        }),
                      ],
                    }),
                  a.jsxs("div", {
                    className: "accountDetails-GnNHls",
                    children: [
                      account.membership &&
                        a.jsxs(a.Fragment, {
                          children: [
                            a.jsxs("span", {
                              className: "membershipSummary-flMcEe",
                              children: [
                                a.jsxs("span", {
                                  children: [
                                    account.membership,
                                    N ? " ".concat(N) : "",
                                  ],
                                }),
                                S.length > 1 &&
                                  a.jsx(en.A, {
                                    className:
                                      "membershipValidityPopover-DohXCA",
                                    style: {
                                      maxWidth:
                                        "min(361px, calc(100vw - 32px))",
                                    },
                                    trigger: ["hover", "focus"],
                                    popupVisible,
                                    onVisibleChange: (e) => {
                                      setPopupVisible(e);
                                      if (
                                        onValidityPopoverVisibilityChange !=
                                        null
                                      ) {
                                        onValidityPopoverVisibilityChange(
                                          e
                                            ? () => setPopupVisible(false)
                                            : undefined,
                                        );
                                      }
                                    },
                                    position: "bl",
                                    showArrow: false,
                                    getPopupContainer: () => document.body,
                                    keepInsidePopupContainer: true,
                                    content: a.jsxs("div", {
                                      className:
                                        "membershipValidityContent-r6MEQm",
                                      "data-theme": v,
                                      children: [
                                        a.jsx("div", {
                                          className:
                                            "membershipValidityTitle-iYSH98",
                                          children: k.Ay.t(
                                            "web_teams_multiple_membership_popup_title",
                                            {},
                                            "有效期详情",
                                          ),
                                        }),
                                        a.jsx("div", {
                                          className:
                                            "membershipValidityList-CdAy_H",
                                          children: S.map((e, r) => {
                                            var t;
                                            var n;
                                            return a.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "membershipValidityItem-aCGMfx",
                                                children: [
                                                  a.jsxs("div", {
                                                    className: ed,
                                                    children: [
                                                      a.jsx("span", {
                                                        className: eu,
                                                        children: k.Ay.t(
                                                          "web_creditpacks_membership_level",
                                                          {},
                                                          "会员等级",
                                                        ),
                                                      }),
                                                      a.jsx("span", {
                                                        className: ep,
                                                        children: e.level
                                                          ? e_(e.level)
                                                          : "-",
                                                      }),
                                                    ],
                                                  }),
                                                  a.jsxs("div", {
                                                    className: ed,
                                                    children: [
                                                      a.jsx("span", {
                                                        className: eu,
                                                        children: k.Ay.t(
                                                          "web_teams_multiple_membership_popup_valid_time",
                                                          {},
                                                          "有效期",
                                                        ),
                                                      }),
                                                      a.jsx("span", {
                                                        className: ep,
                                                        children:
                                                          ((t =
                                                            e.beginTime ===
                                                            undefined
                                                              ? ""
                                                              : V(e.beginTime)),
                                                          (n =
                                                            e.endTime ===
                                                            undefined
                                                              ? ""
                                                              : V(e.endTime)),
                                                          ""
                                                            .concat(
                                                              t || "-",
                                                              " ～ ",
                                                            )
                                                            .concat(n || "-")),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              },
                                              ""
                                                .concat(e.level, "-")
                                                .concat(e.beginTime, "-")
                                                .concat(e.endTime, "-")
                                                .concat(r),
                                            );
                                          }),
                                        }),
                                      ],
                                    }),
                                    children: a.jsx("button", {
                                      type: "button",
                                      className: "membershipInfoTrigger-ytIaMQ",
                                      "aria-label": k.Ay.t(
                                        "web_teams_multiple_membership_popup_title",
                                        {},
                                        "有效期详情",
                                      ),
                                      children: a.jsx(ea.G_L, {
                                        className: "membershipInfoIcon-KD04Ss",
                                        "aria-hidden": true,
                                      }),
                                    }),
                                  }),
                              ],
                            }),
                            a.jsx("span", {
                              className: em,
                              "aria-hidden": true,
                            }),
                          ],
                        }),
                      a.jsxs("button", {
                        type: "button",
                        className: "creditEntry-XIWgX8",
                        onClick: () =>
                          onHistory(y.length === 0 ? M[0] : activeSection),
                        children: [
                          a.jsx("span", {
                            children: k.Ay.t(
                              "web_creditpacks_header_credits",
                              {},
                              "积分",
                            ),
                          }),
                          a.jsxs("span", {
                            className: "creditBalance-p73OiD",
                            children: [
                              a.jsx(ea.mC1, {
                                className: "headerCreditIcon-bMi7jt",
                                "aria-hidden": true,
                              }),
                              a.jsx("span", {
                                children: eb(account.credits),
                              }),
                            ],
                          }),
                          a.jsx(ea.Vjx, {
                            className: "headerChevronIcon-Btrdu7",
                            "aria-hidden": true,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              a.jsx("button", {
                type: "button",
                className: "closeButton-s05Nbl",
                onClick: onClose,
                "aria-label": k.Ay.t(
                  "web_creditpacks_header_close",
                  {},
                  "关闭积分购买",
                ),
                children: a.jsx("span", {
                  className: "closeIcon-mrJRH3",
                  "aria-hidden": true,
                }),
              }),
            ],
          }),
          y.length > 0 &&
            a.jsx("nav", {
              className: "sectionNav-nGGrU_",
              "aria-label": k.Ay.t(
                "web_creditpacks_section_navigation",
                {},
                "积分包分类",
              ),
              children: y.map((e) =>
                a.jsx(
                  "button",
                  {
                    type: "button",
                    className: `navButton-Rl88Hv ${activeSection === e ? "navButtonActive-rm6reM" : ""}`,
                    "aria-current":
                      activeSection === e ? "location" : undefined,
                    onClick: () => {
                      if (e !== activeSection) {
                        navigate(e);
                        onTabClick(e);
                      }
                    },
                    children: ey(e).title,
                  },
                  e,
                ),
              ),
            }),
        ],
      }),
      a.jsxs("div", {
        className: "scrollArea-j5KDa2",
        ref: scrollRef,
        children: [
          w && y.length === 0
            ? a.jsx("div", {
                className: "emptyState-PvNA5e",
                role: "status",
                children: k.Ay.t(
                  "web_creditpacks_catalog_empty",
                  {},
                  "暂无可购买的积分包",
                ),
              })
            : null,
          y.map((e) => {
            var r;
            var t;
            var n = _[e];
            r = n.products;
            t = r
              .map((e, index) => {
                var t;
                return {
                  product: e,
                  index,
                  savings: (t = z(e.amount, e.originalAmount)) != null ? t : 0,
                };
              })
              .filter((e) => {
                var { savings } = e;
                return savings > 0;
              });
            if (e !== "credit_recommend") {
              t.sort((e, r) => {
                var t;
                var n;
                var i = BigInt(
                  Math.round(
                    ((t = e.product.originalAmount) != null ? t : 0) * 100,
                  ),
                );
                var a = BigInt(
                  Math.round(
                    ((n = r.product.originalAmount) != null ? n : 0) * 100,
                  ),
                );
                var s = i - BigInt(Math.round(100 * e.product.amount));
                var o =
                  (a - BigInt(Math.round(100 * r.product.amount))) * i - s * a;
                if (o !== 0n) {
                  if (o > 0n) {
                    return 1;
                  }
                  return -1;
                }
                return (
                  r.product.credits - e.product.credits || e.index - r.index
                );
              });
            }
            var i = new Set(
              (e === "credit_recommend" ? t : t.slice(0, 2)).map((e) => {
                var { product } = e;
                return product.id;
              }),
            );
            var s = ey(e);
            return a.jsxs(
              "section",
              {
                className: "section-DAPstQ",
                "data-section": e,
                "aria-labelledby": "".concat(e, "-title"),
                children: [
                  a.jsxs("div", {
                    className: "sectionHeading-HvgKpq",
                    children: [
                      a.jsxs("h2", {
                        id: "".concat(e, "-title"),
                        className: "sectionTitle-ZdqSqx",
                        children: [
                          e === "credit_recommend" &&
                            a.jsx("img", {
                              src: ei.m(
                                "data:image/png;base64,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",
                                null,
                                {
                                  logType: "js.href/src",
                                  reportOnly: "false",
                                  blackConfig: "{}",
                                  configMode: "merge",
                                  isCloseSSRReport: true,
                                  bid: "cc_dreamina",
                                  region: "cn",
                                  urlLimit: "-1",
                                  htmlLimit: "-1",
                                  isSaveValidUrl: false,
                                  isRuntimeLog: false,
                                  isDOMParser: false,
                                  escapeRule: "escape-report",
                                  reportUrl:
                                    "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                                  htmlparserOptions: "{}",
                                  scmBranch: "-",
                                  scmName: "-",
                                  scmVersion: "-",
                                  webpackPluginVersion: "3.6.0",
                                  filename:
                                    "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kl%WFJq%jBac$l-a3hkMlJZ%21waFIwWjZXbE14ZEdJe$$ta*lRemt5W$Zk$00weH$$bnBs%jBaN$dqTldlZz09",
                                },
                              ),
                              className: "recommendFlame-J_dthK",
                              alt: "",
                            }),
                          s.title,
                        ],
                      }),
                      a.jsxs("div", {
                        className: "sectionDescription-gon7Qi",
                        children: [
                          a.jsx("p", {
                            className: "subtitle-SQbxQQ",
                            children: s.subtitle,
                          }),
                          e === "credit_recommend" && a.jsx(useEg, {}),
                        ],
                      }),
                    ],
                  }),
                  (n.status === "loading" || n.status === "idle") &&
                    a.jsxs("div", {
                      className: eh,
                      role: "status",
                      children: [
                        a.jsx(et.A, {}),
                        k.Ay.t(
                          "web_creditpacks_catalog_loading",
                          {},
                          "正在获取积分商品",
                        ),
                      ],
                    }),
                  n.status === "error" &&
                    a.jsxs("div", {
                      className: eh,
                      role: "alert",
                      children: [
                        a.jsx("span", {
                          children: k.Ay.t(
                            "web_creditpacks_catalog_failed",
                            {},
                            "商品加载失败，请稍后重试",
                          ),
                        }),
                        a.jsx("button", {
                          type: "button",
                          className: "retryButton-Yl58dT",
                          onClick: () => void b.load(e),
                          children: k.Ay.t(
                            "web_creditpacks_catalog_retry",
                            {},
                            "重新加载",
                          ),
                        }),
                      ],
                    }),
                  n.status === "ready" &&
                    a.jsx("div", {
                      className: "productGrid-hHhZEc",
                      "data-product-count": n.products.length,
                      children: n.products.map((r) => {
                        var t;
                        return a.jsx(
                          eA,
                          {
                            product: r,
                            section: e,
                            showSavingsTag: i.has(r.id),
                            onPurchase,
                            purchaseDisabled,
                          },
                          (t = r.catalogKey) != null ? t : r.id,
                        );
                      }),
                    }),
                ],
              },
              e,
            );
          }),
          a.jsxs("footer", {
            className: "footer-RjeZhm",
            children: [
              k.Ay.t(
                "dre_m10n_purchase_credits_note",
                {},
                "温馨提示：积分不可兑换会员，不可转赠，也不可提现；积分充值后有效期为2年，不支持退款。",
              ),
              " ",
              creditRulesUrl
                ? a.jsx("a", {
                    href: ei.m(creditRulesUrl, null, {
                      logType: "js.href/src",
                      reportOnly: "false",
                      blackConfig: "{}",
                      configMode: "merge",
                      isCloseSSRReport: true,
                      bid: "cc_dreamina",
                      region: "cn",
                      urlLimit: "-1",
                      htmlLimit: "-1",
                      isSaveValidUrl: false,
                      isRuntimeLog: false,
                      isDOMParser: false,
                      escapeRule: "escape-report",
                      reportUrl:
                        "https://mon.zijieapi.com/monitor_browser/collect/batch/security/?bid=cc_dreamina",
                      htmlparserOptions: "{}",
                      scmBranch: "-",
                      scmName: "-",
                      scmVersion: "-",
                      webpackPluginVersion: "3.6.0",
                      filename:
                        "$ERJNWQy%kRP$EJo$jJSc1kyaz$hb%l5T$hkaF-zaHNXRE5D-%dSSFozWmpNMHBx$ERKT2RscEhWWFZa-m13d1dsZFJk$0l6%201T%1teHNZM2s1-TJOdFZta*lWMngx$1ZNNWQxbFh%bkpa$jJSc1kzaz$hMk50$m1oa$-yeDFX$k01-W1Je%1-%mFXRXBx$2xNNW$tTnR%WFpaTWpsMFkw-z$k$nB-TlRCam$%bHBaRmhP-0dKdFZuc*pl$*xxWWpJe*R*cFlTbXBo$jBaelR*aENhR1Z%T1dwa%1qRjNZakkx-kdKd$$ucE1Naz%1$2xk%2NH%kl%WFJq%jBac$l-a3hkMlJZ%21waFIwWjZXbE14ZEdJe$$ta*lRemt5W$Zk$00weH$$bnBs%jBaN$dqTldlZz09",
                    }),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "rulesLink-AQ9QuZ",
                    children: k.Ay.t(
                      "dre_m10n_purchase_credits_rules",
                      {},
                      "积分规则",
                    ),
                  })
                : null,
            ],
          }),
        ],
      }),
    ],
  });
}
const eR = f.PA(function (e) {
  let r;
  let t;
  let n;
  let i;
  let s;
  let o;
  const {
    containerService,
    options,
    onClose,
    onNestedOverlayChange,
    onValidityPopoverVisibilityChange,
    accountSnapshot,
  } = e;
  const F = l.h(N.F);
  const I = l.h(S.sG);
  const D = l.h(P.r3);
  const L = l.h(j._);
  const z = v.cQ(containerService, b.aH);
  const V = h.useMemo(() => {
    var e = containerService.createInstance(C.O, options.reportParam, {
      creditScene: "personal",
    });
    e.setRefreshCreditGoodsAfterPayment(false);
    return e;
  }, [containerService, options.reportParam]);
  const creditRulesUrl = w.W();
  const D_personal = D.personal;
  const U = H(L.isVipReady, D_personal.status);
  const ee =
    (r = (n = accountSnapshot.userId) == null ? undefined : n.trim()) != null
      ? r
      : "";
  const port = h.useMemo(() => {
    var aid;
    var r;
    var t;
    var n;
    var i;
    aid = Number(_.R(false));
    r = (e, r) => {
      y.V.warn("[credits-pack-purchase]", e, r);
    };
    t = 0;
    n = new Map();
    i = new Map();
    return {
      load: (pageType) =>
        u._(function* () {
          const s = Symbol();
          i.set(pageType, s);
          n.delete(pageType);
          const o = yield u._(function* () {
            const n = {
              aid,
              goodsIds: ["credit"],
              goodsTypes: ["credit"],
              scenes: ["credit_zone"],
              pageType,
              pmsExtra: JSON.stringify({
                use_product_service: true,
              }),
            };
            try {
              let i;
              const s = yield z.fetchCreditPriceList(g.og(), n);
              if (!s.ok) {
                throw Error("credit_catalog_unavailable");
              }
              const o = (i = s.value.priceList) != null ? i : [];
              const c = ++t;
              return o.flatMap((raw, t) => {
                try {
                  var product = m._(
                    p._(
                      {},
                      ((e, source, t) => {
                        let n;
                        let i;
                        let a;
                        let s;
                        let o;
                        let c;
                        let l;
                        let d;
                        let u;
                        const p = W(e);
                        const m = ((e, r) => {
                          if (e && typeof e === "object" && !Array.isArray(e)) {
                            return W(e);
                          }
                          if (typeof e !== "string" || !e) {
                            return {};
                          }
                          try {
                            return W(JSON.parse(e));
                          } catch (e) {
                            if (r != null) {
                              r("invalid_display_content");
                            }
                            return {};
                          }
                        })(
                          (n = p.displayContent) != null
                            ? n
                            : p.display_content,
                          t,
                        );
                        const id = $(
                          (i = p.productId) != null ? i : p.product_id,
                        );
                        const g = J(p.amount);
                        const credits = J(p.number);
                        const b = J(p.originPriceAmount);
                        if (
                          !id ||
                          g === undefined ||
                          g < 0 ||
                          credits === undefined ||
                          credits < 0
                        ) {
                          throw Error("invalid_credit_product");
                        }
                        return {
                          id,
                          source,
                          amount: g / 100,
                          credits,
                          name:
                            (a =
                              (u = [p.goodsName, p.goods_name]
                                .map($)
                                .find((e) => {
                                  if (e == null) {
                                    return undefined;
                                  }
                                  return e.trim();
                                })) == null
                                ? undefined
                                : u.trim()) != null
                              ? a
                              : "",
                          originalAmount:
                            b !== undefined && b > 0 ? b / 100 : undefined,
                          quote:
                            (s = $(
                              (o = p.pmsTrade) != null ? o : p.pms_trade,
                            )) != null
                              ? s
                              : "",
                          roles: Z(
                            (c = p.allowVipRoles) != null
                              ? c
                              : p.allow_vip_roles,
                          ),
                          channels: Z(
                            (l =
                              (d = p.limitedPayChannel) != null
                                ? d
                                : p.limited_pay_channel) != null
                              ? l
                              : p.limitPayChannel,
                          ),
                          tips: {
                            creditsRightTips: $(m.credits_right_tips),
                            purchaseLimitTips: $(m.purchase_limit_tips),
                            firstLine: $(m.first_line_tips),
                            secondLine: $(m.second_line_tips),
                            blueTag: $(m.blue_tag),
                          },
                        };
                      })(raw, "product", (e) => {
                        if (r == null) {
                          return undefined;
                        }
                        return r(e, pageType);
                      }),
                    ),
                    {
                      catalogKey: "".concat(c, ":").concat(t),
                    },
                  );
                  return [
                    {
                      raw,
                      product,
                    },
                  ];
                } catch (e) {
                  if (r != null) {
                    r("invalid_credit_product", pageType);
                  }
                  return [];
                }
              });
            } catch (error) {
              if (r != null) {
                r("credit_catalog_unavailable", pageType);
              }
              throw error;
            }
          })();
          if (i.get(pageType) === s) {
            n.set(pageType, new Map(o.map((e) => [e.product.catalogKey, e])));
          }
          return o.map((e) => e.product);
        })(),
      resolveProduct(e, r) {
        let t;
        let i;
        if (r.catalogKey) {
          if ((i = n.get(e)) == null || (t = i.get(r.catalogKey)) == null) {
            return undefined;
          }
          return t.raw;
        }
      },
    };
  }, [z, ee]);
  const [refreshKey, setRefreshKey] = h.useState(0);
  const eaRef = h.useRef();
  const esRef = h.useRef();
  const eoRef = h.useRef(() => undefined);
  eoRef.current = () => {
    var e;
    onNestedOverlayChange("subscription", true);
    if (
      !ew.iT({
        containerService,
        forceTheme: options.forceTheme,
        enableStandaloneCreditsPackPurchaseModal:
          options.enableStandaloneCreditsPackPurchaseModal,
        reportParam: {
          source:
            (e = options.reportParam).source === "credit_limit_popup"
              ? "credit_limit_popup"
              : e.source,
          scene: e.scene,
          sceneOptions: e.sceneOptions,
          benefits: e.benefits,
          benefitAmount: e.benefitAmount,
          customReportParams: e.customReportParams,
        },
        onAfterClose: () => onNestedOverlayChange("subscription", false),
      })
    ) {
      onNestedOverlayChange("subscription", false);
    }
  };
  const ec = h.useMemo(
    () => ({
      start: (e) => {
        var r;
        var t;
        var completed;
        var i;
        var a;
        var s;
        var { product, section } = e;
        var l = port.resolveProduct(section, product);
        if (l) {
          esRef.current = undefined;
          r = (e) => {
            esRef.current = e.message;
          };
          completed = new Promise((resolve) => {
            t = resolve;
          });
          i = [];
          a = (e) => {
            if (t) {
              var r = t;
              t = undefined;
              i.splice(0).forEach((e) => e.dispose());
              r(e);
            }
          };
          i.push(
            V.onSuccess(() => a("success")),
            V.onError((e) => {
              if (r != null) {
                r(er(e));
              }
              a("failed");
            }),
            V.onGenerateOrderError((e) => {
              if (r != null) {
                r(er(e));
              }
              a("failed");
            }),
            V.onStop(() => a("failed")),
          );
          s = g.p3();
          V.updateIsAgreeAgreement(s, true, false)
            .then(() => {
              if (t) {
                return V.setCurrentCreditProductSnapshot(s, l, true);
              }
            })
            .catch((e) => {
              if (r != null) {
                r(er(e));
              }
              a("failed");
            });
          return Promise.resolve({
            completed,
            cancel: () => {
              a("cancelled");
              V.disposeCurrentTask();
            },
          });
        }
        return Promise.reject(Error("missing_product"));
      },
      refresh: () =>
        u._(function* () {
          let e;
          let r;
          if (
            ((e = F.getSnapshot().userId) == null ? undefined : e.trim()) === ee
          ) {
            I.syncRemoteCreditHistory();
            yield (r = options.onSuccess) == null ? undefined : r.call(options);
          }
        })(),
      subscribeRequired: () => {
        V.reportPopup({
          action: "click_to_vip_popup",
        });
        eoRef.current();
      },
    }),
    [F, ee, V, I, options, port],
  );
  const el = h.useMemo(() => new X(ec), [ec]);
  const ed = h.useSyncExternalStore(
    el.subscribe,
    el.getSnapshot,
    el.getSnapshot,
  );
  const eu = el.getPendingInput();
  const ep = eu ? port.resolveProduct(eu.section, eu.product) : undefined;
  const corporatePayment = h.useMemo(
    () =>
      ((e) => {
        let r;
        const { manager, product, source, canStartPayment, onPaid } = e;
        if (
          (product == null ? undefined : product.enableCorporatePayment) ===
            true &&
          product.productId &&
          product.pmsTrade &&
          product.goodsId &&
          product.goodsType
        ) {
          const o = {
            source,
            productType: product.goodsType,
            productDisplayName:
              typeof product.number === "number"
                ? "".concat(product.number, "积分")
                : undefined,
            orderAmount: product.amount,
          };
          return {
            sourceProduct: product,
            product: {
              productId: product.productId,
              pmsTrade: product.pmsTrade,
              consumablesInfo: {
                consumablesType: "credit",
                consumablesId: "credit",
              },
            },
            orderManagementText: "订阅管理-购买记录",
            canStartPayment,
            tracking: o,
            reportContext: {
              source: q.U0.CreditPopup,
              teamType: q.y3.Personal,
              selectedProduct: q.Jw.Credit,
              orderAmount: product.amount,
              productId: product.productId,
            },
            onEntryShow: () => {
              manager.reportPopup({
                action: "show_corporate_transfer",
                payChannel: "corporate_payment",
                productId: product.productId,
                customReportParams: o,
              });
            },
            onEntryClick: () => {
              r = undefined;
              manager.reportPopup({
                action: "click_corporate_transfer",
                payChannel: "corporate_payment",
                productId: product.productId,
                customReportParams: o,
              });
            },
            onEvent: (e) => {
              var customReportParams = {
                corporate_payment_type: e.transferMode,
                corporate_payment_product_type: e.productType,
                corporate_payment_product_name: e.productDisplayName,
                corporate_payment_order_amount: e.orderAmount,
                corporate_payment_order_status: e.payStatus,
                corporate_payment_source: e.source,
              };
              if (e.type === "order_ready" && e.orderId && r !== e.orderId) {
                r = e.orderId;
                manager.reportPopup({
                  action: "show_corporate_payment",
                  payChannel: "corporate_payment",
                  orderId: e.orderId,
                  productId: e.productId,
                  customReportParams,
                });
                return;
              }
              if (e.type === "confirm_click") {
                manager.reportPopup({
                  action: "confirm_corporate_payment",
                  payChannel: "corporate_payment",
                  orderId: e.orderId,
                  productId: e.productId,
                  customReportParams,
                });
              }
            },
            onSuccess: (e) => {
              if (onPaid()) {
                manager.completeExternalPayment(
                  {
                    orderId: e.orderId,
                    payParams: "",
                    goodsIdStr: product.goodsId,
                    goodsType: product.goodsType,
                  },
                  {
                    status: "success",
                    payChannel: "corporate_payment",
                    paymentMethod: "corporate_payment",
                    realAmount: e.progress.payableAmount,
                    expirationTime: 1000 * e.progress.closeTime,
                    sysTime: Date.now(),
                  },
                );
              }
            },
          };
        }
      })({
        manager: V,
        product: ep,
        source: options.reportParam.source,
        canStartPayment: () => {
          var e;
          var r;
          var t;
          var n;
          var i = el.getPendingInput();
          if (
            ((e = F.getSnapshot().userId) == null ? undefined : e.trim()) !==
              ee ||
            !i ||
            i !== eu
          ) {
            p_1.warning(
              k.Ay.t(
                "web_creditpacks_quote_refresh",
                {},
                "商品信息已更新，请重新确认后购买。",
              ),
            );
            if ((r = eaRef.current) != null) {
              r.close();
            }
            return false;
          }
          var D_personal = D.personal;
          var s = H(L.isVipReady, D_personal.status);
          if (s === "unknown") {
            p_1.error(
              k.Ay.t(
                "web_creditpacks_membership_unavailable",
                {},
                "会员状态暂不可用，请稍后重试。",
              ),
            );
            return false;
          }
          var o = B(s === "member", D_personal.vipLevel, i.product);
          if (o === "membership") {
            V.reportPopup({
              action: "click_to_vip_popup",
            });
            if ((t = eaRef.current) != null) {
              t.close();
            }
            eoRef.current();
            return false;
          }
          return (
            o === "ready" ||
            (p_1.error(
              k.Ay.t(
                "web_creditpacks_preview_purchasefailed",
                {},
                "当前商品暂不可购买，请刷新后重试。",
              ),
            ),
            (n = eaRef.current) == null || n.close(),
            false)
          );
        },
        onPaid: () => {
          var e;
          return (
            ((e = F.getSnapshot().userId) == null ? undefined : e.trim()) ===
              ee && el.completeExternalPayment()
          );
        },
      }),
    [F, ee, el, V, D, options.reportParam.source, eu, ep, L],
  );
  h.useEffect(() => {
    el.activate();
    return () => el.dispose();
  }, [el]);
  h.useEffect(() => () => V.dispose(), [V]);
  h.useEffect(() => {
    V.reportPopup({
      action: "show",
      currentTab: G.WeeklyBestValue,
    });
    var e = V.onSuccess((e) => {
      var r;
      V.reportPopup({
        action: "pay_success",
        orderId: (r = V.orderInfo) == null ? undefined : r.orderId,
        payChannel: e.payChannel,
      });
      p_1.success(
        k.Ay.t("dre_m10n_payment_details_result_success", {}, "支付成功"),
      );
    });
    var r = V.onError(() => {
      var e;
      V.reportPopup({
        action: "pay_fail",
        orderId: (e = V.orderInfo) == null ? undefined : e.orderId,
      });
    });
    return () => {
      e.dispose();
      r.dispose();
    };
  }, [V]);
  h.useEffect(() => {
    if (eu) {
      if (!ep) {
        return void el.dismiss();
      }
      var e;
      var r = g.p3();
      var t = false;
      V.updateIsAgreeAgreement(r, false, false)
        .then(() => {
          if (!t) {
            return V.setCurrentCreditProductSnapshot(r, ep, false);
          }
        })
        .then(() => {
          if (!t) {
            onNestedOverlayChange("payment", true);
            e = cp({
              containerService,
              price: String(eu.product.amount),
              payManager: V,
              corporatePayment,
              forceTheme: options.forceTheme,
              getOrderErrorMessage: () => {
                var esRef_current = esRef.current;
                if (esRef_current) {
                  return k.Ay.t(esRef_current, {}, esRef_current);
                }
              },
              onAgree: () => el.confirm(),
              onResetCode: (r) => {
                if (r === "expired") {
                  return el.refresh();
                }
                setRefreshKey((e) => e + 1);
                if (e != null) {
                  e.close();
                }
                p_1.warning(
                  k.Ay.t(
                    "web_creditpacks_quote_refresh",
                    {},
                    "商品信息已更新，请重新确认后购买。",
                  ),
                );
              },
              onAfterClose: () => {
                onNestedOverlayChange("payment", false);
                if (eaRef.current === e) {
                  eaRef.current = undefined;
                }
                el.dismiss();
              },
            });
            eaRef.current = e;
          }
        })
        .catch(() => {
          if (!t) {
            onNestedOverlayChange("payment", false);
            el.dismiss();
          }
        });
      return () => {
        t = true;
        if (e && eaRef.current === e) {
          eaRef.current = undefined;
          e.close();
        }
      };
    }
  }, [
    containerService,
    el,
    corporatePayment,
    V,
    onNestedOverlayChange,
    options.forceTheme,
    eu,
    ep,
  ]);
  h.useEffect(() => {
    if (ed.status === "success") {
      setRefreshKey((e) => e + 1);
      el.dismiss();
    }
  }, [el, ed.status]);
  let membership = "";
  if (U === "member") {
    membership = e_(D_personal.vipLevel);
  } else if (U === "free") {
    membership = k.Ay.t("web_creditpacks_free_membership", {}, "免费版");
  }
  const account = {
    name:
      (t = (i = accountSnapshot.userProfile) == null ? undefined : i.name) !=
      null
        ? t
        : "",
    avatar: (s = accountSnapshot.userProfile) == null ? undefined : s.avatar,
    membership,
    membershipEndTime: U === "member" ? D_personal.expireTime : undefined,
    vipLevels:
      U === "member"
        ? (o = D_personal.vipInfo) == null
          ? undefined
          : o.vipLevels
        : undefined,
    credits: I.localCredit,
    member: U === "member",
    role: D_personal.vipLevel,
  };
  return a.jsx(a.Fragment, {
    children: a.jsx(useEx, {
      port,
      account,
      refreshKey,
      defaultProductId: options.defaultProductId,
      onDefaultProductMissing: () => {
        p_1.error(
          k.Ay.t(
            "web_creditpacks_default_product_missing",
            {},
            "指定积分包已更新，请重新选择。",
          ),
        );
      },
      onClose,
      onValidityPopoverVisibilityChange,
      purchaseDisabled: ed.status === "paying" || ed.status === "success",
      onHistory: (e) => {
        V.reportPopup({
          action: "check_detail",
          currentTab: Y[e],
        });
        onNestedOverlayChange("history", true);
        x.Yl({
          containerService,
          forceTheme: options.forceTheme,
          onAfterClose: () => onNestedOverlayChange("history", false),
        });
      },
      onTabClick: (e) => {
        V.reportPopup({
          action: "click_tab",
          currentTab: Y[e],
        });
      },
      creditRulesUrl,
      onPurchase: (e, r, t) => {
        if (ed.status !== "paying" && ed.status !== "success") {
          if (U === "unknown") {
            return void p_1.error(
              k.Ay.t(
                "web_creditpacks_membership_unavailable",
                {},
                "会员状态暂不可用，请稍后重试。",
              ),
            );
          }
          var n = port.resolveProduct(r, e);
          if (!n) {
            return void p_1.error(
              k.Ay.t(
                "web_creditpacks_preview_purchasefailed",
                {},
                "当前商品暂不可购买，请刷新后重试。",
              ),
            );
          }
          var i = Y[r];
          V.setCreditPopupReportContext(n, i);
          V.reportPopup({
            action: "select_product",
          });
          if (t) {
            V.reportPopup({
              action: "click_buy",
            });
          }
          el.select({
            product: e,
            section: r,
            member: account.member,
            role: account.role,
            availableChannels,
          });
          var a = el.getSnapshot().reason;
          if (
            a === "preview_only" ||
            a === "unavailable" ||
            a === "payment_channel_unavailable"
          ) {
            p_1.error(
              k.Ay.t(
                "web_creditpacks_preview_purchasefailed",
                {},
                "当前商品暂不可购买，请刷新后重试。",
              ),
            );
          }
        }
      },
    }),
  });
});
function ek(e) {
  let r;
  const accountSnapshot = R.o();
  const n =
    ((r = accountSnapshot.userId) == null ? undefined : r.trim()) ||
    "anonymous";
  return a.jsx(
    eR,
    m._(p._({}, e), {
      accountSnapshot,
    }),
    n,
  );
}
export function showCreditsPackPurchaseModal(e) {
  let r;
  const { containerService } = e;
  const options = i._(e, ["containerService"]);
  if (n != null) {
    n();
  }
  const u = document.createElement("div");
  const document_activeElement = document.activeElement;
  u.className = _s(
    "host-iTTFkt",
    options.forceTheme === "light" && "lv-theme-force_light",
    options.forceTheme === "light" && "standaloneLightTheme-nkxBYv",
    options.forceTheme === "dark" && "lv-theme-force_dark",
    options.forceTheme === "dark" && "standaloneDarkTheme-QzKdUD",
  );
  Object.assign(u.style, d.S(8));
  document.body.appendChild(u);
  const m = c.H(u);
  const h = new Set();
  let g = () => undefined;
  const v = {};
  var b = eC.A0({
    delay: 300,
    onCloseStart: () => {
      document.removeEventListener("keydown", g, true);
      u.classList.remove(el);
      u.classList.add("hostClosing-Ku3xGV");
    },
    onFinalize: () => {
      var e;
      if (v.openFrame !== undefined) {
        cancelAnimationFrame(v.openFrame);
      }
      m.unmount();
      u.remove();
      if (
        document_activeElement instanceof HTMLElement &&
        document_activeElement.isConnected
      ) {
        document_activeElement.focus();
      }
      if ((e = options.onAfterClose) != null) {
        e.call(options);
      }
      if (n === b.finish) {
        n = undefined;
      }
    },
  });
  n = b.finish;
  g = (e) => {
    var t;
    t = {
      hasNestedOverlay: () => h.size > 0,
      closeValidityPopover: () => {
        var e = r;
        return !!e && ((r = undefined), e(), true);
      },
      closeDrawer: b.close,
    };
    if (!(e.key !== "Escape" || t.hasNestedOverlay())) {
      e.preventDefault();
      e.stopPropagation();
      if (!t.closeValidityPopover()) {
        t.closeDrawer();
      }
    }
  };
  document.addEventListener("keydown", g, true);
  m.render(
    a.jsx(ev.B, {
      theme: options.forceTheme,
      children: a.jsx(l.Z, {
        instantiationService: containerService,
        children: a.jsx("div", {
          className: "drawerSurface-PyFzst",
          children: a.jsx(ek, {
            containerService,
            options,
            onClose: b.close,
            onNestedOverlayChange: (e, r) => {
              if (r) {
                h.add(e);
              } else {
                h.delete(e);
              }
            },
            onValidityPopoverVisibilityChange: (e) => {
              r = e;
            },
          }),
        }),
      }),
    }),
  );
  v.openFrame = requestAnimationFrame(() => {
    if (!b.isClosing) {
      u.classList.add(el);
    }
  });
  return {
    close: b.close,
  };
}
