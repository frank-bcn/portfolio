import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  isMenuOpen: boolean = false;

  constructor(public dm: DarkModeService, public ss: ScrollService) {}

  /*
   * toggleMenu: Toggles the visibility state of a menu.
   * It switches the `isMenuOpen` property between `true` and `false`.
   * This method is typically used for opening and closing a menu in the UI.
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
