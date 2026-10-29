import { useEffect, useState } from "react";
import type { CanvasResource } from "./model";
import {
  listWorkspaceProjects,
  readWorkspaceDocument,
  type WorkspaceProject,
} from "../backend/workspace";
import { errorMessage } from "../backend/api";
import { projectAssets } from "./projectAssets";
import { CanvasIcon } from "./CanvasIcon";

export function ProjectAssetLibrary({
  currentId,
  onImport,
}: {
  currentId: string;
  onImport: (resource: CanvasResource) => void;
}) {
  const [projects, setProjects] = useState<WorkspaceProject[]>([]);
  const [selected, setSelected] = useState("");
  const [assets, setAssets] = useState<CanvasResource[]>([]);
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("all");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let active = true;
    void listWorkspaceProjects()
      .then((result) => {
        if (!active) return;
        setProjects(result.projects.filter((item) => item.id !== currentId));
      })
      .catch((reason) => {
        if (active) setError(errorMessage(reason));
      });
    return () => {
      active = false;
    };
  }, [currentId]);
  useEffect(() => {
    let active = true;
    setAssets([]);
    setError("");
    if (!selected) {
      setBusy(false);
      return;
    }
    setBusy(true);
    const project = projects.find((item) => item.id === selected);
    if (!project) {
      setBusy(false);
      return;
    }
    void readWorkspaceDocument(project)
      .then((document) => {
        if (!active) return;
        setAssets(projectAssets(document));
      })
      .catch((reason) => {
        if (active) setError(errorMessage(reason));
      })
      .finally(() => {
        if (active) setBusy(false);
      });
    return () => {
      active = false;
    };
  }, [selected, projects]);
  const visible = assets.filter(
    (asset) =>
      (kind === "all" || asset.kind === kind) &&
      asset.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );
  return (
    <section className="cw-project-assets">
      <h3>其他项目的素材</h3>
      <p className="cw-panel-note">
        从本机已保存项目复制素材，也包含时间线和主体中的媒体。原项目保持独立。
      </p>
      <label>
        来源项目
        <select
          aria-label="素材来源项目"
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
        >
          <option value="">选择本地项目</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </label>
      {!projects.length && (
        <p className="cw-panel-note">
          还没有其他本地项目。可导入画布 JSON，或保存另一个项目后复用素材。
        </p>
      )}
      {selected && (
        <>
          <input
            aria-label="搜索项目素材"
            placeholder="搜索素材名称"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <select
            aria-label="项目素材类型"
            value={kind}
            onChange={(event) => setKind(event.target.value)}
          >
            <option value="all">全部类型</option>
            <option value="image">图片</option>
            <option value="video">视频</option>
            <option value="audio">音频</option>
            <option value="file">文件</option>
          </select>
          <p role="status">
            {busy ? "正在读取素材…" : `${visible.length} 个素材`}
          </p>
          <div className="cw-asset-grid">
            {visible.map((asset) => (
              <button
                key={asset.id}
                aria-label={`复制素材：${asset.title}`}
                onClick={() => onImport(asset)}
              >
                {asset.kind === "image" ? (
                  <img src={asset.src} alt="" loading="lazy" />
                ) : (
                  <CanvasIcon name={asset.kind} size={34} />
                )}
                <span>{asset.title}</span>
              </button>
            ))}
          </div>
        </>
      )}
      {error && <p role="alert">{error}</p>}
    </section>
  );
}
