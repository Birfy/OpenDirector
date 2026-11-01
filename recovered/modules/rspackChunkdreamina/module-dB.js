import o from "./module-Rd.js";
let r = o.getOrCreateInterface(
  "common_draft_mock_data",
  "DADraftCustomMockData",
);
export class DAPaintingMockData extends o.RTSDataClass {}
o.initMetadataFor(
  "class",
  DAPaintingMockData,
  "DAPaintingMockData",
  undefined,
  [r],
  "painting_mock_data",
);
