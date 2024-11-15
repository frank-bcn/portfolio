import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}

}
