import { Component } from '@angular/core';
import { ProjectType } from '../../../shared/enum/project-type.enum';

export interface SearchParams {
  type?: ProjectType;
  term?: string;
}

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
  getProjects(search?: SearchParams) {


    
    // Implementation for fetching projects based on search parameters
  }

  getProject(id: number) {}
}
