import r from "FOT";
import o from "VMz";
const n = {
  disjunction: {
    key: "reference_validation_material_or_join",
    defaultMessage: "或",
  },
  conjunction: {
    key: "reference_validation_material_enum_join",
    defaultMessage: "、",
  },
};
export function i(e) {
  const { materialTypes, joinMode, count } = e;
  if (materialTypes == null ? undefined : materialTypes.length) {
    return {
      names: materialTypes
        .map((type) =>
          o.f({
            type,
            count,
          }),
        )
        .join(r.h(n[joinMode])),
      typeCount: materialTypes.length,
    };
  }
  return {
    names: o.f({
      count,
    }),
    typeCount: 1,
  };
}
