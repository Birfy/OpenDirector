import type { CanvasNode } from "./model";
import { CanvasIcon } from "./CanvasIcon";
import { assetDisplayName } from "./assetNames";

/** Inserting a mention and removing its relation are separate sibling buttons. */
export function ReferenceThumbnail({
  node,
  title,
  disabled,
  removalDisabled,
  onInsert,
  onRemove,
}: {
  node: CanvasNode;
  title?: string;
  disabled: boolean;
  removalDisabled: boolean;
  onInsert: () => void;
  onRemove: () => void;
}) {
  const name = assetDisplayName(node.data.title);
  return (
    <div className="cw-reference-thumbnail">
      <button
        type="button"
        className="cw-reference-chip"
        aria-label={`引用素材：${name}`}
        title={title ?? name}
        disabled={disabled}
        onMouseDown={(event) => event.preventDefault()}
        onClick={onInsert}
      >
        {node.type === "image" &&
        node.data.src &&
        node.data.assetState !== "missing" ? (
          <img src={node.data.src} alt="" draggable={false} />
        ) : (
          <CanvasIcon name={node.type} size={22} />
        )}
        <span>{name}</span>
      </button>
      <button
        type="button"
        className="cw-reference-remove"
        aria-label={`移除参考：${name}`}
        title={`移除参考：${name}`}
        disabled={removalDisabled}
        onMouseDown={(event) => event.preventDefault()}
        onClick={onRemove}
      >
        <CanvasIcon name="close" size={11} />
      </button>
    </div>
  );
}
