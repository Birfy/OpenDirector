import r from "oa";
import a from "bk";
import o from "dw4";
import s from "gG";
export class K {
  get results() {
    return [...this._results];
  }
  setKeyword(e) {
    this.keyword = e;
  }
  appendResults(e) {
    let t;
    for (const i of e) {
      t = this;
      ((e) => {
        const i = s.K(e);
        if (!t._results.some((e) => s.K(e) === i)) {
          t._results.push(e);
        }
      })(i);
    }
  }
  replaceResults(e) {
    this._results.length = 0;
    this._results.push(...e);
  }
  updateIsFavoriteBySubjectIds(e, t) {
    if (e.length) {
      const i = new Set(e);
      this._results.forEach((e, o) => {
        if (i.has(e.subjectId)) {
          this._results[o] = a._(r._({}, e), {
            subjectControl: a._(r._({}, e.subjectControl), {
              isFavorite: t,
            }),
          });
        }
      });
    }
  }
  setPagination(e, t) {
    this.nextCursor = e;
    this.hasMore = t;
  }
  setSearching(e) {
    this.isSearching = e;
  }
  setLoadingMore(e) {
    this.isLoadingMore = e;
  }
  setError(e) {
    this.error = e;
  }
  removeByKey(e) {
    const t = this._results.findIndex((t) => s.K(t) === e);
    if (t !== -1) {
      this._results.splice(t, 1);
    }
  }
  upsertSubject(e, t) {
    if (t) {
      this.removeByKey(t);
    }
    const i = s.K(e);
    const r = this._results.findIndex((e) => s.K(e) === i);
    if (r === -1) {
      this._results.unshift(e);
    } else {
      this._results.splice(r, 1, e);
    }
  }
  applyFavorite(e, t) {
    const i = new Map(
      e.map((e) => [
        s.K(e),
        a._(r._({}, e), {
          subjectControl: a._(r._({}, e.subjectControl), {
            isFavorite: t,
          }),
        }),
      ]),
    );
    this._results.forEach((e, t) => {
      var r = i.get(s.K(e));
      if (r) {
        this._results.splice(t, 1, r);
      }
    });
  }
  clear() {
    this.keyword = "";
    this._results.length = 0;
    this.nextCursor = 0;
    this.hasMore = false;
    this.isSearching = false;
    this.isLoadingMore = false;
    this.error = undefined;
  }
  constructor() {
    this.keyword = "";
    this._results = [];
    this.nextCursor = 0;
    this.hasMore = false;
    this.isSearching = false;
    this.isLoadingMore = false;
    this.error = undefined;
    o.l_(this);
  }
}
