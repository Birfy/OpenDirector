export interface Project {
  id: string;
  name: string;
  path: string;
}

export interface ProjectList {
  projects: Project[];
  warnings: string[];
}
