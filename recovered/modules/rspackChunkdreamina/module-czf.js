import a from "./module-uJI.js";
import s from "./module-cQB.js";
import i from "./module-KM9.js";
import o from "./module-Hda_2.js";
import { KeywordCxt } from "./module-eI2.js";
import { CodeGen, Name, _, nil, str, stringify } from "./module-uEg.js";
import f from "./module-ZKU.js";
import p from "./module-yC_2.js";
let n = ["/properties"];
let l = "http://json-schema.org/draft-07/schema";
export class Ajv extends a {
  _addVocabularies() {
    super._addVocabularies();
    s.forEach((e) => this.addVocabulary(e));
    if (this.opts.discriminator) {
      this.addKeyword(i);
    }
  }
  _addDefaultMetaSchema() {
    super._addDefaultMetaSchema();
    if (!this.opts.meta) {
      return;
    }
    let e = this.opts.$data ? this.$dataMetaSchema(o, n) : o;
    this.addMetaSchema(e, l, false);
    this.refs["http://json-schema.org/schema"] = l;
  }
  defaultMeta() {
    return (this.opts.defaultMeta =
      super.defaultMeta() || (this.getSchema(l) ? l : undefined));
  }
}
Ajv;
let _t;
_t = Ajv;
export default Ajv;
Ajv.Ajv = Ajv;
Object.defineProperty(_t, "__esModule", {
  value: true,
});
_t.default = Ajv;
Object.defineProperty(_t, "KeywordCxt", {
  enumerable: true,
  get: function () {
    return KeywordCxt;
  },
});
Object.defineProperty(_t, "_", {
  enumerable: true,
  get: function () {
    return _;
  },
});
Object.defineProperty(_t, "str", {
  enumerable: true,
  get: function () {
    return str;
  },
});
Object.defineProperty(_t, "stringify", {
  enumerable: true,
  get: function () {
    return stringify;
  },
});
Object.defineProperty(_t, "nil", {
  enumerable: true,
  get: function () {
    return nil;
  },
});
Object.defineProperty(_t, "Name", {
  enumerable: true,
  get: function () {
    return Name;
  },
});
Object.defineProperty(_t, "CodeGen", {
  enumerable: true,
  get: function () {
    return CodeGen;
  },
});
Object.defineProperty(_t, "ValidationError", {
  enumerable: true,
  get: function () {
    return f;
  },
});
Object.defineProperty(_t, "MissingRefError", {
  enumerable: true,
  get: function () {
    return p;
  },
});
