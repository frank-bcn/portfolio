import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  isActive = false;

  constructor() {}

  /*
   * scrollToElement: Scrolls the page smoothly to a specified element with a dynamic offset.
   * The offset varies based on the viewport width to ensure proper visibility of the element.
   *
   * @param elementId - The ID of the HTML element to scroll to.
   */
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

  /*
   * imprintOpen: Toggles the visibility of the imprint and controls body scrolling by calling a separate function.
   */
  imprintOpen() {
    this.isActive = !this.isActive;
    this.toggleBodyScroll(this.isActive);
  }

  /*
   * toggleBodyScroll: Adds or removes the 'noScroll' class from the body element.
   * This prevents or allows scrolling on the body.
   *
   * @param isActive - Boolean indicating whether the imprint is active (open) or not.
   */
  toggleBodyScroll(isActive: boolean): void {
    if (isActive) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  }
}