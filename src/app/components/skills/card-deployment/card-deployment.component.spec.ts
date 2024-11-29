import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDeploymentComponent } from './card-deployment.component';

describe('CardDeploymentComponent', () => {
  let component: CardDeploymentComponent;
  let fixture: ComponentFixture<CardDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDeploymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
