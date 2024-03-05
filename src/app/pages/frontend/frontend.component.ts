import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.scss'
})
export class FrontendComponent {
  constructor(public ls: LanguageService){}

}
