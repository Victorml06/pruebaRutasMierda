import { Injectable } from '@angular/core';

export interface Noticia {
    id: number;
    titulo: string;
    descripcion: string;
    imagenUrl: string;
}

@Injectable({
    providedIn: 'root'
})
export class ServicioNoticiasService {
    private noticias: Noticia[] = [
        {
            id: 1,
            titulo: 'Noticia de ejemplo',
            descripcion: 'Esta es una descripción de ejemplo para la noticia inicial.',
            imagenUrl: 'https://via.placeholder.com/300'
        }
    ];

    constructor() { }

    getNoticias(): Noticia[] {
        return this.noticias;
    }

    addNoticia(titulo: string, descripcion: string, imagenUrl: string): void {
        const newNoticia: Noticia = {
            id: this.noticias.length > 0 ? Math.max(...this.noticias.map(n => n.id)) + 1 : 1,
            titulo,
            descripcion,
            imagenUrl
        };
        this.noticias.push(newNoticia);
    }

    deleteNoticia(id: number): void {
        this.noticias = this.noticias.filter(n => n.id !== id);
    }
}
