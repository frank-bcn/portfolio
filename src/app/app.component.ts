import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { slideInAnimation } from './pages/_animations';
import { ScreenService } from './services/screen.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'portfolio';

  languages = [
    { code: 'es', name: 'ES' },
    { code: 'en', name: 'EN' },
    { code: 'de', name: 'DE' },
  ];
  selectedValue: string = 'en';

  constructor(
    public router: Router,
    public translate: TranslateService,
    public ss: ScreenService
  ) {
    this.translate.setDefaultLang(this.selectedValue);
    this.translate.use(this.selectedValue);

    console.log(
      '%c  Fränk rules!',
      'font-size:20px; font-weight:800; color:red; text-shadow: 5px 5px 10px green'
    );
  }

  /*
   * Initializes the component by performing setup tasks.
   * Calls `isStartPage` to determine if the current page is the start page.
   * Invokes `checkScreenWidth` from the `ss` service to evaluate or adjust layout based on the screen width.
   */
  ngOnInit() {
    this.isStartPage();
    this.ss.checkScreenWidth();
  }

  /*
   * Handles changes in toggle selection and updates the language.
   * Sets the selected value based on the provided input and changes the application language using the translate service.
   * Ensures that the user interface reflects the selected language.
   */
  toggleChange(value: string) {
    this.selectedValue = value;
    this.translate.use(value);
  }

  /**
   * Checks if the current URL is the start page.
   *
   * This function returns a boolean indicating whether the current URL
   * of the router is equal to '/start'.
   *
   * @returns {boolean} - True if the current URL is '/start', false otherwise.
   */
  isStartPage(): boolean {
    return this.router.url === '/start';
  }

  /**
   * Prepares the route for animation.
   *
   * This function checks if the given RouterOutlet is defined and has
   * activated route data that includes an 'animation' property.
   * If all conditions are met, it returns the 'animation' property.
   *
   * @param {RouterOutlet} outlet - The outlet to check for activated route data.
   */
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}