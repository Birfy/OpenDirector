import { loadAsset } from '../assets/api';
import { errorMessage } from '../../lib/api';
import { downloadableVideo } from './videoDownload';
import { Feedback } from '../../components/Feedback';
import { useCallback, useEffect, useId, useRef, useState, type PointerEvent } from 'react';
import { Icon } from '../../components/Icon';
import { IMPORT_ACCEPT } from '../assets/types';
import type { ModelCatalog } from '../settings/hooks/useModelConfigs';
import { CanvasNode } from './CanvasNode';
import { CanvasMenu, type MenuState } from './CanvasMenu';
import { ExistingAssets } from './ExistingAssets';
import { useNodeDetails } from './useNodeDetails';
import { useCanvasPlayback } from './useCanvasPlayback';
import { edgePath } from './edgePath';
import { useCanvasConnections } from './useCanvasConnections';
import { MIN_ZOOM, NODE_SIZE, type CanvasNode as Node, type NodeKind } from './types';
import type { ProjectCanvas as CanvasControls } from './useProjectCanvas';
import { intersectingNodes, moveSelection, selectionRect, type NodeBounds, type NodeOrigin, type Point } from './selection';
import './canvas.css';

interface Viewport { x: number; y: number; zoom: number }
type PointerPosition = Pick<PointerEvent, 'pointerId' | 'clientX' | 'clientY'>;
type Gesture = { pointer: number; clientX: number; clientY: number; moved: boolean } & (
  { kind: 'pan'; x: number; y: number } |
  { kind: 'move'; primaryId: string; origins: NodeOrigin[]; zoom: number } |
  { kind: 'toggle'; ids: string[] } |
  { kind: 'select'; start: Point; bounds: NodeBounds[]; before: string[]; base: string[]; zoom: number; extend: boolean }
);
export function ProjectCanvas({ projectId, canvas, models, active, onReferenceSelection, pendingReferenceCount, assistantCollapsed, onShowAssistant }: { onReferenceSelection: (ids: string[], extend?: boolean) => void; pendingReferenceCount: number; assistantCollapsed: boolean; onShowAssistant: () => void; projectId: string; canvas: CanvasControls; models: ModelCatalog; active: boolean }) {
  const arrowId = useId();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const playback = useCanvasPlayback(active && pageVisible);
  useEffect(() => {
    const visibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', visibility);
    return () => document.removeEventListener('visibilitychange', visibility);
  }, []);
  useEffect(() => { if (!active) setHoveredId(null); }, [active]);
  const [viewport, setViewport] = useState<Viewport>(() => {
    try { const saved = JSON.parse(localStorage.getItem(`museshow.canvas.${projectId}`) ?? 'null'); if (saved && [saved.x, saved.y, saved.zoom].every(Number.isFinite) && saved.zoom >= MIN_ZOOM && saved.zoom <= 2) return saved; } catch {}
    return { x: 0, y: 0, zoom: 1 };
  });
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [sizes, setSizes] = useState<Record<string, typeof NODE_SIZE>>({});
  const details = useNodeDetails(canvas.snapshot?.canvas.nodes ?? []);
  const [panMode, setPanMode] = useState(false);
  const [spaceHeld, setSpaceHeld] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [selectedEdge, setSelectedEdge] = useState<{ sourceId: string; targetId: string } | null>(null);
  const [marquee, setMarquee] = useState<{ start: Point; end: Point } | null>(null);
  const moving = useRef(false);
  const [menu, setMenu] = useState<MenuState | null>(null);
  const [downloadError, setDownloadError] = useState('');
  const [downloading, setDownloading] = useState(false);
  const downloadRequest = useRef<AbortController | null>(null);
  useEffect(() => () => { downloadRequest.current?.abort(); }, [projectId]);
  const [existing, setExisting] = useState(false);
  const [arranging, setArranging] = useState(false);
  const layoutRequest = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const gesture = useRef<Gesture | null>(null);
  const referenceClick = useRef<{ ids: string[]; extend: boolean } | null>(null);
  const draggedUntil = useRef(0);
  const handledFocusVersion = useRef(canvas.focusVersion);
  const alive = useRef(true);
  useEffect(() => { alive.current = true; return () => { alive.current = false; }; }, []);
  const closeMenu = useCallback(() => setMenu(null), []);
  const resizeNode = useCallback((id: string, size: typeof NODE_SIZE | null) => {
    setSizes(current => {
      if (size ? current[id]?.width === size.width && current[id]?.height === size.height : !current[id]) return current;
      const next = { ...current };
      if (size) next[id] = size;
      else delete next[id];
      return next;
    });
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => { try { localStorage.setItem(`museshow.canvas.${projectId}`, JSON.stringify(viewport)); } catch {} }, 150);
    return () => clearTimeout(timer);
  }, [projectId, viewport]);
  function zoom(delta: number, clientX?: number, clientY?: number) {
    const rect = root.current!.getBoundingClientRect();
    const x = (clientX ?? rect.left + rect.width / 2) - rect.left;
    const y = (clientY ?? rect.top + rect.height / 2) - rect.top;
    setViewport(old => { const next = Math.min(2, Math.max(MIN_ZOOM, old.zoom * delta)); return { zoom: next, x: x - (x - old.x) * next / old.zoom, y: y - (y - old.y) * next / old.zoom }; });
  }
  useEffect(() => {
    const element = root.current!;
    function wheel(event: WheelEvent) {
      if (gesture.current) { event.preventDefault(); return; }
      if ((event.target as HTMLElement).closest('.canvas-text-content,.canvas-notices,textarea,select,video,audio')) return;
      event.preventDefault();
      if (event.ctrlKey || event.metaKey) zoom(Math.exp(-event.deltaY * .002), event.clientX, event.clientY);
      else setViewport(old => ({ ...old, x: old.x - event.deltaX, y: old.y - event.deltaY }));
    }
    element.addEventListener('wheel', wheel, { passive: false });
    return () => element.removeEventListener('wheel', wheel);
  }, []);
  function world(clientX: number, clientY: number) {
    const rect = root.current!.getBoundingClientRect();
    return { x: (clientX - rect.left - viewport.x) / viewport.zoom, y: (clientY - rect.top - viewport.y) / viewport.zoom };
  }
  function openMenu(clientX: number, clientY: number, adding: boolean, nodeId?: string) {
    const point = world(clientX, clientY);
    setMenu({ x: clientX, y: clientY, worldX: point.x, worldY: point.y, adding, nodeId });
  }
  function beginGesture(event: PointerEvent, value: Gesture) {
    event.preventDefault(); event.stopPropagation();
    root.current?.focus({ preventScroll: true }); closeMenu();
    gesture.current = value; setInteracting(true);
    details.suspend(true);
    // Keep the original click target until movement confirms a drag. Capturing
    // on pointerdown would redirect clicks to the canvas and swallow dblclick.
    if (value.kind === 'pan' || value.kind === 'select') root.current?.setPointerCapture(event.pointerId);
  }
  function beginPan(event: PointerEvent) {
    beginGesture(event, { kind: 'pan', pointer: event.pointerId, clientX: event.clientX, clientY: event.clientY, moved: false, x: viewport.x, y: viewport.y });
  }
  function startDrag(event: PointerEvent, node: Node) {
    if (event.button !== 0 || connecting || layoutRequest.current || canvas.busy || moving.current || gesture.current) return;
    if (panMode || spaceHeld) { beginPan(event); return; }
    if (event.shiftKey) {
      const ids = canvas.selectedIds.includes(node.id) ? canvas.selectedIds.filter(id => id !== node.id) : [...canvas.selectedIds, node.id];
      canvas.setSelectedIds(ids);
      beginGesture(event, { kind: 'toggle', pointer: event.pointerId, clientX: event.clientX, clientY: event.clientY, moved: false, ids });
      return;
    }
    const ids = canvas.selectedIds.includes(node.id) ? canvas.selectedIds : [node.id];
    canvas.setSelectedIds(ids);
    const origins = (canvas.snapshot?.canvas.nodes ?? []).filter(item => ids.includes(item.id)).map(({ id, x, y }) => ({ id, x, y }));
    beginGesture(event, { kind: 'move', pointer: event.pointerId, clientX: event.clientX, clientY: event.clientY, moved: false, primaryId: node.id, origins, zoom: viewport.zoom });
  }
  const cancelGesture = useCallback(() => {
    referenceClick.current = null;
    const current = gesture.current; gesture.current = null;
    if (current?.kind === 'select') canvas.setSelectedIds(current.before);
    if (current?.kind === 'pan') setViewport(old => ({ ...old, x: current.x, y: current.y }));
    setPositions({}); setMarquee(null); setInteracting(false);
    if (current && root.current?.hasPointerCapture(current.pointer)) root.current.releasePointerCapture(current.pointer);
  }, [canvas.setSelectedIds]);
  useEffect(() => {
    function keyup(event: KeyboardEvent) { if (event.code === 'Space') setSpaceHeld(false); }
    function blur() { setSpaceHeld(false); if (gesture.current) cancelGesture(); }
    window.addEventListener('keyup', keyup); window.addEventListener('blur', blur);
    return () => { window.removeEventListener('keyup', keyup); window.removeEventListener('blur', blur); };
  }, [cancelGesture]);
  useEffect(() => { if (!active) { setSpaceHeld(false); if (gesture.current) cancelGesture(); } }, [active, cancelGesture]);
  const assets = new Map(canvas.snapshot?.assets.map(asset => [asset.id, asset]));
  function sizeOf(node: Node) {
    const measured = sizes[node.id];
    const asset = assets.get(node.assetId ?? '');
    if (asset && (asset.kind === 'image' || asset.kind === 'video') && asset.width && asset.height) return { width: NODE_SIZE.width, height: Math.max(measured?.height ?? 0, NODE_SIZE.width * asset.height / asset.width + 44) };
    return measured ?? NODE_SIZE;
  }
  function fit(nodes = canvas.snapshot?.canvas.nodes ?? []) {
    if (!nodes.length) { setViewport({ x: 0, y: 0, zoom: 1 }); return; }
    const rect = root.current?.getBoundingClientRect();
    if (!rect?.width || !rect.height) return;
    const left = Math.min(...nodes.map(node => node.x)), top = Math.min(...nodes.map(node => node.y)) - 44;
    const width = Math.max(...nodes.map(node => node.x + sizeOf(node).width)) - left;
    const height = Math.max(...nodes.map(node => node.y + sizeOf(node).height)) - top;
    const scale = Math.max(MIN_ZOOM, Math.min(1, Math.max(1, rect.width - 60) / width, Math.max(1, rect.height - 164) / height));
    setViewport({ zoom: scale, x: (rect.width - width * scale) / 2 - left * scale, y: 76 - top * scale });
  }
  function showLayoutStart(nodes: Node[]) {
    const rect = root.current?.getBoundingClientRect();
    if (!nodes.length || !rect?.width || !rect.height) return;
    const left = Math.min(...nodes.map(node => node.x)), top = Math.min(...nodes.map(node => node.y));
    // Keep cards readable regardless of how many columns the layout contains.
    const maximum = Math.min(1, Math.max(MIN_ZOOM, (rect.width - 64) / NODE_SIZE.width));
    setViewport(old => {
      const scale = Math.min(maximum, Math.max(.75, old.zoom));
      return { zoom: scale, x: 32 - left * scale, y: 32 - top * scale };
    });
  }
  async function arrangeLayout() {
    if (!canvas.snapshot || canvas.busy || layoutRequest.current || gesture.current) return;
    layoutRequest.current = true; setArranging(true); closeMenu();
    try {
      const result = await canvas.arrange(Object.fromEntries(Object.entries(sizes).map(([id, size]) => [id, size.height])));
      if (alive.current) showLayoutStart(result.nodes);
    } catch { /* The shared canvas notice reports errors; never replay writes. */ }
    finally { layoutRequest.current = false; if (alive.current) setArranging(false); }
  }
  function history(direction: 'undo' | 'redo') {
    if (layoutRequest.current || gesture.current) return;
    closeMenu();
    void canvas.history(direction).catch(() => {});
  }
  const nodes = (canvas.snapshot?.canvas.nodes ?? []).map(node => ({ ...node, ...(positions[node.id] ?? {}) }));
  async function connectNodes(...args: Parameters<CanvasControls['connect']>) {
    if (!args[2]) {
      await canvas.flush();
      if (!details.show(args[1], false)) return;
      canvas.selectNode(args[1]);
    }
    try { return await canvas.connect(...args); }
    catch (failure) { if (args[2]) details.show(args[0], false); throw failure; }
  }
  const connections = useCanvasConnections({ nodes, sizeOf: node => sizes[node.id] ?? sizeOf(node), world, zoom: viewport.zoom,
    disabled: !active || canvas.busy || interacting || panMode || spaceHeld, connect: connectNodes, onBusy: setConnecting });
  useEffect(() => { details.suspend(!active || interacting || connecting || !!connections.menu || canvas.selectedIds.length > 1, connections.port?.nodeId ?? null); }, [active, interacting, connecting, connections.port?.nodeId, !!connections.menu, canvas.selectedIds.length, details.suspend]);
  const edges = canvas.snapshot?.edges ?? [];
  const nodeIndex = new Map(nodes.map(node => [node.id, node]));
  const edgePairs = new Set(edges.map(edge => `${edge.sourceId}:${edge.targetId}`));
  useEffect(() => { if (selectedEdge && !edges.some(edge => edge.sourceId === selectedEdge.sourceId && edge.targetId === selectedEdge.targetId)) setSelectedEdge(null); }, [canvas.snapshot?.canvas.revision]);
  function disconnectSelected() {
    if (!selectedEdge || canvas.busy) return;
    void canvas.disconnect(selectedEdge.sourceId, selectedEdge.targetId).then(() => setSelectedEdge(null)).catch(() => {});
  }
  const selectedSize = sizes[canvas.focusedId ?? ''];
  useEffect(() => {
    // Pointer selection preserves the viewport; only explicit focus requests move it.
    if (handledFocusVersion.current === canvas.focusVersion) return;
    const node = nodes.find(item => item.id === canvas.focusedId);
    const rect = root.current?.getBoundingClientRect();
    if (!node || !rect?.width || !rect.height) return;
    handledFocusVersion.current = canvas.focusVersion;
    if (gesture.current) return;
    details.show(node.id, false);
    const size = selectedSize ?? NODE_SIZE;
    if (node.x * viewport.zoom + viewport.x < 0 || (node.x + size.width) * viewport.zoom + viewport.x > rect.width || node.y * viewport.zoom + viewport.y < 0 || (node.y + size.height) * viewport.zoom + viewport.y > rect.height) {
      setViewport(old => ({ ...old, x: (rect.width - size.width * old.zoom) / 2 - node.x * old.zoom, y: 20 - node.y * old.zoom }));
    }
  }, [canvas.focusedId, canvas.focusVersion, nodes.length, selectedSize]);
  const menuNode = nodes.find(node => node.id === menu?.nodeId);
  const menuVideo = downloadableVideo(canvas.snapshot, menu?.nodeId);
  async function downloadVideo() {
    const asset = downloadableVideo(canvas.snapshot, menu?.nodeId);
    if (!asset || downloadRequest.current) return;
    const controller = new AbortController();
    downloadRequest.current = controller;
    setDownloading(true); setDownloadError(''); closeMenu();
    try {
      const blob = await loadAsset(projectId, asset.id, controller.signal);
      if (controller.signal.aborted || !alive.current) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = asset.name;
      document.body.append(link); link.click(); link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (failure) {
      if (!controller.signal.aborted && alive.current) setDownloadError(`视频下载失败：${errorMessage(failure)} 请右键视频节点重试。`);
    } finally {
      if (downloadRequest.current === controller) downloadRequest.current = null;
      if (alive.current) setDownloading(false);
    }
  }
  const taskCount = canvas.snapshot?.tasks.filter(task => task.status === 'queued' || task.status === 'running').length ?? 0;
  function add(kind: NodeKind) {
    if (menu) void canvas.create(kind, menu.worldX, menu.worldY).catch(() => {});
    setMenu(null);
  }
  function updateGesture(event: PointerPosition) {
    const current = gesture.current;
    if (!current || current.pointer !== event.pointerId) return;
    const dx = event.clientX - current.clientX, dy = event.clientY - current.clientY;
    if (!current.moved && Math.hypot(dx, dy) < 4) return;
    if (!current.moved && current.kind === 'move') root.current?.setPointerCapture(event.pointerId);
    current.moved = true;
    if (current.kind === 'pan') setViewport(old => ({ ...old, x: current.x + dx, y: current.y + dy }));
    else if (current.kind === 'move') setPositions(Object.fromEntries(moveSelection(current.origins, dx / current.zoom, dy / current.zoom).map(node => [node.id, { x: node.x, y: node.y }])));
    else if (current.kind === 'select') {
      const end = { x: current.start.x + dx / current.zoom, y: current.start.y + dy / current.zoom };
      setMarquee({ start: current.start, end });
      canvas.setSelectedIds([...new Set([...current.base, ...intersectingNodes(current.start, end, current.bounds)])]);
    }
  }
  function finishGesture(event: PointerPosition) {
    const current = gesture.current;
    if (!current || current.pointer !== event.pointerId) return;
    updateGesture(event); gesture.current = null; setMarquee(null); setInteracting(false);
    if (current.moved) draggedUntil.current = Date.now() + 400;
    if (root.current?.hasPointerCapture(event.pointerId)) root.current.releasePointerCapture(event.pointerId);
    if (current.kind === 'select' && current.moved) {
      const end = { x: current.start.x + (event.clientX - current.clientX) / current.zoom, y: current.start.y + (event.clientY - current.clientY) / current.zoom };
      onReferenceSelection([...new Set([...current.base, ...intersectingNodes(current.start, end, current.bounds)])], current.extend && pendingReferenceCount > 0);
    }
    if (current.kind === 'move' && current.moved) {
      const changes = moveSelection(current.origins, (event.clientX - current.clientX) / current.zoom, (event.clientY - current.clientY) / current.zoom);
      if (changes.some(node => node.x !== node.expectedX || node.y !== node.expectedY)) {
        moving.current = true;
        void canvas.moveNodes(changes).catch(() => {}).finally(() => { moving.current = false; if (alive.current) setPositions({}); });
      } else setPositions({});
    } else {
      setPositions({});
      if (current.kind === 'move') {
        canvas.setSelectedIds([current.primaryId]);
        referenceClick.current = { ids: [current.primaryId], extend: false };
      } else if (current.kind === 'toggle' && !current.moved) referenceClick.current = { ids: current.ids, extend: true };
    }
  }
  const gestureHandlers = useRef({ updateGesture, finishGesture });
  gestureHandlers.current = { updateGesture, finishGesture };
  useEffect(() => {
    if (!interacting) return;
    const move = (event: globalThis.PointerEvent) => gestureHandlers.current.updateGesture(event);
    const up = (event: globalThis.PointerEvent) => gestureHandlers.current.finishGesture(event);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', cancelGesture);
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', cancelGesture); };
  }, [interacting, cancelGesture]);
  function removeSelected() {
    if (!canvas.selectedIds.length || canvas.batchBusy || canvas.historyBusy || gesture.current || moving.current) return;
    void canvas.removeNodes(canvas.selectedIds).catch(() => {});
  }
  const box = marquee && selectionRect(marquee.start, marquee.end);
  return <div ref={root} className={`project-canvas${panMode || spaceHeld || (interacting && gesture.current?.kind === 'pan') ? ' is-panning' : ''}${marquee ? ' is-selecting' : ''}`} data-interacting={interacting} tabIndex={0} aria-label="项目画布" aria-busy={arranging} style={{ backgroundImage: viewport.zoom < .15 ? 'none' : undefined, backgroundSize: `${20 * viewport.zoom}px ${20 * viewport.zoom}px`, backgroundPosition: `${viewport.x}px ${viewport.y}px` }}
    onPointerMove={connections.hover} onPointerLeave={connections.hidePort}
    onClickCapture={event => { if (Date.now() < draggedUntil.current && (event.target === event.currentTarget || (event.target as HTMLElement).closest('.canvas-node'))) { event.preventDefault(); event.stopPropagation(); } }}
    onClick={event => {
      const selected = referenceClick.current; referenceClick.current = null;
      // Only a completed node gesture can produce a reference click. Controls,
      // scrollbars, keyboard activation and dragged nodes never create one.
      if (active && selected && event.detail === 1) onReferenceSelection(selected.ids, selected.extend && pendingReferenceCount > 0);
    }}
    onDoubleClickCapture={event => {
      if (Date.now() < draggedUntil.current && (event.target === event.currentTarget || (event.target as HTMLElement).closest('.canvas-node'))) { event.preventDefault(); event.stopPropagation(); return; }
      if ((event.target as HTMLElement).closest('.canvas-node') && !(event.target as HTMLElement).closest('button,input,textarea,select,[contenteditable="true"],.canvas-details-panel,dialog')) {
        referenceClick.current = null; onReferenceSelection([]);
      }
    }}
    onDragOver={event => { if (event.dataTransfer.types.includes('Files')) event.preventDefault(); }} onDrop={event => { if (event.dataTransfer.files.length) { event.preventDefault(); void canvas.importFiles([...event.dataTransfer.files]).catch(() => {}); } }}
    onContextMenu={event => {
      const target = event.target as HTMLElement;
      const nodeId = target.closest<HTMLElement>('[data-node-id]')?.dataset.nodeId;
      const node = nodes.find(item => item.id === nodeId);
      if (gesture.current || target.closest('textarea,input,select,[contenteditable="true"]')
        || (target.closest('video,audio') && (node?.kind !== 'video' || node.role === 'material'))) return;
      event.preventDefault(); openMenu(event.clientX, event.clientY, false, nodeId);
    }}
    onDoubleClick={event => { if (!(event.target as HTMLElement).closest('.canvas-node,.canvas-toolbar,.canvas-selection-actions')) openMenu(event.clientX, event.clientY, true); }}
    onKeyDownCapture={event => {
      if (!active || event.nativeEvent.isComposing || document.querySelector('dialog[open]') || (event.target as HTMLElement).closest('input,textarea,select,[contenteditable]:not([contenteditable="false"])')) return;
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && !event.altKey && ['z', 'y', 'a'].includes(key)) {
        event.preventDefault(); event.stopPropagation();
        if (event.repeat) return;
        if (key === 'a') { if (!gesture.current) canvas.setSelectedIds(nodes.map(node => node.id)); }
        else history(key === 'y' || event.shiftKey ? 'redo' : 'undo');
      } else if (event.code === 'Space' && !(event.target as HTMLElement).closest('button,video,audio,[data-canvas-open],.canvas-node-player')) {
        event.preventDefault(); setSpaceHeld(true);
      } else if (event.key === 'Escape' && gesture.current) {
        event.preventDefault(); event.stopPropagation(); cancelGesture();
      }
    }}
    onKeyDown={event => {
      if ((event.target as HTMLElement).closest('input,textarea,select,button,video,audio,[contenteditable]:not([contenteditable="false"])')) return;
      if (event.key === 'Escape') { closeMenu(); setSelectedEdge(null); canvas.setSelectedIds([]); }
      if ((event.key === 'Delete' || event.key === 'Backspace') && (selectedEdge || canvas.selectedIds.length)) { event.preventDefault(); if (!event.repeat) { if (selectedEdge) disconnectSelected(); else removeSelected(); } }
    }}
    onPointerDownCapture={event => {
      referenceClick.current = null;
      // A new press is a deliberate interaction, not the synthetic click that
      // follows the previous drag. Allow immediate selection after a marquee.
      if (event.button === 0) draggedUntil.current = 0;
      if (!(event.target as Element).closest('.canvas-edge-hit,.canvas-connection-actions')) setSelectedEdge(null);
      if (gesture.current || layoutRequest.current || (event.target as HTMLElement).closest('.canvas-toolbar,.canvas-selection-actions,.canvas-notice,.canvas-details-panel,dialog')) return;
      if (event.button === 1 || (spaceHeld && event.button === 0)) beginPan(event);
    }}
    onPointerDown={event => {
      if (connecting || gesture.current || layoutRequest.current || canvas.busy || moving.current || event.button !== 0 || (event.target as HTMLElement).closest('.canvas-node,.canvas-toolbar,.canvas-selection-actions,.canvas-notice,.canvas-details-panel,.canvas-edge-hit,dialog,button,input,textarea,select')) return;
      if (panMode) { beginPan(event); return; }
      const before = canvas.selectedIds;
      if (!event.shiftKey) canvas.setSelectedIds([]);
      beginGesture(event, { kind: 'select', pointer: event.pointerId, clientX: event.clientX, clientY: event.clientY, moved: false,
        start: world(event.clientX, event.clientY), bounds: nodes.map(node => ({ id: node.id, x: node.x, y: node.y, ...sizeOf(node) })),
        before, base: event.shiftKey ? before : [], zoom: viewport.zoom, extend: event.shiftKey });
    }}
    onPointerCancel={cancelGesture} onLostPointerCapture={() => { if (gesture.current) cancelGesture(); }}>
    <div className="canvas-transform" style={{ transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})` }}>
      <svg className="canvas-edges" width="1" height="1" data-motion={active && pageVisible}>
        <defs><marker id={arrowId} viewBox="0 0 8 8" refX="8" refY="4" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto"><path className="canvas-edge-arrow" d="M0,0 L8,4 L0,8 Z" /></marker></defs>
        {edges.map(edge => {
          const source = nodeIndex.get(edge.sourceId), node = nodeIndex.get(edge.targetId);
          if (!source || !node) return null;
          const sourceSize = sizes[source.id] ?? NODE_SIZE, targetSize = sizes[node.id] ?? NODE_SIZE;
          const selected = selectedEdge?.sourceId === source.id && selectedEdge.targetId === node.id;
          const highlighted = selected || [source.id, node.id].some(id => id === hoveredId || canvas.selectedIds.includes(id));
          const d = edgePath({ ...source, ...sourceSize }, { ...node, ...targetSize }, source.id !== node.id && edgePairs.has(`${node.id}:${source.id}`));
          const name = `${source.title || '参考源'} → ${node.title || '目标节点'}：${edge.state === 'current' ? '当前参考' : '待生成参考'}`;
          const versionName = (id: string) => `${assets.get(id)?.name ?? '参考缺失'} · v${source.assetIds.indexOf(id) + 1}`;
          const description = `${name}\n当前结果使用：${edge.usedAssetId ? versionName(edge.usedAssetId) : edge.recorded ? '未使用此参考' : '未记录'}\n下次生成使用：${edge.assetId ? versionName(edge.assetId) : '参考缺失'}`;
          return <g key={`${source.id}-${node.id}`} className={`canvas-edge-group${selected ? ' is-selected' : ''}`}>
            <path className={`canvas-edge is-${edge.state}${highlighted ? ' is-active' : ''}`} markerEnd={`url(#${arrowId})`} d={d} />
            {highlighted && <g className="canvas-edge-motion" aria-hidden="true">
              <path className="canvas-edge-glow" pathLength="100" d={d} />
              <path className="canvas-edge-trail" pathLength="100" d={d} />
              <path className="canvas-edge-head" pathLength="100" d={d} />
            </g>}
            <path className="canvas-edge-hit" d={d} role="button" tabIndex={0} aria-label={name} onPointerDown={event => { event.stopPropagation(); referenceClick.current = null; }} onClick={event => { event.stopPropagation(); setSelectedEdge({ sourceId: source.id, targetId: node.id }); canvas.setSelectedIds([]); root.current?.focus({ preventScroll: true }); }} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedEdge({ sourceId: source.id, targetId: node.id }); canvas.setSelectedIds([]); root.current?.focus({ preventScroll: true }); } }}><title>{description}</title></path>
          </g>;
        })}
        {connections.line && <path className="canvas-edge is-pending" markerEnd={`url(#${arrowId})`} d={connections.line} />}
      </svg>
      {box && <div className="canvas-selection-box" aria-hidden="true" style={{ left: box.x, top: box.y, width: box.width, height: box.height }} />}
      {nodes.map(node => <CanvasNode key={node.id} projectId={projectId} node={node} canvas={canvas} models={models} details={details} onDrag={startDrag} onResize={resizeNode} onHover={setHoveredId} playback={playback} previewEnabled={playback.previewEnabled && !interacting && !connecting && !panMode && !spaceHeld} />)}
      {connections.port && <button className="canvas-reference-port" data-reference-source={connections.port.nodeId} type="button" aria-label={`从${{ top: '上', right: '右', bottom: '下', left: '左' }[connections.port.side]}侧添加参考连线`} style={{ left: connections.port.point.x, top: connections.port.point.y }} onPointerDown={connections.start} onClick={event => { event.preventDefault(); event.stopPropagation(); }}><Icon name="plus" /></button>}
    </div>
    {!nodes.length && !canvas.loading && <div className="canvas-empty"><Icon name="canvas" /><p>从一个节点开始创作</p><span>双击或右键画布，添加文本、图片、视频或音频</span></div>}
    <div className="canvas-notices" aria-label="画布操作提示">
      {downloadError && <Feedback value={{ kind: 'error', message: downloadError }} className="canvas-notice" onDismiss={() => setDownloadError('')} />}
      {downloading && <p className="canvas-notice" role="status">正在准备视频下载…</p>}
      {canvas.loading && <p className="canvas-notice" role="status">正在读取画布…</p>}
      {Object.entries(canvas.feedback).filter(([key]) => key !== 'assets').map(([key, value]) => {
        const node = nodes.find(item => item.id === key);
        const label = node ? node.title || canvas.snapshot?.assets.find(asset => asset.id === node.assetId)?.name || `${node.kind === 'text' ? '文本' : node.kind === 'image' ? '图片' : node.kind === 'video' ? '视频' : '音频'}节点` : undefined;
        return <Feedback key={key} value={value} label={label} className="canvas-notice" onRead={() => canvas.readState(key)} readLabel="重新读取画布" onDismiss={() => canvas.dismissFeedback(key)} />;
      })}
    </div>
    {selectedEdge && <div className="canvas-selection-actions canvas-connection-actions" role="toolbar" aria-label="参考连线操作"><button type="button" disabled={canvas.busy} onClick={disconnectSelected}>断开参考</button><button type="button" onClick={() => setSelectedEdge(null)}>取消选择</button></div>}
    {canvas.selectedIds.length > 0 && <div className="canvas-selection-actions" role="toolbar" aria-label="选中资产操作">
      <span role="status">已选 {canvas.selectedIds.length} 项</span>
      {pendingReferenceCount > 0 && assistantCollapsed && <button type="button" data-assistant-toggle onClick={onShowAssistant}>展开助手插入 {pendingReferenceCount} 项参考</button>}
      <button type="button" disabled={canvas.batchBusy || canvas.historyBusy || interacting} onClick={removeSelected}>移除选中节点</button>
      <button type="button" disabled={interacting} onClick={() => canvas.setSelectedIds([])}>清空选择</button>
    </div>}
    <div className="canvas-toolbar" aria-label="画布工具">
      <button type="button" aria-label="添加节点" title="添加节点" disabled={canvas.busy || canvas.loading} onClick={event => { const rect = event.currentTarget.getBoundingClientRect(); openMenu(rect.left, rect.top - 270, true); }}><Icon name="plus" /></button>
      <button type="button" aria-label="上传资产到画布" title="上传资产" disabled={canvas.busy || canvas.loading} onClick={() => input.current?.click()}><Icon name="upload" /></button>
      <button type="button" aria-label="资产列表" title="资产列表" disabled={canvas.busy || canvas.loading} onClick={() => setExisting(true)}><Icon name="folder" /></button>
      <span className="canvas-tool-divider" />
      <button type="button" aria-label="选择资产" title="选择资产（拖动空白处框选，Shift 追加选择）" aria-pressed={!panMode} disabled={interacting} onClick={() => setPanMode(false)}><Icon name="select" /></button>
      <button type="button" aria-label="平移画布" title="平移画布（空格＋拖动或中键可临时平移）" aria-pressed={panMode} disabled={interacting} onClick={() => setPanMode(true)}><Icon name="hand" /></button>
      <button type="button" aria-label="缩小画布" onClick={() => zoom(.8)}>−</button><span>{viewport.zoom < .01 ? (viewport.zoom * 100).toFixed(2) : Math.round(viewport.zoom * 100)}%</span><button type="button" aria-label="放大画布" onClick={() => zoom(1.25)}>+</button>
      <button type="button" aria-label="全局视图" title="显示全部节点，不改变位置" onClick={() => fit()}>全局视图</button>
      <span className="canvas-tool-divider" />
      <button type="button" aria-label="整理画布" title="按资产类型重新排列全部节点" disabled={arranging || canvas.busy || canvas.loading || !nodes.length} onClick={() => void arrangeLayout()}>整理画布</button>
      <button type="button" aria-label="撤销" title={canvas.snapshot?.canvas.history.undo ? `撤销${canvas.snapshot.canvas.history.undo.label}（Ctrl/⌘+Z）` : '暂无可撤销的操作'} disabled={arranging || canvas.historyBusy || canvas.loading || !canvas.snapshot?.canvas.history.undo} onClick={() => history('undo')}><Icon name="undo" /></button>
      <button type="button" aria-label="重做" title={canvas.snapshot?.canvas.history.redo ? `重做${canvas.snapshot.canvas.history.redo.label}（Ctrl/⌘+Shift+Z / Ctrl+Y）` : '暂无可重做的操作'} disabled={arranging || canvas.historyBusy || canvas.loading || !canvas.snapshot?.canvas.history.redo} onClick={() => history('redo')}><Icon name="redo" /></button>
    </div>
    {taskCount > 0 && <span className="canvas-job-count" role="status">{taskCount} 个生成任务进行中</span>}
    <input ref={input} type="file" multiple hidden accept={IMPORT_ACCEPT} aria-label="上传画布资产" onChange={event => { void canvas.importFiles([...event.target.files ?? []]).catch(() => {}); event.target.value = ''; }} />
    {menu && <CanvasMenu download={menuNode?.kind === 'video' && menuNode.role !== 'material' ? { enabled: !!menuVideo, pending: downloading, onClick: () => void downloadVideo() } : undefined} state={menu} onClose={closeMenu} onAdd={add} onUpload={() => { input.current?.click(); closeMenu(); }} onExisting={() => { setExisting(true); closeMenu(); }} onTypes={() => setMenu({ ...menu, adding: true })} />}
    {connections.menu && <CanvasMenu state={{ x: connections.menu.x, y: connections.menu.y, worldX: connections.menu.position.x, worldY: connections.menu.position.y, adding: true }} reference={{ kind: nodes.find(node => node.id === connections.menu!.sourceId)?.kind ?? 'image', models, onAdd: connections.add }} onClose={connections.cancel} onAdd={() => {}} onUpload={() => {}} onExisting={() => {}} onTypes={() => {}} />}
    {existing && <ExistingAssets canvas={canvas} onClose={() => setExisting(false)} />}
  </div>;
}
