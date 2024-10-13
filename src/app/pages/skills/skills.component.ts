import { Component } from '@angular/core';
import { animation } from '../_animations/animation-skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [animation],
})
export class SkillsComponent {
  currentSkillIndex = 0; // Aktueller Index der Fertigkeit
  skills = ['frontend', 'backend', 'extra', 'deployment', 'certificate']; // Alle Fertigkeiten

  constructor() {
    this.currentSkill = this.skills[this.currentSkillIndex]; 
  }

  currentSkill: string; 

  /**
   * Wechselt die aktuelle Fertigkeit zur angegebenen Fertigkeit.
   *
   * @param {string} skill - Die neue Fertigkeit, die als aktuelle Fertigkeit gesetzt werden soll.
   */
  switchSkill(skill: string) {
    this.currentSkill = skill;
    this.currentSkillIndex = this.skills.indexOf(skill); // Aktualisiere den Index
  }

 
  prevSkill() {
    if (this.currentSkillIndex > 0) {
      this.currentSkillIndex--;
    } else {
      this.currentSkillIndex = this.skills.length - 1; 
    }
    this.currentSkill = this.skills[this.currentSkillIndex]; 
  }

  
  nextSkill() {
    if (this.currentSkillIndex < this.skills.length - 1) {
      this.currentSkillIndex++;
    } else {
      this.currentSkillIndex = 0; 
    }
    this.currentSkill = this.skills[this.currentSkillIndex];
  }
}
