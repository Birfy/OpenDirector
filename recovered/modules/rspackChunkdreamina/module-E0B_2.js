import i from "oa";
import n from "bk";
import a from "qa";
import o from "bT";
import s from "wb";
export function l(e) {
  const { initialSelectedProductId, onConfirm, prices, teamContext } = e;
  const [d, setD] = o.useState(initialSelectedProductId);
  const onSelectionChange = o.useCallback((e) => {
    setD(e);
  }, []);
  return {
    model: o.useMemo(
      () =>
        ((e) => {
          const { onSelectionChange, onConfirm } = e;
          const o = ((e) => {
            let t;
            let r;
            let i;
            let n;
            let a;
            let o;
            let c;
            let l;
            let d;
            const { prices, selectedProductId, teamContext } = e;
            t = teamContext.currentTeamMemberLimit;
            r = teamContext.currentTeamVipLevel;
            const options =
              typeof t === "number" && Number.isFinite(t)
                ? ((e) => {
                    const { prices } = e;
                    return prices.map((sku) => ({
                      memberLimit: sku.memberLimit,
                      sku,
                    }));
                  })({
                    prices,
                  }).filter(
                    (e) => e.memberLimit > t && e.sku.teamVipLevel === r,
                  )
                : [];
            const selectedUpgradeSku = selectedProductId
              ? (i =
                  (n = options.find(
                    (e) => e.sku.productId === selectedProductId,
                  )) == null
                    ? undefined
                    : n.sku) != null
                ? i
                : (a = options[0]) == null
                  ? undefined
                  : a.sku
              : (o = options[0]) == null
                ? undefined
                : o.sku;
            const summary = selectedUpgradeSku
              ? ((d =
                  (c = selectedUpgradeSku.vipBenefitPackage) == null
                    ? undefined
                    : c.userCredit),
                {
                  targetSeatCount: selectedUpgradeSku.memberLimit,
                  compensationExtraCreditAmount:
                    d == null ? undefined : d.compensationExtraAmount,
                  compensationCreditDescription:
                    d == null ? undefined : d.description,
                  compensationPayAmount:
                    (l = selectedUpgradeSku.compensationPrice) == null
                      ? undefined
                      : l.totalAmount,
                  currencyTips: selectedUpgradeSku.currencyTips,
                })
              : undefined;
            return {
              selectedUpgradeSku,
              summary,
              quantity: selectedUpgradeSku
                ? {
                    label: "targetSeatCount",
                    value: selectedUpgradeSku.memberLimit,
                    options,
                    readOnly: options.length <= 1,
                  }
                : undefined,
              summaryRows: [
                {
                  key: "compensationExtraCreditAmount",
                  value:
                    summary == null
                      ? undefined
                      : summary.compensationExtraCreditAmount,
                },
                {
                  key: "compensationPayAmount",
                  value: ((e, t) => {
                    const r = e == null ? undefined : e.compensationPayAmount;
                    if (typeof r !== "number" || !t) {
                      return r;
                    }
                    const { currencyCode, currencyTips = "" } = t;
                    if (currencyCode) {
                      return s.X(currencyCode, currencyTips, r);
                    }
                    return r;
                  })(summary, selectedUpgradeSku),
                },
              ],
              disabled: !selectedUpgradeSku,
            };
          })(a._(e, ["onSelectionChange", "onConfirm"]));
          return n._(i._({}, o), {
            onQuantityChange:
              o.quantity && !o.quantity.readOnly
                ? (e) => {
                    if (onSelectionChange == null) {
                      return undefined;
                    }
                    return onSelectionChange(
                      {
                        selectedProductId: e.sku.productId,
                      }.selectedProductId,
                    );
                  }
                : undefined,
            onConfirm: () => {
              if (o.selectedUpgradeSku && !o.disabled) {
                if (onConfirm != null) {
                  onConfirm(o.selectedUpgradeSku);
                }
              }
            },
          });
        })({
          prices,
          teamContext,
          selectedProductId: d,
          onSelectionChange,
          onConfirm,
        }),
      [onSelectionChange, onConfirm, prices, d, teamContext],
    ),
    selectedProductId: d,
    setSelectedProductId: setD,
  };
}
