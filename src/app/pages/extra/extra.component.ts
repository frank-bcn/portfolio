import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.scss'
})
export class ExtraComponent {
  constructor(public ls: LanguageService) {}

}
