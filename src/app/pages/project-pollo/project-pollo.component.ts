import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-project-pollo',
  templateUrl: './project-pollo.component.html',
  styleUrl: './project-pollo.component.scss'
})
export class ProjectPolloComponent {

  constructor(public ss: ScreenService) { }

}
