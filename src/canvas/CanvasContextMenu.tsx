import { useLayoutEffect, useRef, type ReactNode } from "react";

/** Fit the measured content, including optional editor and layer commands, inside the viewport. */
export function CanvasContextMenu({
  x,
  y,
  children,
}: {
  x: number;
  y: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    const position = () => {
      const { width, height } = element.getBoundingClientRect();
      element.style.left = `${Math.max(8, Math.min(x, window.innerWidth - width - 8))}px`;
      element.style.top = `${Math.max(64, Math.min(y, window.innerHeight - height - 16))}px`;
    };
    position();
    const observer = new ResizeObserver(position);
    observer.observe(element);
    window.addEventListener("resize", position);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", position);
    };
  }, [x, y]);
  return (
    <div
      ref={ref}
      className="cw-context-menu"
      role="menu"
      style={{ left: x, top: y }}
    >
      {children}
    </div>
  );
}
