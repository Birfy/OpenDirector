/** Locale contracts shared by the React provider, domain modules and tests. */
export type Locale = "zh-CN" | "en-US";

export type PluralMessage = {
  one: string;
  other: string;
};

export type MessageEntry = string | PluralMessage;

export type MessageParams = Record<string, string | number>;

/** A translatable message produced by domain code instead of a rendered sentence. */
export type MessageDescriptor = {
  key: MessageKey;
  params?: MessageParams;
};

/** Resolved lazily by `messages.ts`; importing the type avoids a runtime cycle. */
export type MessageKey = keyof typeof import("./messages/zh-CN").zhCN;
