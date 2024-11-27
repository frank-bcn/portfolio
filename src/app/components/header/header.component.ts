import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(public dm: DarkModeService, public ls: LanguageService) {}
}