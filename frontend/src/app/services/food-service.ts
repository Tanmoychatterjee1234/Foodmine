import { Injectable } from '@angular/core';
import { food } from '../shared/models/food';
import { foods } from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {

  constructor() {

  }

  getAll(): food[] {
    return foods;
  }


  getAllFoodsBySearchTerm(searchTerm: string): food[] {

    const foods: food[] = this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foods.length === 0) {
      return this.getAll();
    }
    else {
      return foods;
    }

  }
}
