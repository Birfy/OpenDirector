import a from "./module-czf.js";
import s from "./module-RTF.js";
export class p {
  constructor(e) {
    let t;
    this._ajv =
      e ??
      (s(
        (t = new a({
          strict: false,
          validateFormats: true,
          validateSchema: false,
          allErrors: true,
        })),
      ),
      t);
  }
  getValidator(e) {
    let t =
      "$id" in e && typeof e.$id === "string"
        ? (this._ajv.getSchema(e.$id) ?? this._ajv.compile(e))
        : this._ajv.compile(e);
    return (e) => {
      if (t(e)) {
        return {
          valid: true,
          data: e,
          errorMessage: undefined,
        };
      }
      return {
        valid: false,
        data: undefined,
        errorMessage: this._ajv.errorsText(t.errors),
      };
    };
  }
}
