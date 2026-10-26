function r(e) {
  if ("values" in e) {
    return {
      key: e.type,
      valueType: "enum",
      enumVal: {
        enumType: typeof e.values[0] === "string" ? "string" : "int",
        stringValue: e.values.map(String),
        doubleValue: [],
        intValue: typeof e.values[0] === "number" ? e.values : [],
        defaultValIdx:
          e.defaultValue !== undefined
            ? e.values.findIndex((t) => t === e.defaultValue)
            : 0,
      },
      forbiddenDisplay: e.disabled,
    };
  }
  return {
    key: e.type,
    valueType: "enum",
    enumVal: {
      enumType: "int",
      stringValue: [],
      doubleValue: [],
      intValue: [],
      defaultValIdx: 0,
    },
    forbiddenDisplay: e.disabled,
  };
}
export function K(e) {
  let t;
  return {
    icon: e.coverUrl
      ? {
          imageUrl: e.coverUrl,
        }
      : undefined,
    modelName: e.name,
    modelNameStarlingKey: e.modelNameStarlingKey,
    modelTip: e.description,
    featureKey: e.featureKey,
    iconTag: e.iconTag,
    options: e.fields.map(r),
    modelReqKey: e.key,
    extra: {
      enableTaskCancel: (t = e.extra) == null ? undefined : t.enableTaskCancel,
    },
  };
}
