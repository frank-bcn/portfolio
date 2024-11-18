import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-streamify',
  templateUrl: './streamify.component.html',
  styleUrl: './streamify.component.scss',
})
export class StreamifyComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
