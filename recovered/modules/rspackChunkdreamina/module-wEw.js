export var DAImageRatioType;
let o;
o = DAImageRatioType || (DAImageRatioType = {});
o[(o.ImageRatioType_11 = 1)] = "ImageRatioType_11";
o[(o.ImageRatioType_34 = 2)] = "ImageRatioType_34";
o[(o.ImageRatioType_169 = 3)] = "ImageRatioType_169";
o[(o.ImageRatioType_43 = 4)] = "ImageRatioType_43";
o[(o.ImageRatioType_916 = 5)] = "ImageRatioType_916";
o[(o.ImageRatioType_23 = 6)] = "ImageRatioType_23";
o[(o.ImageRatioType_32 = 7)] = "ImageRatioType_32";
o[(o.ImageRatioType_219 = 8)] = "ImageRatioType_219";
o[(o.ImageRatioType_45 = 9)] = "ImageRatioType_45";
o[(o.ImageRatioType_54 = 10)] = "ImageRatioType_54";
o[(o.ImageRatioType_12 = 11)] = "ImageRatioType_12";
o[(o.ImageRatioType_21 = 12)] = "ImageRatioType_21";
o[(o.ImageRatioType_921 = 13)] = "ImageRatioType_921";
o[(o.ImageRatioType_13 = 14)] = "ImageRatioType_13";
o[(o.ImageRatioType_31 = 15)] = "ImageRatioType_31";
export class DAImageRatioTypeUtils {
  static isExtendedGenerationRatio(e) {
    return (
      e === DAImageRatioType.ImageRatioType_45 ||
      e === DAImageRatioType.ImageRatioType_54 ||
      e === DAImageRatioType.ImageRatioType_12 ||
      e === DAImageRatioType.ImageRatioType_21 ||
      e === DAImageRatioType.ImageRatioType_921 ||
      e === DAImageRatioType.ImageRatioType_13 ||
      e === DAImageRatioType.ImageRatioType_31
    );
  }
  static titleOfValue(e) {
    if (e !== undefined) {
      switch (e) {
        case DAImageRatioType.ImageRatioType_11:
          return "1:1";
        case DAImageRatioType.ImageRatioType_34:
          return "3:4";
        case DAImageRatioType.ImageRatioType_169:
          return "16:9";
        case DAImageRatioType.ImageRatioType_43:
          return "4:3";
        case DAImageRatioType.ImageRatioType_916:
          return "9:16";
        case DAImageRatioType.ImageRatioType_23:
          return "2:3";
        case DAImageRatioType.ImageRatioType_32:
          return "3:2";
        case DAImageRatioType.ImageRatioType_219:
          return "21:9";
        case DAImageRatioType.ImageRatioType_45:
          return "4:5";
        case DAImageRatioType.ImageRatioType_54:
          return "5:4";
        case DAImageRatioType.ImageRatioType_12:
          return "1:2";
        case DAImageRatioType.ImageRatioType_21:
          return "2:1";
        case DAImageRatioType.ImageRatioType_921:
          return "9:21";
        case DAImageRatioType.ImageRatioType_13:
          return "1:3";
        case DAImageRatioType.ImageRatioType_31:
          return "3:1";
      }
    }
  }
  static ratioValue(e) {
    switch (e) {
      case DAImageRatioType.ImageRatioType_11:
        return 1;
      case DAImageRatioType.ImageRatioType_34:
        return 0.75;
      case DAImageRatioType.ImageRatioType_169:
        return 16 / 9;
      case DAImageRatioType.ImageRatioType_43:
        return 4 / 3;
      case DAImageRatioType.ImageRatioType_916:
        return 9 / 16;
      case DAImageRatioType.ImageRatioType_23:
        return 2 / 3;
      case DAImageRatioType.ImageRatioType_32:
        return 1.5;
      case DAImageRatioType.ImageRatioType_219:
        return 21 / 9;
      case DAImageRatioType.ImageRatioType_45:
        return 0.8;
      case DAImageRatioType.ImageRatioType_54:
        return 5 / 4;
      case DAImageRatioType.ImageRatioType_12:
        return 0.5;
      case DAImageRatioType.ImageRatioType_21:
        return 2;
      case DAImageRatioType.ImageRatioType_921:
        return 9 / 21;
      case DAImageRatioType.ImageRatioType_13:
        return 1 / 3;
      case DAImageRatioType.ImageRatioType_31:
        return 3;
    }
  }
  static strToType(e) {
    for (let t = 0; t < DAImageRatioTypeUtils.ratios.length; t++) {
      let ratio = DAImageRatioTypeUtils.ratios[t];
      if (DAImageRatioTypeUtils.titleOfValue(ratio) === e) {
        return ratio;
      }
    }
  }
  static valueToType(e) {
    let t;
    if (e === undefined) {
      return;
    }
    let i = 999999999;
    for (let o = 0; o < DAImageRatioTypeUtils.ratios.length; o++) {
      let ratio = DAImageRatioTypeUtils.ratios[o];
      let n = Math.abs(e - DAImageRatioTypeUtils.ratioValue(ratio));
      if (n < i) {
        i = n;
        t = ratio;
      }
    }
    return t;
  }
}
DAImageRatioTypeUtils.ratios = [
  DAImageRatioType.ImageRatioType_11,
  DAImageRatioType.ImageRatioType_34,
  DAImageRatioType.ImageRatioType_169,
  DAImageRatioType.ImageRatioType_43,
  DAImageRatioType.ImageRatioType_916,
  DAImageRatioType.ImageRatioType_23,
  DAImageRatioType.ImageRatioType_32,
  DAImageRatioType.ImageRatioType_219,
  DAImageRatioType.ImageRatioType_45,
  DAImageRatioType.ImageRatioType_54,
  DAImageRatioType.ImageRatioType_12,
  DAImageRatioType.ImageRatioType_21,
  DAImageRatioType.ImageRatioType_921,
  DAImageRatioType.ImageRatioType_13,
  DAImageRatioType.ImageRatioType_31,
];
