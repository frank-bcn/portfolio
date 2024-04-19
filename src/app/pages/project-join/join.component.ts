import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-project-join',
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {

  constructor(public ls: LanguageService , public ss: ScreenService){}

}
