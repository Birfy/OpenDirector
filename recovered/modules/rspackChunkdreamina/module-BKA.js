import a from "NY";
import i from "QWK";
import n from "Kt";
import o from "OoR";
import s from "VuN";
class l extends o.m {
  parseHeycanResponseDataToResources(e) {
    return e;
  }
  getRequestData() {
    return {
      categoryId: 11978,
      panel: s.K.ActionTemplate,
    };
  }
}
export class O {
  fetchActionTemplates() {
    return a
      ._(function* () {
        return yield this._actionTemplateResourceRepository.fetchResources({});
      })
      .call(this);
  }
  constructor(e) {
    this._containerService = e;
    this._actionTemplateResourceRepository =
      this._containerService.createInstance(l);
  }
}
O = i.Cg(
  [
    i.Qj(0, n._),
    i.Sn("design:type", Function),
    i.Sn("design:paramtypes", [n._ === undefined ? Object : n._]),
  ],
  O,
);
