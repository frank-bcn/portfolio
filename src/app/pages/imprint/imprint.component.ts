import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(private sanitizer: DomSanitizer) {}

  getEmailLink(): SafeHtml {
    const email = 'info@frank-sinnigen.de';
    const mailtoLink = `<a href="mailto:${email}">${email}</a>`;
    return this.sanitizer.bypassSecurityTrustHtml(mailtoLink);
  }
}
