import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-project-pollo',
  templateUrl: './project-pollo.component.html',
  styleUrl: './project-pollo.component.scss'
})
export class ProjectPolloComponent {

  constructor(public ls: LanguageService, public ss: ScreenService) { }

}
