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