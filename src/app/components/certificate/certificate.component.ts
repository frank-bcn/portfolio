import { Component } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ContextMenuService } from '../../services/context-menu.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  certificates: string[] = [
    '/assets/ images/certificates/THM-ECM9Q6VRUU.png',
    '/assets/ images/certificates/THM-MZN8NL33N1.png',
    '/assets/ images/certificates/THM-TJI8C28XQG.png'
  ];
  currentSlide: number = 0;

  constructor(public dm: DarkModeService, public cm: ContextMenuService) {}

  goToSlide(index: number): void {
    this.currentSlide = index; 
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.certificates.length;
  }

  prevSlide(): void {
    this.currentSlide =
      (this.currentSlide - 1 + this.certificates.length) % this.certificates.length;
  }
}
