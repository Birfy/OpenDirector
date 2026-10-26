const ERR_INVALID_OPT_VALUE =
  require("./module-abl.js").F.ERR_INVALID_OPT_VALUE;
export default {
  getHighWaterMark: function (J, Z, Q, tt) {
    const te = Z.highWaterMark != null ? Z.highWaterMark : tt ? Z[Q] : null;
    if (te != null) {
      if (!(isFinite(te) && Math.floor(te) === te) || te < 0) {
        throw new ERR_INVALID_OPT_VALUE(tt ? Q : "highWaterMark", te);
      }
      return Math.floor(te);
    }
    if (J.objectMode) {
      return 16;
    }
    return 16384;
  },
};
