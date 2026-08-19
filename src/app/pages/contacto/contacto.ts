import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  nombre = '';
  email = '';
  asunto = '';
  mensaje = '';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  enviarFormulario(): void {

    const datos = new HttpParams()
      .set('nombre', this.nombre)
      .set('email', this.email)
      .set('asunto', this.asunto)
      .set('mensaje', this.mensaje);

    this.http.post(
      'https://formspree.io/f/maewpwyk',
      datos.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        responseType: 'text'
      }
    ).subscribe({
      next: () => {

        this.toastr.success(
          'El formulario se ha enviado correctamente.',
          'Mensaje enviado'
        );

        console.log('Formulario enviado correctamente');

        this.nombre = '';
        this.email = '';
        this.asunto = '';
        this.mensaje = '';
      },

      error: (error) => {

        console.error('Error al enviar el formulario:', error);

        this.toastr.error(
          'No se ha podido enviar el formulario.',
          'Error'
        );
      }
    });
  }
}