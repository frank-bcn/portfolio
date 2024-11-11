import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  isDark = false;

  constructor() {}

  darkMode() {
    this.isDark = !this.isDark;
  }
}
