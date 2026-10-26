import a from "Ut";
import { F } from "./module-gpv.js";
import o from "yMd";
import { K } from "./module-j5o.js";
const i = K.resolutionMap["1k"].imageRatioSizes[0];
export var m = {
  prompt: "",
  negativePrompt: "",
  generateType: o.ce.Text2Image,
  model: K.key,
  largeImageInfo: {
    resolutionType: "1k",
    width: i.width,
    height: i.height,
  },
  sampleStrength: 0.5,
  mode: a.DAAIGCMode.workbench,
  abilityList: [],
  aspectRatio: F(i.ratioType),
};
export var M = K.resolutionMap["1k"];
