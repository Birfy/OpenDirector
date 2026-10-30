import { creationClient } from "./creationClient.ts";
import type { ProjectSnapshot } from "../contracts/generated.ts";
import type { GenerationJob } from "../canvas/generationHistory.ts";

/** History is a query of real jobs/results, including hidden and never shown
 * owners. Reading a media URL does not adopt or re-upload the result. */
export async function creationJobs(
  snapshot: ProjectSnapshot,
): Promise<GenerationJob[]> {
  const client = creationClient(snapshot.project.id);
  return Promise.all(
    [...snapshot.jobs].reverse().map(async (job) => {
      const result = snapshot.results.find((result) => result.jobId === job.id);
      const asset = snapshot.assets.find(
        (asset) => asset.id === result?.asset.assetId,
      );
      const spec = job.inputSnapshot.spec;
      let unavailable = false;
      const readOutputs = async (): Promise<
        NonNullable<GenerationJob["outputs"]>
      > =>
        asset
          ? asset.kind === "text"
            ? [
                {
                  kind: "text",
                  title: asset.name,
                  text: await client.textContent(asset.id),
                },
              ]
            : ["image", "video", "audio"].includes(asset.kind)
              ? [
                  {
                    kind: asset.kind as "image" | "video" | "audio",
                    title: asset.name,
                    src: await client.mediaUrl(asset.id),
                    mimeType: asset.metadata.mimeType,
                    media: {
                      width: asset.metadata.width ?? undefined,
                      height: asset.metadata.height ?? undefined,
                      durationSeconds:
                        asset.metadata.durationSeconds ?? undefined,
                    },
                  },
                ]
              : []
          : [];
      const outputs = await readOutputs().catch(() => {
        unavailable = true;
        return [];
      });
      const selected =
        snapshot.generationSpecs.find((current) => current.id === spec.id)
          ?.currentResultId === result?.id;
      const displayed =
        asset &&
        snapshot.canvasItems.some(
          (item) =>
            item.visible &&
            item.binding.role === "material" &&
            item.binding.objectRef.assetId === asset.id,
        );
      return {
        id: job.id,
        nodeId: job.originItemId ?? spec.id,
        title: spec.prompt.slice(0, 60) || "生成任务",
        taskId: job.id,
        status:
          job.status === "queued" || job.status === "running"
            ? "running"
            : job.status,
        time: "",
        createdAt: job.createdAt ? Date.parse(job.createdAt) : undefined,
        durationKey: `generate:${spec.kind}:${job.inputSnapshot.model.modelConfigId}`,
        outputKind: spec.kind,
        activityPhase: [
          "download",
          "check",
          "save",
          "adopt",
          "complete",
        ].includes(job.phase)
          ? ("finishing" as const)
          : job.phase === "queued"
            ? ("queued" as const)
            : ("generating" as const),
        outputs,
        message:
          job.errorDetails?.message ??
          (unavailable
            ? "结果文件缺失或已变化，请检查本地文件。"
            : job.status === "succeeded"
              ? selected
                ? "当前选用的生成结果"
                : displayed
                  ? "结果已显示为独立节点"
                  : job.adopted
                    ? "历史生成结果"
                    : "结果已保留为候选"
              : job.phase),
        serviceTask: {
          protocol: job.inputSnapshot.model.protocol,
          externalTaskId: job.externalTaskId,
          recovery: job.recovery,
          resumeAllowed: job.resumeAllowed,
          cancelRequested: job.cancelRequested,
          remoteCancellation: job.remoteCancellation,
        },
      };
    }),
  );
}
