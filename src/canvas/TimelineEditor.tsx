import { useEffect, useMemo, useRef, useState } from "react";
import type {
  CanvasNode,
  CanvasResource,
  TimelineClip,
  TimelineData,
} from "./model";
import { copyTimeline, timelineError } from "./dataBoundary";
import {
  addAudioTrack,
  addTimelineClip,
  clipDuration,
  exportTimeline,
  moveTimelineClip,
  removeTimelineClip,
  timelineDuration,
  timelineSegments,
  updateTimelineClip,
  splitTimelineClip,
  trimTimelineClip,
  importTimeline,
} from "./timeline";
import { readEditorResource, withMediaDuration } from "./editorMedia";
import { EditorModal } from "./EditorModal";
import { CanvasIcon } from "./CanvasIcon";
import "./timeline-editor.css";

export interface TimelineEditorProps {
  node: CanvasNode;
  resources?: CanvasResource[];
  onApply: (data: TimelineData) => void;
  onClose: () => void;
}
const timeLabel = (time: number) =>
  `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toFixed(2).padStart(5, "0")}`;

export function TimelineEditor({
  node,
  resources = [],
  onApply,
  onClose,
}: TimelineEditorProps) {
  const [timeline, setTimeline] = useState(() =>
    copyTimeline(
      node.data.timeline ?? {
        fps: 30,
        width: 1920,
        height: 1080,
        tracks: [
          {
            id: "visual",
            kind: "visual",
            title: "画面轨",
            muted: false,
            clips: [],
          },
        ],
      },
    ),
  );
  const [selectedId, setSelectedId] = useState<string | null>(null),
    [position, setPosition] = useState(0),
    [playing, setPlaying] = useState(false);
  const [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [audioTrack, setAudioTrack] = useState("");
  const jsonInput = useRef<HTMLInputElement>(null),
    history = useRef<{ past: TimelineData[]; future: TimelineData[] }>({
      past: [],
      future: [],
    });
  const [, refreshHistory] = useState(0);
  const fileInput = useRef<HTMLInputElement>(null),
    media = useRef(new Map<string, HTMLMediaElement>()),
    active = useRef(true);
  const timelineRef = useRef(timeline),
    positionRef = useRef(position),
    draggingId = useRef<string | null>(null);
  const callbacks = useRef(
      new Map<string, (element: HTMLMediaElement | null) => void>(),
    ),
    pendingPlay = useRef(new Set<HTMLMediaElement>()),
    loading = useRef<AbortController | null>(null),
    playingRef = useRef(playing);
  timelineRef.current = timeline;
  positionRef.current = position;
  playingRef.current = playing;
  const [libraryKind, setLibraryKind] = useState("all"),
    [librarySource, setLibrarySource] = useState("all");
  const libraryResources = useMemo(
    () =>
      [
        ...new Map(
          [
            ...resources,
            ...timeline.tracks.flatMap((track) =>
              track.clips.map((clip) => clip.resource),
            ),
          ].map((resource) => [resource.id, resource]),
        ).values(),
      ].filter(
        (resource) =>
          ["image", "video", "audio"].includes(resource.kind) &&
          (libraryKind === "all" || resource.kind === libraryKind) &&
          (librarySource === "all" ||
            (librarySource === "canvas"
              ? !!resource.nodeId
              : !resource.nodeId)),
      ),
    [resources, timeline, libraryKind, librarySource],
  );
  const segments = useMemo(() => timelineSegments(timeline), [timeline]);
  const duration = timelineDuration(timeline);
  const selected = segments.find((segment) => segment.clip.id === selectedId);
  const currentVisual = segments.find(
    (segment) =>
      segment.track.kind === "visual" &&
      position >= segment.start &&
      position < segment.end,
  );
  const currentAudio = segments.filter(
    (segment) =>
      segment.track.kind === "audio" &&
      position >= segment.start &&
      position < segment.end,
  );
  const currentMedia = [
    ...(currentVisual?.clip.resource.kind === "video" ? [currentVisual] : []),
    ...currentAudio,
  ];
  useEffect(() => {
    active.current = true;
    const registry = media.current;
    return () => {
      active.current = false;
      loading.current?.abort();
      registry.forEach((element) => element.pause());
      registry.clear();
    };
  }, []);
  useEffect(() => {
    setPosition((current) => Math.min(current, duration));
  }, [duration]);
  useEffect(() => {
    if (!playing) return;
    const origin = performance.now(),
      initial = positionRef.current;
    let frame = 0;
    const tick = (now: number) => {
      const next = initial + (now - origin) / 1000;
      if (next >= duration) {
        setPosition(duration);
        setPlaying(false);
        return;
      }
      setPosition(next);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, duration]);
  useEffect(() => {
    for (const segment of currentMedia) {
      const element = media.current.get(segment.clip.id);
      if (!element) continue;
      const desired =
        segment.clip.inPoint + (position - segment.start) * segment.clip.speed;
      if (
        element.readyState >= 1 &&
        Math.abs(element.currentTime - desired) > 0.15
      )
        element.currentTime = desired;
      element.playbackRate = segment.clip.speed;
      element.volume = segment.clip.volume;
      element.muted = segment.clip.muted || segment.track.muted;
      if (playing && element.paused && !pendingPlay.current.has(element)) {
        pendingPlay.current.add(element);
        void element
          .play()
          .catch((reason) => {
            if (
              active.current &&
              playingRef.current &&
              media.current.get(segment.clip.id) === element &&
              !(reason instanceof DOMException && reason.name === "AbortError")
            ) {
              setPlaying(false);
              setError(
                `播放未启动：${reason instanceof Error ? reason.message : String(reason)}`,
              );
            }
          })
          .finally(() => pendingPlay.current.delete(element));
      } else if (!playing) element.pause();
    }
  }, [position, playing, timeline]);

  const change = (operation: (current: TimelineData) => TimelineData) => {
    try {
      const next = operation(timelineRef.current);
      const invalid = timelineError(next);
      if (invalid) throw new Error(invalid);
      if (next !== timelineRef.current) {
        history.current.past = [
          ...history.current.past.slice(-49),
          timelineRef.current,
        ];
        history.current.future = [];
      }
      timelineRef.current = next;
      setTimeline(next);
      setPlaying(false);
      setError("");
      refreshHistory((value) => value + 1);
    } catch (error) {
      setError(error instanceof Error ? error.message : "时间线编辑失败。");
    }
  };
  const beginLoad = () => {
    loading.current?.abort();
    const controller = new AbortController();
    loading.current = controller;
    setBusy(true);
    setError("");
    return controller;
  };
  const ownsLoad = (controller: AbortController) =>
    active.current &&
    loading.current === controller &&
    !controller.signal.aborted;
  const addResource = async (resource: CanvasResource) => {
    const controller = beginLoad();
    try {
      const resolved = await withMediaDuration(resource, controller.signal);
      if (ownsLoad(controller))
        change((current) =>
          addTimelineClip(
            current,
            resolved,
            resource.kind === "audio" ? audioTrack || undefined : undefined,
          ),
        );
    } catch (error) {
      if (ownsLoad(controller))
        setError(error instanceof Error ? error.message : "素材读取失败。");
    } finally {
      if (ownsLoad(controller)) setBusy(false);
    }
  };
  const importFiles = async (files: FileList) => {
    const controller = beginLoad();
    try {
      for (const file of [...files]) {
        const resource = await readEditorResource(file, controller.signal);
        if (!ownsLoad(controller)) return;
        change((current) =>
          addTimelineClip(
            current,
            resource,
            resource.kind === "audio" ? audioTrack || undefined : undefined,
          ),
        );
      }
    } catch (error) {
      if (ownsLoad(controller))
        setError(error instanceof Error ? error.message : "读取素材失败。");
    } finally {
      if (ownsLoad(controller)) setBusy(false);
    }
  };
  const seek = (time: number) => {
    setPlaying(false);
    setPosition(Math.max(0, Math.min(duration, time)));
  };
  const exportJson = () => {
    try {
      const json = exportTimeline(timeline, node.data.title);
      const url = URL.createObjectURL(
        new Blob([json], { type: "application/json" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = `${node.data.title || "timeline"}.timeline.json`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      setError(error instanceof Error ? error.message : "时间线导出失败。");
    }
  };
  const bindMedia = (clip: TimelineClip) => {
    let callback = callbacks.current.get(clip.id);
    if (!callback) {
      callback = (element) => {
        const previous = media.current.get(clip.id);
        if (!element) {
          previous?.pause();
          media.current.delete(clip.id);
        } else media.current.set(clip.id, element);
      };
      callbacks.current.set(clip.id, callback);
    }
    return callback;
  };
  const historyStep = (direction: "undo" | "redo") => {
    const source =
        direction === "undo" ? history.current.past : history.current.future,
      next = source.pop();
    if (!next) return;
    (direction === "undo" ? history.current.future : history.current.past).push(
      timelineRef.current,
    );
    timelineRef.current = next;
    setTimeline(next);
    setPlaying(false);
    setSelectedId(null);
    refreshHistory((value) => value + 1);
  };
  const importJson = async (file: File) => {
    const controller = beginLoad();
    try {
      const text = await file.text();
      if (!ownsLoad(controller)) return;
      const parsed = importTimeline(text);
      change(() => parsed);
      setSelectedId(null);
      setAudioTrack("");
      setPosition(0);
    } catch (reason) {
      if (ownsLoad(controller))
        setError(reason instanceof Error ? reason.message : "导入时间线失败。");
    } finally {
      if (ownsLoad(controller)) setBusy(false);
    }
  };
  const editableAtPlayhead =
    !!selected && position > selected.start && position < selected.end;
  const mediaReady = (
    element: HTMLMediaElement,
    clip: TimelineClip,
    start: number,
  ) => {
    element.currentTime = Math.min(
      clip.outPoint,
      clip.inPoint + Math.max(0, positionRef.current - start) * clip.speed,
    );
  };
  const patchSelected = (patch: Parameters<typeof updateTimelineClip>[2]) => {
    if (selected)
      change((current) => updateTimelineClip(current, selected.clip.id, patch));
  };

  return (
    <EditorModal
      title={`时间线 · ${node.data.title}`}
      subtitle="本地视觉轨顺序编排、多音轨播放与源片段入出点编辑"
      className="cw-timeline-dialog"
      onClose={onClose}
      onApply={() => {
        onApply(copyTimeline(timelineRef.current));
        onClose();
      }}
      disabled={busy || node.locked}
      error={error}
      actions={
        <>
          <button disabled={busy} onClick={() => jsonInput.current?.click()}>
            导入 JSON
          </button>
          <button onClick={exportJson}>
            <CanvasIcon name="download" size={16} />
            导出可编辑 JSON
          </button>
        </>
      }
    >
      <div className="cw-timeline-top">
        <aside className="cw-timeline-library">
          <div className="cw-domain-section-heading">
            <h3>素材库</h3>
            <button disabled={busy} onClick={() => fileInput.current?.click()}>
              <CanvasIcon name="upload" size={14} />
              导入
            </button>
          </div>
          <p className="cw-domain-note">
            图片、视频与音频。视频和音频会先读取实际时长。
          </p>
          <div className="cw-domain-row">
            <select
              aria-label="素材类型筛选"
              value={libraryKind}
              onChange={(event) => setLibraryKind(event.target.value)}
            >
              <option value="all">全部类型</option>
              <option value="image">图片</option>
              <option value="video">视频</option>
              <option value="audio">音频</option>
            </select>
            <select
              aria-label="素材来源筛选"
              value={librarySource}
              onChange={(event) => setLibrarySource(event.target.value)}
            >
              <option value="all">全部来源</option>
              <option value="canvas">画布素材</option>
              <option value="imported">已导入</option>
            </select>
          </div>
          <div className="cw-domain-resource-list">
            {libraryResources.map((resource) => (
              <button
                key={resource.id}
                disabled={busy}
                onClick={() => {
                  void addResource(resource);
                }}
              >
                <CanvasIcon name={resource.kind} size={16} />
                <span>{resource.title}</span>
                <CanvasIcon name="plus" size={14} />
              </button>
            ))}
            {!libraryResources.length && (
              <p>可从本地导入，也可引用画布上的媒体节点。</p>
            )}
          </div>
          <label className="cw-domain-field">
            音频加入轨道
            <select
              value={audioTrack}
              onChange={(event) => setAudioTrack(event.target.value)}
            >
              <option value="">首条音轨 / 自动新建</option>
              {timeline.tracks
                .filter((track) => track.kind === "audio")
                .map((track) => (
                  <option key={track.id} value={track.id}>
                    {track.title}
                  </option>
                ))}
            </select>
          </label>
          <button onClick={() => change(addAudioTrack)}>
            <CanvasIcon name="plus" size={14} />
            添加音轨
          </button>
          <p className="cw-domain-status" role="status">
            {busy ? "正在读取素材…" : ""}
          </p>
        </aside>
        <div className="cw-timeline-monitor">
          <div
            className="cw-timeline-screen"
            style={{ aspectRatio: `${timeline.width}/${timeline.height}` }}
          >
            {currentVisual?.clip.resource.src ? (
              currentVisual.clip.resource.kind === "image" ? (
                <img
                  src={currentVisual.clip.resource.src}
                  alt={currentVisual.clip.resource.title}
                />
              ) : (
                <video
                  key={currentVisual.clip.id}
                  ref={bindMedia(currentVisual.clip)}
                  src={currentVisual.clip.resource.src}
                  playsInline
                  preload="auto"
                  onLoadedMetadata={(event) =>
                    mediaReady(
                      event.currentTarget,
                      currentVisual.clip,
                      currentVisual.start,
                    )
                  }
                  onError={() => {
                    setPlaying(false);
                    setError("当前视频无法播放，请检查素材或重新导入。");
                  }}
                />
              )
            ) : (
              <div className="cw-timeline-monitor-empty">
                <CanvasIcon name="video" size={38} />
                <span>
                  {duration ? "当前时间没有画面" : "添加素材开始编排"}
                </span>
              </div>
            )}
            {currentAudio.map((segment) => (
              <audio
                key={segment.clip.id}
                ref={bindMedia(segment.clip)}
                src={segment.clip.resource.src}
                preload="auto"
                onLoadedMetadata={(event) =>
                  mediaReady(event.currentTarget, segment.clip, segment.start)
                }
                onError={() => {
                  setPlaying(false);
                  setError("音频素材无法播放，请重新导入。");
                }}
              />
            ))}
          </div>
          <div className="cw-timeline-transport">
            <button
              aria-label="回到时间线开始"
              onClick={() => seek(0)}
              disabled={!duration}
            >
              ↤
            </button>
            <button
              className="cw-timeline-play"
              aria-label={playing ? "暂停时间线" : "播放时间线"}
              disabled={!duration || busy}
              onClick={() => {
                if (position >= duration) setPosition(0);
                setPlaying((current) => !current);
              }}
            >
              <CanvasIcon name={playing ? "stop" : "play"} size={18} />
            </button>
            <output>
              {timeLabel(position)} <span>/ {timeLabel(duration)}</span>
            </output>
            <label>
              帧率
              <select
                value={timeline.fps}
                onChange={(event) =>
                  change((current) => ({
                    ...current,
                    fps: Number(event.target.value),
                  }))
                }
              >
                {[24, 25, 30, 50, 60].map((fps) => (
                  <option key={fps} value={fps}>
                    {fps} fps
                  </option>
                ))}
              </select>
            </label>
          </div>
          <input
            className="cw-timeline-seek"
            aria-label="时间线播放位置"
            type="range"
            min={0}
            max={Math.max(0.01, duration)}
            step={1 / timeline.fps}
            value={position}
            onChange={(event) => seek(Number(event.target.value))}
            disabled={!duration}
          />
        </div>
        <aside className="cw-timeline-inspector">
          <div className="cw-domain-section-heading">
            <h3>{selected ? "片段属性" : "项目设置"}</h3>
          </div>
          {selected ? (
            <>
              <strong>{selected.clip.resource.title}</strong>
              <p className="cw-domain-note">
                {selected.track.title} · 播放{" "}
                {clipDuration(selected.clip).toFixed(2)} 秒
              </p>
              {selected.clip.resource.kind !== "image" && (
                <label className="cw-domain-field">
                  源入点（秒）
                  <input
                    type="number"
                    min={0}
                    step={1 / timeline.fps}
                    value={selected.clip.inPoint}
                    onChange={(event) =>
                      patchSelected({ inPoint: Number(event.target.value) })
                    }
                  />
                </label>
              )}
              <label className="cw-domain-field">
                {selected.clip.resource.kind === "image"
                  ? "展示时长（秒）"
                  : "源出点（秒）"}
                <input
                  type="number"
                  min={0.01}
                  step={1 / timeline.fps}
                  value={selected.clip.outPoint}
                  onChange={(event) =>
                    patchSelected({ outPoint: Number(event.target.value) })
                  }
                />
              </label>
              {selected.clip.resource.kind !== "image" && (
                <label className="cw-domain-field">
                  播放速度
                  <select
                    value={selected.clip.speed}
                    onChange={(event) =>
                      patchSelected({ speed: Number(event.target.value) })
                    }
                  >
                    {[0.25, 0.5, 1, 1.5, 2, 4].map((speed) => (
                      <option key={speed} value={speed}>
                        {speed}×
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {selected.track.kind === "audio" && (
                <label className="cw-domain-field">
                  时间线起点（秒）
                  <input
                    type="number"
                    min={0}
                    step={0.1}
                    value={selected.clip.start}
                    onChange={(event) =>
                      patchSelected({ start: Number(event.target.value) })
                    }
                  />
                </label>
              )}
              {selected.clip.resource.kind !== "image" && (
                <>
                  <label className="cw-domain-field">
                    片段音量 {Math.round(selected.clip.volume * 100)}%
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={selected.clip.volume}
                      onChange={(event) =>
                        patchSelected({ volume: Number(event.target.value) })
                      }
                    />
                  </label>
                  <label className="cw-domain-checkbox">
                    <input
                      type="checkbox"
                      checked={selected.clip.muted}
                      onChange={(event) =>
                        patchSelected({ muted: event.target.checked })
                      }
                    />
                    片段静音
                  </label>
                </>
              )}
              <div className="cw-domain-row">
                <button
                  onClick={() =>
                    change((current) =>
                      moveTimelineClip(current, selected.clip.id, -1),
                    )
                  }
                  aria-label="片段前移"
                >
                  ←
                </button>
                <button
                  onClick={() =>
                    change((current) =>
                      moveTimelineClip(current, selected.clip.id, 1),
                    )
                  }
                  aria-label="片段后移"
                >
                  →
                </button>
                <button
                  onClick={() => {
                    change((current) =>
                      removeTimelineClip(current, selected.clip.id),
                    );
                    setSelectedId(null);
                  }}
                >
                  删除片段
                </button>
              </div>
            </>
          ) : (
            <>
              <label className="cw-domain-field">
                画面比例
                <select
                  value={`${timeline.width}:${timeline.height}`}
                  onChange={(event) => {
                    const [width, height] = event.target.value
                      .split(":")
                      .map(Number);
                    change((current) => ({
                      ...current,
                      width: width!,
                      height: height!,
                    }));
                  }}
                >
                  <option value="1920:1080">16:9 · 1920×1080</option>
                  <option value="1080:1920">9:16 · 1080×1920</option>
                  <option value="1080:1080">1:1 · 1080×1080</option>
                </select>
              </label>
              <p className="cw-domain-note">
                点击轨道片段编辑源入点、出点、播放速度与音量。视觉片段自动顺序衔接；音轨保留显式起点，同轨不能重叠。
              </p>
            </>
          )}
        </aside>
      </div>
      <div className="cw-domain-row cw-timeline-edit-toolbar">
        <button
          disabled={!history.current.past.length || busy}
          onClick={() => historyStep("undo")}
        >
          撤销
        </button>
        <button
          disabled={!history.current.future.length || busy}
          onClick={() => historyStep("redo")}
        >
          重做
        </button>
        <button
          disabled={!editableAtPlayhead}
          onClick={() => {
            if (selected)
              change((current) =>
                splitTimelineClip(current, selected.clip.id, position),
              );
          }}
        >
          在播放头分割
        </button>
        <button
          disabled={!editableAtPlayhead}
          onClick={() => {
            if (selected)
              change((current) =>
                trimTimelineClip(current, selected.clip.id, position, "left"),
              );
          }}
        >
          剪掉播放头左侧
        </button>
        <button
          disabled={!editableAtPlayhead}
          onClick={() => {
            if (selected)
              change((current) =>
                trimTimelineClip(current, selected.clip.id, position, "right"),
              );
          }}
        >
          剪掉播放头右侧
        </button>
      </div>
      <div className="cw-timeline-tracks">
        <div className="cw-timeline-ruler">
          <span>轨道 / 秒</span>
          <div>
            {[0, 0.25, 0.5, 0.75, 1].map((fraction) => (
              <span key={fraction} style={{ left: `${fraction * 100}%` }}>
                {(duration * fraction).toFixed(1)}
              </span>
            ))}
          </div>
        </div>
        {timeline.tracks.map((track) => (
          <div className="cw-timeline-track" key={track.id}>
            <div className="cw-timeline-track-label">
              <span>{track.title}</span>
              <button
                onClick={() =>
                  change((current) => ({
                    ...current,
                    tracks: current.tracks.map((item) =>
                      item.id === track.id
                        ? { ...item, muted: !item.muted }
                        : item,
                    ),
                  }))
                }
                aria-label={`${track.muted ? "取消静音" : "静音"}${track.title}`}
              >
                {track.muted ? "静音" : "有声"}
              </button>
              {track.kind === "audio" && (
                <button
                  aria-label={`删除${track.title}`}
                  onClick={() => {
                    setPlaying(false);
                    if (audioTrack === track.id) setAudioTrack("");
                    change((current) => ({
                      ...current,
                      tracks: current.tracks.filter(
                        (item) => item.id !== track.id,
                      ),
                    }));
                  }}
                >
                  ×
                </button>
              )}
            </div>
            <div
              className="cw-timeline-track-lane"
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  const rect = event.currentTarget.getBoundingClientRect();
                  seek(((event.clientX - rect.left) / rect.width) * duration);
                }
              }}
            >
              <div
                className="cw-timeline-playhead"
                style={{
                  left: `${duration ? (position / duration) * 100 : 0}%`,
                }}
              />
              {segments
                .filter((segment) => segment.track.id === track.id)
                .map((segment) => (
                  <button
                    key={segment.clip.id}
                    draggable
                    className={`cw-timeline-clip ${selectedId === segment.clip.id ? "selected" : ""} ${track.kind}`}
                    style={{
                      left: `${duration ? (segment.start / duration) * 100 : 0}%`,
                      width: `${duration ? (clipDuration(segment.clip) / duration) * 100 : 100}%`,
                    }}
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedId(segment.clip.id);
                      seek(segment.start);
                    }}
                    onDragStart={() => {
                      draggingId.current = segment.clip.id;
                    }}
                    onDragOver={(event) => event.preventDefault()}
                    onDrop={(event) => {
                      event.preventDefault();
                      const source = draggingId.current;
                      draggingId.current = null;
                      if (!source || source === segment.clip.id) return;
                      change((current) => ({
                        ...current,
                        tracks: current.tracks.map((item) => {
                          const from = item.clips.findIndex(
                              (clip) => clip.id === source,
                            ),
                            to = item.clips.findIndex(
                              (clip) => clip.id === segment.clip.id,
                            );
                          if (from < 0 || to < 0) return item;
                          const clips = [...item.clips],
                            [clip] = clips.splice(from, 1);
                          clips.splice(to, 0, clip!);
                          return { ...item, clips };
                        }),
                      }));
                    }}
                  >
                    <CanvasIcon name={segment.clip.resource.kind} size={14} />
                    <span>{segment.clip.resource.title}</span>
                    <small>{clipDuration(segment.clip).toFixed(1)}s</small>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <p className="cw-domain-note cw-timeline-footnote">
        播放和编排在本地进行；JSON
        保存全部片段、素材与时间信息。此处不调用原站渲染、MP4
        合成或剪映草稿生成服务。
      </p>
      <input
        className="cw-domain-file-input"
        ref={jsonInput}
        type="file"
        accept="application/json,.json"
        aria-label="导入时间线 JSON"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) void importJson(file);
          event.target.value = "";
        }}
      />
      <input
        className="cw-domain-file-input"
        ref={fileInput}
        type="file"
        accept="image/*,video/*,audio/*"
        multiple
        aria-label="导入时间线素材"
        onChange={(event) => {
          if (event.target.files) void importFiles(event.target.files);
          event.target.value = "";
        }}
      />
    </EditorModal>
  );
}

export default TimelineEditor;
