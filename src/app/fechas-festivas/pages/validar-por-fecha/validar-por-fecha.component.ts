import { Component } from '@angular/core';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-fecha',
  templateUrl: './validar-por-fecha.component.html',
  styleUrl: './validar-por-fecha.component.css',
})
export class ValidarPorFechaComponent {
  date: any;

  public esFestivo: string = '';

  public anho: number = 2020;

  public mes: number = 1;

  public dia: number = 1;

  mostrarDiv: boolean = false;

  constructor(private festivosService: FestivosService) {}

  toggleDiv() {
    this.mostrarDiv = true;
  }

  validarFestivoPorFecha() {
    console.log('validarFestivoPorFecha');

    let dateObject = new Date(this.date);
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth();
    let day = dateObject.getDate();

    this.festivosService
      .getFestivosPorFecha(year, month, day)
      .subscribe((resp) => {
        this.esFestivo = resp;
      });

    console.log(this.esFestivo);
  }
}
