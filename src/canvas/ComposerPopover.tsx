import { useLayoutEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { composerPopoverPlacement } from "./composerPopoverGeometry";

export function ComposerPopover({
  anchor,
  composer,
  className,
  label,
  onClose,
  children,
  placement: placementMode = "outside-composer",
}: {
  anchor: HTMLElement | null;
  composer: HTMLElement | null;
  className: string;
  label: string;
  onClose: () => void;
  children: ReactNode;
  placement?: "outside-composer" | "above-anchor";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useLayoutEffect(() => {
    const panel = ref.current;
    if (!panel || !anchor || !composer) return;
    let frame = 0;
    let previous = "";
    const place = () => {
      const visual = window.visualViewport;
      const left = visual?.offsetLeft ?? 0;
      const top = visual?.offsetTop ?? 0;
      const composerRect = composer.getBoundingClientRect();
      const scale = composer.offsetWidth
        ? composerRect.width / composer.offsetWidth
        : 1;
      const placement = composerPopoverPlacement(
        anchor.getBoundingClientRect(),
        composerRect,
        {
          width: panel.offsetWidth * scale,
          height:
            (panel.scrollHeight + panel.offsetHeight - panel.clientHeight) *
            scale,
        },
        {
          left,
          top,
          right: left + (visual?.width ?? window.innerWidth),
          bottom: top + (visual?.height ?? window.innerHeight),
        },
        placementMode,
      );
      const next = JSON.stringify({ ...placement, scale });
      if (next !== previous) {
        Object.assign(panel.style, {
          left: `${placement.left}px`,
          top: `${placement.top}px`,
          maxWidth: `${placement.maxWidth / scale}px`,
          maxHeight: `${placement.maxHeight / scale}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          visibility: "visible",
        });
        previous = next;
      }
      // Canvas reveal animations move the trigger without resizing it. Follow
      // that real geometry only for the lifetime of an open popover.
      frame = requestAnimationFrame(place);
    };
    place();
    const dismiss = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !panel.contains(event.target) &&
        !anchor.contains(event.target)
      )
        closeRef.current();
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      event.stopPropagation();
      // Closing an option list must not steal the prompt's insertion point.
      if (panel.contains(document.activeElement))
        anchor.focus({ preventScroll: true });
      closeRef.current();
    };
    document.addEventListener("pointerdown", dismiss, true);
    document.addEventListener("keydown", escape, true);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("pointerdown", dismiss, true);
      document.removeEventListener("keydown", escape, true);
    };
  }, [anchor, composer, placementMode]);

  return createPortal(
    <div
      ref={ref}
      className={`cw-popover cw-composer-popover nodrag nopan nowheel ${className}`}
      role="dialog"
      aria-label={label}
      style={{ visibility: "hidden" }}
      onPointerDown={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
      onWheel={(event) => event.stopPropagation()}
    >
      {children}
    </div>,
    document.body,
  );
}
