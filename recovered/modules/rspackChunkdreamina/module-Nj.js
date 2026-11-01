import i from "yh";
export function X(e) {
  const t = e.at(0);
  return !!(t == null
    ? undefined
    : t.strategies.some((e) => {
        var t;
        return (
          ((t = e.limitStrategy) == null ? undefined : t.limitFreeType) ===
            i._3.LIMIT_BY_TIME &&
          e.limitStrategy.limitDateType === i.s5.LimitDateNull
        );
      }));
}
