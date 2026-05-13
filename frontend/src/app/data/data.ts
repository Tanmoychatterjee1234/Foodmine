// data.ts

import { food } from '../shared/models/food';

export const foods: food[] = [

  new food(
    1,
    'Chicken Burger',
    'Fast Food',
    199,
    4.5,
    'image1.jpg',
    'Crispy chicken burger with cheese and lettuce',
    false,
    25
  ),

  new food(
    2,
    'Veg Pizza',
    'Pizza',
    299,
    4.3,
    'image2.jpg',
    'Loaded vegetable pizza with mozzarella cheese',
    true,
    30
  ),

  new food(
    3,
    'Biryani',
    'Indian',
    249,
    4.8,
    'image3.jpg',
    'Authentic chicken biryani with aromatic spices',
    false,
    35
  ),

  new food(
    4,
    'Paneer Roll',
    'Snacks',
    149,
    4.2,
    'image4.jpg',
    'Soft paratha filled with spicy paneer stuffing',
    true,
    20
  ),

  new food(
    5,
    'French Fries',
    'Fast Food',
    99,
    4.1,
       'image5.jpg',
    'Golden crispy french fries with seasoning',
    true,
    15
  ),

];