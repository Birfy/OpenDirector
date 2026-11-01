import a from "o7";
import r from "dw4";
class n {
  get hasPrev() {
    return this.currentIndex > 0;
  }
  get hasNext() {
    return this.currentIndex < this.list.length - 1 || this.hasMore;
  }
  get currentItem() {
    return this.list[this.currentIndex];
  }
  setHasMore(t) {
    this.hasMore = t;
  }
  setListStatus(t) {
    this.listStatus = t;
  }
  setCurrentIndex(t) {
    this.currentIndex = t;
  }
  setList(t) {
    this.list = t;
  }
  constructor(t) {
    this.list = [];
    this.list = t.list;
    this.listStatus = t.listStatus;
    this.hasMore = t.hasMore;
    this.currentIndex = t.list.findIndex((e) => e === t.currentItem);
    r.l_(this);
  }
}
export class D extends a.jG {
  get data() {
    return this._paginationStore;
  }
  tryJump(t) {
    const e = this._paginationStore.list[t];
    if (e) {
      this._paginationStore.setCurrentIndex(t);
      return Promise.resolve(e);
    }
    return Promise.resolve(null);
  }
  adjustCurrentIndex(t) {
    const { currentIndex } = this._paginationStore;
    if (t === 0) {
      this._paginationStore.setCurrentIndex(0);
    } else if (currentIndex >= t) {
      this._paginationStore.setCurrentIndex(t - 1);
    }
  }
  constructor({ preloadThreshold, properties }) {
    super();
    this._paginationStore = new n(properties);
    this._preloadThreshold = preloadThreshold;
  }
}
