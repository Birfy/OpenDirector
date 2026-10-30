import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  conversation,
  stopChat,
  streamChat,
  type ChatAsset,
  type ChatEvent,
  type Conversation,
} from "../backend/chat";
import { flushChatDraft, rememberChat } from "../backend/chatDrafts";
import { errorMessage, request } from "../backend/api";
import { uploadReferences } from "../backend/generation";
import type { BackendModels } from "../backend/models";
import { isGenerationModel } from "../backend/rules";
import type { CanvasNode } from "./model";
import { assistantReferences } from "./assistantReferences";
import {
  creationEnabled,
  creationClient,
  currentAsset,
} from "../backend/creationClient.ts";
import { pendingCanvasReferences } from "./pendingCanvasReferences.ts";
import {
  contentText,
  referenceContent,
  referenceIds,
  type ReferenceContent,
} from "./chatReferenceContent.ts";

export interface ProjectChatAsset extends ChatAsset {
  kind: string;
}
export const attachment = ({
  id,
  name,
  type,
  size,
  fingerprint,
}: ChatAsset): ChatAsset => ({ id, name, type, size, fingerprint });
const empty = (): Conversation => ({
  messages: [],
  draft: "",
  assets: [],
  thinking: "auto",
  modelSelections: {},
});
type ToolEvent = Extract<ChatEvent, { type: "tool" }>;

export function useAssistantChat(
  projectId: string,
  catalog: BackendModels,
  onTurnEnd: () => void,
) {
  const [value, setValue] = useState<Conversation>(empty);
  const [loaded, setLoaded] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [sending, setSending] = useState(false);
  const [started, setStarted] = useState(false);
  const [stopping, setStopping] = useState(false);
  const [adding, setAdding] = useState(false);
  const [thinkingNow, setThinkingNow] = useState(false);
  const [tools, setTools] = useState<ToolEvent[]>([]);
  const [error, setError] = useState("");
  const alive = useRef(false);
  const controller = useRef<AbortController | null>(null);
  const uploadController = useRef<AbortController | null>(null);
  const submitting = useRef(false);
  const uploading = useRef(false);
  const turnId = useRef<string | null>(null);
  const retryId = useRef<string | null>(null);
  const current = useRef(value);
  current.current = value;
  // Retain metadata for editor undo after a reference is removed from the draft.
  const knownAssets = useRef(new Map<string, ChatAsset>());
  value.assets.forEach((asset) => knownAssets.current.set(asset.id, asset));
  const setContent = (content: ReferenceContent, added: ChatAsset[] = []) => {
    added.forEach((asset) =>
      knownAssets.current.set(asset.id, attachment(asset)),
    );
    const assets = referenceIds(content).map((id) => {
      const asset = knownAssets.current.get(id);
      if (!asset) throw new Error("引用素材不存在，未插入。");
      return asset;
    });
    setValue((previous) => ({
      ...previous,
      draft: contentText(content),
      draftContent: content,
      assets,
    }));
  };
  const onEnd = useRef(onTurnEnd);
  onEnd.current = onTurnEnd;

  useEffect(() => {
    alive.current = true;
    let cancelled = false;
    setLoaded(false);
    void conversation(projectId)
      .then((saved) => {
        if (cancelled) return;
        setValue({
          ...saved,
          messages: saved.messages.map((message) =>
            message.status === "streaming"
              ? { ...message, status: "interrupted" }
              : message,
          ),
        });
        setLoaded(true);
        setError("");
      })
      .catch((reason) => {
        if (!cancelled) setError(`读取对话失败：${errorMessage(reason)}`);
      });
    return () => {
      cancelled = true;
      alive.current = false;
      controller.current?.abort();
      uploadController.current?.abort();
    };
  }, [projectId, loadAttempt]);

  useLayoutEffect(() => {
    if (loaded) rememberChat(projectId, value);
  }, [projectId, loaded, value]);
  useEffect(() => {
    if (!loaded) return;
    const timer = window.setTimeout(() => {
      void flushChatDraft(projectId).catch((reason) => {
        if (alive.current)
          setError(`保存草稿失败，当前内容已保留：${errorMessage(reason)}`);
      });
    }, 180);
    return () => clearTimeout(timer);
  }, [
    projectId,
    loaded,
    value.draft,
    value.draftContent,
    value.assets,
    value.thinking,
    value.modelSelections,
  ]);

  useEffect(() => {
    if (!loaded || !catalog.connected) return;
    setValue((previous) => {
      const selections = { ...previous.modelSelections };
      let changed = false;
      for (const kind of ["agent", "image", "video", "audio"] as const) {
        const options = catalog.models.filter(
          (model) => model.kind === kind && isGenerationModel(model),
        );
        if (!options.some((model) => model.id === selections[kind])) {
          const next = options[0]?.id ?? null;
          if (selections[kind] !== next) {
            selections[kind] = next;
            changed = true;
          }
        }
      }
      return changed ? { ...previous, modelSelections: selections } : previous;
    });
  }, [loaded, catalog.connected, catalog.models]);

  const agent = catalog.models.find(
    (model) =>
      model.kind === "agent" && model.id === value.modelSelections.agent,
  );
  const addAssets = (assets: ChatAsset[]) => {
    assets.forEach((asset) =>
      knownAssets.current.set(asset.id, attachment(asset)),
    );
    setValue((previous) => {
      const merged = [
        ...new Map(
          [...previous.assets, ...assets.map(attachment)].map((asset) => [
            asset.id,
            asset,
          ]),
        ).values(),
      ];
      const content = referenceContent(
        previous.draft,
        merged.map((asset) => asset.id),
        merged,
        previous.draftContent,
      );
      return {
        ...previous,
        draft: contentText(content),
        draftContent: content,
        assets: referenceIds(content).map((id) => knownAssets.current.get(id)!),
      };
    });
  };
  const add = async (
    read: (signal: AbortSignal) => Promise<ChatAsset[]>,
    externalSignal?: AbortSignal,
    commit?: (assets: ChatAsset[]) => boolean | Promise<boolean>,
  ) => {
    if (
      !loaded ||
      uploading.current ||
      submitting.current ||
      externalSignal?.aborted
    )
      return false;
    uploading.current = true;
    const abort = new AbortController();
    const cancel = () => abort.abort();
    externalSignal?.addEventListener("abort", cancel, { once: true });
    uploadController.current = abort;
    setAdding(true);
    setError("");
    try {
      const assets = await read(abort.signal);
      abort.signal.throwIfAborted();
      if (!alive.current) return false;
      if (
        new Set([...current.current.assets, ...assets].map((asset) => asset.id))
          .size > 64
      )
        throw new Error("每次最多添加 64 份参考素材。");
      if (commit) {
        setAdding(false);
        return await commit(assets);
      }
      addAssets(assets);
      return true;
    } catch (reason) {
      if (alive.current && !abort.signal.aborted)
        setError(errorMessage(reason));
      return false;
    } finally {
      externalSignal?.removeEventListener("abort", cancel);
      uploading.current = false;
      if (uploadController.current === abort) uploadController.current = null;
      if (alive.current) setAdding(false);
    }
  };
  const upload = (
    files: File[],
    commit?: (assets: ChatAsset[]) => boolean | Promise<boolean>,
  ) =>
    add(
      async (signal) => {
        if (creationEnabled())
          throw new Error("该工程的助手对话尚未接入，请在画布中上传素材。");
        if (current.current.assets.length + files.length > 64)
          throw new Error("每次最多添加 64 份参考素材。");
        for (const file of files) {
          if (
            !/^(image|video|audio|text)\//.test(file.type) &&
            !/\.(txt|md|markdown)$/i.test(file.name)
          )
            throw new Error(
              `不支持 ${file.name}，请上传图片、视频、音频或文本。`,
            );
          if (
            file.size >
            (file.type.startsWith("image/") ? 32 : 50) * 1024 * 1024
          )
            throw new Error(
              `${file.name} 超过大小限制：图片 32 MB，其他素材 50 MB。`,
            );
        }
        const assets: ChatAsset[] = [];
        try {
          for (const file of files) {
            const result = await request<{
              asset: ChatAsset | null;
              matches: ChatAsset[];
            }>(`/data/${projectId}/assets/${crypto.randomUUID()}`, {
              method: "PUT",
              signal,
              headers: {
                "X-Asset-Name": encodeURIComponent(file.name),
                "Content-Type": "application/octet-stream",
              },
              body: file,
            });
            if (!result.asset)
              throw new Error(
                `${file.name} 与多份项目素材相同，请通过 @ 选择具体素材。`,
              );
            assets.push(attachment(result.asset));
          }
        } catch (reason) {
          if (alive.current && !signal.aborted && assets.length) {
            if (commit) await commit(assets);
            else addAssets(assets);
          }
          throw reason;
        }
        return assets;
      },
      undefined,
      commit,
    );
  const addNodes = (
    nodes: CanvasNode[],
    signal?: AbortSignal,
    commit?: (assets: ChatAsset[]) => boolean | Promise<boolean>,
  ) =>
    add(
      async (signal) => {
        const invalid = pendingCanvasReferences(nodes).filter(
          (item) => item.error,
        );
        if (invalid.length)
          throw new Error(
            invalid.map((item) => `${item.title}：${item.error}`).join(" ") +
              " 整批未插入。",
          );
        if (creationEnabled()) {
          const client = creationClient(projectId);
          const snapshot = await client.refresh();
          const ids = new Set<string>();
          for (const selected of nodes) {
            const item = snapshot.canvasItems.find(
              (item) => item.id === selected.id,
            );
            if (!item) throw new Error("所选节点已不存在，整批未插入。");
            if (item.kind === "subject" && item.binding.role === "editor") {
              const binding = item.binding;
              const doc = snapshot.editorDocuments.find(
                (doc) => doc.id === binding.objectRef.id,
              );
              if (doc?.kind !== "subject" || !doc.data.main)
                throw new Error("主体尚无已保存的主素材，整批未插入。");
              for (const ref of [
                doc.data.main,
                ...doc.data.auxiliaries,
                doc.data.voice,
              ])
                if (ref) ids.add(ref.assetId);
            } else {
              const asset = currentAsset(snapshot, item);
              if (!asset)
                throw new Error("所选节点尚无已保存的资产，整批未插入。");
              ids.add(asset.id);
            }
          }
          const assets = snapshot.assets.filter((asset) => ids.has(asset.id));
          if (assets.length !== ids.size)
            throw new Error("参考素材已不可用，整批未插入。");
          if (
            new Set([
              ...current.current.assets.map((asset) => asset.id),
              ...ids,
            ]).size > 64
          )
            throw new Error("每次最多添加 64 份参考素材。");
          // Reuse canonical assets; preparing references does not execute the
          // Agent loop or write old-format nodes, uploads or chat records.
          for (const asset of assets) {
            signal.throwIfAborted();
            await client.blob(asset.id);
            signal.throwIfAborted();
          }
          return assets.map((asset) => ({
            id: asset.id,
            name: asset.name,
            type: asset.metadata.mimeType,
            size: asset.metadata.size,
            fingerprint: asset.fingerprint,
          }));
        }
        const references = assistantReferences(nodes);
        if (references.length > 64)
          throw new Error("每次最多添加 64 份参考素材，整批未插入。");
        if (!references.length)
          throw new Error("所选节点没有可用素材，请先添加文本或上传素材。");
        const ids = await uploadReferences(projectId, references, signal);
        const assets = await request<ProjectChatAsset[]>(
          `/projects/${projectId}/assets?current_only=true`,
          { signal },
        );
        return ids.map((id) => {
          const asset = assets.find((item) => item.id === id);
          if (!asset) throw new Error("参考素材已不可用，请重新选择。");
          return attachment(asset);
        });
      },
      signal,
      commit,
    );

  const send = async () => {
    if (creationEnabled()) {
      setError("该工程的助手对话尚未接入，请使用节点生成面板。");
      return;
    }
    const draft = current.current;
    if (
      !loaded ||
      !agent ||
      submitting.current ||
      uploading.current ||
      (!draft.draft.trim() && !draft.assets.length)
    )
      return;
    const id = retryId.current ?? crypto.randomUUID();
    retryId.current = id;
    turnId.current = id;
    submitting.current = true;
    const abort = new AbortController();
    controller.current = abort;
    setSending(true);
    setStarted(false);
    setThinkingNow(false);
    setTools([]);
    setError("");
    let accepted = false;
    try {
      rememberChat(projectId, draft);
      await flushChatDraft(projectId);
      abort.signal.throwIfAborted();
      for await (const event of streamChat(
        projectId,
        {
          id,
          modelId: agent.id,
          text: draft.draft.trim(),
          content: draft.draftContent,
          assets: draft.assets.map((asset) => asset.id),
          thinking: draft.thinking,
          modelSelections: draft.modelSelections,
        },
        abort.signal,
      )) {
        if (!alive.current) return;
        if (event.type === "start") {
          accepted = true;
          retryId.current = null;
          setStarted(true);
          setValue((previous) => ({
            ...previous,
            messages: event.conversation.messages,
            draft: "",
            draftContent: [],
            assets: [],
          }));
        } else if (event.type === "end") {
          if (event.conversation)
            setValue((previous) => ({
              ...previous,
              messages: event.conversation!.messages,
            }));
          if (event.error) setError(event.error);
        } else if (event.type === "delta") {
          setThinkingNow(false);
          setValue((previous) => ({
            ...previous,
            messages: previous.messages.map((message) =>
              message.id === id
                ? { ...message, text: message.text + event.text }
                : message,
            ),
          }));
        } else if (event.type === "thinking") setThinkingNow(true);
        else if (event.type === "tool")
          setTools((previous) => {
            const index = previous
              .map(
                (tool) => tool.name === event.name && tool.status === "running",
              )
              .lastIndexOf(true);
            return event.status === "running" || index < 0
              ? [...previous, event]
              : previous.map((tool, i) => (i === index ? event : tool));
          });
      }
    } catch (reason) {
      if (alive.current && !abort.signal.aborted) {
        // A failed response may have been accepted. Reuse the turn ID until resolved.
        if (!accepted) {
          try {
            const saved = await conversation(projectId);
            if (
              alive.current &&
              saved.messages.some((message) => message.id === id)
            ) {
              retryId.current = null;
              setValue({ ...saved, draft: "", draftContent: [], assets: [] });
            }
          } catch {
            /* Keep the original draft and retry identifier. */
          }
        }
        if (alive.current) {
          setError(errorMessage(reason));
          setValue((previous) => ({
            ...previous,
            messages: previous.messages.map((message) =>
              message.id === id && message.status === "streaming"
                ? { ...message, status: "interrupted" }
                : message,
            ),
          }));
        }
      }
    } finally {
      submitting.current = false;
      turnId.current = null;
      if (controller.current === abort) controller.current = null;
      if (alive.current) {
        setSending(false);
        setStarted(false);
        setStopping(false);
      }
      onEnd.current();
    }
  };
  const stop = async () => {
    if (!turnId.current || stopping) return;
    setStopping(true);
    try {
      await stopChat(projectId, turnId.current);
    } catch (reason) {
      if (alive.current) {
        setError(`停止回复失败：${errorMessage(reason)}`);
        setStopping(false);
      }
    }
  };
  return {
    value,
    setValue,
    setContent,
    referenceAssets: [...knownAssets.current.values()],
    loaded,
    sending,
    started,
    stopping,
    thinkingNow,
    tools,
    error,
    setError,
    agent,
    adding,
    upload,
    addNodes,
    addAssets,
    send,
    stop,
    reload: () => setLoadAttempt((n) => n + 1),
  };
}
