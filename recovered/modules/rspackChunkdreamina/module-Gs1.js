import a from "QWK";
import { _ } from "./module-Kt_2.js";
import i from "NY";
import { TZ } from "./module-K8.js";
import { o, w } from "./module-wKU.js";
import { r } from "./module-Sq_2.js";
import { B } from "./module-qm.js";
import { q } from "./module-pA_2.js";
class d {
  get _networkClient() {
    if (!this._networkClientInstance) {
      this._networkClientInstance =
        this._networkClientFactoryService.createNetworkClient();
    }
    return this._networkClientInstance;
  }
  _getApi(e) {
    const t = this;
    return i._(function* () {
      return yield t._httpApiSettingService.getAsyncApi(e);
    })();
  }
  applyInvoice(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/apply_invoice"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  updateInvoice(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/update_invoice"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  queryInvoiceHistory(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/invoice_history"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  queryUnInvoicedOrderList(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/un_invoiced_order_record"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  batchGetInvoiceInfo(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/batch_get_invoice_info"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  fuzzyQueryEnterpriseInfo(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/fuzzy_query_enterprise_info"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  getLastTimeInvoiceInfo(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/last_time_invoice_info"),
          w(e != null ? e : {}),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  reSendInvoice(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/re_send_invoice"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  applyRefundInvoice(e) {
    const t = this;
    return i._(function* () {
      try {
        let r = yield t._networkClient.post(
          yield t._getApi("/commerce/v1/invoice/apply_refund_invoice"),
          w(e),
        );
        return TZ(o(r.data));
      } catch (error) {
        return r(error);
      }
    })();
  }
  constructor(e, t) {
    this._httpApiSettingService = e;
    this._networkClientFactoryService = t;
  }
}
d = a.Cg(
  [
    a.Qj(0, B),
    a.Qj(1, q),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      B === undefined ? Object : B,
      q === undefined ? Object : q,
    ]),
  ],
  d,
);
export class j {
  applyInvoice(e) {
    return this._repository.applyInvoice(e);
  }
  updateInvoice(e) {
    return this._repository.updateInvoice(e);
  }
  queryInvoiceHistory(e) {
    return this._repository.queryInvoiceHistory(e);
  }
  queryUnInvoicedOrderList(e) {
    return this._repository.queryUnInvoicedOrderList(e);
  }
  batchGetInvoiceInfo(e) {
    return this._repository.batchGetInvoiceInfo(e);
  }
  fuzzyQueryEnterpriseInfo(e) {
    return this._repository.fuzzyQueryEnterpriseInfo(e);
  }
  getLastTimeInvoiceInfo(e) {
    return this._repository.getLastTimeInvoiceInfo(e);
  }
  reSendInvoice(e) {
    return this._repository.reSendInvoice(e);
  }
  applyRefundInvoice(e) {
    return this._repository.applyRefundInvoice(e);
  }
  constructor(e) {
    this._instantiationService = e;
    this._repository = this._instantiationService.createInstance(d);
  }
}
j = a.Cg(
  [
    a.Qj(0, _),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [_ === undefined ? Object : _]),
  ],
  j,
);
