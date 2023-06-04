import { TestBed } from '@angular/core/testing';

import { LastbatService } from './lastbat.service';

describe('LastbatService', () => {
  let service: LastbatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastbatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
