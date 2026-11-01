import n from "./module-Taa.js";
import i from "./module-Vva.js";
function o(e, t, r, i) {
  let o = false;
  if (t.resolvedType) {
    if (t.resolvedType instanceof n) {
      e("switch(d%s){", i);
      const s = t.resolvedType.values;
      for (let a = Object.keys(s), l = 0; l < a.length; ++l) {
        if (!(s[a[l]] !== t.typeDefault || o)) {
          e("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', i, i, i);
          if (!t.repeated) {
            e("break");
          }
          o = true;
        }
        e("case%j:", a[l])("case %i:", s[a[l]])("m%s=%j", i, s[a[l]])("break");
      }
      e("}");
    } else {
      e('if(typeof d%s!=="object")', i)(
        "throw TypeError(%j)",
        t.fullName + ": object expected",
      )("m%s=types[%i].fromObject(d%s)", i, r, i);
    }
  } else {
    let u = false;
    switch (t.type) {
      case "double":
      case "float":
        e("m%s=Number(d%s)", i, i);
        break;
      case "uint32":
      case "fixed32":
        e("m%s=d%s>>>0", i, i);
        break;
      case "int32":
      case "sint32":
      case "sfixed32":
        e("m%s=d%s|0", i, i);
        break;
      case "uint64":
        u = true;
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e("if(util.Long)")(
          "(m%s=util.Long.fromValue(d%s)).unsigned=%j",
          i,
          i,
          u,
        )('else if(typeof d%s==="string")', i)(
          "m%s=parseInt(d%s,10)",
          i,
          i,
        )('else if(typeof d%s==="number")', i)(
          "m%s=d%s",
          i,
          i,
        )('else if(typeof d%s==="object")', i)(
          "m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",
          i,
          i,
          i,
          u ? "true" : "",
        );
        break;
      case "bytes":
        e('if(typeof d%s==="string")', i)(
          "util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",
          i,
          i,
          i,
        )("else if(d%s.length >= 0)", i)("m%s=d%s", i, i);
        break;
      case "string":
        e("m%s=String(d%s)", i, i);
        break;
      case "bool":
        e("m%s=Boolean(d%s)", i, i);
    }
  }
  return e;
}
function s(e, t, r, i) {
  if (t.resolvedType) {
    if (t.resolvedType instanceof n) {
      e(
        "d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s",
        i,
        r,
        i,
        i,
        r,
        i,
        i,
      );
    } else {
      e("d%s=types[%i].toObject(m%s,o)", i, r, i);
    }
  } else {
    let o = false;
    switch (t.type) {
      case "double":
      case "float":
        e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", i, i, i, i);
        break;
      case "uint64":
        o = true;
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        e('if(typeof m%s==="number")', i)(
          "d%s=o.longs===String?String(m%s):m%s",
          i,
          i,
          i,
        )("else")(
          "d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",
          i,
          i,
          i,
          i,
          o ? "true" : "",
          i,
        );
        break;
      case "bytes":
        e(
          "d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",
          i,
          i,
          i,
          i,
          i,
        );
        break;
      default:
        e("d%s=m%s", i, i);
    }
  }
  return e;
}
export const fromObject = function (e) {
  const e_fieldsArray = e.fieldsArray;
  const r = i.codegen(
    ["d"],
    e.name + "$fromObject",
  )("if(d instanceof this.ctor)")("return d");
  if (!e_fieldsArray.length) {
    return r("return new this.ctor");
  }
  r("var m=new this.ctor");
  for (let s = 0; s < e_fieldsArray.length; ++s) {
    const a = e_fieldsArray[s].resolve();
    const l = i.safeProp(a.name);
    if (a.map) {
      r("if(d%s){", l)('if(typeof d%s!=="object")', l)(
        "throw TypeError(%j)",
        a.fullName + ": object expected",
      )("m%s={}", l)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", l);
      o(r, a, s, l + "[ks[i]]")("}")("}");
    } else if (a.repeated) {
      r("if(d%s){", l)("if(!Array.isArray(d%s))", l)(
        "throw TypeError(%j)",
        a.fullName + ": array expected",
      )("m%s=[]", l)("for(var i=0;i<d%s.length;++i){", l);
      o(r, a, s, l + "[i]")("}")("}");
    } else {
      if (!(a.resolvedType instanceof n)) {
        r("if(d%s!=null){", l);
      }
      o(r, a, s, l);
      if (!(a.resolvedType instanceof n)) {
        r("}");
      }
    }
  }
  return r("return m");
};
export const toObject = function (e) {
  const t = e.fieldsArray.slice().sort(i.compareFieldsById);
  if (!t.length) {
    return i.codegen()("return {}");
  }
  const r = i.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")(
    "var d={}",
  );
  const o = [];
  const a = [];
  const l = [];
  for (var u = 0; u < t.length; ++u) {
    if (!t[u].partOf) {
      (t[u].resolve().repeated ? o : t[u].map ? a : l).push(t[u]);
    }
  }
  if (o.length) {
    r("if(o.arrays||o.defaults){");
    for (u = 0; u < o.length; ++u) {
      r("d%s=[]", i.safeProp(o[u].name));
    }
    r("}");
  }
  if (a.length) {
    r("if(o.objects||o.defaults){");
    for (u = 0; u < a.length; ++u) {
      r("d%s={}", i.safeProp(a[u].name));
    }
    r("}");
  }
  if (l.length) {
    r("if(o.defaults){");
    for (u = 0; u < l.length; ++u) {
      var f = l[u];
      var c = i.safeProp(f.name);
      if (f.resolvedType instanceof n) {
        r(
          "d%s=o.enums===String?%j:%j",
          c,
          f.resolvedType.valuesById[f.typeDefault],
          f.typeDefault,
        );
      } else if (f.long) {
        r("if(util.Long){")(
          "var n=new util.Long(%i,%i,%j)",
          f.typeDefault.low,
          f.typeDefault.high,
          f.typeDefault.unsigned,
        )(
          "d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",
          c,
        )("}else")(
          "d%s=o.longs===String?%j:%i",
          c,
          f.typeDefault.toString(),
          f.typeDefault.toNumber(),
        );
      } else if (f.bytes) {
        const p =
          "[" + Array.prototype.slice.call(f.typeDefault).join(",") + "]";
        r(
          "if(o.bytes===String)d%s=%j",
          c,
          String.fromCharCode.apply(String, f.typeDefault),
        )("else{")("d%s=%s", c, p)(
          "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
          c,
          c,
        )("}");
      } else {
        r("d%s=%j", c, f.typeDefault);
      }
    }
    r("}");
  }
  let d = false;
  for (u = 0; u < t.length; ++u) {
    var f = t[u];
    const h = e._fieldsArray.indexOf(f);
    var c = i.safeProp(f.name);
    if (f.map) {
      if (!d) {
        d = true;
        r("var ks2");
      }
      r("if(m%s&&(ks2=Object.keys(m%s)).length){", c, c)("d%s={}", c)(
        "for(var j=0;j<ks2.length;++j){",
      );
      s(r, f, h, c + "[ks2[j]]")("}");
    } else if (f.repeated) {
      r("if(m%s&&m%s.length){", c, c)("d%s=[]", c)(
        "for(var j=0;j<m%s.length;++j){",
        c,
      );
      s(r, f, h, c + "[j]")("}");
    } else {
      r("if(m%s!=null&&m.hasOwnProperty(%j)){", c, f.name);
      s(r, f, h, c);
      if (f.partOf) {
        r("if(o.oneofs)")("d%s=%j", i.safeProp(f.partOf.name), f.name);
      }
    }
    r("}");
  }
  return r("return d");
};
