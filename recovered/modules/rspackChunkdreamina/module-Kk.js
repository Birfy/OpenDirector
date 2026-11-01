export function W(e) {
  return e
    .map((historyInfo, index) => ({
      historyInfo,
      index,
    }))
    .sort((e, t) => {
      var i = Number(e.historyInfo.createTime);
      var n = Number(t.historyInfo.createTime);
      var r = Number.isFinite(i);
      var a = Number.isFinite(n);
      if (r && a) {
        return i - n || e.index - t.index;
      }
      if (r !== a) {
        if (r) {
          return -1;
        }
        return 1;
      }
      return e.index - t.index;
    })
    .map((e) => {
      var { historyInfo } = e;
      return historyInfo.submitId;
    });
}
