let r = "numeric";
let i = "ascii";
let s = "alpha";
let o = "asciinumeric";
let l = "alphanumeric";
let a = "domain";
let c = "emoji";
let h = "whitespace";
function u(t, e, n) {
  for (let h in (e[r] && ((e[o] = true), (e[l] = true)),
  e[i] && ((e[o] = true), (e[s] = true)),
  e[o] && (e[l] = true),
  e[s] && (e[l] = true),
  e[l] && (e[a] = true),
  e[c] && (e[a] = true),
  e)) {
    if (!(h in n)) {
      n[h] = [];
    }
    let e = n[h];
    if (e.indexOf(t) < 0) {
      e.push(t);
    }
  }
}
function p(t = null) {
  this.j = {};
  this.jr = [];
  this.jd = null;
  this.t = t;
}
p.groups = {};
p.prototype = {
  accepts() {
    return !!this.t;
  },
  go(t) {
    let e = this.j[t];
    if (e) {
      return e;
    }
    for (let e = 0; e < this.jr.length; e++) {
      let n = this.jr[e][0];
      let r = this.jr[e][1];
      if (r && n.test(t)) {
        return r;
      }
    }
    return this.jd;
  },
  has(t, e = false) {
    if (e) {
      return t in this.j;
    }
    return !!this.go(t);
  },
  ta(t, e, n, r) {
    for (let i = 0; i < t.length; i++) {
      this.tt(t[i], e, n, r);
    }
  },
  tr(t, e, n, r) {
    let i;
    r = r || p.groups;
    if (e && e.j) {
      i = e;
    } else {
      i = new p(e);
      if (n && r) {
        u(e, n, r);
      }
    }
    this.jr.push([t, i]);
    return i;
  },
  ts(t, e, n, r) {
    let i = this;
    let t_length = t.length;
    if (!t_length) {
      return i;
    }
    for (let e = 0; e < t_length - 1; e++) {
      i = i.tt(t[e]);
    }
    return i.tt(t[t_length - 1], e, n, r);
  },
  tt(t, e, n, r) {
    r = r || p.groups;
    if (e && e.j) {
      this.j[t] = e;
      return e;
    }
    let i;
    let s = this.go(t);
    if (s) {
      Object.assign((i = new p()).j, s.j);
      i.jr.push.apply(i.jr, s.jr);
      i.jd = s.jd;
      i.t = s.t;
    } else {
      i = new p();
    }
    if (e) {
      if (r) {
        if (i.t && typeof i.t === "string") {
          u(
            e,
            Object.assign(
              ((t, e) => {
                let n = {};
                for (let r in e) {
                  if (e[r].indexOf(t) >= 0) {
                    n[r] = true;
                  }
                }
                return n;
              })(i.t, r),
              n,
            ),
            r,
          );
        } else if (n) {
          u(e, n, r);
        }
      }
      i.t = e;
    }
    this.j[t] = i;
    return i;
  },
};
let f = (t, e, n, r, i) => t.ta(e, n, r, i);
let d = (t, e, n, r, i) => t.tr(e, n, r, i);
let _ = (t, e, n, r, i) => t.ts(e, n, r, i);
let m = (t, e, n, r, i) => t.tt(e, n, r, i);
let WORD = "WORD";
let UWORD = "UWORD";
let ASCIINUMERICAL = "ASCIINUMERICAL";
let ALPHANUMERICAL = "ALPHANUMERICAL";
let LOCALHOST = "LOCALHOST";
let UTLD = "UTLD";
let SCHEME = "SCHEME";
let SLASH_SCHEME = "SLASH_SCHEME";
let OPENBRACE = "OPENBRACE";
let CLOSEBRACE = "CLOSEBRACE";
let OPENBRACKET = "OPENBRACKET";
let CLOSEBRACKET = "CLOSEBRACKET";
let OPENPAREN = "OPENPAREN";
let CLOSEPAREN = "CLOSEPAREN";
let OPENANGLEBRACKET = "OPENANGLEBRACKET";
let CLOSEANGLEBRACKET = "CLOSEANGLEBRACKET";
let FULLWIDTHLEFTPAREN = "FULLWIDTHLEFTPAREN";
let FULLWIDTHRIGHTPAREN = "FULLWIDTHRIGHTPAREN";
let LEFTCORNERBRACKET = "LEFTCORNERBRACKET";
let RIGHTCORNERBRACKET = "RIGHTCORNERBRACKET";
let LEFTWHITECORNERBRACKET = "LEFTWHITECORNERBRACKET";
let RIGHTWHITECORNERBRACKET = "RIGHTWHITECORNERBRACKET";
let FULLWIDTHLESSTHAN = "FULLWIDTHLESSTHAN";
let FULLWIDTHGREATERTHAN = "FULLWIDTHGREATERTHAN";
let AMPERSAND = "AMPERSAND";
let APOSTROPHE = "APOSTROPHE";
let ASTERISK = "ASTERISK";
let BACKSLASH = "BACKSLASH";
let BACKTICK = "BACKTICK";
let CARET = "CARET";
let COLON = "COLON";
let COMMA = "COMMA";
let DOLLAR = "DOLLAR";
let EQUALS = "EQUALS";
let EXCLAMATION = "EXCLAMATION";
let HYPHEN = "HYPHEN";
let PERCENT = "PERCENT";
let PIPE = "PIPE";
let PLUS = "PLUS";
let POUND = "POUND";
let QUERY = "QUERY";
let QUOTE = "QUOTE";
let FULLWIDTHMIDDLEDOT = "FULLWIDTHMIDDLEDOT";
let SEMI = "SEMI";
let SLASH = "SLASH";
let TILDE = "TILDE";
let UNDERSCORE = "UNDERSCORE";
let EMOJI = "EMOJI";
const tokens = Object.freeze({
  __proto__: null,
  ALPHANUMERICAL,
  AMPERSAND,
  APOSTROPHE,
  ASCIINUMERICAL,
  ASTERISK,
  AT: "AT",
  BACKSLASH,
  BACKTICK,
  CARET,
  CLOSEANGLEBRACKET,
  CLOSEBRACE,
  CLOSEBRACKET,
  CLOSEPAREN,
  COLON,
  COMMA,
  DOLLAR,
  DOT: "DOT",
  EMOJI,
  EQUALS,
  EXCLAMATION,
  FULLWIDTHGREATERTHAN,
  FULLWIDTHLEFTPAREN,
  FULLWIDTHLESSTHAN,
  FULLWIDTHMIDDLEDOT,
  FULLWIDTHRIGHTPAREN,
  HYPHEN,
  LEFTCORNERBRACKET,
  LEFTWHITECORNERBRACKET,
  LOCALHOST,
  NL: "NL",
  NUM: "NUM",
  OPENANGLEBRACKET,
  OPENBRACE,
  OPENBRACKET,
  OPENPAREN,
  PERCENT,
  PIPE,
  PLUS,
  POUND,
  QUERY,
  QUOTE,
  RIGHTCORNERBRACKET,
  RIGHTWHITECORNERBRACKET,
  SCHEME,
  SEMI,
  SLASH,
  SLASH_SCHEME,
  SYM: "SYM",
  TILDE,
  TLD: "TLD",
  UNDERSCORE,
  UTLD,
  UWORD,
  WORD,
  WS: "WS",
});
let tp = /[a-z]/;
let tf = /\p{L}/u;
let td = /\p{Emoji}/u;
let t_ = /\d/;
let tm = /\s/;
let tg = null;
let tk = null;
function ty(t, e) {
  let n = ((t) => {
    let e = [];
    let t_length = t.length;
    let r = 0;
    while (r < t_length) {
      let i;
      let s = t.charCodeAt(r);
      let o =
        s < 55296 ||
        s > 56319 ||
        r + 1 === t_length ||
        (i = t.charCodeAt(r + 1)) < 56320 ||
        i > 57343
          ? t[r]
          : t.slice(r, r + 2);
      e.push(o);
      r += o.length;
    }
    return e;
  })(e.replace(/[A-Z]/g, (t) => t.toLowerCase()));
  let n_length = n.length;
  let i = [];
  let e_1 = 0;
  let o = 0;
  while (o < n_length) {
    let l = t;
    let a = null;
    let c = 0;
    let h = null;
    let u = -1;
    let p = -1;
    while (o < n_length && (a = l.go(n[o]))) {
      if ((l = a).accepts()) {
        u = 0;
        p = 0;
        h = l;
      } else if (u >= 0) {
        u += n[o].length;
        p++;
      }
      c += n[o].length;
      e_1 += n[o].length;
      o++;
    }
    e_1 -= u;
    o -= p;
    c -= u;
    i.push({
      t: h.t,
      v: e.slice(e_1 - c, e_1),
      s: e_1 - c,
      e: e_1,
    });
  }
  return i;
}
function tb(t, e, n, r, i) {
  let s;
  let e_length = e.length;
  for (let n = 0; n < e_length - 1; n++) {
    let o = e[n];
    if (t.j[o]) {
      s = t.j[o];
    } else {
      s = new p(r);
      s.jr = i.slice();
      t.j[o] = s;
    }
    t = s;
  }
  s = new p(n);
  s.jr = i.slice();
  t.j[e[e_length - 1]] = s;
  return s;
}
function tC(t) {
  let e = [];
  let n = [];
  let r = 0;
  while (r < t.length) {
    let i = 0;
    while ("0123456789".indexOf(t[r + i]) >= 0) {
      i++;
    }
    if (i > 0) {
      e.push(n.join(""));
      for (let e = parseInt(t.substring(r, r + i), 10); e > 0; e--) {
        n.pop();
      }
      r += i;
    } else {
      n.push(t[r]);
      r++;
    }
  }
  return e;
}
let o_1 = {
  defaultProtocol: "http",
  events: null,
  format: tv,
  formatHref: tv,
  nl2br: false,
  tagName: "a",
  target: null,
  rel: null,
  validate: true,
  truncate: Infinity,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null,
};
function tA(t, e = null) {
  let n = {
    ...o_1,
  };
  if (t) {
    n = Object.assign(n, t instanceof tA ? t.o : t);
  }
  let n_ignoreTags = n.ignoreTags;
  let i = [];
  for (let t = 0; t < n_ignoreTags.length; t++) {
    i.push(n_ignoreTags[t].toUpperCase());
  }
  this.o = n;
  if (e) {
    this.defaultRender = e;
  }
  this.ignoreTags = i;
}
function tv(t) {
  return t;
}
function tE(t, e) {
  this.t = "token";
  this.v = t;
  this.tk = e;
}
function tS(t, e) {
  class n extends tE {
    constructor(e, n) {
      super(e, n);
      this.t = t;
    }
  }
  for (let t in e) {
    n.prototype[t] = e[t];
  }
  n.t = t;
  return n;
}
tA.prototype = {
  o: o_1,
  ignoreTags: [],
  defaultRender: (t) => t,
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  get(t, e, n) {
    let r = e != null;
    let i = this.o[t];
    if (i) {
      if (typeof i === "object") {
        if (typeof (i = n.t in i ? i[n.t] : o_1[t]) === "function" && r) {
          i = i(e, n);
        }
      } else if (typeof i === "function" && r) {
        i = i(e, n.t, n);
      }
    }
    return i;
  },
  getObj(t, e, n) {
    let r = this.o[t];
    if (typeof r === "function" && e != null) {
      r = r(e, n.t, n);
    }
    return r;
  },
  render(t) {
    let e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  },
};
tE.prototype = {
  isLink: false,
  toString() {
    return this.v;
  },
  toHref(t) {
    return this.toString();
  },
  toFormattedString(t) {
    let e = this.toString();
    let n = t.get("truncate", e, this);
    let r = t.get("format", e, this);
    if (n && r.length > n) {
      return r.substring(0, n) + "…";
    }
    return r;
  },
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  startIndex() {
    return this.tk[0].s;
  },
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  toObject(t = o_1.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex(),
    };
  },
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex(),
    };
  },
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  render(t) {
    let e = this.toHref(t.get("defaultProtocol"));
    let n = t.get("formatHref", e, this);
    let tagName = t.get("tagName", e, this);
    let content = this.toFormattedString(t);
    let attributes = {};
    let o = t.get("className", e, this);
    let l = t.get("target", e, this);
    let a = t.get("rel", e, this);
    let c = t.getObj("attributes", e, this);
    let eventListeners = t.getObj("events", e, this);
    attributes.href = n;
    if (o) {
      attributes.class = o;
    }
    if (l) {
      attributes.target = l;
    }
    if (a) {
      attributes.rel = a;
    }
    if (c) {
      Object.assign(attributes, c);
    }
    return {
      tagName,
      attributes,
      content,
      eventListeners,
    };
  },
};
let tz = tS("email", {
  isLink: true,
  toHref() {
    return "mailto:" + this.toString();
  },
});
let tL = tS("text");
let tT = tS("nl");
let tM = tS("url", {
  isLink: true,
  toHref(t = o_1.defaultProtocol) {
    if (this.hasProtocol()) {
      return this.v;
    }
    return `${t}://${this.v}`;
  },
  hasProtocol() {
    let t = this.tk;
    return t.length >= 2 && t[0].t !== LOCALHOST && t[1].t === COLON;
  },
});
let tw = (t) => new p(t);
function tI(t, e, n) {
  let r = n[0].s;
  let i = n[n.length - 1].e;
  return new t(e.slice(r, i), n);
}
let tO =
  (typeof console !== "undefined" && console && console.warn) || (() => {});
let t$ = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: false,
};
export function cL() {
  p.groups = {};
  t$.scanner = null;
  t$.parser = null;
  t$.tokenQueue = [];
  t$.pluginQueue = [];
  t$.customSchemes = [];
  t$.initialized = false;
  return t$;
}
export function ZV(t, e = false) {
  if (t$.initialized) {
    tO(
      `linkifyjs: already initialized - will not register custom scheme "${t}" until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.`,
    );
  }
  if (!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t)) {
    throw Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  }
  t$.customSchemes.push([t, e]);
}
export function qw(t) {
  if (!t$.initialized) {
    (() => {
      t$.scanner = ((t = []) => {
        let groups = {};
        p.groups = groups;
        let n = new p();
        if (tg == null) {
          tg = tC(
            "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2odyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rck0msd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2oodside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2",
          );
        }
        if (tk == null) {
          tk = tC(
            "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2",
          );
        }
        m(n, "'", APOSTROPHE);
        m(n, "{", OPENBRACE);
        m(n, "}", CLOSEBRACE);
        m(n, "[", OPENBRACKET);
        m(n, "]", CLOSEBRACKET);
        m(n, "(", OPENPAREN);
        m(n, ")", CLOSEPAREN);
        m(n, "<", OPENANGLEBRACKET);
        m(n, ">", CLOSEANGLEBRACKET);
        m(n, "（", FULLWIDTHLEFTPAREN);
        m(n, "）", FULLWIDTHRIGHTPAREN);
        m(n, "「", LEFTCORNERBRACKET);
        m(n, "」", RIGHTCORNERBRACKET);
        m(n, "『", LEFTWHITECORNERBRACKET);
        m(n, "』", RIGHTWHITECORNERBRACKET);
        m(n, "＜", FULLWIDTHLESSTHAN);
        m(n, "＞", FULLWIDTHGREATERTHAN);
        m(n, "&", AMPERSAND);
        m(n, "*", ASTERISK);
        m(n, "@", "AT");
        m(n, "`", BACKTICK);
        m(n, "^", CARET);
        m(n, ":", COLON);
        m(n, ",", COMMA);
        m(n, "$", DOLLAR);
        m(n, ".", "DOT");
        m(n, "=", EQUALS);
        m(n, "!", EXCLAMATION);
        m(n, "-", HYPHEN);
        m(n, "%", PERCENT);
        m(n, "|", PIPE);
        m(n, "+", PLUS);
        m(n, "#", POUND);
        m(n, "?", QUERY);
        m(n, '"', QUOTE);
        m(n, "/", SLASH);
        m(n, ";", SEMI);
        m(n, "~", TILDE);
        m(n, "_", UNDERSCORE);
        m(n, "\\", BACKSLASH);
        m(n, "・", FULLWIDTHMIDDLEDOT);
        let f = d(n, t_, "NUM", {
          [r]: true,
        });
        d(f, t_, f);
        let ty = d(f, tp, ASCIINUMERICAL, {
          [o]: true,
        });
        let tx = d(f, tf, ALPHANUMERICAL, {
          [l]: true,
        });
        let tA = d(n, tp, WORD, {
          [i]: true,
        });
        d(tA, t_, ty);
        d(tA, tp, tA);
        d(ty, t_, ty);
        d(ty, tp, ty);
        let tv = d(n, tf, UWORD, {
          [s]: true,
        });
        d(tv, tp);
        d(tv, t_, tx);
        d(tv, tf, tv);
        d(tx, t_, tx);
        d(tx, tp);
        d(tx, tf, tx);
        let tE = m(n, "\n", "NL", {
          [h]: true,
        });
        let tS = m(n, "\r", "WS", {
          [h]: true,
        });
        let tz = d(n, tm, "WS", {
          [h]: true,
        });
        m(n, "\uFFFC", tz);
        m(tS, "\n", tE);
        m(tS, "\uFFFC", tz);
        d(tS, tm, tz);
        m(tz, "\r");
        m(tz, "\n");
        d(tz, tm, tz);
        m(tz, "\uFFFC", tz);
        let tL = d(n, td, EMOJI, {
          [c]: true,
        });
        m(tL, "#");
        d(tL, td, tL);
        m(tL, "\uFE0F", tL);
        let tT = m(tL, "\u200D");
        m(tT, "#");
        d(tT, td, tL);
        let tM = [
          [tp, tA],
          [t_, ty],
        ];
        let tw = [
          [tp, null],
          [tf, tv],
          [t_, tx],
        ];
        for (let t = 0; t < tg.length; t++) {
          tb(n, tg[t], "TLD", WORD, tM);
        }
        for (let t = 0; t < tk.length; t++) {
          tb(n, tk[t], UTLD, UWORD, tw);
        }
        u(
          "TLD",
          {
            tld: true,
            ascii: true,
          },
          groups,
        );
        u(
          UTLD,
          {
            utld: true,
            alpha: true,
          },
          groups,
        );
        tb(n, "file", SCHEME, WORD, tM);
        tb(n, "mailto", SCHEME, WORD, tM);
        tb(n, "http", SLASH_SCHEME, WORD, tM);
        tb(n, "https", SLASH_SCHEME, WORD, tM);
        tb(n, "ftp", SLASH_SCHEME, WORD, tM);
        tb(n, "ftps", SLASH_SCHEME, WORD, tM);
        u(
          SCHEME,
          {
            scheme: true,
            ascii: true,
          },
          groups,
        );
        u(
          SLASH_SCHEME,
          {
            slashscheme: true,
            ascii: true,
          },
          groups,
        );
        t = t.sort((t, e) => {
          if (t[0] > e[0]) {
            return 1;
          }
          return -1;
        });
        for (let e = 0; e < t.length; e++) {
          let s = t[e][0];
          let l = t[e][1]
            ? {
                scheme: true,
              }
            : {
                slashscheme: true,
              };
          if (s.indexOf("-") >= 0) {
            l[a] = true;
          } else if (tp.test(s)) {
            if (t_.test(s)) {
              l[o] = true;
            } else {
              l[i] = true;
            }
          } else {
            l[r] = true;
          }
          _(n, s, s, l);
        }
        _(n, "localhost", LOCALHOST, {
          ascii: true,
        });
        n.jd = new p("SYM");
        return {
          start: n,
          tokens: {
            groups,
            ...tokens,
          },
        };
      })(t$.customSchemes);
      for (let t = 0; t < t$.tokenQueue.length; t++) {
        t$.tokenQueue[t][1]({
          scanner: t$.scanner,
        });
      }
      t$.parser = (({ groups }) => {
        let e = groups.domain.concat([
          AMPERSAND,
          ASTERISK,
          "AT",
          BACKSLASH,
          BACKTICK,
          CARET,
          DOLLAR,
          EQUALS,
          HYPHEN,
          "NUM",
          PERCENT,
          PIPE,
          PLUS,
          POUND,
          SLASH,
          "SYM",
          TILDE,
          UNDERSCORE,
        ]);
        let n = [
          APOSTROPHE,
          COLON,
          COMMA,
          "DOT",
          EXCLAMATION,
          PERCENT,
          QUERY,
          QUOTE,
          SEMI,
          OPENANGLEBRACKET,
          CLOSEANGLEBRACKET,
          OPENBRACE,
          CLOSEBRACE,
          CLOSEBRACKET,
          OPENBRACKET,
          OPENPAREN,
          CLOSEPAREN,
          FULLWIDTHLEFTPAREN,
          FULLWIDTHRIGHTPAREN,
          LEFTCORNERBRACKET,
          RIGHTCORNERBRACKET,
          LEFTWHITECORNERBRACKET,
          RIGHTWHITECORNERBRACKET,
          FULLWIDTHLESSTHAN,
          FULLWIDTHGREATERTHAN,
        ];
        let r = [
          AMPERSAND,
          APOSTROPHE,
          ASTERISK,
          BACKSLASH,
          BACKTICK,
          CARET,
          DOLLAR,
          EQUALS,
          HYPHEN,
          OPENBRACE,
          CLOSEBRACE,
          PERCENT,
          PIPE,
          PLUS,
          POUND,
          QUERY,
          SLASH,
          "SYM",
          TILDE,
          UNDERSCORE,
        ];
        let i = tw();
        let s = m(i, TILDE);
        f(s, r, s);
        f(s, groups.domain, s);
        let o = tw();
        let l = tw();
        let a = tw();
        f(i, groups.domain, o);
        f(i, groups.scheme, l);
        f(i, groups.slashscheme, a);
        f(o, r, s);
        f(o, groups.domain, o);
        let c = m(o, "AT");
        m(s, "AT", c);
        m(l, "AT", c);
        m(a, "AT", c);
        let h = m(s, "DOT");
        f(h, r, s);
        f(h, groups.domain, s);
        let u = tw();
        f(c, groups.domain, u);
        f(u, groups.domain, u);
        let p = m(u, "DOT");
        f(p, groups.domain, u);
        let d = tw(tz);
        f(p, groups.tld, d);
        f(p, groups.utld, d);
        m(c, LOCALHOST, d);
        let _ = m(u, HYPHEN);
        m(_, HYPHEN, _);
        f(_, groups.domain, u);
        f(d, groups.domain, u);
        m(d, "DOT", p);
        m(d, HYPHEN, _);
        let g = m(o, HYPHEN);
        let k = m(o, "DOT");
        m(g, HYPHEN, g);
        f(g, groups.domain, o);
        f(k, r, s);
        f(k, groups.domain, o);
        let y = tw(tM);
        f(k, groups.tld, y);
        f(k, groups.utld, y);
        f(y, groups.domain, o);
        f(y, r, s);
        m(y, "DOT", k);
        m(y, HYPHEN, g);
        m(y, "AT", c);
        let b = m(y, COLON);
        let x = tw(tM);
        f(b, groups.numeric, x);
        let A = tw(tM);
        let v = tw();
        f(A, e, A);
        f(A, n, v);
        f(v, e, A);
        f(v, n, v);
        m(y, SLASH, A);
        m(x, SLASH, A);
        let ts = m(l, COLON);
        let th = m(a, COLON);
        let tp = m(th, SLASH);
        let tf = m(tp, SLASH);
        f(l, groups.domain, o);
        m(l, "DOT", k);
        m(l, HYPHEN, g);
        f(a, groups.domain, o);
        m(a, "DOT", k);
        m(a, HYPHEN, g);
        f(ts, groups.domain, A);
        m(ts, SLASH, A);
        m(ts, QUERY, A);
        f(tf, groups.domain, A);
        f(tf, e, A);
        m(tf, SLASH, A);
        let td = [
          [OPENBRACE, CLOSEBRACE],
          [OPENBRACKET, CLOSEBRACKET],
          [OPENPAREN, CLOSEPAREN],
          [OPENANGLEBRACKET, CLOSEANGLEBRACKET],
          [FULLWIDTHLEFTPAREN, FULLWIDTHRIGHTPAREN],
          [LEFTCORNERBRACKET, RIGHTCORNERBRACKET],
          [LEFTWHITECORNERBRACKET, RIGHTWHITECORNERBRACKET],
          [FULLWIDTHLESSTHAN, FULLWIDTHGREATERTHAN],
        ];
        for (let t = 0; t < td.length; t++) {
          let [r, i] = td[t];
          let s = m(A, r);
          m(v, r, s);
          let o = tw(tM);
          f(s, e, o);
          let l = tw();
          f(s, n, l);
          m(s, i, A);
          f(o, e, o);
          f(o, n, l);
          f(l, e, o);
          f(l, n, l);
          m(o, i, A);
          m(l, i, A);
        }
        m(i, LOCALHOST, y);
        m(i, "NL", tT);
        return {
          start: i,
          tokens,
        };
      })(t$.scanner.tokens);
      for (let t = 0; t < t$.pluginQueue.length; t++) {
        t$.pluginQueue[t][1]({
          scanner: t$.scanner,
          parser: t$.parser,
        });
      }
      t$.initialized = true;
    })();
  }
  return ((t, e, n) => {
    let n_length = n.length;
    let i = 0;
    let s = [];
    let o = [];
    while (i < n_length) {
      let l = t;
      let a = null;
      let c = null;
      let h = 0;
      let u = null;
      let p = -1;
      while (i < n_length && !(a = l.go(n[i].t))) {
        o.push(n[i++]);
      }
      while (i < n_length && (c = a || l.go(n[i].t))) {
        a = null;
        if ((l = c).accepts()) {
          p = 0;
          u = l;
        } else if (p >= 0) {
          p++;
        }
        i++;
        h++;
      }
      if (p < 0) {
        if ((i -= h) < n_length) {
          o.push(n[i]);
          i++;
        }
      } else {
        if (o.length > 0) {
          s.push(tI(tL, e, o));
          o = [];
        }
        i -= p;
        h -= p;
        let t = u.t;
        let r = n.slice(i - h, i);
        s.push(tI(t, e, r));
      }
    }
    if (o.length > 0) {
      s.push(tI(tL, e, o));
    }
    return s;
  })(t$.parser.start, t, ty(t$.scanner.start, t));
}
export function I6(t, e = null, n = null) {
  if (e && typeof e === "object") {
    if (n) {
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    }
    n = e;
    e = null;
  }
  let r = new tA(n);
  let i = qw(t);
  let s = [];
  for (let t = 0; t < i.length; t++) {
    let n = i[t];
    if (n.isLink && (!e || n.t === e) && r.check(n)) {
      s.push(n.toFormattedObject(r));
    }
  }
  return s;
}
qw.scan = ty;
