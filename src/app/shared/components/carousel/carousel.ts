import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Banner } from '../../dtos/banner.dto';
import { Banners } from '../../services/banners/banners';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  private readonly breakpoint = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);
  private readonly bannersService = inject(Banners);

  protected images = signal<Banner[]>([]);

  protected currentIndex = signal(0);
  protected isMobile = signal(false);

  constructor() {
    this.breakpoint
      .observe([Breakpoints.XSmall])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.isMobile.set(result.matches);
      });
  }

  ngOnInit() {
    this.getBanners();
  }

  nextPage() {
    this.currentIndex.set((this.currentIndex() + 1) % this.images().length);
  }

  private getBanners() {
    this.bannersService.getBanners().subscribe((banners) => {
      this.images.set(banners);
      this.startAutoSlide();
    });
  }

  private startAutoSlide() {
    setInterval(() => {
      this.nextPage();
    }, 10000);
  }

  getImagePath(image: any) {
    return this.isMobile() && image.mobilePath ? image.mobilePath : image.path;
  }
}
