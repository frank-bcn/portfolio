import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScrollService } from '../../services/scroll.service';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(
    private sanitizer: DomSanitizer,
    public ss: ScrollService,
    public dm: DarkModeService
  ) {}

  close() {
    this.ss.isActive = false;
  }
}
