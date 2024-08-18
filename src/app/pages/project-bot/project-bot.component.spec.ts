import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBotComponent } from './project-bot.component';

describe('ProjectBotComponent', () => {
  let component: ProjectBotComponent;
  let fixture: ComponentFixture<ProjectBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
