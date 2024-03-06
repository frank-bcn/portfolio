import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-project-pokedex',
  templateUrl: './project-pokedex.component.html',
  styleUrl: './project-pokedex.component.scss'
})
export class ProjectPokedexComponent {

  constructor(public ls: LanguageService){}

}
