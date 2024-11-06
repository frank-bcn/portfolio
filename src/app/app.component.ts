import { Component } from '@angular/core';
import * as AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(public translate: TranslateService) {}
  ngOnInit(): void {
    AOS.init();
    window.addEventListener('load', AOS.refresh);
  }

  toggleChange(value: string) {
    this.selectedValue = value;
    this.translate.use(value);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
