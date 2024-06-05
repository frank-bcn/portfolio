import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { animation } from '../_animations/animation-skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [animation],
})
export class SkillsComponent {
  currentSkill = 'frontend';

  constructor(public ls: LanguageService) {}

  /**
   * Switches the current skill to the specified skill.
   *
   * This function sets the `currentSkill` property to the provided skill.
   *
   * @param {string} skill - The new skill to be set as the current skill.
   */
  switchSkill(skill: string) {
    this.currentSkill = skill;
  }
}