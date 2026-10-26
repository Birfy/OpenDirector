import o from "./module-Rd.js";
let r = o.getOrCreateInterface(
  "common_draft_mock_data",
  "DADraftCustomMockData",
);
export class AIEffectInputParams extends o.RTSDataClass {}
export class AIEffectParams extends o.RTSDataClass {}
export class DAAIEffectData extends o.RTSDataClass {}
o.initMetadataFor(
  "class",
  DAAIEffectData,
  "DAAIEffectData",
  undefined,
  [r],
  "ai_effect_mock_data",
);
