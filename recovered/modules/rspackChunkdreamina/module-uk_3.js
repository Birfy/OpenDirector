import r from "Kd";
import n from "jV7";
import a from "Ifd";
const o = "by".concat(n.k8, "edan").concat(n.dx, "e.net");
export var jg = {
  [a._.Boe]: {
    [a.z.Sg]: "https://capcut-os-boe.".concat(o),
    [a.z.Cn]: "https://dreamina-cn-boe.".concat(o),
  },
  [a._.Ppe]: {
    [a.z.Sg]: "https://mweb-api-sg.".concat(o),
    [a.z.Cn]: "https://".concat(location.hostname),
  },
  [a._.Online]: {
    [a.z.Sg]: "https://mweb-api-sg.capcut.com",
    [a.z.Cn]: "https://".concat(location.hostname),
  },
};
export var l6 = {
  [a._.Boe]: jg[a._.Boe][a.z.Cn],
  [a._.Ppe]: jg[a._.Ppe][a.z.Cn],
  [a._.Online]: r.a.CAPCUT_OFFICIAL_WEBSITE,
};
