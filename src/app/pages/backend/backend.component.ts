import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrl: './backend.component.scss',
})
export class BackendComponent {
  constructor(public ss: ScreenService) {}
}