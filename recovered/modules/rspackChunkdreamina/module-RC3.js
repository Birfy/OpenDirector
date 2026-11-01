if (require.j == "wl4") var a = require("Vy");
if (require.j == "wl4") var o = require("Rn");
function i(e = "en") {
  switch (e) {
    case "ja-JP":
    case "ko-KR":
    case "es-LA":
    case "pt-BR":
    case "fr-FR":
    case "id-ID":
    case "vi-VN":
    case "ms-MY":
    case "en":
    case "tr-TR":
    case "de-DE":
    case "it-IT":
    case "th-TH":
    case "fil-PH":
    case "tl-PH":
    default:
      return a.A;
    case "zh-Hans":
      return o.A;
  }
}
export { i as o };
