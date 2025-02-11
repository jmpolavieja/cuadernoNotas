import { TestBed } from '@angular/core/testing';

import { ApijavaService } from './apijava.service';

describe('ApijavaService', () => {
  let service: ApijavaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApijavaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
