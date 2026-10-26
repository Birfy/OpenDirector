import r from "NY";
import a from "oa";
import o from "bk";
import i from "qa";
import l from "z8";
import s from "bT";
import _c from "xb";
import d from "Qey";
import m from "yw";
import v from "qO";
import p from "wF";
import g from "lBB";
import b from "Lx";
import f from "kiG";
import h from "sn";
import { V } from "./module-Gn4.js";
var x = s.memo(function (e) {
  const {
    size,
    onInsertOption,
    onChange,
    onVisibleChange,
    onPopupScroll,
    triggerProps,
    options,
    notFoundContent,
    getPopupContainer,
  } = e;
  const w = i._(e, [
    "size",
    "onInsertOption",
    "onChange",
    "onVisibleChange",
    "onPopupScroll",
    "triggerProps",
    "options",
    "notFoundContent",
    "getPopupContainer",
  ]);
  const { promptEditorRef } = s.useContext(v.b);
  const W = p.h(b.C);
  const CRef = s.useRef(null);
  const onVisibleChange_1 = s.useCallback(
    (e) => {
      var n;
      if (onVisibleChange != null) {
        onVisibleChange(e);
      }
      if (e) {
        CRef.current = Promise.withResolvers();
        return;
      }
      if ((n = CRef.current) != null) {
        n.resolve();
      }
      CRef.current = null;
    },
    [onVisibleChange],
  );
  const onPopupScroll_1 = s.useCallback(
    (e) =>
      r._(function* () {
        if (onPopupScroll != null) {
          onPopupScroll(e);
        }
        const { scrollTop, scrollHeight, clientHeight } = e;
        if (!(scrollHeight - (scrollTop + clientHeight) > 60)) {
          (yield W.getInstance()).subjectSearchManager.loadMore();
        }
      })(),
    [onPopupScroll, W],
  );
  const onChange_1 = s.useCallback(
    (e, n, a) =>
      r._(function* () {
        if (onChange != null) {
          onChange(e, n, a);
        }
        if (onInsertOption) {
          yield (r = CRef.current) == null ? undefined : r.promise;
          var r;
          const editor =
            promptEditorRef == null ? undefined : promptEditorRef.current;
          if (editor) {
            onInsertOption({
              editor,
              selection: [e, n, a],
            });
          }
        }
      })(),
    [onInsertOption, onChange, promptEditorRef],
  );
  const icon = s.useMemo(() => l.jsx(m.jHH, {}), []);
  const triggerElement = s.useMemo(
    () =>
      l.jsx(g.E, {
        icon,
        size,
      }),
    [icon, size],
  );
  const dropdownTitle = s.useMemo(
    () =>
      l.jsx("span", {
        className: "dropdown-title-xSEmDf",
        children: d.Ay.t("subject_call_modal_top_tip", {}, "可能@的内容"),
      }),
    [],
  );
  const A = s.useMemo(
    () => options.some((e) => !("options" in e) || e.options.length > 0),
    [options],
  );
  const notFoundContent_1 = s.useMemo(() => {
    if (notFoundContent != null) {
      return notFoundContent;
    }
    return l.jsx(f.m, {
      getPopupContainer,
    });
  }, [notFoundContent, getPopupContainer]);
  const O = s.useMemo(() => {
    if (A) {
      return l.jsx(h.x, {
        getPopupContainer,
      });
    }
    return null;
  }, [A, getPopupContainer]);
  const onMouseDown = s.useCallback((e) => {
    e.preventDefault();
  }, []);
  const dropdownRender = s.useCallback(
    (e) =>
      l.jsxs("div", {
        onMouseDown,
        children: [O, e],
      }),
    [onMouseDown, O],
  );
  const triggerProps_1 = s.useMemo(
    () =>
      o._(a._({}, triggerProps), {
        className: _c(
          "trigger-ZZLb6d",
          triggerProps == null ? undefined : triggerProps.className,
        ),
      }),
    [triggerProps],
  );
  return l.jsx(
    V,
    o._(
      a._(
        {
          triggerElement,
          dropdownTitle,
          dropdownRender,
        },
        w,
      ),
      {
        notFoundContent: notFoundContent_1,
        options,
        getPopupContainer,
        triggerProps: triggerProps_1,
        onChange: onChange_1,
        onVisibleChange: onVisibleChange_1,
        onPopupScroll: onPopupScroll_1,
      },
    ),
  );
});
export { x as o };
