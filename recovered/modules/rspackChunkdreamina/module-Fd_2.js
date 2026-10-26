import n from "NY";
import r from "dw4";
import a from "tvS";
import o from "o7";
import s from "xi";
import c from "dx";
export var e = a.u1("team-management-invite-join-entry-service");
export class P extends o.jG {
  get containerService() {
    let e;
    if ((e = this._entry) == null) {
      return undefined;
    }
    return e.containerService;
  }
  restoreFromCurrentEntry() {
    return n
      ._(function* () {
        if (c.kb()) {
          try {
            const e = yield this._loader.load();
            this._adoptEntry(e);
            yield e.inviteJoinService.restoreFromCurrentEntry();
          } catch (error) {
            s.V.error("Failed to restore the lazy team invite entry:", error);
          }
        }
      })
      .call(this);
  }
  _adoptLoadedEntryAndRestorePersistedDialog() {
    try {
      const e = this._loader.getLoaded();
      if (!e) {
        return;
      }
      this._adoptEntry(e);
      e.inviteJoinService
        .restoreInviteJoinDialog()
        .catch((e) =>
          s.V.error("Failed to restore the persisted team invite dialog:", e),
        );
    } catch (error) {
      s.V.error("Failed to adopt the loaded team invite entry:", error);
    }
  }
  _adoptEntry(e) {
    if (this._entry !== e) {
      this._entryDisposable.value = e;
      this._entry = e;
    }
  }
  constructor(e) {
    super();
    this._loader = e;
    this._entryDisposable = this._register(new o.HE());
    this._entry = undefined;
    r.Gn(this, {
      _entry: r.sH.ref,
      containerService: r.EW,
      _adoptEntry: r.XI.bound,
    });
    this._register(
      this._loader.onLoad(() => {
        this._adoptLoadedEntryAndRestorePersistedDialog();
      }),
    );
    this._adoptLoadedEntryAndRestorePersistedDialog();
  }
}
