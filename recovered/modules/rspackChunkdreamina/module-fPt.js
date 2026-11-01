import i from "NY";
export function R(e) {
  return i
    ._(function* (e) {
      const { ctx, selectedSku, vipPayManager, input } = e;
      yield vipPayManager.purchaseTeamTrade(ctx, selectedSku, input);
    })
    .apply(this, arguments);
}
export function M(e) {
  return i
    ._(function* (e) {
      const { selectedSku, onPurchase } = e;
      if (selectedSku.disablePurchase) {
        return {
          skipped: true,
          reason: "disabled",
        };
      }
      yield onPurchase(selectedSku);
      return {
        skipped: false,
      };
    })
    .apply(this, arguments);
}
