import { useState } from "react";
import type { GenerationJob } from "./generationHistory";
import { CanvasIcon } from "./CanvasIcon";

export function GenerationHistoryPanel({
  jobs,
  onRestore,
  onLocate,
  onSync,
}: {
  jobs: GenerationJob[];
  onRestore: (jobs: GenerationJob[], request?: boolean) => void;
  onLocate: (id: string) => void;
  onSync?: () => void;
}) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<string[]>([]);
  const rows = jobs.filter(
    (job) =>
      filter === "all" ||
      job.request?.kind === filter ||
      job.outputs?.some((item) => item.kind === filter),
  );
  const labels = {
    draft: "请求草稿",
    imported: "已导入结果",
    running: "生成中",
    succeeded: "生成完成",
    failed: "失败",
    cancelled: "已取消",
    interrupted: "等待恢复",
  };
  return (
    <>
      <p className="cw-panel-note">
        历史与结果保存在本机，切换项目或刷新后可继续使用。
      </p>
      {onSync && (
        <button className="cw-wide-button" onClick={onSync}>
          同步本地服务结果
        </button>
      )}
      <div className="cw-search-categories" role="group" aria-label="历史类型">
        {[
          ["all", "全部"],
          ["image", "图片"],
          ["video", "视频"],
          ["audio", "音频"],
        ].map(([value, title]) => (
          <button
            key={value}
            aria-pressed={filter === value}
            onClick={() => setFilter(value!)}
          >
            {title}
          </button>
        ))}
      </div>
      {!!selected.length && (
        <button
          className="cw-wide-button"
          onClick={() =>
            onRestore(jobs.filter((job) => selected.includes(job.id)))
          }
        >
          重新放置所选结果（{selected.length}）
        </button>
      )}
      {!rows.length && <p className="cw-panel-note">暂无此类型的生成历史。</p>}
      {rows.map((job) => (
        <div className="cw-history-entry" key={job.id}>
          <label>
            <input
              type="checkbox"
              aria-label={`选择历史${job.title}`}
              checked={selected.includes(job.id)}
              disabled={!job.outputs?.length}
              onChange={(e) =>
                setSelected((ids) =>
                  e.target.checked
                    ? [...ids, job.id]
                    : ids.filter((id) => id !== job.id),
                )
              }
            />
            <strong>{job.title}</strong>
          </label>
          <small>
            {job.createdAt
              ? new Date(job.createdAt).toLocaleString("zh-CN")
              : job.time}{" "}
            · {labels[job.status]}
          </small>
          {job.message && <small>{job.message}</small>}
          <div className="cw-history-thumbnails">
            {job.outputs?.map((output, i) =>
              output.kind === "image" ? (
                <img
                  key={i}
                  src={output.src}
                  alt={output.title}
                  draggable={false}
                />
              ) : (
                <span key={i}>
                  <CanvasIcon name={output.kind} size={20} />
                  {output.title}
                </span>
              ),
            )}
          </div>
          <div className="cw-history-actions">
            <button onClick={() => onLocate(job.nodeId)}>定位来源</button>
            {!!job.outputs?.length && (
              <button onClick={() => onRestore([job])}>重新放置结果</button>
            )}
            {job.request && (
              <button onClick={() => onRestore([job], true)}>
                恢复请求节点
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
