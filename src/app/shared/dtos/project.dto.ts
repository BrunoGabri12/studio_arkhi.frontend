import { ProjectType } from '../enum/project-type.enum';

export interface ProjectDto {
  id: number;
  name: string;
  description: string;
  type: ProjectType;
  images: ImageProject[];
  year: number;
  location: string;
  area?: string;
}

export interface ImageProject {
  url: string;
  coverUrl: string;
  description?: string;
}
