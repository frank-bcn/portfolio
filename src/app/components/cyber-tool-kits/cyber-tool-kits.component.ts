import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-cyber-tool-kits',
  templateUrl: './cyber-tool-kits.component.html',
  styleUrl: './cyber-tool-kits.component.scss',
})
export class CyberToolKitsComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
