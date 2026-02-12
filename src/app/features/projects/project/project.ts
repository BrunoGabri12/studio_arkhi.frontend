import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDto } from '../../../shared/dtos/project.dto';
import { ProjectsService } from '../../../shared/services/projects-service/projects-service';
import { Label } from '../../../shared/components/label/label';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-project',
  imports: [Label, ImageModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectsService);
  protected readonly project = signal<ProjectDto | undefined>(undefined);

  private readonly projectId = signal<number | null>(null);

  constructor() {
    effect(() => {
      const id = this.projectId();
      if (id !== null) {
        const foundProject = this.projectService.findById(id);
        this.project.set(foundProject);
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const projectId = params['id'];
      this.projectId.set(projectId);
    });
  }
}
