import { TestBed } from '@angular/core/testing';

import { TokenIterceptorService } from './token-interceptor.service';

describe('TokenIterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenIterceptorService = TestBed.get(TokenIterceptorService);
    expect(service).toBeTruthy();
  });
});
