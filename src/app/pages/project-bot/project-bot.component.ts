import { Component } from '@angular/core';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-project-bot',
  templateUrl: './project-bot.component.html',
  styleUrl: './project-bot.component.scss',
})
export class ProjectBotComponent {
  constructor(public ss: ScreenService) {}
}
