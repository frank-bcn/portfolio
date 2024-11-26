import { Component } from '@angular/core';
import { DarkModeService } from '../../../services/dark-mode.service';
import { ContextMenuService } from '../../../services/context-menu.service';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-contakt-info',
  templateUrl: './contakt-info.component.html',
  styleUrl: './contakt-info.component.scss',
})
export class ContaktInfoComponent {


  constructor(public dm: DarkModeService, public cm: ContextMenuService, public ss: ScrollService) {}

  imprintOpen() {
    this.ss.isActive = !this.ss.isActive;
  }
}
