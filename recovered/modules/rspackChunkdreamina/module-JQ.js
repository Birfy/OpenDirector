import r from "Rd";
const o =
  (this && this.__decorate) ||
  function (e, t, i, o) {
    let r;
    const arguments_length = arguments.length;
    let n =
      arguments_length < 3
        ? t
        : o === null
          ? (o = Object.getOwnPropertyDescriptor(t, i))
          : o;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
      n = Reflect.decorate(e, t, i, o);
    } else {
      for (let s = e.length - 1; s >= 0; s--) {
        if ((r = e[s])) {
          n =
            (arguments_length < 3
              ? r(n)
              : arguments_length > 3
                ? r(t, i, n)
                : r(t, i)) || n;
        }
      }
    }
    if (arguments_length > 3 && n) {
      Object.defineProperty(t, i, n);
    }
    return n;
  };
export class DASubjectInfo extends r.Serializable {
  constructor() {
    super(...arguments);
    this.subjectId = undefined;
    this.dataId = undefined;
    this.isPublish = undefined;
  }
}
o(
  [r.serializable("subject_id", undefined, "int64")],
  DASubjectInfo.prototype,
  "subjectId",
  undefined,
);
o(
  [r.serializable("data_id", undefined, "int64")],
  DASubjectInfo.prototype,
  "dataId",
  undefined,
);
o(
  [r.serializable("is_publish")],
  DASubjectInfo.prototype,
  "isPublish",
  undefined,
);
