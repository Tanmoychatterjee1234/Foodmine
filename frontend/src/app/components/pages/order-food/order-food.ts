import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food-service';

@Component({
  selector: 'app-order-food',
  standalone: true,
  imports: [],
  templateUrl: './order-food.html',
  styleUrl: './order-food.css',
})
export class OrderFoodComponent implements OnInit {

  food!: food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {

    const foodId =
      Number(this.activatedRoute.snapshot.params['id']);

    this.food =
      this.foodService
      .getAll()
      .find(food => food.id === foodId)!;

  }

}