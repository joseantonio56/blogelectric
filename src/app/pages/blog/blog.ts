import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

  articuloAbierto: number | null = null;

  toggleArticulo(id: number): void {
    if (this.articuloAbierto === id) {
      this.articuloAbierto = null;
    } else {
      this.articuloAbierto = id;
    }
  }
}