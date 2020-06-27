import { TestBed } from '@angular/core/testing';

import { AppiServiceService } from './appi-service.service';

describe('AppiServiceService', () => {
  let service: AppiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
