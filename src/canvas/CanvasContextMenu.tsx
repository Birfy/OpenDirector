import {
  useLayoutEffect,
  useRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";

/** Fit the measured content, including optional editor and layer commands, inside the viewport. */
export function CanvasContextMenu({
  x,
  y,
  children,
  anchor,
  className = "",
  ...props
}: {
  x: number;
  y: number;
  children: ReactNode;
  anchor?: HTMLElement | null;
} & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const position = () => {
      const { width, height } = element.getBoundingClientRect();
      const rect = anchor?.getBoundingClientRect();
      const parent =
        anchor?.closest(".cw-context-menu")?.getBoundingClientRect() ?? rect;
      const left = rect
        ? parent!.right + width + 6 <= window.innerWidth - 8
          ? parent!.right + 6
          : parent!.left - width - 6
        : x;
      element.style.left = `${Math.max(8, Math.min(left, window.innerWidth - width - 8))}px`;
      element.style.top = `${Math.max(64, Math.min(rect?.top ?? y, window.innerHeight - height - 16))}px`;
    };
    position();
    const observer = new ResizeObserver(position);
    observer.observe(element);
    if (anchor) observer.observe(anchor);
    window.addEventListener("resize", position);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", position);
    };
  }, [x, y, anchor]);
  return (
    <div
      {...props}
      ref={ref}
      className={`cw-context-menu ${className}`}
      role="menu"
      style={{ left: x, top: y }}
    >
      {children}
    </div>
  );
}
