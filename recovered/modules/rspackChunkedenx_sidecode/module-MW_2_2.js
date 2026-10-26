const r = {
  ar: "ar.2bf83649d8de4a11b3df5d1f35ca5554.js",
  "cs-CZ": "cs-CZ.e7632bbbca7193f3c39c6cc1464ae981.js",
  "de-DE": "de-DE.94a985b10dfedeba49c02ff424568d62.js",
  "el-GR": "el-GR.0f782622fac58ccf204b5c26cda8a1d0.js",
  en: "en.f16ded28809f92db8eadc76b6c16bf3e.js",
  "es-LA": "es-LA.7a1a3195c0cb10a12cc5d17a16bea2f2.js",
  "fi-FI": "fi-FI.db8fb971c04c310ac680efaea26b7f2d.js",
  "fil-PH": "fil-PH.18eca2db0098e751070be34d9de19189.js",
  "fr-FR": "fr-FR.058c3f016728cba14b257129690f16f0.js",
  "he-IL": "he-IL.b2f848ae277d7dace4121ade5ffed69a.js",
  "hu-HU": "hu-HU.26776556354c2060035bfcbee128d50c.js",
  "id-ID": "id-ID.d1d0b2981f6ad602c4d6a1f37e0ba2aa.js",
  "it-IT": "it-IT.f9e627176f1ad9b944f7390c08aa2c89.js",
  "ja-JP": "ja-JP.bc01e442cf29713b1d41a549163c35ba.js",
  "km-KH": "km-KH.5f08f1319d5defa405d326141389e352.js",
  "ko-KR": "ko-KR.3a7ecc92cc1511da51473ba71a60620f.js",
  "ms-MY": "ms-MY.383f32cd229a7732cbbef5ed280ca23b.js",
  "my-MM": "my-MM.e56792ea4750a7f8b123967bbfd1644a.js",
  "nl-NL": "nl-NL.0172b2cac6620e20488d3bd9c7699b03.js",
  "pl-PL": "pl-PL.8b8ba62187b08e72c882d31685c1de63.js",
  "pt-BR": "pt-BR.1cc98e8771bf1fa57089c2c52a86c44c.js",
  "ro-RO": "ro-RO.d90a4971fafae440fd8f1004e4f9dbe4.js",
  "ru-RU": "ru-RU.8baca251b80451f626e67777e9d613c8.js",
  "sv-SE": "sv-SE.52553dbf086a614df9f56979ef164bfb.js",
  "th-TH": "th-TH.6f56f71caa33c794a069f4a2f4a29c89.js",
  "tr-TR": "tr-TR.9857c202b51557942e7797dbb54f9777.js",
  "uk-UA": "uk-UA.cc03b702b7f246f8c40805bf0761d602.js",
  "ur-PK": "ur-PK.ab82d6bdf7fb036f4b624dd9f0d50246.js",
  "vi-VN": "vi-VN.c4c18a2cc22ea1a028e065fc5427def4.js",
  "zh-Hans": "zh-Hans.31aaa42b8ab9abb385b0e00ea9a95602.js",
  "zh-Hant-TW": "zh-Hant-TW.8bd18215ed561bbbe9e9cfb55d4c4056.js",
};
if (r) {
  window.localesMap = r;
  window.pI18nResult = new Promise((resolve, reject) => {
    o = () => resolve();
    i = () => reject(Error("common error"));
  });
  document.cookie.match(RegExp("(^| )capcut_locale=([^;]+)"));
  const t = "zh-Hans";
  let e = t;
  if (!Object.prototype.hasOwnProperty.call(r, e)) {
    e = t;
  }
  window.__lng = e;
  const n = r[e];
  if (n) {
    var o;
    var i;
    let a;
    const s =
      `//lf3-lv-buz.vlabstatic.com/obj/image-lvweb-buz/ies/dreamina/web/jimeng/upload/locales/`.concat(
        n,
      );
    window.__injectedI18nUrl = s;
    const u = document.createElement("script");
    u.async = true;
    u.fetchPriority = "high";
    u.addEventListener("error", i);
    u.addEventListener("load", o);
    u.src = s;
    const { currentScript } = document;
    if (!(currentScript == null || (a = currentScript.parentNode) == null)) {
      a.insertBefore(u, currentScript);
    }
  }
}
