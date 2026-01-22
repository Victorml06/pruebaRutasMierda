import { Component } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop Pro', description: 'High performance laptop', price: 1200 },
    { id: 2, name: 'Smartphone X', description: 'Latest generation smartphone', price: 800 },
    { id: 3, name: 'Tablet Air', description: 'Lightweight and powerful', price: 450 },
    { id: 4, name: 'Smart Watch', description: 'Track your fitness', price: 200 },
    { id: 5, name: 'Wireless Earbuds', description: 'Noise cancelling sound', price: 150 }
  ];
}
