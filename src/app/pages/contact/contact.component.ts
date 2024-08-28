import { Component, HostListener } from '@angular/core';
import { slideInAnimation } from '../_animations';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  animations: [slideInAnimation],
})
export class ContactComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.ss.checkScreenWidth();
  }

  constructor(public ss: ScreenService) {}

  /*
   * Initializes component and performs initial screen width check.
   * Calls the `checkScreenWidth` method of the `ss` service to evaluate or set up any necessary logic based on the current screen width.
   */
  ngOnInit() {
    this.ss.checkScreenWidth();
  }
}