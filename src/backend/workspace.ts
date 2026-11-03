import { type CanvasDocument } from "../canvas/model.ts";
import type {
  CommandReceipt,
  ProjectSnapshot,
} from "../contracts/generated.ts";
import { ApiError, json, request } from "./api.ts";
import {
  creationClient,
  creationPath,
  objectVersion,
} from "./creationClient.ts";
import { CreationProjection } from "./creationProjection.ts";
import {
  activeBackendProjectId,
  openBackendProject,
  releaseBackendProject,
} from "./projects.ts";

const projections = new Map<string, CreationProjection>();
export function workspaceProjection(id: string) {
  let projection = projections.get(id);
  if (!projection) {
    projection = new CreationProjection(creationClient(id));
    projections.set(id, projection);
  }
  return projection;
}

export interface WorkspaceProject {
  id: string;
  name: string;
  path: string;
}
export interface UnreadableWorkspaceProject {
  id: string | null;
  name: string;
  path: string;
  reason: string;
}
export interface WorkspaceProjectList {
  projects: WorkspaceProject[];
  unreadable: UnreadableWorkspaceProject[];
  warnings: string[];
}
export interface WorkspaceCleanupResult {
  removed: string[];
  failed: { name: string; message: string }[];
}
const lastKey = "opendirector.lastUnifiedFilesystemProject";

export const listWorkspaceProjects = () =>
  request<WorkspaceProjectList>("/creation/projects");

export const cleanupUnreadableWorkspaceProjects = () =>
  request<WorkspaceCleanupResult>("/creation/projects/cleanup", {
    method: "POST",
  });

/** Whether removing a project lands in the operating system recycle bin. */
export const projectDeleteMode = () =>
  request<{ projectDelete: "recycle_bin" | "permanent" }>("/creation/storage");

export async function readWorkspaceDocument(project: WorkspaceProject) {
  return workspaceProjection(project.id).open();
}

export async function openWorkspaceProject(project: WorkspaceProject) {
  // Read first: invalid content cannot take the lease away from the old project.
  const document = await readWorkspaceDocument(project);
  await openBackendProject(project.id, project.name);
  try {
    localStorage.setItem(lastKey, project.id);
  } catch {
    /* UI hint only. */
  }
  return document;
}

export async function saveWorkspaceDocument(
  document: CanvasDocument,
  options: { saveView?: boolean } = {},
) {
  const changed = await workspaceProjection(document.id).save(
    document,
    options,
  );
  if (changed)
    creationClient(document.id).install(creationClient(document.id).snapshot);
  return;
}

export async function createWorkspaceProject(name: string, id: string) {
  // Unified creation does not acquire a lease; projection.open does that.
  await creationClient(id).command("project.create", { name });
  return (await listWorkspaceProjects()).projects.find(
    (project) => project.id === id,
  )!;
}

/** JSON imports/examples become independent filesystem projects. */
export async function importWorkspaceDocument(document: CanvasDocument) {
  const { projects } = await listWorkspaceProjects();
  const occupied = new Set(
    projects.map((project) => project.name.toLocaleLowerCase()),
  );
  const base =
    document.title
      .replace(/[<>:"/\\|?*\x00-\x1f]/g, " ")
      .trim()
      .replace(/[. ]+$/, "")
      .slice(0, 80) || "导入画布";
  let name = base,
    suffix = 2;
  while (occupied.has(name.toLocaleLowerCase())) name = `${base} (${suffix++})`;
  const project = await createWorkspaceProject(name, crypto.randomUUID());
  await openWorkspaceProject(project);
  const imported = { ...document, id: project.id, title: project.name };
  await saveWorkspaceDocument(imported);
  return imported;
}

let initialization: Promise<CanvasDocument> | undefined;
export function initializeWorkspace() {
  // StrictMode's concurrent mount effects share in-flight work. A later mount
  // must reread the current project, not reinstall the first empty document.
  initialization ??= (async () => {
    let { projects } = await listWorkspaceProjects();
    let selected: string | undefined =
      window.location.pathname.split("/ai-canvas/")[1];
    if (selected) {
      selected = decodeURIComponent(selected);
      if (!projects.some((project) => project.id === selected)) {
        // Ask the authoritative store for the precise missing/unsupported-format error.
        await request(creationPath(selected));
        throw new Error("工程不在可打开的列表中，请检查工程文件后重试。");
      }
    } else
      try {
        selected = localStorage.getItem(lastKey) ?? undefined;
      } catch {
        /* Optional hint. */
      }
    if (!projects.length) {
      const id = crypto.randomUUID();
      try {
        projects = [await createWorkspaceProject("未命名画布", id)];
      } catch (error) {
        // Another window may have created the default directory concurrently.
        if (!(error instanceof ApiError && error.status === 409)) throw error;
        projects = (await listWorkspaceProjects()).projects;
        if (!projects.length) {
          // Preserve occupied directories, including unsupported old projects.
          for (let suffix = 2; suffix <= 100 && !projects.length; suffix++) {
            try {
              projects = [
                await createWorkspaceProject(`未命名画布 (${suffix})`, id),
              ];
            } catch (conflict) {
              if (!(conflict instanceof ApiError && conflict.status === 409))
                throw conflict;
            }
          }
          if (!projects.length) throw error;
        }
      }
    }
    const document = await openWorkspaceProject(
      projects.find((project) => project.id === selected) ?? projects[0]!,
    );
    await saveWorkspaceDocument(document);
    return document;
  })().finally(() => {
    initialization = undefined;
  });
  return initialization;
}

export async function renameWorkspaceProject(
  project: WorkspaceProject,
  name: string,
) {
  // Reading the project is enough to check its version; only the project this
  // window holds needs its editing lease paused for the rename.
  const snapshot = await request<ProjectSnapshot>(creationPath(project.id));
  const current = activeBackendProjectId() === project.id;
  if (current) await releaseBackendProject();
  try {
    await creationClient(project.id).command("project.rename", { name }, [
      objectVersion("project", snapshot.project),
    ]);
  } finally {
    if (current) await openBackendProject(project.id, name).catch(() => {});
  }
  return (await listWorkspaceProjects()).projects.find(
    (item) => item.id === project.id,
  )!;
}

/** Removes a closed project from the list; the directory goes to the operating
 * system recycle bin when the platform supports it and is deleted otherwise. */
export async function trashWorkspaceProject(project: WorkspaceProject) {
  const snapshot = await request<ProjectSnapshot>(creationPath(project.id));
  const current = activeBackendProjectId() === project.id;
  if (current) await releaseBackendProject();
  try {
    await request<CommandReceipt>(
      `${creationPath(project.id)}/commands`,
      json("POST", {
        commandId: crypto.randomUUID(),
        projectId: project.id,
        type: "project.trash",
        payload: {},
        expectedVersions: [objectVersion("project", snapshot.project)],
      }),
    );
  } catch (error) {
    if (current)
      await openBackendProject(project.id, project.name).catch(() => {});
    // A lost response must not report a project that is already gone as an error.
    if (!(error instanceof ApiError) || error.status !== 404) throw error;
  }
  creationClient(project.id).close();
  projections.delete(project.id);
}
