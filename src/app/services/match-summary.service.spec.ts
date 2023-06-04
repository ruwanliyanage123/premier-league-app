import { TestBed } from '@angular/core/testing';

import { MatchSummaryService } from './match-summary.service';

describe('MatchSummaryService', () => {
  let service: MatchSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
