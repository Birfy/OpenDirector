const ERR_INVALID_OPT_VALUE =
  require("./module-Bwd.js").F.ERR_INVALID_OPT_VALUE;
export default {
  getHighWaterMark: function (Z, Q, X, ee) {
    const et = Q.highWaterMark != null ? Q.highWaterMark : ee ? Q[X] : null;
    if (et != null) {
      if (!(isFinite(et) && Math.floor(et) === et) || et < 0) {
        throw new ERR_INVALID_OPT_VALUE(ee ? X : "highWaterMark", et);
      }
      return Math.floor(et);
    }
    if (Z.objectMode) {
      return 16;
    }
    return 16384;
  },
};
