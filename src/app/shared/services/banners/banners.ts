import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Banner } from '../../dtos/banner.dto';
import { ProjectShowCase } from '../../dtos/project.dto';
import { ProjectType } from '../../enum/project-type.enum';

@Injectable({
  providedIn: 'root',
})
export class Banners {
  getBanners(): Observable<Banner[]> {
    return of(MOCK_BANNERS);
  }

  getShowCases(): Observable<ProjectShowCase[]> {
    return of(MOCK_PROJECT_SHOWCASES);
  }
}

const MOCK_BANNERS: Banner[] = [
  {
    id: '1',
    mobilePath: 'interiores.jpg',
    desktopPath: '/interiores-teste.jpg',
  },
  {
    id: '2',
    mobilePath: 'reforma.jpg',
    desktopPath: '/reforma-teste.jpg',
  },
];

const MOCK_PROJECT_SHOWCASES: ProjectShowCase[] = [
  {
    id: '1',
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
    year: 2024,
  },
  {
    id: '1',
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
    year: 2024,
  },
  {
    id: '1',
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
    year: 2024,
  },
  {
    id: '1',
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
    year: 2024,
  },
  {
    id: '1',
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
    year: 2024,
  },
];
