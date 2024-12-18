import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingLocation } from '../Shoppinglocation';

@Component({
  selector: 'app-shopping-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shopping-location">
      <img [src]="shoppingLocation.photo" alt="Shop image" class="shop-photo" />
      <h2>{{ shoppingLocation.description }}</h2>
      <p>Category: {{ shoppingLocation.category }}</p>
      <p>Details: {{ shoppingLocation.product_details }}</p>
      <p>Price: {{ shoppingLocation.pricing_price }}</p>
      <p>Size: {{ shoppingLocation.size }}</p>
      <p>Available Units: {{ shoppingLocation.availableUnits }}</p>
      <p *ngIf="shoppingLocation.cartellino">Cartellino: Yes</p>
      <p *ngIf="shoppingLocation.fallato">Fallato: Yes</p>
    </div>
  `,
  styleUrls: ['./shopping-location.component.css'],
})
export class ShoppingLocationComponent {
  @Input() shoppingLocation!: ShoppingLocation;
}
