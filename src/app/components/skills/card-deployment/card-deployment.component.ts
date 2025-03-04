import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-deployment',
  templateUrl: './card-deployment.component.html',
  styleUrl: './card-deployment.component.scss',
})
export class CardDeploymentComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
