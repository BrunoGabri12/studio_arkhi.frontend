import { Component, inject, OnInit, signal } from '@angular/core';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Label } from '../../shared/components/label/label';
import { Button } from '../../shared/components/button/button';
import AOS from 'aos';
import { Router } from '@angular/router';
import { Banners } from '../../shared/services/banners/banners';
import { ImageCard, ProjectShowCase } from '../../shared/components/image-card/image-card';
import { NgClass } from '@angular/common';

const steps = [
  {
    icon: 'fa-solid fa-lightbulb',
    title: '1. Primeiro Contato',
    description:
      'O cliente entra em contato com sua demanda: reforma de interiores, design de móveis ou projeto arquitetônico.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: '2. Orçamento Transparente',
    description:
      'Realizamos e apresentamos o orçamento detalhado, esclarecendo todas as dúvidas do cliente.',
  },
  {
    icon: 'fa-solid fa-brain',
    title: '3. Psicobriefing',
    description:
      'Aplicamos técnicas de psicologia a arquitetura para entender profundamente os desejos e necessidades do cliente.',
  },
  {
    icon: 'fa-solid fa-drafting-compass',
    title: '4. Apresentação do Projeto',
    description:
      'Apresentamos o projeto detalhado, incluindo plantas, maquetes e visualizações 3D para sua aprovação.',
  },
  {
    icon: 'fa-solid fa-ruler-combined',
    title: '5. Detalhamento',
    description:
      'Elaboramos todos os detalhes técnicos, como plantas, cortes e especificações, garantindo a viabilidade do projeto.',
  },
  {
    icon: 'fa-solid fa-check',
    title: '6. Execução',
    description:
      'Acompanhamos de perto a execução da obra, garantindo que tudo seja realizado conforme o planejado.',
  },
];

@Component({
  selector: 'app-home',
  imports: [Carousel, Label, Button, ImageCard, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly router = inject(Router);
  private readonly bannersService = inject(Banners);

  protected readonly showCases = signal<ProjectShowCase[]>([]);
  protected readonly steps = steps;

  ngOnInit() {
    AOS.init({
      duration: 2000,
      disable: 'mobile',
    });

    this.getShowCaseProjects();
  }

  protected getShowCaseProjects() {
    this.bannersService.getShowCases().subscribe((projects) => {
      this.showCases.set(projects);
    });
  }

  protected goToContact() {
    this.router.navigate(['/contact']);
  }

  protected goToProjects() {
    this.router.navigate(['/projects', { type: 'Residencial' }]);
  }
}
