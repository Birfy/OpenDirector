export default {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: true,
  code: require("./module-gcE.js").validateUnion,
  error: {
    message: "must match a schema in anyOf",
  },
};
