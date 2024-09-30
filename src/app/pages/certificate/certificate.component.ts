import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss'],
})
export class CertificateComponent  {
  images: string[] = [
    'assets/ images/certificates/THM-TJI8C28XQG.png',
    'assets/ images/certificates/THM-ECM9Q6VRUU.png',
    'assets/ images/certificates/THM-MZN8NL33N1.png'
  ];
  currentIndex: number = 0;

  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
}