import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  constructor() {}

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      let offset = 100;

      if (window.innerWidth <= 768) {
        offset = 50;
      } else if (window.innerWidth <= 1024) {
        offset = 75;
      }

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  }
}
