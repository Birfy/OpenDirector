import n from "./module-Taa.js";
import { basic, mapKey, packed } from "./module-kxL.js";
import o from "./module-Vva.js";
export default function (e) {
  let r;
  const a = o.codegen(["m", "w"], e.name + "$encode")("if(!w)")(
    "w=Writer.create()",
  );
  for (
    var t, l = e.fieldsArray.slice().sort(o.compareFieldsById), t = 0;
    t < l.length;
    ++t
  ) {
    const u = l[t].resolve();
    const f = e._fieldsArray.indexOf(u);
    const c = u.resolvedType instanceof n ? "int32" : u.type;
    const p = basic[c];
    r = "m" + o.safeProp(u.name);
    if (u.map) {
      a(
        "if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",
        r,
        u.name,
      )("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", r)(
        "w.uint32(%i).fork().uint32(%i).%s(ks[i])",
        ((u.id << 3) | 2) >>> 0,
        8 | mapKey[u.keyType],
        u.keyType,
      );
      if (p === undefined) {
        a(
          "types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",
          f,
          r,
        );
      } else {
        a(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | p, c, r);
      }
      a("}")("}");
    } else if (u.repeated) {
      a("if(%s!=null&&%s.length){", r, r);
      if (u.packed && packed[c] !== undefined) {
        a("w.uint32(%i).fork()", ((u.id << 3) | 2) >>> 0)(
          "for(var i=0;i<%s.length;++i)",
          r,
        )(
          "w.%s(%s[i])",
          c,
          r,
        )("w.ldelim()");
      } else {
        a("for(var i=0;i<%s.length;++i)", r);
        if (p === undefined) {
          s(a, u, f, r + "[i]");
        } else {
          a("w.uint32(%i).%s(%s[i])", ((u.id << 3) | p) >>> 0, c, r);
        }
      }
      a("}");
    } else {
      if (u.optional) {
        a("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", r, u.name);
      }
      if (p === undefined) {
        s(a, u, f, r);
      } else {
        a("w.uint32(%i).%s(%s)", ((u.id << 3) | p) >>> 0, c, r);
      }
    }
  }
  return a("return w");
}
function s(e, t, r, n) {
  if (t.delimited) {
    return e(
      "types[%i].encode(%s,w.uint32(%i)).uint32(%i)",
      r,
      n,
      ((t.id << 3) | 3) >>> 0,
      ((t.id << 3) | 4) >>> 0,
    );
  }
  return e(
    "types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",
    r,
    n,
    ((t.id << 3) | 2) >>> 0,
  );
}
