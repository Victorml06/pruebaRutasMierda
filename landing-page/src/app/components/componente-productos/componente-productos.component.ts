import { Component } from '@angular/core';
import { ServicioProductosService } from 'src/app/services/servicio-productos.service';

@Component({
  selector: 'app-componente-productos',
  templateUrl: './componente-productos.component.html',
  styleUrls: ['./componente-productos.component.css']
})
export class ComponenteProductosComponent {
  productos: any[] = [];
  productosFiltrados: any[] = [];

  nombre: string = '';
  precio: number = 0;
  idEdicion: number | null = null;
  modoEdicion: boolean = false;
  currentSearchTerm: string = '';

  constructor(private servicioProductos: ServicioProductosService) {

  }

  ngOnInit() {
    this.productos = this.servicioProductos.getProductos();
    this.productosFiltrados = this.productos;

    this.servicioProductos.searchTerm$.subscribe(term => {
      this.currentSearchTerm = term;
      this.filtrarProductos();
    });
  }

  filtrarProductos() {
    if (!this.currentSearchTerm) {
      this.productosFiltrados = this.productos;
    } else {
      this.productosFiltrados = this.productos.filter(producto =>
        producto.nombre.toLowerCase().includes(this.currentSearchTerm.toLowerCase())
      );
    }
  }

  agregarProducto() {
    if (this.modoEdicion && this.idEdicion !== null) {
      this.servicioProductos.modifyProducto(this.idEdicion, this.nombre, this.precio);
      this.cancelarEdicion();
    } else {
      this.servicioProductos.addProducto(this.nombre, this.precio);
      this.limpiarFormulario();
    }
    this.productos = this.servicioProductos.getProductos();
    this.filtrarProductos();
  }

  eliminarProducto(id: number) {
    this.servicioProductos.deleteProducto(id);
    this.productos = this.servicioProductos.getProductos();
    this.filtrarProductos();
  }

  editarProducto(producto: any) {
    this.nombre = producto.nombre;
    this.precio = producto.precio;
    this.idEdicion = producto.id;
    this.modoEdicion = true;
  }

  cancelarEdicion() {
    this.modoEdicion = false;
    this.idEdicion = null;
    this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.nombre = '';
    this.precio = 0;
  }
}
