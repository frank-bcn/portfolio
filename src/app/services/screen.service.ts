import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  tapView: boolean = false;
  active: boolean = false;

  constructor() {}

  /**
   * Checks the current screen width and updates a property to indicate whether the screen width is below or equal to 1050 pixels.
   */
  checkScreenWidth(): void {
    this.tapView = window.innerWidth <= 1050;
  }

  /**
   * Toggles the 'active' property based on the value of 'tapView'.
   * If 'tapView' is true, it toggles the 'active' property.
   */
  switch() {
    if (this.tapView) {
      this.active = !this.active;
    }
  }

  preventContextMenu(event: MouseEvent) {
    event.preventDefault();
  }
}