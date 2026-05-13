import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFood } from './order-food';

describe('OrderFood', () => {
  let component: OrderFood;
  let fixture: ComponentFixture<OrderFood>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderFood],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderFood);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
