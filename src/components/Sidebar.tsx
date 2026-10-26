import type { GenerationJob } from "../domain/types";
import { Icon, type IconName } from "./Icon";

export type View = "create" | "explore" | "assets" | "subjects" | "studio";
const navigation: { id: View; icon: IconName; title: string }[] = [
  { id: "create", icon: "sparkles", title: "创作" },
  { id: "explore", icon: "compass", title: "探索" },
  { id: "assets", icon: "folder", title: "资产" },
  { id: "subjects", icon: "person", title: "主体" },
  { id: "studio", icon: "film", title: "短剧工作室" },
];

export function Sidebar({
  view,
  onNavigate,
  open,
  onClose,
  onNew,
  jobs,
  onJob,
  onCanvas,
}: {
  view: View;
  onNavigate: (view: View) => void;
  open: boolean;
  onClose: () => void;
  onNew: () => void;
  jobs: GenerationJob[];
  onJob: (job: GenerationJob) => void;
  onCanvas: () => void;
}) {
  return (
    <>
      {open && (
        <button
          className="sidebar-scrim"
          onClick={onClose}
          aria-label="关闭导航"
        />
      )}
      <aside className={`sidebar ${open ? "is-open" : ""}`} aria-label="主导航">
        <div className="brand-row">
          <button className="brand" onClick={onNew} aria-label="即梦学习版首页">
            <span className="brand-mark">✦</span>
            <span>
              即梦<span className="brand-ai">AI</span>
            </span>
          </button>
          <button
            className="icon-button mobile-only"
            onClick={onClose}
            aria-label="关闭导航"
          >
            <Icon name="close" />
          </button>
        </div>
        <span className="edition-tag">
          <span />
          本地学习版
        </span>
        <nav className="primary-nav">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
              className={`nav-item ${view === item.id ? "active" : ""}`}
              aria-current={view === item.id ? "page" : undefined}
            >
              <Icon name={item.icon} />
              <span>{item.title}</span>
              {item.id === "studio" && <span className="tiny-label">概念</span>}
            </button>
          ))}
        </nav>
        <div className="sidebar-divider" />
        <div className="sidebar-section-label">
          <span>对话</span>
          <button
            className="icon-button"
            onClick={onNew}
            aria-label="开始新创作"
          >
            <Icon name="plus" size={16} />
          </button>
        </div>
        <button className="new-chat" onClick={onNew}>
          <Icon name="plus" size={16} />
          新建创作
        </button>
        <div className="session-list">
          {jobs.length ? (
            jobs.slice(0, 5).map((job) => (
              <button key={job.id} onClick={() => onJob(job)}>
                <Icon name="message" size={15} />
                <span>{job.prompt}</span>
                {job.status === "running" && <span className="activity-dot" />}
              </button>
            ))
          ) : (
            <p>让一个想法成为开始</p>
          )}
        </div>
        <div className="sidebar-section-label canvas-label">
          <span>画布</span>
          <Icon name="canvas" size={14} />
        </div>
        <button className="session-link" onClick={onCanvas}>
          <Icon name="canvas" size={16} />
          <span>我的灵感画布</span>
        </button>
        <div className="sidebar-bottom">
          <div className="local-avatar">
            <Icon name="code" size={19} />
          </div>
          <div>
            <strong>创作研究室</strong>
            <small>在你的浏览器中运行</small>
          </div>
          <span className="online-dot" title="本地模式" />
        </div>
      </aside>
    </>
  );
}
