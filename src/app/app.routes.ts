import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Project } from './features/projects/project/project';
import { Contact } from './features/contact/contact';
import { Projects } from './features/projects/projects';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
    title: 'Studio Arkhi',
  },
  {
    path: 'projects/:type',
    component: Projects,
    title: 'Projetos',
  },
  {
    path: 'projects/project/:id',
    component: Project,
    title: 'Projetos',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contato',
  },
];
