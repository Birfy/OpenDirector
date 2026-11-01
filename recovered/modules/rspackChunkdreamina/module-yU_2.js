import i from "bT";
import l from "yI";
import a from "c8J";
import c from "Cs";
import { Et, Gv, Kg, Tn, b0, cy, kZ } from "./module-Pl5.js";
import { A as A_1 } from "./module-puV.js";
import { A as A_2 } from "./module-oY.js";
import { A as A_3 } from "./module-aa6.js";
import { A as A_4 } from "./module-ZW.js";
import { A as A_5 } from "./module-K5.js";
import { A as A_6 } from "./module-RE.js";
import { A as A_7 } from "./module-Z6Q.js";
import y from "V5";
import g from "KXs";
import b from "HhS";
import { A as A_8 } from "./module-aNn.js";
import { QO } from "./module-ce.js";
import C from "Po";
import { A as A_9 } from "./module-To_2.js";
import F from "PC";
import * as G from "./module-lv_2.js";
import { A as A_10 } from "./module-Vj5.js";
import { A as A_11 } from "./module-tgd.js";
import { A as A_12 } from "./module-W3.js";
import { A as A_13 } from "./module-gNs.js";
import { A as A_14 } from "./module-QPc.js";
import eh from "M3";
import ey from "GfmY";
import eg from "Kb";
import * as eb from "./module-Hv_4.js";
import eT from "ag2";
import ej from "Cub";
import eR from "dXB";
import { A as A_15 } from "./module-Hmv.js";
import { Do, Er, gw, oz, xy, yd } from "./module-uRm.js";
import { A as A_16 } from "./module-hn.js";
import { A as A_17 } from "./module-PO9.js";
import eX from "bc";
import eJ from "olG";
import eZ from "JXb";
import e0 from "sZS";
import e1 from "rS";
import e2 from "zP7";
import { A as A_18 } from "./module-Cu.js";
import { A as A_19 } from "./module-Bd_2.js";
import { A as A_20 } from "./module-nA_3.js";
import { A as A_21 } from "./module-xn_2.js";
import tA from "WJf";
import { A as A_22 } from "./module-LTg.js";
import { AU, on } from "./module-eYi.js";
import { A as A_23 } from "./module-Ku_2.js";
let r;
let o;
const w = {
  table: "table",
  header: {
    operations: function (e) {
      const e_selectionNode = e.selectionNode;
      return [
        {
          name: "expandNode",
          node: e.expandNode,
        },
        {
          name: "selectionNode",
          node: e_selectionNode,
        },
      ];
    },
    wrapper: "div",
    thead: "thead",
    row: "tr",
    th: "th",
    cell: "div",
  },
  body: {
    operations: function (e) {
      const e_selectionNode = e.selectionNode;
      return [
        {
          name: "expandNode",
          node: e.expandNode,
        },
        {
          name: "selectionNode",
          node: e_selectionNode,
        },
      ];
    },
    wrapper: "div",
    tbody: "tbody",
    row: "tr",
    td: "td",
    cell: "span",
  },
};
function useO(e) {
  const t = i.useMemo(
    function () {
      if (Gv(e)) {
        return C.A({}, w, e);
      }
      return w;
    },
    [e],
  );
  return {
    getHeaderComponentOperations: t.header.operations,
    getBodyComponentOperations: t.body.operations,
    ComponentTable: t.table,
    ComponentHeaderWrapper: t.header.wrapper,
    ComponentThead: t.header.thead,
    ComponentHeaderRow: t.header.row,
    ComponentTh: t.header.th,
    ComponentHeaderCell: t.header.cell,
    ComponentBodyWrapper: t.body.wrapper,
    ComponentTbody: t.body.tbody,
    ComponentBodyRow: t.body.row,
    ComponentTd: t.body.td,
    ComponentBodyCell: t.body.cell,
  };
}
const A = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const N = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const KComponent = function (e) {
  const e_onSort = e.onSort;
  const e_onFilter = e.onFilter;
  const e_onHandleFilter = e.onHandleFilter;
  const e_onHandleFilterReset = e.onHandleFilterReset;
  const e_currentFilters = e.currentFilters;
  const w = e_currentFilters === undefined ? {} : e_currentFilters;
  const e_currentSorter = e.currentSorter;
  const e__key = e._key;
  const e_dataIndex = e.dataIndex;
  const e_title = e.title;
  const e_sorter = e.sorter;
  const e_sortDirections = e.sortDirections;
  const M =
    e_sortDirections === undefined ? ["ascend", "descend"] : e_sortDirections;
  const e_filters = e.filters;
  const filters = e_filters === undefined ? [] : e_filters;
  const e_columnFixedStyle = e.columnFixedStyle;
  const e_className = e.className;
  const e_cellStyle = e.cellStyle;
  const e_headerCellStyle = e.headerCellStyle;
  const e_rowSpan = e.rowSpan;
  const e_colSpan = e.colSpan;
  const e_headerCellProps = e.headerCellProps;
  const e_prefixCls = e.prefixCls;
  const e_align = e.align;
  const Q = e_align === undefined ? "left" : e_align;
  const e_components = e.components;
  const e_filterIcon = e.filterIcon;
  const e_filterDropdown = e.filterDropdown;
  const e_filterMultiple = e.filterMultiple;
  const J = e_filterMultiple === undefined || e_filterMultiple;
  const e_ellipsis = e.ellipsis;
  const e_filterDropdownProps = e.filterDropdownProps;
  const e_onFilterDropdownVisibleChange = e.onFilterDropdownVisibleChange;
  const e_column = e.column;
  const e_showSorterTooltip = e.showSorterTooltip;
  const e_index = e.index;
  const ei = i.useContext(QO);
  const ei_locale = ei.locale;
  const ei_rtl = ei.rtl;
  const dataIndex = e_dataIndex === undefined ? e_index : e_dataIndex;
  const eu = A(
    A_9([], {
      value: w[dataIndex] || [],
    }),
    3,
  );
  const es = eu[0];
  const ef = eu[1];
  const filterKeys = eu[2];
  const ed = A(i.useState(false), 2);
  const em = ed[0];
  const ev = ed[1];
  const eh = A(i.useState(false), 2);
  const ey = eh[0];
  const eg = eh[1];
  const eb = e_sorter && cy(M) && M.length;
  const ex = eb
    ? (() => {
        const e = e_currentSorter && e_currentSorter.direction;
        if (!e || (e_currentSorter && e_currentSorter.field !== dataIndex)) {
          return M[0];
        }
        const t = M.indexOf(e);
        if (t < M.length) {
          return M[t + 1];
        }
      })()
    : undefined;
  function eE() {
    if (es) {
      if (e_onHandleFilter) {
        e_onHandleFilter(
          {
            onFilter: e_onFilter,
            filters,
            dataIndex,
          },
          filterKeys,
        );
      }
      ew(false);
    }
  }
  function eC() {
    e_onHandleFilterReset({
      dataIndex,
    });
    ew(false);
  }
  function ew(e) {
    ev(e);
    if (e_onFilterDropdownVisibleChange) {
      e_onFilterDropdownVisibleChange(e);
    }
  }
  function eO(e, t) {
    let n = N([], A(filterKeys), false);
    if (J) {
      if (t) {
        n = n.concat(e);
      } else {
        n.splice(
          n.findIndex((t) => t === e),
          1,
        );
      }
    } else if (n.length > 0) {
      if (n[0] === e) {
        return;
      } else {
        n = [e];
      }
    } else {
      n = [e];
    }
    ef(n);
  }
  function confirm(e) {
    ef(e || filterKeys);
    ev(false);
    if (e_onHandleFilter) {
      e_onHandleFilter(
        {
          filters,
          onFilter: e_onFilter,
          dataIndex,
        },
        e || filterKeys,
      );
    }
  }
  i.useEffect(
    function () {
      ef(w[dataIndex] || []);
    },
    [w, dataIndex],
  );
  i.useEffect(
    function () {
      if (es && es !== filterKeys) {
        ef(es);
      }
    },
    [em],
  );
  const eP = (e) =>
    A_1(e_prefixCls + "-sorter-icon", {
      [e_prefixCls + "-sorter-icon-active"]:
        e_currentSorter &&
        e_currentSorter.direction === e &&
        e_currentSorter.field === dataIndex,
    });
  const eA = A_1(e_prefixCls + "-filters", {
    [e_prefixCls + "-filters-open"]: em,
    [e_prefixCls + "-filters-active"]: es && es.length,
  });
  let eN = {
    ...e_columnFixedStyle,
  };
  if (Gv(e_cellStyle)) {
    eN = {
      ...eN,
      ...e_cellStyle,
    };
  }
  if (Gv(e_headerCellStyle)) {
    eN = {
      ...eN,
      ...e_headerCellStyle,
    };
  }
  if (Q && Q !== "left") {
    eN.textAlign = Q;
  }
  const ek = {
    style: eN,
    key: e__key || dataIndex,
  };
  if (e_colSpan && e_colSpan > 1) {
    ek.colSpan = e_colSpan;
  }
  if (e_rowSpan && e_rowSpan > 1) {
    ek.rowSpan = e_rowSpan;
  }
  const eT = useO(e_components);
  const eT_ComponentTh = eT.ComponentTh;
  const eT_ComponentHeaderCell = eT.ComponentHeaderCell;
  const eI =
    (cy(filters) && filters.length > 0) ||
    typeof e_filterDropdown === "function";
  const eF =
    e_ellipsis && typeof e_title === "string"
      ? {
          title: e_title,
        }
      : {};
  const eM = e_filterDropdownProps && e_filterDropdownProps.triggerProps;
  const e_ = i.createElement(
    i.Fragment,
    null,
    eb
      ? i.createElement(
          A_7,
          {
            content:
              ex === "ascend"
                ? ei_locale.Table.sortAscend
                : ex === "descend"
                  ? ei_locale.Table.sortDescend
                  : ei_locale.Table.cancelSort,
            disabled: !e_showSorterTooltip,
            ...(Gv(e_showSorterTooltip) ? e_showSorterTooltip : {}),
          },
          i.createElement(
            "div",
            {
              className: e_prefixCls + "-cell-with-sorter",
              onMouseEnter: function () {
                eg(true);
              },
              onMouseLeave: function () {
                eg(false);
              },
              onClick: function () {
                return e_onSort(ex, dataIndex);
              },
            },
            i.createElement(
              "span",
              {
                className: e_prefixCls + "-th-item-title",
                ...eF,
              },
              e_title,
            ),
            eb &&
              i.createElement(
                "div",
                {
                  className: A_1(e_prefixCls + "-sorter", {
                    [e_prefixCls + "-sorter-direction-one"]: M.length === 1,
                  }),
                },
                M.indexOf("ascend") !== -1 &&
                  i.createElement(
                    "div",
                    {
                      className: eP("ascend"),
                    },
                    i.createElement(g.A, null),
                  ),
                M.indexOf("descend") !== -1 &&
                  i.createElement(
                    "div",
                    {
                      className: eP("descend"),
                    },
                    i.createElement(y.A, null),
                  ),
              ),
          ),
        )
      : i.createElement(
          "span",
          {
            className: e_prefixCls + "-th-item-title",
            ...eF,
          },
          e_title,
        ),
    eI &&
      i.createElement(
        A_4,
        {
          popup: function () {
            if (typeof e_filterDropdown === "function") {
              return e_filterDropdown({
                filterKeys,
                setFilterKeys: function (e, t) {
                  ef(e);
                  if (t) {
                    t();
                  }
                },
                confirm,
              });
            }
            return i.createElement(
              "div",
              {
                className: e_prefixCls + "-filters-popup",
              },
              i.createElement(
                "div",
                {
                  className: e_prefixCls + "-filters-list",
                },
                filters.map((e) => {
                  const checked =
                    filterKeys.findIndex((t) => t === e.value) !== -1;
                  return i.createElement(
                    "div",
                    {
                      className: e_prefixCls + "-filters-item",
                      key: e.value,
                    },
                    J
                      ? i.createElement(
                          A_3,
                          {
                            checked,
                            onChange: function (t) {
                              return eO(e.value, t);
                            },
                          },
                          e.text,
                        )
                      : i.createElement(
                          A_5,
                          {
                            checked,
                            onChange: function (t) {
                              return eO(e.value, t);
                            },
                          },
                          e.text,
                        ),
                  );
                }),
              ),
              i.createElement(
                A_8,
                {
                  className: e_prefixCls + "-filters-btn",
                },
                i.createElement(
                  A_6,
                  {
                    onClick: eC,
                    size: "mini",
                  },
                  ei_locale.Table.resetText,
                ),
                i.createElement(
                  A_6,
                  {
                    onClick: eE,
                    type: "primary",
                    size: "mini",
                  },
                  ei_locale.Table.okText,
                ),
              ),
            );
          },
          trigger: "click",
          classNames: "slideDynamicOrigin",
          position: ei_rtl ? "bl" : "br",
          popupAlign: {
            bottom: 0,
          },
          popupVisible: em,
          onVisibleChange: ew,
          ...eM,
        },
        i.createElement(
          "div",
          {
            className: eA,
          },
          e_filterIcon || i.createElement(b.A, null),
        ),
      ),
  );
  const eV = A_1(e_prefixCls + "-th-item", {
    [e_prefixCls + "-cell-text-ellipsis"]: e_ellipsis,
    [e_prefixCls + "-cell-mouseenter"]: ey,
    [e_prefixCls + "-cell-next-" + ex]: ey && ex,
    [e_prefixCls + "-col-has-sorter"]: eb,
    [e_prefixCls + "-col-has-filter"]: eI,
  });
  return (
    e_colSpan !== 0 &&
    i.createElement(
      eT_ComponentTh,
      {
        className: A_1(
          e_prefixCls + "-th",
          {
            [e_prefixCls + "-col-sorted"]:
              e_currentSorter &&
              e_currentSorter.direction &&
              e_currentSorter.field === dataIndex,
          },
          e_className,
        ),
        ...ek,
        ...e_headerCellProps,
      },
      Kg(eT_ComponentHeaderCell)
        ? i.createElement(
            eT_ComponentHeaderCell,
            {
              className: eV,
            },
            e_,
          )
        : i.createElement(
            eT_ComponentHeaderCell,
            {
              className: eV,
              column: e_column,
            },
            e_,
          ),
    )
  );
};
const T = "table_internal_selection_key";
const j = "table_internal_expand_key";
const IComponent = function (e) {
  const e_activeSorters = e.activeSorters;
  const e_expandedRowRender = e.expandedRowRender;
  const e_expandProps = e.expandProps;
  const e_onSort = e.onSort;
  const e_onHandleFilter = e.onHandleFilter;
  const e_onHandleFilterReset = e.onHandleFilterReset;
  const e_onHeaderRow = e.onHeaderRow;
  const e_prefixCls = e.prefixCls;
  const e_currentFilters = e.currentFilters;
  const e_components = e.components;
  const e_data = e.data;
  const e_selectedRowKeys = e.selectedRowKeys;
  const e_rowSelection = e.rowSelection;
  const e_allSelectedRowKeys = e.allSelectedRowKeys;
  const g = e_allSelectedRowKeys === undefined ? [] : e_allSelectedRowKeys;
  const e_groupColumns = e.groupColumns;
  const e_stickyOffsets = e.stickyOffsets;
  const e_groupStickyClassNames = e.groupStickyClassNames;
  const e_showSorterTooltip = e.showSorterTooltip;
  const rtl = i.useContext(QO).rtl;
  const P = useO(e_components);
  const P_ComponentThead = P.ComponentThead;
  const P_ComponentHeaderRow = P.ComponentHeaderRow;
  const P_getHeaderComponentOperations = P.getHeaderComponentOperations;
  const F =
    e_rowSelection &&
    (e_rowSelection.type === "checkbox" || !("type" in e_rowSelection));
  const M =
    !e_rowSelection ||
    !("checkAll" in e_rowSelection) ||
    e_rowSelection.checkAll;
  const _ = e_rowSelection && e_rowSelection.type === "radio";
  const columnTitle = (e_expandProps === undefined ? {} : e_expandProps)
    .columnTitle;
  const D = i.useMemo(
    function () {
      const e = new Set(g);
      return e_selectedRowKeys.filter((t) => e.has(t));
    },
    [e_selectedRowKeys, g],
  );
  const z =
    e_groupColumns.length > 1
      ? {
          rowSpan: e_groupColumns.length,
        }
      : {};
  const L = A_1(e_prefixCls + "-th", e_prefixCls + "-operation");
  return i.createElement(
    P_ComponentThead,
    null,
    e_groupColumns.map((r, v) => {
      const y = e_onHeaderRow && e_onHeaderRow(r, v);
      const selectionNode =
        (F || _) &&
        v === 0 &&
        i.createElement(
          "th",
          {
            className: A_1(L, e_prefixCls + "-" + (_ ? "radio" : "checkbox")),
          },
          i.createElement(
            "div",
            {
              className: e_prefixCls + "-th-item",
            },
            M && !_
              ? i.createElement(A_3, {
                  indeterminate:
                    e_data && D.length > 0 && D.length !== g.length,
                  checked: e_data && D.length !== 0 && D.length === g.length,
                  disabled: !g.length,
                  onChange: e.onCheckAll,
                })
              : null,
            e_rowSelection && e_rowSelection.columnTitle,
          ),
        );
      const E =
        e_expandedRowRender &&
        i.createElement(
          "th",
          {
            className: A_1(L, e_prefixCls + "-expand"),
          },
          columnTitle &&
            i.createElement(
              "div",
              {
                className: e_prefixCls + "-th-item",
              },
              columnTitle,
            ),
        );
      const O = e_groupStickyClassNames[v];
      const P = P_getHeaderComponentOperations({
        selectionNode,
        expandNode: E,
      });
      return i.createElement(
        P_ComponentHeaderRow,
        {
          ...y,
          key: v,
          className: e_prefixCls + "-tr",
        },
        r.map((e, n) => {
          let c;
          let p;
          let m;
          let v;
          const e_$$columnIndex = e.$$columnIndex;
          let y = 0;
          if (Array.isArray(e_$$columnIndex) && e_$$columnIndex.length === 2) {
            y =
              e.fixed === "right"
                ? e_stickyOffsets[e_$$columnIndex[1]]
                : e_stickyOffsets[e_$$columnIndex[0]];
          } else if (typeof e_$$columnIndex === "number") {
            y = e_stickyOffsets[e_$$columnIndex] || 0;
          }
          const g = O[n];
          if (e.$$isOperation) {
            let b = e.node;
            let E = true;
            if (e.title === T) {
              b =
                (c = P.find((e) => e.name === "selectionNode")) == null
                  ? undefined
                  : c.node;
              E = false;
            }
            if (e.title === j) {
              b =
                (p = P.find((e) => e.name === "expandNode")) == null
                  ? undefined
                  : p.node;
              E = false;
            }
            const C = b;
            return i.cloneElement(C, {
              key: e.key || n,
              ...C.props,
              ...z,
              className: A_1(
                E ? L : "",
                (m = C == null ? undefined : C.props) == null
                  ? undefined
                  : m.className,
                g,
              ),
              style: {
                ...((v = C == null ? undefined : C.props) == null
                  ? undefined
                  : v.style),
                ...(e.fixed === "left"
                  ? {
                      [rtl ? "right" : "left"]: y,
                    }
                  : {}),
                width: e.width,
                minWidth: e.width,
              },
            });
          }
          const headerCellProps = e.onHeaderCell && e.onHeaderCell(e, n);
          const N = A_1(g, e.className);
          const columnFixedStyle = {};
          if (e.fixed === "left") {
            columnFixedStyle[rtl ? "right" : "left"] = y;
          }
          if (e.fixed === "right") {
            columnFixedStyle[rtl ? "left" : "right"] = y;
          }
          return i.createElement(KComponent, {
            key: e.key,
            index: n,
            onSort: e_onSort,
            onHandleFilter: e_onHandleFilter,
            onHandleFilterReset: e_onHandleFilterReset,
            currentSorter: e_activeSorters.find((t) => t.field === e.key),
            currentFilters: e_currentFilters,
            _key: e.key || e.dataIndex || n,
            ...e,
            column: e,
            headerCellProps,
            prefixCls: e_prefixCls,
            components: e_components,
            className: N,
            columnFixedStyle,
            showSorterTooltip: e_showSorterTooltip,
          });
        }),
      );
    }),
  );
};
const M = (e, t) => {
  const n = {};
  for (var r in e) {
    if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
      n[r] = e[r];
    }
  }
  if (e != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
      if (
        t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o])
      ) {
        n[r[o]] = e[r[o]];
      }
    }
  }
  return n;
};
function _(e, t) {
  const n = Math.floor(e * t);
  const r = (e - n / t) / (1 / t);
  return {
    index: n,
    offsetPtg: Number.isNaN(r) ? 0 : r,
  };
}
function V(e, t = false) {
  const n = F.findDOMNode(e);
  let r = 0;
  if (t) {
    const o = window.getComputedStyle(e);
    const i = o.marginTop;
    const l = o.marginBottom;
    r = isNaN((r = Number(i.replace(/\D/g, "")) + Number(l.replace(/\D/g, ""))))
      ? 0
      : r;
  }
  if (n) {
    return n.offsetHeight + r;
  }
  return 0;
}
function D(e, t) {
  if (e < 0) {
    return 0;
  }
  if (e > t) {
    return t;
  }
  return e;
}
function z(e) {
  const e_scrollTop = e.scrollTop;
  const n = e.scrollHeight - e.clientHeight;
  if (n <= 0) {
    return 0;
  }
  return D(e_scrollTop, n) / n;
}
function L(e, data_length, n) {
  const r = _(e, data_length);
  const r_index = r.index;
  return {
    itemIndex: r_index,
    itemOffsetPtg: r.offsetPtg,
    startIndex: Math.max(0, r_index - Math.ceil(e * n)),
    endIndex: Math.min(data_length - 1, r_index + Math.ceil((1 - e) * n)),
  };
}
function H(e) {
  const e_itemHeight = e.itemHeight;
  const e_itemOffsetPtg = e.itemOffsetPtg;
  const e_scrollPtg = e.scrollPtg;
  return Math.floor(
    e.clientHeight * e_scrollPtg - e_itemHeight * e_itemOffsetPtg,
  );
}
const B = function (e) {
  const e_height = e.height;
  const e_offset = e.offset;
  const e_children = e.children;
  const e_outerStyle = e.outerStyle;
  let l = {};
  let a = {
    display: "flex",
    flexDirection: "column",
  };
  if (e_offset !== undefined) {
    l = {
      height: e_height,
      position: "relative",
      overflow: "hidden",
      zIndex: 0,
      ...e_outerStyle,
    };
    a = {
      ...a,
      transform: "translateY(" + e_offset + "px)",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
    };
  }
  return i.createElement(
    "div",
    {
      style: l,
    },
    i.createElement(
      "div",
      {
        style: a,
      },
      e_children,
    ),
  );
};
const U = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const useQ = (value) => {
  const t = U(
    i.useState({
      value,
      resolve: function (e) {},
    }),
    2,
  );
  const n = t[0];
  const r = t[1];
  i.useEffect(
    function () {
      n.resolve(n.value);
    },
    [n],
  );
  return [
    n.value,
    function (e) {
      return new Promise((resolve) => {
        r(function (n) {
          let r = e;
          if (typeof e === "function") {
            r = e(n.value);
          }
          return {
            value: r,
            resolve,
          };
        });
      });
    },
  ];
};
const Y = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
function useComponent() {
  return Y(
    i.useReducer(function (e) {
      return e + 1;
    }, 0),
    2,
  )[1];
}
const et = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const en = "__virtual_item_height_" + Math.random().toFixed(5).slice(2);
const useEr = (ORef) => {
  const t = useComponent();
  const e_current = ORef.current;
  i.useEffect(
    function () {
      if (Object.keys(e_current).length && !e_current[en]) {
        e_current[en] = Object.entries(e_current).reduce(
          (acc, entry, index, r) => {
            const o = acc + et(entry, 2)[1];
            if (index === r.length - 1) {
              return Math.round(o / r.length);
            }
            return o;
          },
          0,
        );
        t();
      }
    },
    [Object.keys(e_current).length],
  );
};
const useEo = (children) => {
  const tRef = i.useRef({});
  const nRef = i.useRef(children);
  i.useEffect(
    function () {
      nRef.current = children;
    },
    [children],
  );
  if (children !== nRef.current) {
    tRef.current = {};
  }
  return function (n, r, o) {
    if (!tRef.current.hasOwnProperty(r)) {
      tRef.current[r] = children(n, r, o);
    }
    return tRef.current[r];
  };
};
const ei = i.forwardRef(function (e, t) {
  const {
    style,
    className,
    children,
    data = [],
    itemKey,
    threshold = 100,
    wrapper,
    height,
    isStaticItemHeight = true,
    itemHeight,
    measureLongestItem,
    scrollOptions,
    onScroll,
    needFiller,
    outerStyle,
    ...rest
  } = e;
  const maxHeight =
    (style && style.maxHeight) || (height === undefined ? "100%" : height);
  const ORef = i.useRef({});
  const S = et(i.useState(200), 2);
  const P = S[0];
  const A = S[1];
  const N = useEo(children);
  useEr(ORef);
  const data_length = data.length;
  const itemHeight_1 = itemHeight || ORef.current[en] || 32;
  const height_1 = Et(maxHeight) ? maxHeight : P;
  const R = Math.ceil(height_1 / itemHeight_1);
  const I = itemHeight_1 * data_length;
  const F = threshold !== null && data_length >= threshold && I > height_1;
  const KRef = i.useRef(null);
  const URef = i.useRef(null);
  const YRef = i.useRef(false);
  const $Ref = i.useRef(F);
  const ei = i.useMemo(
    function () {
      if (KRef.current) {
        const e = (e) =>
          +window.getComputedStyle(KRef.current)[e].replace(/\D/g, "");
        return {
          top: e("paddingTop"),
          bottom: e("paddingBottom"),
        };
      }
      return {
        top: 0,
        bottom: 0,
      };
    },
    [KRef.current],
  );
  const el = et(
    useQ({
      status: "NONE",
      startIndex: 0,
      endIndex: 0,
      itemIndex: 0,
      itemOffsetPtg: 0,
      startItemTop: 0,
      scrollTop: 0,
    }),
    2,
  );
  const ea = el[0];
  const ec = el[1];
  const eu = A_10(data) || [];
  const es = A_11();
  const ef = function (e, t) {
    if (typeof itemKey === "function") {
      return itemKey(e, t);
    }
    if (typeof itemKey === "string") {
      return e[itemKey];
    }
    return e.key || t;
  };
  const getItemKey = function (e, t = data) {
    if (e === t.length) {
      return "__rc_ghost_item__";
    }
    const n = t[e];
    if (n !== undefined) {
      return ef(n, e);
    }
    return null;
  };
  const ed = (e) => ORef.current[e] || itemHeight_1;
  const em = (e) => {
    const e_itemIndex = e.itemIndex;
    const e_relativeTop = e.relativeTop;
    const KRef_current = KRef.current;
    const r_scrollHeight = KRef_current.scrollHeight;
    const r_clientHeight = KRef_current.clientHeight;
    const ea_scrollTop = ea.scrollTop;
    for (
      var a = r_scrollHeight - r_clientHeight,
        c = Number.MAX_VALUE,
        u = null,
        s = null,
        f = null,
        p = null,
        d = null,
        m = 0,
        v = 0;
      v < a;
      v++
    ) {
      const h = ((e, t, n) => {
        const r = t - 0;
        const o = e - t;
        if (n <= 2 * Math.min(r, o)) {
          const i = Math.floor(n / 2);
          if (n % 2) {
            return t + i + 1;
          }
          return t - i;
        }
        if (r > o) {
          return t - (n - o);
        }
        return t + (n - r);
      })(a, ea_scrollTop, v);
      const y = z({
        scrollTop: h,
        scrollHeight: r_scrollHeight,
        clientHeight: r_clientHeight,
      });
      const g = L(y, data_length, R);
      const locatedItemIndex = g.itemIndex;
      const x = g.itemOffsetPtg;
      const E = g.startIndex;
      const C = g.endIndex;
      if (E <= e_itemIndex && e_itemIndex <= C) {
        const w = Math.abs(
          ((e) => {
            const e_locatedItemRelativeTop = e.locatedItemRelativeTop;
            const e_locatedItemIndex = e.locatedItemIndex;
            const e_compareItemIndex = e.compareItemIndex;
            const e_startIndex = e.startIndex;
            const e_endIndex = e.endIndex;
            const e_getItemKey = e.getItemKey;
            const e_itemElementHeights = e.itemElementHeights;
            const e_itemHeight = e.itemHeight;
            let u = e_locatedItemRelativeTop;
            const s = e_getItemKey(e_compareItemIndex);
            if (e_compareItemIndex <= e_locatedItemIndex) {
              for (var f = e_locatedItemIndex; f >= e_startIndex; f -= 1) {
                var p = e_getItemKey(f);
                if (p === s) {
                  break;
                }
                u -= e_itemElementHeights[e_getItemKey(f - 1)] || e_itemHeight;
              }
            } else {
              for (var f = e_locatedItemIndex; f <= e_endIndex; f += 1) {
                var p = e_getItemKey(f);
                if (p === s) {
                  break;
                }
                u += e_itemElementHeights[p] || e_itemHeight;
              }
            }
            return u;
          })({
            locatedItemRelativeTop: H({
              itemHeight: ed(getItemKey(locatedItemIndex)),
              itemOffsetPtg: x,
              clientHeight: r_clientHeight,
              scrollPtg: y,
            }),
            locatedItemIndex,
            compareItemIndex: e_itemIndex,
            startIndex: E,
            endIndex: C,
            itemHeight: itemHeight_1,
            getItemKey,
            itemElementHeights: ORef.current,
          }) - e_relativeTop,
        );
        if (w < c) {
          c = w;
          u = h;
          s = locatedItemIndex;
          f = x;
          p = E;
          d = C;
          m = 0;
        } else {
          m += 1;
        }
      }
      if (m > 10) {
        break;
      }
    }
    if (u !== null) {
      YRef.current = true;
      KRef.current.scrollTop = u;
      ec({
        ...ea,
        status: "MEASURE_START",
        scrollTop: u,
        itemIndex: s,
        itemOffsetPtg: f,
        startIndex: p,
        endIndex: d,
      });
    }
    URef.current = G.e(function () {
      YRef.current = false;
    });
  };
  const ev = function (e, t = false) {
    const KRef_current = KRef.current;
    const n_scrollTop = KRef_current.scrollTop;
    const n_clientHeight = KRef_current.clientHeight;
    const i = D(n_scrollTop, I - n_clientHeight);
    if (t || (i !== ea.scrollTop && !YRef.current)) {
      const l = L(
        z({
          scrollTop: i,
          clientHeight: n_clientHeight,
          scrollHeight: I,
        }),
        data_length,
        R,
      );
      const itemIndex = l.itemIndex;
      const c = l.itemOffsetPtg;
      const startIndex = l.startIndex;
      const endIndex = l.endIndex;
      ec({
        ...ea,
        scrollTop: i,
        itemIndex,
        itemOffsetPtg: c,
        startIndex,
        endIndex,
        status: "MEASURE_START",
      });
      if (e && onScroll) {
        onScroll(e);
      }
    }
  };
  i.useEffect(function () {
    return function () {
      if (URef.current) {
        G.N(URef.current);
      }
    };
  }, []);
  i.useEffect(
    function () {
      if (KRef.current) {
        if (es) {
          KRef.current.scrollTop = 0;
        }
        ev(null, true);
      }
    },
    [R],
  );
  i.useEffect(
    function () {
      let e = null;
      const t = $Ref.current !== F ? (F ? "virtual" : "raw") : "";
      $Ref.current = F;
      if (height_1 && eu.length !== data.length) {
        const n = ((e, t, n) => {
          let r;
          let o;
          const e_length = e.length;
          const t_length = t.length;
          if (e_length === 0 && t_length === 0) {
            return null;
          }
          if (e_length < t_length) {
            r = e;
            o = t;
          } else {
            r = t;
            o = e;
          }
          const a = {
            __EMPTY_ITEM__: true,
          };
          function c(e, t) {
            if (e !== undefined) {
              return n(e, t);
            }
            return a;
          }
          let u = null;
          let multiple = Math.abs(e_length - t_length) !== 1;
          for (let f = 0; f < o.length; f += 1) {
            const p = c(r[f], f);
            if (p !== c(o[f], f)) {
              u = f;
              multiple = multiple || p !== c(o[f + 1], f + 1);
              break;
            }
          }
          if (u === null) {
            return null;
          }
          return {
            index: u,
            multiple,
          };
        })(eu, data, ef);
        e = n ? n.index : null;
      }
      if (t || (F && e)) {
        const r = KRef.current.clientHeight;
        const relativeTop = H({
          itemHeight: ed(getItemKey(ea.itemIndex, eu)),
          itemOffsetPtg: ea.itemOffsetPtg,
          scrollPtg: z({
            scrollTop: ea.scrollTop,
            scrollHeight: eu.length * itemHeight_1,
            clientHeight: r,
          }),
          clientHeight: r,
        });
        if (t === "raw") {
          let i = relativeTop;
          for (let l = 0; l < ea.itemIndex; l++) {
            i -= ed(getItemKey(l));
          }
          KRef.current.scrollTop = -i;
          YRef.current = true;
          URef.current = G.e(function () {
            YRef.current = false;
          });
        } else {
          em({
            itemIndex: ea.itemIndex,
            relativeTop,
          });
        }
      }
    },
    [data, F],
  );
  A_13(
    function () {
      if (ea.status === "MEASURE_START") {
        let e;
        const t = KRef.current;
        const n = t.scrollTop;
        const scrollHeight = t.scrollHeight;
        const o = t.clientHeight;
        const i = z({
          scrollTop: n,
          scrollHeight,
          clientHeight: o,
        });
        let startItemTop =
          (e = {
            scrollPtg: i,
            clientHeight: o,
            scrollTop: n - (ei.top + ei.bottom) * i,
            itemHeight: ed(getItemKey(ea.itemIndex)),
            itemOffsetPtg: ea.itemOffsetPtg,
          }).scrollTop + H(M(e, ["scrollTop"]));
        for (let a = ea.itemIndex - 1; a >= ea.startIndex; a--) {
          startItemTop -= ed(getItemKey(a));
        }
        ec({
          ...ea,
          startItemTop,
          status: "MEASURE_DONE",
        });
      }
    },
    [ea],
  );
  i.useImperativeHandle(
    t,
    function () {
      return {
        dom: KRef.current,
        scrollTo: function (e) {
          if (URef.current) {
            G.N(URef.current);
          }
          URef.current = G.e(function () {
            if (typeof e === "number") {
              KRef.current.scrollTop = e;
              return;
            }
            let t;
            const n =
              "index" in e
                ? e.index
                : "key" in e
                  ? data.findIndex((t, n) => ef(t, n) === e.key)
                  : 0;
            const r = data[n];
            if (r) {
              let o =
                typeof e === "object" &&
                ((t = e.options) == null ? undefined : t.block)
                  ? e.options.block
                  : (scrollOptions == null ? undefined : scrollOptions.block) ||
                    "nearest";
              const i = KRef.current;
              const l = i.clientHeight;
              const c = i.scrollTop;
              if (F && !isStaticItemHeight) {
                if (o === "nearest") {
                  const u = ea.itemIndex;
                  const s = ea.itemOffsetPtg;
                  if (Math.abs(u - n) < R) {
                    var f = H({
                      itemHeight: ed(getItemKey(u)),
                      itemOffsetPtg: s,
                      clientHeight: l,
                      scrollPtg: z(KRef.current),
                    });
                    if (n < u) {
                      for (var p = n; p < u; p++) {
                        f -= ed(getItemKey(p));
                      }
                    } else {
                      for (var p = u; p < n; p++) {
                        f += ed(getItemKey(p));
                      }
                    }
                    if (!(f < 0) && !(f > l)) {
                      return;
                    }
                    o = f < 0 ? "start" : "end";
                  } else {
                    o = n < u ? "start" : "end";
                  }
                }
                ec({
                  ...ea,
                  startIndex: Math.max(0, n - R),
                  endIndex: Math.min(data_length - 1, n + R),
                }).then(() => {
                  const e = ed(ef(r, n));
                  em({
                    itemIndex: n,
                    relativeTop:
                      o === "start" ? 0 : (l - e) / (o === "center" ? 2 : 1),
                  });
                });
              } else {
                const d = ed(getItemKey(n));
                var f = 0;
                for (var p = 0; p < n; p++) {
                  f += ed(getItemKey(p));
                }
                const m = f + d;
                const h = f + d / 2;
                if (h > c && h < l + c) {
                  return;
                }
                if (o === "nearest") {
                  if (f < c) {
                    o = "start";
                  } else if (m > c + l) {
                    o = "end";
                  }
                }
                const y = l - d;
                KRef.current.scrollTop =
                  f - (o === "start" ? 0 : y / (o === "center" ? 2 : 1));
              }
            }
          });
        },
      };
    },
    [data, itemHeight_1, ea],
  );
  const eh = (e, t) =>
    e.map((e, n) => {
      const r = t + n;
      const o = N(e, r, {
        style: {},
      });
      const l = ef(e, r);
      return i.cloneElement(o, {
        key: l,
        ref: function (e) {
          const ORef_current = ORef.current;
          if (
            e &&
            ea.status === "MEASURE_START" &&
            (!isStaticItemHeight || ORef_current[l] === undefined)
          ) {
            if (isStaticItemHeight) {
              if (!ORef_current[en]) {
                ORef_current[en] = V(e, true);
              }
              ORef_current[l] = ORef_current[en];
            } else {
              ORef_current[l] = V(e, true);
            }
          }
        },
      });
    });
  const eyRef = i.useRef(null);
  i.useEffect(
    function () {
      eyRef.current = null;
    },
    [data],
  );
  return i.createElement(
    A_12,
    {
      onResize: function () {
        if (KRef.current && !Et(maxHeight)) {
          A(KRef.current.clientHeight);
        }
      },
    },
    i.createElement(
      wrapper === undefined ? "div" : wrapper,
      {
        ref: KRef,
        style: {
          overflowY: "auto",
          overflowAnchor: "none",
          ...style,
          maxHeight,
        },
        className,
        onScroll: F
          ? ev
          : function (e) {
              const KRef_current = KRef.current;
              const t_scrollTop = KRef_current.scrollTop;
              const t_clientHeight = KRef_current.clientHeight;
              const t_scrollHeight = KRef_current.scrollHeight;
              const i = D(t_scrollTop, t_scrollHeight - t_clientHeight);
              const l = _(
                z({
                  scrollTop: i,
                  clientHeight: t_clientHeight,
                  scrollHeight: t_scrollHeight,
                }),
                data_length,
              );
              const l_index = l.index;
              const l_offsetPtg = l.offsetPtg;
              ec({
                ...ea,
                scrollTop: i,
                itemIndex: l_index,
                itemOffsetPtg: l_offsetPtg,
              });
              if (e && onScroll) {
                onScroll(e);
              }
            },
        ...rest,
      },
      F
        ? i.createElement(
            i.Fragment,
            null,
            i.createElement(
              B,
              {
                height: I,
                offset: ea.status === "MEASURE_DONE" ? ea.startItemTop : 0,
                outerStyle,
              },
              eh(data.slice(ea.startIndex, ea.endIndex + 1), ea.startIndex),
            ),
            (() => {
              if (measureLongestItem) {
                let e;
                let t;
                const n =
                  eyRef.current === null
                    ? ((e = -1),
                      (t = 0),
                      data.forEach((n, r) => {
                        let o;
                        if (
                          typeof (n =
                            typeof n === "string"
                              ? n
                              : (o = n.props) == null
                                ? undefined
                                : o.children) === "string"
                        ) {
                          const i = ((e) => {
                            let t = 0;
                            for (let n = 0; n < e.length; n++) {
                              if (
                                e.charCodeAt(n) > 127 ||
                                e.charCodeAt(n) === 94
                              ) {
                                t += 2;
                              } else {
                                t++;
                              }
                            }
                            return t;
                          })(n);
                          if (i > t) {
                            t = i;
                            e = r;
                          }
                        }
                      }),
                      e)
                    : eyRef.current;
                const r = data[n];
                eyRef.current = n;
                if (r) {
                  return i.createElement(
                    "div",
                    {
                      style: {
                        height: 1,
                        overflow: "hidden",
                        opacity: 0,
                      },
                    },
                    N(r, n, {
                      style: {},
                    }),
                  );
                }
                return null;
              }
              return null;
            })(),
          )
        : needFiller === undefined || needFiller
          ? i.createElement(
              B,
              {
                height: height_1,
              },
              eh(data, 0),
            )
          : eh(data, 0),
    ),
  );
});
ei.displayName = "VirtualList";
const ec = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const eu = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
function es(width) {
  if (Et(width)) {
    return width;
  }
  if (Kg(width) && width.includes("px")) {
    return +width.replace("px", "");
  }
  return width;
}
function ef(e, t) {
  return cy(e[t]) && e[t].length;
}
function ep(e) {
  if (Gv(e)) {
    return e.__ORIGIN_DATA;
  }
  if (e && cy(e)) {
    return e.map((e) => {
      if (Gv(e)) {
        return e.__ORIGIN_DATA;
      }
      return e;
    });
  }
  return e;
}
function ed(e, t, n, r, o) {
  if (e.__INTERNAL_PARENT) {
    const i = r(e.__INTERNAL_PARENT);
    if (cy(e.__INTERNAL_PARENT[o])) {
      const l = e.__INTERNAL_PARENT[o].length;
      let a = 0;
      let c = false;
      e.__INTERNAL_PARENT[o].forEach((e) => {
        if (t.has(r(e))) {
          a += 1;
        }
        if (n.has(r(e))) {
          n.add(i);
          c = true;
        }
      });
      if (l === a) {
        t.add(i);
        n.delete(i);
      } else if (a > 0 && l > a) {
        t.delete(i);
        n.add(i);
      } else if (a === 0) {
        t.delete(i);
        if (!c) {
          n.delete(i);
        }
      }
    }
    ed(e.__INTERNAL_PARENT, t, n, r, o);
  }
}
function em(sorter) {
  if (typeof sorter === "function") {
    return sorter;
  }
  if (typeof sorter === "object" && typeof sorter.compare === "function") {
    return sorter.compare;
  }
  return null;
}
function ev(sorter) {
  if (typeof sorter === "object" && typeof sorter.multiple === "number") {
    return sorter.multiple;
  }
}
const eC = i.memo(function (e) {
  let t;
  let o;
  let l;
  const e_components = e.components;
  const e_InnerComponentTd = e.InnerComponentTd;
  const e_column = e.column;
  const e_columnIndex = e.columnIndex;
  const e_prefixCls = e.prefixCls;
  const e_stickyClassName = e.stickyClassName;
  const e_stickyOffset = e.stickyOffset;
  const e_currentSorter = e.currentSorter;
  const e_virtualized = e.virtualized;
  const e_record = e.record;
  const e_trIndex = e.trIndex;
  const e_level = e.level;
  const e_placeholder = e.placeholder;
  const e_indentSize = e.indentSize;
  const e_renderExpandIcon = e.renderExpandIcon;
  const e_rowKey = e.rowKey;
  const e_recordHaveChildren = e.recordHaveChildren;
  const e_haveTreeData = e.haveTreeData;
  const rtl = i.useContext(QO).rtl;
  const ComponentBodyCell = useO(e_components).ComponentBodyCell;
  const j = A_1(
    e_prefixCls + "-td",
    e_stickyClassName,
    {
      [e_prefixCls + "-col-sorted"]:
        e_currentSorter &&
        e_currentSorter.direction &&
        e_currentSorter.field === e_column.dataIndex,
    },
    e_column.className,
  );
  let R = {};
  let I = {};
  if (e_column.fixed === "left") {
    I[rtl ? "right" : "left"] = e_stickyOffset;
  }
  if (e_column.fixed === "right") {
    I[rtl ? "left" : "right"] = e_stickyOffset;
  }
  if (Gv(e_column.cellStyle)) {
    I = {
      ...I,
      ...e_column.cellStyle,
    };
  }
  if (Gv(e_column.bodyCellStyle)) {
    I = {
      ...I,
      ...e_column.bodyCellStyle,
    };
  }
  if (e_column.align) {
    I.textAlign = e_column.align;
  }
  if (e_virtualized && e_column.width) {
    I.width = e_column.width;
    I.minWidth = e_column.width;
    I.maxWidth = e_column.width;
  }
  const F = e_column.onCell
    ? e_column.onCell(e_record, e_trIndex)
    : {
        onHandleSave: function () {},
      };
  const { onHandleSave, ...rest } = F;
  let V = i.useMemo(
    function () {
      return (
        e_column.render &&
        e_column.render(
          eg.A(e_record, e_column.dataIndex),
          ep(e_record),
          e_trIndex,
        )
      );
    },
    [e_record, e_column, e_trIndex],
  );
  if ((t = V) && !i.isValidElement(t) && Gv(t)) {
    o = (R = V.props).rowSpan;
    l = R.colSpan;
    V = V.children;
  }
  if (o === 0 || l === 0) {
    return null;
  }
  const D = eg.A(e_record, e_column.dataIndex);
  const title = e_column.render
    ? V
    : D === undefined ||
        (typeof D === "string" && D.trim() === "") ||
        D === null
      ? e_column.placeholder === undefined
        ? e_placeholder
        : e_column.placeholder
      : D;
  const L =
    e_column.ellipsis && typeof title === "string"
      ? {
          title,
        }
      : {};
  const H = e_haveTreeData && e_column.$$isFirstColumn;
  const G = H && e_recordHaveChildren;
  let W = H && e_level > 0 ? e_indentSize * e_level : 0;
  if (H && !e_recordHaveChildren) {
    W += 20;
  }
  const K = i.createElement(
    i.Fragment,
    null,
    G
      ? i.createElement(
          "span",
          {
            className: e_prefixCls + "-cell-expand-icon",
          },
          e_renderExpandIcon(e_record, e_rowKey),
        )
      : null,
    Kg(ComponentBodyCell)
      ? i.createElement(
          ComponentBodyCell,
          {
            className: e_prefixCls + "-cell-wrap-value",
          },
          title,
        )
      : i.createElement(
          ComponentBodyCell,
          {
            rowData: e_record,
            className: e_prefixCls + "-cell-wrap-value",
            column: e_column,
            onHandleSave,
            ...rest,
          },
          title,
        ),
  );
  return i.createElement(
    e_InnerComponentTd,
    {
      className: j,
      key: e_column.key || e_column.dataIndex || e_columnIndex,
      style: I,
      ...eb.A(rest, [
        "onClick",
        "onDoubleClick",
        "onContextMenu",
        "onMouseOver",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseDown",
        "onMouseUp",
      ]),
      ...R,
    },
    i.createElement(
      "div",
      {
        className: A_1(e_prefixCls + "-cell", {
          [e_prefixCls + "-cell-text-ellipsis"]: e_column.ellipsis,
        }),
        ...L,
      },
      W
        ? i.createElement("span", {
            className: e_prefixCls + "-cell-indent",
            style: {
              paddingLeft: W,
            },
          })
        : null,
      K,
    ),
  );
});
const eS = i.forwardRef(function (e, t) {
  let r;
  const e_expandedRowRender = e.expandedRowRender;
  const e_onClickExpandBtn = e.onClickExpandBtn;
  const e_columns = e.columns;
  const e_components = e.components;
  const e_onCheck = e.onCheck;
  const e_onCheckRadio = e.onCheckRadio;
  const e_prefixCls = e.prefixCls;
  const e_selectedRowKeys = e.selectedRowKeys;
  const e_indeterminateKeys = e.indeterminateKeys;
  const e_rowClassName = e.rowClassName;
  const e_onRow = e.onRow;
  const e_rowSelection = e.rowSelection;
  const e_indentSize = e.indentSize;
  const indentSize = e_indentSize === undefined ? 16 : e_indentSize;
  const e_activeSorters = e.activeSorters;
  const e_virtualized = e.virtualized;
  const e_stickyOffsets = e.stickyOffsets;
  const e_stickyClassNames = e.stickyClassNames;
  const e_getRowKey = e.getRowKey;
  const e_placeholder = e.placeholder;
  const e_expandProps = e.expandProps;
  const I =
    e_expandProps === undefined
      ? {
          strictTreeData: true,
        }
      : e_expandProps;
  const e_data = e.data;
  const e_expandedRowKeys = e.expandedRowKeys;
  const e_childrenColumnName = e.childrenColumnName;
  const e_record = e.record;
  const e_index = e.index;
  const e_type = e.type;
  const e_shouldRowExpand = e.shouldRowExpand;
  const e_level = e.level;
  const rtl = i.useContext(QO).rtl;
  const W = ep(e_record);
  const { ...rest } = (e_onRow && e_onRow(W, e_index)) || {};
  const B = e_getRowKey(e_record);
  const U =
    e_type === "radio" ? e_selectedRowKeys.slice(0, 1) : e_selectedRowKeys;
  const Q = B || e_index;
  const q = U.indexOf(B) > -1;
  const Y = e_expandedRowKeys.indexOf(B) > -1;
  const indeterminate = e_indeterminateKeys.indexOf(B) > -1;
  const X = A_1(
    e_prefixCls + "-tr",
    {
      [e_prefixCls + "-row-checked"]: q,
      [e_prefixCls + "-row-expanded"]: Y,
    },
    e_rowClassName && e_rowClassName(W, e_index),
  );
  const J =
    e_rowSelection && typeof e_rowSelection.checkboxProps === "function"
      ? e_rowSelection.checkboxProps(W)
      : {};
  const Z = A_1(e_prefixCls + "-td", e_prefixCls + "-operation");
  const ee = (e) =>
    A_1(Z, e_prefixCls + "-" + e, {
      [e_prefixCls + "-selection-col"]:
        (e_virtualized && e_type === "checkbox") || e_type === "radio",
      [e_prefixCls + "-expand-icon-col"]: e_virtualized && e_expandedRowRender,
    });
  function et(e) {
    if (I.strictTreeData) {
      return cy(e[e_childrenColumnName]) && e[e_childrenColumnName].length;
    }
    return e[e_childrenColumnName] !== undefined;
  }
  const en = e_shouldRowExpand(e_record, e_index);
  const recordHaveChildren = et(e_record);
  const haveTreeData =
    !e_virtualized && e_data.find((e) => et(e)) && !e_expandedRowRender;
  const ei =
    I.expandRowByClick && (en || (haveTreeData && recordHaveChildren))
      ? {
          onClick: function (e) {
            e_onClickExpandBtn(B);
            if (rest && rest.onClick) {
              rest.onClick(e);
            }
          },
        }
      : {};
  const ea = useO(e_components);
  const ea_ComponentBodyRow = ea.ComponentBodyRow;
  const ea_ComponentTd = ea.ComponentTd;
  const ea_getBodyComponentOperations = ea.getBodyComponentOperations;
  const ef = e_virtualized ? "div" : ea_ComponentBodyRow;
  const InnerComponentTd = e_virtualized ? "div" : ea_ComponentTd;
  const em = {
    className: X,
    key: Q,
    ...rest,
    ...ei,
  };
  const ev = Kg(ea_ComponentBodyRow)
    ? em
    : {
        ...em,
        record: e_record,
        index: e_index,
      };
  function renderExpandIcon(record, t) {
    const I_icon = I.icon;
    const expanded = !!~e_expandedRowKeys.indexOf(t);
    const o = {
      onClick: function (e) {
        e.stopPropagation();
        e_onClickExpandBtn(t);
      },
    };
    if (typeof I_icon === "function") {
      return I_icon({
        expanded,
        record,
        ...o,
      });
    }
    return i.createElement(
      "button",
      {
        ...o,
        type: "button",
      },
      expanded ? i.createElement(ey.A, null) : i.createElement(eh.A, null),
    );
  }
  const eb =
    e_expandedRowRender &&
    i.createElement(
      InnerComponentTd,
      {
        className: ee("expand-icon-cell"),
      },
      en && renderExpandIcon(e_record, B),
    );
  const ex = e_rowSelection && e_rowSelection.renderCell;
  const eE = i.createElement(A_3, {
    value: B,
    onChange: function (e) {
      return e_onCheck(e, e_record);
    },
    checked: q,
    indeterminate,
    ...J,
  });
  const eS = i.createElement(A_14, {
    onChange: function () {
      return e_onCheckRadio(B, e_record);
    },
    value: B,
    checked: q,
    ...J,
  });
  if (e_type === "checkbox") {
    r = i.createElement(
      InnerComponentTd,
      {
        className: ee("checkbox"),
      },
      ex ? ex(eE, q, W) : eE,
    );
  }
  if (e_type === "radio") {
    r = i.createElement(
      InnerComponentTd,
      {
        className: ee("radio"),
      },
      ex ? ex(eS, q, W) : eS,
    );
  }
  const eP = ea_getBodyComponentOperations({
    selectionNode: r,
    expandNode: eb,
  });
  return i.createElement(
    ef,
    {
      ...ev,
      ref: t,
    },
    e_columns.map((e, t) => {
      let r;
      let o;
      let l;
      let a;
      const stickyOffset = e_stickyOffsets[t];
      const stickyClassName = e_stickyClassNames[t];
      if (e.$$isOperation) {
        let p = e.node;
        let d = true;
        if (e.title === T) {
          p =
            (r = eP.find((e) => e.name === "selectionNode")) == null
              ? undefined
              : r.node;
          d = false;
        }
        if (e.title === j) {
          p =
            (o = eP.find((e) => e.name === "expandNode")) == null
              ? undefined
              : o.node;
          d = false;
        }
        const v = typeof p === "function" ? p(e_record) : p;
        return i.cloneElement(v, {
          key: e.key || t,
          ...v.props,
          className: A_1(
            d ? Z : "",
            (l = v == null ? undefined : v.props) == null
              ? undefined
              : l.className,
            stickyClassName,
          ),
          style: {
            ...((a = v == null ? undefined : v.props) == null
              ? undefined
              : a.style),
            ...(e.fixed === "left"
              ? {
                  [rtl ? "right" : "left"]: stickyOffset,
                }
              : {}),
            width: e.width,
            minWidth: e.width,
          },
        });
      }
      return i.createElement(eC, {
        key: t,
        prefixCls: e_prefixCls,
        virtualized: e_virtualized,
        components: e_components,
        currentSorter: e_activeSorters.find((t) => t.field === e.key),
        placeholder: e_placeholder,
        indentSize,
        stickyClassName,
        stickyOffset,
        InnerComponentTd,
        column: e,
        columnIndex: t,
        record: e_record,
        trIndex: e_index,
        level: e_level,
        haveTreeData,
        recordHaveChildren,
        rowKey: B,
        renderExpandIcon,
      });
    }),
  );
});
const eA = function (e) {
  let t;
  const e_childrenColumnName = e.childrenColumnName;
  const r =
    e_childrenColumnName === undefined ? "children" : e_childrenColumnName;
  const e_expandProps = e.expandProps;
  const l = e_expandProps === undefined ? {} : e_expandProps;
  const e_expandedRowRender = e.expandedRowRender;
  const e_expandedRowKeys = e.expandedRowKeys;
  const e_data = e.data;
  const e_columns = e.columns;
  const e_prefixCls = e.prefixCls;
  const e_components = e.components;
  const e_rowSelection = e.rowSelection;
  const e_noDataElement = e.noDataElement;
  const e_scroll = e.scroll;
  const e_indentSize = e.indentSize;
  const paddingLeft = e_indentSize === undefined ? 16 : e_indentSize;
  const e_hasFixedColumn = e.hasFixedColumn;
  const e_tableViewWidth = e.tableViewWidth;
  const e_virtualized = e.virtualized;
  const e_virtualListProps = e.virtualListProps;
  const e_getRowKey = e.getRowKey;
  const e_saveVirtualWrapperRef = e.saveVirtualWrapperRef;
  const A = e_expandedRowRender
    ? function (e, t) {
        return e_expandedRowRender(ep(e), t);
      }
    : e_expandedRowRender;
  const ComponentTbody = useO(e_components).ComponentTbody;
  function shouldRowExpand(e, t) {
    if ("rowExpandable" in l && typeof l.rowExpandable === "function") {
      return l.rowExpandable(e);
    }
    return A && A(e, t) !== null;
  }
  if (e_rowSelection && "type" in e_rowSelection) {
    t = e_rowSelection.type;
  } else if (!(!e_rowSelection || "type" in e_rowSelection)) {
    t = "checkbox";
  }
  const T = {
    ...e,
    type: t,
    shouldRowExpand,
  };
  let j = {};
  let R = {};
  if (e_scroll) {
    if (
      e_scroll.x &&
      (typeof e_scroll.x === "number" || typeof e_scroll.x === "string")
    ) {
      j = {
        width: e_scroll.x,
      };
    }
    if (
      e_scroll.y &&
      (typeof e_scroll.y === "number" || typeof e_scroll.y === "string")
    ) {
      R = {
        maxHeight: e_scroll.y,
      };
    }
  }
  const I = {
    className: e_prefixCls + "-no-data",
  };
  if (e_tableViewWidth) {
    I.className = e_prefixCls + "-no-data " + e_prefixCls + "-expand-fixed-row";
    I.style = {
      width: e_tableViewWidth,
    };
  }
  const F = i.createElement(
    "tr",
    {
      className: A_1(e_prefixCls + "-tr", e_prefixCls + "-empty-row"),
    },
    i.createElement(
      "td",
      {
        className: e_prefixCls + "-td",
        colSpan: e_columns.length,
      },
      i.createElement(
        "div",
        {
          ...I,
        },
        e_noDataElement,
      ),
    ),
  );
  if (e_virtualized) {
    if (e_data.length > 0) {
      return i.createElement(
        ei,
        {
          data: e_data,
          height: R.maxHeight,
          isStaticItemHeight: false,
          outerStyle: {
            ...j,
            minWidth: "100%",
            overflow: "visible",
          },
          className: e_prefixCls + "-body",
          ref: function (e) {
            return e_saveVirtualWrapperRef(e == null ? undefined : e.dom);
          },
          ...e_virtualListProps,
        },
        function (e, t) {
          return i.createElement(eS, {
            ...T,
            key: e_getRowKey(e),
            record: e,
            index: t,
            level: 0,
          });
        },
      );
    }
    return i.createElement(
      "div",
      {
        className: e_prefixCls + "-body",
      },
      i.createElement("table", null, i.createElement("tbody", null, F)),
    );
  }
  return i.createElement(
    ComponentTbody,
    null,
    e_data.length > 0
      ? e_data.map((e, t) => {
          let n;
          let o;
          const l = e_getRowKey(e);
          const a =
            shouldRowExpand(e, t) && e_expandedRowKeys.indexOf(l) !== -1;
          return i.createElement(
            i.Fragment,
            {
              key: l,
            },
            ((n = []).push(
              i.createElement(eS, {
                key: e_getRowKey(e),
                ...T,
                record: e,
                level: 0,
                index: t,
              }),
            ),
            (o = function (e, t, l = 0) {
              if (cy(e) && e.length) {
                e.forEach((e, a) => {
                  if (e_expandedRowKeys.indexOf(t) !== -1) {
                    n.push(
                      i.createElement(eS, {
                        ...T,
                        key: e_getRowKey(e),
                        record: e,
                        level: l + 1,
                        index: a,
                      }),
                    );
                    if (cy(e[r]) && e[r].length) {
                      o(e[r], e_getRowKey(e), l + 1);
                    }
                  }
                });
              }
            }),
            A || o(e[r], e_getRowKey(e)),
            n),
            a &&
              i.createElement(
                "tr",
                {
                  className: A_1(
                    e_prefixCls + "-tr",
                    e_prefixCls + "-expand-content",
                  ),
                  key: l + "-expanded",
                },
                i.createElement(
                  "td",
                  {
                    className: e_prefixCls + "-td",
                    colSpan: e_columns.length,
                    style: {
                      paddingLeft,
                    },
                  },
                  e_hasFixedColumn
                    ? i.createElement(
                        "div",
                        {
                          className: e_prefixCls + "-expand-fixed-row",
                          style: {
                            width: e_tableViewWidth,
                          },
                        },
                        A && A(e, t),
                      )
                    : A && A(e, t),
                ),
              ),
          );
        })
      : F,
  );
};
const ENContext = i.createContext({});
const ek = function (e) {
  const e_summary = e.summary;
  const e_data = e.data;
  const e_prefixCls = e.prefixCls;
  const e_columns = e.columns;
  const e_stickyOffsets = e.stickyOffsets;
  const e_stickyClassNames = e.stickyClassNames;
  return i.createElement(
    "tfoot",
    {
      className: e_prefixCls + "-tfoot",
    },
    i.createElement(
      ENContext.Provider,
      {
        value: {
          columns: e_columns,
          stickyOffsets: e_stickyOffsets,
          stickyClassNames: e_stickyClassNames,
          prefixCls: e_prefixCls,
        },
      },
      e_summary(ep(e_data)),
    ),
  );
};
const eM = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
function e_(e, t) {
  switch (e) {
    case "prev":
      if (t && t.prev) {
        return t.prev;
      }
      return i.createElement(eT.A, null);
    case "next":
      if (t && t.next) {
        return t.next;
      }
      return i.createElement(ej.A, null);
    case "more":
      if (t && t.more) {
        return t.more;
      }
      return i.createElement(eR.A, null);
    default:
      return null;
  }
}
r = o || (o = {});
r[(r.previous = 0)] = "previous";
r[(r.next = 1)] = "next";
const EVComponent = function (e) {
  let t;
  let n;
  const locale = i.useContext(QO).locale;
  const e_rootPrefixCls = e.rootPrefixCls;
  const e_current = e.current;
  const e_allPages = e.allPages;
  const e_jumpPage = e.jumpPage;
  const e_icons = e.icons;
  const e_disabled = e.disabled;
  const e_pageItemStyle = e.pageItemStyle;
  const e_itemRender = e.itemRender;
  const m = Math.min(
    e_allPages,
    Math.max(+(e_allPages > 0), e_current + e_jumpPage),
  );
  const v = A_1(e_rootPrefixCls + "-item " + e_rootPrefixCls + "-item-jumper");
  const h = e_("more", e_icons);
  const y =
    e_jumpPage > 0
      ? (t = locale.Pagination.nextSomePages) == null
        ? undefined
        : t.replace("{0}", e_jumpPage)
      : (n = locale.Pagination.prevSomePages) == null
        ? undefined
        : n.replace("{0}", -e_jumpPage);
  return i.createElement(
    "li",
    {
      style: e_pageItemStyle,
      className: v,
      onClick: function () {
        if (!e_disabled && e.onClick) {
          e.onClick(m);
        }
      },
      "aria-label": y,
    },
    e_itemRender ? e_itemRender(undefined, "more", h) : h,
  );
};
const EDComponent = function (e) {
  const n = i.useContext(QO);
  const n_locale = n.locale;
  const n_rtl = n.rtl;
  const a = A_15();
  const e_rootPrefixCls = e.rootPrefixCls;
  const e_current = e.current;
  const e_allPages = e.allPages;
  const e_type = e.type;
  const e_icons = e.icons;
  const e_disabled = e.disabled;
  const e_pageItemStyle = e.pageItemStyle;
  const e_itemRender = e.itemRender;
  const y = e_rootPrefixCls + "-item";
  const g = eM(n_rtl ? ["next", "prev"] : ["prev", "next"], 2);
  const b = g[0];
  const x = g[1];
  const C = e_type === o.previous ? e_(b, e_icons) : e_(x, e_icons);
  let w = false;
  w =
    e_allPages === 0 ||
    (e_type === o.previous ? e_current <= 1 : e_current === e_allPages);
  const O = e_disabled || w;
  let S = e_current + (e_type === o.previous ? -1 : 1);
  S = Math.max(0, Math.min(e_allPages, S));
  const P = o.previous === e_type ? "prev" : "next";
  const A = A_1(y, y + "-" + P, {
    [y + "-disabled"]: O,
  });
  const N = function () {
    if (!O && e.onClick) {
      e.onClick(S);
    }
  };
  return i.createElement(
    "li",
    {
      style: e_pageItemStyle,
      className: A,
      onClick: N,
      tabIndex: O ? -1 : 0,
      "aria-label": n_locale.Pagination[P],
      ...a({
        onPressEnter: N,
      }),
    },
    e_itemRender ? e_itemRender(undefined, P, C) : C,
  );
};
const EzComponent = function (e) {
  let t;
  const locale = i.useContext(QO).locale;
  const r = A_15();
  const e_pageNum = e.pageNum;
  const e_current = e.current;
  const e_rootPrefixCls = e.rootPrefixCls;
  const e_pageItemStyle = e.pageItemStyle;
  const e_activePageItemStyle = e.activePageItemStyle;
  const e_itemRender = e.itemRender;
  const p = e_rootPrefixCls + "-item";
  const d = e_current === e_pageNum;
  const m = A_1(p, d ? p + "-active" : "");
  let v = e_pageItemStyle;
  if (d) {
    v = {
      ...v,
      ...e_activePageItemStyle,
    };
  }
  const h = function (t) {
    const e_pageNum = e.pageNum;
    const e_onClick = e.onClick;
    const e_disabled = e.disabled;
    if (t.currentTarget.dataset.active !== "true") {
      t.stopPropagation();
      if (!e_disabled && e_onClick) {
        e_onClick(e_pageNum);
      }
    }
  };
  return i.createElement(
    "li",
    {
      style: v,
      className: m,
      onClick: h,
      tabIndex: e.disabled ? -1 : 0,
      "aria-label":
        (t = locale.Pagination.currentPage) == null
          ? undefined
          : t.replace("{0}", e_pageNum),
      ...r({
        onPressEnter: h,
      }),
      ...(d
        ? {
            "aria-current": true,
          }
        : {}),
    },
    e_itemRender ? e_itemRender(e_pageNum, "page", e_pageNum) : e_pageNum,
  );
};
const eK = i.forwardRef(function (e, t) {
  const { prefixCls, label, ...rest } = e;
  return i.createElement(
    "li",
    {
      ref: t,
      className: prefixCls + "-group-title",
      ...A_16(rest, ["_key", "children", "isSelectOptGroup"]),
    },
    label,
  );
});
eK.__ARCO_SELECT_OPTGROUP__ = true;
const eQ = i.forwardRef(function (e, t) {
  const {
    style,
    className,
    wrapperClassName,
    disabled,
    prefixCls,
    rtl,
    value,
    children,
    _isMultipleMode,
    _isUserCreatedOption,
    _isUserCreatingOption,
    _valueActive,
    _valueSelect,
    _onMouseEnter,
    _onMouseLeave,
    _onClick,
    ...rest
  } = e;
  const O = "value" in e ? value : "" + children;
  const S = "children" in e ? children : "" + value;
  const P = _isMultipleMode
    ? _valueSelect.indexOf(O) !== -1
    : _valueSelect === O;
  const A = {
    style,
    className: A_1(
      prefixCls + "-option",
      {
        [prefixCls + "-option-selected"]: P,
        [prefixCls + "-option-disabled"]: disabled,
        [prefixCls + "-option-hover"]: O === _valueActive,
        [prefixCls + "-option-empty"]:
          (!S && S !== 0) || (typeof S === "string" && /^\s*$/.test(S)),
        [prefixCls + "-option-rtl"]: rtl,
      },
      className,
    ),
    onMouseEnter: function (e) {
      if (_onMouseEnter) {
        _onMouseEnter(O);
      }
      if (rest.onMouseEnter) {
        rest.onMouseEnter(e);
      }
    },
    onMouseLeave: function (e) {
      if (_onMouseLeave) {
        _onMouseLeave();
      }
      if (rest.onMouseLeave) {
        rest.onMouseLeave(e);
      }
    },
    onClick: function (e) {
      if (_onClick) {
        _onClick(O, disabled);
      }
      if (rest.onClick) {
        rest.onClick(e);
      }
    },
    ...A_16(rest, [
      "_key",
      "extra",
      "isSelectOption",
      "onClick",
      "onMouseEnter",
      "onMouseLeave",
    ]),
  };
  const N = {
    ref: t,
    role: "option",
    "aria-selected": P,
  };
  if (_isUserCreatedOption) {
    Object.assign(N, {
      "data-user-created": true,
    });
  }
  if (_isUserCreatingOption) {
    Object.assign(N, {
      "data-user-creating": true,
    });
  }
  if (_isMultipleMode) {
    return i.createElement(
      "li",
      {
        ...N,
        className: A_1(
          prefixCls + "-option-wrapper",
          {
            [prefixCls + "-option-wrapper-selected"]: P,
            [prefixCls + "-option-wrapper-disabled"]: disabled,
          },
          wrapperClassName,
        ),
      },
      i.createElement(A_3, {
        "aria-hidden": "true",
        className: prefixCls + "-checkbox",
        checked: P,
        disabled,
        onChange: A.onClick,
      }),
      i.createElement(
        "span",
        {
          ...A,
        },
        S,
      ),
    );
  }
  return i.createElement(
    "li",
    {
      ...N,
      ...A,
    },
    S,
  );
});
eQ.__ARCO_SELECT_OPTION__ = true;
const eq = (e) =>
  JSON.stringify({
    code: e.code,
    ctrl: !!e.ctrl,
    shift: !!e.shift,
    alt: !!e.alt,
    meta: !!e.meta,
  });
function eY(e) {
  const t = {};
  e.forEach((e, code) => {
    t[
      eq(
        (code =
          typeof code === "number"
            ? {
                code,
              }
            : code),
      )
    ] = e;
  });
  return function (e) {
    const n =
      t[
        eq({
          code: e.keyCode || e.which,
          ctrl: !!e.ctrlKey,
          shift: !!e.shiftKey,
          alt: !!e.altKey,
          meta: !!e.metaKey,
        })
      ];
    if (n) {
      e.stopPropagation();
      if (n(e) === false) {
        e.preventDefault();
      }
    }
  };
}
const e7 = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const e8 = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray",
];
const e9 = {
  size: "default",
};
const te = i.forwardRef(function (e, t) {
  const r = i.useContext(QO);
  const r_getPrefixCls = r.getPrefixCls;
  const r_componentConfig = r.componentConfig;
  const r_rtl = r.rtl;
  const c = A_15();
  const u = A_19(
    e,
    e9,
    r_componentConfig == null ? undefined : r_componentConfig.Tag,
  );
  const {
    className,
    style,
    children,
    color,
    closable,
    checkable,
    defaultChecked,
    size,
    onClose,
    onCheck,
    icon,
    closeIcon,
    bordered,
    __closeIconProps,
    ...rest
  } = u;
  const prefix = r_getPrefixCls("tag");
  const N = e7(i.useState(!("visible" in u) || u.visible), 2);
  const k = N[0];
  const T = N[1];
  const j = e7(i.useState("checked" in u ? u.checked : defaultChecked), 2);
  const R = j[0];
  const I = j[1];
  const F = e7(i.useState(), 2);
  const M = F[0];
  const _ = F[1];
  const V = "checked" in u ? u.checked : R;
  const D = "visible" in u ? u.visible : k;
  function z(e) {
    const t = onClose && onClose(e);
    if (t && t.then) {
      _(true);
      t.then(() => {
        _(false);
        T(false);
      }).catch(() => {
        _(false);
      });
    } else {
      T(false);
    }
  }
  const L = color && e8.indexOf(color) !== -1 ? color : "";
  const H = !checkable || V;
  const G = A_1(
    prefix,
    {
      [prefix + "-loading"]: M,
      [prefix + "-hide"]: !D,
      [prefix + "-" + L]: L,
      [prefix + "-checkable"]: checkable,
      [prefix + "-checked"]: H,
      [prefix + "-size-" + size]: size,
      [prefix + "-bordered"]: bordered,
      [prefix + "-custom-color"]: H && color && !L,
      [prefix + "-rtl"]: r_rtl,
    },
    className,
  );
  const W = {
    ...style,
  };
  if (color && !L && H) {
    W.backgroundColor = color;
    W.borderColor = color;
  }
  const K = A_16(rest, ["visible"]);
  if (checkable) {
    K.onClick = function () {
      const e = !V;
      if (!("checked" in u)) {
        I(e);
      }
      if (onCheck) {
        onCheck(e);
      }
    };
  }
  return i.createElement(
    "div",
    {
      ref: t,
      style: W,
      className: G,
      ...K,
    },
    icon &&
      i.createElement(
        "span",
        {
          className: prefix + "-icon",
        },
        icon,
      ),
    i.createElement(
      "span",
      {
        className: prefix + "-content",
      },
      children,
    ),
    closable &&
      !M &&
      closeIcon !== null &&
      i.createElement(
        A_18,
        {
          prefix,
          className: prefix + "-close-btn",
          onClick: z,
          role: "button",
          tabIndex: 0,
          ...c({
            onPressEnter: z,
          }),
          "aria-label": "Close",
          ...__closeIconProps,
        },
        closeIcon !== undefined ? closeIcon : i.createElement(eZ.A, null),
      ),
    M &&
      i.createElement(
        "span",
        {
          className: prefix + "-loading-icon",
        },
        i.createElement(eJ.A, null),
      ),
  );
});
te.displayName = "Tag";
const tn = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const TrComponent = function (e) {
  const e_prefixCls = e.prefixCls;
  const e_style = e.style;
  const e_children = e.children;
  const e_direction = e.direction;
  const e_disabled = e.disabled;
  const e_droppable = e.droppable;
  const u = e_droppable === undefined || e_droppable;
  const e_onDrop = e.onDrop;
  const e_onDragStart = e.onDragStart;
  const e_onDragEnd = e.onDragEnd;
  const e_onDragOver = e.onDragOver;
  const e_onDragLeave = e.onDragLeave;
  const hRef = i.useRef(null);
  const yRef = i.useRef(null);
  const g = tn(i.useState("none"), 2);
  const b = g[0];
  const x = g[1];
  const E = tn(i.useState(false), 2);
  const C = E[0];
  const w = E[1];
  const O = tn(i.useState(null), 2);
  const S = O[0];
  const P = O[1];
  i.useEffect(function () {
    return function () {
      if (yRef.current) {
        clearTimeout(yRef.current);
      }
    };
  }, []);
  i.useEffect(
    function () {
      if (b === "dragged") {
        yRef.current = setTimeout(() => x("none"), 1000);
      }
    },
    [b],
  );
  return i.createElement(
    "li",
    {
      draggable: true,
      ref: hRef,
      style: e_style,
      className: A_1(e_prefixCls + "-item", {
        [e_prefixCls + "-item-" + b]: b !== "none",
        [e_prefixCls + "-item-gap-" + S]: S,
        [e_prefixCls + "-item-disabled"]: e_disabled,
        [e_prefixCls + "-item-dragover"]: C,
      }),
      onDragStart: function (e) {
        e.stopPropagation();
        x("dragging");
        try {
          e.dataTransfer.setData("text/plain", "");
        } catch (e) {}
        if (e_onDragStart) {
          e_onDragStart(e);
        }
      },
      onDragEnd: function (e) {
        e.stopPropagation();
        w(false);
        x("dragged");
        if (e_onDragEnd) {
          e_onDragEnd(e);
        }
      },
      onDragOver: function (e) {
        if (u) {
          e.stopPropagation();
          e.preventDefault();
          const t = hRef.current.getBoundingClientRect();
          if (e_direction === "vertical") {
            P(
              e.pageY > window.pageYOffset + t.top + t.height / 2
                ? "bottom"
                : "top",
            );
          } else {
            P(
              e.pageX > window.pageXOffset + t.left + t.width / 2
                ? "right"
                : "left",
            );
          }
          w(true);
          if (e_onDragOver) {
            e_onDragOver(e);
          }
        }
      },
      onDragLeave: function (e) {
        if (u) {
          e.stopPropagation();
          w(false);
          if (e_onDragLeave) {
            e_onDragLeave(e);
          }
        }
      },
      onDrop: function (e) {
        if (u) {
          e.stopPropagation();
          e.preventDefault();
          w(false);
          P(null);
          x("none");
          if (e_onDrop) {
            e_onDrop(e, S);
          }
        }
      },
    },
    e_children,
  );
};
const to = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
function TiComponent(e) {
  const t = i.useContext(QO).getPrefixCls("draggable");
  const e_className = e.className;
  const e_children = e.children;
  const e_direction = e.direction;
  const l = e_direction === undefined ? "vertical" : e_direction;
  const e_onIndexChange = e.onIndexChange;
  const e_itemWrapperStyle = e.itemWrapperStyle;
  const u = to(i.useState(null), 2);
  const f = u[0];
  const p = u[1];
  return i.createElement(
    "div",
    {
      className: A_1(t, e_className),
    },
    i.Children.map(e_children, function (e, n) {
      return i.createElement(
        TrComponent,
        {
          style: e_itemWrapperStyle,
          prefixCls: t,
          direction: l,
          onDragStart: function () {
            return p(n);
          },
          onDragEnd: function () {
            return p(null);
          },
          onDrop: function (e, t) {
            const r = t === "left" || t === "top" ? n : n + 1;
            if (e_onIndexChange && f !== r) {
              e_onIndexChange(r, f);
            }
          },
        },
        e,
      );
    }),
  );
}
const tc = (e, t, n, r) =>
  new (n || (n = Promise))(function (o, i) {
    function l(e) {
      try {
        c(r.next(e));
      } catch (error) {
        i(error);
      }
    }
    function a(e) {
      try {
        c(r.throw(e));
      } catch (error) {
        i(error);
      }
    }
    function c(e) {
      let t;
      if (e.done) {
        o(e.value);
      } else {
        ((t = e.value) instanceof n
          ? t
          : new n(function (e) {
              e(t);
            })
        ).then(l, a);
      }
    }
    c((r = r.apply(e, t || [])).next());
  });
const tu = (e, t) => {
  let n;
  let r;
  let o;
  let i;
  let l = {
    label: 0,
    sent: function () {
      if (1 & o[0]) {
        throw o[1];
      }
      return o[1];
    },
    trys: [],
    ops: [],
  };
  i = {
    next: a(0),
    throw: a(1),
    return: a(2),
  };
  if (typeof Symbol === "function") {
    i[Symbol.iterator] = function () {
      return this;
    };
  }
  return i;
  function a(i) {
    return function (a) {
      let c = [i, a];
      if (n) {
        throw TypeError("Generator is already executing.");
      }
      while (l) {
        try {
          n = 1;
          if (
            r &&
            (o =
              2 & c[0]
                ? r.return
                : c[0]
                  ? r.throw || ((o = r.return) && o.call(r), 0)
                  : r.next) &&
            !(o = o.call(r, c[1])).done
          ) {
            return o;
          }
          r = 0;
          if (o) {
            c = [2 & c[0], o.value];
          }
          switch (c[0]) {
            case 0:
            case 1:
              o = c;
              break;
            case 4:
              l.label++;
              return {
                value: c[1],
                done: false,
              };
            case 5:
              l.label++;
              r = c[1];
              c = [0];
              continue;
            case 7:
              c = l.ops.pop();
              l.trys.pop();
              continue;
            default:
              if (
                !(o = (o = l.trys).length > 0 && o[o.length - 1]) &&
                (c[0] === 6 || c[0] === 2)
              ) {
                l = 0;
                continue;
              }
              if (c[0] === 3 && (!o || (c[1] > o[0] && c[1] < o[3]))) {
                l.label = c[1];
                break;
              }
              if (c[0] === 6 && l.label < o[1]) {
                l.label = o[1];
                o = c;
                break;
              }
              if (o && l.label < o[2]) {
                l.label = o[2];
                l.ops.push(c);
                break;
              }
              if (o[2]) {
                l.ops.pop();
              }
              l.trys.pop();
              continue;
          }
          c = t.call(e, l);
        } catch (error) {
          c = [6, error];
          r = 0;
        } finally {
          o = 0;
          n = 0;
        }
      }
      if (5 & c[0]) {
        throw c[1];
      }
      return {
        value: c[0] ? c[1] : undefined,
        done: true,
      };
    };
  }
};
const tf = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const tp = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const td = "__input_" + Math.random().toFixed(10).slice(2);
const tm = (e) => e == null;
const tv = function (e) {
  if (e.target.tagName !== "INPUT") {
    e.preventDefault();
  }
};
const th = (e) => {
  if (cy(e)) {
    return e.map((e) => {
      if (Gv(e)) {
        return {
          ...e,
          label: "label" in e ? e.label : e.value,
          value: e.value,
          closable: e.closable,
        };
      }
      return {
        label: e,
        value: e,
      };
    });
  }
  return [];
};
const useTy = (e) => {
  const tRef = i.useRef(0);
  const nRef = i.useRef(e.length);
  i.useEffect(
    function () {
      tRef.current = 300 * (e.length === 0 && nRef.current > 0);
      nRef.current = e.length;
    },
    [e],
  );
  return tRef;
};
const tg = function (e) {
  const e_prefixCls = e.prefixCls;
  const e_children = e.children;
  if (e.animation) {
    return i.createElement(
      e1.A,
      {
        component: "div",
        className: e_prefixCls + "-inner",
      },
      e_children,
    );
  }
  return i.createElement(
    "div",
    {
      className: e_prefixCls + "-inner",
    },
    e_children,
  );
};
const tb = {
  animation: true,
  validate: function (e, t) {
    return e && t.every((t) => t.value !== e);
  },
};
const tx = i.forwardRef(function (e, t) {
  const o = this;
  const l = i.useContext(QO);
  const l_getPrefixCls = l.getPrefixCls;
  const l_size = l.size;
  const l_componentConfig = l.componentConfig;
  const l_rtl = l.rtl;
  const d = A_19(
    e,
    tb,
    l_componentConfig == null ? undefined : l_componentConfig.InputTag,
  );
  const {
    className,
    style,
    placeholder,
    error,
    disabled,
    readOnly,
    allowClear,
    autoFocus,
    labelInValue,
    disableInput,
    animation,
    saveOnBlur,
    dragToSort,
    icon,
    prefix,
    suffix,
    addBefore,
    addAfter,
    tokenSeparators,
    validate,
    renderTag,
    tagClassName,
    onInputChange,
    onKeyDown,
    onPaste,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onRemove,
    onClear,
    onClick,
    ...rest
  } = d;
  const Y = l_getPrefixCls("input-tag");
  const $ = "size" in d ? d.size : l_size;
  const XRef = i.useRef();
  const JRef = i.useRef(null);
  const Z = tf(i.useState(false), 2);
  const ee = Z[0];
  const et = Z[1];
  const en = tf(
    A_9([], {
      defaultValue: "defaultValue" in d ? th(d.defaultValue) : undefined,
      value: "value" in d ? th(d.value) : undefined,
    }),
    2,
  );
  const er = en[0];
  const eo = en[1];
  const ei = tf(
    A_9("", {
      value: d.inputValue,
    }),
    2,
  );
  const el = ei[0];
  const ea = ei[1];
  const ec = useTy(er);
  const eu = !!(dragToSort && !readOnly && !disabled);
  i.useImperativeHandle(
    t,
    function () {
      let e;
      let t;
      return {
        blur: (e = XRef.current) == null ? undefined : e.blur,
        focus: (t = XRef.current) == null ? undefined : t.focus,
      };
    },
    [],
  );
  const es = (e, t) => {
    if (!(disabled || readOnly)) {
      if (!("value" in d)) {
        eo(e);
      }
      if (onChange) {
        onChange(labelInValue ? e : e.map((e) => e.value), t);
      }
    }
  };
  const ef = (e, t, n) => {
    if (onRemove) {
      onRemove(e, t, n);
    }
    es(
      tp(tp([], tf(er.slice(0, t)), false), tf(er.slice(t + 1)), false),
      "remove",
    );
  };
  const ep = eY(
    new Map([
      [
        Er.code,
        function (e) {
          if (!e.target.value && er.length) {
            for (let t = er.length - 1; t >= 0; t--) {
              const n = er[t];
              if (n.closable !== false) {
                return void ef(n, t, e);
              }
            }
          }
        },
      ],
    ]),
  );
  const ed = () =>
    tc(o, undefined, undefined, function () {
      let e;
      let t;
      return tu(this, (n) => {
        switch (n.label) {
          case 0:
            n.trys.push([0, 4, , 5]);
            if (typeof validate !== "function") {
              return [3, 2];
            }
            return [4, validate(el, er)];
          case 1:
            t = n.sent();
            return [3, 3];
          case 2:
            t = true;
            n.label = 3;
          case 3:
            if ((e = t)) {
              es(
                er.concat({
                  value: e === true ? el : e,
                  label: el,
                }),
                "add",
              );
              ea("");
            }
            return [3, 5];
          case 4:
            console.error(n.sent());
            return [3, 5];
          case 5:
            return [2];
        }
      });
    });
  const em = (e, t) => {
    const e_value = e.value;
    const e_label = e.label;
    const closable = !readOnly && !disabled && e.closable !== false;
    const onClose = function (n) {
      ef(e, t, n);
    };
    if (renderTag) {
      return renderTag(
        {
          value: e_value,
          label: e_label,
          closable,
          onClose,
        },
        t,
        er,
      );
    }
    return i.createElement(
      te,
      {
        visible: true,
        className: A_1(Y + "-tag", {
          [tagClassName]: tagClassName,
        }),
        closable,
        closeIcon: icon && icon.removeIcon,
        __closeIconProps: {
          onMouseDown: tv,
        },
        title: typeof e_label === "string" ? e_label : undefined,
        onClose,
      },
      A_21(e_label),
    );
  };
  const ev = (e, t = false) =>
    tc(o, undefined, undefined, function () {
      let n;
      let r;
      const o = this;
      return tu(this, (i) => {
        switch (i.label) {
          case 0:
            if (t && Date.now() - JRef.current < 100) {
              return [2];
            }
            JRef.current = null;
            if (
              !(cy(tokenSeparators) && tokenSeparators.length) ||
              !(
                (n = e.split(RegExp("[" + tokenSeparators.join("") + "]")))
                  .length > 1
              )
            ) {
              return [3, 2];
            }
            JRef.current = Date.now();
            r = [];
            return [
              4,
              Promise.all(
                n.map((label) =>
                  tc(o, undefined, undefined, function () {
                    let t;
                    let n;
                    let o;
                    return tu(this, (i) => {
                      switch (i.label) {
                        case 0:
                          if (!label) {
                            return [3, 4];
                          }
                          if (typeof validate !== "function") {
                            return [3, 2];
                          }
                          return [4, validate(label, er)];
                        case 1:
                          o = i.sent();
                          return [3, 3];
                        case 2:
                          o = true;
                          i.label = 3;
                        case 3:
                          n = o;
                          return [3, 5];
                        case 4:
                          n = false;
                          i.label = 5;
                        case 5:
                          if ((t = n)) {
                            r.push({
                              value: t === true ? label : t,
                              label,
                            });
                          }
                          return [2];
                      }
                    });
                  }),
                ),
              ),
            ];
          case 1:
            i.sent();
            if (r.length) {
              es(er.concat(r), "add");
            }
            i.label = 2;
          case 2:
            return [2];
        }
      });
    });
  const eh =
    allowClear && !disabled && !readOnly && er.length
      ? i.createElement(
          A_18,
          {
            size: $,
            key: "clearIcon",
            className: Y + "-clear-icon",
            onClick: function (e) {
              let t;
              e.stopPropagation();
              es([], "clear");
              if (!(ee || (t = XRef.current) == null)) {
                t.focus();
              }
              if (onClear) {
                onClear();
              }
            },
          },
          (icon && icon.clearIcon) || i.createElement(eZ.A, null),
        )
      : null;
  const disabled_1 = disabled || disableInput;
  const eg = er
    .map((e, t) => {
      const n = er.findIndex((t) => t.value === e.value) !== t;
      const r = em(e, t);
      if (i.isValidElement(r)) {
        return i.createElement(
          e2.A,
          {
            key:
              typeof e.value === "object" ? t : n ? e.value + "-" + t : e.value,
            timeout: 300,
            classNames: "zoomIn",
          },
          r,
        );
      }
      return r;
    })
    .concat(
      i.createElement(
        e2.A,
        {
          key: td,
          timeout: 300,
          classNames: "zoomIn",
        },
        i.createElement(A_20, {
          autoComplete: "off",
          size: $,
          disabled: disabled_1,
          readOnly,
          ref: XRef,
          autoFocus,
          placeholder: er.length ? "" : placeholder,
          prefixCls: Y + "-input",
          autoFitWidth: {
            delay: function () {
              return ec.current;
            },
          },
          onPressEnter: function (e) {
            return tc(o, undefined, undefined, function () {
              return tu(this, (t) => {
                switch (t.label) {
                  case 0:
                    if (el) {
                      e.preventDefault();
                    }
                    if (onPressEnter != null) {
                      onPressEnter(e);
                    }
                    return [4, ed()];
                  case 1:
                    t.sent();
                    return [2];
                }
              });
            });
          },
          onFocus: function (e) {
            if (!(disabled_1 || readOnly)) {
              et(true);
              if (onFocus != null) {
                onFocus(e);
              }
            }
          },
          onBlur: function (e) {
            return tc(o, undefined, undefined, function () {
              return tu(this, (t) => {
                switch (t.label) {
                  case 0:
                    et(false);
                    if (onBlur != null) {
                      onBlur(e);
                    }
                    if (!saveOnBlur) {
                      return [3, 2];
                    }
                    return [4, ed()];
                  case 1:
                    t.sent();
                    t.label = 2;
                  case 2:
                    ea("");
                    return [2];
                }
              });
            });
          },
          value: el,
          onChange: function (e, t) {
            if (onInputChange != null) {
              onInputChange(e, t);
            }
            ev(e, t.nativeEvent.inputType === "insertFromPaste");
            if (JRef.current) {
              ea("");
            } else {
              ea(e);
            }
          },
          onKeyDown: function (e) {
            ep(e);
            if (onKeyDown != null) {
              onKeyDown(e);
            }
          },
          onPaste: function (e) {
            if (onPaste != null) {
              onPaste(e);
            }
            ev(e.clipboardData.getData("text"));
          },
        }),
      ),
    );
  const eb = !tm(prefix);
  const ex = !tm(suffix) || !tm(eh);
  const eE = !tm(addBefore);
  const eC = !tm(addAfter);
  const ew = eE || eC;
  const eO = d.status || (error ? "error" : undefined);
  const eS = A_1(Y, {
    [Y + "-size-" + $]: $,
    [Y + "-disabled"]: disabled,
    [Y + "-" + eO]: eO,
    [Y + "-focus"]: ee,
    [Y + "-readonly"]: readOnly,
    [Y + "-has-suffix"]: ex,
    [Y + "-has-placeholder"]: !er.length,
    [Y + "-rtl"]: l_rtl,
  });
  const eP = {
    style,
    className,
  };
  const eA = i.createElement(
    "div",
    {
      ...A_16(rest, ["status", "size", "defaultValue", "value", "inputValue"]),
      ...(!ew ? eP : {}),
      className: ew ? eS : A_1(eS, eP.className),
      onMouseDown: function (e) {
        if (ee) {
          tv(e);
        }
      },
      onClick: function (e) {
        let t;
        if (!(ee || (t = XRef.current) == null)) {
          t.focus();
        }
        if (onClick) {
          onClick(e);
        }
      },
    },
    i.createElement(
      "div",
      {
        className: Y + "-view",
      },
      eb &&
        i.createElement(
          "div",
          {
            className: Y + "-prefix",
            onMouseDown: tv,
          },
          prefix,
        ),
      eu
        ? i.createElement(
            tg,
            {
              key: "transitionGroupWithDrag",
              prefixCls: Y,
              animation,
            },
            i.createElement(
              TiComponent,
              {
                itemWrapperStyle: {
                  display: "inline-block",
                },
                direction: "horizontal",
                onIndexChange: function (e, t) {
                  let n;
                  let r;
                  let o;
                  es(
                    ((n = (n = er).slice()),
                    (r = t > e),
                    (o = tf(n.splice(t, 1), 1)[0]),
                    n.splice(r ? e : e - 1, 0, o),
                    n),
                    "sort",
                  );
                },
              },
              eg,
            ),
          )
        : i.createElement(
            tg,
            {
              prefixCls: Y,
              animation,
            },
            eg,
          ),
      ex &&
        i.createElement(
          "div",
          {
            className: Y + "-suffix",
            onMouseDown: tv,
          },
          eh,
          suffix,
        ),
    ),
  );
  if (ew) {
    return i.createElement(
      "div",
      {
        ...eP,
        className: A_1(
          Y + "-wrapper",
          {
            [Y + "-wrapper-rtl"]: l_rtl,
          },
          eP.className,
        ),
      },
      eE &&
        i.createElement(
          "div",
          {
            className: Y + "-addbefore",
          },
          addBefore,
        ),
      eA,
      eC &&
        i.createElement(
          "div",
          {
            className: Y + "-addafter",
          },
          addAfter,
        ),
    );
  }
  return eA;
});
tx.displayName = "InputTag";
const tw = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const tO = "__arco_value_tag_placeholder";
const tS = i.forwardRef(function (e, t) {
  let n;
  let r;
  const {
    style,
    className,
    size,
    bordered,
    allowClear,
    allowCreate,
    status,
    loading,
    disabled,
    animation,
    prefixCls,
    suffixIcon,
    arrowIcon,
    removeIcon,
    clearIcon,
    placeholder,
    renderText,
    value,
    inputValue,
    popupVisible,
    maxTagCount,
    isMultiple,
    isEmptyValue,
    prefix,
    ariaControls,
    renderTag,
    dragToSort,
    rtl,
    htmlDataAttributes,
    onKeyDown,
    onChangeInputValue,
    onPaste,
    onClear,
    onFocus,
    onBlur,
    onRemoveCheckedItem,
    onSort,
    ...rest
  } = e;
  const qRef = i.useRef(null);
  const YRef = i.useRef(null);
  const X = i.useContext(QO);
  const X_size = X.size;
  const X_getPrefixCls = X.getPrefixCls;
  const ee = tw(i.useState(2), 2);
  const et = ee[0];
  const en = ee[1];
  const er = tw(i.useState(false), 2);
  const eo = er[0];
  const ei = er[1];
  const el = useComponent();
  const ea = "showSearch" in e ? e.showSearch : isMultiple;
  const ec = ea || allowCreate;
  const eu = size || X_size;
  const es = eo || popupVisible;
  const ef = Gv(ea) && ea.retainInputValue;
  const ep = isMultiple || value === undefined ? "" : renderText(value).text;
  const ed = function (e) {
    if (e) {
      e.preventDefault();
    }
  };
  const em = function (e) {
    const t = ec ? qRef.current : YRef.current;
    if (t) {
      if (e === "focus") {
        t.focus();
      } else {
        t.blur();
      }
    }
  };
  const ev = (e, t) => {
    if (!ec || t.target !== YRef.current) {
      if (e === "focus") {
        ei(true);
        if (onFocus) {
          onFocus(t);
        }
      } else {
        ei(false);
        if (onBlur) {
          onBlur(t);
        }
      }
    }
  };
  const onKeyDown_1 = function (e) {
    if (!ec || e.currentTarget !== YRef.current) {
      if ((e.keyCode || e.which) === xy.code) {
        e.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    }
  };
  i.useEffect(
    function () {
      em(popupVisible ? "focus" : "blur");
      if (ec) {
        en(2 * !popupVisible);
      }
    },
    [popupVisible],
  );
  i.useImperativeHandle(t, function () {
    return {
      dom: YRef.current,
      focus: em.bind(null, "focus"),
      blur: em.bind(null, "blur"),
      getWidth: function () {
        return YRef.current && YRef.current.clientWidth;
      },
    };
  });
  const ey =
    "arrowIcon" in e
      ? arrowIcon === null
        ? null
        : i.createElement(
            "div",
            {
              className: prefixCls + "-arrow-icon",
            },
            arrowIcon,
          )
      : i.createElement(
          "div",
          {
            className: prefixCls + "-arrow-icon",
          },
          i.createElement(eX.A, null),
        );
  const eg = loading
    ? i.createElement(
        "span",
        {
          className: prefixCls + "-loading-icon",
        },
        i.createElement(eJ.A, null),
      )
    : suffixIcon
      ? i.createElement(
          "span",
          {
            className: prefixCls + "-suffix-icon",
          },
          suffixIcon,
        )
      : e.showSearch && popupVisible
        ? i.createElement(
            "div",
            {
              className: prefixCls + "-search-icon",
            },
            i.createElement(e0.A, null),
          )
        : ey;
  const onFocus_1 = function (e) {
    e.stopPropagation();
    ev("focus", e);
  };
  const onBlur_1 = function (e) {
    e.stopPropagation();
    ev("blur", e);
  };
  const onInputChange = function (e, t) {
    en(1);
    if (onChangeInputValue) {
      onChangeInputValue(e, t);
    }
  };
  const eC = status || (e.error ? "error" : undefined);
  const ew =
    disabled || isEmptyValue || !allowClear
      ? null
      : i.createElement(
          A_18,
          {
            size: eu,
            key: "clearIcon",
            className: prefixCls + "-clear-icon",
            onClick: onClear,
            onMouseDown: ed,
          },
          clearIcon != null ? clearIcon : i.createElement(eZ.A, null),
        );
  const eO = A_1(
    prefixCls,
    prefixCls + "-" + (isMultiple ? "multiple" : "single"),
    {
      [prefixCls + "-show-search"]: ea,
      [prefixCls + "-open"]: popupVisible,
      [prefixCls + "-size-" + eu]: eu,
      [prefixCls + "-focused"]: es,
      [prefixCls + "-" + eC]: eC,
      [prefixCls + "-disabled"]: disabled,
      [prefixCls + "-no-border"]: !bordered,
      [prefixCls + "-rtl"]: rtl,
    },
    className,
  );
  return i.createElement(
    "div",
    {
      role: "combobox",
      "aria-haspopup": "listbox",
      "aria-autocomplete": "list",
      "aria-expanded": popupVisible,
      "aria-disabled": disabled,
      "aria-controls": ariaControls,
      ...((n = ["onClick", "onMouseEnter", "onMouseLeave"]),
      (r = {}),
      Object.keys(rest).forEach((e) => {
        if (n.indexOf(e) !== -1) {
          r[e] = rest[e];
        }
      }),
      r),
      ...htmlDataAttributes,
      ref: YRef,
      tabIndex: disabled ? -1 : 0,
      style,
      className: eO,
      onKeyDown: onKeyDown_1,
      onFocus: function (e) {
        if (!(disabled || dragToSort)) {
          if (ec) {
            if (qRef.current) {
              qRef.current.focus();
            }
          } else {
            ev("focus", e);
          }
        }
      },
      onBlur: function (e) {
        return ev("blur", e);
      },
    },
    i.createElement(
      "div",
      {
        title: typeof ep === "string" ? ep : undefined,
        className: A_1(prefixCls + "-view", {
          [prefixCls + "-view-with-prefix"]: prefix,
        }),
        onClick: function (e) {
          return popupVisible && ec && e.stopPropagation();
        },
      },
      prefix &&
        i.createElement(
          "div",
          {
            "aria-hidden": "true",
            className: A_1(prefixCls + "-prefix"),
            onMouseDown: function (e) {
              return eo && ed(e);
            },
          },
          prefix,
        ),
      isMultiple
        ? (() => {
            const e = b0(value) ? [] : [].concat(value);
            const t = Gv(maxTagCount) ? maxTagCount.count : maxTagCount;
            const n =
              Gv(maxTagCount) && Tn(maxTagCount.render)
                ? maxTagCount.render
                : (e) => "+" + e + "...";
            const r = typeof t === "number" ? Math.max(t, 0) : e.length;
            const o = [];
            let l = -1;
            for (let a = e.length - 1; a >= 0; a--) {
              const c = e[a];
              const s = renderText(c);
              if (a < r) {
                o.unshift({
                  value: c,
                  label: s.text,
                  closable: !s.disabled,
                });
              }
              if (!(s.disabled || l !== -1)) {
                l = a;
              }
            }
            const f = e.length - r;
            if (f > 0) {
              o.push({
                label: n(f),
                closable: false,
                value: tO,
              });
            }
            return i.createElement(tx, {
              className: es ? X_getPrefixCls("input-tag") + "-focus" : "",
              ref: qRef,
              disabled,
              dragToSort,
              disableInput: !ea,
              animation,
              placeholder,
              value: o,
              inputValue,
              size: eu,
              tagClassName: prefixCls + "-tag",
              renderTag,
              icon: {
                removeIcon,
              },
              onChange: function (t, n) {
                if (onSort && n === "sort") {
                  const r = t.indexOf(tO);
                  if (r > -1) {
                    const o = t.slice(0, r);
                    const i = t.slice(r + 1);
                    const l = e.slice(-f);
                    onSort(o.concat(l, i));
                  } else {
                    onSort(t);
                  }
                }
              },
              onPaste,
              onKeyDown: onKeyDown_1,
              onFocus: onFocus_1,
              onBlur: onBlur_1,
              onInputChange,
              onRemove: function (t, n, r) {
                if ((r.keyCode || r.which) === Er.code && l > -1) {
                  t = e[l];
                  n = l;
                }
                if (maxTagCount) {
                  el();
                }
                if (onRemoveCheckedItem) {
                  onRemoveCheckedItem(t, n, r);
                }
              },
            });
          })()
        : (() => {
            switch (et) {
              case 0:
                n = inputValue || (ef ? ep : "");
                break;
              case 1:
                n = inputValue || "";
                break;
              default:
                n = ep;
            }
            var n;
            const r = {
              style: {
                width: "100%",
              },
              value: typeof n !== "object" ? n : "",
              placeholder:
                ec && ep && typeof ep !== "object" ? ep : placeholder,
            };
            if (ec) {
              r.onPaste = onPaste;
              r.onKeyDown = onKeyDown_1;
              r.onFocus = onFocus_1;
              r.onBlur = onBlur_1;
              r.onChange = onInputChange;
            } else {
              r.tabIndex = -1;
              r.style.pointerEvents = "none";
            }
            const o = !!((es && ec) || isEmptyValue);
            return i.createElement(
              "span",
              {
                className: prefixCls + "-view-selector",
              },
              i.createElement(A_20, {
                "aria-hidden": !o || undefined,
                ref: qRef,
                disabled,
                className: A_1(prefixCls + "-view-input", {
                  [prefixCls + "-hidden"]: !o,
                }),
                autoComplete: "off",
                ...r,
              }),
              i.createElement(
                "span",
                {
                  className: A_1(prefixCls + "-view-value", {
                    [prefixCls + "-view-value-mirror"]: o,
                  }),
                },
                A_21(isEmptyValue ? r.placeholder : n),
              ),
            );
          })(),
      i.createElement(
        "div",
        {
          "aria-hidden": "true",
          className: prefixCls + "-suffix",
          onMouseDown: function (e) {
            return eo && ed(e);
          },
        },
        ew,
        eg,
      ),
    ),
  );
});
const tP = i.forwardRef(function (e, t) {
  const { prefixCls, style, className, addBefore, rtl, renderView, ...rest } =
    e;
  const pRef = i.useRef(null);
  const d = addBefore != null;
  const m = d || false;
  const v = {
    style,
    className,
  };
  const h = eb.t(rest);
  i.useImperativeHandle(t, function () {
    return pRef.current;
  });
  let y = i.createElement(tS, {
    ...e,
    ref: pRef,
    style: m ? undefined : v.style,
    className: m ? undefined : v.className,
    htmlDataAttributes: m ? {} : h,
  });
  if (typeof renderView === "function") {
    y = renderView(y);
  }
  if (m) {
    return i.createElement(
      "div",
      {
        ...h,
        ...v,
        className: A_1(
          prefixCls + "-wrapper",
          {
            [prefixCls + "-wrapper-rtl"]: rtl,
          },
          v.className,
        ),
      },
      d &&
        i.createElement(
          "div",
          {
            className: prefixCls + "-addbefore",
          },
          addBefore,
        ),
      y,
    );
  }
  return y;
});
tP.displayName = "SelectView";
function tN(e) {
  const e_text = e.text;
  let e_keyword = e.keyword;
  const e_highlightClassName = e.highlightClassName;
  if (!e_keyword) {
    return i.createElement(i.Fragment, null, e_text);
  }
  if (e_keyword.length > 1000) {
    e_keyword = e_keyword.slice(0, 1000);
  }
  const o = RegExp("(" + tA.A(e_keyword) + ")", "i");
  const l = e_text.split(o);
  return i.createElement(
    i.Fragment,
    null,
    l.map((e, t) => {
      if (o.test(e)) {
        return i.createElement(
          "span",
          {
            key: t,
            className: e_highlightClassName,
          },
          e,
        );
      }
      return i.createElement(
        "span",
        {
          key: t,
        },
        e,
      );
    }),
  );
}
function onMouseDown(e) {
  if (e) {
    e.preventDefault();
  }
}
function tj(e, t) {
  if (t) {
    return !cy(e) || !e.length;
  }
  return e === undefined;
}
function tR(e, t, n) {
  if (n) {
    e = t
      ? Array.isArray(e)
        ? e.map((e) => {
            if (Gv(e) && "label" in e) {
              return e.value;
            }
            return e;
          })
        : e
      : Gv(e) && "label" in e
        ? e.value
        : e;
  }
  if (tj(e, t)) {
    if (t) {
      if (Array.isArray(e)) {
        return e;
      }
      return [];
    }
    return undefined;
  }
  return e;
}
function tI(e) {
  return (
    eg.A(e, "props.isSelectOption") || eg.A(e, "type.__ARCO_SELECT_OPTION__")
  );
}
function tF(e) {
  return (
    eg.A(e, "props.isSelectOptGroup") ||
    eg.A(e, "type.__ARCO_SELECT_OPTGROUP__")
  );
}
const tM = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const t_ = {};
const tD = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const tz = (e) => {
  const t = typeof Symbol === "function" && Symbol.iterator;
  const n = t && e[t];
  let r = 0;
  if (n) {
    return n.call(e);
  }
  if (e && typeof e.length === "number") {
    return {
      next: function () {
        if (e && r >= e.length) {
          e = undefined;
        }
        return {
          value: e && e[r++],
          done: !e,
        };
      },
    };
  }
  throw TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
};
const tL = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const tH = {
  trigger: "click",
  bordered: true,
  filterOption: true,
  unmountOnExit: true,
  defaultActiveFirstOption: true,
};
const tG = i.forwardRef(function (e, t) {
  let n;
  let r;
  let o;
  let l;
  const a = i.useContext(QO);
  const a_getPrefixCls = a.getPrefixCls;
  const a_renderEmpty = a.renderEmpty;
  const a_componentConfig = a.componentConfig;
  const a_rtl = a.rtl;
  const v = A_19(
    e,
    tH,
    a_componentConfig == null ? undefined : a_componentConfig.Select,
  );
  const v_children = v.children;
  const v_renderFormat = v.renderFormat;
  const v_defaultActiveFirstOption = v.defaultActiveFirstOption;
  const v_disabled = v.disabled;
  const v_unmountOnExit = v.unmountOnExit;
  const v_notFoundContent = v.notFoundContent;
  const v_showSearch = v.showSearch;
  const v_tokenSeparators = v.tokenSeparators;
  const v_options = v.options;
  const v_filterOption = v.filterOption;
  const v_labelInValue = v.labelInValue;
  const v_getPopupContainer = v.getPopupContainer;
  const v_trigger = v.trigger;
  const v_triggerElement = v.triggerElement;
  const v_triggerProps = v.triggerProps;
  const v_dropdownRender = v.dropdownRender;
  const v_dropdownMenuStyle = v.dropdownMenuStyle;
  const v_dropdownMenuClassName = v.dropdownMenuClassName;
  const v_virtualListProps = v.virtualListProps;
  const v_onChange = v.onChange;
  const v_onDeselect = v.onDeselect;
  const v_onClear = v.onClear;
  const v_onSearch = v.onSearch;
  const v_onFocus = v.onFocus;
  const v_onBlur = v.onBlur;
  const v_onPopupScroll = v.onPopupScroll;
  const v_onVisibleChange = v.onVisibleChange;
  const v_onInputValueChange = v.onInputValueChange;
  const v_onPaste = v.onPaste;
  const v_onKeyDown = v.onKeyDown;
  let v_mode = v.mode;
  let v_allowCreate = v.allowCreate;
  if (v_mode === "tags") {
    v_mode = "multiple";
    v_allowCreate = true;
    A_17(
      true,
      "[Arco Select] The 'tags' mode will be removed in the next major version, please use {mode: \"multiple\", allowCreate: true} instead.",
    );
  }
  const $ = a_getPrefixCls("select");
  const J = v_mode === "multiple";
  const Z = tD(i.useState(tR(v.defaultValue, J, v_labelInValue)), 2);
  const ee = Z[0];
  const et = Z[1];
  const en = "value" in v ? tR(v.value, J, v_labelInValue) : ee;
  const er = tD(
    A_9("", {
      value: "inputValue" in v ? v.inputValue || "" : undefined,
    }),
    3,
  );
  const inputValue = er[0];
  const el = er[1];
  const ea = er[2];
  const ec = tD(
    A_9(false, {
      defaultValue: v.defaultPopupVisible,
      value:
        "popupVisible" in v
          ? v.popupVisible
          : v_triggerProps && "popupVisible" in v_triggerProps
            ? v_triggerProps.popupVisible
            : undefined,
    }),
    2,
  );
  const eu = ec[0];
  const es = ec[1];
  const ef = tD(i.useState(null), 2);
  const userCreatingOption = ef[0];
  const ed = ef[1];
  const em = tD(i.useState([]), 2);
  const userCreatedOptions = em[0];
  const eh = em[1];
  const ey = tD(i.useState(cy(en) ? en[0] : en), 2);
  const eb = ey[0];
  const ex = ey[1];
  const eE = i.useMemo(
    function () {
      return (function e(t, n, r) {
        const t_children = t.children;
        const t_options = t.options;
        const t_filterOption = t.filterOption;
        const n_inputValue = n.inputValue;
        const s = n_inputValue === undefined ? "" : n_inputValue;
        const n_userCreatedOptions = n.userCreatedOptions;
        const n_userCreatingOption = n.userCreatingOption;
        const n_prefixCls = n.prefixCls;
        const m = r === undefined ? {} : r;
        const m_optionInfoMap = m.optionInfoMap;
        const optionInfoMap =
          m_optionInfoMap === undefined ? new Map() : m_optionInfoMap;
        const m_optionValueList = m.optionValueList;
        const optionValueList =
          m_optionValueList === undefined ? [] : m_optionValueList;
        const m_customNodeCount = m.customNodeCount;
        let customNodeCount =
          m_customNodeCount === undefined ? 0 : m_customNodeCount;
        let hasOptGroup = false;
        let hasComplexLabelInOptions = false;
        let nodeList = [];
        let optionIndexListForArrowKey = [];
        const S = (child) => {
          const t = eg.A(child, "props.value");
          const n = eg.A(child, "props.children");
          if (t === undefined && n != null) {
            return n.toString();
          }
          return t;
        };
        const P = (e, t, n) => {
          const e_label = e.label;
          const e_value = e.value;
          if (e_label || e_value || t) {
            if (n) {
              return t || "group_" + e_label;
            }
            return (
              t ||
              `${typeof e_value}_` + e_value ||
              e_label + "_" + optionInfoMap.size
            );
          }
          return `custom_node_${++customNodeCount}`;
        };
        const A = (child, _origin) => {
          const n = S(child);
          let _valid = true;
          if (t_filterOption === true) {
            _valid =
              n !== undefined &&
              String(n).toLowerCase().indexOf(s.toLowerCase()) !== -1;
          } else if (typeof t_filterOption === "function") {
            _valid = !s || t_filterOption(s, child);
          }
          const o = optionInfoMap.get(n);
          const l =
            (o == null ? undefined : o._origin) === "userCreatedOptions" ||
            (o == null ? undefined : o._origin) === "userCreatingOption";
          if (!o || l) {
            if (!("_key" in child.props)) {
              child = i.cloneElement(child, {
                _key: P(child.props, child.key),
              });
            }
            const _index = optionInfoMap.size;
            const u = {
              child,
              ...child.props,
              value: n,
              _index,
              _origin,
              _valid,
            };
            optionInfoMap.set(n, u);
            if (l) {
              const f = nodeList.findIndex((e) => {
                let t;
                return (
                  ((t = e == null ? undefined : e.props) == null
                    ? undefined
                    : t.value) === n
                );
              });
              if (f > -1) {
                if (_valid) {
                  nodeList[f] = child;
                } else {
                  nodeList.splice(f, 1);
                }
              }
            } else {
              optionValueList.push(n);
              if (_valid) {
                nodeList.push(child);
                if (!u.disabled) {
                  optionIndexListForArrowKey.push(_index);
                }
              }
            }
          }
          if (typeof child.props.children !== "string") {
            hasComplexLabelInOptions = true;
          }
        };
        const N = (e, t) => {
          if (t && cy(e) && e.length) {
            e.forEach((e) => {
              e =
                Kg(e) || Et(e)
                  ? {
                      label: e,
                      value: e,
                    }
                  : e;
              A(
                i.createElement(
                  eQ,
                  {
                    _key: P(e),
                    value: e.value,
                    disabled: e.disabled === true,
                    extra: e.extra,
                  },
                  A_21(e.label),
                ),
                t,
              );
            });
          }
        };
        if (n_userCreatingOption) {
          N([n_userCreatingOption], "userCreatingOption");
        }
        if (t_children) {
          i.Children.map(t_children, function (t) {
            if (tF(t)) {
              const n = t.props;
              const r = e(
                {
                  children: n.children,
                  options: n.options,
                  filterOption: t_filterOption,
                },
                {
                  inputValue: s,
                  prefixCls: n_prefixCls,
                },
                {
                  optionInfoMap,
                  optionValueList,
                  customNodeCount,
                },
              );
              const o = r.childrenList;
              const l = r.optionIndexListForArrowKey;
              const c = r.hasComplexLabelInOptions;
              if (o.length) {
                nodeList.push(
                  i.cloneElement(t, {
                    children: null,
                    _key: P(t.props, t.key, true),
                  }),
                );
                nodeList = nodeList.concat(o);
                optionIndexListForArrowKey =
                  optionIndexListForArrowKey.concat(l);
                hasOptGroup = true;
                hasComplexLabelInOptions = hasComplexLabelInOptions || c;
              }
            } else {
              if (tI(t)) {
                A(t, "children");
              } else if (Gv(t) && t.props) {
                nodeList.push(
                  i.cloneElement(t, {
                    _key: P(t.props, t.key),
                  }),
                );
              }
            }
          });
        }
        N(t_options, "options");
        N(n_userCreatedOptions, "userCreatedOptions");
        return {
          childrenList: ((e) => {
            const e_nodeList = e.nodeList;
            const e_pattern = e.pattern;
            const e_highlightClassName = e.highlightClassName;
            if (!e_pattern) {
              return e_nodeList;
            }
            const o = (e) => {
              if (e && e.props && typeof e.props.children === "string") {
                return i.cloneElement(
                  e,
                  undefined,
                  i.createElement(tN, {
                    text: e.props.children,
                    keyword: e_pattern,
                    highlightClassName: e_highlightClassName,
                  }),
                );
              }
              return e;
            };
            if (cy(e_nodeList)) {
              return e_nodeList.map((e) => o(e));
            }
            return o(e_nodeList);
          })({
            nodeList,
            pattern: s,
            highlightClassName: n_prefixCls + "-highlight",
          }),
          optionInfoMap,
          optionValueList,
          optionIndexListForArrowKey,
          hasOptGroup,
          hasComplexLabelInOptions,
        };
      })(
        {
          children: v_children,
          options: v_options,
          filterOption: v_filterOption,
        },
        {
          prefixCls: $,
          inputValue,
          userCreatedOptions,
          userCreatingOption,
        },
      );
    },
    [
      v_children,
      v_options,
      v_filterOption,
      inputValue,
      userCreatingOption,
      userCreatedOptions,
    ],
  );
  const eE_childrenList = eE.childrenList;
  const eE_optionInfoMap = eE.optionInfoMap;
  const eE_optionValueList = eE.optionValueList;
  const eE_optionIndexListForArrowKey = eE.optionIndexListForArrowKey;
  const eE_hasOptGroup = eE.hasOptGroup;
  const eE_hasComplexLabelInOptions = eE.hasComplexLabelInOptions;
  const eNRef = i.useRef(null);
  const ekRef = i.useRef(null);
  const eTRef = i.useRef(null);
  const ejRef = i.useRef([]);
  const eRRef = i.useRef(null);
  const eIRef = i.useRef(inputValue);
  const eFRef = i.useRef(null);
  const eMRef = i.useRef(0);
  const e_Ref = i.useRef(false);
  n = $ + "-popup-";
  o = (r = tM(i.useState(), 2))[0];
  l = r[1];
  i.useEffect(function () {
    t_[n] = n in t_ ? t_[n] : 0;
    l(t_[n]);
    t_[n] += 1;
  }, []);
  const eV = typeof o === "number" ? "" + n + o : undefined;
  const isEmptyValue = tj(en, J);
  const ez = v_defaultActiveFirstOption
    ? eE_optionValueList[eE_optionIndexListForArrowKey[0]]
    : undefined;
  const scrollIntoView = i.useCallback(
    function (e, options) {
      let n;
      const r = eE_optionInfoMap.get(e);
      if (
        eNRef.current &&
        ((n = r == null ? undefined : r.child) == null ? undefined : n.props)
      ) {
        eNRef.current.scrollTo({
          key: r.child.props._key,
          options,
        });
      }
    },
    [eE_optionInfoMap],
  );
  const eW = (e, t) => {
    if (e !== eIRef.current || t !== eFRef.current) {
      el(e);
      eIRef.current = e;
      eFRef.current = t;
      if (v_onInputValueChange) {
        v_onInputValueChange(e, t);
      }
    }
  };
  const eK = function (e) {
    if (eu !== e) {
      es(e);
      if (v_onVisibleChange) {
        v_onVisibleChange(e);
      }
      if (v_triggerProps && v_triggerProps.onVisibleChange) {
        v_triggerProps.onVisibleChange(e);
      }
    }
  };
  i.useEffect(
    function () {
      if (J) {
        if (!Array.isArray(en)) {
          et(en === undefined ? [] : [en]);
        }
      } else if (Array.isArray(en)) {
        et(en.length === 0 ? undefined : en[0]);
      }
    },
    [J, en],
  );
  i.useEffect(
    function () {
      if (eu) {
        const e = cy(en) ? en[0] : en;
        const t = !isEmptyValue && eE_optionInfoMap.has(e) ? e : ez;
        ex(t);
        setTimeout(() => scrollIntoView(t));
      }
    },
    [eu],
  );
  i.useEffect(
    function () {
      if (eRRef.current === "up" || eRRef.current === "down") {
        scrollIntoView(eb);
        eRRef.current = "none";
      }
    },
    [eb],
  );
  i.useEffect(
    function () {
      ex(ez);
    },
    [
      JSON.stringify(
        eE_childrenList.map((e) => {
          let t;
          if ((t = e == null ? undefined : e.props) == null) {
            return undefined;
          }
          return t.value;
        }),
      ),
    ],
  );
  i.useEffect(
    function () {
      ejRef.current = ejRef.current.filter((e) => {
        if (J) {
          return cy(en) && en.indexOf(e.value) > -1;
        }
        return e.value === en;
      });
    },
    [en, J],
  );
  i.useEffect(
    function () {
      if (v_allowCreate && Array.isArray(en)) {
        const e = en.filter((e) => {
          let t;
          const n =
            eE_optionInfoMap.get(e) ||
            ((t = ejRef.current.find((t) => t.value === e)) == null
              ? undefined
              : t.option);
          return !n || n._origin === "userCreatingOption";
        });
        const t = userCreatedOptions
          .filter((e) => en.indexOf(e) !== -1)
          .concat(e);
        if (t.toString() !== userCreatedOptions.toString()) {
          eh(t);
        }
      }
    },
    [en],
  );
  i.useEffect(
    function () {
      if (v_allowCreate) {
        ed(eE_optionInfoMap.has(inputValue) ? null : inputValue);
      }
    },
    [inputValue],
  );
  i.useEffect(
    function () {
      const eFRef_current = eFRef.current;
      if (
        ea === inputValue &&
        (eFRef_current === "manual" || eFRef_current === "optionListHide") &&
        v_onSearch
      ) {
        v_onSearch(inputValue, eFRef_current);
      }
    },
    [inputValue],
  );
  const getOptionInfoByValue = i.useCallback(
    function (e) {
      const t = eE_optionInfoMap.get(e);
      if (t) {
        const n = ejRef.current.findIndex((t) => t.value === e);
        if (n > -1) {
          ejRef.current.splice(n, 1, {
            value: e,
            option: t,
          });
        } else {
          ejRef.current.push({
            value: e,
            option: t,
          });
        }
        return t;
      }
      const r = ejRef.current.find((t) => t.value === e);
      return r && r.option;
    },
    [eE_optionInfoMap],
  );
  const eU = (e) => {
    if (eE_optionIndexListForArrowKey.length) {
      if (eb === undefined || !eE_optionInfoMap.has(eb)) {
        return eE_optionValueList[eE_optionIndexListForArrowKey[0]];
      }
      const t = eE_optionInfoMap.get(eb)._index;
      const n = eE_optionIndexListForArrowKey.indexOf(t);
      const r = eE_optionIndexListForArrowKey.length;
      return eE_optionValueList[
        eE_optionIndexListForArrowKey[((e === "up" ? n - 1 : n + 1) + r) % r]
      ];
    }
  };
  const eq = (e, t = tj(e, J)) => {
    let n = e;
    const r =
      e === undefined
        ? undefined
        : Array.isArray(e)
          ? e.map(getOptionInfoByValue)
          : getOptionInfoByValue(e);
    if (v_labelInValue && !t) {
      const o = (e, t) => {
        if (t) {
          return t.children;
        }
        let n;
        let r;
        const o =
          "value" in v ? v.value : "defaultValue" in v ? v.defaultValue : null;
        if (Array.isArray(o)) {
          try {
            for (var i = tz(o), l = i.next(); !l.done; l = i.next()) {
              const a = l.value;
              if (Gv(a) && a.value === e) {
                return a.label;
              }
            }
          } catch (error) {
            n = {
              error,
            };
          } finally {
            try {
              if (l && !l.done && (r = i.return)) {
                r.call(i);
              }
            } finally {
              if (n) {
                throw n.error;
              }
            }
          }
        } else if (Gv(o) && o.value === e) {
          return o.label;
        }
      };
      n = Array.isArray(e)
        ? e.map((e, t) => ({
            value: e,
            label: o(e, r[t]),
          }))
        : {
            value: e,
            label: o(e, r),
          };
    }
    return {
      option: r,
      value: n,
    };
  };
  const onSort = function (e) {
    et(e);
    if (v_onChange) {
      const t = eq(e);
      v_onChange(t.value, t.option);
    }
  };
  const eJ = (e) => {
    if (eE_optionInfoMap.get(e)) {
      onSort(en.concat(e));
    }
  };
  const eZ = (e) => {
    onSort(en.filter((t) => t !== e));
    if (v_onDeselect) {
      const t = eq(e, false);
      v_onDeselect(t.value, t.option);
    }
  };
  const _onClick = function (e, t) {
    if (!t) {
      if (J) {
        if (en.indexOf(e) === -1) {
          eJ(e);
        } else {
          eZ(e);
        }
        if (!(Gv(v_showSearch) && v_showSearch.retainInputValueWhileSelect)) {
          eW("", "optionChecked");
        }
      } else {
        if (e !== en) {
          onSort(e);
        }
        setTimeout(() => {
          eK(false);
        });
      }
    }
  };
  const hotkeyHandler = eY(
    new Map([
      [
        gw.code,
        function () {
          return eK(false);
        },
      ],
      [
        xy.code,
        function () {
          if (eu) {
            const e = eE_optionInfoMap.get(eb);
            if (e) {
              _onClick(eb, e.disabled);
            }
          } else {
            eK(true);
          }
        },
      ],
      [
        oz.code,
        function () {
          return eK(false);
        },
      ],
      [
        Do.code,
        function () {
          if (eu) {
            eRRef.current = "up";
            ex(eU("up"));
            return false;
          }
        },
      ],
      [
        yd.code,
        function () {
          if (eu) {
            eRRef.current = "down";
            ex(eU("down"));
            return false;
          }
        },
      ],
    ]),
  );
  const popup = function () {
    const measureLongestItem =
      (v_triggerProps == null
        ? undefined
        : v_triggerProps.autoAlignPopupWidth) === false;
    const n = measureLongestItem && eE_hasComplexLabelInOptions;
    const r =
      "notFoundContent" in v ? v_notFoundContent : a_renderEmpty("Select");
    const o = eE_childrenList.length
      ? i.createElement(
          ei,
          {
            id: eV,
            role: "listbox",
            style: v_dropdownMenuStyle,
            className: A_1($ + "-popup-inner", v_dropdownMenuClassName),
            ref: eNRef,
            data: eE_childrenList,
            height: null,
            isStaticItemHeight: !eE_hasOptGroup,
            measureLongestItem,
            itemKey: function (e) {
              return e.props._key;
            },
            onMouseDown,
            onMouseMove: function () {
              eRRef.current = null;
            },
            onScroll: function (e) {
              return v_onPopupScroll && v_onPopupScroll(e.target);
            },
            ...v_virtualListProps,
            threshold: n
              ? null
              : v_virtualListProps == null
                ? undefined
                : v_virtualListProps.threshold,
          },
          function (e) {
            let t;
            if (tF(e)) {
              return i.createElement(e.type, {
                ...e.props,
                prefixCls: $,
              });
            }
            if (tI(e)) {
              const n = (t = e.props) == null ? undefined : t.value;
              const r = {
                prefixCls: $,
                rtl: a_rtl,
                _valueActive: eb,
                _valueSelect: en,
                _isMultipleMode: J,
                _isUserCreatingOption:
                  v_allowCreate && userCreatingOption === n,
                _isUserCreatedOption:
                  v_allowCreate && userCreatedOptions.indexOf(n) > -1,
                _onClick,
                _onMouseEnter: function (e) {
                  if (eRRef.current === null) {
                    ex(e);
                  }
                },
                _onMouseLeave: function () {
                  if (eRRef.current === null) {
                    ex(undefined);
                  }
                },
              };
              return (
                e &&
                i.createElement(e.type, {
                  ...e.props,
                  ...r,
                })
              );
            }
            return e;
          },
        )
      : null;
    const l = v_allowCreate && inputValue;
    const a =
      r && !l
        ? i.createElement(
            "div",
            {
              style: v_dropdownMenuStyle,
              className: A_1($ + "-popup-inner", v_dropdownMenuClassName),
            },
            r,
          )
        : null;
    return i.createElement(
      "div",
      {
        className: A_1($ + "-popup", {
          [$ + "-popup-hidden"]: o === null && a === null,
          [$ + "-popup-multiple"]: J,
        }),
        tabIndex: -1,
        onKeyDown: function (e) {
          return hotkeyHandler(e);
        },
      },
      typeof v_dropdownRender === "function"
        ? v_dropdownRender(o || a)
        : o || a,
    );
  };
  const e3 = (e) => {
    let t = false;
    if (J && cy(v_tokenSeparators) && v_tokenSeparators.length) {
      const n = e.split(RegExp("[" + v_tokenSeparators.join("") + "]"));
      if (n.length > 1) {
        const r = n.filter((e, t) => e && n.indexOf(e) === t);
        const o = en.slice(0);
        let i = false;
        r.forEach((e) => {
          if (
            o.indexOf(e) === -1 &&
            (v_allowCreate || eE_optionInfoMap.get(e))
          ) {
            o.push(e);
            i = true;
          }
        });
        if (i) {
          onSort(o);
        }
        t = true;
      }
    }
    return t;
  };
  i.useImperativeHandle(
    t,
    function () {
      let e;
      return {
        dom: (e = eTRef.current) == null ? undefined : e.dom,
        focus: function () {
          if (eTRef.current) {
            eTRef.current.focus();
          }
        },
        blur: function () {
          if (eTRef.current) {
            eTRef.current.blur();
          }
        },
        hotkeyHandler,
        activeOptionValue: eb,
        getOptionInfoByValue,
        getOptionInfoList: function () {
          return tL([], tD(eE_optionInfoMap.values()), false).filter(
            (e) => e._valid,
          );
        },
        scrollIntoView,
      };
    },
    [hotkeyHandler, eE_optionInfoMap, eb, getOptionInfoByValue, scrollIntoView],
  );
  const renderView = function (e) {
    return i.createElement(
      A_4,
      {
        ref: function (e) {
          return (ekRef.current = e);
        },
        popup,
        trigger: v_trigger,
        disabled: v_disabled,
        getPopupContainer: v_getPopupContainer,
        classNames: "slideDynamicOrigin",
        autoAlignPopupWidth: true,
        popupAlign: {
          bottom: 4,
        },
        popupVisible: eu,
        unmountOnExit: v_unmountOnExit,
        onVisibleChange: eK,
        __onExit: function () {
          e_Ref.current = true;
        },
        __onExited: function () {
          e_Ref.current = false;
          eW("", "optionListHide");
        },
        ...A_16(v_triggerProps, ["popupVisible", "onVisibleChange"]),
      },
      e,
    );
  };
  const e5 =
    typeof v_triggerElement === "function"
      ? v_triggerElement(eq(en))
      : v_triggerElement;
  return i.createElement(
    A_12,
    {
      onResize: function () {
        return ekRef.current.updatePopupPosition();
      },
    },
    e5 != null
      ? renderView(e5)
      : i.createElement(tP, {
          ...v,
          onFocus: v_onFocus,
          onBlur: function (e) {
            if (v_onBlur != null) {
              v_onBlur(e);
            }
            if (!(eu || e_Ref.current)) {
              eW("", "optionListHide");
            }
          },
          onKeyDown: function (e) {
            if (e.target.tagName === "INPUT" && e.target.value) {
              const t = e.key === oz.key;
              const n = e.key === xy.key;
              if ((n || t) && e3(e.target.value + (n ? "\n" : t ? "	" : ""))) {
                eMRef.current = Date.now();
                eW("", "tokenSeparator");
              }
            }
            hotkeyHandler(e);
            if (v_onKeyDown != null) {
              v_onKeyDown(e);
            }
          },
          onChangeInputValue: function (e, t) {
            if (
              (t.nativeEvent.inputType === "insertFromPaste" &&
                Date.now() - eMRef.current < 100) ||
              e3(e)
            ) {
              eW("", "tokenSeparator");
            } else {
              eW(e, "manual");
            }
            if (!eu && e) {
              eK(true);
            }
          },
          onPaste: function (e) {
            if (e3(e.clipboardData.getData("text"))) {
              eMRef.current = Date.now();
            }
            if (v_onPaste != null) {
              v_onPaste(e);
            }
          },
          onRemoveCheckedItem: function (e, t, n) {
            n.stopPropagation();
            eZ(en[t]);
          },
          onClear: function (e) {
            e.stopPropagation();
            if (J) {
              onSort(
                en.filter((e) => {
                  const t = eE_optionInfoMap.get(e);
                  return t && t.disabled;
                }),
              );
            } else {
              onSort(undefined);
            }
            eW("", "manual");
            if (v_onClear != null) {
              v_onClear(eu);
            }
          },
          ref: eTRef,
          value: en,
          inputValue,
          popupVisible: eu,
          rtl: a_rtl,
          prefixCls: $,
          ariaControls: eV,
          isEmptyValue,
          isMultiple: J,
          onSort,
          renderText: function (e) {
            const t = getOptionInfoByValue(e);
            let text = e;
            if (Tn(v_renderFormat)) {
              const r = eq(e, false);
              text = v_renderFormat(r.option || null, r.value);
            } else {
              let o = false;
              if (v_labelInValue) {
                const i = v.value || v.defaultValue;
                if (Array.isArray(i)) {
                  const l = i.find((t) => Gv(t) && t.value === e);
                  if (l) {
                    text = l.label;
                    o = true;
                  }
                } else {
                  if (Gv(i)) {
                    text = i.label;
                    o = true;
                  }
                }
              }
              if (!o && t && "children" in t) {
                text = t.children;
              }
            }
            return {
              text,
              disabled: t && t.disabled,
            };
          },
          renderView,
        }),
  );
});
tG.displayName = "Select";
tG.Option = eQ;
tG.OptGroup = eK;
const tK = function () {};
const tG_Option = tG.Option;
const tU = [10, 20, 30, 40, 50];
const TQComponent = function (e) {
  const tRef = i.useRef();
  const locale = i.useContext(QO).locale;
  const e_sizeCanChange = e.sizeCanChange;
  const e_onPageSizeChange = e.onPageSizeChange;
  const l = e_onPageSizeChange === undefined ? tK : e_onPageSizeChange;
  const e_rootPrefixCls = e.rootPrefixCls;
  const e_sizeOptions = e.sizeOptions;
  const u = e_sizeOptions === undefined ? tU : e_sizeOptions;
  const e_pageSize = e.pageSize;
  const f = e_pageSize === undefined ? 10 : e_pageSize;
  const e_size = e.size;
  const e_selectProps = e.selectProps;
  const e_disabled = e.disabled;
  return (
    e_sizeCanChange !== undefined &&
    e_sizeCanChange &&
    i.createElement(
      "div",
      {
        ref: tRef,
        className: e_rootPrefixCls + "-option",
        "aria-label": locale.Pagination.pageSize,
      },
      i.createElement(
        tG,
        {
          value: u.indexOf(f) !== -1 ? f : u[0],
          onChange: function (e) {
            l(e);
          },
          size: e_size,
          getPopupContainer: function () {
            return tRef.current;
          },
          disabled: e_disabled,
          ...e_selectProps,
        },
        u.map((e) =>
          i.createElement(
            tG_Option,
            {
              key: e,
              value: e,
            },
            e + " " + locale.Pagination.countPerPage,
          ),
        ),
      ),
    )
  );
};
const t$ = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const TXComponent = function (e) {
  const t = e.simple ? e.current : undefined;
  const locale = i.useContext(QO).locale;
  const r = t$(i.useState(t), 2);
  const o = r[0];
  const l = r[1];
  const aRef = i.useRef();
  i.useEffect(
    function () {
      if (e.simple) {
        l(e.current);
      }
    },
    [e.simple, e.current],
  );
  const c = function () {
    const e_onPageChange = e.onPageChange;
    const e_totalPages = e.totalPages;
    const e_current = e.current;
    const e_simple = e.simple;
    if (!b0(o)) {
      if (o === e_current && !e_simple) {
        return void l(undefined);
      }
      let a = isNaN(Number(o)) ? e_current : Number(o);
      if (a < 1) {
        a = 1;
      } else if (a > e_totalPages) {
        a = e_totalPages;
      }
      l(e_simple ? a : undefined);
      if (Tn(e_onPageChange)) {
        e_onPageChange(a);
      }
    }
  };
  const e_rootPrefixCls = e.rootPrefixCls;
  const e_totalPages = e.totalPages;
  const e_simple = e.simple;
  const e_size = e.size;
  const e_disabled = e.disabled;
  const v = e_rootPrefixCls + "-jumper";
  const h = {
    showJumper: true,
    ...(Gv(e_simple) ? e_simple : {}),
  };
  return i.createElement(
    "div",
    {
      className: "" + v,
    },
    !e_simple &&
      i.createElement(
        "span",
        {
          className: v + "-text-goto",
        },
        locale.Pagination.goto,
      ),
    h.showJumper
      ? i.createElement(A_22, {
          _ignorePropsFromGlobal: true,
          ref: function (e) {
            return (aRef.current = e);
          },
          className: v + "-input",
          value: b0(o) ? undefined : o.toString(),
          size: e_size,
          disabled: e_disabled || !e_totalPages,
          onChange: function (e) {
            const t = parseInt(e, 10);
            l(isNaN(t) ? undefined : t);
          },
          onPressEnter: c,
          onFocus: function () {
            const dom = aRef.current.dom;
            if (String(o) && dom) {
              dom.setSelectionRange(0, String(o).length);
            }
          },
          onBlur: c,
        })
      : i.createElement("span", null, o),
    e_simple &&
      i.createElement(
        i.Fragment,
        null,
        i.createElement(
          "span",
          {
            className: v + "-separator",
          },
          "/",
        ),
        i.createElement("span", null, e_totalPages),
      ),
  );
};
const tZ = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
function t0(e, t) {
  return Math.ceil(t / e);
}
function t1(e) {
  if (e && e.length) {
    return e[0];
  }
  return 10;
}
const t2 = {
  total: 0,
  pageSizeChangeResetCurrent: true,
  bufferSize: 2,
};
const t3 = i.forwardRef(function (e, t) {
  let r;
  let l;
  const a = i.useContext(QO);
  const a_getPrefixCls = a.getPrefixCls;
  const a_size = a.size;
  const a_locale = a.locale;
  const a_componentConfig = a.componentConfig;
  const a_rtl = a.rtl;
  const m = A_19(
    e,
    t2,
    a_componentConfig == null ? undefined : a_componentConfig.Pagination,
  );
  const m_total = m.total;
  const m_pageSize = m.pageSize;
  const m_current = m.current;
  const m_showMore = m.showMore;
  const m_sizeOptions = m.sizeOptions;
  const m_pageSizeChangeResetCurrent = m.pageSizeChangeResetCurrent;
  const m_defaultCurrent = m.defaultCurrent;
  const m_defaultPageSize = m.defaultPageSize;
  const O = tZ(
    A_9(1, {
      defaultValue: m_defaultCurrent,
      value: m_current,
    }),
    2,
  );
  const P = O[0];
  const A = O[1];
  const N = tZ(
    A_9(t1(m_sizeOptions), {
      defaultValue: m_defaultPageSize,
      value: m_pageSize,
    }),
    2,
  );
  const k = N[0];
  const T = N[1];
  if (m_current && !m.onChange) {
    console.warn(
      "Warning: you have provide current prop for pagination but without onChange handler , this will cause no-change when you change page. ",
    );
  }
  i.useEffect(
    function () {
      if (m_sizeOptions && !m_sizeOptions.includes(k)) {
        const e = t1(m_sizeOptions);
        if (!("pageSize" in m)) {
          T(e);
        }
      }
    },
    [m_sizeOptions],
  );
  i.useEffect(
    function () {
      let e;
      const t = P > (e = t0(k, m_total)) ? e : P;
      if (!(t === P || "current" in m)) {
        A(t);
      }
    },
    [m_total, P, k],
  );
  const j = (e = P, t = k) => {
    const m_onChange = m.onChange;
    if (m_onChange) {
      m_onChange(e, t);
    }
  };
  const R = function (e) {
    if (!("current" in m)) {
      A(e);
    }
    j(e);
  };
  const m_className = m.className;
  const m_style = m.style;
  const m_pageItemStyle = m.pageItemStyle;
  const m_activePageItemStyle = m.activePageItemStyle;
  const m_showTotal = m.showTotal;
  const m_sizeCanChange = m.sizeCanChange;
  const m_sizeOptions_1 = m.sizeOptions;
  const m_simple = m.simple;
  const m_mini = m.mini;
  const m_showJumper = m.showJumper;
  const m_selectProps = m.selectProps;
  const m_icons = m.icons;
  const m_disabled = m.disabled;
  const m_itemRender = m.itemRender;
  const m_hideOnSinglePage = m.hideOnSinglePage;
  const q = m.size || a_size;
  const rootPrefixCls = a_getPrefixCls("pagination");
  const $ = m_mini ? "mini" : q;
  const X = A_1(
    rootPrefixCls,
    rootPrefixCls + "-size-" + $,
    {
      [rootPrefixCls + "-simple"]: m_simple,
      [rootPrefixCls + "-disabled"]: m_disabled,
      [rootPrefixCls + "-rtl"]: a_rtl,
    },
    m_className,
  );
  const J = [];
  const Z = t0(k, m_total);
  const ee = Math.min(Math.max(m.bufferSize, 0), Math.floor(Z / 2) - 1);
  if (m_hideOnSinglePage && Z <= 1) {
    return null;
  }
  const et = {
    onClick: R,
    rootPrefixCls,
    simple: m_simple,
    current: P,
    allPages: Z,
    icons: m_icons,
    disabled: m_disabled,
    pageItemStyle: m_pageItemStyle,
    activePageItemStyle: m_activePageItemStyle,
    itemRender: m_itemRender,
  };
  if (m_simple) {
    const en = rootPrefixCls + "-item-simple";
    l = i.createElement(
      "ul",
      {
        className: rootPrefixCls + "-list",
      },
      i.createElement(EDComponent, {
        key: "previous",
        ...et,
        type: o.previous,
      }),
      i.createElement(
        "li",
        {
          className: en + "-pager",
        },
        i.createElement(TXComponent, {
          disabled: m_disabled,
          rootPrefixCls,
          totalPages: Z,
          current: P,
          onPageChange: R,
          simple: {
            showJumper: typeof m_showJumper !== "boolean" || m_showJumper,
          },
          size: $,
        }),
      ),
      i.createElement(EDComponent, {
        key: "next",
        ...et,
        type: o.next,
      }),
    );
  } else {
    const er = 3 + ee;
    const eo = Z - 2 - ee;
    if (Z <= 4 + 2 * ee || (P === er && P === eo)) {
      for (var ei = 1; ei <= Z; ei++) {
        J.push(
          i.createElement(EzComponent, {
            ...et,
            key: ei,
            pageNum: ei,
          }),
        );
      }
    } else {
      let el = 1;
      let ea = Z;
      let ec = true;
      let eu = true;
      if (P > er && P < eo) {
        ea = P + ee;
        el = P - ee;
      } else if (P <= er) {
        ec = false;
        el = 1;
        ea = Math.max(er, ee + P);
      } else if (P >= eo) {
        eu = false;
        ea = Z;
        el = Math.min(eo, P - ee);
      }
      for (var ei = el; ei <= ea; ei++) {
        J.push(
          i.createElement(EzComponent, {
            key: ei,
            pageNum: ei,
            ...et,
          }),
        );
      }
      const es = i.createElement(EVComponent, {
        ...et,
        key: el - 1,
        type: o.previous,
        jumpPage: -(2 * ee + 1),
      });
      const ef = i.createElement(EVComponent, {
        ...et,
        key: ea + 1,
        type: o.next,
        jumpPage: 2 * ee + 1,
      });
      const ep = i.createElement(EzComponent, {
        key: 1,
        pageNum: 1,
        ...et,
      });
      const ed = i.createElement(EzComponent, {
        ...et,
        key: Z,
        pageNum: Z,
      });
      if (ec) {
        J[0] = i.cloneElement(J[0], {
          className: rootPrefixCls + "-item-after-pre",
        });
        J.unshift(es);
        J.unshift(ep);
      }
      if (eu) {
        J[J.length - 1] = i.cloneElement(J[J.length - 1], {
          className: rootPrefixCls + "-item-before-next",
        });
        J.push(ef);
        J.push(ed);
      }
    }
    l = i.createElement(
      "ul",
      {
        className: rootPrefixCls + "-list",
      },
      i.createElement(EDComponent, {
        ...et,
        key: "previous",
        type: o.previous,
      }),
      J,
      !!m_showMore &&
        i.createElement(EVComponent, {
          ...et,
          key: Z + 1,
          type: o.next,
          jumpPage: 2 * ee + 1,
        }),
      i.createElement(EDComponent, {
        key: "next",
        ...et,
        type: o.next,
      }),
    );
  }
  let em = null;
  if (typeof m_showTotal === "boolean" && m_showTotal) {
    em = i.createElement(
      "div",
      {
        className: rootPrefixCls + "-total-text",
      },
      (r = a_locale.Pagination.total) == null
        ? undefined
        : r.replace("{0}", m_total),
    );
  }
  if (typeof m_showTotal === "function") {
    em = i.createElement(
      "div",
      {
        className: rootPrefixCls + "-total-text",
      },
      m_showTotal(m_total, [(P - 1) * k + 1, P * k]),
    );
  }
  return i.createElement(
    "div",
    {
      ...eb.t(m),
      className: X,
      style: m_style,
      ref: t,
    },
    em,
    l,
    i.createElement(TQComponent, {
      disabled: m_disabled,
      rootPrefixCls,
      sizeCanChange: m_sizeCanChange,
      sizeOptions: m_sizeOptions_1,
      onPageSizeChange: function (e) {
        const m_onPageSizeChange = m.onPageSizeChange;
        const n = t0(e, m_total);
        const r = {
          pageSize: e,
        };
        if (m_pageSizeChangeResetCurrent) {
          r.current = 1;
        } else {
          r.current = P > n ? n : P;
        }
        if (!("pageSize" in m)) {
          T(r.pageSize);
        }
        if (!("current" in m || P === r.current)) {
          A(r.current);
        }
        if (m_onPageSizeChange) {
          m_onPageSizeChange(e, r.current);
        }
        j(m_pageSizeChangeResetCurrent ? 1 : r.current, e);
      },
      pageSize: k,
      size: $,
      selectProps: m_selectProps,
    }),
    !m_simple &&
      m_showJumper &&
      i.createElement(TXComponent, {
        disabled: m_disabled,
        rootPrefixCls,
        totalPages: Z,
        current: P,
        onPageChange: R,
        size: $,
      }),
  );
});
t3.displayName = "Pagination";
function t6(width) {
  if (typeof width === "number" || typeof width === "string") {
    return {
      width,
    };
  }
  return {};
}
const t5 = function (e) {
  const e_prefixCls = e.prefixCls;
  const e_columns = e.columns;
  return i.createElement(
    "colgroup",
    null,
    e_columns.map((e, n) => {
      if (e.title === j) {
        return i.createElement("col", {
          key: j,
          className: e_prefixCls + "-expand-icon-col",
          style: t6(e.width),
        });
      }
      if (e.title === T) {
        return i.createElement("col", {
          key: T,
          className: e_prefixCls + "-selection-col",
          style: t6(e.width),
        });
      }
      return i.createElement("col", {
        key: e.key || n,
        style: t6(e.width),
      });
    }),
  );
};
const t7 = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const t9 = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const ne = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
function nt(e) {
  return ne([], t9(new Set(e)), false);
}
const nn = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const nr = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const useNo = (columns) => {
  const t = columns.map((e) => es(e.width));
  const n = columns.map((e) => e.fixed);
  return i.useMemo(
    function () {
      return columns.map((t) => {
        let n = 0;
        if (t.fixed === "left") {
          columns.some((e) => {
            if (e.fixed === "left") {
              if (e.key === t.key) {
                return true;
              }
              const r = e.$$isOperation ? es(e.width) || 40 : es(e.width);
              n += r;
            }
            return false;
          });
        }
        if (t.fixed === "right") {
          nr([], nn(columns), false)
            .reverse()
            .some((e) => {
              if (e.fixed === "right") {
                if (e.key === t.key) {
                  return true;
                }
                const r = e.$$isOperation ? es(e.width) || 40 : es(e.width);
                n += r;
              }
              return false;
            });
        }
        return n;
      });
    },
    [t.join("-"), n.join("-")],
  );
};
const useNi = (groupColumns, columns, n) => {
  const r = columns.map((e) => e.fixed);
  function o(e, r) {
    return A_1({
      [n + "-col-fixed-left"]: e.fixed === "left",
      [n + "-col-fixed-right"]: e.fixed === "right",
      [n + "-col-fixed-left-last"]:
        e.fixed === "left" &&
        (!Gv(columns[r + 1]) || columns[r + 1].fixed !== "left"),
      [n + "-col-fixed-right-first"]:
        e.fixed === "right" &&
        (!Gv(columns[r - 1]) || columns[r - 1].fixed !== "right"),
    });
  }
  const l = i.useMemo(
    function () {
      return columns.map((e, t) => o(e, t));
    },
    [r.join("-")],
  );
  return [
    i.useMemo(
      function () {
        return groupColumns.map((e) =>
          e.map((e, t) => {
            let n = t;
            const e_$$columnIndex = e.$$columnIndex;
            if (
              Array.isArray(e_$$columnIndex) &&
              e_$$columnIndex.length === 2
            ) {
              n = e.fixed === "right" ? e_$$columnIndex[0] : e_$$columnIndex[1];
            } else if (typeof e_$$columnIndex === "number") {
              n = e_$$columnIndex;
            }
            return o(e, n);
          }),
        );
      },
      [
        groupColumns
          .map(
            (e) => "|" + e.map((e) => e.fixed || "undefined").join("-") + "|",
          )
          .join("_"),
      ],
    ),
    l,
  ];
};
const na = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const nc = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
function nu(e, t) {
  const n = [];
  (function e(r) {
    if (r && r.length > 0) {
      r.forEach((r) => {
        if (r[t]) {
          e(r[t]);
        } else {
          n.push({
            ...r,
            key: r.key || r.dataIndex,
          });
        }
      });
    }
  })(e);
  return n;
}
const useNs = (e) => {
  const e_components = e.components;
  const e_rowSelection = e.rowSelection;
  const e_expandedRowRender = e.expandedRowRender;
  const e_expandProps = e.expandProps;
  const e_columns = e.columns;
  const a = e_columns === undefined ? [] : e_columns;
  const e_childrenColumnName = e.childrenColumnName;
  const u = i.useMemo(
    function () {
      return nu(a, e_childrenColumnName);
    },
    [a, e_childrenColumnName],
  );
  const s =
    (e_rowSelection && e_rowSelection.type === "checkbox") ||
    (e_rowSelection && !("type" in e_rowSelection));
  const f = e_rowSelection && e_rowSelection.type === "radio";
  const width = (e_expandProps === undefined ? {} : e_expandProps).width;
  const d = !!e_expandedRowRender;
  const m = s || f;
  const v = useO(e_components);
  const v_getHeaderComponentOperations = v.getHeaderComponentOperations;
  const v_getBodyComponentOperations = v.getBodyComponentOperations;
  const g = i.useMemo(
    function () {
      return v_getHeaderComponentOperations({
        selectionNode: m ? "holder_node" : "",
        expandNode: d ? "holder_node" : "",
      });
    },
    [m, d, v_getHeaderComponentOperations],
  );
  const b = i.useMemo(
    function () {
      return v_getBodyComponentOperations({
        selectionNode: m ? "holder_node" : "",
        expandNode: d ? "holder_node" : "",
      });
    },
    [m, d, v_getBodyComponentOperations],
  );
  const x = e_rowSelection && e_rowSelection.fixed;
  const E = e_rowSelection && e_rowSelection.columnWidth;
  const C = i.useCallback(
    function (e, t, n) {
      const r = {};
      const o = [];
      e.forEach((e, t) => {
        const n = {
          ...e,
        };
        if (!("key" in e && e.key !== undefined)) {
          n.key = n.dataIndex || t;
        }
        if (t === 0) {
          n.$$isFirstColumn = true;
          if (n.fixed === "left") {
            r.fixed = n.fixed;
          }
        } else {
          n.$$isFirstColumn = false;
        }
        o.push(n);
      });
      const i = d && {
        key: j,
        title: j,
        width,
        $$isOperation: true,
      };
      const l = m && {
        key: T,
        title: T,
        width: E,
        $$isOperation: true,
      };
      if (x) {
        r.fixed = "left";
      }
      if (typeof n !== "number" || n === 0) {
        nc([], na(t), false)
          .reverse()
          .forEach((e, t) => {
            if (e.node) {
              const $$columnIndex = g.filter((e) => e.node).length - t - 1;
              if (e.name === "expandNode") {
                o.unshift({
                  ...i,
                  ...r,
                  $$columnIndex,
                });
              } else if (e.name === "selectionNode") {
                o.unshift({
                  ...l,
                  ...r,
                  $$columnIndex,
                });
              } else {
                o.unshift({
                  ...e,
                  ...r,
                  title: e.name,
                  key: e.name,
                  $$isOperation: true,
                  width: e.width || 40,
                  $$columnIndex,
                });
              }
            }
          });
      }
      return o;
    },
    [width, d, m, E, x],
  );
  const w = i.useMemo(
    function () {
      return C(u, b);
    },
    [u, C, b],
  );
  const S = i.useMemo(
    function () {
      return (function e(t, n) {
        let r = 0;
        if (t && t.length > 0) {
          t.forEach((t) => {
            r = Math.max(e(t[n], n) + 1, r);
          });
        }
        return r;
      })(a, e_childrenColumnName);
    },
    [a, e_childrenColumnName],
  );
  return [
    i.useMemo(
      function () {
        const e = Array.isArray(g) ? g.filter((e) => e.node).length : 0;
        if (S === 1) {
          return [
            C(
              a.map((t, n) => ({
                ...t,
                $$columnIndex: n + e,
              })),
              g,
              0,
            ),
          ];
        }
        let t = e;
        const n = [];
        const r = (e, o = 0) => {
          n[o] = n[o] || [];
          e.forEach((e) => {
            const i = {
              ...e,
            };
            if (i[e_childrenColumnName]) {
              i.colSpan = nu(
                e[e_childrenColumnName],
                e_childrenColumnName,
              ).length;
              i.$$columnIndex = [t];
              n[o].push(i);
              r(i[e_childrenColumnName], o + 1);
              i.$$columnIndex.push(t - 1);
            } else {
              i.rowSpan = S - o;
              i.$$columnIndex = t++;
              n[o].push(i);
            }
          });
          n[o] = C(n[o], g, o);
        };
        r(a);
        return n;
      },
      [a, e_childrenColumnName, S, C, g],
    ),
    w,
  ];
};
const np = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const nd = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const nv = (e, t) => {
  let n = typeof Symbol === "function" && e[Symbol.iterator];
  if (!n) {
    return e;
  }
  let r;
  let o;
  const i = n.call(e);
  const l = [];
  try {
    while ((t === undefined || t-- > 0) && !(r = i.next()).done) {
      l.push(r.value);
    }
  } catch (error) {
    o = {
      error,
    };
  } finally {
    try {
      if (r && !r.done && (n = i.return)) {
        n.call(i);
      }
    } finally {
      if (o) {
        throw o.error;
      }
    }
  }
  return l;
};
const nh = function (e, t, n) {
  if (n || arguments.length == 2) {
    var r;
    for (let o = 0, i = t.length; o < i; o++) {
      if (!(!r && o in t)) {
        if (!r) {
          r = Array.prototype.slice.call(t, 0, o);
        }
        r[o] = t[o];
      }
    }
  }
  return e.concat(r || Array.prototype.slice.call(t));
};
const ny = {
  showHeader: true,
  border: true,
  hover: true,
  rowKey: "key",
  pagePosition: "br",
  childrenColumnName: "children",
  indentSize: 15,
  showSorterTooltip: true,
};
const ng = i.forwardRef(function (e, t) {
  let n;
  let r;
  let defaultSorters;
  let p;
  let activeSorters;
  let m;
  let v;
  let currentSorter;
  let y;
  let g;
  let getNextActiveSorters;
  let x;
  let updateStateSorters;
  let w;
  let S;
  let P;
  let A;
  let N;
  let k;
  let T;
  let j;
  let R;
  let F;
  let M;
  let _;
  let V;
  let D;
  let z;
  let L;
  let H;
  let G;
  let B;
  let U;
  const Q = i.useContext(QO);
  const Q_getPrefixCls = Q.getPrefixCls;
  const Q_loadingElement = Q.loadingElement;
  const Q_size = Q.size;
  const Q_tablePagination = Q.tablePagination;
  const Q_renderEmpty = Q.renderEmpty;
  const Q_componentConfig = Q.componentConfig;
  const Q_rtl = Q.rtl;
  const er = A_19(
    e,
    ny,
    Q_componentConfig == null ? undefined : Q_componentConfig.Table,
  );
  const eo = A_19(
    Gv(e == null ? undefined : e.pagination)
      ? e == null
        ? undefined
        : e.pagination
      : {},
    Gv(
      (B = Q_componentConfig == null ? undefined : Q_componentConfig.Table) ==
        null
        ? undefined
        : B.pagination,
    )
      ? (U = Q_componentConfig == null ? undefined : Q_componentConfig.Table) ==
        null
        ? undefined
        : U.pagination
      : {},
    Q_tablePagination || {},
  );
  const er_style = er.style;
  const er_className = er.className;
  const er_components = er.components;
  const er_border = er.border;
  const er_borderCell = er.borderCell;
  const er_columns = er.columns;
  const ex = er_columns === undefined ? [] : er_columns;
  const er_data = er.data;
  const eC = er_data === undefined ? [] : er_data;
  const er_scroll = er.scroll;
  const er_noDataElement = er.noDataElement;
  const er_showHeader = er.showHeader;
  const er_stripe = er.stripe;
  const er_hover = er.hover;
  const er_pagination = er.pagination;
  const er_onChange = er.onChange;
  const er_pagePosition = er.pagePosition;
  const er_childrenColumnName = er.childrenColumnName;
  const er_indentSize = er.indentSize;
  const er_rowSelection = er.rowSelection;
  const er_tableLayoutFixed = er.tableLayoutFixed;
  const er_footer = er.footer;
  const er_virtualized = er.virtualized;
  const er_renderPagination = er.renderPagination;
  const er_summary = er.summary;
  const er_rowKey = er.rowKey;
  const eG = i.useMemo(
    function () {
      return (function e(t) {
        if (!t) {
          return [];
        }
        const n = [];
        t.forEach((t) => {
          if (Gv(t)) {
            const r = {
              ...t,
            };
            r.__ORIGIN_DATA = t;
            const o = r[er_childrenColumnName];
            if (Gv(r) && o && cy(o)) {
              r[er_childrenColumnName] = e(o);
            }
            n.push(r);
          } else {
            n.push(t);
          }
        });
        return n;
      })(eC);
    },
    [eC, er_childrenColumnName],
  );
  const eW = Q_getPrefixCls("table");
  const eK =
    er.size ||
    (["default", "middle", "small"].indexOf(Q_size) > -1 ? Q_size : "default");
  const eBRef = i.useRef(null);
  const eURef = i.useRef(null);
  const eQRef = i.useRef(null);
  const eqRef = i.useRef(null);
  const eYRef = i.useRef(null);
  const e$Ref = i.useRef(0);
  const eXRef = i.useRef(false);
  const eJ = nv(useNs(er), 2);
  const groupColumns = eJ[0];
  const columns = eJ[1];
  r = {};
  defaultSorters = [];
  columns.forEach((e) => {
    const e_key = e.key;
    if (e.defaultFilters) {
      r[e_key] = e.defaultFilters;
    }
    if (e.filteredValue) {
      r[e_key] = e.filteredValue;
    }
    if ("defaultSortOrder" in e || "sortOrder" in e) {
      const n = ev(e.sorter);
      const i = "sortOrder" in e ? e.sortOrder : e.defaultSortOrder;
      const l = {
        field: e_key,
        direction: i,
        sorterFn: em(e.sorter),
        priority: n,
      };
      if (i) {
        if (Et(n)) {
          if (defaultSorters.every((e) => Et(e.priority) || !e.direction)) {
            defaultSorters.push(l);
          }
        } else if (defaultSorters.every((e) => !e.direction)) {
          defaultSorters.push(l);
        } else {
          defaultSorters = [l];
        }
      } else {
        defaultSorters.push(l);
      }
    }
  });
  const e1 = {
    currentFilters: r,
    defaultSorters,
  };
  const e1_currentFilters = e1.currentFilters;
  const e1_defaultSorters = e1.defaultSorters;
  const e6 = nv(i.useState(1), 2);
  const e5 = e6[0];
  const e7 = e6[1];
  const e8 = nv(i.useState(eo.pageSize || eo.defaultPageSize || 10), 2);
  const e9 = e8[0];
  const te = e8[1];
  const tt = nv(i.useState(e1_currentFilters), 2);
  const tn = tt[0];
  const tr = tt[1];
  const to = nv(i.useState(0), 2);
  const tableViewWidth = to[0];
  const tl = to[1];
  const stickyOffsets = useNo(columns);
  const tc = nv(useNi(groupColumns, columns, eW), 2);
  const groupStickyClassNames = tc[0];
  const stickyClassNames = tc[1];
  activeSorters = (p = np(i.useState(e1_defaultSorters), 2))[0];
  m = p[1];
  currentSorter = (v = np(i.useState({}), 2))[0];
  y = v[1];
  g = i.useRef(columns);
  getNextActiveSorters = i.useCallback(
    function (e) {
      const e_field = e.field;
      const e_direction = e.direction;
      if (activeSorters.find((e) => e.field === e_field)) {
        if (e_direction) {
          return activeSorters.map((n) => {
            if (n.field === e_field) {
              return e;
            }
            return n;
          });
        }
        return activeSorters.filter((e) => e.field !== e_field);
      }
      if (e_direction) {
        if (!Et(e.priority) || activeSorters.find((e) => !Et(e.priority))) {
          return [e];
        }
        return nd(nd([], np(activeSorters), false), [e], false);
      }
      return nd([], np(activeSorters), false);
    },
    [activeSorters],
  );
  x = i.useCallback(function (e) {
    const t = e.filter((e) => "sortOrder" in e);
    let n = [];
    t.forEach((e) => {
      const t = ev(e.sorter);
      const e_sortOrder = e.sortOrder;
      const o = {
        field: e.key,
        direction: e_sortOrder,
        sorterFn: em(e.sorter),
        priority: t,
      };
      if (e_sortOrder) {
        if (Et(t)) {
          if (n.every((e) => Et(e.priority) || !e.direction)) {
            n.push(o);
          }
        } else if (n.every((e) => !e.direction)) {
          n.push(o);
        } else {
          n = [o];
        }
      } else {
        n.push(o);
      }
    });
    return n;
  }, []);
  updateStateSorters = i.useCallback(
    function (e, t) {
      if (!x(columns).length) {
        m(t);
        y(e);
      }
    },
    [columns, x, m, y],
  );
  A_23(
    function () {
      const e = x(g.current);
      const t = x(columns).filter((t) =>
        e.find((e) => {
          const e_field = e.field;
          const e_direction = e.direction;
          return t.field === e_field && t.direction !== e_direction;
        }),
      );
      if (t && t.length) {
        m(t);
        y({});
      }
      g.current = columns;
    },
    [columns, x, getNextActiveSorters, y, m],
  );
  const tf = {
    currentSorter,
    activeSorters,
    getNextActiveSorters,
    updateStateSorters,
  };
  const tf_currentSorter = tf.currentSorter;
  const tf_activeSorters = tf.activeSorters;
  const tf_getNextActiveSorters = tf.getNextActiveSorters;
  const tf_updateStateSorters = tf.updateStateSorters;
  const th = useO(er_components);
  const th_ComponentTable = th.ComponentTable;
  const th_ComponentBodyWrapper = th.ComponentBodyWrapper;
  const th_ComponentHeaderWrapper = th.ComponentHeaderWrapper;
  const getRowKey = i.useMemo(
    function () {
      if (typeof er_rowKey === "function") {
        return function (e) {
          return er_rowKey(ep(e));
        };
      }
      return function (e) {
        return e[er_rowKey];
      };
    },
    [er_rowKey],
  );
  const tE = i.useMemo(
    function () {
      const e = columns.filter((e) => "filteredValue" in e);
      const t = {};
      if (e.length) {
        e.forEach((e, n) => {
          const r = e.dataIndex === undefined ? n : e.dataIndex;
          if (r !== undefined) {
            t[r] = e.filteredValue;
          }
        });
      }
      return t;
    },
    [columns],
  );
  const tC = i.useMemo(
    function () {
      if (Object.keys(tE).length) {
        return tE;
      }
      return tn;
    },
    [tn, tE],
  );
  function onHandleFilterReset(e) {
    const e_dataIndex = e.dataIndex;
    const n = {
      ...tC,
    };
    delete n[e_dataIndex];
    tr(n);
    const r = tA(tf_currentSorter, tf_activeSorters, n);
    const o = tR(r);
    if (er_onChange) {
      er_onChange(tk(r), tf_currentSorter, n, {
        currentData: ep(o),
        action: "filter",
      });
    }
  }
  const tO = !!columns.find((e) => e.fixed === "left");
  const tS = !!columns.find((e) => e.fixed === "right");
  const hasFixedColumn = tO || tS;
  function tA(e, t, n) {
    let r = (eG || []).slice();
    Object.keys(n).forEach((e) => {
      if (n[e] && n[e].length) {
        const t = t0(e);
        if (t && typeof t.onFilter === "function") {
          r = r.filter((r) =>
            n[e].reduce((acc, item) => acc || t.onFilter(item, r), false),
          );
        }
      }
    });
    const o = (e) => {
      let n;
      let r;
      return e
        .slice()
        .sort(
          ((n = function (e, t) {
            return function (n, r) {
              const o = e(n, r);
              if (t === "descend") {
                return -o;
              }
              return o;
            };
          }),
          (r = nh([], nv(t), false)).sort((e, t) => t.priority - e.priority),
          (e, t) => {
            for (let o = 0, i = r.length; o < i; o++) {
              const l = r[o];
              const a = l.sorterFn;
              const c = l.direction;
              if (typeof a === "function") {
                const u = n(a, c)(e, t);
                if (u !== 0) {
                  return u;
                }
              }
            }
            return 0;
          }),
        )
        .map((e) => {
          if (cy(e[er_childrenColumnName])) {
            return {
              ...e,
              ...{
                [er_childrenColumnName]: o(e[er_childrenColumnName]),
              },
            };
          }
          return e;
        });
    };
    if ((e.direction && typeof e.sorterFn === "function") || t.length) {
      return o(r);
    }
    return r;
  }
  const tN = tA(tf_currentSorter, tf_activeSorters, tC);
  function tk(e = tN) {
    const t = eo.pageSize || e9 || 10;
    let position = "top";
    position =
      er_pagePosition === "tl" || er_pagePosition === "bl" ? "bottom" : "top";
    const total = cy(e) ? e.length : 0;
    const o = Math.ceil(total / t) < e5 ? 1 : e5;
    if (o !== e5) {
      e7(o);
    }
    let i = {
      size: eK === "middle" ? "default" : eK,
      total,
      pageSize: t,
      current: o,
      selectProps: {
        triggerProps: {
          position,
        },
      },
    };
    if (typeof er_pagination === "object" && er_pagination.selectProps) {
      i.selectProps = {
        ...i.selectProps,
        ...er_pagination.selectProps,
      };
    }
    if (Gv(er_pagination)) {
      i = {
        ...i,
        ...er_pagination,
      };
    }
    if (Gv(eo)) {
      i = {
        ...i,
        ...eo,
      };
    }
    i.onChange = t1;
    return i;
  }
  var tT = tk();
  const tj = tR();
  function tR(e = tN, t = tT) {
    const t_current = t.current;
    const r = t_current === undefined ? 0 : t_current;
    const t_pageSize = t.pageSize;
    const i = t_pageSize === undefined ? 10 : t_pageSize;
    if (er_pagination === false || (Gv(er_pagination) && eC.length <= i)) {
      return e;
    }
    return e.slice((r - 1) * i, r * i);
  }
  const tI = l.A(tz, 100);
  const tF = !!(er_scroll && er_scroll.y);
  const tM = er_summary == null ? undefined : er_summary(ep(tN));
  const t_ = er_summary && i.isValidElement(tM) && tM.props.fixed;
  const tV = tF && t_;
  function getRootDomElement() {
    return eqRef.current;
  }
  function tz() {
    tH();
    const e = getRootDomElement();
    if (e && (hasFixedColumn || (er_scroll && er_scroll.x))) {
      tl(
        (
          e.querySelector("." + eW + "-body") ||
          e.querySelector("." + eW + "-content-inner")
        ).clientWidth,
      );
    }
  }
  A_13(
    function () {
      tz();
      on(window, "resize", tI);
      const eBRef_current = eBRef.current;
      const eURef_current = eURef.current;
      const eQRef_current = eQRef.current;
      if (eURef_current) {
        on(eURef_current, "scroll", t2);
      }
      const r = eBRef_current && eBRef_current.parentNode;
      if (eBRef_current && r) {
        on(r, "scroll", t2);
      }
      if (eQRef_current) {
        on(eQRef_current, "scroll", t2);
      }
      return function () {
        AU(window, "resize", tI);
        if (eURef_current) {
          AU(eURef_current, "scroll", t2);
        }
        if (r) {
          AU(r, "scroll", t2);
        }
        if (eQRef_current) {
          AU(eQRef_current, "scroll", t2);
        }
      };
    },
    [tO, tS, er_scroll == null ? undefined : er_scroll.x, columns.length, eC],
  );
  A_23(
    function () {
      const e = tk(eC);
      if (Math.ceil(e.total / e.pageSize) < e5) {
        e7(1);
      }
    },
    [eC == null ? undefined : eC.length],
  );
  A_23(
    function () {
      tH();
    },
    [eC, tO, tS],
  );
  i.useImperativeHandle(t, function () {
    return {
      getRootDomElement,
    };
  });
  var tL = i.useCallback(
    a.A(function () {
      const eqRef_current = eqRef.current;
      const t = tF ? eURef.current : eYRef.current && eYRef.current.parentNode;
      if (t) {
        const n = Q_rtl ? -t.scrollLeft : t.scrollLeft;
        const r = n === 0;
        const o =
          n + 1 >=
          t.children[0].getBoundingClientRect().width -
            t.getBoundingClientRect().width;
        if (r && o) {
          tK(eqRef_current.classList, eW + "-scroll-position-both");
        } else if (r) {
          tK(
            eqRef_current.classList,
            eW + "-scroll-position-" + (Q_rtl ? "right" : "left"),
          );
        } else if (o) {
          tK(
            eqRef_current.classList,
            eW + "-scroll-position-" + (Q_rtl ? "left" : "right"),
          );
        } else {
          tK(eqRef_current.classList, eW + "-scroll-position-middle");
        }
      } else {
        if (eqRef_current) {
          tW(eqRef_current.classList);
        }
      }
    }, 100),
    [eqRef.current, eURef.current, tF],
  );
  function tH() {
    if (hasFixedColumn || (er_scroll && Gv(er_scroll) && er_scroll.x)) {
      const e = eqRef.current;
      if (e) {
        if (tO) {
          tG(e.classList, eW + "-has-fixed-col-left");
        }
        if (tS) {
          tG(e.classList, eW + "-has-fixed-col-right");
        }
      }
      tL();
    }
  }
  function tG(classList, t) {
    if (!classList.contains(t)) {
      classList.add(t);
    }
  }
  function tW(e) {
    e.remove(eW + "-scroll-position-both");
    e.remove(eW + "-scroll-position-left");
    e.remove(eW + "-scroll-position-right");
    e.remove(eW + "-scroll-position-middle");
  }
  function tK(classList, t) {
    if (!classList.contains(t)) {
      tW(classList);
      classList.add(t);
    }
  }
  const tB = ((e, t, n, r) => {
    let allSelectedRowKeys;
    let flattenData;
    let a;
    let c;
    const e_rowSelection = e.rowSelection;
    const e_childrenColumnName = e.childrenColumnName;
    const p =
      e_rowSelection == null ? undefined : e_rowSelection.selectedRowKeys;
    const d = e_rowSelection == null ? undefined : e_rowSelection.onSelectAll;
    const m = e_rowSelection == null ? undefined : e_rowSelection.onSelect;
    const v = e_rowSelection == null ? undefined : e_rowSelection.onChange;
    const h = e_rowSelection == null ? undefined : e_rowSelection.pureKeys;
    const y =
      typeof (e_rowSelection == null
        ? undefined
        : e_rowSelection.checkStrictly) === "boolean" &&
      !e_rowSelection.checkStrictly;
    const g =
      e_rowSelection == null
        ? undefined
        : e_rowSelection.preserveSelectedRowKeys;
    allSelectedRowKeys = [];
    flattenData = [];
    (a = function (t) {
      if (cy(t) && t.length) {
        t.forEach((t) => {
          const n = r(t);
          if (
            !(
              e_rowSelection &&
              typeof e_rowSelection.checkboxProps === "function"
                ? e_rowSelection.checkboxProps(ep(t))
                : {}
            ).disabled
          ) {
            allSelectedRowKeys.push(n);
          }
          if (ef(t, e.childrenColumnName)) {
            a(t[e.childrenColumnName]);
          }
        });
      }
    })(t);
    (c = function (t, n) {
      if (cy(t) && t.length) {
        t.forEach((t) => {
          if (n && y) {
            t.__INTERNAL_PARENT = n;
          }
          flattenData.push(t);
          if (ef(t, e.childrenColumnName)) {
            const r = {
              ...t,
            };
            c(t[e.childrenColumnName], r);
          }
        });
      }
    })(n, undefined);
    const b = {
      allSelectedRowKeys,
      flattenData,
    };
    const b_allSelectedRowKeys = b.allSelectedRowKeys;
    const b_flattenData = b.flattenData;
    const C = t9(i.useState([]), 2);
    const w = C[0];
    const setSelectedRowKeys = C[1];
    const S = t9(i.useState([]), 2);
    const P = S[0];
    const A = S[1];
    const N = ((e, t = [], n, r, o) => {
      if (!o) {
        return {
          selectedRowKeys: t,
          indeterminateKeys: [],
        };
      }
      const i = new Set(t);
      const l = new Set([]);
      t.forEach((t) => {
        const o = e.find((e) => n(e) === t);
        if (!(b0(o) || kZ(o))) {
          (function e(t) {
            i.add(n(t));
            l.delete(n(t));
            if (cy(t[r])) {
              t[r].forEach((t) => {
                e(t);
              });
            }
          })(o);
          ed(o, i, l, n, r);
        }
      });
      return {
        selectedRowKeys: eu([], ec(i), false),
        indeterminateKeys: eu([], ec(l), false),
      };
    })(b_flattenData, nt(p || w), r, e_childrenColumnName, y);
    const k = y && !p ? w : N.selectedRowKeys;
    const indeterminateKeys = y && !p ? P : N.indeterminateKeys;
    const j = t9(i.useState(h ? [] : F(k)), 2);
    var R = j[0];
    const I = j[1];
    function F(e, t) {
      const n = new Map(
        (t ? R.concat(b_flattenData) : b_flattenData).map((e) => [r(e), e]),
      );
      return e.map((e) => n.get(e)).filter((e) => e);
    }
    const M = new Set(b_flattenData.map((e) => r(e)));
    function _(e) {
      if (g) {
        return e;
      }
      return e.filter((e) => M.has(e));
    }
    return {
      selectedRowKeys: k,
      indeterminateKeys,
      onCheckAll: function (e) {
        let t = [];
        let n = [];
        if (e) {
          t = _(nt(k.concat(b_allSelectedRowKeys)));
        } else {
          const r = new Set(b_allSelectedRowKeys);
          t = _(k.filter((e) => !r.has(e)));
        }
        if (!h) {
          n = F(t, true);
        }
        const o = ep(n);
        setSelectedRowKeys(t);
        I(n);
        A([]);
        if (v) {
          v(t, o);
        }
        if (d) {
          d(e, o);
        }
      },
      onCheck: function (e, t) {
        let n;
        let o;
        let i;
        let l;
        if ((n = k) === undefined) {
          n = [];
        }
        if ((o = P) === undefined) {
          o = [];
        }
        i = new Set(n);
        l = new Set(o);
        if (y) {
          (function t(n) {
            if (e) {
              i.add(r(n));
              l.delete(r(n));
            } else {
              i.delete(r(n));
            }
            if (cy(n[e_childrenColumnName])) {
              n[e_childrenColumnName].forEach((e) => {
                t(e);
              });
            }
          })(t);
          ed(t, i, l, r, e_childrenColumnName);
        } else if (e) {
          i.add(r(t));
        } else {
          i.delete(r(t));
        }
        const a = {
          selectedRowKeys: eu([], ec(i), false),
          indeterminateKeys: eu([], ec(l), false),
        };
        const a_selectedRowKeys = a.selectedRowKeys;
        const a_indeterminateKeys = a.indeterminateKeys;
        const p = _(a_selectedRowKeys);
        const d = F(p, true);
        const h = ep(d);
        setSelectedRowKeys(p);
        I(d);
        A(a_indeterminateKeys);
        if (m) {
          m(e, ep(t), h);
        }
        if (v) {
          v(p, h);
        }
      },
      onCheckRadio: function (e, t) {
        const n = ep([b_flattenData.find((t) => r(t) === e)]);
        setSelectedRowKeys([e]);
        if (m) {
          m(true, ep(t), n);
        }
        if (v) {
          v([e], n);
        }
      },
      setSelectedRowKeys,
      allSelectedRowKeys: b_allSelectedRowKeys,
      flattenData: b_flattenData,
    };
  })(er, tj, eG, getRowKey);
  var tB_selectedRowKeys = tB.selectedRowKeys;
  const tB_indeterminateKeys = tB.indeterminateKeys;
  const tB_onCheckAll = tB.onCheckAll;
  const tB_onCheck = tB.onCheck;
  const tB_onCheckRadio = tB.onCheckRadio;
  var tB_setSelectedRowKeys = tB.setSelectedRowKeys;
  const tB_allSelectedRowKeys = tB.allSelectedRowKeys;
  const tB_flattenData = tB.flattenData;
  function t0(e) {
    return columns.find((t, n) => {
      if (t.dataIndex !== undefined) {
        return t.dataIndex === e;
      }
      return Number(e) === n;
    });
  }
  function t1(e, t) {
    e7(e);
    te(t);
    if (e !== e5) {
      (() => {
        if (eURef.current) {
          const e = eURef.current.scrollTop;
          new c.A({
            from: {
              scrollTop: e,
            },
            to: {
              scrollTop: 0,
            },
            easing: "quintInOut",
            duration: 300,
            onUpdate: function (e) {
              eURef.current.scrollTop = e.scrollTop;
            },
          }).start();
        }
      })();
    }
    if (
      er_rowSelection &&
      !er_rowSelection.checkCrossPage &&
      tB_selectedRowKeys.length
    ) {
      tB_setSelectedRowKeys([]);
      if (er_rowSelection.onChange) {
        er_rowSelection.onChange([], []);
      }
    }
    const n = {
      ...tk(),
      current: e,
      pageSize: t,
    };
    if (er_onChange) {
      er_onChange(n, tf_currentSorter, tC, {
        currentData: tR(tN, n),
        action: "paginate",
      });
    }
    if (eo.onChange) {
      eo.onChange(e, t);
    }
  }
  function t2(e) {
    const e_target = e.target;
    const eURef_current = eURef.current;
    const r = eBRef.current && eBRef.current.parentNode;
    const eQRef_current = eQRef.current;
    if (e_target.scrollLeft !== e$Ref.current) {
      if (r) {
        r.scrollLeft = e_target.scrollLeft;
      }
      if (eURef_current) {
        eURef_current.scrollLeft = e_target.scrollLeft;
      }
      if (eQRef_current) {
        eQRef_current.scrollLeft = e_target.scrollLeft;
      }
      tH();
    }
    e$Ref.current = e.target.scrollLeft;
  }
  const t6 = nv(
    ((w = er.defaultExpandedRowKeys),
    (S = er.defaultExpandAllRows),
    (P = er.expandedRowRender),
    (A = er.onExpand),
    (N = er.onExpandedRowsChange),
    (T = (k = er.childrenColumnName) === undefined ? "children" : k),
    (j = er.expandProps),
    (F = (R = t7(
      i.useState(
        ((n = []),
        er.expandedRowKeys
          ? (n = er.expandedRowKeys)
          : w
            ? (n = w)
            : S &&
              (n = tB_flattenData
                .map((e, t) => {
                  const n = ep(e);
                  if (
                    j &&
                    "rowExpandable" in j &&
                    typeof j.rowExpandable === "function"
                  ) {
                    return j.rowExpandable(n) && getRowKey(e);
                  }
                  if (typeof P === "function") {
                    return P(n, t) && getRowKey(e);
                  }
                  return ef(e, T) && getRowKey(e);
                })
                .filter((e) => e)),
        n),
      ),
      2,
    ))[0]),
    (M = R[1]),
    [
      (_ = er.expandedRowKeys || F),
      function (e) {
        let t;
        let n;
        const r = _.indexOf(e) === -1;
        const o = r ? _.concat(e) : _.filter((t) => e !== t);
        const i = tB_flattenData
          .filter((e) => o.indexOf(getRowKey(e)) !== -1)
          .map((e) => getRowKey(e));
        M(i);
        t = e;
        n = r;
        if (A) {
          A(ep(tB_flattenData.find((e) => getRowKey(e) === t)), n);
        }
        if (N) {
          N(i);
        }
      },
    ]),
    2,
  );
  const expandedRowKeys = t6[0];
  const onClickExpandBtn = t6[1];
  let nr = {};
  let nl = {};
  if (er_scroll) {
    if (
      er_scroll.x &&
      (typeof er_scroll.x === "number" || typeof er_scroll.x === "string")
    ) {
      nl = {
        width: er_scroll.x,
      };
    }
    if (
      er_scroll.y &&
      (typeof er_scroll.y === "number" || typeof er_scroll.y === "string")
    ) {
      nr = {
        maxHeight: er_scroll.y,
      };
    }
  }
  const na = i.createElement(IComponent, {
    ...er,
    activeSorters: tf_activeSorters,
    currentSorter: tf_currentSorter,
    selectedRowKeys: tB_selectedRowKeys,
    currentFilters: tC,
    onCheckAll: tB_onCheckAll,
    onSort: function (e, field) {
      const n = t0(field);
      if (n) {
        const r = {
          direction: e,
          field,
          sorterFn: em(n.sorter),
          priority: ev(n.sorter),
        };
        const o = tf_getNextActiveSorters(r);
        tf_updateStateSorters(r, o);
        const i = tA(r, o, tC);
        const l = tR(i);
        if (er_onChange) {
          er_onChange(tk(i), r, tC, {
            currentData: ep(l),
            action: "sort",
          });
        }
      }
    },
    data: tj,
    onHandleFilter: function (e, t) {
      const r = {
        ...tC,
        ...{
          [e.dataIndex]: t,
        },
      };
      const o = {
        ...r,
        ...tE,
      };
      if (cy(t) && t.length) {
        tr(o);
        const i = tA(tf_currentSorter, tf_activeSorters, r);
        const l = tR(i);
        if (er_onChange) {
          er_onChange(tk(i), tf_currentSorter, r, {
            currentData: ep(l),
            action: "filter",
          });
        }
      } else {
        if (cy(t) && !t.length) {
          onHandleFilterReset(e);
        }
      }
    },
    onHandleFilterReset,
    prefixCls: eW,
    allSelectedRowKeys: tB_allSelectedRowKeys,
    groupColumns,
    stickyOffsets,
    groupStickyClassNames,
  });
  const nc =
    tM &&
    i.createElement(ek, {
      prefixCls: eW,
      summary: er_summary,
      data: tj,
      columns,
      stickyOffsets,
      stickyClassNames,
    });
  const nu = i.createElement(eA, {
    ...er,
    selectedRowKeys: tB_selectedRowKeys,
    indeterminateKeys: tB_indeterminateKeys,
    expandedRowKeys,
    onCheck: tB_onCheck,
    onCheckRadio: tB_onCheckRadio,
    onClickExpandBtn,
    columns,
    data: tj,
    prefixCls: eW,
    hasFixedColumn,
    tableViewWidth,
    indentSize: er_indentSize,
    noDataElement: er_noDataElement || Q_renderEmpty("Table"),
    activeSorters: tf_activeSorters,
    currentSorter: tf_currentSorter,
    stickyOffsets,
    stickyClassNames,
    getRowKey,
    saveVirtualWrapperRef: function (e) {
      if (er_virtualized) {
        eURef.current = e;
      }
    },
  });
  const ng =
    er_virtualized || tV ? nu : i.createElement(i.Fragment, null, nu, nc);
  if (!ex.length) {
    return null;
  }
  const nb = Gv(er_border) ? er_border.wrapper : er_border;
  const nx = Gv(er_border) ? er_border.cell : er_borderCell;
  const nE = Gv(er_border)
    ? er_border.cell || er_border.headerCell
    : er_borderCell;
  const nC = Gv(er_border)
    ? er_border.cell || er_border.bodyCell
    : er_borderCell;
  const nw = A_1(
    eW,
    eW + "-size-" + eK,
    {
      [eW + "-border"]: nb,
      [eW + "-border-cell"]: nx,
      [eW + "-border-header-cell"]: !nx && nE,
      [eW + "-border-body-cell"]: !nx && nC,
      [eW + "-stripe"]: er_stripe,
      [eW + "-hover"]: er_hover,
      [eW + "-type-radio"]: er_rowSelection && er_rowSelection.type === "radio",
      [eW + "-layout-fixed"]:
        er_tableLayoutFixed ||
        (er_scroll && (er_scroll.x || er_scroll.y)) ||
        ex.find((e) => e.ellipsis),
      [eW + "-fixed-column"]: hasFixedColumn,
      [eW + "-virtualized"]: er_virtualized,
      [eW + "-rtl"]: Q_rtl,
    },
    er_className,
  );
  const nO =
    er_pagePosition === "tl" ||
    er_pagePosition === "tr" ||
    er_pagePosition === "topCenter";
  const nS = A_1(eW + "-pagination", {
    [eW + "-pagination-left"]:
      er_pagePosition === "tl" || er_pagePosition === "bl",
    [eW + "-pagination-center"]:
      er_pagePosition === "topCenter" || er_pagePosition === "bottomCenter",
    [eW + "-pagination-top"]: nO,
  });
  let er_loading = er.loading;
  if (typeof er_loading === "boolean") {
    er_loading = {
      loading: er_loading,
    };
  }
  const nA =
    typeof er_renderPagination === "function"
      ? er_renderPagination(
          i.createElement(t3, {
            ...tT,
          }),
        )
      : i.createElement(
          "div",
          {
            className: nS,
          },
          i.createElement(t3, {
            ...tT,
          }),
        );
  return i.createElement(
    "div",
    {
      ref: eqRef,
      style: er_style,
      className: nw,
      ...eb.t(er),
    },
    i.createElement(
      A_2,
      {
        element: Q_loadingElement || i.createElement(A_2, null),
        ...er_loading,
      },
      er_pagination !== false && tN.length !== 0 && nO && nA,
      ((V = {}),
      er_scroll &&
        Gv(er_scroll) &&
        er_scroll.x &&
        (V = {
          width: er_scroll.x,
        }),
      (D = i.createElement(
        "div",
        {
          className: eW + "-tfoot",
          ref: eQRef,
        },
        i.createElement(
          th_ComponentTable,
          {
            style: V,
          },
          i.createElement(t5, {
            columns,
            prefixCls: eW,
          }),
          nc,
        ),
      )),
      (z = tM && tF && t_ === "top"),
      (L = tM && tF && t_ === "bottom"),
      (G = i.createElement(
        i.Fragment,
        null,
        er_showHeader
          ? ((H = Gv(er_scroll) && er_scroll.x === "max-content"),
            tF || er_virtualized
              ? i.createElement(
                  th_ComponentHeaderWrapper,
                  {
                    className: eW + "-header",
                  },
                  i.createElement(
                    th_ComponentTable,
                    {
                      ref: eBRef,
                      style: H ? {} : nl,
                    },
                    i.createElement(t5, {
                      columns,
                      prefixCls: eW,
                    }),
                    na,
                  ),
                )
              : na)
          : null,
        z && D,
        i.createElement(
          A_12,
          {
            onResize: function () {
              const e = eBRef.current && eBRef.current.parentNode;
              const t = e ? e.offsetHeight - e.clientHeight : 0;
              if (t && t > 0) {
                e.style.marginBottom = "-" + t + "px";
                e.style.paddingBottom = "0px";
                if (eQRef.current) {
                  eQRef.current.style.marginBottom = "-" + t + "px";
                  eQRef.current.style.paddingBottom = "0px";
                }
              }
              setTimeout(() => {
                let t;
                if ((t = eURef.current) ? t.offsetWidth - t.clientWidth : 0) {
                  eXRef.current = true;
                  if (e) {
                    e.style.overflowY = "scroll";
                  }
                  if (eQRef.current) {
                    eQRef.current.style.overflowY = "scroll";
                  }
                } else if (e && eXRef.current) {
                  eXRef.current = false;
                  e.style.overflowY = "auto";
                  if (eQRef.current) {
                    eQRef.current.style.overflowY = "auto";
                  }
                }
              });
            },
          },
          tF && !er_virtualized
            ? i.createElement(
                th_ComponentBodyWrapper,
                {
                  ref: eURef,
                  className: eW + "-body",
                  style: nr,
                },
                i.createElement(
                  th_ComponentTable,
                  {
                    style: nl,
                  },
                  i.createElement(t5, {
                    columns,
                    prefixCls: eW,
                  }),
                  ng,
                ),
              )
            : ng,
        ),
        L && D,
      )),
      i.createElement(
        i.Fragment,
        null,
        i.createElement(
          "div",
          {
            className: eW + "-container",
          },
          i.createElement(
            "div",
            {
              className: eW + "-content-scroll",
            },
            i.createElement(
              "div",
              {
                className: eW + "-content-inner",
                onScroll: tF
                  ? undefined
                  : function (e) {
                      const e_target = e.target;
                      const eYRef_current = eYRef.current;
                      if (e_target.scrollLeft !== e$Ref.current) {
                        eYRef_current.scrollLeft = e_target.scrollLeft;
                        tH();
                      }
                      e$Ref.current = e.target.scrollLeft;
                    },
              },
              tF || er_virtualized
                ? G
                : i.createElement(
                    th_ComponentTable,
                    {
                      ref: eYRef,
                      style: V,
                    },
                    i.createElement(t5, {
                      prefixCls: eW,
                      columns,
                    }),
                    G,
                  ),
            ),
          ),
        ),
        typeof er_footer === "function" &&
          i.createElement(
            "div",
            {
              className: eW + "-footer",
            },
            er_footer(tj),
          ),
      )),
      er_pagination !== false && tN.length !== 0 && !nO && nA,
    ),
  );
});
ng.displayName = "Table";
function nw(e) {
  const { children, ...rest } = e;
  return i.createElement(
    "td",
    {
      ...A_16(rest, ["$$ArcoTableSummaryCell"]),
    },
    children,
  );
}
function nO(e) {
  return e.children;
}
nw.__ARCO_TABLE_SUMMARY_CELL__ = true;
nO.Row = function (e) {
  const rtl = i.useContext(QO).rtl;
  const n = i.useContext(ENContext);
  const n_columns = n.columns;
  const n_stickyOffsets = n.stickyOffsets;
  const n_stickyClassNames = n.stickyClassNames;
  const n_prefixCls = n.prefixCls;
  const { children, ...rest } = e;
  const f = i.Children.map(children, function (e) {
    return e.props.colSpan || 1;
  });
  const p = i.Children.map(children, function (e, n) {
    let p;
    let d;
    const m =
      eg.A(e, "type.__ARCO_TABLE_SUMMARY_CELL__") ||
      eg.A(e, "props.$$ArcoTableSummaryCell");
    const v =
      (p = e == null ? undefined : e.props) == null ? undefined : p.style;
    const h =
      (d = e == null ? undefined : e.props) == null ? undefined : d.className;
    const y = f.slice(0, n).reduce((acc, item) => acc + item, 0);
    const g =
      n_columns[y].fixed === "left"
        ? {
            [rtl ? "right" : "left"]: n_stickyOffsets[y],
          }
        : n_columns[y].fixed === "right"
          ? {
              [rtl ? "left" : "right"]: n_stickyOffsets[y],
            }
          : {};
    const b =
      n_columns[y].fixed === "left" || n_columns[y].fixed === "right"
        ? n_stickyClassNames[y]
        : "";
    if (m) {
      return i.cloneElement(e, {
        ...e.props,
        className: A_1(n_prefixCls + "-td", b, h),
        style: {
          ...v,
          ...g,
        },
      });
    }
    return e;
  });
  return i.createElement(
    "tr",
    {
      ...rest,
    },
    p,
  );
};
nO.Cell = nw;
ng.Summary = nO;
var nS = ng;
export { nS as A };
