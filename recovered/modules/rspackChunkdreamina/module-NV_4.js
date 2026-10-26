import { I } from "./module-vr.js";
export var w = (e) => {
  var { request } = e;
  return Promise.resolve(
    I()
      ? {
          lang: "",
          i18nData: {},
        }
      : {
          lang: "",
          i18nData: {},
          blockedByRegion: true,
        },
  );
};
