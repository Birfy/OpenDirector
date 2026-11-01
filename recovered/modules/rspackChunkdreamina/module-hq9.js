import a from "./module-Rd.js";
export var DALipSyncType;
let r;
r = DALipSyncType || (DALipSyncType = {});
r.Input = "input";
r.ExtractAudio = "extract_audio";
r.Record = "record";
export class DALipSyncInputParams extends a.RTSDataClass {}
export class DALipSyncInputResource {
  constructor(e, t) {
    this.resource = e;
    this.sourceFrom = t;
  }
}
