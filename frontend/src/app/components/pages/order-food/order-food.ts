import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { food } from '../../../shared/models/food';

import { FoodService } from '../../../services/food-service';
import { ConfirmFoodOrder } from '../../../services/confirm-food-order';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-order-food',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-food.html',
  styleUrl: './order-food.css',
})
export class OrderFoodComponent implements OnInit {

  food!: food;

  selectedPaymentMethod: string = 'UPI';

  constructor(

    private activatedRoute: ActivatedRoute,

    private foodService: FoodService,

    private confirmFoodOrder: ConfirmFoodOrder

  ) { }

  ngOnInit(): void {

    const foodId =
      Number(this.activatedRoute.snapshot.params['id']);

    this.food =
      this.foodService
        .getAll()
        .find(food => food.id === foodId)!;

  }

  confirmOrder(): void {

    const orderData = {

      foodName: this.food.name,

      price: this.food.price,

      paymentMethod: this.selectedPaymentMethod

    };

    this.confirmFoodOrder
      .createOrder(orderData)
      .subscribe({

        next: (response) => {

          // console.log(response);

          alert('Order Confirmed Successfully');

        },

        error: (err) => {

          console.log(err);

          alert('Order Failed');

        }

      });

  }

}