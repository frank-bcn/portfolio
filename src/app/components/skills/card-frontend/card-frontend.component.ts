import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-frontend',
  templateUrl: './card-frontend.component.html',
  styleUrl: './card-frontend.component.scss'
})
export class CardFrontendComponent {

  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}
}
