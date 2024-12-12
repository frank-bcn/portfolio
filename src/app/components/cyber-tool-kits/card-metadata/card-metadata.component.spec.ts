import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMetadataComponent } from './card-metadata.component';

describe('CardMetadataComponent', () => {
  let component: CardMetadataComponent;
  let fixture: ComponentFixture<CardMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardMetadataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
