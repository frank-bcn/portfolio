import { Component } from '@angular/core';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { ScrollService } from './services/scroll.service';

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

  constructor(public translate: TranslateService, public ss: ScrollService) {}

  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.toggleChange(savedLanguage);
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
