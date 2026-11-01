function n(e) {
  if (typeof e !== "string" || e.trim() !== "") {
    const t = typeof e === "string" ? Number(e) : e;
    if (typeof t === "number" && Number.isFinite(t) && t >= 0) {
      return t;
    }
    return undefined;
  }
}
export function u(e) {
  const billingTotalCredits = n(e == null ? undefined : e.totalCredits);
  const i = e == null ? undefined : e.queriedAtMs;
  return {
    billingTotalCredits,
    billingCreditDetails:
      billingTotalCredits === undefined
        ? undefined
        : ((e) => {
            if (e) {
              let t;
              let i;
              const r = [
                ["llm", (t = e.llm) == null ? undefined : t.histories],
                ["media", (i = e.media) == null ? undefined : i.histories],
              ].flatMap((e) => {
                var [t, i] = e;
                return (i != null ? i : []).flatMap((e, i) => {
                  var r;
                  var a;
                  var actualCredits = n(e.actualCreditAmount);
                  if (actualCredits === undefined) {
                    return [];
                  }
                  var { bizRecordId } = e;
                  var l =
                    (r = n(e.originCreditAmount)) != null ? r : actualCredits;
                  return [
                    {
                      id: "".concat(t, "-").concat(bizRecordId || i),
                      title:
                        ((a = e.title) == null ? undefined : a.trim()) ||
                        (t === "llm" ? "LLM" : "Media"),
                      actualCredits,
                      originalCredits: Math.max(l, actualCredits),
                      isLimitFree: e.isLimitFree === true,
                    },
                  ];
                });
              });
              if (r.length > 0) {
                return r;
              }
              return undefined;
            }
          })(e),
    billingQueriedAtMs:
      typeof i === "number" && Number.isFinite(i) && i >= 0 ? i : undefined,
  };
}
