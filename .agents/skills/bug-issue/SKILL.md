---
name: bug-issue
description: Reproduce and verify a reported MuseShow bug, then publish an evidence-based GitHub Bug Issue. Use when the user invokes bug-issue or asks for bug investigation with Issue creation; not for implementation-only requests or discussion of the skill itself.
---

# Bug Issue

Turn a reported failure into a reproducible, actionable GitHub Issue. Use the
current conversation, including screenshots and prior investigation, but
independently verify claims that materially affect the report. Write the Issue
in Chinese by default, preserving code identifiers and the user's language
preference.

## Scope and evidence

- Invocation with a specific bug authorizes investigation and Issue creation.
  Skill design or discussion alone does not authorize publication. Honor any
  draft-only or no-publish instruction.
- Inspect the worktree before investigating. Preserve unrelated user changes.
  Prefer an isolated temporary project or existing test fixture for reproduction;
  do not alter real project data or invoke paid external services merely to
  produce a report.
- Reproduce the smallest meaningful user path when feasible. Record the exact
  action sequence, observed result (including status or error), expected result,
  and environment details that affect reproducibility. If only a lower-layer
  reproduction succeeds, state that limit plainly. Screenshots support the
  observation; they do not establish the cause by themselves.
- Trace the relevant UI/API/backend path and check competing explanations with
  focused evidence. Mark unverified mechanisms as hypotheses. Run existing
  targeted tests when useful; a passing test may document current behavior
  rather than validate the desired behavior. Stop once the report is supported.
- Do not implement a fix, change tests, stage, commit, or create a PR unless
  separately requested. Propose acceptance criteria that can verify a future
  fix without prescribing an unsupported implementation.

## Issue content

Use a focused title such as `[bug] 画布：移除上传节点后无法删除资产` and a concise body
with these sections, omitting any section that has no evidence:

```markdown
## 问题与影响

用户可见的现象及影响。

## 复现步骤

1. 可执行的最短步骤。

## 预期与实际

- 预期：……
- 实际：……

## 定位与证据

已验证的调用链、关键状态及必要的仓库文件链接；明确复现层级。

## 验收标准

- [ ] 可观察的修复结果。
- [ ] 关键兼容或回归行为。
```

Include exact error text only where it helps recognition. Redact credentials,
private paths, and sensitive project content. Link repository files using URLs
valid on the remote, preferably pinned to the inspected commit; do not place
local absolute paths in the Issue. Do not describe a cause as confirmed solely
because a test passes or an error message names it. Do not claim an attachment
is present unless the remote Issue actually contains it.

## Publish

1. Check `gh auth status` and resolve the repository explicitly named by the
   user; otherwise use `gh repo view --json nameWithOwner,url,isArchived,hasIssuesEnabled`.
   Confirm the target is accessible, active, and supports Issues. Use `--repo`
   for every later Issue command. Never print tokens or change authentication.
2. Search open and closed Issues in that repository for the same symptom and
   cause. Compare bodies, not only titles. Report an existing match instead of
   creating a duplicate; do not edit or reopen it without authorization.
3. When publication is authorized and the target is clear, create the Issue
   with `gh issue create --repo ... --title ... --body-file ...`. Write the exact
   Markdown body to a temporary UTF-8 file, pass that file to `--body-file`,
   and remove it after a definite outcome. Add labels or assignees only when
   requested and available.
4. Check the returned URL. If creation has an uncertain outcome, look up the
   same title and body before any retry; never blindly create a duplicate.
   If authentication, repository access, or publication fails, report the
   precise blocker and provide the complete draft in chat for later use.

After success, return the Issue URL and a short summary of the reproduced
evidence. Do not ask for an extra confirmation once publication was requested.
