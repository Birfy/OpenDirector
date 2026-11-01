import r from "QWK";
import s from "Kpt";
import n from "lj";
import o from "o7";
import a from "vrE";
import u from "Kt";
import l from "Egb";
import d from "Cc8";
import c from "fUU";
import h from "FF";
import v from "q5";
const _ = "[".concat(d.Wj, '="true"]');
export class z extends o.jG {
  get csrReadySelector() {
    return _;
  }
  get csrReadyAttribute() {
    return d.Wj;
  }
  _content() {
    this._removeSSR();
    return this.content();
  }
  _registerRouteConfig() {
    this._dreaminaUiConfigurationService.registerConfig({
      [s.N.PageRoute]: [
        {
          id: this.routeId,
          path: l.ph[this.routeId],
          content: () => this._content(),
        },
      ],
    });
  }
  _isCurrentRouteMatched() {
    let e;
    return (
      ((e = this._dreaminaUiConfigurationService.currentKeepAliveData) == null
        ? undefined
        : e.routeId) === this.routeId
    );
  }
  _removeSSR() {
    if (this._isCurrentRouteMatched() && !this._hasHandledSSR) {
      this._hasHandledSSR = true;
      const e =
        this.removeSSRTrigger === "page-load" ||
        this.removeSSRTrigger === "csr_ready_or_page_load";
      const t =
        this.removeSSRTrigger === "csr_ready" ||
        this.removeSSRTrigger === "csr_ready_or_page_load";
      if (e) {
        this._register(
          a.J(this._pageLoadEventService.onPageLoad)(() => {
            setTimeout(() => this._doRemoveSSR("page_load"));
          }),
        );
      }
      if (t) {
        this._registerCsrReadyObserver();
      }
      if (!(e || t)) {
        this._doRemoveSSR("page_load");
      }
    }
  }
  _reportPageLoaded(e) {
    this._pageLoadEventService.reportCustomPageLoadEvent(this.routeId, e);
  }
  _registerCsrReadyObserver() {
    const e = document.getElementById("csr-root");
    if (e) {
      const t = () => {
        setTimeout(() => this._doRemoveSSR("csr_ready"), 150);
      };
      if (e.querySelector(this.csrReadySelector)) {
        return void t();
      }
      var i = new MutationObserver(() => {
        if (e.querySelector(this.csrReadySelector)) {
          i.disconnect();
          t();
        }
      });
      i.observe(e, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [this.csrReadyAttribute],
      });
      this._register({
        dispose: () => i.disconnect(),
      });
    }
  }
  _doRemoveSSR(removeReason) {
    if (!(!this._isCurrentRouteMatched() || this._ssrRemoved)) {
      this._ssrRemoved = true;
      c.bW({
        beforeRemoveCallback: this._beforeRemoveSSR,
        afterRemoveCallback: () => {
          var t;
          h.X(this._containerService, {
            removeReason,
            routeId: l.ph[this.routeId],
          });
          if ((t = this._afterRemoveSSR) != null) {
            t.call(this);
          }
        },
      });
    }
  }
  constructor(e, t, i) {
    super();
    this._containerService = e;
    this._dreaminaUiConfigurationService = t;
    this._pageLoadEventService = i;
    this._hasHandledSSR = false;
    this._ssrRemoved = false;
    this._registerRouteConfig();
  }
}
z = r.Cg(
  [
    r.Qj(0, u._),
    r.Qj(1, n.K),
    r.Qj(2, v.s3),
    r.Sn("design:type", Function),
    r.Sn("design:paramtypes", [
      u._ === undefined ? Object : u._,
      n.K === undefined ? Object : n.K,
      v.s3 === undefined ? Object : v.s3,
    ]),
  ],
  z,
);
