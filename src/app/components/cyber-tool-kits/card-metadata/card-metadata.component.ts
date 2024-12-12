import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';

@Component({
  selector: 'app-card-metadata',
  templateUrl: './card-metadata.component.html',
  styleUrl: './card-metadata.component.scss'
})
export class CardMetadataComponent {

  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}

}
