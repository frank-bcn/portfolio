import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-project-netflix-clone',
  templateUrl: './project-netflix-clone.component.html',
  styleUrl: './project-netflix-clone.component.scss'
})
export class ProjectNetflixCloneComponent {

  constructor(public ss: ScreenService){}
}
