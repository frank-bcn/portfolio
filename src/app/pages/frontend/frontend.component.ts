import { Component } from '@angular/core';

import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrl: './frontend.component.scss',
})
export class FrontendComponent {
  constructor(public ss: ScreenService) {}
}
