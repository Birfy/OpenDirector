export var EL;
let o;
o = EL || (EL = {});
o[(o.Entry = 0)] = "Entry";
o[(o.Event = 1)] = "Event";
o[(o.UserInput = 2)] = "UserInput";
o[(o.Task = 3)] = "Task";
export class ob {
  background() {
    return new ob(this.type);
  }
  setValue(e, t) {
    this._store.set(e, t);
  }
  getValue(e) {
    return this._store.get(e);
  }
  constructor(e = 3) {
    this.type = e;
    this._store = new Map();
  }
}
export function Qz() {
  return new ob(0);
}
export function KK() {
  return new ob(1);
}
export function p3() {
  return new ob(2);
}
export function $n() {
  return new ob(3);
}
export function og() {
  return new ob();
}
