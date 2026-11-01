import a from "Qey";
export var K = {
  coverUrl: require("Kd").a.IMAGE_MODEL.defaultIconUrl,
  name: "图片 3.0",
  description: "影视质感，文字更准，直出2k高清图",
  key: "high_aes_general_v30l:general_v3.0_18b",
  preAuditPolicy: "",
  subjectPreAuditPolicy: "",
  feats: ["new_model", "default_scene", "etta", "t2i", "character"],
  featConfig: {
    canny: {
      strength: 0.6,
    },
    depth: {
      strength: 0.6,
    },
    pose: {
      strength: 0.6,
    },
    styleReference: {
      strength: 0.8,
    },
  },
  resolutionMap: {
    "1k": {
      imageRatioSizes: [
        {
          ratioType: 1,
          width: 1328,
          height: 1328,
        },
        {
          ratioType: 2,
          width: 1104,
          height: 1472,
        },
        {
          ratioType: 3,
          width: 1664,
          height: 936,
        },
        {
          ratioType: 4,
          width: 1472,
          height: 1104,
        },
        {
          ratioType: 5,
          width: 936,
          height: 1664,
        },
        {
          ratioType: 6,
          width: 1056,
          height: 1584,
        },
        {
          ratioType: 7,
          width: 1584,
          height: 1056,
        },
        {
          ratioType: 8,
          width: 2016,
          height: 864,
        },
      ],
      imageRangeConfig: {
        minLength: 512,
        maxLength: 2016,
        maxPixelNum: 1763584,
      },
      get resolutionName() {
        return a.Ay.t("dre_t2i_setting_resolution_option_1k", {}, "标清 1K");
      },
    },
    "2k": {
      imageRatioSizes: [
        {
          ratioType: 1,
          width: 2048,
          height: 2048,
        },
        {
          ratioType: 2,
          width: 1728,
          height: 2304,
        },
        {
          ratioType: 3,
          width: 2560,
          height: 1440,
        },
        {
          ratioType: 4,
          width: 2304,
          height: 1728,
        },
        {
          ratioType: 5,
          width: 1440,
          height: 2560,
        },
        {
          ratioType: 6,
          width: 1664,
          height: 2496,
        },
        {
          ratioType: 7,
          width: 2496,
          height: 1664,
        },
        {
          ratioType: 8,
          width: 3024,
          height: 1296,
        },
      ],
      imageRangeConfig: {
        minLength: 1296,
        maxLength: 3024,
        maxPixelNum: 4194304,
      },
      get resolutionName() {
        return a.Ay.t("dre_t2i_setting_resolution_option_2k", {}, "高清 2K");
      },
    },
    "4k": {
      imageRatioSizes: [
        {
          ratioType: 1,
          width: 4096,
          height: 4096,
        },
        {
          ratioType: 2,
          width: 3520,
          height: 4704,
        },
        {
          ratioType: 3,
          width: 5504,
          height: 3040,
        },
        {
          ratioType: 4,
          width: 4704,
          height: 3520,
        },
        {
          ratioType: 5,
          width: 3040,
          height: 5504,
        },
        {
          ratioType: 6,
          width: 3328,
          height: 4992,
        },
        {
          ratioType: 7,
          width: 4992,
          height: 3328,
        },
        {
          ratioType: 8,
          width: 6240,
          height: 2656,
        },
      ],
      imageRangeConfig: {
        minLength: 2048,
        maxLength: 6240,
        maxPixelNum: 16777216,
      },
      get resolutionName() {
        return a.Ay.t("dreamina_image4_resolution_4k", {}, "超清 4K");
      },
    },
    "8k": {
      imageRatioSizes: [],
      imageRangeConfig: {
        minLength: 4096,
        maxLength: 8192,
        maxPixelNum: 67108864,
      },
      get resolutionName() {
        return a.Ay.t("dreamina_image4_resolution_8k", {}, "智能超清 8K");
      },
    },
  },
};
