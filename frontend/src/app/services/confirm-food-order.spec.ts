import { TestBed } from '@angular/core/testing';

import { ConfirmFoodOrder } from './confirm-food-order';

describe('ConfirmFoodOrder', () => {
  let service: ConfirmFoodOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmFoodOrder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
