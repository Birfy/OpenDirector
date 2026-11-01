import o from "pz";
import { currentDreaminaAgreementVersion } from "./module-GH.js";
import { UpgradeError, UpgradeErrorCode } from "./module-mv_2.js";
require("./module-Rd.js").getOrCreateInterface(
  "transformers_version_updown_upgrade_upgrade_item",
  "UpgradeItem",
);
export class UpgradeManager {
  run(e) {
    let t;
    let i = currentDreaminaAgreementVersion;
    let e_version = e.version;
    let d = UpgradeManager.items.filter(
      (e) =>
        !!(
          o.DAUtils.compareSemVersion(e.fromVersion, e_version) >= 0 &&
          o.DAUtils.compareSemVersion(i, e.toVersion) >= 0
        ),
    );
    (d = d.sort((e, t) => {
      if (o.DAUtils.compareSemVersion(e.fromVersion, t.fromVersion) > 0) {
        return 1;
      }
      if (o.DAUtils.compareSemVersion(e.fromVersion, t.fromVersion) < 0) {
        return -1;
      }
      if (o.DAUtils.compareSemVersion(e.toVersion, t.toVersion) > 0) {
        return 1;
      }
      if (o.DAUtils.compareSemVersion(e.toVersion, t.toVersion) < 0) {
        return -1;
      }
      return 0;
    })).forEach((i) => {
      if (t != undefined) {
        return;
      }
      let o = i.run(e);
      if (o != undefined) {
        t = o;
      }
    });
    e.version = i;
    if (t != null) {
      return t;
    }
    return new UpgradeError(UpgradeErrorCode.NoError, "");
  }
}
UpgradeManager.items = [];
UpgradeManager.shared = new UpgradeManager();
