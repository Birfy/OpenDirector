export var DowngradeErrorCode;
let o;
o = DowngradeErrorCode || (DowngradeErrorCode = {});
o[(o.NoError = 0)] = "NoError";
o[(o.InvalidDraftOrInvalidMinVersion = -1)] = "InvalidDraftOrInvalidMinVersion";
o[(o.InvalidTargetVersion = -2)] = "InvalidTargetVersion";
export class DowngradeError {
  constructor(e, t) {
    this.code = e;
    this.message = t;
  }
}
