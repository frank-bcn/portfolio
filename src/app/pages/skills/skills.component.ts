import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { animation } from '../_animations/animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [animation],
})
export class SkillsComponent {
  currentSkill = 'frontend';

  constructor(public ls: LanguageService) {}

  switchSkill(skill: string) {
    this.currentSkill = skill;
  }
}