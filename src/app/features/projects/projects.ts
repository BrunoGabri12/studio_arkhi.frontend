import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Label } from '../../shared/components/label/label';
import { ProjectsService } from '../../shared/services/projects-service/projects-service';
import { FormsModule } from '@angular/forms';
import { ProjectType } from '../../shared/enum/project-type.enum';
import { ProjectDto } from '../../shared/dtos/project.dto';
import { AvailableProjects } from '../../shared/services/projects-service/projects-service';
import { ImageCard } from '../../shared/components/image-card/image-card';
import { ProjectShowCase } from '../../shared/components/image-card/image-card';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-projects',
  imports: [Label, FormsModule, ImageCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  private readonly router = inject(Router);
  private readonly activateRoute = inject(ActivatedRoute);
  private readonly projectService = inject(ProjectsService);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly selectedFilter = signal<AvailableProjects>('Todos');
  protected readonly projectTypes: AvailableProjects[] = ['Todos', ...Object.values(ProjectType)];
  protected readonly projects = signal<ProjectDto[]>([]);
  protected readonly filteredProjects = signal<ProjectShowCase[]>([]);

  constructor() {
    effect(() => {
      if (this.selectedFilter()) {
        this.searchProjects();
      }
    });
  }

  ngOnInit(): void {
    this.activateRoute.queryParams.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const type = params['type'];

      if (type && this.projectTypes.includes(type)) {
        this.selectedFilter.set(type);
      }
    });

    this.searchProjects();
  }

  filterChange(filter: AvailableProjects) {
    this.selectedFilter.set(filter);
  }

  searchProjects() {
    const projects = this.projectService.searchProjects({
      filter: this.selectedFilter() ?? 'Todos',
    });

    console.log('Projects found:', this.selectedFilter());

    this.projects.set(projects);
    this.filteredProjects.set(projects.map((project) => this.toShowCase(project)));
  }

  goToProjectDetail(projectId: number) {
    this.router.navigate(['/projects/project', projectId]);
  }

  protected toShowCase(project: ProjectDto): ProjectShowCase {
    return {
      id: project.id,
      name: project.name,
      description: project.description,
      type: project.type,
      imageUrl: project.images[0]?.url ?? '',
    };
  }
}
