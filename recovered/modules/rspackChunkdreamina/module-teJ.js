import o from "Rd";
export class DADraftMockData extends o.RTSDataClass {
  getCustomMockDataByType() {
    if (this.customMockData !== undefined) {
      return o.CondCast.toAny(this.customMockData);
    }
  }
}
o.getOrCreateInterface("common_draft_mock_data", "DADraftCustomMockData");
export class DATemplateModel extends o.RTSDataClass {}
export class DAModelInfoModel extends o.RTSDataClass {}
export class DAImageInfo extends o.RTSDataClass {
  constructor() {
    super(...arguments);
    this.isOriginItem = false;
  }
}
