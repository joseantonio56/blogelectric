
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  imports: [CommonModule],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {

  mostrarVentasBar = false;
  mostrarDashboard = false;
  mostrarCobro = false;
  mostrarComandas = false;

  mostrarBlogElectric = false;

  mostrarRehabilitacion = false;
  mostrarMegafonia = false;


  mostrarProyectoVentasBar(): void {

    this.mostrarVentasBar = !this.mostrarVentasBar;

    if (!this.mostrarVentasBar) {

      this.mostrarDashboard = false;
      this.mostrarCobro = false;
      this.mostrarComandas = false;

    }

  }


  mostrarProyectoDashboard(): void {

    this.mostrarDashboard = !this.mostrarDashboard;

  }


  mostrarProyectoCobro(): void {

    this.mostrarCobro = !this.mostrarCobro;

  }


  mostrarProyectoComandas(): void {

    this.mostrarComandas = !this.mostrarComandas;

  }


  mostrarProyectoBlogElectric(): void {

    this.mostrarBlogElectric = !this.mostrarBlogElectric;

  }


  mostrarProyectoRehabilitacion(): void {

    this.mostrarRehabilitacion = !this.mostrarRehabilitacion;

  }


  mostrarProyectoMegafonia(): void {

    this.mostrarMegafonia = !this.mostrarMegafonia;

  }

}

