import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { animation } from '../_animations/animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [animation],
})
export class ProjectComponent {

  currentProject = 'project1';
  btnCount!: number;

  constructor(public ls: LanguageService) {}

  ngOnInit() {
    this.btnCount = document.querySelectorAll('.btnContainer .btn').length;
  }

  switchProject(project: string) {
    this.currentProject = project;
  }
}