import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPolloComponent } from './project-pollo.component';

describe('ProjectPolloComponent', () => {
  let component: ProjectPolloComponent;
  let fixture: ComponentFixture<ProjectPolloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPolloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectPolloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
