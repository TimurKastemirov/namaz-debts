import { TestBed } from '@angular/core/testing';

import { DebtDetailResolverService } from './debt-detail-resolver.service';

describe('DebtDetailResolverService', () => {
  let service: DebtDetailResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtDetailResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
