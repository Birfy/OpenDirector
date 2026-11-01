import s from "NY";
import i from "oa";
import r from "bk";
import n from "qa";
import o from "z8";
import "uw5";
import "xj";
import l from "VAR";
import c from "R8";
import d from "bT";
import u from "Qey";
import m from "yw";
import { Wx } from "./module-eNj.js";
import g from "fSn";
const v = "menu-item-TSX3n9";
const p = "menu-item-icon-i8K8Tq";
const f = "menu-item-label-f5nbXH";
export var S = d.memo(function (e) {
  const {
    children,
    onAssetAdd,
    onLocalUpload,
    onVisibleChange,
    localAccept = Wx,
    localMultiple = true,
  } = e;
  const A = n._(e, [
    "children",
    "onAssetAdd",
    "onLocalUpload",
    "onVisibleChange",
    "localAccept",
    "localMultiple",
  ]);
  const [popupVisible, setPopupVisible] = d.useState(false);
  const L = d.useCallback(() => {
    setPopupVisible(false);
    (function (e) {
      const accept =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Wx;
      const multiple =
        !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
      g.y({
        accept,
        multiple,
        onFilesSelected: (t) => void Promise.resolve(e(t)),
      });
    })(onLocalUpload, localAccept, localMultiple);
  }, [localAccept, localMultiple, onLocalUpload]);
  const j = d.useCallback(
    () =>
      s._(function* () {
        setPopupVisible(false);
        yield onAssetAdd();
      })(),
    [onAssetAdd],
  );
  const onVisibleChange_1 = d.useCallback(
    (e) => {
      setPopupVisible(e);
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
    },
    [onVisibleChange],
  );
  const w = d.useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);
  const content = d.useMemo(
    () =>
      o.jsxs("div", {
        className: "menu-ENK35p",
        onClick: w,
        children: [
          o.jsxs(c.A, {
            className: v,
            onClick: L,
            onMouseDown: w,
            children: [
              o.jsx("span", {
                className: p,
                children: o.jsx(m.nre, {
                  size: 16,
                }),
              }),
              o.jsx("span", {
                className: f,
                children: u.Ay.t(
                  "subject_upload_add_local_btn",
                  {},
                  "从本地添加",
                ),
              }),
            ],
          }),
          o.jsxs(c.A, {
            className: v,
            onClick: j,
            onMouseDown: w,
            children: [
              o.jsx("span", {
                className: p,
                children: o.jsx(m.kDS, {
                  size: 16,
                }),
              }),
              o.jsx("span", {
                className: f,
                children: u.Ay.t(
                  "subject_upload_add_asset_btn",
                  {},
                  "从资产添加",
                ),
              }),
            ],
          }),
        ],
      }),
    [L, j, w],
  );
  return o.jsx(
    l.A,
    r._(
      i._(
        {
          className: "popover-kzt658",
          trigger: "click",
          showArrow: false,
          popupVisible,
          onVisibleChange: onVisibleChange_1,
        },
        A,
      ),
      {
        content,
        children,
      },
    ),
  );
});
