import type { ReactNode, RefObject } from "react";

/** Shared prompt-and-bottom-controls layout for Agent and media generation. */
export function GenerationComposerShell({
  composerRef,
  label,
  running,
  onEscape,
  children,
}: {
  composerRef: RefObject<HTMLDivElement | null>;
  label: string;
  running: boolean;
  onEscape: () => void;
  children: ReactNode;
}) {
  return (
    <div
      ref={composerRef}
      className={`cw-composer nodrag nopan nowheel${running ? " cw-composer-running" : ""}`}
      aria-label={label}
      aria-busy={running}
      onPointerDown={(event) => event.stopPropagation()}
      onKeyDown={(event) => {
        event.stopPropagation();
        if (event.key === "Escape") onEscape();
      }}
    >
      {children}
    </div>
  );
}
