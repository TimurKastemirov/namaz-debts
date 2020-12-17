import { TestBed } from '@angular/core/testing';

import { DebtApiService } from './debt.service';

describe('DebtService', () => {
  let service: DebtApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DebtApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
