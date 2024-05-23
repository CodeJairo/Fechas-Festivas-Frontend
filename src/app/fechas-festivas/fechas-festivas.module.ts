import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FechasFestivasRoutingModule } from './fechas-festivas-routing.module';
import { ValidarPorFechaComponent } from './pages/validar-por-fecha/validar-por-fecha.component';
import { ValidarPorAnhoComponent } from './pages/validar-por-anho/validar-por-anho.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [
    ValidarPorFechaComponent,
    ValidarPorAnhoComponent,
    LayoutPageComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    FechasFestivasRoutingModule,
    SharedModule,
    MaterialModule,
    PrimengModule,
  ],
})
export class FechasFestivasModule {}
