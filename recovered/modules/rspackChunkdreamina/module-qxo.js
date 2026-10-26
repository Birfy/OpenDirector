import a from "Ut";
export function U(e, t) {
  const i = {};
  const n = {
    [a.DADraftCreatedPlatform.UNKNOWN]: "unknown",
    [a.DADraftCreatedPlatform.IOS]: "ios",
    [a.DADraftCreatedPlatform.ANDROID]: "android",
    [a.DADraftCreatedPlatform.WEB]: "web",
    [a.DADraftCreatedPlatform.SERVER]: "server",
  };
  i.generateAppName = t.createPlatform ? n[t.createPlatform] : "unknown";
  e.setParams(i);
}
