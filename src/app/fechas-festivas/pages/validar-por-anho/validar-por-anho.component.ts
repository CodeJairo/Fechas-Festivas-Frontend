import { Component, OnInit } from '@angular/core';
import { FestivoPorAnho } from '../../interfaces/festivo-anho.interface';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-anho',
  templateUrl: './validar-por-anho.component.html',
  styleUrl: './validar-por-anho.component.css',
})
export class ValidarPorAnhoComponent implements OnInit {
  public festivos: FestivoPorAnho[] = [];

  constructor(private festivosService: FestivosService) {}

  ngOnInit(): void {
    this.festivosService.getFestivosPorAnho(2020).subscribe((festivos) => {
      this.festivos = festivos;
    });
  }

  validarFestivo(anho: number) {
    this.festivosService.getFestivosPorAnho(anho).subscribe((festivos) => {
      this.festivos = festivos;
    });
  }
}
