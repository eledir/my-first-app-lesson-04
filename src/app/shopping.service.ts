import { Injectable } from '@angular/core';
import { ShoppingLocation } from './shoppinglocation';

@Injectable({
  providedIn: 'root'
})
export class shoppingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected shoppingLocationList: ShoppingLocation[] = [
    {
      id: 0,
      description: 'string',
      product_details: 'string',
      category: 'string',
      pricing_price: 100.90,
      size: 42,
      photo: 'string',
      availableUnits: 4,
      cartellino: true,
      fallato: false
    }
    ];

  getAllShoppingLocations(): ShoppingLocation[] {
    return this.shoppingLocationList;
  }

  getShoppingLocationById(id: number): ShoppingLocation | undefined {
    return this.shoppingLocationList.find(shoppingLocation => shoppingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
