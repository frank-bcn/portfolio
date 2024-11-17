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
    public vp: VideoPlayService,
  ) {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.toggleChange(savedLanguage);
    this.vp.startVideo('#pokedex');
    this.vp.startVideo('#pollo');
    this.vp.startVideo('#join');

    this.vp.startVideo('#bot');
  }

  toggleChange(value: string) {
    this.selectedValue = value;
    this.translate.use(value);
    localStorage.setItem('selectedLanguage', value);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
