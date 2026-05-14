import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfirmFoodOrder {
  constructor(
    private http: HttpClient
  ) { }

  createOrder(order: any) {

    return this.http.post(
      'http://localhost:3000/orders',
      order
    );

  }
}
