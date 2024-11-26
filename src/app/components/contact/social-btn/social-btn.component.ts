import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-social-btn',
  templateUrl: './social-btn.component.html',
  styleUrl: './social-btn.component.scss',
})
export class SocialBtnComponent {
  constructor(public dm: DarkModeService ,public cm: ContextMenuService) {}
}
