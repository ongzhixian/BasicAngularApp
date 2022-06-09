import { TestBed } from '@angular/core/testing';

import { ShippingPriceService } from './shipping-price.service';

describe('ShippingPriceService', () => {
  let service: ShippingPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
