import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss'
})
export class BackendComponent {
  constructor(public ls: LanguageService) { }

}
