import { Component, OnInit } from '@angular/core';
import { FestivoPorAnho } from '../../interfaces/festivo-anho.interface';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-anho',
  templateUrl: './validar-por-anho.component.html',
  styleUrl: './validar-por-anho.component.css',
})
export class ValidarPorAnhoComponent {
  public festivos: FestivoPorAnho[] = [];

  date: any;

  mostrarDiv: boolean = false;

  constructor(private festivosService: FestivosService) {}

  toggleDiv() {
    this.mostrarDiv = true;
  }

  validarFestivo() {
    console.log('validarFestivo');
    let dateObject = new Date(this.date); // Asegúrate de que this.date es una fecha válida
    let year = dateObject.getFullYear();
    if (!year) {
      console.error('Fecha no válida');
      return;
    }

    this.festivosService.getFestivosPorAnho(year).subscribe((festivos) => {
      this.festivos = festivos;
    });
  }
}
