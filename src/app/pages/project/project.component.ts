import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { animation } from '../_animations/animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  animations: [
    animation,
  ],
})
export class ProjectComponent {


  currentProject = 'project1'; 

  constructor(public ls: LanguageService) {}

  switchProject(project: string) {
    this.currentProject = project;
  }
}