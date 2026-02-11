import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDto } from '../../dtos/project.dto';

export type ProjectShowCase = Omit<ProjectDto, 'images' | 'location' | 'area' | 'year'> & {
  imageUrl: string;
};

@Component({
  selector: 'app-image-card',
  imports: [],
  templateUrl: './image-card.html',
  styleUrl: './image-card.css',
})
export class ImageCard {
  private readonly router = inject(Router);

  readonly showCase = input.required<ProjectShowCase>();

  protected goToProject() {
    this.router.navigate(['/projects/project/', this.showCase().id]);
  }
}
