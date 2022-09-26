import { TestBed } from '@angular/core/testing';

import { SampleService1Service } from './sample-service1.service';

describe('SampleService1Service', () => {
  let service: SampleService1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampleService1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
