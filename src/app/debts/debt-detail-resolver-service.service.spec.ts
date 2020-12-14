import { TestBed } from '@angular/core/testing';

import { DebtDetailResolverServiceService } from './debt-detail-resolver-service.service';

describe('DebtDetailResolverServiceService', () => {
  let service: DebtDetailResolverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtDetailResolverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
