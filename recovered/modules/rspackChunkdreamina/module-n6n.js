import a from "oa";
import r from "bk";
import o from "qa";
import l from "z8";
import i from "Qey";
import c from "bT";
import _s from "xb";
import { R } from "./module-Du8.js";
import { f as f_1 } from "./module-Lt.js";
var v = c.memo(
  c.forwardRef(function (e, ref) {
    const {
      className,
      renderGeneratorMainContent,
      renderGeneratorReferences,
      renderGeneratorSubmitButton,
      renderGeneratorToolbar,
      onClick,
      onFocus,
    } = e;
    const g = o._(e, [
      "className",
      "renderGeneratorMainContent",
      "renderGeneratorReferences",
      "renderGeneratorSubmitButton",
      "renderGeneratorToolbar",
      "onClick",
      "onFocus",
    ]);
    const { appearance, collapsed, promptShrunk, onCollapsedChange } =
      c.useContext(R);
    const w = c.useMemo(() => {
      if (renderGeneratorReferences == null) {
        return undefined;
      }
      return renderGeneratorReferences();
    }, [renderGeneratorReferences]);
    const submitButton = c.useMemo(() => {
      if (renderGeneratorSubmitButton == null) {
        return undefined;
      }
      return renderGeneratorSubmitButton();
    }, [renderGeneratorSubmitButton]);
    const _ = c.useMemo(() => {
      if (renderGeneratorToolbar == null) {
        return undefined;
      }
      return renderGeneratorToolbar({
        submitButton,
      });
    }, [renderGeneratorToolbar, submitButton]);
    const j = c.useMemo(() => {
      if (renderGeneratorMainContent == null) {
        return undefined;
      }
      return renderGeneratorMainContent();
    }, [renderGeneratorMainContent]);
    const onClick_1 = c.useCallback(
      (e) => {
        if (onClick != null) {
          onClick(e);
        }
        if (collapsed || promptShrunk) {
          if (onCollapsedChange != null) {
            onCollapsedChange(false);
          }
        }
      },
      [collapsed, promptShrunk, onCollapsedChange, onClick],
    );
    const onFocus_1 = c.useCallback(
      (e) => {
        if (onFocus != null) {
          onFocus(e);
        }
        if (promptShrunk) {
          if (onCollapsedChange != null) {
            onCollapsedChange(false);
          }
        }
      },
      [promptShrunk, onCollapsedChange, onFocus],
    );
    return l.jsxs(
      "div",
      r._(
        a._(
          {
            ref,
            role: "region",
            "aria-label": i.Ay.t("web_new_generate", {}, "生成"),
            "data-testid": "dreamina.generator",
          },
          g,
        ),
        {
          className: _s("layout-kiCJ68", className, {
            "main-frame-2026-MQUmCl": f_1(appearance),
            "collapsed-u3XpUS": collapsed,
          }),
          onClick: onClick_1,
          onFocus: onFocus_1,
          children: [
            l.jsxs("div", {
              className: "content-Eltzs6",
              children: [w, j],
            }),
            _,
          ],
        },
      ),
    );
  }),
);
export { v as l };
