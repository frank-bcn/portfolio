import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectNetflixCloneComponent } from './project-netflix-clone.component';

describe('ProjectNetflixCloneComponent', () => {
  let component: ProjectNetflixCloneComponent;
  let fixture: ComponentFixture<ProjectNetflixCloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectNetflixCloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectNetflixCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
