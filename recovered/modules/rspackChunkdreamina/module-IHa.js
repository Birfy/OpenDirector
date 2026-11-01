import r from "oa";
import o from "bk";
import n from "qa";
import { Z } from "./module-iU_2.js";
function s(e) {
  const { minTotalCount } = e;
  return n._(e, ["minTotalCount"]);
}
export function T(e) {
  return Z(
    o._(r._({}, e), {
      limits: ((e) => {
        let t;
        let i;
        const { materialCombinationRule } = e;
        if (materialCombinationRule) {
          return o._(r._({}, e), {
            materialCombinationRule: o._(r._({}, materialCombinationRule), {
              anyOfCombinations:
                (t = materialCombinationRule.anyOfCombinations) == null
                  ? undefined
                  : t.map((e) => {
                      var t;
                      return o._(r._({}, e), {
                        conditions:
                          (t = e.conditions) == null ? undefined : t.map(s),
                      });
                    }),
              allOfConditions:
                (i = materialCombinationRule.allOfConditions) == null
                  ? undefined
                  : i.map(s),
            }),
          });
        }
        return e;
      })(e.limits),
    }),
  );
}
