import a from "NY";
import o from "QWK";
import { _ } from "./module-Kt_2.js";
import { F } from "./module-OXk.js";
import c from "dw4";
import { xz } from "./module-K8.js";
class l {
  updateUserCanRefundData({ data, loading, keepData }) {
    this.state.canRefundLoading =
      loading != null ? loading : this.state.canRefundLoading;
    if (data) {
      let {
        recordList,
        hasMore,
        nextCursor,
        refundTimes,
        maxRefundTimes,
        refundAmountMap,
      } = data;
      this.state.canRefundNextCursor = nextCursor || 0;
      this.state.refundTimes = refundTimes || 0;
      this.state.maxRefundTimes = maxRefundTimes || 3;
      this.state.refundReasonMap = refundAmountMap || {};
      this.state.canRefundHasMore = hasMore || false;
      if (keepData) {
        let e = new Set((this.state.canRefundList || []).map((e) => e.orderId));
        let r = (recordList || []).filter((t) => !e.has(t.orderId));
        this.state.canRefundList = [...(this.state.canRefundList || []), ...r];
      } else {
        this.state.canRefundList = recordList || [];
      }
    }
  }
  updateUserApplyRefundData(e) {
    this.state.userApplyRefundData = e;
    let { refundReasonMap } = this.state;
    if ((e == null ? undefined : e.orderId) && refundReasonMap) {
      let r;
      let a =
        ((r = refundReasonMap[e == null ? undefined : e.orderId]) == null
          ? undefined
          : r.refundReasonList) || [];
      this.state.refundReasonList = a;
    }
  }
  updateUserApplyLoading(e) {
    this.state.userApplyLoading = e != null ? e : this.state.userApplyLoading;
  }
  updateUserRefundRecordData({ data, loading, keepData }) {
    this.state.refundRecordLoading =
      loading != null ? loading : this.state.refundRecordLoading;
    if (data) {
      let { recordList, hasMore, nextCursor } = data;
      this.state.refundRecordNextCursor = nextCursor || 0;
      this.state.refundRecordHasMore = hasMore || false;
      if (keepData) {
        let e = new Set(
          (this.state.refundRecordList || []).map((e) => e.refundRecordId),
        );
        let r = (recordList || []).filter((t) => !e.has(t.refundRecordId));
        this.state.refundRecordList = [
          ...(this.state.refundRecordList || []),
          ...r,
        ];
      } else {
        this.state.refundRecordList = recordList || [];
      }
    }
  }
  getUserCanRefundNextCursor() {
    return this.state.canRefundNextCursor || 0;
  }
  getUserRefundRecordNextCursor() {
    return this.state.refundRecordNextCursor || 0;
  }
  updateUserRefundRecordDetail(e) {
    this.state.userRefundRecordDetail = e;
  }
  updateSharkCheckOrderId(e) {
    this.state.sharkCheckOrderId = e || "";
  }
  constructor() {
    this.state = {
      canRefundLoading: false,
      canRefundList: [],
      canRefundNextCursor: 0,
      canRefundHasMore: false,
      refundTimes: 0,
      maxRefundTimes: 3,
      refundReasonMap: {},
      refundRecordLoading: false,
      refundRecordList: [],
      refundRecordNextCursor: 0,
      refundRecordHasMore: false,
      userApplyRefundData: undefined,
      refundReasonList: [],
      sharkCheckOrderId: "",
      userApplyLoading: false,
      userRefundRecordDetail: undefined,
    };
    c.l_(this);
  }
}
export class Z {
  get observableData() {
    return this._store.state;
  }
  getUserCanRefundOrderList(e) {
    const t = this;
    return a._(function* () {
      try {
        t._store.updateUserCanRefundData({
          loading: true,
        });
        let r = t._store.getUserCanRefundNextCursor() || 0;
        let a =
          yield t._commercialRefundTradeDataService.queryUserCanRefundOrderList(
            {
              cursor: (e == null ? undefined : e.cursor) || r,
              count: e == null ? undefined : e.count,
              goodTypeList: e == null ? undefined : e.goodTypeList,
              refundFrom: e == null ? undefined : e.refundFrom,
              userSpecifiedOrders:
                e == null ? undefined : e.userSpecifiedOrders,
            },
          );
        let [o, i] = a.pair();
        if (!a.ok || o) {
          return null;
        }
        t._store.updateUserCanRefundData({
          data: i,
          keepData: e == null ? undefined : e.keepData,
        });
        return i;
      } catch (e) {
        return null;
      } finally {
        t._store.updateUserCanRefundData({
          loading: false,
        });
      }
    })();
  }
  getUserRefundRecordList(e) {
    const t = this;
    return a._(function* () {
      try {
        t._store.updateUserRefundRecordData({
          loading: true,
        });
        let r = t._store.getUserRefundRecordNextCursor() || 0;
        let a =
          yield t._commercialRefundTradeDataService.queryUserRefundRecordList({
            cursor: (e == null ? undefined : e.cursor) || r,
            count: (e == null ? undefined : e.count) || 20,
            refundFrom: e == null ? undefined : e.refundFrom,
          });
        let [o, i] = a.pair();
        if (!a.ok || o) {
          return null;
        }
        t._store.updateUserRefundRecordData({
          data: i,
          keepData: e == null ? undefined : e.keepData,
        });
        return i;
      } catch (e) {
        return null;
      } finally {
        t._store.updateUserRefundRecordData({
          loading: false,
        });
      }
    })();
  }
  userApplyRefund(e) {
    const t = this;
    return a._(function* () {
      try {
        t._store.updateUserApplyLoading(true);
        let r = yield t._commercialRefundTradeDataService.userApplyRefund(e);
        let [a, o] = r.pair();
        if (!r.ok || a) {
          return null;
        }
        return o;
      } catch (e) {
        return null;
      } finally {
        t._store.updateUserApplyLoading(false);
      }
    })();
  }
  applyRefundSharkCheck(e) {
    const t = this;
    return a._(function* () {
      t._store.updateSharkCheckOrderId(
        (e == null ? undefined : e.orderId) || "",
      );
      let r = yield t._commercialRefundTradeDataService.userApplyRefund(e);
      t._store.updateSharkCheckOrderId("");
      if (r.ok) {
        return r;
      }
      return xz(r.code, r.msg, r.cause);
    })();
  }
  updateApplyRefundData(e) {
    this._store.updateUserApplyRefundData(e);
  }
  updateRefundDetailData(e) {
    this._store.updateUserRefundRecordDetail(e);
  }
  constructor(e, t) {
    this._containerService = e;
    this._commercialRefundTradeDataService = t;
    this._store = new l();
  }
}
Z = o.Cg(
  [
    o.Qj(0, _),
    o.Qj(1, F),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [
      _ === undefined ? Object : _,
      F === undefined ? Object : F,
    ]),
  ],
  Z,
);
