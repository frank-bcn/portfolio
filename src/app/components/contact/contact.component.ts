import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}

}
