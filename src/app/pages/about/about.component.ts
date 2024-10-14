import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  images: string[] = [
    '/assets/ images/etc_images/about.png',
    '/assets/ images/etc_images/background.png',
    '/assets/ images/etc_images/portfolio.png'
  ];
  
  constructor(public ss: ScreenService, public router: Router) { }

  /**
 * Navigates to the contact page.
 * 
 * This function checks if the `tapView` variable in the `ss` service is set.
 * If `tapView` is set, the `active` variable in the `ss` service is set to `true`.
 * Then, the router is used to navigate to the contact page.
 */
  navigateToContact() {
    if (this.ss.tapView) {
    this.ss.active = true;
    }
    this.router.navigate(['/contact']);
  }
}