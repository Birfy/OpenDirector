import o from "./module-Rd.js";
let r = o.getOrCreateInterface(
  "common_draft_mock_data",
  "DADraftCustomMockData",
);
export class DALipSyncMockData extends o.RTSDataClass {}
o.initMetadataFor(
  "class",
  DALipSyncMockData,
  "DALipSyncMockData",
  undefined,
  [r],
  "lip_sync_mock_data",
);
