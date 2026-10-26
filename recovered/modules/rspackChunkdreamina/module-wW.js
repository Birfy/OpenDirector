import r from "dw4";
const l = "dreamina-video-player-mute-state";
export class Y {
  static get muted() {
    return this._muted;
  }
  static setMuted(e) {
    this._muted = e;
    this.saveMuteState(e);
  }
  static loadMuteState() {
    try {
      const e = localStorage.getItem(l);
      return e === "true";
    } catch (e) {
      return false;
    }
  }
  static saveMuteState(e) {
    try {
      localStorage.setItem(l, String(e));
    } catch (e) {}
  }
  noop() {}
  constructor() {
    r.l_(this);
  }
}
Y._muted = Y.loadMuteState();
