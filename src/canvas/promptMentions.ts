export interface PromptMention {
  sourceNodeId?: string;
  referenceId?: string;
  start: number;
  end: number;
}
export interface InsertedMention {
  id: string;
  start: number;
  end: number;
}

/** Keep identity through textarea edits; never infer a reference from a name. */
export function editPromptMentions(
  before: string,
  after: string,
  mentions: readonly PromptMention[] = [],
  inserted?: InsertedMention,
): PromptMention[] {
  let start = 0;
  while (
    start < before.length &&
    start < after.length &&
    before[start] === after[start]
  )
    start++;
  let oldEnd = before.length,
    newEnd = after.length;
  while (
    oldEnd > start &&
    newEnd > start &&
    before[oldEnd - 1] === after[newEnd - 1]
  ) {
    oldEnd--;
    newEnd--;
  }
  const delta = after.length - before.length;
  const updated = mentions.flatMap((mention) => {
    if (mention.end <= start) return [{ ...mention }];
    if (mention.start >= oldEnd)
      return [
        { ...mention, start: mention.start + delta, end: mention.end + delta },
      ];
    return [];
  });
  if (inserted)
    updated.push({
      sourceNodeId: inserted.id,
      start: inserted.start,
      end: inserted.end,
    });
  return updated.sort((a, b) => a.start - b.start);
}
