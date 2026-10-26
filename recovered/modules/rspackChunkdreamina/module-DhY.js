import n from "./module-Taa.js";
import i from "./module-Vva.js";
export default function (e) {
  const t = i.codegen(
    ["m"],
    e.name + "$verify",
  )('if(typeof m!=="object"||m===null)')("return%j", "object expected");
  const e_oneofsArray = e.oneofsArray;
  const n = {};
  if (e_oneofsArray.length) {
    t("var p={}");
  }
  for (let a = 0; a < e.fieldsArray.length; ++a) {
    const l = e._fieldsArray[a].resolve();
    const u = "m" + i.safeProp(l.name);
    if (l.optional) {
      t("if(%s!=null&&m.hasOwnProperty(%j)){", u, l.name);
    }
    if (l.map) {
      t("if(!util.isObject(%s))", u)("return%j", o(l, "object"))(
        "var k=Object.keys(%s)",
        u,
      )("for(var i=0;i<k.length;++i){");
      ((e, t, r) => {
        switch (t.keyType) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            e("if(!util.key32Re.test(%s))", r)("return%j", o(t, "integer key"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            e("if(!util.key64Re.test(%s))", r)(
              "return%j",
              o(t, "integer|Long key"),
            );
            break;
          case "bool":
            e("if(!util.key2Re.test(%s))", r)("return%j", o(t, "boolean key"));
        }
      })(t, l, "k[i]");
      s(t, l, a, u + "[k[i]]")("}");
    } else if (l.repeated) {
      t("if(!Array.isArray(%s))", u)("return%j", o(l, "array"))(
        "for(var i=0;i<%s.length;++i){",
        u,
      );
      s(t, l, a, u + "[i]")("}");
    } else {
      if (l.partOf) {
        const f = i.safeProp(l.partOf.name);
        if (n[l.partOf.name] === 1) {
          t("if(p%s===1)", f)("return%j", l.partOf.name + ": multiple values");
        }
        n[l.partOf.name] = 1;
        t("p%s=1", f);
      }
      s(t, l, a, u);
    }
    if (l.optional) {
      t("}");
    }
  }
  return t("return null");
}
function o(e, t) {
  return (
    e.name +
    ": " +
    t +
    (e.repeated && t !== "array"
      ? "[]"
      : e.map && t !== "object"
        ? "{k:" + e.keyType + "}"
        : "") +
    " expected"
  );
}
function s(e, t, r, i) {
  if (t.resolvedType) {
    if (t.resolvedType instanceof n) {
      e("switch(%s){", i)("default:")("return%j", o(t, "enum value"));
      for (
        let s = Object.keys(t.resolvedType.values), a = 0;
        a < s.length;
        ++a
      ) {
        e("case %i:", t.resolvedType.values[s[a]]);
      }
      e("break")("}");
    } else {
      e("{")("var e=types[%i].verify(%s);", r, i)("if(e)")(
        "return%j+e",
        t.name + ".",
      )("}");
    }
  } else {
    switch (t.type) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        e("if(!util.isInteger(%s))", i)("return%j", o(t, "integer"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e(
          "if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",
          i,
          i,
          i,
          i,
        )("return%j", o(t, "integer|Long"));
        break;
      case "float":
      case "double":
        e('if(typeof %s!=="number")', i)("return%j", o(t, "number"));
        break;
      case "bool":
        e('if(typeof %s!=="boolean")', i)("return%j", o(t, "boolean"));
        break;
      case "string":
        e("if(!util.isString(%s))", i)("return%j", o(t, "string"));
        break;
      case "bytes":
        e(
          'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
          i,
          i,
          i,
        )("return%j", o(t, "buffer"));
    }
  }
  return e;
}
