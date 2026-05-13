import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { OrderFoodComponent } from './components/pages/order-food/order-food';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },

    {
        path: 'order/:id',
        component: OrderFoodComponent
    }
];
