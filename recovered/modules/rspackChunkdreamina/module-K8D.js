import d from "VQv";
import l from "Ut";
import p from "./module-Rd.js";
let o;
let r;
let a;
let n;
const s =
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
o = a || (a = {});
o.Image = "image";
o.Video = "video";
o.Audio = "audio";
o.Style = "style";
o.EffectRefItem = "effect_ref_item";
r = n || (n = {});
r[(r.ImageX = 1)] = "ImageX";
r[(r.VCloud = 2)] = "VCloud";
r[(r.Artist = 3)] = "Artist";
class u extends p.Serializable {
  constructor() {
    super(...arguments);
    this.key = undefined;
    this.type = undefined;
    this.name = undefined;
    this.platform = undefined;
  }
}
s([p.serializable("key")], u.prototype, "key", undefined);
s([p.serializable("type")], u.prototype, "type", undefined);
s([p.serializable("name")], u.prototype, "name", undefined);
s([p.serializable("platform")], u.prototype, "platform", undefined);
class c extends p.Serializable {
  constructor() {
    super(...arguments);
    this.resources = undefined;
  }
}
function m(e, t) {
  for (let i = 0; i < e.length; i++) {
    if (
      e[i].key === t.key &&
      ((e[i].platform != undefined &&
        t.platform != undefined &&
        e[i].platform === t.platform) ||
        (e[i].type != undefined && t.type != undefined && e[i].type === t.type))
    ) {
      return true;
    }
  }
  return false;
}
s([p.serializable("resources", () => u)], c.prototype, "resources", undefined);
export const fetchDraftResources = (e) => {
  let t = new c();
  let i = [];
  (function e(t, i) {
    t.childNodes().forEach((t) => {
      var o;
      if (t instanceof l.DAAudioResource) {
        let e = p.ForcedCast.toClass(t, l.DAAudioResource);
        if (
          e.sourceFrom === l.DAResourceSourceFrom.none ||
          e.sourceFrom === l.DAResourceSourceFrom.upload ||
          e.sourceFrom === l.DAResourceSourceFrom.produced
        ) {
          let t = new u();
          t.key = e.vid;
          t.type = a.Audio;
          t.name = "";
          t.platform = n.VCloud;
          if (!m(i, t)) {
            i.push(t);
          }
        }
      }
      if (t instanceof l.DAVideoResource) {
        let e = p.ForcedCast.toClass(t, l.DAVideoResource);
        if (
          e.sourceFrom === l.DAResourceSourceFrom.none ||
          e.sourceFrom === l.DAResourceSourceFrom.upload ||
          e.sourceFrom === l.DAResourceSourceFrom.produced
        ) {
          let t = new u();
          t.key = e.vid;
          t.type = a.Video;
          t.name = e.name;
          t.platform = n.VCloud;
          if (!m(i, t)) {
            i.push(t);
          }
        }
      }
      if (t instanceof l.DAImageResource) {
        let e = p.ForcedCast.toClass(t, l.DAImageResource);
        if (
          e.sourceFrom === l.DAResourceSourceFrom.none ||
          e.sourceFrom === l.DAResourceSourceFrom.upload ||
          e.sourceFrom === l.DAResourceSourceFrom.produced
        ) {
          let t = new u();
          t.key = e.uri;
          t.type = a.Image;
          t.name = e.name;
          t.platform = n.ImageX;
          if (!m(i, t)) {
            i.push(t);
          }
        }
      }
      if (t instanceof d.DACommonAssetResource) {
        let e = p.ForcedCast.toClass(t, d.DACommonAssetResource);
        if (e.assetType === d.DACommonAssetType.Style) {
          let t = new u();
          t.key = e.assetCode;
          t.type = a.Style;
          t.name = "";
          t.platform = undefined;
          if (!m(i, t)) {
            i.push(t);
          }
        }
      }
      if (
        t instanceof l.DAVideoGenVideoTemplate &&
        p.ForcedCast.toClass(t, l.DAVideoGenVideoTemplate).videoTemplate !=
          undefined &&
        p.ForcedCast.toClass(t, l.DAVideoGenVideoTemplate).videoTemplate != 0
      ) {
        let e = new u();
        e.key =
          (o = p.ForcedCast.toClass(
            t,
            l.DAVideoGenVideoTemplate,
          ).videoTemplate) == null
            ? undefined
            : o.toString();
        e.type = a.EffectRefItem;
        e.name = "";
        e.platform = n.Artist;
        if (!m(i, e)) {
          i.push(e);
        }
      }
      e(t, i);
    });
  })(e, i);
  t.resources = i;
  return t;
};
