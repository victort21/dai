import { Component, OnInit } from '@angular/core';
import { EscuelaService } from '../../services/escuelas.service';
import { School } from '../../interfaces/schools';

@Component({
  selector: 'app-escuelas',
  templateUrl: './escuelas.component.html'
})
export class EscuelasComponent implements OnInit {

  indicadores :School[] = [];

  constructor(private schoolService: EscuelaService) {}

  ngOnInit(): void {
    this.schoolService.getIndicadoresSchool().subscribe({
      next: resp => {
        console.log(resp);
        this.indicadores = resp.contenido;
      },
      error: err => console.log(err),
    });
  }

}
