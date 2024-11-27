import { Component } from '@angular/core';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './services/scroll.service';
import { DarkModeService } from './services/dark-mode.service';
import { VideoPlayService } from './services/video-play.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio_aos';
  isMenuOpen: boolean = false;

  languages = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' },
    { code: 'de', name: 'DE' },
  ];
  selectedValue: string = 'en';

  constructor(
    public translate: TranslateService,
    public ss: ScrollService,
    public dm: DarkModeService,
    public vp: VideoPlayService
  ) {}

  /*
   * ngOnInit: This lifecycle method is called when the component is initialized.
   * It performs the following actions:
   * 1. Initializes AOS (Animate On Scroll) for scroll-based animations.
   * 2. Adds an event listener to refresh AOS animations when the page is fully loaded.
   * 3. Sets the application's language based on a saved preference or defaults to English ('en').
   * 4. Starts videos for various element IDs to trigger animations or visual effects.
   */
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.toggleChange(savedLanguage);
    this.vp.startVideo('#pokedex');
    this.vp.startVideo('#pollo');
    this.vp.startVideo('#join');
    // this.vp.startVideo('#streamify');
    this.vp.startVideo('#bot');
  }

  /*
   * toggleChange: Updates the application's language setting.
   * It performs the following actions:
   * 1. Sets the selected language to the provided value.
   * 2. Applies the language setting using the translation service.
   * 3. Saves the selected language to localStorage for persistence across sessions.
   *
   * @param value - The language code (e.g., 'en', 'de') to switch to.
   */
  toggleChange(value: string) {
    this.selectedValue = value;
    this.translate.use(value);
    localStorage.setItem('selectedLanguage', value);
  }

  /*
   * toggleMenu: Toggles the visibility state of a menu.
   * It switches the `isMenuOpen` property between `true` and `false`.
   * This method is typically used for opening and closing a menu in the UI.
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}