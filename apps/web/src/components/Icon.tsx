type IconName = 'select' | 'undo' | 'redo' | 'hand' | 'plus' | 'folder' | 'panel' | 'settings' | 'close' | 'more' | 'edit' | 'panel-right' | 'arrow-up' | 'stop' | 'play' | 'pause' | 'upload' | 'download' | 'model' | 'thinking' | 'sparkles' | 'sun' | 'moon' | 'chevron-down' | 'check' | 'file' | 'image' | 'video' | 'audio' | 'canvas' | 'storyboard' | 'timeline';

export function Icon({ name }: { name: IconName }) {
  return <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'select' && <path d="m5 3 14 9-7 1-4 7Z" />}
    {name === 'undo' && <path d="m9 5-5 5 5 5M4 10h10a6 6 0 0 1 0 12" />}
    {name === 'redo' && <path d="m15 5 5 5-5 5M20 10H10a6 6 0 0 0 0 12" />}
    {name === 'hand' && <path d="M8 13V6a2 2 0 0 1 4 0v6-9a2 2 0 0 1 4 0v9-6a2 2 0 0 1 4 0v9c0 5-3 7-7 7h-1c-2 0-3-1-4-3l-4-6a2 2 0 0 1 3-2l1 2Z" />}
    {name === 'canvas' && <><path d="m12 3 10 5-10 5L2 8Zm-9 9 9 5 9-5M3 16l9 5 9-5" /></>}
    {name === 'storyboard' && <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>}
    {name === 'timeline' && <><rect x="2" y="2" width="20" height="20" rx="2" /><path d="M7 2v20M17 2v20M2 7h5M2 12h20M2 17h5M17 7h5M17 17h5" /></>}
    {name === 'panel-right' && <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M15 4v16M18 9v6" /></>}
    {name === 'arrow-up' && <path d="M12 19V5m-6 6 6-6 6 6" />}
    {name === 'stop' && <rect x="7" y="7" width="10" height="10" rx="1" fill="currentColor" stroke="none" />}
    {name === 'play' && <path d="m8 5 11 7-11 7Z" fill="currentColor" stroke="none" />}
    {name === 'pause' && <g fill="currentColor" stroke="none"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></g>}
    {name === 'upload' && <><path d="M12 16V3m-4 4 4-4 4 4M4 16v5h16v-5" /></>}
    {name === 'download' && <path d="M12 3v13m-4-4 4 4 4-4M4 16v5h16v-5" />}
    {name === 'model' && <><path d="m12 3 9 5-9 5-9-5Zm-9 5v9l9 5 9-5V8M12 13v9" /></>}
    {name === 'thinking' && <><path d="M9 18v3h6v-3M8 15a6 6 0 1 1 8 0l-1 3H9Z" /><path d="M10 8h4M12 6v4" /></>}
    {name === 'sparkles' && <><path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5ZM20 2v4m-2-2h4" /></>}
    {name === 'chevron-down' && <path d="m7 10 5 5 5-5" />}
    {name === 'sun' && <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>}
    {name === 'moon' && <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />}
    {name === 'check' && <path d="m5 12 4 4L19 6" />}
    {name === 'file' && <><path d="M14 3H5v18h14V8Zm0 0v5h5M8 13h8M8 17h5" /></>}
    {name === 'video' && <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3Z" /></>}
    {name === 'image' && <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8" cy="8" r="1.5" /><path d="m3 17 5-5 4 4 4-6 5 7" /></>}
    {name === 'audio' && <><path d="M9 18V5l11-2v13M9 9l11-2" /><ellipse cx="6" cy="18" rx="3" ry="3" /><ellipse cx="17" cy="16" rx="3" ry="3" /></>}
    {name === 'more' && <><circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="12" cy="19" r="1" /></>}
    {name === 'edit' && <><path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-5-5L4 14Z" /></>}
    {name === 'plus' && <path d="M12 5v14M5 12h14" />}
    {name === 'folder' && <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10H3Z" />}
    {name === 'panel' && <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M6 9v6" /></>}
    {name === 'settings' && <><path d="m9 3-.6 2.2-2 .9-2-.6-2 3.5L4 10.6v2.8l-1.6 1.7 2 3.5 2-.6 2 .9L9 21h4l.6-2.1 2-.9 2 .6 2-3.5-1.6-1.7v-2.8L19.6 9l-2-3.5-2 .6-2-.9L13 3Z" /><circle cx="11" cy="12" r="3" /></>}
    {name === 'close' && <path d="m6 6 12 12M18 6 6 18" />}
  </svg>;
}
