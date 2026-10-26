class o {
  constructor(e) {
    this.type = "backend";
    this.name = "@ies/intl-backend-plugin";
    this._services = undefined;
    this._options = undefined;
    this._allOptions = undefined;
    this._configLng = undefined;
    this._options = e;
  }
  _emit(e, t, n, i) {
    let o = (this._options.on || {})[e];
    if (typeof o === "function") {
      o(t, n);
    }
    i(null, n);
  }
  _getStorageKey(e) {
    let { apiKey, namespace } = this._options.loadOptions || {};
    if (apiKey && namespace) {
      return `text.${apiKey}.${namespace}.${e}`;
    }
  }
  init(e) {
    let t =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let n =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this._options = {
      ...t,
      ...this._options,
    };
    this._allOptions = n;
    this._services = e;
    this._services.resourceStore.options.initImmediate =
      t.initImmediate || false;
  }
  read(locale, t, i) {
    if (!this._configLng) {
      this._configLng = this._services.resourceStore.options.lng;
    }
    if (typeof this._configLng !== "string") {
      if (
        this._services.languageDetector &&
        typeof this._services.languageDetector.detect === "function"
      ) {
        try {
          this._configLng = this._services.languageDetector.detect();
        } catch (e) {
          this._configLng = "zh-CN";
        }
      } else {
        this._configLng = "zh-CN";
      }
    }
    if (this._options.simpleLoad && locale !== this._configLng) {
      return this._emit("simpleBlocked", locale, {}, i);
    }
    let { initialTexts, fallbackTexts = {} } = this._options;
    let s = {};
    if (typeof initialTexts === "function") {
      s = initialTexts(locale, this._getStorageKey(locale), t);
    } else if (initialTexts && typeof initialTexts === "object") {
      s = initialTexts[locale] || {};
    }
    if (typeof s !== "object") {
      try {
        s = JSON.parse(s);
      } catch (e) {
        s = {};
      }
    }
    let a = fallbackTexts[locale] || {};
    let options = {
      locale,
      namespace: "",
      apiKey: "",
      fallbackLang: this._allOptions.fallbackLng || [this._allOptions.lng],
      ...(this._options.loadOptions || {}),
    };
    this._emit("receiveInit", locale, s, i);
    (async () => {
      let t = this._options.client || null;
      if (!t) {
        try {
          let e = require("./module-tS.js");
          if (typeof e.default === "function") {
            t = e.default;
          } else {
            if (typeof e !== "function") {
              throw Error(
                'Error: can not get any client instance, intl backend plugin will emit "fallback" events',
              );
            }
            t = e;
          }
        } catch (t) {
          return this._emit("fallback", locale, a, i);
        }
      }
      try {
        t = new t(options);
      } catch (e) {}
      try {
        if (!t || typeof t.load !== "function") {
          throw Error();
        }
        let n = await t.load((t) => this._emit("chunk", locale, t, i), {
          options,
          callback: (t) => this._emit("chunk", locale, t, i),
        });
        this._emit("done", locale, n, i);
      } catch (t) {
        this._emit("fallback", locale, a, i);
      }
    })();
  }
  save() {}
  create(e, t, n, i) {}
}
o.type = "backend";
export const lH = function () {
  let e =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new o(e);
};
