import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDark = false;

  constructor() {

    const savedDarkMode = localStorage.getItem('darkMode');
    this.isDark = savedDarkMode === 'true';
  }

  /*
   * darkMode: Toggles the dark mode state of the application.
   * This function flips the value of `isDark`, which controls whether dark mode is active or not.
   * When called, it will switch between dark mode and light mode.
   */
  darkMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('darkMode', String(this.isDark));
  }
}