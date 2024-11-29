import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-extra',
  templateUrl: './card-extra.component.html',
  styleUrl: './card-extra.component.scss',
})
export class CardExtraComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
