import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndicadoresRoutingModule } from './indicadores-routing.module';
import { EscuelasComponent } from './pages/escuelas/escuelas.component';


@NgModule({
  declarations: [
    EscuelasComponent
  ],
  imports: [
    CommonModule,
    IndicadoresRoutingModule
  ]
})
export class IndicadoresModule { }
