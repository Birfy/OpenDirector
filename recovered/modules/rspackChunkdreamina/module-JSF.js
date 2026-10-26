import i from "oa";
import l from "bk";
import s from "z8";
import a from "bT";
import c from "yI";
import u from "c8J";
import d from "Cs";
import { Et, Gv, Kg, Tn, b0, cy, kZ } from "./module-V9.js";
import { A as A_1 } from "./module-Ww_2.js";
import { A as A_2 } from "./module-qpN_2.js";
import { A as A_3 } from "./module-Vyy.js";
import { A as A_4 } from "./module-RwR.js";
import g from "KAm";
import { A as A_5 } from "./module-R8.js";
import { A as A_6 } from "./module-Ix_2.js";
import { A as A_7 } from "./module-c8.js";
import { A as A_8 } from "./module-P6g.js";
import j from "fyk";
import "U4";
import { V as V_1 } from "./module-Tb.js";
import E from "qa";
import { QO } from "./module-mY_2.js";
import { A as A_9 } from "./module-k6B.js";
import D from "Po";
import { A as A_10 } from "./module-vC_2.js";
import L from "ZB";
import F from "YwM";
import K from "SYS";
import Y from "UX";
import { A as A_11 } from "./module-Plb.js";
import { A as A_12 } from "./module-tTg.js";
import X from "Kb";
import * as J from "./module-rT.js";
import { A as A_13 } from "./module-TD_2.js";
import { A as A_14 } from "./module-O5P.js";
import { A as A_15 } from "./module-RZ.js";
import { A as A_16 } from "./module-K7F.js";
import ef from "RbS";
import { A as A_17 } from "./module-mb_2.js";
import { AU, on } from "./module-a3_2.js";
import { A as A_18 } from "./module-rfq.js";
import { A as A_19 } from "./module-zrd.js";
import { A as A_20 } from "./module-ZF_2.js";
import { A as A_21 } from "./module-Sc_2.js";
let r;
let o;
const A = a.forwardRef(function (e, t) {
  const prefixCls = a.useContext(V_1).prefixCls;
  const r = prefixCls === undefined ? "lv" : prefixCls;
  const e_spin = e.spin;
  const e_className = e.className;
  const l = {
    "aria-hidden": true,
    focusable: false,
    ref: t,
    ...e,
    className: `${e_className ? e_className + " " : ""}`
      .concat(r, "-icon ")
      .concat(r, "-icon-filter"),
  };
  if (e_spin) {
    l.className = "".concat(l.className, " ").concat(r, "-icon-loading");
  }
  delete l.spin;
  delete l.isIcon;
  return a.createElement(
    "svg",
    j(
      {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "4",
        viewBox: "0 0 48 48",
      },
      l,
    ),
    a.createElement("path", {
      d: "M30 42V22.549a1 1 0 0 1 .463-.844l10.074-6.41A1 1 0 0 0 41 14.45V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6.451a1 1 0 0 0 .463.844l10.074 6.41a1 1 0 0 1 .463.844V37",
    }),
  );
});
A.defaultProps = {
  isIcon: true,
};
A.displayName = "IconFilter";
let T = {
  size: "small",
  direction: "horizontal",
};
let S = a.forwardRef(function (e, t) {
  let { getPrefixCls, componentConfig, rtl } = a.useContext(QO);
  let c = A_9(
    e,
    T,
    componentConfig == null ? undefined : componentConfig.Space,
  );
  let { className, style, children, size, direction, align, wrap, split } = c;
  let x = E._(c, [
    "className",
    "style",
    "children",
    "size",
    "direction",
    "align",
    "wrap",
    "split",
  ]);
  let w = getPrefixCls("space");
  let j = align || (direction === "horizontal" ? "center" : "");
  let O = A_1(
    w,
    {
      [`${w}-${direction}`]: direction,
      [`${w}-align-${j}`]: j,
      [`${w}-wrap`]: wrap,
      [`${w}-rtl`]: rtl,
    },
    className,
  );
  function C(e) {
    if (Et(e)) {
      return e;
    }
    switch (e) {
      case "mini":
        return 4;
      case "small":
      default:
        return 8;
      case "medium":
        return 16;
      case "large":
        return 24;
    }
  }
  let N = a.Children.toArray(children);
  return s.jsx(
    "div",
    l._(
      i._(
        {
          ref: t,
          className: O,
          style,
        },
        x,
      ),
      {
        children: N.map((e, t) => {
          let n = (e == null ? undefined : e.key) || t;
          let r = split != null && t > 0;
          return s.jsxs(
            a.Fragment,
            {
              children: [
                r &&
                  s.jsx("div", {
                    className: `${w}-item-split`,
                    children: split,
                  }),
                s.jsx("div", {
                  className: `${w}-item`,
                  style: ((e) => {
                    let t = N.length === e + 1;
                    let n = rtl ? "marginLeft" : "marginRight";
                    if (typeof size === "string" || typeof size === "number") {
                      let e = C(size);
                      if (wrap) {
                        if (t) {
                          return {
                            marginBottom: e,
                          };
                        }
                        return {
                          [`${n}`]: e,
                          marginBottom: e,
                        };
                      }
                      if (t) {
                        return {};
                      }
                      return {
                        [direction === "vertical" ? "marginBottom" : n]: e,
                      };
                    }
                    if (cy(size)) {
                      let e = C(size[0]);
                      let marginBottom = C(size[1]);
                      if (wrap) {
                        if (t) {
                          return {
                            marginBottom,
                          };
                        }
                        return {
                          [`${n}`]: e,
                          marginBottom,
                        };
                      }
                      if (direction === "vertical") {
                        return {
                          marginBottom,
                        };
                      }
                      return {
                        [`${n}`]: e,
                      };
                    }
                  })(t),
                  children: e,
                }),
              ],
            },
            n,
          );
        }),
      },
    ),
  );
});
S.displayName = "Space";
let R = {
  table: "table",
  header: {
    operations: ({ selectionNode, expandNode }) => [
      {
        name: "expandNode",
        node: expandNode,
      },
      {
        name: "selectionNode",
        node: selectionNode,
      },
    ],
    wrapper: "div",
    thead: "thead",
    row: "tr",
    th: "th",
    cell: "div",
  },
  body: {
    operations: ({ selectionNode, expandNode }) => [
      {
        name: "expandNode",
        node: expandNode,
      },
      {
        name: "selectionNode",
        node: selectionNode,
      },
    ],
    wrapper: "div",
    tbody: "tbody",
    row: "tr",
    td: "td",
    cell: "span",
  },
};
function useI(components) {
  let t = a.useMemo(() => {
    if (Gv(components)) {
      return D.A({}, R, components);
    }
    return R;
  }, [components]);
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
const useV = function ({
  onSort,
  onFilter,
  onHandleFilter,
  onHandleFilterReset,
  currentFilters = {},
  currentSorter,
  _key,
  dataIndex,
  title,
  sorter,
  sortDirections = ["ascend", "descend"],
  filters = [],
  columnFixedStyle,
  className,
  cellStyle,
  headerCellStyle,
  rowSpan,
  colSpan,
  headerCellProps,
  prefixCls,
  align = "left",
  components,
  filterIcon,
  filterDropdown,
  filterMultiple = true,
  ellipsis,
  filterDropdownProps,
  onFilterDropdownVisibleChange,
  column,
  showSorterTooltip,
  index,
}) {
  let { locale, rtl } = a.useContext(QO);
  let dataIndex_1 = dataIndex === undefined ? index : dataIndex;
  let [X, J, ee] = A_10([], {
    value: currentFilters[dataIndex_1] || [],
  });
  let [et, setEt] = a.useState(false);
  let [er, setEr] = a.useState(false);
  let ei = sorter && cy(sortDirections) && sortDirections.length;
  let el = ei
    ? (() => {
        let e = currentSorter && currentSorter.direction;
        if (!e || (currentSorter && currentSorter.field !== dataIndex_1)) {
          return sortDirections[0];
        }
        let t = sortDirections.indexOf(e);
        if (t < sortDirections.length) {
          return sortDirections[t + 1];
        }
      })()
    : undefined;
  function es() {
    if (X) {
      if (onHandleFilter) {
        onHandleFilter(
          {
            onFilter,
            filters,
            dataIndex: dataIndex_1,
          },
          ee,
        );
      }
      onVisibleChange(false);
    }
  }
  function ea() {
    onHandleFilterReset({
      dataIndex: dataIndex_1,
    });
    onVisibleChange(false);
  }
  function onVisibleChange(e) {
    setEt(e);
    if (onFilterDropdownVisibleChange) {
      onFilterDropdownVisibleChange(e);
    }
  }
  function eu(e, t) {
    let n = [...ee];
    if (filterMultiple) {
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
    J(n);
  }
  function confirm(e) {
    J(e || ee);
    setEt(false);
    if (onHandleFilter) {
      onHandleFilter(
        {
          filters,
          onFilter,
          dataIndex: dataIndex_1,
        },
        e || ee,
      );
    }
  }
  a.useEffect(() => {
    J(currentFilters[dataIndex_1] || []);
  }, [currentFilters, dataIndex_1]);
  a.useEffect(() => {
    if (X && X !== ee) {
      J(X);
    }
  }, [et]);
  let ep = (e) =>
    A_1(`${prefixCls}-sorter-icon`, {
      [`${prefixCls}-sorter-icon-active`]:
        currentSorter &&
        currentSorter.direction === e &&
        currentSorter.field === dataIndex_1,
    });
  let ef = A_1(`${prefixCls}-filters`, {
    [`${prefixCls}-filters-open`]: et,
    [`${prefixCls}-filters-active`]: X && X.length,
  });
  let eh = i._({}, columnFixedStyle);
  if (Gv(cellStyle)) {
    eh = i._({}, eh, cellStyle);
  }
  if (Gv(headerCellStyle)) {
    eh = i._({}, eh, headerCellStyle);
  }
  if (align && align !== "left") {
    eh.textAlign = align;
  }
  let em = {
    style: eh,
    key: _key || dataIndex_1,
  };
  if (colSpan && colSpan > 1) {
    em.colSpan = colSpan;
  }
  if (rowSpan && rowSpan > 1) {
    em.rowSpan = rowSpan;
  }
  let { ComponentTh, ComponentHeaderCell } = useI(components);
  let ey =
    (cy(filters) && filters.length > 0) || typeof filterDropdown === "function";
  let eb =
    ellipsis && typeof title === "string"
      ? {
          title,
        }
      : {};
  let ex = filterDropdownProps && filterDropdownProps.triggerProps;
  let ew = s.jsxs(s.Fragment, {
    children: [
      ei
        ? s.jsx(
            A_6,
            l._(
              i._(
                {
                  content:
                    el === "ascend"
                      ? locale.Table.sortAscend
                      : el === "descend"
                        ? locale.Table.sortDescend
                        : locale.Table.cancelSort,
                  disabled: !showSorterTooltip,
                },
                Gv(showSorterTooltip) ? showSorterTooltip : {},
              ),
              {
                children: s.jsxs("div", {
                  className: `${prefixCls}-cell-with-sorter`,
                  onMouseEnter: () => {
                    setEr(true);
                  },
                  onMouseLeave: () => {
                    setEr(false);
                  },
                  onClick: () => onSort(el, dataIndex_1),
                  children: [
                    s.jsx(
                      "span",
                      l._(
                        i._(
                          {
                            className: `${prefixCls}-th-item-title`,
                          },
                          eb,
                        ),
                        {
                          children: title,
                        },
                      ),
                    ),
                    ei &&
                      s.jsxs("div", {
                        className: A_1(`${prefixCls}-sorter`, {
                          [`${prefixCls}-sorter-direction-one`]:
                            sortDirections.length === 1,
                        }),
                        children: [
                          sortDirections.indexOf("ascend") !== -1 &&
                            s.jsx("div", {
                              className: ep("ascend"),
                              children: s.jsx(A_8, {}),
                            }),
                          sortDirections.indexOf("descend") !== -1 &&
                            s.jsx("div", {
                              className: ep("descend"),
                              children: s.jsx(A_7, {}),
                            }),
                        ],
                      }),
                  ],
                }),
              },
            ),
          )
        : s.jsx(
            "span",
            l._(
              i._(
                {
                  className: `${prefixCls}-th-item-title`,
                },
                eb,
              ),
              {
                children: title,
              },
            ),
          ),
      ey &&
        s.jsx(
          A_4,
          l._(
            i._(
              {
                popup: function () {
                  if (typeof filterDropdown === "function") {
                    return filterDropdown({
                      filterKeys: ee,
                      setFilterKeys: (e, t) => {
                        J(e);
                        if (t) {
                          t();
                        }
                      },
                      confirm,
                    });
                  }
                  return s.jsxs("div", {
                    className: `${prefixCls}-filters-popup`,
                    children: [
                      s.jsx("div", {
                        className: `${prefixCls}-filters-list`,
                        children: filters.map((e) => {
                          let checked =
                            ee.findIndex((t) => t === e.value) !== -1;
                          return s.jsx(
                            "div",
                            {
                              className: `${prefixCls}-filters-item`,
                              children: filterMultiple
                                ? s.jsx(A_3, {
                                    checked,
                                    onChange: (t) => eu(e.value, t),
                                    children: e.text,
                                  })
                                : s.jsx(g.A, {
                                    checked,
                                    onChange: (t) => eu(e.value, t),
                                    children: e.text,
                                  }),
                            },
                            e.value,
                          );
                        }),
                      }),
                      s.jsxs(S, {
                        className: `${prefixCls}-filters-btn`,
                        children: [
                          s.jsx(A_5, {
                            onClick: ea,
                            size: "mini",
                            children: locale.Table.resetText,
                          }),
                          s.jsx(A_5, {
                            onClick: es,
                            type: "primary",
                            size: "mini",
                            children: locale.Table.okText,
                          }),
                        ],
                      }),
                    ],
                  });
                },
                trigger: "click",
                classNames: "slideDynamicOrigin",
                position: rtl ? "bl" : "br",
                popupAlign: {
                  bottom: 0,
                },
                popupVisible: et,
                onVisibleChange,
              },
              ex,
            ),
            {
              children: s.jsx("div", {
                className: ef,
                children: filterIcon || s.jsx(A, {}),
              }),
            },
          ),
        ),
    ],
  });
  let ej = A_1(`${prefixCls}-th-item`, {
    [`${prefixCls}-cell-text-ellipsis`]: ellipsis,
    [`${prefixCls}-cell-mouseenter`]: er,
    [`${prefixCls}-cell-next-${el}`]: er && el,
    [`${prefixCls}-col-has-sorter`]: ei,
    [`${prefixCls}-col-has-filter`]: ey,
  });
  return (
    colSpan !== 0 &&
    s.jsx(
      ComponentTh,
      l._(
        i._(
          {
            className: A_1(
              `${prefixCls}-th`,
              {
                [`${prefixCls}-col-sorted`]:
                  currentSorter &&
                  currentSorter.direction &&
                  currentSorter.field === dataIndex_1,
              },
              className,
            ),
          },
          em,
          headerCellProps,
        ),
        {
          children: Kg(ComponentHeaderCell)
            ? s.jsx(ComponentHeaderCell, {
                className: ej,
                children: ew,
              })
            : s.jsx(ComponentHeaderCell, {
                className: ej,
                column,
                children: ew,
              }),
        },
      ),
    )
  );
};
let W = "table_internal_selection_key";
let B = "table_internal_expand_key";
const useH = function (e) {
  let {
    sorter,
    expandedRowRender,
    expandProps = {},
    onSort,
    onHandleFilter,
    onHandleFilterReset,
    onHeaderRow,
    prefixCls,
    currentFilters,
    components,
    data,
    selectedRowKeys,
    rowSelection,
    allSelectedRowKeys = [],
    groupColumns,
    stickyOffsets,
    groupStickyClassNames,
    showSorterTooltip,
  } = e;
  let { rtl } = a.useContext(QO);
  let { ComponentThead, ComponentHeaderRow, getHeaderComponentOperations } =
    useI(components);
  let A =
    rowSelection &&
    (rowSelection.type === "checkbox" || !("type" in rowSelection));
  let E =
    !rowSelection || !("checkAll" in rowSelection) || rowSelection.checkAll;
  let M = rowSelection && rowSelection.type === "radio";
  let { columnTitle } = expandProps;
  let S = a.useMemo(() => {
    let e = new Set(allSelectedRowKeys);
    return selectedRowKeys.filter((t) => e.has(t));
  }, [selectedRowKeys, allSelectedRowKeys]);
  let D =
    groupColumns.length > 1
      ? {
          rowSpan: groupColumns.length,
        }
      : {};
  let R = A_1(`${prefixCls}-th`, `${prefixCls}-operation`);
  return s.jsx(ComponentThead, {
    children: groupColumns.map((r, y) => {
      let w = onHeaderRow && onHeaderRow(r, y);
      let selectionNode =
        (A || M) &&
        y === 0 &&
        s.jsx("th", {
          className: A_1(R, `${prefixCls}-${M ? "radio" : "checkbox"}`),
          children: s.jsxs("div", {
            className: `${prefixCls}-th-item`,
            children: [
              E && !M
                ? s.jsx(A_3, {
                    indeterminate:
                      data &&
                      S.length > 0 &&
                      S.length !== allSelectedRowKeys.length,
                    checked:
                      data &&
                      S.length !== 0 &&
                      S.length === allSelectedRowKeys.length,
                    disabled: !allSelectedRowKeys.length,
                    onChange: e.onCheckAll,
                  })
                : null,
              rowSelection && rowSelection.columnTitle,
            ],
          }),
        });
      let _ =
        expandedRowRender &&
        s.jsx("th", {
          className: A_1(R, `${prefixCls}-expand`),
          children:
            columnTitle &&
            s.jsx("div", {
              className: `${prefixCls}-th-item`,
              children: columnTitle,
            }),
        });
      let I = groupStickyClassNames[y];
      let z = getHeaderComponentOperations({
        selectionNode,
        expandNode: _,
      });
      return a.createElement(
        ComponentHeaderRow,
        l._(i._({}, w), {
          key: y,
          className: `${prefixCls}-tr`,
        }),
        r.map((e, n) => {
          let r = stickyOffsets[n];
          let d = I[n];
          if (e.$$isOperation) {
            var m;
            var g;
            var y;
            var b;
            let { node } = e;
            let o = true;
            if (e.title === W) {
              node =
                (y = z.find((e) => e.name === "selectionNode")) == null
                  ? undefined
                  : y.node;
              o = false;
            }
            if (e.title === B) {
              node =
                (b = z.find((e) => e.name === "expandNode")) == null
                  ? undefined
                  : b.node;
              o = false;
            }
            let s = node;
            return a.cloneElement(
              s,
              l._(
                i._(
                  {
                    key: e.key || n,
                  },
                  s.props,
                  D,
                ),
                {
                  className: A_1(
                    o ? R : "",
                    s == null || (m = s.props) == null
                      ? undefined
                      : m.className,
                    d,
                  ),
                  style: l._(
                    i._(
                      {},
                      s == null || (g = s.props) == null ? undefined : g.style,
                      e.fixed === "left"
                        ? {
                            [rtl ? "right" : "left"]: r,
                          }
                        : {},
                    ),
                    {
                      width: e.width,
                      minWidth: e.width,
                    },
                  ),
                },
              ),
            );
          }
          let headerCellProps = e.onHeaderCell && e.onHeaderCell(e, n);
          let w = A_1(d, e.className);
          let columnFixedStyle = {};
          if (e.fixed === "left") {
            columnFixedStyle[rtl ? "right" : "left"] = r;
          }
          if (e.fixed === "right") {
            columnFixedStyle[rtl ? "left" : "right"] = r;
          }
          return s.jsx(
            useV,
            l._(
              i._(
                {
                  index: n,
                  onSort,
                  onHandleFilter,
                  onHandleFilterReset,
                  currentSorter: sorter,
                  currentFilters,
                  _key: e.key || e.dataIndex || n,
                },
                e,
              ),
              {
                column: e,
                headerCellProps,
                prefixCls,
                components,
                className: w,
                columnFixedStyle,
                showSorterTooltip,
              },
            ),
            e.key,
          );
        }),
      );
    }),
  });
};
function G(e, childrenColumnName) {
  return cy(e[childrenColumnName]) && e[childrenColumnName].length;
}
function U(e) {
  if (e) {
    if (Gv(e)) {
      return e.__ORIGIN_DATA;
    }
    return e.map((e) => {
      if (Gv(e)) {
        return e.__ORIGIN_DATA;
      }
      return e;
    });
  }
  return e;
}
function Z(e, t, n, r, o) {
  if (e.__INTERNAL_PARENT) {
    let i = r(e.__INTERNAL_PARENT);
    if (cy(e.__INTERNAL_PARENT[o])) {
      let l = e.__INTERNAL_PARENT[o].length;
      let s = 0;
      let a = false;
      e.__INTERNAL_PARENT[o].forEach((e) => {
        if (t.has(r(e))) {
          s += 1;
        }
        if (n.has(r(e))) {
          n.add(i);
          a = true;
        }
      });
      if (l === s) {
        t.add(i);
        n.delete(i);
      } else if (s > 0 && l > s) {
        t.delete(i);
        n.add(i);
      } else if (s === 0) {
        t.delete(i);
        if (!a) {
          n.delete(i);
        }
      }
    }
    Z(e.__INTERNAL_PARENT, t, n, r, o);
  }
}
const ee = a.memo(function (e) {
  let t;
  let n;
  let r;
  let {
    components,
    InnerComponentTd,
    column,
    columnIndex,
    prefixCls,
    stickyClassName,
    stickyOffset,
    currentSorter,
    virtualized,
    record,
    trIndex,
    level,
    placeholder,
    indentSize,
    renderExpandIcon,
    rowKey,
    recordHaveChildren,
    haveTreeData,
  } = e;
  let { rtl } = a.useContext(QO);
  let { ComponentBodyCell } = useI(components);
  let M = A_1(
    `${prefixCls}-td`,
    stickyClassName,
    {
      [`${prefixCls}-col-sorted`]:
        currentSorter &&
        currentSorter.direction &&
        currentSorter.field === column.dataIndex,
    },
    column.className,
  );
  let T = {};
  let S = {};
  if (column.fixed === "left") {
    S[rtl ? "right" : "left"] = stickyOffset;
  }
  if (column.fixed === "right") {
    S[rtl ? "left" : "right"] = stickyOffset;
  }
  if (Gv(column.cellStyle)) {
    S = i._({}, S, column.cellStyle);
  }
  if (Gv(column.bodyCellStyle)) {
    S = i._({}, S, column.bodyCellStyle);
  }
  if (column.align) {
    S.textAlign = column.align;
  }
  if (virtualized && column.width) {
    S.width = column.width;
    S.minWidth = column.width;
    S.maxWidth = column.width;
  }
  let D = column.onCell
    ? column.onCell(record, trIndex)
    : {
        onHandleSave: () => {},
      };
  let { onHandleSave } = D;
  let z = E._(D, ["onHandleSave"]);
  let V = a.useMemo(
    () =>
      column.render &&
      column.render(X.A(record, column.dataIndex), U(record), trIndex),
    [record, column, trIndex],
  );
  if ((t = V) && !a.isValidElement(t) && Gv(t)) {
    n = (T = V.props).rowSpan;
    r = T.colSpan;
    V = V.children;
  }
  if (n === 0 || r === 0) {
    return null;
  }
  let W = X.A(record, column.dataIndex);
  let B = W;
  if (column.render) {
    B = V;
  } else if (
    W === undefined ||
    (typeof W === "string" && W.trim() === "") ||
    W === null
  ) {
    B = column.placeholder === undefined ? placeholder : column.placeholder;
  }
  let H =
    column.ellipsis && typeof B === "string"
      ? {
          title: B,
        }
      : {};
  let L = haveTreeData && column.$$isFirstColumn;
  let F = L && recordHaveChildren;
  let paddingLeft = L && level > 0 ? indentSize * level : 0;
  if (L && !recordHaveChildren) {
    paddingLeft += 20;
  }
  let Y = s.jsxs(s.Fragment, {
    children: [
      F
        ? s.jsx("span", {
            className: `${prefixCls}-cell-expand-icon`,
            children: renderExpandIcon(record, rowKey),
          })
        : null,
      Kg(ComponentBodyCell)
        ? s.jsx(ComponentBodyCell, {
            className: `${prefixCls}-cell-wrap-value`,
            children: B,
          })
        : s.jsx(
            ComponentBodyCell,
            l._(
              i._(
                {
                  rowData: record,
                  className: `${prefixCls}-cell-wrap-value`,
                  column,
                  onHandleSave,
                },
                z,
              ),
              {
                children: B,
              },
            ),
          ),
    ],
  });
  return s.jsx(
    InnerComponentTd,
    l._(
      i._(
        {
          className: M,
          style: S,
        },
        J.A(z, [
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
        T,
      ),
      {
        children: s.jsxs(
          "div",
          l._(
            i._(
              {
                className: A_1(`${prefixCls}-cell`, {
                  [`${prefixCls}-cell-text-ellipsis`]: column.ellipsis,
                }),
              },
              H,
            ),
            {
              children: [
                paddingLeft
                  ? s.jsx("span", {
                      className: `${prefixCls}-cell-indent`,
                      style: {
                        paddingLeft,
                      },
                    })
                  : null,
                Y,
              ],
            },
          ),
        ),
      },
    ),
    column.key || column.dataIndex || columnIndex,
  );
});
let et = a.forwardRef(function (e, t) {
  let n;
  let {
    expandedRowRender,
    onClickExpandBtn,
    columns,
    components,
    onCheck,
    onCheckRadio,
    prefixCls,
    selectedRowKeys,
    indeterminateKeys,
    rowClassName,
    onRow,
    rowSelection,
    indentSize = 16,
    currentSorter,
    virtualized,
    stickyOffsets,
    stickyClassNames,
    getRowKey,
    placeholder,
    expandProps = {
      strictTreeData: true,
    },
    data,
    expandedRowKeys,
    childrenColumnName,
    record,
    index,
    type,
    shouldRowExpand,
    level,
  } = e;
  let { rtl } = a.useContext(QO);
  let L = U(record);
  let G = F._({}, K._((onRow && onRow(L, index)) || {}));
  let Z = getRowKey(record);
  let X = type === "radio" ? selectedRowKeys.slice(0, 1) : selectedRowKeys;
  let key = Z || index;
  let et = X.indexOf(Z) > -1;
  let indeterminate = indeterminateKeys.indexOf(Z) > -1;
  let er = A_1(
    `${prefixCls}-tr`,
    {
      [`${prefixCls}-row-checked`]: et,
    },
    rowClassName && rowClassName(L, index),
  );
  let eo =
    rowSelection && typeof rowSelection.checkboxProps === "function"
      ? rowSelection.checkboxProps(L)
      : {};
  let ei = A_1(`${prefixCls}-td`, `${prefixCls}-operation`);
  let el = (e) =>
    A_1(ei, `${prefixCls}-${e}`, {
      [`${prefixCls}-selection-col`]:
        (virtualized && type === "checkbox") || type === "radio",
      [`${prefixCls}-expand-icon-col`]: virtualized && expandedRowRender,
    });
  function es(e) {
    if (expandProps.strictTreeData) {
      return cy(e[childrenColumnName]) && !!e[childrenColumnName].length;
    }
    return e[childrenColumnName] !== undefined;
  }
  let ea = shouldRowExpand(record, index);
  let recordHaveChildren = es(record);
  let haveTreeData =
    !virtualized && data.find((e) => es(e)) && !expandedRowRender;
  let { expandRowByClick } = expandProps;
  let ep =
    expandRowByClick && (ea || (haveTreeData && recordHaveChildren))
      ? {
          onClick: (e) => {
            onClickExpandBtn(Z);
            if (G && G.onClick) {
              G.onClick(e);
            }
          },
        }
      : {};
  let { ComponentBodyRow, ComponentTd, getBodyComponentOperations } =
    useI(components);
  let ev = virtualized ? "div" : ComponentBodyRow;
  let InnerComponentTd = virtualized ? "div" : ComponentTd;
  let ey = i._(
    {
      className: er,
      key,
    },
    G,
    ep,
  );
  let eb = Kg(ComponentBodyRow)
    ? ey
    : l._(i._({}, ey), {
        record,
        index,
      });
  function renderExpandIcon(record_1, t) {
    let { icon } = expandProps;
    let expanded = !!~expandedRowKeys.indexOf(t);
    let a = {
      onClick: (e) => {
        e.stopPropagation();
        onClickExpandBtn(t);
      },
    };
    if (typeof icon === "function") {
      return icon(
        i._(
          {
            expanded,
            record: record_1,
          },
          a,
        ),
      );
    }
    return s.jsx(
      "button",
      l._(i._({}, a), {
        type: "button",
        children: expanded ? s.jsx(A_12, {}) : s.jsx(A_11, {}),
      }),
    );
  }
  let ew =
    expandedRowRender &&
    s.jsx(InnerComponentTd, {
      className: el("expand-icon-cell"),
      children: ea && renderExpandIcon(record, Z),
    });
  let ej = rowSelection && rowSelection.renderCell;
  let eO = s.jsx(
    A_3,
    i._(
      {
        value: Z,
        onChange: (e) => onCheck(e, record),
        checked: et,
        indeterminate,
      },
      eo,
    ),
  );
  let eC = s.jsx(
    Y.A,
    i._(
      {
        onChange: () => onCheckRadio(Z, record),
        value: Z,
        checked: et,
      },
      eo,
    ),
  );
  if (type === "checkbox") {
    n = s.jsx(InnerComponentTd, {
      className: el("checkbox"),
      children: ej ? ej(eO, et, L) : eO,
    });
  }
  if (type === "radio") {
    n = s.jsx(InnerComponentTd, {
      className: el("radio"),
      children: ej ? ej(eC, et, L) : eC,
    });
  }
  let eN = getBodyComponentOperations({
    selectionNode: n,
    expandNode: ew,
  });
  return s.jsx(
    ev,
    l._(i._({}, eb), {
      ref: t,
      children: columns.map((e, columnIndex) => {
        let stickyOffset = stickyOffsets[columnIndex];
        let stickyClassName = stickyClassNames[columnIndex];
        if (e.$$isOperation) {
          var o;
          var c;
          var d;
          var p;
          let s = e == null ? undefined : e.node;
          let u = true;
          if (e.title === W) {
            s =
              (d = eN.find((e) => e.name === "selectionNode")) == null
                ? undefined
                : d.node;
            u = false;
          }
          if (e.title === B) {
            s =
              (p = eN.find((e) => e.name === "expandNode")) == null
                ? undefined
                : p.node;
            u = false;
          }
          let h = typeof s === "function" ? s(record) : s;
          return a.cloneElement(
            h,
            l._(
              i._(
                {
                  key: e.key || columnIndex,
                },
                h.props,
              ),
              {
                className: A_1(
                  u ? ei : "",
                  h == null || (o = h.props) == null ? undefined : o.className,
                  stickyClassName,
                ),
                style: l._(
                  i._(
                    {},
                    h == null || (c = h.props) == null ? undefined : c.style,
                    e.fixed === "left"
                      ? {
                          [rtl ? "right" : "left"]: stickyOffset,
                        }
                      : {},
                  ),
                  {
                    width: e.width,
                    minWidth: e.width,
                  },
                ),
              },
            ),
          );
        }
        return s.jsx(
          ee,
          {
            prefixCls,
            virtualized,
            components,
            currentSorter,
            placeholder,
            indentSize,
            stickyClassName,
            stickyOffset,
            InnerComponentTd,
            column: e,
            columnIndex,
            record,
            trIndex: index,
            level,
            haveTreeData,
            recordHaveChildren,
            rowKey: Z,
            renderExpandIcon,
          },
          columnIndex,
        );
      }),
    }),
  );
});
const en = function (e) {
  let t;
  let {
    childrenColumnName = "children",
    expandProps = {},
    expandedRowRender,
    expandedRowKeys,
    data,
    columns,
    prefixCls,
    components,
    rowSelection,
    noDataElement,
    scroll,
    indentSize = 16,
    hasFixedColumn,
    tableViewWidth,
    virtualized,
    getRowKey,
    saveVirtualWrapperRef,
  } = e;
  let N = expandedRowRender
    ? (e, t) => expandedRowRender(U(e), t)
    : expandedRowRender;
  let { ComponentTbody } = useI(components);
  function shouldRowExpand(e, t) {
    if (
      "rowExpandable" in expandProps &&
      typeof expandProps.rowExpandable === "function"
    ) {
      return expandProps.rowExpandable(e);
    }
    return N && N(e, t) !== null;
  }
  if (rowSelection && "type" in rowSelection) {
    t = rowSelection.type;
  } else if (!(!rowSelection || "type" in rowSelection)) {
    t = "checkbox";
  }
  let k = l._(i._({}, e), {
    type: t,
    shouldRowExpand,
  });
  let A = {};
  let E = {};
  if (scroll) {
    if (
      scroll.x &&
      (typeof scroll.x === "number" || typeof scroll.x === "string")
    ) {
      A = {
        width: scroll.x,
      };
    }
    if (
      scroll.y &&
      (typeof scroll.y === "number" || typeof scroll.y === "string")
    ) {
      E = {
        maxHeight: scroll.y,
      };
    }
  }
  let _ = {
    className: `${prefixCls}-no-data`,
  };
  if (tableViewWidth) {
    _.className = `${prefixCls}-no-data ${prefixCls}-expand-fixed-row`;
    _.style = {
      width: tableViewWidth,
    };
  }
  let M = s.jsx("tr", {
    className: A_1(`${prefixCls}-tr`, `${prefixCls}-empty-row`),
    children: s.jsx("td", {
      className: `${prefixCls}-td`,
      colSpan: columns.length,
      children: s.jsx(
        "div",
        l._(i._({}, _), {
          children: noDataElement,
        }),
      ),
    }),
  });
  if (virtualized) {
    if (data.length > 0) {
      return s.jsx(L.A, {
        data,
        height: E.maxHeight,
        isStaticItemHeight: false,
        outerStyle: l._(i._({}, A), {
          minWidth: "100%",
          overflow: "visible",
        }),
        className: `${prefixCls}-body`,
        ref: (e) => saveVirtualWrapperRef(e == null ? undefined : e.dom),
        children: (e, t) =>
          a.createElement(
            et,
            l._(i._({}, k), {
              key: getRowKey(e),
              record: e,
              index: t,
              level: 0,
            }),
          ),
      });
    }
    return s.jsx("div", {
      className: `${prefixCls}-body`,
      children: s.jsx("table", {
        children: s.jsx("tbody", {
          children: M,
        }),
      }),
    });
  }
  return s.jsx(ComponentTbody, {
    children:
      data.length > 0
        ? data.map((e, t) => {
            let r;
            let o;
            let u = getRowKey(e);
            let m = shouldRowExpand(e, t) && expandedRowKeys.indexOf(u) !== -1;
            return s.jsxs(
              a.Fragment,
              {
                children: [
                  ((r = []).push(
                    s.jsx(
                      et,
                      l._(i._({}, k), {
                        record: e,
                        level: 0,
                        index: t,
                      }),
                      getRowKey(e),
                    ),
                  ),
                  (o = (e, t, s = 0) => {
                    if (cy(e) && e.length) {
                      e.forEach((e, u) => {
                        if (expandedRowKeys.indexOf(t) !== -1) {
                          r.push(
                            a.createElement(
                              et,
                              l._(i._({}, k), {
                                key: getRowKey(e),
                                record: e,
                                level: s + 1,
                                index: u,
                              }),
                            ),
                          );
                          if (
                            cy(e[childrenColumnName]) &&
                            e[childrenColumnName].length
                          ) {
                            o(e[childrenColumnName], getRowKey(e), s + 1);
                          }
                        }
                      });
                    }
                  }),
                  N || o(e[childrenColumnName], getRowKey(e)),
                  r),
                  m &&
                    s.jsx(
                      "tr",
                      {
                        className: A_1(
                          `${prefixCls}-tr`,
                          `${prefixCls}-expand-content`,
                        ),
                        children: s.jsx("td", {
                          className: `${prefixCls}-td`,
                          colSpan: columns.length,
                          style: {
                            paddingLeft: indentSize,
                          },
                          children: hasFixedColumn
                            ? s.jsx("div", {
                                className: `${prefixCls}-expand-fixed-row`,
                                style: {
                                  width: tableViewWidth,
                                },
                                children: N && N(e, t),
                              })
                            : N && N(e, t),
                        }),
                      },
                      `${u}-expanded`,
                    ),
                ],
              },
              u,
            );
          })
        : M,
  });
};
let ErContext = a.createContext({});
const eo = function (e) {
  let { summary, data, prefixCls, columns, stickyOffsets, stickyClassNames } =
    e;
  return s.jsx("tfoot", {
    className: `${prefixCls}-tfoot`,
    children: s.jsx(ErContext.Provider, {
      value: {
        columns,
        stickyOffsets,
        stickyClassNames,
        prefixCls,
      },
      children: summary(U(data)),
    }),
  });
};
function ec(e, icons) {
  switch (e) {
    case "prev":
      if (icons && icons.prev) {
        return icons.prev;
      }
      return s.jsx(A_13, {});
    case "next":
      if (icons && icons.next) {
        return icons.next;
      }
      return s.jsx(A_14, {});
    case "more":
      if (icons && icons.more) {
        return icons.more;
      }
      return s.jsx(A_15, {});
    default:
      return null;
  }
}
r = o || (o = {});
r[(r.previous = 0)] = "previous";
r[(r.next = 1)] = "next";
let EuComponent = (e) => {
  var t;
  var n;
  let { locale } = a.useContext(QO);
  let {
    rootPrefixCls,
    current,
    allPages,
    jumpPage,
    icons,
    disabled,
    pageItemStyle,
    itemRender,
  } = e;
  let m = Math.min(allPages, Math.max(+(allPages > 0), current + jumpPage));
  let v = `${rootPrefixCls}-item ${rootPrefixCls}-item-jumper`;
  let g = A_1(v);
  let y = ec("more", icons);
  let b =
    jumpPage > 0
      ? (t = locale.Pagination.nextSomePages) == null
        ? undefined
        : t.replace("{0}", jumpPage)
      : (n = locale.Pagination.prevSomePages) == null
        ? undefined
        : n.replace("{0}", -jumpPage);
  return s.jsx("li", {
    style: pageItemStyle,
    className: g,
    onClick: () => {
      if (!disabled && e.onClick) {
        e.onClick(m);
      }
    },
    "aria-label": b,
    children: itemRender ? itemRender(undefined, "more", y) : y,
  });
};
let EdComponent = (e) => {
  let { locale, rtl } = a.useContext(QO);
  let r = A_16();
  let {
    rootPrefixCls,
    current,
    allPages,
    type,
    icons,
    disabled,
    pageItemStyle,
    itemRender,
  } = e;
  let g = `${rootPrefixCls}-item`;
  let [y, b] = rtl ? ["next", "prev"] : ["prev", "next"];
  let x = type === 0 ? ec(y, icons) : ec(b, icons);
  let w = false;
  w = allPages === 0 || (type === 0 ? current <= 1 : current === allPages);
  let j = disabled || w;
  let O = current + (type === 0 ? -1 : 1);
  O = Math.max(0, Math.min(allPages, O));
  let C = type === 0 ? "prev" : "next";
  let N = A_1(g, `${g}-${C}`, {
    [`${g}-disabled`]: j,
  });
  let P = () => {
    if (!j && e.onClick) {
      e.onClick(O);
    }
  };
  return s.jsx(
    "li",
    l._(
      i._(
        {
          style: pageItemStyle,
          className: N,
          onClick: P,
          tabIndex: j ? -1 : 0,
          "aria-label": locale.Pagination[C],
        },
        r({
          onPressEnter: P,
        }),
      ),
      {
        children: itemRender ? itemRender(undefined, C, x) : x,
      },
    ),
  );
};
const EpComponent = function (e) {
  let t;
  let { locale } = a.useContext(QO);
  let r = A_16();
  let {
    pageNum,
    current,
    rootPrefixCls,
    pageItemStyle,
    activePageItemStyle,
    itemRender,
  } = e;
  let m = `${rootPrefixCls}-item`;
  let v = current === pageNum;
  let g = A_1(m, v ? `${m}-active` : "");
  let y = pageItemStyle;
  if (v) {
    y = i._({}, y, activePageItemStyle);
  }
  let b = (t) => {
    let { pageNum, onClick, disabled } = e;
    if (t.currentTarget.dataset.active !== "true") {
      t.stopPropagation();
      if (!disabled && onClick) {
        onClick(pageNum);
      }
    }
  };
  return s.jsx(
    "li",
    l._(
      i._(
        {
          style: y,
          className: g,
          onClick: b,
          tabIndex: e.disabled ? -1 : 0,
          "aria-label":
            (t = locale.Pagination.currentPage) == null
              ? undefined
              : t.replace("{0}", pageNum),
        },
        r({
          onPressEnter: b,
        }),
        v
          ? {
              "aria-current": true,
            }
          : {},
      ),
      {
        children: itemRender ? itemRender(pageNum, "page", pageNum) : pageNum,
      },
    ),
  );
};
let eh = () => {};
let { Option } = ef.A;
let ev = [10, 20, 30, 40, 50];
const useEg = function (e) {
  let tRef = a.useRef();
  let { locale } = a.useContext(QO);
  let {
    sizeCanChange = false,
    onPageSizeChange = eh,
    rootPrefixCls,
    sizeOptions = ev,
    pageSize = 10,
    size,
    selectProps,
    disabled,
  } = e;
  return (
    sizeCanChange &&
    s.jsx("div", {
      ref: tRef,
      className: `${rootPrefixCls}-option`,
      "aria-label": locale.Pagination.pageSize,
      children: s.jsx(
        ef.A,
        l._(
          i._(
            {
              value:
                sizeOptions.indexOf(pageSize) !== -1
                  ? pageSize
                  : sizeOptions[0],
              onChange: (e) => {
                onPageSizeChange(e);
              },
              size,
              getPopupContainer: () => tRef.current,
              disabled,
            },
            selectProps,
          ),
          {
            children: sizeOptions.map((e) =>
              s.jsx(
                Option,
                {
                  value: e,
                  children: `${e} ${locale.Pagination.countPerPage}`,
                },
                e,
              ),
            ),
          },
        ),
      ),
    })
  );
};
const useEb = function (e) {
  let t = e.simple ? e.current : undefined;
  let { locale } = a.useContext(QO);
  let [r, setR] = a.useState(t);
  let lRef = a.useRef();
  a.useEffect(() => {
    if (e.simple) {
      setR(e.current);
    }
  }, [e.simple, e.current]);
  let c = () => {
    let { onPageChange, totalPages, current, simple } = e;
    if (b0(r)) {
      return;
    }
    if (r === current && !simple) {
      return void setR(undefined);
    }
    let s = isNaN(Number(r)) ? current : Number(r);
    if (s < 1) {
      s = 1;
    } else if (s > totalPages) {
      s = totalPages;
    }
    setR(simple ? s : undefined);
    if (Tn(onPageChange)) {
      onPageChange(s);
    }
  };
  let { rootPrefixCls, totalPages, simple, size, disabled } = e;
  let v = `${rootPrefixCls}-jumper`;
  let g = i._(
    {
      showJumper: true,
    },
    Gv(simple) ? simple : {},
  );
  return s.jsxs("div", {
    className: `${v}`,
    children: [
      !simple &&
        s.jsx("span", {
          className: `${v}-text-goto`,
          children: locale.Pagination.goto,
        }),
      g.showJumper
        ? s.jsx(A_17, {
            _ignorePropsFromGlobal: true,
            ref: (e) => (lRef.current = e),
            className: `${v}-input`,
            value: b0(r) ? undefined : r.toString(),
            size,
            disabled: disabled || !totalPages,
            onChange: (e) => {
              let t = parseInt(e, 10);
              setR(isNaN(t) ? undefined : t);
            },
            onPressEnter: c,
            onFocus: () => {
              let dom = lRef.current.dom;
              if (String(r) && dom) {
                dom.setSelectionRange(0, String(r).length);
              }
            },
            onBlur: c,
          })
        : s.jsx("span", {
            children: r,
          }),
      simple &&
        s.jsxs(s.Fragment, {
          children: [
            s.jsx("span", {
              className: `${v}-separator`,
              children: "/",
            }),
            s.jsx("span", {
              children: totalPages,
            }),
          ],
        }),
    ],
  });
};
function ex(e, total) {
  return Math.ceil(total / e);
}
function ew(sizeOptions) {
  if (sizeOptions && sizeOptions.length) {
    return sizeOptions[0];
  }
  return 10;
}
let ej = {
  total: 0,
  pageSizeChangeResetCurrent: true,
  bufferSize: 2,
};
let eO = a.forwardRef(function (e, t) {
  let n;
  let r;
  let { getPrefixCls, size, locale, componentConfig, rtl } = a.useContext(QO);
  let m = A_9(
    e,
    ej,
    componentConfig == null ? undefined : componentConfig.Pagination,
  );
  let {
    total,
    pageSize,
    current,
    showMore,
    sizeOptions,
    pageSizeChangeResetCurrent,
    defaultCurrent,
    defaultPageSize,
  } = m;
  let [C, N] = A_10(1, {
    defaultValue: defaultCurrent,
    value: current,
  });
  let [P, $] = A_10(ew(sizeOptions), {
    defaultValue: defaultPageSize,
    value: pageSize,
  });
  if (current && !m.onChange) {
    console.warn(
      "Warning: you have provide current prop for pagination but without onChange handler , this will cause no-change when you change page. ",
    );
  }
  a.useEffect(() => {
    let e = ew(sizeOptions);
    if (!("pageSize" in m)) {
      $(e);
    }
  }, [sizeOptions]);
  a.useEffect(() => {
    let e;
    let t = C > (e = ex(P, total)) ? e : C;
    if (!(t === C || "current" in m)) {
      N(t);
    }
  }, [total, C, P]);
  let k = (e = C, t = P) => {
    let { onChange } = m;
    if (onChange) {
      onChange(e, t);
    }
  };
  let A = (e) => {
    if (!("current" in m)) {
      N(e);
    }
    k(e);
  };
  let {
    className,
    style,
    pageItemStyle,
    activePageItemStyle,
    showTotal,
    sizeCanChange,
    sizeOptions: sizeOptions_1,
    simple,
    mini,
    showJumper,
    selectProps,
    icons,
    disabled,
    itemRender,
    hideOnSinglePage,
  } = m;
  let U = m.size || size;
  let rootPrefixCls = getPrefixCls("pagination");
  let size_1 = mini ? "mini" : U;
  let q = A_1(
    rootPrefixCls,
    `${rootPrefixCls}-size-${size_1}`,
    {
      [`${rootPrefixCls}-simple`]: simple,
      [`${rootPrefixCls}-disabled`]: disabled,
      [`${rootPrefixCls}-rtl`]: rtl,
    },
    className,
  );
  let X = [];
  let ee = ex(P, total);
  let et = Math.min(Math.max(m.bufferSize, 0), Math.floor(ee / 2) - 1);
  if (hideOnSinglePage && ee <= 1) {
    return null;
  }
  let en = {
    onClick: A,
    rootPrefixCls,
    simple,
    current: C,
    allPages: ee,
    icons,
    disabled,
    pageItemStyle,
    activePageItemStyle,
    itemRender,
  };
  if (simple) {
    let e = `${rootPrefixCls}-item-simple`;
    r = s.jsxs("ul", {
      className: `${rootPrefixCls}-list`,
      children: [
        s.jsx(
          EdComponent,
          l._(i._({}, en), {
            type: o.previous,
          }),
          "previous",
        ),
        s.jsx("li", {
          className: `${e}-pager`,
          children: s.jsx(useEb, {
            disabled,
            rootPrefixCls,
            totalPages: ee,
            current: C,
            onPageChange: A,
            simple: {
              showJumper: typeof showJumper !== "boolean" || showJumper,
            },
            size: size_1,
          }),
        }),
        s.jsx(
          EdComponent,
          l._(i._({}, en), {
            type: o.next,
          }),
          "next",
        ),
      ],
    });
  } else {
    let e = 3 + et;
    let t = ee - 2 - et;
    if (ee <= 4 + 2 * et || (C === e && C === t)) {
      for (let e = 1; e <= ee; e++) {
        X.push(
          a.createElement(
            EpComponent,
            l._(i._({}, en), {
              key: e,
              pageNum: e,
            }),
          ),
        );
      }
    } else {
      let n = 1;
      let r = ee;
      let c = true;
      let u = true;
      if (C > e && C < t) {
        r = C + et;
        n = C - et;
      } else if (C <= e) {
        c = false;
        n = 1;
        r = Math.max(e, et + C);
      } else if (C >= t) {
        u = false;
        r = ee;
        n = Math.min(t, C - et);
      }
      for (let pageNum = n; pageNum <= r; pageNum++) {
        X.push(
          s.jsx(
            EpComponent,
            i._(
              {
                pageNum,
              },
              en,
            ),
            pageNum,
          ),
        );
      }
      let d = a.createElement(
        EuComponent,
        l._(i._({}, en), {
          key: n - 1,
          type: o.previous,
          jumpPage: -(2 * et + 1),
        }),
      );
      let p = a.createElement(
        EuComponent,
        l._(i._({}, en), {
          key: r + 1,
          type: o.next,
          jumpPage: 2 * et + 1,
        }),
      );
      let f = s.jsx(
        EpComponent,
        i._(
          {
            pageNum: 1,
          },
          en,
        ),
        1,
      );
      let h = a.createElement(
        EpComponent,
        l._(i._({}, en), {
          key: ee,
          pageNum: ee,
        }),
      );
      if (c) {
        X[0] = a.cloneElement(X[0], {
          className: `${rootPrefixCls}-item-after-pre`,
        });
        X.unshift(d);
        X.unshift(f);
      }
      if (u) {
        X[X.length - 1] = a.cloneElement(X[X.length - 1], {
          className: `${rootPrefixCls}-item-before-next`,
        });
        X.push(p);
        X.push(h);
      }
    }
    r = s.jsxs("ul", {
      className: `${rootPrefixCls}-list`,
      children: [
        a.createElement(
          EdComponent,
          l._(i._({}, en), {
            key: "previous",
            type: o.previous,
          }),
        ),
        X,
        !!showMore &&
          a.createElement(
            EuComponent,
            l._(i._({}, en), {
              key: ee + 1,
              type: o.next,
              jumpPage: 2 * et + 1,
            }),
          ),
        s.jsx(
          EdComponent,
          l._(i._({}, en), {
            type: o.next,
          }),
          "next",
        ),
      ],
    });
  }
  let er = null;
  if (typeof showTotal === "boolean" && showTotal) {
    er = s.jsx("div", {
      className: `${rootPrefixCls}-total-text`,
      children:
        (n = locale.Pagination.total) == null
          ? undefined
          : n.replace("{0}", total),
    });
  }
  if (typeof showTotal === "function") {
    er = s.jsx("div", {
      className: `${rootPrefixCls}-total-text`,
      children: showTotal(total, [(C - 1) * P + 1, C * P]),
    });
  }
  return s.jsxs(
    "div",
    l._(i._({}, J.t(m)), {
      className: q,
      style,
      ref: t,
      children: [
        er,
        r,
        s.jsx(useEg, {
          disabled,
          rootPrefixCls,
          sizeCanChange,
          sizeOptions: sizeOptions_1,
          onPageSizeChange: (e) => {
            let { onPageSizeChange } = m;
            let n = ex(e, total);
            let r = {
              pageSize: e,
            };
            if (pageSizeChangeResetCurrent) {
              r.current = 1;
            } else {
              r.current = C > n ? n : C;
            }
            if (!("pageSize" in m)) {
              $(r.pageSize);
            }
            if (!("current" in m || C === r.current)) {
              N(r.current);
            }
            if (onPageSizeChange) {
              onPageSizeChange(e, r.current);
            }
            k(pageSizeChangeResetCurrent ? 1 : r.current, e);
          },
          pageSize: P,
          size: size_1,
          selectProps,
        }),
        !simple &&
          showJumper &&
          s.jsx(useEb, {
            disabled,
            rootPrefixCls,
            totalPages: ee,
            current: C,
            onPageChange: A,
            size: size_1,
          }),
      ],
    }),
  );
});
eO.displayName = "Pagination";
function eN(width) {
  if (typeof width === "number" || typeof width === "string") {
    return {
      width,
    };
  }
  return {};
}
const eP = function (e) {
  let { prefixCls, columns } = e;
  return s.jsx("colgroup", {
    children: columns.map((e, n) => {
      if (e.title === B) {
        return s.jsx(
          "col",
          {
            className: `${prefixCls}-expand-icon-col`,
            style: eN(e.width),
          },
          B,
        );
      }
      if (e.title === W) {
        return s.jsx(
          "col",
          {
            className: `${prefixCls}-selection-col`,
            style: eN(e.width),
          },
          W,
        );
      }
      return s.jsx(
        "col",
        {
          style: eN(e.width),
        },
        e.key || n,
      );
    }),
  });
};
function e$(e) {
  return [...new Set(e)];
}
const useEk = (e) => {
  let t = e.map((e) => e.width);
  let n = e.map((e) => e.fixed);
  return a.useMemo(
    () =>
      e.map((t) => {
        let n = 0;
        if (t.fixed === "left") {
          e.some((e) => {
            if (e.fixed === "left") {
              if (e.key === t.key) {
                return true;
              }
              let r = e.$$isOperation ? e.width || 40 : e.width;
              n += r;
            }
            return false;
          });
        }
        if (t.fixed === "right") {
          [...e].reverse().some((e) => {
            if (e.fixed === "right") {
              if (e.key === t.key) {
                return true;
              }
              let r = e.$$isOperation ? e.width || 40 : e.width;
              n += r;
            }
            return false;
          });
        }
        return n;
      }),
    [t.join("-"), n.join("-")],
  );
};
const useEA = (e, t, prefixCls) => {
  let r = t.map((e) => e.fixed);
  function o(e, r) {
    return A_1({
      [`${prefixCls}-col-fixed-left`]: e.fixed === "left",
      [`${prefixCls}-col-fixed-right`]: e.fixed === "right",
      [`${prefixCls}-col-fixed-left-last`]:
        e.fixed === "left" && (!Gv(t[r + 1]) || t[r + 1].fixed !== "left"),
      [`${prefixCls}-col-fixed-right-first`]:
        e.fixed === "right" && (!Gv(t[r - 1]) || t[r - 1].fixed !== "right"),
    });
  }
  let i = a.useMemo(() => t.map((e, t) => o(e, t)), [r.join("-")]);
  return [
    a.useMemo(
      () => e.map((e) => e.map((e, t) => o(e, t))),
      [
        e
          .map((e) => `|${e.map((e) => e.fixed || "undefined").join("-")}|`)
          .join("_"),
      ],
    ),
    i,
  ];
};
function eE(e, childrenColumnName) {
  let n = [];
  (function e(r) {
    if (r && r.length > 0) {
      r.forEach((r) => {
        if (r[childrenColumnName]) {
          e(r[childrenColumnName]);
        } else {
          n.push(
            l._(i._({}, r), {
              key: r.key || r.dataIndex,
            }),
          );
        }
      });
    }
  })(e);
  return n;
}
const useE = (e) => {
  let {
    components,
    rowSelection,
    expandedRowRender,
    expandProps = {},
    columns = [],
    childrenColumnName,
  } = e;
  let u = a.useMemo(
    () => eE(columns, childrenColumnName),
    [columns, childrenColumnName],
  );
  let d =
    (rowSelection && rowSelection.type === "checkbox") ||
    (rowSelection && !("type" in rowSelection));
  let p = rowSelection && rowSelection.type === "radio";
  let { width } = expandProps;
  let h = !!expandedRowRender;
  let m = d || p;
  let { getHeaderComponentOperations, getBodyComponentOperations } =
    useI(components);
  let y = a.useMemo(
    () =>
      getHeaderComponentOperations({
        selectionNode: m ? "holder_node" : "",
        expandNode: h ? "holder_node" : "",
      }),
    [m, h, getHeaderComponentOperations],
  );
  let b = a.useMemo(
    () =>
      getBodyComponentOperations({
        selectionNode: m ? "holder_node" : "",
        expandNode: h ? "holder_node" : "",
      }),
    [m, h, getBodyComponentOperations],
  );
  let x = rowSelection && rowSelection.fixed;
  let w = rowSelection && rowSelection.columnWidth;
  let j = a.useCallback(
    (e, t, n) => {
      let r = {};
      let o = [];
      e.forEach((e, t) => {
        let n = i._({}, e);
        if (!("key" in e)) {
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
      let s = h && {
        key: B,
        title: B,
        width,
        $$isOperation: true,
      };
      let a = m && {
        key: W,
        title: W,
        width: w,
        $$isOperation: true,
      };
      if (x) {
        r.fixed = "left";
      }
      if (typeof n !== "number" || n === 0) {
        [...t].reverse().forEach((e) => {
          if (e.node) {
            if (e.name === "expandNode") {
              o.unshift(i._({}, s, r));
            } else if (e.name === "selectionNode") {
              o.unshift(i._({}, a, r));
            } else {
              o.unshift(
                l._(i._({}, e, r), {
                  title: e.name,
                  key: e.name,
                  $$isOperation: true,
                  width: e.width || 40,
                }),
              );
            }
          }
        });
      }
      return o;
    },
    [width, h, m, w, x],
  );
  let O = a.useMemo(() => j(u, b), [u, j, b]);
  let C = a.useMemo(
    () =>
      (function e(t, n) {
        let r = 0;
        if (t && t.length > 0) {
          t.forEach((t) => {
            r = Math.max(e(t[n], n) + 1, r);
          });
        }
        return r;
      })(columns, childrenColumnName),
    [columns, childrenColumnName],
  );
  return [
    a.useMemo(() => {
      if (C === 1) {
        return [j(columns, y, 0)];
      }
      let e = [];
      let t = (n, r = 0) => {
        e[r] = e[r] || [];
        n.forEach((n) => {
          let o = i._({}, n);
          if (o[childrenColumnName]) {
            o.colSpan = eE(n[childrenColumnName], childrenColumnName).length;
            o.rowSpan = 1;
            e[r].push(o);
            t(o[childrenColumnName], r + 1);
          } else {
            o.colSpan = 1;
            o.rowSpan = C - r;
            e[r].push(o);
          }
        });
        e[r] = j(e[r], y, r);
      };
      t(columns);
      return e;
    }, [columns, childrenColumnName, C, j, y]),
    O,
  ];
};
let eD = {
  showHeader: true,
  border: true,
  hover: true,
  rowKey: "key",
  pagePosition: "br",
  childrenColumnName: "children",
  indentSize: 15,
  showSorterTooltip: true,
};
let eR = a.forwardRef(function (e, t) {
  let n;
  let r;
  let o;
  let currentSorter_1;
  let v;
  let g;
  let y;
  let b;
  let x;
  let w;
  let {
    getPrefixCls,
    loadingElement,
    size,
    tablePagination,
    renderEmpty,
    componentConfig,
    rtl,
  } = a.useContext(QO);
  let A = A_9(
    e,
    eD,
    componentConfig == null ? undefined : componentConfig.Table,
  );
  let E = A_9(
    Gv(e == null ? undefined : e.pagination)
      ? e == null
        ? undefined
        : e.pagination
      : {},
    Gv(
      componentConfig == null || (n = componentConfig.Table) == null
        ? undefined
        : n.pagination,
    )
      ? componentConfig == null || (r = componentConfig.Table) == null
        ? undefined
        : r.pagination
      : {},
    tablePagination || {},
  );
  let {
    style,
    className,
    components,
    border,
    borderCell,
    columns = [],
    data = [],
    scroll,
    noDataElement,
    showHeader,
    stripe,
    hover,
    pagination,
    onChange,
    pagePosition,
    childrenColumnName,
    indentSize,
    rowSelection,
    tableLayoutFixed,
    footer,
    virtualized,
    renderPagination,
    summary,
    rowKey,
  } = A;
  let ed = a.useMemo(
    () =>
      (function e(t) {
        if (!t) {
          return [];
        }
        let n = [];
        t.forEach((t) => {
          if (Gv(t)) {
            let r = i._({}, t);
            r.__ORIGIN_DATA = t;
            let o = r[childrenColumnName];
            if (Gv(r) && o && cy(o)) {
              r[childrenColumnName] = e(o);
            }
            n.push(r);
          } else {
            n.push(t);
          }
        });
        return n;
      })(data),
    [data, childrenColumnName],
  );
  let prefixCls = getPrefixCls("table");
  let ef =
    A.size ||
    (["default", "middle", "small"].indexOf(size) > -1 ? size : "default");
  let ehRef = a.useRef(null);
  let emRef = a.useRef(null);
  let evRef = a.useRef(null);
  let egRef = a.useRef(null);
  let eyRef = a.useRef(null);
  let ebRef = a.useRef(0);
  let exRef = a.useRef(false);
  o = {};
  currentSorter_1 = {};
  (function e(t) {
    if (t && t.length > 0) {
      t.forEach((t, n) => {
        let r = t.dataIndex === undefined ? n : t.dataIndex;
        if (t[childrenColumnName]) {
          e(t[childrenColumnName]);
        } else {
          if (t.defaultFilters) {
            o[r] = t.defaultFilters;
          }
          if (t.filteredValue) {
            o[r] = t.filteredValue;
          }
          if (t.defaultSortOrder) {
            currentSorter_1.field = r;
            currentSorter_1.direction = t.defaultSortOrder;
          }
          if (t.sortOrder) {
            currentSorter_1.field = r;
            currentSorter_1.direction = t.sortOrder;
          }
        }
      });
    }
  })(columns);
  let { currentFilters, currentSorter } = {
    currentFilters: o,
    currentSorter: currentSorter_1,
  };
  let [eN, setEN] = a.useState(1);
  let [eR, setER] = a.useState(E.pageSize || E.defaultPageSize || 10);
  let [ez, setEz] = a.useState(currentFilters);
  let [eW, setEW] = a.useState(currentSorter);
  let [tableViewWidth, setTableViewWidth] = a.useState(0);
  let [eF, eK] = useE(A);
  let stickyOffsets = useEk(eK);
  let [groupStickyClassNames, stickyClassNames] = useEA(eF, eK, prefixCls);
  let { ComponentTable, ComponentBodyWrapper, ComponentHeaderWrapper } =
    useI(components);
  let getRowKey = a.useMemo(() => {
    if (typeof rowKey === "function") {
      return (e) => rowKey(U(e));
    }
    return (e) => e[rowKey];
  }, [rowKey]);
  let eJ = a.useMemo(() => {
    let e = eK.filter((e) => "filteredValue" in e);
    let t = {};
    if (e.length) {
      e.forEach((e, n) => {
        let r = e.dataIndex === undefined ? n : e.dataIndex;
        if (r !== undefined) {
          t[r] = e.filteredValue;
        }
      });
    }
    return t;
  }, [eK]);
  let e0 = a.useMemo(() => {
    let e = eK.filter((e) => "sortOrder" in e);
    let { length } = e;
    while (length--) {
      let n = e[length];
      if (n.sortOrder || length === 0) {
        return {
          field: n.dataIndex,
          direction: n.sortOrder,
        };
      }
    }
    return null;
  }, [eK]);
  let e1 = e0 || eW || {};
  let e2 = a.useMemo(() => {
    if (Object.keys(eJ).length) {
      return eJ;
    }
    return ez;
  }, [ez, eJ]);
  function onHandleFilterReset({ dataIndex }) {
    let t = i._({}, e2);
    delete t[dataIndex];
    setEz(t);
    let n = e8(e1, t);
    let r = tn(n);
    if (onChange) {
      onChange(e9(n), e1, t, {
        currentData: U(r),
        action: "filter",
      });
    }
  }
  let e5 = !!eK.find((e) => e.fixed === "left");
  let e7 = !!eK.find((e) => e.fixed === "right");
  let hasFixedColumn = e5 || e7;
  function e8(e, t) {
    let n = (ed || []).slice();
    Object.keys(t).forEach((e) => {
      if (t[e] && t[e].length) {
        let r = tO(e);
        if (r && typeof r.onFilter === "function") {
          n = n.filter((n) =>
            t[e].reduce((acc, item) => acc || r.onFilter(item, n), false),
          );
        }
      }
    });
    let r = tO(e.field);
    let o = (t) =>
      t
        .slice()
        .sort(
          ((e, t) => {
            if (typeof e === "function") {
              return (n, r) => {
                let o = e(n, r);
                if (t === "descend") {
                  return -o;
                }
                return o;
              };
            }
          })(r.sorter, e.direction),
        )
        .map((e) => {
          if (cy(e[childrenColumnName])) {
            return l._(i._({}, e), {
              [childrenColumnName]: o(e[childrenColumnName]),
            });
          }
          return e;
        });
    if (e.direction && r && typeof r.sorter === "function") {
      return o(n);
    }
    return n;
  }
  let e6 = e8(e1, e2);
  function e9(e = e6) {
    let t = E.pageSize || eR || 10;
    let position = "top";
    position =
      pagePosition === "tl" || pagePosition === "bl" ? "bottom" : "top";
    let total = cy(e) ? e.length : 0;
    let o = Math.ceil(total / t) < eN ? 1 : eN;
    if (o !== eN) {
      setEN(o);
    }
    let l = {
      size: ef === "middle" ? "default" : ef,
      total,
      pageSize: t,
      current: o,
      selectProps: {
        triggerProps: {
          position,
        },
      },
    };
    if (typeof pagination === "object" && pagination.selectProps) {
      l.selectProps = i._({}, l.selectProps, pagination.selectProps);
    }
    if (Gv(pagination)) {
      l = i._({}, l, pagination);
    }
    if (Gv(E)) {
      l = i._({}, l, E);
    }
    l.onChange = tC;
    return l;
  }
  let te = e9();
  let tt = tn();
  function tn(e = e6, t = te) {
    let { current = 0, pageSize = 10 } = t;
    if (pagination === false || (Gv(pagination) && data.length <= pageSize)) {
      return e;
    }
    return e.slice((current - 1) * pageSize, current * pageSize);
  }
  let tr = c.A(tc, 100);
  let to = !!(scroll && scroll.y);
  let ti = summary == null ? undefined : summary(U(e6));
  let tl = summary && a.isValidElement(ti) && ti.props.fixed;
  let ts = to && tl;
  function getRootDomElement() {
    return egRef.current;
  }
  function tc() {
    td();
    let e = getRootDomElement();
    if (e && (hasFixedColumn || (scroll && scroll.x))) {
      setTableViewWidth(
        (
          e.querySelector(`.${prefixCls}-body`) ||
          e.querySelector(`.${prefixCls}-content-inner`)
        ).clientWidth,
      );
    }
  }
  A_20(() => {
    tc();
    on(window, "resize", tr);
    let ehRef_current = ehRef.current;
    let emRef_current = emRef.current;
    let evRef_current = evRef.current;
    if (emRef_current) {
      on(emRef_current, "scroll", tN);
    }
    let r = ehRef_current && ehRef_current.parentNode;
    if (ehRef_current && r) {
      on(r, "scroll", tN);
    }
    if (evRef_current) {
      on(evRef_current, "scroll", tN);
    }
    return () => {
      AU(window, "resize", tr);
      if (emRef_current) {
        AU(emRef_current, "scroll", tN);
      }
      if (r) {
        AU(r, "scroll", tN);
      }
      if (evRef_current) {
        AU(evRef_current, "scroll", tN);
      }
    };
  }, [e5, e7, scroll == null ? undefined : scroll.x, eK.length]);
  A_18(() => {
    let { total, pageSize } = e9(data);
    if (Math.ceil(total / pageSize) < eN) {
      setEN(1);
    }
  }, [data == null ? undefined : data.length]);
  A_18(() => {
    td();
  }, [data, e5, e7]);
  a.useImperativeHandle(t, () => ({
    getRootDomElement,
  }));
  let tu = a.useCallback(
    u.A(() => {
      let egRef_current = egRef.current;
      let t = to ? emRef.current : eyRef.current && eyRef.current.parentNode;
      if (t) {
        let n = rtl ? -t.scrollLeft : t.scrollLeft;
        let r = n === 0;
        let o =
          n + 1 >=
          t.children[0].getBoundingClientRect().width -
            t.getBoundingClientRect().width;
        if (r && o) {
          th(egRef_current.classList, `${prefixCls}-scroll-position-both`);
        } else if (r) {
          th(
            egRef_current.classList,
            `${prefixCls}-scroll-position-${rtl ? "right" : "left"}`,
          );
        } else if (o) {
          th(
            egRef_current.classList,
            `${prefixCls}-scroll-position-${rtl ? "left" : "right"}`,
          );
        } else {
          th(egRef_current.classList, `${prefixCls}-scroll-position-middle`);
        }
      } else {
        if (egRef_current) {
          tf(egRef_current.classList);
        }
      }
    }, 100),
    [egRef.current, emRef.current],
  );
  function td() {
    if (hasFixedColumn || (scroll && Gv(scroll) && scroll.x)) {
      let e = egRef.current;
      if (e) {
        if (e5) {
          tp(e.classList, `${prefixCls}-has-fixed-col-left`);
        }
        if (e7) {
          tp(e.classList, `${prefixCls}-has-fixed-col-right`);
        }
      }
      tu();
    }
  }
  function tp(classList, t) {
    if (!classList.contains(t)) {
      classList.add(t);
    }
  }
  function tf(e) {
    e.remove(`${prefixCls}-scroll-position-both`);
    e.remove(`${prefixCls}-scroll-position-left`);
    e.remove(`${prefixCls}-scroll-position-right`);
    e.remove(`${prefixCls}-scroll-position-middle`);
  }
  function th(classList, t) {
    if (!classList.contains(t)) {
      tf(classList);
      classList.add(t);
    }
  }
  let {
    selectedRowKeys,
    indeterminateKeys,
    onCheckAll,
    onCheck,
    onCheckRadio,
    setSelectedRowKeys,
    allSelectedRowKeys,
    flattenData,
  } = ((e, t, n, r) => {
    let allSelectedRowKeys_1;
    let flattenData_1;
    let s;
    let c;
    let { rowSelection, childrenColumnName } = e;
    let f = rowSelection == null ? undefined : rowSelection.selectedRowKeys;
    let h = rowSelection == null ? undefined : rowSelection.onSelectAll;
    let m = rowSelection == null ? undefined : rowSelection.onSelect;
    let v = rowSelection == null ? undefined : rowSelection.onChange;
    let g = rowSelection == null ? undefined : rowSelection.pureKeys;
    let y =
      typeof (rowSelection == null ? undefined : rowSelection.checkStrictly) ===
        "boolean" && !rowSelection.checkStrictly;
    let b =
      rowSelection == null ? undefined : rowSelection.preserveSelectedRowKeys;
    allSelectedRowKeys_1 = [];
    flattenData_1 = [];
    (s = (t) => {
      if (cy(t) && t.length) {
        t.forEach((t) => {
          let n = r(t);
          if (
            !(
              rowSelection && typeof rowSelection.checkboxProps === "function"
                ? rowSelection.checkboxProps(U(t))
                : {}
            ).disabled
          ) {
            allSelectedRowKeys_1.push(n);
          }
          if (G(t, e.childrenColumnName)) {
            s(t[e.childrenColumnName]);
          }
        });
      }
    })(t);
    (c = (t, n) => {
      if (cy(t) && t.length) {
        t.forEach((t) => {
          if (n && y) {
            t.__INTERNAL_PARENT = n;
          }
          flattenData_1.push(t);
          if (G(t, e.childrenColumnName)) {
            let n = i._({}, t);
            c(t[e.childrenColumnName], n);
          }
        });
      }
    })(n, undefined);
    let { allSelectedRowKeys, flattenData } = {
      allSelectedRowKeys: allSelectedRowKeys_1,
      flattenData: flattenData_1,
    };
    let [j, setJ] = a.useState([]);
    let [C, setC] = a.useState([]);
    let P = ((e, t = [], n, r, o) => {
      if (!o) {
        return {
          selectedRowKeys: t,
          indeterminateKeys: [],
        };
      }
      let i = new Set(t);
      let l = new Set([]);
      t.forEach((t) => {
        let o = e.find((e) => n(e) === t);
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
          Z(o, i, l, n, r);
        }
      });
      return {
        selectedRowKeys: [...i],
        indeterminateKeys: [...l],
      };
    })(flattenData, e$(f || j), r, childrenColumnName, y);
    let $ = y && !f ? j : P.selectedRowKeys;
    let indeterminateKeys_1 = y && !f ? C : P.indeterminateKeys;
    let [A, setA] = a.useState(g ? [] : _($));
    function _(e, t) {
      let n = new Map(
        (t ? A.concat(flattenData) : flattenData).map((e) => [r(e), e]),
      );
      return e.map((e) => n.get(e)).filter((e) => e);
    }
    let M = new Set(flattenData.map((e) => r(e)));
    function T(e) {
      if (b) {
        return e;
      }
      return e.filter((e) => M.has(e));
    }
    return {
      selectedRowKeys: $,
      indeterminateKeys: indeterminateKeys_1,
      onCheckAll: function (e) {
        let t = [];
        let n = [];
        if (e) {
          t = T(e$($.concat(allSelectedRowKeys)));
        } else {
          let e = new Set(allSelectedRowKeys);
          t = T($.filter((t) => !e.has(t)));
        }
        if (!g) {
          n = _(t, true);
        }
        let r = U(n);
        setJ(t);
        setA(n);
        setC([]);
        if (v) {
          v(t, r);
        }
        if (h) {
          h(e, r);
        }
      },
      onCheck: function (e, t) {
        let { selectedRowKeys, indeterminateKeys } = ((
          e,
          t,
          n = [],
          r = [],
          o,
          i,
          l,
        ) => {
          let s = new Set(n);
          let a = new Set(r);
          if (l) {
            (function e(n) {
              if (t) {
                s.add(o(n));
                a.delete(o(n));
              } else {
                s.delete(o(n));
              }
              if (cy(n[i])) {
                n[i].forEach((t) => {
                  e(t);
                });
              }
            })(e);
            Z(e, s, a, o, i);
          } else if (t) {
            s.add(o(e));
          } else {
            s.delete(o(e));
          }
          return {
            selectedRowKeys: [...s],
            indeterminateKeys: [...a],
          };
        })(t, e, $, C, r, childrenColumnName, y);
        let i = T(selectedRowKeys);
        let l = _(i, true);
        let s = U(l);
        setJ(i);
        setA(l);
        setC(indeterminateKeys);
        if (m) {
          m(e, U(t), s);
        }
        if (v) {
          v(i, s);
        }
      },
      onCheckRadio: function (e, t) {
        let n = U([flattenData.find((t) => r(t) === e)]);
        setJ([e]);
        if (m) {
          m(true, U(t), n);
        }
        if (v) {
          v([e], n);
        }
      },
      setSelectedRowKeys: setJ,
      allSelectedRowKeys,
      flattenData,
    };
  })(A, tt, ed, getRowKey);
  function tO(e) {
    return eK.find((t, n) => {
      if (t.dataIndex !== undefined) {
        return t.dataIndex === e;
      }
      return Number(e) === n;
    });
  }
  function tC(e, t) {
    setEN(e);
    setER(t);
    if (e !== eN) {
      (() => {
        if (!emRef.current) {
          return;
        }
        let { scrollTop } = emRef.current;
        new d.A({
          from: {
            scrollTop,
          },
          to: {
            scrollTop: 0,
          },
          easing: "quintInOut",
          duration: 300,
          onUpdate: (e) => {
            emRef.current.scrollTop = e.scrollTop;
          },
        }).start();
      })();
    }
    if (
      rowSelection &&
      !rowSelection.checkCrossPage &&
      selectedRowKeys.length
    ) {
      setSelectedRowKeys([]);
      if (rowSelection.onChange) {
        rowSelection.onChange([], []);
      }
    }
    let n = l._(i._({}, e9()), {
      current: e,
      pageSize: t,
    });
    if (onChange) {
      onChange(n, e1, e2, {
        currentData: tn(e6, n),
        action: "paginate",
      });
    }
    if (E.onChange) {
      E.onChange(e, t);
    }
  }
  function tN(e) {
    let { target } = e;
    let emRef_current = emRef.current;
    let r = ehRef.current && ehRef.current.parentNode;
    let evRef_current = evRef.current;
    if (target.scrollLeft !== ebRef.current) {
      if (r) {
        r.scrollLeft = target.scrollLeft;
      }
      if (emRef_current) {
        emRef_current.scrollLeft = target.scrollLeft;
      }
      if (evRef_current) {
        evRef_current.scrollLeft = target.scrollLeft;
      }
      td();
    }
    ebRef.current = e.target.scrollLeft;
  }
  let [expandedRowKeys, onClickExpandBtn] = ((e, t, n) => {
    let r;
    let {
      defaultExpandedRowKeys,
      defaultExpandAllRows,
      expandedRowRender,
      onExpand,
      onExpandedRowsChange,
      childrenColumnName = "children",
      expandProps,
    } = e;
    let [p, setP] = a.useState(
      ((r = []),
      e.expandedRowKeys
        ? (r = e.expandedRowKeys)
        : defaultExpandedRowKeys
          ? (r = defaultExpandedRowKeys)
          : defaultExpandAllRows &&
            (r = t
              .map((e, t) => {
                let r = U(e);
                if (
                  expandProps &&
                  "rowExpandable" in expandProps &&
                  typeof expandProps.rowExpandable === "function"
                ) {
                  return expandProps.rowExpandable(r);
                }
                if (typeof expandedRowRender === "function") {
                  return expandedRowRender(r, t) && n(e);
                }
                return G(e, childrenColumnName) && n(e);
              })
              .filter((e) => e)),
      r),
    );
    let h = e.expandedRowKeys || p;
    return [
      h,
      function (e) {
        let r;
        let o;
        let i = h.indexOf(e) === -1;
        let l = i ? h.concat(e) : h.filter((t) => e !== t);
        let a = t.filter((e) => l.indexOf(n(e)) !== -1).map((e) => n(e));
        setP(a);
        r = e;
        o = i;
        if (onExpand) {
          onExpand(U(t.find((e) => n(e) === r)), o);
        }
        if (onExpandedRowsChange) {
          onExpandedRowsChange(a);
        }
      },
    ];
  })(A, flattenData, getRowKey);
  let tk = {};
  let tA = {};
  if (scroll) {
    if (
      scroll.x &&
      (typeof scroll.x === "number" || typeof scroll.x === "string")
    ) {
      tA = {
        width: scroll.x,
      };
    }
    if (
      scroll.y &&
      (typeof scroll.y === "number" || typeof scroll.y === "string")
    ) {
      tk = {
        maxHeight: scroll.y,
      };
    }
  }
  let tE = s.jsx(
    useH,
    l._(i._({}, A), {
      sorter: e1,
      selectedRowKeys,
      currentFilters: e2,
      onCheckAll,
      onSort: function (direction, field) {
        let n = {
          field,
          direction,
        };
        if (!e0) {
          setEW(n);
        }
        let r = e8(n, e2);
        let o = tn(r);
        if (onChange) {
          onChange(e9(r), n, e2, {
            currentData: U(o),
            action: "sort",
          });
        }
      },
      data: tt,
      onHandleFilter: function (e, t) {
        let n = l._(i._({}, e2), {
          [e.dataIndex]: t,
        });
        let r = i._({}, n, eJ);
        if (cy(t) && t.length) {
          setEz(r);
          let e = e8(e1, n);
          let t = tn(e);
          if (onChange) {
            onChange(e9(e), e1, n, {
              currentData: U(t),
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
      prefixCls,
      allSelectedRowKeys,
      groupColumns: eF,
      stickyOffsets,
      groupStickyClassNames,
    }),
  );
  let t_ =
    ti &&
    s.jsx(eo, {
      prefixCls,
      summary,
      data: tt,
      columns: eK,
      stickyOffsets,
      stickyClassNames,
    });
  let tM = s.jsx(
    en,
    l._(i._({}, A), {
      selectedRowKeys,
      indeterminateKeys,
      expandedRowKeys,
      onCheck,
      onCheckRadio,
      onClickExpandBtn,
      columns: eK,
      data: tt,
      prefixCls,
      hasFixedColumn,
      tableViewWidth,
      indentSize,
      noDataElement: noDataElement || renderEmpty("Table"),
      currentSorter: e1,
      stickyOffsets,
      stickyClassNames,
      getRowKey,
      saveVirtualWrapperRef: (e) => {
        if (virtualized) {
          emRef.current = e;
        }
      },
    }),
  );
  let tT =
    virtualized || ts
      ? tM
      : s.jsxs(s.Fragment, {
          children: [tM, t_],
        });
  if (!columns.length) {
    return null;
  }
  let tS = Gv(border) ? border.wrapper : border;
  let tD = Gv(border) ? border.cell : borderCell;
  let tR = Gv(border) ? border.cell || border.headerCell : borderCell;
  let tI = Gv(border) ? border.cell || border.bodyCell : borderCell;
  let tz = A_1(
    prefixCls,
    `${prefixCls}-size-${ef}`,
    {
      [`${prefixCls}-border`]: tS,
      [`${prefixCls}-border-cell`]: tD,
      [`${prefixCls}-border-header-cell`]: !tD && tR,
      [`${prefixCls}-border-body-cell`]: !tD && tI,
      [`${prefixCls}-stripe`]: stripe,
      [`${prefixCls}-hover`]: hover,
      [`${prefixCls}-type-radio`]:
        rowSelection && rowSelection.type === "radio",
      [`${prefixCls}-layout-fixed`]:
        tableLayoutFixed ||
        (scroll && (scroll.x || scroll.y)) ||
        columns.find((e) => e.ellipsis),
      [`${prefixCls}-fixed-column`]: hasFixedColumn,
      [`${prefixCls}-virtualized`]: virtualized,
      [`${prefixCls}-rtl`]: rtl,
    },
    className,
  );
  let tV =
    pagePosition === "tl" ||
    pagePosition === "tr" ||
    pagePosition === "topCenter";
  let tW = A_1(`${prefixCls}-pagination`, {
    [`${prefixCls}-pagination-left`]:
      pagePosition === "tl" || pagePosition === "bl",
    [`${prefixCls}-pagination-center`]:
      pagePosition === "topCenter" || pagePosition === "bottomCenter",
    [`${prefixCls}-pagination-top`]: tV,
  });
  let A_loading = A.loading;
  if (typeof A_loading === "boolean") {
    A_loading = {
      loading: A_loading,
    };
  }
  let tH =
    typeof renderPagination === "function"
      ? renderPagination(s.jsx(eO, i._({}, te)))
      : s.jsx("div", {
          className: tW,
          children: s.jsx(eO, i._({}, te)),
        });
  return s.jsx(
    "div",
    l._(
      i._(
        {
          ref: egRef,
          style,
          className: tz,
        },
        J.t(A),
      ),
      {
        children: s.jsxs(
          A_2,
          l._(
            i._(
              {
                element: loadingElement || s.jsx(A_2, {}),
              },
              A_loading,
            ),
            {
              children: [
                pagination !== false && tt.length !== 0 && tV && tH,
                ((v = {}),
                scroll &&
                  Gv(scroll) &&
                  scroll.x &&
                  (v = {
                    width: scroll.x,
                  }),
                (g = s.jsx("div", {
                  className: `${prefixCls}-tfoot`,
                  ref: evRef,
                  children: s.jsxs(ComponentTable, {
                    style: v,
                    children: [
                      s.jsx(eP, {
                        columns: eK,
                        prefixCls,
                      }),
                      t_,
                    ],
                  }),
                })),
                (y = ti && to && tl === "top"),
                (b = ti && to && tl === "bottom"),
                (w = s.jsxs(s.Fragment, {
                  children: [
                    showHeader
                      ? ((x = Gv(scroll) && scroll.x === "max-content"),
                        to || virtualized
                          ? s.jsx(ComponentHeaderWrapper, {
                              className: `${prefixCls}-header`,
                              children: s.jsxs(ComponentTable, {
                                ref: ehRef,
                                style: x ? {} : tA,
                                children: [
                                  s.jsx(eP, {
                                    columns: eK,
                                    prefixCls,
                                  }),
                                  tE,
                                ],
                              }),
                            })
                          : tE)
                      : null,
                    y && g,
                    s.jsx(A_19, {
                      onResize: function () {
                        let e = ehRef.current && ehRef.current.parentNode;
                        let t = e ? e.offsetHeight - e.clientHeight : 0;
                        if (t && t > 0) {
                          e.style.marginBottom = `-${t}px`;
                          e.style.paddingBottom = "0px";
                          if (evRef.current) {
                            evRef.current.style.marginBottom = `-${t}px`;
                            evRef.current.style.paddingBottom = "0px";
                          }
                        }
                        setTimeout(() => {
                          var t;
                          if (
                            (t = emRef.current)
                              ? t.offsetWidth - t.clientWidth
                              : 0
                          ) {
                            exRef.current = true;
                            if (e) {
                              e.style.overflowY = "scroll";
                            }
                            if (evRef.current) {
                              evRef.current.style.overflowY = "scroll";
                            }
                          } else if (e && exRef.current) {
                            exRef.current = false;
                            e.style.overflowY = "auto";
                            if (evRef.current) {
                              evRef.current.style.overflowY = "auto";
                            }
                          }
                        });
                      },
                      children:
                        to && !virtualized
                          ? s.jsx(ComponentBodyWrapper, {
                              ref: emRef,
                              className: `${prefixCls}-body`,
                              style: tk,
                              children: s.jsxs(ComponentTable, {
                                style: tA,
                                children: [
                                  s.jsx(eP, {
                                    columns: eK,
                                    prefixCls,
                                  }),
                                  tT,
                                ],
                              }),
                            })
                          : tT,
                    }),
                    b && g,
                  ],
                })),
                s.jsxs(s.Fragment, {
                  children: [
                    s.jsx("div", {
                      className: `${prefixCls}-container`,
                      children: s.jsx("div", {
                        className: `${prefixCls}-content-scroll`,
                        children: s.jsx("div", {
                          className: `${prefixCls}-content-inner`,
                          onScroll: to
                            ? undefined
                            : function (e) {
                                let { target } = e;
                                let eyRef_current = eyRef.current;
                                if (target.scrollLeft !== ebRef.current) {
                                  eyRef_current.scrollLeft = target.scrollLeft;
                                  td();
                                }
                                ebRef.current = e.target.scrollLeft;
                              },
                          children:
                            to || virtualized
                              ? w
                              : s.jsxs(ComponentTable, {
                                  ref: eyRef,
                                  style: v,
                                  children: [
                                    s.jsx(eP, {
                                      prefixCls,
                                      columns: eK,
                                    }),
                                    w,
                                  ],
                                }),
                        }),
                      }),
                    }),
                    typeof footer === "function" &&
                      s.jsx("div", {
                        className: `${prefixCls}-footer`,
                        children: footer(tt),
                      }),
                  ],
                })),
                pagination !== false && tt.length !== 0 && !tV && tH,
              ],
            },
          ),
        ),
      },
    ),
  );
});
eR.displayName = "Table";
function ez(e) {
  let { children } = e;
  let n = E._(e, ["children"]);
  return s.jsx(
    "td",
    l._(i._({}, A_21(n, ["$$ArcoTableSummaryCell"])), {
      children,
    }),
  );
}
function eV(e) {
  return e.children;
}
ez.defaultProps = {
  $$ArcoTableSummaryCell: true,
};
eV.Row = function (e) {
  let { rtl } = a.useContext(QO);
  let { columns, stickyOffsets, stickyClassNames, prefixCls } =
    a.useContext(ErContext);
  let { children } = e;
  let d = E._(e, ["children"]);
  let p = a.Children.map(children, (e) => e.props.colSpan || 1);
  let h = a.Children.map(children, (e, s) => {
    var u;
    var d;
    var h;
    let m =
      e == null || (u = e.props) == null ? undefined : u.$$ArcoTableSummaryCell;
    let v = e == null || (d = e.props) == null ? undefined : d.style;
    let g = e == null || (h = e.props) == null ? undefined : h.className;
    let y = p.slice(0, s).reduce((acc, item) => acc + item, 0);
    let b = {};
    if (columns[y].fixed === "left") {
      b = {
        [rtl ? "right" : "left"]: stickyOffsets[y],
      };
    } else if (columns[y].fixed === "right") {
      b = {
        [rtl ? "left" : "right"]: stickyOffsets[y],
      };
    }
    let x =
      columns[y].fixed === "left" || columns[y].fixed === "right"
        ? stickyClassNames[y]
        : "";
    if (m) {
      return a.cloneElement(
        e,
        l._(i._({}, e.props), {
          className: A_1(`${prefixCls}-td`, x, g),
          style: i._({}, v, b),
        }),
      );
    }
    return e;
  });
  return s.jsx(
    "tr",
    l._(i._({}, d), {
      children: h,
    }),
  );
};
eV.Cell = ez;
eR.Summary = eV;
var eW = eR;
export { eW as A };
