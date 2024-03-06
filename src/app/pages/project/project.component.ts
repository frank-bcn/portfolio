import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { animation } from '../_animations/animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [animation],
})
export class ProjectComponent implements OnInit {
  currentProject = 'project1';
  buttonCount: number = 0;

  constructor(public ls: LanguageService) {}

  ngOnInit() {
    this.updateButtonCount();
  }

  switchProject(project: string) {
    this.currentProject = project;
  }

  updateButtonCount() {
    let btnContainer = document.querySelector('.btnContainerProj');
    let buttons = btnContainer?.querySelectorAll('.btn');

    this.buttonCount = buttons ? buttons.length : 0;
  }

  shouldDisplayScrolldown() {
    return this.buttonCount > 3;
  }
}
