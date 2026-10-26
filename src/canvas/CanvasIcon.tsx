import type { ReactNode, SVGProps } from "react";

export interface CanvasIconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: string;
  size?: number;
}

/** Small authored icons shared by the canvas controls and node views. */
export function CanvasIcon({ name, size = 18, ...props }: CanvasIconProps) {
  const icons: Record<string, ReactNode> = {
    image: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="8" cy="8" r="1.4" />
        <path d="m4 17 5-5 4 4 3-3 5 5" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="4" />
        <path d="m10 8 6 4-6 4Z" />
      </>
    ),
    audio: (
      <>
        <path d="M9 18V5l11-2v13M9 9l11-2" />
        <ellipse cx="6" cy="18" rx="3" ry="2.5" />
        <ellipse cx="17" cy="16" rx="3" ry="2.5" />
      </>
    ),
    text: (
      <>
        <path d="M4 5h16M12 5v15M8 20h8M4 5v3M20 5v3" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z" />
        <path d="M14 3v6h6M8 13h8M8 17h5" />
      </>
    ),
    group: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" strokeDasharray="3 3" />
        <rect x="7" y="7" width="10" height="10" rx="2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    minus: <path d="M5 12h14" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    pencil: (
      <>
        <path d="m14 5 5 5M4 20l4-1 12-12a2.1 2.1 0 0 0-3-3L5 16Z" />
      </>
    ),
    edit: (
      <>
        <path d="m14 5 5 5M4 20l4-1 12-12a2.1 2.1 0 0 0-3-3L5 16Z" />
      </>
    ),
    tag: (
      <>
        <path d="m3 12 9 9 9-9-9-9H3Z" />
        <circle cx="8" cy="8" r="1" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V3m-5 5 5-5 5 5M4 16v4h16v-4" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v13m-5-5 5 5 5-5M4 16v4h16v-4" />
      </>
    ),
    arrowUp: <path d="M12 20V4m-6 6 6-6 6 6" />,
    arrowRight: <path d="M4 12h16m-6-6 6 6-6 6" />,
    arrowLeft: <path d="M20 12H4m6-6-6 6 6 6" />,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    chevronRight: <path d="m9 6 6 6-6 6" />,
    camera: (
      <>
        <path d="M8 6 10 3h4l2 3h4a1 1 0 0 1 1 1v12H3V7a1 1 0 0 1 1-1Z" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    palette: (
      <>
        <path d="M12 3a9 9 0 0 0 0 18h1a2 2 0 0 0 1-3.7 1.7 1.7 0 0 1 1-3.1H17a4 4 0 0 0 4-4A9 9 0 0 0 12 3Z" />
        <circle cx="7.5" cy="10" r=".7" />
        <circle cx="10" cy="6.5" r=".7" />
        <circle cx="15" cy="7" r=".7" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4M18 4h4" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 7h5m4 0h7M4 17h9m4 0h3" />
        <circle cx="11" cy="7" r="2" />
        <circle cx="15" cy="17" r="2" />
      </>
    ),
    stop: <rect x="6" y="6" width="12" height="12" rx="2" />,
    play: <path d="m7 4 14 8-14 8Z" />,
    link: (
      <>
        <path d="m9 15 6-6M8 17l-1 1a4.2 4.2 0 0 1-6-6l4-4a4.2 4.2 0 0 1 6 0m2 8a4.2 4.2 0 0 0 6 0l4-4a4.2 4.2 0 0 0-6-6l-1 1" />
      </>
    ),
    preview: (
      <>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    crop: (
      <>
        <path d="M6 2v16h16M2 6h16v16M10 6h8M6 10v8" />
      </>
    ),
    rotate: (
      <>
        <path d="M4 10a8 8 0 1 1 1 8M4 4v6h6" />
      </>
    ),
    flip: (
      <>
        <path d="M12 2v20M3 6l5 6-5 6ZM21 6l-5 6 5 6Z" />
      </>
    ),
    trash: (
      <>
        <path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7M14 10v7" />
      </>
    ),
    duplicate: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V4H4v12h4" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="3" />
        <path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3" />
      </>
    ),
    unlock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="3" />
        <path d="M8 10V6a4 4 0 0 1 7-2M12 14v3" />
      </>
    ),
    undo: (
      <>
        <path d="M4 4v6h6M4 10c4-6 16-5 16 3a7 7 0 0 1-7 7" />
      </>
    ),
    redo: (
      <>
        <path d="M20 4v6h-6M20 10C16 4 4 5 4 13a7 7 0 0 0 7 7" />
      </>
    ),
    hand: (
      <>
        <path d="M8 12V5a2 2 0 0 1 4 0v7-9a2 2 0 0 1 4 0v9-7a2 2 0 0 1 4 0v10c0 4-3 6-7 6-2 0-4-1-5-3l-5-6a2 2 0 0 1 3-2l2 2Z" />
      </>
    ),
    cursor: <path d="m5 3 15 10-7 1-3 7Z" />,
    fit: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M8 8h8v8H8Z" />,
    zoomIn: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="m16 16 5 5M7 10h6M10 7v6" />
      </>
    ),
    zoomOut: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="m16 16 5 5M7 10h6" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    folder: <path d="M3 7V4h7l3 3h8v13H3Z" />,
    history: (
      <>
        <path d="M3 5v6h6M3 11a9 9 0 1 1 2 7M12 7v5l3 2" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 6-10 6L2 9ZM2 13l10 6 10-6M2 17l10 6 10-6" />
      </>
    ),
    fullscreen: <path d="M3 9V3h6m6 0h6v6M3 15v6h6m6 0h6v-6" />,
    volume: (
      <>
        <path d="M11 4 6 8H2v8h4l5 4ZM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="m16 16 5 5" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17h.01" />
      </>
    ),
    star: (
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9Z" />
    ),
  };
  const aliases: Record<string, string> = {
    pointer: "cursor",
    map: "fit",
    chevron: "chevronDown",
    settings: "sliders",
    arrow: "arrowUp",
    back: "arrowLeft",
    film: "video",
    expand: "fullscreen",
    copy: "duplicate",
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {icons[aliases[name] ?? name] ?? icons.file}
    </svg>
  );
}

export default CanvasIcon;
