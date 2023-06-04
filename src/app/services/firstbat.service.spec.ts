import { TestBed } from '@angular/core/testing';

import { FirstbatService } from './firstbat.service';

describe('FirstbatService', () => {
  let service: FirstbatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstbatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
