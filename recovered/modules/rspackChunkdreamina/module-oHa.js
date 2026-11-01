import a from "oa";
let o = "bytedance";
let i = "byted";
let n = /^\S+?\.bytedance\.net$/.test(window.location.host);
let c = window.location.host.split(".")[0].includes("boe");
let l = window.location.host.match(/^\S+?\.jianying\.com$/);
if (
  !(
    /^\w+\.web\.bytedance\.net$/.test(window.location.host) ||
    /^\S+?boe\.bytedance\.net$/.test(window.location.host) ||
    /^\S?capcut-os\.bytedance\.net$/.test(window.location.host) ||
    window.location.host.endsWith(".boe.goofy.app") ||
    window.location.host.includes("localhost") ||
    window.location.hostname === "127.0.0.1"
  )
) {
  /^[\d.]+$/.test(window.location.hostname);
}
let m = `wss://sami-api-boe.${i}.org`;
let s = `https://sami-api-boe.${i}.org`;
let d = {
  sg1: "wss://sami-sg1.byteintlapi.com",
  maliva: "wss://sami-sg1.byteintlapi.com",
  "US-TTP": "https://sami.capcutapi.us",
  boei18n: m,
};
let u = {
  sg1: "https://sami-sg1.byteintlapi.com",
  maliva: "wss://sami-sg1.byteintlapi.com",
  "US-TTP": "https://sami.capcutapi.us",
  boei18n: s,
};
let p = {
  web_domain: `https://capcut-os-boe.${o}.net`,
  tts_domain: m,
  sami_domain: s,
  frontier_domain: `wss://capcut-os-boe.${o}.net`,
  commerce_domain: "",
};
let C = {
  web_domain: `https://capcut-web-va.${o}.net`,
  frontier_domain: `wss://frontier-va.${o}.net`,
  commerce_domain: `https://commerce-api-va.${o}.net`,
  tts_domain: d.maliva,
  sami_domain: u.maliva,
};
let v = {
  web_domain: l ? `https://${l[0]}` : "https://edit-api-sg.capcut.com",
  commerce_domain: "https://commerce-api-sg.capcut.com",
  frontier_domain: "wss://frontier-sg.capcut.com",
  tts_domain: "wss://sami-sg1.byteintlapi.com",
  sami_domain: "wss://sami-sg1.byteintlapi.com",
};
let _ = {
  code: "US",
  country_name: "",
  city: "",
  web_idc: "maliva",
  domain: n ? C : v,
};
if (c) {
  _.domain = p;
}
export let s8 = new (class {
  setVar(e, t) {
    if (!(this._map.get(e) && t === undefined)) {
      this._map.set(e, t);
    }
  }
  setVars(e) {
    for (let t in e) {
      this.setVar(t, e[t]);
    }
  }
  getVar(e) {
    return this._map.get(e);
  }
  getVars(e = []) {
    e = e.length === 0 ? Array.from(this._map.keys()) : e;
    let t = {};
    for (let r of e) {
      t[r] = this._map.get(r);
    }
    return t;
  }
  constructor(e) {
    this._map = new Map();
    this.setVars(e);
  }
})(
  (() => {
    let globalThis___locationInfo = globalThis.__locationInfo;
    if (globalThis___locationInfo) {
      let t = globalThis___locationInfo.web_idc;
      globalThis___locationInfo.domain.tts_domain = d[t];
      globalThis___locationInfo.domain.sami_domain = u[t];
    } else {
      globalThis___locationInfo = _;
    }
    return a._(
      {
        web_idc: globalThis___locationInfo.web_idc,
        country_code: globalThis___locationInfo.code,
      },
      globalThis___locationInfo.domain,
    );
  })(),
);
