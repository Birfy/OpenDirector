import a from "oa";
import t from "bk";
import i from "qa";
import o from "z8";
import "kMQ";
import r from "RbS";
import s from "Qey";
import c from "Qp";
import d from "bT";
import _u from "xb";
import p from "yw";
const v = {
  select: "select-N2evFj",
  compact: "compact-cpDXHt",
  "toolbar-select": "toolbar-select-lz8gny",
  toolbarSelect: "toolbar-select-lz8gny",
  "toolbar-skill-select": "toolbar-skill-select-HfFO33",
  toolbarSkillSelect: "toolbar-skill-select-HfFO33",
};
const h = [-16, 8];
const dropdownMenuStyle = {
  maxHeight: parseFloat("306px"),
};
export function A(e) {
  const {
    source = "toolbar",
    compact = false,
    iconOnly = false,
    skillIcon,
    label,
    options,
    value = "",
    className,
    triggerElement,
    triggerProps,
    dropdownRender,
    renderFormat,
    arrowIcon = null,
    onChange,
    onClick,
    onKeyDown,
    onMouseEnter,
    onMouseLeave,
  } = e;
  const M = i._(e, [
    "source",
    "compact",
    "iconOnly",
    "skillIcon",
    "label",
    "options",
    "value",
    "className",
    "triggerElement",
    "triggerProps",
    "dropdownRender",
    "renderFormat",
    "arrowIcon",
    "onChange",
    "onClick",
    "onKeyDown",
    "onMouseEnter",
    "onMouseLeave",
  ]);
  const E = source === "toolbar";
  const DRef = d.useRef(null);
  c.P(DRef, s.Ay.t("web_mainframe_generator_skills", {}, "技能"));
  const WRef = d.useRef(null);
  const IRef = d.useRef(undefined);
  const z = d.useCallback(() => {
    if (IRef.current !== undefined) {
      cancelAnimationFrame(IRef.current);
      IRef.current = undefined;
    }
  }, []);
  d.useEffect(() => z, [z]);
  const $ = d.useCallback(() => {
    IRef.current = undefined;
    var e;
    var l;
    var n = (e = DRef.current) == null ? undefined : e.activeOptionValue;
    var a =
      (l = WRef.current) == null
        ? undefined
        : l.querySelector('[role="listbox"]');
    if (n !== undefined && (a == null ? undefined : a.clientHeight)) {
      var t = Array.from(a.querySelectorAll("[data-skill-value]")).find(
        (e) => e.dataset.skillValue === String(n),
      );
      if (t) {
        var i = a.getBoundingClientRect();
        var o = t.getBoundingClientRect();
        var r = i.height / a.offsetHeight;
        if (r) {
          var s = i.top + a.clientTop * r;
          var c = s + a.clientHeight * r;
          if (o.top < s) {
            a.scrollTop += (o.top - s) / r;
          } else if (o.bottom > c) {
            a.scrollTop += (o.bottom - c) / r;
          }
        }
      }
    }
  }, []);
  const onKeyDownCapture = d.useCallback(
    (e) => {
      z();
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        IRef.current = requestAnimationFrame(() => {
          IRef.current = requestAnimationFrame($);
        });
      }
    },
    [z, $],
  );
  const ref = d.useCallback(
    (e) => {
      WRef.current = e;
      if (!e) {
        z();
      }
    },
    [z],
  );
  const dropdownRender_1 = d.useCallback(
    (e) =>
      o.jsx("div", {
        ref,
        className: "skill-select-dropdown",
        onKeyDownCapture,
        onWheelCapture: z,
        onPointerDownCapture: z,
        children: dropdownRender ? dropdownRender(e) : e,
      }),
    [z, dropdownRender, ref, onKeyDownCapture],
  );
  const Z = d.useCallback(
    () =>
      o.jsxs(o.Fragment, {
        children: [
          skillIcon != null
            ? skillIcon
            : o.jsx(p.ThK, {
                size: 16,
              }),
          compact || iconOnly ? null : label,
        ],
      }),
    [compact, iconOnly, label, skillIcon],
  );
  const triggerProps_1 = d.useMemo(
    () =>
      a._(
        {
          position: "bl",
          popupAlign: {
            top: h,
            bottom: h,
          },
          autoAlignPopupWidth: false,
          containerScrollToClose: true,
        },
        triggerProps,
      ),
    [triggerProps],
  );
  const triggerElement_1 = d.useMemo(() => {
    if (!triggerElement || !d.isValidElement(triggerElement)) {
      return triggerElement;
    }
    var {
      tabIndex,
      onKeyDown: onKeyDown_1,
      onMouseEnter: onMouseEnter_1,
      onMouseLeave: onMouseLeave_1,
    } = triggerElement.props;
    return d.cloneElement(triggerElement, {
      tabIndex: tabIndex != null ? tabIndex : 0,
      onKeyDown: (e) => {
        var n;
        if (onKeyDown_1 != null) {
          onKeyDown_1(e);
        }
        if (onKeyDown != null) {
          onKeyDown(e);
        }
        if ((n = DRef.current) != null) {
          n.hotkeyHandler(e.nativeEvent);
        }
        onKeyDownCapture(e);
      },
      onMouseEnter: (e) => {
        if (onMouseEnter_1 != null) {
          onMouseEnter_1(e);
        }
        if (onMouseEnter != null) {
          onMouseEnter(e);
        }
      },
      onMouseLeave: (e) => {
        if (onMouseLeave_1 != null) {
          onMouseLeave_1(e);
        }
        if (onMouseLeave != null) {
          onMouseLeave(e);
        }
      },
    });
  }, [onKeyDownCapture, onKeyDown, onMouseEnter, onMouseLeave, triggerElement]);
  const onChange_1 = d.useCallback(
    (e) => {
      if (typeof e === "string" && onChange) {
        var l = options.find((l) => l.value === e);
        if (l) {
          onChange(e, l);
        }
      }
    },
    [onChange, options],
  );
  const onClick_1 = d.useCallback(
    (e) => {
      requestAnimationFrame(() => {
        var e;
        if ((e = DRef.current) != null) {
          e.focus();
        }
      });
      if (onClick != null) {
        onClick(e);
      }
    },
    [onClick],
  );
  const onKeyDown_1 = d.useCallback(
    (e) => {
      if (e.code === "Space") {
        var l;
        e.preventDefault();
        if ((l = DRef.current) != null) {
          l.dom.click();
        }
      }
      if (onKeyDown != null) {
        onKeyDown(e);
      }
      onKeyDownCapture(e);
    },
    [onKeyDownCapture, onKeyDown],
  );
  const children = d.useMemo(
    () =>
      options.map((e) =>
        o.jsx(
          r.A.Option,
          {
            value: e.value,
            disabled: e.disabled,
            extra: e.extra,
            "data-skill-value": e.value,
            children: e.label,
          },
          e.value,
        ),
      ),
    [options],
  );
  return o.jsx(
    r.A,
    t._(
      a._(
        {
          ref: DRef,
          renderFormat: renderFormat != null ? renderFormat : Z,
          dropdownMenuClassName: v.skillSelectDropdownMenu,
          dropdownMenuStyle,
          dropdownRender: dropdownRender_1,
          defaultActiveFirstOption: false,
          filterOption: false,
        },
        M,
      ),
      {
        arrowIcon: compact ? null : arrowIcon,
        className: _u(v.select, className, {
          [v.compact]: compact,
          [v.toolbarSelect]: E,
          [v.toolbarSkillSelect]: E,
        }),
        triggerProps: triggerProps_1,
        triggerElement: triggerElement_1,
        value,
        onChange: onChange_1,
        onClick: onClick_1,
        onKeyDown: onKeyDown_1,
        children,
      },
    ),
  );
}
