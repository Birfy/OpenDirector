import s from "Qey";
import i from "dw4";
import r from "Dm";
import n from "o7";
import l from "NY";
import c from "oa";
import d from "bk";
import u from "QWK";
import m from "e3";
import h from "aX";
import g from "c6";
import * as v from "./module-T3O.js";
import f from "jf";
import _ from "t3";
import A from "aS";
import { D } from "./module-T3h.js";
class o {
  get activeTab() {
    return this._activeTab;
  }
  get showFavoriteVideosOnly() {
    return this._showFavoriteVideosOnly;
  }
  get activeAssetType() {
    return this._activeAssetType;
  }
  setActiveTab(e) {
    this._activeTab = e;
  }
  setShowFavoriteVideosOnly(e) {
    this._showFavoriteVideosOnly = e;
  }
  setActiveAssetType(e) {
    this._activeAssetType = e;
  }
  constructor() {
    this._activeTab = "image-all";
    this._showFavoriteVideosOnly = true;
    this._activeAssetType = "image";
    i.l_(this);
  }
}
function p(channel) {
  const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
  if (t) {
    return {};
  }
  return {
    byLocalItem: true,
    channel,
  };
}
class b {
  getDataListState() {
    return this.dataList;
  }
  appendDataList(e, t) {
    const a = this.getDataListState();
    a.list = a.list.concat(e);
    if (t) {
      Object.assign(a, t);
    }
  }
  setDataListStatus(e) {
    Object.assign(this.getDataListState(), e);
  }
  updateItem(e, t) {
    const a = this.getDataListState();
    a.list = a.list.map((a) => {
      if (a.id === e) {
        return t;
      }
      return a;
    });
  }
  resetDataListState() {
    this.dataList = this._getDefaultDataListState();
  }
  _getDefaultDataListState() {
    return {
      list: [],
      isInitialized: false,
      loading: false,
      loadingFailure: false,
      hasMore: true,
      isEmpty: true,
    };
  }
  constructor() {
    this.dataList = this._getDefaultDataListState();
    i.l_(this);
  }
}
class y extends n.jG {
  get dataListStore() {
    return this._dataListStore;
  }
  get queryInfo() {
    return this._queryInfo;
  }
  setQueryInfo(e) {
    this._queryInfo = e;
  }
  resetDataListState() {
    this._queryInfo = undefined;
    this._dataListStore.resetDataListState();
  }
  _getDataListState() {
    return this._dataListStore.getDataListState();
  }
  _setDataListStatus(e) {
    this._dataListStore.setDataListStatus(e);
  }
  _appendDataList(e, t) {
    this._dataListStore.appendDataList(e, t);
  }
  constructor() {
    super();
    this._dataListStore = new b();
  }
}
class S extends y {
  get isInitialized() {
    return this._getDataListState().isInitialized;
  }
  get loading() {
    return this._getDataListState().loading;
  }
  get hasMore() {
    return this._getDataListState().hasMore;
  }
  get loadingFailure() {
    return this._getDataListState().loadingFailure;
  }
  get list() {
    return this._getDataListState().list;
  }
  get selectedList() {
    return this._getDataListState().list.filter((e) => e.selected);
  }
  getDataListState() {
    return this._getDataListState();
  }
  loadMore() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
    return l
      ._(function* () {
        const t = this._getDataListState();
        if (!t.loading && t.hasMore) {
          for (let a = 0, s = 0; a < e;) {
            try {
              const i = this._getQueryInfo();
              this._setDataListStatus({
                loading: true,
              });
              const r =
                yield this._getContentGenerationHistoryService.getHistoryList(
                  i,
                );
              if (!r.ok) {
                return void this._setDataListStatus({
                  loading: false,
                  loadingFailure: true,
                  isInitialized: true,
                });
              }
              const { value } = r;
              const o = this._deDuplicateAndTransformList(t.list, value.list);
              a += value.list.length;
              this.setQueryInfo(
                d._(c._({}, i), {
                  offset: value.nextOffset,
                }),
              );
              this._appendDataList(o, {
                loading: false,
                loadingFailure: false,
                hasMore: value.hasMore,
                isEmpty: o.length === 0 && t.list.length === 0,
                isInitialized: true,
              });
              if (!r.value.hasMore || ++s >= 10) {
                return;
              }
            } catch (error) {
              console.error("ImageAssetListManager loadMore error:", error);
              this._setDataListStatus({
                loading: false,
                loadingFailure: true,
                isInitialized: true,
              });
              return;
            }
          }
        }
      })
      .call(this);
  }
  setSelected(e, t) {
    this.dataListStore.updateItem(
      e.id,
      d._(c._({}, e), {
        selected: t,
      }),
    );
  }
  _getQueryInfo() {
    let { queryInfo } = this;
    if (!queryInfo) {
      const filterStatusList = [f.ln.OnlySuccess];
      if (this._onlyShowFavorite) {
        filterStatusList.push(f.ln.Favorited);
      }
      if (this._onlyShowSuperResolution) {
        filterStatusList.push(f.ln.SuperResolution);
      }
      queryInfo = d._(
        c._(
          {
            count: 30,
            direction: f._z.PageUp,
            offset: 0,
            filterTypeList: [f.Qu.Image, f.Qu.CreationAgent],
            filterStatusList,
          },
          p(f.Iw.AssetPage),
        ),
        {
          teamMemberUserId: this._commercialTeamContextService.isTeamMode
            ? v.eI
            : undefined,
        },
      );
      this.setQueryInfo(queryInfo);
    }
    return queryInfo;
  }
  _deDuplicateAndTransformList(e, t) {
    const a = [];
    const s = new Set(e.map((e) => e.id));
    const i = [];
    for (const r of t) {
      ((e) => {
        if (m.A(e)) {
          i.push(e);
        } else if (h.e(e)) {
          const { submitIdDataMap } = e;
          const a = [];
          Object.values(submitIdDataMap).forEach((e) => {
            if (m.A(e)) {
              a.push(e);
            }
          });
          a.sort(
            (e, t) =>
              e.statusModel.timeModel.createdTime -
              t.statusModel.timeModel.createdTime,
          );
          if (a.length > 0) {
            i.push(...a);
          }
        }
      })(r);
    }
    for (const n of i) {
      let o;
      const { itemList } = n;
      if (itemList.length) {
        for (let c = 0; c < itemList.length; c++) {
          if (!s.has(itemList[c].commonAttr.id)) {
            a.push({
              id: itemList[c].commonAttr.id,
              recordId:
                (o = n.idModel.recordId) != null
                  ? o
                  : itemList[c].commonAttr.id,
              coverUrl: itemList[c].commonAttr.coverUrl,
              selected: false,
              index: c,
              data: n,
            });
          }
        }
      }
    }
    return a;
  }
  constructor(e, t, a) {
    super();
    this._commercialTeamContextService = t;
    this._getContentGenerationHistoryService = a;
    this._onlyShowFavorite = e.onlyShowFavorite;
    this._onlyShowSuperResolution = e.onlyShowSuperResolution;
  }
}
S = u.Cg(
  [
    u.Qj(1, g.f),
    u.Qj(2, _.i),
    u.Sn("design:type", Function),
    u.Sn("design:paramtypes", [
      typeof ImageAssetListManagerParams === "undefined"
        ? Object
        : ImageAssetListManagerParams,
      g.f === undefined ? Object : g.f,
      _.i === undefined ? Object : _.i,
    ]),
  ],
  S,
);
class M extends y {
  get isInitialized() {
    return this._getDataListState().isInitialized;
  }
  get loading() {
    return this._getDataListState().loading;
  }
  get hasMore() {
    return this._getDataListState().hasMore;
  }
  get loadingFailure() {
    return this._getDataListState().loadingFailure;
  }
  get list() {
    return this._getDataListState().list;
  }
  get selectedList() {
    return this._getDataListState().list.filter((e) => e.selected);
  }
  getDataListState() {
    return this._getDataListState();
  }
  loadMore() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 22;
    return l
      ._(function* () {
        const t = this._getDataListState();
        if (!t.loading && t.hasMore) {
          let a = 0;
          for (let s = 0; s < e;) {
            try {
              const i = this._getQueryInfo();
              this._setDataListStatus({
                loading: true,
              });
              const r =
                yield this._getContentGenerationHistoryService.getHistoryList(
                  i,
                );
              if (!r.ok) {
                return void this._setDataListStatus({
                  loading: false,
                  loadingFailure: true,
                  isInitialized: true,
                });
              }
              const { value } = r;
              const o = this._deDuplicateAndTransformList(t.list, value.list);
              s += o.length;
              this.setQueryInfo(
                d._(c._({}, i), {
                  offset: value.nextOffset,
                }),
              );
              this._appendDataList(o, {
                loading: false,
                loadingFailure: false,
                hasMore: value.hasMore,
                isEmpty: o.length === 0 && t.list.length === 0,
                isInitialized: true,
              });
              if (!r.value.hasMore || ++a >= 10) {
                return;
              }
            } catch (error) {
              console.error("VideoAssetListManager loadMore error:", error);
              this._setDataListStatus({
                loading: false,
                loadingFailure: true,
                isInitialized: true,
              });
              return;
            }
          }
        }
      })
      .call(this);
  }
  setSelected(e, t) {
    this.dataListStore.updateItem(
      e.id,
      d._(c._({}, e), {
        selected: t,
      }),
    );
  }
  _getQueryInfo() {
    let { queryInfo } = this;
    if (!queryInfo) {
      queryInfo = d._(
        c._(
          {
            count: 50,
            direction: f._z.PageUp,
            offset: 0,
            filterTypeList: [f.Qu.Video, f.Qu.CreationAgent],
            filterStatusList: [
              f.ln.OnlySuccess,
              ...(this._onlyShowFavorite ? [f.ln.Favorited] : []),
            ],
          },
          p(f.Iw.AssetPage),
        ),
        {
          teamMemberUserId: this._commercialTeamContextService.isTeamMode
            ? v.eI
            : undefined,
        },
      );
      this.setQueryInfo(queryInfo);
    }
    return queryInfo;
  }
  _deDuplicateAndTransformList(e, t) {
    const a = [];
    const s = new Set(e.map((e) => e.id));
    const i = [];
    for (const r of t) {
      ((e) => {
        if (A.g(e)) {
          i.push(e);
        } else if (h.e(e)) {
          const { submitIdDataMap } = e;
          const a = [];
          Object.values(submitIdDataMap).forEach((e) => {
            if (A.g(e)) {
              a.push(e);
            }
          });
          a.sort(
            (e, t) =>
              e.statusModel.timeModel.createdTime -
              t.statusModel.timeModel.createdTime,
          );
          if (a.length > 0) {
            i.push(...a);
          }
        }
      })(r);
    }
    for (const n of i) {
      const { uniqueKey, itemList } = n;
      if (itemList.length) {
        for (let c = 0; c < itemList.length; c++) {
          if (!s.has(itemList[c].commonAttr.id)) {
            let d;
            let u;
            const { video } = itemList[c];
            const videoUrl = D(video);
            if (video.coverUrl && videoUrl) {
              a.push({
                id: itemList[c].commonAttr.id,
                videoId: video.videoId,
                coverUrl: video.coverUrl,
                videoUrl,
                duration: (d = video.duration) != null ? d : 0,
                recordId:
                  (u = n.idModel.recordId) != null
                    ? u
                    : itemList[c].commonAttr.id,
                selected: false,
                index: c,
                data: n,
              });
            }
          }
        }
      }
    }
    return a;
  }
  constructor(e, t, a) {
    super();
    this._commercialTeamContextService = t;
    this._getContentGenerationHistoryService = a;
    this._onlyShowFavorite = e.onlyShowFavorite;
  }
}
M = u.Cg(
  [
    u.Qj(1, g.f),
    u.Qj(2, _.i),
    u.Sn("design:type", Function),
    u.Sn("design:paramtypes", [
      typeof VideoAssetListManagerParams === "undefined"
        ? Object
        : VideoAssetListManagerParams,
      g.f === undefined ? Object : g.f,
      _.i === undefined ? Object : _.i,
    ]),
  ],
  M,
);
class L extends n.jG {
  get activeTab() {
    return this._assetModalStore.activeTab;
  }
  get showFavoriteVideosOnly() {
    return this._assetModalStore.showFavoriteVideosOnly;
  }
  get assetType() {
    return this._assetType;
  }
  get supportBothTypes() {
    return this._supportBothTypes;
  }
  get activeAssetType() {
    return this._assetModalStore.activeAssetType;
  }
  get imageAssetListManager() {
    return this._imageAssetListManager;
  }
  get videoAssetListManager() {
    return this._videoAssetListManager;
  }
  get currentImageAssetListManager() {
    const e = this._getManagerByTab(this.activeTab);
    r.F4(
      e,
      "Image asset list manager not found for tab: ".concat(this.activeTab),
    );
    return e;
  }
  get currentVideoAssetListManager() {
    const e = this._getManagerByTab(this.activeTab);
    r.F4(
      e,
      "Video asset list manager not found for tab: ".concat(this.activeTab),
    );
    return e;
  }
  get currentAssetListManager() {
    const e = this._getManagerByTab(this.activeTab);
    r.F4(e, "Asset list manager not found for tab: ".concat(this.activeTab));
    return e;
  }
  get selectedAssets() {
    let e;
    let t;
    let a;
    let s;
    let i;
    let r;
    let n;
    let o;
    let l;
    let c;
    const d =
      this.activeAssetType === "image"
        ? [
            ...((e =
              (r = this._imageAssetListManager) == null
                ? undefined
                : r.selectedList) != null
              ? e
              : []),
            ...((t =
              (n = this._imageAssetHDListManager) == null
                ? undefined
                : n.selectedList) != null
              ? t
              : []),
            ...((a =
              (o = this._imageAssetFavoriteListManager) == null
                ? undefined
                : o.selectedList) != null
              ? a
              : []),
          ]
        : [
            ...((s =
              (l = this._videoAssetListManager) == null
                ? undefined
                : l.selectedList) != null
              ? s
              : []),
            ...((i =
              (c = this._videoAssetFavoriteListManager) == null
                ? undefined
                : c.selectedList) != null
              ? i
              : []),
          ];
    const u = new Set();
    const m = [];
    for (const h of d) {
      if (!u.has(h.id)) {
        u.add(h.id);
        m.push(h);
      }
    }
    return m;
  }
  get disabledConfirm() {
    return this.selectedAssets.length === 0;
  }
  get assetsModalTips() {
    const length = this.selectedAssets.length;
    if (this.activeAssetType === "image") {
      return s.Ay.t(
        "web_canva_selected_pictures",
        {
          num: length,
        },
        "已选 ".concat(length, " 张图片"),
      );
    }
    return s.Ay.t(
      "web_canva_selected_videos",
      {
        num: length,
      },
      "已选 ".concat(length, " 个视频"),
    );
  }
  setActiveTab(e) {
    this._assetModalStore.setActiveTab(e);
    this._ensureManagerForTab(e);
  }
  setActiveAssetType(e) {
    if (e === "video" && this.activeAssetType === "image") {
      this._clearImageManagerSelections(this._imageAssetListManager);
      this._clearImageManagerSelections(this._imageAssetHDListManager);
      this._clearImageManagerSelections(this._imageAssetFavoriteListManager);
    } else if (e === "image" && this.activeAssetType === "video") {
      this._clearVideoManagerSelections(this._videoAssetListManager);
      this._clearVideoManagerSelections(this._videoAssetFavoriteListManager);
    }
    const t = e === "image" ? "image-all" : "video-all";
    i.h5(() => {
      this._assetModalStore.setActiveAssetType(e);
      this._assetModalStore.setActiveTab(t);
    });
    this._ensureManagerForTab(t);
  }
  setShowFavoriteVideosOnly(e) {
    this._assetModalStore.setShowFavoriteVideosOnly(e);
  }
  getSelectionResult() {
    return {
      type: this.activeAssetType,
      selectedAssets: this.selectedAssets,
    };
  }
  _initAssetListManager() {
    if (this._assetType === "image" || this._supportBothTypes) {
      this._imageAssetListManager = this._createImageAssetListManager({
        onlyShowFavorite: false,
        onlyShowSuperResolution: false,
      });
      this._imageAssetHDListManager = this._createImageAssetListManager({
        onlyShowFavorite: false,
        onlyShowSuperResolution: true,
      });
      this._imageAssetFavoriteListManager = this._createImageAssetListManager({
        onlyShowFavorite: true,
        onlyShowSuperResolution: false,
      });
    }
    if (this._assetType === "video" || this._supportBothTypes) {
      this._videoAssetListManager = this._createVideoAssetListManager(false);
      this._videoAssetFavoriteListManager =
        this._createVideoAssetListManager(true);
    }
  }
  _init() {
    this.currentAssetListManager.loadMore();
  }
  _ensureManagerForTab(e) {
    const t = this._getManagerByTab(e);
    if (t && !t.isInitialized) {
      t.loadMore();
    }
  }
  _getManagerByTab(e) {
    switch (e) {
      case "image-all":
        return this._imageAssetListManager;
      case "image-hd":
        return this._imageAssetHDListManager;
      case "image-favorite":
        return this._imageAssetFavoriteListManager;
      case "video-all":
        return this._videoAssetListManager;
      case "video-favorite":
        return this._videoAssetFavoriteListManager;
      default:
        return;
    }
  }
  _createImageAssetListManager(e) {
    return this._containerService.createInstance(S, e);
  }
  _createVideoAssetListManager(onlyShowFavorite) {
    return this._containerService.createInstance(M, {
      onlyShowFavorite,
    });
  }
  _clearImageManagerSelections(e) {
    if (e) {
      e.list.forEach((t) => {
        if (t.selected) {
          e.setSelected(t, false);
        }
      });
    }
  }
  _clearVideoManagerSelections(e) {
    if (e) {
      e.list.forEach((t) => {
        if (t.selected) {
          e.setSelected(t, false);
        }
      });
    }
  }
  constructor(e, t) {
    var a;
    super();
    this._containerService = e;
    this._assetModalStore = new o();
    this.disabledSelect = false;
    this._assetType = t.assetType;
    this._supportBothTypes = (a = t.supportBothTypes) != null && a;
    this._assetModalStore.setActiveAssetType(t.assetType);
    if (this._assetType === "image") {
      this._assetModalStore.setActiveTab("image-all");
    } else {
      this._assetModalStore.setActiveTab("video-all");
    }
    this._initAssetListManager();
    this._init();
  }
}
export { L };
