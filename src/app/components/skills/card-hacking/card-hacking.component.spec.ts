import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHackingComponent } from './card-hacking.component';

describe('CardHackingComponent', () => {
  let component: CardHackingComponent;
  let fixture: ComponentFixture<CardHackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardHackingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardHackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
