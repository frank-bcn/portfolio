import { Component, HostListener } from '@angular/core';
import { ContextMenuService } from '../../services/context-menu.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  
  isScrolled: boolean = false;

  constructor(public cm: ContextMenuService, public dm: DarkModeService) {}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY;
    this.isScrolled = scrollPosition > 0;
  }
}

