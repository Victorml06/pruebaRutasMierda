import { Component } from '@angular/core';
import { ServicioProductosService } from './services/servicio-productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing-page';
  searchTerm: string = '';

  constructor(private servicioProductos: ServicioProductosService) { }

  onSearch(event: any) {
    this.searchTerm = event.target.value;
    this.servicioProductos.setSearchTerm(this.searchTerm);
  }
}
