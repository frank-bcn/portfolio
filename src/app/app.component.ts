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

  constructor(private router: Router, public ls: LanguageService) {}

  ngOnInit() {
    this.isStartPage();
  }

  isStartPage(): boolean {
    return this.router.url === '/start';
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}