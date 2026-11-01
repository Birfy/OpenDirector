import i from "MP";
import l from "tvS";
let o;
let n;
function a() {
  if (o == null) {
    throw Error(
      "commerce-sdk-kmp raw bundle has not been configured by a region or product entry",
    );
  }
  return o;
}
let c = new Proxy(Object.create(null), {
  get: (t, e) => Reflect.get(a(), e),
  has: (t, e) => Reflect.has(a(), e),
  ownKeys: () => Reflect.ownKeys(a()),
  getOwnPropertyDescriptor(t, e) {
    let r = Reflect.getOwnPropertyDescriptor(a(), e);
    if (r == null) {
      return undefined;
    }
    return {
      ...r,
      configurable: true,
    };
  },
});
const s = "domestic";
if ((o != null && o !== i) || (n != null && n !== s)) {
  throw Error(
    "commerce-sdk-kmp cannot load domestic and oversea raw bundles in the same runtime",
  );
}
o = i;
n = s;
const u = (t, e, r) => {
  let o;
  if ((o = typeof e !== "symbol" ? e + "" : e) in t) {
    return Object.defineProperty(t, o, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r,
    });
  }
  return (t[o] = r);
};
export let B2 = l.u1("kmp_commercial_http_api_setting_service");
export class sY {
  constructor(t) {
    u(this, "_serviceBrand");
    u(this, "domain");
    this.domain = t.replace(/\/+$/, "");
  }
  getApi(t) {
    if (!this.domain) {
      throw Error(`Domain not found for type: ${this.domain}`);
    }
    return `${this.domain}/${t.startsWith("/") ? t.slice(1) : t}`;
  }
  getAsyncApi(t) {
    return Promise.resolve(this.getApi(t));
  }
  updateApi(t) {
    this.domain = t.replace(/\/+$/, "");
  }
}
export let qn = l.u1("kmp-commerce-network-client-factory-service");
export class RK {
  constructor(t) {
    var e;
    let r;
    let o;
    this.networkClientCreator = t;
    o = undefined;
    if ((r = typeof (e = "_serviceBrand") !== "symbol" ? e + "" : e) in this) {
      Object.defineProperty(this, r, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: o,
      });
    } else {
      this[r] = o;
    }
  }
  createNetworkClient() {
    return this.networkClientCreator();
  }
}
export let Pg = l.u1("kmp-commercial-report-service");
let h = () => false;
function f(t, e, ...r) {
  try {
    if (h()) {
      globalThis.console?.[t]?.(e, ...r);
    }
  } catch {}
}
function x(t) {
  return Object.fromEntries(t?.asJsReadonlyMapView?.() ?? []);
}
function y(t, e = "") {
  if (t == null) {
    return e;
  }
  if (typeof t === "string") {
    return t;
  }
  if (
    typeof t === "number" ||
    typeof t === "boolean" ||
    typeof t === "bigint"
  ) {
    return t.toString();
  }
  if (t instanceof Error) {
    return t.message || e;
  }
  try {
    return String(t);
  } catch {
    try {
      return JSON.stringify(t) || e;
    } catch {
      return e;
    }
  }
}
class C extends c.IHttpClient {
  constructor(t, e) {
    var r;
    let o;
    let n;
    super();
    this.networkClientFactoryService = t;
    this.httpApiSettingService = e;
    n = undefined;
    if ((o = typeof (r = "networkClient") !== "symbol" ? r + "" : r) in this) {
      Object.defineProperty(this, o, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: n,
      });
    } else {
      this[o] = n;
    }
  }
  getNetworkClient() {
    if (!this.networkClient) {
      this.networkClient =
        this.networkClientFactoryService.createNetworkClient();
    }
    return this.networkClient;
  }
  async sendRequest(t, e, r, o, n) {
    let i = await this.httpApiSettingService.getAsyncApi(e);
    let headers = x(o);
    if (
      !(
        t !== "POST" ||
        Object.keys(headers).some((t) => t.toLowerCase() === "content-type")
      )
    ) {
      headers["Content-Type"] = "application/json";
    }
    let c = {
      params: x(r),
      headers,
    };
    try {
      let e = this.getNetworkClient();
      let r = t === "POST" ? await e.post(i, n ?? "", c) : await e.get(i, c);
      let o = r.status >= 200 && r.status < 300;
      let a = r.statusText || "HTTP request finished";
      return _(o, a, r.data, r.status);
    } catch (error) {
      let t =
        typeof error === "object" && error != null ? error.response : undefined;
      let e = y(error, "HTTP request failed");
      let r = t?.status ?? 0;
      return _(false, e, t?.data, r);
    }
  }
  get(t, e, r) {
    return this.sendRequest("GET", t, e, r);
  }
  post(t, e, r, o) {
    return this.sendRequest("POST", t, e, o, r);
  }
}
function _(t, e, r, o) {
  let n = new c.HttpResponse();
  n.success = t;
  n.msg = e;
  if (typeof r === "string") {
    n.content = r;
  } else if (r == null) {
    n.content = "";
  } else {
    try {
      n.content = JSON.stringify(r);
    } catch {
      n.content = y(r);
    }
  }
  n.code = o;
  return n;
}
class T extends c.ILog {
  constructor(t) {
    super();
    this.isDebugEnabled = t;
  }
  logI(t, e) {
    if (this.isDebugEnabled()) {
      console.info(`[${t}] INFO: ${e}`);
    }
  }
  logD(t, e) {
    if (this.isDebugEnabled()) {
      console.debug(`[${t}] DEBUG: ${e}`);
    }
  }
  logE(t, e) {
    if (this.isDebugEnabled()) {
      console.error(`[${t}] ERROR: ${e}`);
    }
  }
  logW(t, e) {
    if (this.isDebugEnabled()) {
      console.warn(`[${t}] WARN: ${e}`);
    }
  }
}
class S extends c.INetwork {
  isNetworkAvailable() {
    return true;
  }
}
class B extends c.IReporter {
  constructor(t) {
    super();
    this.reportService = t;
  }
  onReport(t, e) {
    let r = ((paramJsonStr) => {
      if (!paramJsonStr.trim()) {
        return {};
      }
      try {
        let e = JSON.parse(paramJsonStr);
        if (e && typeof e === "object" && !Array.isArray(e)) {
          return e;
        }
        return {
          value: e,
        };
      } catch {
        return {
          paramJsonStr,
        };
      }
    })(e);
    this.reportService.reportBusinessEvent(t, r);
  }
}
const I = (t, e, r) => {
  let o;
  if ((o = typeof e !== "symbol" ? e + "" : e) in t) {
    return Object.defineProperty(t, o, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r,
    });
  }
  return (t[o] = r);
};
class G extends c.IAppContext {
  constructor(t = {}) {
    super();
    this.options = t;
  }
  getAppId() {
    return P(this.options.appId, 0);
  }
  getAppName() {
    return P(this.options.appName, "web");
  }
  getAppVersionName() {
    return P(this.options.appVersionName, "");
  }
  getVersionCode() {
    return P(this.options.versionCode, "0");
  }
  getUpdateVersionCode() {
    return P(this.options.updateVersionCode, "0");
  }
  getChannel() {
    return P(this.options.channel, "web");
  }
  isI18n() {
    return P(this.options.isI18n, (a(), n === "oversea"));
  }
  getAppPackageName() {
    return P(this.options.appPackageName, "");
  }
  getAppLanguage() {
    return P(this.options.appLanguage, globalThis.navigator?.language ?? "en");
  }
  getAppRegion() {
    return P(this.options.appRegion, "");
  }
  getDeviceId() {
    return P(this.options.deviceId, "");
  }
  getInstallId() {
    return P(this.options.installId, "");
  }
  isDebug() {
    return P(this.options.isDebug, false);
  }
  isBoe() {
    return P(this.options.isBoe, false);
  }
  getOs() {
    return P(this.options.os, "web");
  }
  getPreinstallChannel() {
    return P(this.options.preinstallChannel, "");
  }
  getSessionKey() {
    return P(this.options.sessionKey, "");
  }
  getTimezone() {
    return P(this.options.timezone, "");
  }
  isGooglePlayPackage() {
    return P(this.options.isGooglePlayPackage, false);
  }
  isOutBuild() {
    return P(this.options.isOutBuild, true);
  }
  getOsVersion() {
    return P(this.options.osVersion, "");
  }
  getCurrentPlatform() {
    return P(this.options.currentPlatform, this.getOs()).toLowerCase();
  }
  isAndroid() {
    return this.getCurrentPlatform() === "android";
  }
  isiOS() {
    return this.getCurrentPlatform() === "ios";
  }
}
class E extends c.IKMPInfraDependency {
  constructor(t) {
    super();
    I(this, "httpClient");
    I(this, "log");
    I(this, "reporter");
    I(this, "network", new S());
    I(this, "appContext");
    I(this, "platformContext", new c.IPlatformContext());
    this.appContext = new G(t.appContext);
    this.log = new T(() => this.appContext.isDebug());
    this.httpClient = new C(
      t.networkClientFactoryService,
      t.httpApiSettingService,
    );
    this.reporter = new B(t.reportService);
  }
  provideLog() {
    return this.log;
  }
  provideHttpClient() {
    return this.httpClient;
  }
  provideReporter() {
    return this.reporter;
  }
  provideNetWork() {
    return this.network;
  }
  provideAppContext() {
    return this.appContext;
  }
  providePlatformContext() {
    return this.platformContext;
  }
}
function P(t, e) {
  if (typeof t === "function") {
    return t();
  }
  return t ?? e;
}
let R = c.Commerce.getInstance();
let j = false;
class O extends c.IFeatureConfig {
  constructor(t) {
    super();
    this.enableBenefitResourcePresentationValue = t;
  }
  enableBenefitResourcePresentation() {
    return this.enableBenefitResourcePresentationValue;
  }
}
class D extends c.ICommerceConfig {
  constructor(t) {
    var e;
    let r;
    let o;
    super();
    o = undefined;
    if ((r = typeof (e = "featureConfig") !== "symbol" ? e + "" : e) in this) {
      Object.defineProperty(this, r, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: o,
      });
    } else {
      this[r] = o;
    }
    this.featureConfig = new O(t.enableBenefitResourcePresentation === true);
  }
  getFeatureConfig() {
    return this.featureConfig;
  }
}
function N(t, e = {}) {
  if (j) {
    return R;
  }
  let r = t.invokeFunction(
    (t) =>
      new E({
        networkClientFactoryService: t.get(qn),
        httpApiSettingService: t.get(B2),
        reportService: t.get(Pg),
        appContext: e.appContext,
      }),
  );
  R.init(new D(e.featureConfig ?? {}), r);
  h = () => r.provideAppContext().isDebug();
  j = true;
  return R;
}
export { N as K };
function M(name) {
  return name
    .toLowerCase()
    .split("_")
    .map((t) => t.charAt(0).toUpperCase() + t.slice(1))
    .join("");
}
function U(name, e, r) {
  if (e !== r) {
    throw Error(
      `KMP enum value mismatch: ${name}.value is "${e}", expected "${r}"`,
    );
  }
}
function z(t) {
  return Object.freeze(
    Object.fromEntries(t.values().map((t) => [t.name, t.value])),
  );
}
function Q(t) {
  for (let e of t.values()) {
    U(e.name, e.value, M(e.name));
  }
  return z(t);
}
function q(t) {
  for (let e of t.values()) {
    let t = M(e.name);
    let r = t.charAt(0).toLowerCase() + t.slice(1);
    U(e.name, e.value, r);
  }
  return z(t);
}
function F(t) {
  return Object.freeze(
    Object.fromEntries(t.values().map((t) => [t.name, t.name])),
  );
}
function H(t) {
  return String(t).replace(/_([a-z])/g, (t, e) => e.toUpperCase());
}
function X(t) {
  return (typeof t === "object" && t != null) || typeof t === "function";
}
function J(t) {
  if (!X(t)) {
    return;
  }
  let t_constructor = t.constructor;
  return t_constructor?.$metadata$?.simpleName ?? t_constructor?.name;
}
function W(t) {
  if (t == null || Object.prototype.toString.call(t) !== "[object Object]") {
    return false;
  }
  let e = Object.getPrototypeOf(t);
  return e === Object.prototype || e === null;
}
function V(t) {
  return X(t) && typeof t.asJsReadonlyArrayView === "function";
}
function Y(t) {
  return X(t) && typeof t.asJsReadonlyMapView === "function";
}
function Z(t) {
  return (
    X(t) &&
    typeof t.name === "string" &&
    typeof t.ordinal === "number" &&
    String(t) === t.name
  );
}
let K = Symbol("ALL_KMP_DATA_CLASSES");
let $ = new WeakMap();
let te = new WeakMap();
let tr = new WeakMap();
let to = null;
function tn(DataClass) {
  if (
    typeof DataClass !== "function" ||
    ((t) => {
      if (!X(t) || typeof t.values !== "function") {
        return false;
      }
      try {
        let e = Array.from(t.values());
        return e.length > 0 && e.every(Z);
      } catch {
        return false;
      }
    })(DataClass)
  ) {
    return null;
  }
  if ($.has(DataClass)) {
    return $.get(DataClass) ?? null;
  }
  let e = null;
  try {
    let r = new DataClass();
    let keys = Object.keys(r).filter((t) => typeof r[t] !== "function");
    if (keys.length > 0) {
      e = {
        DataClass,
        keys,
        keySet: new Set(keys),
        serializer: tc(DataClass),
        fieldSerializers: null,
      };
    }
  } catch {
    e = null;
  }
  $.set(DataClass, e);
  return e;
}
function ti(t) {
  let e;
  let r = tl(t);
  if (
    r != null &&
    ((e = r), tp(e)?.startsWith("kotlin.collections.ArrayList(") === true)
  ) {
    return td(r)[0] ?? null;
  }
  return null;
}
function ta(t) {
  let e;
  let r = tl(t);
  if (
    r != null &&
    ((e = r), tp(e)?.startsWith("kotlin.collections.LinkedHashMap(") === true)
  ) {
    return td(r)[1] ?? null;
  }
  return null;
}
function tc(t) {
  let e = (X(t) ? t.$metadata$ : undefined)?.associatedObjects?.[0];
  if (typeof e !== "function") {
    return null;
  }
  try {
    let t = e();
    if (tu(t)) {
      return t;
    }
    return tv(t).find(tu) ?? null;
  } catch {
    return null;
  }
}
function ts(t) {
  if (t == null) {
    return [];
  }
  return (
    tv(t).find((t) => Array.isArray(t) && t.length > 0 && t.every(tu)) ?? []
  );
}
function tl(t) {
  let e = t;
  while (tp(e)?.endsWith("?")) {
    let t = td(e)[0];
    if (t == null || t === e) {
      break;
    }
    e = t;
  }
  return e ?? null;
}
function td(t) {
  let e = t ?? {};
  return Object.keys(e)
    .map((t) => e[t])
    .filter(tu);
}
function tu(t) {
  return (
    !!X(t) && tg(t).filter((t) => t.startsWith("#__interface_")).length >= 3
  );
}
function tp(t) {
  if (t == null) {
    return null;
  }
  if (tr.has(t)) {
    return tr.get(t) ?? null;
  }
  let e =
    tv(t)
      .filter((t) => X(t) && !Array.isArray(t) && !tu(t))
      .map((t) => String(t))
      .find((t) => t.length > 0 && t !== "[object Object]") ?? null;
  tr.set(t, e);
  return e;
}
function tv(t) {
  if (!X(t)) {
    return [];
  }
  let e = [];
  tg(t).forEach((r) => {
    if (r === "constructor" || r.startsWith("#__interface_")) {
      return;
    }
    let o = t[r];
    if (typeof o === "function" && o.length === 0) {
      try {
        e.push(o.call(t));
      } catch {}
    }
  });
  return e;
}
function tg(t) {
  let e = new Set();
  let r = t;
  while (r != null && r !== Object.prototype) {
    Object.getOwnPropertyNames(r).forEach((t) => e.add(t));
    r = Object.getPrototypeOf(r);
  }
  return Array.from(e);
}
function tb(t) {
  return t != null;
}
let tw = Symbol("NO_DATA_CLASS_MATCH");
let tm = Symbol("NO_ENUM_MATCH");
function th(t, e, r = {}) {
  let o;
  let n;
  let i;
  let a;
  let s = {
    dataClassDescriptors: (n =
      (o = r.dataClasses ?? K) === K
        ? (to != null || (to = Object.values(c).map(tn).filter(tb)), to)
        : o.map(tn).filter(tb)),
    dataClassDescriptorBySerializer: ((t) => {
      let e = te.get(t);
      if (e != null) {
        return e;
      }
      let r = new Map();
      t.forEach((t) => {
        if (t.serializer != null) {
          r.set(t.serializer, t);
        }
      });
      te.set(t, r);
      return r;
    })(n),
  };
  let l = new t();
  if (e == null || typeof e !== "object") {
    return l;
  }
  i = ts(tc(t));
  a = new Map();
  Object.keys(l).forEach((t, e) => {
    if (i[e] != null) {
      a.set(t, i[e]);
    }
  });
  let d = a;
  Object.entries(e).forEach(([t, e]) => {
    let r = H(t);
    if (r in l && typeof l[r] !== "function") {
      l[r] = tf(e, l[r], s, d.get(r) ?? null);
    }
  });
  return l;
}
function tf(t, e, r, o = null) {
  if (t == null) {
    return t;
  }
  let n = t_(t, o);
  if (n !== tm) {
    return n;
  }
  let i = ti(o);
  if (i != null && (V(t) || Array.isArray(t) || W(t))) {
    return tx(t, r, i);
  }
  let a = ta(o);
  if (a != null && (Y(t) || t instanceof Map || W(t))) {
    return ty(t, r, a);
  }
  if (typeof e === "bigint") {
    if (typeof t === "bigint") {
      return t;
    }
    return BigInt(t);
  }
  if (V(e)) {
    return tx(t, r, i);
  }
  if (Y(e)) {
    return ty(t, r, a);
  }
  if (Array.isArray(e)) {
    if (Array.isArray(t)) {
      return t.map((t) => tC(t, r, ti(o)));
    }
    if (W(t)) {
      return Object.entries(t).map(([t, e]) => ({
        key: t,
        value: tC(e, r, ta(o)),
      }));
    }
  }
  return tC(t, r, o);
}
function tx(t, e, r = null) {
  if (V(t)) {
    return t;
  }
  if (Array.isArray(t)) {
    return c.KtList.fromJsArray(t.map((t) => tk(t, e, r)));
  }
  if (W(t)) {
    let o = Object.entries(t).map(([t, o]) => ({
      key: t,
      value: tk(o, e, r),
    }));
    return c.KtList.fromJsArray(o);
  }
  return tC(t, e, r);
}
function ty(t, e, r = null) {
  if (Y(t)) {
    return t;
  }
  if (t instanceof Map) {
    return c.KtMap.fromJsMap(
      new Map(Array.from(t.entries(), ([t, o]) => [t, tk(o, e, r)])),
    );
  }
  if (W(t)) {
    return c.KtMap.fromJsMap(
      new Map(Object.entries(t).map(([t, o]) => [t, tk(o, e, r)])),
    );
  }
  return tC(t, e, r);
}
function tk(t, e, r = null) {
  if (t == null) {
    return t;
  }
  let o = t_(t, r);
  if (o !== tm) {
    return o;
  }
  if (Z(t)) {
    if ("value" in t) {
      return t.value;
    }
    return t.name;
  }
  if (V(t) || Y(t)) {
    return t;
  }
  if (Array.isArray(t)) {
    return c.KtList.fromJsArray(t.map((t) => tk(t, e, ti(r))));
  }
  if (t instanceof Map) {
    return c.KtMap.fromJsMap(
      new Map(Array.from(t.entries(), ([t, o]) => [t, tk(o, e, ta(r))])),
    );
  }
  if (W(t)) {
    let o = tT(t, e, r);
    if (o !== tw) {
      return o;
    }
    return Object.fromEntries(Object.entries(t).map(([t, r]) => [t, tk(r, e)]));
  }
  return t;
}
function tC(t, e, r = null) {
  if (t == null) {
    return t;
  }
  let o = t_(t, r);
  if (o !== tm) {
    return o;
  }
  if (Z(t)) {
    if ("value" in t) {
      return t.value;
    }
    return t.name;
  }
  if (V(t) || Y(t)) {
    return t;
  }
  if (Array.isArray(t)) {
    return t.map((t) => tC(t, e, ti(r)));
  }
  if (W(t)) {
    let o = tT(t, e, r);
    if (o !== tw) {
      return o;
    }
    return Object.fromEntries(Object.entries(t).map(([t, r]) => [t, tC(r, e)]));
  }
  return t;
}
function t_(t, e) {
  let r;
  let o =
    (r = tl(e)) == null
      ? null
      : (Object.values(r).find(
          (t) => Array.isArray(t) && t.length > 0 && t.every(Z),
        ) ?? null);
  if (o == null) {
    return tm;
  }
  let n = Z(t) ? ("value" in t ? t.value : t.name) : t;
  return o.find((t) => t.value === n || t.name === n) ?? t;
}
function tT(t, e, r = null) {
  let o;
  let n =
    ((o = tl(r)) == null
      ? null
      : (e.dataClassDescriptorBySerializer.get(o) ?? null)) ??
    ((t, e) => {
      if (!W(t) || e.dataClassDescriptors.length === 0) {
        return null;
      }
      let r = Object.keys(t).map(H);
      if (r.length === 0) {
        return null;
      }
      let o = null;
      let n = -1;
      let i = false;
      e.dataClassDescriptors.forEach((t) => {
        let length = r.filter((e) => t.keySet.has(e)).length;
        if (length === r.length) {
          if (length > n) {
            o = t;
            n = length;
            i = false;
            return;
          }
          if (length === n) {
            i = true;
          }
        }
      });
      if (i) {
        return null;
      }
      return o;
    })(t, e);
  if (n == null) {
    return tw;
  }
  let i = new n.DataClass();
  let a = ((t) => {
    if (t.fieldSerializers != null) {
      return t.fieldSerializers;
    }
    let e = ts(t.serializer);
    let r = new Map();
    t.keys.forEach((t, o) => {
      if (e[o] != null) {
        r.set(t, e[o]);
      }
    });
    t.fieldSerializers = r;
    return t.fieldSerializers;
  })(n);
  Object.entries(t).forEach(([t, r]) => {
    let o = H(t);
    if (n.keySet.has(o) && typeof i[o] !== "function") {
      i[o] = tf(r, i[o], e, a.get(o) ?? null);
    }
  });
  return i;
}
function tS(t, e = new WeakMap(), r = {}) {
  let o;
  if (t == null) {
    return null;
  }
  let n = typeof t;
  if (n === "bigint") {
    return Number(t);
  }
  if (n !== "object") {
    return t;
  }
  if (Z(t)) {
    return t.value ?? t.name;
  }
  if (V(t)) {
    return Array.from(t.asJsReadonlyArrayView(), (t) => tS(t, e, r));
  }
  if (Y(t)) {
    return Object.fromEntries(
      Array.from(t.asJsReadonlyMapView().entries(), ([t, o]) => [
        tB(t, r),
        tS(o, e, r),
      ]),
    );
  }
  if (Array.isArray(t)) {
    return t.map((t) => tS(t, e, r));
  }
  if (t instanceof Map) {
    return Object.fromEntries(
      Array.from(t.entries(), ([t, o]) => [tB(t, r), tS(o, e, r)]),
    );
  }
  if (J(t) === "Long" && X((i = t)) && typeof i.toString === "function") {
    return Number(t.toString());
  }
  if (
    t instanceof Number ||
    Object.prototype.toString.call(t) === "[object Number]"
  ) {
    return Number(t);
  }
  if ((o = J(t)) === "JsonLiteral" || o === "JsonNull") {
    var i;
    let e = t.toString();
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  }
  if (e.has(t)) {
    return e.get(t);
  }
  let a = {};
  e.set(t, a);
  Object.keys(t).forEach((o) => {
    let n = t[o];
    if (typeof n !== "function") {
      a[H(o)] = tS(n, e, r);
    }
  });
  return a;
}
function tB(t, e) {
  let r = Z(t) ? t.name : t;
  if (e.preserveMapKeys === true) {
    return String(r);
  }
  return H(String(r));
}
z(c.CommercialBenefitUseMode);
z(c.CommercialBenefitPayMode);
z(c.CommercialBenefitUnit);
z(c.CommercialBenefitLimitFreeType);
z(c.CommercialBenefitLimitDateType);
z(c.CommercialBenefitBatchCheckWithholdDeductActionType);
z(c.CommercialBenefitBatchCheckWithholdDeductStatus);
z(c.CommercialBenefitIdentificationType);
F(c.BenefitRefreshReason);
l.u1("commercial-benefit-service");
const tI = (t, e, r) => {
  let o;
  if ((o = typeof e !== "symbol" ? e + "" : e) in t) {
    return Object.defineProperty(t, o, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r,
    });
  }
  return (t[o] = r);
};
export let lZ = l.u1("commercial-payment-service");
function tE(t, e) {
  let r = t?.[e];
  if (typeof r === "string") {
    return r;
  }
}
function tP(t, e) {
  let r = t?.[e];
  if (r == null || typeof r !== "object" || Array.isArray(r)) {
    return undefined;
  }
  return r;
}
function tL(t) {
  if (typeof t === "string") {
    return t;
  }
  if (t == null) {
    return undefined;
  }
  return JSON.stringify(t);
}
function tR(t, e) {
  if (!(!t && !e)) {
    return {
      ...t,
      ...e,
    };
  }
}
function tj(t) {
  try {
    let e = JSON.parse(t);
    if (e == null || typeof e !== "object" || Array.isArray(e)) {
      return undefined;
    }
    return e;
  } catch {
    return;
  }
}
function tO(t) {
  if (t == null || typeof t !== "object" || Array.isArray(t)) {
    throw TypeError("Trade API params must be a JSON object");
  }
  let e = JSON.stringify(t);
  if (typeof e !== "string" || tj(e) == null) {
    throw TypeError("Trade API params must serialize to a JSON object");
  }
  return e;
}
function tD(t, e) {
  let r = tj(t);
  if (r == null) {
    throw Error(`${e} returned a non-object JSON response`);
  }
  let r_ret = r.ret;
  if (r_ret != null && String(r_ret) !== "0") {
    let t = typeof r.errmsg === "string" ? r.errmsg : "unknown error";
    let n = typeof r.log_id === "string" ? r.log_id : "";
    throw Error(`${e} failed: ret=${String(r_ret)}, message=${t}, logId=${n}`);
  }
  let r_response = r.response;
  let i =
    tP(r, "data") ??
    tP(r, "response") ??
    (typeof r_response === "string" ? tj(r_response) : undefined);
  if (i == null) {
    throw Error(`${e} returned a response without object data`);
  }
  return i;
}
function tN(t, e) {
  if (typeof t === "number" && t > 0) {
    return t;
  }
  return e;
}
function tM(t, sessionId) {
  return {
    sessionId,
    status: "cancel",
    success: false,
    errorCode: 100,
    errorMessage: "Payment session stopped",
    process: "cancel",
    errorDomain: 4,
    productId: t.productId,
    productType: t.productType ?? "subscription",
  };
}
export let Yc = class {
  constructor(
    t = c.Commerce.getInstance().paymentSessionService,
    e = c.Commerce.getInstance().paymentTradeService,
  ) {
    tI(this, "rawService");
    tI(this, "rawTradeService");
    tI(this, "activeSession");
    this.rawService = t;
    this.rawTradeService = e;
    Object.defineProperty(this, "_serviceBrand", {
      configurable: false,
      enumerable: false,
      value: undefined,
    });
  }
  async initTrade(t) {
    return tD(await this.rawTradeService.initTrade(tO(t)), "init_trade");
  }
  async queryTrade(t) {
    return tD(await this.rawTradeService.queryTrade(tO(t)), "query_trade");
  }
  startPaymentSession(t) {
    let e;
    let r = t.payChannel ?? "aggregate";
    let o = tN(t.queryMaxDurationMs, 300000);
    let n = tN(t.queryPollIntervalMs, 5000);
    let i = this.createKmpSessionRequest(t, r, o, n);
    this.stopActiveSession();
    let a = this.createSessionRuntime(t);
    this.activeSession = a;
    try {
      e = this.rawService.startPaymentSession(
        i,
        this.createKmpSessionCallback(a),
      );
      this.bindSessionId(a, e);
    } catch (error) {
      this.clearActiveSession(a);
      a.stopped = true;
      this.settleSession(a, tM(t, a.sessionId ?? ""));
      throw error;
    }
    return {
      sessionId: e,
      result: a.result,
      stop: a.stop,
      cancel: a.cancel,
    };
  }
  stopPaymentSession(t) {
    if (this.activeSession?.sessionId === t) {
      this.stopSession(this.activeSession);
    } else {
      this.rawService.stopPaymentSession(t);
    }
  }
  cancelPaymentSession(t) {
    if (this.activeSession?.sessionId === t) {
      this.cancelSession(this.activeSession);
    } else {
      this.rawService.cancelPaymentSession(t);
    }
  }
  createSessionRuntime(params) {
    let resolveResult = () => {};
    let r = {
      stopped: false,
      cancelRequested: false,
      resultSettled: false,
      result: new Promise((resolve) => {
        resolveResult = resolve;
      }),
      resolveResult,
      params,
      stop: () => {
        this.stopSession(r);
      },
      cancel: () => {
        this.cancelSession(r);
      },
    };
    return r;
  }
  stopActiveSession() {
    if (this.activeSession != null) {
      this.stopSession(this.activeSession);
    }
  }
  stopSession(t) {
    if (t.stopped) {
      return;
    }
    t.stopped = true;
    this.clearActiveSession(t);
    let t_sessionId = t.sessionId;
    try {
      if (t_sessionId != null) {
        this.rawService.stopPaymentSession(t_sessionId);
      }
    } finally {
      this.settleSession(t, tM(t.params, t_sessionId ?? ""));
    }
  }
  cancelSession(t) {
    if (t.stopped || t.cancelRequested) {
      return;
    }
    t.cancelRequested = true;
    let t_sessionId = t.sessionId;
    if (t_sessionId == null) {
      t.cancelRequested = false;
      return;
    }
    if (!this.rawService.cancelPaymentSession(t_sessionId)) {
      t.cancelRequested = false;
    }
  }
  bindSessionId(t, e) {
    if (e.trim() === "") {
      throw Error("KMP payment session returned an empty sessionId");
    }
    if (t.sessionId != null && t.sessionId !== e) {
      throw Error(`KMP payment sessionId changed from ${t.sessionId} to ${e}`);
    }
    t.sessionId = e;
  }
  isCurrentSession(t) {
    return this.activeSession === t && !t.stopped;
  }
  clearActiveSession(t) {
    if (this.activeSession === t) {
      this.activeSession = undefined;
    }
  }
  settleSession(t, e) {
    if (!t.resultSettled) {
      t.resultSettled = true;
      t.resolveResult(e);
    }
  }
  completeSession(t, e, r) {
    if (this.isCurrentSession(t)) {
      t.stopped = true;
      this.clearActiveSession(t);
      this.invokeFinalCallbackAndSettle(t, e, r);
    }
  }
  invokeFinalCallbackAndSettle(t, e, r) {
    Promise.resolve()
      .then(() => r?.(e))
      .catch((t) => {
        f("error", "[Commerce.Pay.WebFacade] payment callback failed", t);
      })
      .finally(() => {
        this.settleSession(t, e);
      });
  }
  createKmpSessionRequest(
    t,
    payChannel,
    queryMaxDurationMs,
    queryPollIntervalMs,
  ) {
    let n;
    let i;
    let a =
      Object.keys(
        (i = Object.entries({
          page_from: t.pageFrom,
        }).reduce((acc, [e, r]) => {
          if (!(r == null || (typeof r === "string" && r.trim() === ""))) {
            acc[e] = r;
          }
          return acc;
        }, {})),
      ).length > 0
        ? i
        : undefined;
    return th(c.PaymentSessionParams, {
      productId: t.productId,
      skuId: t.skuId ?? "",
      productType: t.productType ?? "subscription",
      channelType: t.channelType ?? "third_party",
      scene: t.scene,
      payChannel,
      benefitTargetJson: tL(
        t.benefitTarget == null
          ? undefined
          : {
              target_id: t.benefitTarget.targetId,
              target_type: String(t.benefitTarget.targetType),
            },
      ),
      orderExtra: tL(
        ((t, e) => {
          if (!t) {
            return e;
          }
          if (e == null) {
            return t;
          }
          if (typeof e === "string") {
            let r = tj(e);
            if (r == null) {
              return e;
            }
            return tR(t, r);
          }
          return tR(t, e);
        })(a, t.orderExtra),
      ),
      goodsID: t.goodsId,
      goodsType: t.goodsType,
      pmsTrade: t.pmsTrade,
      extraRequestParamsJson: ((t) => {
        if (t == null) {
          return;
        }
        let e = Object.entries(t).reduce((acc, [e, r]) => {
          if (
            !(
              r == null ||
              (e !== "pms_extra" && typeof r === "string" && r.trim() === "")
            )
          ) {
            acc[e] = String(r);
          }
          return acc;
        }, {});
        if (Object.keys(e).length > 0) {
          return JSON.stringify(e);
        }
      })(
        ((t) => {
          let e = ((t) => {
            if (t != null) {
              return {
                is_agreement_v2: t.isAgreementV2,
                is_compensate_trade: t.isCompensateTrade,
                compensation_pms_trade: t.compensationPmsTrade,
              };
            }
          })(t.thirdPartyInfo);
          if (!(!t.extraRequestParams && !e && t.pmsExtra == null)) {
            return {
              ...t.extraRequestParams,
              ...e,
              ...(t.pmsExtra == null
                ? {}
                : {
                    pms_extra: t.pmsExtra,
                  }),
            };
          }
        })(t),
      ),
      reportDataJson: tL(tR(a, t.reportData)),
      returnUrl:
        t.returnUrl ??
        (payChannel === "aggregate"
          ? typeof window === "undefined"
            ? "/payment-return"
            : new URL("/payment-return", window.location.origin).toString()
          : undefined),
      colorTheme: t.colorTheme ?? "light",
      eventTrackingInfo:
        typeof (n = t.eventTrackingInfo) === "string"
          ? n
          : JSON.stringify(n ?? {}),
      gpUnavailable: t.gpUnavailable ?? true,
      language: t.language ?? globalThis.navigator?.language ?? "en",
      userCreateTime: t.userCreateTime ?? Math.floor(Date.now() / 1000),
      requestId: t.requestId,
      tradeVer: t.tradeVer ?? "",
      queryMaxDurationMs,
      queryPollIntervalMs,
    });
  }
  createKmpSessionCallback(t) {
    let { params } = t;
    return {
      onTaskStart: (r, o) => {
        if (this.isCurrentSession(t)) {
          this.bindSessionId(t, r);
          if (o === "create_order") {
            params.onCreateOrderStart?.(r);
          }
          if (o === "query_order") {
            params.onQueryOrderStart?.(r);
          }
        }
      },
      onTaskFinished: (r, o, n) => {
        if (!this.isCurrentSession(t)) {
          return;
        }
        this.bindSessionId(t, r);
        let i = ((t, e) => {
          if (t !== "create_order" || e == null) {
            return;
          }
          let r = tS(e);
          if (r.type !== "create_order") {
            return;
          }
          let payloadJson = r.payloadJson ?? "";
          let payload = tj(payloadJson);
          let actionType = tE(payload, "actionType");
          if (actionType != null && actionType !== "") {
            return {
              sessionId: tE(payload, "sessionId") ?? "",
              actionType,
              orderId: tE(payload, "orderId") ?? null,
              productId: tE(payload, "productId") ?? "",
              productType: tE(payload, "productType") ?? "subscription",
              channelType: tE(payload, "channelType") ?? "",
              payloadJson,
              payload,
            };
          }
        })(o, n);
        if (i != null) {
          try {
            params.onPaymentAction?.(i);
          } catch (error) {
            f(
              "error",
              "[Commerce.Pay.WebFacade] payment action callback failed",
              error,
            );
          }
        }
      },
      onFlowFinished: (r) => {
        var o;
        var n;
        let i;
        let a = {
          ...(i = tS(r)),
          queryOrderResult: ((t) => {
            if (t == null || t === "") {
              return;
            }
            let e = tj(t);
            if (e == null) {
              return;
            }
            let r = tP(e, "data");
            let paymentInfo = ((t) => {
              let e;
              let r;
              if (t == null) {
                return;
              }
              let o = tP(t, "payment_amount");
              return {
                paymentMethod: tE(t, "payment_method"),
                paymentAmount:
                  o == null
                    ? undefined
                    : {
                        amount:
                          ((e = o),
                          typeof (r = e?.amount) === "number" &&
                          Number.isFinite(r)
                            ? r
                            : undefined),
                        currencyCode: tE(o, "currency_code"),
                        amountTips: tE(o, "amount_tips"),
                      },
              };
            })(tP(r, "payment_info"));
            return {
              success: String(e.ret) === "0",
              logId: tE(e, "log_id"),
              paymentInfo,
            };
          })(i.queryOrderServerInfo),
        };
        if (this.isCurrentSession(t)) {
          if (a.sessionId != null) {
            this.bindSessionId(t, a.sessionId);
          }
          this.completeSession(
            t,
            a,
            ((o = params),
            (n = a).status === "success"
              ? o.onPaySuccess
              : n.status === "cancel"
                ? o.onPayCancel
                : o.onPayFail),
          );
        }
      },
    };
  }
};
Object.freeze({
  VIP: "vip",
  CREDITS: "credits",
});
l.u1("commercial-product-service");
F(c.CreditHistoryType);
z(c.UserCreditQueryScope);
F(c.CreditTradeSource);
F(c.CreditStatus);
l.u1("commercial-user-credit-service");
Q(c.TeamRole);
Q(c.TeamStatus);
Q(c.TeamMemberStatus);
Q(c.JoinTeamApprovalStatus);
Q(c.JoinTeamApprovalAction);
Q(c.JoinTeamResult);
q(c.TeamJoinStatus);
q(c.TeamPermissionAction);
q(c.TeamPermissionDisabledReason);
l.u1("commercial-team-service");
c.ResourceActionType;
c.ResourcePositionClickAction;
l.u1("commercial-resource-position-service");
l.u1("commercial-user-info-service");
l.u1("commercial-cn-subscription-management-service");
l.u1("commercial-overseas-subscription-management-service");
z(c.AppealType);
l.u1("commercial-appeal-service");
const tQ = (t, e, r) => {
  let o;
  if ((o = typeof e !== "symbol" ? e + "" : e) in t) {
    return Object.defineProperty(t, o, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: r,
    });
  }
  return (t[o] = r);
};
export let b_ = l.u1("commercial-corporate-payment-phone-binding-service");
class tF extends Error {
  constructor(t) {
    super("Corporate payment phone-binding request failed");
    tQ(this, "reason");
    this.name = "CorporatePaymentPhoneBindingError";
    this.reason = t;
  }
}
function tH(t) {
  let e = tS(t);
  return {
    bound: e.bound,
    maskedPhone: e.maskedPhone ?? undefined,
    bindingVersion: e.bindingVersion ?? undefined,
    canUpdate: e.canUpdate ?? undefined,
  };
}
function tX(t) {
  let e = tS(t);
  return {
    verificationId: e.verificationId,
    sendStatus: e.sendStatus ?? undefined,
    codeLength: e.codeLength,
    resendAfterSeconds: e.resendAfterSeconds,
  };
}
export let AB = class {
  constructor(
    t = c.Commerce.getInstance().corporatePaymentPhoneBindingService,
  ) {
    tQ(this, "_serviceBrand");
    tQ(this, "rawService");
    this.rawService = t;
    Object.defineProperty(this, "_serviceBrand", {
      configurable: false,
      enumerable: false,
      value: undefined,
    });
  }
  async queryBinding() {
    return this.invoke(() => this.rawService.queryBinding(), tH);
  }
  async sendCode(t) {
    return this.invoke(
      () =>
        this.rawService.sendCode(th(c.SendCorporatePaymentPhoneCodeParams, t)),
      tX,
    );
  }
  async bindPhone(t) {
    return this.invoke(
      () => this.rawService.bindPhone(th(c.BindCorporatePaymentPhoneParams, t)),
      tH,
    );
  }
  async invoke(t, e) {
    try {
      return e(await t());
    } catch (error) {
      throw error instanceof tF
        ? error
        : new tF(
            ((t) => {
              if (t != null && typeof t === "object" && "reason" in t) {
                let e = tS(t.reason);
                if (
                  [
                    "invalid_input",
                    "forbidden",
                    "rate_limited",
                    "code_incorrect",
                    "code_expired",
                    "scope_mismatch",
                    "conflict",
                    "dependency_unavailable",
                    "unknown",
                  ].includes(String(e))
                ) {
                  return e;
                }
              }
              return "unknown";
            })(error),
          );
    }
  }
};
z(c.SalesType);
z(c.InvoiceType);
z(c.InvoiceStatus);
z(c.InvoiceRefundReason);
l.u1("commercial-invoice-service");
z(c.GoodType);
z(c.RefundStatus);
z(c.RefundSource);
l.u1("commercial-refund-service");
