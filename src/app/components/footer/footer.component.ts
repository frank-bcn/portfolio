import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public dm: DarkModeService, public ss: ScrollService) {}
}
