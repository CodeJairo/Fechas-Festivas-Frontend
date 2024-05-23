import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { FloatLabelModule } from 'primeng/floatlabel';

@NgModule({
  exports: [FormsModule, CalendarModule, FloatLabelModule],
})
export class PrimengModule {}
