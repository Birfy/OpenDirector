import { RZ } from "./module-n6.js";
export var w = (e) => {
  var { request } = e;
  return new Promise((resolve) => {
    resolve(
      typeof window !== "undefined" && !RZ(window.location.hostname)
        ? {
            lang: "",
            i18nData: {},
            blockedByRegion: true,
          }
        : {
            lang: "",
            i18nData: {},
          },
    );
  });
};
