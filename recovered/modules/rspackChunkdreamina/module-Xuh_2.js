import s from "dw4";
import { Ye } from "./module-sxn.js";
import r from "pX";
export class Y {
  get voiceInputActive() {
    return this.status !== r.t.Idle;
  }
  setStatus(t) {
    this.status = t;
  }
  setWaveformLevels(t) {
    this.waveformLevels = t;
  }
  setTranscript(t) {
    this.transcript = t;
  }
  setPermissionDenied(t) {
    this.permissionDenied = t;
  }
  reset() {
    this.waveformLevels = Ye;
    this.transcript = "";
    this.permissionDenied = false;
  }
  constructor() {
    this.status = r.t.Idle;
    this.waveformLevels = Ye;
    this.transcript = "";
    this.permissionDenied = false;
    s.l_(this);
  }
}
