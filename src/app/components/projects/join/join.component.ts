import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss',
})
export class JoinComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
