import { Component, inject } from '@angular/core';
import { Label } from '../label/label';
import { Router, RouterLink } from '@angular/router';
import { ProjectType } from '../../enum/project-type.enum';

@Component({
  selector: 'app-footer',
  imports: [Label],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly router = inject(Router);
  protected readonly ProjectType = ProjectType;

  protected readonly year = new Date().getFullYear();

  protected goToProjectsByType(type: ProjectType): void {
    this.router.navigate(['/projects'], { queryParams: { type } });
  }
}
