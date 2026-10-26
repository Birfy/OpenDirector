import r from "dw4";
export class u {
  get _searchStore() {
    let e;
    let t;
    if (
      (e = (t = this._subjectSearchManager) == null ? undefined : t.data) !=
      null
    ) {
      return e;
    }
    return null;
  }
  get keyword() {
    let e;
    let t;
    if ((e = (t = this._searchStore) == null ? undefined : t.keyword) != null) {
      return e;
    }
    return "";
  }
  get filteredResourceOptions() {
    let e;
    let t;
    const i =
      (e = (t = this._searchStore) == null ? undefined : t.keyword) != null
        ? e
        : "";
    const r = this._options.getResourceOptions();
    if (i) {
      return r.filter((e) => e.label.toLowerCase().includes(i.toLowerCase()));
    }
    return r;
  }
  get subjectResults() {
    let e;
    let t;
    if ((e = (t = this._searchStore) == null ? undefined : t.results) != null) {
      return e;
    }
    return [];
  }
  get isSearching() {
    return !this._searchStore || this._searchStore.isSearching;
  }
  get isSubjectLoading() {
    const _searchStore = this._searchStore;
    return (
      !_searchStore ||
      (!!_searchStore.isSearching &&
        (_searchStore.keyword
          ? this.subjectResults.length > 0
          : this.subjectResults.length === 0))
    );
  }
  get isEmpty() {
    return (
      this.filteredResourceOptions.length === 0 &&
      this.subjectResults.length === 0
    );
  }
  get hasOptions() {
    return this.isSubjectLoading || !this.isEmpty;
  }
  get showDivider() {
    return (
      this.filteredResourceOptions.length > 0 && this.subjectResults.length > 0
    );
  }
  setSubjectSearchManager(e) {
    this._subjectSearchManager = e;
  }
  constructor(e) {
    this._options = e;
    this._subjectSearchManager = null;
    r.l_(this);
  }
}
