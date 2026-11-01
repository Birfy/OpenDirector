import i from "NY";
import a from "oa";
import o from "tvS";
import n from "L8k";
export var r = (function (e) {
  const { id, loaders, fallback, resolve, onLoadError } = e;
  const d = Object.freeze(a._({}, loaders));
  const u = (e) =>
    typeof e === "string" && Object.prototype.hasOwnProperty.call(d, e);
  if (!id || !u(fallback)) {
    throw Error(
      "Page content requires a non-empty id and a registered fallback.",
    );
  }
  const Service = o.u1("page-content:".concat(id));
  class h {
    constructor(e) {
      this.Content = e;
    }
  }
  return {
    id,
    Service,
    register: (e, t) =>
      i._(function* () {
        let r;
        const a = resolve(t);
        const o = u(a) ? a : fallback;
        const p = (e) =>
          i._(function* () {
            try {
              return yield d[e]();
            } catch (error) {
              if (onLoadError != null) {
                onLoadError(error, e);
              }
              throw error;
            }
          })();
        try {
          r = yield p(o);
        } catch (error) {
          if (o === fallback) {
            throw error;
          }
          r = yield p(fallback);
        }
        e.register(Service, new n.d(h, [r]));
      })(),
  };
})({
  id: "create",
  loaders: Object.freeze({
    v0: () =>
      Promise.all([
        require.e("46qd"),
        require.e("uyh"),
        require.e("rle"),
        require.e("b7h"),
        require.e("5ws"),
        require.e("84i"),
        require.e("x4o"),
        require.e("pvu"),
        require.e("h0h"),
        require.e(894),
        require.e("z9t"),
        require.e("dmi"),
        require.e("tj5a"),
        require.e("lsa"),
        require.e("uoi"),
        require.e("e7a"),
        require.e("72p"),
        require.e("8u"),
        require.e("oqi"),
        require.e("8rr"),
        require.e("3vy2"),
        require.e("8h4"),
      ])
        .then(require.bind(require, "Oj8S"))
        .then((e) => e.DomesticCreateContent),
    v1: () =>
      Promise.all([
        require.e("46qd"),
        require.e("uyh"),
        require.e("rle"),
        require.e("b7h"),
        require.e("5ws"),
        require.e("84i"),
        require.e("x4o"),
        require.e("pvu"),
        require.e("h0h"),
        require.e(894),
        require.e("z9t"),
        require.e("dmi"),
        require.e("tj5a"),
        require.e("lsa"),
        require.e("uoi"),
        require.e("e7a"),
        require.e("72p"),
        require.e("8u"),
        require.e("oqi"),
        require.e("8rr"),
        require.e("3vy2"),
        require.e("w9p"),
      ])
        .then(require.bind(require, "FbS"))
        .then((e) => e.OverseaV1CreateContent),
    v2: () =>
      Promise.all([
        require.e("46qd"),
        require.e("uyh"),
        require.e("rle"),
        require.e("b7h"),
        require.e("5ws"),
        require.e("84i"),
        require.e("x4o"),
        require.e("pvu"),
        require.e("h0h"),
        require.e(894),
        require.e("z9t"),
        require.e("dmi"),
        require.e("tj5a"),
        require.e("lsa"),
        require.e("uoi"),
        require.e("e7a"),
        require.e("72p"),
        require.e("8u"),
        require.e("oqi"),
        require.e("8rr"),
        require.e("3vy2"),
        require.e("orc"),
      ])
        .then(require.bind(require, "F3Y"))
        .then((e) => e.OverseaV2CreateContent),
    v3: () =>
      Promise.all([
        require.e("46qd"),
        require.e("uyh"),
        require.e("rle"),
        require.e("b7h"),
        require.e("5ws"),
        require.e("84i"),
        require.e("x4o"),
        require.e("pvu"),
        require.e("h0h"),
        require.e(894),
        require.e("z9t"),
        require.e("dmi"),
        require.e("tj5a"),
        require.e("lsa"),
        require.e("uoi"),
        require.e("e7a"),
        require.e("72p"),
        require.e("8u"),
        require.e("oqi"),
        require.e("8rr"),
        require.e("3vy2"),
        require.e("nv2"),
      ])
        .then(require.bind(require, "w0s"))
        .then((e) => e.OverseaV3CreateContent),
  }),
  fallback: "v0",
  resolve: function (e) {
    const { isOversea, variant } = e;
    if (
      isOversea &&
      (variant === "v1" || variant === "v2" || variant === "v3")
    ) {
      return variant;
    }
    return "v0";
  },
  onLoadError: (e, t) =>
    console.error("[create-content] Failed to load ".concat(t), e),
});
