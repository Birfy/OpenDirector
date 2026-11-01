import i from "NY";
import a from "QWK";
import o from "tvS";
import n from "o7";
import s from "Qey";
import l from "krt";
import c from "ks";
import d from "Erw";
import { I as I_1 } from "./module-Jf5.js";
import * as v from "./module-wbq.js";
import { P } from "./module-kkh.js";
import { Q } from "./module-wSZ.js";
import { $m } from "./module-GqG.js";
import g from "oa";
import _ from "bk";
import y from "dw4";
import S from "cY";
class f {
  updatePreviewImageUrls(e) {
    this.previewImageUrlByUri = g._({}, this.previewImageUrlByUri, e);
  }
  reset() {
    this.previewImageUrlByUri = {};
    this.dataByScene = {
      [v.m.WebChat]: [],
      [v.m.WebCanvas]: [],
    };
    this.loadingByScene = {
      [v.m.WebChat]: true,
      [v.m.WebCanvas]: true,
    };
  }
  getData(e) {
    return this.dataByScene[e];
  }
  isLoading(e) {
    return this.loadingByScene[e];
  }
  setSceneData(e, t) {
    this.dataByScene = _._(g._({}, this.dataByScene), {
      [e]: t,
    });
    this.loadingByScene = _._(g._({}, this.loadingByScene), {
      [e]: false,
    });
  }
  constructor() {
    this.previewImageUrlByUri = {};
    this.dataByScene = {
      [v.m.WebChat]: [],
      [v.m.WebCanvas]: [],
    };
    this.loadingByScene = {
      [v.m.WebChat]: true,
      [v.m.WebCanvas]: true,
    };
    y.l_(this, {
      previewImageUrlByUri: y.sH.ref,
      dataByScene: y.sH.ref,
      loadingByScene: y.sH.ref,
    });
  }
}
const k = [v.m.WebChat, v.m.WebCanvas];
function b(e) {
  const t = P(e.skill)[0];
  if ((t == null ? undefined : t.type) === "image") {
    return t.uri;
  }
}
var w = o.u1("create-recommendation-capsules-manager");
export { w as c };
class I extends n.jG {
  dispose() {
    this._requestEpoch++;
    super.dispose();
  }
  static _getSkillCovers(e) {
    if (!I._listeningAccounts.has(e)) {
      const t = () => {
        var t;
        if ((t = I._skillCoversByAccount.get(e)) != null) {
          t.dispose();
        }
        I._skillCoversByAccount.delete(e);
      };
      e.onDidLogin(t);
      e.onDidLogout(t);
      I._listeningAccounts.add(e);
    }
    let r = I._skillCoversByAccount.get(e);
    if (!r) {
      r = new Q($m);
      I._skillCoversByAccount.set(e, r);
    }
    return r;
  }
  initialize() {
    if (this._initializePromise == null) {
      this._initializePromise = this._initializeAllScenes();
    }
    return this._initializePromise;
  }
  prefetchPreviewImage(e) {
    if (!(!e || this._prefetchedPreviewImageUrls.has(e))) {
      this._prefetchedPreviewImageUrls.add(e);
      c.y(e).catch(() => undefined);
    }
  }
  _initializeAllScenes() {
    return i
      ._(function* () {
        const _requestEpoch = this._requestEpoch;
        yield Promise.all(
          k
            .filter((e) => this.store.isLoading(e))
            .map((e) => this._fetchScene(e)),
        );
        if (_requestEpoch === this._requestEpoch) {
          this._loadPreviewImageUrls(k.flatMap((e) => this.store.getData(e)));
        }
      })
      .call(this);
  }
  _loadPreviewImageUrls(e) {
    return i
      ._(function* () {
        const _requestEpoch = this._requestEpoch;
        const r = e.map(b).filter((e) => !!e);
        if (r.length !== 0) {
          try {
            const i = yield d._(this._materialDataService, r, {
              width: 544,
              height: 306,
              format: "webp",
            });
            if (!i || _requestEpoch !== this._requestEpoch) {
              return;
            }
            this.store.updatePreviewImageUrls(i);
          } catch (e) {}
        }
      })
      .call(this);
  }
  _fetchScene(scene) {
    return i
      ._(function* () {
        const _requestEpoch = this._requestEpoch;
        try {
          const r = yield this._capabilityCapsuleDataService.getCapsules({
            scene,
          });
          if (_requestEpoch !== this._requestEpoch) {
            return;
          }
          this.store.setSceneData(scene, r.ok ? r.value.capsules : []);
        } catch (r) {
          if (_requestEpoch !== this._requestEpoch) {
            return;
          }
          this.store.setSceneData(scene, []);
        }
      })
      .call(this);
  }
  constructor(e, t, r) {
    super();
    this._capabilityCapsuleDataService = e;
    this._materialDataService = t;
    this._accountService = r;
    this.store = new f();
    this.resolveSkillShowcaseCoverUrl = (e) =>
      I._getSkillCovers(this._accountService).resolve(e);
    this._requestEpoch = 0;
    this._prefetchedPreviewImageUrls = new Set();
    var i = ((lang) => {
      if (!(typeof document === "undefined")) {
        const t = document.getElementById("__DREAMINA_AGENT_RECOMMENDATIONS__");
        if (
          t &&
          (t.remove(),
          window.location.pathname.replace(/\/$/, "") === "/ai-tool/ai-agent")
        ) {
          try {
            let r;
            let i;
            const a = JSON.parse((r = t.textContent) != null ? r : "");
            if (
              (a == null ? undefined : a.version) !== 1 ||
              a.lang !== lang ||
              !Array.isArray((i = a.data) == null ? undefined : i.capsules)
            ) {
              return;
            }
            return {
              version: 1,
              lang,
              data: {
                capsules: a.data.capsules,
              },
            };
          } catch (e) {
            return;
          }
        }
      }
    })(s.Ay.language);
    if (i) {
      var a = v.g(i.data, v.m.WebChat);
      if (a.ok) {
        this.store.setSceneData(v.m.WebChat, a.value.capsules);
        var o = () => {
          this._requestEpoch++;
          this._prefetchedPreviewImageUrls.clear();
          this.store.reset();
          this._initializePromise = undefined;
          this.initialize();
        };
        this._register(r.onDidLogin(o));
        this._register(r.onDidLogout(o));
      }
    }
  }
}
export { I as n };
I._skillCoversByAccount = new WeakMap();
I._listeningAccounts = new WeakSet();
I = a.Cg(
  [
    a.Qj(0, I_1),
    a.Qj(1, l.H),
    a.Qj(2, S.i),
    a.Sn("design:type", Function),
    a.Sn("design:paramtypes", [
      I_1 === undefined ? Object : I_1,
      l.H === undefined ? Object : l.H,
      S.i === undefined ? Object : S.i,
    ]),
  ],
  I,
);
