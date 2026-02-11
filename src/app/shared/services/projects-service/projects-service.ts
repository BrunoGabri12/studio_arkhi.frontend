import { Injectable } from '@angular/core';
import { ProjectType } from '../../enum/project-type.enum';
import { ProjectDto } from '../../dtos/project.dto';
import { projects } from './projects';

export interface SearchProject {
  filter?: AvailableProjects;
}

export type AvailableProjects = ProjectType | 'Todos';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  searchProjects(searchParams?: SearchProject): ProjectDto[] {
    return projects.filter((project) => {
      if (searchParams?.filter && searchParams.filter !== 'Todos') {
        return project.type === searchParams.filter;
      }
      return true;
    });
  }
}
