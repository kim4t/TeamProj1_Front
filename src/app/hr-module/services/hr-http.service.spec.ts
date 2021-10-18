import { TestBed } from '@angular/core/testing';

import { HrHttpService } from './hr-http.service';

describe('HrHttpService', () => {
  let service: HrHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
