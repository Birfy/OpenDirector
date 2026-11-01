import a from "dw4";
import r from "./module-ltb.js";
import { eZ } from "./module-L7p.js";
export class O {
  get isFormValid() {
    return (
      this.name.trim().length > 0 &&
      this.description.trim().length > 0 &&
      this.instruction.trim().length > 0
    );
  }
  get formData() {
    return {
      name: this.name.trim(),
      description: this.description.trim(),
      instruction: this.instruction.trim(),
    };
  }
  get initialName() {
    return this._initialName;
  }
  get initialDescription() {
    return this._initialDescription;
  }
  get isInstructionDirty() {
    return this.instruction.trim() !== this._initialInstruction.trim();
  }
  initializeForm(t) {
    let e;
    let i;
    let a;
    this._initialName = (e = t == null ? undefined : t.name) != null ? e : "";
    this._initialDescription =
      (i = t == null ? undefined : t.description) != null ? i : "";
    this._initialInstruction =
      (a = t == null ? undefined : t.instruction) != null ? a : "";
    this.name = this._initialName;
    this.description = this._initialDescription;
    this.instruction = this._initialInstruction;
  }
  setName(t) {
    return !!eZ(t) && ([...t].length <= r.q && (this.name = t), true);
  }
  setNameRaw(t) {
    if ([...t].length <= r.q) {
      this.name = t;
    }
  }
  setDescription(t) {
    if ([...t].length <= r.t) {
      this.description = t;
    }
  }
  setInstruction(t) {
    this.instruction = t;
  }
  syncInitialInstruction() {
    this._initialInstruction = this.instruction;
  }
  applyInstructionCanonicalValue(t) {
    if (this._initialInstruction !== t || this.instruction !== t) {
      this._initialInstruction = t;
      this.instruction = t;
    }
  }
  constructor() {
    this.name = "";
    this.description = "";
    this.instruction = "";
    this._initialName = "";
    this._initialDescription = "";
    this._initialInstruction = "";
    a.l_(this);
  }
}
