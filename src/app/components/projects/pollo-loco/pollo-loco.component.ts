import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-pollo-loco',
  templateUrl: './pollo-loco.component.html',
  styleUrl: './pollo-loco.component.scss',
})
export class PolloLocoComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
