import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscuelasComponent } from './pages/escuelas/escuelas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'schools',
        component: EscuelasComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndicadoresRoutingModule { }
