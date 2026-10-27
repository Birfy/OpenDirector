import {
  GENERATION_LABELS,
  type NodeGenerationActivity,
} from "./generationActivity";
import "./generating.css";

export function GeneratingOverlay({
  activity,
  hasAsset,
}: {
  activity: NodeGenerationActivity;
  hasAsset: boolean;
}) {
  return (
    <div
      className={`cw-generating${hasAsset ? " cw-generating-with-asset" : ""}`}
      data-phase={activity.phase}
    >
      <div className="cw-generating-field" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="cw-generating-stars" aria-hidden="true" />
      <div className="cw-generating-sheen" aria-hidden="true" />
      <div className="cw-generating-caption" role="status" aria-atomic="true">
        <span className="cw-generating-indicator" aria-hidden="true" />
        <span>{GENERATION_LABELS[activity.phase]}</span>
        {activity.count > 1 && (
          <span className="cw-generating-count">{activity.count} 个任务</span>
        )}
      </div>
    </div>
  );
}
