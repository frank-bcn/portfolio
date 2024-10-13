import { Component } from '@angular/core';
import { animation } from '../_animations/animation-project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [animation],
})
export class ProjectComponent {
  currentProjectIndex = 0; // Track the index of the current project
  skills = ['project1', 'project2', 'project3', 'project4', 'project5']; 

  constructor() {
    this.currentProject = this.skills[this.currentProjectIndex]; 
  }

  currentProject: string; 

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

  prevSkill() {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    } else {
      this.currentProjectIndex = this.skills.length - 1; 
    }
    this.currentProject = this.skills[this.currentProjectIndex]; 
  }

  nextSkill() {
    if (this.currentProjectIndex < this.skills.length - 1) {
      this.currentProjectIndex++;
    } else {
      this.currentProjectIndex = 0; 
    }
    this.currentProject = this.skills[this.currentProjectIndex];
  }
}
