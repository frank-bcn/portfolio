import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(public ss: ScrollService, public dm: DarkModeService) {}
}