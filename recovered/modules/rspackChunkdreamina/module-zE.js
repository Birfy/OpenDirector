import r from "bT";
import o from "c8J";
import i from "wnX";
import a from "rJ";
import l from "jW8";
export const A = r.forwardRef(function (e, t) {
  const e_className = e.className;
  const u = e_className === undefined ? "" : e_className;
  const e_style = e.style;
  const e_disabled = e.disabled;
  const e_beforeReadyArea = e.beforeReadyArea;
  const e_loadingArea = e.loadingArea;
  const e_noMoreArea = e.noMoreArea;
  const e_prepareArea = e.prepareArea;
  const e_retryArea = e.retryArea;
  const e_defaultStatus = e.defaultStatus;
  const e_status = e.status;
  const e_getScrollContainer = e.getScrollContainer;
  const e_getOffsetNode = e.getOffsetNode;
  const e_trigger = e.trigger;
  const E = e_trigger === undefined ? "scroll" : e_trigger;
  const e_threshold = e.threshold;
  const w = e_threshold === undefined ? 200 : e_threshold;
  const e_throttle = e.throttle;
  const N = e_throttle === undefined ? 0 : e_throttle;
  const e_getDataAtFirst = e.getDataAtFirst;
  const e_getData = e.getData;
  const e_blockWhenLoading = e.blockWhenLoading;
  const I = e_blockWhenLoading === undefined || e_blockWhenLoading;
  const e_onStatusChange = e.onStatusChange;
  const e_onClick = e.onClick;
  const e_onEndReached = e.onEndReached;
  const e_getDataWhenNoScrollAtFirst = e.getDataWhenNoScrollAtFirst;
  const B =
    e_getDataWhenNoScrollAtFirst !== undefined && e_getDataWhenNoScrollAtFirst;
  const ORef = r.useRef(null);
  const D =
    E === "scroll" && (e_getDataAtFirst === undefined || e_getDataAtFirst);
  const W = r.useState(
    e_defaultStatus === undefined ? "prepare" : e_defaultStatus,
  );
  const H = W[0];
  const V = W[1];
  const PRef = r.useRef(false);
  const z = e_status || H;
  const qRef = r.useRef(z);
  const Y = l.SE(e_disabled);
  const changeStatus = r.useCallback(
    function (e, t) {
      V(e);
      if (e_onStatusChange) {
        e_onStatusChange(e, t);
      }
    },
    [e_onStatusChange],
  );
  const J = r.useCallback(
    function (e) {
      if (!(Y.current || (I && qRef.current === "loading"))) {
        changeStatus("loading", e);
        if (e_getData != null) {
          e_getData(function (e) {
            changeStatus(e, "manual");
          });
        }
      }
    },
    [I, changeStatus, e_getData],
  );
  r.useEffect(
    function () {
      if (!(I && z === "loading")) {
        PRef.current = false;
      }
      qRef.current = z;
    },
    [z],
  );
  l.w5(
    function () {
      if (E === "scroll" && z === "prepare" && X(0, w)) {
        J("pageEnd");
      }
    },
    [z],
  );
  r.useEffect(
    function () {
      if (D) {
        if (!(qRef.current !== "prepare" || e_disabled)) {
          J("requestAtFirst");
        }
      } else if (
        E === "scroll" &&
        z === "prepare" &&
        X(0, w) &&
        !e_disabled &&
        B
      ) {
        J("pageEnd");
      }
    },
    [E, e_disabled],
  );
  const j = r.useCallback(
    function () {
      if (X(i.Z3("scrollTop", e_getScrollContainer), w + 1)) {
        if (!PRef.current) {
          PRef.current = true;
          if (e_onEndReached) {
            e_onEndReached();
          }
          if (!["nomore", "retry", "before-ready"].includes(qRef.current)) {
            J("scrollEnd");
          }
        }
      } else {
        PRef.current = false;
      }
    },
    [e_getScrollContainer, w, J, e_onEndReached],
  );
  r.useEffect(
    function () {
      let e = null;
      const t = N ? o.A(j, N) : j;
      if (E === "scroll" && !e_disabled) {
        const n = i.JC(e_getScrollContainer);
        if (n) {
          n.addEventListener("scroll", t);
          e = n;
        }
      }
      return function () {
        if (e) {
          e.removeEventListener("scroll", t);
        }
      };
    },
    [E, e_disabled, e_getScrollContainer, j, N],
  );
  const getDataWithEndReachCheck = function () {
    if (X(0, w)) {
      J("pageEnd");
    }
  };
  function X(e, t) {
    return (
      (e_getOffsetNode
        ? i.Z3("offsetHeight", e_getOffsetNode) +
          i.Z3("offsetTop", e_getOffsetNode)
        : i.Z3("scrollHeight", e_getScrollContainer)) -
        e -
        i.Z3("clientHeight", e_getScrollContainer) <=
      t
    );
  }
  function onClick(e) {
    if (
      (E === "click" && qRef.current === "prepare") ||
      qRef.current === "retry"
    ) {
      J("click");
    }
    if (e_onClick) {
      e_onClick(e);
    }
  }
  r.useImperativeHandle(
    t,
    function () {
      return {
        dom: ORef.current,
        changeStatus,
        getDataWithEndReachCheck,
      };
    },
    [changeStatus],
  );
  return r.createElement(a.Wb, null, function (e) {
    const e_prefixCls = e.prefixCls;
    const e_locale = e.locale;
    const a = e_locale === undefined ? i.q : e_locale;
    return r.createElement(
      "div",
      {
        className: i.xF(e_prefixCls + "-load-more status-" + z, u, {
          [e_prefixCls + "-load-more-disabled"]: e_disabled,
        }),
        ref: ORef,
        style: e_style,
        onClick,
      },
      ((e) => {
        switch (z) {
          case "before-ready":
            return e_beforeReadyArea;
          case "prepare":
            if (e_prepareArea === undefined) {
              return r.createElement(
                "div",
                {
                  className: "load-more-text prepare",
                },
                E === "scroll"
                  ? e.LoadMore.prepareScrollText
                  : e.LoadMore.prepareClickText,
                e.LoadMore.loadMoreText,
              );
            }
            return e_prepareArea;
          case "loading":
            if (e_loadingArea === undefined) {
              return r.createElement(
                "div",
                {
                  className: "load-more-text loading",
                },
                e.LoadMore.loadingText,
              );
            }
            return e_loadingArea;
          case "nomore":
            if (e_noMoreArea === undefined) {
              return r.createElement(
                "div",
                {
                  className: "load-more-text nomore",
                },
                e.LoadMore.noDataText,
              );
            }
            return e_noMoreArea;
          case "retry":
            if (e_retryArea === undefined) {
              return r.createElement(
                "div",
                {
                  className: "load-more-text retry",
                },
                e.LoadMore.failLoadText,
              );
            }
            return e_retryArea;
          default:
            return null;
        }
      })(a),
    );
  });
});
