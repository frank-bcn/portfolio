import { Component } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent {
  images: string[] = [
    'assets/ images/skills_images/1697829889051.jpeg',
    'assets/ images/skills_images/1697829889051.jpeg',
    'assets/ images/skills_images/1697829889051.jpeg'
  ];
  currentIndex: number = 0;

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
