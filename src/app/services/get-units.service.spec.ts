import { TestBed } from '@angular/core/testing';

import { GetUnitsService } from './get-units.service';

describe('GetUnitService', () => {
  let service: GetUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
