import type { GenerationJob } from "../domain/types";
import { Artwork } from "./Artwork";
import { Icon } from "./Icon";
import { MODE_LABELS } from "./Composer";

export function Jobs({
  jobs,
  onReuse,
  full = false,
}: {
  jobs: GenerationJob[];
  onReuse: (job: GenerationJob) => void;
  full?: boolean;
}) {
  if (!jobs.length)
    return full ? (
      <div className="empty-state assets-empty">
        <div className="empty-icon">
          <Icon name="folder" size={30} />
        </div>
        <h3>把第一个想法留下来</h3>
        <p>
          完成一次本地模拟后，任务会出现在这里。
          <br />
          任务仅保留在当前页面内，刷新后清空。
        </p>
      </div>
    ) : null;
  return (
    <section
      className={`jobs-section ${full ? "jobs-full" : ""}`}
      aria-label="本地任务"
    >
      <div className="section-heading">
        <div>
          <h2>{full ? "本地创作记录" : "最近的创作"}</h2>
          <p>模拟任务 · 当前页面会话</p>
        </div>
        <span className="gallery-label">{jobs.length} 个任务</span>
      </div>
      <div className="jobs-grid">
        {jobs.map((job) => (
          <article key={job.id} className={`job-card ${job.status}`}>
            <div className="job-preview">
              <Artwork
                kind={
                  job.mode === "audio"
                    ? "wave"
                    : job.mode === "video"
                      ? "landscape"
                      : "orbit"
                }
              />
              {job.status === "running" ? (
                <div className="job-overlay">
                  <span className="loading-ring" />
                  <span>正在模拟创作流程</span>
                </div>
              ) : job.status === "aborted" ? (
                <div className="job-overlay">
                  <Icon name="stop" size={22} />
                  <span>任务已中止</span>
                </div>
              ) : (
                <span className="simulation-badge">模拟结果 · 自绘插图</span>
              )}
            </div>
            <div className="job-info">
              <div>
                <span className={`job-state ${job.status}`}>
                  {job.status === "running"
                    ? "进行中"
                    : job.status === "completed"
                      ? "已完成"
                      : "已中止"}
                </span>
                <span>
                  {MODE_LABELS[job.mode]} · {job.aspectRatio}
                </span>
              </div>
              <p>{job.prompt}</p>
              <button onClick={() => onReuse(job)}>
                再次编辑
                <Icon name="arrow" size={14} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
