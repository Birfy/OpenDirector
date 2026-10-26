import r from "NY";
import n from "QWK";
import a from "dw4";
import o from "mJ";
import { r1 } from "./module-loT_2.js";
export class d {
  load() {
    if (this._loadPromise) {
      return this._loadPromise;
    }
    if (this.status === "ready" && this._ssrSnapshotComplete) {
      return Promise.resolve();
    }
    if (this.status !== "ready") {
      this.status = "loading";
    }
    this._loadPromise = this._load();
    return this._loadPromise;
  }
  _load() {
    return r
      ._(function* () {
        try {
          const e = yield this._marketingResourceDataService.load();
          a.h5(() => {
            if (e.length > 0 || this.items.length === 0) {
              this.items = e;
            }
            this.status = "ready";
          });
        } catch (e) {
          a.h5(() => {
            this.status = "ready";
          });
        }
      })
      .call(this);
  }
  constructor(e) {
    this._marketingResourceDataService = e;
    this.status = "idle";
    this.items = [];
    this._ssrSnapshotComplete = false;
    var t = r1();
    if (t) {
      this.items = t.items;
      this.initialActivityPreviews = t.activityPreviews;
      this.status = "ready";
      this._ssrSnapshotComplete = t.complete;
    }
    this.initialSnapshotRestored = true;
    a.l_(this, {
      _marketingResourceDataService: false,
      _loadPromise: false,
      _ssrSnapshotComplete: false,
      initialSnapshotRestored: false,
      initialActivityPreviews: false,
      items: a.sH.ref,
    });
  }
}
d = n.Cg(
  [
    n.Qj(0, o.D),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [o.D === undefined ? Object : o.D]),
  ],
  d,
);
