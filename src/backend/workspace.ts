import { ApiError, json, request } from "./api.ts";
import { openBackendProject, releaseBackendProject } from "./projects.ts";
import { createDocument, type CanvasDocument } from "../canvas/model.ts";
import { parseDocument, serializeDocument } from "../canvas/storage.ts";
import {
  creationClient,
  creationEnabled,
  creationPath,
  objectVersion,
} from "./creationClient.ts";
import { CreationProjection } from "./creationProjection.ts";
import { initializeConnectedFrames } from "../canvas/frameReferences.ts";

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
export interface WorkspaceProjectList {
  projects: WorkspaceProject[];
  warnings: string[];
}
interface WorkspaceRecord {
  revision: number;
  document: unknown;
}
const revisions = new Map<string, number>();
const lastKey = creationEnabled()
  ? "opendesign.lastUnifiedFilesystemProject"
  : "opendesign.lastFilesystemProject";

export const listWorkspaceProjects = () =>
  request<WorkspaceProjectList>(
    creationEnabled() ? "/creation/projects" : "/projects",
  );

export async function readWorkspaceDocument(project: WorkspaceProject) {
  if (creationEnabled()) return workspaceProjection(project.id).open();
  const value = await request<WorkspaceRecord>(
    `/projects/${project.id}/workspace`,
  );
  revisions.set(project.id, value.revision);
  if (value.document === null)
    return { ...createDocument(project.name), id: project.id };
  const parsed = parseDocument(value.document);
  if (!parsed.ok) throw new Error(parsed.error.message);
  if (parsed.value.id !== project.id) throw new Error("画布文档不属于此项目。");
  return initializeConnectedFrames({ ...parsed.value, title: project.name });
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

export async function saveWorkspaceDocument(document: CanvasDocument) {
  if (creationEnabled()) {
    const changed = await workspaceProjection(document.id).save(document);
    if (changed)
      creationClient(document.id).install(creationClient(document.id).snapshot);
    return;
  }
  const serialized = serializeDocument(document);
  if (!serialized.ok) throw new Error(serialized.error.message);
  const revision = revisions.get(document.id);
  if (revision === undefined) throw new Error("请先打开本地项目，再保存画布。");
  const saved = await request<WorkspaceRecord>(
    `/projects/${document.id}/workspace`,
    json("PUT", { revision, document: JSON.parse(serialized.value) }),
  );
  revisions.set(document.id, saved.revision);
}

export async function createWorkspaceProject(name: string, id: string) {
  if (creationEnabled()) {
    await creationClient(id).command("project.create", { name });
    return (await listWorkspaceProjects()).projects.find(
      (project) => project.id === id,
    )!;
  }
  return request<WorkspaceProject>("/projects", json("POST", { id, name }));
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
  // React StrictMode replays mount effects; creation must happen only once.
  initialization ??= (async () => {
    let { projects } = await listWorkspaceProjects();
    let selected: string | undefined =
      window.location.pathname.split("/ai-canvas/")[1];
    if (selected) selected = decodeURIComponent(selected);
    else
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
          // Both formats keep their own inventory. An occupied directory is
          // preserved while this entry creates an independent project beside it.
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
  })().catch((error) => {
    initialization = undefined;
    throw error;
  });
  return initialization;
}

export async function renameWorkspaceProject(
  project: WorkspaceProject,
  name: string,
) {
  if (creationEnabled()) {
    await releaseBackendProject();
    const client = creationClient(project.id);
    try {
      await client.command("project.rename", { name }, [
        objectVersion("project", client.snapshot.project),
      ]);
    } finally {
      await openBackendProject(project.id, client.snapshot.project.name);
    }
    return (await listWorkspaceProjects()).projects.find(
      (item) => item.id === project.id,
    )!;
  }
  await releaseBackendProject();
  let renamed: WorkspaceProject;
  try {
    renamed = await request<WorkspaceProject>(
      `/projects/${project.id}`,
      json("PATCH", { name, expectedName: project.name }),
    );
  } catch (error) {
    // Keep the old project writable when the name conflicts or tasks prevent rename.
    await openBackendProject(project.id, project.name);
    throw error;
  }
  await openBackendProject(renamed.id, renamed.name);
  return renamed;
}
