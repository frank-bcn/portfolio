import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RotateWarningService {
  warning: boolean = this.checkWarning();

  constructor() {
    window.addEventListener('resize', () => {
      this.warning = this.checkWarning();
      this.checkScroll(this.warning);
    });
    this.checkScroll(this.warning);
  }

  /*
   * checkWarning: Checks if the current window size triggers a warning condition.
   * - Returns true if the window width is greater than the window height and less than or equal to 950px.
   * - Returns false otherwise.
   */
  checkWarning(): boolean {
    return window.innerWidth > window.innerHeight && window.innerWidth <= 950;
  }

  /*
   * checkScroll: Toggles the scrollability of the page based on the warning condition.
   * - If the warning is true, it adds a 'noScroll' class to the body to prevent scrolling.
   * - If the warning is false, it removes the 'noScroll' class, allowing scrolling.
   */
  checkScroll(warning: boolean): void {
    if (warning) {
      document.body.classList.add('noScroll');
    } else {
      document.body.classList.remove('noScroll');
    }
  }
}