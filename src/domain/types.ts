/** Authored reconstruction types, not recovered TypeScript declarations. */
export type GenerationMode = "agent" | "image" | "video" | "audio";

export interface GenerationRequest {
  prompt: string;
  mode: GenerationMode;
  aspectRatio: string;
  referenceNames?: string[];
}

export interface GenerationJob extends GenerationRequest {
  id: string;
  status: "running" | "completed" | "aborted";
  createdAt: number;
}

export interface Preset {
  id: string;
  title: string;
  description: string;
  category: string;
  mode: GenerationMode;
  prompt: string;
  art: "orbit" | "chair" | "landscape" | "poster" | "portrait" | "wave";
  tag?: string;
}

export interface Skill {
  id: string;
  label: string;
  prompt: string;
}
