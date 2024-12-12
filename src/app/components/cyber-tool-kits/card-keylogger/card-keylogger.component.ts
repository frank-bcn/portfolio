import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-keylogger',
  templateUrl: './card-keylogger.component.html',
  styleUrl: './card-keylogger.component.scss',
})
export class CardKeyloggerComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
