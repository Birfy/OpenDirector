import r from "NY";
import n from "QWK";
import a from "dw4";
import o from "o7";
import { T } from "./module-uZN.js";
import c from "dGh";
const l = {
  cursor: 0,
  limit: 1,
  imageInfo: {
    imageSceneList: [
      {
        width: 20,
        height: 20,
        uniqKey: "20",
      },
    ],
  },
};
export class O extends o.jG {
  get hasLegacyCanvasProjects() {
    return this.availability === true;
  }
  get ready() {
    return this.availability !== undefined || this.isError;
  }
  refreshIfStale() {
    const e =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : Date.now();
    return this._requests.refreshIfStale(e);
  }
  reload() {
    return this._requests.reload();
  }
  reset() {
    this._requests.reset();
    a.h5(() => {
      this.availability = undefined;
      this.isError = false;
      this.loading = false;
    });
  }
  constructor(e) {
    var t;
    super();
    t = this;
    this._canvasProjectListDataService = e;
    this.availability = undefined;
    this.isError = false;
    this.loading = false;
    this._requests = this._store.add(
      new T({
        staleMs: 60000,
        load: () =>
          r._(function* () {
            const e =
              yield t._canvasProjectListDataService.getCanvasProjectList(l);
            if (!e.ok) {
              throw e.findJsError();
            }
            return e.value.value.length > 0;
          })(),
        onSuccess: (e) => {
          a.h5(() => {
            this.availability = e;
            this.isError = false;
          });
        },
        onError: () => {
          a.h5(() => {
            this.isError = true;
          });
        },
        onLoadingChange: (e) => {
          a.h5(() => {
            this.loading = e;
          });
        },
      }),
    );
    a.Gn(this, {
      availability: a.sH,
      isError: a.sH,
      loading: a.sH,
      hasLegacyCanvasProjects: a.EW,
      ready: a.EW,
    });
  }
}
O = n.Cg(
  [
    n.Qj(0, c.I),
    n.Sn("design:type", Function),
    n.Sn("design:paramtypes", [c.I === undefined ? Object : c.I]),
  ],
  O,
);
