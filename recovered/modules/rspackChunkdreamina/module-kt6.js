import r from "NY";
import a from "QWK";
import o from "c8J";
import s from "K8";
import n from "Kt";
import { a as a_1 } from "./module-KCd.js";
import c from "eNj";
import { z } from "./module-s4D.js";
import { K } from "./module-QEt.js";
export class I {
  get data() {
    return this._subjectSearchStore;
  }
  searchByKeyword(e) {
    this._subjectSearchStore.setSearching(true);
    this._subjectSearchStore.setKeyword(e);
    this._subjectSearchStore.setError(undefined);
    this._throttledSearchByKeyword(e);
    return Promise.resolve(s.nj());
  }
  searchByKeywordImmediately(e) {
    this._subjectSearchStore.setSearching(true);
    this._subjectSearchStore.setKeyword(e);
    this._subjectSearchStore.setError(undefined);
    this._throttledSearchByKeyword.cancel();
    return this._doSearchByKeyword(e);
  }
  loadMore() {
    return r
      ._(function* () {
        const { keyword, nextCursor, hasMore, isSearching, isLoadingMore } =
          this._subjectSearchStore;
        if (isSearching || isLoadingMore || !hasMore) {
          return s.nj();
        }
        this._subjectSearchStore.setLoadingMore(true);
        this._subjectSearchStore.setError(undefined);
        const o = yield this._subjectService.getSubjectList({
          cursor: nextCursor,
          limit: c.qv,
          keyword: keyword.trim() || undefined,
          subjectSource: "mine",
        });
        this._subjectSearchStore.setLoadingMore(false);
        if (!o.ok) {
          this._subjectSearchStore.setError(o.msg);
          return s.xz(o.code, o.msg);
        }
        const {
          dataList = [],
          nextCursor: nextCursor_1,
          hasMore: hasMore_1,
        } = o.value;
        this._subjectRepositoryManager.addSubjects(dataList);
        this._subjectSearchStore.appendResults(dataList);
        this._subjectSearchStore.setPagination(
          nextCursor_1 != null ? nextCursor_1 : nextCursor + dataList.length,
          hasMore_1 != null && hasMore_1,
        );
        return s.nj();
      })
      .call(this);
  }
  clear() {
    this._searchVersion = this._searchVersion + 1;
    this._throttledSearchByKeyword.cancel();
    this._subjectSearchStore.clear();
  }
  updateIsFavoriteBySubjectIds(e, t) {
    this._subjectSearchStore.updateIsFavoriteBySubjectIds(e, t);
  }
  removeByKey(e) {
    this._subjectSearchStore.removeByKey(e);
  }
  upsertSubject(e, t) {
    this._subjectSearchStore.upsertSubject(e, t);
  }
  applyFavorite(e, t) {
    this._subjectSearchStore.applyFavorite(e, t);
  }
  _doSearchByKeyword(e) {
    return r
      ._(function* () {
        this._searchVersion = this._searchVersion + 1;
        const _searchVersion = this._searchVersion;
        this._subjectSearchStore.setSearching(true);
        this._subjectSearchStore.setError(undefined);
        const i = e.trim();
        const r = yield this._subjectService.getSubjectList({
          cursor: 0,
          limit: c.qv,
          keyword: i || undefined,
          subjectSource: "mine",
        });
        if (_searchVersion !== this._searchVersion) {
          return s.nj();
        }
        this._subjectSearchStore.setSearching(false);
        if (!r.ok) {
          this._subjectSearchStore.setError(r.msg);
          this._reportSubjectSearchStatus("fail", i);
          return s.xz(r.code, r.msg);
        }
        const { dataList = [], nextCursor, hasMore } = r.value;
        this._subjectRepositoryManager.addSubjects(dataList);
        this._subjectSearchStore.replaceResults(dataList);
        this._subjectSearchStore.setPagination(
          nextCursor != null ? nextCursor : c.qv,
          hasMore != null && hasMore,
        );
        this._reportSubjectSearchStatus("success", i);
        return s.nj();
      })
      .call(this);
  }
  _reportSubjectSearchStatus(status, searchWords) {
    if (searchWords) {
      const i = this._containerService.createInstance(a_1);
      i.setParams({
        status,
        searchWords,
      });
      i.report();
    }
  }
  constructor(e, t, i) {
    this._subjectRepositoryManager = e;
    this._subjectService = t;
    this._containerService = i;
    this._subjectSearchStore = new K();
    this._searchVersion = 0;
    this._throttledSearchByKeyword = o.A(
      (e) => this._doSearchByKeyword(e),
      50,
      {
        leading: false,
        trailing: true,
      },
    );
  }
}
I = a.Cg(
  [
    a.Qj(1, z),
    a.Qj(2, n._),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      typeof SubjectRepositoryManager === "undefined"
        ? Object
        : SubjectRepositoryManager,
      z === undefined ? Object : z,
      n._ === undefined ? Object : n._,
    ]),
  ],
  I,
);
