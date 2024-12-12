import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberToolKitsComponent } from './cyber-tool-kits.component';

describe('CyberToolKitsComponent', () => {
  let component: CyberToolKitsComponent;
  let fixture: ComponentFixture<CyberToolKitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CyberToolKitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CyberToolKitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
