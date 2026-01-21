import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

interface MenuLinks {
  label: string;
  route: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterModule, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private readonly breakpoint = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);

  protected readonly menuOpen = signal(false);
  protected readonly showMenu = signal(false);
  protected readonly getMenuClass = () => {
    if (this.showMenu()) {
      return 'fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-20 transform transition-transform duration-300';
    } else {
      return 'flex justify-center';
    }
  };
  protected readonly getNavigationMenuClass = () => {
    if (this.showMenu()) {
      return 'flex flex-col gap-8 mt-24 ml-8 text-lg text-secondary';
    } else {
      return 'text-primary flex flex-row gap-10';
    }
  };

  protected readonly menuLinks: MenuLinks[] = [
    { label: 'Home', route: '/home' },
    { label: 'Projetos', route: '/projects/comercial' },
    { label: 'Contato', route: '/contact' },
  ];

  protected closeMenu() {
    if (this.showMenu()) {
      this.menuOpen.set(false);
    }
  }

  constructor() {
    this.breakpoint
      .observe([Breakpoints.XSmall])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.showMenu.set(result.matches);
      });
  }
}
