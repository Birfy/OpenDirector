import i from "Rb";
export function Y(e) {
  return e.map(function e(t) {
    return t.map((t) => {
      var { optionKey, condition, logic, conditions } = t;
      if (logic && !optionKey) {
        return new i.DMLMutexRule({
          logic,
          conditions: e(conditions != null ? conditions : []),
        });
      }
      var condition_1 = condition
        ? new i.DMLMutexCondition({
            operation: condition.operation,
            value: condition.value,
          })
        : undefined;
      return new i.DMLMutexRule({
        optionKey,
        condition: condition_1,
      });
    });
  });
}
