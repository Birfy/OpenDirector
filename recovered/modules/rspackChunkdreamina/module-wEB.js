import n from "./module-nkd.js";
exports[".google.protobuf.Any"] = {
  fromObject: function (e) {
    if (e && e["@type"]) {
      const t = e["@type"].substring(e["@type"].lastIndexOf("/") + 1);
      const r = this.lookup(t);
      if (r) {
        let type_url =
          e["@type"].charAt(0) === "." ? e["@type"].slice(1) : e["@type"];
        if (type_url.indexOf("/") === -1) {
          type_url = "/" + type_url;
        }
        return this.create({
          type_url,
          value: r.encode(r.fromObject(e)).finish(),
        });
      }
    }
    return this.fromObject(e);
  },
  toObject: function (e, t) {
    let r = "";
    let i = "";
    if (t && t.json && e.type_url && e.value) {
      i = e.type_url.substring(e.type_url.lastIndexOf("/") + 1);
      r = e.type_url.substring(0, e.type_url.lastIndexOf("/") + 1);
      const o = this.lookup(i);
      if (o) {
        e = o.decode(e.value);
      }
    }
    if (!(e instanceof this.ctor) && e instanceof n) {
      const s = e.$type.toObject(e, t);
      if (r === "") {
        r = "type.googleapis.com/";
      }
      i =
        r +
        (e.$type.fullName[0] === "."
          ? e.$type.fullName.slice(1)
          : e.$type.fullName);
      s["@type"] = i;
      return s;
    }
    return this.toObject(e, t);
  },
};
