import { Routes } from '@angular/router';
import { ShopComponent } from './shop/ShopComponent';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: ShopComponent,
    title: 'Shop page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Shop details'
  }
];

export default routeConfig;
