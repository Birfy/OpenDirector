import { creationClient } from "./creationClient.ts";
import type { Asset, ProjectSnapshot } from "../contracts/generated.ts";
import type { GenerationJob } from "../canvas/generationHistory.ts";
import { generationPhase } from "../canvas/generationActivity.ts";

/** Activity is snapshot metadata: it must never wait for historical media. */
export function creationJobs(
  snapshot: ProjectSnapshot,
  previous: readonly GenerationJob[] = [],
): GenerationJob[] {
  const cached = new Map(previous.map((job) => [job.id, job]));
  return [...snapshot.jobs].reverse().map((job) => {
    const result = snapshot.results.find((result) => result.jobId === job.id);
    const asset = snapshot.assets.find(
      (asset) => asset.id === result?.asset.assetId,
    );
    const spec = job.inputSnapshot.spec;
    const prior = cached.get(job.id);
    const preview =
      asset &&
      prior?.preview?.assetId === asset.id &&
      prior.preview.state !== "unavailable"
        ? prior.preview
        : undefined;
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
      activityPhase: generationPhase(job) ?? undefined,
      preview:
        preview ??
        (asset ? { assetId: asset.id, state: "pending" } : undefined),
      outputs: preview ? prior?.outputs : undefined,
      message:
        job.errorDetails?.message ??
        (preview?.state === "unavailable"
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
  });
}

/** Preview reads carry no task state and cannot overwrite a newer receipt. */
export async function creationJobPreview(
  projectId: string,
  asset: Asset,
): Promise<Pick<GenerationJob, "preview" | "outputs">> {
  const client = creationClient(projectId);
  try {
    const outputs: NonNullable<GenerationJob["outputs"]> =
      asset.kind === "text"
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
                  durationSeconds: asset.metadata.durationSeconds ?? undefined,
                },
              },
            ]
          : [];
    return { outputs, preview: { assetId: asset.id, state: "ready" } };
  } catch {
    return {
      outputs: [],
      preview: { assetId: asset.id, state: "unavailable" },
    };
  }
}

export function applyCreationPreview(
  current: GenerationJob,
  preview: Pick<GenerationJob, "preview" | "outputs">,
): GenerationJob {
  if (!preview.preview || current.preview?.assetId !== preview.preview.assetId)
    return current;
  return {
    ...current,
    ...preview,
    ...(preview.preview.state === "unavailable" &&
    current.status === "succeeded"
      ? { message: "结果文件缺失或已变化，请检查本地文件。" }
      : {}),
  };
}
