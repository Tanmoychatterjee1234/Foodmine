import { Component, OnInit } from '@angular/core';
import { food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food-service';
import { SearchService } from '../../../services/search-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  foods: food[] = [];

  constructor(
    private foodService: FoodService,
    private searchService: SearchService
  ) {

    this.foods = foodService.getAll();

  }

  ngOnInit(): void {

    this.searchService.searchTermObservable
      .subscribe((searchTerm) => {

        this.foods =
          this.foodService
            .getAllFoodsBySearchTerm(searchTerm);

      });

  }

}


