import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Banner } from '../../dtos/banner.dto';
import { ProjectType } from '../../enum/project-type.enum';
import { ProjectShowCase } from '../../components/image-card/image-card';

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
    id: 1,
    mobilePath: './interiores.jpg',
    desktopPath: './interiores.jpg',
  },
  {
    id: 2,
    mobilePath: './reforma.jpg',
    desktopPath: './reforma.jpg',
  },
];

const MOCK_PROJECT_SHOWCASES: ProjectShowCase[] = [
  {
    id: 1,
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
  },
  {
    id: 2,
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
  },
  {
    id: 3,
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
  },
  {
    id: 4,
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
  },
  {
    id: 5,
    name: 'Projeto Residencial',
    description:
      'Um projeto completo para transformar sua casa em um lar aconchegante e funcional.',
    imageUrl: '/residencial.jpg',
    type: ProjectType.RESIDENCIAL,
  },
];
