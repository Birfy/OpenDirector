import a from "NY";
import r from "hd";
import o from "N5A";
import l from "g1";
import i from "oa";
import c from "bk";
export function K() {
  let injectI18nResource;
  const { localesMap, pI18nResult, __lng, __injectedI18nUrl } = window;
  if (localesMap && pI18nResult && __lng) {
    injectI18nResource = {
      lng: __lng,
      resources: a._(function* () {
        try {
          yield pI18nResult;
          if (window.__lngResource) {
            return {
              [__lng]: {
                translation: window.__lngResource,
              },
            };
          }
          return;
        } catch (e) {
          return;
        }
      })(),
    };
  }
  const i18nService = new r.W({
    locale: o.L(),
    namespace: "MWeb_New",
    apiKey: "757088c0418111ee976757f383f9d9f8",
    injectI18nResource,
    backendClient: {
      load(e, n) {
        return a
          ._(function* (e, n) {
            const { options } = n;
            const { default: _default } = yield Promise.resolve().then(
              require.bind(require, "tS"),
            );
            const o = c._(i._({}, options), {
              zoneHost: options.zoneHost,
              mode: "normal",
              lazyUpdate: false,
            });
            const l = new _default(o);
            const d = new _default(
              c._(i._({}, o), {
                apiKey: "4d98be909d2611f1838f157ff311114b",
                namespace: "novel_web",
              }),
            );
            const [s, u] = yield Promise.all([l.load(), d.load()]);
            const p = i._({}, u, s);
            for (const h of Object.keys(u)) {
              if (s[h] === "") {
                p[h] = u[h];
              }
            }
            return p;
          })
          .apply(this, arguments);
      },
    },
  });
  return {
    i18nService,
    reportI18nEvents: (e) =>
      a._(function* () {
        if (__lng !== i18nService.currentLocale) {
          l.N(e, {
            failedReason: "current locale ("
              .concat(
                i18nService.currentLocale,
                ") is not equal to injected lng (",
              )
              .concat(__lng, ")"),
            lang: __lng,
          });
        } else if (
          !__injectedI18nUrl ||
          (__injectedI18nUrl == null
            ? undefined
            : __injectedI18nUrl.includes(
                localesMap == null ? undefined : localesMap[__lng],
              ))
        ) {
          l.N(e, {
            failedReason:
              "injected i18n url is not mate: __injectedI18nUrl: (".concat(
                __injectedI18nUrl,
                "), localeUrl: (localesMap?.[lng]))",
              ),
            lang: __lng,
          });
        } else if (pI18nResult) {
          yield pI18nResult;
          if (!window.__lngResource) {
            l.N(e, {
              failedReason: "__lngResource download failed",
              lang: __lng,
            });
          }
        }
      })(),
  };
}
