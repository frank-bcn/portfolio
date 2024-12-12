import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-password',
  templateUrl: './card-password.component.html',
  styleUrl: './card-password.component.scss',
})
export class CardPasswordComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
