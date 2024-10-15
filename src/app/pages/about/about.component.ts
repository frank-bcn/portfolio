import { Component, OnDestroy } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnDestroy {

  images: string[] = [
    '/assets/ images/etc_images/about.png',
    '/assets/ images/etc_images/background.png',
    '/assets/ images/etc_images/portfolio.png'
  ];

  shuffledImages: any[] = [];
  intervalId: any;

  constructor(public ss: ScreenService, public router: Router) {
    this.shuffleImages();

    this.intervalId = setInterval(() => {
      this.shuffleImages();
    }, 30000);
  }

  /**
   * Shuffles the images array and assigns random positions.
   */
  shuffleImages() {

    this.shuffledImages = this.images
      .map((image) => ({
        src: image,
        left: Math.random() * 80 + '%',
        animationDelay: `${Math.random() * 15}s` 
      }))
      .sort(() => Math.random() - 0.5);
  }

  /**
   * Cleanup interval on component destruction.
   */
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  /**
   * Navigates to the contact page.
   */
  navigateToContact() {
    if (this.ss.tapView) {
      this.ss.active = true;
    }
    this.router.navigate(['/contact']);
  }
}