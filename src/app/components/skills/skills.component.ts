import { Component } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  constructor(public cm: ContextMenuService, public dm: DarkModeService) {}
}
