import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { animation } from '../_animations/animation-project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [animation],
})
export class ProjectComponent {
  currentProject = 'project1';

  constructor(public ls: LanguageService) {}

  /**
   * Switches the current project to the specified project.
   *
   * This function sets the `currentProject` property to the provided project.
   *
   * @param {string} project - The new project to be set as the current project.
   */
  switchProject(project: string) {
    this.currentProject = project;
  }
}