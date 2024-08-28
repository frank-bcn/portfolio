import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(private sanitizer: DomSanitizer) {}

  /*
   * Generates a secure HTML link for sending an email.
   * Creates a mailto link using a predefined email address and sanitizes it to ensure safe rendering.
   * Returns the sanitized HTML link, which can be used in the component's template.
   */
  getEmailLink(): SafeHtml {
    const email = 'info@frank-sinnigen.de';
    const mailtoLink = `<a href="mailto:${email}">${email}</a>`;
    return this.sanitizer.bypassSecurityTrustHtml(mailtoLink);
  }
}
