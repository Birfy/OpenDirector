export function j(e, recordId, projectId, turnUuid, workspaceId) {
  return {
    taskId: e.taskId,
    submitId: e.taskId,
    recordId,
    projectId,
    turnUuid,
    workspaceId,
  };
}
