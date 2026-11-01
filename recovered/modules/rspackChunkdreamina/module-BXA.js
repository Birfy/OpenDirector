import n from "NY";
import r from "oa";
import a from "bk";
import o from "QWK";
import s from "D5";
import c from "nss";
import l from "y8O";
import d from "L8k";
import { H as H_1 } from "./module-krt.js";
import v from "oF8";
import { a as a_1 } from "./module-Idr.js";
import { $ } from "./module-LRr.js";
import { d as d_1 } from "./module-fT.js";
import { _ } from "./module-a6i.js";
import { i } from "./module-t3.js";
import g from "pt";
import { L as L_1 } from "./module-vd4.js";
import { G } from "./module-cmX.js";
import S from "Kf";
import { W as W_1 } from "./module-Qx_2.js";
import { a as a_2 } from "./module-OKu.js";
import T from "eA1";
import J from "Z7t";
import j from "MU";
import C from "vJh";
import w from "NSp";
import L from "TOJ";
import M from "z7R";
import { Xm } from "./module-JX8.js";
import D from "st";
import R from "eV";
import N from "xi";
import { I } from "./module-Kbu.js";
import { V } from "./module-Xba.js";
import { k } from "./module-ML3.js";
import { j as j_1 } from "./module-Yk_3.js";
import * as K from "./module-Fd_2.js";
class O {
  getLoaded() {
    if (this._entry) {
      return this._entry;
    }
    try {
      const e = this._getCommercialFeatureLoader().getInstanceSync();
      if (e) {
        return this._createEntry(e);
      }
      return undefined;
    } catch (error) {
      N.V.error(
        "Failed to read the loaded commercial team invite entry:",
        error,
      );
      return;
    }
  }
  load() {
    return n
      ._(function* () {
        let e;
        const t = this.getLoaded();
        if (t) {
          return t;
        }
        const i = yield this._getCommercialFeatureLoader().getInstance();
        if ((e = this._entry) != null) {
          return e;
        }
        return this._createEntry(i);
      })
      .call(this);
  }
  onLoad(e) {
    try {
      return this._getCommercialFeatureLoader().onLoad(e);
    } catch (error) {
      N.V.error(
        "Failed to subscribe to the commercial team invite entry:",
        error,
      );
      return R.d;
    }
  }
  _getCommercialFeatureLoader() {
    return this._parentContainerService.invokeFunction((e) => e.get(M.jV));
  }
  _createEntry(e) {
    if (this._entry) {
      return this._entry;
    }
    const t = new D.L({
      checkDuplicate: true,
    });
    Xm(t, e.teamworkServices);
    t.register(I, j_1);
    t.register(k, V);
    const containerService = this._dynamicDependencyService.createChild(
      t.makeCollection(),
    );
    const inviteJoinService = containerService.invokeFunction((e) => e.get(k));
    this._entry = {
      containerService,
      inviteJoinService,
      dispose: () => containerService.dispose(),
    };
    return this._entry;
  }
  constructor(e, t) {
    this._parentContainerService = e;
    this._dynamicDependencyService = t;
  }
}
class U {
  getFavoriteExecutors() {
    return [];
  }
  getDownloadExecutors() {
    return [];
  }
  getDeleteExecutors() {
    return [];
  }
}
class W {
  constructor(e) {
    Object.assign(
      this,
      W_1(e, {
        isLocalItemMetaEnabled: () => true,
      }),
    );
  }
}
W = o.Cg(
  [
    o.Qj(0, i),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [i === undefined ? Object : i]),
  ],
  W,
);
class z {
  getStrategies() {
    return a_2(this._assetHistoryDataService);
  }
  constructor(e) {
    this._assetHistoryDataService = e;
  }
}
z = o.Cg(
  [
    o.Qj(0, T.N9),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [T.N9 === undefined ? Object : T.N9]),
  ],
  z,
);
class querySearchRoutePolicyService {
  shouldUseQueryServiceForKeywordSearch(e) {
    let t;
    return (
      e.assetType !== undefined &&
      J.xT(e.assetType) &&
      !!((t = e.query) == null ? undefined : t.trim())
    );
  }
}
class q {
  search(e) {
    return n
      ._(function* () {
        let t;
        let i;
        const n = yield this._assetQueryService.query(e);
        return a._(r._({}, n), {
          query:
            (t = (i = e.query) == null ? undefined : i.trim()) != null ? t : "",
          canSearchDeeper: false,
        });
      })
      .call(this);
  }
  constructor(e) {
    this._assetQueryService = e;
  }
}
q = o.Cg(
  [
    o.Qj(0, j.R),
    o.Sn("design:type", Function),
    o.Sn("design:paramtypes", [j.R === undefined ? Object : j.R]),
  ],
  q,
);
class detailNavigationService {
  openDetail(e, t) {
    return Promise.resolve(undefined);
  }
}
class B extends s.O {
  _registerDynamicSharedServices() {
    this._dynamicDependencyService.register(c.Y, l.z);
    this._dynamicDependencyService.register(H_1, v.y);
  }
  _registerChildLevelServices(e) {
    const t = new O(
      this._parentContainerService,
      this._dynamicDependencyService,
    );
    e.registry.register(K.e, new d.d(K.P, [t]));
    e.registry.register(L_1, G);
    e.registry.register(d_1, _);
    e.registry.register(i, g.P);
    e.registry.register(T.tK, W);
    e.registry.register(C.D, z);
    e.registry.register(w.R, U);
    L.G(e.registry, {
      querySearchRoutePolicyService,
      searchService: q,
    });
    S.G(e.registry, {
      detailNavigationService,
    });
    e.registry.register(a_1, $);
    return Promise.resolve();
  }
}
export { B as v };
