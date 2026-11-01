import o from "Ut";
import { DowngradeError, DowngradeErrorCode } from "./module-XN2.js";
import { DowngradeManager } from "./module-hV_2.js";
import { UpgradeError, UpgradeErrorCode } from "./module-mv_2.js";
import { UpgradeManager } from "./module-JK.js";
export class VersionUpDownTransformer {
  loadJSONString(e) {
    let t = new o.DADraft(e);
    this.draft = t;
  }
  toJSONString() {
    let e;
    if ((e = this.draft) == null) {
      return undefined;
    }
    return e.toJSONString();
  }
  downgradeToMinVersion() {
    let draft = this.draft;
    let t = draft == null ? undefined : draft.minVersion;
    if (draft != undefined && t != undefined) {
      return DowngradeManager.shared.run(draft, t);
    }
    return new DowngradeError(
      DowngradeErrorCode.InvalidDraftOrInvalidMinVersion,
      "",
    );
  }
  upgradeToCurrentVersion() {
    let draft = this.draft;
    if (draft != undefined) {
      return UpgradeManager.shared.run(draft);
    }
    return new UpgradeError(
      UpgradeErrorCode.InvalidDraftOrInvalidMinVersion,
      "",
    );
  }
}
