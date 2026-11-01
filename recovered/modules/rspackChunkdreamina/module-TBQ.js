import n from "./module-Taa.js";
import { basic, defaults, long, packed } from "./module-kxL.js";
import o from "./module-Vva.js";
export default function (e) {
  const t = o.codegen(
    ["r", "l", "e"],
    e.name + "$decode",
  )("if(!(r instanceof Reader))")("r=Reader.create(r)")(
    `var c=l===undefined?r.len:r.pos+l,m=new this.ctor${e.fieldsArray.filter((e) => e.map).length ? ",k,value" : ""}`,
  )("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")(
    "switch(t>>>3){",
  );
  for (var r = 0; r < e.fieldsArray.length; ++r) {
    const s = e._fieldsArray[r].resolve();
    const a = s.resolvedType instanceof n ? "int32" : s.type;
    const l = "m" + o.safeProp(s.name);
    t("case %i: {", s.id);
    if (s.map) {
      t("if(%s===util.emptyObject)", l)("%s={}", l)(
        "var c2 = r.uint32()+r.pos",
      );
      if (defaults[s.keyType] !== undefined) {
        t("k=%j", defaults[s.keyType]);
      } else {
        t("k=null");
      }
      if (defaults[a] !== undefined) {
        t("value=%j", defaults[a]);
      } else {
        t("value=null");
      }
      t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")(
        "case 1: k=r.%s(); break",
        s.keyType,
      )("case 2:");
      if (basic[a] === undefined) {
        t("value=types[%i].decode(r,r.uint32())", r);
      } else {
        t("value=r.%s()", a);
      }
      t("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
      if (long[s.keyType] !== undefined) {
        t('%s[typeof k==="object"?util.longToHash(k):k]=value', l);
      } else {
        t("%s[k]=value", l);
      }
    } else if (s.repeated) {
      t("if(!(%s&&%s.length))", l, l)("%s=[]", l);
      if (packed[a] !== undefined) {
        t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")(
          "%s.push(r.%s())",
          l,
          a,
        )("}else");
      }
      if (basic[a] === undefined) {
        t(
          s.delimited
            ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4)))"
            : "%s.push(types[%i].decode(r,r.uint32()))",
          l,
          r,
        );
      } else {
        t("%s.push(r.%s())", l, a);
      }
    } else if (basic[a] === undefined) {
      t(
        s.delimited
          ? "%s=types[%i].decode(r,undefined,((t&~7)|4))"
          : "%s=types[%i].decode(r,r.uint32())",
        l,
        r,
      );
    } else {
      t("%s=r.%s()", l, a);
    }
    t("break")("}");
  }
  t("default:")("r.skipType(t&7)")("break")("}")("}");
  for (r = 0; r < e._fieldsArray.length; ++r) {
    const u = e._fieldsArray[r];
    if (u.required) {
      t("if(!m.hasOwnProperty(%j))", u.name)(
        "throw util.ProtocolError(%j,{instance:m})",
        "missing required '" + u.name + "'",
      );
    }
  }
  return t("return m");
}
