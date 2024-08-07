import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  images: string[] = [
    'assets/ images/certificates/THM-TJI8C28XQG.png',
    'assets/ images/certificates/THM-ECM9Q6VRUU.png',
  ];
  currentIndex: number = 0;

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
