import { TestBed } from '@angular/core/testing';

import { HrHttpResolver } from './hr-http.resolver';

describe('HrHttpResolver', () => {
  let resolver: HrHttpResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(HrHttpResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
