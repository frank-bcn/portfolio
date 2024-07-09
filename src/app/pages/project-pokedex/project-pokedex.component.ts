import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-project-pokedex',
  templateUrl: './project-pokedex.component.html',
  styleUrl: './project-pokedex.component.scss',
})
export class ProjectPokedexComponent {
  constructor(public ss: ScreenService) {}
}
