import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamifyComponent } from './streamify.component';

describe('StreamifyComponent', () => {
  let component: StreamifyComponent;
  let fixture: ComponentFixture<StreamifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StreamifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
