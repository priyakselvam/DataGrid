import { TestBed } from '@angular/core/testing';

import { ReprocessorService } from './reprocessor.service';

describe('ReprocessorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReprocessorService = TestBed.get(ReprocessorService);
    expect(service).toBeTruthy();
  });
});
