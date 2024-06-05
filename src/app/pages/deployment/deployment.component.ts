import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-deployment',
  templateUrl: './deployment.component.html',
  styleUrl: './deployment.component.scss'
})
export class DeploymentComponent {

  constructor(public ls: LanguageService, public ss: ScreenService) { }

}
