import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' },
    { code: 'de', name: 'DE' },
  ];
  selectedValue: string = 'en';

  constructor(public translate: TranslateService) {}

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
}
