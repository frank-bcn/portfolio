import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-backend',
  templateUrl: './card-backend.component.html',
  styleUrl: './card-backend.component.scss',
})
export class CardBackendComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
