import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable();

  private productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
    { id: 3, nombre: 'Producto 3', precio: 300 },
    { id: 4, nombre: 'Producto 4', precio: 400 },
    { id: 5, nombre: 'Producto 5', precio: 500 },
    { id: 6, nombre: 'Producto 6', precio: 100 },
    { id: 7, nombre: 'Producto 7', precio: 200 },
    { id: 8, nombre: 'Producto 8', precio: 300 },
    { id: 9, nombre: 'Producto 9', precio: 400 },
    { id: 10, nombre: 'Producto 10', precio: 500 },
  ];

  constructor() { }

  setSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }

  getProductos(): any[] {
    return this.productos;
  }

  addProducto(nombre: string, precio: number): void {
    const newProducto = { nombre: nombre, id: this.productos.length + 1, precio: precio };
    this.productos.push(newProducto);
  }

  deleteProducto(id: number): void {
    this.productos = this.productos.filter(producto => producto.id !== id);
  }

  modifyProducto(id: number, nombre: string, precio: number): void {
    const index = this.productos.findIndex(producto => producto.id === id);
    if (index !== -1) {
      this.productos[index].nombre = nombre;
      this.productos[index].precio = precio;
    }
  }

}
