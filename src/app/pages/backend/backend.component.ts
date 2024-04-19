import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss'
})
export class BackendComponent {
  constructor(public ls: LanguageService, public ss: ScreenService) { }

}
