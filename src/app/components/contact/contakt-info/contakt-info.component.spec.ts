import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaktInfoComponent } from './contakt-info.component';

describe('ContaktInfoComponent', () => {
  let component: ContaktInfoComponent;
  let fixture: ComponentFixture<ContaktInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContaktInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContaktInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
