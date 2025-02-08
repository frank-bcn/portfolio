import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  isActive = false;

  constructor() {}

  /*
   * screenWidth: Returns an offset value based on the screen width.
   * - If the screen width is less than or equal to 768px, returns an offset of 50.
   * - If the screen width is between 769px and 1024px, returns an offset of 75.
   * - For screens wider than 1024px, returns an offset of 100.
   */
  screenWidth(): number {
    if (window.innerWidth <= 768) {
      return 50;
    } else if (window.innerWidth <= 1024) {
      return 75;
    }
    return 100;
  }

  /*
   * elementPosition: Calculates the position of an element on the page.
   * - Takes the element ID as a parameter and retrieves the element.
   * - If the element is found, returns its position relative to the top of the document,
   *   considering any page scroll offset.
   * - If the element is not found, returns null.
   */
  elementPosition(elementId: string): number | null {
    const element = document.getElementById(elementId);
    if (element) {
      return element.getBoundingClientRect().top + window.pageYOffset;
    }
    return null;
  }

  /*
   * scrollToPosition: Scrolls the window to a specific position with a smooth scrolling effect.
   * - Takes two parameters: position (the target scroll position) and offset (an adjustment to the position).
   * - Scrolls the window to the calculated position, adjusting for the given offset.
   * - Uses the 'smooth' behavior to animate the scroll.
   */
  scrollToPosition(position: number, offset: number): void {
    window.scrollTo({
      top: position - offset,
      behavior: 'smooth',
    });
  }

  /*
   * scrollToElement: Scrolls the window to a specific element on the page.
   * - Takes the element's ID as a parameter and calculates its position.
   * - Retrieves the appropriate offset based on the screen width.
   * - If the element is found, scrolls the window to the element's position with the calculated offset.
   */
  scrollToElement(elementId: string): void {
    const offset = this.screenWidth();
    const position = this.elementPosition(elementId);

    if (position !== null) {
      this.scrollToPosition(position, offset);
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