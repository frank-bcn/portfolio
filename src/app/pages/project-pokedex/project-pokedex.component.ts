import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-project-pokedex',
  templateUrl: './project-pokedex.component.html',
  styleUrl: './project-pokedex.component.scss'
})
export class ProjectPokedexComponent {

  constructor(public ls: LanguageService, public ss: ScreenService){}

}
