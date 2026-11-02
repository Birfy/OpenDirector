import type { ProjectSnapshot } from "../contracts/generated.ts";
import type { LinkedMediaResult } from "../canvas/linkedResults.ts";
import { CreationClient, objectVersion } from "./creationClient.ts";
import { CreationProjection } from "./creationProjection.ts";

/** Captured when rendering starts, independent of subsequent editor changes. */
export function timelinePublication(
  client: CreationClient,
  snapshot: ProjectSnapshot,
  itemId: string,
) {
  const item = snapshot.canvasItems.find((item) => item.id === itemId)!;
  if (item.binding.role !== "editor") throw new Error("时间线来源不存在。");
  const editorId = item.binding.objectRef.id;
  const editor = snapshot.editorDocuments.find((doc) => doc.id === editorId)!;
  const projection = new CreationProjection(client);
  const commandId = crypto.randomUUID(),
    outputId = crypto.randomUUID();
  let delivery:
    | {
        payload: {
          itemId: string;
          editorId: string;
          asset: Awaited<ReturnType<CreationProjection["importResource"]>>;
          outputId: string;
          title: string;
          position: { x: number; y: number };
        };
        versions: ReturnType<typeof objectVersion>[];
      }
    | undefined;
  return async (result: LinkedMediaResult) => {
    if (!delivery) {
      const asset = await projection.importResource(result);
      delivery = {
        payload: {
          itemId,
          editorId,
          asset,
          outputId,
          title: result.title,
          position: {
            x: item.position.x + item.width + 80,
            y: item.position.y,
          },
        },
        versions: [
          objectVersion("canvas_item", item),
          objectVersion("editor_document", editor),
          objectVersion("asset", {
            id: asset.assetId,
            revision: asset.revision,
          }),
        ],
      };
    }
    await client.command(
      "timeline.publishRender",
      delivery.payload,
      delivery.versions,
      undefined,
      commandId,
    );
    return true;
  };
}
