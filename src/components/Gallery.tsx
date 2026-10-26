import { useState } from "react";
import type { Preset } from "../domain/types";
import { Artwork } from "./Artwork";
import { Icon } from "./Icon";

export function Gallery({
  presets,
  categories,
  onSelect,
  expanded = false,
}: {
  presets: Preset[];
  categories: string[];
  onSelect: (preset: Preset) => void;
  expanded?: boolean;
}) {
  const [category, setCategory] = useState(categories[0] ?? "全部");
  const filtered =
    category === categories[0]
      ? presets
      : presets.filter((preset) => preset.category === category);
  return (
    <section
      className={`gallery ${expanded ? "expanded-gallery" : ""}`}
      aria-labelledby="gallery-title"
    >
      <div className="section-heading">
        <div>
          <h2 id="gallery-title">
            {expanded ? "发现新的创作方向" : "灵感，从这里开始"}
          </h2>
          <p>
            {expanded
              ? "选择一个灵感，将它变成你的创作描述。"
              : "给想象一点线索"}
          </p>
        </div>
        <span className="gallery-label">
          <span />
          自绘示例素材
        </span>
      </div>
      <div className="filter-list" aria-label="灵感分类">
        {categories.map((item) => (
          <button
            className={category === item ? "selected" : ""}
            key={item}
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {filtered.map((preset) => (
          <button
            className="inspiration-card"
            key={preset.id}
            onClick={() => onSelect(preset)}
            aria-label={`使用灵感：${preset.title}`}
          >
            <div className="card-art">
              <Artwork kind={preset.art} />
              {preset.tag && <span className="card-tag">{preset.tag}</span>}
              <span className="card-action">
                <Icon name="arrow" size={17} />
              </span>
            </div>
            <div className="card-copy">
              <h3>{preset.title}</h3>
              <p>{preset.description}</p>
              <span className="card-category">
                {preset.category}
                <span>↗</span>
              </span>
            </div>
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="empty-state">
          <Icon name="compass" size={32} />
          <h3>这个分类暂时没有示例</h3>
          <p>选择其他分类，或从一句自己的描述开始。</p>
        </div>
      )}
    </section>
  );
}
