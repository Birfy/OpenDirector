import a from "NY";
import o from "oa";
import i from "bk";
import n from "QWK";
import { s } from "./module-zG.js";
import l from "dw4";
import { _ } from "./module-Kt_2.js";
class m {
  updateInvoiceHistoryData({ data, loading, keepData }) {
    this.state.invoiceHistoryLoading =
      loading != null ? loading : this.state.invoiceHistoryLoading;
    if (data) {
      let { invoiceList, hasMore, nextCursor } = data;
      this.state.invoiceHistoryNextCursor = nextCursor || "";
      this.state.invoiceHistoryHasMore = hasMore || false;
      if (keepData) {
        let e = new Set(this.state.invoiceHistoryList.map((e) => e.invoiceId));
        let r = (invoiceList || []).filter((t) => !e.has(t.invoiceId));
        this.state.invoiceHistoryList = [
          ...this.state.invoiceHistoryList,
          ...r,
        ];
      } else {
        this.state.invoiceHistoryList = invoiceList || [];
      }
    }
  }
  updateUnInvoicedOrderData({ data, loading, keepData }) {
    this.state.unInvoicedOrdersLoading =
      loading != null ? loading : this.state.unInvoicedOrdersLoading;
    if (data) {
      let a;
      let { hasMore, nextCursor, allowApplyInvoice, blockReason } = data;
      let c = (a = data.orderRecordInfoList) != null ? a : data.orderList;
      this.state.unInvoicedOrdersNextCursor = nextCursor || "";
      this.state.unInvoicedOrdersHasMore = hasMore || false;
      if (!(keepData && allowApplyInvoice === undefined)) {
        this.state.unInvoicedOrdersAllowApplyInvoice =
          allowApplyInvoice == null || allowApplyInvoice;
      }
      if (!(keepData && blockReason === undefined)) {
        this.state.unInvoicedOrdersBlockReason =
          blockReason != null ? blockReason : "";
      }
      if (keepData) {
        let e = new Set(this.state.unInvoicedOrdersList.map((e) => e.orderId));
        let t = (c || []).filter((t) => !e.has(t.orderId));
        this.state.unInvoicedOrdersList = [
          ...this.state.unInvoicedOrdersList,
          ...t,
        ];
      } else {
        this.state.unInvoicedOrdersList = c || [];
      }
    }
  }
  updateApplyInvoiceLoading(e) {
    this.state.applyInvoiceLoading = e;
  }
  updateUpdateInvoiceLoading(e) {
    this.state.updateInvoiceLoading = e;
  }
  updateLastTimeInvoiceInfo(e) {
    this.state.lastTimeInvoiceInfo = e;
  }
  updateEnterpriseInfoData({ data, loading }) {
    this.state.enterpriseInfoLoading =
      loading != null ? loading : this.state.enterpriseInfoLoading;
    if (data) {
      this.state.enterpriseInfoList = data.companyList || [];
    }
  }
  getInvoiceHistoryNextCursor() {
    return this.state.invoiceHistoryNextCursor;
  }
  getUnInvoicedOrdersNextCursor() {
    return this.state.unInvoicedOrdersNextCursor;
  }
  constructor() {
    this.state = {
      invoiceHistoryLoading: false,
      invoiceHistoryList: [],
      invoiceHistoryNextCursor: "",
      invoiceHistoryHasMore: false,
      unInvoicedOrdersLoading: false,
      unInvoicedOrdersList: [],
      unInvoicedOrdersNextCursor: "",
      unInvoicedOrdersHasMore: false,
      unInvoicedOrdersAllowApplyInvoice: true,
      unInvoicedOrdersBlockReason: "",
      applyInvoiceLoading: false,
      updateInvoiceLoading: false,
      lastTimeInvoiceInfo: undefined,
      enterpriseInfoList: [],
      enterpriseInfoLoading: false,
    };
    l.l_(this);
  }
}
export class q {
  get observableData() {
    return this._store.state;
  }
  applyInvoice(e) {
    const t = this;
    return a._(function* () {
      try {
        t._store.updateApplyInvoiceLoading(true);
        return yield t._dataService.applyInvoice(e);
      } finally {
        t._store.updateApplyInvoiceLoading(false);
      }
    })();
  }
  updateInvoice(e) {
    const t = this;
    return a._(function* () {
      try {
        t._store.updateUpdateInvoiceLoading(true);
        let [r, a] = (yield t._dataService.updateInvoice(e)).pair();
        if (r) {
          return null;
        }
        return a;
      } finally {
        t._store.updateUpdateInvoiceLoading(false);
      }
    })();
  }
  queryInvoiceHistory(e) {
    const t = this;
    return a._(function* () {
      try {
        let r;
        t._store.updateInvoiceHistoryData({
          loading: true,
        });
        let a = t._store.getInvoiceHistoryNextCursor();
        let n = yield t._dataService.queryInvoiceHistory(
          i._(o._({}, e), {
            cursor: (r = e.cursor) != null ? r : a ? Number(a) : undefined,
          }),
        );
        let [c, l] = n.pair();
        if (!n.ok || c) {
          return null;
        }
        t._store.updateInvoiceHistoryData({
          data: l,
          keepData: e.keepData,
        });
        return l;
      } finally {
        t._store.updateInvoiceHistoryData({
          loading: false,
        });
      }
    })();
  }
  queryUnInvoicedOrderList(e) {
    const t = this;
    return a._(function* () {
      try {
        let r;
        t._store.updateUnInvoicedOrderData({
          loading: true,
        });
        let a = t._store.getUnInvoicedOrdersNextCursor();
        let n = yield t._dataService.queryUnInvoicedOrderList(
          i._(o._({}, e), {
            cursor: (r = e.cursor) != null ? r : a ? Number(a) : undefined,
          }),
        );
        let [c, l] = n.pair();
        if (!n.ok || c) {
          return null;
        }
        t._store.updateUnInvoicedOrderData({
          data: l,
          keepData: e.keepData,
        });
        return l;
      } finally {
        t._store.updateUnInvoicedOrderData({
          loading: false,
        });
      }
    })();
  }
  batchGetInvoiceInfo(e) {
    const t = this;
    return a._(function* () {
      let [r, a] = (yield t._dataService.batchGetInvoiceInfo(e)).pair();
      if (r) {
        return null;
      }
      return a;
    })();
  }
  fuzzyQueryEnterpriseInfo(e) {
    const t = this;
    return a._(function* () {
      try {
        t._store.updateEnterpriseInfoData({
          loading: true,
        });
        let r = yield t._dataService.fuzzyQueryEnterpriseInfo(e);
        let [a, o] = r.pair();
        if (r.ok && o) {
          t._store.updateEnterpriseInfoData({
            data: o,
          });
        }
        if (a) {
          return null;
        }
        return o;
      } finally {
        t._store.updateEnterpriseInfoData({
          loading: false,
        });
      }
    })();
  }
  getLastTimeInvoiceInfo(e) {
    const t = this;
    return a._(function* () {
      let r = yield t._dataService.getLastTimeInvoiceInfo(e);
      let [a, o] = r.pair();
      if (r.ok && o) {
        t._store.updateLastTimeInvoiceInfo(o);
      }
      if (a) {
        return null;
      }
      return o;
    })();
  }
  reSendInvoice(e) {
    const t = this;
    return a._(function* () {
      let r = yield t._dataService.reSendInvoice(e);
      let [a, i] = r.pair();
      if (a) {
        return {
          serverErrorCode: r.code,
        };
      }
      return o._(
        {
          serverErrorCode: r.code,
        },
        i || {},
      );
    })();
  }
  applyRefundInvoice(e) {
    const t = this;
    return a._(function* () {
      let [r, a] = (yield t._dataService.applyRefundInvoice(e)).pair();
      if (r) {
        return null;
      }
      return a;
    })();
  }
  constructor(e, t) {
    this._containerService = e;
    this._dataService = t;
    this._store = new m();
  }
}
q = n.Cg(
  [
    n.Qj(0, _),
    n.Qj(1, s),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [
      _ === undefined ? Object : _,
      s === undefined ? Object : s,
    ]),
  ],
  q,
);
