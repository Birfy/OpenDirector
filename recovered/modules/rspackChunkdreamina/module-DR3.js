import { Name, _, getProperty, str } from "./module-uEg.js";
import { escapeFragment, getErrorPath } from "./module-c5o.js";
export const getSubschema = function (
  e,
  { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef },
) {
  if (keyword !== undefined && schema !== undefined) {
    throw Error('both "keyword" and "schema" passed, only one allowed');
  }
  if (keyword !== undefined) {
    let schema_1 = e.schema[keyword];
    if (schemaProp === undefined) {
      return {
        schema: schema_1,
        schemaPath: (0, _)`${e.schemaPath}${getProperty(keyword)}`,
        errSchemaPath: `${e.errSchemaPath}/${keyword}`,
      };
    }
    return {
      schema: schema_1[schemaProp],
      schemaPath: (0,
      _)`${e.schemaPath}${getProperty(keyword)}${getProperty(schemaProp)}`,
      errSchemaPath: `${e.errSchemaPath}/${keyword}/${escapeFragment(schemaProp)}`,
    };
  }
  if (schema !== undefined) {
    if (
      schemaPath === undefined ||
      errSchemaPath === undefined ||
      topSchemaRef === undefined
    ) {
      throw Error(
        '"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"',
      );
    }
    return {
      schema,
      schemaPath,
      topSchemaRef,
      errSchemaPath,
    };
  }
  throw Error('either "keyword" or "schema" must be passed');
};
export const extendSubschemaData = function (
  e,
  t,
  { dataProp, dataPropType, data, dataTypes, propertyName },
) {
  if (data !== undefined && dataProp !== undefined) {
    throw Error('both "data" and "dataProp" passed, only one allowed');
  }
  let { gen } = t;
  if (dataProp !== undefined) {
    let { errorPath, dataPathArr, opts } = t;
    c(gen.let("data", (0, _)`${t.data}${getProperty(dataProp)}`, true));
    e.errorPath = (0,
    str)`${errorPath}${getErrorPath(dataProp, dataPropType, opts.jsPropertySyntax)}`;
    e.parentDataProperty = (0, _)`${dataProp}`;
    e.dataPathArr = [...dataPathArr, e.parentDataProperty];
  }
  function c(r) {
    e.data = r;
    e.dataLevel = t.dataLevel + 1;
    e.dataTypes = [];
    t.definedProperties = new Set();
    e.parentData = t.data;
    e.dataNames = [...t.dataNames, r];
  }
  if (data !== undefined) {
    c(data instanceof Name ? data : gen.let("data", data, true));
    if (propertyName !== undefined) {
      e.propertyName = propertyName;
    }
  }
  if (dataTypes) {
    e.dataTypes = dataTypes;
  }
};
export const extendSubschemaMode = function (
  e,
  { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors },
) {
  if (compositeRule !== undefined) {
    e.compositeRule = compositeRule;
  }
  if (createErrors !== undefined) {
    e.createErrors = createErrors;
  }
  if (allErrors !== undefined) {
    e.allErrors = allErrors;
  }
  e.jtdDiscriminator = jtdDiscriminator;
  e.jtdMetadata = jtdMetadata;
};
