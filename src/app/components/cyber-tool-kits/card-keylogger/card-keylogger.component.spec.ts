import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardKeyloggerComponent } from './card-keylogger.component';

describe('CardKeyloggerComponent', () => {
  let component: CardKeyloggerComponent;
  let fixture: ComponentFixture<CardKeyloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardKeyloggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardKeyloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
