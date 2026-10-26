export class v {
  constructor(e) {
    var t;
    var r;
    var a;
    var o;
    var i;
    this.isDev = e.isDev;
    this.isProd = e.isProd;
    this.isInternal = e.isInternal;
    this.isAutoTest = (t = e.isAutoTest) != null && t;
    this.isPc = (r = e.isPc) != null && r;
    this.appVersion = (a = e.appVersion) != null ? a : "0.0.1";
    this.appId = (o = e.appId) != null ? o : 0;
    this.highQuality = (i = e.highQuality) != null && i;
  }
}
