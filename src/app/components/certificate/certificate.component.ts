import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent {
  certificates: string[] = [
    '/assets/ images/certificates/THM-ECM9Q6VRUU.png',
    '/assets/ images/certificates/THM-MZN8NL33N1.png',
    '/assets/ images/certificates/THM-TJI8C28XQG.png',
  ];
  currentSlide: number = 0;

  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}

  /*
   * goToSlide: Navigates to a specific slide.
   * This method sets the current slide to the given index.
   *
   * @param {number} index - The index of the slide to navigate to.
   */
  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  /*
   * nextSlide: Advances to the next slide.
   * This method increments the current slide index and wraps around to the first slide if needed.
   */
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.certificates.length;
  }

  /*
   * prevSlide: Moves to the previous slide.
   * This method decrements the current slide index and wraps around to the last slide if needed.
   */
  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.certificates.length) %
      this.certificates.length;
  }
}