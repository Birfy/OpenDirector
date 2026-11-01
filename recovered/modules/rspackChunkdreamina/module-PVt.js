import { DADraft } from "./module-j8A.js";
import "xh";
import r from "ST";
import a from "K8D";
import n from "HI";
import s from "xp";
export const downgradeDraftToMinVersion = function (e) {
  let t = new s.VersionUpDownTransformer();
  t.loadJSONString(e);
  let i = t.downgradeToMinVersion();
  if (i.code != 0) {
    return JSON.stringify(i);
  }
  let o = t.toJSONString();
  if (o === undefined || o === "") {
    return JSON.stringify({
      code: -1,
      message: "JSON stringify failed",
    });
  }
  return o;
};
export const upgradeDraftToCurrentVersion = function (e) {
  let t = new s.VersionUpDownTransformer();
  t.loadJSONString(e);
  let i = t.upgradeToCurrentVersion();
  if (i.code != 0) {
    return JSON.stringify(i);
  }
  let o = t.toJSONString();
  if (o === undefined || o === "") {
    return JSON.stringify({
      code: -1,
      message: "JSON stringify failed",
    });
  }
  return o;
};
export const transformDraftToServerFlow = function (e) {
  return n.DAToServerFlowTransformer.convertDraftJSONStringToServerFlowJSONString(
    e,
  );
};
export const fetchDraftResources = function (e) {
  let t;
  let i = new DADraft(e);
  if ((t = a.fetchDraftResources(i).toJSONString()) != null) {
    return t;
  }
  return '{"resources": []}';
};
r.toolCreateTextToImageDraft;
r.toolCreateDraftForAgent;
