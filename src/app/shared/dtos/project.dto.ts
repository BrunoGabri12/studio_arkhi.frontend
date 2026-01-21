import { ProjectType } from '../enum/project-type.enum';

export interface Project {
  id: string;
  name: string;
  description: string;
  type: ProjectType;
  images: ImageProject[];
  year: number;
  location: string;
  area?: string;
}

export type ProjectShowCase = Omit<Project, 'images' | 'location' | 'area'> & {
  imageUrl: string;
};

export interface ImageProject {
  url: string;
  coverUrl: string;
  description?: string;
}
