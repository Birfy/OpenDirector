import S from "WU";
import y from "dnG";
import x from "zhy";
import T from "GG";
import b from "Tst";
import M from "El";
import P from "U4";
import L from "bT";
import E from "fyk";
import j from "na6";
let i;
let n;
let r;
let l;
let s;
let a;
let c;
let d;
let h;
let u;
let f;
let p;
let g;
let _;
let m;
let v;
function G() {
  const e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (e != null) {
    this.setState(e);
  }
}
function A(e) {
  this.setState(
    function (t) {
      const o = this.constructor.getDerivedStateFromProps(e, t);
      if (o != null) {
        return o;
      }
      return null;
    }.bind(this),
  );
}
function W(e, t) {
  try {
    var o = this.props;
    var i = this.state;
    this.props = e;
    this.state = t;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(o, i);
  } finally {
    this.props = o;
    this.state = i;
  }
}
function H(e) {
  const e_prototype = e.prototype;
  if (!e_prototype || !e_prototype.isReactComponent) {
    throw Error("Can only polyfill class components");
  }
  if (
    typeof e.getDerivedStateFromProps !== "function" &&
    typeof e_prototype.getSnapshotBeforeUpdate !== "function"
  ) {
    return e;
  }
  let o = null;
  let i = null;
  let n = null;
  if (typeof e_prototype.componentWillMount === "function") {
    o = "componentWillMount";
  } else if (typeof e_prototype.UNSAFE_componentWillMount === "function") {
    o = "UNSAFE_componentWillMount";
  }
  if (typeof e_prototype.componentWillReceiveProps === "function") {
    i = "componentWillReceiveProps";
  } else if (
    typeof e_prototype.UNSAFE_componentWillReceiveProps === "function"
  ) {
    i = "UNSAFE_componentWillReceiveProps";
  }
  if (typeof e_prototype.componentWillUpdate === "function") {
    n = "componentWillUpdate";
  } else if (typeof e_prototype.UNSAFE_componentWillUpdate === "function") {
    n = "UNSAFE_componentWillUpdate";
  }
  if (o !== null || i !== null || n !== null) {
    throw Error(
      "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
        (e.displayName || e.name) +
        " uses " +
        (typeof e.getDerivedStateFromProps === "function"
          ? "getDerivedStateFromProps()"
          : "getSnapshotBeforeUpdate()") +
        " but also contains the following legacy lifecycles:" +
        (o !== null ? "\n  " + o : "") +
        (i !== null ? "\n  " + i : "") +
        (n !== null ? "\n  " + n : "") +
        "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks",
    );
  }
  if (typeof e.getDerivedStateFromProps === "function") {
    e_prototype.componentWillMount = G;
    e_prototype.componentWillReceiveProps = A;
  }
  if (typeof e_prototype.getSnapshotBeforeUpdate === "function") {
    if (typeof e_prototype.componentDidUpdate !== "function") {
      throw Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
      );
    }
    e_prototype.componentWillUpdate = W;
    const r = e_prototype.componentDidUpdate;
    e_prototype.componentDidUpdate = function (e, t, o) {
      const i = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : o;
      r.call(this, e, t, i);
    };
  }
  return e;
}
G.__suppressDeprecationWarning = true;
A.__suppressDeprecationWarning = true;
W.__suppressDeprecationWarning = true;
const F = function () {
  let e;
  let t;
  for (var o = 0, i = ""; o < arguments.length;) {
    if (
      (e = arguments[o++]) &&
      (t = (function e(t) {
        let o;
        let i;
        let n = "";
        if (typeof t === "string" || typeof t === "number") {
          n += t;
        } else if (typeof t === "object") {
          if (Array.isArray(t)) {
            for (o = 0; o < t.length; o++) {
              if (t[o] && (i = e(t[o]))) {
                if (n) {
                  n += " ";
                }
                n += i;
              }
            }
          } else {
            for (o in t) {
              if (t[o]) {
                if (n) {
                  n += " ";
                }
                n += o;
              }
            }
          }
        }
        return n;
      })(e))
    ) {
      if (i) {
        i += " ";
      }
      i += t;
    }
  }
  return i;
};
function N(e) {
  const e_cellCount = e.cellCount;
  const e_cellSize = e.cellSize;
  const e_computeMetadataCallback = e.computeMetadataCallback;
  const e_computeMetadataCallbackProps = e.computeMetadataCallbackProps;
  const e_nextCellsCount = e.nextCellsCount;
  const e_nextCellSize = e.nextCellSize;
  const e_nextScrollToIndex = e.nextScrollToIndex;
  const e_scrollToIndex = e.scrollToIndex;
  const e_updateScrollOffsetForScrollToIndex =
    e.updateScrollOffsetForScrollToIndex;
  if (
    e_cellCount !== e_nextCellsCount ||
    ((typeof e_cellSize === "number" || typeof e_nextCellSize === "number") &&
      e_cellSize !== e_nextCellSize)
  ) {
    e_computeMetadataCallback(e_computeMetadataCallbackProps);
    if (e_scrollToIndex >= 0 && e_scrollToIndex === e_nextScrollToIndex) {
      e_updateScrollOffsetForScrollToIndex();
    }
  }
}
const B = (() => {
  function e(t) {
    const t_cellCount = t.cellCount;
    const t_cellSizeGetter = t.cellSizeGetter;
    const t_estimatedCellSize = t.estimatedCellSize;
    S(this, e);
    P(this, "_cellSizeAndPositionData", {});
    P(this, "_lastMeasuredIndex", -1);
    P(this, "_lastBatchedIndex", -1);
    P(this, "_cellCount", undefined);
    P(this, "_cellSizeGetter", undefined);
    P(this, "_estimatedCellSize", undefined);
    this._cellSizeGetter = t_cellSizeGetter;
    this._cellCount = t_cellCount;
    this._estimatedCellSize = t_estimatedCellSize;
  }
  y(e, [
    {
      key: "areOffsetsAdjusted",
      value: function () {
        return false;
      },
    },
    {
      key: "configure",
      value: function (e) {
        const e_cellCount = e.cellCount;
        const e_estimatedCellSize = e.estimatedCellSize;
        const e_cellSizeGetter = e.cellSizeGetter;
        this._cellCount = e_cellCount;
        this._estimatedCellSize = e_estimatedCellSize;
        this._cellSizeGetter = e_cellSizeGetter;
      },
    },
    {
      key: "getCellCount",
      value: function () {
        return this._cellCount;
      },
    },
    {
      key: "getEstimatedCellSize",
      value: function () {
        return this._estimatedCellSize;
      },
    },
    {
      key: "getLastMeasuredIndex",
      value: function () {
        return this._lastMeasuredIndex;
      },
    },
    {
      key: "getOffsetAdjustment",
      value: function () {
        return 0;
      },
    },
    {
      key: "getSizeAndPositionOfCell",
      value: function (e) {
        if (e < 0 || e >= this._cellCount) {
          throw Error(
            "Requested index "
              .concat(e, " is outside of range 0..")
              .concat(this._cellCount),
          );
        }
        if (e > this._lastMeasuredIndex) {
          const t = this.getSizeAndPositionOfLastMeasuredCell();
          let o = t.offset + t.size;
          for (let i = this._lastMeasuredIndex + 1; i <= e; i++) {
            const size = this._cellSizeGetter({
              index: i,
            });
            if (size === undefined || isNaN(size)) {
              throw Error(
                "Invalid size returned for cell "
                  .concat(i, " of value ")
                  .concat(size),
              );
            }
            if (size === null) {
              this._cellSizeAndPositionData[i] = {
                offset: o,
                size: 0,
              };
              this._lastBatchedIndex = e;
            } else {
              this._cellSizeAndPositionData[i] = {
                offset: o,
                size,
              };
              o += size;
              this._lastMeasuredIndex = e;
            }
          }
        }
        return this._cellSizeAndPositionData[e];
      },
    },
    {
      key: "getSizeAndPositionOfLastMeasuredCell",
      value: function () {
        if (this._lastMeasuredIndex >= 0) {
          return this._cellSizeAndPositionData[this._lastMeasuredIndex];
        }
        return {
          offset: 0,
          size: 0,
        };
      },
    },
    {
      key: "getTotalSize",
      value: function () {
        const e = this.getSizeAndPositionOfLastMeasuredCell();
        return (
          e.offset +
          e.size +
          (this._cellCount - this._lastMeasuredIndex - 1) *
            this._estimatedCellSize
        );
      },
    },
    {
      key: "getUpdatedOffsetForIndex",
      value: function (e) {
        let t;
        const e_align = e.align;
        const e_containerSize = e.containerSize;
        const e_currentOffset = e.currentOffset;
        const e_targetIndex = e.targetIndex;
        if (e_containerSize <= 0) {
          return 0;
        }
        const l = this.getSizeAndPositionOfCell(e_targetIndex);
        const l_offset = l.offset;
        const a = l_offset - e_containerSize + l.size;
        switch (e_align === undefined ? "auto" : e_align) {
          case "start":
            t = l_offset;
            break;
          case "end":
            t = a;
            break;
          case "center":
            t = l_offset - (e_containerSize - l.size) / 2;
            break;
          default:
            t = Math.max(a, Math.min(l_offset, e_currentOffset));
        }
        return Math.max(0, Math.min(this.getTotalSize() - e_containerSize, t));
      },
    },
    {
      key: "getVisibleCellRange",
      value: function (e) {
        const e_containerSize = e.containerSize;
        let e_offset = e.offset;
        if (this.getTotalSize() === 0) {
          return {};
        }
        const i = e_offset + e_containerSize;
        const start = this._findNearestCell(e_offset);
        const r = this.getSizeAndPositionOfCell(start);
        e_offset = r.offset + r.size;
        for (var stop = start; e_offset < i && stop < this._cellCount - 1;) {
          stop++;
          e_offset += this.getSizeAndPositionOfCell(stop).size;
        }
        return {
          start,
          stop,
        };
      },
    },
    {
      key: "resetCell",
      value: function (e) {
        this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, e - 1);
      },
    },
    {
      key: "_binarySearch",
      value: function (e, t, o) {
        while (t <= e) {
          const i = t + Math.floor((e - t) / 2);
          const n = this.getSizeAndPositionOfCell(i).offset;
          if (n === o) {
            return i;
          }
          if (n < o) {
            t = i + 1;
          } else if (n > o) {
            e = i - 1;
          }
        }
        if (t > 0) {
          return t - 1;
        }
        return 0;
      },
    },
    {
      key: "_exponentialSearch",
      value: function (e, t) {
        let o = 1;
        while (
          e < this._cellCount &&
          this.getSizeAndPositionOfCell(e).offset < t
        ) {
          e += o;
          o *= 2;
        }
        return this._binarySearch(
          Math.min(e, this._cellCount - 1),
          Math.floor(e / 2),
          t,
        );
      },
    },
    {
      key: "_findNearestCell",
      value: function (e) {
        if (isNaN(e)) {
          throw Error("Invalid offset ".concat(e, " specified"));
        }
        e = Math.max(0, e);
        const t = this.getSizeAndPositionOfLastMeasuredCell();
        const o = Math.max(0, this._lastMeasuredIndex);
        if (t.offset >= e) {
          return this._binarySearch(o, 0, e);
        }
        return this._exponentialSearch(o, e);
      },
    },
  ]);
  return e;
})();
const V = (() => {
  function e(t) {
    const t_maxScrollSize = t.maxScrollSize;
    const i =
      t_maxScrollSize === undefined
        ? typeof window !== "undefined" && window.chrome
          ? 16777100
          : 1500000
        : t_maxScrollSize;
    const n = j(t, ["maxScrollSize"]);
    S(this, e);
    P(this, "_cellSizeAndPositionManager", undefined);
    P(this, "_maxScrollSize", undefined);
    this._cellSizeAndPositionManager = new B(n);
    this._maxScrollSize = i;
  }
  y(e, [
    {
      key: "areOffsetsAdjusted",
      value: function () {
        return (
          this._cellSizeAndPositionManager.getTotalSize() > this._maxScrollSize
        );
      },
    },
    {
      key: "configure",
      value: function (e) {
        this._cellSizeAndPositionManager.configure(e);
      },
    },
    {
      key: "getCellCount",
      value: function () {
        return this._cellSizeAndPositionManager.getCellCount();
      },
    },
    {
      key: "getEstimatedCellSize",
      value: function () {
        return this._cellSizeAndPositionManager.getEstimatedCellSize();
      },
    },
    {
      key: "getLastMeasuredIndex",
      value: function () {
        return this._cellSizeAndPositionManager.getLastMeasuredIndex();
      },
    },
    {
      key: "getOffsetAdjustment",
      value: function (e) {
        const e_containerSize = e.containerSize;
        const e_offset = e.offset;
        const i = this._cellSizeAndPositionManager.getTotalSize();
        const n = this.getTotalSize();
        return Math.round(
          this._getOffsetPercentage({
            containerSize: e_containerSize,
            offset: e_offset,
            totalSize: n,
          }) *
            (n - i),
        );
      },
    },
    {
      key: "getSizeAndPositionOfCell",
      value: function (e) {
        return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(e);
      },
    },
    {
      key: "getSizeAndPositionOfLastMeasuredCell",
      value: function () {
        return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
      },
    },
    {
      key: "getTotalSize",
      value: function () {
        return Math.min(
          this._maxScrollSize,
          this._cellSizeAndPositionManager.getTotalSize(),
        );
      },
    },
    {
      key: "getUpdatedOffsetForIndex",
      value: function (e) {
        const e_align = e.align;
        const e_containerSize = e.containerSize;
        let e_currentOffset = e.currentOffset;
        const e_targetIndex = e.targetIndex;
        e_currentOffset = this._safeOffsetToOffset({
          containerSize: e_containerSize,
          offset: e_currentOffset,
        });
        const offset =
          this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
            align: e_align === undefined ? "auto" : e_align,
            containerSize: e_containerSize,
            currentOffset: e_currentOffset,
            targetIndex: e_targetIndex,
          });
        return this._offsetToSafeOffset({
          containerSize: e_containerSize,
          offset,
        });
      },
    },
    {
      key: "getVisibleCellRange",
      value: function (e) {
        const e_containerSize = e.containerSize;
        let e_offset = e.offset;
        e_offset = this._safeOffsetToOffset({
          containerSize: e_containerSize,
          offset: e_offset,
        });
        return this._cellSizeAndPositionManager.getVisibleCellRange({
          containerSize: e_containerSize,
          offset: e_offset,
        });
      },
    },
    {
      key: "resetCell",
      value: function (e) {
        this._cellSizeAndPositionManager.resetCell(e);
      },
    },
    {
      key: "_getOffsetPercentage",
      value: function (e) {
        const e_containerSize = e.containerSize;
        const e_offset = e.offset;
        const e_totalSize = e.totalSize;
        if (e_totalSize <= e_containerSize) {
          return 0;
        }
        return e_offset / (e_totalSize - e_containerSize);
      },
    },
    {
      key: "_offsetToSafeOffset",
      value: function (e) {
        const e_containerSize = e.containerSize;
        const e_offset = e.offset;
        const i = this._cellSizeAndPositionManager.getTotalSize();
        const n = this.getTotalSize();
        if (i === n) {
          return e_offset;
        }
        return Math.round(
          this._getOffsetPercentage({
            containerSize: e_containerSize,
            offset: e_offset,
            totalSize: i,
          }) *
            (n - e_containerSize),
        );
      },
    },
    {
      key: "_safeOffsetToOffset",
      value: function (e) {
        const e_containerSize = e.containerSize;
        const e_offset = e.offset;
        const i = this._cellSizeAndPositionManager.getTotalSize();
        const n = this.getTotalSize();
        if (i === n) {
          return e_offset;
        }
        return Math.round(
          this._getOffsetPercentage({
            containerSize: e_containerSize,
            offset: e_offset,
            totalSize: n,
          }) *
            (i - e_containerSize),
        );
      },
    },
  ]);
  return e;
})();
function q() {
  const e =
    !(arguments.length > 0) || arguments[0] === undefined || arguments[0];
  let t = {};
  return function (o) {
    const o_callback = o.callback;
    const o_indices = o.indices;
    const r = Object.keys(o_indices);
    const l =
      !e ||
      r.every((e) => {
        const t = o_indices[e];
        if (Array.isArray(t)) {
          return t.length > 0;
        }
        return t >= 0;
      });
    const s =
      r.length !== Object.keys(t).length ||
      r.some((e) => {
        const o = t[e];
        const i = o_indices[e];
        if (Array.isArray(i)) {
          return o.join(",") !== i.join(",");
        }
        return o !== i;
      });
    t = o_indices;
    if (l && s) {
      o_callback(o_indices);
    }
  };
}
function K(e) {
  const e_cellSize = e.cellSize;
  const e_cellSizeAndPositionManager = e.cellSizeAndPositionManager;
  const e_previousCellsCount = e.previousCellsCount;
  const e_previousCellSize = e.previousCellSize;
  const e_previousScrollToAlignment = e.previousScrollToAlignment;
  const e_previousScrollToIndex = e.previousScrollToIndex;
  const e_previousSize = e.previousSize;
  const e_scrollOffset = e.scrollOffset;
  const e_scrollToAlignment = e.scrollToAlignment;
  const e_scrollToIndex = e.scrollToIndex;
  const e_size = e.size;
  const e_sizeJustIncreasedFromZero = e.sizeJustIncreasedFromZero;
  const e_updateScrollIndexCallback = e.updateScrollIndexCallback;
  const p = e_cellSizeAndPositionManager.getCellCount();
  const g = e_scrollToIndex >= 0 && e_scrollToIndex < p;
  if (
    g &&
    (e_size !== e_previousSize ||
      e_sizeJustIncreasedFromZero ||
      !e_previousCellSize ||
      (typeof e_cellSize === "number" && e_cellSize !== e_previousCellSize) ||
      e_scrollToAlignment !== e_previousScrollToAlignment ||
      e_scrollToIndex !== e_previousScrollToIndex)
  ) {
    e_updateScrollIndexCallback(e_scrollToIndex);
  } else if (
    !g &&
    p > 0 &&
    (e_size < e_previousSize || p < e_previousCellsCount) &&
    e_scrollOffset > e_cellSizeAndPositionManager.getTotalSize() - e_size
  ) {
    e_updateScrollIndexCallback(p - 1);
  }
}
const X = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
function getScrollbarSize(e) {
  if (((!i && i !== 0) || e) && X) {
    const t = document.createElement("div");
    t.style.position = "absolute";
    t.style.top = "-9999px";
    t.style.width = "50px";
    t.style.height = "50px";
    t.style.overflow = "scroll";
    document.body.appendChild(t);
    i = t.offsetWidth - t.clientWidth;
    document.body.removeChild(t);
  }
  return i;
}
const J =
  (n =
    typeof window !== "undefined"
      ? window
      : typeof self !== "undefined"
        ? self
        : {}).requestAnimationFrame ||
  n.webkitRequestAnimationFrame ||
  n.mozRequestAnimationFrame ||
  n.oRequestAnimationFrame ||
  n.msRequestAnimationFrame ||
  ((e) => n.setTimeout(e, 1000 / 60));
const Z =
  n.cancelAnimationFrame ||
  n.webkitCancelAnimationFrame ||
  n.mozCancelAnimationFrame ||
  n.oCancelAnimationFrame ||
  n.msCancelAnimationFrame ||
  ((e) => {
    n.clearTimeout(e);
  });
const $ = (e) => Z(e.id);
const Q = (e, t) => {
  Promise.resolve().then(() => {
    o = Date.now();
  });
  var o;
  var i = {
    id: J(function n() {
      if (Date.now() - o >= t) {
        e.call();
      } else {
        i.id = J(n);
      }
    }),
  };
  return i;
};
const eo = "requested";
l = r = ((e) => {
  function t(e) {
    let o;
    S(this, t);
    o = x(this, T(t).call(this, e));
    P(b(o), "_onGridRenderedMemoizer", q());
    P(b(o), "_onScrollMemoizer", q(false));
    P(b(o), "_deferredInvalidateColumnIndex", null);
    P(b(o), "_deferredInvalidateRowIndex", null);
    P(b(o), "_recomputeScrollLeftFlag", false);
    P(b(o), "_recomputeScrollTopFlag", false);
    P(b(o), "_horizontalScrollBarSize", 0);
    P(b(o), "_verticalScrollBarSize", 0);
    P(b(o), "_scrollbarPresenceChanged", false);
    P(b(o), "_scrollingContainer", undefined);
    P(b(o), "_childrenToDisplay", undefined);
    P(b(o), "_columnStartIndex", undefined);
    P(b(o), "_columnStopIndex", undefined);
    P(b(o), "_rowStartIndex", undefined);
    P(b(o), "_rowStopIndex", undefined);
    P(b(o), "_renderedColumnStartIndex", 0);
    P(b(o), "_renderedColumnStopIndex", 0);
    P(b(o), "_renderedRowStartIndex", 0);
    P(b(o), "_renderedRowStopIndex", 0);
    P(b(o), "_initialScrollTop", undefined);
    P(b(o), "_initialScrollLeft", undefined);
    P(b(o), "_disablePointerEventsTimeoutId", undefined);
    P(b(o), "_styleCache", {});
    P(b(o), "_cellCache", {});
    P(b(o), "_debounceScrollEndedCallback", function () {
      o._disablePointerEventsTimeoutId = null;
      o.setState({
        isScrolling: false,
        needToResetStyleCache: false,
      });
    });
    P(b(o), "_invokeOnGridRenderedHelper", function () {
      const onSectionRendered = o.props.onSectionRendered;
      o._onGridRenderedMemoizer({
        callback: onSectionRendered,
        indices: {
          columnOverscanStartIndex: o._columnStartIndex,
          columnOverscanStopIndex: o._columnStopIndex,
          columnStartIndex: o._renderedColumnStartIndex,
          columnStopIndex: o._renderedColumnStopIndex,
          rowOverscanStartIndex: o._rowStartIndex,
          rowOverscanStopIndex: o._rowStopIndex,
          rowStartIndex: o._renderedRowStartIndex,
          rowStopIndex: o._renderedRowStopIndex,
        },
      });
    });
    P(b(o), "_setScrollingContainerRef", function (e) {
      o._scrollingContainer = e;
    });
    P(b(o), "_onScroll", function (e) {
      if (e.target === o._scrollingContainer) {
        o.handleScrollEvent(e.target);
      }
    });
    o.state = {
      instanceProps: {
        columnSizeAndPositionManager: new V({
          cellCount: e.columnCount,
          cellSizeGetter: function (o) {
            return t._wrapSizeGetter(e.columnWidth)(o);
          },
          estimatedCellSize: t._getEstimatedColumnSize(e),
        }),
        rowSizeAndPositionManager: new V({
          cellCount: e.rowCount,
          cellSizeGetter: function (o) {
            return t._wrapSizeGetter(e.rowHeight)(o);
          },
          estimatedCellSize: t._getEstimatedRowSize(e),
        }),
        prevColumnWidth: e.columnWidth,
        prevRowHeight: e.rowHeight,
        prevColumnCount: e.columnCount,
        prevRowCount: e.rowCount,
        prevIsScrolling: e.isScrolling === true,
        prevScrollToColumn: e.scrollToColumn,
        prevScrollToRow: e.scrollToRow,
        scrollbarSize: 0,
        scrollbarSizeMeasured: false,
      },
      isScrolling: false,
      scrollDirectionHorizontal: 1,
      scrollDirectionVertical: 1,
      scrollLeft: 0,
      scrollTop: 0,
      scrollPositionChangeReason: null,
      needToResetStyleCache: false,
    };
    if (e.scrollToRow > 0) {
      o._initialScrollTop = o._getCalculatedScrollTop(e, o.state);
    }
    if (e.scrollToColumn > 0) {
      o._initialScrollLeft = o._getCalculatedScrollLeft(e, o.state);
    }
    return o;
  }
  M(t, e);
  y(
    t,
    [
      {
        key: "getOffsetForCell",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          const e_alignment = e.alignment;
          const scrollToAlignment =
            e_alignment === undefined
              ? this.props.scrollToAlignment
              : e_alignment;
          const e_columnIndex = e.columnIndex;
          const scrollToColumn =
            e_columnIndex === undefined
              ? this.props.scrollToColumn
              : e_columnIndex;
          const e_rowIndex = e.rowIndex;
          const scrollToRow =
            e_rowIndex === undefined ? this.props.scrollToRow : e_rowIndex;
          const s = {
            ...this.props,
            scrollToAlignment,
            scrollToColumn,
            scrollToRow,
          };
          return {
            scrollLeft: this._getCalculatedScrollLeft(s),
            scrollTop: this._getCalculatedScrollTop(s),
          };
        },
      },
      {
        key: "getTotalRowsHeight",
        value: function () {
          return this.state.instanceProps.rowSizeAndPositionManager.getTotalSize();
        },
      },
      {
        key: "getTotalColumnsWidth",
        value: function () {
          return this.state.instanceProps.columnSizeAndPositionManager.getTotalSize();
        },
      },
      {
        key: "handleScrollEvent",
        value: function (e) {
          const e_scrollLeft = e.scrollLeft;
          const e_scrollTop = e.scrollTop;
          const i = e_scrollTop === undefined ? 0 : e_scrollTop;
          if (!(i < 0)) {
            this._debounceScrollEnded();
            const n = this.props;
            const r = n.autoHeight;
            const l = n.autoWidth;
            const s = n.height;
            const a = n.width;
            const c = this.state.instanceProps;
            const d = c.scrollbarSize;
            const h = c.rowSizeAndPositionManager.getTotalSize();
            const u = c.columnSizeAndPositionManager.getTotalSize();
            const f = Math.min(
              Math.max(0, u - a + d),
              e_scrollLeft === undefined ? 0 : e_scrollLeft,
            );
            const p = Math.min(Math.max(0, h - s + d), i);
            if (this.state.scrollLeft !== f || this.state.scrollTop !== p) {
              const g = {
                isScrolling: true,
                scrollDirectionHorizontal:
                  f !== this.state.scrollLeft
                    ? f > this.state.scrollLeft
                      ? 1
                      : -1
                    : this.state.scrollDirectionHorizontal,
                scrollDirectionVertical:
                  p !== this.state.scrollTop
                    ? p > this.state.scrollTop
                      ? 1
                      : -1
                    : this.state.scrollDirectionVertical,
                scrollPositionChangeReason: "observed",
              };
              if (!r) {
                g.scrollTop = p;
              }
              if (!l) {
                g.scrollLeft = f;
              }
              g.needToResetStyleCache = false;
              this.setState(g);
            }
            this._invokeOnScrollMemoizer({
              scrollLeft: f,
              scrollTop: p,
              totalColumnsWidth: u,
              totalRowsHeight: h,
            });
          }
        },
      },
      {
        key: "invalidateCellSizeAfterRender",
        value: function (e) {
          const e_columnIndex = e.columnIndex;
          const e_rowIndex = e.rowIndex;
          this._deferredInvalidateColumnIndex =
            typeof this._deferredInvalidateColumnIndex === "number"
              ? Math.min(this._deferredInvalidateColumnIndex, e_columnIndex)
              : e_columnIndex;
          this._deferredInvalidateRowIndex =
            typeof this._deferredInvalidateRowIndex === "number"
              ? Math.min(this._deferredInvalidateRowIndex, e_rowIndex)
              : e_rowIndex;
        },
      },
      {
        key: "measureAllCells",
        value: function () {
          const props = this.props;
          const e_columnCount = props.columnCount;
          const e_rowCount = props.rowCount;
          const instanceProps = this.state.instanceProps;
          instanceProps.columnSizeAndPositionManager.getSizeAndPositionOfCell(
            e_columnCount - 1,
          );
          instanceProps.rowSizeAndPositionManager.getSizeAndPositionOfCell(
            e_rowCount - 1,
          );
        },
      },
      {
        key: "recomputeGridSize",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          const e_columnIndex = e.columnIndex;
          const o = e_columnIndex === undefined ? 0 : e_columnIndex;
          const e_rowIndex = e.rowIndex;
          const n = e_rowIndex === undefined ? 0 : e_rowIndex;
          const props = this.props;
          const r_scrollToColumn = props.scrollToColumn;
          const r_scrollToRow = props.scrollToRow;
          const instanceProps = this.state.instanceProps;
          instanceProps.columnSizeAndPositionManager.resetCell(o);
          instanceProps.rowSizeAndPositionManager.resetCell(n);
          this._recomputeScrollLeftFlag =
            r_scrollToColumn >= 0 &&
            (this.state.scrollDirectionHorizontal === 1
              ? o <= r_scrollToColumn
              : o >= r_scrollToColumn);
          this._recomputeScrollTopFlag =
            r_scrollToRow >= 0 &&
            (this.state.scrollDirectionVertical === 1
              ? n <= r_scrollToRow
              : n >= r_scrollToRow);
          this._styleCache = {};
          this._cellCache = {};
          this.forceUpdate();
        },
      },
      {
        key: "scrollToCell",
        value: function (e) {
          const e_columnIndex = e.columnIndex;
          const e_rowIndex = e.rowIndex;
          const columnCount = this.props.columnCount;
          const props = this.props;
          if (columnCount > 1 && e_columnIndex !== undefined) {
            this._updateScrollLeftForScrollToColumn({
              ...props,
              scrollToColumn: e_columnIndex,
            });
          }
          if (e_rowIndex !== undefined) {
            this._updateScrollTopForScrollToRow({
              ...props,
              scrollToRow: e_rowIndex,
            });
          }
        },
      },
      {
        key: "componentDidMount",
        value: function () {
          const props = this.props;
          const e_getScrollbarSize = props.getScrollbarSize;
          const e_height = props.height;
          const e_scrollLeft = props.scrollLeft;
          const e_scrollToColumn = props.scrollToColumn;
          const e_scrollTop = props.scrollTop;
          const e_scrollToRow = props.scrollToRow;
          const e_width = props.width;
          const instanceProps = this.state.instanceProps;
          this._initialScrollTop = 0;
          this._initialScrollLeft = 0;
          this._handleInvalidatedGridSize();
          if (!instanceProps.scrollbarSizeMeasured) {
            this.setState(function (e) {
              const t = {
                ...e,
                needToResetStyleCache: false,
              };
              t.instanceProps.scrollbarSize = e_getScrollbarSize();
              t.instanceProps.scrollbarSizeMeasured = true;
              return t;
            });
          }
          if (
            (typeof e_scrollLeft === "number" && e_scrollLeft >= 0) ||
            (typeof e_scrollTop === "number" && e_scrollTop >= 0)
          ) {
            const d = t._getScrollToPositionStateUpdate({
              prevState: this.state,
              scrollLeft: e_scrollLeft,
              scrollTop: e_scrollTop,
            });
            if (d) {
              d.needToResetStyleCache = false;
              this.setState(d);
            }
          }
          if (this._scrollingContainer) {
            if (this._scrollingContainer.scrollLeft !== this.state.scrollLeft) {
              this._scrollingContainer.scrollLeft = this.state.scrollLeft;
            }
            if (this._scrollingContainer.scrollTop !== this.state.scrollTop) {
              this._scrollingContainer.scrollTop = this.state.scrollTop;
            }
          }
          const h = e_height > 0 && e_width > 0;
          if (e_scrollToColumn >= 0 && h) {
            this._updateScrollLeftForScrollToColumn();
          }
          if (e_scrollToRow >= 0 && h) {
            this._updateScrollTopForScrollToRow();
          }
          this._invokeOnGridRenderedHelper();
          this._invokeOnScrollMemoizer({
            scrollLeft: e_scrollLeft || 0,
            scrollTop: e_scrollTop || 0,
            totalColumnsWidth:
              instanceProps.columnSizeAndPositionManager.getTotalSize(),
            totalRowsHeight:
              instanceProps.rowSizeAndPositionManager.getTotalSize(),
          });
          this._maybeCallOnScrollbarPresenceChange();
        },
      },
      {
        key: "componentDidUpdate",
        value: function (e, t) {
          const o = this;
          const props = this.props;
          const i_autoHeight = props.autoHeight;
          const i_autoWidth = props.autoWidth;
          const i_columnCount = props.columnCount;
          const i_height = props.height;
          const i_rowCount = props.rowCount;
          const i_scrollToAlignment = props.scrollToAlignment;
          const i_scrollToColumn = props.scrollToColumn;
          const i_scrollToRow = props.scrollToRow;
          const i_width = props.width;
          const state = this.state;
          const f_scrollLeft = state.scrollLeft;
          const f_scrollPositionChangeReason = state.scrollPositionChangeReason;
          const f_scrollTop = state.scrollTop;
          const f_instanceProps = state.instanceProps;
          this._handleInvalidatedGridSize();
          const v =
            (i_columnCount > 0 && e.columnCount === 0) ||
            (i_rowCount > 0 && e.rowCount === 0);
          if (f_scrollPositionChangeReason === eo) {
            if (
              !i_autoWidth &&
              f_scrollLeft >= 0 &&
              (f_scrollLeft !== this._scrollingContainer.scrollLeft || v)
            ) {
              this._scrollingContainer.scrollLeft = f_scrollLeft;
            }
            if (
              !i_autoHeight &&
              f_scrollTop >= 0 &&
              (f_scrollTop !== this._scrollingContainer.scrollTop || v)
            ) {
              this._scrollingContainer.scrollTop = f_scrollTop;
            }
          }
          const sizeJustIncreasedFromZero =
            (e.width === 0 || e.height === 0) && i_height > 0 && i_width > 0;
          if (this._recomputeScrollLeftFlag) {
            this._recomputeScrollLeftFlag = false;
            this._updateScrollLeftForScrollToColumn(this.props);
          } else {
            K({
              cellSizeAndPositionManager:
                f_instanceProps.columnSizeAndPositionManager,
              previousCellsCount: e.columnCount,
              previousCellSize: e.columnWidth,
              previousScrollToAlignment: e.scrollToAlignment,
              previousScrollToIndex: e.scrollToColumn,
              previousSize: e.width,
              scrollOffset: f_scrollLeft,
              scrollToAlignment: i_scrollToAlignment,
              scrollToIndex: i_scrollToColumn,
              size: i_width,
              sizeJustIncreasedFromZero,
              updateScrollIndexCallback: function () {
                return o._updateScrollLeftForScrollToColumn(o.props);
              },
            });
          }
          if (this._recomputeScrollTopFlag) {
            this._recomputeScrollTopFlag = false;
            this._updateScrollTopForScrollToRow(this.props);
          } else {
            K({
              cellSizeAndPositionManager:
                f_instanceProps.rowSizeAndPositionManager,
              previousCellsCount: e.rowCount,
              previousCellSize: e.rowHeight,
              previousScrollToAlignment: e.scrollToAlignment,
              previousScrollToIndex: e.scrollToRow,
              previousSize: e.height,
              scrollOffset: f_scrollTop,
              scrollToAlignment: i_scrollToAlignment,
              scrollToIndex: i_scrollToRow,
              size: i_height,
              sizeJustIncreasedFromZero,
              updateScrollIndexCallback: function () {
                return o._updateScrollTopForScrollToRow(o.props);
              },
            });
          }
          this._invokeOnGridRenderedHelper();
          if (f_scrollLeft !== t.scrollLeft || f_scrollTop !== t.scrollTop) {
            const totalRowsHeight =
              f_instanceProps.rowSizeAndPositionManager.getTotalSize();
            const totalColumnsWidth =
              f_instanceProps.columnSizeAndPositionManager.getTotalSize();
            this._invokeOnScrollMemoizer({
              scrollLeft: f_scrollLeft,
              scrollTop: f_scrollTop,
              totalColumnsWidth,
              totalRowsHeight,
            });
          }
          this._maybeCallOnScrollbarPresenceChange();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          if (this._disablePointerEventsTimeoutId) {
            $(this._disablePointerEventsTimeoutId);
          }
        },
      },
      {
        key: "render",
        value: function () {
          const props = this.props;
          const e_autoContainerWidth = props.autoContainerWidth;
          const e_autoHeight = props.autoHeight;
          const e_autoWidth = props.autoWidth;
          const e_className = props.className;
          const e_containerProps = props.containerProps;
          const e_containerRole = props.containerRole;
          const e_containerStyle = props.containerStyle;
          const e_height = props.height;
          const c = props.id;
          const e_noContentRenderer = props.noContentRenderer;
          const e_role = props.role;
          const e_style = props.style;
          const e_tabIndex = props.tabIndex;
          const e_width = props.width;
          const state = this.state;
          const g_instanceProps = state.instanceProps;
          const g_needToResetStyleCache = state.needToResetStyleCache;
          const v = this._isScrolling();
          const S = {
            boxSizing: "border-box",
            direction: "ltr",
            height: e_autoHeight ? "auto" : e_height,
            position: "relative",
            width: e_autoWidth ? "auto" : e_width,
            WebkitOverflowScrolling: "touch",
            willChange: "transform",
          };
          if (g_needToResetStyleCache) {
            this._styleCache = {};
          }
          if (!this.state.isScrolling) {
            this._resetStyleCache();
          }
          this._calculateChildrenToRender(this.props, this.state);
          const maxWidth =
            g_instanceProps.columnSizeAndPositionManager.getTotalSize();
          const y = g_instanceProps.rowSizeAndPositionManager.getTotalSize();
          const w = y > e_height ? g_instanceProps.scrollbarSize : 0;
          const x = maxWidth > e_width ? g_instanceProps.scrollbarSize : 0;
          if (
            x !== this._horizontalScrollBarSize ||
            w !== this._verticalScrollBarSize
          ) {
            this._horizontalScrollBarSize = x;
            this._verticalScrollBarSize = w;
            this._scrollbarPresenceChanged = true;
          }
          S.overflowX = maxWidth + w <= e_width ? "hidden" : "auto";
          S.overflowY = y + x <= e_height ? "hidden" : "auto";
          const _childrenToDisplay = this._childrenToDisplay;
          const T =
            _childrenToDisplay.length === 0 && e_height > 0 && e_width > 0;
          return L.createElement(
            "div",
            E(
              {
                ref: this._setScrollingContainerRef,
              },
              e_containerProps,
              {
                "aria-label": this.props["aria-label"],
                "aria-readonly": this.props["aria-readonly"],
                className: F("ReactVirtualized__Grid", e_className),
                id: c,
                onScroll: this._onScroll,
                role: e_role,
                style: {
                  ...S,
                  ...e_style,
                },
                tabIndex: e_tabIndex,
              },
            ),
            _childrenToDisplay.length > 0 &&
              L.createElement(
                "div",
                {
                  className: "ReactVirtualized__Grid__innerScrollContainer",
                  role: e_containerRole,
                  style: {
                    width: e_autoContainerWidth ? "auto" : maxWidth,
                    height: y,
                    maxWidth,
                    maxHeight: y,
                    overflow: "hidden",
                    pointerEvents: v ? "none" : "",
                    position: "relative",
                    ...e_containerStyle,
                  },
                },
                _childrenToDisplay,
              ),
            T && e_noContentRenderer(),
          );
        },
      },
      {
        key: "_calculateChildrenToRender",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props;
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.state;
          const e_cellRenderer = e.cellRenderer;
          const e_cellRangeRenderer = e.cellRangeRenderer;
          const e_columnCount = e.columnCount;
          const e_deferredMeasurementCache = e.deferredMeasurementCache;
          const e_height = e.height;
          const e_overscanColumnCount = e.overscanColumnCount;
          const e_overscanIndicesGetter = e.overscanIndicesGetter;
          const e_overscanRowCount = e.overscanRowCount;
          const e_rowCount = e.rowCount;
          const e_width = e.width;
          const e_isScrollingOptOut = e.isScrollingOptOut;
          const t_scrollDirectionHorizontal = t.scrollDirectionHorizontal;
          const t_scrollDirectionVertical = t.scrollDirectionVertical;
          const t_instanceProps = t.instanceProps;
          const _ =
            this._initialScrollTop > 0 ? this._initialScrollTop : t.scrollTop;
          const m =
            this._initialScrollLeft > 0
              ? this._initialScrollLeft
              : t.scrollLeft;
          const isScrolling = this._isScrolling(e, t);
          this._childrenToDisplay = [];
          if (e_height > 0 && e_width > 0) {
            const visibleColumnIndices =
              t_instanceProps.columnSizeAndPositionManager.getVisibleCellRange({
                containerSize: e_width,
                offset: m,
              });
            const visibleRowIndices =
              t_instanceProps.rowSizeAndPositionManager.getVisibleCellRange({
                containerSize: e_height,
                offset: _,
              });
            const horizontalOffsetAdjustment =
              t_instanceProps.columnSizeAndPositionManager.getOffsetAdjustment({
                containerSize: e_width,
                offset: m,
              });
            const verticalOffsetAdjustment =
              t_instanceProps.rowSizeAndPositionManager.getOffsetAdjustment({
                containerSize: e_height,
                offset: _,
              });
            this._renderedColumnStartIndex = visibleColumnIndices.start;
            this._renderedColumnStopIndex = visibleColumnIndices.stop;
            this._renderedRowStartIndex = visibleRowIndices.start;
            this._renderedRowStopIndex = visibleRowIndices.stop;
            const x = e_overscanIndicesGetter({
              direction: "horizontal",
              cellCount: e_columnCount,
              overscanCellsCount: e_overscanColumnCount,
              scrollDirection: t_scrollDirectionHorizontal,
              startIndex:
                typeof visibleColumnIndices.start === "number"
                  ? visibleColumnIndices.start
                  : 0,
              stopIndex:
                typeof visibleColumnIndices.stop === "number"
                  ? visibleColumnIndices.stop
                  : -1,
            });
            const R = e_overscanIndicesGetter({
              direction: "vertical",
              cellCount: e_rowCount,
              overscanCellsCount: e_overscanRowCount,
              scrollDirection: t_scrollDirectionVertical,
              startIndex:
                typeof visibleRowIndices.start === "number"
                  ? visibleRowIndices.start
                  : 0,
              stopIndex:
                typeof visibleRowIndices.stop === "number"
                  ? visibleRowIndices.stop
                  : -1,
            });
            let columnStartIndex = x.overscanStartIndex;
            let columnStopIndex = x.overscanStopIndex;
            let rowStartIndex = R.overscanStartIndex;
            let rowStopIndex = R.overscanStopIndex;
            if (e_deferredMeasurementCache) {
              if (!e_deferredMeasurementCache.hasFixedHeight()) {
                for (let M = rowStartIndex; M <= rowStopIndex; M++) {
                  if (!e_deferredMeasurementCache.has(M, 0)) {
                    columnStartIndex = 0;
                    columnStopIndex = e_columnCount - 1;
                    break;
                  }
                }
              }
              if (!e_deferredMeasurementCache.hasFixedWidth()) {
                for (let k = columnStartIndex; k <= columnStopIndex; k++) {
                  if (!e_deferredMeasurementCache.has(0, k)) {
                    rowStartIndex = 0;
                    rowStopIndex = e_rowCount - 1;
                    break;
                  }
                }
              }
            }
            this._childrenToDisplay = e_cellRangeRenderer({
              cellCache: this._cellCache,
              cellRenderer: e_cellRenderer,
              columnSizeAndPositionManager:
                t_instanceProps.columnSizeAndPositionManager,
              columnStartIndex,
              columnStopIndex,
              deferredMeasurementCache: e_deferredMeasurementCache,
              horizontalOffsetAdjustment,
              isScrolling,
              isScrollingOptOut: e_isScrollingOptOut,
              parent: this,
              rowSizeAndPositionManager:
                t_instanceProps.rowSizeAndPositionManager,
              rowStartIndex,
              rowStopIndex,
              scrollLeft: m,
              scrollTop: _,
              styleCache: this._styleCache,
              verticalOffsetAdjustment,
              visibleColumnIndices,
              visibleRowIndices,
            });
            this._columnStartIndex = columnStartIndex;
            this._columnStopIndex = columnStopIndex;
            this._rowStartIndex = rowStartIndex;
            this._rowStopIndex = rowStopIndex;
          }
        },
      },
      {
        key: "_debounceScrollEnded",
        value: function () {
          const scrollingResetTimeInterval =
            this.props.scrollingResetTimeInterval;
          if (this._disablePointerEventsTimeoutId) {
            $(this._disablePointerEventsTimeoutId);
          }
          this._disablePointerEventsTimeoutId = Q(
            this._debounceScrollEndedCallback,
            scrollingResetTimeInterval,
          );
        },
      },
      {
        key: "_handleInvalidatedGridSize",
        value: function () {
          if (
            typeof this._deferredInvalidateColumnIndex === "number" &&
            typeof this._deferredInvalidateRowIndex === "number"
          ) {
            const e = this._deferredInvalidateColumnIndex;
            const t = this._deferredInvalidateRowIndex;
            this._deferredInvalidateColumnIndex = null;
            this._deferredInvalidateRowIndex = null;
            this.recomputeGridSize({
              columnIndex: e,
              rowIndex: t,
            });
          }
        },
      },
      {
        key: "_invokeOnScrollMemoizer",
        value: function (e) {
          const t = this;
          const e_scrollLeft = e.scrollLeft;
          const e_scrollTop = e.scrollTop;
          const e_totalColumnsWidth = e.totalColumnsWidth;
          const e_totalRowsHeight = e.totalRowsHeight;
          this._onScrollMemoizer({
            callback: function (e) {
              const e_scrollLeft = e.scrollLeft;
              const e_scrollTop = e.scrollTop;
              const t_props = t.props;
              const l_height = t_props.height;
              t_props.onScroll({
                clientHeight: l_height,
                clientWidth: t_props.width,
                scrollHeight: e_totalRowsHeight,
                scrollLeft: e_scrollLeft,
                scrollTop: e_scrollTop,
                scrollWidth: e_totalColumnsWidth,
              });
            },
            indices: {
              scrollLeft: e_scrollLeft,
              scrollTop: e_scrollTop,
            },
          });
        },
      },
      {
        key: "_isScrolling",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props;
          const t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.state;
          if (Object.hasOwnProperty.call(e, "isScrolling")) {
            return !!e.isScrolling;
          }
          return !!t.isScrolling;
        },
      },
      {
        key: "_maybeCallOnScrollbarPresenceChange",
        value: function () {
          if (this._scrollbarPresenceChanged) {
            const e = this.props.onScrollbarPresenceChange;
            this._scrollbarPresenceChanged = false;
            e({
              horizontal: this._horizontalScrollBarSize > 0,
              size: this.state.instanceProps.scrollbarSize,
              vertical: this._verticalScrollBarSize > 0,
            });
          }
        },
      },
      {
        key: "scrollToPosition",
        value: function (e) {
          const e_scrollLeft = e.scrollLeft;
          const e_scrollTop = e.scrollTop;
          const n = t._getScrollToPositionStateUpdate({
            prevState: this.state,
            scrollLeft: e_scrollLeft,
            scrollTop: e_scrollTop,
          });
          if (n) {
            n.needToResetStyleCache = false;
            this.setState(n);
          }
        },
      },
      {
        key: "_getCalculatedScrollLeft",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props;
          const o =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.state;
          return t._getCalculatedScrollLeft(e, o);
        },
      },
      {
        key: "_updateScrollLeftForScrollToColumn",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props;
          const o =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.state;
          const i = t._getScrollLeftForScrollToColumnStateUpdate(e, o);
          if (i) {
            i.needToResetStyleCache = false;
            this.setState(i);
          }
        },
      },
      {
        key: "_getCalculatedScrollTop",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props;
          const o =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.state;
          return t._getCalculatedScrollTop(e, o);
        },
      },
      {
        key: "_resetStyleCache",
        value: function () {
          const _styleCache = this._styleCache;
          const _cellCache = this._cellCache;
          const isScrollingOptOut = this.props.isScrollingOptOut;
          this._cellCache = {};
          this._styleCache = {};
          for (let i = this._rowStartIndex; i <= this._rowStopIndex; i++) {
            for (
              let n = this._columnStartIndex;
              n <= this._columnStopIndex;
              n++
            ) {
              const r = "".concat(i, "-").concat(n);
              this._styleCache[r] = _styleCache[r];
              if (isScrollingOptOut) {
                this._cellCache[r] = _cellCache[r];
              }
            }
          }
        },
      },
      {
        key: "_updateScrollTopForScrollToRow",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : this.props;
          const o =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : this.state;
          const i = t._getScrollTopForScrollToRowStateUpdate(e, o);
          if (i) {
            i.needToResetStyleCache = false;
            this.setState(i);
          }
        },
      },
    ],
    [
      {
        key: "getDerivedStateFromProps",
        value: function (computeMetadataCallbackProps, o) {
          let i;
          let n;
          const r = {};
          if (
            (computeMetadataCallbackProps.columnCount === 0 &&
              o.scrollLeft !== 0) ||
            (computeMetadataCallbackProps.rowCount === 0 && o.scrollTop !== 0)
          ) {
            r.scrollLeft = 0;
            r.scrollTop = 0;
          } else if (
            (computeMetadataCallbackProps.scrollLeft !== o.scrollLeft &&
              computeMetadataCallbackProps.scrollToColumn < 0) ||
            (computeMetadataCallbackProps.scrollTop !== o.scrollTop &&
              computeMetadataCallbackProps.scrollToRow < 0)
          ) {
            Object.assign(
              r,
              t._getScrollToPositionStateUpdate({
                prevState: o,
                scrollLeft: computeMetadataCallbackProps.scrollLeft,
                scrollTop: computeMetadataCallbackProps.scrollTop,
              }),
            );
          }
          const o_instanceProps = o.instanceProps;
          r.needToResetStyleCache = false;
          if (
            computeMetadataCallbackProps.columnWidth !==
              o_instanceProps.prevColumnWidth ||
            computeMetadataCallbackProps.rowHeight !==
              o_instanceProps.prevRowHeight
          ) {
            r.needToResetStyleCache = true;
          }
          o_instanceProps.columnSizeAndPositionManager.configure({
            cellCount: computeMetadataCallbackProps.columnCount,
            estimatedCellSize: t._getEstimatedColumnSize(
              computeMetadataCallbackProps,
            ),
            cellSizeGetter: t._wrapSizeGetter(
              computeMetadataCallbackProps.columnWidth,
            ),
          });
          o_instanceProps.rowSizeAndPositionManager.configure({
            cellCount: computeMetadataCallbackProps.rowCount,
            estimatedCellSize: t._getEstimatedRowSize(
              computeMetadataCallbackProps,
            ),
            cellSizeGetter: t._wrapSizeGetter(
              computeMetadataCallbackProps.rowHeight,
            ),
          });
          if (
            o_instanceProps.prevColumnCount === 0 ||
            o_instanceProps.prevRowCount === 0
          ) {
            o_instanceProps.prevColumnCount = 0;
            o_instanceProps.prevRowCount = 0;
          }
          if (
            computeMetadataCallbackProps.autoHeight &&
            computeMetadataCallbackProps.isScrolling === false &&
            o_instanceProps.prevIsScrolling === true
          ) {
            Object.assign(r, {
              isScrolling: false,
            });
          }
          N({
            cellCount: o_instanceProps.prevColumnCount,
            cellSize:
              typeof o_instanceProps.prevColumnWidth === "number"
                ? o_instanceProps.prevColumnWidth
                : null,
            computeMetadataCallback: function () {
              return o_instanceProps.columnSizeAndPositionManager.resetCell(0);
            },
            computeMetadataCallbackProps,
            nextCellsCount: computeMetadataCallbackProps.columnCount,
            nextCellSize:
              typeof computeMetadataCallbackProps.columnWidth === "number"
                ? computeMetadataCallbackProps.columnWidth
                : null,
            nextScrollToIndex: computeMetadataCallbackProps.scrollToColumn,
            scrollToIndex: o_instanceProps.prevScrollToColumn,
            updateScrollOffsetForScrollToIndex: function () {
              i = t._getScrollLeftForScrollToColumnStateUpdate(
                computeMetadataCallbackProps,
                o,
              );
            },
          });
          N({
            cellCount: o_instanceProps.prevRowCount,
            cellSize:
              typeof o_instanceProps.prevRowHeight === "number"
                ? o_instanceProps.prevRowHeight
                : null,
            computeMetadataCallback: function () {
              return o_instanceProps.rowSizeAndPositionManager.resetCell(0);
            },
            computeMetadataCallbackProps,
            nextCellsCount: computeMetadataCallbackProps.rowCount,
            nextCellSize:
              typeof computeMetadataCallbackProps.rowHeight === "number"
                ? computeMetadataCallbackProps.rowHeight
                : null,
            nextScrollToIndex: computeMetadataCallbackProps.scrollToRow,
            scrollToIndex: o_instanceProps.prevScrollToRow,
            updateScrollOffsetForScrollToIndex: function () {
              n = t._getScrollTopForScrollToRowStateUpdate(
                computeMetadataCallbackProps,
                o,
              );
            },
          });
          o_instanceProps.prevColumnCount =
            computeMetadataCallbackProps.columnCount;
          o_instanceProps.prevColumnWidth =
            computeMetadataCallbackProps.columnWidth;
          o_instanceProps.prevIsScrolling =
            computeMetadataCallbackProps.isScrolling === true;
          o_instanceProps.prevRowCount = computeMetadataCallbackProps.rowCount;
          o_instanceProps.prevRowHeight =
            computeMetadataCallbackProps.rowHeight;
          o_instanceProps.prevScrollToColumn =
            computeMetadataCallbackProps.scrollToColumn;
          o_instanceProps.prevScrollToRow =
            computeMetadataCallbackProps.scrollToRow;
          o_instanceProps.scrollbarSize =
            computeMetadataCallbackProps.getScrollbarSize();
          if (o_instanceProps.scrollbarSize === undefined) {
            o_instanceProps.scrollbarSizeMeasured = false;
            o_instanceProps.scrollbarSize = 0;
          } else {
            o_instanceProps.scrollbarSizeMeasured = true;
          }
          r.instanceProps = o_instanceProps;
          return {
            ...r,
            ...i,
            ...n,
          };
        },
      },
      {
        key: "_getEstimatedColumnSize",
        value: function (e) {
          if (typeof e.columnWidth === "number") {
            return e.columnWidth;
          }
          return e.estimatedColumnSize;
        },
      },
      {
        key: "_getEstimatedRowSize",
        value: function (e) {
          if (typeof e.rowHeight === "number") {
            return e.rowHeight;
          }
          return e.estimatedRowSize;
        },
      },
      {
        key: "_getScrollToPositionStateUpdate",
        value: function (e) {
          const e_prevState = e.prevState;
          const e_scrollLeft = e.scrollLeft;
          const e_scrollTop = e.scrollTop;
          const n = {
            scrollPositionChangeReason: eo,
          };
          if (typeof e_scrollLeft === "number" && e_scrollLeft >= 0) {
            n.scrollDirectionHorizontal =
              e_scrollLeft > e_prevState.scrollLeft ? 1 : -1;
            n.scrollLeft = e_scrollLeft;
          }
          if (typeof e_scrollTop === "number" && e_scrollTop >= 0) {
            n.scrollDirectionVertical =
              e_scrollTop > e_prevState.scrollTop ? 1 : -1;
            n.scrollTop = e_scrollTop;
          }
          if (
            (typeof e_scrollLeft === "number" &&
              e_scrollLeft >= 0 &&
              e_scrollLeft !== e_prevState.scrollLeft) ||
            (typeof e_scrollTop === "number" &&
              e_scrollTop >= 0 &&
              e_scrollTop !== e_prevState.scrollTop)
          ) {
            return n;
          }
          return {};
        },
      },
      {
        key: "_wrapSizeGetter",
        value: function (e) {
          if (typeof e === "function") {
            return e;
          }
          return function () {
            return e;
          };
        },
      },
      {
        key: "_getCalculatedScrollLeft",
        value: function (e, t) {
          const e_columnCount = e.columnCount;
          const e_height = e.height;
          const e_scrollToAlignment = e.scrollToAlignment;
          const e_scrollToColumn = e.scrollToColumn;
          const e_width = e.width;
          const t_scrollLeft = t.scrollLeft;
          const t_instanceProps = t.instanceProps;
          if (e_columnCount > 0) {
            const c = e_columnCount - 1;
            const d = e_scrollToColumn < 0 ? c : Math.min(c, e_scrollToColumn);
            const h = t_instanceProps.rowSizeAndPositionManager.getTotalSize();
            const u =
              t_instanceProps.scrollbarSizeMeasured && h > e_height
                ? t_instanceProps.scrollbarSize
                : 0;
            return t_instanceProps.columnSizeAndPositionManager.getUpdatedOffsetForIndex(
              {
                align: e_scrollToAlignment,
                containerSize: e_width - u,
                currentOffset: t_scrollLeft,
                targetIndex: d,
              },
            );
          }
          return 0;
        },
      },
      {
        key: "_getScrollLeftForScrollToColumnStateUpdate",
        value: function (e, o) {
          const o_scrollLeft = o.scrollLeft;
          const n = t._getCalculatedScrollLeft(e, o);
          if (typeof n === "number" && n >= 0 && o_scrollLeft !== n) {
            return t._getScrollToPositionStateUpdate({
              prevState: o,
              scrollLeft: n,
              scrollTop: -1,
            });
          }
          return {};
        },
      },
      {
        key: "_getCalculatedScrollTop",
        value: function (e, t) {
          const e_height = e.height;
          const e_rowCount = e.rowCount;
          const e_scrollToAlignment = e.scrollToAlignment;
          const e_scrollToRow = e.scrollToRow;
          const e_width = e.width;
          const t_scrollTop = t.scrollTop;
          const t_instanceProps = t.instanceProps;
          if (e_rowCount > 0) {
            const c = e_rowCount - 1;
            const d = e_scrollToRow < 0 ? c : Math.min(c, e_scrollToRow);
            const h =
              t_instanceProps.columnSizeAndPositionManager.getTotalSize();
            const u =
              t_instanceProps.scrollbarSizeMeasured && h > e_width
                ? t_instanceProps.scrollbarSize
                : 0;
            return t_instanceProps.rowSizeAndPositionManager.getUpdatedOffsetForIndex(
              {
                align: e_scrollToAlignment,
                containerSize: e_height - u,
                currentOffset: t_scrollTop,
                targetIndex: d,
              },
            );
          }
          return 0;
        },
      },
      {
        key: "_getScrollTopForScrollToRowStateUpdate",
        value: function (e, o) {
          const o_scrollTop = o.scrollTop;
          const n = t._getCalculatedScrollTop(e, o);
          if (typeof n === "number" && n >= 0 && o_scrollTop !== n) {
            return t._getScrollToPositionStateUpdate({
              prevState: o,
              scrollLeft: -1,
              scrollTop: n,
            });
          }
          return {};
        },
      },
    ],
  );
  return t;
})(L.PureComponent);
P(r, "propTypes", null);
export const xA = l;
P(xA, "defaultProps", {
  "aria-label": "grid",
  "aria-readonly": true,
  autoContainerWidth: false,
  autoHeight: false,
  autoWidth: false,
  cellRangeRenderer: function (e) {
    const e_cellCache = e.cellCache;
    const e_cellRenderer = e.cellRenderer;
    const e_columnSizeAndPositionManager = e.columnSizeAndPositionManager;
    const e_columnStartIndex = e.columnStartIndex;
    const e_columnStopIndex = e.columnStopIndex;
    const e_deferredMeasurementCache = e.deferredMeasurementCache;
    const e_horizontalOffsetAdjustment = e.horizontalOffsetAdjustment;
    const e_isScrolling = e.isScrolling;
    const e_isScrollingOptOut = e.isScrollingOptOut;
    const e_parent = e.parent;
    const e_rowSizeAndPositionManager = e.rowSizeAndPositionManager;
    const e_rowStartIndex = e.rowStartIndex;
    for (
      var f = e.rowStopIndex,
        p = e.styleCache,
        g = e.verticalOffsetAdjustment,
        _ = e.visibleColumnIndices,
        m = e.visibleRowIndices,
        v = [],
        S =
          e_columnSizeAndPositionManager.areOffsetsAdjusted() ||
          e_rowSizeAndPositionManager.areOffsetsAdjusted(),
        C = !e_isScrolling && !S,
        y = e_rowStartIndex;
      y <= f;
      y++
    ) {
      const w = e_rowSizeAndPositionManager.getSizeAndPositionOfCell(y);
      for (let x = e_columnStartIndex; x <= e_columnStopIndex; x++) {
        const R = e_columnSizeAndPositionManager.getSizeAndPositionOfCell(x);
        const isVisible =
          x >= _.start && x <= _.stop && y >= m.start && y <= m.stop;
        const z = "".concat(y, "-").concat(x);
        let b;
        if (C && p[z]) {
          b = p[z];
        } else if (
          e_deferredMeasurementCache &&
          !e_deferredMeasurementCache.has(y, x)
        ) {
          b = {
            height: "auto",
            left: 0,
            position: "absolute",
            top: 0,
            width: "auto",
          };
        } else {
          b = {
            height: w.size,
            left: R.offset + e_horizontalOffsetAdjustment,
            position: "absolute",
            top: w.offset + g,
            width: R.size,
          };
          p[z] = b;
        }
        const I = {
          columnIndex: x,
          isScrolling: e_isScrolling,
          isVisible,
          key: z,
          parent: e_parent,
          rowIndex: y,
          style: b,
        };
        let M;
        if (
          (e_isScrollingOptOut || e_isScrolling) &&
          !e_horizontalOffsetAdjustment &&
          !g
        ) {
          if (!e_cellCache[z]) {
            e_cellCache[z] = e_cellRenderer(I);
          }
          M = e_cellCache[z];
        } else {
          M = e_cellRenderer(I);
        }
        if (M != null && M !== false) {
          v.push(M);
        }
      }
    }
    return v;
  },
  containerRole: "rowgroup",
  containerStyle: {},
  estimatedColumnSize: 100,
  estimatedRowSize: 30,
  getScrollbarSize,
  noContentRenderer: function () {
    return null;
  },
  onScroll: function () {},
  onScrollbarPresenceChange: function () {},
  onSectionRendered: function () {},
  overscanColumnCount: 0,
  overscanIndicesGetter: function (e) {
    const e_cellCount = e.cellCount;
    const e_overscanCellsCount = e.overscanCellsCount;
    const e_scrollDirection = e.scrollDirection;
    const e_startIndex = e.startIndex;
    const e_stopIndex = e.stopIndex;
    if (e_scrollDirection === 1) {
      return {
        overscanStartIndex: Math.max(0, e_startIndex),
        overscanStopIndex: Math.min(
          e_cellCount - 1,
          e_stopIndex + e_overscanCellsCount,
        ),
      };
    }
    return {
      overscanStartIndex: Math.max(0, e_startIndex - e_overscanCellsCount),
      overscanStopIndex: Math.min(e_cellCount - 1, e_stopIndex),
    };
  },
  overscanRowCount: 10,
  role: "grid",
  scrollingResetTimeInterval: 150,
  scrollToAlignment: "auto",
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  tabIndex: 0,
  isScrollingOptOut: false,
});
H(xA);
function overscanIndicesGetter(e) {
  const e_cellCount = e.cellCount;
  let e_overscanCellsCount = e.overscanCellsCount;
  const e_scrollDirection = e.scrollDirection;
  const e_startIndex = e.startIndex;
  const e_stopIndex = e.stopIndex;
  e_overscanCellsCount = Math.max(1, e_overscanCellsCount);
  if (e_scrollDirection === 1) {
    return {
      overscanStartIndex: Math.max(0, e_startIndex - 1),
      overscanStopIndex: Math.min(
        e_cellCount - 1,
        e_stopIndex + e_overscanCellsCount,
      ),
    };
  }
  return {
    overscanStartIndex: Math.max(0, e_startIndex - e_overscanCellsCount),
    overscanStopIndex: Math.min(e_cellCount - 1, e_stopIndex + 1),
  };
}
function el(e, t) {
  const o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let i = Object.getOwnPropertySymbols(e);
    if (t) {
      i = i.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable);
    }
    o.push.apply(o, i);
  }
  return o;
}
a = s = ((e) => {
  function t() {
    S(this, t);
    let e;
    let o;
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    o = x(this, (e = T(t)).call.apply(e, [this].concat(n)));
    P(b(o), "state", {
      scrollToColumn: 0,
      scrollToRow: 0,
      instanceProps: {
        prevScrollToColumn: 0,
        prevScrollToRow: 0,
      },
    });
    P(b(o), "_columnStartIndex", 0);
    P(b(o), "_columnStopIndex", 0);
    P(b(o), "_rowStartIndex", 0);
    P(b(o), "_rowStopIndex", 0);
    P(b(o), "_onKeyDown", function (e) {
      const o_props = o.props;
      const t_columnCount = o_props.columnCount;
      const t_disabled = o_props.disabled;
      const t_mode = o_props.mode;
      const t_rowCount = o_props.rowCount;
      if (!t_disabled) {
        const s = o._getScrollState();
        const a = s.scrollToColumn;
        const c = s.scrollToRow;
        const d = o._getScrollState();
        let h = d.scrollToColumn;
        let u = d.scrollToRow;
        switch (e.key) {
          case "ArrowDown":
            u =
              t_mode === "cells"
                ? Math.min(u + 1, t_rowCount - 1)
                : Math.min(o._rowStopIndex + 1, t_rowCount - 1);
            break;
          case "ArrowLeft":
            h =
              t_mode === "cells"
                ? Math.max(h - 1, 0)
                : Math.max(o._columnStartIndex - 1, 0);
            break;
          case "ArrowRight":
            h =
              t_mode === "cells"
                ? Math.min(h + 1, t_columnCount - 1)
                : Math.min(o._columnStopIndex + 1, t_columnCount - 1);
            break;
          case "ArrowUp":
            u =
              t_mode === "cells"
                ? Math.max(u - 1, 0)
                : Math.max(o._rowStartIndex - 1, 0);
        }
        if (h !== a || u !== c) {
          e.preventDefault();
          o._updateScrollState({
            scrollToColumn: h,
            scrollToRow: u,
          });
        }
      }
    });
    P(b(o), "_onSectionRendered", function (e) {
      const e_columnStartIndex = e.columnStartIndex;
      const e_columnStopIndex = e.columnStopIndex;
      const e_rowStartIndex = e.rowStartIndex;
      const e_rowStopIndex = e.rowStopIndex;
      o._columnStartIndex = e_columnStartIndex;
      o._columnStopIndex = e_columnStopIndex;
      o._rowStartIndex = e_rowStartIndex;
      o._rowStopIndex = e_rowStopIndex;
    });
    return o;
  }
  M(t, e);
  y(
    t,
    [
      {
        key: "setScrollIndexes",
        value: function (e) {
          const e_scrollToColumn = e.scrollToColumn;
          const e_scrollToRow = e.scrollToRow;
          this.setState({
            scrollToRow: e_scrollToRow,
            scrollToColumn: e_scrollToColumn,
          });
        },
      },
      {
        key: "render",
        value: function () {
          const props = this.props;
          const e_className = props.className;
          const e_children = props.children;
          const i = this._getScrollState();
          const i_scrollToColumn = i.scrollToColumn;
          const i_scrollToRow = i.scrollToRow;
          return L.createElement(
            "div",
            {
              className: e_className,
              onKeyDown: this._onKeyDown,
            },
            e_children({
              onSectionRendered: this._onSectionRendered,
              scrollToColumn: i_scrollToColumn,
              scrollToRow: i_scrollToRow,
            }),
          );
        },
      },
      {
        key: "_getScrollState",
        value: function () {
          if (this.props.isControlled) {
            return this.props;
          }
          return this.state;
        },
      },
      {
        key: "_updateScrollState",
        value: function (e) {
          const e_scrollToColumn = e.scrollToColumn;
          const e_scrollToRow = e.scrollToRow;
          const props = this.props;
          const i_isControlled = props.isControlled;
          const i_onScrollToChange = props.onScrollToChange;
          if (typeof i_onScrollToChange === "function") {
            i_onScrollToChange({
              scrollToColumn: e_scrollToColumn,
              scrollToRow: e_scrollToRow,
            });
          }
          if (!i_isControlled) {
            this.setState({
              scrollToColumn: e_scrollToColumn,
              scrollToRow: e_scrollToRow,
            });
          }
        },
      },
    ],
    [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          if (e.isControlled) {
            return {};
          }
          if (
            e.scrollToColumn !== t.instanceProps.prevScrollToColumn ||
            e.scrollToRow !== t.instanceProps.prevScrollToRow
          ) {
            return {
              ...t,
              scrollToColumn: e.scrollToColumn,
              scrollToRow: e.scrollToRow,
              instanceProps: {
                prevScrollToColumn: e.scrollToColumn,
                prevScrollToRow: e.scrollToRow,
              },
            };
          }
          return {};
        },
      },
    ],
  );
  return t;
})(L.PureComponent);
P(s, "propTypes", null);
const es = a;
function ea(e, t) {
  const i =
    t !== undefined
      ? t
      : typeof window !== "undefined"
        ? window
        : typeof self !== "undefined"
          ? self
          : global;
  const n = i.document !== undefined && i.document.attachEvent;
  if (!n) {
    let r;
    let l;
    r =
      i.requestAnimationFrame ||
      i.mozRequestAnimationFrame ||
      i.webkitRequestAnimationFrame ||
      function (e) {
        return i.setTimeout(e, 20);
      };
    const s = (e) => r(e);
    l =
      i.cancelAnimationFrame ||
      i.mozCancelAnimationFrame ||
      i.webkitCancelAnimationFrame ||
      i.clearTimeout;
    const a = (__resizeRAF__) => l(__resizeRAF__);
    var c = (e) => {
      const e___resizeTriggers__ = e.__resizeTriggers__;
      const t_firstElementChild = e___resizeTriggers__.firstElementChild;
      const t_lastElementChild = e___resizeTriggers__.lastElementChild;
      const o_firstElementChild = t_firstElementChild.firstElementChild;
      t_lastElementChild.scrollLeft = t_lastElementChild.scrollWidth;
      t_lastElementChild.scrollTop = t_lastElementChild.scrollHeight;
      o_firstElementChild.style.width = `${t_firstElementChild.offsetWidth + 1}px`;
      o_firstElementChild.style.height = `${t_firstElementChild.offsetHeight + 1}px`;
      t_firstElementChild.scrollLeft = t_firstElementChild.scrollWidth;
      t_firstElementChild.scrollTop = t_firstElementChild.scrollHeight;
    };
    var d = function (e) {
      if (
        !(
          e.target.className &&
          typeof e.target.className.indexOf === "function" &&
          e.target.className.indexOf("contract-trigger") < 0 &&
          e.target.className.indexOf("expand-trigger") < 0
        )
      ) {
        const t = this;
        c(this);
        if (this.__resizeRAF__) {
          a(this.__resizeRAF__);
        }
        this.__resizeRAF__ = s(function () {
          if (
            t.offsetWidth != t.__resizeLast__.width ||
            t.offsetHeight != t.__resizeLast__.height
          ) {
            t.__resizeLast__.width = t.offsetWidth;
            t.__resizeLast__.height = t.offsetHeight;
            t.__resizeListeners__.forEach((o) => {
              o.call(t, e);
            });
          }
        });
      }
    };
    let h = false;
    let u = "";
    var f = "animationstart";
    const p = "Webkit Moz O ms".split(" ");
    const g =
      "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(
        " ",
      );
    const _ = i.document.createElement("fakeelement");
    if (_.style.animationName !== undefined) {
      h = true;
    }
    if (h === false) {
      for (let m = 0; m < p.length; m++) {
        if (_.style[p[m] + "AnimationName"] !== undefined) {
          u = "-" + p[m].toLowerCase() + "-";
          f = g[m];
          h = true;
          break;
        }
      }
    }
    var v = "resizeanim";
    var S =
      "@" +
      u +
      "keyframes " +
      v +
      " { from { opacity: 0; } to { opacity: 0; } } ";
    var C = u + "animation: 1ms " + v + "; ";
  }
  const y = (t) => {
    if (!t.getElementById("detectElementResize")) {
      const o =
        (S || "") +
        ".resize-triggers { " +
        (C || "") +
        'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }';
      const i = t.head || t.getElementsByTagName("head")[0];
      const n = t.createElement("style");
      n.id = "detectElementResize";
      n.type = "text/css";
      if (e != null) {
        n.setAttribute("nonce", e);
      }
      if (n.styleSheet) {
        n.styleSheet.cssText = o;
      } else {
        n.appendChild(t.createTextNode(o));
      }
      i.appendChild(n);
    }
  };
  return {
    addResizeListener: function (e, t) {
      if (n) {
        e.attachEvent("onresize", t);
      } else {
        if (!e.__resizeTriggers__) {
          const o = e.ownerDocument;
          const r = i.getComputedStyle(e);
          if (r && r.position == "static") {
            e.style.position = "relative";
          }
          y(o);
          e.__resizeLast__ = {};
          e.__resizeListeners__ = [];
          (e.__resizeTriggers__ = o.createElement("div")).className =
            "resize-triggers";
          const l =
            '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>';
          if (window.trustedTypes) {
            const s = trustedTypes.createPolicy(
              "react-virtualized-auto-sizer",
              {
                createHTML: function () {
                  return l;
                },
              },
            );
            e.__resizeTriggers__.innerHTML = s.createHTML("");
          } else {
            e.__resizeTriggers__.innerHTML = l;
          }
          e.appendChild(e.__resizeTriggers__);
          c(e);
          e.addEventListener("scroll", d, true);
          if (f) {
            e.__resizeTriggers__.__animationListener__ = function (t) {
              if (t.animationName == v) {
                c(e);
              }
            };
            e.__resizeTriggers__.addEventListener(
              f,
              e.__resizeTriggers__.__animationListener__,
            );
          }
        }
        e.__resizeListeners__.push(t);
      }
    },
    removeResizeListener: function (e, t) {
      if (n) {
        e.detachEvent("onresize", t);
      } else {
        e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1);
        if (!e.__resizeListeners__.length) {
          e.removeEventListener("scroll", d, true);
          if (e.__resizeTriggers__.__animationListener__) {
            e.__resizeTriggers__.removeEventListener(
              f,
              e.__resizeTriggers__.__animationListener__,
            );
            e.__resizeTriggers__.__animationListener__ = null;
          }
          try {
            e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__);
          } catch (e) {}
        }
      }
    },
  };
}
function ec(e, t) {
  const o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let i = Object.getOwnPropertySymbols(e);
    if (t) {
      i = i.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable);
    }
    o.push.apply(o, i);
  }
  return o;
}
P(es, "defaultProps", {
  disabled: false,
  isControlled: false,
  mode: "edges",
  scrollToColumn: 0,
  scrollToRow: 0,
});
H(es);
d = c = ((e) => {
  function t() {
    S(this, t);
    let e;
    let o;
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    o = x(this, (e = T(t)).call.apply(e, [this].concat(n)));
    P(b(o), "state", {
      height: o.props.defaultHeight || 0,
      width: o.props.defaultWidth || 0,
    });
    P(b(o), "_parentNode", undefined);
    P(b(o), "_autoSizer", undefined);
    P(b(o), "_window", undefined);
    P(b(o), "_detectElementResize", undefined);
    P(b(o), "_onResize", function () {
      const o_props = o.props;
      const e_disableHeight = o_props.disableHeight;
      const e_disableWidth = o_props.disableWidth;
      const e_onResize = o_props.onResize;
      if (o._parentNode) {
        const r = o._parentNode.offsetHeight || 0;
        const l = o._parentNode.offsetWidth || 0;
        const s = (o._window || window).getComputedStyle(o._parentNode) || {};
        const a = parseInt(s.paddingLeft, 10) || 0;
        const c = parseInt(s.paddingRight, 10) || 0;
        const d = parseInt(s.paddingTop, 10) || 0;
        const h = parseInt(s.paddingBottom, 10) || 0;
        const u = r - d - h;
        const f = l - a - c;
        if (
          !(
            (e_disableHeight || o.state.height === u) &&
            (e_disableWidth || o.state.width === f)
          )
        ) {
          o.setState({
            height: r - d - h,
            width: l - a - c,
          });
          e_onResize({
            height: r,
            width: l,
          });
        }
      }
    });
    P(b(o), "_setRef", function (e) {
      o._autoSizer = e;
    });
    return o;
  }
  M(t, e);
  y(t, [
    {
      key: "componentDidMount",
      value: function () {
        const nonce = this.props.nonce;
        if (
          this._autoSizer &&
          this._autoSizer.parentNode &&
          this._autoSizer.parentNode.ownerDocument &&
          this._autoSizer.parentNode.ownerDocument.defaultView &&
          this._autoSizer.parentNode instanceof
            this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement
        ) {
          this._parentNode = this._autoSizer.parentNode;
          this._window = this._autoSizer.parentNode.ownerDocument.defaultView;
          this._detectElementResize = ea(nonce, this._window);
          this._detectElementResize.addResizeListener(
            this._parentNode,
            this._onResize,
          );
          this._onResize();
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function () {
        if (this._detectElementResize && this._parentNode) {
          this._detectElementResize.removeResizeListener(
            this._parentNode,
            this._onResize,
          );
        }
      },
    },
    {
      key: "render",
      value: function () {
        const props = this.props;
        const e_children = props.children;
        const e_className = props.className;
        const e_disableHeight = props.disableHeight;
        const e_disableWidth = props.disableWidth;
        const e_style = props.style;
        const state = this.state;
        const l_height = state.height;
        const l_width = state.width;
        const c = {
          overflow: "visible",
        };
        const d = {};
        if (!e_disableHeight) {
          c.height = 0;
          d.height = l_height;
        }
        if (!e_disableWidth) {
          c.width = 0;
          d.width = l_width;
        }
        return L.createElement(
          "div",
          {
            className: e_className,
            ref: this._setRef,
            style: {
              ...c,
              ...e_style,
            },
          },
          e_children(d),
        );
      },
    },
  ]);
  return t;
})(L.Component);
P(c, "propTypes", null);
export var t$ = d;
P(t$, "defaultProps", {
  onResize: function () {},
  disableHeight: false,
  disableWidth: false,
  style: {},
});
const eh = require("PC");
u = h = ((e) => {
  function t() {
    S(this, t);
    let e;
    let o;
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    o = x(this, (e = T(t)).call.apply(e, [this].concat(n)));
    P(b(o), "_child", undefined);
    P(b(o), "_measure", function () {
      const o_props = o.props;
      const e_cache = o_props.cache;
      const e_columnIndex = o_props.columnIndex;
      const n = e_columnIndex === undefined ? 0 : e_columnIndex;
      const e_parent = o_props.parent;
      const e_rowIndex = o_props.rowIndex;
      const s = e_rowIndex === undefined ? o.props.index || 0 : e_rowIndex;
      const a = o._getCellMeasurements();
      const a_height = a.height;
      const a_width = a.width;
      if (
        a_height !== e_cache.getHeight(s, n) ||
        a_width !== e_cache.getWidth(s, n)
      ) {
        e_cache.set(s, n, a_width, a_height);
        if (e_parent && typeof e_parent.recomputeGridSize === "function") {
          e_parent.recomputeGridSize({
            columnIndex: n,
            rowIndex: s,
          });
        }
      }
    });
    P(b(o), "_registerChild", function (e) {
      if (!(!e || e instanceof Element)) {
        console.warn(
          "CellMeasurer registerChild expects to be passed Element or null",
        );
      }
      o._child = e;
      if (e) {
        o._maybeMeasureCell();
      }
    });
    return o;
  }
  M(t, e);
  y(t, [
    {
      key: "componentDidMount",
      value: function () {
        this._maybeMeasureCell();
      },
    },
    {
      key: "componentDidUpdate",
      value: function () {
        this._maybeMeasureCell();
      },
    },
    {
      key: "render",
      value: function () {
        const children = this.props.children;
        if (typeof children === "function") {
          return children({
            measure: this._measure,
            registerChild: this._registerChild,
          });
        }
        return children;
      },
    },
    {
      key: "_getCellMeasurements",
      value: function () {
        const cache = this.props.cache;
        const t = this._child || eh.findDOMNode(this);
        if (
          !t ||
          !t.ownerDocument ||
          !t.ownerDocument.defaultView ||
          !(t instanceof t.ownerDocument.defaultView.HTMLElement)
        ) {
          return {
            height: 0,
            width: 0,
          };
        }
        const width = t.style.width;
        const height = t.style.height;
        if (!cache.hasFixedWidth()) {
          t.style.width = "auto";
        }
        if (!cache.hasFixedHeight()) {
          t.style.height = "auto";
        }
        const n = Math.ceil(t.offsetHeight);
        const r = Math.ceil(t.offsetWidth);
        if (width) {
          t.style.width = width;
        }
        if (height) {
          t.style.height = height;
        }
        return {
          height: n,
          width: r,
        };
      },
    },
    {
      key: "_maybeMeasureCell",
      value: function () {
        const props = this.props;
        const e_cache = props.cache;
        const e_columnIndex = props.columnIndex;
        const i = e_columnIndex === undefined ? 0 : e_columnIndex;
        const e_parent = props.parent;
        const e_rowIndex = props.rowIndex;
        const l = e_rowIndex === undefined ? this.props.index || 0 : e_rowIndex;
        if (!e_cache.has(l, i)) {
          const s = this._getCellMeasurements();
          const a = s.height;
          const c = s.width;
          e_cache.set(l, i, c, a);
          if (
            e_parent &&
            typeof e_parent.invalidateCellSizeAfterRender === "function"
          ) {
            e_parent.invalidateCellSizeAfterRender({
              columnIndex: i,
              rowIndex: l,
            });
          }
        }
      },
    },
  ]);
  return t;
})(L.PureComponent);
P(h, "propTypes", null);
export var dl = u;
P(dl, "__internalCellMeasurerFlag", false);
export var jS = (() => {
  function e() {
    const t = this;
    const o =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    S(this, e);
    P(this, "_cellHeightCache", {});
    P(this, "_cellWidthCache", {});
    P(this, "_columnWidthCache", {});
    P(this, "_rowHeightCache", {});
    P(this, "_defaultHeight", undefined);
    P(this, "_defaultWidth", undefined);
    P(this, "_minHeight", undefined);
    P(this, "_minWidth", undefined);
    P(this, "_keyMapper", undefined);
    P(this, "_hasFixedHeight", undefined);
    P(this, "_hasFixedWidth", undefined);
    P(this, "_columnCount", 0);
    P(this, "_rowCount", 0);
    P(this, "columnWidth", function (e) {
      const e_index = e.index;
      const i = t._keyMapper(0, e_index);
      if (t._columnWidthCache[i] !== undefined) {
        return t._columnWidthCache[i];
      }
      return t._defaultWidth;
    });
    P(this, "rowHeight", function (e) {
      const e_index = e.index;
      const i = t._keyMapper(e_index, 0);
      if (t._rowHeightCache[i] !== undefined) {
        return t._rowHeightCache[i];
      }
      return t._defaultHeight;
    });
    const o_defaultHeight = o.defaultHeight;
    const o_defaultWidth = o.defaultWidth;
    const o_fixedHeight = o.fixedHeight;
    const o_fixedWidth = o.fixedWidth;
    const o_keyMapper = o.keyMapper;
    const o_minHeight = o.minHeight;
    const o_minWidth = o.minWidth;
    this._hasFixedHeight = o_fixedHeight === true;
    this._hasFixedWidth = o_fixedWidth === true;
    this._minHeight = o_minHeight || 0;
    this._minWidth = o_minWidth || 0;
    this._keyMapper = o_keyMapper || ep;
    this._defaultHeight = Math.max(
      this._minHeight,
      typeof o_defaultHeight === "number" ? o_defaultHeight : 30,
    );
    this._defaultWidth = Math.max(
      this._minWidth,
      typeof o_defaultWidth === "number" ? o_defaultWidth : 100,
    );
  }
  y(e, [
    {
      key: "clear",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        const o = this._keyMapper(e, t);
        delete this._cellHeightCache[o];
        delete this._cellWidthCache[o];
        this._updateCachedColumnAndRowSizes(e, t);
      },
    },
    {
      key: "clearAll",
      value: function () {
        this._cellHeightCache = {};
        this._cellWidthCache = {};
        this._columnWidthCache = {};
        this._rowHeightCache = {};
        this._rowCount = 0;
        this._columnCount = 0;
      },
    },
    {
      key: "hasFixedHeight",
      value: function () {
        return this._hasFixedHeight;
      },
    },
    {
      key: "hasFixedWidth",
      value: function () {
        return this._hasFixedWidth;
      },
    },
    {
      key: "getHeight",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (this._hasFixedHeight) {
          return this._defaultHeight;
        }
        const o = this._keyMapper(e, t);
        if (this._cellHeightCache[o] !== undefined) {
          return Math.max(this._minHeight, this._cellHeightCache[o]);
        }
        return this._defaultHeight;
      },
    },
    {
      key: "getWidth",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        if (this._hasFixedWidth) {
          return this._defaultWidth;
        }
        const o = this._keyMapper(e, t);
        if (this._cellWidthCache[o] !== undefined) {
          return Math.max(this._minWidth, this._cellWidthCache[o]);
        }
        return this._defaultWidth;
      },
    },
    {
      key: "has",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        const o = this._keyMapper(e, t);
        return this._cellHeightCache[o] !== undefined;
      },
    },
    {
      key: "set",
      value: function (e, t, o, i) {
        const n = this._keyMapper(e, t);
        if (t >= this._columnCount) {
          this._columnCount = t + 1;
        }
        if (e >= this._rowCount) {
          this._rowCount = e + 1;
        }
        this._cellHeightCache[n] = i;
        this._cellWidthCache[n] = o;
        this._updateCachedColumnAndRowSizes(e, t);
      },
    },
    {
      key: "_updateCachedColumnAndRowSizes",
      value: function (e, t) {
        if (!this._hasFixedWidth) {
          let o = 0;
          for (let i = 0; i < this._rowCount; i++) {
            o = Math.max(o, this.getWidth(i, t));
          }
          const n = this._keyMapper(0, t);
          this._columnWidthCache[n] = o;
        }
        if (!this._hasFixedHeight) {
          let r = 0;
          for (let l = 0; l < this._columnCount; l++) {
            r = Math.max(r, this.getHeight(e, l));
          }
          const s = this._keyMapper(e, 0);
          this._rowHeightCache[s] = r;
        }
      },
    },
    {
      key: "defaultHeight",
      get: function () {
        return this._defaultHeight;
      },
    },
    {
      key: "defaultWidth",
      get: function () {
        return this._defaultWidth;
      },
    },
  ]);
  return e;
})();
function ep(e, t) {
  return "".concat(e, "-").concat(t);
}
function eg(e, t) {
  const o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let i = Object.getOwnPropertySymbols(e);
    if (t) {
      i = i.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable);
    }
    o.push.apply(o, i);
  }
  return o;
}
const e_ = "requested";
const em = ((e) => {
  function t() {
    S(this, t);
    let e;
    let o;
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    o = x(this, (e = T(t)).call.apply(e, [this].concat(n)));
    P(b(o), "state", {
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0,
    });
    P(b(o), "_calculateSizeAndPositionDataOnNextUpdate", false);
    P(b(o), "_onSectionRenderedMemoizer", q());
    P(b(o), "_onScrollMemoizer", q(false));
    P(b(o), "_invokeOnSectionRenderedHelper", function () {
      const o_props = o.props;
      const e_cellLayoutManager = o_props.cellLayoutManager;
      const e_onSectionRendered = o_props.onSectionRendered;
      o._onSectionRenderedMemoizer({
        callback: e_onSectionRendered,
        indices: {
          indices: e_cellLayoutManager.getLastRenderedIndices(),
        },
      });
    });
    P(b(o), "_setScrollingContainerRef", function (e) {
      o._scrollingContainer = e;
    });
    P(b(o), "_updateScrollPositionForScrollToCell", function () {
      const o_props = o.props;
      const e_cellLayoutManager = o_props.cellLayoutManager;
      const e_height = o_props.height;
      const e_scrollToAlignment = o_props.scrollToAlignment;
      const e_scrollToCell = o_props.scrollToCell;
      const e_width = o_props.width;
      const o_state = o.state;
      const s_scrollLeft = o_state.scrollLeft;
      const s_scrollTop = o_state.scrollTop;
      if (e_scrollToCell >= 0) {
        const d = e_cellLayoutManager.getScrollPositionForCell({
          align: e_scrollToAlignment,
          cellIndex: e_scrollToCell,
          height: e_height,
          scrollLeft: s_scrollLeft,
          scrollTop: s_scrollTop,
          width: e_width,
        });
        if (d.scrollLeft !== s_scrollLeft || d.scrollTop !== s_scrollTop) {
          o._setScrollPosition(d);
        }
      }
    });
    P(b(o), "_onScroll", function (e) {
      if (e.target === o._scrollingContainer) {
        o._enablePointerEventsAfterDelay();
        const t = o.props;
        const i = t.cellLayoutManager;
        const n = t.height;
        const r = t.isScrollingChange;
        const l = t.width;
        const s = o._scrollbarSize;
        const a = i.getTotalSize();
        const totalHeight = a.height;
        const totalWidth = a.width;
        const h = Math.max(
          0,
          Math.min(totalWidth - l + s, e.target.scrollLeft),
        );
        const u = Math.max(
          0,
          Math.min(totalHeight - n + s, e.target.scrollTop),
        );
        if (o.state.scrollLeft !== h || o.state.scrollTop !== u) {
          const scrollPositionChangeReason = e.cancelable ? "observed" : e_;
          if (!o.state.isScrolling) {
            r(true);
          }
          o.setState({
            isScrolling: true,
            scrollLeft: h,
            scrollPositionChangeReason,
            scrollTop: u,
          });
        }
        o._invokeOnScrollMemoizer({
          scrollLeft: h,
          scrollTop: u,
          totalWidth,
          totalHeight,
        });
      }
    });
    o._scrollbarSize = getScrollbarSize();
    if (o._scrollbarSize === undefined) {
      o._scrollbarSizeMeasured = false;
      o._scrollbarSize = 0;
    } else {
      o._scrollbarSizeMeasured = true;
    }
    return o;
  }
  M(t, e);
  y(
    t,
    [
      {
        key: "recomputeCellSizesAndPositions",
        value: function () {
          this._calculateSizeAndPositionDataOnNextUpdate = true;
          this.forceUpdate();
        },
      },
      {
        key: "componentDidMount",
        value: function () {
          const props = this.props;
          const e_cellLayoutManager = props.cellLayoutManager;
          const e_scrollLeft = props.scrollLeft;
          const e_scrollToCell = props.scrollToCell;
          const e_scrollTop = props.scrollTop;
          if (!this._scrollbarSizeMeasured) {
            this._scrollbarSize = getScrollbarSize();
            this._scrollbarSizeMeasured = true;
            this.setState({});
          }
          if (e_scrollToCell >= 0) {
            this._updateScrollPositionForScrollToCell();
          } else if (e_scrollLeft >= 0 || e_scrollTop >= 0) {
            this._setScrollPosition({
              scrollLeft: e_scrollLeft,
              scrollTop: e_scrollTop,
            });
          }
          this._invokeOnSectionRenderedHelper();
          const r = e_cellLayoutManager.getTotalSize();
          const r_height = r.height;
          const r_width = r.width;
          this._invokeOnScrollMemoizer({
            scrollLeft: e_scrollLeft || 0,
            scrollTop: e_scrollTop || 0,
            totalHeight: r_height,
            totalWidth: r_width,
          });
        },
      },
      {
        key: "componentDidUpdate",
        value: function (e, t) {
          const props = this.props;
          const o_height = props.height;
          const o_scrollToAlignment = props.scrollToAlignment;
          const o_scrollToCell = props.scrollToCell;
          const o_width = props.width;
          const state = this.state;
          const s_scrollLeft = state.scrollLeft;
          const s_scrollPositionChangeReason = state.scrollPositionChangeReason;
          const s_scrollTop = state.scrollTop;
          if (s_scrollPositionChangeReason === e_) {
            if (
              s_scrollLeft >= 0 &&
              s_scrollLeft !== t.scrollLeft &&
              s_scrollLeft !== this._scrollingContainer.scrollLeft
            ) {
              this._scrollingContainer.scrollLeft = s_scrollLeft;
            }
            if (
              s_scrollTop >= 0 &&
              s_scrollTop !== t.scrollTop &&
              s_scrollTop !== this._scrollingContainer.scrollTop
            ) {
              this._scrollingContainer.scrollTop = s_scrollTop;
            }
          }
          if (
            o_height !== e.height ||
            o_scrollToAlignment !== e.scrollToAlignment ||
            o_scrollToCell !== e.scrollToCell ||
            o_width !== e.width
          ) {
            this._updateScrollPositionForScrollToCell();
          }
          this._invokeOnSectionRenderedHelper();
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          if (this._disablePointerEventsTimeoutId) {
            clearTimeout(this._disablePointerEventsTimeoutId);
          }
        },
      },
      {
        key: "render",
        value: function () {
          const props = this.props;
          const e_autoHeight = props.autoHeight;
          const e_cellCount = props.cellCount;
          const e_cellLayoutManager = props.cellLayoutManager;
          const e_className = props.className;
          const e_height = props.height;
          const e_horizontalOverscanSize = props.horizontalOverscanSize;
          const s = props.id;
          const e_noContentRenderer = props.noContentRenderer;
          const e_style = props.style;
          const e_verticalOverscanSize = props.verticalOverscanSize;
          const e_width = props.width;
          const state = this.state;
          const u_isScrolling = state.isScrolling;
          const u_scrollLeft = state.scrollLeft;
          const u_scrollTop = state.scrollTop;
          if (
            this._lastRenderedCellCount !== e_cellCount ||
            this._lastRenderedCellLayoutManager !== e_cellLayoutManager ||
            this._calculateSizeAndPositionDataOnNextUpdate
          ) {
            this._lastRenderedCellCount = e_cellCount;
            this._lastRenderedCellLayoutManager = e_cellLayoutManager;
            this._calculateSizeAndPositionDataOnNextUpdate = false;
            e_cellLayoutManager.calculateSizeAndPositionData();
          }
          const _ = e_cellLayoutManager.getTotalSize();
          const __height = _.height;
          const __width = _.width;
          const S = Math.max(0, u_scrollLeft - e_horizontalOverscanSize);
          const C = Math.max(0, u_scrollTop - e_verticalOverscanSize);
          const y = Math.min(
            __width,
            u_scrollLeft + e_width + e_horizontalOverscanSize,
          );
          const w = Math.min(
            __height,
            u_scrollTop + e_height + e_verticalOverscanSize,
          );
          const x =
            e_height > 0 && e_width > 0
              ? e_cellLayoutManager.cellRenderers({
                  height: w - C,
                  isScrolling: u_isScrolling,
                  width: y - S,
                  x: S,
                  y: C,
                })
              : [];
          const R = {
            boxSizing: "border-box",
            direction: "ltr",
            height: e_autoHeight ? "auto" : e_height,
            position: "relative",
            WebkitOverflowScrolling: "touch",
            width: e_width,
            willChange: "transform",
          };
          const T = __height > e_height ? this._scrollbarSize : 0;
          const z = __width > e_width ? this._scrollbarSize : 0;
          R.overflowX = __width + T <= e_width ? "hidden" : "auto";
          R.overflowY = __height + z <= e_height ? "hidden" : "auto";
          return L.createElement(
            "div",
            {
              ref: this._setScrollingContainerRef,
              "aria-label": this.props["aria-label"],
              className: F("ReactVirtualized__Collection", e_className),
              id: s,
              onScroll: this._onScroll,
              role: "grid",
              style: {
                ...R,
                ...e_style,
              },
              tabIndex: 0,
            },
            e_cellCount > 0 &&
              L.createElement(
                "div",
                {
                  className:
                    "ReactVirtualized__Collection__innerScrollContainer",
                  style: {
                    height: __height,
                    maxHeight: __height,
                    maxWidth: __width,
                    overflow: "hidden",
                    pointerEvents: u_isScrolling ? "none" : "",
                    width: __width,
                  },
                },
                x,
              ),
            e_cellCount === 0 && e_noContentRenderer(),
          );
        },
      },
      {
        key: "_enablePointerEventsAfterDelay",
        value: function () {
          const e = this;
          if (this._disablePointerEventsTimeoutId) {
            clearTimeout(this._disablePointerEventsTimeoutId);
          }
          this._disablePointerEventsTimeoutId = setTimeout(() => {
            e.props.isScrollingChange(false);
            e._disablePointerEventsTimeoutId = null;
            e.setState({
              isScrolling: false,
            });
          }, 150);
        },
      },
      {
        key: "_invokeOnScrollMemoizer",
        value: function (e) {
          const t = this;
          const e_scrollLeft = e.scrollLeft;
          const e_scrollTop = e.scrollTop;
          const e_totalHeight = e.totalHeight;
          const e_totalWidth = e.totalWidth;
          this._onScrollMemoizer({
            callback: function (e) {
              const e_scrollLeft = e.scrollLeft;
              const e_scrollTop = e.scrollTop;
              const t_props = t.props;
              const l_height = t_props.height;
              t_props.onScroll({
                clientHeight: l_height,
                clientWidth: t_props.width,
                scrollHeight: e_totalHeight,
                scrollLeft: e_scrollLeft,
                scrollTop: e_scrollTop,
                scrollWidth: e_totalWidth,
              });
            },
            indices: {
              scrollLeft: e_scrollLeft,
              scrollTop: e_scrollTop,
            },
          });
        },
      },
      {
        key: "_setScrollPosition",
        value: function (e) {
          const e_scrollLeft = e.scrollLeft;
          const e_scrollTop = e.scrollTop;
          const i = {
            scrollPositionChangeReason: e_,
          };
          if (e_scrollLeft >= 0) {
            i.scrollLeft = e_scrollLeft;
          }
          if (e_scrollTop >= 0) {
            i.scrollTop = e_scrollTop;
          }
          if (
            (e_scrollLeft >= 0 && e_scrollLeft !== this.state.scrollLeft) ||
            (e_scrollTop >= 0 && e_scrollTop !== this.state.scrollTop)
          ) {
            this.setState(i);
          }
        },
      },
    ],
    [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          if (e.cellCount === 0 && (t.scrollLeft !== 0 || t.scrollTop !== 0)) {
            return {
              scrollLeft: 0,
              scrollTop: 0,
              scrollPositionChangeReason: e_,
            };
          }
          if (e.scrollLeft !== t.scrollLeft || e.scrollTop !== t.scrollTop) {
            return {
              scrollLeft: e.scrollLeft != null ? e.scrollLeft : t.scrollLeft,
              scrollTop: e.scrollTop != null ? e.scrollTop : t.scrollTop,
              scrollPositionChangeReason: e_,
            };
          }
          return null;
        },
      },
    ],
  );
  return t;
})(L.PureComponent);
P(em, "defaultProps", {
  "aria-label": "grid",
  horizontalOverscanSize: 0,
  noContentRenderer: function () {
    return null;
  },
  onScroll: function () {
    return null;
  },
  onSectionRendered: function () {
    return null;
  },
  scrollToAlignment: "auto",
  scrollToCell: -1,
  style: {},
  verticalOverscanSize: 0,
});
em.propTypes = {};
H(em);
const ev = (() => {
  function e(t) {
    const t_height = t.height;
    const t_width = t.width;
    const n = t.x;
    const r = t.y;
    S(this, e);
    this.height = t_height;
    this.width = t_width;
    this.x = n;
    this.y = r;
    this._indexMap = {};
    this._indices = [];
  }
  y(e, [
    {
      key: "addCellIndex",
      value: function (e) {
        const e_index = e.index;
        if (!this._indexMap[e_index]) {
          this._indexMap[e_index] = true;
          this._indices.push(e_index);
        }
      },
    },
    {
      key: "getCellIndices",
      value: function () {
        return this._indices;
      },
    },
    {
      key: "toString",
      value: function () {
        return ""
          .concat(this.x, ",")
          .concat(this.y, " ")
          .concat(this.width, "x")
          .concat(this.height);
      },
    },
  ]);
  return e;
})();
const eS = (() => {
  function e() {
    const t =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    S(this, e);
    this._sectionSize = t;
    this._cellMetadata = [];
    this._sections = {};
  }
  y(e, [
    {
      key: "getCellIndices",
      value: function (e) {
        const e_height = e.height;
        const e_width = e.width;
        const i = e.x;
        const n = e.y;
        const r = {};
        this.getSections({
          height: e_height,
          width: e_width,
          x: i,
          y: n,
        }).forEach((e) =>
          e.getCellIndices().forEach((e) => {
            r[e] = e;
          }),
        );
        return Object.keys(r).map((e) => r[e]);
      },
    },
    {
      key: "getCellMetadata",
      value: function (e) {
        const e_index = e.index;
        return this._cellMetadata[e_index];
      },
    },
    {
      key: "getSections",
      value: function (e) {
        const e_height = e.height;
        const e_width = e.width;
        const i = e.x;
        const n = e.y;
        const r = Math.floor(i / this._sectionSize);
        for (
          var l = Math.floor((i + e_width - 1) / this._sectionSize),
            s = Math.floor(n / this._sectionSize),
            a = Math.floor((n + e_height - 1) / this._sectionSize),
            c = [],
            d = r;
          d <= l;
          d++
        ) {
          for (let h = s; h <= a; h++) {
            const u = "".concat(d, ".").concat(h);
            if (!this._sections[u]) {
              this._sections[u] = new ev({
                height: this._sectionSize,
                width: this._sectionSize,
                x: d * this._sectionSize,
                y: h * this._sectionSize,
              });
            }
            c.push(this._sections[u]);
          }
        }
        return c;
      },
    },
    {
      key: "getTotalSectionCount",
      value: function () {
        return Object.keys(this._sections).length;
      },
    },
    {
      key: "toString",
      value: function () {
        const e = this;
        return Object.keys(this._sections).map((t) =>
          e._sections[t].toString(),
        );
      },
    },
    {
      key: "registerCell",
      value: function (e) {
        const e_cellMetadatum = e.cellMetadatum;
        const e_index = e.index;
        this._cellMetadata[e_index] = e_cellMetadatum;
        this.getSections(e_cellMetadatum).forEach((e) =>
          e.addCellIndex({
            index: e_index,
          }),
        );
      },
    },
  ]);
  return e;
})();
function eC(e) {
  const e_align = e.align;
  const e_cellOffset = e.cellOffset;
  const e_cellSize = e.cellSize;
  const e_containerSize = e.containerSize;
  const e_currentOffset = e.currentOffset;
  const l = e_cellOffset - e_containerSize + e_cellSize;
  switch (e_align === undefined ? "auto" : e_align) {
    case "start":
      return e_cellOffset;
    case "end":
      return l;
    case "center":
      return e_cellOffset - (e_containerSize - e_cellSize) / 2;
    default:
      return Math.max(l, Math.min(e_cellOffset, e_currentOffset));
  }
}
const ey = ((e) => {
  function t(e, o) {
    let i;
    S(this, t);
    i = x(this, T(t).call(this, e, o));
    i._cellMetadata = [];
    i._lastRenderedCellIndices = [];
    i._cellCache = [];
    i._isScrollingChange = i._isScrollingChange.bind(b(i));
    i._setCollectionViewRef = i._setCollectionViewRef.bind(b(i));
    return i;
  }
  M(t, e);
  y(t, [
    {
      key: "forceUpdate",
      value: function () {
        if (this._collectionView !== undefined) {
          this._collectionView.forceUpdate();
        }
      },
    },
    {
      key: "recomputeCellSizesAndPositions",
      value: function () {
        this._cellCache = [];
        this._collectionView.recomputeCellSizesAndPositions();
      },
    },
    {
      key: "render",
      value: function () {
        const e = E({}, this.props);
        return L.createElement(
          em,
          E(
            {
              cellLayoutManager: this,
              isScrollingChange: this._isScrollingChange,
              ref: this._setCollectionViewRef,
            },
            e,
          ),
        );
      },
    },
    {
      key: "calculateSizeAndPositionData",
      value: function () {
        const props = this.props;
        const t = ((e) => {
          for (
            var t = e.cellCount,
              o = e.cellSizeAndPositionGetter,
              i = e.sectionSize,
              cellMetadata = [],
              sectionManager = new eS(i),
              l = 0,
              s = 0,
              a = 0;
            a < t;
            a++
          ) {
            const cellMetadatum = o({
              index: a,
            });
            if (
              cellMetadatum.height == null ||
              isNaN(cellMetadatum.height) ||
              cellMetadatum.width == null ||
              isNaN(cellMetadatum.width) ||
              cellMetadatum.x == null ||
              isNaN(cellMetadatum.x) ||
              cellMetadatum.y == null ||
              isNaN(cellMetadatum.y)
            ) {
              throw Error(
                "Invalid metadata returned for cell "
                  .concat(a, ":\n        x:")
                  .concat(cellMetadatum.x, ", y:")
                  .concat(cellMetadatum.y, ", width:")
                  .concat(cellMetadatum.width, ", height:")
                  .concat(cellMetadatum.height),
              );
            }
            l = Math.max(l, cellMetadatum.y + cellMetadatum.height);
            s = Math.max(s, cellMetadatum.x + cellMetadatum.width);
            cellMetadata[a] = cellMetadatum;
            sectionManager.registerCell({
              cellMetadatum,
              index: a,
            });
          }
          return {
            cellMetadata,
            height: l,
            sectionManager,
            width: s,
          };
        })({
          cellCount: props.cellCount,
          cellSizeAndPositionGetter: props.cellSizeAndPositionGetter,
          sectionSize: props.sectionSize,
        });
        this._cellMetadata = t.cellMetadata;
        this._sectionManager = t.sectionManager;
        this._height = t.height;
        this._width = t.width;
      },
    },
    {
      key: "getLastRenderedIndices",
      value: function () {
        return this._lastRenderedCellIndices;
      },
    },
    {
      key: "getScrollPositionForCell",
      value: function (e) {
        const e_align = e.align;
        const e_cellIndex = e.cellIndex;
        const e_height = e.height;
        let e_scrollLeft = e.scrollLeft;
        let e_scrollTop = e.scrollTop;
        const e_width = e.width;
        const cellCount = this.props.cellCount;
        if (e_cellIndex >= 0 && e_cellIndex < cellCount) {
          const a = this._cellMetadata[e_cellIndex];
          e_scrollLeft = eC({
            align: e_align,
            cellOffset: a.x,
            cellSize: a.width,
            containerSize: e_width,
            currentOffset: e_scrollLeft,
            targetIndex: e_cellIndex,
          });
          e_scrollTop = eC({
            align: e_align,
            cellOffset: a.y,
            cellSize: a.height,
            containerSize: e_height,
            currentOffset: e_scrollTop,
            targetIndex: e_cellIndex,
          });
        }
        return {
          scrollLeft: e_scrollLeft,
          scrollTop: e_scrollTop,
        };
      },
    },
    {
      key: "getTotalSize",
      value: function () {
        return {
          height: this._height,
          width: this._width,
        };
      },
    },
    {
      key: "cellRenderers",
      value: function (e) {
        const t = this;
        const e_height = e.height;
        const e_isScrolling = e.isScrolling;
        const e_width = e.width;
        const r = e.x;
        const l = e.y;
        const props = this.props;
        const s_cellGroupRenderer = props.cellGroupRenderer;
        const s_cellRenderer = props.cellRenderer;
        this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
          height: e_height,
          width: e_width,
          x: r,
          y: l,
        });
        return s_cellGroupRenderer({
          cellCache: this._cellCache,
          cellRenderer: s_cellRenderer,
          cellSizeAndPositionGetter: function (e) {
            const e_index = e.index;
            return t._sectionManager.getCellMetadata({
              index: e_index,
            });
          },
          indices: this._lastRenderedCellIndices,
          isScrolling: e_isScrolling,
        });
      },
    },
    {
      key: "_isScrollingChange",
      value: function (e) {
        if (!e) {
          this._cellCache = [];
        }
      },
    },
    {
      key: "_setCollectionViewRef",
      value: function (e) {
        this._collectionView = e;
      },
    },
  ]);
  return t;
})(L.PureComponent);
P(ey, "defaultProps", {
  "aria-label": "grid",
  cellGroupRenderer: function (e) {
    const e_cellCache = e.cellCache;
    const e_cellRenderer = e.cellRenderer;
    const e_cellSizeAndPositionGetter = e.cellSizeAndPositionGetter;
    const e_indices = e.indices;
    const e_isScrolling = e.isScrolling;
    return e_indices
      .map((e) => {
        const n = e_cellSizeAndPositionGetter({
          index: e,
        });
        const l = {
          index: e,
          isScrolling: e_isScrolling,
          key: e,
          style: {
            height: n.height,
            left: n.x,
            position: "absolute",
            top: n.y,
            width: n.width,
          },
        };
        if (e_isScrolling) {
          if (!(e in e_cellCache)) {
            e_cellCache[e] = e_cellRenderer(l);
          }
          return e_cellCache[e];
        }
        return e_cellRenderer(l);
      })
      .filter((e) => !!e);
  },
});
ey.propTypes = {};
((e) => {
  function t(e, o) {
    let i;
    S(this, t);
    i = x(this, T(t).call(this, e, o));
    i._registerChild = i._registerChild.bind(b(i));
    return i;
  }
  M(t, e);
  y(t, [
    {
      key: "componentDidUpdate",
      value: function (e) {
        const props = this.props;
        const t_columnMaxWidth = props.columnMaxWidth;
        const t_columnMinWidth = props.columnMinWidth;
        const t_columnCount = props.columnCount;
        const t_width = props.width;
        if (
          (t_columnMaxWidth !== e.columnMaxWidth ||
            t_columnMinWidth !== e.columnMinWidth ||
            t_columnCount !== e.columnCount ||
            t_width !== e.width) &&
          this._registeredChild
        ) {
          this._registeredChild.recomputeGridSize();
        }
      },
    },
    {
      key: "render",
      value: function () {
        const props = this.props;
        const e_children = props.children;
        const e_columnMaxWidth = props.columnMaxWidth;
        const e_columnMinWidth = props.columnMinWidth;
        const e_columnCount = props.columnCount;
        const e_width = props.width;
        const l = e_columnMaxWidth
          ? Math.min(e_columnMaxWidth, e_width)
          : e_width;
        let columnWidth = e_width / e_columnCount;
        return e_children({
          adjustedWidth: Math.min(
            e_width,
            (columnWidth = Math.floor(
              (columnWidth = Math.min(
                l,
                (columnWidth = Math.max(e_columnMinWidth || 1, columnWidth)),
              )),
            )) * e_columnCount,
          ),
          columnWidth,
          getColumnWidth: function () {
            return columnWidth;
          },
          registerChild: this._registerChild,
        });
      },
    },
    {
      key: "_registerChild",
      value: function (e) {
        if (e && typeof e.recomputeGridSize !== "function") {
          throw Error(
            "Unexpected child type registered; only Grid/MultiGrid children are supported.",
          );
        }
        this._registeredChild = e;
        if (this._registeredChild) {
          this._registeredChild.recomputeGridSize();
        }
      },
    },
  ]);
  return t;
})(L.PureComponent).propTypes = {};
const ew = require("d3i");
const eR = ((e) => {
  function t(e, o) {
    let i;
    S(this, t);
    i = x(this, T(t).call(this, e, o));
    i._loadMoreRowsMemoizer = q();
    i._onRowsRendered = i._onRowsRendered.bind(b(i));
    i._registerChild = i._registerChild.bind(b(i));
    return i;
  }
  M(t, e);
  y(t, [
    {
      key: "resetLoadMoreRowsCache",
      value: function (e) {
        this._loadMoreRowsMemoizer = q();
        if (e) {
          this._doStuff(
            this._lastRenderedStartIndex,
            this._lastRenderedStopIndex,
          );
        }
      },
    },
    {
      key: "render",
      value: function () {
        return this.props.children({
          onRowsRendered: this._onRowsRendered,
          registerChild: this._registerChild,
        });
      },
    },
    {
      key: "_loadUnloadedRanges",
      value: function (e) {
        const t = this;
        const loadMoreRows = this.props.loadMoreRows;
        e.forEach((e) => {
          const i = loadMoreRows(e);
          if (i) {
            i.then(() => {
              let o;
              let i;
              let n;
              let r;
              let l;
              i = (o = {
                lastRenderedStartIndex: t._lastRenderedStartIndex,
                lastRenderedStopIndex: t._lastRenderedStopIndex,
                startIndex: e.startIndex,
                stopIndex: e.stopIndex,
              }).lastRenderedStartIndex;
              n = o.lastRenderedStopIndex;
              r = o.startIndex;
              l = o.stopIndex;
              if (!(r > n || l < i) && t._registeredChild) {
                (function (e) {
                  const t =
                    arguments.length > 1 && arguments[1] !== undefined
                      ? arguments[1]
                      : 0;
                  const o =
                    typeof e.recomputeGridSize === "function"
                      ? e.recomputeGridSize
                      : e.recomputeRowHeights;
                  if (o) {
                    o.call(e, t);
                  } else {
                    e.forceUpdate();
                  }
                })(t._registeredChild, t._lastRenderedStartIndex);
              }
            });
          }
        });
      },
    },
    {
      key: "_onRowsRendered",
      value: function (e) {
        const e_startIndex = e.startIndex;
        const e_stopIndex = e.stopIndex;
        this._lastRenderedStartIndex = e_startIndex;
        this._lastRenderedStopIndex = e_stopIndex;
        this._doStuff(e_startIndex, e_stopIndex);
      },
    },
    {
      key: "_doStuff",
      value: function (e, t) {
        let o;
        const i = this;
        const props = this.props;
        const n_isRowLoaded = props.isRowLoaded;
        const n_minimumBatchSize = props.minimumBatchSize;
        const n_rowCount = props.rowCount;
        const n_threshold = props.threshold;
        const c = ((e) => {
          const e_isRowLoaded = e.isRowLoaded;
          const e_minimumBatchSize = e.minimumBatchSize;
          const e_rowCount = e.rowCount;
          const e_startIndex = e.startIndex;
          for (
            var r = e.stopIndex,
              l = [],
              startIndex = null,
              stopIndex = null,
              c = e_startIndex;
            c <= r;
            c++
          ) {
            if (
              e_isRowLoaded({
                index: c,
              })
            ) {
              if (stopIndex !== null) {
                l.push({
                  startIndex,
                  stopIndex,
                });
                stopIndex = null;
                startIndex = null;
              }
            } else {
              stopIndex = c;
              if (startIndex === null) {
                startIndex = c;
              }
            }
          }
          if (stopIndex !== null) {
            for (
              let d = Math.min(
                  Math.max(stopIndex, startIndex + e_minimumBatchSize - 1),
                  e_rowCount - 1,
                ),
                h = stopIndex + 1;
              h <= d;
              h++
            ) {
              if (
                e_isRowLoaded({
                  index: h,
                })
              ) {
                break;
              } else {
                stopIndex = h;
              }
            }
            l.push({
              startIndex,
              stopIndex,
            });
          }
          if (l.length) {
            for (
              const u = l[0];
              u.stopIndex - u.startIndex + 1 < e_minimumBatchSize &&
              u.startIndex > 0;
            ) {
              const f = u.startIndex - 1;
              if (
                e_isRowLoaded({
                  index: f,
                })
              ) {
                break;
              }
              u.startIndex = f;
            }
          }
          return l;
        })({
          isRowLoaded: n_isRowLoaded,
          minimumBatchSize: n_minimumBatchSize,
          rowCount: n_rowCount,
          startIndex: Math.max(0, e - n_threshold),
          stopIndex: Math.min(n_rowCount - 1, t + n_threshold),
        });
        const squashedUnloadedRanges = (o = []).concat.apply(
          o,
          ew(c.map((e) => [e.startIndex, e.stopIndex])),
        );
        this._loadMoreRowsMemoizer({
          callback: function () {
            i._loadUnloadedRanges(c);
          },
          indices: {
            squashedUnloadedRanges,
          },
        });
      },
    },
    {
      key: "_registerChild",
      value: function (e) {
        this._registeredChild = e;
      },
    },
  ]);
  return t;
})(L.PureComponent);
P(eR, "defaultProps", {
  minimumBatchSize: 10,
  rowCount: 0,
  threshold: 15,
});
eR.propTypes = {};
p = f = ((e) => {
  function t() {
    S(this, t);
    let e;
    let o;
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    o = x(this, (e = T(t)).call.apply(e, [this].concat(n)));
    P(b(o), "Grid", undefined);
    P(b(o), "_cellRenderer", function (e) {
      const e_parent = e.parent;
      const e_rowIndex = e.rowIndex;
      const e_style = e.style;
      const e_isScrolling = e.isScrolling;
      const e_isVisible = e.isVisible;
      const e_key = e.key;
      const rowRenderer = o.props.rowRenderer;
      const c = Object.getOwnPropertyDescriptor(e_style, "width");
      if (c && c.writable) {
        e_style.width = "100%";
      }
      return rowRenderer({
        index: e_rowIndex,
        style: e_style,
        isScrolling: e_isScrolling,
        isVisible: e_isVisible,
        key: e_key,
        parent: e_parent,
      });
    });
    P(b(o), "_setRef", function (e) {
      o.Grid = e;
    });
    P(b(o), "_onScroll", function (e) {
      const e_clientHeight = e.clientHeight;
      const e_scrollHeight = e.scrollHeight;
      const e_scrollTop = e.scrollTop;
      o.props.onScroll({
        clientHeight: e_clientHeight,
        scrollHeight: e_scrollHeight,
        scrollTop: e_scrollTop,
      });
    });
    P(b(o), "_onSectionRendered", function (e) {
      const e_rowOverscanStartIndex = e.rowOverscanStartIndex;
      const e_rowOverscanStopIndex = e.rowOverscanStopIndex;
      const e_rowStartIndex = e.rowStartIndex;
      const e_rowStopIndex = e.rowStopIndex;
      o.props.onRowsRendered({
        overscanStartIndex: e_rowOverscanStartIndex,
        overscanStopIndex: e_rowOverscanStopIndex,
        startIndex: e_rowStartIndex,
        stopIndex: e_rowStopIndex,
      });
    });
    return o;
  }
  M(t, e);
  y(t, [
    {
      key: "forceUpdateGrid",
      value: function () {
        if (this.Grid) {
          this.Grid.forceUpdate();
        }
      },
    },
    {
      key: "getOffsetForRow",
      value: function (e) {
        const e_alignment = e.alignment;
        const e_index = e.index;
        if (this.Grid) {
          return this.Grid.getOffsetForCell({
            alignment: e_alignment,
            rowIndex: e_index,
            columnIndex: 0,
          }).scrollTop;
        }
        return 0;
      },
    },
    {
      key: "invalidateCellSizeAfterRender",
      value: function (e) {
        const e_columnIndex = e.columnIndex;
        const e_rowIndex = e.rowIndex;
        if (this.Grid) {
          this.Grid.invalidateCellSizeAfterRender({
            rowIndex: e_rowIndex,
            columnIndex: e_columnIndex,
          });
        }
      },
    },
    {
      key: "measureAllRows",
      value: function () {
        if (this.Grid) {
          this.Grid.measureAllCells();
        }
      },
    },
    {
      key: "recomputeGridSize",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        const e_columnIndex = e.columnIndex;
        const e_rowIndex = e.rowIndex;
        if (this.Grid) {
          this.Grid.recomputeGridSize({
            rowIndex: e_rowIndex === undefined ? 0 : e_rowIndex,
            columnIndex: e_columnIndex === undefined ? 0 : e_columnIndex,
          });
        }
      },
    },
    {
      key: "recomputeRowHeights",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this.Grid) {
          this.Grid.recomputeGridSize({
            rowIndex: e,
            columnIndex: 0,
          });
        }
      },
    },
    {
      key: "scrollToPosition",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this.Grid) {
          this.Grid.scrollToPosition({
            scrollTop: e,
          });
        }
      },
    },
    {
      key: "scrollToRow",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this.Grid) {
          this.Grid.scrollToCell({
            columnIndex: 0,
            rowIndex: e,
          });
        }
      },
    },
    {
      key: "render",
      value: function () {
        const props = this.props;
        const e_className = props.className;
        const e_noRowsRenderer = props.noRowsRenderer;
        const e_scrollToIndex = props.scrollToIndex;
        const e_width = props.width;
        const r = F("ReactVirtualized__List", e_className);
        return L.createElement(
          xA,
          E({}, this.props, {
            autoContainerWidth: true,
            cellRenderer: this._cellRenderer,
            className: r,
            columnWidth: e_width,
            columnCount: 1,
            noContentRenderer: e_noRowsRenderer,
            onScroll: this._onScroll,
            onSectionRendered: this._onSectionRendered,
            ref: this._setRef,
            scrollToRow: e_scrollToIndex,
          }),
        );
      },
    },
  ]);
  return t;
})(L.PureComponent);
P(f, "propTypes", null);
export var B8 = p;
P(B8, "defaultProps", {
  autoHeight: false,
  estimatedRowSize: 30,
  onScroll: function () {},
  noRowsRenderer: function () {
    return null;
  },
  onRowsRendered: function () {},
  overscanIndicesGetter,
  overscanRowCount: 10,
  scrollToAlignment: "auto",
  scrollToIndex: -1,
  style: {},
});
const ez = require("sp");
const eI = (e, t, o, i, n) => {
  if (typeof o === "function") {
    return ((e, t, o, i, n) => {
      let r = o + 1;
      while (t <= o) {
        const l = (t + o) >>> 1;
        if (n(e[l], i) >= 0) {
          r = l;
          o = l - 1;
        } else {
          t = l + 1;
        }
      }
      return r;
    })(
      e,
      i === undefined ? 0 : 0 | i,
      n === undefined ? e.length - 1 : 0 | n,
      t,
      o,
    );
  }
  return ((e, t, o, i) => {
    let n = o + 1;
    while (t <= o) {
      const r = (t + o) >>> 1;
      if (e[r] >= i) {
        n = r;
        o = r - 1;
      } else {
        t = r + 1;
      }
    }
    return n;
  })(e, o === undefined ? 0 : 0 | o, i === undefined ? e.length - 1 : 0 | i, t);
};
function eM(e, t, o, i, n) {
  this.mid = e;
  this.left = t;
  this.right = o;
  this.leftPoints = i;
  this.rightPoints = n;
  this.count = (t ? t.count : 0) + (o ? o.count : 0) + i.length;
}
const eM_prototype = eM.prototype;
function eP(e, t) {
  e.mid = t.mid;
  e.left = t.left;
  e.right = t.right;
  e.leftPoints = t.leftPoints;
  e.rightPoints = t.rightPoints;
  e.count = t.count;
}
function eO(e, t) {
  const o = eN(t);
  e.mid = o.mid;
  e.left = o.left;
  e.right = o.right;
  e.leftPoints = o.leftPoints;
  e.rightPoints = o.rightPoints;
  e.count = o.count;
}
function eL(e, t) {
  const o = e.intervals([]);
  o.push(t);
  eO(e, o);
}
function eG(e, t) {
  const o = e.intervals([]);
  const i = o.indexOf(t);
  if (i < 0) {
    return 0;
  }
  o.splice(i, 1);
  eO(e, o);
  return 1;
}
function eA(leftPoints, t, o) {
  for (let i = 0; i < leftPoints.length && leftPoints[i][0] <= t; ++i) {
    const n = o(leftPoints[i]);
    if (n) {
      return n;
    }
  }
}
function eW(rightPoints, t, o) {
  for (let i = rightPoints.length - 1; i >= 0 && rightPoints[i][1] >= t; --i) {
    const n = o(rightPoints[i]);
    if (n) {
      return n;
    }
  }
}
function eH(leftPoints, t) {
  for (let o = 0; o < leftPoints.length; ++o) {
    const i = t(leftPoints[o]);
    if (i) {
      return i;
    }
  }
}
function eE(e, t) {
  return e - t;
}
function eD(e, t) {
  const o = e[0] - t[0];
  return o || e[1] - t[1];
}
function eF(e, t) {
  const o = e[1] - t[1];
  return o || e[0] - t[0];
}
function eN(e) {
  if (e.length === 0) {
    return null;
  }
  const t = [];
  for (var o = 0; o < e.length; ++o) {
    t.push(e[o][0], e[o][1]);
  }
  t.sort(eE);
  const i = t[t.length >> 1];
  const n = [];
  const r = [];
  const l = [];
  for (var o = 0; o < e.length; ++o) {
    const s = e[o];
    if (s[1] < i) {
      n.push(s);
    } else if (i < s[0]) {
      r.push(s);
    } else {
      l.push(s);
    }
  }
  const a = l.slice();
  l.sort(eD);
  a.sort(eF);
  return new eM(i, eN(n), eN(r), l, a);
}
function ej(e) {
  this.root = e;
}
eM_prototype.intervals = function (e) {
  e.push.apply(e, this.leftPoints);
  if (this.left) {
    this.left.intervals(e);
  }
  if (this.right) {
    this.right.intervals(e);
  }
  return e;
};
eM_prototype.insert = function (e) {
  const t = this.count - this.leftPoints.length;
  this.count += 1;
  if (e[1] < this.mid) {
    if (this.left) {
      if (4 * (this.left.count + 1) > 3 * (t + 1)) {
        eL(this, e);
      } else {
        this.left.insert(e);
      }
    } else {
      this.left = eN([e]);
    }
  } else if (e[0] > this.mid) {
    if (this.right) {
      if (4 * (this.right.count + 1) > 3 * (t + 1)) {
        eL(this, e);
      } else {
        this.right.insert(e);
      }
    } else {
      this.right = eN([e]);
    }
  } else {
    const o = eI(this.leftPoints, e, eD);
    const i = eI(this.rightPoints, e, eF);
    this.leftPoints.splice(o, 0, e);
    this.rightPoints.splice(i, 0, e);
  }
};
eM_prototype.remove = function (e) {
  const t = this.count - this.leftPoints;
  if (e[1] < this.mid) {
    if (!this.left) {
      return 0;
    }
    if (4 * (this.right ? this.right.count : 0) > 3 * (t - 1)) {
      return eG(this, e);
    }
    var o = this.left.remove(e);
    if (o === 2) {
      this.left = null;
      this.count -= 1;
      return 1;
    }
    if (o === 1) {
      this.count -= 1;
    }
    return o;
  }
  if (e[0] > this.mid) {
    if (!this.right) {
      return 0;
    }
    if (4 * (this.left ? this.left.count : 0) > 3 * (t - 1)) {
      return eG(this, e);
    }
    var o = this.right.remove(e);
    if (o === 2) {
      this.right = null;
      this.count -= 1;
      return 1;
    }
    if (o === 1) {
      this.count -= 1;
    }
    return o;
  }
  if (this.count === 1) {
    if (this.leftPoints[0] === e) {
      return 2;
    } else {
      return 0;
    }
  }
  if (this.leftPoints.length === 1 && this.leftPoints[0] === e) {
    if (this.left && this.right) {
      let i = this;
      for (var n = this.left; n.right;) {
        i = n;
        n = n.right;
      }
      if (i === this) {
        n.right = this.right;
      } else {
        var r = this.left;
        var o = this.right;
        i.count -= n.count;
        i.right = n.left;
        n.left = r;
        n.right = o;
      }
      eP(this, n);
      this.count =
        (this.left ? this.left.count : 0) +
        (this.right ? this.right.count : 0) +
        this.leftPoints.length;
    } else {
      if (this.left) {
        eP(this, this.left);
      } else {
        eP(this, this.right);
      }
    }
    return 1;
  }
  for (
    var r = eI(this.leftPoints, e, eD);
    r < this.leftPoints.length && this.leftPoints[r][0] === e[0];
    ++r
  ) {
    if (this.leftPoints[r] === e) {
      this.count -= 1;
      this.leftPoints.splice(r, 1);
      for (
        var o = eI(this.rightPoints, e, eF);
        o < this.rightPoints.length;
        ++o
      ) {
        if (this.rightPoints[o][1] !== e[1]) {
          break;
        } else if (this.rightPoints[o] === e) {
          this.rightPoints.splice(o, 1);
          return 1;
        }
      }
    }
  }
  return 0;
};
eM_prototype.queryPoint = function (e, t) {
  if (e < this.mid) {
    if (this.left) {
      var o = this.left.queryPoint(e, t);
      if (o) {
        return o;
      }
    }
    return eA(this.leftPoints, e, t);
  }
  if (!(e > this.mid)) {
    return eH(this.leftPoints, t);
  }
  if (this.right) {
    var o = this.right.queryPoint(e, t);
    if (o) {
      return o;
    }
  }
  return eW(this.rightPoints, e, t);
};
eM_prototype.queryInterval = function (e, t, o) {
  if (e < this.mid && this.left) {
    var i = this.left.queryInterval(e, t, o);
    if (i) {
      return i;
    }
  }
  if (t > this.mid && this.right) {
    var i = this.right.queryInterval(e, t, o);
    if (i) {
      return i;
    }
  }
  if (t < this.mid) {
    return eA(this.leftPoints, t, o);
  }
  if (e > this.mid) {
    return eW(this.rightPoints, e, o);
  }
  return eH(this.leftPoints, o);
};
const ej_prototype = ej.prototype;
ej_prototype.insert = function (e) {
  if (this.root) {
    this.root.insert(e);
  } else {
    this.root = new eM(e[0], null, null, [e], [e]);
  }
};
ej_prototype.remove = function (e) {
  if (this.root) {
    const t = this.root.remove(e);
    if (t === 2) {
      this.root = null;
    }
    return t !== 0;
  }
  return false;
};
ej_prototype.queryPoint = function (e, t) {
  if (this.root) {
    return this.root.queryPoint(e, t);
  }
};
ej_prototype.queryInterval = function (e, t, o) {
  if (e <= t && this.root) {
    return this.root.queryInterval(e, t, o);
  }
};
Object.defineProperty(ej_prototype, "count", {
  get: function () {
    if (this.root) {
      return this.root.count;
    }
    return 0;
  },
});
Object.defineProperty(ej_prototype, "intervals", {
  get: function () {
    if (this.root) {
      return this.root.intervals([]);
    }
    return [];
  },
});
const eB = (() => {
  function e() {
    S(this, e);
    P(this, "_columnSizeMap", {});
    P(this, "_intervalTree", new ej(null));
    P(this, "_leftMap", {});
  }
  y(e, [
    {
      key: "estimateTotalHeight",
      value: function (e, t, o) {
        const i = e - this.count;
        return this.tallestColumnSize + Math.ceil(i / t) * o;
      },
    },
    {
      key: "range",
      value: function (e, t, o) {
        const i = this;
        this._intervalTree.queryInterval(e, e + t, function (e) {
          const t = ez(e, 3);
          const n = t[0];
          t[1];
          const r = t[2];
          return o(r, i._leftMap[r], n);
        });
      },
    },
    {
      key: "setPosition",
      value: function (e, t, o, i) {
        this._intervalTree.insert([o, o + i, e]);
        this._leftMap[e] = t;
        const _columnSizeMap = this._columnSizeMap;
        const r = _columnSizeMap[t];
        if (r === undefined) {
          _columnSizeMap[t] = o + i;
        } else {
          _columnSizeMap[t] = Math.max(r, o + i);
        }
      },
    },
    {
      key: "count",
      get: function () {
        return this._intervalTree.count;
      },
    },
    {
      key: "shortestColumnSize",
      get: function () {
        const _columnSizeMap = this._columnSizeMap;
        let t = 0;
        for (const o in _columnSizeMap) {
          const i = _columnSizeMap[o];
          t = t === 0 ? i : Math.min(t, i);
        }
        return t;
      },
    },
    {
      key: "tallestColumnSize",
      get: function () {
        const _columnSizeMap = this._columnSizeMap;
        let t = 0;
        for (const o in _columnSizeMap) {
          t = Math.max(t, _columnSizeMap[o]);
        }
        return t;
      },
    },
  ]);
  return e;
})();
function eV(e, t) {
  const o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let i = Object.getOwnPropertySymbols(e);
    if (t) {
      i = i.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable);
    }
    o.push.apply(o, i);
  }
  return o;
}
_ = g = ((e) => {
  function t() {
    S(this, t);
    let e;
    let o;
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    o = x(this, (e = T(t)).call.apply(e, [this].concat(n)));
    P(b(o), "state", {
      isScrolling: false,
      scrollTop: 0,
    });
    P(b(o), "_debounceResetIsScrollingId", undefined);
    P(b(o), "_invalidateOnUpdateStartIndex", null);
    P(b(o), "_invalidateOnUpdateStopIndex", null);
    P(b(o), "_positionCache", new eB());
    P(b(o), "_startIndex", null);
    P(b(o), "_startIndexMemoized", null);
    P(b(o), "_stopIndex", null);
    P(b(o), "_stopIndexMemoized", null);
    P(b(o), "_debounceResetIsScrollingCallback", function () {
      o.setState({
        isScrolling: false,
      });
    });
    P(b(o), "_setScrollingContainerRef", function (e) {
      o._scrollingContainer = e;
    });
    P(b(o), "_onScroll", function (e) {
      const height = o.props.height;
      const scrollTop = e.currentTarget.scrollTop;
      const n = Math.min(
        Math.max(0, o._getEstimatedTotalHeight() - height),
        scrollTop,
      );
      if (scrollTop === n) {
        o._debounceResetIsScrolling();
        if (o.state.scrollTop !== n) {
          o.setState({
            isScrolling: true,
            scrollTop: n,
          });
        }
      }
    });
    return o;
  }
  M(t, e);
  y(
    t,
    [
      {
        key: "clearCellPositions",
        value: function () {
          this._positionCache = new eB();
          this.forceUpdate();
        },
      },
      {
        key: "invalidateCellSizeAfterRender",
        value: function (e) {
          const e_rowIndex = e.rowIndex;
          if (this._invalidateOnUpdateStartIndex === null) {
            this._invalidateOnUpdateStartIndex = e_rowIndex;
            this._invalidateOnUpdateStopIndex = e_rowIndex;
          } else {
            this._invalidateOnUpdateStartIndex = Math.min(
              this._invalidateOnUpdateStartIndex,
              e_rowIndex,
            );
            this._invalidateOnUpdateStopIndex = Math.max(
              this._invalidateOnUpdateStopIndex,
              e_rowIndex,
            );
          }
        },
      },
      {
        key: "recomputeCellPositions",
        value: function () {
          const e = this._positionCache.count - 1;
          this._positionCache = new eB();
          this._populatePositionCache(0, e);
          this.forceUpdate();
        },
      },
      {
        key: "componentDidMount",
        value: function () {
          this._checkInvalidateOnUpdate();
          this._invokeOnScrollCallback();
          this._invokeOnCellsRenderedCallback();
        },
      },
      {
        key: "componentDidUpdate",
        value: function (e, t) {
          this._checkInvalidateOnUpdate();
          this._invokeOnScrollCallback();
          this._invokeOnCellsRenderedCallback();
          if (this.props.scrollTop !== e.scrollTop) {
            this._debounceResetIsScrolling();
          }
        },
      },
      {
        key: "componentWillUnmount",
        value: function () {
          if (this._debounceResetIsScrollingId) {
            $(this._debounceResetIsScrollingId);
          }
        },
      },
      {
        key: "render",
        value: function () {
          let e;
          const parent = this;
          const props = this.props;
          const o_autoHeight = props.autoHeight;
          const o_cellCount = props.cellCount;
          const o_cellMeasurerCache = props.cellMeasurerCache;
          const o_cellRenderer = props.cellRenderer;
          const o_className = props.className;
          const o_height = props.height;
          const c = props.id;
          const o_keyMapper = props.keyMapper;
          const o_overscanByPixels = props.overscanByPixels;
          const o_role = props.role;
          const o_style = props.style;
          const o_tabIndex = props.tabIndex;
          const o_width = props.width;
          const o_rowDirection = props.rowDirection;
          const state = this.state;
          const m_isScrolling = state.isScrolling;
          const m_scrollTop = state.scrollTop;
          const C = [];
          const y = this._getEstimatedTotalHeight();
          const shortestColumnSize = this._positionCache.shortestColumnSize;
          const count = this._positionCache.count;
          let R = 0;
          this._positionCache.range(
            Math.max(0, m_scrollTop - o_overscanByPixels),
            o_height + 2 * o_overscanByPixels,
            function (o, i, n) {
              let s;
              if (e === undefined) {
                R = o;
                e = o;
              } else {
                R = Math.min(R, o);
                e = Math.max(e, o);
              }
              C.push(
                o_cellRenderer({
                  index: o,
                  isScrolling: m_isScrolling,
                  key: o_keyMapper(o),
                  parent,
                  style:
                    ((s = {
                      height: o_cellMeasurerCache.getHeight(o),
                    }),
                    P(s, o_rowDirection === "ltr" ? "left" : "right", i),
                    P(s, "position", "absolute"),
                    P(s, "top", n),
                    P(s, "width", o_cellMeasurerCache.getWidth(o)),
                    s),
                }),
              );
            },
          );
          if (
            shortestColumnSize < m_scrollTop + o_height + o_overscanByPixels &&
            count < o_cellCount
          ) {
            for (
              let T = Math.min(
                  o_cellCount - count,
                  Math.ceil(
                    (((m_scrollTop +
                      o_height +
                      o_overscanByPixels -
                      shortestColumnSize) /
                      o_cellMeasurerCache.defaultHeight) *
                      o_width) /
                      o_cellMeasurerCache.defaultWidth,
                  ),
                ),
                z = count;
              z < count + T;
              z++
            ) {
              e = z;
              C.push(
                o_cellRenderer({
                  index: z,
                  isScrolling: m_isScrolling,
                  key: o_keyMapper(z),
                  parent: this,
                  style: {
                    width: o_cellMeasurerCache.getWidth(z),
                  },
                }),
              );
            }
          }
          this._startIndex = R;
          this._stopIndex = e;
          return L.createElement(
            "div",
            {
              ref: this._setScrollingContainerRef,
              "aria-label": this.props["aria-label"],
              className: F("ReactVirtualized__Masonry", o_className),
              id: c,
              onScroll: this._onScroll,
              role: o_role,
              style: {
                boxSizing: "border-box",
                direction: "ltr",
                height: o_autoHeight ? "auto" : o_height,
                overflowX: "hidden",
                overflowY: y < o_height ? "hidden" : "auto",
                position: "relative",
                width: o_width,
                WebkitOverflowScrolling: "touch",
                willChange: "transform",
                ...o_style,
              },
              tabIndex: o_tabIndex,
            },
            L.createElement(
              "div",
              {
                className: "ReactVirtualized__Masonry__innerScrollContainer",
                style: {
                  width: "100%",
                  height: y,
                  maxWidth: "100%",
                  maxHeight: y,
                  overflow: "hidden",
                  pointerEvents: m_isScrolling ? "none" : "",
                  position: "relative",
                },
              },
              C,
            ),
          );
        },
      },
      {
        key: "_checkInvalidateOnUpdate",
        value: function () {
          if (typeof this._invalidateOnUpdateStartIndex === "number") {
            const e = this._invalidateOnUpdateStartIndex;
            const t = this._invalidateOnUpdateStopIndex;
            this._invalidateOnUpdateStartIndex = null;
            this._invalidateOnUpdateStopIndex = null;
            this._populatePositionCache(e, t);
            this.forceUpdate();
          }
        },
      },
      {
        key: "_debounceResetIsScrolling",
        value: function () {
          const scrollingResetTimeInterval =
            this.props.scrollingResetTimeInterval;
          if (this._debounceResetIsScrollingId) {
            $(this._debounceResetIsScrollingId);
          }
          this._debounceResetIsScrollingId = Q(
            this._debounceResetIsScrollingCallback,
            scrollingResetTimeInterval,
          );
        },
      },
      {
        key: "_getEstimatedTotalHeight",
        value: function () {
          const props = this.props;
          const e_cellCount = props.cellCount;
          const e_cellMeasurerCache = props.cellMeasurerCache;
          const i = Math.max(
            1,
            Math.floor(props.width / e_cellMeasurerCache.defaultWidth),
          );
          return this._positionCache.estimateTotalHeight(
            e_cellCount,
            i,
            e_cellMeasurerCache.defaultHeight,
          );
        },
      },
      {
        key: "_invokeOnScrollCallback",
        value: function () {
          const props = this.props;
          const e_height = props.height;
          const e_onScroll = props.onScroll;
          const scrollTop = this.state.scrollTop;
          if (this._onScrollMemoized !== scrollTop) {
            e_onScroll({
              clientHeight: e_height,
              scrollHeight: this._getEstimatedTotalHeight(),
              scrollTop,
            });
            this._onScrollMemoized = scrollTop;
          }
        },
      },
      {
        key: "_invokeOnCellsRenderedCallback",
        value: function () {
          if (
            this._startIndexMemoized !== this._startIndex ||
            this._stopIndexMemoized !== this._stopIndex
          ) {
            this.props.onCellsRendered({
              startIndex: this._startIndex,
              stopIndex: this._stopIndex,
            });
            this._startIndexMemoized = this._startIndex;
            this._stopIndexMemoized = this._stopIndex;
          }
        },
      },
      {
        key: "_populatePositionCache",
        value: function (e, t) {
          const props = this.props;
          const o_cellMeasurerCache = props.cellMeasurerCache;
          const o_cellPositioner = props.cellPositioner;
          for (let r = e; r <= t; r++) {
            const l = o_cellPositioner(r);
            const s = l.left;
            const a = l.top;
            this._positionCache.setPosition(
              r,
              s,
              a,
              o_cellMeasurerCache.getHeight(r),
            );
          }
        },
      },
    ],
    [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          if (e.scrollTop !== undefined && t.scrollTop !== e.scrollTop) {
            return {
              isScrolling: true,
              scrollTop: e.scrollTop,
            };
          }
          return null;
        },
      },
    ],
  );
  return t;
})(L.PureComponent);
P(g, "propTypes", null);
const eq = _;
function eK() {}
P(eq, "defaultProps", {
  autoHeight: false,
  keyMapper: function (e) {
    return e;
  },
  onCellsRendered: eK,
  onScroll: eK,
  overscanByPixels: 20,
  role: "grid",
  scrollingResetTimeInterval: 150,
  style: {},
  tabIndex: 0,
  rowDirection: "ltr",
});
H(eq);
const eX = (() => {
  function e() {
    const t = this;
    const o =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    S(this, e);
    P(this, "_cellMeasurerCache", undefined);
    P(this, "_columnIndexOffset", undefined);
    P(this, "_rowIndexOffset", undefined);
    P(this, "columnWidth", function (e) {
      const e_index = e.index;
      t._cellMeasurerCache.columnWidth({
        index: e_index + t._columnIndexOffset,
      });
    });
    P(this, "rowHeight", function (e) {
      const e_index = e.index;
      t._cellMeasurerCache.rowHeight({
        index: e_index + t._rowIndexOffset,
      });
    });
    const o_cellMeasurerCache = o.cellMeasurerCache;
    const o_columnIndexOffset = o.columnIndexOffset;
    const o_rowIndexOffset = o.rowIndexOffset;
    this._cellMeasurerCache = o_cellMeasurerCache;
    this._columnIndexOffset =
      o_columnIndexOffset === undefined ? 0 : o_columnIndexOffset;
    this._rowIndexOffset =
      o_rowIndexOffset === undefined ? 0 : o_rowIndexOffset;
  }
  y(e, [
    {
      key: "clear",
      value: function (e, t) {
        this._cellMeasurerCache.clear(
          e + this._rowIndexOffset,
          t + this._columnIndexOffset,
        );
      },
    },
    {
      key: "clearAll",
      value: function () {
        this._cellMeasurerCache.clearAll();
      },
    },
    {
      key: "hasFixedHeight",
      value: function () {
        return this._cellMeasurerCache.hasFixedHeight();
      },
    },
    {
      key: "hasFixedWidth",
      value: function () {
        return this._cellMeasurerCache.hasFixedWidth();
      },
    },
    {
      key: "getHeight",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this._cellMeasurerCache.getHeight(
          e + this._rowIndexOffset,
          t + this._columnIndexOffset,
        );
      },
    },
    {
      key: "getWidth",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this._cellMeasurerCache.getWidth(
          e + this._rowIndexOffset,
          t + this._columnIndexOffset,
        );
      },
    },
    {
      key: "has",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return this._cellMeasurerCache.has(
          e + this._rowIndexOffset,
          t + this._columnIndexOffset,
        );
      },
    },
    {
      key: "set",
      value: function (e, t, o, i) {
        this._cellMeasurerCache.set(
          e + this._rowIndexOffset,
          t + this._columnIndexOffset,
          o,
          i,
        );
      },
    },
    {
      key: "defaultHeight",
      get: function () {
        return this._cellMeasurerCache.defaultHeight;
      },
    },
    {
      key: "defaultWidth",
      get: function () {
        return this._cellMeasurerCache.defaultWidth;
      },
    },
  ]);
  return e;
})();
const eZ = ((e) => {
  function t(e, o) {
    S(this, t);
    i = x(this, T(t).call(this, e, o));
    P(b(i), "state", {
      scrollLeft: 0,
      scrollTop: 0,
      scrollbarSize: 0,
      showHorizontalScrollbar: false,
      showVerticalScrollbar: false,
    });
    P(b(i), "_deferredInvalidateColumnIndex", null);
    P(b(i), "_deferredInvalidateRowIndex", null);
    P(b(i), "_bottomLeftGridRef", function (e) {
      i._bottomLeftGrid = e;
    });
    P(b(i), "_bottomRightGridRef", function (e) {
      i._bottomRightGrid = e;
    });
    P(b(i), "_cellRendererBottomLeftGrid", function (e) {
      const e_rowIndex = e.rowIndex;
      const o = j(e, ["rowIndex"]);
      const i_props = i.props;
      const n_cellRenderer = i_props.cellRenderer;
      const n_fixedRowCount = i_props.fixedRowCount;
      if (e_rowIndex === i_props.rowCount - n_fixedRowCount) {
        return L.createElement("div", {
          key: o.key,
          style: {
            ...o.style,
            height: 20,
          },
        });
      }
      return n_cellRenderer({
        ...o,
        parent: b(i),
        rowIndex: e_rowIndex + n_fixedRowCount,
      });
    });
    P(b(i), "_cellRendererBottomRightGrid", function (e) {
      const e_columnIndex = e.columnIndex;
      const e_rowIndex = e.rowIndex;
      const n = j(e, ["columnIndex", "rowIndex"]);
      const i_props = i.props;
      const r_cellRenderer = i_props.cellRenderer;
      const r_fixedColumnCount = i_props.fixedColumnCount;
      const r_fixedRowCount = i_props.fixedRowCount;
      return r_cellRenderer({
        ...n,
        columnIndex: e_columnIndex + r_fixedColumnCount,
        parent: b(i),
        rowIndex: e_rowIndex + r_fixedRowCount,
      });
    });
    P(b(i), "_cellRendererTopRightGrid", function (e) {
      const e_columnIndex = e.columnIndex;
      const o = j(e, ["columnIndex"]);
      const i_props = i.props;
      const n_cellRenderer = i_props.cellRenderer;
      const n_columnCount = i_props.columnCount;
      const n_fixedColumnCount = i_props.fixedColumnCount;
      if (e_columnIndex === n_columnCount - n_fixedColumnCount) {
        return L.createElement("div", {
          key: o.key,
          style: {
            ...o.style,
            width: 20,
          },
        });
      }
      return n_cellRenderer({
        ...o,
        columnIndex: e_columnIndex + n_fixedColumnCount,
        parent: b(i),
      });
    });
    P(b(i), "_columnWidthRightGrid", function (e) {
      const e_index = e.index;
      const i_props = i.props;
      const o_columnCount = i_props.columnCount;
      const o_fixedColumnCount = i_props.fixedColumnCount;
      const o_columnWidth = i_props.columnWidth;
      const i_state = i.state;
      const s_scrollbarSize = i_state.scrollbarSize;
      if (
        i_state.showHorizontalScrollbar &&
        e_index === o_columnCount - o_fixedColumnCount
      ) {
        return s_scrollbarSize;
      }
      if (typeof o_columnWidth === "function") {
        return o_columnWidth({
          index: e_index + o_fixedColumnCount,
        });
      }
      return o_columnWidth;
    });
    P(b(i), "_onScroll", function (e) {
      const e_scrollLeft = e.scrollLeft;
      const e_scrollTop = e.scrollTop;
      i.setState({
        scrollLeft: e_scrollLeft,
        scrollTop: e_scrollTop,
      });
      const onScroll = i.props.onScroll;
      if (onScroll) {
        onScroll(e);
      }
    });
    P(b(i), "_onScrollbarPresenceChange", function (e) {
      const e_horizontal = e.horizontal;
      const e_size = e.size;
      const e_vertical = e.vertical;
      const i_state = i.state;
      const r_showHorizontalScrollbar = i_state.showHorizontalScrollbar;
      const r_showVerticalScrollbar = i_state.showVerticalScrollbar;
      if (
        e_horizontal !== r_showHorizontalScrollbar ||
        e_vertical !== r_showVerticalScrollbar
      ) {
        i.setState({
          scrollbarSize: e_size,
          showHorizontalScrollbar: e_horizontal,
          showVerticalScrollbar: e_vertical,
        });
        const a = i.props.onScrollbarPresenceChange;
        if (typeof a === "function") {
          a({
            horizontal: e_horizontal,
            size: e_size,
            vertical: e_vertical,
          });
        }
      }
    });
    P(b(i), "_onScrollLeft", function (e) {
      const e_scrollLeft = e.scrollLeft;
      i._onScroll({
        scrollLeft: e_scrollLeft,
        scrollTop: i.state.scrollTop,
      });
    });
    P(b(i), "_onScrollTop", function (e) {
      const e_scrollTop = e.scrollTop;
      i._onScroll({
        scrollTop: e_scrollTop,
        scrollLeft: i.state.scrollLeft,
      });
    });
    P(b(i), "_rowHeightBottomGrid", function (e) {
      const e_index = e.index;
      const i_props = i.props;
      const o_fixedRowCount = i_props.fixedRowCount;
      const o_rowCount = i_props.rowCount;
      const o_rowHeight = i_props.rowHeight;
      const i_state = i.state;
      const s_scrollbarSize = i_state.scrollbarSize;
      if (
        i_state.showVerticalScrollbar &&
        e_index === o_rowCount - o_fixedRowCount
      ) {
        return s_scrollbarSize;
      }
      if (typeof o_rowHeight === "function") {
        return o_rowHeight({
          index: e_index + o_fixedRowCount,
        });
      }
      return o_rowHeight;
    });
    P(b(i), "_topLeftGridRef", function (e) {
      i._topLeftGrid = e;
    });
    P(b(i), "_topRightGridRef", function (e) {
      i._topRightGrid = e;
    });
    var i;
    const e_deferredMeasurementCache = e.deferredMeasurementCache;
    const e_fixedColumnCount = e.fixedColumnCount;
    const e_fixedRowCount = e.fixedRowCount;
    i._maybeCalculateCachedStyles(true);
    if (e_deferredMeasurementCache) {
      i._deferredMeasurementCacheBottomLeftGrid =
        e_fixedRowCount > 0
          ? new eX({
              cellMeasurerCache: e_deferredMeasurementCache,
              columnIndexOffset: 0,
              rowIndexOffset: e_fixedRowCount,
            })
          : e_deferredMeasurementCache;
      i._deferredMeasurementCacheBottomRightGrid =
        e_fixedColumnCount > 0 || e_fixedRowCount > 0
          ? new eX({
              cellMeasurerCache: e_deferredMeasurementCache,
              columnIndexOffset: e_fixedColumnCount,
              rowIndexOffset: e_fixedRowCount,
            })
          : e_deferredMeasurementCache;
      i._deferredMeasurementCacheTopRightGrid =
        e_fixedColumnCount > 0
          ? new eX({
              cellMeasurerCache: e_deferredMeasurementCache,
              columnIndexOffset: e_fixedColumnCount,
              rowIndexOffset: 0,
            })
          : e_deferredMeasurementCache;
    }
    return i;
  }
  M(t, e);
  y(
    t,
    [
      {
        key: "forceUpdateGrids",
        value: function () {
          if (this._bottomLeftGrid) {
            this._bottomLeftGrid.forceUpdate();
          }
          if (this._bottomRightGrid) {
            this._bottomRightGrid.forceUpdate();
          }
          if (this._topLeftGrid) {
            this._topLeftGrid.forceUpdate();
          }
          if (this._topRightGrid) {
            this._topRightGrid.forceUpdate();
          }
        },
      },
      {
        key: "invalidateCellSizeAfterRender",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          const e_columnIndex = e.columnIndex;
          const o = e_columnIndex === undefined ? 0 : e_columnIndex;
          const e_rowIndex = e.rowIndex;
          const n = e_rowIndex === undefined ? 0 : e_rowIndex;
          this._deferredInvalidateColumnIndex =
            typeof this._deferredInvalidateColumnIndex === "number"
              ? Math.min(this._deferredInvalidateColumnIndex, o)
              : o;
          this._deferredInvalidateRowIndex =
            typeof this._deferredInvalidateRowIndex === "number"
              ? Math.min(this._deferredInvalidateRowIndex, n)
              : n;
        },
      },
      {
        key: "measureAllCells",
        value: function () {
          if (this._bottomLeftGrid) {
            this._bottomLeftGrid.measureAllCells();
          }
          if (this._bottomRightGrid) {
            this._bottomRightGrid.measureAllCells();
          }
          if (this._topLeftGrid) {
            this._topLeftGrid.measureAllCells();
          }
          if (this._topRightGrid) {
            this._topRightGrid.measureAllCells();
          }
        },
      },
      {
        key: "recomputeGridSize",
        value: function () {
          const e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          const e_columnIndex = e.columnIndex;
          const o = e_columnIndex === undefined ? 0 : e_columnIndex;
          const e_rowIndex = e.rowIndex;
          const n = e_rowIndex === undefined ? 0 : e_rowIndex;
          const props = this.props;
          const r_fixedColumnCount = props.fixedColumnCount;
          const r_fixedRowCount = props.fixedRowCount;
          const a = Math.max(0, o - r_fixedColumnCount);
          const c = Math.max(0, n - r_fixedRowCount);
          if (this._bottomLeftGrid) {
            this._bottomLeftGrid.recomputeGridSize({
              columnIndex: o,
              rowIndex: c,
            });
          }
          if (this._bottomRightGrid) {
            this._bottomRightGrid.recomputeGridSize({
              columnIndex: a,
              rowIndex: c,
            });
          }
          if (this._topLeftGrid) {
            this._topLeftGrid.recomputeGridSize({
              columnIndex: o,
              rowIndex: n,
            });
          }
          if (this._topRightGrid) {
            this._topRightGrid.recomputeGridSize({
              columnIndex: a,
              rowIndex: n,
            });
          }
          this._leftGridWidth = null;
          this._topGridHeight = null;
          this._maybeCalculateCachedStyles(true);
        },
      },
      {
        key: "componentDidMount",
        value: function () {
          const props = this.props;
          const e_scrollLeft = props.scrollLeft;
          const e_scrollTop = props.scrollTop;
          if (e_scrollLeft > 0 || e_scrollTop > 0) {
            const i = {};
            if (e_scrollLeft > 0) {
              i.scrollLeft = e_scrollLeft;
            }
            if (e_scrollTop > 0) {
              i.scrollTop = e_scrollTop;
            }
            this.setState(i);
          }
          this._handleInvalidatedGridSize();
        },
      },
      {
        key: "componentDidUpdate",
        value: function () {
          this._handleInvalidatedGridSize();
        },
      },
      {
        key: "render",
        value: function () {
          const props = this.props;
          const e_onScroll = props.onScroll;
          const e_onSectionRendered = props.onSectionRendered;
          props.onScrollbarPresenceChange;
          props.scrollLeft;
          const e_scrollToColumn = props.scrollToColumn;
          props.scrollTop;
          const e_scrollToRow = props.scrollToRow;
          const r = j(props, [
            "onScroll",
            "onSectionRendered",
            "onScrollbarPresenceChange",
            "scrollLeft",
            "scrollToColumn",
            "scrollTop",
            "scrollToRow",
          ]);
          this._prepareForRender();
          if (this.props.width === 0 || this.props.height === 0) {
            return null;
          }
          const state = this.state;
          const l_scrollLeft = state.scrollLeft;
          const l_scrollTop = state.scrollTop;
          return L.createElement(
            "div",
            {
              style: this._containerOuterStyle,
            },
            L.createElement(
              "div",
              {
                style: this._containerTopStyle,
              },
              this._renderTopLeftGrid(r),
              this._renderTopRightGrid({
                ...r,
                onScroll: e_onScroll,
                scrollLeft: l_scrollLeft,
              }),
            ),
            L.createElement(
              "div",
              {
                style: this._containerBottomStyle,
              },
              this._renderBottomLeftGrid({
                ...r,
                onScroll: e_onScroll,
                scrollTop: l_scrollTop,
              }),
              this._renderBottomRightGrid({
                ...r,
                onScroll: e_onScroll,
                onSectionRendered: e_onSectionRendered,
                scrollLeft: l_scrollLeft,
                scrollToColumn: e_scrollToColumn,
                scrollToRow: e_scrollToRow,
                scrollTop: l_scrollTop,
              }),
            ),
          );
        },
      },
      {
        key: "_getBottomGridHeight",
        value: function (e) {
          return e.height - this._getTopGridHeight(e);
        },
      },
      {
        key: "_getLeftGridWidth",
        value: function (e) {
          const e_fixedColumnCount = e.fixedColumnCount;
          const e_columnWidth = e.columnWidth;
          if (this._leftGridWidth == null) {
            if (typeof e_columnWidth === "function") {
              let i = 0;
              for (let n = 0; n < e_fixedColumnCount; n++) {
                i += e_columnWidth({
                  index: n,
                });
              }
              this._leftGridWidth = i;
            } else {
              this._leftGridWidth = e_columnWidth * e_fixedColumnCount;
            }
          }
          return this._leftGridWidth;
        },
      },
      {
        key: "_getRightGridWidth",
        value: function (e) {
          return e.width - this._getLeftGridWidth(e);
        },
      },
      {
        key: "_getTopGridHeight",
        value: function (e) {
          const e_fixedRowCount = e.fixedRowCount;
          const e_rowHeight = e.rowHeight;
          if (this._topGridHeight == null) {
            if (typeof e_rowHeight === "function") {
              let i = 0;
              for (let n = 0; n < e_fixedRowCount; n++) {
                i += e_rowHeight({
                  index: n,
                });
              }
              this._topGridHeight = i;
            } else {
              this._topGridHeight = e_rowHeight * e_fixedRowCount;
            }
          }
          return this._topGridHeight;
        },
      },
      {
        key: "_handleInvalidatedGridSize",
        value: function () {
          if (typeof this._deferredInvalidateColumnIndex === "number") {
            const e = this._deferredInvalidateColumnIndex;
            const t = this._deferredInvalidateRowIndex;
            this._deferredInvalidateColumnIndex = null;
            this._deferredInvalidateRowIndex = null;
            this.recomputeGridSize({
              columnIndex: e,
              rowIndex: t,
            });
            this.forceUpdate();
          }
        },
      },
      {
        key: "_maybeCalculateCachedStyles",
        value: function (e) {
          const props = this.props;
          const t_columnWidth = props.columnWidth;
          const t_enableFixedColumnScroll = props.enableFixedColumnScroll;
          const t_enableFixedRowScroll = props.enableFixedRowScroll;
          const t_height = props.height;
          const t_fixedColumnCount = props.fixedColumnCount;
          const t_fixedRowCount = props.fixedRowCount;
          const t_rowHeight = props.rowHeight;
          const t_style = props.style;
          const t_styleBottomLeftGrid = props.styleBottomLeftGrid;
          const t_styleBottomRightGrid = props.styleBottomRightGrid;
          const t_styleTopLeftGrid = props.styleTopLeftGrid;
          const t_styleTopRightGrid = props.styleTopRightGrid;
          const t_width = props.width;
          const g =
            e ||
            t_height !== this._lastRenderedHeight ||
            t_width !== this._lastRenderedWidth;
          const _ =
            e ||
            t_columnWidth !== this._lastRenderedColumnWidth ||
            t_fixedColumnCount !== this._lastRenderedFixedColumnCount;
          const m =
            e ||
            t_fixedRowCount !== this._lastRenderedFixedRowCount ||
            t_rowHeight !== this._lastRenderedRowHeight;
          if (e || g || t_style !== this._lastRenderedStyle) {
            this._containerOuterStyle = {
              height: t_height,
              overflow: "visible",
              width: t_width,
              ...t_style,
            };
          }
          if (e || g || m) {
            this._containerTopStyle = {
              height: this._getTopGridHeight(this.props),
              position: "relative",
              width: t_width,
            };
            this._containerBottomStyle = {
              height: t_height - this._getTopGridHeight(this.props),
              overflow: "visible",
              position: "relative",
              width: t_width,
            };
          }
          if (
            e ||
            t_styleBottomLeftGrid !== this._lastRenderedStyleBottomLeftGrid
          ) {
            this._bottomLeftGridStyle = {
              left: 0,
              overflowX: "hidden",
              overflowY: t_enableFixedColumnScroll ? "auto" : "hidden",
              position: "absolute",
              ...t_styleBottomLeftGrid,
            };
          }
          if (
            e ||
            _ ||
            t_styleBottomRightGrid !== this._lastRenderedStyleBottomRightGrid
          ) {
            this._bottomRightGridStyle = {
              left: this._getLeftGridWidth(this.props),
              position: "absolute",
              ...t_styleBottomRightGrid,
            };
          }
          if (e || t_styleTopLeftGrid !== this._lastRenderedStyleTopLeftGrid) {
            this._topLeftGridStyle = {
              left: 0,
              overflowX: "hidden",
              overflowY: "hidden",
              position: "absolute",
              top: 0,
              ...t_styleTopLeftGrid,
            };
          }
          if (
            e ||
            _ ||
            t_styleTopRightGrid !== this._lastRenderedStyleTopRightGrid
          ) {
            this._topRightGridStyle = {
              left: this._getLeftGridWidth(this.props),
              overflowX: t_enableFixedRowScroll ? "auto" : "hidden",
              overflowY: "hidden",
              position: "absolute",
              top: 0,
              ...t_styleTopRightGrid,
            };
          }
          this._lastRenderedColumnWidth = t_columnWidth;
          this._lastRenderedFixedColumnCount = t_fixedColumnCount;
          this._lastRenderedFixedRowCount = t_fixedRowCount;
          this._lastRenderedHeight = t_height;
          this._lastRenderedRowHeight = t_rowHeight;
          this._lastRenderedStyle = t_style;
          this._lastRenderedStyleBottomLeftGrid = t_styleBottomLeftGrid;
          this._lastRenderedStyleBottomRightGrid = t_styleBottomRightGrid;
          this._lastRenderedStyleTopLeftGrid = t_styleTopLeftGrid;
          this._lastRenderedStyleTopRightGrid = t_styleTopRightGrid;
          this._lastRenderedWidth = t_width;
        },
      },
      {
        key: "_prepareForRender",
        value: function () {
          if (
            this._lastRenderedColumnWidth !== this.props.columnWidth ||
            this._lastRenderedFixedColumnCount !== this.props.fixedColumnCount
          ) {
            this._leftGridWidth = null;
          }
          if (
            this._lastRenderedFixedRowCount !== this.props.fixedRowCount ||
            this._lastRenderedRowHeight !== this.props.rowHeight
          ) {
            this._topGridHeight = null;
          }
          this._maybeCalculateCachedStyles();
          this._lastRenderedColumnWidth = this.props.columnWidth;
          this._lastRenderedFixedColumnCount = this.props.fixedColumnCount;
          this._lastRenderedFixedRowCount = this.props.fixedRowCount;
          this._lastRenderedRowHeight = this.props.rowHeight;
        },
      },
      {
        key: "_renderBottomLeftGrid",
        value: function (e) {
          const e_enableFixedColumnScroll = e.enableFixedColumnScroll;
          const e_fixedColumnCount = e.fixedColumnCount;
          const e_fixedRowCount = e.fixedRowCount;
          const e_rowCount = e.rowCount;
          const e_hideBottomLeftGridScrollbar = e.hideBottomLeftGridScrollbar;
          const showVerticalScrollbar = this.state.showVerticalScrollbar;
          if (!e_fixedColumnCount) {
            return null;
          }
          const s = this._getBottomGridHeight(e);
          const a = this._getLeftGridWidth(e);
          const c = this.state.showVerticalScrollbar
            ? this.state.scrollbarSize
            : 0;
          const d = L.createElement(
            xA,
            E({}, e, {
              cellRenderer: this._cellRendererBottomLeftGrid,
              className: this.props.classNameBottomLeftGrid,
              columnCount: e_fixedColumnCount,
              deferredMeasurementCache:
                this._deferredMeasurementCacheBottomLeftGrid,
              height: s,
              onScroll: e_enableFixedColumnScroll
                ? this._onScrollTop
                : undefined,
              ref: this._bottomLeftGridRef,
              rowCount:
                Math.max(0, e_rowCount - e_fixedRowCount) +
                +!!showVerticalScrollbar,
              rowHeight: this._rowHeightBottomGrid,
              style: this._bottomLeftGridStyle,
              tabIndex: null,
              width: e_hideBottomLeftGridScrollbar ? a + c : a,
            }),
          );
          if (e_hideBottomLeftGridScrollbar) {
            return L.createElement(
              "div",
              {
                className: "BottomLeftGrid_ScrollWrapper",
                style: {
                  ...this._bottomLeftGridStyle,
                  height: s,
                  width: a,
                  overflowY: "hidden",
                },
              },
              d,
            );
          }
          return d;
        },
      },
      {
        key: "_renderBottomRightGrid",
        value: function (e) {
          const e_columnCount = e.columnCount;
          const e_fixedColumnCount = e.fixedColumnCount;
          const e_fixedRowCount = e.fixedRowCount;
          const e_rowCount = e.rowCount;
          const e_scrollToColumn = e.scrollToColumn;
          const e_scrollToRow = e.scrollToRow;
          return L.createElement(
            xA,
            E({}, e, {
              cellRenderer: this._cellRendererBottomRightGrid,
              className: this.props.classNameBottomRightGrid,
              columnCount: Math.max(0, e_columnCount - e_fixedColumnCount),
              columnWidth: this._columnWidthRightGrid,
              deferredMeasurementCache:
                this._deferredMeasurementCacheBottomRightGrid,
              height: this._getBottomGridHeight(e),
              onScroll: this._onScroll,
              onScrollbarPresenceChange: this._onScrollbarPresenceChange,
              ref: this._bottomRightGridRef,
              rowCount: Math.max(0, e_rowCount - e_fixedRowCount),
              rowHeight: this._rowHeightBottomGrid,
              scrollToColumn: e_scrollToColumn - e_fixedColumnCount,
              scrollToRow: e_scrollToRow - e_fixedRowCount,
              style: this._bottomRightGridStyle,
              width: this._getRightGridWidth(e),
            }),
          );
        },
      },
      {
        key: "_renderTopLeftGrid",
        value: function (e) {
          const e_fixedColumnCount = e.fixedColumnCount;
          const e_fixedRowCount = e.fixedRowCount;
          if (e_fixedColumnCount && e_fixedRowCount) {
            return L.createElement(
              xA,
              E({}, e, {
                className: this.props.classNameTopLeftGrid,
                columnCount: e_fixedColumnCount,
                height: this._getTopGridHeight(e),
                ref: this._topLeftGridRef,
                rowCount: e_fixedRowCount,
                style: this._topLeftGridStyle,
                tabIndex: null,
                width: this._getLeftGridWidth(e),
              }),
            );
          }
          return null;
        },
      },
      {
        key: "_renderTopRightGrid",
        value: function (e) {
          const e_columnCount = e.columnCount;
          const e_enableFixedRowScroll = e.enableFixedRowScroll;
          const e_fixedColumnCount = e.fixedColumnCount;
          const e_fixedRowCount = e.fixedRowCount;
          const e_scrollLeft = e.scrollLeft;
          const e_hideTopRightGridScrollbar = e.hideTopRightGridScrollbar;
          const state = this.state;
          const s_showHorizontalScrollbar = state.showHorizontalScrollbar;
          const s_scrollbarSize = state.scrollbarSize;
          if (!e_fixedRowCount) {
            return null;
          }
          const d = this._getTopGridHeight(e);
          const h = this._getRightGridWidth(e);
          let u = d;
          let _topRightGridStyle = this._topRightGridStyle;
          if (e_hideTopRightGridScrollbar) {
            u = d + (s_showHorizontalScrollbar ? s_scrollbarSize : 0);
            _topRightGridStyle = {
              ...this._topRightGridStyle,
              left: 0,
            };
          }
          const p = L.createElement(
            xA,
            E({}, e, {
              cellRenderer: this._cellRendererTopRightGrid,
              className: this.props.classNameTopRightGrid,
              columnCount:
                Math.max(0, e_columnCount - e_fixedColumnCount) +
                +!!s_showHorizontalScrollbar,
              columnWidth: this._columnWidthRightGrid,
              deferredMeasurementCache:
                this._deferredMeasurementCacheTopRightGrid,
              height: u,
              onScroll: e_enableFixedRowScroll ? this._onScrollLeft : undefined,
              ref: this._topRightGridRef,
              rowCount: e_fixedRowCount,
              scrollLeft: e_scrollLeft,
              style: _topRightGridStyle,
              tabIndex: null,
              width: h,
            }),
          );
          if (e_hideTopRightGridScrollbar) {
            return L.createElement(
              "div",
              {
                className: "TopRightGrid_ScrollWrapper",
                style: {
                  ...this._topRightGridStyle,
                  height: d,
                  width: h,
                  overflowX: "hidden",
                },
              },
              p,
            );
          }
          return p;
        },
      },
    ],
    [
      {
        key: "getDerivedStateFromProps",
        value: function (e, t) {
          if (e.scrollLeft !== t.scrollLeft || e.scrollTop !== t.scrollTop) {
            return {
              scrollLeft:
                e.scrollLeft != null && e.scrollLeft >= 0
                  ? e.scrollLeft
                  : t.scrollLeft,
              scrollTop:
                e.scrollTop != null && e.scrollTop >= 0
                  ? e.scrollTop
                  : t.scrollTop,
            };
          }
          return null;
        },
      },
    ],
  );
  return t;
})(L.PureComponent);
function headerRowRenderer(e) {
  const e_className = e.className;
  const e_columns = e.columns;
  const e_style = e.style;
  return L.createElement(
    "div",
    {
      className: e_className,
      role: "row",
      style: e_style,
    },
    e_columns,
  );
}
P(eZ, "defaultProps", {
  classNameBottomLeftGrid: "",
  classNameBottomRightGrid: "",
  classNameTopLeftGrid: "",
  classNameTopRightGrid: "",
  enableFixedColumnScroll: false,
  enableFixedRowScroll: false,
  fixedColumnCount: 0,
  fixedRowCount: 0,
  scrollToColumn: -1,
  scrollToRow: -1,
  style: {},
  styleBottomLeftGrid: {},
  styleBottomRightGrid: {},
  styleTopLeftGrid: {},
  styleTopRightGrid: {},
  hideTopRightGridScrollbar: false,
  hideBottomLeftGridScrollbar: false,
});
eZ.propTypes = {};
H(eZ);
((e) => {
  function t(e, o) {
    let i;
    S(this, t);
    i = x(this, T(t).call(this, e, o));
    i.state = {
      clientHeight: 0,
      clientWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      scrollWidth: 0,
    };
    i._onScroll = i._onScroll.bind(b(i));
    return i;
  }
  M(t, e);
  y(t, [
    {
      key: "render",
      value: function () {
        const children = this.props.children;
        const state = this.state;
        const t_clientHeight = state.clientHeight;
        const t_clientWidth = state.clientWidth;
        const t_scrollHeight = state.scrollHeight;
        const t_scrollLeft = state.scrollLeft;
        const t_scrollTop = state.scrollTop;
        const t_scrollWidth = state.scrollWidth;
        return children({
          clientHeight: t_clientHeight,
          clientWidth: t_clientWidth,
          onScroll: this._onScroll,
          scrollHeight: t_scrollHeight,
          scrollLeft: t_scrollLeft,
          scrollTop: t_scrollTop,
          scrollWidth: t_scrollWidth,
        });
      },
    },
    {
      key: "_onScroll",
      value: function (e) {
        const e_clientHeight = e.clientHeight;
        const e_clientWidth = e.clientWidth;
        const e_scrollHeight = e.scrollHeight;
        const e_scrollLeft = e.scrollLeft;
        const e_scrollTop = e.scrollTop;
        const e_scrollWidth = e.scrollWidth;
        this.setState({
          clientHeight: e_clientHeight,
          clientWidth: e_clientWidth,
          scrollHeight: e_scrollHeight,
          scrollLeft: e_scrollLeft,
          scrollTop: e_scrollTop,
          scrollWidth: e_scrollWidth,
        });
      },
    },
  ]);
  return t;
})(L.PureComponent).propTypes = {};
headerRowRenderer.propTypes = null;
const eQ = "DESC";
function e0(e) {
  const e_sortDirection = e.sortDirection;
  const o = F("ReactVirtualized__Table__sortableHeaderIcon", {
    "ReactVirtualized__Table__sortableHeaderIcon--ASC":
      e_sortDirection === "ASC",
    "ReactVirtualized__Table__sortableHeaderIcon--DESC": e_sortDirection === eQ,
  });
  return L.createElement(
    "svg",
    {
      className: o,
      width: 18,
      height: 18,
      viewBox: "0 0 24 24",
    },
    e_sortDirection === "ASC"
      ? L.createElement("path", {
          d: "M7 14l5-5 5 5z",
        })
      : L.createElement("path", {
          d: "M7 10l5 5 5-5z",
        }),
    L.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none",
    }),
  );
}
function headerRenderer(e) {
  const e_dataKey = e.dataKey;
  const e_label = e.label;
  const e_sortBy = e.sortBy;
  const e_sortDirection = e.sortDirection;
  const r = [
    L.createElement(
      "span",
      {
        className: "ReactVirtualized__Table__headerTruncatedText",
        key: "label",
        title: typeof e_label === "string" ? e_label : null,
      },
      e_label,
    ),
  ];
  if (e_sortBy === e_dataKey) {
    r.push(
      L.createElement(e0, {
        key: "SortIndicator",
        sortDirection: e_sortDirection,
      }),
    );
  }
  return r;
}
function rowRenderer(e) {
  const e_className = e.className;
  const e_columns = e.columns;
  const e_index = e.index;
  const e_key = e.key;
  const e_onRowClick = e.onRowClick;
  const e_onRowDoubleClick = e.onRowDoubleClick;
  const e_onRowMouseOut = e.onRowMouseOut;
  const e_onRowMouseOver = e.onRowMouseOver;
  const e_onRowRightClick = e.onRowRightClick;
  const e_rowData = e.rowData;
  const e_style = e.style;
  const u = {
    "aria-rowindex": e_index + 1,
  };
  if (
    e_onRowClick ||
    e_onRowDoubleClick ||
    e_onRowMouseOut ||
    e_onRowMouseOver ||
    e_onRowRightClick
  ) {
    u["aria-label"] = "row";
    u.tabIndex = 0;
    if (e_onRowClick) {
      u.onClick = function (e) {
        return e_onRowClick({
          event: e,
          index: e_index,
          rowData: e_rowData,
        });
      };
    }
    if (e_onRowDoubleClick) {
      u.onDoubleClick = function (e) {
        return e_onRowDoubleClick({
          event: e,
          index: e_index,
          rowData: e_rowData,
        });
      };
    }
    if (e_onRowMouseOut) {
      u.onMouseOut = function (e) {
        return e_onRowMouseOut({
          event: e,
          index: e_index,
          rowData: e_rowData,
        });
      };
    }
    if (e_onRowMouseOver) {
      u.onMouseOver = function (e) {
        return e_onRowMouseOver({
          event: e,
          index: e_index,
          rowData: e_rowData,
        });
      };
    }
    if (e_onRowRightClick) {
      u.onContextMenu = function (e) {
        return e_onRowRightClick({
          event: e,
          index: e_index,
          rowData: e_rowData,
        });
      };
    }
  }
  return L.createElement(
    "div",
    E({}, u, {
      className: e_className,
      key: e_key,
      role: "row",
      style: e_style,
    }),
    e_columns,
  );
}
e0.propTypes = {};
headerRenderer.propTypes = null;
rowRenderer.propTypes = null;
const e5 = ((e) => {
  function t() {
    S(this, t);
    return x(this, T(t).apply(this, arguments));
  }
  M(t, e);
  return t;
})(L.Component);
P(e5, "defaultProps", {
  cellDataGetter: function (e) {
    const e_dataKey = e.dataKey;
    const e_rowData = e.rowData;
    if (typeof e_rowData.get === "function") {
      return e_rowData.get(e_dataKey);
    }
    return e_rowData[e_dataKey];
  },
  cellRenderer: function (e) {
    const e_cellData = e.cellData;
    if (e_cellData == null) {
      return "";
    }
    return String(e_cellData);
  },
  defaultSortDirection: "ASC",
  flexGrow: 0,
  flexShrink: 1,
  headerRenderer,
  style: {},
});
e5.propTypes = {};
const e8 = ((e) => {
  function t(e) {
    let o;
    S(this, t);
    o = x(this, T(t).call(this, e));
    o.state = {
      scrollbarWidth: 0,
    };
    o._createColumn = o._createColumn.bind(b(o));
    o._createRow = o._createRow.bind(b(o));
    o._onScroll = o._onScroll.bind(b(o));
    o._onSectionRendered = o._onSectionRendered.bind(b(o));
    o._setRef = o._setRef.bind(b(o));
    return o;
  }
  M(t, e);
  y(t, [
    {
      key: "forceUpdateGrid",
      value: function () {
        if (this.Grid) {
          this.Grid.forceUpdate();
        }
      },
    },
    {
      key: "getOffsetForRow",
      value: function (e) {
        const e_alignment = e.alignment;
        const e_index = e.index;
        if (this.Grid) {
          return this.Grid.getOffsetForCell({
            alignment: e_alignment,
            rowIndex: e_index,
          }).scrollTop;
        }
        return 0;
      },
    },
    {
      key: "invalidateCellSizeAfterRender",
      value: function (e) {
        const e_columnIndex = e.columnIndex;
        const e_rowIndex = e.rowIndex;
        if (this.Grid) {
          this.Grid.invalidateCellSizeAfterRender({
            rowIndex: e_rowIndex,
            columnIndex: e_columnIndex,
          });
        }
      },
    },
    {
      key: "measureAllRows",
      value: function () {
        if (this.Grid) {
          this.Grid.measureAllCells();
        }
      },
    },
    {
      key: "recomputeGridSize",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        const e_columnIndex = e.columnIndex;
        const e_rowIndex = e.rowIndex;
        if (this.Grid) {
          this.Grid.recomputeGridSize({
            rowIndex: e_rowIndex === undefined ? 0 : e_rowIndex,
            columnIndex: e_columnIndex === undefined ? 0 : e_columnIndex,
          });
        }
      },
    },
    {
      key: "recomputeRowHeights",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this.Grid) {
          this.Grid.recomputeGridSize({
            rowIndex: e,
          });
        }
      },
    },
    {
      key: "scrollToPosition",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this.Grid) {
          this.Grid.scrollToPosition({
            scrollTop: e,
          });
        }
      },
    },
    {
      key: "scrollToRow",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        if (this.Grid) {
          this.Grid.scrollToCell({
            columnIndex: 0,
            rowIndex: e,
          });
        }
      },
    },
    {
      key: "getScrollbarWidth",
      value: function () {
        if (this.Grid) {
          const e = eh.findDOMNode(this.Grid);
          const t = e.clientWidth || 0;
          return (e.offsetWidth || 0) - t;
        }
        return 0;
      },
    },
    {
      key: "componentDidMount",
      value: function () {
        this._setScrollbarWidth();
      },
    },
    {
      key: "componentDidUpdate",
      value: function () {
        this._setScrollbarWidth();
      },
    },
    {
      key: "render",
      value: function () {
        const e = this;
        const props = this.props;
        const t_children = props.children;
        const t_className = props.className;
        const t_disableHeader = props.disableHeader;
        const t_gridClassName = props.gridClassName;
        const t_gridStyle = props.gridStyle;
        const t_headerHeight = props.headerHeight;
        const t_headerRowRenderer = props.headerRowRenderer;
        const t_height = props.height;
        const d = props.id;
        const t_noRowsRenderer = props.noRowsRenderer;
        const t_rowClassName = props.rowClassName;
        const t_rowStyle = props.rowStyle;
        const t_scrollToIndex = props.scrollToIndex;
        const t_style = props.style;
        const t_width = props.width;
        const scrollbarWidth = this.state.scrollbarWidth;
        const v =
          typeof t_rowClassName === "function"
            ? t_rowClassName({
                index: -1,
              })
            : t_rowClassName;
        const S =
          typeof t_rowStyle === "function"
            ? t_rowStyle({
                index: -1,
              })
            : t_rowStyle;
        this._cachedColumnStyles = [];
        L.Children.toArray(t_children).forEach((t, o) => {
          const i = e._getFlexStyleForColumn(t, t.props.style);
          e._cachedColumnStyles[o] = {
            overflow: "hidden",
            ...i,
          };
        });
        return L.createElement(
          "div",
          {
            "aria-label": this.props["aria-label"],
            "aria-labelledby": this.props["aria-labelledby"],
            "aria-colcount": L.Children.toArray(t_children).length,
            "aria-rowcount": this.props.rowCount,
            className: F("ReactVirtualized__Table", t_className),
            id: d,
            role: "grid",
            style: t_style,
          },
          !t_disableHeader &&
            t_headerRowRenderer({
              className: F("ReactVirtualized__Table__headerRow", v),
              columns: this._getHeaderColumns(),
              style: {
                height: t_headerHeight,
                overflow: "hidden",
                paddingRight: scrollbarWidth,
                width: t_width,
                ...S,
              },
            }),
          L.createElement(
            xA,
            E({}, this.props, {
              "aria-readonly": null,
              autoContainerWidth: true,
              className: F("ReactVirtualized__Table__Grid", t_gridClassName),
              cellRenderer: this._createRow,
              columnWidth: t_width,
              columnCount: 1,
              height: t_disableHeader ? t_height : t_height - t_headerHeight,
              id: undefined,
              noContentRenderer: t_noRowsRenderer,
              onScroll: this._onScroll,
              onSectionRendered: this._onSectionRendered,
              ref: this._setRef,
              role: "rowgroup",
              scrollbarWidth,
              scrollToRow: t_scrollToIndex,
              style: {
                ...t_gridStyle,
                overflowX: "hidden",
              },
            }),
          ),
        );
      },
    },
    {
      key: "_createColumn",
      value: function (e) {
        const e_column = e.column;
        const e_columnIndex = e.columnIndex;
        const e_isScrolling = e.isScrolling;
        const e_parent = e.parent;
        const e_rowData = e.rowData;
        const e_rowIndex = e.rowIndex;
        const onColumnClick = this.props.onColumnClick;
        const t_props = e_column.props;
        const a_cellDataGetter = t_props.cellDataGetter;
        const a_cellRenderer = t_props.cellRenderer;
        const a_className = t_props.className;
        const a_columnData = t_props.columnData;
        const a_dataKey = t_props.dataKey;
        const p = t_props.id;
        const g = a_cellRenderer({
          cellData: a_cellDataGetter({
            columnData: a_columnData,
            dataKey: a_dataKey,
            rowData: e_rowData,
          }),
          columnData: a_columnData,
          columnIndex: e_columnIndex,
          dataKey: a_dataKey,
          isScrolling: e_isScrolling,
          parent: e_parent,
          rowData: e_rowData,
          rowIndex: e_rowIndex,
        });
        const _ = this._cachedColumnStyles[e_columnIndex];
        const title = typeof g === "string" ? g : null;
        return L.createElement(
          "div",
          {
            "aria-colindex": e_columnIndex + 1,
            "aria-describedby": p,
            className: F("ReactVirtualized__Table__rowColumn", a_className),
            key: "Row" + e_rowIndex + "-Col" + e_columnIndex,
            onClick: function (e) {
              if (onColumnClick) {
                onColumnClick({
                  columnData: a_columnData,
                  dataKey: a_dataKey,
                  event: e,
                });
              }
            },
            role: "gridcell",
            style: _,
            title,
          },
          g,
        );
      },
    },
    {
      key: "_createHeader",
      value: function (e) {
        let onClick;
        let onKeyDown;
        let tabIndex;
        let n;
        let r;
        const e_column = e.column;
        const e_index = e.index;
        const props = this.props;
        const a_headerClassName = props.headerClassName;
        const a_headerStyle = props.headerStyle;
        const a_onHeaderClick = props.onHeaderClick;
        const a_sort = props.sort;
        const a_sortBy = props.sortBy;
        const a_sortDirection = props.sortDirection;
        const l_props = e_column.props;
        const g_columnData = l_props.columnData;
        const g_dataKey = l_props.dataKey;
        const g_defaultSortDirection = l_props.defaultSortDirection;
        const g_disableSort = l_props.disableSort;
        const g_headerRenderer = l_props.headerRenderer;
        const y = l_props.id;
        const g_label = l_props.label;
        const ReactVirtualized__Table__sortableHeaderColumn =
          !g_disableSort && a_sort;
        const R = F(
          "ReactVirtualized__Table__headerColumn",
          a_headerClassName,
          e_column.props.headerClassName,
          {
            ReactVirtualized__Table__sortableHeaderColumn,
          },
        );
        const T = this._getFlexStyleForColumn(e_column, {
          ...a_headerStyle,
          ...e_column.props.headerStyle,
        });
        const z = g_headerRenderer({
          columnData: g_columnData,
          dataKey: g_dataKey,
          disableSort: g_disableSort,
          label: g_label,
          sortBy: a_sortBy,
          sortDirection: a_sortDirection,
        });
        if (ReactVirtualized__Table__sortableHeaderColumn || a_onHeaderClick) {
          const sortDirection =
            a_sortBy !== g_dataKey
              ? g_defaultSortDirection
              : a_sortDirection === eQ
                ? "ASC"
                : eQ;
          const I = function (e) {
            if (ReactVirtualized__Table__sortableHeaderColumn) {
              a_sort({
                defaultSortDirection: g_defaultSortDirection,
                event: e,
                sortBy: g_dataKey,
                sortDirection,
              });
            }
            if (a_onHeaderClick) {
              a_onHeaderClick({
                columnData: g_columnData,
                dataKey: g_dataKey,
                event: e,
              });
            }
          };
          r = e_column.props["aria-label"] || g_label || g_dataKey;
          n = "none";
          tabIndex = 0;
          onClick = I;
          onKeyDown = function (e) {
            if (e.key === "Enter" || e.key === " ") {
              I(e);
            }
          };
        }
        if (a_sortBy === g_dataKey) {
          n = a_sortDirection === "ASC" ? "ascending" : "descending";
        }
        return L.createElement(
          "div",
          {
            "aria-label": r,
            "aria-sort": n,
            className: R,
            id: y,
            key: "Header-Col" + e_index,
            onClick,
            onKeyDown,
            role: "columnheader",
            style: T,
            tabIndex,
          },
          z,
        );
      },
    },
    {
      key: "_createRow",
      value: function (e) {
        const t = this;
        const e_rowIndex = e.rowIndex;
        const e_isScrolling = e.isScrolling;
        const e_key = e.key;
        const e_parent = e.parent;
        const e_style = e.style;
        const props = this.props;
        const s_children = props.children;
        const s_onRowClick = props.onRowClick;
        const s_onRowDoubleClick = props.onRowDoubleClick;
        const s_onRowRightClick = props.onRowRightClick;
        const s_onRowMouseOver = props.onRowMouseOver;
        const s_onRowMouseOut = props.onRowMouseOut;
        const s_rowClassName = props.rowClassName;
        const s_rowGetter = props.rowGetter;
        const s_rowRenderer = props.rowRenderer;
        const s_rowStyle = props.rowStyle;
        const scrollbarWidth = this.state.scrollbarWidth;
        const S =
          typeof s_rowClassName === "function"
            ? s_rowClassName({
                index: e_rowIndex,
              })
            : s_rowClassName;
        const C =
          typeof s_rowStyle === "function"
            ? s_rowStyle({
                index: e_rowIndex,
              })
            : s_rowStyle;
        const rowData = s_rowGetter({
          index: e_rowIndex,
        });
        const columns = L.Children.toArray(s_children).map((e, n) =>
          t._createColumn({
            column: e,
            columnIndex: n,
            isScrolling: e_isScrolling,
            parent: e_parent,
            rowData,
            rowIndex: e_rowIndex,
            scrollbarWidth,
          }),
        );
        const x = F("ReactVirtualized__Table__row", S);
        const R = {
          ...e_style,
          height: this._getRowHeight(e_rowIndex),
          overflow: "hidden",
          paddingRight: scrollbarWidth,
          ...C,
        };
        return s_rowRenderer({
          className: x,
          columns,
          index: e_rowIndex,
          isScrolling: e_isScrolling,
          key: e_key,
          onRowClick: s_onRowClick,
          onRowDoubleClick: s_onRowDoubleClick,
          onRowRightClick: s_onRowRightClick,
          onRowMouseOver: s_onRowMouseOver,
          onRowMouseOut: s_onRowMouseOut,
          rowData,
          style: R,
        });
      },
    },
    {
      key: "_getFlexStyleForColumn",
      value: function (e) {
        const t =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        const o = ""
          .concat(e.props.flexGrow, " ")
          .concat(e.props.flexShrink, " ")
          .concat(e.props.width, "px");
        const i = {
          ...t,
          flex: o,
          msFlex: o,
          WebkitFlex: o,
        };
        if (e.props.maxWidth) {
          i.maxWidth = e.props.maxWidth;
        }
        if (e.props.minWidth) {
          i.minWidth = e.props.minWidth;
        }
        return i;
      },
    },
    {
      key: "_getHeaderColumns",
      value: function () {
        const e = this;
        const props = this.props;
        const t_children = props.children;
        return (props.disableHeader ? [] : L.Children.toArray(t_children)).map(
          (t, o) =>
            e._createHeader({
              column: t,
              index: o,
            }),
        );
      },
    },
    {
      key: "_getRowHeight",
      value: function (e) {
        const rowHeight = this.props.rowHeight;
        if (typeof rowHeight === "function") {
          return rowHeight({
            index: e,
          });
        }
        return rowHeight;
      },
    },
    {
      key: "_onScroll",
      value: function (e) {
        const e_clientHeight = e.clientHeight;
        const e_scrollHeight = e.scrollHeight;
        const e_scrollTop = e.scrollTop;
        this.props.onScroll({
          clientHeight: e_clientHeight,
          scrollHeight: e_scrollHeight,
          scrollTop: e_scrollTop,
        });
      },
    },
    {
      key: "_onSectionRendered",
      value: function (e) {
        const e_rowOverscanStartIndex = e.rowOverscanStartIndex;
        const e_rowOverscanStopIndex = e.rowOverscanStopIndex;
        const e_rowStartIndex = e.rowStartIndex;
        const e_rowStopIndex = e.rowStopIndex;
        this.props.onRowsRendered({
          overscanStartIndex: e_rowOverscanStartIndex,
          overscanStopIndex: e_rowOverscanStopIndex,
          startIndex: e_rowStartIndex,
          stopIndex: e_rowStopIndex,
        });
      },
    },
    {
      key: "_setRef",
      value: function (e) {
        this.Grid = e;
      },
    },
    {
      key: "_setScrollbarWidth",
      value: function () {
        const scrollbarWidth = this.getScrollbarWidth();
        this.setState({
          scrollbarWidth,
        });
      },
    },
  ]);
  return t;
})(L.PureComponent);
P(e8, "defaultProps", {
  disableHeader: false,
  estimatedRowSize: 30,
  headerHeight: 0,
  headerStyle: {},
  noRowsRenderer: function () {
    return null;
  },
  onRowsRendered: function () {
    return null;
  },
  onScroll: function () {
    return null;
  },
  overscanIndicesGetter,
  overscanRowCount: 10,
  rowRenderer,
  headerRowRenderer,
  rowStyle: {},
  scrollToAlignment: "auto",
  scrollToIndex: -1,
  style: {},
});
e8.propTypes = {};
let e9 = [];
let e7 = null;
let e6 = null;
function te() {
  if (e6) {
    e6 = null;
    if (document.body && e7 != null) {
      document.body.style.pointerEvents = e7;
    }
    e7 = null;
  }
}
function tt() {
  te();
  e9.forEach((e) => e.__resetIsScrolling());
}
function to(e) {
  let t;
  if (e.currentTarget === window && e7 == null && document.body) {
    e7 = document.body.style.pointerEvents;
    document.body.style.pointerEvents = "none";
  }
  if (e6) {
    $(e6);
  }
  t = 0;
  e9.forEach((e) => {
    t = Math.max(t, e.props.scrollingResetTimeInterval);
  });
  e6 = Q(tt, t);
  e9.forEach((t) => {
    if (t.props.scrollElement === e.currentTarget) {
      t.__handleWindowScrollEvent();
    }
  });
}
function ti(e, scrollElement) {
  if (!e9.some((e) => e.props.scrollElement === scrollElement)) {
    scrollElement.addEventListener("scroll", to);
  }
  e9.push(e);
}
function tn(e, t) {
  if (!(e9 = e9.filter((t) => t !== e)).length) {
    t.removeEventListener("scroll", to);
    if (e6) {
      $(e6);
      te();
    }
  }
}
const tr = (e) => e === window;
const tl = (e) => e.getBoundingClientRect();
function ts(e, props) {
  if (!e) {
    return {
      height: props.serverHeight,
      width: props.serverWidth,
    };
  }
  if (!tr(e)) {
    return tl(e);
  }
  const o = window;
  const o_innerHeight = o.innerHeight;
  const o_innerWidth = o.innerWidth;
  return {
    height: typeof o_innerHeight === "number" ? o_innerHeight : 0,
    width: typeof o_innerWidth === "number" ? o_innerWidth : 0,
  };
}
function ta(e) {
  if (tr(e) && document.documentElement) {
    return {
      top:
        "scrollY" in window
          ? window.scrollY
          : document.documentElement.scrollTop,
      left:
        "scrollX" in window
          ? window.scrollX
          : document.documentElement.scrollLeft,
    };
  }
  return {
    top: e.scrollTop,
    left: e.scrollLeft,
  };
}
function tc(e, t) {
  const o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    let i = Object.getOwnPropertySymbols(e);
    if (t) {
      i = i.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable);
    }
    o.push.apply(o, i);
  }
  return o;
}
const td = () => {
  if (typeof window !== "undefined") {
    return window;
  }
};
v = m = ((e) => {
  function t() {
    S(this, t);
    let e;
    let o;
    for (var i = arguments.length, n = Array(i), r = 0; r < i; r++) {
      n[r] = arguments[r];
    }
    o = x(this, (e = T(t)).call.apply(e, [this].concat(n)));
    P(b(o), "_window", td());
    P(b(o), "_isMounted", false);
    P(b(o), "_positionFromTop", 0);
    P(b(o), "_positionFromLeft", 0);
    P(b(o), "_detectElementResize", undefined);
    P(b(o), "_child", undefined);
    P(b(o), "state", {
      ...ts(o.props.scrollElement, o.props),
      isScrolling: false,
      scrollLeft: 0,
      scrollTop: 0,
    });
    P(b(o), "_registerChild", function (e) {
      if (!(!e || e instanceof Element)) {
        console.warn(
          "WindowScroller registerChild expects to be passed Element or null",
        );
      }
      o._child = e;
      o.updatePosition();
    });
    P(b(o), "_onChildScroll", function (e) {
      const e_scrollTop = e.scrollTop;
      if (o.state.scrollTop !== e_scrollTop) {
        const i = o.props.scrollElement;
        if (i) {
          if (typeof i.scrollTo === "function") {
            i.scrollTo(0, e_scrollTop + o._positionFromTop);
          } else {
            i.scrollTop = e_scrollTop + o._positionFromTop;
          }
        }
      }
    });
    P(b(o), "_registerResizeListener", function (e) {
      if (e === window) {
        window.addEventListener("resize", o._onResize, false);
      } else {
        o._detectElementResize.addResizeListener(e, o._onResize);
      }
    });
    P(b(o), "_unregisterResizeListener", function (e) {
      if (e === window) {
        window.removeEventListener("resize", o._onResize, false);
      } else if (e) {
        o._detectElementResize.removeResizeListener(e, o._onResize);
      }
    });
    P(b(o), "_onResize", function () {
      o.updatePosition();
    });
    P(b(o), "__handleWindowScrollEvent", function () {
      if (o._isMounted) {
        const e = o.props.onScroll;
        const t = o.props.scrollElement;
        if (t) {
          const i = ta(t);
          const scrollLeft = Math.max(0, i.left - o._positionFromLeft);
          const r = Math.max(0, i.top - o._positionFromTop);
          o.setState({
            isScrolling: true,
            scrollLeft,
            scrollTop: r,
          });
          e({
            scrollLeft,
            scrollTop: r,
          });
        }
      }
    });
    P(b(o), "__resetIsScrolling", function () {
      o.setState({
        isScrolling: false,
      });
    });
    return o;
  }
  M(t, e);
  y(t, [
    {
      key: "updatePosition",
      value: function () {
        const e =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : this.props.scrollElement;
        const onResize = this.props.onResize;
        const state = this.state;
        const o_height = state.height;
        const o_width = state.width;
        const r = this._child || eh.findDOMNode(this);
        if (r instanceof Element && e) {
          const l = ((e, t) => {
            if (tr(t) && document.documentElement) {
              const o = document.documentElement;
              const i = tl(e);
              const n = tl(o);
              return {
                top: i.top - n.top,
                left: i.left - n.left,
              };
            }
            const r = ta(t);
            const l = tl(e);
            const s = tl(t);
            return {
              top: l.top + r.top - s.top,
              left: l.left + r.left - s.left,
            };
          })(r, e);
          this._positionFromTop = l.top;
          this._positionFromLeft = l.left;
        }
        const s = ts(e, this.props);
        if (o_height !== s.height || o_width !== s.width) {
          this.setState({
            height: s.height,
            width: s.width,
          });
          onResize({
            height: s.height,
            width: s.width,
          });
        }
      },
    },
    {
      key: "componentDidMount",
      value: function () {
        const scrollElement = this.props.scrollElement;
        this._detectElementResize = ea();
        this.updatePosition(scrollElement);
        if (scrollElement) {
          ti(this, scrollElement);
          this._registerResizeListener(scrollElement);
        }
        this._isMounted = true;
      },
    },
    {
      key: "componentDidUpdate",
      value: function (e, t) {
        const scrollElement = this.props.scrollElement;
        const e_scrollElement = e.scrollElement;
        if (
          e_scrollElement !== scrollElement &&
          e_scrollElement != null &&
          scrollElement != null
        ) {
          this.updatePosition(scrollElement);
          tn(this, e_scrollElement);
          ti(this, scrollElement);
          this._unregisterResizeListener(e_scrollElement);
          this._registerResizeListener(scrollElement);
        }
      },
    },
    {
      key: "componentWillUnmount",
      value: function () {
        const scrollElement = this.props.scrollElement;
        if (scrollElement) {
          tn(this, scrollElement);
          this._unregisterResizeListener(scrollElement);
        }
        this._isMounted = false;
      },
    },
    {
      key: "render",
      value: function () {
        const children = this.props.children;
        const state = this.state;
        const t_isScrolling = state.isScrolling;
        const t_scrollTop = state.scrollTop;
        const t_scrollLeft = state.scrollLeft;
        const t_height = state.height;
        const t_width = state.width;
        return children({
          onChildScroll: this._onChildScroll,
          registerChild: this._registerChild,
          height: t_height,
          isScrolling: t_isScrolling,
          scrollLeft: t_scrollLeft,
          scrollTop: t_scrollTop,
          width: t_width,
        });
      },
    },
  ]);
  return t;
})(L.PureComponent);
P(m, "propTypes", null);
export var PG = v;
P(PG, "defaultProps", {
  onResize: function () {},
  onScroll: function () {},
  scrollingResetTimeInterval: 150,
  scrollElement: td(),
  serverHeight: 0,
  serverWidth: 0,
});
