import { TestBed } from '@angular/core/testing';

import { LoginServicsService } from './login-servics.service';

describe('LoginServicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginServicsService = TestBed.get(LoginServicsService);
    expect(service).toBeTruthy();
  });
});
