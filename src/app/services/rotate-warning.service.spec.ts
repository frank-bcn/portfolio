import { TestBed } from '@angular/core/testing';

import { RotateWarningService } from './rotate-warning.service';

describe('RotateWarningService', () => {
  let service: RotateWarningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RotateWarningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
