import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-hacking',
  templateUrl: './card-hacking.component.html',
  styleUrl: './card-hacking.component.scss',
})
export class CardHackingComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
