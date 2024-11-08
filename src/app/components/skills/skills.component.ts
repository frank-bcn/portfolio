import { Component } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public cm: ContextMenuService) {}


}
