import { Component, HostListener } from '@angular/core';
import { LanguageService } from '../../services/language.service';
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

  constructor(public ls: LanguageService, public ss: ScreenService ) {}

  ngOnInit() {
    this.ss.checkScreenWidth();
  }
}