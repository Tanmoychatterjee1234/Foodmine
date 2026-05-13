// food.ts

export class food {

  id!: number;
  name!: string;
  category: string;
  price!: number;
  rating: number;
  imageUrl: string;
  description: string;
  isVeg!: boolean;
  deliveryTime: number;

  constructor(
    id: number,
    name: string,
    category: string,
    price: number,
    rating: number,
    imageUrl: string,
    description: string,
    isVeg: boolean,
    deliveryTime: number
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.rating = rating;
    this.imageUrl = imageUrl;
    this.description = description;
    this.isVeg = isVeg;
    this.deliveryTime = deliveryTime;
  }

}