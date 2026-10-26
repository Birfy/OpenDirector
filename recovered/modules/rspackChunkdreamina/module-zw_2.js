export function shouldUseGroup(e, t) {
  return t.rules.some((t) => shouldUseRule(e, t));
}
export function shouldUseRule(e, t) {
  let r;
  return (
    e[t.keyword] !== undefined ||
    ((r = t.definition.implements) == null
      ? undefined
      : r.some((t) => e[t] !== undefined))
  );
}
export const schemaHasRulesForType = function ({ schema, self }, a) {
  let s = self.RULES.types[a];
  return s && s !== true && shouldUseGroup(schema, s);
};
