---
name: git-commit
description: Create a OpenDirector Git commit, or draft its message, from the current staging area only. Inspect git diff --staged first; never stage files or include unstaged work.
---

# Git Commit

Commit only changes the user has already staged. Creating or editing this
skill does not authorize a commit. A message-only request authorizes only
drafting the message; execute a commit when the user requests it.

## Workflow

1. Run `git diff --staged` before any other Git inspection command. If
   command output is truncated, read the remaining staged diff before
   describing it. For binary files, describe only what can be established
   from staged metadata or staged content.
2. If the diff is empty, stop and report that nothing is staged. Do not
   stage files, create an empty commit, or infer a commit from prior work.
3. Base the message exclusively on this staged diff. Additional inspection
   may use `git diff --staged --stat`, `git diff --staged --name-status`, or
   `git show :path` to read the index version. Working-tree files, previous
   conversation, and the product roadmap are not evidence of staged work.
4. Choose a type prefix and, when useful, one scope from the guidance below.
   Write a title and a body whose first line is exactly `## summary`.
5. Before committing, run `git diff --staged` again. If its content changed
   during preparation, reread the new diff and revise the message. If it
   became empty, stop. Do not include newly staged material without review.
6. Save the exact message to a temporary file outside the working tree and
   run `git commit --file <message-file>` without a pathspec or any option
   that changes the staging area. Respect normal sandbox permissions.
7. After success, report the commit hash and title. Inspect the resulting
   commit with `git log -1 --format='%h %s'` and `git show --stat --oneline
   HEAD` as needed. If hooks or validation fail, report the failure and stop;
   leave the staging area as returned, without automatic fixes or retries.

## Staging and commit boundaries

- Never run `git add`, `git stage`, `git commit -a` / `--all`, or any
  equivalent staging operation, including `git update-index` or
  `git apply --cached` / `--index`.
- Never use `git commit --include`, `--only`, or path arguments. They can
  commit working-tree content or bypass part of the reviewed index.
- Do not unstage, reset, stash, restore, edit, or regenerate project files
  as part of committing. Partially staged files must retain that boundary.
- Do not split staged work, amend commits, bypass hooks, or push unless
  separately requested. Mixed staged changes may use an umbrella title and
  summary bullets; do not silently select a subset.
- If a hook changes the index or files, report the observed effect. Do not
  undo its changes or claim that the index necessarily remained unchanged.

## Title

Use `[type] scope: imperative description`, omitting `scope:` when a change
spans the repository or a scope would add little information. Keep the full
title about 70 characters or less. Use English by default for titles and
bodies; follow an explicit user language preference.

Choose the type by the staged change's purpose, not its file extension:

| Prefix | Use |
|---|---|
| `[feat]` | New user-visible behavior or a newly usable capability. |
| `[bugfix]` | Correctness fixes, regressions, stale-result protection, or recovery fixes. |
| `[refactor]` | Code or directory restructuring that preserves behavior. |
| `[perf]` | A performance improvement supported by the staged implementation; quote measurements only when verified. |
| `[docs]` | Documentation, tutorials, comments, examples, and skill instructions. |
| `[test]` | Tests, fixtures, or test infrastructure. |
| `[build]` | Dependencies, lockfiles, packaging, and build tooling. |
| `[ci]` | Automated integration, validation, or delivery pipelines. |
| `[chore]` | Repository or operational maintenance not covered above. |

UI additions and visual fixes use `[feat]` or `[bugfix]`; CSS files alone do
not imply a formatting-only change. When a commit includes supporting tests
and docs, choose the type of its main behavior change.

Scopes describe the affected area, independently of the type:

| Scope | OpenDirector area |
|---|---|
| `web` | Browser workbench, layouts, components, and local interactions. |
| `api` | HTTP / SSE entrypoints, routes, and request handling. |
| `agent` | Server-side creative decisions, tools, and evaluation. |
| `workflow` | Durable orchestration, dispatch, waiting, and recovery. |
| `media` | Probing, proxies, audio, rendering, and export processing. |
| `providers` | Language-model and image, video, or speech adapters. |
| `storage` | Database, object storage, repositories, and migrations. |
| `contracts` | API, event, and shared timeline contracts. |
| `repo` | Repository layout, shared tooling, and repository skills. |

Use a narrower product scope such as `projects`, `assistant`, `timeline`,
or `exports` when clearer. The browser assistant UI is distinct from the
server-side `agent`. Future architecture is context for naming, not evidence
that a capability already exists. Avoid prefixes such as `[agent]` or
`[media]` that mix the type of change with its subsystem.

## Body

The required body starts with `## summary`, followed by a short paragraph
or Markdown bullets. For multiple distinct points, use bullets starting
with `- `. Explain the concrete change and its purpose; state an important
preserved invariant when it helps reviewers assess a refactor or fix.

Wrap prose and bullet continuation lines manually near 70 characters.
Keep commands, identifiers, and URLs intact when wrapping would break them.
Use a structured tool argument or a temporary message file with actual
newlines; do not interpolate message text into shell command strings.

Add the following only when relevant and supported:

- `## validation`: commands or checks actually performed against the staged
  content. A passing working-tree build does not verify a partially staged
  version. If that distinction cannot be resolved, omit the section or
  explicitly describe the verification limit. Never invent passing tests.
- `## breaking changes`: incompatible API, event, timeline, storage, or
  command changes, their impact, and a migration action when known.
- `Refs: #123` or `Fixes: #123`: only for a real issue supplied by the user
  or verified from repository context. Use `Fixes` only when addressed.

Do not require empty optional sections, repeat the title as the entire
summary, include secrets, or claim simulated generation is a real model
integration. Describe only the staged result, not the work chronology.

Example format (not a claim about the current staging area):

```text
[refactor] web: organize the workbench into feature modules

## summary

- Move the frontend into apps/web and update resource imports.
- Separate layout controls, project operations, and assistant types
  while preserving existing browser storage keys and schemas.
- Update installation, development, and build instructions.
```
