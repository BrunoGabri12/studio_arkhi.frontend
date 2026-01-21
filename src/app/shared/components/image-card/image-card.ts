import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectShowCase } from '../../dtos/project.dto';

@Component({
  selector: 'app-image-card',
  imports: [],
  templateUrl: './image-card.html',
  styleUrl: './image-card.css',
})
export class ImageCard {
  private readonly router = inject(Router);

  showCase = input.required<ProjectShowCase>();

  protected goToProject() {
    this.router.navigate(['/projects/project/', this.showCase().id]);
  }
}
