import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFrontendComponent } from './card-frontend.component';

describe('CardFrontendComponent', () => {
  let component: CardFrontendComponent;
  let fixture: ComponentFixture<CardFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFrontendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
