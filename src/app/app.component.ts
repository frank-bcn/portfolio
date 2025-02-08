import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';
import * as AOS from 'aos';
import { VideoPlayService } from './services/video-play.service';
import { RotateWarningService } from './services/rotate-warning.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';


  constructor(
    public vp: VideoPlayService,
    public ls: LanguageService,
    public rw: RotateWarningService,
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
    this.ls.toggleChange(savedLanguage);
    this.vp.startVideo('#pokedex');
    this.vp.startVideo('#pollo');
    this.vp.startVideo('#join');
    // this.vp.startVideo('#streamify');
    this.vp.startVideo('#bot');
    this.rw.checkWarning();
  }
}