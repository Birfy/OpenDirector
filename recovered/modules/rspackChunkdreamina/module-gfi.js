import i from "NY";
import r from "QWK";
import a from "dw4";
import o from "Kt";
import { jV } from "./module-meA.js";
import u from "zi0";
export class J9 extends u.Z {
  toJSON() {
    return {
      $type: J9.$type,
      ...super.toJSON(),
    };
  }
  resolveTextContent() {
    return i
      ._(function* () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        if (typeof this.textContent === "string") {
          return this.textContent;
        }
        if (this._loadingTextContent) {
          return this._loadingTextContent;
        }
        this._loadingTextContent = this._loadTextContent(e);
        const t = yield this._loadingTextContent;
        if (typeof t === "string") {
          this._setTextContent(t);
        } else {
          this._loadingTextContent = undefined;
        }
        return t;
      })
      .apply(this, arguments);
  }
  _loadTextContent(e) {
    return i
      ._(function* () {
        const t = yield this.resolveFile(e);
        if (t == null) {
          return undefined;
        }
        return t.text();
      })
      .call(this);
  }
  _setTextContent(e) {
    this.textContent = e;
  }
  constructor(e, t) {
    super(e, t);
    this.type = "markdown";
    this.textContent = undefined;
    this._loadingTextContent = undefined;
    a.Gn(this);
  }
}
J9.$type = "ContentGeneratorMarkdownResource";
r.Cg(
  [a.sH, r.Sn("design:type", Object)],
  J9.prototype,
  "textContent",
  undefined,
);
r.Cg(
  [
    a.XI,
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [String]),
    r.Sn("design:returntype", undefined),
  ],
  J9.prototype,
  "_setTextContent",
  null,
);
J9 = r.Cg(
  [
    r.Qj(1, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof ReferenceResourceInfo === "undefined"
        ? Object
        : ReferenceResourceInfo,
      o._ === undefined ? Object : o._,
    ]),
  ],
  J9,
);
export class m0 extends u.Z {
  toJSON() {
    return {
      $type: m0.$type,
      ...super.toJSON(),
    };
  }
  constructor(e, t) {
    super(e, t);
    this.type = "pdf";
  }
}
m0.$type = "ContentGeneratorPdfResource";
m0 = r.Cg(
  [
    r.Qj(1, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof ReferenceResourceInfo === "undefined"
        ? Object
        : ReferenceResourceInfo,
      o._ === undefined ? Object : o._,
    ]),
  ],
  m0,
);
export class Av extends u.Z {
  toJSON() {
    return {
      $type: Av.$type,
      ...super.toJSON(),
    };
  }
  constructor(e, t) {
    super(e, t);
    this.type = "docx";
  }
}
Av.$type = "ContentGeneratorDocxResource";
Av = r.Cg(
  [
    r.Qj(1, o._),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      typeof ReferenceResourceInfo === "undefined"
        ? Object
        : ReferenceResourceInfo,
      o._ === undefined ? Object : o._,
    ]),
  ],
  Av,
);
const m = {
  markdown: J9,
  pdf: m0,
  docx: Av,
};
export function TE(e) {
  const t = jV(e);
  if (t) {
    return m[t];
  }
}
