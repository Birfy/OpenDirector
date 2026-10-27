import { useEffect, useState } from "react";
import { listDocuments, type DocumentSummary } from "./storage";

export function ProjectManagerPanel({
  currentId,
  onCreate,
  onOpen,
  onDuplicate,
  onTrash,
  onRestore,
}: {
  currentId: string;
  onCreate: () => void;
  onOpen: (id: string) => Promise<void>;
  onDuplicate: (id: string) => Promise<void>;
  onTrash: (id: string) => Promise<void>;
  onRestore: (id: string) => Promise<void>;
}) {
  const [trashed, setTrashed] = useState(false);
  const [projects, setProjects] = useState<DocumentSummary[]>([]);
  const [revision, setRevision] = useState(0);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    void listDocuments({ trashed }).then((result) => {
      if (!active) return;
      if (result.ok) setProjects(result.value);
      else setError(result.error.message);
    });
    return () => {
      active = false;
    };
  }, [trashed, currentId, revision]);
  const run = async (action: () => Promise<void>) => {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await action();
      setRevision((v) => v + 1);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : String(reason));
    } finally {
      setBusy(false);
    }
  };
  return (
    <div className="cw-project-manager">
      <button className="cw-wide-button" disabled={busy} onClick={onCreate}>
        新建空白画布
      </button>
      <div className="cw-project-tabs">
        <button
          disabled={busy}
          aria-pressed={!trashed}
          onClick={() => setTrashed(false)}
        >
          本地项目
        </button>
        <button
          disabled={busy}
          aria-pressed={trashed}
          onClick={() => setTrashed(true)}
        >
          回收站
        </button>
      </div>
      <p className="cw-panel-note">
        回收站保留完整画布，可恢复。仅管理本机项目，不会删除已接入服务的项目和素材。
      </p>
      {error && <p role="alert">{error}</p>}
      {projects.map((project) => (
        <article key={project.id} className="cw-project-row">
          <button
            className="cw-project-open"
            disabled={busy || trashed}
            onClick={() => void run(() => onOpen(project.id))}
          >
            <strong>
              {project.title}
              {project.id === currentId ? " · 当前" : ""}
            </strong>
            <small>
              {project.nodeCount} 个节点 ·{" "}
              {new Date(project.trashedAt ?? project.updatedAt).toLocaleString(
                "zh-CN",
              )}
            </small>
          </button>
          <div>
            {trashed ? (
              <button
                disabled={busy}
                onClick={() => void run(() => onRestore(project.id))}
              >
                恢复项目
              </button>
            ) : (
              <>
                <button
                  disabled={busy}
                  onClick={() => void run(() => onDuplicate(project.id))}
                >
                  复制项目
                </button>
                <button
                  disabled={busy}
                  onClick={() => void run(() => onTrash(project.id))}
                >
                  移入回收站
                </button>
              </>
            )}
          </div>
        </article>
      ))}
      {!projects.length && (
        <p className="cw-panel-note">
          {trashed ? "回收站为空。" : "暂无已保存的本地项目。"}
        </p>
      )}
    </div>
  );
}
