export var UpgradeErrorCode;
let o;
o = UpgradeErrorCode || (UpgradeErrorCode = {});
o[(o.NoError = 0)] = "NoError";
o[(o.InvalidDraftOrInvalidMinVersion = -1)] = "InvalidDraftOrInvalidMinVersion";
export class UpgradeError {
  constructor(e, t) {
    this.code = e;
    this.message = t;
  }
}
