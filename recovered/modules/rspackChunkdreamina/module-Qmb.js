let r = new Set([
  "string",
  "number",
  "integer",
  "boolean",
  "null",
  "object",
  "array",
]);
export const isJSONType = function (e) {
  return typeof e === "string" && r.has(e);
};
export const getRules = function () {
  let e = {
    number: {
      type: "number",
      rules: [],
    },
    string: {
      type: "string",
      rules: [],
    },
    array: {
      type: "array",
      rules: [],
    },
    object: {
      type: "object",
      rules: [],
    },
  };
  return {
    types: {
      ...e,
      integer: true,
      boolean: true,
      null: true,
    },
    rules: [
      {
        rules: [],
      },
      e.number,
      e.string,
      e.array,
      e.object,
    ],
    post: {
      rules: [],
    },
    all: {},
    keywords: {},
  };
};
