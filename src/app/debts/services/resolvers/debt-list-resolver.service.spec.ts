import { TestBed } from '@angular/core/testing';

import { DebtListResolverService } from 'src/app/debts/services/resolvers/debt-list-resolver.service';

describe('DebtListResolverService', () => {
  let service: DebtListResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtListResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
