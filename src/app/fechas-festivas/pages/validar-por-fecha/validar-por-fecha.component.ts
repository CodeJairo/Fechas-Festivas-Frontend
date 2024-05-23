import { Component } from '@angular/core';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-fecha',
  templateUrl: './validar-por-fecha.component.html',
  styleUrl: './validar-por-fecha.component.css',
})
export class ValidarPorFechaComponent {
  public esFestivo: string = '';
  public anho: number = 2020;
  public mes: number = 1;
  public dia: number = 1;

  constructor(private festivosService: FestivosService) {}

  validarFestivoPorFecha(anho: number, mes: number, dia: number) {
    return this.festivosService
      .getFestivosPorFecha(anho, mes, dia)
      .subscribe((resp) => {
        this.esFestivo = resp;
      });
  }
}
