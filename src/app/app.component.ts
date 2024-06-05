import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { LanguageService } from './services/language.service';
import { slideInAnimation } from './pages/_animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router, public ls: LanguageService) {
    console.log(
      '%c  Fränk rules!',
      'font-size:20px; font-weight:800; color:red; text-shadow: 5px 5px 10px green'
    );
  }

  ngOnInit() {
    this.isStartPage();
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