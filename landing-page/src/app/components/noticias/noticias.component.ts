import { Component, OnInit } from '@angular/core';
import { ServicioNoticiasService, Noticia } from '../../services/servicio-noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [];

  titulo: string = '';
  descripcion: string = '';
  imagenUrl: string = '';

  constructor(private servicioNoticias: ServicioNoticiasService) { }

  ngOnInit(): void {
    this.noticias = this.servicioNoticias.getNoticias();
  }

  agregarNoticia(): void {
    if (this.titulo && this.descripcion && this.imagenUrl) {
      this.servicioNoticias.addNoticia(this.titulo, this.descripcion, this.imagenUrl);
      this.titulo = '';
      this.descripcion = '';
      this.imagenUrl = '';
      // Refresh list (since reference might change in service if implemented differently, but here array is same ref, push updates it)
      this.noticias = this.servicioNoticias.getNoticias();
    }
  }

  eliminarNoticia(id: number): void {
    this.servicioNoticias.deleteNoticia(id);
    this.noticias = this.servicioNoticias.getNoticias();
  }
}
