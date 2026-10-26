import o from "pz";
import { DowngradeError, DowngradeErrorCode } from "./module-XN2.js";
require("./module-Rd.js").getOrCreateInterface(
  "transformers_version_updown_downgrade_downgrade_item",
  "DowngradeItem",
);
export class DowngradeManager {
  run(e, t) {
    let i;
    let n;
    let e_version = e.version;
    let d = (i = e.minVersion) != null ? i : "0.0.1";
    if (o.DAUtils.compareSemVersion(t, d) < 0) {
      return new DowngradeError(
        DowngradeErrorCode.InvalidTargetVersion,
        `toVersion(${t}) < draftMinVersion(${d}), downgrade failed.`,
      );
    }
    let l = DowngradeManager.items.filter(
      (e) =>
        !!(
          o.DAUtils.compareSemVersion(e_version, e.fromVersion) >= 0 &&
          o.DAUtils.compareSemVersion(e.toVersion, t) >= 0
        ),
    );
    (l = l.sort((e, t) => {
      if (o.DAUtils.compareSemVersion(e.fromVersion, t.fromVersion) > 0) {
        return -1;
      }
      if (o.DAUtils.compareSemVersion(e.fromVersion, t.fromVersion) < 0) {
        return 1;
      }
      if (o.DAUtils.compareSemVersion(e.toVersion, t.toVersion) > 0) {
        return -1;
      }
      return 1 * !!(o.DAUtils.compareSemVersion(e.toVersion, t.toVersion) < 0);
    })).forEach((t) => {
      if (n != undefined) {
        return;
      }
      let i = t.run(e);
      if (i != undefined) {
        n = i;
      }
    });
    e.version = t;
    if (n != null) {
      return n;
    }
    return new DowngradeError(DowngradeErrorCode.NoError, "");
  }
  calcMinVersionOfDraft(e) {
    return "0.0.1";
  }
}
DowngradeManager.items = [];
DowngradeManager.shared = new DowngradeManager();
