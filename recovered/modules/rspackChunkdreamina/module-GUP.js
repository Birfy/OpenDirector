import i from "Ut";
export function m(e) {
  let t;
  if (
    (t =
      e == null
        ? undefined
        : e.filter((e) => e.abilityName !== i.DABlendAbilityName.StyleCode)
            .length) != null
  ) {
    return t;
  }
  return 0;
}
