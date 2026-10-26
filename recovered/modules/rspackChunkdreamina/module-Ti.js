import o from "./module-Rd.js";
let r = o.getOrCreateInterface(
  "common_draft_mock_data",
  "DADraftCustomMockData",
);
export class DAPostEditMockData extends o.RTSDataClass {}
o.initMetadataFor(
  "class",
  DAPostEditMockData,
  "DAPostEditMockData",
  undefined,
  [r],
  "post_edit_mock_data",
);
