import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingLocationComponent } from '../shopping-location/shopping-location.component';
import { ShoppingLocation } from '../Shoppinglocation';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, ShoppingLocationComponent],
  template: `
    <section>
      <form>
        <input
          type="text"
          placeholder="Filter by category"
          [(ngModel)]="filterText"
          name="filter"
        />
        <button class="primary" type="button" (click)="filterLocations()">Search</button>
      </form>
    </section>
    <section class="results">
      <div *ngFor="let location of filteredLocations">
        <app-shopping-location [shoppingLocation]="location"></app-shopping-location>
      </div>
    </section>
  `,
  styleUrls: ['./Shop.component.css'],
})
export class ShopComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  filterText: string = ''; // Per il binding del campo di input

  shoppingLocations: ShoppingLocation[] = [
    {
      id: 9999,
      description: 'Test shop 1',
      product_details: 'Test details 1',
      category: 'Clothing',
      pricing_price: 10.00,
      size: 44,
      photo: `${this.baseUrl}/example-shop1.jpg`,
      availableUnits: 10,
      cartellino: true,
      fallato: false,
    },
    {
      id: 1000,
      description: 'Test shop 2',
      product_details: 'Test details 2',
      category: 'Clothing',
      pricing_price: 20.00,
      size: 42,
      photo: `${this.baseUrl}/example-shop2.jpg`,
      availableUnits: 20,
      cartellino: true,
      fallato: false,
    },
  ];

  filteredLocations: ShoppingLocation[] = [...this.shoppingLocations];

  filterLocations(): void {
    this.filteredLocations = this.shoppingLocations.filter((location) =>
      location.category.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
